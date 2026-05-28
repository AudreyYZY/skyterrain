"use client";

import CesiumMap, {
  type CesiumMapHandle,
  type TerrainMode,
} from "@/components/CesiumMap";
import FlightControls from "@/components/FlightControls";
import NarrationPanel from "@/components/NarrationPanel";
import PhotoModePanel from "@/components/PhotoModePanel";
import ResizablePanel from "@/components/ResizablePanel";
import RouteControls from "@/components/RouteControls";
import { URUMQI_CARDS, URUMQI_LESSON, KASHGAR_CARDS, KASHGAR_LESSON, HOTAN_CARDS, HOTAN_LESSON, TURPAN_CITY_CARDS, TURPAN_CITY_LESSON } from "@/lib/city-lessons";
import { lessonToSpeech } from "@/lib/lesson";
import {
  getAllRoutes,
  type ResolvedWaypoint,
} from "@/lib/routes";
import { speakAndWait, stopSpeech, warmupSpeechVoices } from "@/lib/speech";
import { getTerrainsByCategory } from "@/lib/terrain";
import type { FlightRoute } from "@/types/route";
import type { TerrainCards, TerrainLesson, TerrainPoint } from "@/types/terrain";
import { useCallback, useEffect, useRef, useState } from "react";

const terrainGroups = getTerrainsByCategory();
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
  seeing: "北疆经典航线飞行结束。你已从乌鲁木齐飞越天山、赛里木湖至伊犁河谷。",
  formation: "",
  history: "",
  funFact: "欢迎继续探索左侧其他地貌，或使用照片模式识别舷窗实景。",
};

const SPEECH_RATE = 0.88;

async function dwellAfterNarration(
  route: FlightRoute | null,
  elapsedMs: number
): Promise<void> {
  const minMs = (route?.dwellSecAtWaypoint ?? 6) * 1000;
  const extra = Math.max(0, minMs - elapsedMs);
  if (extra > 0) {
    await new Promise((r) => setTimeout(r, extra));
  }
}

