"use client";
/**
 * 学习模式：选中地形（侧栏 / 地图标签 / 地图点击）→ 飞过去 → 讲解 6 板块 + 分段播报与逐句高亮；中英切换时重载。
 * 2026-09-14 从 components/ExplorerApp.tsx 搬出，逻辑逐行不变。地形 / 讲解状态仍归 ExplorerApp 所有（面板、航线、
 * 旅游都要读写），这里只拿 setter。
 */
import { useCallback, useEffect, useRef, type Dispatch, type RefObject, type SetStateAction } from "react";
import type { CesiumMapHandle } from "@/components/CesiumMap";
import type { GeographicFeature } from "@/features/types";
import { CHINA_CORE_FEATURES } from "@/features/china-core-features";
import { labelManager } from "@/lib/cinematic-labels";
import type { Language } from "@/lib/i18n";
import type { AppMode } from "@/lib/app-mode";
import { lessonSections } from "@/lib/lesson";
import { narrationQueue } from "@/lib/narration-queue";
import { REGIONS } from "@/lib/regions";
import { createSectionNarration } from "@/lib/section-narration";
import { speakAndWait, stopSpeech, type WordBoundary } from "@/lib/speech";
import { computeTerrainCamera, type CameraParams } from "@/lib/terrain-camera";
import { resolveLesson } from "@/lib/terrain-lesson";
import { getTerrainById } from "@/lib/terrain";
import { getTerrainEntry } from "@/lib/terrain-registry";
import type { TerrainCards, TerrainCategory, TerrainLesson, TerrainPoint } from "@/types/terrain";
import {
  POST_NARRATION_DWELL_MS,
  SPEECH_RATE,
  ZERO_INTERACTION_STYLE,
  placeholderLesson,
  registryCatToFeatureType,
} from "@/components/explorer/helpers";

export interface StudyLessonDeps {
  mapRef: RefObject<CesiumMapHandle | null>;
  language: Language;
  mode: AppMode;
  activeRegion: string;
  activeTerrain: TerrainPoint | null;
  isRouteFlying: boolean;
  narrationRef: RefObject<ReturnType<typeof createSectionNarration> | null>;
  narrationCancelledRef: RefObject<boolean>;
  isSpeakingRef: RefObject<boolean>;
  setIsSpeaking: (v: boolean) => void;
  setNarrationPreparing: (v: boolean) => void;
  stopAudio: () => void;
  stopSpeaking: () => void;
  startHighlight: (text: string, section: string) => void;
  startHighlightWithTiming: (
    sections: { key: string; text: string }[],
    wb: WordBoundary[],
    audio: HTMLAudioElement,
    baseIndex: number,
  ) => void;
  startHighlightChunkEstimated: (key: string, text: string, baseIndex: number) => void;
  stopHighlight: () => void;
  setActiveTerrain: Dispatch<SetStateAction<TerrainPoint | null>>;
  setDisplayCards: Dispatch<SetStateAction<TerrainCards | null>>;
  setLesson: Dispatch<SetStateAction<TerrainLesson | null>>;
  setError: Dispatch<SetStateAction<string | null>>;
  setRouteCountry: (slug: string | null) => void;
  resetRouteState: () => void;
  onArriveContinent: (continentId: string) => void;
}

export function useStudyLesson(deps: StudyLessonDeps) {
  const {
    mapRef, language, mode, activeRegion, activeTerrain, isRouteFlying, narrationRef, narrationCancelledRef,
    isSpeakingRef, setIsSpeaking, setNarrationPreparing, stopAudio, stopSpeaking, startHighlight,
    startHighlightWithTiming, startHighlightChunkEstimated, stopHighlight, setActiveTerrain, setDisplayCards,
    setLesson, setError, setRouteCountry, resetRouteState, onArriveContinent,
  } = deps;

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
    [stopAudio, language, setIsSpeaking]
  );

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
    [language, startHighlightWithTiming, startHighlightChunkEstimated, stopHighlight, narrationRef, setIsSpeaking, setNarrationPreparing]
  );

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
    [speakText, startHighlight, speakLessonWithHighlight, stopHighlight, language, narrationCancelledRef, setActiveTerrain, setDisplayCards, setError, setLesson]
  );

  const handleSelectTerrain = useCallback(
    async (terrain: TerrainPoint): Promise<void> => {
      console.log("[ExplorerApp] handleSelectTerrain:", terrain.id, terrain.name);

      // 取消正在进行的航线和叙述
      narrationCancelledRef.current = true;
      narrationQueue.cancel();
      mapRef.current?.stopFlight();
      resetRouteState();
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
    [showTerrainLesson, resetRouteState, mapRef, narrationCancelledRef, setError]
  );

  /** 处理全国 Feature 选择 (点击侧边栏或地图标签) — 飞行 + 讲解 */
  const handleSelectFeature = useCallback(
    async (feature: import("@/features/types").GeographicFeature): Promise<void> => {
      console.log("[Narration] handleSelectFeature start");
      // 取消正在进行的航线和叙述，然后重置为 false 以开始新的播报
      narrationCancelledRef.current = true;
      narrationQueue.cancel();
      mapRef.current?.stopFlight();
      resetRouteState();
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
    [stopHighlight, speakLessonWithHighlight, language, resetRouteState, mapRef, narrationCancelledRef, setActiveTerrain, setError, setLesson]
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
    [handleSelectTerrain, handleSelectFeature, setRouteCountry]
  );

  /** 地图上直接点某地形 — 若属于其它大洲，先切过去再选中 */
  const handleMapTerrainSelect = useCallback(
    (id: string) => {
      const e = getTerrainEntry(id);
      if (e && e.regionId !== activeRegion && REGIONS.some((r) => r.id === e.regionId)) {
        onArriveContinent(e.regionId);
      }
      handleSelectById(id);
    },
    [activeRegion, handleSelectById, onArriveContinent]
  );

  // 学习模式同理：打开着一篇讲解时切语言，原来只有标题跟着换、正文与播报都停在旧语言
  const prevStudyLanguageRef = useRef(language);
  useEffect(() => {
    if (prevStudyLanguageRef.current === language) return;
    prevStudyLanguageRef.current = language;
    if (mode !== "study" || isRouteFlying || !activeTerrain) return;
    const terrain = activeTerrain;
    const wasSpeaking = isSpeakingRef.current;
    if (wasSpeaking) stopSpeaking();
    let cancelled = false;
    void resolveLesson(terrain.id, language, { nameZh: terrain.name, fallback: null }).then((l) => {
      if (cancelled) return;
      const next = l ?? placeholderLesson(language);
      setLesson(next);
      if (wasSpeaking && l) void speakLessonWithHighlight(l);
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return {
    speakLessonWithHighlight, handleSelectById, handleMapTerrainSelect,
  };
}
