"use client";

import CesiumMap, {
  type CesiumMapHandle,
  type TerrainMode,
} from "@/components/CesiumMap";
import CesiumOverlayLabels from "@/components/CesiumOverlayLabels";
import IndexRail, { type RailGroup } from "@/components/IndexRail";
import ContinentIntro from "@/components/ContinentIntro";
import JourneyBar from "@/components/JourneyBar";
import ReadingPanel from "@/components/ReadingPanel";
import { labelManager, createTerrainLabel } from "@/lib/cinematic-labels";
import { TERRAIN_LABELS } from "@/lib/terrain-label-registry";
import { t, getTerrainName, type Language } from "@/lib/i18n";
import { narrationQueue } from "@/lib/narration-queue";
import { getRouteById } from "@/lib/routes";
import {
  speakAndWait,
  stopSpeech,
  warmupSpeechVoices,
} from "@/lib/speech";
import { narrationManager } from "@/lib/narration-manager";
import type { TerrainCards, TerrainLesson, TerrainPoint } from "@/types/terrain";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSentenceHighlight } from "@/components/useSentenceHighlight";
import ExplorerHeader from "@/components/explorer/ExplorerHeader";
import FlyoverBubble from "@/components/explorer/FlyoverBubble";
import CityMarkers from "@/components/CityMarkers";
import { type AppMode, getStoredMode, setStoredMode } from "@/lib/app-mode";
import {
  getCitiesForContinent,
  getCityById,
} from "@/lib/places-registry";
import { travelRailGroups } from "@/lib/travel-rail";
import { createSectionNarration } from "@/lib/section-narration";
import TravelPoiMarkers from "@/components/TravelPoiMarkers";
import RouteFlightMarkers from "@/components/RouteFlightMarkers";
import {
  REGIONS,
  DEFAULT_REGION_ID,
  type Region,
} from "@/lib/regions";
import {
} from "@/components/explorer/helpers";
import { studyRailGroups } from "@/components/explorer/rail-groups";
import { journeyCountrySlugsFor, journeyGroupsFor } from "@/components/explorer/journey";
import { STUDY_INTRO_CONTINENTS, TRAVEL_INTRO_CONTINENTS } from "@/components/explorer/intro-continents";
import { persistRegion, readStoredRegion } from "@/components/explorer/region-state";
import { useRouteFlight } from "@/components/explorer/useRouteFlight";
import { useTravelGuide } from "@/components/explorer/useTravelGuide";
import { useStudyLesson } from "@/components/explorer/useStudyLesson";

declare global {
  interface Window {
    /** 开发环境调试面板 — 仅 NODE_ENV !== "production" 时挂载 */
    labelManager?: import("@/lib/cinematic-labels").CinematicLabelManager;
  }
}

