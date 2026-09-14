"use client";
/**
 * 旅游模式：选中的城市 / 国家概览、攻略分段、分段播报与逐句高亮、中英切换时重载。
 * 2026-09-14 从 components/ExplorerApp.tsx 搬出，逻辑逐行不变。播报控制器 narrationRef 与学习模式共用，由调用方传入。
 */
import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import type { CesiumMapHandle } from "@/components/CesiumMap";
import type { PanelSection } from "@/components/ReadingPanel";
import type { Language } from "@/lib/i18n";
import type { AppMode } from "@/lib/app-mode";
import { getCityById, getCountryOverview } from "@/lib/places-registry";
import { resolveTravelGuide, travelGuideToSections } from "@/lib/travel-lesson";
import { createSectionNarration } from "@/lib/section-narration";
import { stopSpeech, type WordBoundary } from "@/lib/speech";

export interface TravelGuideDeps {
  mapRef: RefObject<CesiumMapHandle | null>;
  language: Language;
  mode: AppMode;
  activeRegionName: string;
  activeRegionNameEn: string;
  narrationRef: RefObject<ReturnType<typeof createSectionNarration> | null>;
  isSpeakingRef: RefObject<boolean>;
  setNarrationPreparing: (v: boolean) => void;
  setIsSpeaking: (v: boolean) => void;
  startHighlightWithTiming: (
    sections: { key: string; text: string }[],
    wb: WordBoundary[],
    audio: HTMLAudioElement,
    baseIndex: number,
  ) => void;
  startHighlightChunkEstimated: (key: string, text: string, baseIndex: number) => void;
  stopHighlight: () => void;
  flyToCountryOverview: () => void;
  /** 选中城市时清掉学习模式的地形与讲解 */
  clearStudyPanel: () => void;
}

export function useTravelGuide(deps: TravelGuideDeps) {
  const {
    mapRef, language, mode, activeRegionName, activeRegionNameEn, narrationRef, isSpeakingRef,
    setNarrationPreparing, setIsSpeaking, startHighlightWithTiming, startHighlightChunkEstimated,
    stopHighlight, flyToCountryOverview, clearStudyPanel,
  } = deps;
  /** 旅游模式：当前选中的城市 / 概览 id */
  const [travelId, setTravelId] = useState<string | null>(null);
  /** 最近一次发起的城市选择请求 id —— resolveTravelGuide 异步返回时用来丢弃过期结果 */
  const latestTravelRequestRef = useRef<string | null>(null);
  const [travelSections, setTravelSections] = useState<PanelSection[] | null>(null);
  const [travelPlace, setTravelPlace] = useState<{ id: string; name: string } | null>(null);

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
    [language, startHighlightWithTiming, startHighlightChunkEstimated, stopHighlight, narrationRef, setIsSpeaking, setNarrationPreparing],
  );

  const stopTravelNarration = useCallback(() => {
    narrationRef.current?.cancel();
    narrationRef.current = null;
    setNarrationPreparing(false);
    setIsSpeaking(false);
    stopHighlight();
  }, [stopHighlight, narrationRef, setIsSpeaking, setNarrationPreparing]);

  const clearTravelSelection = useCallback(() => {
    narrationRef.current?.cancel();
    narrationRef.current = null;
    setNarrationPreparing(false);
    setIsSpeaking(false);
    stopHighlight();
    setTravelId(null);
    setTravelSections(null);
    setTravelPlace(null);
  }, [stopHighlight, narrationRef, setIsSpeaking, setNarrationPreparing]);

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
      setTravelPlace({ id, name: travelNameOf(id) });
      setTravelSections(sections);
      clearStudyPanel();
      if (city) mapRef.current?.focusCity(city.lon, city.lat, city.view);
      else flyToCountryOverview();
      // 跳转的同时开始播报（合成首段期间镜头正在飞）
      speakTravelGuide(sections);
    },
    [language, travelNameOf, flyToCountryOverview, speakTravelGuide, stopHighlight, narrationRef, mapRef, clearStudyPanel],
  );

  const prevTravelLanguageRef = useRef(language);
  useEffect(() => {
    const languageChanged = prevTravelLanguageRef.current !== language;
    prevTravelLanguageRef.current = language;
    if (mode !== "travel" || !travelId) return;
    const wasSpeaking = languageChanged && isSpeakingRef.current;
    let cancelled = false;
    void resolveTravelGuide(travelId, language).then((guide) => {
      if (!guide || cancelled) return;
      const sections = travelGuideToSections(guide, language);
      setTravelPlace({ id: travelId, name: travelNameOf(travelId) });
      setTravelSections(sections);
      if (wasSpeaking) speakTravelGuide(sections);
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, mode, travelId]);

  /** 切大洲时只清状态（播报由调用方统一停） */
  const resetTravelState = useCallback(() => {
    setTravelId(null);
    setTravelSections(null);
    setTravelPlace(null);
  }, []);

  return {
    travelId, travelSections, travelPlace,
    speakTravelGuide, stopTravelNarration, clearTravelSelection, handleSelectCity, resetTravelState,
  };
}
