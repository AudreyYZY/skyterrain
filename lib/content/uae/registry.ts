import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 亚洲 / 阿拉伯联合酋长国（西亚次区域；联合国 M49 归西亚）；小国口径 12 条
// 零争议红线：海湾岛屿主权争议对象一律不收不提，出露盐丘不写数量与名单；海域名称有命名争议 —— 正文统一写「海湾 / the Gulf」，阿曼湾照写；
// 与邻国的陆界、飞地与交界城镇（哈塔、迪巴、西端萨布哈、绿洲城市相连关系）不写；「阿联酋最高峰」的顶点位置跨国界，不写名次；
// 国土面积两说（与岛屿、未定界陆界的计入方式有关）不写；政治体制、宗教、劳工与移民、人工岛与大型开发、港口与油气设施不写。
// 骨架（u.ae / MOCCAE）：地表以沙漠为主，从海湾南岸延伸到鲁卜哈利；东侧是毗邻哈杰尔山的砾石平原；南北走向的哈杰尔山沿东部分布（约占国土 2.6%）；
// 西南沿海是萨布哈与红树林、岛群浅滩，近岸有盐丘岛。莫雷布沙丘（官方高度与地形数据不符）、瓦斯巴化石沙丘（官方年龄同页两说）本批不收。
// 主要来源：u.ae 政府门户（署名 MOCCAE）、阿布扎比环境署 EAD、UNESCO（世界遗产 / 预备名录 / MAB）、英国地质调查局论文（2 级）；统计中心与 MOCCAE 官网拒绝脚本。
// 东部山地锚点离陆界多在 3–5 km（阿联酋境内的哈杰尔山与邻国国土交错），正文不写交界；未查到实测海拔的为 SRTM 估值。
// ============================================================

const HAJAR_MOUNTAINS_UAE: TerrainEntry = {
  id: "hajar-mountains-uae",
  nameZh: "哈杰尔山脉（阿联酋境内）",
  nameEn: "Hajar Mountains (UAE)",
  category: "mountain_system",
  regionId: "asia",
  country: "uae",
  landmark: { name: "杰贝勒梅卜拉山", lon: 56.12858, lat: 25.64858, elevation: 1527, kind: "peak" },
  bbox: [55.95, 24.75, 56.40, 26.08],
  axis: [[56.10, 26.00], [56.20, 24.85]],
  viewScale: 1.8,
  label: { lon: 56.000, lat: 25.350, rotation: 0 },
  source: "哈杰尔山脉阿联酋境内部分（Jibāl al-Ḥajar）：南北走向、沿东部分布，山地约占国土 2.6%、延伸约 155 km，最高接近 2,000 m，隔开东边的阿曼湾与西边海湾一侧的沙丘，瓦迪通常干涸、凉季降雨时有溪流与水潭；杰贝勒梅卜拉山 1,527 m（u.ae 政府门户「Topography and ecosystems」页（署名气候变化与环境部 MOCCAE，1 级，2026-09-03 更新））；哈杰尔山保存大量形成于晚白垩世板块构造活动的完好蛇绿岩序列露头（UNESCO whc 1724 中文官方译文，1 级）；蛇绿岩最北的霍尔法坎块几乎全在阿联酋境内，西北部为地幔橄榄岩、东南部保存从地幔经莫霍过渡带到层状辉长岩的洋壳剖面（英国地质调查局 BGS 论文，2 级）；北部酋长国一带山地以碳酸盐岩为主，与南边的蛇绿岩山地不同，蛇绿岩仰冲后山地在约 4,500–4,000 万年前（Hansman et al. 2017；BGS 论文原写至 3,500 万年前）与 2,000–1,500 万年前两期抬升（BGS，2 级）。「阿联酋最高峰」与杰贝勒杰斯顶点位置跨国界冲突不写；锚点离国界约 3.3 km，所属酋长国两说不写；邻国飞地与交界关系不写（研究子代理事实表 2026-09-15）",
};