export default function ExplorerApp() {
  const mapRef = useRef<CesiumMapHandle>(null);
  const [activeTerrain, setActiveTerrain] = useState<TerrainPoint | null>(null);
  const [, setDisplayCards] = useState<TerrainCards | null>(null);
  const [lesson, setLesson] = useState<TerrainLesson | null>(null);
  const [, setError] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [terrainMode, setTerrainMode] = useState<TerrainMode | null>(null);
  /** 底部航线面板当前聚焦的国家（选某国地形 / 点国家切换时更新）*/
  const [routeCountry, setRouteCountry] = useState<string | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [hoveredTerrainId, setHoveredTerrainId] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>("zh-CN");
  // mode / activeRegion 首帧用 SSR 默认值，挂载后再从 localStorage 恢复
  // （避免 server 默认值与 client 存储值不一致导致 hydration mismatch）
  const [mode, setMode] = useState<AppMode>("study");
  /** 讲解 / 攻略播报：正在合成首段（“准备中”按钮态） */
  const [narrationPreparing, setNarrationPreparing] = useState(false);
  const narrationRef = useRef<ReturnType<typeof createSectionNarration> | null>(null);
  const [activeRegion, setActiveRegionState] = useState<string>(DEFAULT_REGION_ID);

  useEffect(() => {
    // mode 首帧用 SSR 默认值（study），这里挂载后从 localStorage 恢复真实值——
    // 只能在 effect 里做（server 端无 localStorage），故意不改写成渲染期间判断
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMode(getStoredMode());
    // 只恢复状态、不飞相机（首屏相机飞行约束）
    const stored = readStoredRegion();
    if (stored) setActiveRegionState(stored);
  }, []);

  // 当前区域名称（用于 Header 显示）
  const activeRegionObj = REGIONS.find((r) => r.id === activeRegion);
  const activeRegionName = activeRegionObj?.name ?? "亚洲";
  const activeRegionNameEn = activeRegionObj?.nameEn ?? activeRegionObj?.name ?? "Asia";
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

  const showIntroRef = useRef(showIntro);
  useEffect(() => {
    showIntroRef.current = showIntro;
  }, [showIntro]);


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

  const clearStudySelection = useCallback(() => {
    setError(null);
    setLesson(null);
    setActiveTerrain(null);
    setDisplayCards(null);
  }, []);
  const onArriveContinent = useCallback((cont: string) => {
    setActiveRegionState(cont);
    persistRegion(cont);
  }, []);
  const {
    isRouteFlying, routePreparing, activeRouteId, routeNarration, flyoverName, routeFlightLabels,
    handleStartRoute, handleStopRoute, resetRouteState, clearRouteText,
  } = useRouteFlight({
    mapRef, language, mode, activeRegion, narrationCancelledRef, setIsSpeaking, stopSpeaking,
    activeSentenceIndex, startHighlight, startHighlightWithTiming, stopHighlight,
    clearStudySelection, onArriveContinent, setRouteCountry,
  });

  // 选中地形 / 开始航线后，收起初始标题卡——渲染期间比较代替 effect+setState
  const activeOrFlying = Boolean(activeTerrain) || isRouteFlying;
  const [prevActiveOrFlying, setPrevActiveOrFlying] = useState(activeOrFlying);
  if (activeOrFlying !== prevActiveOrFlying) {
    setPrevActiveOrFlying(activeOrFlying);
    if (activeOrFlying) setShowIntro(false);
  }


  // 切语言时要知道「刚才是不是正在播」，以便用新语言重播
  const isSpeakingRef = useRef(isSpeaking);
  useEffect(() => {
    isSpeakingRef.current = isSpeaking;
  }, [isSpeaking]);

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

  const clearStudyPanel = useCallback(() => {
    setActiveTerrain(null);
    setLesson(null);
  }, []);
  const {
    travelId, travelSections, travelPlace,
    speakTravelGuide, stopTravelNarration, clearTravelSelection, handleSelectCity, resetTravelState,
  } = useTravelGuide({
    mapRef, language, mode, activeRegionName, activeRegionNameEn, narrationRef, isSpeakingRef,
    setNarrationPreparing, setIsSpeaking, startHighlightWithTiming, startHighlightChunkEstimated,
    stopHighlight, flyToCountryOverview, clearStudyPanel,
  });

  /** 区域切换 — 地球平滑飞向目标区域 */
  const handleRegionChange = useCallback(
    (region: Region) => {
      if (!region) return;
      setActiveRegionState(region.id);
      persistRegion(region.id);
      // 取消当前飞行和叙述
      mapRef.current?.stopFlight();
      narrationCancelledRef.current = true;
      narrationQueue.cancel();
      stopSpeech();
      setIsSpeaking(false);
      setActiveTerrain(null);
      setLesson(null);
      setDisplayCards(null);
      resetTravelState();
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
    [resetTravelState],
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
      persistRegion(r.id);
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
        persistRegion(geo.continentId);
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





  const { speakLessonWithHighlight, handleSelectById, handleMapTerrainSelect } = useStudyLesson({
    mapRef, language, mode, activeRegion, activeTerrain, isRouteFlying, narrationRef, narrationCancelledRef,
    isSpeakingRef, setIsSpeaking, setNarrationPreparing, stopAudio, stopSpeaking, startHighlight,
    startHighlightWithTiming, startHighlightChunkEstimated, stopHighlight, setActiveTerrain, setDisplayCards,
    setLesson, setError, setRouteCountry, resetRouteState, onArriveContinent,
  });

  /**
   * 左侧目录分组 — 按当前大洲下的国家分栏。
   * 国家顺序：次区域地理顺序 → COUNTRIES 顺序（见 lib/regions.ts）。
   * 国家内地形顺序：T1 骨架 → T2 → T3，同级按骨架类地貌优先、再按注册表顺序。
   */
  const railGroups: RailGroup[] = useMemo(() => studyRailGroups(activeRegion, language), [activeRegion, language]);

  const terrainCount = railGroups.reduce((n, g) => n + g.items.length, 0);

  /** 底部航线面板：当前大洲下有航线的国家 + 聚焦国家 + 两组航线 */
  const journeyCountrySlugs = useMemo(() => journeyCountrySlugsFor(activeRegion), [activeRegion]);
  const journeyGroups = useMemo(
    () => journeyGroupsFor(journeyCountrySlugs, language),
    [journeyCountrySlugs, language],
  );
  // routeCountry 为 null → 显示全部国家；选某国地形后聚焦到该国
  const effectiveRouteCountry =
    routeCountry && journeyCountrySlugs.includes(routeCountry) ? routeCountry : null;


  /** 关闭讲解面板 — 停止播报并清空当前地形 */
  const closePanel = () => {
    stopSpeaking();
    setActiveTerrain(null);
    setLesson(null);
    setDisplayCards(null);
  };



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
      clearRouteText();
      clearTravelSelection();
      flyToCountryOverview();
    },
    [mode, flyToCountryOverview, stopSpeaking, clearTravelSelection, clearRouteText],
  );




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
        {/* 航线飞行时标出起降机场与沿途航点 —— 学习模式不渲染城市点，
            没有这层就完全看不出飞到了哪、终点是不是真的那座城市 */}
        <RouteFlightMarkers
          mapRef={mapRef}
          route={isRouteFlying && activeRouteId ? (getRouteById(activeRouteId) ?? null) : null}
          language={language}
        />

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
          continents={mode === "study" ? STUDY_INTRO_CONTINENTS : TRAVEL_INTRO_CONTINENTS}
          countLabel={t(mode === "study" ? "intro.count" : "intro.count.travel", language)}
          initialContinentId={activeRegion}
          onPreview={handleIntroPreview}
          onEnter={handleIntroEnter}
          onDismiss={() => setShowIntro(false)}
          onToggleLanguage={() => setLanguage(language === "zh-CN" ? "en-US" : "zh-CN")}
        />
      )}

      <ExplorerHeader
        showIntro={showIntro}
        regionName={language === "zh-CN" ? activeRegionName : activeRegionNameEn}
        terrainCount={terrainCount}
        mode={mode}
        onModeChange={handleModeChange}
        activeRegion={activeRegion}
        onRegionChange={handleRegionChange}
        onSubregionChange={handleSubregionChange}
        language={language}
        onToggleLanguage={() => setLanguage(language === "zh-CN" ? "en-US" : "zh-CN")}
      />

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
        verificationKey={
          mode === "travel"
            ? travelPlace
              ? `travel/${travelPlace.id}`
              : null
            : activeTerrain
              ? `terrain/${activeTerrain.id}`
              : null
        }
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
      {isRouteFlying && flyoverName && <FlyoverBubble name={flyoverName} language={language} />}

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
