"use client";

import { t, type Language } from "@/lib/i18n";
import type { AppMode } from "@/lib/app-mode";

interface Props {
  mode: AppMode;
  onChange: (m: AppMode) => void;
  language: Language;
}

export default function ModeToggle({ mode, onChange, language }: Props) {
  return (
    <div className="pointer-events-auto flex rounded-full border border-[color:var(--hairline)] text-[11px] font-medium">
      {(["study", "travel"] as const).map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => onChange(m)}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            mode === m
              ? "bg-[color:var(--accent)] text-[color:var(--bg)]"
              : "text-[color:var(--ink-dim)] hover:text-[color:var(--ink)]"
          }`}
        >
          {t(`mode.${m}`, language)}
        </button>
      ))}
    </div>
  );
}
