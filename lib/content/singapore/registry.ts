import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 亚洲 — 新加坡
// ============================================================

const BUKIT_TIMAH_NATURE_RESERVE: TerrainEntry = {
  id: "bukit-timah-nature-reserve",
  nameZh: "武吉知马自然保护区",
  nameEn: "Bukit Timah Nature Reserve",
  category: "hills",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "武吉知马山顶", lon: 103.7764, lat: 1.3547, elevation: 164, kind: "peak" },
  bbox: [103.765, 1.345, 103.79, 1.365],
  label: { lon: 103.7764, lat: 1.370, rotation: 0 },
  source: "武吉知马自然保护区：新加坡本岛最高点武吉知马山所在保护区，山体海拔164米，为花岗岩丘陵，19世纪末起曾长期开采花岗岩、20世纪中叶采石活动停止；1883年设立保护区，是新加坡现存为数不多的原始雨林之一，2011年获认定为东盟遗产公园（Wikipedia/nparks.gov.sg WebSearch 2026）",
};

const CENTRAL_CATCHMENT_NATURE_RESERVE: TerrainEntry = {
  id: "central-catchment-nature-reserve",
  nameZh: "中央集水区自然保护区",
  nameEn: "Central Catchment Nature Reserve",
  category: "hills",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "麦里芝蓄水池", lon: 103.8322, lat: 1.3417, elevation: 30, kind: "lake" },
  bbox: [103.78, 1.32, 103.84, 1.40],
  viewScale: 1.3,
  label: { lon: 103.81, lat: 1.41, rotation: 0 },
  source: "中央集水区自然保护区：新加坡面积最大的自然保护区，占地2880公顷，环绕麦里芝、上下皮尔斯、上实里达四座蓄水池分布；园内逾2000公顷为次生低地龙脑香林，另有约154公顷原生旱地雨林残片与87公顷梧槽原生淡水沼泽林，麦里芝一带保留有新加坡现存最完整的原生雨林之一（Wikipedia/nparks.gov.sg WebSearch 2026）",
};

const SUNGEI_BULOH_WETLAND_RESERVE: TerrainEntry = {
  id: "sungei-buloh-wetland-reserve",
  nameZh: "双溪布洛湿地保护区",
  nameEn: "Sungei Buloh Wetland Reserve",
  category: "coast",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "双溪布洛游客中心", lon: 103.7297, lat: 1.4468, elevation: 2, kind: "delta" },
  bbox: [103.71, 1.435, 103.745, 1.460],
  label: { lon: 103.71, lat: 1.465, rotation: 0 },
  source: "双溪布洛湿地保护区：新加坡西北部一处红树林湿地，紧邻克兰芝蓄水池，占地已从最初130公顷扩展至202公顷，涵盖红树林、泥滩、水塘与次生林，保留新加坡现存最大面积红树林；2003年成为新加坡首个东盟遗产公园，是东亚—澳大利西亚候鸟迁徙路线上的重要中途停歇地（Wikipedia/ASEAN Centre for Biodiversity WebSearch 2026）",
};

const CHEK_JAWA_WETLANDS: TerrainEntry = {
  id: "chek-jawa-wetlands",
  nameZh: "察哈湾湿地",
  nameEn: "Chek Jawa Wetlands",
  category: "coast",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "察哈湾观景塔", lon: 103.9985, lat: 1.4048, elevation: 2, kind: "delta" },
  bbox: [103.99, 1.398, 104.008, 1.412],
  label: { lon: 103.999, lat: 1.415, rotation: 0 },
  source: "察哈湾湿地：乌敏岛东端一处占地约100公顷的潮间带湿地，沙滩、岩岸、海草泻湖、珊瑚砾滩、红树林与海岸林六种生态系统在此交汇，退潮至0.5米以下水位时可见逾500种海洋物种；1992年曾计划填海开发，2001年经公众意见征询后无限期推迟，是新加坡潮间带生物多样性最丰富的地点之一（pulau-ubin.nparks.gov.sg WebSearch 2026）",
};

