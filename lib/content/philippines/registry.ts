import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 亚洲 — 菲律宾
// ============================================================

const MAYON_VOLCANO: TerrainEntry = {
  id: "mayon-volcano",
  nameZh: "马荣火山",
  nameEn: "Mayon Volcano",
  category: "mountain_system",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "马荣火山主峰", lon: 123.685, lat: 13.2572, elevation: 2462, kind: "peak" },
  bbox: [123.58, 13.18, 123.79, 13.35],
  viewFrom: 90,
  label: { lon: 123.685, lat: 13.11, rotation: 0 },
  source: "马荣火山：吕宋岛阿尔拜省地标性活火山，海拔2462米，锥体呈近乎完美的对称圆锥形，椭圆度指数低至1.04、为全球层状火山中最低（形态最对称），400年间记录喷发逾49次，是菲律宾最活跃的火山；1938年划设为国家公园，是菲律宾最早一批国家公园之一（阿波山1936年更早）（Britannica/amusingplanet.com WebSearch 2026）",
};

const TAAL_LAKE: TerrainEntry = {
  id: "taal-lake",
  nameZh: "塔阿尔湖",
  nameEn: "Taal Lake",
  category: "lake",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "火山岛主火山口湖", lon: 120.9938, lat: 14.0021, elevation: 311, kind: "salt-lake" },
  bbox: [120.85, 13.90, 121.08, 14.10],
  viewScale: 1.2,
  label: { lon: 120.90, lat: 13.85, rotation: 0 },
  source: "塔阿尔湖：吕宋岛西南部一处火山破火山口湖，面积267平方公里、湖面海拔仅约3米，1754年一次剧烈喷发的大量喷发物堵塞邦西皮特河、切断湖泊与海洋的连通，此后逐渐由咸水湖淡化为淡水湖；湖心矗立“火山岛”（海拔约300米），岛上火山口内又有一处主火山口湖，湖中再有一座“火山点”小岛，构成“湖中岛中湖中岛”的罕见嵌套地貌，自1572年以来记录喷发逾34次（Britannica/livescience.com WebSearch 2026）",
};

const MOUNT_PINATUBO: TerrainEntry = {
  id: "mount-pinatubo",
  nameZh: "皮纳图博火山",
  nameEn: "Mount Pinatubo",
  category: "mountain_system",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "皮纳图博火山口湖", lon: 120.35, lat: 15.13, elevation: 1486, kind: "peak" },
  bbox: [120.27, 15.06, 120.43, 15.20],
  viewScale: 1.1,
  label: { lon: 120.35, lat: 15.22, rotation: 0 },
  source: "皮纳图博火山：1991年6月15日发生20世纪第二大规模火山喷发，喷发柱高逾40公里、总喷出物约8至10立方公里（折合致密岩浆约4至5立方公里），火山爆发指数达VEI 6；剧烈喷发导致山顶塌陷形成宽约2.5公里的破火山口，山体高度较喷发前降低约260米，山顶如今蓄有一汪蓝绿色火山口湖，是菲律宾知名的徒步目的地（USGS/Global Volcanism Program WebSearch 2026）",
};


const MOUNT_PULAG: TerrainEntry = {
  id: "mount-pulag",
  nameZh: "普拉格山",
  nameEn: "Mount Pulag",
  category: "mountain_system",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "普拉格山主峰", lon: 120.90, lat: 16.5947, elevation: 2928, kind: "peak" },
  bbox: [120.82, 16.52, 120.98, 16.67],
  label: { lon: 120.90, lat: 16.44, rotation: 0 },
  source: "普拉格山：吕宋岛最高峰、菲律宾全国第三高峰，海拔2928米，位于本格特、伊富高与新怡诗夏三省交界；以清晨可见的“云海”景观与观测银河的绝佳视野著称，山体划入普拉格山国家公园，是当地原住民的传统文化圣地（PeakVisor/Wikivoyage WebSearch 2026）",
};

