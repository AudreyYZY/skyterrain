import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 — 西班牙（regionId: "europe", country: "spain"）
// 坐标 / 高程据西班牙国家地理研究所（IGN）、公园管理机构、UNESCO
// 不含直布罗陀、休达、梅利利亚；跨境地物（比利牛斯）按中性表述、只在西班牙一侧另设专属地物
// ============================================================

const PICOS_DE_EUROPA: TerrainEntry = {
  id: "picos-de-europa",
  nameZh: "欧罗巴峰（欧洲之峰）",
  nameEn: "Picos de Europa",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "布尔内斯尖峰（Naranjo de Bulnes / Picu Urriellu）", lon: -4.836, lat: 43.192, elevation: 2519, kind: "peak" },
  bbox: [-5.15, 43.10, -4.60, 43.30],
  axis: [[-5.1, 43.2], [-4.65, 43.18]],
  label: { lon: -4.9, lat: 43.27, rotation: 0 },
  source: "欧罗巴峰：坎塔布连山脉核心地段，石炭纪石灰岩经阿尔卑斯造山抬升至2600米以上，再叠加冰蚀与喀斯特作用；布尔内斯尖峰（阿斯图里亚斯语 Picu Urriellu）是一根近乎垂直的石灰岩塔，海拔2519m，是西班牙最著名的攀岩地标之一（IGN / 国家公园管理局）",
};

const SISTEMA_CENTRAL: TerrainEntry = {
  id: "sistema-central",
  nameZh: "中央山系",
  nameEn: "Sistema Central",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "阿尔曼索尔峰（格雷多斯山最高峰）", lon: -5.363, lat: 40.267, elevation: 2592, kind: "peak" },
  bbox: [-6.4, 40.0, -3.4, 41.2],
  axis: [[-6.3, 40.35], [-3.5, 41.0]],
  viewScale: 1.5,
  label: { lon: -4.6, lat: 40.9, rotation: -20 },
  source: "中央山系：横贯梅塞塔中部、把它分成南北两块子高原（北子高原属杜罗河流域、南子高原属塔霍河流域）的花岗岩山系，包括瓜达拉马山、格雷多斯山等；主体是海西造山期侵入的花岗岩岩基，在新生代阿尔卑斯造山中被重新抬升、断块化；最高的格雷多斯山阿尔曼索尔峰2592m，保留冰蚀圆谷（IGN）",
};

const SISTEMA_IBERICO: TerrainEntry = {
  id: "sistema-iberico",
  nameZh: "伊比利亚山系",
  nameEn: "Sistema Ibérico",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "乌尔比昂峰（杜罗河发源地）", lon: -2.883, lat: 42.017, elevation: 2228, kind: "peak" },
  bbox: [-3.5, 39.8, -0.5, 42.2],
  axis: [[-2.9, 42.0], [-0.6, 40.0]],
  viewScale: 1.5,
  label: { lon: -1.6, lat: 41.0, rotation: 40 },
  source: "伊比利亚山系：西北—东南向绵延超过500km，是梅塞塔高原与埃布罗盆地、地中海沿岸之间的分水岭，也是伊比利亚半岛大西洋与地中海两大水系的分界——杜罗河、塔霍河向西流，埃布罗河的支流哈隆河等向北流，图里亚河、朱卡尔河向东流；杜罗河即发源于乌尔比昂峰一带；主体为中生代—新生代的灰岩、大理岩与砂岩，阿尔卑斯造山抬升（IGN）",
};

