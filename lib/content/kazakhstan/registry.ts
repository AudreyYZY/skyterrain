import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 亚洲 — 哈萨克斯坦
// ============================================================

const ZAILIYSKY_ALATAU: TerrainEntry = {
  id: "zailiysky-alatau",
  nameZh: "外伊犁阿拉套山",
  nameEn: "Zailiysky Alatau (Trans-Ili Alatau)",
  category: "mountain_system",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "塔尔加尔峰", lon: 77.9989, lat: 42.9503, elevation: 4979, kind: "peak" },
  bbox: [76.20, 42.70, 79.50, 43.35],
  axis: [[76.30, 43.10], [79.30, 42.90]],
  viewScale: 1.4,
  label: { lon: 77.80, lat: 42.65, rotation: 0 },
  source: "外伊犁阿拉套山：北天山的一段，东西延展约350公里，最高峰塔尔加尔峰海拔4979米，南坡科尔任涅夫斯基冰川长约12公里、是山系最大冰川；哈萨克斯坦旧都阿拉木图坐落于山麓北侧，1996年设立伊犁阿拉套国家公园（面积约20万公顷）保护山系北坡（Wikipedia/PeakVisor WebSearch 2026）",
};

const KARKARALY_MOUNTAINS: TerrainEntry = {
  id: "karkaraly-mountains",
  nameZh: "卡尔卡拉雷山",
  nameEn: "Karkaraly Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "卡尔卡拉雷山最高点", lon: 75.833, lat: 49.183, elevation: 1403, kind: "peak" },
  bbox: [75.60, 49.05, 76.10, 49.35],
  label: { lon: 75.83, lat: 49.02, rotation: 0 },
  source: "卡尔卡拉雷山：哈萨克丘陵（萨雷阿尔卡）腹地一处花岗岩山地，约3至4亿年前海水退去、岩层抬升形成，最高点海拔1403米；山地低坡为草原、高坡分布哈萨克斯坦较靠南的松林之一，1998年设立卡尔卡拉雷国家公园（面积约11.2万公顷），是草原深处一块罕见的森林—湖泊—花岗岩山地绿洲（astanatimes.com/Wikipedia WebSearch 2026）",
};

const TARBAGATAI_MOUNTAINS: TerrainEntry = {
  id: "tarbagatai-mountains",
  nameZh: "塔尔巴哈台山",
  nameEn: "Tarbagatai Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "塔尔巴哈台山主脊", lon: 83.00, lat: 47.50, elevation: 2992, kind: "peak" },
  bbox: [81.50, 46.90, 84.50, 48.00],
  axis: [[81.60, 47.10], [84.30, 47.90]],
  viewScale: 1.3,
  label: { lon: 82.90, lat: 48.10, rotation: -15 },
  source: "塔尔巴哈台山：哈萨克斯坦东部沿中哈边境延伸的一段山系，与南侧的萨吾尔山共同构成萨吾尔—塔尔巴哈台山地，山体呈西北—东南走向，是准噶尔盆地北缘与哈萨克丘陵之间的地理过渡带（Wikipedia WebSearch 2026）",
};

const BEKTAU_ATA: TerrainEntry = {
  id: "bektau-ata",
  nameZh: "别克套阿塔花岗岩山",
  nameEn: "Bektau-Ata",
  category: "inselberg",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "别克套阿塔主峰", lon: 75.55, lat: 47.35, elevation: 1214, kind: "peak" },
  bbox: [75.40, 47.25, 75.70, 47.45],
  label: { lon: 75.55, lat: 47.20, rotation: 0 },
  source: "别克套阿塔：巴尔喀什湖以北约70公里处一处碱性花岗岩体，直径约15公里、巨石散布范围逾170平方公里，最高点海拔1214米；石炭—二叠纪之交岩浆侵入地下冷却形成花岗岩穹丘，历经长期风化剥蚀出露地表，常年强风将岩块磨蚀出浑圆轮廓，岩体内奥利耶塔斯洞穴藏有淡水泉，当地视为圣地（mindat.org/aboutkazakhstan.com WebSearch 2026）",
};

