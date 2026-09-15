import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 亚洲 — 印度尼西亚
// ============================================================

const MOUNT_SEMERU: TerrainEntry = {
  id: "mount-semeru",
  nameZh: "塞梅鲁火山",
  nameEn: "Mount Semeru",
  category: "mountain_system",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "塞梅鲁火山主峰（马哈梅鲁）", lon: 112.9224, lat: -8.1077, elevation: 3676, kind: "peak" },
  bbox: [112.85, -8.20, 113.00, -8.00],
  label: { lon: 112.92, lat: -7.95, rotation: 0 },
  source: "塞梅鲁火山：爪哇岛最高峰，海拔3676米，当地亦称“马哈梅鲁”（意为“伟大之山”），是印度尼西亚最活跃的层状火山之一；火山口平均每20分钟左右喷出一次蒸汽与烟尘，位于布罗莫—腾格尔—塞梅鲁国家公园内（national-parks.org/Wikipedia WebSearch 2026）",
};

const BROMO_TENGGER_CALDERA: TerrainEntry = {
  id: "bromo-tengger-caldera",
  nameZh: "布罗莫—腾格尔破火山口",
  nameEn: "Bromo Tengger Caldera",
  category: "basin",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "布罗莫火山口", lon: 112.9530, lat: -7.9425, elevation: 2329, kind: "peak" },
  bbox: [112.87, -8.00, 113.05, -7.87],
  viewScale: 1.2,
  label: { lon: 112.95, lat: -7.83, rotation: 0 },
  source: "腾格尔破火山口：直径约10公里的古火山破火山口，海拔约2100米，内部平地覆盖细密火山沙、称“沙海”，面积约5250公顷；破火山口内又生出布罗莫（2329米）、巴托克（2470米）等四座新火山锥，布罗莫火山口终年冒出白色硫磺烟雾，是国家公园内最著名的景观（national-parks.org/Wikipedia WebSearch 2026）",
};

const MOUNT_MERAPI: TerrainEntry = {
  id: "mount-merapi",
  nameZh: "默拉皮火山",
  nameEn: "Mount Merapi",
  category: "mountain_system",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "默拉皮火山主峰", lon: 110.4457, lat: -7.5407, elevation: 2911, kind: "peak" },
  bbox: [110.38, -7.62, 110.51, -7.46],
  label: { lon: 110.44, lat: -7.40, rotation: 0 },
  source: "默拉皮火山：位于日惹以北约32公里的中爪哇层状火山，海拔2911米，是印度尼西亚130余座活火山中最活跃的一座，平均每5至10年喷发一次；历史上多次喷发伴随致命的火山碎屑流，2010年与2021年以来的喷发均造成人员伤亡与大规模疏散（Britannica/USGS WebSearch 2026）",
};

const IJEN_CRATER: TerrainEntry = {
  id: "ijen-crater",
  nameZh: "伊真火山口",
  nameEn: "Ijen Crater",
  category: "basin",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "伊真火山口湖", lon: 114.2422, lat: -8.0581, elevation: 2386, kind: "peak" },
  bbox: [114.17, -8.12, 114.30, -8.00],
  label: { lon: 114.24, lat: -7.96, rotation: 0 },
  source: "伊真火山：东爪哇一座硫磺活动强烈的火山，火山口最高处海拔约2799米，湖面所在的火山口边缘约2386米；火山口内是世界最大的强酸性火山口湖，直径约1公里、深约175米，硫磺气体在裂隙处点燃可达600摄氏度，形成“蓝色火焰”奇观——全球只在伊真与埃塞俄比亚达洛尔火山等极少数地点可见此现象（核实 2026-09-11：原写的冰岛无记录），当地长期有矿工人工采集硫磺块（VolcanoDiscovery/geologyscience.com WebSearch 2026）",
};