const SIERRA_MORENA: TerrainEntry = {
  id: "sierra-morena",
  nameZh: "莫雷纳山脉",
  nameEn: "Sierra Morena",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "德斯佩尼亚佩罗斯隘口（梅塞塔与瓜达尔基维尔谷地之间的传统关口）", lon: -3.527, lat: 38.383, elevation: 700, kind: "pass" },
  bbox: [-6.8, 37.8, -2.8, 38.6],
  axis: [[-6.5, 38.15], [-3.0, 38.35]],
  viewScale: 1.4,
  label: { lon: -5.0, lat: 38.55, rotation: -6 },
  source: "莫雷纳山脉：梅塞塔高原南缘一道东西向的断块山，把梅塞塔的古生代基底与南边瓜达尔基维尔盆地的新生代沉积陡然分开——山体因阿尔卑斯造山期的挤压沿断裂抬升，北坡缓、南坡（面向盆地一侧）是一道明显的断层崖；最高点不足1400m，山不高但作为南北分界十分连续（IGN）",
};

const SIERRA_NEVADA_ES: TerrainEntry = {
  id: "sierra-nevada-es",
  nameZh: "内华达山脉（西班牙）",
  nameEn: "Sierra Nevada (Spain)",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "穆拉森峰", lon: -3.307, lat: 37.053, elevation: 3479, kind: "peak" },
  bbox: [-3.6, 36.9, -2.9, 37.2],
  axis: [[-3.55, 37.1], [-2.95, 36.95]],
  label: { lon: -3.2, lat: 37.16, rotation: -20 },
  source: "内华达山脉（安达卢西亚）：属贝提科山系（阿尔卑斯造山带的一部分），主要由新生代灰岩与变质岩组成；穆拉森峰3479m，是伊比利亚半岛最高点——比比利牛斯山、坎塔布连山都高，却离地中海海岸只有约40km；山顶保留第四纪冰蚀地貌，冬季有滑雪场（IGN）",
};

const SIERRA_DE_GRAZALEMA: TerrainEntry = {
  id: "sierra-de-grazalema",
  nameZh: "格拉萨莱马山",
  nameEn: "Sierra de Grazalema",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "埃尔托雷翁峰", lon: -5.383, lat: 36.767, elevation: 1648, kind: "peak" },
  bbox: [-5.55, 36.65, -5.15, 36.85],
  label: { lon: -5.42, lat: 36.83, rotation: 0 },
  source: "格拉萨莱马山：安达卢西亚一片石灰岩喀斯特山地，因正对来自大西洋的湿润气流、是水汽遇山抬升的第一道屏障，年均降水量超过2100mm，是西班牙大陆有记录以来最多雨的地方；岩体多孔隙，雨水迅速下渗成地下暗河与溶洞；1977年被列为西班牙第一个联合国教科文组织生物圈保护区（西班牙气象局 / UNESCO）",
};

const GARROTXA_VOLCANIC_ZONE: TerrainEntry = {
  id: "garrotxa-volcanic-zone",
  nameZh: "加罗查火山区",
  nameEn: "La Garrotxa Volcanic Zone",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "克罗斯卡特火山口", lon: 2.530, lat: 42.170, elevation: 835, kind: "peak" },
  bbox: [2.35, 42.05, 2.65, 42.28],
  label: { lon: 2.42, lat: 42.24, rotation: 0 },
  source: "加罗查火山区：伊比利亚半岛东北部一片休眠玄武质火山场，第四纪以来喷发形成40多座火山渣锥、熔岩流与玛珥式火山口；克罗斯卡特火山约1.15万年前喷发，是半岛已知最年轻、保存最完好的火山锥；整个火山区自1982年起为自然公园（IGME / 加泰罗尼亚政府）",
};

const TEIDE: TerrainEntry = {
  id: "teide",
  nameZh: "泰德峰",
  nameEn: "Teide",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "泰德峰火山口", lon: -16.6425, lat: 28.2717, elevation: 3715, kind: "peak" },
  bbox: [-16.75, 28.15, -16.45, 28.35],
  label: { lon: -16.6, lat: 28.36, rotation: 0 },
  source: "泰德峰：加那利群岛特内里费岛上的层状火山，海拔3715m，是西班牙全境最高点；若从大西洋海底基座算起，垂直高度约7500m，是仅次于夏威夷莫纳克亚、莫纳罗亚的世界第三高火山体；山体仍处于休眠期而非死火山；泰德国家公园2007年列入世界自然遗产（UNESCO / 西班牙国家公园管理局）",
};

