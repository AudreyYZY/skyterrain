import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 韩国 ──────────────────────────────────────────────
  {
    id: "seoul", nameZh: "首尔", nameEn: "Seoul", country: "south-korea", tier: "capital", zone: "kr-capital", admin1Zh: "首尔特别市", admin1En: "Seoul",
    lon: 126.9780, lat: 37.5665,
    airport: { iata: "ICN", nameZh: "仁川国际机场", nameEn: "Incheon International", lon: 126.4407, lat: 37.4602 },
    source: "首尔市厅一带 37.5665,126.9780；ICN 机场：公开资料（国内航线主要用金浦机场 GMP，本表统一列国际枢纽 ICN）",
  },
  {
    id: "busan", nameZh: "釜山", nameEn: "Busan", country: "south-korea", tier: "major", zone: "kr-yeongnam", admin1Zh: "釜山广域市", admin1En: "Busan",
    lon: 129.0756, lat: 35.1796,
    airport: { iata: "PUS", nameZh: "金海国际机场", nameEn: "Gimhae International", lon: 128.9386, lat: 35.1795 },
    source: "釜山站/南浦一带 35.1796,129.0756；PUS 机场：公开资料",
  },
  {
    id: "jeju-city", nameZh: "济州市", nameEn: "Jeju City", country: "south-korea", tier: "major", zone: "kr-jeju", admin1Zh: "济州特别自治道", admin1En: "Jeju",
    lon: 126.5312, lat: 33.4996,
    airport: { iata: "CJU", nameZh: "济州国际机场", nameEn: "Jeju International", lon: 126.4930, lat: 33.5113 },
    source: "济州市中心 33.4996,126.5312；CJU 机场：公开资料",
  },
  {
    id: "gyeongju", nameZh: "庆州", nameEn: "Gyeongju", country: "south-korea", tier: "major", zone: "kr-yeongnam", admin1Zh: "庆尚北道", admin1En: "North Gyeongsang Province",
    lon: 129.2247, lat: 35.8562,
    airport: { iata: "KPO", nameZh: "浦项庆州机场", nameEn: "Pohang Gyeongju Airport", lon: 129.4204, lat: 35.9878 },
    source: "庆州历史区一带 35.8562,129.2247；本地无商业机场，最近机场为浦项庆州机场（距市区约35km）：公开资料",
  },
  {
    id: "ulsan", nameZh: "蔚山", nameEn: "Ulsan", country: "south-korea", tier: "notable", zone: "kr-yeongnam", admin1Zh: "蔚山广域市", admin1En: "Ulsan",
    lon: 129.3114, lat: 35.5384,
    airport: { iata: "USN", nameZh: "蔚山机场", nameEn: "Ulsan Airport", lon: 129.3519, lat: 35.5934 },
    source: "蔚山市中心 35.5384,129.3114；USN 机场：公开资料",
  },
  {
    id: "yeosu", nameZh: "丽水", nameEn: "Yeosu", country: "south-korea", tier: "notable", zone: "kr-honam", admin1Zh: "全南光州特别市", admin1En: "Jeonnam-Gwangju Special Metropolitan City",
    lon: 127.6622, lat: 34.7604,
    airport: { iata: "RSU", nameZh: "丽水机场", nameEn: "Yeosu Airport", lon: 127.6169, lat: 34.8423 },
    source: "丽水市中心 34.7604,127.6622；RSU 机场：公开资料",
  },
  {
    id: "pohang", nameZh: "浦项", nameEn: "Pohang", country: "south-korea", tier: "notable", zone: "kr-yeongnam", admin1Zh: "庆尚北道", admin1En: "North Gyeongsang Province",
    lon: 129.3435, lat: 36.0190,
    airport: { iata: "KPO", nameZh: "浦项庆州机场", nameEn: "Pohang Gyeongju Airport", lon: 129.4204, lat: 35.9878 },
    source: "浦项市中心 36.0190,129.3435；KPO 机场：公开资料",
  },
  {
    id: "gangneung", nameZh: "江陵", nameEn: "Gangneung", country: "south-korea", tier: "notable", zone: "kr-gangwon", admin1Zh: "江原特别自治道", admin1En: "Gangwon State",
    lon: 128.8761, lat: 37.7519,
    airport: { iata: "YNY", nameZh: "襄阳国际机场", nameEn: "Yangyang International", lon: 128.6692, lat: 38.0611 },
    source: "江陵市中心 37.7519,128.8761；本地无商业机场，最近机场为襄阳国际机场（距市区约40km，国内定期航班有限）：公开资料",
  },
  {
    id: "sokcho", nameZh: "束草", nameEn: "Sokcho", country: "south-korea", tier: "notable", zone: "kr-gangwon", admin1Zh: "江原特别自治道", admin1En: "Gangwon State",
    lon: 128.5918, lat: 38.2070,
    airport: { iata: "YNY", nameZh: "襄阳国际机场", nameEn: "Yangyang International", lon: 128.6692, lat: 38.0611 },
    source: "束草市中心 38.2070,128.5918；本地无商业机场，最近机场为襄阳国际机场（距市区约20km，国内定期航班有限）：公开资料",
  },
  {
    id: "chuncheon", nameZh: "春川", nameEn: "Chuncheon", country: "south-korea", tier: "notable", zone: "kr-gangwon", admin1Zh: "江原特别自治道", admin1En: "Gangwon State",
    lon: 127.7298, lat: 37.8813,
    airport: { iata: "WJU", nameZh: "原州机场", nameEn: "Wonju Airport", lon: 127.9600, lat: 37.4380 },
    source: "春川市中心 37.8813,127.7298；本地无商业机场，最近机场为原州机场（距市区约65km）：公开资料",
  },
  {
    id: "andong", nameZh: "安东", nameEn: "Andong", country: "south-korea", tier: "notable", zone: "kr-yeongnam", admin1Zh: "庆尚北道", admin1En: "North Gyeongsang Province",
    lon: 128.7294, lat: 36.5684,
    airport: { iata: "TAE", nameZh: "大邱国际机场", nameEn: "Daegu International", lon: 128.6589, lat: 35.8942 },
    source: "安东市中心 36.5684,128.7294；本地小型机场现无定期客运航班，最近有定期航班的机场为大邱国际机场（距市区约90km）：公开资料",
  },
  {
    id: "jeonju", nameZh: "全州", nameEn: "Jeonju", country: "south-korea", tier: "notable", zone: "kr-honam", admin1Zh: "全北特别自治道", admin1En: "Jeonbuk State",
    lon: 127.1480, lat: 35.8242,
    airport: { iata: "KWJ", nameZh: "光州机场", nameEn: "Gwangju Airport", lon: 126.8089, lat: 35.1264 },
    source: "全州韩屋村一带 35.8242,127.1480；本地无商业机场，最近机场为光州机场（距市区直线约 83 km，按本条目坐标算）：公开资料",
  },

  // ── 韩国 批2（2026-09-05）──
  {
    id: "incheon", nameZh: "仁川", nameEn: "Incheon", country: "south-korea", tier: "major", zone: "kr-capital", admin1Zh: "仁川广域市", admin1En: "Incheon",
    lon: 126.7052, lat: 37.4563,
    airport: { iata: "ICN", nameZh: "仁川国际机场", nameEn: "Incheon International", lon: 126.4407, lat: 37.4602 },
    source: "仁川市厅 37.4563,126.7052（en.wikipedia）；ICN 机场在永宗岛（与首尔条目共用记录）；人口 3,015,482（2026-01）",
  },
  {
    id: "suwon", nameZh: "水原", nameEn: "Suwon", country: "south-korea", tier: "notable", zone: "kr-capital", admin1Zh: "京畿道", admin1En: "Gyeonggi Province",
    lon: 127.0286, lat: 37.2636,
    source: "水原 37.2636,127.0286（en.wikipedia）；无机场，最近为仁川 ICN（约 40 公里），条目不写机场字段，地铁 1 号线自首尔可达；人口 1,234,582（2026-02）",
  },
  {
    id: "daegu", nameZh: "大邱", nameEn: "Daegu", country: "south-korea", tier: "major", zone: "kr-yeongnam", admin1Zh: "大邱广域市", admin1En: "Daegu",
    lon: 128.6017, lat: 35.8717,
    airport: { iata: "TAE", nameZh: "大邱国际机场", nameEn: "Daegu International", lon: 128.6589, lat: 35.8942 },
    source: "大邱 35.8717,128.6017（en.wikipedia）；TAE 机场：en.wikipedia（市区东北，地铁 1 号线峨洋桥站约 1.3 公里）；人口 2,351,461（2026-01）",
  },
  {
    id: "gwangju", nameZh: "光州", nameEn: "Gwangju", country: "south-korea", tier: "major", zone: "kr-honam", admin1Zh: "全南光州特别市", admin1En: "Jeonnam-Gwangju Special Metropolitan City",
    lon: 126.8486, lat: 35.1653,
    airport: { iata: "KWJ", nameZh: "光州机场", nameEn: "Gwangju Airport", lon: 126.8089, lat: 35.1264 },
    source: "光州 35.1653,126.8486（en.wikipedia）；KWJ 机场：en.wikipedia（市区西侧，仅济州/金浦航线，远期计划并入务安机场）；人口 1,401,235（2026-02）；2026-07-01 与全罗南道合并为全南光州特别市（en.wikipedia Administrative divisions of South Korea）",
  },
  {
    id: "daejeon", nameZh: "大田", nameEn: "Daejeon", country: "south-korea", tier: "major", zone: "kr-chungcheong", admin1Zh: "大田广域市", admin1En: "Daejeon",
    lon: 127.3850, lat: 36.3500,
    airport: { iata: "CJJ", nameZh: "清州国际机场（经清州转乘）", nameEn: "Cheongju International (via Cheongju)", lon: 127.4992, lat: 36.7164 },
    source: "大田 36.3500,127.3850（en.wikipedia）；无自有机场，最近为清州 CJJ（约 40 公里），本条目记录 CJJ 并注明；人口 1,441,203（2026-02）",
  },
  {
    id: "tongyeong", nameZh: "统营", nameEn: "Tongyeong", country: "south-korea", tier: "notable", zone: "kr-yeongnam", admin1Zh: "庆尚南道", admin1En: "South Gyeongsang Province",
    lon: 128.4331, lat: 34.8544,
    source: "统营 34.8544,128.4331（en.wikipedia）；无机场，最近为泗川（约 50 公里）、釜山金海（约 100 公里），条目不写机场字段；人口 118,896（2024-09）",
  },
];