const JEBEL_HAFEET: TerrainEntry = {
  id: "jebel-hafeet",
  nameZh: "哈菲特山",
  nameEn: "Jebel Hafeet",
  category: "mountain_system",
  regionId: "asia",
  country: "uae",
  landmark: { name: "哈菲特山山顶一带", lon: 55.76832, lat: 24.07841, elevation: 933, kind: "peak" },
  bbox: [55.72, 23.95, 55.85, 24.12],
  axis: [[55.74, 24.11], [55.82, 23.97]],
  label: { lon: 55.720, lat: 24.140, rotation: 0 },
  source: "哈菲特山（Jabal Ḥafīt）：位于阿布扎比酋长国，海拔 1,240 m，山麓有约 5,000 年前的石冢古墓（u.ae 政府门户「Topography and ecosystems」页（署名气候变化与环境部 MOCCAE，1 级，2026-09-03 更新）；阿布扎比环境署 EAD，1 级）；哈菲特山国家公园是阿布扎比酋长国唯一的山地保护区（EAD，1 级）；「哈菲特」是 2011 年列入世界遗产的阿尔艾因文化遗址组成部分之一（UNESCO whc 1343，1 级）；山体北北西—南南东走向、长约 26 km、高出周围平原约 900 m，由始新世—早中新世浅海灰岩与泥灰岩构成，是向东倒转的不对称背斜，核部附近有约 40 °C 的温泉（英文维基带学术引文，3 级）。「第二高峰」「阿布扎比最高峰」不写；边界与山顶位于哪一侧不写；锚点海拔为 SRTM 估值（研究子代理事实表 2026-09-15）",
};

const EAST_COAST_UAE: TerrainEntry = {
  id: "east-coast-uae",
  nameZh: "阿曼湾海岸（豪尔费坎—富查伊拉）",
  nameEn: "Gulf of Oman Coast (Khor Fakkan–Fujairah)",
  category: "coast",
  regionId: "asia",
  country: "uae",
  landmark: { name: "豪尔费坎", lon: 56.34781, lat: 25.34917, elevation: 21, kind: "city" },
  bbox: [56.25, 25.00, 56.40, 25.60],
  axis: [[56.32, 25.58], [56.33, 25.02]],
  viewScale: 1.3,
  label: { lon: 56.200, lat: 25.300, rotation: 0 },
  source: "阿联酋东海岸（阿曼湾一侧）：霍尔法坎山三面环抱豪尔费坎城（最高点高程两说：u.ae 页面约 1,535 m / Khaleej Times 约 1,100 m，正文不写）；哈杰尔山把东边的阿曼湾与西边海湾一侧的沙丘分开（u.ae 政府门户「Topography and ecosystems」页（署名气候变化与环境部 MOCCAE，1 级，2026-09-03 更新））；富查伊拉是唯一完全位于东海岸的酋长国（u.ae「The Seven Emirates」，1 级）；蛇绿岩霍尔法坎块长约 60 km，构成东海岸背后的山地（BGS，2 级）。海岸长度只有 3 级来源不写；珊瑚种数无年份不写；北端三方分属的城镇、内陆飞地、港口与油储不写；中文按中文维基「豪尔费坎」（研究子代理事实表 2026-09-15）",
};

const WADI_WURAYAH: TerrainEntry = {
  id: "wadi-wurayah",
  nameZh: "瓦迪乌拉亚",
  nameEn: "Wadi Wurayah",
  category: "gorge",
  regionId: "asia",
  country: "uae",
  landmark: { name: "瓦迪乌拉亚", lon: 56.26579, lat: 25.48233, elevation: 323, kind: "gorge" },
  bbox: [56.18, 25.30, 56.36, 25.55],
  label: { lon: 56.270, lat: 25.580, rotation: 0 },
  source: "瓦迪乌拉亚（Wādī al-Wurayʿah）：2026 年列入世界遗产，遗产区 22,000 ha、缓冲区 4,500 ha，全境位于富查伊拉酋长国的哈杰尔山脉，已记录 1,099 种生物（UNESCO whc 1724 与地图页，1 级；中文名为 UNESCO 官方译名）；生物圈保护区页：主要地貌是山脊、瓦迪系统与冲积平原，径流在透水层与不透水层接触处以泉出露，淡水生境全部靠泉补给，水流在地下与地表之间交替，山地侵蚀强、几乎不发育土壤（UNESCO MAB，1 级）；列为拉姆萨尔湿地（u.ae 政府门户「Topography and ecosystems」页（署名气候变化与环境部 MOCCAE，1 级，2026-09-03 更新））。锚点为 UNESCO 代表坐标，海拔为 SRTM 估值；居民构成不写；列入标准与生物圈保护区年份未核不写（研究子代理事实表 2026-09-15）",
};

