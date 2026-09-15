import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 美国 ──────────────────────────────────────────────
  {
    id: "new-york", nameZh: "纽约", nameEn: "New York", country: "usa", tier: "major", zone: "us-northeast", admin1Zh: "纽约州", admin1En: "New York",
    lon: -74.0060, lat: 40.7128,
    airport: { iata: "JFK", nameZh: "肯尼迪国际机场", nameEn: "John F. Kennedy Int'l", lon: -73.778, lat: 40.641 },
    source: "曼哈顿下城 40.7128,-74.0060；JFK 机场：公开资料",
  },
  {
    id: "washington-dc", nameZh: "华盛顿", nameEn: "Washington, D.C.", country: "usa", tier: "capital", zone: "us-northeast", admin1Zh: "哥伦比亚特区", admin1En: "District of Columbia",
    lon: -77.0369, lat: 38.9072,
    airport: { iata: "IAD", nameZh: "杜勒斯国际机场", nameEn: "Washington Dulles Int'l", lon: -77.456, lat: 38.953 },
    source: "国家广场一带 38.9072,-77.0369；IAD 机场：公开资料",
  },
  {
    id: "chicago", nameZh: "芝加哥", nameEn: "Chicago", country: "usa", tier: "major", zone: "us-midwest", admin1Zh: "伊利诺伊州", admin1En: "Illinois",
    lon: -87.6298, lat: 41.8781,
    airport: { iata: "ORD", nameZh: "奥黑尔国际机场", nameEn: "O'Hare Int'l", lon: -87.905, lat: 41.978 },
    source: "芝加哥卢普区 41.8781,-87.6298；ORD 机场：公开资料",
  },
  {
    id: "new-orleans", nameZh: "新奥尔良", nameEn: "New Orleans", country: "usa", tier: "notable", zone: "us-south", admin1Zh: "路易斯安那州", admin1En: "Louisiana",
    lon: -90.0715, lat: 29.9511,
    airport: { iata: "MSY", nameZh: "路易斯·阿姆斯特朗新奥尔良国际机场", nameEn: "Louis Armstrong New Orleans Int'l", lon: -90.258, lat: 29.993 },
    source: "法国区一带 29.9511,-90.0715；MSY 机场：公开资料",
  },
  {
    id: "miami", nameZh: "迈阿密", nameEn: "Miami", country: "usa", tier: "major", zone: "us-south", admin1Zh: "佛罗里达州", admin1En: "Florida",
    lon: -80.1918, lat: 25.7617,
    airport: { iata: "MIA", nameZh: "迈阿密国际机场", nameEn: "Miami Int'l", lon: -80.279, lat: 25.796 },
    source: "迈阿密市中心 25.7617,-80.1918；MIA 机场：公开资料",
  },
  {
    id: "denver", nameZh: "丹佛", nameEn: "Denver", country: "usa", tier: "major", zone: "us-mountain-west", admin1Zh: "科罗拉多州", admin1En: "Colorado",
    lon: -104.9903, lat: 39.7392,
    airport: { iata: "DEN", nameZh: "丹佛国际机场", nameEn: "Denver Int'l", lon: -104.673, lat: 39.862 },
    source: "丹佛市中心 39.7392,-104.9903；DEN 机场：公开资料",
  },
  {
    id: "las-vegas", nameZh: "拉斯维加斯", nameEn: "Las Vegas", country: "usa", tier: "notable", zone: "us-southwest", admin1Zh: "内华达州", admin1En: "Nevada",
    lon: -115.1398, lat: 36.1699,
    airport: { iata: "LAS", nameZh: "哈里·里德国际机场", nameEn: "Harry Reid Int'l", lon: -115.154, lat: 36.084 },
    source: "拉斯维加斯大道一带 36.1699,-115.1398；LAS 机场：公开资料",
  },
  {
    id: "san-francisco", nameZh: "旧金山", nameEn: "San Francisco", country: "usa", tier: "major", zone: "us-west-coast", admin1Zh: "加利福尼亚州", admin1En: "California",
    lon: -122.4194, lat: 37.7749,
    airport: { iata: "SFO", nameZh: "旧金山国际机场", nameEn: "San Francisco Int'l", lon: -122.379, lat: 37.622 },
    source: "旧金山市中心 37.7749,-122.4194；SFO 机场：公开资料",
  },
  {
    id: "los-angeles", nameZh: "洛杉矶", nameEn: "Los Angeles", country: "usa", tier: "major", zone: "us-west-coast", admin1Zh: "加利福尼亚州", admin1En: "California",
    lon: -118.2437, lat: 34.0522,
    airport: { iata: "LAX", nameZh: "洛杉矶国际机场", nameEn: "Los Angeles Int'l", lon: -118.408, lat: 33.942 },
    source: "洛杉矶市中心 34.0522,-118.2437；LAX 机场：公开资料",
  },

  // ── 美国 批2（2026-09-05）──
  {
    id: "boston", nameZh: "波士顿", nameEn: "Boston", country: "usa", tier: "major", zone: "us-northeast", admin1Zh: "马萨诸塞州", admin1En: "Massachusetts",
    lon: -71.0578, lat: 42.3603,
    airport: { iata: "BOS", nameZh: "洛根国际机场", nameEn: "Logan Int'l", lon: -71.0064, lat: 42.3631 },
    source: "Boston 42.3603,-71.0578（en.wikipedia）；BOS 机场：en.wikipedia（后湾东北约 4 公里）；人口 675,647（2020 普查）",
  },
  {
    id: "philadelphia", nameZh: "费城", nameEn: "Philadelphia", country: "usa", tier: "major", zone: "us-northeast", admin1Zh: "宾夕法尼亚州", admin1En: "Pennsylvania",
    lon: -75.1636, lat: 39.9528,
    airport: { iata: "PHL", nameZh: "费城国际机场", nameEn: "Philadelphia Int'l", lon: -75.2411, lat: 39.8716 },
    source: "Philadelphia 39.9528,-75.1636（en.wikipedia）；PHL 机场：en.wikipedia（市中心西南约 13 公里）；人口 1,603,797（2020 普查）",
  },
  {
    id: "seattle", nameZh: "西雅图", nameEn: "Seattle", country: "usa", tier: "major", zone: "us-west-coast", admin1Zh: "华盛顿州", admin1En: "Washington",
    lon: -122.3300, lat: 47.6039,
    airport: { iata: "SEA", nameZh: "西雅图—塔科马国际机场", nameEn: "Seattle–Tacoma Int'l", lon: -122.3088, lat: 47.4502 },
    source: "Seattle 47.6039,-122.3300（en.wikipedia）；SEA 机场：en.wikipedia（市中心南约 21 公里）；人口 737,015（2020 普查）",
  },
  {
    id: "san-diego", nameZh: "圣迭戈", nameEn: "San Diego", country: "usa", tier: "major", zone: "us-west-coast", admin1Zh: "加利福尼亚州", admin1En: "California",
    lon: -117.1625, lat: 32.7150,
    airport: { iata: "SAN", nameZh: "圣迭戈国际机场", nameEn: "San Diego Int'l", lon: -117.2026, lat: 32.7338 },
    source: "San Diego 32.7150,-117.1625（en.wikipedia）；SAN 机场：en.wikipedia（市中心西北约 5 公里）；人口 1,386,932（2020 普查）",
  },
  {
    id: "honolulu", nameZh: "檀香山", nameEn: "Honolulu", country: "usa", tier: "major", zone: "us-alaska-hawaii", admin1Zh: "夏威夷州", admin1En: "Hawaii",
    lon: -157.8583, lat: 21.3069,
    airport: { iata: "HNL", nameZh: "丹尼尔·井上国际机场", nameEn: "Daniel K. Inouye Int'l", lon: -157.9225, lat: 21.3186 },
    source: "Honolulu 21.3069,-157.8583（en.wikipedia）；HNL 机场：en.wikipedia（市中心西北约 5 公里）；市县人口 350,964、城区 853,252（2020 普查）",
  },
  {
    id: "orlando", nameZh: "奥兰多", nameEn: "Orlando", country: "usa", tier: "notable", zone: "us-south", admin1Zh: "佛罗里达州", admin1En: "Florida",
    lon: -81.3800, lat: 28.5400,
    airport: { iata: "MCO", nameZh: "奥兰多国际机场", nameEn: "Orlando Int'l", lon: -81.3089, lat: 28.4294 },
    source: "Orlando 28.5400,-81.3800（en.wikipedia）；MCO 机场：en.wikipedia（市中心东南约 10 公里）；人口 307,573、都会区 2,691,925（2020 普查）",
  },
  {
    id: "atlanta", nameZh: "亚特兰大", nameEn: "Atlanta", country: "usa", tier: "major", zone: "us-south", admin1Zh: "佐治亚州", admin1En: "Georgia",
    lon: -84.3900, lat: 33.7489,
    airport: { iata: "ATL", nameZh: "哈茨菲尔德—杰克逊亚特兰大国际机场", nameEn: "Hartsfield–Jackson Atlanta Int'l", lon: -84.4281, lat: 33.6367 },
    source: "Atlanta 33.7489,-84.3900（en.wikipedia）；ATL 机场：en.wikipedia（市中心南约 16 公里）；人口 498,715（2020 普查）",
  },
  {
    id: "nashville", nameZh: "纳什维尔", nameEn: "Nashville", country: "usa", tier: "notable", zone: "us-south", admin1Zh: "田纳西州", admin1En: "Tennessee",
    lon: -86.7744, lat: 36.1622,
    airport: { iata: "BNA", nameZh: "纳什维尔国际机场", nameEn: "Nashville Int'l", lon: -86.6742, lat: 36.1245 },
    source: "Nashville 36.1622,-86.7744（en.wikipedia）；BNA 机场：en.wikipedia（市中心东南约 14 公里）；人口 689,447（2020 普查）",
  },
  {
    id: "austin", nameZh: "奥斯汀", nameEn: "Austin", country: "usa", tier: "notable", zone: "us-south", admin1Zh: "得克萨斯州", admin1En: "Texas",
    lon: -97.7431, lat: 30.2672,
    airport: { iata: "AUS", nameZh: "奥斯汀—伯格斯特龙国际机场", nameEn: "Austin–Bergstrom Int'l", lon: -97.6664, lat: 30.1975 },
    source: "Austin 30.2672,-97.7431（en.wikipedia）；AUS 机场：en.wikipedia（市中心东南约 13 公里）；人口 961,855（2020 普查）",
  },
  {
    id: "santa-fe", nameZh: "圣塔菲", nameEn: "Santa Fe", country: "usa", tier: "notable", zone: "us-southwest", admin1Zh: "新墨西哥州", admin1En: "New Mexico",
    lon: -105.9644, lat: 35.6672,
    airport: { iata: "SAF", nameZh: "圣塔菲地区机场", nameEn: "Santa Fe Regional Airport", lon: -106.089, lat: 35.6171 },
    source: "Santa Fe 35.6672,-105.9644（en.wikipedia，海拔 2,133 米）；SAF 机场：en.wikipedia（市区南约 18 公里，支线航班；阿布奎基 ABQ 约 105 公里）；人口 87,505（2020 普查）",
  },
  {
    id: "anchorage", nameZh: "安克雷奇", nameEn: "Anchorage", country: "usa", tier: "notable", zone: "us-alaska-hawaii", admin1Zh: "阿拉斯加州", admin1En: "Alaska",
    lon: -149.8936, lat: 61.2167,
    airport: { iata: "ANC", nameZh: "泰德·史蒂文斯安克雷奇国际机场", nameEn: "Ted Stevens Anchorage Int'l", lon: -149.9983, lat: 61.1742 },
    source: "Anchorage 61.2167,-149.8936（en.wikipedia）；ANC 机场：en.wikipedia（市中心西南约 8 公里）；人口 291,247（2020 普查）",
  },
  {
    id: "salt-lake-city", nameZh: "盐湖城", nameEn: "Salt Lake City", country: "usa", tier: "notable", zone: "us-mountain-west", admin1Zh: "犹他州", admin1En: "Utah",
    lon: -111.8911, lat: 40.7608,
    airport: { iata: "SLC", nameZh: "盐湖城国际机场", nameEn: "Salt Lake City Int'l", lon: -111.9778, lat: 40.7883 },
    source: "Salt Lake City 40.7608,-111.8911（en.wikipedia，海拔约 1,300 米）；SLC 机场：en.wikipedia（市中心西约 6 公里）；人口 199,723、都会区 1,257,936（2020 普查）",
  },
];
