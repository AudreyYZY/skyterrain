import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 新西兰 ──────────────────────────────────────────────
  {
    id: "auckland", nameZh: "奥克兰", nameEn: "Auckland", country: "new-zealand", tier: "major", zone: "nz-north", admin1Zh: "奥克兰大区", admin1En: "Auckland Region",
    lon: 174.7633, lat: -36.8485,
    airport: { iata: "AKL", nameZh: "奥克兰机场", nameEn: "Auckland", lon: 174.792, lat: -37.008 },
    source: "奥克兰市中心 -36.8485,174.7633；AKL 机场：公开资料",
  },
  {
    id: "wellington", nameZh: "惠灵顿", nameEn: "Wellington", country: "new-zealand", tier: "capital", zone: "nz-north", admin1Zh: "惠灵顿大区", admin1En: "Wellington Region",
    lon: 174.7762, lat: -41.2865,
    airport: { iata: "WLG", nameZh: "惠灵顿机场", nameEn: "Wellington", lon: 174.805, lat: -41.327 },
    source: "惠灵顿市中心 -41.2865,174.7762；WLG 机场：公开资料",
  },
  {
    id: "rotorua", nameZh: "罗托鲁瓦", nameEn: "Rotorua", country: "new-zealand", tier: "notable", zone: "nz-north", admin1Zh: "丰盛湾大区", admin1En: "Bay of Plenty Region",
    lon: 176.2514, lat: -38.1368,
    airport: { iata: "ROT", nameZh: "罗托鲁瓦机场", nameEn: "Rotorua", lon: 176.317, lat: -38.109 },
    source: "罗托鲁瓦市中心 -38.1368,176.2514；ROT 机场：公开资料",
  },
  {
    id: "christchurch", nameZh: "基督城", nameEn: "Christchurch", country: "new-zealand", tier: "major", zone: "nz-south", admin1Zh: "坎特伯雷大区", admin1En: "Canterbury Region",
    lon: 172.6362, lat: -43.5321,
    airport: { iata: "CHC", nameZh: "基督城机场", nameEn: "Christchurch", lon: 172.532, lat: -43.489 },
    source: "基督城大教堂广场 -43.5321,172.6362；CHC 机场：公开资料",
  },
  {
    id: "queenstown", nameZh: "皇后镇", nameEn: "Queenstown", country: "new-zealand", tier: "notable", zone: "nz-south", admin1Zh: "奥塔哥大区", admin1En: "Otago Region",
    lon: 168.6626, lat: -45.0312,
    airport: { iata: "ZQN", nameZh: "皇后镇机场", nameEn: "Queenstown", lon: 168.739, lat: -45.021 },
    source: "皇后镇市中心 -45.0312,168.6626；ZQN 机场：公开资料",
  },
  {
    id: "dunedin", nameZh: "达尼丁", nameEn: "Dunedin", country: "new-zealand", tier: "notable", zone: "nz-south", admin1Zh: "奥塔哥大区", admin1En: "Otago Region",
    lon: 170.5028, lat: -45.8788,
    airport: { iata: "DUD", nameZh: "达尼丁机场", nameEn: "Dunedin", lon: 170.198, lat: -45.928 },
    source: "达尼丁八角广场 -45.8788,170.5028；DUD 机场：公开资料",
  },

  // ── 新西兰 批2（2026-09-05）──
  {
    id: "napier", nameZh: "内皮尔", nameEn: "Napier", country: "new-zealand", tier: "notable", zone: "nz-north", admin1Zh: "霍克斯湾大区", admin1En: "Hawke's Bay Region",
    lon: 176.9178, lat: -39.4903,
    airport: { iata: "NPE", nameZh: "霍克斯湾机场", nameEn: "Hawke's Bay Airport", lon: 176.8717, lat: -39.4683 },
    source: "Napier -39.4903,176.9178（en.wikipedia）；NPE 机场：en.wikipedia（市区西北约 5 公里）；人口 66,400（2025-06 估计）",
  },
  {
    id: "taupo", nameZh: "陶波", nameEn: "Taupō", country: "new-zealand", tier: "notable", zone: "nz-north", admin1Zh: "怀卡托大区", admin1En: "Waikato Region",
    lon: 176.0694, lat: -38.6875,
    airport: { iata: "TUO", nameZh: "陶波机场", nameEn: "Taupō Airport", lon: 176.0844, lat: -38.7397 },
    source: "Taupō -38.6875,176.0694（en.wikipedia）；TUO 机场：en.wikipedia（镇南约 8 公里，仅奥克兰航线）；人口 27,000（2025-06 估计）",
  },
  {
    id: "tauranga", nameZh: "陶朗加", nameEn: "Tauranga", country: "new-zealand", tier: "major", zone: "nz-north", admin1Zh: "丰盛湾大区", admin1En: "Bay of Plenty Region",
    lon: 176.1670, lat: -37.6830,
    airport: { iata: "TRG", nameZh: "陶朗加机场", nameEn: "Tauranga Airport", lon: 176.1972, lat: -37.6733 },
    source: "Tauranga -37.6830,176.1670（en.wikipedia）；TRG 机场：en.wikipedia（芒格努伊山，市中心东北约 3 公里）；人口 161,000（2025-06 估计，新西兰第五大城市）",
  },
  {
    id: "nelson", nameZh: "尼尔森", nameEn: "Nelson", country: "new-zealand", tier: "notable", zone: "nz-south", admin1Zh: "尼尔森", admin1En: "Nelson Region",
    lon: 173.2839, lat: -41.2708,
    airport: { iata: "NSN", nameZh: "尼尔森机场", nameEn: "Nelson Airport", lon: 173.2211, lat: -41.2983 },
    source: "Nelson -41.2708,173.2839（en.wikipedia）；NSN 机场：en.wikipedia（Annesbrook，市中心西南约 6 公里）；人口 54,300（2025-06 估计）",
  },
  {
    id: "kaikoura", nameZh: "凯库拉", nameEn: "Kaikōura", country: "new-zealand", tier: "notable", zone: "nz-south", admin1Zh: "坎特伯雷大区", admin1En: "Canterbury Region",
    lon: 173.6800, lat: -42.4000,
    source: "Kaikōura -42.4000,173.6800（en.wikipedia）；本地机场仅观鲸/观光小飞机、无定期航线，最近为基督城 CHC（约 180 公里），条目不写机场字段；人口 2,350（2025-06 估计）",
  },
  {
    id: "wanaka", nameZh: "瓦纳卡", nameEn: "Wānaka", country: "new-zealand", tier: "notable", zone: "nz-south", admin1Zh: "奥塔哥大区", admin1En: "Otago Region",
    lon: 169.1500, lat: -44.7000,
    source: "Wānaka -44.7000,169.1500（en.wikipedia，海拔 290 米）；Wānaka Airport 无定期商业航班，最近为皇后镇 ZQN（经皇冠山脉公路约 70 公里），条目不写机场字段；人口 13,200（2025-06 估计）",
  },
];
