import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 法国 ──
  {
    id: "paris", nameZh: "巴黎", nameEn: "Paris", country: "france", tier: "capital", zone: "fr-paris-region", admin1Zh: "法兰西岛大区", admin1En: "Île-de-France",
    lon: 2.3522, lat: 48.8566,
    airport: { iata: "CDG", nameZh: "戴高乐机场", nameEn: "Charles de Gaulle Airport", lon: 2.5479, lat: 49.0097 },
    source: "巴黎市中心 48.8566,2.3522；CDG 机场：公开资料",
  },
  {
    id: "lille", nameZh: "里尔", nameEn: "Lille", country: "france", tier: "notable", zone: "fr-north", admin1Zh: "上法兰西大区", admin1En: "Hauts-de-France",
    lon: 3.0573, lat: 50.6292,
    airport: { iata: "LIL", nameZh: "里尔机场", nameEn: "Lille Airport", lon: 3.0894, lat: 50.5619 },
    source: "里尔市中心 50.6292,3.0573；LIL 机场：公开资料",
  },
  {
    id: "strasbourg", nameZh: "斯特拉斯堡", nameEn: "Strasbourg", country: "france", tier: "notable", zone: "fr-alsace", admin1Zh: "大东部大区", admin1En: "Grand Est",
    lon: 7.7521, lat: 48.5734,
    airport: { iata: "SXB", nameZh: "斯特拉斯堡机场", nameEn: "Strasbourg Airport", lon: 7.6282, lat: 48.5383 },
    source: "斯特拉斯堡市中心 48.5734,7.7521；SXB 机场：公开资料",
  },
  {
    id: "lyon", nameZh: "里昂", nameEn: "Lyon", country: "france", tier: "major", zone: "fr-rhone-alpes", admin1Zh: "奥弗涅-罗讷-阿尔卑斯大区", admin1En: "Auvergne-Rhône-Alpes",
    lon: 4.8357, lat: 45.7640,
    airport: { iata: "LYS", nameZh: "里昂圣埃克絮佩里机场", nameEn: "Lyon–Saint-Exupéry Airport", lon: 5.0811, lat: 45.7256 },
    source: "里昂市中心 45.7640,4.8357；LYS 机场：公开资料",
  },
  {
    id: "grenoble", nameZh: "格勒诺布尔", nameEn: "Grenoble", country: "france", tier: "notable", zone: "fr-rhone-alpes", admin1Zh: "奥弗涅-罗讷-阿尔卑斯大区", admin1En: "Auvergne-Rhône-Alpes",
    lon: 5.7245, lat: 45.1885,
    airport: { iata: "GNB", nameZh: "格勒诺布尔-伊泽尔机场", nameEn: "Grenoble–Isère Airport", lon: 5.3294, lat: 45.3629 },
    source: "格勒诺布尔市中心 45.1885,5.7245；GNB 机场：公开资料（机场距市区约 40 公里）",
  },
  {
    id: "marseille", nameZh: "马赛", nameEn: "Marseille", country: "france", tier: "major", zone: "fr-provence", admin1Zh: "普罗旺斯-阿尔卑斯-蓝色海岸大区", admin1En: "Provence-Alpes-Côte d'Azur",
    lon: 5.3698, lat: 43.2965,
    airport: { iata: "MRS", nameZh: "马赛-普罗旺斯机场", nameEn: "Marseille Provence Airport", lon: 5.2214, lat: 43.4393 },
    source: "马赛市中心 43.2965,5.3698；MRS 机场：公开资料",
  },
  {
    id: "nice", nameZh: "尼斯", nameEn: "Nice", country: "france", tier: "major", zone: "fr-provence", admin1Zh: "普罗旺斯-阿尔卑斯-蓝色海岸大区", admin1En: "Provence-Alpes-Côte d'Azur",
    lon: 7.2620, lat: 43.7102,
    airport: { iata: "NCE", nameZh: "尼斯蓝色海岸机场", nameEn: "Nice Côte d'Azur Airport", lon: 7.2159, lat: 43.6584 },
    source: "尼斯市中心 43.7102,7.2620；NCE 机场：公开资料",
  },
  {
    id: "toulouse", nameZh: "图卢兹", nameEn: "Toulouse", country: "france", tier: "major", zone: "fr-southwest", admin1Zh: "奥克西塔尼大区", admin1En: "Occitanie",
    lon: 1.4442, lat: 43.6047,
    airport: { iata: "TLS", nameZh: "图卢兹-布拉尼亚克机场", nameEn: "Toulouse–Blagnac Airport", lon: 1.3638, lat: 43.6293 },
    source: "图卢兹市中心 43.6047,1.4442；TLS 机场：公开资料",
  },
  {
    id: "bordeaux", nameZh: "波尔多", nameEn: "Bordeaux", country: "france", tier: "major", zone: "fr-southwest", admin1Zh: "新阿基坦大区", admin1En: "Nouvelle-Aquitaine",
    lon: -0.5792, lat: 44.8378,
    airport: { iata: "BOD", nameZh: "波尔多-梅里尼亚克机场", nameEn: "Bordeaux–Mérignac Airport", lon: -0.7156, lat: 44.8283 },
    source: "波尔多市中心 44.8378,-0.5792；BOD 机场：公开资料",
  },
  {
    id: "nantes", nameZh: "南特", nameEn: "Nantes", country: "france", tier: "notable", zone: "fr-west", admin1Zh: "卢瓦尔河地区大区", admin1En: "Pays de la Loire",
    lon: -1.5536, lat: 47.2184,
    airport: { iata: "NTE", nameZh: "南特大西洋机场", nameEn: "Nantes Atlantique Airport", lon: -1.6108, lat: 47.1532 },
    source: "南特市中心 47.2184,-1.5536；NTE 机场：公开资料",
  },
  {
    id: "ajaccio", nameZh: "阿雅克肖", nameEn: "Ajaccio", country: "france", tier: "notable", zone: "fr-corsica", admin1Zh: "科西嘉大区", admin1En: "Corsica",
    lon: 8.7386, lat: 41.9192,
    airport: { iata: "AJA", nameZh: "阿雅克肖机场", nameEn: "Ajaccio Airport", lon: 8.8029, lat: 41.9236 },
    source: "阿雅克肖市中心 41.9192,8.7386；AJA 机场：公开资料",
  },

  // ── 法国 批2（2026-09-05）──
  {
    id: "annecy", nameZh: "安纳西", nameEn: "Annecy", country: "france", tier: "notable", zone: "fr-rhone-alpes", admin1Zh: "奥弗涅-罗讷-阿尔卑斯大区", admin1En: "Auvergne-Rhône-Alpes",
    lon: 6.1330, lat: 45.9160,
    source: "Annecy 45.9160,6.1330（en.wikipedia）；本地安纳西—上萨瓦—勃朗峰机场（NCY，VINCI 运营）以商务与通用航空为主、无稳定定期客运航班（2026-09-14 核），不写机场字段；最近大机场为日内瓦（约 45 公里，瑞士）与里昂（约 125 公里），条目不写机场字段；人口 132,117（2023）",
  },
  {
    id: "avignon", nameZh: "阿维尼翁", nameEn: "Avignon", country: "france", tier: "notable", zone: "fr-provence", admin1Zh: "普罗旺斯-阿尔卑斯-蓝色海岸大区", admin1En: "Provence-Alpes-Côte d'Azur",
    lon: 4.8075, lat: 43.9500,
    airport: { iata: "MRS", nameZh: "马赛-普罗旺斯机场（经马赛转乘）", nameEn: "Marseille Provence Airport (via Marseille)", lon: 5.2214, lat: 43.4393 },
    source: "Avignon 43.9500,4.8075（en.wikipedia）；本地 AVN 机场无稳定定期航线，与马赛条目共用 MRS（约 85 公里）；TGV 站在城南；人口 92,188（2023）",
  },
  {
    id: "montpellier", nameZh: "蒙彼利埃", nameEn: "Montpellier", country: "france", tier: "major", zone: "fr-southwest", admin1Zh: "奥克西塔尼大区", admin1En: "Occitanie",
    lon: 3.8772, lat: 43.6119,
    airport: { iata: "MPL", nameZh: "蒙彼利埃地中海机场", nameEn: "Montpellier–Méditerranée", lon: 3.9631, lat: 43.5764 },
    source: "Montpellier 43.6119,3.8772（en.wikipedia）；MPL 机场：en.wikipedia（市中心东南约 7 公里）；人口 310,240（2023），法国第七大城市",
  },
  {
    id: "reims", nameZh: "兰斯", nameEn: "Reims", country: "france", tier: "notable", zone: "fr-north", admin1Zh: "大东部大区", admin1En: "Grand Est",
    lon: 4.0347, lat: 49.2628,
    source: "Reims 49.2628,4.0347（en.wikipedia）；无机场，最近为巴黎戴高乐（约 136 公里），条目不写机场字段，TGV 到巴黎约 45 分钟；人口 177,674（2023）",
  },
  {
    id: "colmar", nameZh: "科尔马", nameEn: "Colmar", country: "france", tier: "notable", zone: "fr-alsace", admin1Zh: "大东部大区", admin1En: "Grand Est",
    lon: 7.3556, lat: 48.0817,
    source: "Colmar 48.0817,7.3556（en.wikipedia）；无机场，最近为巴塞尔-米卢斯欧洲机场（约 52 公里）、斯特拉斯堡（约 68 公里），条目不写机场字段；人口 66,970（2023）",
  },
  {
    id: "rouen", nameZh: "鲁昂", nameEn: "Rouen", country: "france", tier: "notable", zone: "fr-north", admin1Zh: "诺曼底大区", admin1En: "Normandy",
    lon: 1.0886, lat: 49.4428,
    source: "Rouen 49.4428,1.0886（en.wikipedia）；无机场，最近为巴黎戴高乐（约 159 公里），条目不写机场字段，火车到巴黎约 1.5 小时；人口 117,662（2023）",
  },
];
