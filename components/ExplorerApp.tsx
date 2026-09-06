"use client";

import CesiumMap, {
  type CesiumMapHandle,
  type TerrainMode,
} from "@/components/CesiumMap";
import CesiumOverlayLabels from "@/components/CesiumOverlayLabels";
import IndexRail, { type RailGroup } from "@/components/IndexRail";
import ContinentIntro, { type ContinentCard } from "@/components/ContinentIntro";
import JourneyBar from "@/components/JourneyBar";
import ReadingPanel from "@/components/ReadingPanel";
import { labelManager, createTerrainLabel } from "@/lib/cinematic-labels";
import { TERRAIN_LABELS } from "@/lib/terrain-label-registry";
import { CHINA_CORE_FEATURES } from "@/features/china-core-features";
import type { GeographicFeature } from "@/features/types";
import { lessonSections } from "@/lib/lesson";
import { resolveLesson } from "@/lib/terrain-lesson";
import { getRouteNarration } from "@/lib/route-narration";
import { t, getTerrainName, type Language } from "@/lib/i18n";
import { getTerrainEntry, TERRAIN_REGISTRY } from "@/lib/terrain-registry";
import { computeTerrainCamera, type CameraParams } from "@/lib/terrain-camera";
import { narrationQueue } from "@/lib/narration-queue";
import { routesForCountry, routeCountriesForContinent, resolveRouteWaypoints, getRouteById } from "@/lib/routes";
import { splitSentences } from "@/lib/sentences";
import {
  speakAndWait,
  stopSpeech,
  warmupSpeechVoices,
  getCurrentAudio,
  getCurrentWordBoundaries,
  estimateSpeechDurationSec,
} from "@/lib/speech";
import { narrationManager } from "@/lib/narration-manager";
import { getTerrainById } from "@/lib/terrain";
import type { FlightRoute } from "@/types/route";
import type { TerrainCards, TerrainCategory, TerrainLesson, TerrainPoint } from "@/types/terrain";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSentenceHighlight } from "@/components/useSentenceHighlight";
import RegionSelector from "@/components/RegionSelector";
import ModeToggle from "@/components/ModeToggle";
import CityMarkers from "@/components/CityMarkers";
import { type AppMode, getStoredMode, setStoredMode } from "@/lib/app-mode";
import {
  getCitiesForContinent,
  getCityById,
  getCountryOverview,
} from "@/lib/places-registry";
import { resolveTravelGuide, travelGuideToSections } from "@/lib/travel-lesson";
import { buildAnchoringForNarration } from "@/lib/route-anchors";
import { travelRailGroups } from "@/lib/travel-rail";
import { createSectionNarration } from "@/lib/section-narration";
import TravelPoiMarkers from "@/components/TravelPoiMarkers";
import type { PanelSection } from "@/components/ReadingPanel";
import {
  REGIONS,
  setActiveRegion,
  DEFAULT_REGION_ID,
  countriesForContinent,
  getCountryMeta,
  subregionOfCountry,
  continentOfCountrySlug,
  type Region,
} from "@/lib/regions";
import { terrainTier, categoryOrder, categoryLabel } from "@/lib/terrain-tier";

declare global {
  interface Window {
    /** 开发环境调试面板 — 仅 NODE_ENV !== "production" 时挂载 */
    labelManager?: import("@/lib/cinematic-labels").CinematicLabelManager;
  }
}

/** Sidebar 统一分类类型 */
type SidebarCategory =
  | "mountain" | "plateau" | "basin" | "plain" | "hill"
  | "lake" | "desert" | "river" | "gorge" | "island"
  | "grassland" | "coast" | "inselberg";


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
    case "grassland":
      return "grassland";
    case "coast":
      return "coast";
    case "inselberg":
      return "inselberg";
    default:
      return null;
  }
}