const USTYURT_PLATEAU: TerrainEntry = {
  id: "ustyurt-plateau",
  nameZh: "乌斯秋尔特高原",
  nameEn: "Ustyurt Plateau",
  category: "plateau",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "乌斯秋尔特高原（曼格斯套段）", lon: 55.50, lat: 43.50, elevation: 300, kind: "peak" },
  bbox: [52.50, 42.50, 58.00, 45.50],
  viewScale: 1.8,
  label: { lon: 55.50, lat: 45.60, rotation: 0 },
  source: "乌斯秋尔特高原：里海与咸海之间一片广袤的粘土荒漠台地，跨哈萨克斯坦与乌兹别克斯坦，哈萨克斯坦境内主要位于曼格斯套州；高原地表由古海底沉积岩层构成，边缘断崖陡峭，是中亚荒漠中一处典型的台地地貌（Wikipedia/eurasia.travel WebSearch 2026）",
};

const KARAGIYE_DEPRESSION: TerrainEntry = {
  id: "karagiye-depression",
  nameZh: "卡拉吉耶洼地",
  nameEn: "Karagiye Depression",
  category: "basin",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "卡拉吉耶洼地最低点（坎德洼地）", lon: 51.75, lat: 43.60, elevation: -132, kind: "peak" },
  bbox: [51.40, 43.40, 52.20, 43.90],
  label: { lon: 51.75, lat: 43.30, rotation: 0 },
  source: "卡拉吉耶洼地：曼格斯套半岛一处喀斯特凹地，距阿克套约50公里，最低点海拔约-132米，是哈萨克斯坦全国最低点、也是中亚及前苏联地区最低点，全球排名第五（次于死海、阿萨勒湖、吐鲁番盆地与卡塔拉洼地）；地下水长期溶蚀地层形成溶洞与地下空腔，上覆砂层塌陷后形成如今长约40公里、宽约10公里的巨型碗状洼地（Wikipedia/eurasia.travel WebSearch 2026）",
};

const BETPAK_DALA_DESERT: TerrainEntry = {
  id: "betpak-dala-desert",
  nameZh: "别特帕克达拉沙漠",
  nameEn: "Betpak-Dala Desert",
  category: "desert",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "别特帕克达拉沙漠中心", lon: 70.00, lat: 46.50, elevation: 300, kind: "dune" },
  bbox: [68.00, 45.50, 73.00, 47.50],
  viewScale: 1.8,
  label: { lon: 70.00, lat: 47.60, rotation: 0 },
  source: "别特帕克达拉沙漠：哈萨克斯坦中部一片粘土荒漠，南北长约170公里、东西延展约500公里，面积约7.5万平方公里，是世界最大的粘土荒漠之一；西部为中生代褶皱岩层与古近纪松散岩层，东部丘陵区由早古生代沉积—变质岩与花岗岩构成，年降水量仅100至150毫米，几乎无人居住（Britannica/mindat.org WebSearch 2026）",
};

const MOIYNKUM_DESERT: TerrainEntry = {
  id: "moiynkum-desert",
  nameZh: "莫因库姆沙漠",
  nameEn: "Moiynkum Desert",
  category: "desert",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "莫因库姆沙丘", lon: 71.50, lat: 44.50, elevation: 400, kind: "dune" },
  bbox: [69.50, 43.50, 73.50, 45.50],
  viewScale: 1.6,
  label: { lon: 71.50, lat: 45.60, rotation: 0 },
  source: "莫因库姆沙漠：哈萨克斯坦南部图尔克斯坦州与江布尔州境内的沙质荒漠，总面积约3.75万平方公里，是古代丝绸之路商队穿越中亚的传统路线之一，如今部分区域仍可体验骆驼商队式的沙漠旅行（Wikipedia WebSearch 2026）",
};