const KHOR_KALBA: TerrainEntry = {
  id: "khor-kalba",
  nameZh: "卡勒巴溪红树林",
  nameEn: "Khor Kalba Mangroves",
  category: "coast",
  regionId: "asia",
  country: "uae",
  landmark: { name: "卡勒巴溪", lon: 56.36484, lat: 25.02192, elevation: 0, kind: "lake" },
  bbox: [56.33, 24.99, 56.38, 25.06],
  label: { lon: 56.360, lat: 25.090, rotation: 0 },
  source: "卡勒巴溪红树林（Khawr Kalbāʾ）：拉姆萨尔湿地「卡勒巴溪红树林与哈菲亚保护区」，以红树林生态系统著称（u.ae 政府门户「Topography and ecosystems」页（署名气候变化与环境部 MOCCAE，1 级，2026-09-03 更新））；2013 年 3 月列入拉姆萨尔名录、为阿联酋第三处，此前 2012 年埃米尔令保护了 1,494 ha 的哈菲亚区域，包括沿海红树林、相邻泥滩及其后的平地与山地（The National 2013-03-21，2 级）。「本区最高大成片的海榄雌」只有检索摘要不写；南端邻近陆界与「飞地」说法不写；人工潟湖不写成地貌（研究子代理事实表 2026-09-15）",
};

const HAJAR_GRAVEL_PLAINS: TerrainEntry = {
  id: "hajar-gravel-plains",
  nameZh: "哈杰尔山前砾石平原",
  nameEn: "Hajar Gravel Plains",
  category: "plain",
  regionId: "asia",
  country: "uae",
  landmark: { name: "达伊德", lon: 55.8781, lat: 25.28069, elevation: 114, kind: "oasis" },
  bbox: [55.55, 24.10, 56.00, 25.70],
  axis: [[55.80, 25.65], [55.70, 24.15]],
  viewScale: 1.7,
  label: { lon: 55.600, lat: 25.000, rotation: 0 },
  source: "哈杰尔山前砾石平原：沙漠的东边是毗邻哈杰尔山的砾石平原，绿洲多为椰枣林（u.ae 政府门户「Topography and ecosystems」页（署名气候变化与环境部 MOCCAE，1 级，2026-09-03 更新））；大片第四纪冲积扇从哈杰尔山向西延伸，称希利组，阿尔艾因附近厚逾 40 m、向西变薄，由蛇绿岩质砾岩、石英砂与粉砂组成，是如今已不活动的冲积扇与辫状平原沉积；北部酋长国的冲积扇主要是石灰岩碎屑；干旱期风成沙漫上冲积扇、湿润期再被河流改造（BGS 沙丘物源论文，2 级）；阿尔艾因绿洲的法拉吉灌溉系统公元前 1 千纪已引入（UNESCO whc 1343，1 级）。平原面积与宽度无来源不写；阿尔艾因离国界过近，只作背景一句（研究子代理事实表 2026-09-15）",
};

const JEBEL_FAYA: TerrainEntry = {
  id: "jebel-faya",
  nameZh: "法亚山（法亚古地貌）",
  nameEn: "Jebel Faya (Faya Palaeolandscape)",
  category: "inselberg",
  regionId: "asia",
  country: "uae",
  landmark: { name: "法亚山", lon: 55.83896, lat: 25.1114, elevation: 412, kind: "peak" },
  bbox: [55.76, 25.00, 55.87, 25.17],
  label: { lon: 55.820, lat: 25.200, rotation: 0 },
  source: "法亚山与法亚古地貌（Jabal al-Fāyah）：法亚古地貌 2025 年列入世界遗产，遗产区 29,085 ha，保存距今约 21 万至 6 千年的人类活动证据，当地气候约以 2 万年为周期在干燥与多雨之间轮替，早期人类群体充分利用当地地质特征采集资源（UNESCO whc 1735，1 级；中文名为 UNESCO 官方译名）；法亚山位于沙迦酋长国，是一座石灰岩山，地形崎岖（u.ae 政府门户「Topography and ecosystems」页（署名气候变化与环境部 MOCCAE，1 级，2026-09-03 更新））；山顶海拔 412 m（OSM / Wikidata）。背斜长度两说不写；UNESCO 简述中涉及海湾名称的一句不照搬（研究子代理事实表 2026-09-15）",
};

