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
import { speakAndWait, stopSpeech, warmupSpeechVoices, getCurrentAudio, getCurrentWordBoundaries, type WordBoundary } from "@/lib/speech";
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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [sidebarCategory, setSidebarCategory] = useState<string | null>(null);
  const [showDetailDrawer, setShowDetailDrawer] = useState(false);
  const [hoveredBoundary, setHoveredBoundary] = useState<string | null>(null);
  const activeRouteRef = useRef<FlightRoute | null>(null);
  const narrationCancelledRef = useRef(false);
  const { activeSentenceIndex, activeSection, startHighlight, startHighlightSections, startHighlightWithTiming, stopHighlight } = useSentenceHighlight();

  // 初始化地形标注 — LOD 分级 + 沿地貌方向布局
  useEffect(() => {
    const layerId = "terrain-labels";
    labelManager.createLayer(layerId, "地形标注", 1);

    // 标签配置: LOD 级别 + 旋转角度 + 地貌类型
    // LOD 1 = 全国尺度可见, LOD 2 = 区域尺度可见, LOD 3 = 地点尺度可见
    const labelConfigs: Record<string, {
      lodLevel: 1 | 2 | 3;
      rotation?: number;
      terrainType?: "mountain" | "lake" | "desert" | "basin" | "river" | "plateau";
    }> = {
      // LOD 1 — 全国尺度 (大区域)
      "tianshan":        { lodLevel: 1, rotation: -8, terrainType: "mountain" },
      "kunlun":          { lodLevel: 1, rotation: -5, terrainType: "mountain" },
      "altai":           { lodLevel: 1, rotation: -35, terrainType: "mountain" },
      "junggar-basin":   { lodLevel: 1, terrainType: "basin" },
      "tarim-basin":     { lodLevel: 1, terrainType: "basin" },
      "taklamakan":      { lodLevel: 1, terrainType: "desert" },

      // LOD 2 — 区域尺度
      "karakoram":       { lodLevel: 2, rotation: -25, terrainType: "mountain" },
      "pamir":           { lodLevel: 2, terrainType: "plateau" },
      "ili-valley":      { lodLevel: 2, terrainType: "river" },
      "sayram":          { lodLevel: 2, terrainType: "lake" },
      "bosten":          { lodLevel: 2, terrainType: "lake" },
      "tarim-river":     { lodLevel: 2, rotation: 5, terrainType: "river" },
      "bogda":           { lodLevel: 2, rotation: -8, terrainType: "mountain" },

      // LOD 3 — 地点尺度
      "kanas":           { lodLevel: 3, terrainType: "lake" },
      "tianchi":          { lodLevel: 3, terrainType: "lake" },
      "flaming-mountains": { lodLevel: 3, terrainType: "mountain" },
      "bayanbulak":      { lodLevel: 3, terrainType: "plateau" },
      "gurbantunggut":   { lodLevel: 3, terrainType: "desert" },
      "lop-nur":         { lodLevel: 3, terrainType: "lake" },
      "kashgar":         { lodLevel: 3 },
      "turpan-city":     { lodLevel: 3 },
    };

    for (const terrain of allTerrains) {
      const config = labelConfigs[terrain.id];
      if (config) {
        const priority = config.lodLevel === 1 ? 100 : config.lodLevel === 2 ? 70 : 50;
        labelManager.addLabel(layerId, createTerrainLabel(
          terrain.id, terrain.name, terrain.lat, terrain.lon, priority,
          { lodLevel: config.lodLevel, rotation: config.rotation, terrainType: config.terrainType }
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
    async (text: string, onPlaying?: () => void): Promise<void> => {
      stopAudio();
      setIsSpeaking(true);
      try {
        await speakAndWait(text, SPEECH_RATE, onPlaying);
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

      // onPlaying 在 audio.onplaying 时触发
      // 此时 getCurrentWordBoundaries() 已包含 Edge TTS 返回的真实时间戳
      await speakText(ssml, () => {
        const wordBoundaries = getCurrentWordBoundaries();
        const audio = getCurrentAudio();
        if (wordBoundaries.length > 0 && audio) {
          startHighlightWithTiming(sections, wordBoundaries, audio);
        } else {
          startHighlightSections(sections);
        }
      });
      stopHighlight();
    },
    [speakText, startHighlightSections, startHighlightWithTiming, stopHighlight]
  );

  const showTerrainLesson = useCallback(
    async (terrain: TerrainPoint, options?: { flyoverOnly?: boolean }): Promise<void> => {
      setActiveTerrain(terrain);
      setDisplayCards(terrain.cards);
      setLesson(terrain.lesson);
      setError(null);

      if (options?.flyoverOnly) {
        await speakText(terrain.flyoverCue, () => {
          startHighlight(terrain.flyoverCue, "seeing");
        });
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

        // 等待叙述完成 — 高亮在音频真正播放时启动
        setIsSpeaking(true);
        try {
          await speakAndWait(ssmlScript, SPEECH_RATE, () => {
            const wordBoundaries = getCurrentWordBoundaries();
            const audio = getCurrentAudio();
            if (wordBoundaries.length > 0 && audio) {
              startHighlightWithTiming(highlightSections, wordBoundaries, audio);
            } else {
              startHighlightSections(highlightSections);
            }
          });
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
        setIsSpeaking(true);
        try {
          await speakAndWait(ssmlScript, SPEECH_RATE, () => {
            const wordBoundaries = getCurrentWordBoundaries();
            const audio = getCurrentAudio();
            if (wordBoundaries.length > 0 && audio) {
              startHighlightWithTiming(citySections, wordBoundaries, audio);
            } else {
              startHighlightSections(citySections);
            }
          });
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

      // 高亮地貌边界
      const boundaryId = `${terrain.id}-boundary`;
      mapRef.current?.highlightBoundary(boundaryId);

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
    mapRef.current?.resetBoundaries();
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
    <div className="relative flex h-screen w-screen overflow-hidden bg-[#0a0e12]">
      {/* Map layer — full bleed, always behind everything */}
      <div className="absolute inset-0 z-0">
        <CesiumMap
          ref={mapRef}
          onTerrainMode={setTerrainMode}
          onBoundaryHover={setHoveredBoundary}
        />
        {mode === "explore" && (
          <CesiumOverlayLabels
            mapRef={mapRef}
            terrains={allTerrains}
            isRouteFlying={isRouteFlying}
            onSelectTerrain={handleSelectTerrain}
            hoveredBoundary={hoveredBoundary}
          />
        )}
        {terrainMode === "ellipsoid" && mode === "explore" && (
          <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 max-w-md -translate-x-1/2 rounded-lg border border-amber-500/20 bg-[#0a0e12]/80 px-4 py-2 text-center text-[11px] text-amber-200/60">
            未启用 Cesium 全球地形。请配置{" "}
            <code className="text-amber-300/70">NEXT_PUBLIC_CESIUM_ION_TOKEN</code>
          </div>
        )}
      </div>

      {/* Header — ultra minimal, floating */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-2 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-amber-300/25">
            Flight Geography Explorer
          </p>
          <span className="text-white/[0.04]">|</span>
          <p className="text-[9px] text-white/15 tracking-wide">
            新疆 · {terrainCount}
          </p>
        </div>
        <div className="flex items-center gap-0.5 pointer-events-auto">
          <ModeTab active={mode === "explore"} onClick={() => setMode("explore")} label="探索" />
          <ModeTab active={mode === "photo"} onClick={() => setMode("photo")} label="照片" />
        </div>
      </header>

      {/* Left sidebar — collapsible terrain browser */}
      {mode === "explore" && (
        <div
          className={`absolute top-10 bottom-0 left-0 z-20 flex flex-col transition-all duration-300 ease-out ${
            sidebarCollapsed ? "w-[60px]" : "w-[280px]"
          }`}
        >
          {/* Sidebar background */}
          <div className="absolute inset-0 bg-[#0a0e12]/50 backdrop-blur-md border-r border-white/[0.04]" />

          {/* Sidebar content */}
          <div className="relative flex flex-col h-full">
            {/* Toggle button */}
            <button
              type="button"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="flex items-center justify-center h-10 shrink-0 text-white/30 hover:text-white/60 transition-colors"
            >
              <span className="text-[11px]">{sidebarCollapsed ? "▸" : "◂"}</span>
            </button>

            {/* Category list */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              {sidebarCollapsed ? (
                /* Collapsed: single characters */
                <div className="flex flex-col items-center gap-1 py-2">
                  {terrainGroups.map((group) => (
                    <button
                      key={group.category}
                      type="button"
                      onClick={() => {
                        setSidebarCollapsed(false);
                      }}
                      className="flex h-9 w-9 items-center justify-center rounded-md text-[13px] text-white/40 hover:text-white/70 hover:bg-white/[0.04] transition-all"
                      title={group.label}
                    >
                      {group.label.charAt(0)}
                    </button>
                  ))}
                  <div className="my-2 h-px w-6 bg-white/[0.06]" />
                  <button
                    type="button"
                    onClick={() => setSidebarCollapsed(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-md text-[13px] text-white/40 hover:text-white/70 hover:bg-white/[0.04] transition-all"
                    title="飞行路线"
                  >
                    航
                  </button>
                </div>
              ) : (
                /* Expanded: explorer mode */
                <div className="px-3 py-2">
                  {sidebarCategory ? (
                    /* Category selected — show terrains */
                    <div>
                      <button
                        type="button"
                        onClick={() => setSidebarCategory(null)}
                        className="flex items-center gap-1 mb-3 text-[11px] text-white/40 hover:text-white/60 transition-colors"
                      >
                        <span>←</span>
                        <span>返回</span>
                      </button>

                      <p className="text-[12px] font-medium text-white/60 mb-3">
                        {terrainGroups.find(g => g.category === sidebarCategory)?.label}
                      </p>

                      <div className="space-y-1">
                        {terrainGroups.find(g => g.category === sidebarCategory)?.terrains.map((t) => (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => handleSelectTerrain(t)}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                              activeTerrain?.id === t.id
                                ? "text-white/80 bg-white/[0.06]"
                                : "text-white/40 hover:text-white/65 hover:bg-white/[0.03]"
                            }`}
                          >
                            <p className="text-[12px]">{t.name}</p>
                            <p className="text-[10px] text-white/20 mt-0.5">
                              {t.elevation.toLocaleString("zh-CN")}m
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Category list */
                    <div>
                      <p className="text-[10px] font-medium text-white/20 uppercase tracking-wider mb-3">
                        地貌探索
                      </p>

                      <div className="space-y-1">
                        {terrainGroups.map((group) => (
                          <button
                            key={group.category}
                            type="button"
                            onClick={() => setSidebarCategory(group.category)}
                            className="w-full text-left px-3 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[12px] text-white/50">{group.label}</span>
                              <span className="text-[10px] text-white/20">{group.terrains.length}</span>
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="my-3 h-px bg-white/[0.06]" />
                      <p className="text-[10px] font-medium text-white/20 uppercase tracking-wider mb-2">飞行路线</p>
                      <RouteControls
                        routes={routes}
                        activeRouteId={activeRouteId}
                        isFlying={isRouteFlying || routePreparing}
                        onStartRoute={handleStartRoute}
                        onStopRoute={handleStopRoute}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Welcome guide — first-time entry */}
      {mode === "explore" && !activeTerrain && !isRouteFlying && (
        <div className="absolute top-10 right-3 z-20 w-[280px] pointer-events-auto">
          <div className="rounded-xl bg-[#0a0e12]/50 backdrop-blur-md border border-white/[0.05] p-4">
            <h3 className="text-[14px] font-medium text-white/75 mb-1">新疆空中地貌探索</h3>
            <p className="text-[11px] text-white/30 mb-3">
              从飞机窗外看中国地形
            </p>
            <p className="text-[10px] text-white/20 mb-3">
              点击地图上的地貌或左侧分类开始探索
            </p>
            <button
              type="button"
              onClick={() => {
                // 选择第一个地形开始导览
                const firstTerrain = allTerrains.find(t => t.id === "tianshan");
                if (firstTerrain) handleSelectTerrain(firstTerrain);
              }}
              className="w-full rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2 text-[11px] font-medium text-amber-300/70 transition hover:bg-amber-500/20 hover:text-amber-300"
            >
              开始导览
            </button>
          </div>
        </div>
      )}

      {/* Right summary card — top-right, documentary entry */}
      {mode === "explore" && activeTerrain && !showDetailDrawer && (
        <div className="absolute top-10 right-3 z-20 w-[300px] pointer-events-auto">
          <div className="rounded-xl bg-[#0a0e12]/50 backdrop-blur-md border border-white/[0.05] p-4">
            {/* 地貌名称 + 海拔 */}
            <div className="mb-2">
              <h3 className="text-[15px] font-medium text-white/85">{activeTerrain.name}</h3>
              <p className="text-[10px] text-white/25 mt-0.5">
                海拔 {activeTerrain.elevation.toLocaleString("zh-CN")}m
              </p>
            </div>

            {/* 飞机窗外 — 纪录片第一视角 */}
            {lesson?.seeing && (
              <p className="text-[11px] leading-relaxed text-white/35 mb-3 line-clamp-2">
                {lesson.seeing.slice(0, 50)}...
              </p>
            )}

            {/* 主按钮: 开始讲解 */}
            <button
              type="button"
              onClick={() => { if (lesson) void speakLessonWithHighlight(lesson); }}
              className="w-full rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2 text-[12px] font-medium text-amber-300/80 transition hover:bg-amber-500/20 hover:text-amber-300 mb-2"
            >
              {isSpeaking ? "停止讲解" : "开始讲解"}
            </button>

            {/* 次按钮: 查看详情 */}
            <button
              type="button"
              onClick={() => setShowDetailDrawer(true)}
              className="w-full rounded-lg bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/30 transition hover:bg-white/[0.06] hover:text-white/50"
            >
              查看详情
            </button>
          </div>
        </div>
      )}

      {/* Detail drawer — right side, full height */}
      {mode === "explore" && showDetailDrawer && activeTerrain && (
        <div className="absolute top-0 right-0 bottom-0 z-20 w-[400px] pointer-events-auto">
          <div className="h-full bg-[#0a0e12]/60 backdrop-blur-lg border-l border-white/[0.04] flex flex-col">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.04]">
              <div>
                <h3 className="text-[15px] font-medium text-white/85">{activeTerrain.name}</h3>
                <p className="text-[10px] text-white/25">
                  海拔 {activeTerrain.elevation.toLocaleString("zh-CN")}m
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowDetailDrawer(false)}
                className="text-white/30 hover:text-white/60 transition-colors text-[14px]"
              >
                ✕
              </button>
            </div>

            {/* Drawer content */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">
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
                onSpeak={() => { if (lesson) void speakLessonWithHighlight(lesson); }}
                onStopSpeak={stopSpeaking}
                activeSentenceIndex={activeSentenceIndex}
                activeSection={activeSection}
                embedded
              />
            </div>
          </div>
        </div>
      )}

      {/* Photo mode overlay */}
      {mode === "photo" && (
        <div className="absolute top-10 right-3 bottom-3 z-20 w-[300px] pointer-events-auto">
          <div className="h-full rounded-xl bg-[#0a0e12]/40 backdrop-blur-md border border-white/[0.04] p-4 overflow-y-auto">
            <PhotoModePanel onSpeak={speakText} embedded />
          </div>
        </div>
      )}
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