const DIENG_PLATEAU: TerrainEntry = {
  id: "dieng-plateau",
  nameZh: "迪昂高原",
  nameEn: "Dieng Plateau",
  category: "plateau",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "迪昂火山群", lon: 109.9075, lat: -7.2010, elevation: 2000, kind: "peak" },
  bbox: [109.85, -7.28, 110.00, -7.12],
  viewScale: 1.1,
  label: { lon: 109.90, lat: -7.06, rotation: 0 },
  source: "迪昂高原：中爪哇一处海拔约2000米的火山高原，由两座以上层状火山与逾20个小型火山口组成，最高点海拔2565米；高原地热活动活跃，遍布喷气孔、硫磺温泉与火山口湖，1979年西尼拉火山口曾发生致命气体喷涌事故；高原上保留7至8世纪印度教神庙群遗址，各神庙以印度史诗《摩诃婆罗多》人物命名（Global Volcanism Program/Wikipedia WebSearch 2026）",
};

const GUNUNG_SEWU_KARST: TerrainEntry = {
  id: "gunung-sewu-karst",
  nameZh: "塞武山喀斯特",
  nameEn: "Gunung Sewu Karst",
  category: "plateau",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "巽他喀斯特石灰岩丘陵（贡吉德尔区域）", lon: 110.60, lat: -8.05, elevation: 200, kind: "peak" },
  bbox: [110.45, -8.25, 111.20, -7.85],
  axis: [[110.45, -8.05], [111.20, -8.05]],
  viewScale: 1.5,
  label: { lon: 110.80, lat: -7.78, rotation: 0 },
  source: "塞武山（“千山”）喀斯特：横跨日惹贡吉德尔、中爪哇沃诺吉里与东爪哇帕西坦三地的石灰岩喀斯特高原，东西延伸约120公里，2015年列入UNESCO世界地质公园网络；区域内分布逾4万座石灰岩丘陵与119个已勘察溶洞，洞内多见钟乳石、石笋与地下暗河，南侧濒临印度洋、沿岸留存多处未开发海滩（UNESCO/indonesia.travel WebSearch 2026）",
};

const KRAKATOA: TerrainEntry = {
  id: "krakatoa",
  nameZh: "喀拉喀托火山",
  nameEn: "Krakatoa",
  category: "island",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "喀拉喀托之子（阿纳克喀拉喀托）", lon: 105.423, lat: -6.102, elevation: 155, kind: "island" },
  bbox: [105.35, -6.20, 105.50, -6.05],
  label: { lon: 105.42, lat: -6.00, rotation: 0 },
  source: "喀拉喀托火山：位于爪哇岛与苏门答腊岛之间巽他海峡的火山岛，1883年8月26至27日的喷发是现代史上记录到的最强烈火山爆发之一，约三分之二、约23平方公里的岛体在喷发中沉入海峡，产生的海啸造成逾3.6万人死亡，爆炸声响传播逾4800公里；1927年底附近海域重新出现火山活动，1930年“喀拉喀托之子”浮出水面，此后持续生长喷发至今（NASA/Britannica WebSearch 2026）",
};

const LAKE_TOBA: TerrainEntry = {
  id: "lake-toba",
  nameZh: "多巴湖",
  nameEn: "Lake Toba",
  category: "lake",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "萨莫西岛（多巴湖心岛）", lon: 98.8756, lat: 2.6845, elevation: 905, kind: "lake" },
  bbox: [98.35, 2.10, 99.20, 3.10],
  axis: [[98.45, 2.25], [99.05, 2.95]],
  viewScale: 1.6,
  label: { lon: 98.75, lat: 2.05, rotation: 0 },
  source: "多巴湖：北苏门答腊一处火山破火山口湖，是印度尼西亚最大湖泊，长约100公里、宽约30公里，面积约1130平方公里，湖面海拔905米、最深处505米；湖盆由约7.4万年前一次超级火山喷发形成，是过去2500万年间地球已知规模最大的一次爆炸性喷发，火山灰层覆盖印度次大陆等广大区域；湖心矗立的萨莫西岛面积与新加坡相当，是全球最大的湖中岛之一（worldatlas.com/Wikipedia WebSearch 2026）",
};

