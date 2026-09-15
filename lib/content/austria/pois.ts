import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ── 奥地利 ──
  vienna: [
    { nameZh: "美泉宫", nameEn: "Schönbrunn Palace", lon: 16.3122, lat: 48.1858, kind: "landmark" },
    { nameZh: "圣斯蒂芬大教堂", nameEn: "St. Stephen's Cathedral", lon: 16.3733, lat: 48.2085, kind: "landmark" },
    { nameZh: "维也纳国家歌剧院", nameEn: "Vienna State Opera", lon: 16.3691, lat: 48.2033, kind: "landmark" },
    { nameZh: "霍夫堡皇宫", nameEn: "Hofburg", lon: 16.3653, lat: 48.2064, kind: "landmark" },
    { nameZh: "维也纳森林", nameEn: "Wienerwald", lon: 16.05, lat: 48.15, kind: "nature" },
  ],
  salzburg: [
    { nameZh: "萨尔茨堡城堡", nameEn: "Hohensalzburg Fortress", lon: 13.0478, lat: 47.7953, kind: "landmark" },
    { nameZh: "莫扎特出生地", nameEn: "Mozart's Birthplace", lon: 13.0464, lat: 47.8003, kind: "landmark" },
    { nameZh: "主教座堂广场", nameEn: "Cathedral Square", lon: 13.0472, lat: 47.7975, kind: "landmark" },
    { nameZh: "米拉贝尔宫", nameEn: "Mirabell Palace", lon: 13.0431, lat: 47.8033, kind: "landmark" },
  ],
  innsbruck: [
    { nameZh: "金屋顶", nameEn: "Golden Roof", lon: 11.3928, lat: 47.2686, kind: "landmark" },
    { nameZh: "因斯布鲁克宫廷教堂", nameEn: "Innsbruck Court Church", lon: 11.3944, lat: 47.2669, kind: "landmark" },
    { nameZh: "北山缆车站", nameEn: "Nordkette Cable Car (Hungerburgbahn)", lon: 11.3958, lat: 47.2825, kind: "transport" },
  ],
  graz: [
    { nameZh: "施洛斯山", nameEn: "Schlossberg", lon: 15.4386, lat: 47.0764, kind: "landmark" },
    { nameZh: "格拉茨现代艺术博物馆", nameEn: "Kunsthaus Graz", lon: 15.4342, lat: 47.0722, kind: "landmark" },
    { nameZh: "主广场", nameEn: "Hauptplatz", lon: 15.4383, lat: 47.0708, kind: "landmark" },
  ],
  linz: [
    { nameZh: "老城广场", nameEn: "Hauptplatz", lon: 14.2861, lat: 48.3053, kind: "landmark" },
    { nameZh: "阿尔斯电子艺术中心", nameEn: "Ars Electronica Center", lon: 14.2839, lat: 48.3092, kind: "landmark" },
    { nameZh: "林茨白教堂大教堂", nameEn: "Linz Cathedral", lon: 14.2914, lat: 48.3025, kind: "landmark" },
  ],
  klagenfurt: [
    { nameZh: "龙喷泉（新广场）", nameEn: "Lindwurm Fountain (Neuer Platz)", lon: 14.3103, lat: 46.6244, kind: "landmark" },
    { nameZh: "米纳米湖公园", nameEn: "Europapark", lon: 14.3244, lat: 46.6178, kind: "nature" },
    { nameZh: "沃尔特湖沿岸", nameEn: "Wörthersee Shoreline", lon: 14.30, lat: 46.62, kind: "nature" },
  ],
  villach: [
    { nameZh: "主广场", nameEn: "Hauptplatz", lon: 13.8556, lat: 46.6106, kind: "landmark" },
    { nameZh: "德拉瓦河畔", nameEn: "Drava Riverside", lon: 13.8558, lat: 46.6094, kind: "nature" },
    { nameZh: "法克山温泉度假区", nameEn: "Warmbad Villach", lon: 13.8583, lat: 46.5875, kind: "landmark" },
  ],
  hallstatt: [
    { nameZh: "市集广场", nameEn: "Marktplatz", lon: 13.6486, lat: 47.5614, kind: "landmark" },
    { nameZh: "盐矿缆车", nameEn: "Salzbergbahn (Salt Mine Funicular)", lon: 13.6444, lat: 47.5586, kind: "transport" },
    { nameZh: "骨骸教堂", nameEn: "Bone House (Beinhaus)", lon: 13.6486, lat: 47.5636, kind: "landmark" },
    { nameZh: "湖对岸观景点", nameEn: "Lake Viewpoint (Skywalk)", lon: 13.6339, lat: 47.5578, kind: "nature" },
  ],
  "kitzbuhel-city": [
    { nameZh: "哈内考姆赛道", nameEn: "Hahnenkamm Race Course", lon: 12.3781, lat: 47.4444, kind: "landmark" },
    { nameZh: "老城历史街区", nameEn: "Old Town", lon: 12.3922, lat: 47.4469, kind: "district" },
  ],
  bregenz: [
    { nameZh: "湖上剧场", nameEn: "Bregenz Festival Lake Stage", lon: 9.7325, lat: 47.5069, kind: "landmark" },
    { nameZh: "老城城墙", nameEn: "Old Town Walls (Oberstadt)", lon: 9.7458, lat: 47.5061, kind: "district" },
    { nameZh: "普芬芬山缆车", nameEn: "Pfänder Cable Car", lon: 9.7597, lat: 47.5083, kind: "transport" },
  ],
  "zell-am-see": [
    { nameZh: "采尔湖沿岸", nameEn: "Zeller See Lakeside", lon: 12.79, lat: 47.32, kind: "nature" },
    { nameZh: "基茨施泰因峰缆车站", nameEn: "Kitzsteinhorn Cable Car Base", lon: 12.6961, lat: 47.2483, kind: "transport" },
  ],
  // ── 奥地利 批2（2026-09-05）──
  "sankt-polten": [
    { nameZh: "市政厅广场", nameEn: "Rathausplatz", lon: 15.6230, lat: 48.2040, kind: "district" },
    { nameZh: "圣珀尔滕主教座堂", nameEn: "St. Pölten Cathedral", lon: 15.6250, lat: 48.2060, kind: "landmark" },
    { nameZh: "州政府区与音塔", nameEn: "Landhaus Quarter & Klangturm", lon: 15.6320, lat: 48.2000, kind: "landmark" },
    { nameZh: "节日剧院", nameEn: "Festspielhaus", lon: 15.6300, lat: 48.2010, kind: "landmark" },
    { nameZh: "圣珀尔滕站", nameEn: "St. Pölten Hauptbahnhof", lon: 15.6240, lat: 48.2080, kind: "transport" },
  ],
  krems: [
    { nameZh: "施泰纳门", nameEn: "Steiner Tor", lon: 15.5950, lat: 48.4100, kind: "landmark" },
    { nameZh: "老城与漫画博物馆", nameEn: "Old Town & Karikaturmuseum", lon: 15.5980, lat: 48.4110, kind: "district" },
    { nameZh: "格特魏格修道院", nameEn: "Göttweig Abbey", lon: 15.6100, lat: 48.3680, kind: "landmark" },
    { nameZh: "杜恩施泰因", nameEn: "Dürnstein", lon: 15.5200, lat: 48.3950, kind: "district" },
    { nameZh: "克雷姆斯站", nameEn: "Krems Station", lon: 15.6000, lat: 48.4080, kind: "transport" },
  ],
  "bad-ischl": [
    { nameZh: "皇帝别墅", nameEn: "Kaiservilla", lon: 13.6200, lat: 47.7150, kind: "landmark" },
    { nameZh: "莱哈尔别墅", nameEn: "Lehár Villa", lon: 13.6250, lat: 47.7100, kind: "landmark" },
    { nameZh: "察乌纳咖啡馆与步行街", nameEn: "Zauner Café & Pfarrgasse", lon: 13.6230, lat: 47.7120, kind: "district" },
    { nameZh: "盐矿", nameEn: "Salzbergwerk", lon: 13.6600, lat: 47.6900, kind: "landmark" },
    { nameZh: "巴特伊舍尔站", nameEn: "Bad Ischl Station", lon: 13.6270, lat: 47.7100, kind: "transport" },
  ],
  eisenstadt: [
    { nameZh: "埃斯特哈齐宫", nameEn: "Esterházy Palace", lon: 16.5200, lat: 47.8460, kind: "landmark" },
    { nameZh: "山教堂（海顿墓）", nameEn: "Bergkirche (Haydn's tomb)", lon: 16.5130, lat: 47.8470, kind: "landmark" },
    { nameZh: "海顿故居", nameEn: "Haydn House", lon: 16.5210, lat: 47.8450, kind: "landmark" },
    { nameZh: "犹太区与奥地利犹太博物馆", nameEn: "Jewish Quarter & Austrian Jewish Museum", lon: 16.5190, lat: 47.8480, kind: "district" },
    { nameZh: "新锡德尔湖（鲁斯特）", nameEn: "Neusiedler See (Rust)", lon: 16.6700, lat: 47.8000, kind: "nature" },
  ],
  "st-anton": [
    { nameZh: "圣安东村中心", nameEn: "St. Anton Village", lon: 10.2640, lat: 47.1290, kind: "district" },
    { nameZh: "加尔齐格缆车", nameEn: "Galzigbahn", lon: 10.2600, lat: 47.1280, kind: "transport" },
    { nameZh: "瓦卢加峰", nameEn: "Valluga", lon: 10.2130, lat: 47.1570, kind: "nature" },
    { nameZh: "圣安东站", nameEn: "St. Anton Station", lon: 10.2680, lat: 47.1300, kind: "transport" },
    { nameZh: "莱希", nameEn: "Lech", lon: 10.1420, lat: 47.2080, kind: "district" },
  ],
};