const MESETA_CENTRAL: TerrainEntry = {
  id: "meseta-central",
  nameZh: "梅塞塔中央高原",
  nameEn: "Meseta Central",
  category: "plateau",
  regionId: "europe",
  country: "spain",
  landmark: { name: "梅塞塔高原腹地（马德里—塞哥维亚一带）", lon: -4.2, lat: 40.7, elevation: 650, kind: "escarpment" },
  bbox: [-7.5, 38.8, -1.0, 42.5],
  viewScale: 2.2,
  label: { lon: -5.0, lat: 41.6, rotation: 0 },
  source: "梅塞塔中央高原：占伊比利亚半岛面积约五分之二的古老台地，平均海拔600—800m，是欧洲面积最大的高原之一；基底是古生代华力西造山形成的伊比利亚地块，长期夷平后又被中央山系一分为二——北为杜罗河流域的北子高原、南为塔霍河与瓜迪亚纳河流域的南子高原；四周被莫雷纳山、伊比利亚山系等更年轻的山地包围（IGN）",
};

const EBRO_BASIN: TerrainEntry = {
  id: "ebro-basin",
  nameZh: "埃布罗盆地",
  nameEn: "Ebro Basin",
  category: "basin",
  regionId: "europe",
  country: "spain",
  landmark: { name: "萨拉戈萨一带（盆地中心）", lon: -0.88, lat: 41.65, elevation: 200, kind: "escarpment" },
  bbox: [-3.0, 41.0, 1.0, 42.8],
  viewScale: 1.7,
  label: { lon: -1.8, lat: 42.3, rotation: 0 },
  source: "埃布罗盆地：夹在比利牛斯山、伊比利亚山系和加泰罗尼亚沿海山脉之间的一个三角形新生代沉积盆地，中新世曾是一个内陆咸水湖盆，之后被埃布罗河体系填满、贯通入海；盆地中心气候干燥，边缘台地上分布着巴德纳斯雷阿莱斯等badland地貌（IGME）",
};

const GUADALQUIVIR_VALLEY: TerrainEntry = {
  id: "guadalquivir-valley",
  nameZh: "瓜达尔基维尔谷地",
  nameEn: "Guadalquivir Valley",
  category: "plain",
  regionId: "europe",
  country: "spain",
  landmark: { name: "科尔多瓦—塞维利亚一带", lon: -5.2, lat: 37.6, elevation: 60, kind: "escarpment" },
  bbox: [-6.3, 36.9, -3.5, 38.3],
  viewScale: 1.6,
  label: { lon: -4.6, lat: 38.1, rotation: 0 },
  source: "瓜达尔基维尔谷地：安达卢西亚一个楔形的新生代前陆盆地，北靠莫雷纳山、南接贝提科山系，瓜达尔基维尔河贯穿其间向西南流入大西洋；是西班牙最肥沃的农业区之一（橄榄、棉花、葵花），塞维利亚是历史上唯一可供远洋帆船溯河直达的内陆港（IGN）",
};

const TABERNAS_DESERT: TerrainEntry = {
  id: "tabernas-desert",
  nameZh: "塔韦纳斯沙漠",
  nameEn: "Tabernas Desert",
  category: "desert",
  regionId: "europe",
  country: "spain",
  landmark: { name: "塔韦纳斯badland地貌", lon: -2.45, lat: 37.09, elevation: 400, kind: "escarpment" },
  bbox: [-2.65, 36.95, -2.25, 37.25],
  label: { lon: -2.55, lat: 37.22, rotation: 0 },
  source: "塔韦纳斯沙漠：位于阿尔梅里亚，夹在洛斯菲拉夫雷斯山与阿拉米利亚山之间的一个构造盆地，约800万年前曾是浅海，之后沉积的海相泥灰岩几乎不含植被、极易被暴雨冲刷成沟壑纵横的badland；年降水量常低于250mm，是欧洲大陆最干旱的地方，被普遍称为“欧洲唯一的沙漠”，虽然按气候学严格标准属半干旱（Junta de Andalucía）",
};