/** 统一 Feature Registry — 以 terrain-registry 为单一真实源 */
const ALL_FEATURES = TERRAIN_REGISTRY.map((e, idx) => ({
  id: e.id,
  name: e.nameZh,
  type: normalizeType(e.category, e.nameZh),
  category: e.category,
  // 区域过滤用：regionId 已是大洲
  region: e.regionId,
  country: e.country,
  registryIndex: idx,
  tier: terrainTier(e.id, e.category),
  terrain: getTerrainById(e.id) ?? null,                       // 早期地形 JSON（部分条目自带讲解内容）
  feature: CHINA_CORE_FEATURES.find((f) => f.id === e.id) ?? null,
})).filter((f) => f.type !== null);

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
    case "grassland":
    case "coast":
    case "island": return "plain";
    case "inselberg": return "mountain_system";
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
  const [, setDisplayCards] = useState<TerrainCards | null>(null);
  const [lesson, setLesson] = useState<TerrainLesson | null>(null);
  const [, setError] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [terrainMode, setTerrainMode] = useState<TerrainMode | null>(null);
  const [isRouteFlying, setIsRouteFlying] = useState(false);
  const [routePreparing, setRoutePreparing] = useState(false);
  const [activeRouteId, setActiveRouteId] = useState<string | null>(null);
  /** 底部航线面板当前聚焦的国家（选某国地形 / 点国家切换时更新）*/
  const [routeCountry, setRouteCountry] = useState<string | null>(null);
  /** 航线飞行中：整条航线的解说稿 */
  const [routeNarration, setRouteNarration] = useState<string | null>(null);
  /** 航线飞行中：当前正飞越的地形名（本地化）*/
  const [flyoverName, setFlyoverName] = useState<string | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [hoveredTerrainId, setHoveredTerrainId] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>("zh-CN");
  // mode / activeRegion 首帧用 SSR 默认值，挂载后再从 localStorage 恢复
  // （避免 server 默认值与 client 存储值不一致导致 hydration mismatch）
  const [mode, setMode] = useState<AppMode>("study");
  /** 旅游模式：当前选中的城市 / 概览 id */
  const [travelId, setTravelId] = useState<string | null>(null);
  /** 最近一次发起的城市选择请求 id —— resolveTravelGuide 异步返回时用来丢弃过期结果 */
  const latestTravelRequestRef = useRef<string | null>(null);
  const [travelSections, setTravelSections] = useState<PanelSection[] | null>(null);
  const [travelPlace, setTravelPlace] = useState<{ name: string } | null>(null);
  /** 讲解 / 攻略播报：正在合成首段（“准备中”按钮态） */
  const [narrationPreparing, setNarrationPreparing] = useState(false);
  const narrationRef = useRef<ReturnType<typeof createSectionNarration> | null>(null);
  const [activeRegion, setActiveRegionState] = useState<string>(DEFAULT_REGION_ID);

  useEffect(() => {
    // mode 首帧用 SSR 默认值（study），这里挂载后从 localStorage 恢复真实值——
    // 只能在 effect 里做（server 端无 localStorage），故意不改写成渲染期间判断
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMode(getStoredMode());
    try {
      // 早期版本把区域拆得更细（如 china / xinjiang 分列），现统一为大洲；
      // 这里把 localStorage 里可能残留的旧值迁移过去
      const LEGACY: Record<string, string> = {
        china: "asia",
        xinjiang: "asia",
        australia: "oceania",
      };
      const stored = localStorage.getItem("fge-active-region");
      const resolved = stored ? LEGACY[stored] ?? stored : null;
      if (resolved && REGIONS.some((r) => r.id === resolved)) {
        setActiveRegionState(resolved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  // 当前区域名称（用于 Header 显示）
  const activeRegionObj = REGIONS.find((r) => r.id === activeRegion);
  const activeRegionName = activeRegionObj?.name ?? "亚洲";
  const activeRegionNameEn = activeRegionObj?.nameEn ?? activeRegionObj?.name ?? "Asia";
  const activeRouteRef = useRef<FlightRoute | null>(null);
  const narrationCancelledRef = useRef(false);
  const { activeSentenceIndex, activeSection, startHighlight, startHighlightWithTiming, startHighlightChunkEstimated, stopHighlight } = useSentenceHighlight();

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
          terrainType: label.category,
          nameEn: label.nameEn,
          regionId: label.regionId,
        }
      ));
    }

    // 暴露 labelManager 到 window 供调试 —— 仅开发环境
    if (process.env.NODE_ENV !== "production") {
      window.labelManager = labelManager;
    }
  }, []);

  // 选中地形 / 开始航线后，收起初始标题卡——渲染期间比较代替 effect+setState
  const activeOrFlying = Boolean(activeTerrain) || isRouteFlying;
  const [prevActiveOrFlying, setPrevActiveOrFlying] = useState(activeOrFlying);
  if (activeOrFlying !== prevActiveOrFlying) {
    setPrevActiveOrFlying(activeOrFlying);
    if (activeOrFlying) setShowIntro(false);
  }

  const showIntroRef = useRef(showIntro);
  useEffect(() => {
    showIntroRef.current = showIntro;
  }, [showIntro]);

  // 航线飞行中：解说读到某个地名时，「正在飞越」立刻切到那处地形（比按里程推算更准）
  useEffect(() => {
    if (!isRouteFlying || activeSentenceIndex == null || !routeNarration) return;
    const route = activeRouteRef.current;
    if (!route) return;
    const sentence = splitSentences(routeNarration)[activeSentenceIndex];
    if (!sentence) return;
    const en = language === "en-US";
    const hay = en ? sentence.toLowerCase() : sentence;
    const namedWps = resolveRouteWaypoints(route).filter(
      (w) => w.kind === "terrain" || w.kind === "feature",
    );
    // 一句里提到多个地名时取靠后的那个（飞行方向上更新的）
    for (let i = namedWps.length - 1; i >= 0; i--) {
      const w = namedWps[i]!;
      const nm = en ? w.nameEn : w.name;
      const core = nm.replace(
        /(沙漠|沙地|山脉|山地|群山|走廊|谷地|河谷|大峡谷|峡谷|三角洲|半岛|群岛|列岛|诸岛|海岸|海峡|草原|盆地|高原|平原|火山区|火山|破火山口|山|湖|河|江|海|岛)$/,
        "",
      );
      const hit = en
        ? hay.includes(nm.toLowerCase())
        : sentence.includes(nm) || (core.length >= 2 && sentence.includes(core));
      if (hit) {
        setFlyoverName(nm);
        return;
      }
    }
  }, [isRouteFlying, activeSentenceIndex, routeNarration, language]);

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
    narrationManager.cancelCurrent();
    narrationRef.current?.cancel();
    narrationRef.current = null;
    setNarrationPreparing(false);
    // isSpeaking 必须在这里直接落回 false，不能只等分段播报的 onDone 回调：
    // 那个回调依赖音频 Promise 结束，一旦漏掉就会把 isSpeaking 永久卡在 true，
    // 后续任何一次「开始播报」都不再是状态跃迁，阅读面板也就不会自动展开。
    setIsSpeaking(false);
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
      setTravelId(null);
      setTravelSections(null);
      setTravelPlace(null);
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

  /** 初始大陆卡片数据（学习模式，含建设中的大洲，供选择器完整呈现） */
  const introContinents: ContinentCard[] = useMemo(
    () =>
      REGIONS.map((r) => ({
        id: r.id,
        name: r.name,
        nameEn: r.nameEn ?? r.name,
        count: r.terrainCount,
        available: r.available,
      })),
    [],
  );

  /**
   * 初始大陆卡片数据（旅游模式）——available 独立判定，不能借用学习模式的
   * available（那个只反映"该洲有没有地形"）：旅游内容按城市数有没有 > 0 算，
   * 两边碰巧现在同步不代表以后一直同步。
   */
  const introTravelContinents: ContinentCard[] = useMemo(
    () =>
      REGIONS.map((r) => {
        const count = getCitiesForContinent(r.id).length;
        return {
          id: r.id,
          name: r.name,
          nameEn: r.nameEn ?? r.name,
          count,
          available: count > 0,
        };
      }),
    [],
  );

  /** 初始卡片滑动预览 —— 地球飞过去，但不切换 activeRegion */
  const handleIntroPreview = useCallback((continentId: string) => {
    const r = REGIONS.find((x) => x.id === continentId);
    if (!r) return;
    mapRef.current?.flyToRegion({
      lon: r.center.lon,
      lat: r.center.lat,
      height: r.center.height,
      duration: 1.4,
    });
  }, []);

  /** 初始卡片选定 —— 进入该大陆的学习模式 */
  const handleIntroEnter = useCallback(
    (continentId: string) => {
      const r = REGIONS.find((x) => x.id === continentId);
      if (!r) return;
      setActiveRegionState(r.id);
      setActiveRegion(r.id);
      try {
        localStorage.setItem("fge-active-region", r.id);
      } catch {
        /* ignore */
      }
      mapRef.current?.flyToRegion({
        lon: r.center.lon,
        lat: r.center.lat,
        height: r.center.height,
        duration: 2.4,
      });
    },
    [],
  );

  /** 次区域切换 —— 切到其大洲（若需要）并飞向该次区域地形的重心 */
  const handleSubregionChange = useCallback(
    (geo: { id: string; continentId: string; lon: number; lat: number }) => {
      if (geo.continentId !== activeRegion) {
        setActiveRegionState(geo.continentId);
        setActiveRegion(geo.continentId);
        try {
          localStorage.setItem("fge-active-region", geo.continentId);
        } catch {
          /* ignore */
        }
      }
      mapRef.current?.stopFlight();
      setActiveTerrain(null);
      setLesson(null);
      setDisplayCards(null);
      const continent = REGIONS.find((r) => r.id === geo.continentId);
      mapRef.current?.flyToRegion({
        lon: geo.lon,
        lat: geo.lat,
        height: Math.round((continent?.center.height ?? 6_000_000) * 0.55),
        duration: 2.4,
      });
    },
    [activeRegion],
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

  /**
   * 曾经这里在地图就绪时，若 localStorage 记着"上次停留的不是默认大洲"就自动飞过去——
   * 目的是让老用户直接落回上次的区域。**这个设计已被证明是本页面反复出现的
   * "没等用户选择就自动跳转"这个 bug 的根源，已彻底移除，不要再加回来。**
   *
   * 根因（历史，已解决）：旧版旅游模式用的是独立的 IntroOverlay 组件，对"已看过
   * 引导页"的用户会静默跳过（不显示卡片，直接把 showIntro 置为 false，靠
   * localStorage 的 SEEN_KEY 判断）——这个"跳过"发生在 Cesium 完成初始化之前。
   * 等地图真正 ready、某个飞行触发点触发时，showIntro 早已是 false，看起来就跟
   * "用户已经确认过了"一模一样，于是自动飞了过去——但用户其实这次访问什么都
   * 没点。**2026-09-04 起旅游模式已改用跟学习模式相同的 ContinentIntro**（翻卡选
   * 大洲），这个组件本身就没有"已看过静默跳过"这条路径——每次加载都要求用户
   * 真正翻卡/点「开始探索」才会触发 onEnter，从机制上排除了这类回归，不只是
   * "小心不要犯"。
   *
   * 现在的规则、以后新增任何飞行触发点都要遵守：
   *   相机的每一次自动飞行，必须能追溯到*本次会话*里一个真实发生的用户动作
   *  （点「开始探索」/ 选中卡片 → handleIntroEnter（学习/旅游共用）、
   *   点顶栏大洲下拉 → handleRegionChange、点次区域 → handleSubregionChange、
   *   点地形/城市 → 各自的 handleSelect*），不能由"地图初始化好了"或"localStorage
   *   里记着什么"这类跟当次访问无关的时机来触发。恢复 activeRegion 这个*状态*
   *  （让侧栏/标签显示对的大洲）没问题，但恢复状态绝不能连带触发一次相机飞行。
   */

  /**
   * 朗读 lesson 并同步高亮 — 自动播报和手动朗读共用。
   * 与旅游攻略同一套分段播报编排（`createSectionNarration`）：逐段合成+播放、
   * 前一段播放时预取下一段 → 首段出声只需 ~2s，而非等整篇合成 ~6s。
   * 分段小请求也基本不会触发浏览器 TTS 回退（回退会把"6000"逐位念成"六零零零"）。
   */
  const speakLessonWithHighlight = useCallback(
    (lesson: TerrainLesson): Promise<void> => {
      const sections = lessonSections(lesson);
      if (sections.length === 0) return Promise.resolve();

      narrationRef.current?.cancel();
      stopSpeech();
      stopHighlight();

      const ctrl = createSectionNarration();
      narrationRef.current = ctrl;
      setNarrationPreparing(true);
      setIsSpeaking(true);

      // 被取消的那次播报，其回调可能在新播报已经启动之后才姗姗来迟（音频 pause
      // 事件是异步派发的）。不加这个身份判断，旧回调的 onDone 会把新播报的
      // isSpeaking/preparing 抹成 false —— 表现就是「声音在放，面板却显示没在播、
      // 停在卡片态」。只有仍是当前播报时才允许改状态。
      const isCurrent = () => narrationRef.current === ctrl;

      return new Promise<void>((resolve) => {
        void ctrl.run(sections, language, {
          onFirstAudio: () => {
            if (isCurrent()) setNarrationPreparing(false);
          },
          onSectionStart: ({ key, baseIndex, text, wordBoundaries, audio }) => {
            if (!isCurrent()) return;
            if (wordBoundaries.length > 0 && audio) {
              startHighlightWithTiming([{ key, text }], wordBoundaries, audio, baseIndex);
            } else {
              startHighlightChunkEstimated(key, text, baseIndex);
            }
          },
          onDone: (wasCancelled) => {
            if (!isCurrent()) {
              resolve();
              return;
            }
            setNarrationPreparing(false);
            setIsSpeaking(false);
            if (!wasCancelled) stopHighlight();
            resolve();
          },
        });
      });
    },
    [language, startHighlightWithTiming, startHighlightChunkEstimated, stopHighlight]
  );

  /** 旅游模式：分段播报攻略 + 逐句高亮（点城市自动、点播放手动共用） */
  const speakTravelGuide = useCallback(
    (sections: PanelSection[]) => {
      if (!sections || sections.length === 0) return;
      narrationRef.current?.cancel();
      stopSpeech();
      stopHighlight();

      const ctrl = createSectionNarration();
      narrationRef.current = ctrl;
      setNarrationPreparing(true);
      setIsSpeaking(true);

      // 同 speakLessonWithHighlight：旧播报的回调可能迟到，只有仍是当前播报才改状态
      const isCurrent = () => narrationRef.current === ctrl;

      void ctrl.run(
        sections.map((s) => ({ key: s.key, text: s.text })),
        language,
        {
          onFirstAudio: () => {
            if (isCurrent()) setNarrationPreparing(false);
          },
          onSectionStart: ({ key, baseIndex, text, wordBoundaries, audio }) => {
            if (!isCurrent()) return;
            if (wordBoundaries.length > 0 && audio) {
              startHighlightWithTiming([{ key, text }], wordBoundaries, audio, baseIndex);
            } else {
              startHighlightChunkEstimated(key, text, baseIndex);
            }
          },
          onDone: (wasCancelled) => {
            if (!isCurrent()) return;
            setNarrationPreparing(false);
            setIsSpeaking(false);
            if (!wasCancelled) stopHighlight();
          },
        },
      );
    },
    [language, startHighlightWithTiming, startHighlightChunkEstimated, stopHighlight],
  );

  const stopTravelNarration = useCallback(() => {
    narrationRef.current?.cancel();
    narrationRef.current = null;
    setNarrationPreparing(false);
    setIsSpeaking(false);
    stopHighlight();
  }, [stopHighlight]);

  const showTerrainLesson = useCallback(
    async (terrain: TerrainPoint, options?: { flyoverOnly?: boolean }): Promise<void> => {
      const effectiveLesson: TerrainLesson =
        (await resolveLesson(terrain.id, language, {
          nameZh: terrain.name,
          fallback: terrain.lesson,
        })) ?? terrain.lesson;
      if (narrationCancelledRef.current) return;

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
      const effectiveLesson = await resolveLesson(feature.id, language, {
        nameZh: feature.name,
        fallback: featureFallback,
      });
      if (narrationCancelledRef.current) return;
      // 面板始终更新（无讲解内容时显示占位）
      const panelLesson = effectiveLesson ?? placeholderLesson(language);
      setLesson(panelLesson);
      const terrainPoint: TerrainPoint = {
        id: feature.id,
        name: feature.name,
        lat: entry?.landmark.lat ?? 0,
        lon: entry?.landmark.lon ?? 0,
        elevation: feature.elevation,
        // GeographicFeature.featureType 与 TerrainCategory 取值空间不同（早期数据模型遗留）；
        // 本页面实际只读 name/elevation/id/knowledge/cameraHeight，不消费 category/type/facts
        category: feature.featureType as unknown as TerrainCategory,
        type: "scenic",
        cameraHeight: 0,
        description: "",
        flyoverCue: "",
        cards: { location: "", peak: "", feature: "" },
        lesson: panelLesson,
        facts: [],
        knowledge: {
          terrainFeatures: [],
          formation: [],
          airplaneViewFeatures: [],
          historicalTopics: [],
          cultureTopics: [],
          climateFeatures: [],
          interestingFacts: [],
          visualKeywords: [],
          recommendedViewingAltitude: "",
          representativeReason: "",
          sources: [],
          lastUpdated: "",
          confidence: "low",
        },
      };
      setActiveTerrain(terrainPoint);

      // 飞向目标 — Auto Camera 或 fallback
      console.log("[Narration] handleSelectFeature before flyTo");
      if (cameraParams) {
        console.log("[CameraChain] INPUT feature:", feature.id, feature.name);
        console.log("[CameraChain] landmark:", entry?.landmark.name, `[${entry?.landmark.lon}, ${entry?.landmark.lat}]`);
        console.log("[CameraChain] cameraParams.target:", `[${cameraParams.target[0].toFixed(4)}, ${cameraParams.target[1].toFixed(4)}]`);
        console.log("[CameraChain] cameraParams.heading:", cameraParams.heading.toFixed(1) + "°");
        console.log("[CameraChain] cameraParams.pitch:", cameraParams.pitch.toFixed(1) + "°");
        console.log("[CameraChain] cameraParams.range:", cameraParams.range, "m");

        const flyPayload: TerrainPoint = {
          ...terrainPoint,
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

        await (mapRef.current?.flyToTerrainAndWait(flyPayload, {
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
      const ent = getTerrainEntry(id);
      if (ent?.country) setRouteCountry(ent.country);
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

  /** 地图上直接点某地形 — 若属于其它大洲，先切过去再选中 */
  const handleMapTerrainSelect = useCallback(
    (id: string) => {
      const e = getTerrainEntry(id);
      if (e && e.regionId !== activeRegion && REGIONS.some((r) => r.id === e.regionId)) {
        setActiveRegionState(e.regionId);
        setActiveRegion(e.regionId);
        try {
          localStorage.setItem("fge-active-region", e.regionId);
        } catch {
          /* ignore */
        }
      }
      handleSelectById(id);
    },
    [activeRegion, handleSelectById]
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
        setError(null);
        setLesson(null);
        setActiveTerrain(null);
        setDisplayCards(null);

        // 初始化航线标注层 — 保留常驻地形标注层
        labelManager.clearExcept(["terrain-labels"]);
        mapRef.current?.focusTerrain(null);
        const layerId = "route-waypoints";
        labelManager.createLayer(layerId, "航线航点", 10);

        setRouteNarration(null);
        setFlyoverName(null);

        const narrText =
          getRouteNarration(route.id, language, mode) ?? routeEndLesson(language).seeing;

        mapRef.current?.flyRoute(route, {
          onPreparingRoute: () => setRoutePreparing(true),
          onRouteReady: () => setRoutePreparing(false),
          // 整条航线一段解说，与镜头飞行并行
          onNarrate: async () => {
            setRouteNarration(narrText);
            const session = narrationManager.createSession();
            setIsSpeaking(true);
            try {
              await speakAndWait(
                narrText,
                SPEECH_RATE,
                () => {
                  if (!session.active) return;
                  const audio = getCurrentAudio();
                  const wb = getCurrentWordBoundaries();
                  if (audio && wb.length > 0) {
                    startHighlightWithTiming([{ key: "seeing", text: narrText }], wb, audio, 0);
                  } else {
                    startHighlight(narrText, "seeing");
                  }
                },
                language,
              );
            } finally {
              setIsSpeaking(false);
              if (session.active) stopHighlight();
            }
          },
          // 飞行时长由航线距离与这个估算共同决定（见 lib/cesium/route-flight.ts）；
          // 镜头节拍是帧率驱动的，不再跟随音频进度
          estNarrationSec: estimateSpeechDurationSec(narrText, SPEECH_RATE, language),
          // 学习模式有锚点表时按解说排镜头：讲到哪个航点，镜头就在哪里
          anchoring: buildAnchoringForNarration(route.id, language, mode, narrText),
          // 镜头经过某航点 — 更新「当前在哪」（解说里提到地名时由高亮同步更精确，见上方 effect）
          onFlyoverWaypoint: (wp, index) => {
            const en = language === "en-US";
            if (wp.kind === "airport") {
              const nm = en ? wp.nameEn : wp.name;
              setFlyoverName(
                index === 0
                  ? en ? `Departing ${nm}` : `从 ${nm} 起飞`
                  : en ? `Landing at ${nm}` : `抵达 ${nm}`,
              );
            } else {
              setFlyoverName(en ? wp.nameEn : getTerrainName(wp.name, language));
            }
          },
          onComplete: () => {
            setIsRouteFlying(false);
            setRoutePreparing(false);
            setActiveRouteId(null);
            activeRouteRef.current = null;
            setRouteNarration(null);
            setFlyoverName(null);
            // 国际航线：飞完后把地图 / 航线聚焦切到到达国（可跳到别的大洲）
            if (route.arrCountry !== route.depCountry) {
              const cont = continentOfCountrySlug(route.arrCountry);
              if (cont && cont !== activeRegion && REGIONS.some((r) => r.id === cont)) {
                setActiveRegionState(cont);
                setActiveRegion(cont);
                try {
                  localStorage.setItem("fge-active-region", cont);
                } catch {
                  /* ignore */
                }
              }
              setRouteCountry(route.arrCountry);
            }
          },
          onCancelled: () => {
            narrationCancelledRef.current = true;
            narrationQueue.cancel();
            stopSpeaking();
            setIsRouteFlying(false);
            setRoutePreparing(false);
            setActiveRouteId(null);
            activeRouteRef.current = null;
            setRouteNarration(null);
            setFlyoverName(null);
          },
        });
      }, 50);
    },
    [language, mode, activeRegion, startHighlight, startHighlightWithTiming, stopHighlight, stopSpeaking]
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
    setRouteNarration(null);
    setFlyoverName(null);
    stopSpeaking();
    labelManager.clearExcept(["terrain-labels"]);
  }, [stopSpeaking]);

  /**
   * 左侧目录分组 — 按当前大洲下的国家分栏。
   * 国家顺序：次区域地理顺序 → COUNTRIES 顺序（见 lib/regions.ts）。
   * 国家内地形顺序：T1 骨架 → T2 → T3，同级按骨架类地貌优先、再按注册表顺序。
   */
  const railGroups: RailGroup[] = useMemo(() => {
    const slugs = countriesForContinent(activeRegion);
    // 每个国家的分隔小标题只在「次区域变化」时显示；prevSubIds[i] = 处理到 slugs[i] 之前
    // 沿途最近一个非空次区域 id（无次区域的国家不重置，沿用上一个）——用 reduce 折叠，
    // 避免在 .map 回调里改写外层 let（react-hooks/immutability）
    const prevSubIds = slugs.reduce<{ prevId: string | null; out: (string | null)[] }>(
      (acc, slug) => {
        acc.out.push(acc.prevId);
        const sub = subregionOfCountry(slug);
        return { prevId: sub?.id ?? acc.prevId, out: acc.out };
      },
      { prevId: null, out: [] }
    ).out;
    return slugs
      .map((slug, slugIndex) => {
        const meta = getCountryMeta(slug);
        let prevCat: string | null = null;
        const items = ALL_FEATURES.filter((f) => f.country === slug)
          .slice()
          .sort(
            (a, b) =>
              categoryOrder(a.category) - categoryOrder(b.category) ||
              a.tier - b.tier ||
              a.registryIndex - b.registryIndex,
          )
          .map((f) => {
            const catLabel =
              f.category !== prevCat ? categoryLabel(f.category, language) : undefined;
            prevCat = f.category;
            return {
              id: f.id,
              name: getTerrainName(f.name, language),
              category: f.category,
              categoryLabel: catLabel,
            };
          });
        const sub = subregionOfCountry(slug);
        const divider =
          sub && sub.id !== prevSubIds[slugIndex]
            ? language === "zh-CN"
              ? sub.name
              : sub.nameEn
            : undefined;
        return {
          type: slug,
          label: meta ? (language === "zh-CN" ? meta.name : meta.nameEn) : slug,
          glyph: meta?.code ?? slug.slice(0, 2).toUpperCase(),
          divider,
          items,
        };
      })
      .filter((g) => g.items.length > 0);
  }, [activeRegion, language]);

  const terrainCount = railGroups.reduce((n, g) => n + g.items.length, 0);

  /** 底部航线面板：当前大洲下有航线的国家 + 聚焦国家 + 两组航线 */
  const journeyCountrySlugs = useMemo(
    () => routeCountriesForContinent(countriesForContinent(activeRegion)),
    [activeRegion],
  );
  const journeyGroups = useMemo(
    () =>
      journeyCountrySlugs.map((slug) => {
        const m = getCountryMeta(slug);
        const { domestic, international } = routesForCountry(slug);
        return {
          slug,
          name: m ? (language === "zh-CN" ? m.name : m.nameEn) : slug,
          domestic,
          international,
        };
      }),
    [journeyCountrySlugs, language],
  );
  // routeCountry 为 null → 显示全部国家；选某国地形后聚焦到该国
  const effectiveRouteCountry =
    routeCountry && journeyCountrySlugs.includes(routeCountry) ? routeCountry : null;

  // 航线飞行时：沿途航点在地图上的标注（跨大洲也显示）
  const routeFlightLabels = useMemo(() => {
    if (!isRouteFlying || !activeRouteId) return undefined;
    const route = getRouteById(activeRouteId);
    if (!route) return undefined;
    return resolveRouteWaypoints(route).map((w) => ({
      id: w.id,
      name: w.name,
      nameEn: w.nameEn,
      lat: w.lat,
      lon: w.lon,
      kind: w.kind,
    }));
  }, [isRouteFlying, activeRouteId]);

  /** 关闭讲解面板 — 停止播报并清空当前地形 */
  const closePanel = () => {
    stopSpeaking();
    setActiveTerrain(null);
    setLesson(null);
    setDisplayCards(null);
  };

  const flyToCountryOverview = useCallback(() => {
    const r = REGIONS.find((x) => x.id === activeRegion);
    if (r) {
      mapRef.current?.flyToRegion({
        lon: r.center.lon,
        lat: r.center.lat,
        height: r.center.height,
        duration: 1.5,
      });
    }
  }, [activeRegion]);

  const clearTravelSelection = useCallback(() => {
    narrationRef.current?.cancel();
    narrationRef.current = null;
    setNarrationPreparing(false);
    setIsSpeaking(false);
    stopHighlight();
    setTravelId(null);
    setTravelSections(null);
    setTravelPlace(null);
  }, [stopHighlight]);

  const handleModeChange = useCallback(
    (m: AppMode) => {
      if (m === mode) return;
      // 引导页开着时按钮本应不可点（见 header 的 pointer-events 处理），这里再兜底一次：
      // 任何触发路径都不该在用户看清引导页之前就让相机自己飞走。
      if (showIntroRef.current) return;
      setMode(m);
      setStoredMode(m);
      stopSpeaking();
      setActiveTerrain(null);
      setLesson(null);
      setDisplayCards(null);
      setRouteNarration(null);
      setFlyoverName(null);
      clearTravelSelection();
      flyToCountryOverview();
    },
    [mode, flyToCountryOverview, stopSpeaking, clearTravelSelection],
  );

  const travelNameOf = useCallback(
    (id: string): string => {
      if (id.endsWith("-overview")) {
        const ov = getCountryOverview(id.replace(/-overview$/, ""));
        if (ov) return language === "zh-CN" ? ov.nameZh : ov.nameEn;
        return language === "zh-CN" ? activeRegionName : activeRegionNameEn;
      }
      const city = getCityById(id);
      if (city) return language === "zh-CN" ? city.nameZh : city.nameEn;
      return id;
    },
    [language, activeRegionName, activeRegionNameEn],
  );

  const handleSelectCity = useCallback(
    async (id: string) => {
      latestTravelRequestRef.current = id;
      const guide = await resolveTravelGuide(id, language);
      if (!guide || latestTravelRequestRef.current !== id) return;
      const city = getCityById(id);
      const sections = travelGuideToSections(guide, language);
      narrationRef.current?.cancel();
      stopHighlight();
      setTravelId(id);
      setTravelPlace({ name: travelNameOf(id) });
      setTravelSections(sections);
      setActiveTerrain(null);
      setLesson(null);
      if (city) mapRef.current?.focusCity(city.lon, city.lat, city.view);
      else flyToCountryOverview();
      // 跳转的同时开始播报（合成首段期间镜头正在飞）
      speakTravelGuide(sections);
    },
    [language, travelNameOf, flyToCountryOverview, speakTravelGuide, stopHighlight],
  );

  // 语言切换时，重新解析当前旅游内容——travelPlace/travelSections 同时也由选中城市的
  // 点击回调直接 set（非纯 travelId/language 派生），故仍用 effect 而非 useMemo 同步
  useEffect(() => {
    if (mode !== "travel" || !travelId) return;
    let cancelled = false;
    void resolveTravelGuide(travelId, language).then((guide) => {
      if (!guide || cancelled) return;
      setTravelPlace({ name: travelNameOf(travelId) });
      setTravelSections(travelGuideToSections(guide, language));
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, mode, travelId]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[color:var(--bg)] font-sans">
      {/* Map layer — full bleed, always behind everything */}
      <div className="absolute inset-0 z-0">
        <CesiumMap
          ref={mapRef}
          onTerrainMode={setTerrainMode}
          onTerrainHover={setHoveredTerrainId}
          onTerrainSelect={mode === "study" ? handleMapTerrainSelect : undefined}
          appMode={mode}
        />
        {mode === "study" && (
          <CesiumOverlayLabels
            mapRef={mapRef}
            isRouteFlying={isRouteFlying}
            routeWaypoints={routeFlightLabels}
            flyoverName={flyoverName}
            onSelect={handleSelectById}
            hoveredTerrainId={hoveredTerrainId}
            focusedTerrainId={activeTerrain?.id ?? null}
            activeRegion={activeRegion}
            language={language}
          />
        )}
        {mode === "travel" && (
          <CityMarkers
            mapRef={mapRef}
            cities={getCitiesForContinent(activeRegion)}
            activeId={travelId}
            language={language}
            onSelect={handleSelectCity}
          />
        )}
        {mode === "travel" && (
          <TravelPoiMarkers
            mapRef={mapRef}
            city={travelId ? getCityById(travelId) ?? null : null}
            language={language}
          />
        )}
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
        <ContinentIntro
          language={language}
          continents={mode === "study" ? introContinents : introTravelContinents}
          countLabel={t(mode === "study" ? "intro.count" : "intro.count.travel", language)}
          initialContinentId={activeRegion}
          onPreview={handleIntroPreview}
          onEnter={handleIntroEnter}
          onDismiss={() => setShowIntro(false)}
          onToggleLanguage={() => setLanguage(language === "zh-CN" ? "en-US" : "zh-CN")}
        />
      )}

      {/* Header — editorial masthead */}
      <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between px-4 py-2.5">
        <div className={`flex items-baseline gap-2.5 transition-opacity duration-300 ${showIntro ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"}`}>
          <span className="editorial-title text-[15px] text-[color:var(--ink)]">
            {language === "zh-CN" ? activeRegionName : activeRegionNameEn}
          </span>
          <span className="text-[10px] tabular-nums text-[color:var(--ink-faint)]">
            {terrainCount}
          </span>
        </div>
        <div className={`flex items-center gap-3 transition-opacity duration-300 ${showIntro ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"}`}>
          <ModeToggle mode={mode} onChange={handleModeChange} language={language} />
          <RegionSelector
            activeRegion={activeRegion}
            onRegionChange={handleRegionChange}
            onSubregionChange={handleSubregionChange}
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
          title={t(mode === "travel" ? "rail.title.travel" : "rail.title", language)}
          groups={mode === "travel" ? travelRailGroups(activeRegion, language) : railGroups}
          activeId={mode === "travel" ? travelId : (activeTerrain?.id ?? null)}
          onSelect={mode === "travel" ? handleSelectCity : handleSelectById}
          searchPlaceholder={t("rail.search", language)}
          noMatchLabel={t("rail.no_match", language)}
          inlineCategories={mode === "travel"}
        />
      )}

      <ReadingPanel
        language={language}
        terrain={
          mode === "travel"
            ? travelPlace
              ? { name: travelPlace.name, elevation: NaN }
              : null
            : activeTerrain
              ? {
                  name: getTerrainName(activeTerrain.name, language),
                  elevation: activeTerrain.elevation,
                }
              : null
        }
        lesson={mode === "travel" ? null : lesson}
        sections={mode === "travel" ? travelSections : null}
        knowledge={mode === "travel" ? null : (activeTerrain?.knowledge ?? null)}
        isSpeaking={isSpeaking}
        isPreparing={narrationPreparing}
        isRouteFlying={isRouteFlying}
        routeNarration={routeNarration}
        flyoverName={flyoverName}
        activeSentenceIndex={activeSentenceIndex}
        activeSection={activeSection}
        onPlay={() => {
          if (mode === "travel") {
            if (travelSections) speakTravelGuide(travelSections);
          } else if (lesson) {
            void speakLessonWithHighlight(lesson);
          }
        }}
        onStop={mode === "travel" ? stopTravelNarration : stopSpeaking}
        onClose={
          isRouteFlying
            ? handleStopRoute
            : mode === "travel"
              ? clearTravelSelection
              : closePanel
        }
      />

      {/* 航线飞行中：地图上显示当前在哪 */}
      {isRouteFlying && flyoverName && (
        <div className="pointer-events-none absolute bottom-24 left-1/2 z-20 -translate-x-1/2">
          <div className="glass-panel flex items-center gap-2 rounded-full px-4 py-2 text-[13px]">
            <span className="text-[color:var(--accent)]">✈</span>
            {/* 起飞 / 抵达 的文字自带动词，其余前面加「正在飞越」 */}
            {/(起飞|抵达|Departing|Landing at)/.test(flyoverName) ? (
              <span className="editorial-title text-[color:var(--ink)]">{flyoverName}</span>
            ) : (
              <>
                <span className="text-[color:var(--ink-dim)]">
                  {language === "zh-CN" ? "正在飞越" : "Now over"}
                </span>
                <span className="editorial-title text-[color:var(--ink)]">{flyoverName}</span>
              </>
            )}
          </div>
        </div>
      )}

      {!showIntro && mode === "study" && !activeTerrain && (
        <JourneyBar
          language={language}
          groups={journeyGroups}
          activeCountry={effectiveRouteCountry}
          onCountryChange={setRouteCountry}
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
