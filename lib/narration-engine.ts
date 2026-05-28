import type { TerrainPoint } from "@/types/terrain";

/**
 * 从结构化地理数据生成纪录片风格的中文讲解。
 * 优先使用结构化数据，回退到 lesson 字段。
 */
export function generateNarrationFromTerrainData(
  terrain: TerrainPoint
): string {
  const k = terrain.knowledge;
  const sections: string[] = [];

  // 1. 看到什么 — 飞机视角
  if (k.airplaneViewFeatures.length > 0) {
    sections.push(
      `从飞机舷窗向外看，${k.airplaneViewFeatures.join("，")}。`
    );
  } else if (terrain.lesson.seeing) {
    sections.push(terrain.lesson.seeing);
  }

  // 2. 地形特征
  if (k.terrainFeatures.length > 0) {
    sections.push(
      `这里的主要地形特征包括${k.terrainFeatures.join("、")}。`
    );
  }

  // 3. 形成原因
  if (k.formation.length > 0) {
    sections.push(k.formation[0]!);
  } else if (terrain.lesson.formation) {
    sections.push(terrain.lesson.formation);
  }

  // 4. 历史文化
  const historyParts: string[] = [];
  if (k.historicalTopics.length > 0) {
    historyParts.push(k.historicalTopics[0]!);
  }
  if (k.cultureTopics.length > 0) {
    historyParts.push(k.cultureTopics[0]!);
  }
  if (historyParts.length > 0) {
    sections.push(historyParts.join("。") + "。");
  } else if (terrain.lesson.history) {
    sections.push(terrain.lesson.history);
  }

  // 5. 趣味知识
  if (k.interestingFacts.length > 0) {
    sections.push(k.interestingFacts[0]!);
  }

  return sections.filter((s) => s.trim().length > 0).join(" ");
}

/**
 * 生成飞越时的简短播报（飞机接近时的即时讲解）
 */
export function generateFlyoverNarration(terrain: TerrainPoint): string {
  const k = terrain.knowledge;

  if (k.airplaneViewFeatures.length > 0) {
    const features = k.airplaneViewFeatures.slice(0, 2).join("，");
    return `你正在飞越${terrain.name}。${features}。`;
  }

  return terrain.flyoverCue;
}

/**
 * 生成完整的航线讲解脚本（飞越提示 + 完整讲解）
 */
export function generateRouteNarration(terrain: TerrainPoint): string {
  const flyover = generateFlyoverNarration(terrain);
  const full = generateNarrationFromTerrainData(terrain);
  return `${flyover}\n${full}`;
}