const PULAU_UBIN: TerrainEntry = {
  id: "pulau-ubin",
  nameZh: "乌敏岛",
  nameEn: "Pulau Ubin",
  category: "island",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "乌敏岛村落", lon: 103.9601, lat: 1.4108, elevation: 5, kind: "island" },
  bbox: [103.945, 1.400, 103.995, 1.420],
  label: { lon: 103.97, lat: 1.425, rotation: 0 },
  source: "乌敏岛：新加坡东北海域一座花岗岩岛屿，19世纪中叶起大规模开采花岗岩，石料曾用于兴建多座灯塔与新柔长堤；至1999年最后一座采石场关闭，岛上现存四座废弃采石场（吉甘、格格、乌敏、峇干），已演变为植被覆盖的景观水塘；岛上保留木屋、鸭寮与橡胶园等乡村景观，是新加坡现存少数保留传统乡村风貌的地区（Wikipedia/roots.gov.sg WebSearch 2026）",
};

const SISTERS_ISLANDS_MARINE_PARK: TerrainEntry = {
  id: "sisters-islands-marine-park",
  nameZh: "姐妹岛海洋公园",
  nameEn: "Sisters' Islands Marine Park",
  category: "island",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "大姐妹岛", lon: 103.8283, lat: 1.2089, elevation: 3, kind: "island" },
  bbox: [103.820, 1.202, 103.836, 1.216],
  label: { lon: 103.828, lat: 1.196, rotation: 0 },
  source: "姐妹岛海洋公园：2014年设立，是新加坡首座海洋公园，面积约40公顷，涵盖大小姐妹岛及圣约翰岛西侧礁盘与德古岛周边水域；园内珊瑚礁、沙滩与海草床生境为海马、砗磲与海绵等珍稀物种提供庇护，实马高岛填海工程中移植的珊瑚群落即安置于此，小姐妹岛设有海龟孵化站（Wikipedia/nparks.gov.sg WebSearch 2026）",
};

const LABRADOR_NATURE_RESERVE: TerrainEntry = {
  id: "labrador-nature-reserve",
  nameZh: "拉柏多自然保护区",
  nameEn: "Labrador Nature Reserve",
  category: "coast",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "拉柏多岩岸", lon: 103.8028, lat: 1.2661, elevation: 5, kind: "escarpment" },
  bbox: [103.795, 1.260, 103.810, 1.272],
  label: { lon: 103.803, lat: 1.276, rotation: 0 },
  source: "拉柏多自然保护区：新加坡本岛唯一对公众开放的岩岸海崖，2002年将10公顷次生海岸植被与岩岸划设为保护区；退潮时可见巨型弹涂鱼、蟹类、海葵、珊瑚、沙虫与鲎等多样潮间带生物，填海工程前这一带原是涨潮时的狭长海岸、退潮时露出岩滩（Wikipedia/nparks.gov.sg WebSearch 2026）",
};

const BUKIT_BATOK_NATURE_PARK: TerrainEntry = {
  id: "bukit-batok-nature-park",
  nameZh: "武吉巴督自然公园",
  nameEn: "Bukit Batok Nature Park",
  category: "hills",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "小桂林采石崖", lon: 103.7514, lat: 1.3492, elevation: 60, kind: "escarpment" },
  bbox: [103.745, 1.344, 103.758, 1.354],
  label: { lon: 103.751, lat: 1.358, rotation: 0 },
  source: "武吉巴督自然公园：占地36公顷，1988年在一处废弃采石场（曾开采辉长苏长岩）基础上辟建；高耸的花岗岩崖壁矗立于原采石场积水潭旁。⚠️「小桂林」与「甘蒙采石场」官方上均属邻近的武吉巴督市镇公园（Bukit Batok Town Park，42公顷），不是本条（核实 2026-09-11）；“武吉巴督”意为“咳嗽的山丘”，得名于早年采石作业发出的震动声响，2021年起崖壁曾多次发生滑坡（Wikipedia/littledayout.com WebSearch 2026）",
};

