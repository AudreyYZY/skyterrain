"use client";

import CesiumMap, {
  type CesiumMapHandle,
  type TerrainMode,
} from "@/components/CesiumMap";
import CesiumOverlayLabels from "@/components/CesiumOverlayLabels";
import FlightControls from "@/components/FlightControls";
import NarrationPanel from "@/components/NarrationPanel";
import PhotoModePanel from "@/components/PhotoModePanel";
import ResizablePanel from "@/components/ResizablePanel";
import RouteControls from "@/components/RouteControls";
import { URUMQI_CARDS, URUMQI_LESSON, KASHGAR_CARDS, KASHGAR_LESSON, HOTAN_CARDS, HOTAN_LESSON, TURPAN_CITY_CARDS, TURPAN_CITY_LESSON } from "@/lib/city-lessons";
import { labelManager, createTerrainLabel } from "@/lib/cinematic-labels";
import { lessonToSpeech, lessonToSSML } from "@/lib/lesson";
import { narrationQueue } from "@/lib/narration-queue";
import {
  getAllRoutes,
  type ResolvedWaypoint,
} from "@/lib/routes";
import { speakAndWait, stopSpeech, warmupSpeechVoices } from "@/lib/speech";
import { getAllTerrains, getTerrainsByCategory } from "@/lib/terrain";
import type { FlightRoute } from "@/types/route";
import type { TerrainCards, TerrainLesson, TerrainPoint } from "@/types/terrain";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSentenceHighlight } from "@/components/useSentenceHighlight";

const terrainGroups = getTerrainsByCategory();
const allTerrains = getAllTerrains();
const routes = getAllRoutes();

type AppMode = "explore" | "photo";

const CITY_CARDS: Record<string, TerrainCards> = {
  urumqi: URUMQI_CARDS,
  kashgar: KASHGAR_CARDS,
  hotan: HOTAN_CARDS,
  "turpan-city": TURPAN_CITY_CARDS,
};

const CITY_LESSONS: Record<string, TerrainLesson> = {
  urumqi: URUMQI_LESSON,
  kashgar: KASHGAR_LESSON,
  hotan: HOTAN_LESSON,
  "turpan-city": TURPAN_CITY_LESSON,
};

const ROUTE_END_LESSON: TerrainLesson = {
  seeing: "北疆经典航线飞行结束。你已从乌鲁木齐飞越天山、赛里木湖至伊犁河谷。欢迎继续探索左侧其他地貌，或使用照片模式识别舷窗实景。",
  formation: "",
  history: "",
};

const SPEECH_RATE = 0.88;

/** 叙述后的停留时间（毫秒） — 让用户消化内容 */
const POST_NARRATION_DWELL_MS = 2000;

