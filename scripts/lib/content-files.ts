/**
 * 内容文件清单 —— 按国家分目录之后（lib/content/<country>/），所有「按文本读内容文件」的脚本
 * 都从这里拿路径，不要再写死某一个大文件。顺序 = lib/content/countries.ts 的 CONTENT_COUNTRIES。
 */
import { existsSync } from "node:fs";
import { CONTENT_COUNTRIES } from "@/lib/content/countries";

export type ContentFile =
  | "terrain.zh" | "terrain.en" | "travel.zh" | "travel.en"
  | "routes" | "registry" | "cities" | "pois";

export function contentFiles(file: ContentFile): string[] {
  return CONTENT_COUNTRIES.map((c) => `lib/content/${c}/${file}.ts`).filter((p) => existsSync(p));
}