const CORDILLERA_CENTRAL_LUZON: TerrainEntry = {
  id: "cordillera-central-luzon",
  nameZh: "科迪勒拉山脉（吕宋）",
  nameEn: "Cordillera Central (Luzon)",
  category: "mountain_system",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "科迪勒拉山脉中段", lon: 120.9, lat: 16.8, elevation: 2000, kind: "peak" },
  bbox: [120.5, 16.2, 121.4, 18.2],
  axis: [[120.65, 18.05], [121.1, 16.35]],
  viewScale: 1.4,
  label: { lon: 120.75, lat: 17.5, rotation: -15 },
  source: "科迪勒拉山脉：吕宋岛中北部一条南北长约320公里、东西宽约118公里的山系，是菲律宾海拔最高的山脉，涵盖普拉格山等多座高峰；山脉东南端经卡拉巴略山脉与锡拉马德雷山脉相接，是伊富高梯田等高山农业景观所在的地理骨架（Wikipedia WebSearch 2026）",
};

const SIERRA_MADRE_PHILIPPINES: TerrainEntry = {
  id: "sierra-madre-philippines",
  nameZh: "锡拉马德雷山脉",
  nameEn: "Sierra Madre (Philippines)",
  category: "mountain_system",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "锡拉马德雷山脉中段", lon: 122.0, lat: 16.5, elevation: 1000, kind: "peak" },
  bbox: [121.4, 14.0, 122.3, 18.5],
  axis: [[122.0, 18.3], [121.6, 14.1]],
  viewScale: 1.5,
  label: { lon: 121.75, lat: 16.0, rotation: -12 },
  source: "锡拉马德雷山脉：菲律宾最长的山脉，沿吕宋岛东岸自北部卡加延省延伸至南部奎松省，南北长约540公里；山脉在东南部经卡拉巴略山脉与科迪勒拉山脉相接，是卡加延河的发源山系之一，长期作为吕宋岛东岸抵御太平洋风暴潮的天然屏障（Wikipedia/earthjournalism.net WebSearch 2026）",
};

const MOUNT_KANLAON: TerrainEntry = {
  id: "mount-kanlaon",
  nameZh: "甘伦火山",
  nameEn: "Mount Kanlaon",
  category: "mountain_system",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "甘伦火山口", lon: 123.1322, lat: 10.4119, elevation: 2465, kind: "peak" },
  bbox: [123.05, 10.35, 123.22, 10.48],
  label: { lon: 123.13, lat: 10.30, rotation: 0 },
  source: "甘伦火山：内格罗斯岛最高峰、维萨亚斯群岛最高峰，海拔2465米，是安山质层状活火山，1819年以来记录喷发逾30次、是菲律宾第三活跃的火山；山顶为一处宽约2公里的椭圆形破火山口，内含两个火山口——一处已熄灭并蓄有火山口湖，另一处“卢古德火山口”宽约250米、深150至200米，仍为历史活跃喷发口；1934年设立甘伦国家公园（Wikipedia/volcanodiscovery.com WebSearch 2026）",
};

const CHOCOLATE_HILLS: TerrainEntry = {
  id: "chocolate-hills",
  nameZh: "巧克力山",
  nameEn: "Chocolate Hills",
  category: "hills",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "巧克力山观景台", lon: 124.1697, lat: 9.8264, elevation: 100, kind: "peak" },
  bbox: [124.10, 9.77, 124.24, 9.88],
  viewScale: 1.2,
  label: { lon: 124.17, lat: 9.90, rotation: 0 },
  source: "巧克力山：保和岛一处喀斯特丘陵群，已确认至少1260座、可能逾1776座锥形山丘，分布范围逾50平方公里，山丘高度介于30至120米之间；山体由上新世至更新世海底沉积的珊瑚礁石灰岩经构造抬升出露海面、再经热带降雨长期溶蚀而成，旱季草皮转为棕色时呈现类似巧克力的外观（Wikipedia/geologyscience.com WebSearch 2026）",
};