const CHARYN_CANYON: TerrainEntry = {
  id: "charyn-canyon",
  nameZh: "查伦峡谷",
  nameEn: "Charyn Canyon",
  category: "gorge",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "城堡谷", lon: 79.07, lat: 43.35, elevation: 1100, kind: "gorge" },
  bbox: [79.00, 43.28, 79.20, 43.42],
  label: { lon: 79.07, lat: 43.24, rotation: 0 },
  source: "查伦峡谷：阿拉木图以东约200公里、临近中哈边境的峡谷，全长约154公里，常被称为“中亚大峡谷”，保护区面积约12.7万公顷；峡谷谷底海拔约1100米，崖壁最深处约300米，历经约1200万年风蚀水蚀形成，其中“城堡谷”一段红色砂岩因氧化铁沉积呈暖色调、经风化雕琢出形似中世纪城堡与塔楼的岩体，是峡谷内最具标志性的一段（charyncanyon.org/Wikipedia WebSearch 2026）",
};

const BOZZHYRA: TerrainEntry = {
  id: "bozzhyra",
  nameZh: "博兹吉拉峡谷",
  nameEn: "Bozzhyra",
  category: "gorge",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "博兹吉拉“獠牙”岩塔", lon: 54.15, lat: 43.85, elevation: 200, kind: "gorge" },
  bbox: [54.00, 43.75, 54.35, 43.95],
  label: { lon: 54.15, lat: 43.68, rotation: 0 },
  source: "博兹吉拉：哈萨克语意为“灰色沟壑”，位于乌斯秋尔特高原西缘曼格斯套半岛的一处巨型峡谷群，由5000万至8000万年前的古海底沉积白垩岩层构成，石灰岩层堆积厚度达250米、内含古海洋生物化石；峡谷内两座高逾200米的“獠牙”岩塔是当地拍摄最多的地标，因干燥崎岖的地表常被形容为“火星地貌”（orexca.com/astanatimes.com WebSearch 2026）",
};

const MEDEU_GORGE: TerrainEntry = {
  id: "medeu-gorge",
  nameZh: "梅德奥峡谷",
  nameEn: "Medeu Gorge",
  category: "valley",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "梅德奥高山溜冰场", lon: 77.05, lat: 43.15, elevation: 1691, kind: "peak" },
  bbox: [76.98, 43.10, 77.12, 43.20],
  label: { lon: 77.05, lat: 43.06, rotation: 0 },
  source: "梅德奥峡谷：阿拉木图东南约14公里处、外伊犁阿拉套山麓小阿拉木图河谷内的一处山地峡谷，海拔1520至1750米，此处高山溜冰场1951年建成、1972年改建为人工冰面，是全球海拔最高的人工溜冰场之一；峡谷下游建有梅德奥泥石流防护坝，用于拦截山区季节性泥石流、保护阿拉木图市区（Wikipedia WebSearch 2026）",
};

const LAKE_BALKHASH: TerrainEntry = {
  id: "lake-balkhash",
  nameZh: "巴尔喀什湖",
  nameEn: "Lake Balkhash",
  category: "lake",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "乌津阿拉尔海峡（湖心窄峡）", lon: 75.70, lat: 46.65, elevation: 340, kind: "lake" },
  bbox: [73.50, 45.50, 79.50, 47.00],
  axis: [[73.60, 46.20], [79.20, 46.70]],
  viewScale: 2.0,
  label: { lon: 76.50, lat: 47.10, rotation: 0 },
  source: "巴尔喀什湖：面积约1.64万至1.82万平方公里（随季节水位波动），是世界第十五大湖、第二大咸水湖；湖泊西半部因伊犁河大量淡水注入、含盐量低于每升1克，东半部河流补给少、蒸发强烈、含盐量达每升3至6克，湖心宽约3.5公里的乌津阿拉尔海峡阻碍东西两半湖水充分混合，是全球罕见的“一湖两水”咸淡并存的湖泊（worldatlas.com/globecharting.com WebSearch 2026）",
};