const GUNUNG_LEUSER: TerrainEntry = {
  id: "gunung-leuser",
  nameZh: "勒塞尔山（古农勒塞尔国家公园）",
  nameEn: "Gunung Leuser National Park",
  category: "mountain_system",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "勒塞尔山主峰", lon: 97.25, lat: 3.7167, elevation: 3466, kind: "peak" },
  bbox: [96.30, 2.70, 98.30, 4.60],
  axis: [[96.50, 4.50], [98.10, 2.85]],
  viewScale: 1.5,
  label: { lon: 97.30, lat: 4.65, rotation: -20 },
  source: "古农勒塞尔国家公园：横跨苏门答腊亚齐省与北苏门答腊省的国家公园，面积约7927平方公里，最高峰勒塞尔山海拔3466米，约40%的园区海拔超过1500米；2004年与克林芝—塞布拉特、巴里桑塞拉坦两座国家公园共同列入UNESCO“苏门答腊热带雨林遗产”名录，公园内的武吉拉旺是苏门答腊猩猩保护区所在地，也是苏门答腊虎、大象、犀牛等珍稀物种的栖息地（Wikipedia/UNESCO WebSearch 2026）",
};

const MOUNT_KERINCI: TerrainEntry = {
  id: "mount-kerinci",
  nameZh: "格林芝火山",
  nameEn: "Mount Kerinci",
  category: "mountain_system",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "格林芝火山主峰", lon: 101.2642, lat: -1.6975, elevation: 3805, kind: "peak" },
  bbox: [101.15, -1.80, 101.38, -1.58],
  label: { lon: 101.26, lat: -1.52, rotation: 0 },
  source: "格林芝火山：苏门答腊岛最高峰，海拔3805米，是印度尼西亚全国海拔最高的火山，也是亚洲大陆岛屿中最高的活火山；山体坐落于以苏门答腊虎闻名的克林芝—塞布拉特国家公园内，2004年随“苏门答腊热带雨林遗产”整体列入UNESCO世界遗产名录（Wikipedia/PeakVisor WebSearch 2026）",
};

const MOUNT_AGUNG: TerrainEntry = {
  id: "mount-agung",
  nameZh: "阿贡火山",
  nameEn: "Mount Agung",
  category: "mountain_system",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "阿贡火山主峰", lon: 115.5081, lat: -8.3405, elevation: 3031, kind: "peak" },
  bbox: [115.42, -8.42, 115.60, -8.25],
  label: { lon: 115.51, lat: -8.19, rotation: 0 },
  source: "阿贡火山：巴厘岛最高点，海拔3031米，是一座活跃层状火山，在巴厘印度教信仰中被视为神圣之山、传说为湿婆神居所，巴厘规模最大、地位最高的贝萨基母庙即建于山腰；沉寂53年后于2017年11月21日起再度喷发，多次喷发导致逾10万人疏散，火山灰云一度迫使伍拉赖国际机场关闭，活动持续至2019年6月（geology.com/USGS WebSearch 2026）",
};

const ULUWATU_CLIFFS: TerrainEntry = {
  id: "uluwatu-cliffs",
  nameZh: "乌鲁瓦图崖岸",
  nameEn: "Uluwatu Cliffs",
  category: "coast",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "乌鲁瓦图海崖", lon: 115.0849, lat: -8.8291, elevation: 70, kind: "escarpment" },
  bbox: [115.05, -8.85, 115.20, -8.75],
  label: { lon: 115.13, lat: -8.71, rotation: 0 },
  source: "乌鲁瓦图崖岸：巴厘岛南端武吉半岛的石灰岩崖岸，武吉半岛整体由古珊瑚礁抬升构成、地表干燥苍白，与岛屿北部的火山地貌形成鲜明对比；崖体从印度洋垂直陡起，部分崖壁高逾70米，崖顶建有悬崖神庙乌鲁瓦图庙，沿岸分布巴厘岛知名冲浪点（Wikivoyage/inbali.org WebSearch 2026）",
};

