/**
 * Terrain Label Theme
 *
 * 所有视觉参数集中在此文件。
 * 地貌数据只引用 themeToken，不包含具体字号/颜色。
 * 修改视觉风格只需改此文件，不影响地貌数据。
 */

export type Importance = "continental" | "national" | "regional" | "poi";

export interface ThemeToken {
  fontScale: number;
  fontWeight: number;
  letterSpacing: string;
  minZoom: number;
  maxZoom: number;
}

/** 默认主题 — 参考 Natural Earth / MapLibre 符号规范 */
export const TERRAIN_THEME: Record<Importance, ThemeToken> = {
  continental: {
    fontScale: 1.4,
    fontWeight: 300,
    letterSpacing: "0.5em",
    minZoom: 1,
    maxZoom: 20,
  },
  national: {
    fontScale: 1.15,
    fontWeight: 300,
    letterSpacing: "0.35em",
    minZoom: 3,
    maxZoom: 20,
  },
  regional: {
    fontScale: 1.0,
    fontWeight: 400,
    letterSpacing: "0.2em",
    minZoom: 5,
    maxZoom: 20,
  },
  poi: {
    fontScale: 0.85,
    fontWeight: 500,
    letterSpacing: "0.08em",
    minZoom: 7,
    maxZoom: 20,
  },
};

/** 基础字号 — 所有 importance 级别基于此缩放 */
export const BASE_FONT_SIZE = 18;

/** 获取实际字号 */
export function getFontSize(importance: Importance): number {
  return Math.round(BASE_FONT_SIZE * TERRAIN_THEME[importance].fontScale);
}

/** 文字样式常量 */
export const LABEL_TEXT_STYLE = {
  color: "#ffffff",
  stroke: "rgba(0, 0, 0, 0.6)",
  strokeWidth: 0.5,
  shadow: "0 0 3px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.7)",
  fontFamily: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif",
} as const;
