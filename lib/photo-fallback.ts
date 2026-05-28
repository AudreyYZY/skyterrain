import { getAllTerrains, getTerrainById } from "@/lib/terrain";
import type { PhotoIdentifyResult } from "@/types/photo-identify";
import { lessonToSpeech } from "@/lib/lesson";

function resultFromTerrain(
  terrainId: string,
  confidence: PhotoIdentifyResult["confidence"],
  suffix = ""
): PhotoIdentifyResult | null {
  const t = getTerrainById(terrainId);
  if (!t) return null;

  return {
    possibleTerrain: `${t.name}${suffix}`,
    features: [
      t.cards.feature,
      `位置：${t.cards.location}`,
      `主峰：${t.cards.peak}`,
    ],
    confidence,
    narration: lessonToSpeech(t.lesson),
    source: "catalog",
  };
}

/** 根据航线/关键词做本地推测（无视觉模型时的可靠兜底） */
export function guessPhotoFromHint(hint?: string): PhotoIdentifyResult | null {
  if (!hint?.trim()) return null;

  const h = hint;

  if (/成都.*喀什|喀什.*成都|飞往喀什|到喀什/.test(h)) {
    return (
      resultFromTerrain("kunlun", "中", "（航线推测）") ??
      resultFromTerrain("tianshan", "中", "（航线推测）")
    );
  }

  if (/乌鲁木齐|乌市|地窝堡/.test(h)) {
    return resultFromTerrain("tianshan", "中", "（航线推测）");
  }

  if (/喀纳斯|禾木|阿勒泰/.test(h)) {
    return resultFromTerrain("kanas", "高");
  }

  if (/赛里木|博乐/.test(h)) {
    return resultFromTerrain("sayram", "高");
  }

  if (/伊犁|伊宁/.test(h)) {
    return resultFromTerrain("ili-valley", "高");
  }

  if (/天池|博格达/.test(h)) {
    return resultFromTerrain("tianchi", "高");
  }

  if (/塔克拉玛干|沙漠/.test(h)) {
    return resultFromTerrain("taklamakan", "中");
  }

  if (/昆仑/.test(h)) {
    return resultFromTerrain("kunlun", "高");
  }

  if (/天山/.test(h)) {
    return resultFromTerrain("tianshan", "高");
  }

  if (/阿尔泰/.test(h)) {
    return resultFromTerrain("altai", "高");
  }

  if (/吐鲁番|火焰山/.test(h)) {
    return resultFromTerrain("turpan-basin", "中");
  }

  // 默认：新疆雪山舷窗照
  if (/雪山|雪峰|积雪|舷窗|窗外/.test(h)) {
    return resultFromTerrain("tianshan", "低", "（特征推测）");
  }

  return null;
}

export function genericPhotoFallback(hint?: string): PhotoIdentifyResult {
  const guessed = guessPhotoFromHint(hint);
  if (guessed) return guessed;

  const names = getAllTerrains()
    .slice(0, 5)
    .map((t) => t.name)
    .join("、");

  return {
    possibleTerrain: "新疆山地或盆地地貌（待确认）",
    features: [
      "请补充航线或城市（如成都—喀什）以提高准确度",
      "可见平行山脊时多为昆仑山或天山",
      "可见大面积沙黄色区域可能接近塔克拉玛干边缘",
    ],
    confidence: "低",
    narration: `已收到舷窗照片，但当前 API 无法识图。请根据窗外景观对照：${names} 等。补充「从哪飞到哪、左右舷窗」后可自动推测。`,
    source: "fallback",
  };
}
