import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ===== 波兰 =====
  {
    id: "warsaw", nameZh: "华沙", nameEn: "Warsaw", country: "poland", tier: "capital", zone: "pl-mazovia", admin1Zh: "马佐夫舍省", admin1En: "Masovian Voivodeship",
    lon: 21.0122, lat: 52.2297,
    airport: { iata: "WAW", nameZh: "华沙肖邦机场", nameEn: "Warsaw Chopin Airport", lon: 20.9671, lat: 52.1657 },
    source: "华沙市中心 52.2297,21.0122；WAW 机场：公开资料",
  },
  {
    id: "krakow", nameZh: "克拉科夫", nameEn: "Kraków", country: "poland", tier: "major", zone: "pl-malopolska", admin1Zh: "小波兰省", admin1En: "Lesser Poland Voivodeship",
    lon: 19.9450, lat: 50.0647,
    airport: { iata: "KRK", nameZh: "克拉科夫若望保禄二世机场", nameEn: "Kraków John Paul II Airport", lon: 19.7848, lat: 50.0777 },
    source: "克拉科夫市中心 50.0647,19.9450；KRK 机场（距市区约11km）：公开资料",
  },
  {
    id: "zakopane", nameZh: "扎科帕内", nameEn: "Zakopane", country: "poland", tier: "notable", zone: "pl-malopolska", admin1Zh: "小波兰省", admin1En: "Lesser Poland Voivodeship",
    lon: 19.9496, lat: 49.2992,
    airport: { iata: "KRK", nameZh: "克拉科夫若望保禄二世机场", nameEn: "Kraków John Paul II Airport", lon: 19.7848, lat: 50.0777 },
    source: "扎科帕内市中心 49.2992,19.9496；本地无商业机场，最近机场为克拉科夫机场（距市区约100km）：公开资料",
  },
  {
    id: "rzeszow", nameZh: "热舒夫", nameEn: "Rzeszów", country: "poland", tier: "notable", zone: "pl-malopolska", admin1Zh: "喀尔巴阡山省", admin1En: "Subcarpathian Voivodeship",
    lon: 21.9990, lat: 50.0413,
    airport: { iata: "RZE", nameZh: "热舒夫—亚西翁卡机场", nameEn: "Rzeszów-Jasionka Airport", lon: 22.0189, lat: 50.1100 },
    source: "热舒夫市中心 50.0413,21.9990；RZE 机场（距市区约10km）：公开资料",
  },
  {
    id: "wroclaw", nameZh: "弗罗茨瓦夫", nameEn: "Wrocław", country: "poland", tier: "major", zone: "pl-wielkopolska-slask", admin1Zh: "下西里西亚省", admin1En: "Lower Silesian Voivodeship",
    lon: 17.0385, lat: 51.1079,
    airport: { iata: "WRO", nameZh: "弗罗茨瓦夫机场", nameEn: "Wrocław Airport", lon: 16.8858, lat: 51.1027 },
    source: "弗罗茨瓦夫市中心 51.1079,17.0385；WRO 机场（距市区约10km）：公开资料",
  },
  {
    id: "poznan", nameZh: "波兹南", nameEn: "Poznań", country: "poland", tier: "major", zone: "pl-wielkopolska-slask", admin1Zh: "大波兰省", admin1En: "Greater Poland Voivodeship",
    lon: 16.9252, lat: 52.4064,
    airport: { iata: "POZ", nameZh: "波兹南—瓦维察机场", nameEn: "Poznań-Ławica Airport", lon: 16.8263, lat: 52.4210 },
    source: "波兹南市中心 52.4064,16.9252；POZ 机场（距市区约6km）：公开资料",
  },
  {
    id: "gdansk", nameZh: "格但斯克", nameEn: "Gdańsk", country: "poland", tier: "major", zone: "pl-pomorze", admin1Zh: "滨海省", admin1En: "Pomeranian Voivodeship",
    lon: 18.6466, lat: 54.3520,
    airport: { iata: "GDN", nameZh: "格但斯克莱赫瓦文萨机场", nameEn: "Gdańsk Lech Wałęsa Airport", lon: 18.4662, lat: 54.3776 },
    source: "格但斯克市中心 54.3520,18.6466；GDN 机场（距市区约12km）：公开资料",
  },
  {
    id: "szczecin", nameZh: "什切青", nameEn: "Szczecin", country: "poland", tier: "notable", zone: "pl-pomorze", admin1Zh: "西滨海省", admin1En: "West Pomeranian Voivodeship",
    lon: 14.5528, lat: 53.4285,
    airport: { iata: "SZZ", nameZh: "什切青—戈萊尼乌夫机场", nameEn: "Szczecin-Goleniów Airport", lon: 14.9022, lat: 53.5847 },
    source: "什切青市中心 53.4285,14.5528；SZZ 机场（距市区约45km）：公开资料",
  },
  {
    id: "torun", nameZh: "托伦", nameEn: "Toruń", country: "poland", tier: "notable", zone: "pl-pomorze", admin1Zh: "库亚维滨海省", admin1En: "Kuyavian-Pomeranian Voivodeship",
    lon: 18.5984, lat: 53.0138,
    airport: { iata: "BZG", nameZh: "比得哥什机场", nameEn: "Bydgoszcz Airport", lon: 17.9776, lat: 53.0968 },
    source: "托伦市中心 53.0138,18.5984；本地无商业机场，最近机场为比得哥什机场（距市区约50km）：公开资料",
  },
  {
    id: "olsztyn", nameZh: "奥尔什丁", nameEn: "Olsztyn", country: "poland", tier: "notable", zone: "pl-mazury-podlasie", admin1Zh: "瓦尔米亚-马祖里省", admin1En: "Warmian-Masurian Voivodeship",
    lon: 20.4801, lat: 53.7784,
    airport: { iata: "SZY", nameZh: "奥尔什丁—马祖里机场", nameEn: "Olsztyn-Mazury Airport", lon: 20.9377, lat: 53.4819 },
    source: "奥尔什丁市中心 53.7784,20.4801；SZY 机场（距市区约58km）：公开资料",
  },
  {
    id: "bialystok", nameZh: "比亚韦斯托克", nameEn: "Białystok", country: "poland", tier: "notable", zone: "pl-mazury-podlasie", admin1Zh: "波德拉谢省", admin1En: "Podlaskie Voivodeship",
    lon: 23.1688, lat: 53.1325,
    airport: { iata: "WAW", nameZh: "华沙肖邦机场", nameEn: "Warsaw Chopin Airport", lon: 20.9671, lat: 52.1657 },
    source: "比亚韦斯托克市中心 53.1325,23.1688；本地机场客运航班有限，最近有稳定定期航班的机场为华沙肖邦机场（距市区约180km）：公开资料",
  },
];
