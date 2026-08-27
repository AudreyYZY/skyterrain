/**
 * 从 Natural Earth 10m geography_regions_polys 提取中国境内地形多边形
 * → public/data/gis/exports/{id}.geojson（Next.js 静态资源，运行时 fetch /data/gis/exports/*）
 *
 * 运行:  node scripts/extract-ne-landforms.mjs
 *
 * 无第三方依赖，手写解析 .shp / .dbf（WGS84 经纬度，见 .prj）。
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = join(
  ROOT,
  "data/gis/ne_10m_geography_regions_polys/ne_10m_geography_regions_polys"
);
// Next.js 从 public/ 提供静态文件，运行时 fetch 的是 /data/gis/exports/*
const OUT = join(ROOT, "public/data/gis/exports");

/** NE NAME（大小写不敏感，精确匹配）→ 我们的地形 id */
const NAME_TO_ID = {
  // 山脉
  "tian shan": "tianshan",
  "altay mountains": "altai",
  "kunlun mountains": "kunlun",
  "karakoram ra.": "karakoram",
  "quilian mountains": "qilian",
  "qinling mountains": "qinling",
  "taihang mts.": "taihang",
  "lüliang mts.": "luliang",
  "yin mts.": "yinshan",
  "greater khingan range": "daxinganling",
  "lesser khingan range": "xiaoxinganling",
  "himalayas": "himalaya",
  "dabie mts.": "dabie",
  "nan ling mts.": "nanling",
  "wuyi mts.": "wuyi",
  "dalou mts.": "dalou",
  "altun mts.": "altun",
  "borohoro mts.": "borohoro",
  "alataw mts.": "alataw",
  "tarbagatay ra.": "tarbagatay",
  "pamirs": "pamir",
  // 高原
  "plateau of tibet": "qinghai-tibet",
  "mongolian plateau": "inner-mongolia",
  "loess plateau": "loess",
  "yungui plateau": "yunnan-guizhou",
  // 盆地
  "tarim basin": "tarim-basin",
  "junggar basin": "junggar-basin",
  "qaidam basin": "qaidam",
  "sichuan basin": "sichuan",
  // 平原
  "north china plain": "north-china",
  "manchurian plain": "northeast",
  // 沙漠
  "taklimakan desert": "taklamakan",
  "gobi desert": "gobi",
  "mu us desert": "muus",
  // 走廊 / 峡谷
  "hexi corridor": "hexi-corridor",
  "yangtze gorges": "yangtze-gorges",
  "tsangpo gorge": "tsangpo-gorge",
  // 半岛 / 丘陵 / 岛
  "liaodong pen.": "liaodong-hills",
  "shandong pen.": "shandong-hills",
  "leizhou pen.": "leizhou",
  "hainan": "hainan",
  "taiwan": "taiwan",
};

// ---------- .dbf ----------
function readDbf(path) {
  const d = readFileSync(path);
  const numRec = d.readUInt32LE(4);
  const hdrLen = d.readUInt16LE(8);
  const recLen = d.readUInt16LE(10);
  const fields = [];
  let pos = 32;
  while (d[pos] !== 0x0d) {
    const name = d
      .subarray(pos, pos + 11)
      .toString("latin1")
      .replace(/\0.*$/, "");
    const len = d[pos + 16];
    fields.push({ name, len });
    pos += 32;
  }
  let off = 1;
  const offs = fields.map((f) => {
    const o = off;
    off += f.len;
    return { name: f.name, off: o, len: f.len };
  });
  const recs = [];
  for (let i = 0; i < numRec; i++) {
    const b = hdrLen + i * recLen;
    const r = {};
    for (const { name, off: o, len } of offs) {
      r[name] = d
        .subarray(b + o, b + o + len)
        .toString("utf8")
        .trim();
    }
    recs.push(r);
  }
  return recs;
}