const BANAUE_IFUGAO_RICE_TERRACES: TerrainEntry = {
  id: "banaue-ifugao-rice-terraces",
  nameZh: "伊富高梯田（班奈梯田）",
  nameEn: "Rice Terraces of the Philippine Cordilleras (Banaue-Ifugao)",
  category: "valley",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "巴塔德梯田观景点", lon: 121.20, lat: 16.93, elevation: 1500, kind: "grassland" },
  bbox: [121.03, 16.83, 121.28, 17.03],
  viewScale: 1.1,
  label: { lon: 121.20, lat: 16.78, rotation: 0 },
  source: "伊富高梯田：科迪勒拉山脉中伊富高族两千余年前开凿的山地梯田系统，逾48处梯田群沿山势层层攀升，仅靠简单工具即建成配套精密的灌溉水利网络；1995年其中巴塔德、邦岸、马约瑶、洪古丹、纳加达坎五处梯田群以“菲律宾科迪勒拉水稻梯田”列入UNESCO世界遗产名录，班奈镇周边梯田因现代建筑密集、完整性评分较低未被纳入名录（UNESCO/newworldencyclopedia.org WebSearch 2026）",
};

const CAMIGUIN_ISLAND: TerrainEntry = {
  id: "camiguin-island",
  nameZh: "卡米金岛",
  nameEn: "Camiguin Island",
  category: "island",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "希博克—希博克火山", lon: 124.6742, lat: 9.2033, elevation: 1332, kind: "peak" },
  bbox: [124.60, 9.10, 124.77, 9.28],
  label: { lon: 124.68, lat: 9.06, rotation: 0 },
  source: "卡米金岛：棉兰老岛北部近海一座梨形火山岛，面积约238平方公里，境内密布七座火山、单位面积火山密度居世界前列，因整座岛屿由海底火山喷发堆积而成而俗称“火之岛”；最高峰希博克—希博克火山海拔1332米，是岛上最活跃的火山；岛上另有因1871年火山活动沉入海底的“沉没墓园”遗址（Wikipedia/scmp.com WebSearch 2026）",
};

const BATANES_ISLANDS: TerrainEntry = {
  id: "batanes-islands",
  nameZh: "巴丹群岛",
  nameEn: "Batanes Islands",
  category: "island",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "巴丹岛（巴斯科）", lon: 121.9683, lat: 20.4487, elevation: 100, kind: "island" },
  bbox: [121.80, 20.30, 122.10, 20.95],
  label: { lon: 121.95, lat: 20.20, rotation: 0 },
  source: "巴丹群岛：菲律宾最北端的岛群，主要由巴丹岛、萨布唐岛与伊特巴亚特岛三座有人居住的岛屿组成；巴丹岛由火山喷发形成、地表起伏为开阔草丘，萨布唐岛与伊特巴亚特岛则主要由珊瑚礁石灰岩经板块构造运动抬升而成、以更陡峭的悬崖地貌为特征；伊特巴亚特岛是菲律宾最北端的有人岛屿，当地伊瓦坦族保留独特的石屋建筑传统（Wikipedia WebSearch 2026）",
};

const EL_NIDO_BACUIT_ARCHIPELAGO: TerrainEntry = {
  id: "el-nido-bacuit-archipelago",
  nameZh: "艾尔尼多—巴奎特群岛",
  nameEn: "El Nido / Bacuit Archipelago",
  category: "island",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "巴奎特湾", lon: 119.3833, lat: 11.2000, elevation: 5, kind: "island" },
  bbox: [119.30, 11.12, 119.50, 11.30],
  label: { lon: 119.38, lat: 11.32, rotation: 0 },
  source: "艾尔尼多—巴奎特群岛：巴拉望岛北端一处由45座石灰岩岛礁组成的群岛，岛礁遍布喀斯特崖壁、落水洞与潟湖；“艾尔尼多”（西班牙语意为“巢”）得名于岛礁石灰岩崖壁与洞穴中金丝燕筑巢的现象，是菲律宾知名的跳岛游与潜水目的地（Roughguides/bestdivingphilippines.com WebSearch 2026）",
};

