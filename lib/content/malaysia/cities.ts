import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  {
    id: "kuala-lumpur", nameZh: "吉隆坡", nameEn: "Kuala Lumpur", country: "malaysia", tier: "capital", zone: "my-central", admin1Zh: "吉隆坡联邦直辖区", admin1En: "Federal Territory of Kuala Lumpur",
    lon: 101.6869, lat: 3.1390,
    airport: { iata: "KUL", nameZh: "吉隆坡国际机场", nameEn: "Kuala Lumpur International Airport", lon: 101.7099, lat: 2.7456 },
    source: "吉隆坡市中心 3.1390,101.6869；KLIA机场（距市区约45km）：公开资料",
  },
  {
    id: "george-town", nameZh: "乔治市", nameEn: "George Town", country: "malaysia", tier: "major", zone: "my-north", admin1Zh: "槟城州", admin1En: "Penang",
    lon: 100.3288, lat: 5.4141,
    airport: { iata: "PEN", nameZh: "槟城国际机场", nameEn: "Penang International Airport", lon: 100.2769, lat: 5.2971 },
    source: "乔治市中心 5.4141,100.3288；PEN机场（距市区约18km）：公开资料",
  },
  {
    id: "johor-bahru", nameZh: "新山", nameEn: "Johor Bahru", country: "malaysia", tier: "major", zone: "my-south", admin1Zh: "柔佛州", admin1En: "Johor",
    lon: 103.7414, lat: 1.4927,
    airport: { iata: "JHB", nameZh: "士乃国际机场", nameEn: "Senai International Airport", lon: 103.6697, lat: 1.6414 },
    source: "新山市中心 1.4927,103.7414；JHB机场（距市区约21km）：公开资料",
  },
  {
    id: "malacca-city", nameZh: "马六甲市", nameEn: "Malacca City", country: "malaysia", tier: "major", zone: "my-south", admin1Zh: "马六甲州", admin1En: "Malacca",
    lon: 102.2501, lat: 2.1896,
    airport: { iata: "MKZ", nameZh: "马六甲机场", nameEn: "Malacca Airport", lon: 102.2539, lat: 2.2633 },
    source: "马六甲市中心 2.1896,102.2501；MKZ机场目前无国内定期航班，仅有少量国际航线（如新加坡），主要客运经吉隆坡方向公路往返（约145km）：公开资料",
  },
  {
    id: "ipoh", nameZh: "怡保", nameEn: "Ipoh", country: "malaysia", tier: "major", zone: "my-north", admin1Zh: "霹雳州", admin1En: "Perak",
    lon: 101.0901, lat: 4.5975,
    airport: { iata: "IPH", nameZh: "苏丹阿兹兰沙机场", nameEn: "Sultan Azlan Shah Airport", lon: 101.0921, lat: 4.5679 },
    source: "怡保市中心 4.5975,101.0901；IPH机场（距市区约15km）：公开资料",
  },
  {
    id: "kota-kinabalu", nameZh: "亚庇", nameEn: "Kota Kinabalu", country: "malaysia", tier: "major", zone: "my-sabah", admin1Zh: "沙巴州", admin1En: "Sabah",
    lon: 116.0735, lat: 5.9804,
    airport: { iata: "BKI", nameZh: "亚庇国际机场", nameEn: "Kota Kinabalu International Airport", lon: 116.0517, lat: 5.9372 },
    source: "亚庇市中心 5.9804,116.0735；BKI机场（距市区约7km）：公开资料",
  },
  {
    id: "kuching", nameZh: "古晋", nameEn: "Kuching", country: "malaysia", tier: "major", zone: "my-sarawak", admin1Zh: "砂拉越州", admin1En: "Sarawak",
    lon: 110.3593, lat: 1.5535,
    airport: { iata: "KCH", nameZh: "古晋国际机场", nameEn: "Kuching International Airport", lon: 110.3467, lat: 1.4847 },
    source: "古晋市中心 1.5535,110.3593；KCH机场（距市区约11km）：公开资料",
  },
  {
    id: "kota-bharu", nameZh: "哥打巴鲁", nameEn: "Kota Bharu", country: "malaysia", tier: "notable", zone: "my-north", admin1Zh: "吉兰丹州", admin1En: "Kelantan",
    lon: 102.2381, lat: 6.1254,
    airport: { iata: "KBR", nameZh: "苏丹依斯迈布特拉机场", nameEn: "Sultan Ismail Petra Airport", lon: 102.2922, lat: 6.1669 },
    source: "哥打巴鲁市中心 6.1254,102.2381；KBR机场（距市区约8km）：公开资料",
  },
  {
    id: "kuantan", nameZh: "关丹", nameEn: "Kuantan", country: "malaysia", tier: "notable", zone: "my-south", admin1Zh: "彭亨州", admin1En: "Pahang",
    lon: 103.3260, lat: 3.8077,
    airport: { iata: "KUA", nameZh: "苏丹哈芝阿末沙机场", nameEn: "Sultan Ahmad Shah Airport", lon: 103.2081, lat: 3.7758 },
    source: "关丹市中心 3.8077,103.3260；KUA机场（距市区约15km）：公开资料",
  },
  {
    id: "sandakan", nameZh: "山打根", nameEn: "Sandakan", country: "malaysia", tier: "notable", zone: "my-sabah", admin1Zh: "沙巴州", admin1En: "Sabah",
    lon: 118.1179, lat: 5.8402,
    airport: { iata: "SDK", nameZh: "山打根机场", nameEn: "Sandakan Airport", lon: 118.0592, lat: 5.9012 },
    source: "山打根市中心 5.8402,118.1179；SDK机场（距市区约11km）：公开资料",
  },
  {
    id: "miri", nameZh: "美里", nameEn: "Miri", country: "malaysia", tier: "notable", zone: "my-sarawak", admin1Zh: "砂拉越州", admin1En: "Sarawak",
    lon: 113.9914, lat: 4.3995,
    airport: { iata: "MYY", nameZh: "美里机场", nameEn: "Miri Airport", lon: 113.9878, lat: 4.3225 },
    source: "美里市中心 4.3995,113.9914；MYY机场（距市区约8km）：公开资料",
  },
  {
    id: "langkawi-city", nameZh: "瓜镇", nameEn: "Kuah", country: "malaysia", tier: "notable", zone: "my-north", admin1Zh: "吉打州", admin1En: "Kedah",
    lon: 99.8467, lat: 6.3228,
    airport: { iata: "LGK", nameZh: "浮罗交怡国际机场", nameEn: "Langkawi International Airport", lon: 99.7286, lat: 6.3297 },
    source: "浮罗交怡瓜镇 6.3228,99.8467；LGK机场（距瓜镇约11km）：公开资料",
  },

  // ── 马来西亚 批2（2026-09-05）──
  {
    id: "putrajaya", nameZh: "布城", nameEn: "Putrajaya", country: "malaysia", tier: "notable", zone: "my-central", admin1Zh: "布城联邦直辖区", admin1En: "Federal Territory of Putrajaya",
    lon: 101.6900, lat: 2.9300,
    airport: { iata: "KUL", nameZh: "吉隆坡国际机场（经吉隆坡转乘）", nameEn: "Kuala Lumpur International Airport (via Kuala Lumpur)", lon: 101.7099, lat: 2.7456 },
    source: "Putrajaya 2.9300,101.6900（en.wikipedia）；无自有机场，与吉隆坡条目共用 KUL（约 25 公里，KLIA Transit 直达）；人口 119,700（2024-Q1）",
  },
  {
    id: "cameron-highlands", nameZh: "金马仑高原（丹那拉打）", nameEn: "Cameron Highlands (Tanah Rata)", country: "malaysia", tier: "notable", zone: "my-central", admin1Zh: "彭亨州", admin1En: "Pahang",
    lon: 101.3833, lat: 4.4667,
    source: "Tanah Rata 4.4667,101.3833（en.wikipedia，海拔约 1,400 米）；无机场，最近为吉隆坡 KUL（约 200 公里），条目不写机场字段，大巴自吉隆坡约 4 小时；全区人口 43,700（2019）",
  },
  {
    id: "taiping", nameZh: "太平", nameEn: "Taiping", country: "malaysia", tier: "notable", zone: "my-north", admin1Zh: "霹雳州", admin1En: "Perak",
    lon: 100.7333, lat: 4.8500,
    source: "Taiping 4.8500,100.7333（en.wikipedia）；无机场，最近为槟城（约 96 公里）、怡保（约 73 公里），条目不写机场字段，ETS 火车自吉隆坡约 3 小时；人口 245,182（2013）",
  },
  {
    id: "alor-setar", nameZh: "亚罗士打", nameEn: "Alor Setar", country: "malaysia", tier: "notable", zone: "my-north", admin1Zh: "吉打州", admin1En: "Kedah",
    lon: 100.3694, lat: 6.1183,
    airport: { iata: "AOR", nameZh: "苏丹阿都哈林机场", nameEn: "Sultan Abdul Halim Airport", lon: 100.4008, lat: 6.1944 },
    source: "Alor Setar 6.1183,100.3694（en.wikipedia）；AOR 机场：en.wikipedia（市区北约 15 公里，梳邦/吉隆坡/新山航线）；人口 417,800（2020 普查）",
  },
  {
    id: "sibu", nameZh: "诗巫", nameEn: "Sibu", country: "malaysia", tier: "notable", zone: "my-sarawak", admin1Zh: "砂拉越州", admin1En: "Sarawak",
    lon: 111.8308, lat: 2.2878,
    airport: { iata: "SBW", nameZh: "诗巫机场", nameEn: "Sibu Airport", lon: 111.9825, lat: 2.2642 },
    source: "Sibu 2.2878,111.8308（en.wikipedia）；SBW 机场：en.wikipedia（市区东南约 23 公里）；人口 162,676（2010 普查）",
  },
];