// ---------- .shp ----------
function readShpPolygons(path) {
  const d = readFileSync(path);
  let pos = 100;
  const out = [];
  while (pos < d.length) {
    const clen = d.readUInt32BE(pos + 4); // 16-bit words
    const c = d.subarray(pos + 8, pos + 8 + clen * 2);
    const shpType = c.readUInt32LE(0);
    if (shpType === 5 || shpType === 15 || shpType === 25) {
      const numParts = c.readUInt32LE(36);
      const numPoints = c.readUInt32LE(40);
      const partStart = 44;
      const parts = [];
      for (let i = 0; i < numParts; i++) parts.push(c.readUInt32LE(partStart + i * 4));
      const ptStart = partStart + numParts * 4;
      const pts = [];
      for (let i = 0; i < numPoints; i++) {
        pts.push([
          c.readDoubleLE(ptStart + i * 16),
          c.readDoubleLE(ptStart + i * 16 + 8),
        ]);
      }
      const rings = [];
      for (let i = 0; i < numParts; i++) {
        const s = parts[i];
        const e = i + 1 < numParts ? parts[i + 1] : numPoints;
        rings.push(pts.slice(s, e));
      }
      out.push(rings);
    } else {
      out.push(null);
    }
    pos += 8 + clen * 2;
  }
  return out;
}

// ---------- 几何工具 ----------
function ringArea(r) {
  let a = 0;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    a += (r[j][0] + r[i][0]) * (r[j][1] - r[i][1]);
  }
  return Math.abs(a / 2);
}

/** Douglas–Peucker（经纬度平面近似）*/
function simplify(points, tol) {
  if (points.length <= 4) return points;
  const sqTol = tol * tol;
  const keep = new Uint8Array(points.length);
  keep[0] = keep[points.length - 1] = 1;
  const stack = [[0, points.length - 1]];
  const segDistSq = (p, a, b) => {
    let x = a[0];
    let y = a[1];
    let dx = b[0] - x;
    let dy = b[1] - y;
    if (dx || dy) {
      const t = ((p[0] - x) * dx + (p[1] - y) * dy) / (dx * dx + dy * dy);
      if (t > 1) {
        x = b[0];
        y = b[1];
      } else if (t > 0) {
        x += dx * t;
        y += dy * t;
      }
    }
    dx = p[0] - x;
    dy = p[1] - y;
    return dx * dx + dy * dy;
  };
  while (stack.length) {
    const [lo, hi] = stack.pop();
    let maxD = 0;
    let idx = -1;
    for (let i = lo + 1; i < hi; i++) {
      const d = segDistSq(points[i], points[lo], points[hi]);
      if (d > maxD) {
        maxD = d;
        idx = i;
      }
    }
    if (maxD > sqTol && idx !== -1) {
      keep[idx] = 1;
      stack.push([lo, idx], [idx, hi]);
    }
  }
  return points.filter((_, i) => keep[i]);
}

// ---------- 主流程 ----------
mkdirSync(OUT, { recursive: true });
const recs = readDbf(BASE + ".dbf");
const shapes = readShpPolygons(BASE + ".shp");

const seen = new Set();
let written = 0;
for (let i = 0; i < recs.length; i++) {
  const name = (recs[i].NAME || "").toLowerCase();
  const id = NAME_TO_ID[name];
  if (!id || seen.has(id)) continue;
  const rings = shapes[i];
  if (!rings || !rings.length) continue;

  // 取面积最大的环作为外环
  let ring = rings.reduce((best, r) => (ringArea(r) > ringArea(best) ? r : best), rings[0]);
  if (ring.length > 130) ring = simplify(ring, 0.02);
  // 闭合
  const first = ring[0];
  const last = ring[ring.length - 1];
  if (first[0] !== last[0] || first[1] !== last[1]) ring = [...ring, first];
  ring = ring.map(([x, y]) => [Math.round(x * 1e4) / 1e4, Math.round(y * 1e4) / 1e4]);

  writeFileSync(
    join(OUT, `${id}.geojson`),
    JSON.stringify({
      type: "Feature",
      properties: { id, source: "Natural Earth 10m geography_regions_polys" },
      geometry: { type: "Polygon", coordinates: [ring] },
    })
  );
  seen.add(id);
  written++;
  console.log(`  ${id.padEnd(20)} ${ring.length} pts  (NE: ${recs[i].NAME})`);
}

const missing = Object.values(NAME_TO_ID).filter((id) => !seen.has(id));
console.log(`\n写出 ${written} 个 geojson。`);
if (missing.length) console.log("未匹配:", missing.join(", "));
