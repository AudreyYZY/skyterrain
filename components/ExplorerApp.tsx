"use client";

import CesiumMap, {
  type CesiumMapHandle,
  type TerrainMode,
} from "@/components/CesiumMap";
import CesiumOverlayLabels from "@/components/CesiumOverlayLabels";
import IndexRail, { type RailGroup } from "@/components/IndexRail";
import IntroOverlay from "@/components/IntroOverlay";
import JourneyBar from "@/components/JourneyBar";
import ReadingPanel from "@/components/ReadingPanel";
import { URUMQI_CARDS, URUMQI_LESSON, KASHGAR_CARDS, KASHGAR_LESSON, HOTAN_CARDS, HOTAN_LESSON, TURPAN_CITY_CARDS, TURPAN_CITY_LESSON } from "@/lib/city-lessons";
import { labelManager, createTerrainLabel } from "@/lib/cinematic-labels";
import { TERRAIN_LABELS } from "@/lib/terrain-label-registry";
import { CHINA_CORE_FEATURES } from "@/features/china-core-features";
import type { GeographicFeature } from "@/features/types";
import { lessonToSpeech, lessonToSSML, lessonSections } from "@/lib/lesson";
import { resolveLesson } from "@/lib/terrain-lesson";
import { t, getTerrainName, type Language } from "@/lib/i18n";
import { getTerrainEntry, TERRAIN_REGISTRY } from "@/lib/terrain-registry";
import { computeTerrainCamera, type CameraParams } from "@/lib/terrain-camera";
import { narrationQueue } from "@/lib/narration-queue";
import {
  getAllRoutes,
  type ResolvedWaypoint,
} from "@/lib/routes";
import { speakAndWait, stopSpeech, warmupSpeechVoices, getCurrentAudio, getCurrentWordBoundaries } from "@/lib/speech";
import { narrationManager } from "@/lib/narration-manager";
import { getTerrainById } from "@/lib/terrain";
import type { FlightRoute } from "@/types/route";
import type { TerrainCards, TerrainLesson, TerrainPoint } from "@/types/terrain";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSentenceHighlight } from "@/components/useSentenceHighlight";
import RegionSelector from "@/components/RegionSelector";
import {
  REGIONS,
  setActiveRegion,
  type Region,
} from "@/lib/regions";

const routes = getAllRoutes();

/** Sidebar 统一分类类型 */
type SidebarCategory =
  | "mountain" | "plateau" | "basin" | "plain" | "hill"
  | "lake" | "desert" | "river" | "gorge" | "island" | "landscape";

/** 分类字形（左侧 rail 用，中英通用的几何符号）*/
const CATEGORY_GLYPH: Record<SidebarCategory, string> = {
  mountain: "▲",
  plateau: "◨",
  basin: "▽",
  plain: "▬",
  hill: "⌒",
  lake: "◉",
  desert: "∴",
  river: "≈",
  gorge: "⋁",
  island: "⬠",
  landscape: "✦",
};

/** 分类翻译 key 映射 */
const CATEGORY_I18N_KEY: Record<SidebarCategory, string> = {
  mountain: "sidebar.mountains",
  plateau: "sidebar.plateaus",
  basin: "sidebar.basins",
  plain: "sidebar.plains",
  hill: "sidebar.hills",
  lake: "sidebar.lakes",
  desert: "sidebar.deserts",
  river: "sidebar.rivers",
  gorge: "sidebar.gorges",
  island: "sidebar.islands",
  landscape: "sidebar.landscape",
};

/**
 * 将原始 category/featureType 统一映射为 Sidebar 分类
 * 不修改原始数据，只用于 Sidebar 分组
 */
function normalizeType(raw: string, name?: string): SidebarCategory | null {
  // 名称包含"平原" → 强制映射为 plain
  if (name && name.includes("平原")) return "plain";

  switch (raw) {
    case "mountain_range":
    case "mountain_system":
    case "peak":
      return "mountain";
    case "plateau":
      return "plateau";
    case "basin":
      return "basin";
    case "plain":
    case "delta":
      return "plain";
    case "hills":
      return "hill";
    case "lake":
      return "lake";
    case "desert":
      return "desert";
    case "river":
    case "valley":
      return "river";
    case "gorge":
      return "gorge";
    case "island":
      return "island";
    case "scenic":
    case "oasis":
    case "city":
    case "silk_road":
      return "landscape";
    default:
      return null;
  }
}