const NUSA_PENIDA: TerrainEntry = {
  id: "nusa-penida",
  nameZh: "佩尼达岛",
  nameEn: "Nusa Penida",
  category: "island",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "克林金崖", lon: 115.4592, lat: -8.7501, elevation: 150, kind: "escarpment" },
  bbox: [115.42, -8.78, 115.62, -8.66],
  label: { lon: 115.52, lat: -8.62, rotation: 0 },
  source: "佩尼达岛：巴厘岛东南海域的一座离岛，岛屿西南岸克林金崖由古珊瑚礁历经数百万年抬升形成的石灰岩崖体构成，崖顶高出海面约150米、崖下海滩长约80米，因轮廓形似恐龙而得名（当地语“克林金”原意为“小指”）；2016至2017年前后经社交媒体传播成为全球知名景点（nusapenida.org/theworldtravelguy.com WebSearch 2026）",
};

const MOUNT_RINJANI: TerrainEntry = {
  id: "mount-rinjani",
  nameZh: "林贾尼火山",
  nameEn: "Mount Rinjani",
  category: "mountain_system",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "林贾尼火山主峰", lon: 116.4573, lat: -8.4108, elevation: 3726, kind: "peak" },
  bbox: [116.35, -8.48, 116.56, -8.33],
  label: { lon: 116.46, lat: -8.28, rotation: 0 },
  source: "林贾尼火山：龙目岛最高峰，海拔3726米，是印度尼西亚海拔第二高的火山，仅次于苏门答腊格林芝火山；山体内的塞加拉阿纳克火山口湖由1257年萨马拉斯火山剧烈喷发形成，湖面海拔2004米、面积约11.3平方公里，湖水温度20至22摄氏度、高于同海拔一般湖泊，因地下岩浆加热所致；湖东岸的巴鲁加里火山锥仍在持续活动（Wikipedia/rinjaninationalpark.com WebSearch 2026）",
};

const KELIMUTU: TerrainEntry = {
  id: "kelimutu",
  nameZh: "克利穆图火山湖",
  nameEn: "Kelimutu",
  category: "lake",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "克利穆图三色火山口湖", lon: 121.8177, lat: -8.7686, elevation: 1639, kind: "lake" },
  bbox: [121.77, -8.80, 121.86, -8.73],
  label: { lon: 121.82, lat: -8.68, rotation: 0 },
  source: "克利穆图火山：弗洛雷斯岛中部一座海拔1639米的火山，山顶并列三处火山口湖——蒂乌阿塔布普（“长者湖”）、蒂乌努阿穆里科塔伊（“青年少女湖”）与蒂乌阿塔波洛（“着魔湖”），三湖因矿物成分、水温与气体活动差异而呈现青绿、褐红等不同色泽，且颜色会随时间推移变化，是东南亚罕见的地质景观之一（Wikipedia/earthobservatory.nasa.gov WebSearch 2026）",
};

const KOMODO_NATIONAL_PARK: TerrainEntry = {
  id: "komodo-national-park",
  nameZh: "科莫多国家公园",
  nameEn: "Komodo National Park",
  category: "island",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "科莫多岛", lon: 119.4897, lat: -8.5455, elevation: 500, kind: "island" },
  bbox: [119.35, -8.75, 119.75, -8.40],
  viewScale: 1.3,
  label: { lon: 119.55, lat: -8.35, rotation: 0 },
  source: "科莫多国家公园：位于弗洛雷斯与松巴哇之间海域，面积逾1733平方公里（陆地约603平方公里），包含科莫多、帕达尔、林卡三座主岛与另外26座小岛，园内栖息约5700条科莫多巨蜥——现存体型最大的蜥蜴，也是全球仅存于此的物种；公园同时保护干草原、热带林地与珊瑚礁等多样生态系统，1991年列入UNESCO世界遗产名录（national-parks.org/UNESCO WebSearch 2026）",
};