const BARDENAS_REALES: TerrainEntry = {
  id: "bardenas-reales",
  nameZh: "巴德纳斯雷阿莱斯",
  nameEn: "Bardenas Reales",
  category: "desert",
  regionId: "europe",
  country: "spain",
  landmark: { name: "卡斯蒂尔德铁拉孤峰", lon: -1.575, lat: 42.180, elevation: 400, kind: "escarpment" },
  bbox: [-1.75, 42.05, -1.35, 42.35],
  label: { lon: -1.68, lat: 42.32, rotation: 0 },
  source: "巴德纳斯雷阿莱斯：纳瓦拉南部埃布罗盆地边缘一片badland荒漠，由新生代黏土、砂岩、石膏与石灰岩互层构成——黏土松软易被暴雨冲刷，其间夹的硬岩层则抵抗侵蚀，留下孤立的桌状台地与尖塔状孤峰（如卡斯蒂尔德铁拉）；2000年列为联合国教科文组织生物圈保护区（UNESCO）",
};

const TIMANFAYA: TerrainEntry = {
  id: "timanfaya",
  nameZh: "蒂曼法亚",
  nameEn: "Timanfaya",
  category: "plain",
  regionId: "europe",
  country: "spain",
  landmark: { name: "火山山群（Montañas del Fuego）", lon: -13.770, lat: 29.020, elevation: 510, kind: "escarpment" },
  bbox: [-13.87, 28.95, -13.67, 29.10],
  label: { lon: -13.83, lat: 29.09, rotation: 0 },
  source: "蒂曼法亚：加那利群岛兰萨罗特岛西南部一片黑色熔岩原，由1730—1736年一次持续6年的火山喷发形成——一百多个火山口同时或先后喷发，熔岩与火山灰覆盖约200平方公里的农田，摧毁多个村庄；熔岩层最厚处近百米，当地称为“malpaís”（劣地）；如今地表几厘米下仍有余温可点燃干草（西班牙国家公园管理局）",
};

const CALDERA_DE_TABURIENTE: TerrainEntry = {
  id: "caldera-de-taburiente",
  nameZh: "塔布连特火山口",
  nameEn: "Caldera de Taburiente",
  category: "basin",
  regionId: "europe",
  country: "spain",
  landmark: { name: "穆查丘斯岩（火山口北缘最高点）", lon: -17.885, lat: 28.754, elevation: 2426, kind: "peak" },
  bbox: [-17.92, 28.70, -17.83, 28.79],
  label: { lon: -17.86, lat: 28.79, rotation: 0 },
  source: "塔布连特火山口：拉帕尔马岛北部一个巨大的侵蚀火山口，直径约8km、深逾2000m，是世界上最大的侵蚀火山口之一——它不是一次喷发炸出的破火山口，而是约40万年前一座巨大盾状火山的一侧发生山体滑坡后，长期的流水侵蚀掏空内部形成；1954年设为西班牙最早的国家公园之一（Wikipedia / 国家公园管理局）",
};

