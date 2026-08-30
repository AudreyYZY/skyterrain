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

  nanchang: [
    { nameZh: "滕王阁", nameEn: "Tengwang Pavilion", lon: 115.874, lat: 28.681, kind: "landmark" },
    { nameZh: "八一起义纪念馆", nameEn: "August 1st Uprising Memorial Hall", lon: 115.891, lat: 28.683, kind: "landmark" },
    { nameZh: "八一广场", nameEn: "Bayi Square", lon: 115.895, lat: 28.674, kind: "district" },
    { nameZh: "绳金塔", nameEn: "Shengjin Pagoda", lon: 115.876, lat: 28.667, kind: "landmark" },
    { nameZh: "万寿宫历史文化街区", nameEn: "Wanshou Palace Heritage Quarter", lon: 115.895, lat: 28.686, kind: "district" },
    { nameZh: "秋水广场", nameEn: "Qiushui Square", lon: 115.858, lat: 28.700, kind: "district" },
  ],

  hefei: [
    { nameZh: "包公园", nameEn: "Baogong Park", lon: 117.293, lat: 31.855, kind: "nature" },
    { nameZh: "李鸿章故居", nameEn: "Former Residence of Li Hongzhang", lon: 117.291, lat: 31.862, kind: "landmark" },
    { nameZh: "逍遥津", nameEn: "Xiaoyaojin Park", lon: 117.293, lat: 31.873, kind: "nature" },
    { nameZh: "安徽博物院", nameEn: "Anhui Museum", lon: 117.200, lat: 31.860, kind: "landmark" },
    { nameZh: "环城公园", nameEn: "Huancheng Park", lon: 117.290, lat: 31.860, kind: "nature" },
    { nameZh: "巢湖中庙", nameEn: "Zhongmiao, Lake Chao", lon: 117.520, lat: 31.600, kind: "landmark" },
  ],

  xiamen: [
    { nameZh: "鼓浪屿", nameEn: "Gulangyu", lon: 118.067, lat: 24.447, kind: "district" },
    { nameZh: "日光岩", nameEn: "Sunlight Rock", lon: 118.066, lat: 24.443, kind: "nature" },
    { nameZh: "环岛路", nameEn: "Round-the-Island Road", lon: 118.150, lat: 24.440, kind: "nature" },
    { nameZh: "南普陀寺", nameEn: "Nanputuo Temple", lon: 118.087, lat: 24.442, kind: "landmark" },
    { nameZh: "厦门大学", nameEn: "Xiamen University", lon: 118.093, lat: 24.436, kind: "landmark" },
    { nameZh: "沙坡尾", nameEn: "Shapowei", lon: 118.082, lat: 24.437, kind: "district" },
    { nameZh: "集美学村", nameEn: "Jimei School Village", lon: 118.103, lat: 24.573, kind: "landmark" },
  ],

  zhengzhou: [
    { nameZh: "河南博物院", nameEn: "Henan Museum", lon: 113.660, lat: 34.795, kind: "landmark" },
    { nameZh: "黄河风景名胜区", nameEn: "Yellow River Scenic Area", lon: 113.470, lat: 34.920, kind: "nature" },
    { nameZh: "二七纪念塔", nameEn: "Erqi Memorial Tower", lon: 113.652, lat: 34.751, kind: "landmark" },
    { nameZh: "少林寺", nameEn: "Shaolin Temple", lon: 112.935, lat: 34.508, kind: "landmark" },
    { nameZh: "中岳庙", nameEn: "Zhongyue Temple", lon: 113.100, lat: 34.490, kind: "landmark" },
    { nameZh: "郑州商城遗址", nameEn: "Zhengzhou Shang City Ruins", lon: 113.680, lat: 34.750, kind: "landmark" },
  ],

  wuhan: [
    { nameZh: "黄鹤楼", nameEn: "Yellow Crane Tower", lon: 114.303, lat: 30.545, kind: "landmark" },
    { nameZh: "东湖绿道", nameEn: "East Lake Greenway", lon: 114.400, lat: 30.550, kind: "nature" },
    { nameZh: "湖北省博物馆", nameEn: "Hubei Provincial Museum", lon: 114.383, lat: 30.567, kind: "landmark" },
    { nameZh: "汉口江滩", nameEn: "Hankou Riverfront", lon: 114.295, lat: 30.585, kind: "nature" },
    { nameZh: "江汉路步行街", nameEn: "Jianghan Road Pedestrian Street", lon: 114.288, lat: 30.583, kind: "district" },
    { nameZh: "户部巷", nameEn: "Hubu Alley", lon: 114.310, lat: 30.548, kind: "district" },
    { nameZh: "昙华林", nameEn: "Tanhualin", lon: 114.310, lat: 30.552, kind: "district" },
  ],

  guiyang: [
    { nameZh: "甲秀楼", nameEn: "Jiaxiu Pavilion", lon: 106.708, lat: 26.567, kind: "landmark" },
    { nameZh: "黔灵山公园", nameEn: "Qianling Shan Park", lon: 106.685, lat: 26.590, kind: "nature" },
    { nameZh: "贵州省博物馆", nameEn: "Guizhou Provincial Museum", lon: 106.650, lat: 26.600, kind: "landmark" },
    { nameZh: "多彩贵州城", nameEn: "Colourful Guizhou City", lon: 106.550, lat: 26.620, kind: "district" },
    { nameZh: "黄果树瀑布", nameEn: "Huangguoshu Falls", lon: 105.710, lat: 25.990, kind: "nature" },
    { nameZh: "西江千户苗寨", nameEn: "Xijiang Miao Village", lon: 108.180, lat: 26.500, kind: "district" },
  ],

  sendai: [
    { nameZh: "青叶城迹", nameEn: "Aoba Castle Site", lon: 140.856, lat: 38.253, kind: "landmark" },
    { nameZh: "瑞凤殿", nameEn: "Zuihoden", lon: 140.858, lat: 38.247, kind: "landmark" },
    { nameZh: "大崎八幡宫", nameEn: "Osaki Hachimangu", lon: 140.842, lat: 38.281, kind: "landmark" },
    { nameZh: "定禅寺通", nameEn: "Jozenji-dori", lon: 140.868, lat: 38.263, kind: "district" },
    { nameZh: "松岛 · 瑞岩寺", nameEn: "Matsushima · Zuiganji", lon: 141.060, lat: 38.370, kind: "nature" },
    { nameZh: "山寺（立石寺）", nameEn: "Yamadera (Risshakuji)", lon: 140.440, lat: 38.310, kind: "landmark" },
    { nameZh: "秋保温泉", nameEn: "Akiu Onsen", lon: 140.730, lat: 38.230, kind: "nature" },
  ],

  yokohama: [
    { nameZh: "港未来21", nameEn: "Minato Mirai 21", lon: 139.632, lat: 35.457, kind: "district" },
    { nameZh: "红砖仓库", nameEn: "Red Brick Warehouses", lon: 139.643, lat: 35.453, kind: "landmark" },
    { nameZh: "横滨中华街", nameEn: "Yokohama Chinatown", lon: 139.645, lat: 35.443, kind: "district" },
    { nameZh: "山手西式洋馆", nameEn: "Yamate Western Houses", lon: 139.653, lat: 35.435, kind: "landmark" },
    { nameZh: "港见丘公园", nameEn: "Harbour View Park", lon: 139.652, lat: 35.437, kind: "nature" },
    { nameZh: "三溪园", nameEn: "Sankeien Garden", lon: 139.657, lat: 35.417, kind: "nature" },
    { nameZh: "八景岛海岛乐园", nameEn: "Hakkeijima Sea Paradise", lon: 139.643, lat: 35.336, kind: "landmark" },
  ],

  nagoya: [
    { nameZh: "名古屋城", nameEn: "Nagoya Castle", lon: 136.899, lat: 35.185, kind: "landmark" },
    { nameZh: "热田神宫", nameEn: "Atsuta Shrine", lon: 136.909, lat: 35.128, kind: "landmark" },
    { nameZh: "德川美术馆 · 德川园", nameEn: "Tokugawa Art Museum & Garden", lon: 136.945, lat: 35.194, kind: "landmark" },
    { nameZh: "大须商店街", nameEn: "Osu Shopping District", lon: 136.900, lat: 35.159, kind: "district" },
    { nameZh: "名古屋港水族馆", nameEn: "Port of Nagoya Public Aquarium", lon: 136.876, lat: 35.090, kind: "landmark" },
    { nameZh: "磁悬浮·铁道馆", nameEn: "SCMaglev and Railway Park", lon: 136.802, lat: 35.055, kind: "landmark" },
  ],

  kanazawa: [
    { nameZh: "兼六园", nameEn: "Kenrokuen", lon: 136.663, lat: 36.562, kind: "nature" },
    { nameZh: "金泽城公园", nameEn: "Kanazawa Castle Park", lon: 136.658, lat: 36.565, kind: "landmark" },
    { nameZh: "金泽21世纪美术馆", nameEn: "21st Century Museum of Contemporary Art", lon: 136.658, lat: 36.559, kind: "landmark" },
    { nameZh: "东茶屋街", nameEn: "Higashi Chaya District", lon: 136.667, lat: 36.572, kind: "district" },
    { nameZh: "长町武家屋敷", nameEn: "Nagamachi Samurai District", lon: 136.653, lat: 36.567, kind: "district" },
    { nameZh: "近江町市场", nameEn: "Omicho Market", lon: 136.657, lat: 36.571, kind: "district" },
  ],

  nara: [
    { nameZh: "东大寺", nameEn: "Todaiji", lon: 135.840, lat: 34.689, kind: "landmark" },
    { nameZh: "春日大社", nameEn: "Kasuga Taisha", lon: 135.848, lat: 34.681, kind: "landmark" },
    { nameZh: "兴福寺", nameEn: "Kofukuji", lon: 135.831, lat: 34.683, kind: "landmark" },
    { nameZh: "奈良国立博物馆", nameEn: "Nara National Museum", lon: 135.842, lat: 34.685, kind: "landmark" },
    { nameZh: "若草山", nameEn: "Wakakusayama", lon: 135.849, lat: 34.694, kind: "nature" },
    { nameZh: "唐招提寺", nameEn: "Toshodaiji", lon: 135.785, lat: 34.676, kind: "landmark" },
    { nameZh: "法隆寺", nameEn: "Horyuji", lon: 135.734, lat: 34.614, kind: "landmark" },
  ],

  hiroshima: [
    { nameZh: "和平纪念公园 · 原爆圆顶", nameEn: "Peace Memorial Park · Atomic Bomb Dome", lon: 132.453, lat: 34.395, kind: "landmark" },
    { nameZh: "广岛和平纪念资料馆", nameEn: "Hiroshima Peace Memorial Museum", lon: 132.452, lat: 34.391, kind: "landmark" },
    { nameZh: "广岛城", nameEn: "Hiroshima Castle", lon: 132.459, lat: 34.403, kind: "landmark" },
    { nameZh: "缩景园", nameEn: "Shukkeien Garden", lon: 132.469, lat: 34.400, kind: "nature" },
    { nameZh: "严岛神社（宫岛）", nameEn: "Itsukushima Shrine (Miyajima)", lon: 132.320, lat: 34.296, kind: "landmark" },
    { nameZh: "弥山", nameEn: "Mount Misen", lon: 132.317, lat: 34.278, kind: "nature" },
  ],

  takamatsu: [
    { nameZh: "栗林公园", nameEn: "Ritsurin Garden", lon: 134.043, lat: 34.329, kind: "nature" },
    { nameZh: "屋岛", nameEn: "Yashima", lon: 134.107, lat: 34.360, kind: "nature" },
    { nameZh: "高松城迹（玉藻公园）", nameEn: "Takamatsu Castle Site (Tamamo Park)", lon: 134.052, lat: 34.354, kind: "landmark" },
    { nameZh: "直岛 · 地中美术馆", nameEn: "Naoshima · Chichu Art Museum", lon: 133.995, lat: 34.452, kind: "landmark" },
    { nameZh: "丰岛美术馆", nameEn: "Teshima Art Museum", lon: 134.075, lat: 34.494, kind: "landmark" },
    { nameZh: "小豆岛寒霞溪", nameEn: "Kankakei Gorge, Shodoshima", lon: 134.278, lat: 34.503, kind: "nature" },
  ],

  nagasaki: [
    { nameZh: "哥拉巴园", nameEn: "Glover Garden", lon: 129.869, lat: 32.734, kind: "landmark" },
    { nameZh: "大浦天主堂", nameEn: "Oura Church", lon: 129.870, lat: 32.735, kind: "landmark" },
    { nameZh: "出岛", nameEn: "Dejima", lon: 129.874, lat: 32.744, kind: "landmark" },
    { nameZh: "新地中华街", nameEn: "Shinchi Chinatown", lon: 129.872, lat: 32.742, kind: "district" },
    { nameZh: "眼镜桥", nameEn: "Spectacles Bridge", lon: 129.882, lat: 32.746, kind: "landmark" },
    { nameZh: "稻佐山", nameEn: "Mount Inasa", lon: 129.860, lat: 32.746, kind: "nature" },
    { nameZh: "长崎原爆资料馆 · 和平公园", nameEn: "Nagasaki Atomic Bomb Museum · Peace Park", lon: 129.865, lat: 32.771, kind: "landmark" },
    { nameZh: "军舰岛（端岛）", nameEn: "Gunkanjima (Hashima)", lon: 129.738, lat: 32.628, kind: "landmark" },
  ],

  xining: [
    { nameZh: "塔尔寺", nameEn: "Kumbum Monastery", lon: 101.578, lat: 36.489, kind: "landmark" },
    { nameZh: "东关清真大寺", nameEn: "Dongguan Grand Mosque", lon: 101.800, lat: 36.617, kind: "landmark" },
    { nameZh: "青海省博物馆", nameEn: "Qinghai Provincial Museum", lon: 101.750, lat: 36.650, kind: "landmark" },
    { nameZh: "南山公园", nameEn: "Nanshan Park", lon: 101.770, lat: 36.600, kind: "nature" },
    { nameZh: "莫家街", nameEn: "Mojia Street", lon: 101.790, lat: 36.620, kind: "district" },
    { nameZh: "青海湖 · 二郎剑", nameEn: "Qinghai Lake · Erlangjian", lon: 100.500, lat: 36.550, kind: "nature" },
  ],

  yinchuan: [
    { nameZh: "西夏陵", nameEn: "Western Xia Tombs", lon: 105.980, lat: 38.480, kind: "landmark" },
    { nameZh: "贺兰山岩画", nameEn: "Helan Mountain Rock Art", lon: 106.070, lat: 38.720, kind: "landmark" },
    { nameZh: "镇北堡西部影城", nameEn: "Zhenbeibu Western Film Studios", lon: 106.010, lat: 38.610, kind: "landmark" },
    { nameZh: "水洞沟", nameEn: "Shuidonggou", lon: 106.520, lat: 38.320, kind: "landmark" },
    { nameZh: "宁夏博物馆", nameEn: "Ningxia Museum", lon: 106.220, lat: 38.500, kind: "landmark" },
    { nameZh: "沙坡头", nameEn: "Shapotou", lon: 104.950, lat: 37.450, kind: "nature" },
  ],

  urumqi: [
    { nameZh: "新疆国际大巴扎", nameEn: "Xinjiang International Grand Bazaar", lon: 87.617, lat: 43.775, kind: "district" },
    { nameZh: "新疆维吾尔自治区博物馆", nameEn: "Xinjiang Uygur Autonomous Region Museum", lon: 87.590, lat: 43.815, kind: "landmark" },
    { nameZh: "红山公园", nameEn: "Hong Shan Park", lon: 87.610, lat: 43.810, kind: "nature" },
    { nameZh: "水磨沟", nameEn: "Shuimogou", lon: 87.660, lat: 43.830, kind: "nature" },
    { nameZh: "天山天池", nameEn: "Tianchi of the Tianshan", lon: 88.120, lat: 43.880, kind: "nature" },
    { nameZh: "南山（菊花台）", nameEn: "Nanshan (Juhuatai)", lon: 87.300, lat: 43.400, kind: "nature" },
  ],

  hongkong: [
    { nameZh: "太平山顶", nameEn: "Victoria Peak", lon: 114.150, lat: 22.271, kind: "nature" },
    { nameZh: "天星小轮", nameEn: "Star Ferry", lon: 114.161, lat: 22.287, kind: "transport" },
    { nameZh: "尖沙咀海滨 · 星光大道", nameEn: "Tsim Sha Tsui Promenade · Avenue of Stars", lon: 114.174, lat: 22.293, kind: "district" },
    { nameZh: "香港历史博物馆", nameEn: "Hong Kong Museum of History", lon: 114.177, lat: 22.302, kind: "landmark" },
    { nameZh: "旺角", nameEn: "Mong Kok", lon: 114.170, lat: 22.319, kind: "district" },
    { nameZh: "天坛大佛（大屿山）", nameEn: "Tian Tan Buddha (Lantau)", lon: 113.905, lat: 22.254, kind: "landmark" },
    { nameZh: "龙脊", nameEn: "Dragon's Back", lon: 114.243, lat: 22.226, kind: "nature" },
  ],

  macao: [
    { nameZh: "大三巴牌坊", nameEn: "Ruins of St Paul's", lon: 113.540, lat: 22.198, kind: "landmark" },
    { nameZh: "议事亭前地", nameEn: "Senado Square", lon: 113.540, lat: 22.194, kind: "district" },
    { nameZh: "妈阁庙", nameEn: "A-Ma Temple", lon: 113.531, lat: 22.186, kind: "landmark" },
    { nameZh: "大炮台 · 澳门博物馆", nameEn: "Mount Fortress · Macao Museum", lon: 113.541, lat: 22.197, kind: "landmark" },
    { nameZh: "氹仔官也街", nameEn: "Rua do Cunha, Taipa", lon: 113.556, lat: 22.156, kind: "district" },
    { nameZh: "路环圣方济各教堂", nameEn: "St Francis Xavier's Church, Coloane", lon: 113.564, lat: 22.117, kind: "landmark" },
    { nameZh: "黑沙海滩", nameEn: "Hac Sa Beach", lon: 113.567, lat: 22.126, kind: "nature" },
  ],

  taipei: [
    { nameZh: "故宫博物院", nameEn: "Palace Museum", lon: 121.548, lat: 25.102, kind: "landmark" },
    { nameZh: "台北101", nameEn: "Taipei 101", lon: 121.565, lat: 25.034, kind: "landmark" },
    { nameZh: "大稻埕 · 迪化街", nameEn: "Dadaocheng · Dihua Street", lon: 121.510, lat: 25.056, kind: "district" },
    { nameZh: "龙山寺", nameEn: "Longshan Temple", lon: 121.500, lat: 25.037, kind: "landmark" },
    { nameZh: "阳明山", nameEn: "Yangmingshan", lon: 121.560, lat: 25.155, kind: "nature" },
    { nameZh: "北投温泉", nameEn: "Beitou Hot Springs", lon: 121.507, lat: 25.137, kind: "nature" },
    { nameZh: "士林夜市", nameEn: "Shilin Night Market", lon: 121.524, lat: 25.088, kind: "district" },
    { nameZh: "淡水老街", nameEn: "Tamsui Old Street", lon: 121.443, lat: 25.169, kind: "district" },
  ],

  auckland: [
    { nameZh: "天空塔", nameEn: "Sky Tower", lon: 174.762, lat: -36.848, kind: "landmark" },
    { nameZh: "伊甸山（Maungawhau）", nameEn: "Maungawhau / Mt Eden", lon: 174.764, lat: -36.877, kind: "nature" },
    { nameZh: "独树山（Maungakiekie）", nameEn: "Maungakiekie / One Tree Hill", lon: 174.783, lat: -36.900, kind: "nature" },
    { nameZh: "奥克兰博物馆", nameEn: "Auckland War Memorial Museum", lon: 174.778, lat: -36.860, kind: "landmark" },
    { nameZh: "高架桥海港区", nameEn: "Viaduct Harbour", lon: 174.762, lat: -36.843, kind: "district" },
    { nameZh: "德文波特", nameEn: "Devonport", lon: 174.796, lat: -36.829, kind: "district" },
    { nameZh: "怀希基岛", nameEn: "Waiheke Island", lon: 175.090, lat: -36.800, kind: "nature" },
    { nameZh: "皮哈海滩", nameEn: "Piha Beach", lon: 174.468, lat: -36.955, kind: "nature" },
  ],

  wellington: [
    { nameZh: "蒂帕帕国家博物馆", nameEn: "Te Papa", lon: 174.782, lat: -41.290, kind: "landmark" },
    { nameZh: "缆车", nameEn: "Cable Car", lon: 174.777, lat: -41.283, kind: "transport" },
    { nameZh: "植物园", nameEn: "Botanic Garden", lon: 174.767, lat: -41.281, kind: "nature" },
    { nameZh: "Zealandia 生态保护区", nameEn: "Zealandia", lon: 174.752, lat: -41.290, kind: "nature" },
    { nameZh: "古巴街", nameEn: "Cuba Street", lon: 174.775, lat: -41.294, kind: "district" },
    { nameZh: "国会（蜂巢）", nameEn: "Parliament (the Beehive)", lon: 174.777, lat: -41.278, kind: "landmark" },
    { nameZh: "维多利亚山", nameEn: "Mount Victoria", lon: 174.794, lat: -41.297, kind: "nature" },
  ],

  rotorua: [
    { nameZh: "政府花园", nameEn: "Government Gardens", lon: 176.256, lat: -38.136, kind: "nature" },
    { nameZh: "库伊劳公园", nameEn: "Kuirau Park", lon: 176.240, lat: -38.132, kind: "nature" },
    { nameZh: "怀奥塔普地热区", nameEn: "Wai-O-Tapu", lon: 176.366, lat: -38.357, kind: "nature" },
    { nameZh: "蒂普亚（Te Puia）", nameEn: "Te Puia", lon: 176.252, lat: -38.163, kind: "landmark" },
    { nameZh: "红木森林", nameEn: "The Redwoods (Whakarewarewa Forest)", lon: 176.283, lat: -38.157, kind: "nature" },
    { nameZh: "波利尼西亚温泉", nameEn: "Polynesian Spa", lon: 176.257, lat: -38.138, kind: "landmark" },
    { nameZh: "蓝湖", nameEn: "Blue Lake (Tikitapu)", lon: 176.340, lat: -38.190, kind: "nature" },
  ],

  christchurch: [
    { nameZh: "大教堂广场", nameEn: "Cathedral Square", lon: 172.637, lat: -43.531, kind: "landmark" },
    { nameZh: "植物园 · 海格利公园", nameEn: "Botanic Gardens · Hagley Park", lon: 172.625, lat: -43.531, kind: "nature" },
    { nameZh: "纸板教堂", nameEn: "Cardboard Cathedral", lon: 172.645, lat: -43.532, kind: "landmark" },
    { nameZh: "坎特伯雷博物馆", nameEn: "Canterbury Museum", lon: 172.628, lat: -43.531, kind: "landmark" },
    { nameZh: "港丘缆车", nameEn: "Christchurch Gondola (Port Hills)", lon: 172.700, lat: -43.581, kind: "nature" },
    { nameZh: "国际南极中心", nameEn: "International Antarctic Centre", lon: 172.541, lat: -43.492, kind: "landmark" },
    { nameZh: "阿卡罗阿", nameEn: "Akaroa", lon: 172.966, lat: -43.804, kind: "district" },
  ],

  queenstown: [
    { nameZh: "天际缆车", nameEn: "Skyline Gondola", lon: 168.657, lat: -45.028, kind: "nature" },
    { nameZh: "瓦卡蒂普湖滨", nameEn: "Lake Wakatipu waterfront", lon: 168.661, lat: -45.033, kind: "nature" },
    { nameZh: "TSS 厄恩斯劳号", nameEn: "TSS Earnslaw", lon: 168.663, lat: -45.031, kind: "landmark" },
    { nameZh: "箭镇", nameEn: "Arrowtown", lon: 168.834, lat: -44.943, kind: "district" },
    { nameZh: "卓越山滑雪场", nameEn: "The Remarkables ski field", lon: 168.813, lat: -45.058, kind: "nature" },
    { nameZh: "格林诺奇", nameEn: "Glenorchy", lon: 168.383, lat: -44.847, kind: "nature" },
    { nameZh: "瓦纳卡", nameEn: "Wānaka", lon: 169.153, lat: -44.700, kind: "nature" },
  ],

  dunedin: [
    { nameZh: "八角广场", nameEn: "The Octagon", lon: 170.503, lat: -45.874, kind: "district" },
    { nameZh: "达尼丁火车站", nameEn: "Dunedin Railway Station", lon: 170.508, lat: -45.874, kind: "landmark" },
    { nameZh: "奥塔哥博物馆", nameEn: "Otago Museum", lon: 170.510, lat: -45.865, kind: "landmark" },
    { nameZh: "泰亚罗阿角（信天翁中心）", nameEn: "Taiaroa Head (Royal Albatross Centre)", lon: 170.727, lat: -45.775, kind: "nature" },
    { nameZh: "拉纳克城堡", nameEn: "Larnach Castle", lon: 170.669, lat: -45.850, kind: "landmark" },
    { nameZh: "鲍德温街", nameEn: "Baldwin Street", lon: 170.535, lat: -45.851, kind: "landmark" },
    { nameZh: "摩拉基大圆石", nameEn: "Moeraki Boulders", lon: 170.826, lat: -45.346, kind: "nature" },
  ],

  // ── 美国 ──
  "new-york": [
    { nameZh: "自由女神像", nameEn: "Statue of Liberty", lon: -74.0445, lat: 40.6892, kind: "landmark" },
    { nameZh: "中央公园", nameEn: "Central Park", lon: -73.9654, lat: 40.7829, kind: "nature" },
    { nameZh: "帝国大厦", nameEn: "Empire State Building", lon: -73.9857, lat: 40.7484, kind: "landmark" },
    { nameZh: "时代广场", nameEn: "Times Square", lon: -73.9855, lat: 40.7580, kind: "district" },
    { nameZh: "大都会艺术博物馆", nameEn: "Metropolitan Museum of Art", lon: -73.9632, lat: 40.7794, kind: "landmark" },
    { nameZh: "布鲁克林大桥", nameEn: "Brooklyn Bridge", lon: -73.9969, lat: 40.7061, kind: "landmark" },
    { nameZh: "9/11 国家纪念馆", nameEn: "9/11 Memorial", lon: -74.0134, lat: 40.7115, kind: "landmark" },
    { nameZh: "高线公园", nameEn: "The High Line", lon: -74.0048, lat: 40.7480, kind: "district" },
  ],
  "washington-dc": [
    { nameZh: "国会大厦", nameEn: "United States Capitol", lon: -77.0090, lat: 38.8899, kind: "landmark" },
    { nameZh: "华盛顿纪念碑", nameEn: "Washington Monument", lon: -77.0353, lat: 38.8895, kind: "landmark" },
    { nameZh: "林肯纪念堂", nameEn: "Lincoln Memorial", lon: -77.0502, lat: 38.8893, kind: "landmark" },
    { nameZh: "白宫", nameEn: "The White House", lon: -77.0365, lat: 38.8977, kind: "landmark" },
    { nameZh: "国家航空航天博物馆", nameEn: "National Air and Space Museum", lon: -77.0199, lat: 38.8882, kind: "landmark" },
    { nameZh: "非裔美国人历史文化博物馆", nameEn: "Nat'l Museum of African American History and Culture", lon: -77.0327, lat: 38.8911, kind: "landmark" },
    { nameZh: "阿灵顿国家公墓", nameEn: "Arlington National Cemetery", lon: -77.0724, lat: 38.8783, kind: "landmark" },
  ],
  chicago: [
    { nameZh: "云门（豆子）", nameEn: "Cloud Gate (the Bean)", lon: -87.6233, lat: 41.8827, kind: "landmark" },
    { nameZh: "千禧公园", nameEn: "Millennium Park", lon: -87.6218, lat: 41.8826, kind: "nature" },
    { nameZh: "威利斯大厦", nameEn: "Willis Tower", lon: -87.6359, lat: 41.8789, kind: "landmark" },
    { nameZh: "芝加哥艺术学院", nameEn: "Art Institute of Chicago", lon: -87.6237, lat: 41.8796, kind: "landmark" },
    { nameZh: "海军码头", nameEn: "Navy Pier", lon: -87.6006, lat: 41.8917, kind: "district" },
    { nameZh: "菲尔德自然史博物馆", nameEn: "Field Museum", lon: -87.6169, lat: 41.8663, kind: "landmark" },
    { nameZh: "湖滨步道", nameEn: "Lakefront Trail", lon: -87.6120, lat: 41.9000, kind: "nature" },
  ],
  "new-orleans": [
    { nameZh: "杰克逊广场", nameEn: "Jackson Square", lon: -90.0628, lat: 29.9574, kind: "district" },
    { nameZh: "圣路易斯大教堂", nameEn: "St Louis Cathedral", lon: -90.0634, lat: 29.9578, kind: "landmark" },
    { nameZh: "波旁街", nameEn: "Bourbon Street", lon: -90.0668, lat: 29.9590, kind: "district" },
    { nameZh: "弗兰奇曼街", nameEn: "Frenchmen Street", lon: -90.0575, lat: 29.9640, kind: "district" },
    { nameZh: "圣查尔斯有轨电车", nameEn: "St Charles Streetcar", lon: -90.0850, lat: 29.9330, kind: "transport" },
    { nameZh: "二战国家博物馆", nameEn: "National WWII Museum", lon: -90.0703, lat: 29.9430, kind: "landmark" },
    { nameZh: "城市公园", nameEn: "City Park", lon: -90.0960, lat: 29.9940, kind: "nature" },
  ],
  miami: [
    { nameZh: "南滩", nameEn: "South Beach", lon: -80.1300, lat: 25.7826, kind: "nature" },
    { nameZh: "装饰艺术历史区", nameEn: "Art Deco Historic District", lon: -80.1310, lat: 25.7810, kind: "district" },
    { nameZh: "小哈瓦那（第八街）", nameEn: "Little Havana (Calle Ocho)", lon: -80.2190, lat: 25.7650, kind: "district" },
    { nameZh: "维兹卡亚花园别墅", nameEn: "Vizcaya Museum and Gardens", lon: -80.2100, lat: 25.7443, kind: "landmark" },
    { nameZh: "温伍德壁画区", nameEn: "Wynwood Walls", lon: -80.1990, lat: 25.8010, kind: "district" },
    { nameZh: "大沼泽地国家公园（东入口）", nameEn: "Everglades NP (east entrance)", lon: -80.5540, lat: 25.3950, kind: "nature" },
  ],
  denver: [
    { nameZh: "联合车站", nameEn: "Union Station", lon: -105.0002, lat: 39.7530, kind: "transport" },
    { nameZh: "16 街", nameEn: "16th Street Mall", lon: -104.9903, lat: 39.7460, kind: "district" },
    { nameZh: "丹佛美术馆", nameEn: "Denver Art Museum", lon: -104.9897, lat: 39.7370, kind: "landmark" },
    { nameZh: "自然与科学博物馆", nameEn: "Museum of Nature and Science", lon: -104.9425, lat: 39.7475, kind: "landmark" },
    { nameZh: "红岩露天剧场", nameEn: "Red Rocks Amphitheatre", lon: -105.2056, lat: 39.6655, kind: "nature" },
    { nameZh: "落基山国家公园", nameEn: "Rocky Mountain National Park", lon: -105.6836, lat: 40.3428, kind: "nature" },
    { nameZh: "博尔德平顶山", nameEn: "Boulder Flatirons", lon: -105.2930, lat: 39.9880, kind: "nature" },
  ],
  "las-vegas": [
    { nameZh: "拉斯维加斯大道（Strip）", nameEn: "The Strip", lon: -115.1720, lat: 36.1100, kind: "district" },
    { nameZh: "弗里蒙特街体验", nameEn: "Fremont Street Experience", lon: -115.1440, lat: 36.1706, kind: "district" },
    { nameZh: "百乐宫喷泉", nameEn: "Fountains of Bellagio", lon: -115.1745, lat: 36.1126, kind: "landmark" },
    { nameZh: "High Roller 观景轮", nameEn: "High Roller", lon: -115.1680, lat: 36.1175, kind: "landmark" },
    { nameZh: "红岩峡谷", nameEn: "Red Rock Canyon", lon: -115.4270, lat: 36.1350, kind: "nature" },
    { nameZh: "胡佛大坝与米德湖", nameEn: "Hoover Dam & Lake Mead", lon: -114.7377, lat: 36.0161, kind: "nature" },
  ],
  "san-francisco": [
    { nameZh: "金门大桥", nameEn: "Golden Gate Bridge", lon: -122.4783, lat: 37.8199, kind: "landmark" },
    { nameZh: "渔人码头与 39 号码头", nameEn: "Fisherman's Wharf & Pier 39", lon: -122.4098, lat: 37.8087, kind: "district" },
    { nameZh: "恶魔岛", nameEn: "Alcatraz Island", lon: -122.4230, lat: 37.8267, kind: "landmark" },
    { nameZh: "九曲花街", nameEn: "Lombard Street", lon: -122.4187, lat: 37.8021, kind: "landmark" },
    { nameZh: "唐人街", nameEn: "Chinatown", lon: -122.4075, lat: 37.7941, kind: "district" },
    { nameZh: "金门公园", nameEn: "Golden Gate Park", lon: -122.4830, lat: 37.7694, kind: "nature" },
    { nameZh: "双子峰", nameEn: "Twin Peaks", lon: -122.4477, lat: 37.7544, kind: "nature" },
  ],
  "los-angeles": [
    { nameZh: "格里菲斯天文台", nameEn: "Griffith Observatory", lon: -118.3004, lat: 34.1184, kind: "landmark" },
    { nameZh: "好莱坞星光大道", nameEn: "Hollywood Walk of Fame", lon: -118.3410, lat: 34.1016, kind: "district" },
    { nameZh: "盖蒂中心", nameEn: "Getty Center", lon: -118.4750, lat: 34.0780, kind: "landmark" },
    { nameZh: "圣莫尼卡码头", nameEn: "Santa Monica Pier", lon: -118.4977, lat: 34.0089, kind: "nature" },
    { nameZh: "威尼斯海滩", nameEn: "Venice Beach", lon: -118.4695, lat: 33.9850, kind: "nature" },
    { nameZh: "洛杉矶郡艺术博物馆", nameEn: "LACMA", lon: -118.3590, lat: 34.0639, kind: "landmark" },
    { nameZh: "环球影城", nameEn: "Universal Studios Hollywood", lon: -118.3533, lat: 34.1381, kind: "landmark" },
  ],

  // ── 加拿大 ──
  toronto: [
    { nameZh: "CN 塔", nameEn: "CN Tower", lon: -79.3871, lat: 43.6426, kind: "landmark" },
    { nameZh: "多伦多群岛", nameEn: "Toronto Islands", lon: -79.3780, lat: 43.6220, kind: "nature" },
    { nameZh: "皇家安大略博物馆", nameEn: "Royal Ontario Museum", lon: -79.3947, lat: 43.6677, kind: "landmark" },
    { nameZh: "圣劳伦斯市场", nameEn: "St Lawrence Market", lon: -79.3716, lat: 43.6487, kind: "district" },
    { nameZh: "肯辛顿市场", nameEn: "Kensington Market", lon: -79.4008, lat: 43.6547, kind: "district" },
    { nameZh: "冰球名人堂", nameEn: "Hockey Hall of Fame", lon: -79.3777, lat: 43.6472, kind: "landmark" },
    { nameZh: "尼亚加拉瀑布", nameEn: "Niagara Falls", lon: -79.0747, lat: 43.0828, kind: "nature" },
  ],
  ottawa: [
    { nameZh: "国会山", nameEn: "Parliament Hill", lon: -75.7003, lat: 45.4236, kind: "landmark" },
    { nameZh: "里多运河", nameEn: "Rideau Canal", lon: -75.6900, lat: 45.4100, kind: "nature" },
    { nameZh: "加拿大国家美术馆", nameEn: "National Gallery of Canada", lon: -75.6989, lat: 45.4294, kind: "landmark" },
    { nameZh: "加拿大历史博物馆", nameEn: "Canadian Museum of History", lon: -75.7092, lat: 45.4297, kind: "landmark" },
    { nameZh: "拜沃德市场", nameEn: "ByWard Market", lon: -75.6925, lat: 45.4275, kind: "district" },
    { nameZh: "加拿大战争博物馆", nameEn: "Canadian War Museum", lon: -75.7166, lat: 45.4172, kind: "landmark" },
  ],
  montreal: [
    { nameZh: "圣母大教堂", nameEn: "Notre-Dame Basilica", lon: -73.5563, lat: 45.5045, kind: "landmark" },
    { nameZh: "老蒙特利尔与旧港", nameEn: "Old Montreal & Old Port", lon: -73.5533, lat: 45.5075, kind: "district" },
    { nameZh: "皇家山公园", nameEn: "Mount Royal Park", lon: -73.5878, lat: 45.5040, kind: "nature" },
    { nameZh: "让-塔隆市场", nameEn: "Jean-Talon Market", lon: -73.6150, lat: 45.5367, kind: "district" },
    { nameZh: "蒙特利尔美术博物馆", nameEn: "Montreal Museum of Fine Arts", lon: -73.5793, lat: 45.4986, kind: "landmark" },
    { nameZh: "奥林匹克公园与植物园", nameEn: "Olympic Park & Botanical Garden", lon: -73.5533, lat: 45.5590, kind: "landmark" },
  ],
  "quebec-city": [
    { nameZh: "芳堤娜城堡", nameEn: "Château Frontenac", lon: -71.2115, lat: 46.8118, kind: "landmark" },
    { nameZh: "达弗林平台", nameEn: "Dufferin Terrace", lon: -71.2050, lat: 46.8110, kind: "district" },
    { nameZh: "皇家广场与小尚普兰街", nameEn: "Place Royale & Petit-Champlain", lon: -71.2028, lat: 46.8130, kind: "district" },
    { nameZh: "星形要塞", nameEn: "La Citadelle", lon: -71.2075, lat: 46.8075, kind: "landmark" },
    { nameZh: "文明博物馆", nameEn: "Museum of Civilisation", lon: -71.2010, lat: 46.8145, kind: "landmark" },
    { nameZh: "蒙莫朗西瀑布", nameEn: "Montmorency Falls", lon: -71.1478, lat: 46.8905, kind: "nature" },
    { nameZh: "奥尔良岛", nameEn: "Île d'Orléans", lon: -71.0800, lat: 46.9200, kind: "nature" },
  ],
  halifax: [
    { nameZh: "城堡山要塞", nameEn: "Halifax Citadel", lon: -63.5806, lat: 44.6474, kind: "landmark" },
    { nameZh: "大西洋海事博物馆", nameEn: "Maritime Museum of the Atlantic", lon: -63.5710, lat: 44.6479, kind: "landmark" },
    { nameZh: "海滨步道", nameEn: "Halifax Waterfront Boardwalk", lon: -63.5690, lat: 44.6470, kind: "district" },
    { nameZh: "公共花园", nameEn: "Halifax Public Gardens", lon: -63.5825, lat: 44.6432, kind: "nature" },
    { nameZh: "佩吉湾灯塔", nameEn: "Peggys Cove Lighthouse", lon: -63.9160, lat: 44.4930, kind: "nature" },
  ],
  "st-johns": [
    { nameZh: "信号山", nameEn: "Signal Hill", lon: -52.6819, lat: 47.5706, kind: "nature" },
    { nameZh: "斯佩尔角", nameEn: "Cape Spear", lon: -52.6197, lat: 47.5236, kind: "nature" },
    { nameZh: "糖果色房子（水街一带）", nameEn: "Jellybean Row (Water St area)", lon: -52.7100, lat: 47.5650, kind: "district" },
    { nameZh: "省博物馆 The Rooms", nameEn: "The Rooms", lon: -52.7135, lat: 47.5678, kind: "landmark" },
    { nameZh: "乔治街", nameEn: "George Street", lon: -52.7108, lat: 47.5652, kind: "district" },
  ],
  winnipeg: [
    { nameZh: "加拿大人权博物馆", nameEn: "Canadian Museum for Human Rights", lon: -97.1305, lat: 49.8909, kind: "landmark" },
    { nameZh: "The Forks 市集", nameEn: "The Forks Market", lon: -97.1305, lat: 49.8880, kind: "district" },
    { nameZh: "曼尼托巴博物馆", nameEn: "Manitoba Museum", lon: -97.1380, lat: 49.9005, kind: "landmark" },
    { nameZh: "圣博尼法斯大教堂遗址", nameEn: "St Boniface Cathedral", lon: -97.1197, lat: 49.8895, kind: "landmark" },
    { nameZh: "阿西尼博因公园与动物园", nameEn: "Assiniboine Park & Zoo", lon: -97.2380, lat: 49.8720, kind: "nature" },
  ],
  calgary: [
    { nameZh: "卡尔加里塔", nameEn: "Calgary Tower", lon: -114.0631, lat: 51.0447, kind: "landmark" },
    { nameZh: "王子岛公园", nameEn: "Prince's Island Park", lon: -114.0700, lat: 51.0530, kind: "nature" },
    { nameZh: "Studio Bell 音乐中心", nameEn: "Studio Bell (National Music Centre)", lon: -114.0570, lat: 51.0435, kind: "landmark" },
    { nameZh: "遗产公园历史村", nameEn: "Heritage Park Historical Village", lon: -114.1000, lat: 50.9880, kind: "landmark" },
    { nameZh: "牛仔节场地（马术公园）", nameEn: "Stampede Park", lon: -114.0530, lat: 51.0370, kind: "district" },
    { nameZh: "班夫国家公园", nameEn: "Banff National Park", lon: -115.5708, lat: 51.1784, kind: "nature" },
  ],
  edmonton: [
    { nameZh: "西埃德蒙顿购物中心", nameEn: "West Edmonton Mall", lon: -113.6236, lat: 53.5225, kind: "landmark" },
    { nameZh: "阿尔伯塔省议会大厦", nameEn: "Alberta Legislature", lon: -113.5065, lat: 53.5334, kind: "landmark" },
    { nameZh: "北萨斯喀彻温河谷步道", nameEn: "River Valley trails", lon: -113.5000, lat: 53.5300, kind: "nature" },
    { nameZh: "皇家阿尔伯塔博物馆", nameEn: "Royal Alberta Museum", lon: -113.4930, lat: 53.5460, kind: "landmark" },
    { nameZh: "老斯特拉思科纳", nameEn: "Old Strathcona", lon: -113.5010, lat: 53.5185, kind: "district" },
    { nameZh: "埃尔克岛国家公园", nameEn: "Elk Island National Park", lon: -112.8580, lat: 53.6000, kind: "nature" },
  ],
  vancouver: [
    { nameZh: "斯坦利公园海堤", nameEn: "Stanley Park Seawall", lon: -123.1420, lat: 49.3010, kind: "nature" },
    { nameZh: "格兰维尔岛市集", nameEn: "Granville Island", lon: -123.1352, lat: 49.2710, kind: "district" },
    { nameZh: "煤气镇蒸汽钟", nameEn: "Gastown Steam Clock", lon: -123.1089, lat: 49.2844, kind: "landmark" },
    { nameZh: "卡皮拉诺吊桥", nameEn: "Capilano Suspension Bridge", lon: -123.1147, lat: 49.3428, kind: "nature" },
    { nameZh: "格劳斯山缆车", nameEn: "Grouse Mountain", lon: -123.0817, lat: 49.3800, kind: "nature" },
    { nameZh: "固兰湖岛（福溪）", nameEn: "False Creek", lon: -123.1150, lat: 49.2720, kind: "nature" },
    { nameZh: "惠斯勒", nameEn: "Whistler", lon: -122.9574, lat: 50.1163, kind: "nature" },
  ],
};

export function getCityPois(cityId: string): CityPoi[] {
  return POIS_BY_CITY[cityId] ?? [];
}
