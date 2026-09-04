/**
 * 地形轮廓几何工具 —— 精确 GeoJSON 轮廓加载 + bbox 兜底八边形 + 面积估算。
 * 从 components/CesiumMap.tsx 抽出（2026-09 技术债清理，行为不变，仅搬家）。
 */

/** 有精确 Natural Earth 轮廓的地形（data/gis/exports/*.geojson）*/
export const TERRAIN_RING_FILES = new Set([
  "alataw", "altai", "altun", "dabie", "dalou", "daxinganling",
  "gobi", "hainan", "hexi-corridor", "himalaya", "inner-mongolia", "junggar-basin",
  "karakoram", "kunlun", "leizhou", "liaodong-hills", "loess", "luliang", "muus",
  "nanling", "north-china", "northeast", "pamir", "qaidam", "qilian", "qinghai-tibet",
  "qinling", "shandong-hills", "sichuan", "taihang", "taiwan", "taklamakan",
  "tarim-basin", "tianshan", "tsangpo-gorge", "wuyi", "xiaoxinganling",
  "yangtze-gorges", "yinshan", "yunnan-guizhou",
]);

/** 取地形轮廓外环 [lon,lat][]，无文件返回 null */
export async function loadTerrainRing(id: string): Promise<[number, number][] | null> {
  if (!TERRAIN_RING_FILES.has(id)) return null;
  try {
    const res = await fetch(`/data/gis/exports/${id}.geojson`);
    if (!res.ok) return null;
    const gj = await res.json();
    const g = gj.geometry ?? gj;
    if (g.type === "Polygon") return g.coordinates[0] as [number, number][];
    if (g.type === "MultiPolygon") {
      // 取顶点最多的那个环
      let best: [number, number][] = [];
      for (const poly of g.coordinates as [number, number][][][]) {
        if (poly[0] && poly[0].length > best.length) best = poly[0] as [number, number][];
      }
      return best.length ? best : null;
    }
  } catch {
    /* ignore */
  }
  return null;
}

/** bbox → 八边形环（比矩形更像"一块地形"）*/
export function bboxOctagon(bbox: [number, number, number, number]): [number, number][] {
  const [w, s, e, n] = bbox;
  const cx = (w + e) / 2;
  const cy = (s + n) / 2;
  const rx = (e - w) / 2;
  const ry = (n - s) / 2;
  const k = 0.42; // 斜切比例
  return [
    [cx - rx, cy - ry * k], [cx - rx * k, cy - ry], [cx + rx * k, cy - ry],
    [cx + rx, cy - ry * k], [cx + rx, cy + ry * k], [cx + rx * k, cy + ry],
    [cx - rx * k, cy + ry], [cx - rx, cy + ry * k], [cx - rx, cy - ry * k],
  ];
}

/** 多边形环面积（度²，shoelace，仅用于比较大小）*/
export function ringAreaDeg2(ring: [number, number][]): number {
  let a = 0;
  for (let i = 0, n = ring.length; i < n; i++) {
    const [x1, y1] = ring[i]!;
    const [x2, y2] = ring[(i + 1) % n]!;
    a += x1 * y2 - x2 * y1;
  }
  return Math.abs(a) / 2;
}
