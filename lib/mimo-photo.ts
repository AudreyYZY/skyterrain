import OpenAI from "openai";
import {
  genericPhotoFallback,
  guessPhotoFromHint,
} from "@/lib/photo-fallback";
import { getAllTerrains } from "@/lib/terrain";
import { stripEmojis } from "@/lib/strip-emojis";
import type { PhotoIdentifyResult } from "@/types/photo-identify";

export type { PhotoIdentifyResult };

function buildCatalog(): string {
  return getAllTerrains()
    .map(
      (t) =>
        `- ${t.name}：${t.cards.location}；特点：${t.cards.feature}；看到：${t.lesson.seeing.slice(0, 60)}…`
    )
    .join("\n");
}

function buildTextPrompt(hint?: string, catalogGuess?: string): string {
  return `你是地理老师和飞机导游。乘客上传了一张飞机舷窗外的地貌照片（你看不到图，请结合拍摄说明与新疆知识库推测）。

新疆地貌库：
${buildCatalog()}

${hint ? `拍摄说明：${hint}` : "拍摄说明：未提供，请给出多种可能并标注置信度。"}
${catalogGuess ? `系统初步推测：${catalogGuess}` : ""}

只输出 JSON，不要 markdown：
{
  "possibleTerrain": "地貌名称",
  "features": ["特征1","特征2","特征3"],
  "confidence": "高",
  "narration": "四层解说，用\\n分隔：看到什么、为何形成、历史关系、冷知识。禁止文学修辞与 emoji。"
}`;
}

function parseResult(raw: string): PhotoIdentifyResult {
  const jsonMatch = raw.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("AI 返回格式无效");
  }
  const parsed = JSON.parse(jsonMatch[0]) as PhotoIdentifyResult;
  if (!parsed.possibleTerrain || !Array.isArray(parsed.features)) {
    throw new Error("AI 返回字段不完整");
  }
  if (!parsed.confidence) parsed.confidence = "中";
  if (!parsed.narration) parsed.narration = parsed.possibleTerrain;
  return {
    possibleTerrain: stripEmojis(parsed.possibleTerrain),
    features: parsed.features.map((f) => stripEmojis(f)),
    confidence: parsed.confidence,
    narration: stripEmojis(parsed.narration),
    source: "ai",
  };
}

function extractContent(
  completion: OpenAI.Chat.Completions.ChatCompletion
): string {
  const raw = completion.choices[0]?.message?.content;
  if (typeof raw === "string") return raw.trim();
  return "";
}

async function callTextModel(
  client: OpenAI,
  model: string,
  prompt: string
): Promise<PhotoIdentifyResult> {
  const completion = await client.chat.completions.create({
    model,
    messages: [{ role: "user", content: prompt }],
    max_tokens: 800,
    temperature: 0.35,
  });

  const content = extractContent(completion);
  if (!content) {
    throw new Error("AI 未返回内容");
  }
  return parseResult(content);
}

async function callVisionModel(
  client: OpenAI,
  model: string,
  prompt: string,
  imageBase64: string
): Promise<PhotoIdentifyResult> {
  const completion = await client.chat.completions.create({
    model,
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: prompt },
          { type: "image_url", image_url: { url: imageBase64 } },
        ],
      },
    ],
    max_tokens: 800,
    temperature: 0.35,
  });

  const content = extractContent(completion);
  if (!content) {
    throw new Error("视觉模型未返回内容");
  }
  return parseResult(content);
}

export async function identifyPhotoFromWindow(
  imageBase64: string,
  hint?: string
): Promise<PhotoIdentifyResult> {
  const catalogGuess = guessPhotoFromHint(hint);

  const apiKey = process.env.MIMO_API_KEY;
  const baseURL = process.env.MIMO_BASE_URL;

  if (!apiKey || !baseURL) {
    return catalogGuess ?? genericPhotoFallback(hint);
  }

  const client = new OpenAI({ apiKey, baseURL });
  const model = process.env.MIMO_MODEL ?? "deepseek-chat";
  const visionModel = process.env.MIMO_VISION_MODEL?.trim();
  const textPrompt = buildTextPrompt(
    hint,
    catalogGuess?.possibleTerrain
  );

  const errors: string[] = [];

  if (visionModel) {
    try {
      return await callVisionModel(
        client,
        visionModel,
        textPrompt,
        imageBase64
      );
    } catch (err) {
      errors.push(
        err instanceof Error ? err.message : "视觉识别失败"
      );
    }
  }

  try {
    return await callTextModel(client, model, textPrompt);
  } catch (err) {
    errors.push(err instanceof Error ? err.message : "文本识别失败");
  }

  if (catalogGuess) {
    return {
      ...catalogGuess,
      narration: `${catalogGuess.narration}\n\n（注：当前模型不支持识图，结果根据航线说明推测。${errors.join("；")}）`,
    };
  }

  const fallback = genericPhotoFallback(hint);
  fallback.narration += `\n\n（API：${errors.join("；")}）`;
  return fallback;
}
