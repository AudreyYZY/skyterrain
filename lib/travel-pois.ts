/**
 * 旅游模式：每座城市攻略正文里提到的主要地点，选中城市时标注在地图上。
 *
 * 坐标为地标概略位置（城市尺度取景 ~26km 足够），非导航精度。
 * 取自各地公开的地标位置资料；不含任何有争议的地点或表述。
 */

import type { CityPoi } from "@/lib/places-registry";

export const POIS_BY_CITY: Record<string, CityPoi[]> = {
  // ── 澳大利亚 ──
  sydney: [
    { nameZh: "悉尼歌剧院", nameEn: "Sydney Opera House", lon: 151.2153, lat: -33.8568, kind: "landmark" },
    { nameZh: "海港大桥", nameEn: "Sydney Harbour Bridge", lon: 151.2108, lat: -33.8523, kind: "landmark" },
    { nameZh: "邦迪海滩", nameEn: "Bondi Beach", lon: 151.2744, lat: -33.8908, kind: "nature" },
    { nameZh: "环形码头", nameEn: "Circular Quay", lon: 151.2110, lat: -33.8610, kind: "transport" },
    { nameZh: "皇家植物园", nameEn: "Royal Botanic Garden", lon: 151.2166, lat: -33.8642, kind: "nature" },
  ],
  melbourne: [
    { nameZh: "联邦广场", nameEn: "Federation Square", lon: 144.9690, lat: -37.8180, kind: "landmark" },
    { nameZh: "维多利亚州立图书馆", nameEn: "State Library Victoria", lon: 144.9647, lat: -37.8098, kind: "landmark" },
    { nameZh: "皇家植物园", nameEn: "Royal Botanic Gardens", lon: 144.9797, lat: -37.8304, kind: "nature" },
    { nameZh: "维多利亚女王市场", nameEn: "Queen Victoria Market", lon: 144.9568, lat: -37.8076, kind: "district" },
    { nameZh: "圣基尔达", nameEn: "St Kilda", lon: 144.9800, lat: -37.8678, kind: "district" },
  ],
  brisbane: [
    { nameZh: "南岸公园", nameEn: "South Bank Parklands", lon: 153.0230, lat: -27.4790, kind: "district" },
    { nameZh: "龙柏考拉保护区", nameEn: "Lone Pine Koala Sanctuary", lon: 152.9686, lat: -27.5335, kind: "nature" },
    { nameZh: "库萨山瞭望台", nameEn: "Mount Coot-tha Lookout", lon: 152.9490, lat: -27.4776, kind: "nature" },
    { nameZh: "故事桥", nameEn: "Story Bridge", lon: 153.0410, lat: -27.4640, kind: "landmark" },
  ],
  perth: [
    { nameZh: "国王公园", nameEn: "Kings Park", lon: 115.8320, lat: -31.9615, kind: "nature" },
    { nameZh: "弗里曼特尔", nameEn: "Fremantle", lon: 115.7480, lat: -32.0560, kind: "district" },
    { nameZh: "罗特尼斯岛", nameEn: "Rottnest Island", lon: 115.5200, lat: -32.0000, kind: "nature" },
    { nameZh: "科茨洛海滩", nameEn: "Cottesloe Beach", lon: 115.7520, lat: -31.9950, kind: "nature" },
  ],
  adelaide: [
    { nameZh: "中央市场", nameEn: "Adelaide Central Market", lon: 138.5990, lat: -34.9295, kind: "district" },
    { nameZh: "阿德莱德植物园", nameEn: "Adelaide Botanic Garden", lon: 138.6110, lat: -34.9165, kind: "nature" },
    { nameZh: "格雷尔海滩", nameEn: "Glenelg Beach", lon: 138.5150, lat: -34.9800, kind: "nature" },
    { nameZh: "巴罗萨谷", nameEn: "Barossa Valley", lon: 138.9500, lat: -34.5500, kind: "nature" },
    { nameZh: "汉多夫", nameEn: "Hahndorf", lon: 138.8100, lat: -35.0270, kind: "district" },
  ],
  cairns: [
    { nameZh: "凯恩斯滨海泻湖", nameEn: "Cairns Esplanade Lagoon", lon: 145.7800, lat: -16.9160, kind: "landmark" },
    { nameZh: "库兰达", nameEn: "Kuranda", lon: 145.6380, lat: -16.8200, kind: "district" },
    { nameZh: "戴恩树雨林", nameEn: "Daintree Rainforest", lon: 145.4200, lat: -16.1700, kind: "nature" },
    { nameZh: "阿瑟顿高地", nameEn: "Atherton Tablelands", lon: 145.4800, lat: -17.2700, kind: "nature" },
  ],
  darwin: [
    { nameZh: "明迪海滩", nameEn: "Mindil Beach", lon: 130.8330, lat: -12.4380, kind: "nature" },
    { nameZh: "达尔文滨海区", nameEn: "Darwin Waterfront", lon: 130.8460, lat: -12.4720, kind: "district" },
    { nameZh: "卡卡杜国家公园", nameEn: "Kakadu National Park", lon: 132.9550, lat: -12.4090, kind: "nature" },
    { nameZh: "利奇菲尔德国家公园", nameEn: "Litchfield National Park", lon: 130.8000, lat: -13.1700, kind: "nature" },
  ],

  // ── 中国 ──
  beijing: [
    { nameZh: "故宫", nameEn: "Forbidden City", lon: 116.3972, lat: 39.9163, kind: "landmark" },
    { nameZh: "天安门广场", nameEn: "Tiananmen Square", lon: 116.3975, lat: 39.9055, kind: "landmark" },
    { nameZh: "天坛", nameEn: "Temple of Heaven", lon: 116.4126, lat: 39.8822, kind: "landmark" },
    { nameZh: "颐和园", nameEn: "Summer Palace", lon: 116.2755, lat: 39.9999, kind: "landmark" },
    { nameZh: "慕田峪长城", nameEn: "Mutianyu Great Wall", lon: 116.5700, lat: 40.4310, kind: "landmark" },
    { nameZh: "什刹海", nameEn: "Shichahai", lon: 116.3830, lat: 39.9400, kind: "district" },
  ],
  shanghai: [
    { nameZh: "外滩", nameEn: "The Bund", lon: 121.4900, lat: 31.2400, kind: "landmark" },
    { nameZh: "陆家嘴", nameEn: "Lujiazui", lon: 121.5050, lat: 31.2380, kind: "district" },
    { nameZh: "豫园", nameEn: "Yu Garden", lon: 121.4920, lat: 31.2270, kind: "landmark" },
    { nameZh: "武康路", nameEn: "Wukang Road", lon: 121.4340, lat: 31.2110, kind: "district" },
    { nameZh: "上海博物馆", nameEn: "Shanghai Museum", lon: 121.4750, lat: 31.2290, kind: "landmark" },
  ],
  guangzhou: [
    { nameZh: "沙面岛", nameEn: "Shamian Island", lon: 113.2410, lat: 23.1090, kind: "district" },
    { nameZh: "陈家祠", nameEn: "Chen Clan Ancestral Hall", lon: 113.2430, lat: 23.1290, kind: "landmark" },
    { nameZh: "越秀公园", nameEn: "Yuexiu Park", lon: 113.2660, lat: 23.1400, kind: "nature" },
    { nameZh: "广州塔", nameEn: "Canton Tower", lon: 113.3190, lat: 23.1060, kind: "landmark" },
    { nameZh: "白云山", nameEn: "Baiyun Mountain", lon: 113.2930, lat: 23.1810, kind: "nature" },
  ],
  shenzhen: [
    { nameZh: "华侨城创意园", nameEn: "OCT-LOFT", lon: 113.9840, lat: 22.5430, kind: "district" },
    { nameZh: "莲花山公园", nameEn: "Lianhuashan Park", lon: 114.0570, lat: 22.5590, kind: "nature" },
    { nameZh: "华强北", nameEn: "Huaqiangbei", lon: 114.0850, lat: 22.5470, kind: "district" },
    { nameZh: "大鹏所城", nameEn: "Dapeng Fortress", lon: 114.5230, lat: 22.5940, kind: "landmark" },
  ],
  chengdu: [
    { nameZh: "大熊猫繁育研究基地", nameEn: "Chengdu Panda Base", lon: 104.1470, lat: 30.7330, kind: "nature" },
    { nameZh: "宽窄巷子", nameEn: "Kuanzhai Alleys", lon: 104.0560, lat: 30.6690, kind: "district" },
    { nameZh: "武侯祠·锦里", nameEn: "Wuhou Shrine & Jinli", lon: 104.0475, lat: 30.6450, kind: "landmark" },
    { nameZh: "都江堰", nameEn: "Dujiangyan", lon: 103.6170, lat: 31.0030, kind: "landmark" },
    { nameZh: "青城山", nameEn: "Mount Qingcheng", lon: 103.5670, lat: 30.9000, kind: "nature" },
  ],
  chongqing: [
    { nameZh: "洪崖洞", nameEn: "Hongyadong", lon: 106.5820, lat: 29.5620, kind: "landmark" },
    { nameZh: "解放碑", nameEn: "Jiefangbei", lon: 106.5770, lat: 29.5580, kind: "district" },
    { nameZh: "长江索道", nameEn: "Yangtze River Cableway", lon: 106.5870, lat: 29.5560, kind: "transport" },
    { nameZh: "李子坝轻轨站", nameEn: "Liziba Station", lon: 106.5490, lat: 29.5480, kind: "transport" },
    { nameZh: "大足石刻", nameEn: "Dazu Rock Carvings", lon: 105.7050, lat: 29.7040, kind: "landmark" },
  ],
  xian: [
    { nameZh: "兵马俑", nameEn: "Terracotta Army", lon: 109.2785, lat: 34.3853, kind: "landmark" },
    { nameZh: "西安城墙·钟楼", nameEn: "City Wall & Bell Tower", lon: 108.9420, lat: 34.2610, kind: "landmark" },
    { nameZh: "大雁塔", nameEn: "Big Wild Goose Pagoda", lon: 108.9640, lat: 34.2220, kind: "landmark" },
    { nameZh: "回民街", nameEn: "Muslim Quarter", lon: 108.9390, lat: 34.2660, kind: "district" },
    { nameZh: "华山", nameEn: "Mount Hua", lon: 110.0870, lat: 34.4830, kind: "nature" },
  ],
  hangzhou: [
    { nameZh: "西湖", nameEn: "West Lake", lon: 120.1490, lat: 30.2450, kind: "nature" },
    { nameZh: "雷峰塔", nameEn: "Leifeng Pagoda", lon: 120.1490, lat: 30.2310, kind: "landmark" },
    { nameZh: "灵隐寺", nameEn: "Lingyin Temple", lon: 120.1010, lat: 30.2410, kind: "landmark" },
    { nameZh: "龙井村", nameEn: "Longjing Village", lon: 120.1210, lat: 30.2280, kind: "nature" },
    { nameZh: "西溪湿地", nameEn: "Xixi Wetland", lon: 120.0700, lat: 30.2700, kind: "nature" },
  ],
  kunming: [
    { nameZh: "翠湖", nameEn: "Green Lake", lon: 102.7060, lat: 25.0520, kind: "nature" },
    { nameZh: "滇池", nameEn: "Dianchi Lake", lon: 102.6800, lat: 24.9500, kind: "nature" },
    { nameZh: "西山龙门", nameEn: "Dragon Gate, Western Hills", lon: 102.6390, lat: 24.9560, kind: "nature" },
    { nameZh: "金马碧鸡坊", nameEn: "Jinma-Biji Archways", lon: 102.7180, lat: 25.0400, kind: "landmark" },
    { nameZh: "石林", nameEn: "Stone Forest", lon: 103.2700, lat: 24.7730, kind: "nature" },
  ],
  guilin: [
    { nameZh: "象鼻山", nameEn: "Elephant Trunk Hill", lon: 110.2960, lat: 25.2570, kind: "nature" },
    { nameZh: "漓江", nameEn: "Li River", lon: 110.4000, lat: 25.0500, kind: "nature" },
    { nameZh: "阳朔西街", nameEn: "West Street, Yangshuo", lon: 110.4960, lat: 24.7780, kind: "district" },
    { nameZh: "遇龙河", nameEn: "Yulong River", lon: 110.4300, lat: 24.7400, kind: "nature" },
    { nameZh: "龙脊梯田", nameEn: "Longji Rice Terraces", lon: 110.1180, lat: 25.7560, kind: "nature" },
  ],

  nanjing: [
    { nameZh: "中山陵", nameEn: "Sun Yat-sen Mausoleum", lon: 118.850, lat: 32.062, kind: "landmark" },
    { nameZh: "明孝陵", nameEn: "Ming Xiaoling Tomb", lon: 118.833, lat: 32.058, kind: "landmark" },
    { nameZh: "夫子庙 · 秦淮河", nameEn: "Confucius Temple & Qinhuai River", lon: 118.789, lat: 32.021, kind: "district" },
    { nameZh: "中华门", nameEn: "Zhonghua Gate", lon: 118.778, lat: 32.008, kind: "landmark" },
    { nameZh: "玄武湖", nameEn: "Xuanwu Lake", lon: 118.797, lat: 32.075, kind: "nature" },
    { nameZh: "侵华日军南京大屠杀遇难同胞纪念馆", nameEn: "Nanjing Massacre Memorial Hall", lon: 118.740, lat: 32.038, kind: "landmark" },
    { nameZh: "总统府", nameEn: "Presidential Palace", lon: 118.797, lat: 32.045, kind: "landmark" },
  ],

  sanya: [
    { nameZh: "亚龙湾", nameEn: "Yalong Bay", lon: 109.638, lat: 18.222, kind: "nature" },
    { nameZh: "大东海", nameEn: "Dadonghai", lon: 109.523, lat: 18.227, kind: "nature" },
    { nameZh: "海棠湾", nameEn: "Haitang Bay", lon: 109.720, lat: 18.300, kind: "nature" },
    { nameZh: "蜈支洲岛", nameEn: "Wuzhizhou Island", lon: 109.762, lat: 18.311, kind: "nature" },
    { nameZh: "天涯海角", nameEn: "Tianya Haijiao", lon: 109.420, lat: 18.300, kind: "landmark" },
    { nameZh: "南山文化旅游区", nameEn: "Nanshan", lon: 109.190, lat: 18.290, kind: "landmark" },
    { nameZh: "鹿回头", nameEn: "Luhuitou", lon: 109.500, lat: 18.220, kind: "nature" },
  ],

  lhasa: [
    { nameZh: "布达拉宫", nameEn: "Potala Palace", lon: 91.117, lat: 29.655, kind: "landmark" },
    { nameZh: "大昭寺", nameEn: "Jokhang Temple", lon: 91.131, lat: 29.653, kind: "landmark" },
    { nameZh: "八廓街", nameEn: "Barkhor Street", lon: 91.133, lat: 29.653, kind: "district" },
    { nameZh: "罗布林卡", nameEn: "Norbulingka", lon: 91.096, lat: 29.657, kind: "landmark" },
    { nameZh: "哲蚌寺", nameEn: "Drepung Monastery", lon: 91.049, lat: 29.671, kind: "landmark" },
    { nameZh: "色拉寺", nameEn: "Sera Monastery", lon: 91.135, lat: 29.694, kind: "landmark" },
    { nameZh: "羊卓雍错", nameEn: "Yamdrok Lake", lon: 90.700, lat: 28.940, kind: "nature" },
  ],

  harbin: [
    { nameZh: "中央大街", nameEn: "Central Street", lon: 126.617, lat: 45.775, kind: "district" },
    { nameZh: "圣索菲亚教堂", nameEn: "St Sophia Cathedral", lon: 126.629, lat: 45.769, kind: "landmark" },
    { nameZh: "防洪纪念塔", nameEn: "Flood Control Monument", lon: 126.612, lat: 45.784, kind: "landmark" },
    { nameZh: "太阳岛", nameEn: "Sun Island", lon: 126.580, lat: 45.800, kind: "nature" },
    { nameZh: "冰雪大世界", nameEn: "Ice and Snow World", lon: 126.585, lat: 45.815, kind: "landmark" },
    { nameZh: "老道外中华巴洛克街区", nameEn: "Laodaowai Chinese Baroque quarter", lon: 126.650, lat: 45.790, kind: "district" },
  ],

  qingdao: [
    { nameZh: "栈桥", nameEn: "Zhanqiao Pier", lon: 120.316, lat: 36.056, kind: "landmark" },
    { nameZh: "八大关", nameEn: "Badaguan", lon: 120.345, lat: 36.055, kind: "district" },
    { nameZh: "五四广场", nameEn: "May Fourth Square", lon: 120.384, lat: 36.062, kind: "landmark" },
    { nameZh: "奥帆中心", nameEn: "Olympic Sailing Centre", lon: 120.394, lat: 36.058, kind: "district" },
    { nameZh: "信号山", nameEn: "Signal Hill", lon: 120.328, lat: 36.068, kind: "nature" },
    { nameZh: "青岛啤酒博物馆", nameEn: "Tsingtao Beer Museum", lon: 120.338, lat: 36.075, kind: "landmark" },
    { nameZh: "崂山", nameEn: "Mount Lao", lon: 120.620, lat: 36.150, kind: "nature" },
  ],

  zhangjiajie: [
    { nameZh: "张家界国家森林公园", nameEn: "Zhangjiajie National Forest Park", lon: 110.430, lat: 29.320, kind: "nature" },
    { nameZh: "袁家界", nameEn: "Yuanjiajie", lon: 110.430, lat: 29.335, kind: "nature" },
    { nameZh: "天子山", nameEn: "Tianzi Mountain", lon: 110.440, lat: 29.375, kind: "nature" },
    { nameZh: "金鞭溪", nameEn: "Golden Whip Stream", lon: 110.440, lat: 29.320, kind: "nature" },
    { nameZh: "天门山", nameEn: "Tianmen Mountain", lon: 110.480, lat: 29.050, kind: "nature" },
    { nameZh: "武陵源", nameEn: "Wulingyuan", lon: 110.550, lat: 29.350, kind: "district" },
  ],

  lijiang: [
    { nameZh: "大研古城 · 四方街", nameEn: "Dayan Old Town & Sifang Street", lon: 100.234, lat: 26.877, kind: "district" },
    { nameZh: "木府", nameEn: "Mu Mansion", lon: 100.233, lat: 26.870, kind: "landmark" },
    { nameZh: "束河古镇", nameEn: "Shuhe Old Town", lon: 100.213, lat: 26.918, kind: "district" },
    { nameZh: "白沙古镇", nameEn: "Baisha Old Town", lon: 100.200, lat: 26.950, kind: "district" },
    { nameZh: "玉龙雪山", nameEn: "Jade Dragon Snow Mountain", lon: 100.180, lat: 27.100, kind: "nature" },
    { nameZh: "蓝月谷", nameEn: "Blue Moon Valley", lon: 100.200, lat: 27.080, kind: "nature" },
    { nameZh: "拉市海", nameEn: "Lashi Lake", lon: 100.130, lat: 26.900, kind: "nature" },
  ],

  dunhuang: [
    { nameZh: "莫高窟", nameEn: "Mogao Caves", lon: 94.813, lat: 40.038, kind: "landmark" },
    { nameZh: "鸣沙山 · 月牙泉", nameEn: "Singing Sand Dunes & Crescent Lake", lon: 94.660, lat: 40.090, kind: "nature" },
    { nameZh: "敦煌夜市", nameEn: "Dunhuang Night Market", lon: 94.662, lat: 40.142, kind: "district" },
    { nameZh: "玉门关", nameEn: "Yumen Pass", lon: 93.870, lat: 40.360, kind: "landmark" },
    { nameZh: "汉长城遗址", nameEn: "Han Great Wall ruins", lon: 93.870, lat: 40.370, kind: "landmark" },
    { nameZh: "雅丹国家地质公园", nameEn: "Yardang National Geopark", lon: 93.100, lat: 40.500, kind: "nature" },
  ],

  tokyo: [
    { nameZh: "浅草寺 · 雷门", nameEn: "Senso-ji & Kaminarimon", lon: 139.797, lat: 35.715, kind: "landmark" },
    { nameZh: "东京晴空塔", nameEn: "Tokyo Skytree", lon: 139.811, lat: 35.710, kind: "landmark" },
    { nameZh: "明治神宫", nameEn: "Meiji Shrine", lon: 139.699, lat: 35.676, kind: "landmark" },
    { nameZh: "涩谷十字路口", nameEn: "Shibuya Crossing", lon: 139.700, lat: 35.659, kind: "district" },
    { nameZh: "上野公园", nameEn: "Ueno Park", lon: 139.774, lat: 35.715, kind: "nature" },
    { nameZh: "皇居东御苑", nameEn: "Imperial Palace East Gardens", lon: 139.757, lat: 35.685, kind: "nature" },
    { nameZh: "筑地场外市场", nameEn: "Tsukiji Outer Market", lon: 139.770, lat: 35.665, kind: "district" },
  ],

  kyoto: [
    { nameZh: "清水寺", nameEn: "Kiyomizu-dera", lon: 135.785, lat: 34.995, kind: "landmark" },
    { nameZh: "伏见稻荷大社", nameEn: "Fushimi Inari Taisha", lon: 135.773, lat: 34.967, kind: "landmark" },
    { nameZh: "金阁寺", nameEn: "Kinkaku-ji", lon: 135.729, lat: 35.039, kind: "landmark" },
    { nameZh: "岚山竹林", nameEn: "Arashiyama Bamboo Grove", lon: 135.672, lat: 35.017, kind: "nature" },
    { nameZh: "祇园", nameEn: "Gion", lon: 135.775, lat: 35.003, kind: "district" },
    { nameZh: "二条城", nameEn: "Nijo Castle", lon: 135.748, lat: 35.014, kind: "landmark" },
    { nameZh: "银阁寺 · 哲学之道", nameEn: "Ginkaku-ji & Philosopher's Path", lon: 135.798, lat: 35.027, kind: "landmark" },
  ],

  "osaka-city": [
    { nameZh: "道顿堀", nameEn: "Dotonbori", lon: 135.501, lat: 34.669, kind: "district" },
    { nameZh: "大阪城", nameEn: "Osaka Castle", lon: 135.526, lat: 34.687, kind: "landmark" },
    { nameZh: "通天阁 · 新世界", nameEn: "Tsutenkaku & Shinsekai", lon: 135.506, lat: 34.652, kind: "district" },
    { nameZh: "黑门市场", nameEn: "Kuromon Market", lon: 135.506, lat: 34.665, kind: "district" },
    { nameZh: "梅田蓝天大厦", nameEn: "Umeda Sky Building", lon: 135.490, lat: 34.705, kind: "landmark" },
    { nameZh: "日本环球影城", nameEn: "Universal Studios Japan", lon: 135.433, lat: 34.668, kind: "landmark" },
  ],

  sapporo: [
    { nameZh: "大通公园", nameEn: "Odori Park", lon: 141.352, lat: 43.061, kind: "nature" },
    { nameZh: "札幌电视塔", nameEn: "Sapporo TV Tower", lon: 141.356, lat: 43.061, kind: "landmark" },
    { nameZh: "时计台", nameEn: "Clock Tower", lon: 141.353, lat: 43.063, kind: "landmark" },
    { nameZh: "藻岩山", nameEn: "Mount Moiwa", lon: 141.320, lat: 43.026, kind: "nature" },
    { nameZh: "狸小路商店街", nameEn: "Tanukikoji Arcade", lon: 141.353, lat: 43.056, kind: "district" },
    { nameZh: "北海道厅旧本厅舍", nameEn: "Former Hokkaido Government Office", lon: 141.347, lat: 43.064, kind: "landmark" },
    { nameZh: "定山溪温泉", nameEn: "Jozankei Onsen", lon: 141.164, lat: 42.966, kind: "nature" },
  ],

  fukuoka: [
    { nameZh: "中洲屋台", nameEn: "Nakasu Yatai", lon: 130.406, lat: 33.593, kind: "district" },
    { nameZh: "栉田神社", nameEn: "Kushida Shrine", lon: 130.412, lat: 33.593, kind: "landmark" },
    { nameZh: "天神", nameEn: "Tenjin", lon: 130.399, lat: 33.591, kind: "district" },
    { nameZh: "大濠公园", nameEn: "Ohori Park", lon: 130.378, lat: 33.585, kind: "nature" },
    { nameZh: "福冈城迹", nameEn: "Fukuoka Castle ruins", lon: 130.383, lat: 33.585, kind: "landmark" },
    { nameZh: "太宰府天满宫", nameEn: "Dazaifu Tenmangu", lon: 130.535, lat: 33.521, kind: "landmark" },
    { nameZh: "海之中道", nameEn: "Uminonakamichi", lon: 130.360, lat: 33.660, kind: "nature" },
  ],

  naha: [
    { nameZh: "国际通", nameEn: "Kokusai-dori", lon: 127.686, lat: 26.214, kind: "district" },
    { nameZh: "首里城公园", nameEn: "Shuri Castle Park", lon: 127.719, lat: 26.217, kind: "landmark" },
    { nameZh: "第一牧志公设市场", nameEn: "Makishi Public Market", lon: 127.686, lat: 26.215, kind: "district" },
    { nameZh: "波上宫 · 波之上海滩", nameEn: "Naminoue Shrine & Beach", lon: 127.667, lat: 26.221, kind: "landmark" },
    { nameZh: "冲绳县立博物馆·美术馆", nameEn: "Okinawa Prefectural Museum & Art Museum", lon: 127.719, lat: 26.226, kind: "landmark" },
    { nameZh: "和平祈念公园", nameEn: "Peace Memorial Park", lon: 127.727, lat: 26.096, kind: "landmark" },
  ],

  tianjin: [
    { nameZh: "意大利风情区", nameEn: "Italian-style Quarter", lon: 117.202, lat: 39.135, kind: "district" },
    { nameZh: "五大道", nameEn: "Five Great Avenues", lon: 117.203, lat: 39.115, kind: "district" },
    { nameZh: "古文化街 · 天后宫", nameEn: "Ancient Culture Street & Tianhou Temple", lon: 117.196, lat: 39.146, kind: "landmark" },
    { nameZh: "天津之眼", nameEn: "Tianjin Eye", lon: 117.183, lat: 39.153, kind: "landmark" },
    { nameZh: "西开教堂", nameEn: "Xikai Church", lon: 117.196, lat: 39.118, kind: "landmark" },
    { nameZh: "盘山", nameEn: "Pan Shan", lon: 117.290, lat: 40.050, kind: "nature" },
  ],

  shijiazhuang: [
    { nameZh: "正定隆兴寺", nameEn: "Longxing Temple, Zhengding", lon: 114.577, lat: 38.148, kind: "landmark" },
    { nameZh: "正定古城", nameEn: "Zhengding Old Town", lon: 114.570, lat: 38.147, kind: "district" },
    { nameZh: "苍岩山", nameEn: "Cangyan Shan", lon: 114.050, lat: 37.650, kind: "nature" },
    { nameZh: "嶂石岩", nameEn: "Zhangshiyan", lon: 114.020, lat: 37.530, kind: "nature" },
    { nameZh: "赵州桥", nameEn: "Zhaozhou Bridge", lon: 114.770, lat: 37.720, kind: "landmark" },
    { nameZh: "西柏坡", nameEn: "Xibaipo", lon: 113.930, lat: 38.350, kind: "landmark" },
  ],

  taiyuan: [
    { nameZh: "晋祠", nameEn: "Jinci Temple", lon: 112.470, lat: 37.710, kind: "landmark" },
    { nameZh: "山西博物院", nameEn: "Shanxi Museum", lon: 112.530, lat: 37.860, kind: "landmark" },
    { nameZh: "双塔寺", nameEn: "Twin Pagoda Temple", lon: 112.600, lat: 37.850, kind: "landmark" },
    { nameZh: "天龙山石窟", nameEn: "Tianlong Shan Grottoes", lon: 112.350, lat: 37.710, kind: "landmark" },
    { nameZh: "蒙山大佛", nameEn: "Mengshan Buddha", lon: 112.420, lat: 37.750, kind: "landmark" },
    { nameZh: "纯阳宫", nameEn: "Chunyang Palace", lon: 112.560, lat: 37.870, kind: "landmark" },
  ],

  hohhot: [
    { nameZh: "大召", nameEn: "Dazhao Temple", lon: 111.658, lat: 40.808, kind: "landmark" },
    { nameZh: "席力图召", nameEn: "Xilituzhao", lon: 111.660, lat: 40.808, kind: "landmark" },
    { nameZh: "五塔寺", nameEn: "Five-Pagoda Temple", lon: 111.669, lat: 40.806, kind: "landmark" },
    { nameZh: "将军衙署", nameEn: "General's Government Office", lon: 111.664, lat: 40.816, kind: "landmark" },
    { nameZh: "内蒙古博物院", nameEn: "Inner Mongolia Museum", lon: 111.700, lat: 40.827, kind: "landmark" },
    { nameZh: "昭君墓", nameEn: "Zhaojun Tomb", lon: 111.660, lat: 40.720, kind: "landmark" },
    { nameZh: "希拉穆仁草原", nameEn: "Xilamuren Grassland", lon: 111.200, lat: 41.300, kind: "nature" },
  ],

  shenyang: [
    { nameZh: "沈阳故宫", nameEn: "Mukden Palace", lon: 123.454, lat: 41.799, kind: "landmark" },
    { nameZh: "张氏帅府", nameEn: "Marshal Zhang Mansion", lon: 123.457, lat: 41.793, kind: "landmark" },
    { nameZh: "北陵公园（昭陵）", nameEn: "Northern Tomb Park (Zhaoling)", lon: 123.418, lat: 41.833, kind: "nature" },
    { nameZh: "东陵（福陵）", nameEn: "Eastern Tomb (Fuling)", lon: 123.581, lat: 41.828, kind: "landmark" },
    { nameZh: "中国工业博物馆", nameEn: "China Industrial Museum", lon: 123.300, lat: 41.790, kind: "landmark" },
    { nameZh: "棋盘山", nameEn: "Qipan Shan", lon: 123.720, lat: 41.940, kind: "nature" },
  ],

  changchun: [
    { nameZh: "净月潭国家森林公园", nameEn: "Jingyuetan National Forest Park", lon: 125.470, lat: 43.750, kind: "nature" },
    { nameZh: "伪满皇宫博物院", nameEn: "Museum of the Former Manchukuo Palace", lon: 125.376, lat: 43.906, kind: "landmark" },
    { nameZh: "长影旧址博物馆", nameEn: "Former Changchun Film Studio Museum", lon: 125.300, lat: 43.870, kind: "landmark" },
    { nameZh: "长影世纪城", nameEn: "Changying Century City", lon: 125.480, lat: 43.750, kind: "landmark" },
    { nameZh: "南湖公园", nameEn: "Nanhu Park", lon: 125.300, lat: 43.850, kind: "nature" },
    { nameZh: "红旗街", nameEn: "Hongqi Street", lon: 125.300, lat: 43.870, kind: "district" },
  ],
};

export function getCityPois(cityId: string): CityPoi[] {
  return POIS_BY_CITY[cityId] ?? [];
}
