import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 瑞士 ──
  {
    id: "zurich", nameZh: "苏黎世", nameEn: "Zürich", country: "switzerland", tier: "major", zone: "ch-plateau", admin1Zh: "苏黎世州", admin1En: "Zürich",
    lon: 8.5417, lat: 47.3769,
    airport: { iata: "ZRH", nameZh: "苏黎世机场", nameEn: "Zurich Airport", lon: 8.5492, lat: 47.4647 },
    source: "苏黎世市中心 47.3769,8.5417；ZRH 机场：公开资料",
  },
  {
    id: "bern", nameZh: "伯尔尼", nameEn: "Bern", country: "switzerland", tier: "capital", zone: "ch-plateau", admin1Zh: "伯尔尼州", admin1En: "Bern",
    lon: 7.4474, lat: 46.9480,
    airport: { iata: "BRN", nameZh: "伯尔尼机场", nameEn: "Bern Airport", lon: 7.4971, lat: 46.9141 },
    source: "伯尔尼市中心 46.9480,7.4474；BRN 机场：公开资料",
  },
  {
    id: "basel", nameZh: "巴塞尔", nameEn: "Basel", country: "switzerland", tier: "major", zone: "ch-plateau", admin1Zh: "巴塞尔城市州", admin1En: "Basel-Stadt",
    lon: 7.5886, lat: 47.5596,
    airport: { iata: "BSL", nameZh: "巴塞尔-米卢斯欧洲机场", nameEn: "EuroAirport Basel-Mulhouse", lon: 7.5299, lat: 47.5896 },
    source: "巴塞尔市中心 47.5596,7.5886；BSL 机场：公开资料（三国交界，机场主体在法国境内）",
  },
  {
    id: "lucerne", nameZh: "卢塞恩", nameEn: "Lucerne", country: "switzerland", tier: "notable", zone: "ch-plateau", admin1Zh: "卢塞恩州", admin1En: "Lucerne",
    lon: 8.3093, lat: 47.0502,
    source: "卢塞恩市中心 47.0502,8.3093：公开资料（无机场，就近用苏黎世）",
  },
  {
    id: "geneva", nameZh: "日内瓦", nameEn: "Geneva", country: "switzerland", tier: "major", zone: "ch-lake-geneva", admin1Zh: "日内瓦州", admin1En: "Geneva",
    lon: 6.1432, lat: 46.2044,
    airport: { iata: "GVA", nameZh: "日内瓦机场", nameEn: "Geneva Airport", lon: 6.1090, lat: 46.2381 },
    source: "日内瓦市中心 46.2044,6.1432；GVA 机场：公开资料",
  },
  {
    id: "lausanne", nameZh: "洛桑", nameEn: "Lausanne", country: "switzerland", tier: "notable", zone: "ch-lake-geneva", admin1Zh: "沃州", admin1En: "Vaud",
    lon: 6.6323, lat: 46.5197,
    source: "洛桑市中心 46.5197,6.6323：公开资料（无机场，就近用日内瓦）",
  },
  {
    id: "interlaken", nameZh: "因特拉肯", nameEn: "Interlaken", country: "switzerland", tier: "notable", zone: "ch-bernese-oberland", admin1Zh: "伯尔尼州", admin1En: "Bern",
    lon: 7.8632, lat: 46.6863,
    source: "因特拉肯 46.6863,7.8632：公开资料（无机场，铁路进入，少女峰门户）",
  },
  {
    id: "zermatt", nameZh: "采尔马特", nameEn: "Zermatt", country: "switzerland", tier: "notable", zone: "ch-valais", admin1Zh: "瓦莱州", admin1En: "Valais",
    lon: 7.7491, lat: 46.0207,
    source: "采尔马特 46.0207,7.7491：公开资料（无机动车、无机场，需在特施换齿轨火车进入）",
  },
  {
    id: "st-moritz", nameZh: "圣莫里茨", nameEn: "St. Moritz", country: "switzerland", tier: "notable", zone: "ch-graubunden", admin1Zh: "格劳宾登州", admin1En: "Graubünden",
    lon: 9.8355, lat: 46.4908,
    source: "圣莫里茨 46.4908,9.8355：公开资料（无定期航班，就近萨梅丹通用航空机场；铁路进入）",
  },
  {
    id: "lugano", nameZh: "卢加诺", nameEn: "Lugano", country: "switzerland", tier: "notable", zone: "ch-ticino", admin1Zh: "提契诺州", admin1En: "Ticino",
    lon: 8.9511, lat: 46.0037,
    airport: { iata: "ZRH", nameZh: "苏黎世机场（经苏黎世转乘）", nameEn: "Zurich Airport (via Zurich)", lon: 8.5492, lat: 47.4647 },
    source: "卢加诺市中心 46.0037,8.9511；LUG 卢加诺-阿尼奥机场目前无定期客运、只服务公务机与包机（luganoairport.ch，1 级，核实 2026-09-12），按列日的约定改为经苏黎世转乘：公开资料",
  },
];