const MOUNT_TAMBORA: TerrainEntry = {
  id: "mount-tambora",
  nameZh: "坦博拉火山",
  nameEn: "Mount Tambora",
  category: "mountain_system",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "坦博拉火山破火山口", lon: 118.00, lat: -8.25, elevation: 2850, kind: "peak" },
  bbox: [117.85, -8.35, 118.15, -8.15],
  label: { lon: 118.00, lat: -8.10, rotation: 0 },
  source: "坦博拉火山：松巴哇岛北岸的层状火山，喷发前高度估计约4300米；1815年4月的喷发是人类历史有记录以来规模最大的火山爆发，火山爆发指数达VEI 7，喷出逾37立方公里的岩浆物质，山体喷发后塌陷降低逾1400米、现存海拔约2850米，火山碎屑流、地震与海啸共造成至少1万人直接死亡；喷出的火山灰扩散至全球大气层，导致1816年北半球出现“无夏之年”，欧洲多地夏季气温创1766年以来最低纪录（Britannica/Wikipedia WebSearch 2026）",
};

const TANJUNG_PUTING: TerrainEntry = {
  id: "tanjung-puting",
  nameZh: "丹绒普丁国家公园",
  nameEn: "Tanjung Puting National Park",
  category: "river",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "塞孔耶尔河（丹绒普丁河道）", lon: 111.85, lat: -2.75, elevation: 5, kind: "delta" },
  bbox: [111.55, -3.20, 112.30, -2.55],
  axis: [[111.70, -2.65], [112.10, -3.10]],
  viewScale: 1.3,
  label: { lon: 111.90, lat: -2.50, rotation: 0 },
  source: "丹绒普丁国家公园：中加里曼丹沿岸国家公园，面积约41.6万公顷，由旱地龙脑香林、泥炭沼泽林、石楠林、红树林与海岸林等多种生境组成，是婆罗洲现存面积最大、类型最完整的热带泥炭沼泽林保护区之一；1971年灵长类学家比鲁泰·高尔迪卡斯在此建立利基营地研究站，公园以塞孔耶尔河沿岸的红毛猩猩保育与观察闻名，1935年设为禁猎区、1982年正式升格为国家公园（orangutanfoundation.org.au/Wikivoyage WebSearch 2026）",
};

const KAPUAS_RIVER: TerrainEntry = {
  id: "kapuas-river",
  nameZh: "卡普阿斯河",
  nameEn: "Kapuas River",
  category: "river",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "卡普阿斯河河口（坤甸段）", lon: 109.3333, lat: 0.02, elevation: 5, kind: "delta" },
  bbox: [109.30, -1.20, 113.50, 0.90],
  axis: [[112.90, 0.50], [109.35, 0.05]],
  viewScale: 2.0,
  label: { lon: 111.00, lat: 0.90, rotation: 0 },
  source: "卡普阿斯河：印度尼西亚第一长河、婆罗洲岛第一长河，全长约1143公里，发源于西加里曼丹穆勒山脉，自东向西流经山地、沼泽与低地雨林，最终于坤甸附近注入南海；数百年来一直是西加里曼丹沿海与内陆之间贸易与人员往来的主要水道，全流域是东南亚生物多样性最丰富的河流生态系统之一（Wikipedia/indonesia.travel WebSearch 2026）",
};