export default function ExplorerApp() {
  const mapRef = useRef<CesiumMapHandle>(null);
  const [mode, setMode] = useState<AppMode>("explore");
  const [activeTerrain, setActiveTerrain] = useState<TerrainPoint | null>(null);
  const [displayCards, setDisplayCards] = useState<TerrainCards | null>(null);
  const [lesson, setLesson] = useState<TerrainLesson | null>(null);
  const [aiEnhancing, setAiEnhancing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [terrainMode, setTerrainMode] = useState<TerrainMode | null>(null);
  const [isRouteFlying, setIsRouteFlying] = useState(false);
  const [routePreparing, setRoutePreparing] = useState(false);
  const [activeRouteId, setActiveRouteId] = useState<string | null>(null);
  const [isFlyover, setIsFlyover] = useState(false);
  const activeRouteRef = useRef<FlightRoute | null>(null);

  const stopSpeaking = useCallback(() => {
    stopSpeech();
    setIsSpeaking(false);
  }, []);

  const speakText = useCallback(
    async (text: string): Promise<void> => {
      stopSpeaking();
      setIsSpeaking(true);
      try {
        await speakAndWait(text, SPEECH_RATE);
      } finally {
        setIsSpeaking(false);
      }
    },
    [stopSpeaking]
  );

  useEffect(() => {
    warmupSpeechVoices();
  }, []);

  const showTerrainLesson = useCallback(
    async (terrain: TerrainPoint, options?: { flyoverOnly?: boolean }): Promise<void> => {
      setActiveTerrain(terrain);
      setDisplayCards(terrain.cards);
      setLesson(terrain.lesson);
      setError(null);

      if (options?.flyoverOnly) {
        await speakText(terrain.flyoverCue);
      } else {
        await speakText(lessonToSpeech(terrain.lesson));
      }
    },
    [speakText]
  );

  const enhanceLessonWithAi = useCallback(async () => {
    if (!activeTerrain) return;

    setAiEnhancing(true);
    setError(null);

    try {
      const res = await fetch("/api/narration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ terrainId: activeTerrain.id }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "AI 优化失败");
      }

      if (data.lesson) {
        setLesson(data.lesson as TerrainLesson);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "AI 优化失败");
    } finally {
      setAiEnhancing(false);
    }
  }, [activeTerrain]);

  const narrateWaypoint = useCallback(
    (waypoint: ResolvedWaypoint): void => {
      if (waypoint.terrain) {
        setIsFlyover(true);
        setActiveTerrain(waypoint.terrain);
        setDisplayCards(waypoint.terrain.cards);
        setLesson(waypoint.terrain.lesson);
        setError(null);

        const script = `${waypoint.terrain.flyoverCue}\n${lessonToSpeech(waypoint.terrain.lesson)}`;
        setIsSpeaking(true);
        speakAndWait(script, SPEECH_RATE).finally(() => setIsSpeaking(false));
      } else {
        const cityLesson = CITY_LESSONS[waypoint.id];
        const cityCards = CITY_CARDS[waypoint.id];
        if (cityLesson && cityCards) {
          setActiveTerrain(null);
          setDisplayCards(cityCards);
          setLesson(cityLesson);
          setIsFlyover(true);
          setError(null);

          const script = lessonToSpeech(cityLesson);
          setIsSpeaking(true);
          speakAndWait(script, SPEECH_RATE).finally(() => setIsSpeaking(false));
        }
      }
    },
    []
  );

  const handleSelectTerrain = useCallback(
    async (terrain: TerrainPoint): Promise<void> => {
      mapRef.current?.stopFlight();
      setIsRouteFlying(false);
      setRoutePreparing(false);
      setActiveRouteId(null);
      activeRouteRef.current = null;
      setIsFlyover(false);
      setError(null);
      setAiEnhancing(false);

      // 1) 镜头飞到目标地貌，等待飞行动画完成
      await (mapRef.current?.flyToTerrainAndWait(terrain) ?? Promise.resolve());

      // 2) 展示讲解并等待语音播放完毕
      await showTerrainLesson(terrain);

      // 3) 停留片刻，让用户看完地形
      await dwellAfterNarration(null, 0);
    },
    [showTerrainLesson]
  );

  const handleStartRoute = useCallback(
    (route: FlightRoute) => {
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

      mapRef.current?.flyRoute(route, {
        onPreparingRoute: () => setRoutePreparing(true),
        onRouteReady: () => setRoutePreparing(false),
        onWaypointArrival: (waypoint) => {
          narrateWaypoint(waypoint);
        },
        onComplete: () => {
          setIsRouteFlying(false);
          setRoutePreparing(false);
          setActiveRouteId(null);
          activeRouteRef.current = null;
          setActiveTerrain(null);
          setDisplayCards(null);
          setLesson(ROUTE_END_LESSON);
          void speakAndWait(ROUTE_END_LESSON.seeing, SPEECH_RATE);
        },
        onCancelled: () => {
          setIsRouteFlying(false);
          setRoutePreparing(false);
          setActiveRouteId(null);
          activeRouteRef.current = null;
        },
      });
    },
    [narrateWaypoint]
  );

  const handleStopRoute = useCallback(() => {
    mapRef.current?.stopFlight();
    setIsRouteFlying(false);
    setRoutePreparing(false);
    setActiveRouteId(null);
    activeRouteRef.current = null;
    stopSpeaking();
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
      <header className="relative z-20 flex shrink-0 items-center justify-between bg-transparent px-5 py-3">
        <div className="flex items-center gap-3">
          <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-amber-300/40">
            Flight Geography Explorer
          </p>
          <span className="text-white/10">|</span>
          <p className="text-[11px] text-white/30">
            新疆 · {terrainCount} 处
          </p>
        </div>
        <div className="flex items-center gap-1">
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
        <CesiumMap ref={mapRef} onTerrainMode={setTerrainMode} />
        {terrainMode === "ellipsoid" && mode === "explore" && (
          <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 max-w-md -translate-x-1/2 rounded-lg border border-amber-500/20 bg-[#0a0e12]/80 px-4 py-2 text-center text-[11px] text-amber-200/60 backdrop-blur-sm">
            未启用 Cesium 全球地形。请配置{" "}
            <code className="text-amber-300/70">NEXT_PUBLIC_CESIUM_ION_TOKEN</code>
          </div>
        )}
      </div>

      {/* Overlay layer — floating panels */}
      <div className="pointer-events-none relative z-10 flex h-full w-full pt-12">
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
          <div className="pointer-events-auto m-5 mb-5 flex w-[380px] shrink-0 flex-col rounded-2xl bg-[#0a0e12]/40 p-6 backdrop-blur-3xl border border-white/[0.04] cinematic-enter max-h-[calc(100vh-7rem)]">
            <NarrationPanel
              title={panelTitle}
              subtitle={panelSubtitle}
              cards={cardsForPanel}
              lesson={lesson}
              knowledge={activeTerrain?.knowledge ?? null}
              aiEnhancing={aiEnhancing}
              error={error}
              isFlyover={isFlyover}
              isRouteFlying={isRouteFlying}
              isSpeaking={isSpeaking}
              canEnhanceWithAi={!!activeTerrain}
              onEnhanceWithAi={() => void enhanceLessonWithAi()}
              onSpeak={() => { if (lesson) void speakText(lessonToSpeech(lesson)); }}
              onStopSpeak={stopSpeaking}
              embedded
            />
          </div>
        ) : (
          <div className="pointer-events-auto m-4 mb-4 flex w-[360px] shrink-0 flex-col rounded-2xl bg-[#0a0e12]/55 p-5 backdrop-blur-2xl border border-white/[0.05] cinematic-enter max-h-[calc(100vh-6rem)]">
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
        "rounded-lg px-2.5 py-1 text-[11px] font-medium transition",
        active
          ? "bg-white/[0.06] text-white/80"
          : "text-white/30 hover:bg-white/[0.04] hover:text-white/50",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
