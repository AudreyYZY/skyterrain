import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 荷兰 ──
  {
    id: "amsterdam", nameZh: "阿姆斯特丹", nameEn: "Amsterdam", country: "netherlands", tier: "capital", zone: "nl-noord-holland", admin1Zh: "北荷兰省", admin1En: "North Holland",
    lon: 4.9041, lat: 52.3676,
    airport: { iata: "AMS", nameZh: "史基浦机场", nameEn: "Amsterdam Schiphol Airport", lon: 4.7683, lat: 52.3105 },
    source: "阿姆斯特丹市中心 52.3676,4.9041；AMS 机场：公开资料",
  },
  {
    id: "haarlem", nameZh: "哈勒姆", nameEn: "Haarlem", country: "netherlands", tier: "notable", zone: "nl-noord-holland", admin1Zh: "北荷兰省", admin1En: "North Holland",
    lon: 4.6462, lat: 52.3874,
    source: "哈勒姆 52.3874,4.6462：公开资料（无机场，就近用史基浦；北荷兰省首府，靠近荷兰沙丘海岸）",
  },
  {
    id: "texel", nameZh: "特塞尔岛", nameEn: "Texel", country: "netherlands", tier: "notable", zone: "nl-noord-holland", admin1Zh: "北荷兰省", admin1En: "North Holland",
    lon: 4.8267, lat: 53.0500,
    source: "特塞尔岛（登堡）53.0500,4.8267：公开资料（小型机场无定期商业航班，就近用史基浦+渡轮；西弗里西亚群岛最大岛）",
  },
  {
    id: "rotterdam", nameZh: "鹿特丹", nameEn: "Rotterdam", country: "netherlands", tier: "major", zone: "nl-zuid-holland", admin1Zh: "南荷兰省", admin1En: "South Holland",
    lon: 4.4777, lat: 51.9244,
    airport: { iata: "RTM", nameZh: "鹿特丹海牙机场", nameEn: "Rotterdam The Hague Airport", lon: 4.4372, lat: 51.9569 },
    source: "鹿特丹市中心 51.9244,4.4777；RTM 机场：公开资料",
  },
  {
    id: "the-hague", nameZh: "海牙", nameEn: "The Hague", country: "netherlands", tier: "notable", zone: "nl-zuid-holland", admin1Zh: "南荷兰省", admin1En: "South Holland",
    lon: 4.3007, lat: 52.0705,
    source: "海牙 52.0705,4.3007：公开资料（无自有机场，就近用鹿特丹海牙机场；荷兰政府所在地、国际法院所在地）",
  },
  {
    id: "delft", nameZh: "代尔夫特", nameEn: "Delft", country: "netherlands", tier: "notable", zone: "nl-zuid-holland", admin1Zh: "南荷兰省", admin1En: "South Holland",
    lon: 4.3571, lat: 52.0116,
    source: "代尔夫特 52.0116,4.3571：公开资料（无机场，就近用鹿特丹海牙机场；代尔夫特蓝陶与理工大学所在地）",
  },
  {
    id: "leiden", nameZh: "莱顿", nameEn: "Leiden", country: "netherlands", tier: "notable", zone: "nl-zuid-holland", admin1Zh: "南荷兰省", admin1En: "South Holland",
    lon: 4.4970, lat: 52.1601,
    source: "莱顿 52.1601,4.4970：公开资料（无机场，就近用史基浦；荷兰最古老大学所在地）",
  },
  {
    id: "utrecht", nameZh: "乌得勒支", nameEn: "Utrecht", country: "netherlands", tier: "major", zone: "nl-utrecht", admin1Zh: "乌得勒支省", admin1En: "Utrecht",
    lon: 5.1214, lat: 52.0907,
    source: "乌得勒支 52.0907,5.1214：公开资料（无机场，就近用史基浦；荷兰第四大城市、铁路枢纽）",
  },
  {
    id: "maastricht", nameZh: "马斯特里赫特", nameEn: "Maastricht", country: "netherlands", tier: "notable", zone: "nl-limburg", admin1Zh: "林堡省", admin1En: "Limburg",
    lon: 5.6910, lat: 50.8514,
    airport: { iata: "MST", nameZh: "马斯特里赫特-亚琛机场", nameEn: "Maastricht Aachen Airport", lon: 5.7703, lat: 50.9114 },
    source: "马斯特里赫特市中心 50.8514,5.6910；MST 机场：公开资料",
  },
  {
    id: "groningen", nameZh: "格罗宁根", nameEn: "Groningen", country: "netherlands", tier: "notable", zone: "nl-groningen-friesland", admin1Zh: "格罗宁根省", admin1En: "Groningen",
    lon: 6.5665, lat: 53.2194,
    airport: { iata: "GRQ", nameZh: "埃尔德机场", nameEn: "Groningen Airport Eelde", lon: 6.5794, lat: 53.1197 },
    source: "格罗宁根市中心 53.2194,6.5665；GRQ 机场：公开资料",
  },
  {
    id: "zwolle", nameZh: "兹沃勒", nameEn: "Zwolle", country: "netherlands", tier: "notable", zone: "nl-overijssel", admin1Zh: "上艾瑟尔省", admin1En: "Overijssel",
    lon: 6.0958, lat: 52.5168,
    source: "兹沃勒 52.5168,6.0958：公开资料（无机场，就近用史基浦；艾瑟尔河畔汉萨古城，羊角村门户）",
  },

  // ── 荷兰 批2（2026-09-05）──
  {
    id: "eindhoven", nameZh: "埃因霍温", nameEn: "Eindhoven", country: "netherlands", tier: "major", zone: "nl-noord-brabant", admin1Zh: "北布拉班特省", admin1En: "North Brabant",
    lon: 5.4830, lat: 51.4330,
    airport: { iata: "EIN", nameZh: "埃因霍温机场", nameEn: "Eindhoven Airport", lon: 5.3744, lat: 51.4500 },
    source: "Eindhoven 51.4330,5.4830（en.wikipedia）；EIN 机场：en.wikipedia（市中心西约 8 公里，荷兰第二大客运机场）；人口 249,054（2025-01），荷兰第五大城市",
  },
  {
    id: "arnhem", nameZh: "阿纳姆", nameEn: "Arnhem", country: "netherlands", tier: "notable", zone: "nl-gelderland", admin1Zh: "海尔德兰省", admin1En: "Gelderland",
    lon: 5.9170, lat: 51.9830,
    source: "Arnhem 51.9830,5.9170（en.wikipedia）；无机场，最近为阿姆斯特丹史基浦（约 100 公里）、埃因霍温，条目不写机场字段，城际列车自阿姆斯特丹约 1 小时 10 分；人口 162,424（2021-01）",
  },
  {
    id: "giethoorn", nameZh: "羊角村", nameEn: "Giethoorn", country: "netherlands", tier: "notable", zone: "nl-overijssel", admin1Zh: "上艾瑟尔省", admin1En: "Overijssel",
    lon: 6.0781, lat: 52.7389,
    source: "Giethoorn 52.7389,6.0781（en.wikipedia）；无机场，条目不写机场字段，火车到斯滕韦克再转公交；人口 2,805（2021）",
  },
  {
    id: "middelburg", nameZh: "米德尔堡", nameEn: "Middelburg", country: "netherlands", tier: "notable", zone: "nl-zeeland", admin1Zh: "泽兰省", admin1En: "Zeeland",
    lon: 3.6135, lat: 51.5000,
    source: "Middelburg 51.5000,3.6135（en.wikipedia）；无机场，条目不写机场字段，城际列车自阿姆斯特丹约 2.5 小时、鹿特丹约 1.5 小时；人口 48,964（2021-01）",
  },
  {
    id: "alkmaar", nameZh: "阿尔克马尔", nameEn: "Alkmaar", country: "netherlands", tier: "notable", zone: "nl-noord-holland", admin1Zh: "北荷兰省", admin1En: "North Holland",
    lon: 4.7500, lat: 52.6333,
    airport: { iata: "AMS", nameZh: "史基浦机场（经阿姆斯特丹转乘）", nameEn: "Amsterdam Schiphol Airport (via Amsterdam)", lon: 4.7683, lat: 52.3105 },
    source: "Alkmaar 52.6333,4.7500（en.wikipedia）；无自有机场，与阿姆斯特丹条目共用 AMS（约 40 公里）；人口 113,170（2022-11）",
  },
];
