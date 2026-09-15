"use client";
/** 航线飞行中地图上的「正在飞越 X」气泡（2026-09-14 从 ExplorerApp 搬出，外观不变） */
import type { Language } from "@/lib/i18n";

export default function FlyoverBubble({ name, language }: { name: string; language: Language }) {
  return (
    <div className="pointer-events-none absolute bottom-24 left-1/2 z-20 -translate-x-1/2">
      <div className="glass-panel flex items-center gap-2 rounded-full px-4 py-2 text-[13px]">
        <span className="text-[color:var(--accent)]">✈</span>
        {/* 起飞 / 抵达 的文字自带动词，其余前面加「正在飞越」 */}
        {/(起飞|抵达|Departing|Landing at)/.test(name) ? (
          <span className="editorial-title text-[color:var(--ink)]">{name}</span>
        ) : (
          <>
            <span className="text-[color:var(--ink-dim)]">
              {language === "zh-CN" ? "正在飞越" : "Now over"}
            </span>
            <span className="editorial-title text-[color:var(--ink)]">{name}</span>
          </>
        )}
      </div>
    </div>
  );
}