const TUBBATAHA_REEFS: TerrainEntry = {
  id: "tubbataha-reefs",
  nameZh: "图巴塔哈群礁",
  nameEn: "Tubbataha Reefs",
  category: "island",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "图巴塔哈北环礁", lon: 119.8664, lat: 8.8500, elevation: 0, kind: "island" },
  bbox: [119.78, 8.68, 119.95, 9.05],
  label: { lon: 119.87, lat: 9.10, rotation: 0 },
  source: "图巴塔哈群礁：苏禄海中央一处由图巴塔哈礁与杰西·比兹利礁组成的珊瑚环礁自然公园，保护面积近10万公顷，1988年设立海洋公园、1993年列入UNESCO世界遗产名录；礁区记录珊瑚物种逾360种、鱼类近700种，是苏禄海海域生物繁殖扩散的核心节点，礁体拥有垂直落差逾百米的珊瑚礁壁（UNESCO/tubbatahareefs.org WebSearch 2026）",
};

const CORON_CALAMIAN_ISLANDS: TerrainEntry = {
  id: "coron-calamian-islands",
  nameZh: "科隆—卡拉棉群岛",
  nameEn: "Coron / Calamian Islands",
  category: "island",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "卡杨甘湖", lon: 120.1975, lat: 11.9958, elevation: 40, kind: "lake" },
  bbox: [120.05, 11.90, 120.25, 12.10],
  label: { lon: 120.05, lat: 12.12, rotation: 0 },
  source: "科隆—卡拉棉群岛：巴拉望岛东北海域一组石灰岩岛群，科隆岛周边陡峭的石灰岩崖壁由数百万年前珊瑚礁与贝壳类沉积岩层构成；岛内卡杨甘湖被誉为菲律宾水质最清澈的湖泊，水下能见度逾24米，湖水约七成为淡水、三成为海水（经石灰岩崖壁渗透混合的咸淡水湖），由当地塔格巴努亚族世代守护并视为圣地（divergenttravelers.com/richandsunnytravels.com WebSearch 2026）",
};

const PUERTO_PRINCESA_UNDERGROUND_RIVER: TerrainEntry = {
  id: "puerto-princesa-underground-river",
  nameZh: "普林塞萨港地下河",
  nameEn: "Puerto Princesa Underground River",
  category: "gorge",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "地下河洞口", lon: 118.9219, lat: 10.1996, elevation: 5, kind: "gorge" },
  bbox: [118.85, 10.15, 118.98, 10.25],
  label: { lon: 118.92, lat: 10.27, rotation: 0 },
  source: "普林塞萨港地下河：巴拉望岛圣保罗山脉一条全长8.2公里的地下暗河，是世界上已知最长的直接注入大海的可通航地下河，下游河段因潮汐影响呈咸淡水混合状态；1999年列入UNESCO世界遗产名录，2012年获评“世界新七大自然奇观”；洞内多处洞厅宽达120米、高60米，园区完整保护了从山地到海洋的连续生态系统，记录植物逾800种（UNESCO WebSearch 2026）",
};

const PAGSANJAN_GORGE: TerrainEntry = {
  id: "pagsanjan-gorge",
  nameZh: "帕格森汉峡谷",
  nameEn: "Pagsanjan Gorge",
  category: "gorge",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "马格达皮奥瀑布", lon: 121.4581, lat: 14.2758, elevation: 100, kind: "gorge" },
  bbox: [121.42, 14.24, 121.50, 14.32],
  label: { lon: 121.46, lat: 14.34, rotation: 0 },
  source: "帕格森汉峡谷：吕宋岛拉古纳省一处沿帕格森汉河切割的峡谷地貌，森林覆盖的陡峭崖壁夹峙河道两侧，末端为落差120米、分三级跌落的马格达皮奥瀑布（俗称帕格森汉瀑布）；峡谷地处锡拉马德雷山脉山麓，1939年设立帕格森汉峡谷国家公园，自西班牙殖民时期起当地即以独木舟“冲滩”方式载客溯游而上（national-parks.org/Wikipedia WebSearch 2026）",
};