export default function ExplorerApp() {
  const mapRef = useRef<CesiumMapHandle>(null);
  const [mode, setMode] = useState<AppMode>("explore");
  const [activeTerrain, setActiveTerrain] = useState<TerrainPoint | null>(null);
  const [displayCards, setDisplayCards] = useState<TerrainCards | null>(null);
  const [lesson, setLesson] = useState<TerrainLesson | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [terrainMode, setTerrainMode] = useState<TerrainMode | null>(null);
  const [isRouteFlying, setIsRouteFlying] = useState(false);
  const [routePreparing, setRoutePreparing] = useState(false);
  const [activeRouteId, setActiveRouteId] = useState<string | null>(null);
  const [isFlyover, setIsFlyover] = useState(false);
  const activeRouteRef = useRef<FlightRoute | null>(null);
  const narrationCancelledRef = useRef(false);
  const { activeSentenceIndex, activeSection, startHighlight, startHighlightSections, stopHighlight } = useSentenceHighlight();

  // 初始化地形标注 — 主要地标显示在地图上
  useEffect(() => {
    const layerId = "terrain-labels";
    labelManager.createLayer(layerId, "地形标注", 1);

    // 6 个主要地标 — 全景可见，大字号，纪录片风格
    const majorIds = ["tianshan", "kunlun", "altai", "junggar-basin", "tarim-basin", "taklamakan"];
    // 次优先级 — 中景可见
    const secondary = ["karakoram", "pamir", "kanas", "sayram", "lop-nur", "turpan-city", "ili-valley", "kashgar", "bosten"];
    // 较低优先级 — 近景可见
    const tertiary = ["gurbantunggut", "tarim-river", "flaming-mountains", "bayanbulak"];

    for (const terrain of allTerrains) {
      let priority = 0;
      let major = false;
      if (majorIds.includes(terrain.id)) { priority = 100; major = true; }
      else if (secondary.includes(terrain.id)) priority = 70;
      else if (tertiary.includes(terrain.id)) priority = 50;
      if (priority > 0) {
        labelManager.addLabel(layerId, createTerrainLabel(
          terrain.id, terrain.name, terrain.lat, terrain.lon, priority, major
        ));
      }
    }
  }, []);

  // 注册叙述队列的语音函数
  useEffect(() => {
    narrationQueue.register(
      async (text, rate) => {
        setIsSpeaking(true);
        try {
          await speakAndWait(text, rate);
        } finally {
          setIsSpeaking(false);
        }
      },
      () => {
        stopSpeech();
        setIsSpeaking(false);
      }
    );
  }, []);

  /** 停止音频播放（不影响高亮状态） */
  const stopAudio = useCallback(() => {
    narrationQueue.cancel();
    stopSpeech();
    setIsSpeaking(false);
  }, []);

  /** 停止音频 + 高亮（用户主动取消时调用） */
  const stopSpeaking = useCallback(() => {
    stopAudio();
    stopHighlight();
  }, [stopAudio, stopHighlight]);

  const speakText = useCallback(
    async (text: string): Promise<void> => {
      stopAudio();
      setIsSpeaking(true);
      try {
        await speakAndWait(text, SPEECH_RATE);
      } finally {
        setIsSpeaking(false);
      }
    },
    [stopAudio]
  );

  useEffect(() => {
    warmupSpeechVoices();
  }, []);

  /** 朗读 lesson 并同步高亮 — 自动播报和手动朗读共用 */
  const speakLessonWithHighlight = useCallback(
    async (lesson: TerrainLesson): Promise<void> => {
      const ssml = lessonToSSML(lesson);
      const sections = [
        { key: "seeing", text: lesson.seeing },
        { key: "formation", text: lesson.formation },
        { key: "history", text: lesson.history },
        { key: "observation", text: lesson.observation ?? "" },
      ].filter(s => s.text.trim().length > 0);
      console.log("[speakLessonWithHighlight] BEFORE startHighlightSections, sections:", sections.length, "lesson:", lesson.seeing?.slice(0, 20));
      startHighlightSections(sections);
      console.log("[speakLessonWithHighlight] AFTER startHighlightSections");
      await speakText(ssml);
      console.log("[speakLessonWithHighlight] speakText done, calling stopHighlight");
      stopHighlight();
    },
    [speakText, startHighlightSections, stopHighlight]
  );

  const showTerrainLesson = useCallback(
    async (terrain: TerrainPoint, options?: { flyoverOnly?: boolean }): Promise<void> => {
      setActiveTerrain(terrain);
      setDisplayCards(terrain.cards);
      setLesson(terrain.lesson);
      setError(null);

      if (options?.flyoverOnly) {
        startHighlight(terrain.flyoverCue, "seeing");
        await speakText(terrain.flyoverCue);
        stopHighlight();
      } else {
        await speakLessonWithHighlight(terrain.lesson);
      }
    },
    [speakText, startHighlight, speakLessonWithHighlight, stopHighlight]
  );

  /**
   * 航点叙述 — 等待叙述完成后再返回
   * 关键：这里返回 Promise，CesiumMap 的 flyRoute 会 await 它
   */
  const narrateWaypoint = useCallback(
    async (waypoint: ResolvedWaypoint): Promise<void> => {
      if (narrationCancelledRef.current) return;

      const terrain = waypoint.terrain;
      const cityLesson = CITY_LESSONS[waypoint.id];
      const cityCards = CITY_CARDS[waypoint.id];

      // 更新 UI 状态
      if (terrain) {
        setIsFlyover(true);
        setActiveTerrain(terrain);
        setDisplayCards(terrain.cards);
        setLesson(terrain.lesson);
        setError(null);

        // 添加地形标注到电影级标注层
        const layerId = "route-waypoints";
        if (!labelManager.getLayers().find(l => l.id === layerId)) {
          labelManager.createLayer(layerId, "航线航点", 10);
        }
        labelManager.addLabel(layerId, createTerrainLabel(
          terrain.id, terrain.name, terrain.lat, terrain.lon, 80
        ));
        labelManager.setFocusedTerrain(terrain.id);

        // 生成 SSML 叙述脚本（飞越提示 + 详细讲解，含自然停顿）
        const plainLesson = lessonToSpeech(terrain.lesson);
        const ssmlScript = `${terrain.flyoverCue} ${plainLesson}`;

        // 全 section 高亮 — 与 StructuredLesson 渲染顺序一致
        const highlightSections = [
          { key: "seeing", text: terrain.lesson.seeing },
          { key: "formation", text: terrain.lesson.formation },
          { key: "history", text: terrain.lesson.history },
          { key: "observation", text: terrain.lesson.observation ?? "" },
        ].filter(s => s.text.trim().length > 0);
        startHighlightSections(highlightSections);

        // 等待叙述完成
        setIsSpeaking(true);
        try {
          await speakAndWait(ssmlScript, SPEECH_RATE);
        } finally {
          setIsSpeaking(false);
          stopHighlight();
        }

        // 叙述后停留 — 让用户消化
        if (!narrationCancelledRef.current) {
          await new Promise(r => setTimeout(r, POST_NARRATION_DWELL_MS));
        }
      } else if (cityLesson && cityCards) {
        setActiveTerrain(null);
        setDisplayCards(cityCards);
        setLesson(cityLesson);
        setIsFlyover(true);
        setError(null);

        const ssmlScript = lessonToSSML(cityLesson);
        const citySections = [
          { key: "seeing", text: cityLesson.seeing },
          { key: "formation", text: cityLesson.formation },
          { key: "history", text: cityLesson.history },
          { key: "observation", text: cityLesson.observation ?? "" },
        ].filter(s => s.text.trim().length > 0);
        startHighlightSections(citySections);
        setIsSpeaking(true);
        try {
          await speakAndWait(ssmlScript, SPEECH_RATE);
        } finally {
          setIsSpeaking(false);
          stopHighlight();
        }

        if (!narrationCancelledRef.current) {
          await new Promise(r => setTimeout(r, POST_NARRATION_DWELL_MS));
        }
      }
    },
    [startHighlight, startHighlightSections, stopHighlight]
  );

  const handleSelectTerrain = useCallback(
    async (terrain: TerrainPoint): Promise<void> => {
      console.log("[ExplorerApp] handleSelectTerrain:", terrain.id, terrain.name);

      // 取消正在进行的航线和叙述
      narrationCancelledRef.current = true;
      narrationQueue.cancel();
      mapRef.current?.stopFlight();
      setIsRouteFlying(false);
      setRoutePreparing(false);
      setActiveRouteId(null);
      activeRouteRef.current = null;
      setIsFlyover(false);
      setError(null);

      // 重置取消标志
      narrationCancelledRef.current = false;

      // 更新标注层 — 只清除探索层，保留地形标注层
      labelManager.removeLayer("explore-labels");
      const layerId = "explore-labels";
      labelManager.createLayer(layerId, "探索标注", 5);
      labelManager.addLabel(layerId, createTerrainLabel(
        terrain.id, terrain.name, terrain.lat, terrain.lon, 100
      ));
      labelManager.setFocusedTerrain(terrain.id);

      try {
        // 1) 镜头飞到目标地貌，等待飞行动画完成
        console.log("[ExplorerApp] fly start:", terrain.id);
        await (mapRef.current?.flyToTerrainAndWait(terrain) ?? Promise.resolve());
        console.log("[ExplorerApp] fly complete:", terrain.id);

        // 2) 展示讲解并等待语音播放完毕
        console.log("[ExplorerApp] narration start:", terrain.id);
        await showTerrainLesson(terrain);
        console.log("[ExplorerApp] narration complete:", terrain.id);

        // 3) 停留片刻，让用户看完地形
        await new Promise(r => setTimeout(r, POST_NARRATION_DWELL_MS));
      } catch (err) {
        console.error("[ExplorerApp] handleSelectTerrain error:", err);
        setError(err instanceof Error ? err.message : "地形选择失败");
      }
    },
    [showTerrainLesson]
  );

  const handleStartRoute = useCallback(
    (route: FlightRoute) => {
      // 取消之前的叙述
      narrationCancelledRef.current = true;
      narrationQueue.cancel();

      // 短暂延迟确保取消生效
      setTimeout(() => {
        narrationCancelledRef.current = false;

        mapRef.current?.stopFlight();
        activeRouteRef.current = route;
        setIsRouteFlying(true);
        setRoutePreparing(true);
        setActiveRouteId(route.id);
        setIsFlyover(false);
        setError(null);
        setLesson(null);
        setActiveTerrain(null);
        setDisplayCards(null);

        // 初始化航线标注层
        labelManager.clear();
        const layerId = "route-waypoints";
        labelManager.createLayer(layerId, "航线航点", 10);

        mapRef.current?.flyRoute(route, {
          onPreparingRoute: () => setRoutePreparing(true),
          onRouteReady: () => setRoutePreparing(false),
          onWaypointArrival: async (waypoint) => {
            // 关键：await 叙述完成，镜头在航点等待
            await narrateWaypoint(waypoint);
          },
          onComplete: async () => {
            setIsRouteFlying(false);
            setRoutePreparing(false);
            setActiveRouteId(null);
            activeRouteRef.current = null;
            setActiveTerrain(null);
            setDisplayCards(null);
            setLesson(ROUTE_END_LESSON);

            // 等待结束语叙述完成（SSML 格式）
            const endSSML = ROUTE_END_LESSON.seeing;
            setIsSpeaking(true);
            try {
              await speakAndWait(endSSML, SPEECH_RATE);
            } finally {
              setIsSpeaking(false);
            }
          },
          onCancelled: () => {
            narrationCancelledRef.current = true;
            narrationQueue.cancel();
            setIsRouteFlying(false);
            setRoutePreparing(false);
            setActiveRouteId(null);
            activeRouteRef.current = null;
          },
        });
      }, 50);
    },
    [narrateWaypoint]
  );

  const handleStopRoute = useCallback(() => {
    narrationCancelledRef.current = true;
    narrationQueue.cancel();
    mapRef.current?.stopFlight();
    setIsRouteFlying(false);
    setRoutePreparing(false);
    setActiveRouteId(null);
    activeRouteRef.current = null;
    stopSpeaking();
    labelManager.clear();
  }, [stopSpeaking]);

  const terrainCount = terrainGroups.reduce(
    (n, g) => n + g.terrains.length,
    0
  );

  const panelTitle =
    activeTerrain?.name ??
    (displayCards ? "乌鲁木齐" : isRouteFlying ? "航线飞行中" : "等待飞越");

  const panelSubtitle = activeTerrain
    ? `海拔约 ${activeTerrain.elevation.toLocaleString("zh-CN")} 米`
    : routePreparing
      ? "正在预加载航线地形…"
      : undefined;

  const cardsForPanel = activeTerrain?.cards ?? displayCards;

  return (
    <div className="relative flex h-screen w-screen flex-col overflow-hidden bg-[#0a0e12]">
      {/* Minimal translucent header */}
      <header className="relative z-20 flex shrink-0 items-center justify-between bg-transparent px-6 py-2.5">
        <div className="flex items-center gap-3">
          <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-amber-300/30">
            Flight Geography Explorer
          </p>
          <span className="text-white/[0.06]">|</span>
          <p className="text-[10px] text-white/20 tracking-wide">
            新疆 · {terrainCount} 处
          </p>
        </div>
        <div className="flex items-center gap-0.5">
          <ModeTab
            active={mode === "explore"}
            onClick={() => setMode("explore")}
            label="探索"
          />
          <ModeTab
            active={mode === "photo"}
            onClick={() => setMode("photo")}
            label="照片"
          />
        </div>
      </header>

      {/* Map layer — full bleed */}
      <div className="absolute inset-0 z-0">
        <CesiumMap
          ref={mapRef}
          onTerrainMode={setTerrainMode}
        />
        {/* Spatial awareness labels — cinematic map annotations */}
        {mode === "explore" && (
          <CesiumOverlayLabels
            mapRef={mapRef}
            terrains={allTerrains}
            isRouteFlying={isRouteFlying}
            onSelectTerrain={handleSelectTerrain}
          />
        )}
        {terrainMode === "ellipsoid" && mode === "explore" && (
          <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 max-w-md -translate-x-1/2 rounded-lg border border-amber-500/20 bg-[#0a0e12]/80 px-4 py-2 text-center text-[11px] text-amber-200/60 backdrop-blur-sm">
            未启用 Cesium 全球地形。请配置{" "}
            <code className="text-amber-300/70">NEXT_PUBLIC_CESIUM_ION_TOKEN</code>
          </div>
        )}
      </div>

      {/* Overlay layer — floating panels */}
      <div className="pointer-events-none absolute inset-x-0 top-12 bottom-0 z-10 flex w-full">
        {/* Left panel — terrain list */}
        {mode === "explore" && (
          <ResizablePanel
            side="left"
            storageKey="fge-panel-left"
            title="目的地"
            subtitle={`新疆 · ${terrainCount} 处`}
          >
            <FlightControls
              groups={terrainGroups}
              activeId={activeTerrain?.id ?? null}
              onSelect={handleSelectTerrain}
            />
            <RouteControls
              routes={routes}
              activeRouteId={activeRouteId}
              isFlying={isRouteFlying || routePreparing}
              onStartRoute={handleStartRoute}
              onStopRoute={handleStopRoute}
            />
          </ResizablePanel>
        )}

        {/* Spacer pushes right panel to the edge */}
        <div className="min-w-0 flex-1" />

        {/* Right overlay — floating narration panel */}
        {mode === "explore" ? (
          <div className="pointer-events-auto mr-3 mb-4 mt-4 flex w-[320px] shrink-0 flex-col rounded-2xl bg-[#0a0e12]/30 p-5 backdrop-blur-xl border border-white/[0.04] cinematic-enter max-h-[calc(100vh-5rem)]">
            <NarrationPanel
              title={panelTitle}
              subtitle={panelSubtitle}
              cards={cardsForPanel}
              lesson={lesson}
              knowledge={activeTerrain?.knowledge ?? null}
              error={error}
              isFlyover={isFlyover}
              isRouteFlying={isRouteFlying}
              isSpeaking={isSpeaking}
              onSpeak={() => { console.log("[onSpeak] clicked, lesson:", lesson?.seeing?.slice(0, 20)); if (lesson) void speakLessonWithHighlight(lesson); }}
              onStopSpeak={stopSpeaking}
              activeSentenceIndex={activeSentenceIndex}
              activeSection={activeSection}
              embedded
            />
          </div>
        ) : (
          <div className="pointer-events-auto mr-3 mb-4 mt-4 flex w-[300px] shrink-0 flex-col rounded-2xl bg-[#0a0e12]/40 p-4 backdrop-blur-xl border border-white/[0.04] cinematic-enter max-h-[calc(100vh-5rem)]">
            <PhotoModePanel onSpeak={speakText} embedded />
          </div>
        )}
      </div>
    </div>
  );
}

function ModeTab({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-md px-2 py-0.5 text-[10px] font-medium transition-all duration-200",
        active
          ? "bg-white/[0.08] text-white/70"
          : "text-white/20 hover:text-white/40",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