const RUB_AL_KHALI_UAE: TerrainEntry = {
  id: "rub-al-khali-uae",
  nameZh: "鲁卜哈利沙漠北缘（利瓦）",
  nameEn: "Rub' al Khali northern edge (Liwa)",
  category: "desert",
  regionId: "asia",
  country: "uae",
  landmark: { name: "利瓦绿洲", lon: 53.79662, lat: 23.13231, elevation: 134, kind: "oasis" },
  bbox: [53.20, 22.80, 54.60, 23.60],
  axis: [[53.25, 23.20], [54.55, 23.25]],
  viewScale: 2.0,
  label: { lon: 53.900, lat: 23.680, rotation: 0 },
  source: "鲁卜哈利沙漠北缘（利瓦一带）：沙漠是阿联酋的主导景观，从海湾南岸延伸到鲁卜哈利沙海（u.ae 政府门户「Topography and ecosystems」页（署名气候变化与环境部 MOCCAE，1 级，2026-09-03 更新））；利瓦的大型巨型新月形沙丘由较暗的红橙褐色、铁质包膜的石英细砂构成，阿联酋中部出露的第四纪古沙丘砂岩向南埋在现代沙丘之下，盛行的西北向沙姆拉风把海岸带风蚀出的沙吹向内陆（BGS 沙丘物源论文，2 级）；利瓦丘间平地形成内陆萨布哈，地表是饱和盐壳、较淡的地下水从下方流入，地下水形成于距今约 9,000–6,200 年的较湿润期（McKay et al. 2016 PLoS ONE，2 级）；卡斯尔萨拉卜保护区由 308 km² 的天然沙丘与萨布哈组成（EAD，1 级）。沙丘高度只有检索摘要、「世界最大沙海」为名次，不写；南侧国界与邻国油田不写（研究子代理事实表 2026-09-15）",
};

const ABU_DHABI_SABKHA: TerrainEntry = {
  id: "abu-dhabi-sabkha",
  nameZh: "阿布扎比沿海萨布哈",
  nameEn: "Abu Dhabi Coastal Sabkha",
  category: "plain",
  regionId: "asia",
  country: "uae",
  landmark: { name: "阿布扎比沿海萨布哈", lon: 53.95, lat: 24.05, elevation: 5, kind: "salt-lake" },
  bbox: [52.60, 23.90, 54.60, 24.30],
  axis: [[52.65, 24.10], [54.55, 24.15]],
  viewScale: 2.0,
  label: { lon: 53.600, lat: 24.380, rotation: 0 },
  source: "阿布扎比沿海萨布哈（Abu Dhabi Sabkha，UNESCO 世界遗产预备名录 6352，2018，缔约国自述，1 级）：萨布哈在过去约 7,000 年由既有沙丘被风蚀加上碳酸盐沉积向海推进而形成，宽处可达十几公里，平均坡度约 1:3000，夏季地表可达 60 °C 以上，孔隙水被毛细作用抽到地表析出石盐、石膏、硬石膏，高地下水位把风吹来的沙粘住使表面保持平坦并缓慢抬高，风暴潮会淹没萨布哈；阿布扎比西南部是沿海盐滩（u.ae 政府门户「Topography and ecosystems」页（署名气候变化与环境部 MOCCAE，1 级，2026-09-03 更新））；潟湖南岸是蓝细菌（藻）席滩，向陆过渡为潮上带萨布哈，碳测年显示藻席在最近约 4,000 年里向海推进约 7 km（Alsharhan & Kendall 2025，2 级）。宽度两说（预备名录十几公里 / u.ae 部分地方超过 1.5 km），正文带口径；「唯一」「最好」不写；计划中的保护与地质公园不写；西端萨布哈不提；锚点为按描述估的点（研究子代理事实表 2026-09-15）",
};

