/**
 * 内容按国家分目录存放：`lib/content/<country>/`，每个国家最多 8 个文件 ——
 *
 *   registry.ts      地形注册表条目（`TERRAINS: TerrainEntry[]`，数组顺序 = 该国在目录里的顺序）
 *   terrain.zh.ts    地形 6 板块讲解（`TERRAIN_ZH`）      terrain.en.ts（`TERRAIN_EN`）
 *   cities.ts        旅游模式城市（`CITIES: CityEntry[]`）
 *   travel.zh.ts     城市 / 国家概览 7 段攻略（`TRAVEL_ZH`） travel.en.ts（`TRAVEL_EN`）
 *   pois.ts          攻略提到的地标坐标（`POIS`）
 *   routes.ts        航线解说（`ROUTES`）。国内线放本国；国际线放**非中国一侧**的国家
 *
 * 这份列表决定各国在 `TERRAIN_REGISTRY` / `CITY_REGISTRY` 里的全局先后（与拆分前一致）。
 * **新增国家**：在末尾加一行 → 建 `lib/content/<slug>/` → `npm run gen:content`。
 * `npm run check:content` 会拦住：生成文件没重跑、条目放错国家目录、同一个 id 出现在两个国家。
 */
export const CONTENT_COUNTRIES = [
  "china",
  "australia",
  "usa",
  "canada",
  "japan",
  "new-zealand",
  "uk",
  "iceland",
  "switzerland",
  "norway",
  "france",
  "italy",
  "spain",
  "germany",
  "greece",
  "portugal",
  "netherlands",
  "austria",
  "belgium",
  "ireland",
  "denmark",
  "sweden",
  "finland",
  "luxembourg",
  "thailand",
  "south-korea",
  "poland",
  "vietnam",
  "mongolia",
  "malaysia",
  "singapore",
  "philippines",
  "indonesia",
  "kazakhstan",
  "turkey",
  "croatia",
  "czechia",
  "hungary",
  "slovakia",
  "slovenia",
  "malta",
  "estonia",
  "chile",
  "latvia",
  "romania",
  "bulgaria",
  "uzbekistan",
  "lithuania",
  "kyrgyzstan",
] as const;