const RIAS_BAIXAS: TerrainEntry = {
  id: "rias-baixas",
  nameZh: "下利亚斯海湾",
  nameEn: "Rías Baixas",
  category: "coast",
  regionId: "europe",
  country: "spain",
  landmark: { name: "维戈湾", lon: -8.75, lat: 42.23, elevation: 0, kind: "escarpment" },
  bbox: [-9.3, 42.1, -8.6, 42.7],
  axis: [[-9.1, 42.65], [-8.7, 42.15]],
  viewScale: 1.3,
  label: { lon: -8.95, lat: 42.45, rotation: -60 },
  source: "下利亚斯海湾：加利西亚西南海岸四条深入内陆的漏斗状海湾（维戈湾、蓬特维德拉湾、阿罗萨湾、穆罗斯-诺亚湾），是末次冰期后海平面上升淹没原有河谷形成的“溺谷”（ría）——不同于峡湾由冰川挖凿而成，溺谷是未经冰川作用的河谷被海水倒灌，两侧坡度相对平缓；是西班牙重要的贻贝养殖区（IGN）",
};

const COSTA_BRAVA: TerrainEntry = {
  id: "costa-brava",
  nameZh: "布拉瓦海岸",
  nameEn: "Costa Brava",
  category: "coast",
  regionId: "europe",
  country: "spain",
  landmark: { name: "克雷乌斯角", lon: 3.317, lat: 42.317, elevation: 0, kind: "escarpment" },
  bbox: [2.6, 41.6, 3.35, 42.35],
  axis: [[2.65, 41.65], [3.3, 42.3]],
  viewScale: 1.3,
  label: { lon: 2.85, lat: 41.95, rotation: -40 },
  source: "布拉瓦海岸：加泰罗尼亚东北沿海一段以陡峭花岗岩与片岩海崖、细小海湾（cala）交替出现为特征的“险峻海岸”（原意即为此），克雷乌斯角是比利牛斯山脉在地中海的收尾、伊比利亚半岛最东端；强劲的“特拉蒙塔纳风”常年吹拂，把海岸的树木和岩石都塑成偏向一侧的形态（IGN）",
};

const CABO_DE_GATA: TerrainEntry = {
  id: "cabo-de-gata",
  nameZh: "加塔角",
  nameEn: "Cabo de Gata",
  category: "coast",
  regionId: "europe",
  country: "spain",
  landmark: { name: "加塔角灯塔", lon: -2.192, lat: 36.727, elevation: 0, kind: "escarpment" },
  bbox: [-2.30, 36.65, -1.85, 36.95],
  axis: [[-2.28, 36.68], [-1.90, 36.90]],
  label: { lon: -2.05, lat: 36.87, rotation: 30 },
  source: "加塔角：伊比利亚半岛唯一的火山成因海岸，约1300—1400万年前海底安山质—英安质火山喷发形成，如今95%的火山体仍在阿尔沃兰海海面以下；陆上部分是高约百米的火山崖，柱状节理、熔岩穹丘清晰可辨；所在的阿尔梅里亚省是欧洲大陆年均降水量最低的地区（150—170mm），2001年列为联合国教科文组织世界地质公园（UNESCO Global Geopark）",
};

const DONANA: TerrainEntry = {
  id: "donana",
  nameZh: "多尼亚纳湿地",
  nameEn: "Doñana",
  category: "coast",
  regionId: "europe",
  country: "spain",
  landmark: { name: "瓜达尔基维尔河口沼泽", lon: -6.35, lat: 37.0, elevation: 2, kind: "delta" },
  bbox: [-6.55, 36.75, -6.05, 37.25],
  viewScale: 1.4,
  label: { lon: -6.45, lat: 37.2, rotation: 0 },
  source: "多尼亚纳：瓜达尔基维尔河入海口一片约5.4万公顷的季节性沼泽（marisma）、流动沙丘与地中海松林组成的马赛克湿地，是每年数十万只候鸟往返欧洲与非洲的关键中转和越冬地；沼泽夏干冬涝，与沿岸不断向陆地推进的活动沙丘系统相接；1994年列入世界自然遗产（UNESCO）",
};