const KOLSAI_LAKES: TerrainEntry = {
  id: "kolsai-lakes",
  nameZh: "科尔赛湖",
  nameEn: "Kolsai Lakes",
  category: "lake",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "科尔赛下湖", lon: 78.35, lat: 42.95, elevation: 1818, kind: "lake" },
  bbox: [78.25, 42.85, 78.55, 43.05],
  label: { lon: 78.35, lat: 42.80, rotation: 0 },
  source: "科尔赛湖：北天山一处山谷内自下而上分布的三座梯级湖泊——下湖（海拔1818米）、中湖（2252米）、上湖（2850米），2021年列入UNESCO科尔赛—凯恩迪国家公园生物圈保护区；该区域地震活动频繁，三座湖泊均由历史上的地震滑坡堵塞河谷形成（Wikipedia/thegonegoat.com WebSearch 2026）",
};

const KAINDY_LAKE: TerrainEntry = {
  id: "kaindy-lake",
  nameZh: "凯恩迪湖",
  nameEn: "Kaindy Lake",
  category: "lake",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "凯恩迪“水下森林”", lon: 78.50, lat: 42.95, elevation: 2000, kind: "lake" },
  bbox: [78.44, 42.90, 78.56, 43.00],
  label: { lon: 78.50, lat: 42.85, rotation: 0 },
  source: "凯恩迪湖：科尔赛—凯恩迪国家公园内一处长约400米、海拔约2000米的山地湖泊，1911年一次地震引发山体滑坡堵塞峡谷、河水蓄积成湖，原本生长在谷底的雪岭云杉被淹没；湖水常年低温（盛夏约6摄氏度）且含氧量低，减缓了树干腐烂速度，逾百年后水下依然可见成排挺立的枯树干，是当地标志性的“水下森林”景观（meganstarr.com/wandersmiles.com WebSearch 2026）",
};

const BIG_ALMATY_LAKE: TerrainEntry = {
  id: "big-almaty-lake",
  nameZh: "大阿拉木图湖",
  nameEn: "Big Almaty Lake",
  category: "lake",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "大阿拉木图湖", lon: 76.98, lat: 43.05, elevation: 2511, kind: "lake" },
  bbox: [76.93, 43.00, 77.03, 43.09],
  label: { lon: 76.98, lat: 42.96, rotation: 0 },
  source: "大阿拉木图湖：外伊犁阿拉套山中一处冰川湖，位于阿拉木图以南约15公里处、海拔2511米，长约1.6公里、宽0.75至1公里、深30至40米，由冰川侵蚀形成的圈谷积水而成；湖水因冰川侵蚀带来的矿物质呈现独特的青绿色，20世纪50至60年代曾在此建水电站，1980年代起成为阿拉木图市区饮用水源之一（Wikipedia/almaty-travel.com WebSearch 2026）",
};

const KORGALZHYN_RESERVE: TerrainEntry = {
  id: "korgalzhyn-reserve",
  nameZh: "科尔加尔津—滕吉兹湖系",
  nameEn: "Korgalzhyn-Tengiz Lake System",
  category: "lake",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "滕吉兹湖", lon: 69.00, lat: 50.50, elevation: 304, kind: "lake" },
  bbox: [67.50, 49.80, 70.50, 51.20],
  viewScale: 1.5,
  label: { lon: 69.00, lat: 51.30, rotation: 0 },
  source: "科尔加尔津—滕吉兹湖系：哈萨克斯坦北部草原深处的湿地湖群，1968年设立科尔加尔津国家自然保护区、面积逾54万公顷；滕吉兹湖是区内最大水体，哈萨克语意为“海”，逾1500万只候鸟经此迁徙、逾30万只在此繁殖，科尔加尔津湖是大红鹳全球分布最靠北的营巢地之一；2008年与纳乌尔祖姆保护区共同以“萨雷阿尔卡——哈萨克斯坦北部的草原与湖泊”列入UNESCO世界遗产名录，2012年获认定为哈萨克斯坦首个生物圈保护区（whc.unesco.org/Wikipedia WebSearch 2026）",
};