const CAGAYAN_RIVER: TerrainEntry = {
  id: "cagayan-river",
  nameZh: "卡加延河",
  nameEn: "Cagayan River",
  category: "river",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "阿帕里（卡加延河口）", lon: 121.6417, lat: 18.3667, elevation: 0, kind: "delta" },
  bbox: [121.1, 16.4, 121.9, 18.4],
  axis: [[121.1, 16.4], [121.6417, 18.3667]],
  viewScale: 1.3,
  label: { lon: 121.35, lat: 17.4, rotation: -20 },
  source: "卡加延河：菲律宾最长、流量最大的河流，全长约505公里，发源于卡拉巴略山脉，流域面积约2.78万平方公里，纵贯吕宋岛东北部卡加延河谷，流经新怡诗夏、基里诺、伊莎贝拉与卡加延四省，最终于阿帕里注入巴布延海峡（Wikipedia/Britannica WebSearch 2026）",
};



const HUNDRED_ISLANDS_NATIONAL_PARK: TerrainEntry = {
  id: "hundred-islands-national-park",
  nameZh: "百岛国家公园",
  nameEn: "Hundred Islands National Park",
  category: "island",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "总督岛", lon: 119.90, lat: 16.20, elevation: 5, kind: "island" },
  bbox: [119.83, 16.14, 119.98, 16.28],
  label: { lon: 119.90, lat: 16.11, rotation: 0 },
  source: "百岛国家公园：吕宋岛西北部林加延湾内一处岛礁群，退潮时共有124座、涨潮时123座石灰岩岛屿，散布面积约1844公顷；岛群基底为珊瑚礁构造、地表岩体距今约200万年，1940年设立为国家公园，常被称为菲律宾“第一座国家公园”，但阿波山1936年、马荣火山1938年更早（Wikipedia/nationalparks.org WebSearch 2026）",
};

const VERDE_ISLAND_PASSAGE: TerrainEntry = {
  id: "verde-island-passage",
  nameZh: "维德岛海峡",
  nameEn: "Verde Island Passage",
  category: "coast",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "维德岛", lon: 121.0667, lat: 13.5333, elevation: 5, kind: "island" },
  bbox: [120.85, 13.35, 121.35, 13.75],
  label: { lon: 121.05, lat: 13.28, rotation: 0 },
  source: "维德岛海峡：巴丹加斯、民都洛、马林杜克与朗布伦四省之间一条狭窄海峡水道，被学界公认为全球海洋鱼类物种多样性“中心之中心”，已记录珊瑚物种逾300种；海峡内设有36处海洋保护区（巴丹加斯24处、东民都洛12处），2023年获国际海洋保护组织“使命蓝”认定为“希望之点”（Hope Spot）（pemsea.org/calacademy.org WebSearch 2026）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 亚洲 / 菲律宾 =====
  MAYON_VOLCANO, TAAL_LAKE, MOUNT_PINATUBO, MOUNT_PULAG, CORDILLERA_CENTRAL_LUZON,
  SIERRA_MADRE_PHILIPPINES, MOUNT_KANLAON, CHOCOLATE_HILLS,
  BANAUE_IFUGAO_RICE_TERRACES, CAMIGUIN_ISLAND, BATANES_ISLANDS,
  EL_NIDO_BACUIT_ARCHIPELAGO, TUBBATAHA_REEFS, CORON_CALAMIAN_ISLANDS,
  PUERTO_PRINCESA_UNDERGROUND_RIVER, PAGSANJAN_GORGE,
  CAGAYAN_RIVER, HUNDRED_ISLANDS_NATIONAL_PARK, VERDE_ISLAND_PASSAGE,
];
