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
import { TERRAIN_LABELS } from "@/lib/terrain-label-registry";
import { CHINA_CORE_FEATURES } from "@/features/china-core-features";
import type { GeographicFeature } from "@/features/types";
import { lessonToSpeech, lessonToSSML } from "@/lib/lesson";
import { t, getTerrainName, type Language } from "@/lib/i18n";
import { getTerrainStory } from "@/lib/i18n-stories";
import { getTerrainEntry, TERRAIN_REGISTRY } from "@/lib/terrain-registry";
import { computeTerrainCamera, type CameraParams } from "@/lib/terrain-camera";
import { narrationQueue } from "@/lib/narration-queue";
import {
  getAllRoutes,
  type ResolvedWaypoint,
} from "@/lib/routes";
import { speakAndWait, stopSpeech, warmupSpeechVoices, getCurrentAudio, getCurrentWordBoundaries, type WordBoundary } from "@/lib/speech";
import { narrationManager } from "@/lib/narration-manager";
import { getAllTerrains, getTerrainsByCategory, getTerrainById } from "@/lib/terrain";
import type { FlightRoute } from "@/types/route";
import type { TerrainCards, TerrainLesson, TerrainPoint } from "@/types/terrain";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSentenceHighlight } from "@/components/useSentenceHighlight";
import RegionSelector from "@/components/RegionSelector";
import {
  REGIONS,
  getActiveRegion,
  setActiveRegion,
  type Region,
} from "@/lib/regions";

const terrainGroups = getTerrainsByCategory();
const allTerrains = getAllTerrains();
const routes = getAllRoutes();

/** Sidebar 统一分类类型 */
type SidebarCategory =
  | "mountain" | "plateau" | "basin" | "plain" | "hill"
  | "lake" | "desert" | "river" | "gorge" | "island" | "landscape";

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

