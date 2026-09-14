import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ===== 欧洲 / 匈牙利 =====
  // 东欧次区域第三国（波兰、捷克之后）。安全与零争议前置判断：无活跃冲突、不在 §2.1 排除名单内；
  // 条目只写地理、制度与广泛记载的前现代史，**二十世纪的政治 / 领土议题一律不碰**。
  {
    id: "budapest", nameZh: "布达佩斯", nameEn: "Budapest", country: "hungary", tier: "capital", zone: "hu-budapest", admin1Zh: "布达佩斯", admin1En: "Budapest",
    lon: 19.0402, lat: 47.4979,
    airport: { iata: "BUD", nameZh: "布达佩斯李斯特·费伦茨国际机场", nameEn: "Budapest Ferenc Liszt International Airport", lon: 19.2611, lat: 47.4369 },
    source: "布达佩斯市中心 47.4979,19.0402；BUD 机场 47.4369,19.2611（机场官网与 OurAirports 一致）：公开资料",
  },
  {
    id: "debrecen", nameZh: "德布勒森", nameEn: "Debrecen", country: "hungary", tier: "major", zone: "hu-great-plain", admin1Zh: "豪伊杜-比豪尔州", admin1En: "Hajdú-Bihar",
    lon: 21.6273, lat: 47.5316,
    airport: { iata: "DEB", nameZh: "德布勒森国际机场", nameEn: "Debrecen International Airport", lon: 21.6153, lat: 47.4889 },
    source: "德布勒森市中心 47.5316,21.6273；DEB 机场 47.4889,21.6153：公开资料",
  },
  {
    id: "szeged", nameZh: "塞格德", nameEn: "Szeged", country: "hungary", tier: "major", zone: "hu-great-plain", admin1Zh: "琼格拉德-乔纳德州", admin1En: "Csongrád-Csanád",
    lon: 20.1414, lat: 46.2530,
    source: "塞格德市中心 46.2530,20.1414；本地无定期客运机场，最近的国际机场为布达佩斯 BUD（直线约 155 公里，按本条目坐标算）：公开资料",
  },
  {
    id: "pecs", nameZh: "佩奇", nameEn: "Pécs", country: "hungary", tier: "major", zone: "hu-transdanubia", admin1Zh: "巴兰尼亚州", admin1En: "Baranya",
    lon: 18.2323, lat: 46.0727,
    source: "佩奇市中心 46.0727,18.2323；本地的佩奇-波哥尼机场无定期客运航班，最近有定期航班的机场为布达佩斯 BUD（直线约 170 公里，按本条目坐标算）：公开资料",
  },
  {
    id: "gyor", nameZh: "杰尔", nameEn: "Győr", country: "hungary", tier: "major", zone: "hu-transdanubia", admin1Zh: "杰尔-莫雄-肖普朗州", admin1En: "Győr-Moson-Sopron",
    lon: 17.6350, lat: 47.6875,
    source: "杰尔市中心 47.6875,17.6350；本地的杰尔-佩尔机场无定期客运航班，最近有定期航班的机场为布达佩斯 BUD（直线约 106 公里，按本条目坐标算）：公开资料",
  },
  {
    id: "eger", nameZh: "埃格尔", nameEn: "Eger", country: "hungary", tier: "notable", zone: "hu-north", admin1Zh: "赫维什州", admin1En: "Heves",
    lon: 20.3772, lat: 47.9026,
    source: "埃格尔市中心 47.9026,20.3772；本地无机场，最近有定期航班的机场为布达佩斯 BUD（直线约 106 公里，按本条目坐标算）：公开资料",
  },
  {
    id: "sopron", nameZh: "肖普朗", nameEn: "Sopron", country: "hungary", tier: "notable", zone: "hu-transdanubia", admin1Zh: "杰尔-莫雄-肖普朗州", admin1En: "Győr-Moson-Sopron",
    lon: 16.5845, lat: 47.6817,
    source: "肖普朗市中心 47.6817,16.5845；本地无定期客运机场，最近有定期航班的机场为布达佩斯 BUD（直线约 185 公里，按本条目坐标算）：公开资料",
  },
  {
    id: "szentendre", nameZh: "圣安德烈", nameEn: "Szentendre", country: "hungary", tier: "notable", zone: "hu-budapest", admin1Zh: "佩斯州", admin1En: "Pest",
    lon: 19.0770, lat: 47.6690,
    source: "圣安德烈市中心 47.6690,19.0770；本地无机场，从布达佩斯乘 HÉV 郊区铁路约 40 分钟可达：公开资料",
  },
];
