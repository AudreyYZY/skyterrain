"use client";

import { t, type Language } from "@/lib/i18n";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface ContinentCard {
  id: string;
  name: string;
  nameEn: string;
  terrainCount: number;
  available: boolean;
}

interface ContinentIntroProps {
  language: Language;
  continents: ContinentCard[];
  /** 上次停留的大洲 —— 作为轮播的初始定位（仍需用户确认才进入） */
  initialContinentId?: string;
  /** 落到某张卡时把地球飞过去（预览用，不切换 activeRegion） */
  onPreview: (continentId: string) => void;
  /** 选定某片大陆，进入学习模式 */
  onEnter: (continentId: string) => void;
  /** 已选定后淡出 */
  onDismiss: () => void;
  /** 首屏语言切换 */
  onToggleLanguage: () => void;
}

/** Fisher–Yates，每次加载顺序不固定 */
function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * 初始画面：左右滑动的大陆选择卡片。每次加载都出现，等用户操作。
 * 顺序 shuffle，初始定位对准上次停留的大洲；只有用户翻卡后地球才跟着飞，
 * 只有点「开始探索」/ 点选中卡 / 回车才进入。加载时不自动动、不自动进入。
 */
export default function ContinentIntro({
  language,
  continents,
  initialContinentId,
  onPreview,
  onEnter,
  onDismiss,
  onToggleLanguage,
}: ContinentIntroProps) {
  const available = useMemo(() => continents.filter((c) => c.available), [continents]);
  // 首帧（含 SSR）用注册表顺序，避免 hydration mismatch；挂载后再 shuffle。
  const [cards, setCards] = useState<ContinentCard[]>(available);
  const [idx, setIdx] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const dragX = useRef(0);
  const dragStart = useRef<number | null>(null);
  const [drag, setDrag] = useState(0);
  // 用户是否真的翻过卡片 —— 在此之前不动地球（加载时绝不自动跳大洲、也不自动进入）
  const [navigated, setNavigated] = useState(false);

  // 挂载后打乱顺序，并把初始定位对准上次停留的大洲（仍不自动进入）——
  // shuffle 用随机数，只能在 client 挂载后做，否则 SSR/client 结果不一致导致 hydration mismatch
  useEffect(() => {
    const shuffled = shuffle(available);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCards(shuffled);
    if (initialContinentId) {
      const i = shuffled.findIndex((c) => c.id === initialContinentId);
      if (i >= 0) setIdx(i);
    }
  }, [available, initialContinentId]);

  const current = cards[idx];

  // 用户翻卡后：落到某张卡 → 地球飞过去。加载时（navigated=false）不动。
  useEffect(() => {
    if (navigated && !leaving && current) onPreview(current.id);
  }, [idx, navigated, leaving, current, onPreview]);

  const go = useCallback(
    (dir: number) => {
      setIdx((i) => {
        const n = i + dir;
        if (n < 0 || n >= cards.length) return i;
        setNavigated(true);
        return n;
      });
    },
    [cards.length],
  );

  const enter = useCallback(() => {
    if (leaving || !current) return;
    setLeaving(true);
    onEnter(current.id);
    window.setTimeout(() => onDismiss(), 520);
  }, [leaving, current, onEnter, onDismiss]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "Enter") enter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, enter]);

  if (cards.length === 0) return null;

  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
    dragX.current = 0;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStart.current == null) return;
    dragX.current = e.clientX - dragStart.current;
    setDrag(dragX.current);
  };
  const onPointerUp = () => {
    if (dragStart.current == null) return;
    const dx = dragX.current;
    dragStart.current = null;
    setDrag(0);
    if (dx <= -60) go(1);
    else if (dx >= 60) go(-1);
  };

  return (
    <div
      className={[
        "absolute inset-0 z-40 flex flex-col items-center justify-center px-6",
        "transition-opacity duration-500 ease-out",
        leaving ? "pointer-events-none opacity-0" : "opacity-100",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[#070a0f]/78 backdrop-blur-[2px]" />

      <button
        type="button"
        onClick={onToggleLanguage}
        className="absolute right-5 top-5 z-10 rounded-full border border-[color:var(--hairline)] bg-[color:var(--panel-solid)] px-4 py-2 text-[13px] font-medium text-[color:var(--ink)] transition-colors hover:border-[color:var(--accent-line)] hover:text-[color:var(--accent)]"
      >
        {language === "zh-CN" ? "EN" : "中"}
      </button>

      <div className="relative w-full max-w-3xl text-center editorial-enter">
        <p className="editorial-kicker mb-6">{t("intro.pick", language)}</p>

        <div
          className="relative flex touch-pan-y select-none items-center justify-center"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <button
            type="button"
            aria-label="previous"
            onClick={() => go(-1)}
            disabled={idx === 0}
            className="absolute left-0 z-10 flex h-9 w-9 items-center justify-center rounded-full text-[color:var(--ink-dim)] transition-colors hover:text-[color:var(--ink)] disabled:opacity-20"
          >
            ‹
          </button>

          <div className="relative h-[220px] w-full overflow-hidden">
            <div
              className="flex h-full items-center transition-transform duration-[var(--dur-panel)] ease-[var(--ease)]"
              style={{
                transform: `translateX(calc(${-idx * 100}% + ${drag}px))`,
              }}
            >
              {cards.map((c, i) => (
                <div key={c.id} className="flex h-full w-full shrink-0 flex-col items-center justify-center">
                  <button
                    type="button"
                    onClick={() => (i === idx ? enter() : (setNavigated(true), setIdx(i)))}
                    className={[
                      "flex flex-col items-center gap-2 rounded-2xl px-10 py-6 transition-all",
                      i === idx ? "scale-100 opacity-100" : "scale-90 opacity-40",
                    ].join(" ")}
                  >
                    <span className="editorial-title text-[clamp(2.25rem,6vw,3.5rem)] leading-[1.05] text-[color:var(--ink)]">
                      {language === "zh-CN" ? c.name : c.nameEn}
                    </span>
                    <span className="text-[12px] tabular-nums tracking-wide text-[color:var(--ink-dim)]">
                      {c.terrainCount} {t("intro.count", language)}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="next"
            onClick={() => go(1)}
            disabled={idx === cards.length - 1}
            className="absolute right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full text-[color:var(--ink-dim)] transition-colors hover:text-[color:var(--ink)] disabled:opacity-20"
          >
            ›
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5">
          {cards.map((c, i) => (
            <button
              key={c.id}
              type="button"
              aria-label={c.nameEn}
              onClick={() => {
                setNavigated(true);
                setIdx(i);
              }}
              className={[
                "h-1.5 rounded-full transition-all",
                i === idx ? "w-5 bg-[color:var(--accent)]" : "w-1.5 bg-white/20 hover:bg-white/40",
              ].join(" ")}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={enter}
          className={[
            "mt-8 inline-flex items-center gap-2 rounded-full px-6 py-2.5",
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
