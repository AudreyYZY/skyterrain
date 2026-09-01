"use client";

import { t, type Language } from "@/lib/i18n";
import { useEffect, useState } from "react";

interface IntroOverlayProps {
  language: Language;
  regionName: string;
  regionNameEn: string;
  onDismiss: () => void;
  onToggleLanguage: () => void;
}

const SEEN_KEY = "fge-intro-seen";

/**
 * 初始画面上的编辑式标题卡。
 * 首次访问显示；点击「开始探索」或任意地图交互后淡出。
 * 之后访问（localStorage 记住）直接跳过。
 */
export default function IntroOverlay({
  language,
  regionName,
  regionNameEn,
  onDismiss,
  onToggleLanguage,
}: IntroOverlayProps) {
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(true);

  // localStorage 只能在 client 挂载后读（SSR 无此 API），故意用 effect 而非渲染期间判断
  useEffect(() => {
    try {
      if (localStorage.getItem(SEEN_KEY)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(false);
        onDismiss();
      }
    } catch {
      /* ignore */
    }
  }, [onDismiss]);

  if (!mounted) return null;

  const dismiss = () => {
    if (leaving) return;
    setLeaving(true);
    try {
      localStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* ignore */
    }
    window.setTimeout(() => {
      setMounted(false);
      onDismiss();
    }, 520);
  };

  const region = language === "zh-CN" ? regionName : regionNameEn;

  return (
    <div
      className={[
        "absolute inset-0 z-40 flex items-center justify-center px-6",
        "transition-opacity duration-500 ease-out",
        leaving ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
    >
      {/* vignette so the title reads over any terrain */}
      <div className="absolute inset-0 bg-[#070a0f]/78 backdrop-blur-[2px]" />

      <button
        type="button"
        onClick={onToggleLanguage}
        className="absolute right-5 top-5 z-10 rounded-full border border-[color:var(--hairline)] bg-[color:var(--panel-solid)] px-4 py-2 text-[13px] font-medium text-[color:var(--ink)] transition-colors hover:border-[color:var(--accent-line)] hover:text-[color:var(--accent)]"
      >
        {language === "zh-CN" ? "EN" : "中"}
      </button>

      <div className="relative max-w-lg text-center editorial-enter">
        <p className="editorial-kicker mb-5">{t("travel.intro.kicker", language)}</p>

        <h1 className="editorial-title text-[clamp(2.75rem,7vw,4.25rem)] leading-[1.05]">
          {region}
        </h1>
        <p className="editorial-title mt-1 text-[clamp(1rem,2.4vw,1.25rem)] italic text-[color:var(--ink-dim)]">
          {t("travel.intro.subtitle", language)}
        </p>

        <p className="reading-body mx-auto mt-6 max-w-sm text-[0.95rem] text-[color:var(--ink-dim)]">
          {t("travel.intro.line", language)}
        </p>

        <button
          type="button"
          onClick={dismiss}
          className={[
            "mt-9 inline-flex items-center gap-2 rounded-full px-6 py-2.5",
            "border border-[color:var(--accent-line)] text-[color:var(--accent)]",
            "text-[0.8125rem] font-medium tracking-wide",
            "transition-colors duration-300 hover:bg-[color:var(--accent-soft)]",
          ].join(" ")}
        >
          {t("intro.enter", language)}
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}