const NORTH_ARAL_SEA: TerrainEntry = {
  id: "north-aral-sea",
  nameZh: "北咸海",
  nameEn: "North Aral Sea",
  category: "lake",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "北咸海（科克阿拉尔坝以北）", lon: 60.10, lat: 46.10, elevation: 42, kind: "salt-lake" },
  bbox: [59.00, 45.50, 61.80, 46.80],
  viewScale: 1.4,
  label: { lon: 60.10, lat: 46.90, rotation: 0 },
  source: "北咸海：哈萨克斯坦境内咸海北部水域，20世纪中叶以来因上游农业灌溉大量引水，咸海水量急剧萎缩、一度几近干涸；2005年建成长约13公里的科克阿拉尔坝，将北咸海与南部水域分隔并逐步蓄水，此后20年间北咸海面积扩大约36%、水量几近翻倍、含盐度下降约一半，渔业逐步恢复；哈萨克斯坦政府与世界银行正推进二期修复工程，计划进一步扩大水域面积（astanatimes.com/globalvoices.org WebSearch 2026）",
};

const CASPIAN_SEA_COAST_KAZAKHSTAN: TerrainEntry = {
  id: "caspian-sea-coast-kazakhstan",
  nameZh: "里海岸（曼格斯套段）",
  nameEn: "Caspian Sea Coast (Mangystau)",
  category: "coast",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "阿克套海滨", lon: 51.15, lat: 43.65, elevation: 0, kind: "city" },
  bbox: [50.80, 43.30, 51.60, 44.60],
  viewScale: 1.3,
  label: { lon: 51.20, lat: 44.70, rotation: 0 },
  source: "里海：面积约37.1万平方公里、水体约7.82万立方公里，是全球最大的内陆水体，沿岸为俄罗斯、哈萨克斯坦、土库曼斯坦、伊朗与阿塞拜疆五国；哈萨克斯坦境内海岸线主要位于曼格斯套州，阿克套是这段海岸最大城市、气候干燥少雨，历史上盛产鲟鱼与鱼子酱，近年因石油天然气开采等因素，海域水位持续下降引发关注（remotelands.com/astanatimes.com WebSearch 2026）",
};

const ILI_RIVER: TerrainEntry = {
  id: "ili-river",
  nameZh: "伊犁河（哈萨克斯坦段）",
  nameEn: "Ili River (Kazakhstan)",
  category: "river",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "伊犁河三角洲", lon: 74.00, lat: 45.50, elevation: 340, kind: "delta" },
  bbox: [74.00, 44.50, 79.30, 45.90],
  axis: [[79.20, 43.60], [74.10, 45.50]],
  viewScale: 1.4,
  label: { lon: 76.50, lat: 44.30, rotation: -10 },
  source: "伊犁河：发源于中国新疆天山，源头特克斯河与昆盖斯河在哈萨克斯坦境内汇合后始称伊犁河，全长约1439公里、其中约815公里位于哈萨克斯坦境内，最终注入巴尔喀什湖并形成大片湿地三角洲；论水量，伊犁河在哈萨克斯坦境内仅次于额尔齐斯河与乌拉尔河，居全国第三（Wikipedia WebSearch 2026）",
};

const IRTYSH_RIVER_KAZAKHSTAN: TerrainEntry = {
  id: "irtysh-river-kazakhstan",
  nameZh: "额尔齐斯河（哈萨克斯坦段）",
  nameEn: "Irtysh River (Kazakhstan)",
  category: "river",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "谢梅伊河段", lon: 80.2166, lat: 50.4111, elevation: 190, kind: "city" },
  bbox: [76.00, 47.00, 84.90, 53.50],
  axis: [[84.80, 47.50], [76.10, 53.40]],
  viewScale: 1.6,
  label: { lon: 80.50, lat: 47.30, rotation: 20 },
  source: "额尔齐斯河：全长约4248公里，发源于中国新疆阿尔泰山南麓冰川，向西流经中国后进入哈萨克斯坦斋桑泊，再折向西北贯穿哈萨克斯坦东部，最终流入俄罗斯境内汇入鄂毕河，与鄂毕河共同构成全球第七长河流水系；哈萨克斯坦境内的谢梅伊、巴甫洛达尔等城市均沿河而建（Britannica/worldatlas.com WebSearch 2026）",
};

