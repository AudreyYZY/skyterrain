"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const MIN_W = 220;
const MAX_W = 420;
const DEFAULT_W = 280;
const COLLAPSED_W = 52;

interface ResizablePanelProps {
  side: "left" | "right";
  storageKey: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function ResizablePanel({
  side,
  storageKey,
  title,
  subtitle,
  children,
  footer,
}: ResizablePanelProps) {
  const [width, setWidth] = useState(DEFAULT_W);
  const [collapsed, setCollapsed] = useState(false);
  const dragging = useRef(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { w?: number; c?: boolean };
      if (typeof parsed.w === "number") {
        setWidth(Math.min(MAX_W, Math.max(MIN_W, parsed.w)));
      }
      if (typeof parsed.c === "boolean") setCollapsed(parsed.c);
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify({ w: width, c: collapsed })
    );
  }, [storageKey, width, collapsed]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (collapsed) return;
      dragging.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    [collapsed]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return;
      const delta =
        side === "left" ? e.movementX : -e.movementX;
      setWidth((w) => Math.min(MAX_W, Math.max(MIN_W, w + delta)));
    },
    [side]
  );

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    dragging.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  }, []);

  const panelW = collapsed ? COLLAPSED_W : width;
  const borderSide =
    side === "left" ? "border-r border-white/[0.06]" : "border-l border-white/[0.06]";

  return (
    <div
      className={[
        "pointer-events-auto relative flex shrink-0 flex-col transition-all duration-300",
        "bg-[#0a0e12]/60 backdrop-blur-2xl",
        borderSide,
      ].join(" ")}
      style={{ width: panelW, height: "100%" }}
    >
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between gap-2 px-3 py-3">
        {!collapsed ? (
          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-medium uppercase tracking-[0.2em] text-amber-300/60">
              {title}
            </p>
            {subtitle && (
              <p className="truncate text-[10px] text-white/30">{subtitle}</p>
            )}
          </div>
        ) : (
          <span
            className="mx-auto text-[10px] font-medium text-amber-300/60 [writing-mode:vertical-rl]"
            title={title}
          >
            {title}
          </span>
        )}
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white/40 transition hover:bg-white/[0.06] hover:text-white/70"
          title={collapsed ? "展开面板" : "收起面板"}
          aria-label={collapsed ? "展开面板" : "收起面板"}
        >
          {collapsed
            ? side === "left"
              ? "›"
              : "‹"
            : side === "left"
              ? "‹"
              : "›"}
        </button>
      </div>

      {!collapsed && (
        <>
          {/* Scrollable content area */}
          <div className="sidebar-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-3 pb-6 pt-1">
            {children}
          </div>
          {footer && (
            <div className="shrink-0 border-t border-white/[0.04] px-3 py-2">{footer}</div>
          )}
          {/* Resize handle */}
          <div
            role="separator"
            aria-orientation="vertical"
            aria-label="调整面板宽度"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            className={[
              "absolute top-0 z-10 h-full w-1 cursor-col-resize transition-colors hover:bg-amber-400/20",
              side === "left" ? "right-0" : "left-0",
            ].join(" ")}
          />
        </>
      )}
    </div>
  );
}