const DUERO_RIVER: TerrainEntry = {
  id: "duero-river",
  nameZh: "杜罗河",
  nameEn: "Duero River",
  category: "river",
  regionId: "europe",
  country: "spain",
  landmark: { name: "阿里维斯－杜罗峡谷（西班牙与葡萄牙交界）", lon: -6.55, lat: 41.15, elevation: 400, kind: "gorge" },
  bbox: [-6.8, 40.9, -2.9, 41.9],
  axis: [[-2.9, 41.8], [-6.7, 41.1]],
  viewScale: 1.3,
  label: { lon: -4.8, lat: 41.65, rotation: 8 },
  source: "杜罗河：发源于伊比利亚山系乌尔比昂峰一带，全长约900km（其中约570km在西班牙境内），是伊比利亚半岛水量最丰沛的河流，向西流经葡萄牙波尔图入大西洋；在西班牙与葡萄牙交界处切出阿里维斯－杜罗峡谷——一段长逾100km、崖壁陡直的花岗岩峡谷，如今大部分被系列水坝蓄成一串狭长水库（IGN）",
};

const EBRO_RIVER: TerrainEntry = {
  id: "ebro-river",
  nameZh: "埃布罗河",
  nameEn: "Ebro River",
  category: "river",
  regionId: "europe",
  country: "spain",
  landmark: { name: "埃布罗河三角洲", lon: 0.72, lat: 40.72, elevation: 0, kind: "delta" },
  bbox: [0.5, 40.5, 0.9, 40.85],
  label: { lon: 0.65, lat: 40.83, rotation: 0 },
  source: "埃布罗河：西班牙境内最长的河流，全长约930km、流域面积约8.5万平方公里（西班牙最大水系），完全在西班牙境内发源与入海；在塔拉戈纳省注入地中海，河口堆积出一片约320平方公里的鸟足状三角洲——加泰罗尼亚最大的湿地，被稻田和潟湖覆盖，是欧洲候鸟迁徙的重要驿站（IGN）",
};

const ORDESA_CANYON: TerrainEntry = {
  id: "ordesa-canyon",
  nameZh: "奥德萨峡谷",
  nameEn: "Ordesa Canyon",
  category: "gorge",
  regionId: "europe",
  country: "spain",
  landmark: { name: "马蹄尾瀑布（奥德萨谷地尽头）", lon: -0.048, lat: 42.663, elevation: 1780, kind: "gorge" },
  bbox: [-0.20, 42.60, 0.15, 42.75],
  axis: [[-0.15, 42.60], [0.10, 42.72]],
  label: { lon: -0.05, lat: 42.72, rotation: 20 },
  source: "奥德萨峡谷：比利牛斯山脉西班牙一侧、佩尔迪多山（欧洲最高的石灰岩山块，3355m）北坡切出的一道深谷，谷壁近乎垂直、高差可达800余米；与相邻的阿尼斯克洛峡谷（深逾1000m）同属石灰岩喀斯特地貌，谷底常见冰川侵蚀留下的U形槽；“比利牛斯-佩尔迪多山”世界遗产的一部分，法国一侧对应加瓦尔尼冰蚀圆谷（UNESCO / 阿拉贡旅游局）",
};

const SERRA_DE_TRAMUNTANA: TerrainEntry = {
  id: "serra-de-tramuntana",
  nameZh: "特拉蒙塔纳山脉",
  nameEn: "Serra de Tramuntana",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "梅杰峰（马略卡岛最高峰）", lon: 2.783, lat: 39.807, elevation: 1445, kind: "peak" },
  bbox: [2.35, 39.60, 3.05, 39.95],
  axis: [[2.4, 39.65], [3.0, 39.90]],
  label: { lon: 2.55, lat: 39.93, rotation: -15 },
  source: "特拉蒙塔纳山脉：马略卡岛（巴利阿里群岛）西北岸一道陡直的石灰岩山脉，与海岸线平行，喀斯特地貌发育——溶洞、落水洞与地下水系统丰富（如萨坎帕纳洞深达358m）；千百年梯田农业与引水灌溉系统改造了山地地貌，2011年以“特拉蒙塔纳山脉文化景观”列入世界文化遗产（UNESCO）",
};