/** 尚无权威讲解内容的地形，面板占位（文字为下一阶段任务）*/
const PLACEHOLDER_LESSON: TerrainLesson = {
  seeing: "该地形的权威讲解内容正在整理中。你仍可从飞机视角观察它的范围、走向和与周边地貌的关系。",
  formation: "",
  history: "",
  observation: "",
};

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
        }
      ));
    }

    // 暴露 labelManager 到 window 供调试
    (window as any).labelManager = labelManager;
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

  /** 朗读 lesson 并同步高亮 — 自动播报和手动朗读共用 */
  const speakLessonWithHighlight = useCallback(
    async (lesson: TerrainLesson): Promise<void> => {
      console.log("[Narration] speakLessonWithHighlight called");
      const session = narrationManager.createSession();
      const ssml = lessonToSSML(lesson);
      const sections = [
        { key: "seeing", text: lesson.seeing },
        { key: "formation", text: lesson.formation },
        { key: "history", text: lesson.history },
        { key: "observation", text: lesson.observation ?? "" },
      ].filter(s => s.text.trim().length > 0);

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
      // 使用翻译后的故事内容
      const translatedStory = getTerrainStory(terrain.name, language);
      const effectiveLesson = translatedStory
        ? { ...terrain.lesson, seeing: translatedStory.seeing, formation: translatedStory.formation, history: translatedStory.history, observation: translatedStory.observation }
        : terrain.lesson;

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
        const session = narrationManager.createSession();
        setIsSpeaking(true);
        try {
          await speakAndWait(ssmlScript, SPEECH_RATE, () => {
            if (!session.active) return;
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
          if (session.active) {
            stopHighlight();
          }
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
        const session = narrationManager.createSession();
        setIsSpeaking(true);
        try {
          await speakAndWait(ssmlScript, SPEECH_RATE, () => {
            if (!session.active) return;
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
          if (session.active) {
            stopHighlight();
          }
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
      const translatedStory = getTerrainStory(feature.name, language);
      const storySource = translatedStory ?? feature.story;
      let effectiveLesson: TerrainLesson | null = null;
      if (storySource) {
        effectiveLesson = {
          seeing: storySource.seeing,
          formation: storySource.formation,
          history: storySource.history,
          observation: storySource.observation,
        };
      }
      // 面板始终更新（无讲解内容时显示占位，文字下一阶段补）
      const panelLesson = effectiveLesson ?? PLACEHOLDER_LESSON;
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
    mapRef.current?.focusTerrain(null);
    setIsRouteFlying(false);
    setRoutePreparing(false);
    setActiveRouteId(null);
    activeRouteRef.current = null;
    stopSpeaking();
    labelManager.clearExcept(["terrain-labels"]);
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
          onTerrainHover={setHoveredTerrainId}
        />
        {mode === "explore" && (
          <CesiumOverlayLabels
            mapRef={mapRef}
            isRouteFlying={isRouteFlying}
            onSelect={handleSelectById}
            hoveredTerrainId={hoveredTerrainId}
            focusedTerrainId={activeTerrain?.id ?? null}
            activeRegion={activeRegion}
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
            {language === "zh-CN" ? `${activeRegionName} · ${terrainCount}` : `${activeRegionNameEn} · ${terrainCount}`}
          </p>
        </div>
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Region Selector — 桌面端显示在 Header 内 */}
          <div className="hidden sm:flex">
            <RegionSelector
              activeRegion={activeRegion}
              onRegionChange={handleRegionChange}
            />
          </div>
          <button
            type="button"
            onClick={() => setLanguage(language === "zh-CN" ? "en-US" : "zh-CN")}
            className="rounded-md px-2 py-0.5 text-[10px] font-medium transition-all duration-200 text-white/30 hover:text-white/60"
          >
            {language === "zh-CN" ? "EN" : "中"}
          </button>
          <ModeTab active={mode === "explore"} onClick={() => setMode("explore")} label={t("header.exploration", language)} />
          <ModeTab active={mode === "photo"} onClick={() => setMode("photo")} label={t("header.photo", language)} />
        </div>
      </header>

      {/* Region Selector — 移动端显示在底部 */}
      <div className="sm:hidden absolute bottom-4 left-0 right-0 z-30 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <RegionSelector
            activeRegion={activeRegion}
            onRegionChange={handleRegionChange}
          />
        </div>
      </div>

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
                    /* Category selected — show features from unified registry */
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
                        {FEATURE_GROUPS.find(g => g.type === sidebarCategory)?.label}
                      </p>

                      <div className="space-y-1">
                        {FEATURE_GROUPS.find(g => g.type === sidebarCategory)?.features.map((f) => (
                          <button
                            key={f.id}
                            type="button"
                            onClick={() => handleSelectById(f.id)}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                              activeTerrain?.id === f.id
                                ? "text-white/80 bg-white/[0.06]"
                                : "text-white/40 hover:text-white/65 hover:bg-white/[0.03]"
                            }`}
                          >
                            <p className="text-[12px]">{getTerrainName(f.name, language)}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Category list — unified registry */
                    <div>
                      <p className="text-[10px] font-medium text-white/20 uppercase tracking-wider mb-3">
                        {t("sidebar.terrain_exploration", language)}
                      </p>

                      <div className="space-y-1">
                        {FEATURE_GROUPS.map((group) => (
                          <button
                            key={group.type}
                            type="button"
                            onClick={() => setSidebarCategory(group.type)}
                            className="w-full text-left px-3 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[12px] text-white/50">
                                {t(CATEGORY_I18N_KEY[group.type] ?? group.label, language)}
                              </span>
                              <span className="text-[10px] text-white/20">{group.features.length}</span>
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
            <h3 className="text-[14px] font-medium text-white/75 mb-1">
              {t("welcome.title", language)}
            </h3>
            <p className="text-[11px] text-white/30 mb-3">
              {t("welcome.subtitle", language)}
            </p>
            <p className="text-[10px] text-white/20 mb-3">
              {t("welcome.click_to_explore", language)}
            </p>
            <button
              type="button"
              onClick={() => {
                const firstTerrain = allTerrains.find(t => t.id === "tianshan");
                if (firstTerrain) handleSelectTerrain(firstTerrain);
              }}
              className="w-full rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2 text-[11px] font-medium text-amber-300/70 transition hover:bg-amber-500/20 hover:text-amber-300"
            >
              {t("welcome.start_tour", language)}
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
              <h3 className="text-[15px] font-medium text-white/85">{getTerrainName(activeTerrain.name, language)}</h3>
              <p className="text-[10px] text-white/25 mt-0.5">
                {t("card.elevation", language)} {activeTerrain.elevation.toLocaleString(language === "zh-CN" ? "zh-CN" : "en-US")}{t("card.meters", language)}
              </p>
            </div>

            {/* 飞机窗外 — 纪录片第一视角 */}
            {lesson?.seeing && (
              <p className="text-[11px] leading-relaxed text-white/35 mb-3 line-clamp-2">
                {lesson.seeing.slice(0, 50)}...
              </p>
            )}

            {/* 主按钮: 开始/停止讲解 — 统一逻辑：播报中点击=停止，否则=开始 */}
            <button
              type="button"
              onClick={() => {
                if (isSpeaking && lesson) {
                  stopSpeaking();
                } else if (lesson) {
                  void speakLessonWithHighlight(lesson);
                }
              }}
              className="w-full rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2 text-[12px] font-medium text-amber-300/80 transition hover:bg-amber-500/20 hover:text-amber-300 mb-2"
            >
              {isSpeaking ? t("card.stop_narration", language) : t("card.start_narration", language)}
            </button>

            {/* 次按钮: 查看详情 */}
            <button
              type="button"
              onClick={() => setShowDetailDrawer(true)}
              className="w-full rounded-lg bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/30 transition hover:bg-white/[0.06] hover:text-white/50"
            >
              {t("card.view_details", language)}
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
                <h3 className="text-[15px] font-medium text-white/85">{getTerrainName(activeTerrain.name, language)}</h3>
                <p className="text-[10px] text-white/25">
                  {t("card.elevation", language)} {activeTerrain.elevation.toLocaleString(language === "zh-CN" ? "zh-CN" : "en-US")}{t("card.meters", language)}
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
                language={language}
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