const TANA_TORAJA: TerrainEntry = {
  id: "tana-toraja",
  nameZh: "塔纳托拉查高原",
  nameEn: "Tana Toraja",
  category: "plateau",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "兰特包（塔纳托拉查中心城镇）", lon: 119.8233, lat: -3.0875, elevation: 800, kind: "city" },
  bbox: [119.65, -3.25, 119.95, -2.85],
  viewScale: 1.2,
  label: { lon: 119.80, lat: -2.79, rotation: 0 },
  source: "塔纳托拉查：南苏拉威西岛内陆高地，面积约2044平方公里，地势起伏、最低点海拔150米、最高点3083米；地貌以石灰岩喀斯特山地、梯田与竹林为主，中心城镇兰特包四周环绕典型喀斯特峰丛与河流；“托拉查”一词源自布吉语，意为“高地上的人”，指代当地世居民族（Wikipedia/journeybeyondhorizon.com WebSearch 2026）",
};

const BUNAKEN_NATIONAL_PARK: TerrainEntry = {
  id: "bunaken-national-park",
  nameZh: "布纳肯国家公园",
  nameEn: "Bunaken National Park",
  category: "coast",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "布纳肯岛", lon: 124.7614, lat: 1.6214, elevation: 20, kind: "island" },
  bbox: [124.70, 1.55, 124.85, 1.70],
  label: { lon: 124.77, lat: 1.50, rotation: 0 },
  source: "布纳肯国家公园：北苏拉威西万鸦老附近海域的国家公园，面积约890平方公里，97%为海域、3%为布纳肯、马纳多图阿等五座岛屿；园区栖息约390种珊瑚与约2000种鱼类，曼纳多湾水深可达1566米，大陆架构造断层形成的垂直峭壁与陡坡是其标志性水下地貌，1991年设立、是印度尼西亚最早的海洋国家公园体系之一（Wikipedia/indiansinindonesia.org WebSearch 2026）",
};

const WAKATOBI: TerrainEntry = {
  id: "wakatobi",
  nameZh: "瓦卡托比群岛",
  nameEn: "Wakatobi",
  category: "coast",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "旺吉旺吉岛", lon: 123.6167, lat: -5.2833, elevation: 10, kind: "island" },
  bbox: [123.35, -5.85, 124.15, -5.05],
  viewScale: 1.4,
  label: { lon: 123.75, lat: -4.99, rotation: 0 },
  source: "瓦卡托比：位于苏拉威西岛东南端外海的群岛，名称取自旺吉旺吉、卡莱杜帕、托米亚、比农果四座主岛首字母；2002年设立瓦卡托比国家公园，总面积约140万公顷（其中珊瑚礁约90万公顷），拥有25组珊瑚礁群、岸礁与环礁类型齐全，礁体周长逾600公里，记录鱼类942种（2003年调查；珊瑚种数各方口径差异大，UNESCO MAB 记396种），自2005年起被列入UNESCO世界遗产预备名录（核实 2026-09-11：原写的「印尼境内仅次于大堡礁」逻辑不通、无学术出处，已删）（reefresilience.org/nationalparksassociation.org WebSearch 2026）",
};

const BANDA_ISLANDS: TerrainEntry = {
  id: "banda-islands",
  nameZh: "班达群岛",
  nameEn: "Banda Islands",
  category: "island",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "班达阿皮火山", lon: 129.8975, lat: -4.5253, elevation: 670, kind: "island" },
  bbox: [129.83, -4.60, 130.05, -4.45],
  label: { lon: 129.90, lat: -4.40, rotation: 0 },
  source: "班达群岛：马鲁古省一处由内伊拉、班达贝萨尔、班达阿皮等11座小型火山岛组成的群岛，陆地总面积约8150公顷；班达阿皮火山海拔约670米，1820年与1852年两次喷发均造成严重破坏；群岛火山土壤适宜肉豆蔻生长，19世纪中叶以前是全球唯一的肉豆蔻与肉豆蔻干皮产地，长期是南亚、阿拉伯与东亚海上贸易网络的重要枢纽（Britannica/factsanddetails.com WebSearch 2026）",
};

