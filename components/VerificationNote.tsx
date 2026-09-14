"use client";

import { VERIFICATION_STATUS } from "@/lib/verification-status.data";
import type { Language } from "@/lib/i18n";

/**
 * 阅读面板底部的**核实状态**一行。
 *
 * 为什么要有它（2026-09-12）：项目的诚实声明此前只写在 README 里，而**读内容的人不看 README**。
 * 用户在界面上读到一句话时，没有任何信号区分「有人拿权威来源核过」与「依据公开资料整理、
 * 没人逐条看过」。一旦他自己撞见一处错，很自然会推断「这里所有内容都不可信」——
 * 而避免这个结果的办法不是把错全改完（做不到），是**事先就把话说清楚**。
 *
 * 显示的是**字段粒度**的比例（本篇 N 段里有 M 段带核实留痕），不是条目粒度 ——
 * 后者会把「某一轮在这条里改过一句」说成「这条核过了」，而同条目另外五段没人看过。
 * ⚠️ 它只说「有没有人核过」，**不说「对不对」**。
 */
export default function VerificationNote({
  entryKey,
  language,
}: {
  entryKey: string | null;
  language: Language;
}) {
  if (!entryKey) return null;
  const row = VERIFICATION_STATUS[entryKey];
  const zh = language === "zh-CN";

  // 查不到这条 —— 如实说「没有留痕」，不要静默不显示
  const f = row?.f ?? 0;
  const v = row?.v ?? 0;
  const none = !row || v === 0;

  const label = zh
    ? none
      ? "本篇依据公开资料整理，尚未逐条核对权威来源。"
      : `本篇 ${f} 段中 ${v} 段有核实留痕${row!.d ? `（最近 ${row!.d}）` : ""}，其余依据公开资料整理。`
    : none
      ? "Compiled from public sources; not yet checked claim by claim."
      : `${v} of ${f} sections carry a verification trail${row!.d ? ` (latest ${row!.d})` : ""}; the rest are compiled from public sources.`;

  const caveat = zh
    ? "「有留痕」指有人对照过来源，不等于每句都对。发现错误欢迎指出。"
    : "A trail means someone checked against a source — not that every sentence is right.";

  return (
    <div className="mt-6 border-t border-[color:var(--hairline)] pt-3">
      <p className="text-[11px] leading-relaxed text-white/35">
        <span className="text-white/45">{label}</span>
        <br />
        {caveat}
      </p>
    </div>
  );
}
