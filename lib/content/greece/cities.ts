import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ===== 希腊 =====
  {
    id: "athens", nameZh: "雅典", nameEn: "Athens", country: "greece", tier: "capital", zone: "gr-attica", admin1Zh: "阿提卡大区", admin1En: "Attica",
    lon: 23.7275, lat: 37.9838,
    airport: { iata: "ATH", nameZh: "雅典埃莱夫塞里奥斯·韦尼泽洛斯国际机场", nameEn: "Athens Eleftherios Venizelos International Airport", lon: 23.9445, lat: 37.9364 },
    source: "雅典市中心 37.9838,23.7275；ATH 机场：公开资料",
  },
  {
    id: "thessaloniki", nameZh: "塞萨洛尼基", nameEn: "Thessaloniki", country: "greece", tier: "major", zone: "gr-macedonia", admin1Zh: "中马其顿大区", admin1En: "Central Macedonia",
    lon: 22.9444, lat: 40.6401,
    airport: { iata: "SKG", nameZh: "塞萨洛尼基马其顿机场", nameEn: "Thessaloniki Macedonia Airport", lon: 22.9709, lat: 40.5197 },
    source: "塞萨洛尼基市中心 40.6401,22.9444；SKG 机场：公开资料",
  },
  {
    id: "heraklion", nameZh: "伊拉克利翁", nameEn: "Heraklion", country: "greece", tier: "major", zone: "gr-crete", admin1Zh: "克里特大区", admin1En: "Crete",
    lon: 25.1442, lat: 35.3387,
    airport: { iata: "HER", nameZh: "伊拉克利翁尼科斯·卡赞扎基斯机场", nameEn: "Heraklion Nikos Kazantzakis Airport", lon: 25.1803, lat: 35.3397 },
    source: "伊拉克利翁市中心 35.3387,25.1442；HER 机场：公开资料",
  },
  {
    id: "chania", nameZh: "哈尼亚", nameEn: "Chania", country: "greece", tier: "notable", zone: "gr-crete", admin1Zh: "克里特大区", admin1En: "Crete",
    lon: 24.0180, lat: 35.5138,
    airport: { iata: "CHQ", nameZh: "哈尼亚国际机场", nameEn: "Chania International Airport", lon: 24.1497, lat: 35.5317 },
    source: "哈尼亚市中心 35.5138,24.0180；CHQ 机场：公开资料",
  },
  {
    id: "rhodes-town", nameZh: "罗德城", nameEn: "Rhodes Town", country: "greece", tier: "notable", zone: "gr-aegean", admin1Zh: "南爱琴大区", admin1En: "South Aegean",
    lon: 28.2276, lat: 36.4341,
    airport: { iata: "RHO", nameZh: "罗德国际机场（迪亚戈拉斯）", nameEn: "Rhodes International Airport (Diagoras)", lon: 28.0862, lat: 36.4054 },
    source: "罗德城市中心 36.4341,28.2276；RHO 机场：公开资料",
  },
  {
    id: "santorini", nameZh: "圣托里尼（费拉）", nameEn: "Santorini (Fira)", country: "greece", tier: "notable", zone: "gr-aegean", admin1Zh: "南爱琴大区", admin1En: "South Aegean",
    lon: 25.4315, lat: 36.4166,
    airport: { iata: "JTR", nameZh: "圣托里尼（锡拉）国家机场", nameEn: "Santorini (Thira) National Airport", lon: 25.4793, lat: 36.3992 },
    source: "费拉市中心 36.4166,25.4315；JTR 机场：公开资料",
  },
  {
    id: "corfu-town", nameZh: "科孚城", nameEn: "Corfu Town", country: "greece", tier: "notable", zone: "gr-ionian", admin1Zh: "伊奥尼亚群岛大区", admin1En: "Ionian Islands",
    lon: 19.9203, lat: 39.6243,
    airport: { iata: "CFU", nameZh: "科孚约安尼斯·卡波季斯特里亚斯国际机场", nameEn: "Corfu Ioannis Kapodistrias International Airport", lon: 19.9117, lat: 39.6019 },
    source: "科孚城市中心 39.6243,19.9203；CFU 机场：公开资料",
  },
  {
    id: "nafplio", nameZh: "纳夫普利翁", nameEn: "Nafplio", country: "greece", tier: "notable", zone: "gr-peloponnese", admin1Zh: "伯罗奔尼撒大区", admin1En: "Peloponnese",
    lon: 22.8075, lat: 37.5673,
    airport: { iata: "ATH", nameZh: "雅典埃莱夫塞里奥斯·韦尼泽洛斯国际机场", nameEn: "Athens Eleftherios Venizelos International Airport", lon: 23.9445, lat: 37.9364 },
    source: "纳夫普利翁市中心 37.5673,22.8075；本地无商业机场，最近机场为雅典机场（公路距离约140km）：公开资料",
  },
  {
    id: "ioannina", nameZh: "约阿尼纳", nameEn: "Ioannina", country: "greece", tier: "notable", zone: "gr-epirus", admin1Zh: "伊庇鲁斯大区", admin1En: "Epirus",
    lon: 20.8537, lat: 39.6650,
    airport: { iata: "IOA", nameZh: "约阿尼纳国家机场", nameEn: "Ioannina National Airport", lon: 20.8225, lat: 39.6964 },
    source: "约阿尼纳市中心 39.6650,20.8537；IOA 机场：公开资料",
  },
  {
    id: "kalamata", nameZh: "卡拉马塔", nameEn: "Kalamata", country: "greece", tier: "notable", zone: "gr-peloponnese", admin1Zh: "伯罗奔尼撒大区", admin1En: "Peloponnese",
    lon: 22.1109, lat: 37.0389,
    airport: { iata: "KLX", nameZh: "卡拉马塔国际机场", nameEn: "Kalamata International Airport", lon: 22.0257, lat: 37.0683 },
    source: "卡拉马塔市中心 37.0389,22.1109；KLX 机场：公开资料",
  },
  {
    id: "volos", nameZh: "沃洛斯", nameEn: "Volos", country: "greece", tier: "notable", zone: "gr-thessaly", admin1Zh: "色萨利大区", admin1En: "Thessaly",
    lon: 22.9444, lat: 39.3622,
    airport: { iata: "VOL", nameZh: "内阿安希阿洛斯国家机场", nameEn: "Nea Anchialos National Airport", lon: 22.7943, lat: 39.2197 },
    source: "沃洛斯市中心 39.3622,22.9444；VOL 机场：公开资料",
  },

  // ── 希腊 批2（2026-09-05）──
  {
    id: "mykonos", nameZh: "米科诺斯", nameEn: "Mykonos (Chora)", country: "greece", tier: "notable", zone: "gr-aegean", admin1Zh: "南爱琴大区", admin1En: "South Aegean",
    lon: 25.3642, lat: 37.4589,
    airport: { iata: "JMK", nameZh: "米科诺斯机场", nameEn: "Mykonos Airport", lon: 25.3481, lat: 37.4351 },
    source: "Mykonos town 37.4589,25.3642（en.wikipedia）；JMK 机场：en.wikipedia（镇东南约 4 公里，夏季有欧洲各地航线）；全岛人口 10,704（2021 普查）",
  },
  {
    id: "naxos", nameZh: "纳克索斯", nameEn: "Naxos (Chora)", country: "greece", tier: "notable", zone: "gr-aegean", admin1Zh: "南爱琴大区", admin1En: "South Aegean",
    lon: 25.4039, lat: 37.0875,
    airport: { iata: "JNX", nameZh: "纳克索斯机场", nameEn: "Naxos Island National Airport", lon: 25.3681, lat: 37.0811 },
    source: "Naxos town 37.0875,25.4039（en.wikipedia）；JNX 机场：en.wikipedia（镇南约 3 公里，雅典航线及季节性航线）；镇人口 8,897、全岛 20,578（2021 普查），基克拉泽斯最大岛",
  },
  {
    id: "kalabaka", nameZh: "卡兰巴卡（迈泰奥拉）", nameEn: "Kalabaka (Meteora)", country: "greece", tier: "notable", zone: "gr-thessaly", admin1Zh: "色萨利大区", admin1En: "Thessaly",
    lon: 21.6283, lat: 39.7081,
    source: "Kalabaka 39.7081,21.6283（en.wikipedia）；无机场，最近为塞萨洛尼基（约 200 公里），条目不写机场字段，火车自雅典约 4–5 小时；镇人口 8,573（2021 普查）；迈泰奥拉 1988 世界遗产",
  },
  {
    id: "patras", nameZh: "帕特雷", nameEn: "Patras", country: "greece", tier: "major", zone: "gr-peloponnese", admin1Zh: "西希腊大区", admin1En: "Western Greece",
    lon: 21.7333, lat: 38.2500,
    source: "Patras 38.2500,21.7333（en.wikipedia）；本地无民航机场，最近为阿拉克索斯 GPA（约 45 公里，季节性）、雅典（约 215 公里），条目不写机场字段；人口 215,922（2021 普查），希腊第三大城市",
  },
  {
    id: "zakynthos", nameZh: "扎金索斯", nameEn: "Zakynthos (Zante)", country: "greece", tier: "notable", zone: "gr-ionian", admin1Zh: "伊奥尼亚群岛大区", admin1En: "Ionian Islands",
    lon: 20.9000, lat: 37.7833,
    airport: { iata: "ZTH", nameZh: "扎金索斯国际机场", nameEn: "Zakynthos International", lon: 20.8842, lat: 37.7508 },
    source: "Zakynthos town 37.7833,20.9000（en.wikipedia）；ZTH 机场：en.wikipedia（镇南约 4 公里，夏季有欧洲航线，海龟繁殖季夜间禁飞）；镇人口 9,760（2021 普查）",
  },
];
