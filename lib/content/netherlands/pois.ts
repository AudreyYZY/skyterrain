import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ── 荷兰 ──
  amsterdam: [
    { nameZh: "运河带", nameEn: "Canal Belt", lon: 4.8852, lat: 52.3680, kind: "district" },
    { nameZh: "梵高博物馆", nameEn: "Van Gogh Museum", lon: 4.8813, lat: 52.3584, kind: "landmark" },
    { nameZh: "国立博物馆", nameEn: "Rijksmuseum", lon: 4.8852, lat: 52.3600, kind: "landmark" },
    { nameZh: "安妮之家", nameEn: "Anne Frank House", lon: 4.8840, lat: 52.3752, kind: "landmark" },
    { nameZh: "水坝广场与王宫", nameEn: "Dam Square & Royal Palace", lon: 4.8925, lat: 52.3731, kind: "landmark" },
    { nameZh: "约尔丹区", nameEn: "Jordaan", lon: 4.8797, lat: 52.3745, kind: "district" },
  ],
  haarlem: [
    { nameZh: "圣巴弗大教堂", nameEn: "St Bavo's Church", lon: 4.6333, lat: 52.3808, kind: "landmark" },
    { nameZh: "弗兰斯·哈尔斯博物馆", nameEn: "Frans Hals Museum", lon: 4.6394, lat: 52.3767, kind: "landmark" },
    { nameZh: "格罗特马克特广场", nameEn: "Grote Markt", lon: 4.6350, lat: 52.3811, kind: "district" },
    { nameZh: "库肯霍夫花园", nameEn: "Keukenhof Gardens", lon: 4.5470, lat: 52.2695, kind: "nature" },
  ],
  texel: [
    { nameZh: "登堡村", nameEn: "Den Burg", lon: 4.7908, lat: 53.0553, kind: "district" },
    { nameZh: "埃尔哈斯特角灯塔", nameEn: "De Cocksdorp Lighthouse", lon: 4.8500, lat: 53.1900, kind: "landmark" },
    { nameZh: "生态科学中心 Ecomare", nameEn: "Ecomare", lon: 4.7280, lat: 53.1180, kind: "landmark" },
    { nameZh: "北海沿岸沙滩", nameEn: "North Sea beaches", lon: 4.7300, lat: 53.0700, kind: "nature" },
  ],
  rotterdam: [
    { nameZh: "方块屋", nameEn: "Cube Houses", lon: 4.4900, lat: 51.9203, kind: "landmark" },
    { nameZh: "市场大厅", nameEn: "Markthal", lon: 4.4808, lat: 51.9199, kind: "landmark" },
    { nameZh: "天鹅桥", nameEn: "Erasmus Bridge", lon: 4.4816, lat: 51.9089, kind: "landmark" },
    { nameZh: "欧罗波特港区", nameEn: "Europoort", lon: 4.1500, lat: 51.9500, kind: "nature" },
    { nameZh: "代尔夫特", nameEn: "Delft", lon: 4.3571, lat: 52.0116, kind: "district" },
  ],
  "the-hague": [
    { nameZh: "内庭院", nameEn: "Binnenhof", lon: 4.3133, lat: 52.0800, kind: "landmark" },
    { nameZh: "莫瑞泰斯皇家美术馆", nameEn: "Mauritshuis", lon: 4.3147, lat: 52.0800, kind: "landmark" },
    { nameZh: "和平宫", nameEn: "Peace Palace", lon: 4.2967, lat: 52.0850, kind: "landmark" },
    { nameZh: "席凡宁根海滩", nameEn: "Scheveningen Beach", lon: 4.2731, lat: 52.1108, kind: "nature" },
    { nameZh: "微缩城市马德罗丹", nameEn: "Madurodam", lon: 4.2969, lat: 52.0989, kind: "landmark" },
  ],
  delft: [
    { nameZh: "老市场广场", nameEn: "Markt", lon: 4.3576, lat: 52.0116, kind: "district" },
    { nameZh: "新教堂", nameEn: "Nieuwe Kerk", lon: 4.3583, lat: 52.0122, kind: "landmark" },
    { nameZh: "代尔夫特王室蓝陶工坊", nameEn: "Royal Delft", lon: 4.3600, lat: 52.0000, kind: "landmark" },
    { nameZh: "代尔夫特理工大学", nameEn: "Delft University of Technology", lon: 4.3731, lat: 51.9989, kind: "landmark" },
  ],
  leiden: [
    { nameZh: "莱顿大学老校区", nameEn: "Leiden University (old campus)", lon: 4.4850, lat: 52.1583, kind: "landmark" },
    { nameZh: "植物园", nameEn: "Hortus Botanicus", lon: 4.4864, lat: 52.1592, kind: "nature" },
    { nameZh: "城堡遗址高地", nameEn: "De Burcht", lon: 4.4939, lat: 52.1583, kind: "landmark" },
    { nameZh: "国立古物博物馆", nameEn: "National Museum of Antiquities", lon: 4.4872, lat: 52.1614, kind: "landmark" },
  ],
  utrecht: [
    { nameZh: "多姆塔", nameEn: "Dom Tower", lon: 5.1214, lat: 52.0907, kind: "landmark" },
    { nameZh: "沃尔肯运河", nameEn: "Oudegracht", lon: 5.1200, lat: 52.0900, kind: "district" },
    { nameZh: "中央博物馆", nameEn: "Centraal Museum", lon: 5.1264, lat: 52.0850, kind: "landmark" },
    { nameZh: "施罗德住宅", nameEn: "Rietveld Schröder House", lon: 5.1272, lat: 52.1017, kind: "landmark" },
  ],
  maastricht: [
    { nameZh: "圣瑟法斯桥", nameEn: "St Servatius Bridge", lon: 5.6917, lat: 50.8489, kind: "landmark" },
    { nameZh: "天堂书店", nameEn: "Boekhandel Dominicanen", lon: 5.6900, lat: 50.8494, kind: "landmark" },
    { nameZh: "弗赖特霍夫广场", nameEn: "Vrijthof", lon: 5.6889, lat: 50.8500, kind: "district" },
    { nameZh: "圣彼得山地道", nameEn: "St Pietersberg tunnels", lon: 5.6900, lat: 50.8300, kind: "nature" },
  ],
  groningen: [
    { nameZh: "马蒂尼塔", nameEn: "Martini Tower", lon: 6.5686, lat: 53.2194, kind: "landmark" },
    { nameZh: "大市场广场", nameEn: "Grote Markt", lon: 6.5675, lat: 53.2189, kind: "district" },
    { nameZh: "格罗宁根博物馆", nameEn: "Groningen Museum", lon: 6.5711, lat: 53.2172, kind: "landmark" },
    { nameZh: "劳沃斯湖国家公园", nameEn: "Lauwersmeer National Park", lon: 6.2500, lat: 53.3500, kind: "nature" },
  ],
  zwolle: [
    { nameZh: "圣米迦勒大教堂", nameEn: "St Michael's Church", lon: 6.0925, lat: 52.5136, kind: "landmark" },
    { nameZh: "星形城墙与护城河", nameEn: "Star-shaped walls & moat", lon: 6.0958, lat: 52.5168, kind: "landmark" },
    { nameZh: "桑德波特城门", nameEn: "Sassenpoort", lon: 6.0994, lat: 52.5089, kind: "landmark" },
    { nameZh: "羊角村", nameEn: "Giethoorn", lon: 6.0800, lat: 52.7400, kind: "district" },
  ],
  // ── 荷兰 批2（2026-09-05）──
  eindhoven: [
    { nameZh: "斯特赖普 S 创意区", nameEn: "Strijp-S", lon: 5.4550, lat: 51.4450, kind: "district" },
    { nameZh: "范阿贝博物馆", nameEn: "Van Abbemuseum", lon: 5.4820, lat: 51.4340, kind: "landmark" },
    { nameZh: "埃沃吕翁", nameEn: "Evoluon", lon: 5.4470, lat: 51.4430, kind: "landmark" },
    { nameZh: "飞利浦博物馆", nameEn: "Philips Museum", lon: 5.4760, lat: 51.4390, kind: "landmark" },
    { nameZh: "飞利浦球场", nameEn: "Philips Stadion", lon: 5.4680, lat: 51.4420, kind: "landmark" },
    { nameZh: "纽嫩（梵高村）", nameEn: "Nuenen (Van Gogh Village)", lon: 5.5480, lat: 51.4730, kind: "district" },
  ],
  arnhem: [
    { nameZh: "约翰·弗罗斯特桥", nameEn: "John Frost Bridge", lon: 5.9100, lat: 51.9770, kind: "landmark" },
    { nameZh: "空降兵博物馆（奥斯特贝克）", nameEn: "Airborne Museum Hartenstein", lon: 5.8480, lat: 51.9860, kind: "landmark" },
    { nameZh: "荷兰露天博物馆", nameEn: "Netherlands Open Air Museum", lon: 5.9100, lat: 52.0100, kind: "landmark" },
    { nameZh: "伯格斯动物园", nameEn: "Burgers' Zoo", lon: 5.9000, lat: 52.0080, kind: "nature" },
    { nameZh: "松斯贝克公园", nameEn: "Sonsbeek Park", lon: 5.9060, lat: 51.9950, kind: "nature" },
    { nameZh: "克勒勒—米勒博物馆", nameEn: "Kröller-Müller Museum", lon: 5.8170, lat: 52.0950, kind: "landmark" },
  ],
  giethoorn: [
    { nameZh: "羊角村运河（宾嫩帕德）", nameEn: "Giethoorn Canals (Binnenpad)", lon: 6.0780, lat: 52.7390, kind: "district" },
    { nameZh: "老村博物馆", nameEn: "Museum Giethoorn 't Olde Maat Uus", lon: 6.0790, lat: 52.7400, kind: "landmark" },
    { nameZh: "博文维德湖", nameEn: "Bovenwijde Lake", lon: 6.1000, lat: 52.7300, kind: "nature" },
    { nameZh: "韦里本—维登国家公园", nameEn: "Weerribben-Wieden National Park", lon: 6.0500, lat: 52.7700, kind: "nature" },
    { nameZh: "斯滕韦克站", nameEn: "Steenwijk Station", lon: 6.1190, lat: 52.7860, kind: "transport" },
  ],
  middelburg: [
    { nameZh: "修道院与长约翰塔", nameEn: "Abbey & Lange Jan", lon: 3.6130, lat: 51.4990, kind: "landmark" },
    { nameZh: "市政厅", nameEn: "Town Hall", lon: 3.6120, lat: 51.5000, kind: "landmark" },
    { nameZh: "泽兰博物馆", nameEn: "Zeeuws Museum", lon: 3.6135, lat: 51.4990, kind: "landmark" },
    { nameZh: "费勒", nameEn: "Veere", lon: 3.6650, lat: 51.5480, kind: "district" },
    { nameZh: "东斯海尔德风暴潮屏障", nameEn: "Oosterschelde Storm Surge Barrier", lon: 3.7300, lat: 51.6300, kind: "landmark" },
    { nameZh: "东堡海滩", nameEn: "Domburg Beach", lon: 3.5000, lat: 51.5650, kind: "nature" },
  ],
  alkmaar: [
    { nameZh: "奶酪市场与称重楼", nameEn: "Cheese Market & Waag", lon: 4.7460, lat: 52.6320, kind: "landmark" },
    { nameZh: "圣劳伦斯大教堂", nameEn: "Grote Sint-Laurenskerk", lon: 4.7420, lat: 52.6330, kind: "landmark" },
    { nameZh: "运河老城", nameEn: "Canal Old Town", lon: 4.7450, lat: 52.6310, kind: "district" },
    { nameZh: "阿尔克马尔站", nameEn: "Alkmaar Station", lon: 4.7400, lat: 52.6380, kind: "transport" },
    { nameZh: "埃赫蒙德海滩", nameEn: "Egmond aan Zee Beach", lon: 4.6270, lat: 52.6170, kind: "nature" },
  ],
};
