import aibi from "@/data/aibi.json";
import altai from "@/data/altai.json";
import bachu from "@/data/bachu.json";
import bayanbulak from "@/data/bayanbulak.json";
import bogda from "@/data/bogda.json";
import bosten from "@/data/bosten.json";
import ertis from "@/data/ertis.json";
import flamingMountains from "@/data/flaming-mountains.json";
import gurbantunggut from "@/data/gurbantunggut.json";
import hotan from "@/data/hotan.json";
import iliValley from "@/data/ili-valley.json";
import junggarBasin from "@/data/junggar-basin.json";
import kanas from "@/data/kanas.json";
import karakoram from "@/data/karakoram.json";
import kashgar from "@/data/kashgar.json";
import kuche from "@/data/kuche.json";
import kumtag from "@/data/kumtag.json";
import kunlun from "@/data/kunlun.json";
import lopNur from "@/data/lop-nur.json";
import maigaiti from "@/data/maigaiti.json";
import muztaghAta from "@/data/muztagh-ata.json";
import narat from "@/data/narat.json";
import pamir from "@/data/pamir.json";
import sayram from "@/data/sayram.json";
import taklamakan from "@/data/taklamakan.json";
import tarimBasin from "@/data/tarim-basin.json";
import tarimRiver from "@/data/tarim-river.json";
import tianchi from "@/data/tianchi.json";
import tianshan from "@/data/tianshan.json";
import turpanBasin from "@/data/turpan-basin.json";
import turpanCity from "@/data/turpan-city.json";
import yarkantRiver from "@/data/yarkant-river.json";
import {
  TERRAIN_CATEGORY_LABEL,
  TERRAIN_CATEGORY_ORDER,
} from "@/lib/terrain-categories";
import { getTerrainEntry } from "@/lib/terrain-registry";
import type { TerrainCategory, TerrainPoint } from "@/types/terrain";

const RAW_TERRAINS = [
  // Mountain Ranges
  tianshan,
  altai,
  kunlun,
  karakoram,
  bogda,
  pamir,
  muztaghAta,
  // Lakes
  kanas,
  sayram,
  tianchi,
  bosten,
  aibi,
  lopNur,
  // Deserts
  taklamakan,
  gurbantunggut,
  kumtag,
  // Basins
  junggarBasin,
  tarimBasin,
  turpanBasin,
  // Rivers & Valleys
  iliValley,
  tarimRiver,
  ertis,
  yarkantRiver,
  // Scenic
  flamingMountains,
  narat,
  kuche,
  bayanbulak,
  // Cities
  kashgar,
  hotan,
  turpanCity,
  // Oasis
  bachu,
  maigaiti,
] as TerrainPoint[];

/**
 * 位置以 lib/terrain-registry.ts 为单一真实源：
 * 用注册表锚点覆盖 JSON 里的 lat/lon（JSON 仅保留讲解内容与巡航高度 cameraHeight）。
 */
const TERRAINS: TerrainPoint[] = RAW_TERRAINS.map((t) => {
  const entry = getTerrainEntry(t.id);
  return {
    ...t,
    region: t.region ?? "xinjiang",
    lat: entry?.landmark.lat ?? t.lat,
    lon: entry?.landmark.lon ?? t.lon,
  };
});

export interface TerrainCategoryGroup {
  category: TerrainCategory;
  label: string;
  terrains: TerrainPoint[];
}

export function getAllTerrains(): TerrainPoint[] {
  return TERRAINS;
}

/** 将多个底层分类合并为一个展示分组 */
const CATEGORY_MERGE: Record<TerrainCategory, TerrainCategory[]> = {
  mountain_range: ["mountain_range"],
  lake: ["lake"],
  desert: ["desert"],
  basin: ["basin"],
  river: ["river", "valley"],
  scenic: ["scenic", "oasis", "silk_road"],
  valley: ["river", "valley"],
  oasis: ["scenic", "oasis", "silk_road"],
  silk_road: ["scenic", "oasis", "silk_road"],
  city: ["city"],
};

export function getTerrainsByCategory(): TerrainCategoryGroup[] {
  return TERRAIN_CATEGORY_ORDER.map((category) => ({
    category,
    label: TERRAIN_CATEGORY_LABEL[category],
    terrains: TERRAINS.filter((t) =>
      (CATEGORY_MERGE[category] ?? [category]).includes(t.category)
    ),
  })).filter((group) => group.terrains.length > 0);
}

/** 预计算的分类分组（供层级构建使用） */
export const TERRAIN_CATEGORY_GROUPS: TerrainCategoryGroup[] = getTerrainsByCategory();

export function getTerrainById(id: string): TerrainPoint | undefined {
  return TERRAINS.find((t) => t.id === id);
}
