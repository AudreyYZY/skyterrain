import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 泰国 ──────────────────────────────────────────────
  {
    id: "bangkok", nameZh: "曼谷", nameEn: "Bangkok", country: "thailand", tier: "capital", zone: "th-bangkok", admin1Zh: "曼谷", admin1En: "Bangkok",
    lon: 100.5018, lat: 13.7563,
    airport: { iata: "BKK", nameZh: "素万那普机场", nameEn: "Suvarnabhumi Airport", lon: 100.7501, lat: 13.6900 },
    source: "曼谷市中心 13.7563,100.5018；BKK 机场：公开资料（国内廉航多用廊曼机场 DMK，本表统一列国际枢纽素万那普）",
  },
  {
    id: "chiang-mai", nameZh: "清迈", nameEn: "Chiang Mai", country: "thailand", tier: "major", zone: "th-north", admin1Zh: "清迈府", admin1En: "Chiang Mai",
    lon: 98.9853, lat: 18.7883,
    airport: { iata: "CNX", nameZh: "清迈国际机场", nameEn: "Chiang Mai International", lon: 98.9626, lat: 18.7669 },
    source: "清迈古城一带 18.7883,98.9853；CNX 机场：公开资料",
  },
  {
    id: "phuket", nameZh: "普吉岛", nameEn: "Phuket", country: "thailand", tier: "major", zone: "th-south", admin1Zh: "普吉府", admin1En: "Phuket",
    lon: 98.3923, lat: 7.8804,
    airport: { iata: "HKT", nameZh: "普吉国际机场", nameEn: "Phuket International", lon: 98.3169, lat: 8.1132 },
    source: "普吉镇一带 7.8804,98.3923；HKT 机场：公开资料",
  },
  {
    id: "krabi", nameZh: "甲米", nameEn: "Krabi", country: "thailand", tier: "notable", zone: "th-south", admin1Zh: "甲米府", admin1En: "Krabi",
    lon: 98.9063, lat: 8.0863,
    airport: { iata: "KBV", nameZh: "甲米国际机场", nameEn: "Krabi International", lon: 98.9863, lat: 8.0991 },
    source: "甲米镇一带 8.0863,98.9063；KBV 机场：公开资料",
  },
  {
    id: "pattaya", nameZh: "芭提雅", nameEn: "Pattaya", country: "thailand", tier: "notable", zone: "th-east", admin1Zh: "春武里府", admin1En: "Chonburi",
    lon: 100.8825, lat: 12.9236,
    airport: { iata: "UTP", nameZh: "乌达堡国际机场", nameEn: "U-Tapao International", lon: 101.0050, lat: 12.6799 },
    source: "芭提雅市中心 12.9236,100.8825；UTP 机场（距市区约30km）：公开资料",
  },
  {
    id: "chiang-rai", nameZh: "清莱", nameEn: "Chiang Rai", country: "thailand", tier: "notable", zone: "th-north", admin1Zh: "清莱府", admin1En: "Chiang Rai",
    lon: 99.8406, lat: 19.9105,
    airport: { iata: "CEI", nameZh: "清莱国际机场", nameEn: "Chiang Rai International", lon: 99.8828, lat: 19.9523 },
    source: "清莱市中心 19.9105,99.8406；CEI 机场：公开资料",
  },
  {
    id: "koh-samui", nameZh: "苏梅岛", nameEn: "Koh Samui", country: "thailand", tier: "notable", zone: "th-south", admin1Zh: "素叻他尼府", admin1En: "Surat Thani",
    lon: 100.0136, lat: 9.5120,
    airport: { iata: "USM", nameZh: "苏梅机场", nameEn: "Samui Airport", lon: 100.0625, lat: 9.5478 },
    source: "查汶一带 9.5120,100.0136；USM 机场为曼谷航空私有机场：公开资料",
  },
  {
    id: "ayutthaya", nameZh: "大城", nameEn: "Ayutthaya", country: "thailand", tier: "notable", zone: "th-central", admin1Zh: "大城府", admin1En: "Ayutthaya",
    lon: 100.5648, lat: 14.3532,
    airport: { iata: "DMK", nameZh: "廊曼国际机场", nameEn: "Don Mueang International", lon: 100.6069, lat: 13.9126 },
    source: "大城历史公园一带 14.3532,100.5648；本地无商业机场，最近机场为曼谷廊曼国际机场（距市区约60km，多经陆路火车往返）：公开资料",
  },
  {
    id: "sukhothai", nameZh: "素可泰", nameEn: "Sukhothai", country: "thailand", tier: "notable", zone: "th-north", admin1Zh: "素可泰府", admin1En: "Sukhothai",
    lon: 99.8265, lat: 17.0072,
    airport: { iata: "THS", nameZh: "素可泰机场", nameEn: "Sukhothai Airport", lon: 99.8161, lat: 17.2382 },
    source: "新素可泰市中心 17.0072,99.8265；THS 机场为曼谷航空私有机场（距历史公园约27km）：公开资料",
  },
  {
    id: "hua-hin", nameZh: "华欣", nameEn: "Hua Hin", country: "thailand", tier: "notable", zone: "th-central", admin1Zh: "巴蜀府", admin1En: "Prachuap Khiri Khan",
    lon: 99.9577, lat: 12.5684,
    airport: { iata: "HHQ", nameZh: "华欣机场", nameEn: "Hua Hin Airport", lon: 99.9539, lat: 12.6360 },
    source: "华欣市中心 12.5684,99.9577；HHQ 机场目前仅有飞往清迈的定期航班（每周约4班），前往曼谷通常经陆路（车程约3小时）：公开资料",
  },
  {
    id: "udon-thani", nameZh: "乌隆他尼", nameEn: "Udon Thani", country: "thailand", tier: "notable", zone: "th-northeast", admin1Zh: "乌隆他尼府", admin1En: "Udon Thani",
    lon: 102.7872, lat: 17.4139,
    airport: { iata: "UTH", nameZh: "乌隆他尼国际机场", nameEn: "Udon Thani International", lon: 102.7881, lat: 17.3864 },
    source: "乌隆他尼市中心 17.4139,102.7872；UTH 机场：公开资料",
  },
  {
    id: "nakhon-ratchasima", nameZh: "呵叻（那空叻差是玛）", nameEn: "Nakhon Ratchasima", country: "thailand", tier: "notable", zone: "th-northeast", admin1Zh: "呵叻府", admin1En: "Nakhon Ratchasima",
    lon: 102.0977, lat: 14.9799,
    airport: { iata: "DMK", nameZh: "廊曼国际机场", nameEn: "Don Mueang International", lon: 100.6069, lat: 13.9126 },
    source: "呵叻市中心 14.9799,102.0977；本地那空叻差是玛机场目前无稳定的定期客运航班，实际多经陆路（火车/长途大巴）往返曼谷（约260公里）：公开资料",
  },

  // ── 泰国 批2（2026-09-05）──
  {
    id: "kanchanaburi", nameZh: "北碧", nameEn: "Kanchanaburi", country: "thailand", tier: "notable", zone: "th-central", admin1Zh: "北碧府", admin1En: "Kanchanaburi",
    lon: 99.5311, lat: 14.0194,
    source: "Kanchanaburi 14.0194,99.5311（en.wikipedia）；无机场，最近为曼谷（约 120 公里），条目不写机场字段，火车自曼谷吞武里站可达；市镇人口 25,651（2017）",
  },
  {
    id: "lampang", nameZh: "南邦", nameEn: "Lampang", country: "thailand", tier: "notable", zone: "th-north", admin1Zh: "南邦府", admin1En: "Lampang",
    lon: 99.4900, lat: 18.2900,
    airport: { iata: "LPT", nameZh: "南邦机场", nameEn: "Lampang Airport", lon: 99.5042, lat: 18.2709 },
    source: "Lampang 18.2900,99.4900（en.wikipedia）；LPT 机场：en.wikipedia（紧邻市区南侧，仅曼谷廊曼航线）；人口 58,074（2010 普查）",
  },
  {
    id: "ko-chang", nameZh: "象岛", nameEn: "Ko Chang", country: "thailand", tier: "notable", zone: "th-east", admin1Zh: "达叻府", admin1En: "Trat",
    lon: 102.3519, lat: 12.1036,
    airport: { iata: "TDX", nameZh: "达叻机场", nameEn: "Trat Airport", lon: 102.3190, lat: 12.2746 },
    source: "Ko Chang 12.1036,102.3519（en.wikipedia）；TDX 达叻机场在大陆（距 Ao Thammachat 渡口约 17 公里，曼谷航空经营，仅曼谷航线），岛上无机场；人口 8,538（2019），泰国第三大岛",
  },
  {
    id: "khao-lak", nameZh: "考拉", nameEn: "Khao Lak", country: "thailand", tier: "notable", zone: "th-south", admin1Zh: "攀牙府", admin1En: "Phang Nga",
    lon: 98.2500, lat: 8.6889,
    airport: { iata: "HKT", nameZh: "普吉国际机场（经普吉转乘）", nameEn: "Phuket International (via Phuket)", lon: 98.3169, lat: 8.1132 },
    source: "Khao Lak 8.6889,98.2500（en.wikipedia）；无机场，与普吉条目共用 HKT（约 60 公里）；沿海度假带约 20–25 公里长，无单一人口口径",
  },
  {
    id: "ko-lanta", nameZh: "兰塔岛", nameEn: "Ko Lanta", country: "thailand", tier: "notable", zone: "th-south", admin1Zh: "甲米府", admin1En: "Krabi",
    lon: 99.0500, lat: 7.5833,
    airport: { iata: "KBV", nameZh: "甲米国际机场（经甲米转乘）", nameEn: "Krabi International (via Krabi)", lon: 98.9863, lat: 8.0991 },
    source: "Ko Lanta Yai 7.5833,99.0500（en.wikipedia）；无机场，与甲米条目共用 KBV（约 70 公里，接驳车约 2 小时）；人口 10,830（2012）",
  },
];
