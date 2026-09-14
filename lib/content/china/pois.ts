import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
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
    { nameZh: "东方明珠塔", nameEn: "Oriental Pearl Tower", lon: 121.4947, lat: 31.2417, kind: "landmark" },
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

  // ── 中国 · Tier 1 缺口补齐城市 ──
  fuzhou: [
    { nameZh: "三坊七巷", nameEn: "Sanfang Qixiang", lon: 119.2911, lat: 26.0797, kind: "district" },
    { nameZh: "西湖公园", nameEn: "West Lake Park", lon: 119.2870, lat: 26.0896, kind: "nature" },
    { nameZh: "鼓山·涌泉寺", nameEn: "Gushan & Yongquan Temple", lon: 119.4283, lat: 26.0833, kind: "landmark" },
    { nameZh: "于山", nameEn: "Yushan", lon: 119.3050, lat: 26.0765, kind: "nature" },
    { nameZh: "烟台山历史文化风貌区", nameEn: "Yantai Mountain Historic Quarter", lon: 119.3103, lat: 26.0611, kind: "district" },
  ],

  jinan: [
    { nameZh: "趵突泉", nameEn: "Baotu Spring", lon: 117.0094, lat: 36.6607, kind: "landmark" },
    { nameZh: "大明湖", nameEn: "Daming Lake", lon: 117.0206, lat: 36.6675, kind: "nature" },
    { nameZh: "千佛山", nameEn: "Thousand Buddha Mountain", lon: 117.0453, lat: 36.6394, kind: "nature" },
    { nameZh: "芙蓉街", nameEn: "Furong Street", lon: 117.0086, lat: 36.6636, kind: "district" },
  ],

  changsha: [
    { nameZh: "岳麓山", nameEn: "Yuelu Mountain", lon: 112.9319, lat: 28.1922, kind: "nature" },
    { nameZh: "岳麓书院", nameEn: "Yuelu Academy", lon: 112.9364, lat: 28.1811, kind: "landmark" },
    { nameZh: "橘子洲头", nameEn: "Juzizhou", lon: 112.9697, lat: 28.1917, kind: "nature" },
    { nameZh: "太平街", nameEn: "Taiping Street", lon: 112.9772, lat: 28.1928, kind: "district" },
    { nameZh: "湖南省博物馆", nameEn: "Hunan Museum", lon: 112.9868, lat: 28.2183, kind: "landmark" },
  ],

  nanning: [
    { nameZh: "青秀山风景区", nameEn: "Qingxiushan", lon: 108.3845, lat: 22.7898, kind: "nature" },
    { nameZh: "广西民族博物馆", nameEn: "Guangxi Museum of Nationalities", lon: 108.3853, lat: 22.7910, kind: "landmark" },
    { nameZh: "三街两巷", nameEn: "Sanjie Liangxiang", lon: 108.3172, lat: 22.8172, kind: "district" },
    { nameZh: "民歌湖", nameEn: "Minge Lake", lon: 108.3389, lat: 22.8106, kind: "nature" },
  ],

  haikou: [
    { nameZh: "骑楼老街", nameEn: "Qilou Old Street", lon: 110.3211, lat: 20.0447, kind: "district" },
    { nameZh: "石山火山群国家地质公园", nameEn: "Shishan Volcano Cluster Geopark", lon: 110.1211, lat: 19.9686, kind: "nature" },
    { nameZh: "假日海滩", nameEn: "Holiday Beach", lon: 110.2589, lat: 20.0356, kind: "nature" },
    { nameZh: "东寨港红树林自然保护区", nameEn: "Dongzhaigang Mangrove Reserve", lon: 110.5828, lat: 19.9450, kind: "nature" },
  ],

  lanzhou: [
    { nameZh: "中山桥", nameEn: "Zhongshan Bridge", lon: 103.8256, lat: 36.0672, kind: "landmark" },
    { nameZh: "白塔山公园", nameEn: "White Pagoda Hill Park", lon: 103.8256, lat: 36.0706, kind: "nature" },
    { nameZh: "黄河母亲雕塑", nameEn: "Mother River Sculpture", lon: 103.8106, lat: 36.0592, kind: "landmark" },
    { nameZh: "五泉山公园", nameEn: "Wuquan Mountain Park", lon: 103.8267, lat: 36.0417, kind: "nature" },
  ],

  // ── 中国 · Tier 2 热门城市批1 ──
  dalian: [
    { nameZh: "中山广场", nameEn: "Zhongshan Square", lon: 121.6515, lat: 38.9168, kind: "landmark" },
    { nameZh: "星海广场", nameEn: "Xinghai Square", lon: 121.5952, lat: 38.9046, kind: "landmark" },
    { nameZh: "老虎滩海洋公园", nameEn: "Laohutan Ocean Park", lon: 121.6711, lat: 38.8714, kind: "nature" },
    { nameZh: "金石滩", nameEn: "Jinshitan (Golden Pebble Beach)", lon: 122.12, lat: 39.05, kind: "nature" },
  ],

  ningbo: [
    { nameZh: "天一阁", nameEn: "Tianyi Pavilion", lon: 121.5500, lat: 29.8700, kind: "landmark" },
    { nameZh: "月湖", nameEn: "Moon Lake", lon: 121.5490, lat: 29.8705, kind: "nature" },
    { nameZh: "老外滩", nameEn: "Old Bund (Sanjiangkou)", lon: 121.5590, lat: 29.8790, kind: "district" },
    { nameZh: "东钱湖", nameEn: "Dongqian Lake", lon: 121.6670, lat: 29.7667, kind: "nature" },
  ],

  suzhou: [
    { nameZh: "拙政园", nameEn: "Humble Administrator's Garden", lon: 120.6256, lat: 31.3267, kind: "landmark" },
    { nameZh: "留园", nameEn: "Lingering Garden", lon: 120.5881, lat: 31.3175, kind: "landmark" },
    { nameZh: "平江路", nameEn: "Pingjiang Road", lon: 120.6350, lat: 31.3150, kind: "district" },
    { nameZh: "山塘街", nameEn: "Shantang Street", lon: 120.5990, lat: 31.3230, kind: "district" },
  ],

  luoyang: [
    { nameZh: "龙门石窟", nameEn: "Longmen Grottoes", lon: 112.4697, lat: 34.5556, kind: "landmark" },
    { nameZh: "白马寺", nameEn: "White Horse Temple", lon: 112.5997, lat: 34.7239, kind: "landmark" },
    { nameZh: "隋唐洛阳城国家遗址公园", nameEn: "Sui-Tang Luoyang City Archaeological Park", lon: 112.459, lat: 34.615, kind: "landmark" },
    { nameZh: "洛阳博物馆", nameEn: "Luoyang Museum", lon: 112.4601, lat: 34.6635, kind: "landmark" },
  ],

  datong: [
    { nameZh: "云冈石窟", nameEn: "Yungang Grottoes", lon: 113.1259, lat: 40.1105, kind: "landmark" },
    { nameZh: "悬空寺", nameEn: "Hanging Temple", lon: 113.7050, lat: 39.6658, kind: "landmark" },
    { nameZh: "大同古城墙", nameEn: "Datong City Walls", lon: 113.295, lat: 40.090, kind: "landmark" },
    { nameZh: "九龙壁", nameEn: "Nine Dragon Screen", lon: 113.298, lat: 40.086, kind: "landmark" },
  ],

  huangshan: [
    { nameZh: "屯溪老街", nameEn: "Tunxi Old Street", lon: 118.3153, lat: 29.6961, kind: "district" },
    { nameZh: "黄山风景区", nameEn: "Mount Huangshan Scenic Area", lon: 118.1667, lat: 30.1250, kind: "nature" },
    { nameZh: "宏村", nameEn: "Hongcun", lon: 117.9905, lat: 30.0033, kind: "district" },
    { nameZh: "西递", nameEn: "Xidi", lon: 117.9960, lat: 29.9033, kind: "district" },
  ],

  quanzhou: [
    { nameZh: "开元寺", nameEn: "Kaiyuan Temple", lon: 118.5810, lat: 24.9168, kind: "landmark" },
    { nameZh: "洛阳桥", nameEn: "Luoyang Bridge", lon: 118.6762, lat: 24.9545, kind: "landmark" },
    { nameZh: "天后宫", nameEn: "Tianhou Temple", lon: 118.586, lat: 24.905, kind: "landmark" },
    { nameZh: "清净寺", nameEn: "Qingjing Mosque", lon: 118.5908, lat: 24.9028, kind: "landmark" },
  ],

  zhangye: [
    { nameZh: "张掖丹霞地质公园", nameEn: "Zhangye Danxia Geopark", lon: 100.1332, lat: 38.9155, kind: "nature" },
    { nameZh: "大佛寺", nameEn: "Giant Buddha Temple", lon: 100.4542, lat: 38.9300, kind: "landmark" },
    { nameZh: "镇远楼", nameEn: "Zhenyuan Tower", lon: 100.4499, lat: 38.9248, kind: "landmark" },
    { nameZh: "黑河湿地国家级自然保护区", nameEn: "Heihe Wetland National Nature Reserve", lon: 100.48, lat: 39.05, kind: "nature" },
  ],

  // ── 中国 · Tier 2 热门城市批2 ──
  wenzhou: [
    { nameZh: "江心屿", nameEn: "Jiangxin Island", lon: 120.6319, lat: 28.0300, kind: "nature" },
    { nameZh: "五马街历史文化街区", nameEn: "Wuma Street", lon: 120.6650, lat: 28.0150, kind: "district" },
    { nameZh: "雁荡山", nameEn: "Yandang Mountain", lon: 120.6500, lat: 28.3400, kind: "nature" },
    { nameZh: "温州博物馆", nameEn: "Wenzhou Museum", lon: 120.7000, lat: 28.0000, kind: "landmark" },
  ],

  yangzhou: [
    { nameZh: "瘦西湖", nameEn: "Slender West Lake", lon: 119.4175, lat: 32.4100, kind: "nature" },
    { nameZh: "个园", nameEn: "Ge Garden", lon: 119.4350, lat: 32.4050, kind: "landmark" },
    { nameZh: "何园", nameEn: "He Garden", lon: 119.4450, lat: 32.3950, kind: "landmark" },
    { nameZh: "中国大运河博物馆", nameEn: "China Grand Canal Museum", lon: 119.4450, lat: 32.3700, kind: "landmark" },
  ],

  zhuhai: [
    { nameZh: "珠海渔女（情侣路）", nameEn: "Zhuhai Fisher Girl Statue (Lovers' Road)", lon: 113.5832, lat: 22.2654, kind: "landmark" },
    { nameZh: "长隆海洋王国", nameEn: "Chimelong Ocean Kingdom (Hengqin)", lon: 113.5461, lat: 22.1189, kind: "landmark" },
    { nameZh: "港珠澳大桥珠海口岸", nameEn: "Hong Kong–Zhuhai–Macao Bridge Zhuhai Port", lon: 113.5589, lat: 22.1089, kind: "transport" },
  ],

  chengde: [
    { nameZh: "避暑山庄", nameEn: "Chengde Mountain Resort", lon: 117.9375, lat: 40.9875, kind: "landmark" },
    { nameZh: "普宁寺", nameEn: "Puning Temple", lon: 117.9550, lat: 41.0050, kind: "landmark" },
    { nameZh: "普陀宗乘之庙", nameEn: "Putuo Zongcheng Temple", lon: 117.9580, lat: 41.0080, kind: "landmark" },
    { nameZh: "磬锤峰", nameEn: "Sledgehammer Peak (Bangchui Mountain)", lon: 118.0000, lat: 40.9800, kind: "nature" },
  ],

  wuyishan: [
    { nameZh: "九曲溪", nameEn: "Nine-Bend River", lon: 118.0000, lat: 27.6800, kind: "nature" },
    { nameZh: "九龙窠大红袍景区", nameEn: "Jiulongke Da Hong Pao Mother Trees", lon: 117.9800, lat: 27.7300, kind: "landmark" },
    { nameZh: "天游峰", nameEn: "Tianyou Peak", lon: 117.9800, lat: 27.7000, kind: "nature" },
  ],

  jingdezhen: [
    { nameZh: "陶溪川文创街区", nameEn: "Taoxichuan Ceramic Art Avenue", lon: 117.2000, lat: 29.2800, kind: "district" },
    { nameZh: "古窑民俗博览区", nameEn: "Ancient Kiln Folk Custom Museum", lon: 117.1700, lat: 29.2600, kind: "landmark" },
    { nameZh: "中国陶瓷博物馆", nameEn: "China Ceramics Museum", lon: 117.1900, lat: 29.3000, kind: "landmark" },
    { nameZh: "御窑厂国家考古遗址公园", nameEn: "Imperial Kiln Museum & Archaeological Site", lon: 117.2050, lat: 29.2930, kind: "landmark" },
  ],

  jinghong: [
    { nameZh: "野象谷", nameEn: "Wild Elephant Valley", lon: 100.8420, lat: 22.1750, kind: "nature" },
    { nameZh: "曼听公园", nameEn: "Manting Park", lon: 100.8150, lat: 21.9950, kind: "landmark" },
    { nameZh: "傣族园（橄榄坝）", nameEn: "Dai Minority Park (Ganlanba)", lon: 100.9900, lat: 21.9500, kind: "district" },
  ],

  wuxi: [
    { nameZh: "鼋头渚", nameEn: "Yuantouzhu (Turtle Head Isle)", lon: 120.1167, lat: 31.5167, kind: "nature" },
    { nameZh: "灵山大佛", nameEn: "Lingshan Giant Buddha", lon: 120.0864, lat: 31.4256, kind: "landmark" },
    { nameZh: "惠山古镇", nameEn: "Huishan Ancient Town", lon: 120.2856, lat: 31.5814, kind: "district" },
    { nameZh: "清名桥历史文化街区", nameEn: "Qingming Bridge Historic District", lon: 120.3072, lat: 31.5647, kind: "district" },
  ],

  // ── 中国 · 南疆绿洲聚落 ──
  kashgar: [
    { nameZh: "艾提尕尔清真寺", nameEn: "Id Kah Mosque", lon: 75.9895, lat: 39.4713, kind: "landmark" },
    { nameZh: "喀什老城·高台民居", nameEn: "Kashgar Old Town (Gaotai)", lon: 75.9930, lat: 39.4740, kind: "district" },
    { nameZh: "中西亚国际大巴扎", nameEn: "Kashgar International Grand Bazaar", lon: 76.0080, lat: 39.4830, kind: "landmark" },
    { nameZh: "喀什牛羊大巴扎", nameEn: "Kashgar Livestock Bazaar", lon: 75.9300, lat: 39.4300, kind: "landmark" },
    { nameZh: "卡拉库里湖", nameEn: "Lake Karakul", lon: 75.0500, lat: 38.4170, kind: "nature" },
  ],
  hotan: [
    { nameZh: "和田大巴扎", nameEn: "Hotan Bazaar", lon: 79.9500, lat: 37.1300, kind: "landmark" },
    { nameZh: "玉龙喀什河（白玉河）", nameEn: "Yurungkash River (White Jade River)", lon: 79.9800, lat: 37.1000, kind: "nature" },
    { nameZh: "和田地区博物馆", nameEn: "Hotan Prefecture Museum", lon: 79.9250, lat: 37.1150, kind: "landmark" },
  ],
  turpan: [
    { nameZh: "交河故城", nameEn: "Ruins of Jiaohe", lon: 89.0653, lat: 42.9497, kind: "landmark" },
    { nameZh: "高昌故城", nameEn: "Ruins of Gaochang", lon: 89.5267, lat: 42.8528, kind: "landmark" },
    { nameZh: "葡萄沟", nameEn: "Grape Valley", lon: 89.2700, lat: 43.0200, kind: "nature" },
    { nameZh: "火焰山", nameEn: "Flaming Mountains", lon: 89.3567, lat: 42.9599, kind: "nature" },
    { nameZh: "柏孜克里克千佛洞", nameEn: "Bezeklik Thousand Buddha Caves", lon: 89.5670, lat: 42.8830, kind: "landmark" },
  ],
  bachu: [
    { nameZh: "巴楚胡杨林", nameEn: "Bachu Wild Poplar Forest", lon: 78.6000, lat: 39.8200, kind: "nature" },
  ],

  // ── 中国 · Tier 2 批3（9 省缺口）──
  hulunbuir: [
    { nameZh: "莫日格勒河", nameEn: "Morigele River", lon: 119.900, lat: 49.560, kind: "nature" },
    { nameZh: "呼伦湖", nameEn: "Hulun Lake", lon: 117.500, lat: 48.900, kind: "nature" },
    { nameZh: "金帐汗蒙古部落", nameEn: "Jindaohan Mongol Encampment", lon: 119.870, lat: 49.520, kind: "landmark" },
    { nameZh: "室韦俄罗斯族民族乡", nameEn: "Shiwei Russian Ethnic Township", lon: 120.190, lat: 50.660, kind: "district" },
  ],
  "jilin-city": [
    { nameZh: "雾凇岛（韩屯）", nameEn: "Rime Ice Island (Hantun)", lon: 126.700, lat: 44.020, kind: "nature" },
    { nameZh: "松花湖", nameEn: "Songhua Lake", lon: 126.500, lat: 43.600, kind: "nature" },
    { nameZh: "北山公园", nameEn: "Beishan Park", lon: 126.540, lat: 43.845, kind: "landmark" },
    { nameZh: "乌拉街满族镇", nameEn: "Ula Street Manchu Township", lon: 126.710, lat: 44.070, kind: "district" },
  ],
  mohe: [
    { nameZh: "北极村", nameEn: "Beiji (Arctic) Village", lon: 122.350, lat: 53.470, kind: "landmark" },
    { nameZh: "洛古河村", nameEn: "Luoguhe Village", lon: 121.500, lat: 53.450, kind: "district" },
    { nameZh: "漠河松苑原始生态公园", nameEn: "Mohe Songyuan Primeval Ecological Park", lon: 122.540, lat: 52.980, kind: "nature" },
  ],
  yichang: [
    { nameZh: "三峡大坝", nameEn: "Three Gorges Dam", lon: 111.000, lat: 30.820, kind: "landmark" },
    { nameZh: "三峡人家风景区", nameEn: "Three Gorges Renjia Scenic Area", lon: 110.870, lat: 30.910, kind: "nature" },
    { nameZh: "车溪民俗风景区", nameEn: "Chexi Folk-Culture Scenic Area", lon: 111.100, lat: 30.650, kind: "district" },
  ],
  leshan: [
    { nameZh: "乐山大佛", nameEn: "Leshan Giant Buddha", lon: 103.7717, lat: 29.5453, kind: "landmark" },
    { nameZh: "凌云山·乌尤山", nameEn: "Lingyun & Wuyou Hills", lon: 103.7700, lat: 29.5480, kind: "nature" },
    { nameZh: "峨眉山金顶", nameEn: "Mount Emei Golden Summit", lon: 103.3340, lat: 29.5200, kind: "nature" },
  ],
  kaili: [
    { nameZh: "西江千户苗寨", nameEn: "Xijiang Qianhu Miao Village", lon: 108.1710, lat: 26.5780, kind: "district" },
    { nameZh: "镇远古镇", nameEn: "Zhenyuan Ancient Town", lon: 108.4260, lat: 27.0510, kind: "district" },
    { nameZh: "凯里民族风情园", nameEn: "Kaili Ethnic Culture Park", lon: 107.9800, lat: 26.5800, kind: "landmark" },
  ],
  yanan: [
    { nameZh: "宝塔山", nameEn: "Baota (Pagoda) Hill", lon: 109.4973, lat: 36.5935, kind: "landmark" },
    { nameZh: "延安革命纪念馆", nameEn: "Yan'an Revolutionary Memorial Hall", lon: 109.4900, lat: 36.6100, kind: "landmark" },
    { nameZh: "枣园革命旧址", nameEn: "Zaoyuan Revolutionary Site", lon: 109.4400, lat: 36.6200, kind: "landmark" },
    { nameZh: "杨家岭革命旧址", nameEn: "Yangjialing Revolutionary Site", lon: 109.4400, lat: 36.6300, kind: "landmark" },
    { nameZh: "壶口瀑布", nameEn: "Hukou Waterfall", lon: 110.4967, lat: 36.1050, kind: "nature" },
  ],
  golmud: [
    { nameZh: "察尔汗盐湖", nameEn: "Qarhan Salt Lake", lon: 94.900, lat: 36.850, kind: "nature" },
    { nameZh: "昆仑山口", nameEn: "Kunlun Pass", lon: 94.080, lat: 35.650, kind: "nature" },
    { nameZh: "纳赤台·昆仑神泉", nameEn: "Nachitai / Kunlun Spring", lon: 94.700, lat: 36.000, kind: "nature" },
  ],
  zhongwei: [
    { nameZh: "沙坡头", nameEn: "Shapotou", lon: 104.950, lat: 37.507, kind: "nature" },
    { nameZh: "黄河宿集", nameEn: "Yellow River Sunkist", lon: 105.050, lat: 37.530, kind: "landmark" },
    { nameZh: "腾格里沙漠星星酒店", nameEn: "Tengger Desert Star Hotel", lon: 104.900, lat: 37.600, kind: "landmark" },
    { nameZh: "南长滩村", nameEn: "Nanchangtan Village", lon: 104.300, lat: 37.060, kind: "district" },
  ],

  // 批5（2026-09-05）：各省重点城市
  dali: [
    { nameZh: "大理古城", nameEn: "Dali Old Town", lon: 100.1613, lat: 25.6927, kind: "district" },
    { nameZh: "崇圣寺三塔", nameEn: "Three Pagodas of Chongsheng Temple", lon: 100.1490, lat: 25.7060, kind: "landmark" },
    { nameZh: "洱海", nameEn: "Erhai Lake", lon: 100.1900, lat: 25.7900, kind: "nature" },
    { nameZh: "苍山", nameEn: "Cangshan Mountains", lon: 100.0900, lat: 25.6800, kind: "nature" },
    { nameZh: "喜洲古镇", nameEn: "Xizhou Ancient Town", lon: 100.1430, lat: 25.8600, kind: "district" },
    { nameZh: "双廊", nameEn: "Shuanglang", lon: 100.1960, lat: 25.9020, kind: "district" },
  ],
  "shangri-la": [
    { nameZh: "独克宗古城", nameEn: "Dukezong Old Town", lon: 99.7075, lat: 27.8180, kind: "district" },
    { nameZh: "松赞林寺", nameEn: "Songzanlin Monastery", lon: 99.7180, lat: 27.8570, kind: "landmark" },
    { nameZh: "普达措国家公园", nameEn: "Potatso National Park", lon: 99.9500, lat: 27.9000, kind: "nature" },
    { nameZh: "纳帕海", nameEn: "Napa Lake", lon: 99.6300, lat: 27.9000, kind: "nature" },
    { nameZh: "虎跳峡", nameEn: "Tiger Leaping Gorge", lon: 100.1300, lat: 27.2200, kind: "nature" },
  ],
  kaifeng: [
    { nameZh: "清明上河园", nameEn: "Millennium City Park", lon: 114.3480, lat: 34.8040, kind: "landmark" },
    { nameZh: "开封府", nameEn: "Kaifeng Prefecture Yamen", lon: 114.3600, lat: 34.8020, kind: "landmark" },
    { nameZh: "龙亭公园", nameEn: "Dragon Pavilion Park", lon: 114.3480, lat: 34.8010, kind: "landmark" },
    { nameZh: "铁塔公园", nameEn: "Iron Pagoda Park", lon: 114.3700, lat: 34.8080, kind: "landmark" },
    { nameZh: "大相国寺", nameEn: "Daxiangguo Temple", lon: 114.3480, lat: 34.7890, kind: "landmark" },
    { nameZh: "鼓楼夜市", nameEn: "Drum Tower Night Market", lon: 114.3520, lat: 34.7950, kind: "district" },
  ],
  pingyao: [
    { nameZh: "平遥古城墙", nameEn: "Pingyao City Walls", lon: 112.1744, lat: 37.2014, kind: "landmark" },
    { nameZh: "日升昌票号", nameEn: "Rishengchang Draft Bank", lon: 112.1700, lat: 37.2020, kind: "landmark" },
    { nameZh: "平遥县衙", nameEn: "Pingyao County Yamen", lon: 112.1740, lat: 37.1990, kind: "landmark" },
    { nameZh: "双林寺", nameEn: "Shuanglin Temple", lon: 112.1130, lat: 37.1880, kind: "landmark" },
    { nameZh: "镇国寺", nameEn: "Zhenguo Temple", lon: 112.2750, lat: 37.2560, kind: "landmark" },
  ],
  qufu: [
    { nameZh: "孔庙", nameEn: "Temple of Confucius", lon: 116.9820, lat: 35.5960, kind: "landmark" },
    { nameZh: "孔府", nameEn: "Kong Family Mansion", lon: 116.9870, lat: 35.5975, kind: "landmark" },
    { nameZh: "孔林", nameEn: "Cemetery of Confucius", lon: 116.9870, lat: 35.6180, kind: "landmark" },
    { nameZh: "尼山圣境", nameEn: "Nishan Sacred Land", lon: 117.2100, lat: 35.4500, kind: "landmark" },
    { nameZh: "曲阜东站", nameEn: "Qufu East Railway Station", lon: 117.0350, lat: 35.5560, kind: "transport" },
  ],
  taian: [
    { nameZh: "岱庙", nameEn: "Dai Temple", lon: 117.1244, lat: 36.1917, kind: "landmark" },
    { nameZh: "红门", nameEn: "Red Gate", lon: 117.1180, lat: 36.2110, kind: "landmark" },
    { nameZh: "中天门", nameEn: "Zhongtian Gate", lon: 117.1100, lat: 36.2380, kind: "landmark" },
    { nameZh: "南天门", nameEn: "South Heavenly Gate", lon: 117.1070, lat: 36.2520, kind: "landmark" },
    { nameZh: "玉皇顶", nameEn: "Jade Emperor Peak", lon: 117.1060, lat: 36.2560, kind: "nature" },
  ],
  yantai: [
    { nameZh: "烟台山", nameEn: "Yantai Hill", lon: 121.3970, lat: 37.5450, kind: "landmark" },
    { nameZh: "蓬莱阁", nameEn: "Penglai Pavilion", lon: 120.7440, lat: 37.8290, kind: "landmark" },
    { nameZh: "养马岛", nameEn: "Yangma Island", lon: 121.6000, lat: 37.4720, kind: "nature" },
    { nameZh: "张裕酒文化博物馆", nameEn: "Changyu Wine Culture Museum", lon: 121.3950, lat: 37.5380, kind: "landmark" },
    { nameZh: "第一海水浴场", nameEn: "No.1 Bathing Beach", lon: 121.4150, lat: 37.5300, kind: "nature" },
  ],
  qinhuangdao: [
    { nameZh: "山海关", nameEn: "Shanhai Pass", lon: 119.7530, lat: 40.0100, kind: "landmark" },
    { nameZh: "老龙头", nameEn: "Old Dragon's Head", lon: 119.7960, lat: 39.9670, kind: "landmark" },
    { nameZh: "北戴河", nameEn: "Beidaihe", lon: 119.4850, lat: 39.8250, kind: "district" },
    { nameZh: "鸽子窝公园", nameEn: "Pigeon Nest Park", lon: 119.5200, lat: 39.8380, kind: "nature" },
    { nameZh: "阿那亚", nameEn: "Aranya", lon: 119.3280, lat: 39.6430, kind: "district" },
  ],
  yanji: [
    { nameZh: "中国朝鲜族民俗园", nameEn: "Chinese Korean Folk Village", lon: 129.4550, lat: 42.8890, kind: "landmark" },
    { nameZh: "帽儿山国家森林公园", nameEn: "Mao'er Mountain National Forest Park", lon: 129.5000, lat: 42.8700, kind: "nature" },
    { nameZh: "布尔哈通河", nameEn: "Burhatong River", lon: 129.5100, lat: 42.9000, kind: "nature" },
    { nameZh: "延吉西市场", nameEn: "Yanji West Market", lon: 129.4960, lat: 42.9040, kind: "district" },
    { nameZh: "长白山北坡（二道白河）", nameEn: "Changbai Mountain North Slope (Erdaobaihe)", lon: 128.1000, lat: 42.4200, kind: "nature" },
  ],
  nyingchi: [
    { nameZh: "尼洋河", nameEn: "Nyang River", lon: 94.3600, lat: 29.6600, kind: "nature" },
    { nameZh: "巴松措", nameEn: "Basum Tso", lon: 93.9500, lat: 30.0200, kind: "nature" },
    { nameZh: "鲁朗", nameEn: "Lulang", lon: 94.7300, lat: 29.7700, kind: "district" },
    { nameZh: "雅鲁藏布大峡谷（派镇）", nameEn: "Yarlung Tsangpo Grand Canyon (Pai)", lon: 94.9400, lat: 29.4900, kind: "nature" },
    { nameZh: "南迦巴瓦峰", nameEn: "Namcha Barwa", lon: 95.0550, lat: 29.6300, kind: "nature" },
  ],
  zunyi: [
    { nameZh: "遵义会议会址", nameEn: "Zunyi Conference Site", lon: 106.9210, lat: 27.7080, kind: "landmark" },
    { nameZh: "海龙屯", nameEn: "Hailongtun", lon: 106.8100, lat: 27.8800, kind: "landmark" },
    { nameZh: "娄山关", nameEn: "Loushan Pass", lon: 106.9000, lat: 28.0500, kind: "nature" },
    { nameZh: "赤水丹霞（赤水市）", nameEn: "Chishui Danxia", lon: 105.7000, lat: 28.4500, kind: "nature" },
    { nameZh: "茅台镇", nameEn: "Maotai Town", lon: 106.3700, lat: 27.8500, kind: "district" },
  ],
  shantou: [
    { nameZh: "小公园开埠区", nameEn: "Xiaogongyuan Historic District", lon: 116.6830, lat: 23.3540, kind: "district" },
    { nameZh: "汕头开埠文化陈列馆", nameEn: "Shantou Port-Opening Museum", lon: 116.6800, lat: 23.3530, kind: "landmark" },
    { nameZh: "南澳岛", nameEn: "Nan'ao Island", lon: 117.0300, lat: 23.4200, kind: "nature" },
    { nameZh: "汕头大学", nameEn: "Shantou University", lon: 116.6200, lat: 23.4300, kind: "landmark" },
    { nameZh: "礐石风景区", nameEn: "Queshi Scenic Area", lon: 116.6800, lat: 23.3350, kind: "nature" },
  ],
  chaozhou: [
    { nameZh: "广济桥", nameEn: "Guangji Bridge", lon: 116.6350, lat: 23.6600, kind: "landmark" },
    { nameZh: "牌坊街", nameEn: "Paifang Street", lon: 116.6250, lat: 23.6570, kind: "district" },
    { nameZh: "开元寺", nameEn: "Kaiyuan Temple", lon: 116.6270, lat: 23.6560, kind: "landmark" },
    { nameZh: "韩文公祠", nameEn: "Han Yu Memorial Temple", lon: 116.6420, lat: 23.6640, kind: "landmark" },
    { nameZh: "广济门城楼", nameEn: "Guangji Gate Tower", lon: 116.6320, lat: 23.6590, kind: "landmark" },
  ],
  shaoxing: [
    { nameZh: "鲁迅故里", nameEn: "Lu Xun's Hometown", lon: 120.5860, lat: 29.9970, kind: "landmark" },
    { nameZh: "沈园", nameEn: "Shen Garden", lon: 120.5900, lat: 29.9990, kind: "landmark" },
    { nameZh: "兰亭", nameEn: "Orchid Pavilion", lon: 120.5100, lat: 29.9400, kind: "landmark" },
    { nameZh: "东湖", nameEn: "East Lake", lon: 120.6500, lat: 30.0100, kind: "nature" },
    { nameZh: "大禹陵", nameEn: "Mausoleum of Yu the Great", lon: 120.6100, lat: 29.9700, kind: "landmark" },
    { nameZh: "安昌古镇", nameEn: "Anchang Ancient Town", lon: 120.4400, lat: 30.0900, kind: "district" },
  ],
  beihai: [
    { nameZh: "北海银滩", nameEn: "Beihai Silver Beach", lon: 109.1700, lat: 21.4200, kind: "nature" },
    { nameZh: "北海老街", nameEn: "Beihai Old Street (Zhuhai Road)", lon: 109.1100, lat: 21.4850, kind: "district" },
    { nameZh: "涠洲岛", nameEn: "Weizhou Island", lon: 109.1200, lat: 21.0400, kind: "nature" },
    { nameZh: "金海湾红树林", nameEn: "Jinhaiwan Mangrove Reserve", lon: 109.2200, lat: 21.4300, kind: "nature" },
    { nameZh: "侨港镇", nameEn: "Qiaogang", lon: 109.1200, lat: 21.4400, kind: "district" },
  ],
  jiayuguan: [
    { nameZh: "嘉峪关关城", nameEn: "Jiayuguan Fort", lon: 98.2190, lat: 39.8010, kind: "landmark" },
    { nameZh: "悬壁长城", nameEn: "Overhanging Great Wall", lon: 98.2200, lat: 39.8750, kind: "landmark" },
    { nameZh: "长城第一墩", nameEn: "First Beacon Tower of the Great Wall", lon: 98.2050, lat: 39.7350, kind: "landmark" },
    { nameZh: "新城魏晋壁画墓", nameEn: "Wei-Jin Tombs at Xincheng", lon: 98.4500, lat: 39.9000, kind: "landmark" },
    { nameZh: "讨赖河大峡谷", nameEn: "Taolai River Canyon", lon: 98.2000, lat: 39.7300, kind: "nature" },
  ],

  // 批6（2026-09-05）
  zhoushan: [
    { nameZh: "普陀山", nameEn: "Mount Putuo", lon: 122.3870, lat: 30.0080, kind: "landmark" },
    { nameZh: "朱家尖", nameEn: "Zhujiajian", lon: 122.4000, lat: 29.9200, kind: "nature" },
    { nameZh: "沈家门渔港", nameEn: "Shenjiamen Fishing Port", lon: 122.3000, lat: 29.9500, kind: "district" },
    { nameZh: "东极岛", nameEn: "Dongji Islands", lon: 122.7100, lat: 30.1900, kind: "nature" },
    { nameZh: "定海古城", nameEn: "Dinghai Old Town", lon: 122.1060, lat: 30.0170, kind: "district" },
  ],
  tengchong: [
    { nameZh: "和顺古镇", nameEn: "Heshun Ancient Town", lon: 98.4650, lat: 25.0000, kind: "district" },
    { nameZh: "热海", nameEn: "Rehai Hot Springs", lon: 98.4530, lat: 24.9520, kind: "nature" },
    { nameZh: "火山地质公园", nameEn: "Tengchong Volcano Park", lon: 98.5050, lat: 25.2250, kind: "nature" },
    { nameZh: "江东银杏村", nameEn: "Jiangdong Ginkgo Village", lon: 98.5900, lat: 25.3600, kind: "district" },
    { nameZh: "北海湿地", nameEn: "Beihai Wetland", lon: 98.5600, lat: 25.1300, kind: "nature" },
  ],
  dujiangyan: [
    { nameZh: "都江堰水利工程", nameEn: "Dujiangyan Irrigation System", lon: 103.6070, lat: 31.0050, kind: "landmark" },
    { nameZh: "二王庙", nameEn: "Erwang Temple", lon: 103.6040, lat: 31.0110, kind: "landmark" },
    { nameZh: "安澜索桥", nameEn: "Anlan Suspension Bridge", lon: 103.6060, lat: 31.0080, kind: "landmark" },
    { nameZh: "青城山", nameEn: "Mount Qingcheng", lon: 103.5700, lat: 30.9000, kind: "nature" },
    { nameZh: "都江堰熊猫谷", nameEn: "Dujiangyan Panda Valley", lon: 103.5700, lat: 31.0300, kind: "nature" },
  ],
  fenghuang: [
    { nameZh: "沱江吊脚楼", nameEn: "Tuojiang Stilt Houses", lon: 109.6000, lat: 27.9490, kind: "landmark" },
    { nameZh: "虹桥", nameEn: "Rainbow Bridge", lon: 109.5990, lat: 27.9480, kind: "landmark" },
    { nameZh: "沈从文故居", nameEn: "Shen Congwen's Former Residence", lon: 109.5980, lat: 27.9470, kind: "landmark" },
    { nameZh: "北门城楼", nameEn: "North Gate Tower", lon: 109.5990, lat: 27.9500, kind: "landmark" },
    { nameZh: "南方长城", nameEn: "Southern Great Wall", lon: 109.5000, lat: 27.9200, kind: "landmark" },
  ],
  shiyan: [
    { nameZh: "武当山金顶", nameEn: "Wudang Golden Summit", lon: 111.0040, lat: 32.4000, kind: "landmark" },
    { nameZh: "紫霄宫", nameEn: "Purple Cloud Palace", lon: 111.0100, lat: 32.4300, kind: "landmark" },
    { nameZh: "南岩宫", nameEn: "Nanyan Palace", lon: 111.0000, lat: 32.4200, kind: "landmark" },
    { nameZh: "武当山镇（太子坡）", nameEn: "Wudangshan Town", lon: 111.0300, lat: 32.4800, kind: "district" },
    { nameZh: "丹江口水库", nameEn: "Danjiangkou Reservoir", lon: 111.5000, lat: 32.6000, kind: "nature" },
  ],
  anyang: [
    { nameZh: "殷墟", nameEn: "Yinxu", lon: 114.3140, lat: 36.1270, kind: "landmark" },
    { nameZh: "殷墟博物馆", nameEn: "Yinxu Museum", lon: 114.3200, lat: 36.1300, kind: "landmark" },
    { nameZh: "中国文字博物馆", nameEn: "National Museum of Chinese Writing", lon: 114.3800, lat: 36.1150, kind: "landmark" },
    { nameZh: "红旗渠", nameEn: "Red Flag Canal", lon: 113.7200, lat: 36.1700, kind: "landmark" },
    { nameZh: "太行大峡谷", nameEn: "Taihang Grand Canyon", lon: 113.6800, lat: 36.2500, kind: "nature" },
    { nameZh: "岳飞庙（汤阴）", nameEn: "Yue Fei Temple (Tangyin)", lon: 114.3570, lat: 35.9240, kind: "landmark" },
  ],
  huashan: [
    { nameZh: "华山北峰", nameEn: "North Peak", lon: 110.0830, lat: 34.5080, kind: "nature" },
    { nameZh: "华山南峰", nameEn: "South Peak", lon: 110.0850, lat: 34.4830, kind: "nature" },
    { nameZh: "长空栈道", nameEn: "Changkong Plank Walk", lon: 110.0880, lat: 34.4830, kind: "landmark" },
    { nameZh: "玉泉院", nameEn: "Yuquan Temple", lon: 110.0870, lat: 34.5390, kind: "landmark" },
    { nameZh: "西岳庙", nameEn: "Xiyue Temple", lon: 110.1050, lat: 34.5820, kind: "landmark" },
    { nameZh: "华山北站", nameEn: "Huashan North Station", lon: 110.0700, lat: 34.6000, kind: "transport" },
  ],
  wutaishan: [
    { nameZh: "台怀镇", nameEn: "Taihuai Town", lon: 113.5900, lat: 39.0180, kind: "district" },
    { nameZh: "塔院寺大白塔", nameEn: "Great White Pagoda, Tayuan Temple", lon: 113.5880, lat: 39.0200, kind: "landmark" },
    { nameZh: "显通寺", nameEn: "Xiantong Temple", lon: 113.5890, lat: 39.0220, kind: "landmark" },
    { nameZh: "菩萨顶", nameEn: "Pusading", lon: 113.5880, lat: 39.0240, kind: "landmark" },
    { nameZh: "黛螺顶", nameEn: "Dailuoding", lon: 113.6000, lat: 39.0200, kind: "landmark" },
    { nameZh: "北台叶斗峰", nameEn: "North Terrace (Yedou Peak)", lon: 113.5670, lat: 39.0770, kind: "nature" },
  ],
  tianshui: [
    { nameZh: "麦积山石窟", nameEn: "Maijishan Grottoes", lon: 106.0080, lat: 34.3550, kind: "landmark" },
    { nameZh: "伏羲庙", nameEn: "Fuxi Temple", lon: 105.7190, lat: 34.5820, kind: "landmark" },
    { nameZh: "南郭寺", nameEn: "Nanguo Temple", lon: 105.7300, lat: 34.5600, kind: "landmark" },
    { nameZh: "天水南站", nameEn: "Tianshui South Station", lon: 105.8400, lat: 34.5300, kind: "transport" },
    { nameZh: "仙人崖", nameEn: "Xianren Cliff", lon: 106.0300, lat: 34.4000, kind: "nature" },
  ],
  jiujiang: [
    { nameZh: "庐山牯岭", nameEn: "Guling, Mount Lu", lon: 115.9900, lat: 29.5550, kind: "district" },
    { nameZh: "三叠泉", nameEn: "Sandiequan Waterfall", lon: 116.0300, lat: 29.5300, kind: "nature" },
    { nameZh: "白鹿洞书院", nameEn: "White Deer Grotto Academy", lon: 116.0270, lat: 29.4750, kind: "landmark" },
    { nameZh: "浔阳楼", nameEn: "Xunyang Tower", lon: 116.0050, lat: 29.7200, kind: "landmark" },
    { nameZh: "烟水亭", nameEn: "Yanshui Pavilion", lon: 115.9950, lat: 29.7100, kind: "landmark" },
    { nameZh: "石钟山（湖口）", nameEn: "Shizhong Hill (Hukou)", lon: 116.2200, lat: 29.7400, kind: "nature" },
  ],
  anshun: [
    { nameZh: "黄果树瀑布", nameEn: "Huangguoshu Waterfall", lon: 105.6750, lat: 25.9890, kind: "nature" },
    { nameZh: "天星桥", nameEn: "Tianxing Bridge", lon: 105.6600, lat: 25.9700, kind: "nature" },
    { nameZh: "龙宫", nameEn: "Dragon Palace Cave", lon: 105.8800, lat: 26.1100, kind: "nature" },
    { nameZh: "天龙屯堡", nameEn: "Tianlong Tunpu", lon: 106.1500, lat: 26.3700, kind: "district" },
    { nameZh: "文庙", nameEn: "Anshun Confucian Temple", lon: 105.9450, lat: 26.2530, kind: "landmark" },
  ],
  yining: [
    { nameZh: "六星街", nameEn: "Liuxing Street", lon: 81.3100, lat: 43.9130, kind: "district" },
    { nameZh: "喀赞其民俗旅游区", nameEn: "Kazanqi Folk Quarter", lon: 81.3400, lat: 43.9050, kind: "district" },
    { nameZh: "伊犁河大桥", nameEn: "Ili River Bridge", lon: 81.2900, lat: 43.8700, kind: "landmark" },
    { nameZh: "赛里木湖", nameEn: "Sayram Lake", lon: 81.1800, lat: 44.6000, kind: "nature" },
    { nameZh: "那拉提草原", nameEn: "Nalati Grassland", lon: 84.0000, lat: 43.3000, kind: "nature" },
    { nameZh: "霍城薰衣草田", nameEn: "Huocheng Lavender Fields", lon: 80.8700, lat: 44.0500, kind: "nature" },
  ],
  shigatse: [
    { nameZh: "扎什伦布寺", nameEn: "Tashilhunpo Monastery", lon: 88.8700, lat: 29.2680, kind: "landmark" },
    { nameZh: "萨迦寺", nameEn: "Sakya Monastery", lon: 88.0200, lat: 28.9000, kind: "landmark" },
    { nameZh: "白居寺（江孜）", nameEn: "Palcho Monastery (Gyantse)", lon: 89.6000, lat: 28.9200, kind: "landmark" },
    { nameZh: "珠峰大本营", nameEn: "Everest Base Camp", lon: 86.8500, lat: 28.1400, kind: "nature" },
    { nameZh: "日喀则和平机场", nameEn: "Shigatse Peace Airport", lon: 89.3110, lat: 29.3520, kind: "transport" },
  ],

  // 批7（2026-09-05）
  weihai: [
    { nameZh: "刘公岛", nameEn: "Liugong Island", lon: 122.1900, lat: 37.5000, kind: "landmark" },
    { nameZh: "幸福门", nameEn: "Happiness Gate", lon: 122.1290, lat: 37.5120, kind: "landmark" },
    { nameZh: "成山头", nameEn: "Chengshan Cape", lon: 122.7000, lat: 37.4000, kind: "nature" },
    { nameZh: "威海国际海水浴场", nameEn: "Weihai International Beach", lon: 122.0400, lat: 37.5300, kind: "nature" },
    { nameZh: "荣成天鹅湖", nameEn: "Rongcheng Swan Lake", lon: 122.5700, lat: 37.3500, kind: "nature" },
  ],
  zhenjiang: [
    { nameZh: "金山寺", nameEn: "Jinshan Temple", lon: 119.4120, lat: 32.2180, kind: "landmark" },
    { nameZh: "焦山", nameEn: "Jiaoshan", lon: 119.4850, lat: 32.2240, kind: "landmark" },
    { nameZh: "北固山", nameEn: "Beigu Hill", lon: 119.4500, lat: 32.2180, kind: "landmark" },
    { nameZh: "西津渡", nameEn: "Xijin Ferry Old Street", lon: 119.4200, lat: 32.2100, kind: "district" },
    { nameZh: "镇江南站", nameEn: "Zhenjiang South Station", lon: 119.4460, lat: 32.1360, kind: "transport" },
  ],
  yueyang: [
    { nameZh: "岳阳楼", nameEn: "Yueyang Tower", lon: 113.1160, lat: 29.3800, kind: "landmark" },
    { nameZh: "君山岛", nameEn: "Junshan Island", lon: 113.0050, lat: 29.4300, kind: "nature" },
    { nameZh: "洞庭湖", nameEn: "Dongting Lake", lon: 112.9000, lat: 29.3000, kind: "nature" },
    { nameZh: "汴河街", nameEn: "Bianhe Street", lon: 113.1180, lat: 29.3780, kind: "district" },
    { nameZh: "岳阳东站", nameEn: "Yueyang East Station", lon: 113.1900, lat: 29.3900, kind: "transport" },
  ],
  hanzhong: [
    { nameZh: "古汉台（汉中市博物馆）", nameEn: "Guhantai (Hanzhong Museum)", lon: 107.0290, lat: 33.0640, kind: "landmark" },
    { nameZh: "石门栈道", nameEn: "Shimen Plank Road", lon: 106.9700, lat: 33.1600, kind: "landmark" },
    { nameZh: "勉县武侯祠", nameEn: "Wuhou Temple, Mianxian", lon: 106.6900, lat: 33.1600, kind: "landmark" },
    { nameZh: "张骞墓（城固）", nameEn: "Tomb of Zhang Qian (Chenggu)", lon: 107.3200, lat: 33.1600, kind: "landmark" },
    { nameZh: "洋县朱鹮生态园", nameEn: "Crested Ibis Reserve, Yangxian", lon: 107.5500, lat: 33.2200, kind: "nature" },
  ],
  xiangyang: [
    { nameZh: "襄阳古城墙", nameEn: "Xiangyang City Walls", lon: 112.1300, lat: 32.0130, kind: "landmark" },
    { nameZh: "北街", nameEn: "North Street", lon: 112.1280, lat: 32.0120, kind: "district" },
    { nameZh: "古隆中", nameEn: "Gulongzhong", lon: 112.0400, lat: 31.9900, kind: "landmark" },
    { nameZh: "米公祠", nameEn: "Mi Fu Memorial Temple", lon: 112.1320, lat: 32.0270, kind: "landmark" },
    { nameZh: "唐城", nameEn: "Tang City Film Studio", lon: 112.0700, lat: 31.9700, kind: "landmark" },
  ],
  ordos: [
    { nameZh: "康巴什新区", nameEn: "Kangbashi", lon: 109.7810, lat: 39.6060, kind: "district" },
    { nameZh: "东胜区", nameEn: "Dongsheng", lon: 109.9780, lat: 39.8170, kind: "district" },
    { nameZh: "成吉思汗陵", nameEn: "Mausoleum of Genghis Khan", lon: 109.7900, lat: 39.3700, kind: "landmark" },
    { nameZh: "响沙湾", nameEn: "Xiangshawan (Singing Sand Bay)", lon: 109.9700, lat: 40.2800, kind: "nature" },
    { nameZh: "乌兰木伦湖", nameEn: "Wulanmulun Lake", lon: 109.7900, lat: 39.6000, kind: "nature" },
  ],
  shangrao: [
    { nameZh: "三清山", nameEn: "Mount Sanqing", lon: 118.0670, lat: 28.9080, kind: "nature" },
    { nameZh: "婺源篁岭", nameEn: "Huangling, Wuyuan", lon: 117.9800, lat: 29.2000, kind: "district" },
    { nameZh: "婺源江湾", nameEn: "Jiangwan, Wuyuan", lon: 117.9700, lat: 29.2500, kind: "district" },
    { nameZh: "龟峰（弋阳）", nameEn: "Guifeng (Yiyang)", lon: 117.4300, lat: 28.3200, kind: "nature" },
    { nameZh: "上饶站", nameEn: "Shangrao Station", lon: 117.9300, lat: 28.4300, kind: "transport" },
  ],
  korla: [
    { nameZh: "孔雀河风景带", nameEn: "Peacock River Promenade", lon: 86.1700, lat: 41.7300, kind: "nature" },
    { nameZh: "铁门关", nameEn: "Iron Gate Pass", lon: 86.1900, lat: 41.8300, kind: "landmark" },
    { nameZh: "博斯腾湖", nameEn: "Bosten Lake", lon: 86.9000, lat: 41.9500, kind: "nature" },
    { nameZh: "罗布人村寨（尉犁）", nameEn: "Lop Nur People Village (Yuli)", lon: 86.5000, lat: 41.2000, kind: "district" },
    { nameZh: "巴音布鲁克草原", nameEn: "Bayanbulak Grassland", lon: 84.1500, lat: 43.0300, kind: "nature" },
  ],

  // 批8（2026-09-05）
  xichang: [
    { nameZh: "邛海", nameEn: "Qionghai Lake", lon: 102.3000, lat: 27.8500, kind: "nature" },
    { nameZh: "泸山", nameEn: "Lushan", lon: 102.2650, lat: 27.8500, kind: "nature" },
    { nameZh: "建昌古城", nameEn: "Jianchang Old Town", lon: 102.2650, lat: 27.9000, kind: "district" },
    { nameZh: "西昌卫星发射中心", nameEn: "Xichang Satellite Launch Centre", lon: 102.0270, lat: 28.2460, kind: "landmark" },
    { nameZh: "螺髻山", nameEn: "Luoji Mountain", lon: 102.4000, lat: 27.5500, kind: "nature" },
  ],
  arxan: [
    { nameZh: "阿尔山火车站", nameEn: "Arxan Railway Station", lon: 119.9430, lat: 47.1770, kind: "transport" },
    { nameZh: "阿尔山天池", nameEn: "Arxan Tianchi", lon: 120.0500, lat: 47.6700, kind: "nature" },
    { nameZh: "石塘林", nameEn: "Shitanglin Lava Field", lon: 120.1200, lat: 47.6300, kind: "nature" },
    { nameZh: "杜鹃湖", nameEn: "Dujuan Lake", lon: 120.1400, lat: 47.6800, kind: "nature" },
    { nameZh: "白狼镇", nameEn: "Bailang Town", lon: 119.9500, lat: 46.9300, kind: "district" },
  ],
  zhangzhou: [
    { nameZh: "漳州古城", nameEn: "Zhangzhou Old City", lon: 117.6470, lat: 24.5130, kind: "district" },
    { nameZh: "田螺坑土楼群", nameEn: "Tianluokeng Tulou Cluster", lon: 117.0570, lat: 24.6120, kind: "landmark" },
    { nameZh: "云水谣", nameEn: "Yunshuiyao", lon: 117.1300, lat: 24.6500, kind: "district" },
    { nameZh: "东山岛风动石", nameEn: "Wind-Rocked Stone, Dongshan Island", lon: 117.5100, lat: 23.7100, kind: "landmark" },
    { nameZh: "华安大地土楼群", nameEn: "Dadi Tulou Cluster, Hua'an", lon: 117.5000, lat: 25.0300, kind: "landmark" },
  ],
  altay: [
    { nameZh: "将军山滑雪场", nameEn: "General Mountain Ski Resort", lon: 88.1600, lat: 47.8500, kind: "nature" },
    { nameZh: "桦林公园", nameEn: "Birch Forest Park", lon: 88.1200, lat: 47.8300, kind: "nature" },
    { nameZh: "喀纳斯湖", nameEn: "Kanas Lake", lon: 87.0400, lat: 48.7200, kind: "nature" },
    { nameZh: "禾木村", nameEn: "Hemu Village", lon: 87.4300, lat: 48.5700, kind: "district" },
    { nameZh: "可可托海", nameEn: "Koktokay", lon: 89.7900, lat: 47.2100, kind: "nature" },
    { nameZh: "五彩滩", nameEn: "Rainbow Beach (Wucaitan)", lon: 87.0700, lat: 47.8400, kind: "nature" },
  ],
  baoding: [
    { nameZh: "直隶总督署", nameEn: "Zhili Viceroy's Office", lon: 115.4780, lat: 38.8700, kind: "landmark" },
    { nameZh: "古莲花池", nameEn: "Ancient Lotus Pond", lon: 115.4800, lat: 38.8680, kind: "landmark" },
    { nameZh: "白洋淀", nameEn: "Baiyangdian Lake", lon: 115.9800, lat: 38.9000, kind: "nature" },
    { nameZh: "清西陵", nameEn: "Western Qing Tombs", lon: 115.3400, lat: 39.3600, kind: "landmark" },
    { nameZh: "野三坡", nameEn: "Yesanpo", lon: 115.4500, lat: 39.7000, kind: "nature" },
    { nameZh: "白石山", nameEn: "Baishi Mountain", lon: 114.7300, lat: 39.2300, kind: "nature" },
  ],
  foshan: [
    { nameZh: "佛山祖庙", nameEn: "Foshan Ancestral Temple", lon: 113.1150, lat: 23.0280, kind: "landmark" },
    { nameZh: "岭南天地", nameEn: "Lingnan Tiandi", lon: 113.1170, lat: 23.0300, kind: "district" },
    { nameZh: "南风古灶", nameEn: "Nanfeng Ancient Kiln", lon: 113.0800, lat: 23.0100, kind: "landmark" },
    { nameZh: "西樵山", nameEn: "Xiqiao Mountain", lon: 112.9700, lat: 22.9300, kind: "nature" },
    { nameZh: "清晖园（顺德）", nameEn: "Qinghui Garden (Shunde)", lon: 113.2420, lat: 22.8420, kind: "landmark" },
    { nameZh: "逢简水乡", nameEn: "Fengjian Water Village", lon: 113.1900, lat: 22.8600, kind: "district" },
  ],
  zhaoqing: [
    { nameZh: "七星岩", nameEn: "Seven Star Crags", lon: 112.4700, lat: 23.0700, kind: "nature" },
    { nameZh: "宋城墙", nameEn: "Song Dynasty City Wall", lon: 112.4650, lat: 23.0480, kind: "landmark" },
    { nameZh: "阅江楼", nameEn: "Yuejiang Tower", lon: 112.4750, lat: 23.0430, kind: "landmark" },
    { nameZh: "鼎湖山", nameEn: "Dinghu Mountain", lon: 112.5400, lat: 23.1600, kind: "nature" },
    { nameZh: "肇庆东站", nameEn: "Zhaoqing East Station", lon: 112.6300, lat: 23.1200, kind: "transport" },
  ],
  anqing: [
    { nameZh: "迎江寺振风塔", nameEn: "Zhenfeng Pagoda, Yingjiang Temple", lon: 117.0530, lat: 30.5030, kind: "landmark" },
    { nameZh: "菱湖公园", nameEn: "Linghu Park", lon: 117.0600, lat: 30.5200, kind: "nature" },
    { nameZh: "黄梅戏会馆", nameEn: "Huangmei Opera Hall", lon: 117.0500, lat: 30.5100, kind: "landmark" },
    { nameZh: "天柱山", nameEn: "Tianzhu Mountain", lon: 116.4500, lat: 30.7400, kind: "nature" },
    { nameZh: "桐城六尺巷", nameEn: "Six-Foot Lane, Tongcheng", lon: 116.9500, lat: 31.0500, kind: "landmark" },
  ],
  qiqihar: [
    { nameZh: "扎龙自然保护区", nameEn: "Zhalong Nature Reserve", lon: 124.2500, lat: 47.2000, kind: "nature" },
    { nameZh: "龙沙公园", nameEn: "Longsha Park", lon: 123.9100, lat: 47.3450, kind: "nature" },
    { nameZh: "明月岛", nameEn: "Mingyue Island", lon: 123.8800, lat: 47.4200, kind: "nature" },
    { nameZh: "梅里斯达斡尔族风情园", nameEn: "Meilisi Daur Folk Park", lon: 123.7500, lat: 47.3100, kind: "district" },
    { nameZh: "齐齐哈尔南站", nameEn: "Qiqihar South Station", lon: 123.9600, lat: 47.3000, kind: "transport" },
  ],
  wanning: [
    { nameZh: "日月湾", nameEn: "Riyue Bay", lon: 110.2100, lat: 18.6100, kind: "nature" },
    { nameZh: "石梅湾", nameEn: "Shimei Bay", lon: 110.2600, lat: 18.6600, kind: "nature" },
    { nameZh: "神州半岛", nameEn: "Shenzhou Peninsula", lon: 110.4700, lat: 18.7300, kind: "district" },
    { nameZh: "兴隆热带植物园", nameEn: "Xinglong Tropical Botanical Garden", lon: 110.2000, lat: 18.7300, kind: "nature" },
    { nameZh: "东山岭", nameEn: "Dongshan Ridge", lon: 110.4200, lat: 18.7900, kind: "nature" },
  ],
  xuzhou: [
    { nameZh: "云龙湖", nameEn: "Yunlong Lake", lon: 117.1700, lat: 34.2300, kind: "nature" },
    { nameZh: "云龙山", nameEn: "Yunlong Hill", lon: 117.1950, lat: 34.2400, kind: "nature" },
    { nameZh: "狮子山楚王陵", nameEn: "Tomb of the King of Chu, Lion Hill", lon: 117.2400, lat: 34.2700, kind: "landmark" },
    { nameZh: "龟山汉墓", nameEn: "Guishan Han Tomb", lon: 117.1500, lat: 34.3000, kind: "landmark" },
    { nameZh: "户部山", nameEn: "Hubushan Old Residences", lon: 117.1950, lat: 34.2570, kind: "district" },
    { nameZh: "徐州东站", nameEn: "Xuzhou East Station", lon: 117.3300, lat: 34.2800, kind: "transport" },
  ],
  danzhou: [
    { nameZh: "东坡书院", nameEn: "Dongpo Academy", lon: 109.3400, lat: 19.7400, kind: "landmark" },
    { nameZh: "洋浦千年古盐田", nameEn: "Yangpu Ancient Salt Fields", lon: 109.1900, lat: 19.7200, kind: "landmark" },
    { nameZh: "海花岛", nameEn: "Haihua Island", lon: 109.2200, lat: 19.7600, kind: "district" },
    { nameZh: "松涛水库", nameEn: "Songtao Reservoir", lon: 109.6300, lat: 19.3500, kind: "nature" },
    { nameZh: "白马井站", nameEn: "Baimajing Station", lon: 109.2200, lat: 19.6800, kind: "transport" },
  ],

  // 批9（2026-09-05）
  huzhou: [
    { nameZh: "南浔古镇", nameEn: "Nanxun Ancient Town", lon: 120.4230, lat: 30.8730, kind: "district" },
    { nameZh: "莫干山", nameEn: "Moganshan", lon: 119.8700, lat: 30.6000, kind: "nature" },
    { nameZh: "安吉大竹海", nameEn: "Anji Bamboo Sea", lon: 119.6200, lat: 30.5300, kind: "nature" },
    { nameZh: "飞英塔", nameEn: "Feiying Pagoda", lon: 120.0980, lat: 30.8730, kind: "landmark" },
    { nameZh: "太湖南岸（湖州湖滨）", nameEn: "South Taihu Lakeshore", lon: 120.1200, lat: 30.9400, kind: "nature" },
  ],
  jinhua: [
    { nameZh: "横店影视城", nameEn: "Hengdian World Studios", lon: 120.3050, lat: 29.1500, kind: "landmark" },
    { nameZh: "义乌国际商贸城", nameEn: "Yiwu International Trade City", lon: 120.0850, lat: 29.3300, kind: "district" },
    { nameZh: "双龙洞", nameEn: "Shuanglong Cave", lon: 119.6200, lat: 29.2000, kind: "nature" },
    { nameZh: "诸葛八卦村", nameEn: "Zhuge Bagua Village", lon: 119.3000, lat: 29.2600, kind: "district" },
    { nameZh: "八咏楼", nameEn: "Bayong Tower", lon: 119.6520, lat: 29.0900, kind: "landmark" },
  ],
  jiaozuo: [
    { nameZh: "云台山红石峡", nameEn: "Red Stone Gorge, Yuntai Mountain", lon: 113.4150, lat: 35.4300, kind: "nature" },
    { nameZh: "茱萸峰", nameEn: "Zhuyu Peak", lon: 113.4600, lat: 35.4600, kind: "nature" },
    { nameZh: "陈家沟", nameEn: "Chenjiagou (Chen Village)", lon: 112.9800, lat: 34.9500, kind: "district" },
    { nameZh: "嘉应观", nameEn: "Jiaying Temple", lon: 113.3600, lat: 35.0000, kind: "landmark" },
    { nameZh: "青天河", nameEn: "Qingtianhe", lon: 112.9000, lat: 35.2800, kind: "nature" },
  ],
  jingzhou: [
    { nameZh: "荆州古城墙", nameEn: "Jingzhou City Walls", lon: 112.2400, lat: 30.3350, kind: "landmark" },
    { nameZh: "荆州博物馆", nameEn: "Jingzhou Museum", lon: 112.2280, lat: 30.3360, kind: "landmark" },
    { nameZh: "关帝庙", nameEn: "Guandi Temple", lon: 112.2450, lat: 30.3300, kind: "landmark" },
    { nameZh: "楚纪南故城", nameEn: "Jinancheng (Chu Capital) Site", lon: 112.1900, lat: 30.4200, kind: "landmark" },
    { nameZh: "沙市长江码头", nameEn: "Shashi Riverfront", lon: 112.2800, lat: 30.3000, kind: "district" },
  ],
  liuzhou: [
    { nameZh: "柳侯公园", nameEn: "Liuhou Park", lon: 109.4130, lat: 24.3200, kind: "landmark" },
    { nameZh: "马鞍山", nameEn: "Ma'an Mountain", lon: 109.4000, lat: 24.3050, kind: "nature" },
    { nameZh: "柳江夜游码头", nameEn: "Liujiang River Cruise Pier", lon: 109.4100, lat: 24.3150, kind: "transport" },
    { nameZh: "三江程阳风雨桥", nameEn: "Chengyang Wind and Rain Bridge", lon: 109.6000, lat: 25.8700, kind: "landmark" },
    { nameZh: "螺蛳粉产业园", nameEn: "Luosifen Industrial Park", lon: 109.4500, lat: 24.2700, kind: "landmark" },
  ],
  yibin: [
    { nameZh: "合江门（三江口）", nameEn: "Hejiang Gate (Three Rivers Confluence)", lon: 104.6450, lat: 28.7650, kind: "landmark" },
    { nameZh: "五粮液酒文化景区", nameEn: "Wuliangye Liquor Culture Area", lon: 104.6300, lat: 28.7900, kind: "landmark" },
    { nameZh: "李庄古镇", nameEn: "Lizhuang Ancient Town", lon: 104.8000, lat: 28.7900, kind: "district" },
    { nameZh: "蜀南竹海", nameEn: "Shunan Bamboo Sea", lon: 105.0000, lat: 28.4300, kind: "nature" },
    { nameZh: "兴文石海", nameEn: "Xingwen Stone Sea", lon: 105.1000, lat: 28.2000, kind: "nature" },
  ],
  mudanjiang: [
    { nameZh: "镜泊湖吊水楼瀑布", nameEn: "Diaoshuilou Waterfall, Jingpo Lake", lon: 129.0000, lat: 44.0300, kind: "nature" },
    { nameZh: "雪乡", nameEn: "Snow Village (Xuexiang)", lon: 128.9300, lat: 44.2600, kind: "district" },
    { nameZh: "渤海国上京龙泉府遗址", nameEn: "Shangjing Longquanfu Site (Balhae)", lon: 129.2000, lat: 44.1000, kind: "landmark" },
    { nameZh: "横道河子", nameEn: "Hengdaohezi", lon: 129.0100, lat: 44.8100, kind: "district" },
    { nameZh: "牡丹峰", nameEn: "Mudan Peak", lon: 129.6900, lat: 44.5200, kind: "nature" },
  ],
  chizhou: [
    { nameZh: "九华街", nameEn: "Jiuhua Street (Temple Area)", lon: 117.8050, lat: 30.4850, kind: "district" },
    { nameZh: "天台正顶", nameEn: "Tiantai Peak", lon: 117.8100, lat: 30.4700, kind: "landmark" },
    { nameZh: "大愿文化园", nameEn: "Dayuan Culture Park", lon: 117.8000, lat: 30.5300, kind: "landmark" },
    { nameZh: "杏花村", nameEn: "Xinghua Village", lon: 117.4800, lat: 30.6650, kind: "district" },
    { nameZh: "升金湖", nameEn: "Shengjin Lake", lon: 117.0500, lat: 30.3300, kind: "nature" },
  ],
  tongren: [
    { nameZh: "梵净山红云金顶", nameEn: "Red Cloud Golden Summit, Fanjingshan", lon: 108.6960, lat: 27.9190, kind: "nature" },
    { nameZh: "梵净山东门（黑湾河）", nameEn: "Fanjingshan East Gate", lon: 108.7800, lat: 27.9000, kind: "transport" },
    { nameZh: "寨沙侗寨", nameEn: "Zhaisha Dong Village", lon: 108.7900, lat: 27.8900, kind: "district" },
    { nameZh: "中南门古城", nameEn: "Zhongnanmen Old Town", lon: 109.1900, lat: 27.7300, kind: "district" },
    { nameZh: "石阡温泉", nameEn: "Shiqian Hot Springs", lon: 108.2200, lat: 27.5200, kind: "nature" },
  ],
  jiuquan: [
    { nameZh: "酒泉钟鼓楼", nameEn: "Jiuquan Bell and Drum Tower", lon: 98.4940, lat: 39.7340, kind: "landmark" },
    { nameZh: "酒泉公园（西汉酒泉胜迹）", nameEn: "Jiuquan Park", lon: 98.5100, lat: 39.7400, kind: "landmark" },
    { nameZh: "金塔胡杨林", nameEn: "Jinta Poplar Forest", lon: 98.9000, lat: 40.0000, kind: "nature" },
    { nameZh: "酒泉卫星发射中心", nameEn: "Jiuquan Satellite Launch Centre", lon: 100.2900, lat: 40.9600, kind: "landmark" },
    { nameZh: "榆林窟（瓜州）", nameEn: "Yulin Caves (Guazhou)", lon: 95.6100, lat: 40.1000, kind: "landmark" },
  ],
  chifeng: [
    { nameZh: "红山", nameEn: "Hongshan (Red Mountain)", lon: 118.9800, lat: 42.2800, kind: "nature" },
    { nameZh: "赤峰博物馆", nameEn: "Chifeng Museum", lon: 118.9300, lat: 42.2700, kind: "landmark" },
    { nameZh: "阿斯哈图石林", nameEn: "Asihatu Stone Forest", lon: 117.6500, lat: 43.7500, kind: "nature" },
    { nameZh: "达里诺尔湖", nameEn: "Dali Nur Lake", lon: 116.6500, lat: 43.2500, kind: "nature" },
    { nameZh: "乌兰布统草原", nameEn: "Ulan Butong Grassland", lon: 117.3000, lat: 42.4500, kind: "nature" },
    { nameZh: "辽上京遗址", nameEn: "Liao Upper Capital Site", lon: 119.3700, lat: 43.9700, kind: "landmark" },
  ],
  shannan: [
    { nameZh: "雍布拉康", nameEn: "Yumbulagang", lon: 91.8100, lat: 29.1600, kind: "landmark" },
    { nameZh: "昌珠寺", nameEn: "Tradruk Temple", lon: 91.7800, lat: 29.2000, kind: "landmark" },
    { nameZh: "桑耶寺", nameEn: "Samye Monastery", lon: 91.5050, lat: 29.3280, kind: "landmark" },
    { nameZh: "藏王墓", nameEn: "Tombs of the Tibetan Kings", lon: 91.6800, lat: 29.0300, kind: "landmark" },
    { nameZh: "羊卓雍措", nameEn: "Yamdrok Lake", lon: 90.7000, lat: 28.9500, kind: "nature" },
  ],

  // ── 中国 Tier 2 批10（2026-09-05） ──
  nantong: [
    { nameZh: "濠河·南通博物苑", nameEn: "Haohe River & Nantong Museum", lon: 120.8730, lat: 32.0180, kind: "landmark" },
    { nameZh: "狼山", nameEn: "Langshan Hill", lon: 120.8600, lat: 31.9500, kind: "nature" },
    { nameZh: "唐闸古镇", nameEn: "Tangzha Old Town", lon: 120.8300, lat: 32.0800, kind: "district" },
    { nameZh: "苏通大桥", nameEn: "Sutong Bridge", lon: 121.0500, lat: 31.9700, kind: "landmark" },
    { nameZh: "南通站", nameEn: "Nantong Railway Station", lon: 120.8900, lat: 32.0900, kind: "transport" },
  ],
  linyi: [
    { nameZh: "王羲之故居", nameEn: "Wang Xizhi Former Residence", lon: 118.3530, lat: 35.0620, kind: "landmark" },
    { nameZh: "银雀山汉墓竹简博物馆", nameEn: "Yinqueshan Han Tomb Bamboo Slips Museum", lon: 118.3560, lat: 35.0550, kind: "landmark" },
    { nameZh: "沂河橡胶坝", nameEn: "Yi River Rubber Dam", lon: 118.3700, lat: 35.0800, kind: "nature" },
    { nameZh: "蒙山龟蒙顶", nameEn: "Mount Meng (Guimeng Peak)", lon: 117.8600, lat: 35.5400, kind: "nature" },
    { nameZh: "临沂北站", nameEn: "Linyi North Railway Station", lon: 118.3200, lat: 35.1800, kind: "transport" },
  ],
  weifang: [
    { nameZh: "杨家埠民间艺术大观园", nameEn: "Yangjiabu Folk Art Park", lon: 119.2000, lat: 36.7700, kind: "district" },
    { nameZh: "世界风筝博物馆", nameEn: "World Kite Museum", lon: 119.1150, lat: 36.7050, kind: "landmark" },
    { nameZh: "十笏园", nameEn: "Shihu Garden", lon: 119.1000, lat: 36.7080, kind: "landmark" },
    { nameZh: "青州古城", nameEn: "Qingzhou Old Town", lon: 118.4800, lat: 36.6900, kind: "district" },
    { nameZh: "潍坊北站", nameEn: "Weifang North Railway Station", lon: 119.1500, lat: 36.7600, kind: "transport" },
  ],
  changde: [
    { nameZh: "常德诗墙", nameEn: "Changde Poetry Wall", lon: 111.6900, lat: 29.0250, kind: "landmark" },
    { nameZh: "柳叶湖", nameEn: "Liuye Lake", lon: 111.7500, lat: 29.0800, kind: "nature" },
    { nameZh: "桃花源", nameEn: "Peach Blossom Land (Taohuayuan)", lon: 111.4600, lat: 28.9000, kind: "nature" },
    { nameZh: "老西门", nameEn: "Old West Gate", lon: 111.6800, lat: 29.0300, kind: "district" },
    { nameZh: "常德站", nameEn: "Changde Railway Station", lon: 111.6900, lat: 29.0500, kind: "transport" },
  ],
  ganzhou: [
    { nameZh: "八境台", nameEn: "Bajing Terrace", lon: 114.9400, lat: 25.8700, kind: "landmark" },
    { nameZh: "郁孤台", nameEn: "Yugu Terrace", lon: 114.9350, lat: 25.8600, kind: "landmark" },
    { nameZh: "通天岩", nameEn: "Tongtian Rock Grottoes", lon: 114.8700, lat: 25.9200, kind: "nature" },
    { nameZh: "龙南关西新围", nameEn: "Guanxi Hakka Enclosure (Longnan)", lon: 114.8400, lat: 24.8600, kind: "landmark" },
    { nameZh: "赣州西站", nameEn: "Ganzhou West Railway Station", lon: 114.8800, lat: 25.8500, kind: "transport" },
  ],
  mianyang: [
    { nameZh: "越王楼", nameEn: "Yuewang Tower", lon: 104.7500, lat: 31.4700, kind: "landmark" },
    { nameZh: "富乐山", nameEn: "Fule Mountain Park", lon: 104.7700, lat: 31.4600, kind: "nature" },
    { nameZh: "李白故里（江油青莲）", nameEn: "Li Bai's Hometown (Qinglian, Jiangyou)", lon: 104.7000, lat: 31.7000, kind: "landmark" },
    { nameZh: "七曲山大庙", nameEn: "Qiqu Mountain Temple (Zitong)", lon: 105.1600, lat: 31.6600, kind: "landmark" },
    { nameZh: "绵阳站", nameEn: "Mianyang Railway Station", lon: 104.7500, lat: 31.4800, kind: "transport" },
  ],
  luzhou: [
    { nameZh: "泸州老窖国窖1573窖池", nameEn: "Luzhou Laojiao 1573 Cellars", lon: 105.4300, lat: 28.8800, kind: "landmark" },
    { nameZh: "张坝桂圆林", nameEn: "Zhangba Longan Forest", lon: 105.4800, lat: 28.8400, kind: "nature" },
    { nameZh: "报恩塔", nameEn: "Bao'en Pagoda", lon: 105.4400, lat: 28.8750, kind: "landmark" },
    { nameZh: "尧坝古镇", nameEn: "Yaoba Ancient Town", lon: 105.6500, lat: 28.7600, kind: "district" },
    { nameZh: "泸州站", nameEn: "Luzhou Railway Station", lon: 105.4300, lat: 28.9200, kind: "transport" },
  ],
  lishui: [
    { nameZh: "缙云仙都", nameEn: "Xiandu (Jinyun)", lon: 120.1100, lat: 28.6700, kind: "nature" },
    { nameZh: "云和梯田", nameEn: "Yunhe Terraces", lon: 119.4900, lat: 28.0900, kind: "nature" },
    { nameZh: "松阳古村落", nameEn: "Songyang Ancient Villages", lon: 119.4800, lat: 28.4500, kind: "district" },
    { nameZh: "龙泉青瓷小镇", nameEn: "Longquan Celadon Town", lon: 119.1300, lat: 28.0700, kind: "landmark" },
    { nameZh: "古堰画乡", nameEn: "Guyan Huaxiang (Tongji Weir)", lon: 119.7800, lat: 28.3500, kind: "nature" },
  ],
  karamay: [
    { nameZh: "世界魔鬼城", nameEn: "Urho Ghost City", lon: 85.6800, lat: 46.1200, kind: "nature" },
    { nameZh: "黑油山", nameEn: "Black Oil Hill", lon: 84.9200, lat: 45.6000, kind: "landmark" },
    { nameZh: "克拉玛依河", nameEn: "Karamay River", lon: 84.8900, lat: 45.5900, kind: "nature" },
    { nameZh: "克拉玛依博物馆", nameEn: "Karamay Museum", lon: 84.8800, lat: 45.5800, kind: "landmark" },
    { nameZh: "独山子大峡谷", nameEn: "Dushanzi Grand Canyon", lon: 84.7800, lat: 44.1700, kind: "nature" },
  ],
  daqing: [
    { nameZh: "铁人王进喜纪念馆", nameEn: "Iron Man Wang Jinxi Memorial", lon: 124.8800, lat: 46.6400, kind: "landmark" },
    { nameZh: "龙凤湿地", nameEn: "Longfeng Wetland", lon: 125.1500, lat: 46.5300, kind: "nature" },
    { nameZh: "黎明湖", nameEn: "Liming Lake", lon: 125.1000, lat: 46.5900, kind: "nature" },
    { nameZh: "大庆石油科技馆", nameEn: "Daqing Petroleum Science Museum", lon: 125.0000, lat: 46.6000, kind: "landmark" },
    { nameZh: "大庆东站", nameEn: "Daqing East Railway Station", lon: 125.1300, lat: 46.6100, kind: "transport" },
  ],
  baishan: [
    { nameZh: "长白山西坡景区", nameEn: "Changbai Mountain West Slope", lon: 127.9800, lat: 42.0400, kind: "nature" },
    { nameZh: "锦江大峡谷", nameEn: "Jinjiang Grand Canyon", lon: 127.9300, lat: 42.0300, kind: "nature" },
    { nameZh: "松江河镇", nameEn: "Songjianghe Town", lon: 127.5200, lat: 42.1800, kind: "district" },
    { nameZh: "万良人参市场", nameEn: "Wanliang Ginseng Market", lon: 127.4400, lat: 42.3600, kind: "landmark" },
    { nameZh: "白山站", nameEn: "Baishan Railway Station", lon: 126.4200, lat: 41.9400, kind: "transport" },
  ],
  ngari: [
    { nameZh: "冈仁波齐", nameEn: "Mount Kailash (Gang Rinpoche)", lon: 81.3100, lat: 31.0700, kind: "nature" },
    { nameZh: "玛旁雍错", nameEn: "Lake Manasarovar (Mapam Yumco)", lon: 81.4700, lat: 30.6800, kind: "nature" },
    { nameZh: "古格王国遗址", nameEn: "Guge Kingdom Ruins", lon: 79.6600, lat: 31.4400, kind: "landmark" },
    { nameZh: "札达土林", nameEn: "Zanda Earth Forest", lon: 79.8000, lat: 31.4800, kind: "nature" },
    { nameZh: "班公湖", nameEn: "Pangong Lake (Bangong Co)", lon: 79.5000, lat: 33.6000, kind: "nature" },
  ],
  // ── 中国批 11（2026-09-13）：维基坐标；缺维基坐标的取 OpenStreetMap Nominatim ──
  quzhou: [
    { nameZh: "孔氏南宗家庙", nameEn: "Southern Ancestral Temple of the Kong Family", lon: 118.8725, lat: 28.9633, kind: "landmark" },
    { nameZh: "江郎山", nameEn: "Mount Jianglang", lon: 118.5653, lat: 28.5297, kind: "nature" },
    { nameZh: "廿八都古镇", nameEn: "Nianbadu Old Town", lon: 118.4788, lat: 28.2953, kind: "district" },
    { nameZh: "根宫佛国文化旅游景区", nameEn: "Genggong Buddhist Kingdom", lon: 118.3897, lat: 29.1349, kind: "landmark" },
  ],
  lianyungang: [
    { nameZh: "花果山景区", nameEn: "Mount Huaguo Scenic Area", lon: 119.2883, lat: 34.6541, kind: "nature" },
    { nameZh: "连岛", nameEn: "Lian Island", lon: 119.4639, lat: 34.7575, kind: "nature" },
    { nameZh: "孔望山", nameEn: "Kongwang Shan", lon: 119.1697, lat: 34.5678, kind: "landmark" },
  ],
  rizhao: [
    { nameZh: "万平口海滨", nameEn: "Wanpingkou Beach", lon: 119.5684, lat: 35.4139, kind: "nature" },
    { nameZh: "浮来山", nameEn: "Mount Fulai", lon: 118.7880, lat: 35.6302, kind: "nature" },
  ],
  xinyang: [
    { nameZh: "鸡公山", nameEn: "Jigong Shan", lon: 114.0833, lat: 31.7994, kind: "nature" },
  ],
  chenzhou: [
    { nameZh: "东江湖", nameEn: "Dongjiang Lake", lon: 113.3422, lat: 25.8004, kind: "nature" },
    { nameZh: "苏仙岭", nameEn: "Suxian Ling", lon: 113.0483, lat: 25.8123, kind: "nature" },
    { nameZh: "高椅岭", nameEn: "Gaoyiling", lon: 113.1568, lat: 25.9615, kind: "nature" },
  ],
  wuzhou: [
    { nameZh: "骑楼城", nameEn: "Qilou Arcade District", lon: 111.3122, lat: 23.4744, kind: "district" },
    { nameZh: "龙母庙", nameEn: "Dragon Mother Temple", lon: 111.3116, lat: 23.4849, kind: "landmark" },
    { nameZh: "梧州中山纪念堂", nameEn: "Wuzhou Sun Yat-sen Memorial Hall", lon: 111.3139, lat: 23.4796, kind: "landmark" },
  ],
  panzhihua: [
    { nameZh: "二滩水电站", nameEn: "Ertan Hydropower Station", lon: 101.7855, lat: 26.8231, kind: "landmark" },
  ],
  anshan: [
    { nameZh: "千山风景区", nameEn: "Qianshan Scenic Area", lon: 123.1215, lat: 41.0084, kind: "nature" },
    { nameZh: "玉佛苑", nameEn: "Jade Buddha Garden", lon: 123.0043, lat: 41.1048, kind: "landmark" },
    { nameZh: "汤岗子温泉", nameEn: "Tanggangzi Hot Springs", lon: 122.9020, lat: 41.0073, kind: "landmark" },
  ],
  tongliao: [
    { nameZh: "奈曼王府", nameEn: "Naiman Princely Mansion", lon: 120.6447, lat: 42.8459, kind: "landmark" },
  ],
  jiamusi: [
    { nameZh: "街津口赫哲族乡", nameEn: "Jiejinkou Hezhe Ethnic Township", lon: 132.8413, lat: 47.9333, kind: "district" },
  ],
};