const ABU_DHABI_MANGROVES: TerrainEntry = {
  id: "abu-dhabi-mangroves",
  nameZh: "阿布扎比红树林海岸",
  nameEn: "Abu Dhabi Mangrove Coast",
  category: "coast",
  regionId: "asia",
  country: "uae",
  landmark: { name: "红树林国家公园", lon: 54.40889, lat: 24.45286, elevation: 5, kind: "lake" },
  bbox: [54.35, 24.38, 54.62, 24.60],
  label: { lon: 54.480, lat: 24.640, rotation: 0 },
  source: "阿布扎比红树林海岸：阿布扎比沿海红树林约 70 km²（u.ae 政府门户「Topography and ecosystems」页（署名气候变化与环境部 MOCCAE，1 级，2026-09-03 更新），页面无年份）；红树林国家公园是谢赫扎耶德保护区网络的一部分，大片红树林中间有水道穿过，有大红鹳、岩鹭等（EAD，1 级）；阿布扎比近岸红树林为海榄雌单优群落（UNESCO MAB 马拉瓦页，1 级）。公园面积只有商业页不写；周边开发项目不写（研究子代理事实表 2026-09-15）",
};

const MARAWAH: TerrainEntry = {
  id: "marawah",
  nameZh: "马拉瓦岛群与浅滩",
  nameEn: "Marawah Islands and Shoals",
  category: "coast",
  regionId: "asia",
  country: "uae",
  landmark: { name: "马拉瓦岛", lon: 53.28889, lat: 24.29833, elevation: 1, kind: "island" },
  bbox: [52.90, 24.00, 53.80, 24.60],
  viewScale: 1.4,
  label: { lon: 53.300, lat: 24.660, rotation: 0 },
  source: "马拉瓦海洋生物圈保护区：2007 年列入人与生物圈计划，总面积 545,500 ha（陆地 21,960 ha、海域 523,540 ha），含众多岛屿、海岸线逾 120 km；生境有海草床、珊瑚群落、大型藻类、海榄雌纯林、沿海萨布哈、岩岸、沙岸与岩脊；地表地质为五类以第四纪为主的沉积：萨布哈、沙丘沙、夹丘间萨布哈的沙丘沙、古沙丘沉积、碳酸盐海滩沙；是儒艮具有全球意义的栖息与觅食地（UNESCO MAB，1 级）。「占全国 4%」、儒艮名次、珍珠名次与人口不写；bbox 为估值（研究子代理事实表 2026-09-15）",
};

const SIR_BANI_YAS: TerrainEntry = {
  id: "sir-bani-yas",
  nameZh: "西尔巴尼亚斯岛",
  nameEn: "Sir Bani Yas Island",
  category: "island",
  regionId: "asia",
  country: "uae",
  landmark: { name: "西尔巴尼亚斯岛高点", lon: 52.59771, lat: 24.32377, elevation: 132, kind: "island" },
  bbox: [52.55, 24.26, 52.68, 24.38],
  label: { lon: 52.610, lat: 24.420, rotation: 0 },
  source: "西尔巴尼亚斯岛（Ṣīr Banī Yās）：阿联酋的出露盐丘出露于海湾近岸的若干岛屿上，杰贝勒丹纳是唯一在陆地上被剥蚀出露核部的一处；盐源是深埋的埃迪卡拉纪—寒武纪「霍尔木兹盐」，底辟主要在中新世侵位；出露处的岩盐已被淋滤殆尽、只剩石膏，各盐丘核部都是被深切的浑圆丘陵，平面近圆形到椭圆形；盐丘本体是夹有从深处带上来的基底巨型岩块的角砾岩，西尔巴尼亚斯岛采到的长石斑岩与流纹岩样品就来自这些外来岩块（英国地质调查局盐丘论文，2 级）；岛现为野生动物保护区与鸟类保护区（EAD，1 级）。出露盐丘数量与名单不转述；「最大的岛」名次冲突不写；岛上最高点海拔为 SRTM 估值；宗教遗址与邻近油气设施不写（研究子代理事实表 2026-09-15）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 亚洲 / 阿联酋 =====
  HAJAR_MOUNTAINS_UAE, JEBEL_HAFEET, EAST_COAST_UAE, WADI_WURAYAH,
  KHOR_KALBA, HAJAR_GRAVEL_PLAINS, JEBEL_FAYA, RUB_AL_KHALI_UAE,
  ABU_DHABI_SABKHA, ABU_DHABI_MANGROVES, MARAWAH, SIR_BANI_YAS,
];