const LAGO_DE_SANABRIA: TerrainEntry = {
  id: "lago-de-sanabria",
  nameZh: "萨纳布里亚湖",
  nameEn: "Lago de Sanabria",
  category: "lake",
  regionId: "europe",
  country: "spain",
  landmark: { name: "萨纳布里亚湖", lon: -6.72, lat: 42.128, elevation: 1000, kind: "lake" },
  bbox: [-6.80, 42.08, -6.62, 42.18],
  label: { lon: -6.68, lat: 42.17, rotation: 0 },
  source: "萨纳布里亚湖：西班牙面积最大的天然淡水湖，也是伊比利亚半岛最大的冰川湖，面积约369公顷、最深处53m；末次冰期一条长逾20km的冰舌刨蚀出这条冰蚀谷，冰川退却后终碛垄拦住谷口积水成湖，大约形成于最近一次冰期，约10万年前（Junta de Castilla y León）",
};

const LAGUNA_DE_GALLOCANTA: TerrainEntry = {
  id: "laguna-de-gallocanta",
  nameZh: "加约坎塔湖",
  nameEn: "Laguna de Gallocanta",
  category: "lake",
  regionId: "europe",
  country: "spain",
  landmark: { name: "加约坎塔湖", lon: -1.50, lat: 40.970, elevation: 995, kind: "salt-lake" },
  bbox: [-1.58, 40.90, -1.42, 41.03],
  label: { lon: -1.46, lat: 41.02, rotation: 0 },
  source: "加约坎塔湖：伊比利亚半岛最大的内陆咸水湖，属完全封闭的内流水系（无出海口），湖水靠季节性降雨补给，夏季常大片干涸露出盐滩；每年10月至次年3月，西欧灰鹤种群迁徙途中大批在此停歇，最多时数万只在湖边过夜，是欧洲观鹤的重要地点（Gobierno de Aragón）",
};

const LA_MANCHA_PLAIN: TerrainEntry = {
  id: "la-mancha-plain",
  nameZh: "拉曼恰平原",
  nameEn: "La Mancha Plain",
  category: "plain",
  regionId: "europe",
  country: "spain",
  landmark: { name: "克里普塔纳风车群", lon: -3.183, lat: 39.408, elevation: 650, kind: "escarpment" },
  bbox: [-4.0, 38.8, -2.5, 39.8],
  viewScale: 1.5,
  label: { lon: -3.3, lat: 39.7, rotation: 0 },
  source: "拉曼恰平原：梅塞塔南子高原上一片极其平坦开阔的石灰岩台地，平均海拔约600—700m，地表几乎无起伏、地下蓄水层丰富，是西班牙重要的葡萄种植与灌溉农业区；台地边缘残留的白色传统风车（如克里普塔纳、孔苏埃格拉）是当地风蚀-台地地貌的地标，因《堂吉诃德》而闻名（IGN）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 西班牙 =====
  PICOS_DE_EUROPA, SISTEMA_CENTRAL, SISTEMA_IBERICO, SIERRA_MORENA, SIERRA_NEVADA_ES,
  SIERRA_DE_GRAZALEMA, GARROTXA_VOLCANIC_ZONE, TEIDE, SERRA_DE_TRAMUNTANA,
  MESETA_CENTRAL, EBRO_BASIN, GUADALQUIVIR_VALLEY,
  TABERNAS_DESERT, BARDENAS_REALES,
  TIMANFAYA, LA_MANCHA_PLAIN,
  CALDERA_DE_TABURIENTE,
  RIAS_BAIXAS, COSTA_BRAVA, CABO_DE_GATA, DONANA,
  DUERO_RIVER, EBRO_RIVER,
  ORDESA_CANYON,
  LAGO_DE_SANABRIA, LAGUNA_DE_GALLOCANTA,
];
