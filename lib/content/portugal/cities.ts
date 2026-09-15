import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 葡萄牙 ──
  {
    id: "lisbon", nameZh: "里斯本", nameEn: "Lisbon", country: "portugal", tier: "capital", zone: "pt-lisbon-region", admin1Zh: "里斯本区", admin1En: "Lisbon District",
    lon: -9.1393, lat: 38.7223,
    airport: { iata: "LIS", nameZh: "里斯本机场", nameEn: "Lisbon Airport", lon: -9.1359, lat: 38.7813 },
    source: "里斯本市中心 38.7223,-9.1393；LIS 机场：公开资料",
  },
  {
    id: "sintra", nameZh: "辛特拉", nameEn: "Sintra", country: "portugal", tier: "notable", zone: "pt-lisbon-region", admin1Zh: "里斯本区", admin1En: "Lisbon District",
    lon: -9.3899, lat: 38.7975,
    source: "辛特拉 38.7975,-9.3899：公开资料（无机场，就近用里斯本；山中王室夏宫小镇）",
  },
  {
    id: "porto", nameZh: "波尔图", nameEn: "Porto", country: "portugal", tier: "major", zone: "pt-north", admin1Zh: "波尔图区", admin1En: "Porto District",
    lon: -8.6291, lat: 41.1579,
    airport: { iata: "OPO", nameZh: "波尔图机场", nameEn: "Porto Airport", lon: -8.6814, lat: 41.2481 },
    source: "波尔图市中心 41.1579,-8.6291；OPO 机场：公开资料",
  },
  {
    id: "braga", nameZh: "布拉加", nameEn: "Braga", country: "portugal", tier: "notable", zone: "pt-north", admin1Zh: "布拉加区", admin1En: "Braga District",
    lon: -8.4265, lat: 41.5454,
    source: "布拉加 41.5454,-8.4265：公开资料（无机场，就近用波尔图；葡萄牙宗教中心）",
  },
  {
    id: "guimaraes", nameZh: "吉马良斯", nameEn: "Guimarães", country: "portugal", tier: "notable", zone: "pt-north", admin1Zh: "布拉加区", admin1En: "Braga District",
    lon: -8.2918, lat: 41.4425,
    source: "吉马良斯 41.4425,-8.2918：公开资料（无机场，就近用波尔图；葡萄牙王国发祥地）",
  },
  {
    id: "aveiro", nameZh: "阿威罗", nameEn: "Aveiro", country: "portugal", tier: "notable", zone: "pt-north", admin1Zh: "阿威罗区", admin1En: "Aveiro District",
    lon: -8.6538, lat: 40.6405,
    source: "阿威罗 40.6405,-8.6538：公开资料（无定期商业航班，就近用波尔图；运河小城）",
  },
  {
    id: "coimbra", nameZh: "科英布拉", nameEn: "Coimbra", country: "portugal", tier: "notable", zone: "pt-central", admin1Zh: "科英布拉区", admin1En: "Coimbra District",
    lon: -8.4103, lat: 40.2033,
    source: "科英布拉 40.2033,-8.4103：公开资料（无定期商业航班，就近用里斯本或波尔图；1290年建校，葡萄牙最古老大学所在地）",
  },
  {
    id: "evora", nameZh: "埃武拉", nameEn: "Évora", country: "portugal", tier: "notable", zone: "pt-alentejo", admin1Zh: "埃武拉区", admin1En: "Évora District",
    lon: -7.9096, lat: 38.5714,
    source: "埃武拉 38.5714,-7.9096：公开资料（无定期商业航班，就近用里斯本；阿连特茹历史中心）",
  },
  {
    id: "faro", nameZh: "法鲁", nameEn: "Faro", country: "portugal", tier: "major", zone: "pt-algarve", admin1Zh: "法鲁区", admin1En: "Faro District",
    lon: -7.9304, lat: 37.0194,
    airport: { iata: "FAO", nameZh: "法鲁机场", nameEn: "Faro Airport", lon: -7.9659, lat: 37.0144 },
    source: "法鲁市中心 37.0194,-7.9304；FAO 机场：公开资料",
  },
  {
    id: "funchal", nameZh: "丰沙尔", nameEn: "Funchal", country: "portugal", tier: "notable", zone: "pt-madeira", admin1Zh: "马德拉自治区", admin1En: "Madeira",
    lon: -16.9241, lat: 32.6669,
    airport: { iata: "FNC", nameZh: "马德拉机场", nameEn: "Madeira Airport", lon: -16.7745, lat: 32.6979 },
    source: "丰沙尔市中心 32.6669,-16.9241；FNC 机场：公开资料",
  },
  {
    id: "ponta-delgada", nameZh: "蓬塔德尔加达", nameEn: "Ponta Delgada", country: "portugal", tier: "notable", zone: "pt-azores", admin1Zh: "亚速尔自治区", admin1En: "Azores",
    lon: -25.6756, lat: 37.7412,
    airport: { iata: "PDL", nameZh: "蓬塔德尔加达机场", nameEn: "Ponta Delgada Airport", lon: -25.6979, lat: 37.7412 },
    source: "蓬塔德尔加达市中心 37.7412,-25.6756；PDL 机场：公开资料",
  },

  // ── 葡萄牙 批2（2026-09-05）──
  {
    id: "lagos", nameZh: "拉戈斯", nameEn: "Lagos", country: "portugal", tier: "notable", zone: "pt-algarve", admin1Zh: "法鲁区", admin1En: "Faro District",
    lon: -8.6728, lat: 37.1028,
    airport: { iata: "FAO", nameZh: "法鲁机场（经法鲁转乘）", nameEn: "Faro Airport (via Faro)", lon: -7.9659, lat: 37.0144 },
    source: "Lagos 37.1028,-8.6728（en.wikipedia）；无自有机场，与法鲁条目共用 FAO（约 90 公里，火车约 1.5 小时）；人口 33,494（2021 普查）",
  },
  {
    id: "tavira", nameZh: "塔维拉", nameEn: "Tavira", country: "portugal", tier: "notable", zone: "pt-algarve", admin1Zh: "法鲁区", admin1En: "Faro District",
    lon: -7.6500, lat: 37.1167,
    airport: { iata: "FAO", nameZh: "法鲁机场（经法鲁转乘）", nameEn: "Faro Airport (via Faro)", lon: -7.9659, lat: 37.0144 },
    source: "Tavira 37.1167,-7.6500（en.wikipedia）；无自有机场，与法鲁条目共用 FAO（约 28 公里）；人口 26,167（2011 普查）",
  },
  {
    id: "nazare", nameZh: "纳扎雷", nameEn: "Nazaré", country: "portugal", tier: "notable", zone: "pt-central", admin1Zh: "莱里亚区", admin1En: "Leiria District",
    lon: -9.0706, lat: 39.6011,
    source: "Nazaré 39.6011,-9.0706（en.wikipedia）；无机场，最近为里斯本（约 120 公里），条目不写机场字段，大巴自里斯本约 1.5–2 小时；人口 14,889（2021）",
  },
  {
    id: "obidos", nameZh: "奥比杜什", nameEn: "Óbidos", country: "portugal", tier: "notable", zone: "pt-central", admin1Zh: "莱里亚区", admin1En: "Leiria District",
    lon: -9.1578, lat: 39.3581,
    source: "Óbidos 39.3581,-9.1578（en.wikipedia）；无机场，最近为里斯本（约 80 公里），条目不写机场字段，大巴自里斯本约 1 小时；镇内人口约 3,100，市镇 11,772（2011）",
  },
  {
    id: "viana-do-castelo", nameZh: "维亚纳堡", nameEn: "Viana do Castelo", country: "portugal", tier: "notable", zone: "pt-north", admin1Zh: "维亚纳堡区", admin1En: "Viana do Castelo District",
    lon: -8.8300, lat: 41.7000,
    airport: { iata: "OPO", nameZh: "波尔图机场（经波尔图转乘）", nameEn: "Porto Airport (via Porto)", lon: -8.6814, lat: 41.2481 },
    source: "Viana do Castelo 41.7000,-8.8300（en.wikipedia）；无自有机场，与波尔图条目共用 OPO（约 60 公里，米尼奥线火车约 1.5 小时）；市镇人口 85,778（2021）",
  },
];