const URAL_RIVER: TerrainEntry = {
  id: "ural-river",
  nameZh: "乌拉尔河（哈萨克斯坦段）",
  nameEn: "Ural River (Kazakhstan)",
  category: "river",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "阿特劳（乌拉尔河入海口）", lon: 51.90, lat: 47.10, elevation: -25, kind: "delta" },
  bbox: [51.00, 46.90, 52.20, 51.90],
  axis: [[51.90, 51.20], [51.95, 47.10]],
  viewScale: 1.3,
  label: { lon: 52.20, lat: 51.30, rotation: 0 },
  source: "乌拉尔河：发源于乌拉尔山南段，流经俄罗斯与哈萨克斯坦，最终于阿特劳附近注入里海，是欧洲第三长河，也是传统上划分欧洲与亚洲两大洲的地理分界河流之一；阿特劳市因乌拉尔河穿城而过，常被称作“跨越两大洲的城市”（Wikipedia WebSearch 2026）",
};

const SARYARKA_STEPPE: TerrainEntry = {
  id: "saryarka-steppe",
  nameZh: "萨雷阿尔卡草原",
  nameEn: "Saryarka Steppe",
  category: "grassland",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "萨雷阿尔卡草原（中部代表区域）", lon: 72.00, lat: 49.50, elevation: 400, kind: "grassland" },
  bbox: [65.00, 47.00, 78.00, 53.00],
  viewScale: 2.2,
  label: { lon: 72.00, lat: 46.50, rotation: 0 },
  source: "萨雷阿尔卡（哈萨克丘陵）：哈萨克斯坦中北部一片广袤的干草原与低缓丘陵地带，是全球残存温带草原中面积最大的区域之一，栖息极度濒危的赛加羚羊等草原特有物种；2008年“萨雷阿尔卡——哈萨克斯坦北部的草原与湖泊”（涵盖纳乌尔祖姆与科尔加尔津两处保护区）列入UNESCO世界遗产名录，是哈萨克斯坦首个自然类世界遗产（whc.unesco.org WebSearch 2026）",
};

const ALTYN_EMEL_SINGING_DUNE: TerrainEntry = {
  id: "altyn-emel-singing-dune",
  nameZh: "阿尔滕埃梅尔鸣沙",
  nameEn: "Altyn-Emel Singing Dune",
  category: "desert",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "鸣沙丘", lon: 78.03, lat: 44.13, elevation: 700, kind: "dune" },
  bbox: [77.95, 44.08, 78.10, 44.18],
  label: { lon: 78.03, lat: 44.02, rotation: 0 },
  source: "鸣沙丘：阿尔滕埃梅尔国家公园内一座长约1.5至3公里、高120至150米的石英沙丘，约1万至1.2万年前由伊犁河沿岸细沙经风力搬运堆积于大、小卡尔坎山之间的风口地带而成；沙丘在特定风力与湿度条件下会发出数公里外可闻的轰鸣声，是全球仅存的少数几处“会唱歌的沙丘”之一，阿尔滕埃梅尔国家公园1996年设立，总面积约52万公顷、是哈萨克斯坦最大的国家公园，2016年随“图兰荒漠寒冬型地貌”列入UNESCO世界遗产名录（meganstarr.com/altynemel.kz WebSearch 2026）",
};

