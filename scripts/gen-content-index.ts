/**
 * 按国家分目录的内容（`lib/content/<country>/`）→ 生成合并索引 `lib/content/_generated/*.ts`。
 *
 *   npm run gen:content     重写生成文件
 *   npm run check:content   只检查（生成文件是否最新 + 条目是否放对国家目录 + id 是否跨国重复），不写
 *
 * 为什么要拆：拆分前地形讲解中英各约 1.9 万行、城市攻略各约 1.65 万行，全在一个文件里；
 * 每加一个国家就往文件中段插几百行，插入位置写错（`+5` 少一个换行）就把后面的条目吞进上一条的尾巴，
 * `gen:verify-status` 因此漏算过条目。按国家分目录之后，新增一个国家 = 新建一个目录。
 *
 * 生成两类文件：
 *   ① 同步合并（`terrain-registry.ts` / `cities.ts` / `pois.ts` / `routes.ts` / `terrain-zh.ts` …）——
 *      给脚本与 `lib/*-registry.ts` 这类本来就同步导入的模块用，导出与拆分前**完全相同的数据**；
 *   ② 按国家懒加载（`loaders.ts`）—— 给界面用：打开一篇讲解只下载该国那一份，不再一次拉全部 43 国。
 */
import { readdirSync, existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { CONTENT_COUNTRIES } from "@/lib/content/countries";

const CHECK = process.argv.includes("--check");
const DIR = "lib/content";
const OUT = `${DIR}/_generated`;

const ident = (c: string) => c.replace(/-/g, "_");
const folders = readdirSync(DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
  .map((d) => d.name);

const problems: string[] = [];
for (const f of folders) {
  if (!(CONTENT_COUNTRIES as readonly string[]).includes(f)) {
    problems.push(`目录 lib/content/${f}/ 不在 lib/content/countries.ts 的 CONTENT_COUNTRIES 里 —— 在末尾加一行`);
  }
}
for (const c of CONTENT_COUNTRIES) {
  if (!folders.includes(c)) problems.push(`CONTENT_COUNTRIES 里的 ${c} 没有对应目录 lib/content/${c}/`);
}

const HEADER =
  "// ⚠️ 由 scripts/gen-content-index.ts 生成，不要手改。改内容去 lib/content/<country>/，然后 npm run gen:content\n";

type Part = { file: string; exportName: string };
const has = (c: string, file: string) => existsSync(`${DIR}/${c}/${file}.ts`);

function arrayModule(p: Part, typeImport: string, typeName: string, exportAs: string): string {
  const cs = CONTENT_COUNTRIES.filter((c) => has(c, p.file));
  return (
    HEADER +
    `${typeImport}\n` +
    cs.map((c) => `import { ${p.exportName} as ${ident(c)} } from "@/lib/content/${c}/${p.file}";`).join("\n") +
    `\n\nexport const ${exportAs}: ${typeName}[] = [\n` +
    cs.map((c) => `  ...${ident(c)},`).join("\n") +
    "\n];\n"
  );
}

function objectModule(p: Part, typeImport: string, typeName: string, exportAs: string): string {
  const cs = CONTENT_COUNTRIES.filter((c) => has(c, p.file));
  return (
    HEADER +
    `${typeImport}\n` +
    cs.map((c) => `import { ${p.exportName} as ${ident(c)} } from "@/lib/content/${c}/${p.file}";`).join("\n") +
    `\n\nexport const ${exportAs}: Record<string, ${typeName}> = {\n` +
    cs.map((c) => `  ...${ident(c)},`).join("\n") +
    "\n};\n"
  );
}

function loaderBlock(file: string, exportName: string, typeName: string, constName: string): string {
  const cs = CONTENT_COUNTRIES.filter((c) => has(c, file));
  return (
    `export const ${constName}: Record<string, () => Promise<Record<string, ${typeName}>>> = {\n` +
    cs.map((c) => `  "${c}": () => import("@/lib/content/${c}/${file}").then((m) => m.${exportName}),`).join("\n") +
    "\n};\n"
  );
}

const outputs: Record<string, string> = {
  "terrain-registry.ts": arrayModule(
    { file: "registry", exportName: "TERRAINS" },
    'import type { TerrainEntry } from "@/lib/terrain-registry";', "TerrainEntry", "ALL_TERRAINS"),
  "cities.ts": arrayModule(
    { file: "cities", exportName: "CITIES" },
    'import type { CityEntry } from "@/lib/places-registry";', "CityEntry", "ALL_CITIES"),
  "pois.ts": objectModule(
    { file: "pois", exportName: "POIS" },
    'import type { CityPoi } from "@/lib/places-registry";', "CityPoi[]", "ALL_POIS"),
  "routes.ts": objectModule(
    { file: "routes", exportName: "ROUTES" },
    'import type { RouteNarrationEntry } from "@/lib/route-narration";', "RouteNarrationEntry", "ALL_ROUTE_NARRATION"),
  "terrain-zh.ts": objectModule(
    { file: "terrain.zh", exportName: "TERRAIN_ZH" },
    'import type { TerrainLesson } from "@/types/terrain";', "TerrainLesson", "ALL_TERRAIN_ZH"),
  "terrain-en.ts": objectModule(
    { file: "terrain.en", exportName: "TERRAIN_EN" },
    'import type { TerrainLesson } from "@/types/terrain";', "TerrainLesson", "ALL_TERRAIN_EN"),
  "travel-zh.ts": objectModule(
    { file: "travel.zh", exportName: "TRAVEL_ZH" },
    'import type { TravelGuide } from "@/lib/travel-lesson";', "TravelGuide", "ALL_TRAVEL_ZH"),
  "travel-en.ts": objectModule(
    { file: "travel.en", exportName: "TRAVEL_EN" },
    'import type { TravelGuide } from "@/lib/travel-lesson";', "TravelGuide", "ALL_TRAVEL_EN"),
  "loaders.ts":
    HEADER +
    "// 界面按国家懒加载：每个 import() 在打包时是一个独立 chunk。\n" +
    'import type { TerrainLesson } from "@/types/terrain";\n' +
    'import type { TravelGuide } from "@/lib/travel-lesson";\n\n' +
    loaderBlock("terrain.zh", "TERRAIN_ZH", "TerrainLesson", "TERRAIN_ZH_LOADERS") + "\n" +
    loaderBlock("terrain.en", "TERRAIN_EN", "TerrainLesson", "TERRAIN_EN_LOADERS") + "\n" +
    loaderBlock("travel.zh", "TRAVEL_ZH", "TravelGuide", "TRAVEL_ZH_LOADERS") + "\n" +
    loaderBlock("travel.en", "TRAVEL_EN", "TravelGuide", "TRAVEL_EN_LOADERS"),
};

if (!CHECK) mkdirSync(OUT, { recursive: true });
for (const [name, text] of Object.entries(outputs)) {
  const path = `${OUT}/${name}`;
  const cur = existsSync(path) ? readFileSync(path, "utf8") : "";
  if (cur === text) continue;
  if (CHECK) {
    problems.push(`${path} 不是最新 —— 跑 npm run gen:content`);
  } else {
    writeFileSync(path, text);
    console.log(`写入 ${path}`);
  }
}

// ── 条目归属检查：每个条目必须放在它所属国家的目录里，id 不能跨国重复 ─────────────────────────
if (CHECK) {
  const routeCountry = new Map<string, string>();
  for (const f of readdirSync("data/routes").filter((x) => x.endsWith(".json"))) {
    const r = JSON.parse(readFileSync(`data/routes/${f}`, "utf8"));
    routeCountry.set(r.id, r.depCountry === r.arrCountry ? r.depCountry : r.depCountry === "china" ? r.arrCountry : r.depCountry);
  }
  const seen: Record<string, Map<string, string>> = {};
  const note = (kind: string, id: string, c: string) => {
    seen[kind] ??= new Map();
    const prev = seen[kind].get(id);
    if (prev) problems.push(`${kind} id「${id}」同时出现在 ${prev} 与 ${c}`);
    seen[kind].set(id, c);
  };
  const counts: Record<string, number> = {};
  for (const c of CONTENT_COUNTRIES) {
    if (!folders.includes(c)) continue;
    const terrainIds = new Set<string>();
    const cityIds = new Set<string>([`${c}-overview`]);
    if (has(c, "registry")) {
      const { TERRAINS } = await import(`@/lib/content/${c}/registry`);
      for (const t of TERRAINS) {
        terrainIds.add(t.id); note("terrain", t.id, c);
        if (t.country !== c) problems.push(`lib/content/${c}/registry.ts 里的 ${t.id} 标着 country: "${t.country}"`);
      }
      counts.registry = (counts.registry ?? 0) + TERRAINS.length;
    }
    if (has(c, "cities")) {
      const { CITIES } = await import(`@/lib/content/${c}/cities`);
      for (const x of CITIES) {
        cityIds.add(x.id); note("city", x.id, c);
        if (x.country !== c) problems.push(`lib/content/${c}/cities.ts 里的 ${x.id} 标着 country: "${x.country}"`);
      }
      counts.cities = (counts.cities ?? 0) + CITIES.length;
    }
    const keyed: [string, string, Set<string> | null][] = [
      ["terrain.zh", "TERRAIN_ZH", terrainIds], ["terrain.en", "TERRAIN_EN", terrainIds],
      ["travel.zh", "TRAVEL_ZH", cityIds], ["travel.en", "TRAVEL_EN", cityIds],
      ["pois", "POIS", cityIds], ["routes", "ROUTES", null],
    ];
    for (const [file, exp, allowed] of keyed) {
      if (!has(c, file)) continue;
      const mod = await import(`@/lib/content/${c}/${file}`);
      const ids = Object.keys(mod[exp]);
      counts[file] = (counts[file] ?? 0) + ids.length;
      for (const id of ids) {
        note(file, id, c);
        if (allowed && !allowed.has(id)) problems.push(`lib/content/${c}/${file}.ts 的「${id}」不属于 ${c}（该国目录里没有这个${file.startsWith("terrain") ? "地形" : "城市"}）`);
        if (!allowed) {
          const rc = routeCountry.get(id);
          if (!rc) problems.push(`lib/content/${c}/routes.ts 的「${id}」在 data/routes/ 里没有对应航线`);
          else if (rc !== c) problems.push(`航线解说「${id}」应放在 lib/content/${rc}/routes.ts，现在在 ${c}`);
        }
      }
    }
  }
  console.log(
    `内容目录检查：${folders.length} 个国家目录；` +
      Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(" · "),
  );
  for (const k of ["registry", "cities", "terrain.zh", "terrain.en", "travel.zh", "travel.en", "pois", "routes"]) {
    if (!counts[k]) problems.push(`${k} 一个条目都没读到 —— 这不是「没问题」，是脚本或目录坏了`);
  }
}

if (problems.length) {
  console.error("\n✗ " + problems.join("\n✗ "));
  process.exit(1);
}
console.log(CHECK ? "✓ 生成文件是最新的，条目归属正确" : "✓ 完成");