/** 统一 Feature Registry — 以 terrain-registry 为单一真实源 */
const ALL_FEATURES = TERRAIN_REGISTRY.map((e) => ({
  id: e.id,
  name: e.nameZh,
  type: normalizeType(e.category, e.nameZh),
  // 区域过滤用：新疆地形归入「中国」视图
  region: e.regionId === "xinjiang" ? "china" : e.regionId,
  terrain: getTerrainById(e.id) ?? null,                       // 新疆 json（含讲解内容）
  feature: CHINA_CORE_FEATURES.find((f) => f.id === e.id) ?? null,
})).filter((f) => f.type !== null);

/** Sidebar 分类定义 */
const SIDEBAR_CATEGORIES: { type: SidebarCategory; label: string }[] = [
  { type: "mountain", label: "山脉" },
  { type: "plateau", label: "高原" },
  { type: "basin", label: "盆地" },
  { type: "plain", label: "平原" },
  { type: "hill", label: "丘陵" },
  { type: "gorge", label: "峡谷" },
  { type: "river", label: "河谷" },
  { type: "lake", label: "湖泊" },
  { type: "desert", label: "沙漠" },
  { type: "island", label: "岛屿" },
  { type: "landscape", label: "景观" },
];

const FEATURE_GROUPS = SIDEBAR_CATEGORIES.map(g => ({
  ...g,
  features: ALL_FEATURES.filter(f => f.type === g.type),
})).filter(g => g.features.length > 0);

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

const routeEndLesson = (lang: Language): TerrainLesson => ({
  seeing:
    lang === "zh-CN"
      ? "航线飞行结束。欢迎继续探索左侧目录里的其他地貌，或选择另一条航线。"
      : "The flight is over. Explore other landforms from the index on the left, or pick another route.",
  formation: "",
  history: "",
});

const SPEECH_RATE = 0.88;

/** 尚无权威讲解内容的地形，面板占位 */
const placeholderLesson = (lang: Language): TerrainLesson => ({
  seeing:
    lang === "zh-CN"
      ? "这处地形的权威讲解正在整理中。你仍可从飞机视角观察它的范围、走向和与周边地貌的关系。"
      : "An authoritative entry for this landform is still being written. You can still study its extent, trend and relationship to nearby terrain from the air.",
  formation: "",
  history: "",
  observation: "",
});

const ZERO_INTERACTION_STYLE = {
  outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255] as [number, number, number],
  brightnessAdjust: 0, labelOpacityMultiplier: 1,
};

/** registry 分类 → GeographicFeature.featureType（合成用）*/
function registryCatToFeatureType(cat: string): import("@/features/types").FeatureType {
  switch (cat) {
    case "mountain_system": return "mountain_system";
    case "plateau": return "plateau";
    case "basin": return "basin";
    case "plain":
    case "delta":
    case "hills":
    case "island": return "plain";
    case "desert": return "desert";
    case "lake": return "lake";
    case "river":
    case "valley":
    case "gorge": return "valley";
    default: return "poi";
  }
}

/** 叙述后的停留时间（毫秒） — 让用户消化内容 */
const POST_NARRATION_DWELL_MS = 2000;