const AKTAU_KATUTAU_HILLS: TerrainEntry = {
  id: "aktau-katutau-hills",
  nameZh: "阿克套—卡图套彩山",
  nameEn: "Aktau-Katutau Hills",
  category: "hills",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "阿克套彩色山丘", lon: 78.40, lat: 44.35, elevation: 900, kind: "peak" },
  bbox: [78.15, 44.15, 78.65, 44.55],
  viewScale: 1.2,
  label: { lon: 78.40, lat: 44.62, rotation: 0 },
  source: "阿克套—卡图套彩山：阿尔滕埃梅尔国家公园内的荒漠丘陵群，阿克套（“白山”）由粉、橙、绿等多色矿物沉积岩层构成，卡图套则是一片深褐色的荒漠丘陵，二者与准噶尔阿拉套山西支共同构成公园内的荒漠山地景观，是公园除鸣沙丘外另一处标志性地貌（altynemel.kz/Wikipedia WebSearch 2026）",
};

const BURABAY_HILLS: TerrainEntry = {
  id: "burabay-hills",
  nameZh: "布拉拜丘陵湖群",
  nameEn: "Burabay Hills",
  category: "hills",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "布拉拜湖", lon: 70.30, lat: 53.13, elevation: 320, kind: "lake" },
  bbox: [69.95, 52.95, 70.65, 53.35],
  viewScale: 1.3,
  label: { lon: 70.30, lat: 52.85, rotation: 0 },
  source: "布拉拜（旧称博罗沃耶）：哈萨克斯坦北部科克舍套丘陵东段一片松林、花岗岩丘陵与湖泊交织的地带，因景致酷似瑞士山地常被称为“哈萨克斯坦的瑞士”，区内有14座主要湖泊，花岗岩体历经古生代岩浆侵入、后经风化冰蚀塑造出如今浑圆的岩丘与巨石群，2000年设立布拉拜国家公园（Wikipedia/meganstarr.com WebSearch 2026）",
};

const TORYSH_VALLEY_OF_BALLS: TerrainEntry = {
  id: "torysh-valley-of-balls",
  nameZh: "托雷什球石谷",
  nameEn: "Torysh (Valley of Balls)",
  category: "inselberg",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "托雷什球状结核群", lon: 52.35, lat: 44.28, elevation: 150, kind: "peak" },
  bbox: [52.20, 44.18, 52.50, 44.38],
  label: { lon: 52.35, lat: 44.10, rotation: 0 },
  source: "托雷什（球石谷）：曼格斯套州舍特佩村附近乌斯秋尔特高原边缘一处山谷，谷内散布成千上万颗直径1至3米的球状砂岩结核体，多形成于侏罗纪中期至白垩纪早期（距今约1.2亿至1.8亿年），由矿物质在沉积岩层中围绕核心（如小石块或贝壳碎片）逐层沉积硬化而成；部分球体仍嵌于岩层中、随周边沉积岩风化逐渐“破土而出”，是一种被称为“结核”的自然地质现象（planetesoterica.com/geologyscience.com WebSearch 2026）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 亚洲 / 哈萨克斯坦 =====
  ZAILIYSKY_ALATAU, KARKARALY_MOUNTAINS, TARBAGATAI_MOUNTAINS, BEKTAU_ATA,
  USTYURT_PLATEAU, KARAGIYE_DEPRESSION,
  BETPAK_DALA_DESERT, MOIYNKUM_DESERT,
  CHARYN_CANYON, BOZZHYRA, MEDEU_GORGE,
  LAKE_BALKHASH, KOLSAI_LAKES, KAINDY_LAKE, BIG_ALMATY_LAKE,
  KORGALZHYN_RESERVE, NORTH_ARAL_SEA,
  CASPIAN_SEA_COAST_KAZAKHSTAN,
  ILI_RIVER, IRTYSH_RIVER_KAZAKHSTAN, URAL_RIVER,
  SARYARKA_STEPPE,
  ALTYN_EMEL_SINGING_DUNE, AKTAU_KATUTAU_HILLS, BURABAY_HILLS,
  TORYSH_VALLEY_OF_BALLS,
];
