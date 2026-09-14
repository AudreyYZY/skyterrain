import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 罗马尼亚 ──
  // 东欧次区域。安全与零争议前置判断：无活跃冲突；**不收紧邻乌克兰、摩尔多瓦边境的城市**（图尔恰离国界约 7 km、县北部多次发现无人机残骸，
  // 雅西离国界约 15 km，本批都不收）；康斯坦察离边境远照收，但不写港口的战时角色。
  // 条目只写地理、制度、建筑与前现代史实；**不写族群构成与外语城名、领土与边界史、二十世纪政治（蒂米什瓦拉 1989 年、克卢日改名背景、议会宫建造背景）、宗教评价**；
  // 布兰城堡只写与小说《德古拉》的联系（城堡运营方口径），不点名历史人物。
  // 人口口径：INS 的城市级常住人口只有普查才有，TEMPO 的 POP107D 是**户籍人口**（系统性偏高），两者不可混；
  // 本国城市一律用 **2021 年人口普查常住人口**（RPL2021 定稿表 1.3.2，1 级；普查口径不算过期），全国总数用 2026-01-01 常住人口。
  // admin1 用 41 个县 + 布加勒斯特市。机场坐标取 OurAirports。
  {
    id: "bucharest", nameZh: "布加勒斯特", nameEn: "Bucharest", country: "romania", tier: "capital", zone: "ro-south",
    admin1Zh: "布加勒斯特市", admin1En: "Bucharest",
    lon: 26.1032, lat: 44.4325,
    airport: { iata: "OTP", nameZh: "布加勒斯特亨利·科安德国际机场", nameEn: "Bucharest Henri Coandă International Airport", lon: 26.103285, lat: 44.571792 },
    source: "布加勒斯特老城（历史中心）44.4325,26.1032（OSM；Wikidata 城市点偏南）；OTP 机场 OurAirports 44.5718,26.1033，位于伊尔福夫县奥托佩尼、不在布加勒斯特市域（OurAirports iso_region RO-IF / Nominatim，3 级），距老城直线约 15.5 km（按本条目坐标算）；北站—机场直达火车 2020-12-13 起运营、约 20–25 分钟（CFR Călători，1 级）",
  },
  {
    id: "cluj-napoca", nameZh: "克卢日-纳波卡", nameEn: "Cluj-Napoca", country: "romania", tier: "major", zone: "ro-center",
    admin1Zh: "克卢日县", admin1En: "Cluj County",
    lon: 23.5907, lat: 46.7689,
    airport: { iata: "CLJ", nameZh: "克卢日国际机场", nameEn: "Cluj International Airport", lon: 23.685733, lat: 46.786042 },
    source: "克卢日-纳波卡市中心（联盟广场一带）46.7689,23.5907（Wikidata）；CLJ 机场 OurAirports 46.7860,23.6857，距市中心直线约 7.5 km（按坐标算）；有飞往布加勒斯特 OTP 的国内定期航班（机场官网目的地页，1 级）",
  },
  {
    id: "timisoara", nameZh: "蒂米什瓦拉", nameEn: "Timișoara", country: "romania", tier: "major", zone: "ro-west",
    admin1Zh: "蒂米什县", admin1En: "Timiș County",
    lon: 21.2300, lat: 45.7597,
    airport: { iata: "TSR", nameZh: "蒂米什瓦拉国际机场", nameEn: "Timișoara International Airport", lon: 21.3379, lat: 45.809898 },
    source: "蒂米什瓦拉市中心 45.7597,21.2300（Wikidata）；TSR 机场 OurAirports 45.8099,21.3379，距市中心直线约 10 km（按坐标算）；有飞往布加勒斯特的国内定期航班（机场官网航班屏，1 级）",
  },
  {
    id: "brasov", nameZh: "布拉索夫", nameEn: "Brașov", country: "romania", tier: "major", zone: "ro-center",
    admin1Zh: "布拉索夫县", admin1En: "Brașov County",
    lon: 25.5890, lat: 45.6420,
    airport: { iata: "GHV", nameZh: "布拉索夫—吉姆巴夫国际机场", nameEn: "Brașov-Ghimbav International Airport", lon: 25.522871, lat: 45.70558 },
    source: "布拉索夫老城议会广场 45.6420,25.5890（Wikidata；市政坐标偏东北新城）；GHV 机场 OurAirports 45.7056,25.5229，距老城直线约 8.7 km（按坐标算），航班以国际线与包机为主、无国内定期线（机场航班屏快照，1 级 + 3 级）",
  },
  {
    id: "sibiu", nameZh: "锡比乌", nameEn: "Sibiu", country: "romania", tier: "major", zone: "ro-center",
    admin1Zh: "锡比乌县", admin1En: "Sibiu County",
    lon: 24.1518, lat: 45.7966,
    airport: { iata: "SBZ", nameZh: "锡比乌国际机场", nameEn: "Sibiu International Airport", lon: 24.086666, lat: 45.785841 },
    source: "锡比乌大广场 45.7966,24.1518（Wikidata）；SBZ 机场 OurAirports 45.7858,24.0867，距大广场直线约 5.2 km（按坐标算），无国内定期线（机场航班屏快照，1 级）",
  },
  {
    id: "constanta", nameZh: "康斯坦察", nameEn: "Constanța", country: "romania", tier: "major", zone: "ro-southeast",
    admin1Zh: "康斯坦察县", admin1En: "Constanța County",
    lon: 28.6508, lat: 44.1767,
    airport: { iata: "CND", nameZh: "米哈伊尔·科格尔尼恰努国际机场", nameEn: "Mihail Kogălniceanu International Airport", lon: 28.4883, lat: 44.362202 },
    source: "康斯坦察市中心 44.1767,28.6508（Wikidata）；CND 机场 OurAirports 44.3622,28.4883，在同名乡、不在康斯坦察市域，距市中心直线约 24 km（按坐标算），无国内定期线（机场航班屏快照，1 级 + 3 级）",
  },
  {
    id: "oradea", nameZh: "奥拉迪亚", nameEn: "Oradea", country: "romania", tier: "major", zone: "ro-west",
    admin1Zh: "比霍尔县", admin1En: "Bihor County",
    lon: 21.9287, lat: 47.0546,
    airport: { iata: "OMR", nameZh: "奥拉迪亚国际机场", nameEn: "Oradea International Airport", lon: 21.9025, lat: 47.025299 },
    source: "奥拉迪亚联盟广场 47.0546,21.9287（OSM；Wikidata 城市点偏北）；OMR 机场 OurAirports 47.0253,21.9025，距联盟广场直线约 3.8 km（按坐标算）；有飞往布加勒斯特 OTP 的国内定期航班（机场官网航班表 2026-09-14/16，1 级）",
  },
  {
    id: "sighisoara", nameZh: "锡吉什瓦拉", nameEn: "Sighișoara", country: "romania", tier: "notable", zone: "ro-center",
    admin1Zh: "穆列什县", admin1En: "Mureș County",
    lon: 24.7922, lat: 46.2194,
    source: "锡吉什瓦拉历史中心 46.2178,24.7922 一带（UNESCO / Wikidata），坐标取 46.2194,24.7922；本地无机场，不填 airport 字段；有定期航班的最近机场为特尔古穆列什 TGM，直线约 40 km（按坐标算）；锡吉什瓦拉是 municipiu 但不是县府（县府为特尔古穆列什）",
  },
];
