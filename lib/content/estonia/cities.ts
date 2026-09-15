import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 爱沙尼亚 ──
  // 北欧次区域第八国。安全与零争议前置判断：无活跃冲突、不在 §2.1 排除名单内；
  // 条目只写地理、制度与广泛记载的史实；**不写族群构成、语言政策、苏联时期政治叙事与边境议题**（纳尔瓦等边境城市本批不收）。
  // 人口一律取爱沙尼亚统计局表 RV0240「1 月 1 日按居住地人口」2026 年数（PxWeb API 直接取数，2026-05-22 更新，1 级）；
  // 2017 年市镇改革后很多城镇并入乡（vald），城镇与所属地方政府的人口分开写明。
  // 机场坐标取 OurAirports；派尔努 EPU 机场在托里乡、只有冬季飞鲁赫努岛的小航班，不填 airport。
  {
    id: "tallinn", nameZh: "塔林", nameEn: "Tallinn", country: "estonia", tier: "capital", zone: "ee-north",
    admin1Zh: "哈尤县", admin1En: "Harju County",
    lon: 24.7453, lat: 59.4372,
    airport: { iata: "TLL", nameZh: "塔林伦纳特·梅里机场", nameEn: "Lennart Meri Tallinn Airport", lon: 24.8326, lat: 59.4132 },
    source: "塔林市政厅广场一带 59.4372,24.7453（维基）；TLL 机场 OurAirports 59.4132,24.8326，距市中心直线约 5.6 km（按本条目坐标算）",
  },
  {
    id: "tartu", nameZh: "塔尔图", nameEn: "Tartu", country: "estonia", tier: "major", zone: "ee-south",
    admin1Zh: "塔尔图县", admin1En: "Tartu County",
    lon: 26.7225, lat: 58.3800,
    airport: { iata: "TAY", nameZh: "塔尔图机场", nameEn: "Tartu Airport", lon: 26.6865, lat: 58.3074 },
    source: "塔尔图市中心 58.3800,26.7225（维基）；TAY 机场 OurAirports 58.3074,26.6865，距市中心直线约 8.3 km；芬兰航空飞赫尔辛基的市政合同 2024-03-31 至 2027-12-31（tartu.ee「Air traffic」，1 级）",
  },
  {
    id: "parnu", nameZh: "派尔努", nameEn: "Pärnu", country: "estonia", tier: "major", zone: "ee-west",
    admin1Zh: "派尔努县", admin1En: "Pärnu County",
    lon: 24.4989, lat: 58.3844,
    source: "派尔努市中心 58.3844,24.4989（维基）；派尔努机场代码 EPU、在托里乡，只有冬季飞鲁赫努岛的小型航班（airport.ee，1 级），不填 airport 字段；有定期航班的最近机场为塔林 TLL，直线约 116 km（按坐标算）",
  },
  {
    id: "kuressaare", nameZh: "库雷萨雷（萨列马岛）", nameEn: "Kuressaare (Saaremaa)", country: "estonia", tier: "notable", zone: "ee-islands",
    admin1Zh: "萨列马县", admin1En: "Saare County",
    lon: 22.4861, lat: 58.2533,
    airport: { iata: "URE", nameZh: "库雷萨雷机场", nameEn: "Kuressaare Airport", lon: 22.5095, lat: 58.2299 },
    source: "库雷萨雷市中心 58.2533,22.4861（维基）；URE 机场 OurAirports 58.2299,22.5095，距市中心直线约 2.9 km；全年有飞塔林的国内定期航班（airport.ee，1 级）",
  },
  {
    id: "haapsalu", nameZh: "哈普萨卢", nameEn: "Haapsalu", country: "estonia", tier: "notable", zone: "ee-west",
    admin1Zh: "西部县（莱埃内县）", admin1En: "Lääne County",
    lon: 23.5369, lat: 58.9469,
    source: "哈普萨卢市中心 58.9469,23.5369（维基）；本地无定期航班机场，不填 airport 字段；最近机场为塔林 TLL，直线约 90 km（按坐标算）",
  },
  {
    id: "viljandi", nameZh: "维尔扬迪", nameEn: "Viljandi", country: "estonia", tier: "notable", zone: "ee-south",
    admin1Zh: "维尔扬迪县", admin1En: "Viljandi County",
    lon: 25.5956, lat: 58.3633,
    source: "维尔扬迪市中心 58.3633,25.5956（维基）；本地无定期航班机场，不填 airport 字段；塔尔图 TAY 直线约 64 km（仅飞赫尔辛基），塔林 TLL 直线约 125 km（按坐标算）",
  },
  {
    id: "rakvere", nameZh: "拉克韦雷", nameEn: "Rakvere", country: "estonia", tier: "notable", zone: "ee-north",
    admin1Zh: "西维鲁县", admin1En: "Lääne-Viru County",
    lon: 26.3611, lat: 59.3506,
    source: "拉克韦雷市中心 59.3506,26.3611（维基）；本地无定期航班机场（Rakvere 草地机场 EERE 无商业航班），不填 airport 字段；最近机场为塔林 TLL，直线约 87 km（按坐标算）",
  },
  {
    id: "otepaa", nameZh: "奥泰佩", nameEn: "Otepää", country: "estonia", tier: "notable", zone: "ee-south",
    admin1Zh: "瓦尔加县", admin1En: "Valga County",
    lon: 26.4983, lat: 58.0572,
    source: "奥泰佩镇中心 58.0572,26.4983（维基）；本地无定期航班机场（附近 Tõutsi 有私人小型机场，无商业航班），不填 airport 字段；塔尔图 TAY 直线约 30 km（仅飞赫尔辛基），其余航线经塔林 TLL（按坐标算）",
  },
  {
    id: "kardla", nameZh: "凯尔德拉（希乌马岛）", nameEn: "Kärdla (Hiiumaa)", country: "estonia", tier: "notable", zone: "ee-islands",
    admin1Zh: "希乌马县", admin1En: "Hiiu County",
    lon: 22.7497, lat: 58.9978,
    airport: { iata: "KDL", nameZh: "凯尔德拉机场", nameEn: "Kärdla Airport", lon: 22.8307, lat: 58.9908 },
    source: "凯尔德拉中心广场一带 58.9978,22.7497；KDL 机场 OurAirports 58.9908,22.8307，距中心直线约 4.7 km，有飞塔林的国内定期航班（airport.ee，1 级；仓库 tll-kdl 航线已核）；离陆地国界约 154 km（已有城市补充批，2026-09-16）",
  },
  {
    id: "voru", nameZh: "沃鲁", nameEn: "Võru", country: "estonia", tier: "notable", zone: "ee-south",
    admin1Zh: "沃鲁县", admin1En: "Võru County",
    lon: 26.9958, lat: 57.8480,
    source: "沃鲁中心广场 57.8480,26.9958（OSM）；本地没有定期航班的机场，不填 airport；塔尔图 TAY 直线约 54 km（只飞赫尔辛基），其余航线经塔林 TLL（按 OurAirports 算）；离国界约 24 km（按 OSM 边界算，已有城市补充批，2026-09-16）",
  },
];
