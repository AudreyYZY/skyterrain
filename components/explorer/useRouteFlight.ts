"use client";
/**
 * 航线飞行：状态（在飞 / 准备中 / 当前航线 / 解说稿 / 正在飞越）+ 开始 / 停止 + 沿途标注。
 * 2026-09-14 从 components/ExplorerApp.tsx 搬出，逻辑逐行不变；与外部的耦合收敛到参数里：
 * 清空学习模式选中（clearStudySelection）、到达别的大洲时切大洲（onArriveContinent）。
 */
import { useCallback, useEffect, useMemo, useRef, useState, type RefObject } from "react";
import type { CesiumMapHandle } from "@/components/CesiumMap";
import { labelManager } from "@/lib/cinematic-labels";
import { audioToPlanSec } from "@/lib/cesium/narration-clock";
import { getRouteNarration } from "@/lib/route-narration";
import { getTerrainName, type Language } from "@/lib/i18n";
import { narrationQueue } from "@/lib/narration-queue";
import { narrationManager } from "@/lib/narration-manager";
import { getRouteById, resolveRouteWaypoints } from "@/lib/routes";
import { splitSentences } from "@/lib/sentences";
import { speakAndWait, getCurrentAudio, getCurrentWordBoundaries, estimateSpeechDurationSec } from "@/lib/speech";
import { buildAnchoringForNarration } from "@/lib/route-anchors";
import { REGIONS, continentOfCountrySlug } from "@/lib/regions";
import type { AppMode } from "@/lib/app-mode";
import type { FlightRoute } from "@/types/route";
import { SPEECH_RATE, routeEndLesson } from "@/components/explorer/helpers";
import type { WordBoundary } from "@/lib/speech";

export interface RouteFlightDeps {
  mapRef: RefObject<CesiumMapHandle | null>;
  language: Language;
  mode: AppMode;
  activeRegion: string;
  narrationCancelledRef: RefObject<boolean>;
  setIsSpeaking: (v: boolean) => void;
  stopSpeaking: () => void;
  activeSentenceIndex: number | null;
  startHighlight: (text: string, section: string) => void;
  startHighlightWithTiming: (
    sections: { key: string; text: string }[],
    wb: WordBoundary[],
    audio: HTMLAudioElement,
    baseIndex: number,
  ) => void;
  stopHighlight: () => void;
  /** 开始飞航线时清空学习模式的选中地形 / 讲解 */
  clearStudySelection: () => void;
  /** 国际航线飞完、到达国在别的大洲：切过去 */
  onArriveContinent: (continentId: string) => void;
  setRouteCountry: (slug: string | null) => void;
}

export function useRouteFlight(deps: RouteFlightDeps) {
  const {
    mapRef, language, mode, activeRegion, narrationCancelledRef, setIsSpeaking, stopSpeaking,
    activeSentenceIndex, startHighlight, startHighlightWithTiming, stopHighlight,
    clearStudySelection, onArriveContinent, setRouteCountry,
  } = deps;
  const [isRouteFlying, setIsRouteFlying] = useState(false);
  const [routePreparing, setRoutePreparing] = useState(false);
  const [activeRouteId, setActiveRouteId] = useState<string | null>(null);
  /** 航线飞行中：整条航线的解说稿 */
  const [routeNarration, setRouteNarration] = useState<string | null>(null);
  /** 航线飞行中：当前正飞越的地形名（本地化）*/
  const [flyoverName, setFlyoverName] = useState<string | null>(null);
  const activeRouteRef = useRef<FlightRoute | null>(null);

  // 航线飞行中：解说读到某个地名时，「正在飞越」立刻切到那处地形（比按里程推算更准）
  useEffect(() => {
    if (!isRouteFlying || activeSentenceIndex == null || !routeNarration) return;
    // 首句是预告不是位置（「…飞往萨列马岛的短途航线」）：与锚定规则（lib/route-anchors.ts）一致，
    // 不拿首句切「正在飞越」，否则一开口标签就跳到终点（2026-09-14 浏览器测试时间线查出）
    if (activeSentenceIndex === 0) return;
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
        clearStudySelection();

        // 初始化航线标注层 — 保留常驻地形标注层
        labelManager.clearExcept(["terrain-labels"]);
        mapRef.current?.focusTerrain(null);
        const layerId = "route-waypoints";
        labelManager.createLayer(layerId, "航线航点", 10);

        setRouteNarration(null);
        setFlyoverName(null);

        const narrText =
          getRouteNarration(route.id, language, mode) ?? routeEndLesson(language).seeing;
        const estNarrationSec = estimateSpeechDurationSec(narrText, SPEECH_RATE, language);
        const anchoring = buildAnchoringForNarration(route.id, language, mode, narrText);
        // 解说真实播放状态 —— 镜头时钟逐帧读它（lib/cesium/narration-clock.ts）
        const narr = { started: false, done: false, audio: null as HTMLAudioElement | null, startWall: 0 };
        const planNarrationSec = anchoring?.narrationSec ?? estNarrationSec;

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
                  if (!narr.started) {
                    narr.started = true;
                    narr.audio = getCurrentAudio();
                    narr.startWall = performance.now();
                  }
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
              narr.done = true;
              setIsSpeaking(false);
              if (session.active) stopHighlight();
            }
          },
          narrationSignal: () => {
            if (!narr.started || narr.done) return { started: narr.started, done: narr.done, planSec: 0 };
            const a = narr.audio;
            const audioSec = a ? a.currentTime : (performance.now() - narr.startWall) / 1000;
            return {
              started: true,
              done: false,
              planSec: audioToPlanSec(audioSec, a && Number.isFinite(a.duration) ? a.duration : null, planNarrationSec),
            };
          },
          // 飞行时长由航线距离与这个估算共同决定（见 lib/cesium/route-flight.ts）；
          // 镜头节拍是帧率驱动的，不再跟随音频进度
          estNarrationSec,
          // 学习模式有锚点表时按解说排镜头：讲到哪个航点，镜头就在哪里
          anchoring,
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
                onArriveContinent(cont);
              }
              setRouteCountry(route.arrCountry);
            }
          },
          onCancelled: () => {
            narr.done = true;
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
    [language, mode, activeRegion, startHighlight, startHighlightWithTiming, stopHighlight, stopSpeaking,
      mapRef, narrationCancelledRef, setIsSpeaking, clearStudySelection, onArriveContinent, setRouteCountry]
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
  }, [stopSpeaking, mapRef, narrationCancelledRef]);

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

  /** 别处开始了新动作（选地形）：只把航线状态清掉，不动播报 */
  const resetRouteState = useCallback(() => {
    setIsRouteFlying(false);
    setRoutePreparing(false);
    setActiveRouteId(null);
    activeRouteRef.current = null;
  }, []);

  const clearRouteText = useCallback(() => {
    setRouteNarration(null);
    setFlyoverName(null);
  }, []);

  return {
    isRouteFlying, routePreparing, activeRouteId, routeNarration, flyoverName, routeFlightLabels,
    handleStartRoute, handleStopRoute, resetRouteState, clearRouteText,
  };
}
