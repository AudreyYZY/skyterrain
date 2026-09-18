import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 乌兹别克斯坦 ──
  // 中亚次区域。安全与零争议前置判断：英国外交部旅行建议只对与阿富汗交界地带有地区性提示 —— 铁尔梅兹不收；
  // 安集延（城市名与 2005 年事件绑定）不收；努库斯（卡拉卡尔帕克斯坦首府，行政地位本身敏感、可写地标太少）本批不收；纳曼干地标来源不足，本批不收。
  // 费尔干纳盆地、塔什干、希瓦离国界都不远，照收但不写邻国、界河、口岸与飞地。
  // 条目只写地理、制度、建筑与前现代史实；**不写族群与母语构成、宗教评价（清真寺 / 经学院 / 陵墓只作建筑）、1865 年以后的沙俄与苏联及独立后政治、现任领导人、机场冠名人物**。
  // 人口口径：全国与州 = 2026 年人口与农业普查**初步**结果（时点 2026-01-15）；城市 = 国家统计委员会 **2026 年初常住人口估算**（开放数据 xlsx 246，2026-04-22 更新），两个口径不在一句里比较。
  // admin1 用 12 个州 + 塔什干市（+ 卡拉卡尔帕克斯坦共和国，本批无城市）。机场坐标取 OurAirports；浩罕 OQN、沙赫里萨布兹 RBZ 在 OurAirports 标无定期航班，但 2026-09 机场航班屏有定期航班，按机场屏填。
  {
    id: "tashkent", nameZh: "塔什干", nameEn: "Tashkent", country: "uzbekistan", tier: "capital", zone: "uz-east",
    admin1Zh: "塔什干市", admin1En: "Tashkent City",
    lon: 69.2797, lat: 41.3111,
    airport: { iata: "TAS", nameZh: "塔什干国际机场", nameEn: "Tashkent International Airport", lon: 69.281197, lat: 41.2579 },
    source: "塔什干市中心（阿米尔·帖木儿广场）41.3111,69.2797（Wikidata Q269）；TAS 机场 OurAirports 41.2579,69.2812，距市中心直线约 5.9 km（按坐标算）；有国内定期航班与中国多城直飞（塔什干机场官网航班屏 2026-09-15/16，1 级）",
  },
  {
    id: "samarkand", nameZh: "撒马尔罕", nameEn: "Samarkand", country: "uzbekistan", tier: "major", zone: "uz-center",
    admin1Zh: "撒马尔罕州", admin1En: "Samarqand Region",
    lon: 66.9758, lat: 39.6547,
    airport: { iata: "SKD", nameZh: "撒马尔罕国际机场", nameEn: "Samarkand International Airport", lon: 66.981467, lat: 39.701842 },
    source: "撒马尔罕中心（雷吉斯坦）39.6547,66.9758（Wikidata Q5753）；SKD 机场 OurAirports 39.7018,66.9815，距雷吉斯坦直线约 5.3 km（按坐标算）；有飞往塔什干的国内定期航班与国际航班（uzairports.com 航班屏 2026-09-16，1 级）",
  },
  {
    id: "bukhara", nameZh: "布哈拉", nameEn: "Bukhara", country: "uzbekistan", tier: "major", zone: "uz-center",
    admin1Zh: "布哈拉州", admin1En: "Bukhara Region",
    lon: 64.4286, lat: 39.7747,
    airport: { iata: "BHK", nameZh: "布哈拉国际机场", nameEn: "Bukhara International Airport", lon: 64.482279, lat: 39.775319 },
    source: "布哈拉市中心 39.7747,64.4286（Wikidata Q5764）；BHK 机场 OurAirports 39.7753,64.4823，距市中心直线约 4.6 km（按坐标算）；火车站在卡甘市，距布哈拉市中心直线约 12 km（OSM 站点坐标，3 级；站名「BUXORO」，铁路官网 1 级）",
  },
  {
    id: "khiva", nameZh: "希瓦", nameEn: "Khiva", country: "uzbekistan", tier: "notable", zone: "uz-west",
    admin1Zh: "花拉子模州", admin1En: "Xorazm Region",
    lon: 60.3611, lat: 41.3814,
    airport: { iata: "UGC", nameZh: "乌尔根奇国际机场", nameEn: "Urgench International Airport", lon: 60.64338, lat: 41.58274 },
    source: "希瓦中心（伊钦·卡拉一带）41.3814,60.3611（Wikidata Q486195）；最近的有定期航班机场为乌尔根奇 UGC（OurAirports 41.5827,60.6434），距希瓦直线约 32.5 km（按坐标算），机场在州府乌尔根奇、不在希瓦；UGC 有飞往塔什干的每日多班国内航班（uzairports.com，1 级）",
  },
  {
    id: "kokand", nameZh: "浩罕", nameEn: "Kokand", country: "uzbekistan", tier: "notable", zone: "uz-east",
    admin1Zh: "费尔干纳州", admin1En: "Fergana Region",
    lon: 70.9425, lat: 40.5286,
    airport: { iata: "OQN", nameZh: "浩罕机场", nameEn: "Kokand Airport", lon: 70.991149, lat: 40.447781 },
    source: "浩罕市中心 40.5286,70.9425（Wikidata Q489890）；OQN 机场 OurAirports 40.4478,70.9911，距市中心直线约 9.9 km（按坐标算）；OurAirports 标 scheduled=no 已过时，uzairports.com 航班屏 2026-09-15 见 Silk Avia 往返塔什干的定期航班（1 级快照，班次不多）",
  },
  {
    id: "shahrisabz", nameZh: "沙赫里萨布兹", nameEn: "Shahrisabz", country: "uzbekistan", tier: "notable", zone: "uz-center",
    admin1Zh: "卡什卡达里亚州", admin1En: "Qashqadaryo Region",
    lon: 66.8333, lat: 39.05,
    airport: { iata: "RBZ", nameZh: "沙赫里萨布兹机场", nameEn: "Shahrisabz Airport", lon: 66.775825, lat: 39.030067 },
    source: "沙赫里萨布兹中心 39.05,66.8333（Wikidata Q569766）；RBZ 机场 OurAirports 39.0301,66.7758，距市中心直线约 5.4 km（按坐标算）；OurAirports 标 scheduled=no 已过时，uzairports.com 航班屏 2026-09-16 见 Silk Avia 往返塔什干的定期航班（1 级快照，班次不多）；UNESCO 中文名作「沙赫利苏伯兹历史中心」",
  },
  {
    id: "qarshi", nameZh: "卡尔希", nameEn: "Karshi", country: "uzbekistan", tier: "major", zone: "uz-center",
    admin1Zh: "卡什卡达里亚州", admin1En: "Qashqadaryo Region",
    lon: 65.8, lat: 38.8667,
    airport: { iata: "KSQ", nameZh: "卡尔希机场", nameEn: "Karshi Airport", lon: 65.773068, lat: 38.802246 },
    source: "卡尔希市中心 38.8667,65.8（Wikidata Q644008）；KSQ 机场 OurAirports 38.8022,65.7731，距市中心直线约 7.5 km（按坐标算）；有飞往塔什干的定期航班（uzairports.com，1 级）",
  },
  {
    id: "margilan", nameZh: "马尔吉兰", nameEn: "Margilan", country: "uzbekistan", tier: "major", zone: "uz-east",
    admin1Zh: "费尔干纳州", admin1En: "Fergana Region",
    lon: 71.7195, lat: 40.4695,
    airport: { iata: "FEG", nameZh: "费尔干纳国际机场", nameEn: "Fergana International Airport", lon: 71.7450, lat: 40.3588 },
    source: "马尔吉兰市中心 40.4695,71.7195（OSM）；机场在费尔干纳市一侧、不在马尔吉兰，FEG 距马尔吉兰中心直线约 12 km，uzairports.com 航班屏 2026-09-15 见往返塔什干的定期航班（1 级快照）；离国界约 22 km（按 OSM 国界算，已有城市补充批，2026-09-16）",
  },
  {
    id: "nurata", nameZh: "努拉塔", nameEn: "Nurata", country: "uzbekistan", tier: "notable", zone: "uz-center",
    admin1Zh: "纳沃伊州", admin1En: "Navoiy Region",
    lon: 65.6904, lat: 40.5628,
    source: "努拉塔镇中心 40.5628,65.6904（OSM）；本地没有定期航班的机场，不填 airport；纳沃伊 NVI 直线约 66 km（按 OurAirports 算，航班屏 2026-09-15 见往返塔什干航班）；离国界约 108 km（已有城市补充批，2026-09-16）；中文译名与仓库地形条目「努拉塔山」对齐（zhwiki 作「努羅塔」）",
  },
  {
    id: "namangan", nameZh: "纳曼干", nameEn: "Namangan", country: "uzbekistan", tier: "major", zone: "uz-east", admin1Zh: "纳曼干州", admin1En: "Namangan Region",
    lon: 71.6719, lat: 41.0003,
    airport: { iata: "NMA", nameZh: "纳曼干国际机场", nameEn: "Namangan International Airport", lon: 71.5578, lat: 40.9846 },
    source: "纳曼干市政府（хокимият）41.0003,71.6719（OSM way/174040717，amenity=townhall；州政府在 100 m 外，是另一个对象）；NMA 直线约 10 km、有定期客运航班（机场官方清单与航班屏 2026-09-16，1 级），填 airport；离国界约 25 km；与地形条目 fergana-valley、syr-darya 互指（已有城市补充批，2026-09-16）",
  },
  {
    id: "jizzakh", nameZh: "吉扎克", nameEn: "Jizzakh", country: "uzbekistan", tier: "major", zone: "uz-center", admin1Zh: "吉扎克州", admin1En: "Jizzakh Region",
    lon: 67.8231, lat: 40.1321,
    source: "吉扎克州政府（хокимият）40.1321,67.8231（OSM way/309357649；OSM 里没有市政府对象，州政府在城市主干道上、离 Nominatim 的 place=city 点约 130 m —— ⚠️ Wikidata 的吉扎克点在 2.9 km 外，不要混用）；市域内没有定期航班的机场，全州唯一有定期航班的扎敏机场（OMN）在东南直线约 52 km、不在本市，不填 airport；离国界约 53 km；与地形条目 mirzachul、hissar-range 互指（已有城市补充批，2026-09-16）",
  },
  {
    id: "nurafshon", nameZh: "努拉夫尚", nameEn: "Nurafshon", country: "uzbekistan", tier: "notable", zone: "uz-east", admin1Zh: "塔什干州", admin1En: "Tashkent Region",
    lon: 69.358773, lat: 41.03793,
    source: "塔什干州政府 41.037930,69.358773（OSM way/491246912 office=government；OSM 里没有市政府对象，与上一批吉扎克的处理一致）；市域内没有定期航班的机场，最近有定期航班的是塔什干国际机场 TAS、直线约 25 km，在塔什干市、不在本市，不填 airport；⚠️ **OurAirports 把 30.7 km 外的塔什干-胡莫机场（TVT）标成有定期航班，实际是公务航空专用口岸** —— 照抄会把「最近有定期航班的机场」写错，已记进错误台账；离国界约 28 km；本条目是本库在塔什干州的第一座城（已有城市补充批，2026-09-17）",
  },
  {
    id: "kogon", nameZh: "卡甘", nameEn: "Kogon", country: "uzbekistan", tier: "notable", zone: "uz-center", admin1Zh: "布哈拉州", admin1En: "Bukhara Region",
    lon: 64.555091, lat: 39.724628,
    source: "卡甘历史核心 39.724628,64.555091（OSM way/45589941 place=town）—— ⚠️ **没有用政府建筑作原点**：OSM 上唯一的候选对象乌兹别克语名写作「卡甘区政府」、俄语名写作「卡甘市政府」，自相矛盾，而市与区恰恰是这座城的核心结构，选错会把整条写反；市域内没有定期航班的机场，最近有定期航班的是布哈拉国际机场 BHK、直线约 8.5 km，是 bukhara 条目已填的机场，本条目不填 airport；**布哈拉的干线车站「Buxoro 1」就在本市**（bukhara 条目的注释早已写过「火车站在卡甘市」，译名与之对齐）；离国界约 83 km（已有城市补充批，2026-09-17）",
  },
];
