/**
 * 当前大洲的持久化（2026-09-14 从 ExplorerApp 搬出：同一段 setActiveRegion + localStorage 原来抄了五份）。
 *
 * ⚠️ 只恢复**状态**，绝不触发相机飞行 —— 见 CLAUDE.md「首屏相机飞行约束」。
 */
import { REGIONS, setActiveRegion } from "@/lib/regions";

const KEY = "fge-active-region";

/** 早期版本把区域拆得更细（china / xinjiang 分列），现统一为大洲 */
const LEGACY: Record<string, string> = { china: "asia", xinjiang: "asia", australia: "oceania" };

export function readStoredRegion(): string | null {
  try {
    const stored = localStorage.getItem(KEY);
    const resolved = stored ? LEGACY[stored] ?? stored : null;
    return resolved && REGIONS.some((r) => r.id === resolved) ? resolved : null;
  } catch {
    return null;
  }
}

/** 同步模块级当前大洲 + 写 localStorage（React 状态由调用方自己 set） */
export function persistRegion(id: string): void {
  setActiveRegion(id);
  try {
    localStorage.setItem(KEY, id);
  } catch {
    /* ignore */
  }
}
