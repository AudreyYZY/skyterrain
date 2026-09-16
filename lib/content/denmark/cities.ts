import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ===== 丹麦 =====
  {
    id: "copenhagen", nameZh: "哥本哈根", nameEn: "Copenhagen", country: "denmark", tier: "capital", zone: "dk-hovedstaden", admin1Zh: "首都大区", admin1En: "Capital Region",
    lon: 12.5683, lat: 55.6761,
    airport: { iata: "CPH", nameZh: "哥本哈根机场", nameEn: "Copenhagen Airport", lon: 12.6476, lat: 55.6180 },
    source: "哥本哈根市中心 55.6761,12.5683；CPH 机场：公开资料",
  },
  {
    id: "helsingoer", nameZh: "赫尔辛格", nameEn: "Helsingør", country: "denmark", tier: "notable", zone: "dk-hovedstaden", admin1Zh: "首都大区", admin1En: "Capital Region",
    lon: 12.6136, lat: 56.0360,
    airport: { iata: "CPH", nameZh: "哥本哈根机场", nameEn: "Copenhagen Airport", lon: 12.6476, lat: 55.6180 },
    source: "赫尔辛格市中心 56.0360,12.6136；本地无商业机场，最近机场为哥本哈根机场（距市区约60km）：公开资料",
  },
  {
    id: "roskilde", nameZh: "罗斯基勒", nameEn: "Roskilde", country: "denmark", tier: "notable", zone: "dk-sjaelland", admin1Zh: "西兰大区", admin1En: "Region Zealand",
    lon: 12.0803, lat: 55.6415,
    airport: { iata: "CPH", nameZh: "哥本哈根机场", nameEn: "Copenhagen Airport", lon: 12.6476, lat: 55.6180 },
    source: "罗斯基勒市中心 55.6415,12.0803；本地罗斯基勒机场无定期客运航班，最近有定期航班的机场为哥本哈根机场（距市区约35km）：公开资料",
  },
  {
    id: "odense", nameZh: "欧登塞", nameEn: "Odense", country: "denmark", tier: "major", zone: "dk-syddanmark", admin1Zh: "南丹麦大区", admin1En: "Region of Southern Denmark",
    lon: 10.4024, lat: 55.4038,
    airport: { iata: "BLL", nameZh: "比隆机场", nameEn: "Billund Airport", lon: 9.1517, lat: 55.7403 },
    source: "欧登塞市中心 55.4038,10.4024；本地欧登塞机场无定期客运航班，最近有定期航班的机场为比隆机场（距市区直线约 87 km，按本条目坐标算）：公开资料",
  },
  {
    id: "esbjerg", nameZh: "埃斯比约", nameEn: "Esbjerg", country: "denmark", tier: "notable", zone: "dk-syddanmark", admin1Zh: "南丹麦大区", admin1En: "Region of Southern Denmark",
    lon: 8.4594, lat: 55.4765,
    airport: { iata: "BLL", nameZh: "比隆机场", nameEn: "Billund Airport", lon: 9.1517, lat: 55.7403 },
    source: "埃斯比约市中心 55.4765,8.4594；本地埃斯比约机场以海上石油平台直升机业务为主，定期客运航班很少，最近有定期客运航班的机场为比隆机场（距市区直线约 53 km，按本条目坐标算）：公开资料",
  },
  {
    id: "ribe", nameZh: "里伯", nameEn: "Ribe", country: "denmark", tier: "notable", zone: "dk-syddanmark", admin1Zh: "南丹麦大区", admin1En: "Region of Southern Denmark",
    lon: 8.7667, lat: 55.3300,
    airport: { iata: "BLL", nameZh: "比隆机场", nameEn: "Billund Airport", lon: 9.1517, lat: 55.7403 },
    source: "里伯市中心 55.3300,8.7667；本地无商业机场，最近机场为比隆机场（距市区直线约 52 km，按本条目坐标算）：公开资料",
  },
  {
    id: "billund", nameZh: "比隆", nameEn: "Billund", country: "denmark", tier: "notable", zone: "dk-syddanmark", admin1Zh: "南丹麦大区", admin1En: "Region of Southern Denmark",
    lon: 9.1216, lat: 55.7308,
    airport: { iata: "BLL", nameZh: "比隆机场", nameEn: "Billund Airport", lon: 9.1517, lat: 55.7403 },
    source: "比隆市中心 55.7308,9.1216；BLL 机场：公开资料",
  },
  {
    id: "aarhus", nameZh: "奥胡斯", nameEn: "Aarhus", country: "denmark", tier: "major", zone: "dk-midtjylland", admin1Zh: "中日德兰大区", admin1En: "Central Denmark Region",
    lon: 10.2134, lat: 56.1496,
    airport: { iata: "AAR", nameZh: "奥胡斯机场", nameEn: "Aarhus Airport", lon: 10.6190, lat: 56.3000 },
    source: "奥胡斯市中心 56.1496,10.2134；AAR 机场（距市区约35km）：公开资料",
  },
  {
    id: "silkeborg", nameZh: "锡尔克堡", nameEn: "Silkeborg", country: "denmark", tier: "notable", zone: "dk-midtjylland", admin1Zh: "中日德兰大区", admin1En: "Central Denmark Region",
    lon: 9.5451, lat: 56.1697,
    airport: { iata: "AAR", nameZh: "奥胡斯机场", nameEn: "Aarhus Airport", lon: 10.6190, lat: 56.3000 },
    source: "锡尔克堡市中心 56.1697,9.5451；本地无商业机场，最近机场为奥胡斯机场（距市区直线约 68 km，按本条目坐标算）：公开资料",
  },
  {
    id: "aalborg", nameZh: "奥尔堡", nameEn: "Aalborg", country: "denmark", tier: "major", zone: "dk-nordjylland", admin1Zh: "北日德兰大区", admin1En: "North Denmark Region",
    lon: 9.9217, lat: 57.0488,
    airport: { iata: "AAL", nameZh: "奥尔堡机场", nameEn: "Aalborg Airport", lon: 9.8492, lat: 57.0928 },
    source: "奥尔堡市中心 57.0488,9.9217；AAL 机场：公开资料",
  },
  {
    id: "skagen", nameZh: "斯卡恩", nameEn: "Skagen", country: "denmark", tier: "notable", zone: "dk-nordjylland", admin1Zh: "北日德兰大区", admin1En: "North Denmark Region",
    lon: 10.5844, lat: 57.7208,
    airport: { iata: "AAL", nameZh: "奥尔堡机场", nameEn: "Aalborg Airport", lon: 9.8492, lat: 57.0928 },
    source: "斯卡恩市中心 57.7208,10.5844；本地无商业机场，最近机场为奥尔堡机场（距市区约100km）：公开资料",
  },
  {
    id: "roenne", nameZh: "龙讷", nameEn: "Rønne", country: "denmark", tier: "notable", zone: "dk-bornholm", admin1Zh: "首都大区", admin1En: "Capital Region",
    lon: 14.7069, lat: 55.0997,
    airport: { iata: "RNN", nameZh: "博恩霍尔姆机场", nameEn: "Bornholm Airport", lon: 14.7594, lat: 55.0633 },
    source: "龙讷市中心 55.0997,14.7069；RNN 机场（距市区约5km）：公开资料",
  },
  {
    id: "vejle", nameZh: "瓦埃勒", nameEn: "Vejle", country: "denmark", tier: "notable", zone: "dk-syddanmark", admin1Zh: "南丹麦大区", admin1En: "Region of Southern Denmark",
    lon: 9.53294, lat: 55.70793,
    airport: { iata: "BLL", nameZh: "比隆机场", nameEn: "Billund Airport", lon: 9.1517, lat: 55.7403 },
    source: "瓦埃勒市中心 55.70793,9.53294（OSM Nominatim）；本地只有无定期航班的小机场，最近有定期航班的是比隆机场 BLL，直线约 24 km（算）；耶灵世界遗产在同一市镇内、市中心西北直线约 8.6 km；注：丹麦统计局城区表里另有一个同名的 Vejle（菲英岛法堡-米菲恩市镇的小村，1,095 人），与本条目无关（已有城市补充批，2026-09-16）",
  },
  {
    id: "stege", nameZh: "斯泰厄", nameEn: "Stege", country: "denmark", tier: "notable", zone: "dk-sjaelland", admin1Zh: "西兰大区", admin1En: "Region Zealand",
    lon: 12.28613, lat: 54.98638,
    airport: { iata: "CPH", nameZh: "哥本哈根机场", nameEn: "Copenhagen Airport", lon: 12.6476, lat: 55.618 },
    source: "斯泰厄镇中心 54.98638,12.28613（OSM Nominatim）；本地 Kostervig Møn 机场 scheduled_service=no，最近有定期客运航班的是哥本哈根机场、直线约 74 km（算；OurAirports 把罗斯基勒 RKE 标为有定期航班，与仓库既有罗斯基勒条目的核实结论不符，按既有结论处理）；中文名为音译，中文维基无此条目（已有城市补充批，2026-09-16）",
  },
];
