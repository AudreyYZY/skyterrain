import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 意大利 ──
  {
    id: "rome", nameZh: "罗马", nameEn: "Rome", country: "italy", tier: "capital", zone: "it-central", admin1Zh: "拉齐奥大区", admin1En: "Lazio",
    lon: 12.4964, lat: 41.9028,
    airport: { iata: "FCO", nameZh: "菲乌米奇诺机场", nameEn: "Rome Fiumicino Airport", lon: 12.2389, lat: 41.8003 },
    source: "罗马市中心 41.9028,12.4964；FCO 机场：公开资料",
  },
  {
    id: "florence", nameZh: "佛罗伦萨", nameEn: "Florence", country: "italy", tier: "major", zone: "it-central", admin1Zh: "托斯卡纳大区", admin1En: "Tuscany",
    lon: 11.2558, lat: 43.7696,
    airport: { iata: "FLR", nameZh: "佛罗伦萨机场", nameEn: "Florence Airport", lon: 11.2051, lat: 43.8100 },
    source: "佛罗伦萨市中心 43.7696,11.2558；FLR 机场：公开资料",
  },
  {
    id: "milan", nameZh: "米兰", nameEn: "Milan", country: "italy", tier: "major", zone: "it-northwest", admin1Zh: "伦巴第大区", admin1En: "Lombardy",
    lon: 9.1900, lat: 45.4642,
    airport: { iata: "LIN", nameZh: "米兰利纳特机场", nameEn: "Milan Linate Airport", lon: 9.2767, lat: 45.4451 },
    source: "米兰市中心 45.4642,9.1900；LIN 机场：公开资料",
  },
  {
    id: "turin", nameZh: "都灵", nameEn: "Turin", country: "italy", tier: "notable", zone: "it-northwest", admin1Zh: "皮埃蒙特大区", admin1En: "Piedmont",
    lon: 7.6869, lat: 45.0703,
    airport: { iata: "TRN", nameZh: "都灵机场", nameEn: "Turin Airport", lon: 7.6497, lat: 45.2008 },
    source: "都灵市中心 45.0703,7.6869；TRN 机场：公开资料",
  },
  {
    id: "venice", nameZh: "威尼斯", nameEn: "Venice", country: "italy", tier: "major", zone: "it-northeast", admin1Zh: "威尼托大区", admin1En: "Veneto",
    lon: 12.3155, lat: 45.4408,
    airport: { iata: "VCE", nameZh: "威尼斯马可波罗机场", nameEn: "Venice Marco Polo Airport", lon: 12.3519, lat: 45.5053 },
    source: "威尼斯市中心 45.4408,12.3155；VCE 机场：公开资料",
  },
  {
    id: "bologna", nameZh: "博洛尼亚", nameEn: "Bologna", country: "italy", tier: "notable", zone: "it-northeast", admin1Zh: "艾米利亚-罗马涅大区", admin1En: "Emilia-Romagna",
    lon: 11.3426, lat: 44.4949,
    airport: { iata: "BLQ", nameZh: "博洛尼亚机场", nameEn: "Bologna Airport", lon: 11.2887, lat: 44.5354 },
    source: "博洛尼亚市中心 44.4949,11.3426；BLQ 机场：公开资料",
  },
  {
    id: "naples", nameZh: "那不勒斯", nameEn: "Naples", country: "italy", tier: "major", zone: "it-south", admin1Zh: "坎帕尼亚大区", admin1En: "Campania",
    lon: 14.2681, lat: 40.8518,
    airport: { iata: "NAP", nameZh: "那不勒斯机场", nameEn: "Naples Airport", lon: 14.2908, lat: 40.8860 },
    source: "那不勒斯市中心 40.8518,14.2681；NAP 机场：公开资料",
  },
  {
    id: "bari", nameZh: "巴里", nameEn: "Bari", country: "italy", tier: "notable", zone: "it-south", admin1Zh: "普利亚大区", admin1En: "Apulia",
    lon: 16.8719, lat: 41.1171,
    airport: { iata: "BRI", nameZh: "巴里机场", nameEn: "Bari Airport", lon: 16.7606, lat: 41.1389 },
    source: "巴里市中心 41.1171,16.8719；BRI 机场：公开资料",
  },
  {
    id: "palermo", nameZh: "巴勒莫", nameEn: "Palermo", country: "italy", tier: "notable", zone: "it-sicily", admin1Zh: "西西里大区", admin1En: "Sicily",
    lon: 13.3615, lat: 38.1157,
    airport: { iata: "PMO", nameZh: "巴勒莫机场", nameEn: "Palermo Airport", lon: 13.0910, lat: 38.1760 },
    source: "巴勒莫市中心 38.1157,13.3615；PMO 机场：公开资料",
  },
  {
    id: "catania", nameZh: "卡塔尼亚", nameEn: "Catania", country: "italy", tier: "notable", zone: "it-sicily", admin1Zh: "西西里大区", admin1En: "Sicily",
    lon: 15.0830, lat: 37.5079,
    airport: { iata: "CTA", nameZh: "卡塔尼亚机场", nameEn: "Catania Airport", lon: 15.0664, lat: 37.4668 },
    source: "卡塔尼亚市中心 37.5079,15.0830；CTA 机场：公开资料",
  },
  {
    id: "cagliari", nameZh: "卡利亚里", nameEn: "Cagliari", country: "italy", tier: "notable", zone: "it-sardinia", admin1Zh: "撒丁大区", admin1En: "Sardinia",
    lon: 9.1217, lat: 39.2238,
    airport: { iata: "CAG", nameZh: "卡利亚里机场", nameEn: "Cagliari Airport", lon: 9.0543, lat: 39.2515 },
    source: "卡利亚里市中心 39.2238,9.1217；CAG 机场：公开资料",
  },

  // ── 意大利 批2（2026-09-05）──
  {
    id: "verona", nameZh: "维罗纳", nameEn: "Verona", country: "italy", tier: "notable", zone: "it-northeast", admin1Zh: "威尼托大区", admin1En: "Veneto",
    lon: 10.9928, lat: 45.4386,
    airport: { iata: "VRN", nameZh: "维罗纳维拉弗兰卡机场", nameEn: "Verona Villafranca", lon: 10.8881, lat: 45.3964 },
    source: "Verona 45.4386,10.9928（en.wikipedia）；VRN 机场：en.wikipedia（市中心西南约 10 公里）；人口 255,133（2025）",
  },
  {
    id: "genoa", nameZh: "热那亚", nameEn: "Genoa", country: "italy", tier: "major", zone: "it-northwest", admin1Zh: "利古里亚大区", admin1En: "Liguria",
    lon: 8.9339, lat: 44.4072,
    airport: { iata: "GOA", nameZh: "热那亚哥伦布机场", nameEn: "Genoa Cristoforo Colombo", lon: 8.8375, lat: 44.4133 },
    source: "Genoa 44.4072,8.9339（en.wikipedia）；GOA 机场：en.wikipedia（市中心西约 7 公里）；人口 565,301（2025）",
  },
  {
    id: "pisa", nameZh: "比萨", nameEn: "Pisa", country: "italy", tier: "notable", zone: "it-central", admin1Zh: "托斯卡纳大区", admin1En: "Tuscany",
    lon: 10.4000, lat: 43.7170,
    airport: { iata: "PSA", nameZh: "比萨伽利略机场", nameEn: "Pisa Galileo Galilei", lon: 10.3925, lat: 43.6839 },
    source: "Pisa 43.7170,10.4000（en.wikipedia）；PSA 机场：en.wikipedia（市中心南约 2 公里，Pisamover 5 分钟到中央车站）；人口 98,778（2023）",
  },
  {
    id: "siena", nameZh: "锡耶纳", nameEn: "Siena", country: "italy", tier: "notable", zone: "it-central", admin1Zh: "托斯卡纳大区", admin1En: "Tuscany",
    lon: 11.3306, lat: 43.3186,
    source: "Siena 43.3186,11.3306（en.wikipedia）；无机场，最近为佛罗伦萨（约 81 公里）、比萨（约 150 公里），条目不写机场字段；人口 53,180（2026）",
  },
  {
    id: "matera", nameZh: "马泰拉", nameEn: "Matera", country: "italy", tier: "notable", zone: "it-south", admin1Zh: "巴西利卡塔大区", admin1En: "Basilicata",
    lon: 16.6000, lat: 40.6670,
    airport: { iata: "BRI", nameZh: "巴里机场（经巴里转乘）", nameEn: "Bari Airport (via Bari)", lon: 16.7606, lat: 41.1389 },
    source: "Matera 40.6670,16.6000（en.wikipedia）；无自有机场，与巴里条目共用 BRI（约 60 公里）；人口 60,403（2018）",
  },
  {
    id: "trieste", nameZh: "的里雅斯特", nameEn: "Trieste", country: "italy", tier: "notable", zone: "it-northeast", admin1Zh: "弗留利-威尼斯朱利亚大区", admin1En: "Friuli-Venezia Giulia",
    lon: 13.7703, lat: 45.6503,
    airport: { iata: "TRS", nameZh: "的里雅斯特机场（隆基）", nameEn: "Trieste Airport (Ronchi dei Legionari)", lon: 13.4722, lat: 45.8275 },
    source: "Trieste 45.6503,13.7703（en.wikipedia）；TRS 机场：en.wikipedia（隆基，市区西北约 40 公里，有火车站）；人口 198,668（2025）",
  },
];