const BELITUNG_ISLAND: TerrainEntry = {
  id: "belitung-island",
  nameZh: "勿里洞岛",
  nameEn: "Belitung Island",
  category: "coast",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "丹绒丁宜海滩花岗岩巨石", lon: 107.6482, lat: -2.7410, elevation: 5, kind: "escarpment" },
  bbox: [107.55, -2.85, 107.85, -2.55],
  label: { lon: 107.70, lat: -2.50, rotation: 0 },
  source: "勿里洞岛：邦加—勿里洞省的一座岛屿，沿岸分布大量花岗岩“托尔”地貌巨石，历经数百万年风化侵蚀形成浑圆巨型岩块、部分体量如房屋高大，与洁白沙滩、浅蓝海水相映；岛上还发现“勿里洞石”（一种陨石撞击成因的天然玻璃），2021年列入UNESCO世界地质公园网络（unesco.org/outchasingstars.com WebSearch 2026）",
};

const PUNCAK_JAYA: TerrainEntry = {
  id: "puncak-jaya",
  nameZh: "查亚峰",
  nameEn: "Puncak Jaya",
  category: "mountain_system",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "查亚峰（卡斯滕兹金字塔）", lon: 137.1583, lat: -4.0783, elevation: 4884, kind: "peak" },
  bbox: [137.05, -4.15, 137.30, -4.00],
  label: { lon: 137.18, lat: -3.95, rotation: 0 },
  source: "查亚峰：新几内亚岛苏迪尔曼山脉的主峰，海拔4884米，是印度尼西亚全国最高点，也是大洋洲及全球所有岛屿中的最高峰，登山界常称“卡斯滕兹金字塔”，为“七大洲最高峰”中代表大洋洲的一座；查亚峰是热带地区极少数存在永久冰雪的山峰之一，但当地气象气候地球物理局多年监测显示冰川持续消融，山体所在的洛伦茨国家公园已列入UNESCO世界遗产名录（Wikipedia/nationalgeographic.org WebSearch 2026）",
};

const RAJA_AMPAT: TerrainEntry = {
  id: "raja-ampat",
  nameZh: "拉贾安帕群岛",
  nameEn: "Raja Ampat",
  category: "coast",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "怀吉奥岛海域（皮亚涅莫观景台一带）", lon: 130.1167, lat: -0.5667, elevation: 20, kind: "island" },
  bbox: [130.00, -0.90, 131.20, -0.10],
  viewScale: 1.4,
  label: { lon: 130.60, lat: -0.05, rotation: 0 },
  source: "拉贾安帕群岛：位于“珊瑚三角区”核心地带的群岛，涵盖逾1500座岛屿，主岛为米索尔、萨拉瓦蒂、巴丹塔与怀吉奥；海域记录鱼类逾1800种、珊瑚逾550种，其中锦鲤角一处潜点单次记录到374种鱼类、创下全球纪录，浅海珊瑚礁物种占全球已知珊瑚物种的75%；印度洋与太平洋在此交汇，深海洋流带来的营养物质造就了这片“物种工厂”式的海洋生态系统（reefresilience.org/wwf.panda.org WebSearch 2026）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 亚洲 / 印度尼西亚 =====
  MOUNT_SEMERU, BROMO_TENGGER_CALDERA, MOUNT_MERAPI, IJEN_CRATER,
  DIENG_PLATEAU, GUNUNG_SEWU_KARST, KRAKATOA,
  LAKE_TOBA, GUNUNG_LEUSER, MOUNT_KERINCI,
  MOUNT_AGUNG, ULUWATU_CLIFFS, NUSA_PENIDA,
  MOUNT_RINJANI, KELIMUTU, KOMODO_NATIONAL_PARK, MOUNT_TAMBORA,
  TANJUNG_PUTING, KAPUAS_RIVER,
  TANA_TORAJA, BUNAKEN_NATIONAL_PARK, WAKATOBI,
  BANDA_ISLANDS, BELITUNG_ISLAND,
  PUNCAK_JAYA, RAJA_AMPAT,
];
