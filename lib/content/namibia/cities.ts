import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 纳米比亚 ──
  // 人口统一取 Namibia Statistics Agency《2023 Population and Housing Census》Table 4.5 的 urban locality 口径。
  // 机场坐标取 OurAirports 2026-09-21 离线表并以 Namibia Airports Company 名录交叉；
  // 只有核实到当前定期客运的机场才填 airport。吕德里茨 2026-07 后未核到定期班次，因此不填。
  {
    id: "windhoek", nameZh: "温得和克", nameEn: "Windhoek", country: "namibia", tier: "capital", zone: "na-central",
    admin1Zh: "霍马斯区", admin1En: "Khomas Region",
    lon: 17.0658, lat: -22.5609,
    airport: { iata: "WDH", nameZh: "霍齐亚·库塔科国际机场", nameEn: "Hosea Kutako International Airport", lon: 17.4709, lat: -22.4799 },
    source: "市中心 -22.5609,17.0658（Wikidata Q2981）；2023 年 urban locality 人口 486,301（NSA 2023 PHC Main Report Table 4.5，1 级）；WDH 坐标 OurAirports -22.4799,17.4709，与 Namibia Airports Company 名录交叉，距市中心直线约 43 km；国内定期航班主要使用市南 Eros Airport（ERS -22.60492,17.079002，FlyNamibia 当前航点页，1 级）",
  },
  {
    id: "walvis-bay", nameZh: "沃尔维斯湾", nameEn: "Walvis Bay", country: "namibia", tier: "major", zone: "na-coast",
    admin1Zh: "埃龙戈区", admin1En: "Erongo Region",
    lon: 14.5053, lat: -22.9576,
    airport: { iata: "WVB", nameZh: "沃尔维斯湾国际机场", nameEn: "Walvis Bay International Airport", lon: 14.647102, lat: -22.979332 },
    source: "市中心 -22.9576,14.5053（Wikidata Q45997）；2023 年 urban locality 人口 102,704（NSA 2023 PHC Main Report Table 4.5，1 级）；WVB 坐标 OurAirports -22.979332,14.647102，并由 Namibia Airports Company 说明机场在港城外约 15 km 的沙丘中（1 级）",
  },
  {
    id: "swakopmund", nameZh: "斯瓦科普蒙德", nameEn: "Swakopmund", country: "namibia", tier: "major", zone: "na-coast",
    admin1Zh: "埃龙戈区", admin1En: "Erongo Region",
    lon: 14.5266, lat: -22.6784,
    source: "市中心 -22.6784,14.5266（Wikidata Q1800）；2023 年 urban locality 人口 75,921（NSA 2023 PHC Main Report Table 4.5，1 级）；本地机场无定期客运，最近有定期客运的 WVB 距市中心直线约 36 km，不填 airport 字段",
  },
  {
    id: "luderitz", nameZh: "吕德里茨", nameEn: "Lüderitz", country: "namibia", tier: "notable", zone: "na-south",
    admin1Zh: "卡拉斯区", admin1En: "//Kharas Region",
    lon: 15.1594, lat: -26.6481,
    source: "市中心 -26.6481,15.1594（Wikidata Q170190）；2023 年 urban locality 人口 16,156（NSA 2023 PHC Main Report Table 4.5，1 级）；LUD 机场坐标 -26.687401,15.242900，但 2026-07 后未核到定期客运（航司官网与聚合时刻互相冲突），故不填 airport、不在正文声称当前有定期航班",
  },
  {
    id: "rundu", nameZh: "伦杜", nameEn: "Rundu", country: "namibia", tier: "major", zone: "na-northeast",
    admin1Zh: "东卡万戈区", admin1En: "Kavango East Region",
    lon: 19.7539, lat: -17.9253,
    airport: { iata: "NDU", nameZh: "伦杜机场", nameEn: "Rundu Airport", lon: 19.7194, lat: -17.956499 },
    source: "市中心 -17.9253,19.7539（Wikidata Q216）；2023 年 urban locality 人口 118,632（NSA 2023 PHC Main Report Table 4.5，1 级）；NDU 坐标 OurAirports -17.956499,19.7194，距中心直线约 5 km；FlyNamibia 当前官网把 Rundu 列为从 Windhoek 出发的国内定期航点（1 级）",
  },
  {
    id: "katima-mulilo", nameZh: "卡蒂马穆利洛", nameEn: "Katima Mulilo", country: "namibia", tier: "major", zone: "na-northeast",
    admin1Zh: "赞比西区", admin1En: "Zambezi Region",
    lon: 24.2757, lat: -17.5047,
    airport: { iata: "MPA", nameZh: "卡蒂马穆利洛机场", nameEn: "Katima Mulilo Airport", lon: 24.176688, lat: -17.634258 },
    source: "市中心 -17.5047,24.2757（Wikidata Q1013391）；2023 年 urban locality 人口 46,401（NSA 2023 PHC Main Report launch presentation / Table 4.5，1 级）；MPA 坐标 OurAirports -17.634258,24.176688，距中心直线约 18 km；FlyNamibia 当前官网把 Katima Mulilo 列为从 Windhoek 出发的国内定期航点（1 级）",
  },
];