const CONEY_ISLAND_PARK: TerrainEntry = {
  id: "coney-island-park",
  nameZh: "西部海岸公园（甘榜岛）",
  nameEn: "Coney Island Park",
  category: "island",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "甘榜岛（西部海岸公园）", lon: 103.9101, lat: 1.4067, elevation: 3, kind: "island" },
  bbox: [103.90, 1.400, 103.925, 1.413],
  label: { lon: 103.912, lat: 1.417, rotation: 0 },
  source: "甘榜岛（旧称Pulau Serangoon）：新加坡东北海域一座岛屿，原始面积仅13公顷，历经多次填海扩展至约100公顷；园区涵盖木麻黄海岸林、红树林、开阔草地与次生林等多种生境，栖息约157种动物与80种鸟类；2015年西部海岸公园（面积50公顷）建成开放，以倒木改造步道与太阳能设施维持生态可持续（Wikipedia/nparks.gov.sg WebSearch 2026）",
};

const KRANJI_MARSHES: TerrainEntry = {
  id: "kranji-marshes",
  nameZh: "克兰芝沼泽",
  nameEn: "Kranji Marshes",
  category: "basin",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "克兰芝沼泽观鸟点", lon: 103.7317, lat: 1.4392, elevation: 3, kind: "delta" },
  bbox: [103.720, 1.432, 103.742, 1.447],
  label: { lon: 103.731, lat: 1.451, rotation: 0 },
  source: "克兰芝沼泽：新加坡面积最大的天然淡水沼泽，占地逾56公顷，1970年代克兰芝河筑坝形成克兰芝蓄水池后，低洼地带因积水意外形成沼泽湿地；栖息逾170种鸟类、54种蝴蝶与33种蜻蜓，2008年新加坡自然学会开始参与沼泽保育维护，目前仅约8公顷对公众开放（Wikipedia/nparks.gov.sg WebSearch 2026）",
};

const SOUTHERN_ISLANDS: TerrainEntry = {
  id: "southern-islands",
  nameZh: "南部离岛（圣约翰岛·拉扎鲁斯岛·龟屿）",
  nameEn: "Southern Islands (St John's, Lazarus & Kusu)",
  category: "island",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "圣约翰岛", lon: 103.8478, lat: 1.2231, elevation: 5, kind: "island" },
  bbox: [103.83, 1.20, 103.86, 1.235],
  label: { lon: 103.845, lat: 1.195, rotation: 0 },
  source: "南部离岛：新加坡本岛以南一组岛屿，圣约翰岛自19世纪末起曾用作检疫隔离站，1950至70年代改为戒毒康复中心；拉扎鲁斯岛因1899年岛上建有脚气病医院而得名“康复岛”；龟屿（“龟”为闽南语岛名意译）设有庙宇与放生龟池，每年农历九月吸引大量信众前往朝拜，三岛及周边水域现为新加坡知名的近岸休闲游憩区（Wikipedia/roots.gov.sg WebSearch 2026）",
};

const PULAU_SEMAKAU: TerrainEntry = {
  id: "pulau-semakau",
  nameZh: "实马高岛",
  nameEn: "Pulau Semakau",
  category: "island",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "实马高垃圾埋置场", lon: 103.7683, lat: 1.1897, elevation: 3, kind: "island" },
  bbox: [103.755, 1.180, 103.780, 1.200],
  label: { lon: 103.768, lat: 1.175, rotation: 0 },
  source: "实马高岛：新加坡本岛以南约8公里一座离岛，1999年起是新加坡唯一在用的垃圾埋置场，1995年由实马高岛与沙金岛之间填筑石堤合并而成，堤身内衬防渗膜与海泥防止污染物渗漏；一期工程曾损毁13公顷红树林，环境局随后在13.6公顷人工滩涂补种40万株红树幼苗，二期工程中逾700群珊瑚移植至姐妹岛海域，如今岛上及周边保留红树林、珊瑚礁与海草床生态（Wikipedia/sg101.gov.sg WebSearch 2026）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 亚洲 / 新加坡 =====
  BUKIT_TIMAH_NATURE_RESERVE, CENTRAL_CATCHMENT_NATURE_RESERVE,
  SUNGEI_BULOH_WETLAND_RESERVE, CHEK_JAWA_WETLANDS, PULAU_UBIN,
  SISTERS_ISLANDS_MARINE_PARK, LABRADOR_NATURE_RESERVE,
  BUKIT_BATOK_NATURE_PARK, CONEY_ISLAND_PARK, KRANJI_MARSHES,
  SOUTHERN_ISLANDS, PULAU_SEMAKAU,
];
