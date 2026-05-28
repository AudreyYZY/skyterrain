import OpenAI from "openai";
import { stripEmojis } from "@/lib/strip-emojis";
import type { TerrainLesson, TerrainPoint } from "@/types/terrain";

function buildPrompt(terrain: TerrainPoint): string {
  const facts = terrain.facts.map((f) => `- ${f}`).join("\n");
  const base = terrain.lesson;

  return `你是一名地理老师和飞机导游，不是纪录片旁白写手。

请为乘客介绍以下地貌，严格按 JSON 结构输出（不要 markdown，不要代码块）：

名称：${terrain.name}
类型：${terrain.type}
参考海拔：${terrain.elevation} 米
简介：${terrain.description}
知识要点：
${facts}

参考教案（可在此基础上改写，但必须更准确、更清晰）：
- 看到：${base.seeing}
- 形成：${base.formation}
- 历史：${base.history}
- 冷知识：${base.funFact}

输出格式：
{
  "seeing": "①当前位置与窗外可见景观，约50字。说明在哪里、窗外有什么（山脊/雪线/沙漠纹/湖泊颜色等）。禁止比喻和文学修辞。",
  "formation": "②地貌形成原因，约80字。解释为什么长成这样（构造运动/冰川/河流/风蚀等）。",
  "history": "③历史文化背景，约80字。与新疆、丝路、农牧、城市的关系。",
  "funFact": "④一个有趣冷知识，约30字。具体数据或事实。"
}

要求：
1. 中文
2. 语言清晰易懂，面向普通游客
3. 禁止：银龙、亘古、沉默、诗意、散文式排比
4. 禁止使用任何 emoji 或表情符号
5. 优先回答：这是哪、窗外看到什么、为什么重要`;
}

function parseLesson(raw: string, fallback: TerrainLesson): TerrainLesson {
  const jsonMatch = raw.match(/\{[\s\S]*\}/);
  if (!jsonMatch) return fallback;

  try {
    const parsed = JSON.parse(jsonMatch[0]) as Partial<TerrainLesson>;
    return {
      seeing: stripEmojis(parsed.seeing?.trim() || fallback.seeing),
      formation: stripEmojis(parsed.formation?.trim() || fallback.formation),
      history: stripEmojis(parsed.history?.trim() || fallback.history),
      funFact: stripEmojis(parsed.funFact?.trim() || fallback.funFact),
    };
  } catch {
    return fallback;
  }
}

export async function generateLesson(
  terrain: TerrainPoint
): Promise<TerrainLesson> {
  const apiKey = process.env.MIMO_API_KEY;
  const baseURL = process.env.MIMO_BASE_URL;

  if (!apiKey || !baseURL) {
    throw new Error("缺少 MIMO_API_KEY 或 MIMO_BASE_URL 环境变量");
  }

  const client = new OpenAI({ apiKey, baseURL });

  const completion = await client.chat.completions.create({
    model: process.env.MIMO_MODEL ?? "gpt-4o-mini",
    messages: [{ role: "user", content: buildPrompt(terrain) }],
    max_tokens: 600,
    temperature: 0.35,
  });

  const content = completion.choices[0]?.message?.content?.trim();

  if (!content) {
    throw new Error("AI 未返回有效讲解内容");
  }

  return parseLesson(content, terrain.lesson);
}