export default function ExplorerApp() {
  const mapRef = useRef<CesiumMapHandle>(null);
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
  const [showIntro, setShowIntro] = useState(true);
  const [hoveredTerrainId, setHoveredTerrainId] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>("zh-CN");
  const [activeRegion, setActiveRegionState] = useState<string>(() => {
    try {
      return (typeof window !== "undefined" && localStorage.getItem("fge-active-region")) || "china";
    } catch {
      return "china";
    }
  });

  // 当前区域名称（用于 Header 显示）
  const activeRegionObj = REGIONS.find((r) => r.id === activeRegion);
  const activeRegionName = activeRegionObj?.name ?? "中国";
  const activeRegionNameEn = activeRegionObj?.nameEn ?? activeRegionObj?.name ?? "China";
  const activeRouteRef = useRef<FlightRoute | null>(null);
  const narrationCancelledRef = useRef(false);
  const { activeSentenceIndex, activeSection, startHighlight, startHighlightSections, startHighlightWithTiming, stopHighlight } = useSentenceHighlight();

  // 初始化地形标注 — 从 TERRAIN_LABELS 注册
  useEffect(() => {
    const layerId = "terrain-labels";
    labelManager.createLayer(layerId, "地形标注", 1);

    // importance → LOD 1:1，缩放分级才准确（continental=1 … poi=4）
    const LOD_BY_IMPORTANCE = { continental: 1, national: 2, regional: 3, poi: 4 } as const;
    for (const label of TERRAIN_LABELS) {
      const priority = label.importance === "continental" ? 110 :
                       label.importance === "national" ? 100 :
                       label.importance === "regional" ? 80 : 60;

      labelManager.addLabel(layerId, createTerrainLabel(
        label.id, label.name, label.lat, label.lon, priority,
        {
          lodLevel: LOD_BY_IMPORTANCE[label.importance],
          rotation: label.rotation,
          terrainType: label.category as any,
          nameEn: label.nameEn,
          regionId: label.regionId,
        }
      ));
    }

    // 暴露 labelManager 到 window 供调试
    (window as any).labelManager = labelManager;
  }, []);

  // 选中地形 / 开始航线后，收起初始标题卡
  useEffect(() => {
    if (activeTerrain || isRouteFlying) setShowIntro(false);
  }, [activeTerrain, isRouteFlying]);

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

  /** 停止音频播放（不影响高亮状态，不取消 NarrationManager session） */
  const stopAudio = useCallback(() => {
    narrationQueue.cancel();
    stopSpeech();
    setIsSpeaking(false);
  }, []);

  /** 停止音频 + 高亮（用户主动取消时调用） */
  const stopSpeaking = useCallback(() => {
    console.log("[Narration] stopSpeaking");
    narrationManager.cancelCurrent();
    stopAudio();
    stopHighlight();
  }, [stopAudio, stopHighlight]);

  /** 区域切换 — 地球平滑飞向目标区域 */
  const handleRegionChange = useCallback(
    (region: Region) => {
      if (!region) return;
      setActiveRegionState(region.id);
      setActiveRegion(region.id);
      try {
        localStorage.setItem("fge-active-region", region.id);
      } catch {
        /* ignore */
      }
      // 取消当前飞行和叙述
      mapRef.current?.stopFlight();
      narrationCancelledRef.current = true;
      narrationQueue.cancel();
      stopSpeech();
      setIsSpeaking(false);
      setActiveTerrain(null);
      setLesson(null);
      setDisplayCards(null);
      setIsFlyover(false);
      narrationCancelledRef.current = false;

      // 先拉高到初始高度，再飞向区域中心
      const { center } = region;
      mapRef.current?.flyToRegion({
        lon: center.lon,
        lat: center.lat,
        height: center.height,
        duration: 3,
      });
    },
    [],
  );

  const speakText = useCallback(
    async (text: string, onPlaying?: () => void): Promise<void> => {
      stopAudio();
      setIsSpeaking(true);
      try {
        await speakAndWait(text, SPEECH_RATE, onPlaying, language);
      } finally {
        setIsSpeaking(false);
      }
    },
    [stopAudio, language]
  );

  useEffect(() => {
    warmupSpeechVoices();
  }, []);

  // 地图就绪：若上次停留的区域不是中国，飞过去（INTRO_VIEW 默认对准中国）
  const handleMapReady = useCallback(() => {
    if (activeRegion === "china") return;
    const region = REGIONS.find((r) => r.id === activeRegion);
    if (!region) return;
    mapRef.current?.flyToRegion({
      lon: region.center.lon,
      lat: region.center.lat,
      height: region.center.height,
      duration: 1.5,
    });
  }, [activeRegion]);

  /** 朗读 lesson 并同步高亮 — 自动播报和手动朗读共用 */
  const speakLessonWithHighlight = useCallback(
    async (lesson: TerrainLesson): Promise<void> => {
      console.log("[Narration] speakLessonWithHighlight called");
      const session = narrationManager.createSession();
      const ssml = lessonToSSML(lesson);
      const sections = lessonSections(lesson);

      await speakText(ssml, () => {
        if (!session.active) return;
        const wordBoundaries = getCurrentWordBoundaries();
        const audio = getCurrentAudio();
        if (wordBoundaries.length > 0 && audio) {
          startHighlightWithTiming(sections, wordBoundaries, audio);
        } else {
          startHighlightSections(sections);
        }
      });
      if (session.active) {
        stopHighlight();
      }
    },
    [speakText, startHighlightSections, startHighlightWithTiming, stopHighlight]
  );

  const showTerrainLesson = useCallback(
    async (terrain: TerrainPoint, options?: { flyoverOnly?: boolean }): Promise<void> => {
      const effectiveLesson: TerrainLesson =
        resolveLesson(terrain.id, language, {
          nameZh: terrain.name,
          fallback: terrain.lesson,
        }) ?? terrain.lesson;

      setActiveTerrain(terrain);
      setDisplayCards(terrain.cards);
      setLesson(effectiveLesson);
      setError(null);

      if (options?.flyoverOnly) {
        await speakText(terrain.flyoverCue, () => {
          startHighlight(terrain.flyoverCue, "seeing");
        });
        stopHighlight();
      } else {
        await speakLessonWithHighlight(effectiveLesson);
      }
    },
    [speakText, startHighlight, speakLessonWithHighlight, stopHighlight, language]
  );

  /**
   * 航点叙述 — 等待叙述完成后再返回
   * 关键：这里返回 Promise，CesiumMap 的 flyRoute 会 await 它
   */
  const narrateWaypoint = useCallback(
    async (waypoint: ResolvedWaypoint): Promise<void> => {
      if (narrationCancelledRef.current) return;

      // 起降机场 — 镜头飞过，不讲解
      if (waypoint.kind === "airport") return;

      // 讲解内容与面板地形
      let panelLesson: TerrainLesson | null;
      let flyoverCue = "";
      let cards: TerrainCards | null = null;

      if (waypoint.terrain) {
        panelLesson =
          resolveLesson(waypoint.id, language, {
            nameZh: waypoint.name,
            fallback: waypoint.terrain.lesson,
          }) ?? waypoint.terrain.lesson;
        flyoverCue = waypoint.terrain.flyoverCue ?? "";
        cards = waypoint.terrain.cards ?? null;
      } else if (CITY_LESSONS[waypoint.id]) {
        panelLesson = CITY_LESSONS[waypoint.id]!;
        cards = CITY_CARDS[waypoint.id] ?? null;
      } else {
        panelLesson = resolveLesson(waypoint.id, language, { nameZh: waypoint.name });
      }

      const stub = {
        id: waypoint.id,
        name: waypoint.name,
        elevation: waypoint.elevation ?? waypoint.terrain?.elevation ?? 0,
      } as unknown as TerrainPoint;

      setIsFlyover(true);
      setActiveTerrain(waypoint.terrain ?? stub);
      setDisplayCards(cards);
      setLesson(panelLesson ?? placeholderLesson(language));
      setError(null);

      // 地形标注
      const layerId = "route-waypoints";
      if (!labelManager.getLayers().find((l) => l.id === layerId)) {
        labelManager.createLayer(layerId, "航线航点", 10);
      }
      labelManager.addLabel(
        layerId,
        createTerrainLabel(waypoint.id, waypoint.name, waypoint.lat, waypoint.lon, 80, {
          nameEn: waypoint.nameEn,
        }),
      );
      labelManager.setFocusedTerrain(waypoint.id);

      if (!panelLesson) {
        // 无讲解内容 — 只停留展示
        if (!narrationCancelledRef.current) {
          await new Promise((r) => setTimeout(r, POST_NARRATION_DWELL_MS));
        }
        return;
      }

      const plainLesson = lessonToSpeech(panelLesson);
      const ssmlScript = flyoverCue ? `${flyoverCue} ${plainLesson}` : plainLesson;
      const highlightSections = lessonSections(panelLesson);

      const session = narrationManager.createSession();
      setIsSpeaking(true);
      try {
        await speakAndWait(
          ssmlScript,
          SPEECH_RATE,
          () => {
            if (!session.active) return;
            const wordBoundaries = getCurrentWordBoundaries();
            const audio = getCurrentAudio();
            if (wordBoundaries.length > 0 && audio) {
              startHighlightWithTiming(highlightSections, wordBoundaries, audio);
            } else {
              startHighlightSections(highlightSections);
            }
          },
          language,
        );
      } finally {
        setIsSpeaking(false);
        if (session.active) stopHighlight();
      }

      if (!narrationCancelledRef.current) {
        await new Promise((r) => setTimeout(r, POST_NARRATION_DWELL_MS));
      }
    },
    [language, startHighlightSections, startHighlightWithTiming, stopHighlight]
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

      // 聚焦当前地形（标签 + 地图区域高亮）— 标签由 terrain-labels 层统一提供，不再另加
      labelManager.setFocusedTerrain(terrain.id);
      mapRef.current?.focusTerrain(terrain.id);

      try {
        // 1) 镜头飞到目标地貌 — 数据驱动相机（与全国路径统一）
        console.log("[ExplorerApp] fly start:", terrain.id);
        const entry = getTerrainEntry(terrain.id);
        if (entry) {
          const cam = computeTerrainCamera(entry);
          console.log(`[TerrainCamera] ${terrain.name}: landmark=${entry.landmark.name} → target=[${cam.target[0].toFixed(2)}, ${cam.target[1].toFixed(2)}] heading=${cam.heading.toFixed(0)}° pitch=${cam.pitch.toFixed(0)}° range=${(cam.range / 1000).toFixed(0)}km`);
          const flyPayload: TerrainPoint = {
            ...terrain,
            lat: cam.target[1],
            lon: cam.target[0],
            elevation: 0,
            cameraHeight: cam.range,
          };
          await (mapRef.current?.flyToTerrainAndWait(flyPayload, {
            heading: cam.heading,
            pitch: cam.pitch,
          }) ?? Promise.resolve());
        } else {
          await (mapRef.current?.flyToTerrainAndWait(terrain) ?? Promise.resolve());
        }
        console.log("[ExplorerApp] fly complete:", terrain.id);

        // 边界/FOI 调试标记（红黄十字）默认关闭；如需排查取景，
        // 在控制台执行 window.debugCesium.debugAutoCamera(id) 手动查看。

        // 检查是否被取消（用户在飞行中点击了停止）
        if (narrationCancelledRef.current) {
          console.log("[ExplorerApp] narration cancelled during flight");
          return;
        }

        // 2) 展示讲解并等待语音播放完毕
        console.log("[ExplorerApp] narration start:", terrain.id);
        await showTerrainLesson(terrain);
        console.log("[ExplorerApp] narration complete:", terrain.id);

        // 检查是否被取消（用户在播报中点击了停止）
        if (narrationCancelledRef.current) {
          console.log("[ExplorerApp] narration cancelled during playback");
          return;
        }

        // 3) 停留片刻，让用户看完地形
        await new Promise(r => setTimeout(r, POST_NARRATION_DWELL_MS));
      } catch (err) {
        console.error("[ExplorerApp] handleSelectTerrain error:", err);
        setError(err instanceof Error ? err.message : "地形选择失败");
      }
    },
    [showTerrainLesson]
  );

  /** 处理全国 Feature 选择 (点击侧边栏或地图标签) — 飞行 + 讲解 */
  const handleSelectFeature = useCallback(
    async (feature: import("@/features/types").GeographicFeature): Promise<void> => {
      console.log("[Narration] handleSelectFeature start");
      // 取消正在进行的航线和叙述，然后重置为 false 以开始新的播报
      narrationCancelledRef.current = true;
      narrationQueue.cancel();
      mapRef.current?.stopFlight();
      setIsRouteFlying(false);
      setRoutePreparing(false);
      setActiveRouteId(null);
      activeRouteRef.current = null;
      setIsFlyover(false);
      setError(null);
      stopHighlight();
      narrationCancelledRef.current = false;

      // 计算 Camera 参数 — 数据驱动 (lib/terrain-registry + lib/terrain-camera)
      const entry = getTerrainEntry(feature.id);
      let cameraParams: CameraParams | null = null;

      if (entry) {
        cameraParams = computeTerrainCamera(entry);
        console.log(`[TerrainCamera] ${feature.name}: landmark=${entry.landmark.name} [${entry.landmark.lon}, ${entry.landmark.lat}] → target=[${cameraParams.target[0].toFixed(2)}, ${cameraParams.target[1].toFixed(2)}] heading=${cameraParams.heading.toFixed(0)}° pitch=${cameraParams.pitch.toFixed(0)}° range=${(cameraParams.range/1000).toFixed(0)}km`);
      }

      // 聚焦当前地形（标签 + 地图区域高亮）— 标签由 terrain-labels 层统一提供
      labelManager.setFocusedTerrain(feature.id);
      mapRef.current?.focusTerrain(feature.id);

      // 设置当前 Feature 状态 — 驱动右侧面板更新
      const featureFallback: TerrainLesson | null = feature.story
        ? {
            seeing: feature.story.seeing,
            formation: feature.story.formation,
            observation: feature.story.observation ?? "",
            history: feature.story.history,
          }
        : null;
      const effectiveLesson = resolveLesson(feature.id, language, {
        nameZh: feature.name,
        fallback: featureFallback,
      });
      // 面板始终更新（无讲解内容时显示占位）
      const panelLesson = effectiveLesson ?? placeholderLesson(language);
      setLesson(panelLesson);
      setActiveTerrain({
        id: feature.id,
        name: feature.name,
        lat: entry?.landmark.lat ?? 0,
        lon: entry?.landmark.lon ?? 0,
        elevation: feature.elevation,
        category: feature.featureType as any,
        description: "",
        cards: { location: "", peak: "", feature: "" },
        lesson: panelLesson,
        knowledge: { terrainFeatures: [], climateFeatures: [], historicalTopics: [], cultureTopics: [], interestingFacts: [], sources: [] },
      } as any);

      // 飞向目标 — Auto Camera 或 fallback
      console.log("[Narration] handleSelectFeature before flyTo");
      if (cameraParams) {
        console.log("[CameraChain] INPUT feature:", feature.id, feature.name);
        console.log("[CameraChain] landmark:", entry?.landmark.name, `[${entry?.landmark.lon}, ${entry?.landmark.lat}]`);
        console.log("[CameraChain] cameraParams.target:", `[${cameraParams.target[0].toFixed(4)}, ${cameraParams.target[1].toFixed(4)}]`);
        console.log("[CameraChain] cameraParams.heading:", cameraParams.heading.toFixed(1) + "°");
        console.log("[CameraChain] cameraParams.pitch:", cameraParams.pitch.toFixed(1) + "°");
        console.log("[CameraChain] cameraParams.range:", cameraParams.range, "m");

        const flyPayload = {
          id: feature.id,
          name: feature.name,
          lat: cameraParams.target[1],
          lon: cameraParams.target[0],
          elevation: 0,
          cameraHeight: cameraParams.range,
        };
        console.log("[CameraChain] flyToTerrainAndWait payload:");
        console.log("  lat:", flyPayload.lat.toFixed(4));
        console.log("  lon:", flyPayload.lon.toFixed(4));
        console.log("  cameraHeight:", flyPayload.cameraHeight);
        console.log("  heading:", cameraParams.heading.toFixed(1) + "°");
        console.log("  pitch:", cameraParams.pitch.toFixed(1) + "°");

        await (mapRef.current?.flyToTerrainAndWait(flyPayload as any, {
          heading: cameraParams.heading,
          pitch: cameraParams.pitch,
        }) ?? Promise.resolve());
      }
      console.log("[Narration] handleSelectFeature after flyTo, narrationCancelled=" + narrationCancelledRef.current);
      if (narrationCancelledRef.current) {
        console.log("[Narration] handleSelectFeature cancelled after flyTo, bailing");
        return;
      }

      // 边界/FOI 调试标记默认关闭（见 handleSelectTerrain 注释）

      // 再次检查取消状态 — 用户可能在飞行中点击了停止按钮
      if (narrationCancelledRef.current) {
        console.log("[Narration] handleSelectFeature cancelled before speak, bailing");
        return;
      }

      // 讲解 — 使用与面板一致的 effectiveLesson（含翻译）
      if (effectiveLesson) {
        console.log("[Narration] handleSelectFeature before speak, narrationCancelled=" + narrationCancelledRef.current);
        await speakLessonWithHighlight(effectiveLesson);
      }
    },
    [stopHighlight, speakLessonWithHighlight, language]
  );

  /** 统一选择入口（侧边栏 + 地图标签都走这里）*/
  const handleSelectById = useCallback(
    (id: string) => {
      const xj = getTerrainById(id);
      if (xj) { void handleSelectTerrain(xj); return; }
      const cf = CHINA_CORE_FEATURES.find((f) => f.id === id);
      if (cf) { void handleSelectFeature(cf); return; }
      // 新增地形：暂无讲解内容，用 registry 合成一个最小 Feature
      const e = getTerrainEntry(id);
      if (!e) return;
      void handleSelectFeature({
        id: e.id,
        name: e.nameZh,
        featureType: registryCatToFeatureType(e.category),
        elevation: e.landmark.elevation,
        maturityLevel: 1,
        label: { labelText: e.nameZh, labelType: "region", rotation: 0, priority: 60, minZoom: 1, maxZoom: 20 },
        visibility: { hierarchyLevel: 1 },
        interaction: {
          hoverable: false, selectable: true,
          idleStyle: ZERO_INTERACTION_STYLE, hoverStyle: ZERO_INTERACTION_STYLE,
          focusStyle: ZERO_INTERACTION_STYLE, selectedStyle: ZERO_INTERACTION_STYLE,
        },
      } as GeographicFeature);
    },
    [handleSelectTerrain, handleSelectFeature]
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

        // 初始化航线标注层 — 保留常驻地形标注层
        labelManager.clearExcept(["terrain-labels"]);
        mapRef.current?.focusTerrain(null);
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
            setLesson(routeEndLesson(language));

            // 等待结束语叙述完成（SSML 格式）
            const endSSML = routeEndLesson(language).seeing;
            setIsSpeaking(true);
            try {
              await speakAndWait(endSSML, SPEECH_RATE, undefined, language);
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
    [narrateWaypoint, language]
  );

  const handleStopRoute = useCallback(() => {
    narrationCancelledRef.current = true;
    narrationQueue.cancel();
    mapRef.current?.stopFlight();
    mapRef.current?.focusTerrain(null);
    setIsRouteFlying(false);
    setRoutePreparing(false);
    setActiveRouteId(null);
    activeRouteRef.current = null;
    stopSpeaking();
    labelManager.clearExcept(["terrain-labels"]);
  }, [stopSpeaking]);

  /** 左侧目录分组 — 按当前区域过滤，分类与地形名按当前语言本地化 */
  const railGroups: RailGroup[] = FEATURE_GROUPS.map((g) => ({
    type: g.type,
    label: t(CATEGORY_I18N_KEY[g.type as SidebarCategory] ?? g.label, language),
    glyph: CATEGORY_GLYPH[g.type as SidebarCategory] ?? "·",
    items: g.features
      .filter((f) => f.region === activeRegion)
      .map((f) => ({ id: f.id, name: getTerrainName(f.name, language) })),
  })).filter((g) => g.items.length > 0);

  const terrainCount = railGroups.reduce((n, g) => n + g.items.length, 0);

  /** 关闭讲解面板 — 停止播报并清空当前地形 */
  const closePanel = () => {
    stopSpeaking();
    setActiveTerrain(null);
    setLesson(null);
    setDisplayCards(null);
    setIsFlyover(false);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[color:var(--bg)] font-sans">
      {/* Map layer — full bleed, always behind everything */}
      <div className="absolute inset-0 z-0">
        <CesiumMap
          ref={mapRef}
          onReady={handleMapReady}
          onTerrainMode={setTerrainMode}
          onTerrainHover={setHoveredTerrainId}
        />
        <CesiumOverlayLabels
          mapRef={mapRef}
          isRouteFlying={isRouteFlying}
          onSelect={handleSelectById}
          hoveredTerrainId={hoveredTerrainId}
          focusedTerrainId={activeTerrain?.id ?? null}
          activeRegion={activeRegion}
          language={language}
        />
        {terrainMode === "ellipsoid" && (
          <div className="pointer-events-none absolute bottom-20 left-1/2 z-20 max-w-md -translate-x-1/2 rounded-full border border-[color:var(--accent-line)] bg-[color:var(--panel-solid)] px-4 py-2 text-center text-[11px] text-[color:var(--ink-dim)]">
            {language === "zh-CN"
              ? "未启用 Cesium 全球地形，请配置 "
              : "Cesium world terrain not enabled — set "}
            <code className="text-[color:var(--accent)]">NEXT_PUBLIC_CESIUM_ION_TOKEN</code>
          </div>
        )}
      </div>

      {showIntro && (
        <IntroOverlay
          language={language}
          regionName={activeRegionName}
          regionNameEn={activeRegionNameEn}
          onDismiss={() => setShowIntro(false)}
        />
      )}

      {/* Header — editorial masthead */}
      <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between px-4 py-2.5">
        <div className={`pointer-events-auto flex items-baseline gap-2.5 transition-opacity duration-300 ${showIntro ? "opacity-0" : "opacity-100"}`}>
          <span className="editorial-title text-[15px] text-[color:var(--ink)]">
            {language === "zh-CN" ? activeRegionName : activeRegionNameEn}
          </span>
          <span className="text-[10px] tabular-nums text-[color:var(--ink-faint)]">
            {terrainCount}
          </span>
        </div>
        <div className={`pointer-events-auto flex items-center gap-3 transition-opacity duration-300 ${showIntro ? "opacity-0" : "opacity-100"}`}>
          <RegionSelector
            activeRegion={activeRegion}
            onRegionChange={handleRegionChange}
            language={language}
          />
          <button
            type="button"
            onClick={() => setLanguage(language === "zh-CN" ? "en-US" : "zh-CN")}
            className="rounded-full border border-[color:var(--hairline)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--ink-dim)] transition-colors hover:text-[color:var(--ink)]"
          >
            {language === "zh-CN" ? "EN" : "中"}
          </button>
        </div>
      </header>

      {!showIntro && (
        <IndexRail
          language={language}
          groups={railGroups}
          activeId={activeTerrain?.id ?? null}
          onSelect={handleSelectById}
        />
      )}

      <ReadingPanel
        language={language}
        terrain={
          activeTerrain
            ? {
                name: getTerrainName(activeTerrain.name, language),
                elevation: activeTerrain.elevation,
              }
            : null
        }
        lesson={lesson}
        knowledge={activeTerrain?.knowledge ?? null}
        isSpeaking={isSpeaking}
        isRouteFlying={isRouteFlying}
        activeSentenceIndex={activeSentenceIndex}
        activeSection={activeSection}
        onPlay={() => {
          if (lesson) void speakLessonWithHighlight(lesson);
        }}
        onStop={stopSpeaking}
        onClose={closePanel}
      />

      {!showIntro && !activeTerrain && activeRegion === "china" && (
        <JourneyBar
          language={language}
          routes={routes}
          activeRouteId={activeRouteId}
          isFlying={isRouteFlying}
          preparing={routePreparing}
          onStart={handleStartRoute}
          onStop={handleStopRoute}
        />
      )}
    </div>
  );
}
