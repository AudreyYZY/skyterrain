import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 斯洛文尼亚（南欧次区域第六国，克罗地亚、葡萄牙、西班牙、希腊、意大利之后）
// 零争议红线：与意大利、奥地利交界的山地按「斯洛文尼亚与意大利/奥地利交界一带」中性表述，
// 不涉主权、不描述边界线；**国土南缘与东南缘的邻国一律不写国名**（比照克罗地亚、斯洛伐克东北角的
// 更严做法），海岸条目**不写海岸线长度、不涉任何海域划界**。`history` 段只写地质史、广泛记载的
// 史前与中世纪至近代史、一战索查河战线的简短事实、保护区设立年份与 UNESCO 认定；
// 一战之后的政治 / 领土 / 民族议题一律不碰。
// 石灰岩高山 / 结晶岩中山 / 喀斯特山地→`mountain_system`、喀斯特高原与高山牧场台地→`plateau`、
// 复理石丘陵与第三纪低丘→`hills`、构造沼泽洼地→`basin`、冲积平原→`plain`、干流与喀斯特伏流河→`river`、
// 冰蚀谷与塌陷谷→`valley`、隘谷与地下河峡谷→`gorge`、冰川湖与间歇湖→`lake`、复理石崖海岸→`coast`。
// 本国条目的正文数字一律只用本轮检索到的来源，追不到的不写。
// ============================================================

const JULIAN_ALPS_SLOVENIA: TerrainEntry = {
  id: "julian-alps-slovenia",
  nameZh: "尤利安阿尔卑斯山（斯洛文尼亚）",
  nameEn: "Julian Alps (Slovenia)",
  category: "mountain_system",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "特里格拉夫峰", lon: 13.8367, lat: 46.3781, elevation: 2864, kind: "peak" },
  bbox: [13.40, 46.12, 14.20, 46.52],
  axis: [[13.45, 46.45], [14.12, 46.24]],
  viewScale: 1.6,
  label: { lon: 13.84, lat: 46.55, rotation: 0 },
  source: "尤利安阿尔卑斯山（Julijske Alpe）：南部石灰岩阿尔卑斯的一部分，主体在斯洛文尼亚西北部，西段延伸到斯洛文尼亚与意大利交界一带；最高点特里格拉夫峰海拔 2864 米，是斯洛文尼亚最高峰，北壁高约 1000 米、宽约 3000 米；1924 年特里格拉夫湖谷设高山保护公园，1961 年湖谷被定为特里格拉夫国家公园，1981 年《特里格拉夫国家公园法》把公园扩大到现规模，是斯洛文尼亚唯一的国家公园（2026-09-13 当批核实改正，原写「1981 年设立」）；2003 年斯洛文尼亚侧列入 UNESCO 生物圈保护区，2024 年扩为与意大利共建的跨境生物圈保护区；特里格拉夫冰川由 ZRC SAZU 安东·梅利克地理研究所自 1946 年起监测，近年只剩零星冰体（特里格拉夫国家公园、UNESCO MAB、斯洛文尼亚政府与 ZRC SAZU 口径，WebSearch 2026-09）",
};

const KAMNIK_SAVINJA_ALPS: TerrainEntry = {
  id: "kamnik-savinja-alps",
  nameZh: "卡姆尼克—萨维尼亚阿尔卑斯山",
  nameEn: "Kamnik–Savinja Alps",
  category: "mountain_system",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "格林托维茨峰", lon: 14.5358, lat: 46.3581, elevation: 2558, kind: "peak" },
  bbox: [14.38, 46.28, 14.85, 46.45],
  axis: [[14.40, 46.36], [14.82, 46.38]],
  viewScale: 1.3,
  label: { lon: 14.60, lat: 46.48, rotation: 0 },
  source: "卡姆尼克—萨维尼亚阿尔卑斯山（Kamniško-Savinjske Alpe）：南部石灰岩阿尔卑斯最东端的一组山群，位于斯洛文尼亚北部；最高点格林托维茨峰（Grintovec）海拔 2558 米，高出南侧的卡姆尼什卡比斯特里察谷底约 1900 米；谷地为冰川塑造（burger.si 斯洛文尼亚自然地貌图集与 Explore Slovenia 口径，WebSearch 2026-09）",
};

const KARAWANKS: TerrainEntry = {
  id: "karawanks",
  nameZh: "卡拉万克山",
  nameEn: "Karawanks",
  category: "mountain_system",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "斯托尔峰", lon: 14.1736, lat: 46.4342, elevation: 2236, kind: "peak" },
  bbox: [13.70, 46.36, 14.95, 46.60],
  axis: [[13.75, 46.53], [14.90, 46.44]],
  viewScale: 1.6,
  label: { lon: 14.30, lat: 46.62, rotation: 0 },
  source: "卡拉万克山（Karavanke）：沿斯洛文尼亚与奥地利交界一带东西向延伸的石灰岩山脉，全长约 120 公里；最高点斯托尔峰（Stol）海拔 2236 米，位于交界一带；构造上被佩里亚德里亚断裂带（Periadriatic lineament）纵贯，分成岩性与沉积盆地来源不同的南、北两部分，断裂带沿线出露变质岩与岩浆岩（UNESCO 世界地质公园「卡拉万克」、克拉尼斯卡戈拉与拉多夫利察旅游局口径，WebSearch 2026-09）。跨境只写交界、不涉主权",
};

const POHORJE: TerrainEntry = {
  id: "pohorje",
  nameZh: "波霍列山",
  nameEn: "Pohorje",
  category: "mountain_system",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "黑峰", lon: 15.2289, lat: 46.4742, elevation: 1543, kind: "peak" },
  bbox: [15.05, 46.36, 15.72, 46.60],
  axis: [[15.10, 46.50], [15.68, 46.47]],
  viewScale: 1.4,
  label: { lon: 15.35, lat: 46.62, rotation: 0 },
  source: "波霍列山（Pohorje）：斯洛文尼亚东北部一片森林覆盖的中山，是中央阿尔卑斯带最东南的一部分；最高点黑峰（Črni vrh）海拔 1543 米；与斯洛文尼亚西北部以石灰岩为主的高山不同，山体外围是古生代变质岩、中央是花岗闪长岩等岩浆岩（ZRC SAZU《Acta geographica Slovenica》与 SummitPost 口径，WebSearch 2026-09）",
};

const SNEZNIK: TerrainEntry = {
  id: "sneznik",
  nameZh: "斯涅日尼克山",
  nameEn: "Snežnik",
  category: "mountain_system",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "大斯涅日尼克峰", lon: 14.4456, lat: 45.5881, elevation: 1796, kind: "peak" },
  bbox: [14.30, 45.50, 14.60, 45.68],
  axis: [[14.34, 45.64], [14.56, 45.54]],
  viewScale: 1.1,
  label: { lon: 14.45, lat: 45.70, rotation: 0 },
  source: "斯涅日尼克山（Snežnik）：斯洛文尼亚南部一片高耸的喀斯特石灰岩高原山地，属迪纳拉山系北段，主体在斯洛文尼亚境内；最高点大斯涅日尼克峰（Veliki Snežnik）海拔 1796 米，是斯洛文尼亚阿尔卑斯山以外的最高峰；山体以白垩纪石灰岩为主，顶部有侏罗纪石灰岩与少量白云岩，发育冰川—喀斯特复合地貌；峰顶一带 1964 年设为植物保护区（洛什卡多利纳旅游局与《Journal of Maps》冰川喀斯特地貌论文口径，WebSearch 2026-09）。⚠️ 零争议：南缘延伸出国界，正文不写邻国国名",
};

const KRAS_PLATEAU: TerrainEntry = {
  id: "kras-plateau",
  nameZh: "喀斯特高原（斯洛文尼亚侧）",
  nameEn: "Kras Plateau (Slovenia)",
  category: "plateau",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "塞扎纳一带台地面", lon: 13.8733, lat: 45.7092, elevation: 360, kind: "escarpment" },
  bbox: [13.60, 45.62, 14.10, 45.90],
  axis: [[13.62, 45.86], [14.06, 45.64]],
  viewScale: 1.4,
  label: { lon: 13.88, lat: 45.92, rotation: 0 },
  source: "喀斯特高原（Kras）：斯洛文尼亚西南部一片碳酸盐岩台地，西北段延伸到斯洛文尼亚与意大利交界一带；北侧以维帕瓦谷的复理石为界、东南侧以雷卡河谷为界；地学名词 karst（喀斯特）即来自这片高原的地名；最常见的地表形态是溶蚀洼地（doline），另有盲谷、干谷与雷卡河伏流上方的大型塌陷洼地；表层多见富含铁氧化物的红土（terra rossa）（UNESCO 世界遗产预备名录「经典喀斯特」、MDPI Encyclopedia 与斯洛文尼亚旅游局口径，WebSearch 2026-09）。⚠️ 本库另有意大利侧的 `carso-karst` 条目，两侧是同一片高原，跨境只写交界",
};

const POKLJUKA: TerrainEntry = {
  id: "pokljuka",
  nameZh: "波克柳卡高原",
  nameEn: "Pokljuka",
  category: "plateau",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "鲁德诺波列", lon: 13.9300, lat: 46.3500, elevation: 1340, kind: "grassland" },
  bbox: [13.84, 46.28, 14.05, 46.40],
  axis: [[13.86, 46.37], [14.03, 46.31]],
  viewScale: 1.1,
  label: { lon: 13.95, lat: 46.42, rotation: 0 },
  source: "波克柳卡高原（Pokljuka）：特里格拉夫国家公园东缘的一片高位喀斯特高原，海拔大致在 1200–1500 米之间；基岩为三叠纪石灰岩与白云岩，受冰期的波克柳卡冰川强烈改造，地表散布竖井、落水洞与小洼地；以云杉林为主，是国家公园内面积最大的连片森林区，林间保留着冰期遗留的泥炭沼泽（特里格拉夫国家公园、布莱德与博希尼旅游局口径，WebSearch 2026-09）",
};

const VELIKA_PLANINA: TerrainEntry = {
  id: "velika-planina",
  nameZh: "韦利卡普拉尼纳高原",
  nameEn: "Velika Planina",
  category: "plateau",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "格拉迪什切", lon: 14.6406, lat: 46.2944, elevation: 1666, kind: "grassland" },
  bbox: [14.58, 46.26, 14.72, 46.33],
  axis: [[14.60, 46.30], [14.70, 46.29]],
  viewScale: 1.0,
  label: { lon: 14.64, lat: 46.35, rotation: 0 },
  source: "韦利卡普拉尼纳高原（Velika planina，意为「大高山牧场」）：卡姆尼克—萨维尼亚阿尔卑斯山南缘的一片高山牧场台地，最高点格拉迪什切（Gradišče）海拔 1666 米；台地上保留着传统形制的牧人木屋聚落，每年春末至夏季牧人赶牛上山放牧（卢布尔雅那旅游局与斯洛文尼亚旅游局口径，WebSearch 2026-09）。木屋数量各源不一，正文不写数字",
};

const TRNOVSKI_GOZD: TerrainEntry = {
  id: "trnovski-gozd",
  nameZh: "特尔诺沃森林高原",
  nameEn: "Trnovo Forest Plateau",
  category: "plateau",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "小戈拉克峰", lon: 13.8700, lat: 45.9750, elevation: 1495, kind: "peak" },
  bbox: [13.62, 45.90, 14.05, 46.07],
  axis: [[13.66, 46.03], [14.02, 45.93]],
  viewScale: 1.2,
  label: { lon: 13.84, lat: 46.09, rotation: 0 },
  source: "特尔诺沃森林高原（Trnovski gozd）：迪纳拉山系最西北端的一片喀斯特高原，最高点小戈拉克峰（Mali Golak）海拔 1495 米；地表没有河流，被封闭洼地、岩丘、洞穴、竖井与溶沟等喀斯特形态切碎；高原东部的帕拉达纳大冰洞（Velika ledena jama v Paradani）是植被逆温现象的经典地点，高原上设有帕拉达纳与戈拉基两处自然保护区（维帕瓦谷官方旅游门户口径，WebSearch 2026-09）",
};

const GORISKA_BRDA: TerrainEntry = {
  id: "goriska-brda",
  nameZh: "戈里察布尔达丘陵",
  nameEn: "Goriška Brda",
  category: "hills",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "什马尔特诺", lon: 13.5394, lat: 46.0006, elevation: 270, kind: "city" },
  bbox: [13.47, 45.95, 13.66, 46.10],
  axis: [[13.52, 46.08], [13.60, 45.96]],
  viewScale: 1.0,
  label: { lon: 13.56, lat: 46.12, rotation: 0 },
  source: "戈里察布尔达丘陵（Goriška Brda）：斯洛文尼亚最西部的一片丘陵，东北有萨博廷山、北有科拉达山，东临索查河谷；丘陵由复理石构成 —— 砂岩、泥灰岩与碳酸盐浊积岩交替成层，本地称 opoka；山脊大致南北走向，葡萄园多开成梯田（斯洛文尼亚旅游局、新戈里察大学与 Explore Slovenia 口径，WebSearch 2026-09）。西缘在斯洛文尼亚与意大利交界一带，正文只写交界",
};

const SLOVENSKE_GORICE: TerrainEntry = {
  id: "slovenske-gorice",
  nameZh: "斯洛文尼亚丘陵",
  nameEn: "Slovene Hills",
  category: "hills",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "莱纳特", lon: 15.8311, lat: 46.5761, elevation: 230, kind: "city" },
  bbox: [15.60, 46.40, 16.25, 46.72],
  axis: [[15.65, 46.62], [16.20, 46.46]],
  viewScale: 1.3,
  label: { lon: 15.92, lat: 46.74, rotation: 0 },
  source: "斯洛文尼亚丘陵（Slovenske gorice）：斯洛文尼亚东北部、德拉瓦河与穆拉河之间的一片第三纪低丘，由第三纪沉积物构成，属斯洛文尼亚「第三纪低丘陵区」这一地貌类型，地表侵蚀风险较高（《Acta Geographica Slovenica》第三纪低丘土地利用论文与斯洛文尼亚旅游局口径，WebSearch 2026-09）",
};

const LJUBLJANSKO_BARJE: TerrainEntry = {
  id: "ljubljansko-barje",
  nameZh: "卢布尔雅那沼泽",
  nameEn: "Ljubljana Marsh",
  category: "basin",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "伊格一带沼泽草甸", lon: 14.5281, lat: 45.9597, elevation: 290, kind: "grassland" },
  bbox: [14.30, 45.88, 14.62, 46.03],
  axis: [[14.32, 45.97], [14.60, 45.96]],
  viewScale: 1.1,
  label: { lon: 14.46, lat: 46.05, rotation: 0 },
  source: "卢布尔雅那沼泽（Ljubljansko barje）：卢布尔雅那以南一片构造沉降洼地，位于阿尔卑斯与迪纳拉两大构造区的交接处，面积约 160 平方公里；全新世时曾是一片浅湖，湖边的史前木桩屋遗址自 1875 年以来已发现四十多处，2011 年作为「阿尔卑斯地区史前木桩屋」跨国系列遗产的一部分列入 UNESCO 世界遗产；2008 年其中约 135 平方公里设为景观公园（Krajinski park，当批核实改正：原误作「自然公园」）（斯洛文尼亚政府 slovenia.si、Culture.si 与卢布尔雅那旅游局口径，WebSearch 2026-09）",
};

const POMURSKA_RAVNINA: TerrainEntry = {
  id: "pomurska-ravnina",
  nameZh: "穆拉平原",
  nameEn: "Mura Plain",
  category: "plain",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "穆尔斯卡索博塔", lon: 16.1664, lat: 46.6625, elevation: 190, kind: "city" },
  bbox: [15.95, 46.45, 16.45, 46.80],
  axis: [[15.98, 46.68], [16.42, 46.48]],
  viewScale: 1.3,
  label: { lon: 16.20, lat: 46.82, rotation: 0 },
  source: "穆拉平原（Pomurska ravnina）：斯洛文尼亚东北部穆拉河两岸的冲积平原，是潘诺尼亚盆地西缘伸入斯洛文尼亚的一片；穆拉河在斯洛文尼亚境内约 96 公里，在这一段由阿尔卑斯型河流转为流速放缓的平原河流；平原底下是潘诺尼亚海退去后留下的沉积层，蕴藏低温地热水（穆尔斯卡索博塔与波穆列旅游局、ScienceDirect 穆拉—扎拉盆地地热含水层论文口径，WebSearch 2026-09）。⚠️ 零争议：该平原周边临三国国界，正文不写邻国国名、不写边界",
};

const DRAVSKO_POLJE: TerrainEntry = {
  id: "dravsko-polje",
  nameZh: "德拉瓦平原",
  nameEn: "Drava Plain",
  category: "plain",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "德拉瓦平原中部", lon: 15.7500, lat: 46.4200, elevation: 240, kind: "delta" },
  bbox: [15.55, 46.30, 15.95, 46.56],
  axis: [[15.62, 46.54], [15.90, 46.36]],
  viewScale: 1.1,
  label: { lon: 15.75, lat: 46.58, rotation: 0 },
  source: "德拉瓦平原（Dravsko polje）：德拉瓦河右岸、马里博尔—普图伊—斯洛文斯卡比斯特里察之间一片大致呈三角形的冲积平原，其下的第四纪砂砾含水层面积约 293 平方公里，是这一带饮用水的来源（当批核实：「砂砾层厚 4–22 米」对应相邻普图伊平原，已删）（MDPI《Hydrology》2023 年德拉瓦—普图伊平原地下水模型论文口径，WebSearch 2026-09）",
};

const SOCA_RIVER: TerrainEntry = {
  id: "soca-river",
  nameZh: "索查河",
  nameEn: "Soča",
  category: "river",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "博韦茨河段", lon: 13.5500, lat: 46.3300, elevation: 430, kind: "meander" },
  bbox: [13.45, 45.90, 13.80, 46.43],
  axis: [[13.72, 46.41], [13.62, 45.95]],
  viewScale: 1.5,
  label: { lon: 13.62, lat: 46.45, rotation: 0 },
  source: "索查河（Soča）：发源于特伦塔谷尤利安阿尔卑斯山脚下的一处喀斯特泉，在斯洛文尼亚境内流经约 96 公里后流出国境；河水呈翡翠绿色；1915 年 5 月至 1917 年 10 月，奥匈与意大利军队沿索查河一带约 93 公里的战线先后进行了十二次战役（索查河谷旅游局与斯洛文尼亚一战百年纪念网站口径，WebSearch 2026-09）。全长各源在 136–139 公里之间，正文不写全长",
};

const SAVA_RIVER_SLOVENIA: TerrainEntry = {
  id: "sava-river-slovenia",
  nameZh: "萨瓦河斯洛文尼亚段",
  nameEn: "Sava in Slovenia",
  category: "river",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "利蒂亚河段", lon: 14.8222, lat: 46.0578, elevation: 240, kind: "meander" },
  bbox: [13.70, 45.85, 15.70, 46.52],
  axis: [[13.75, 46.48], [15.65, 45.87]],
  viewScale: 1.8,
  label: { lon: 14.80, lat: 46.12, rotation: 0 },
  source: "萨瓦河（Sava）：斯洛文尼亚最长的河流，全长 947 公里，其中 221 公里在斯洛文尼亚境内；有两条源流 —— 萨瓦多林卡河与萨瓦博希尼卡河，在拉多夫利察下游汇合；在斯洛文尼亚境内的主要支流有卢布尔雅尼察河、萨维尼亚河、米尔纳河与克尔卡河（斯洛文尼亚政府 slovenia.si 与国际萨瓦河流域委员会口径，WebSearch 2026-09）。⚠️ 本库另有下游国家的 `sava-river-croatia` 条目；本条正文不写流出国境后的国名",
};

const LJUBLJANICA: TerrainEntry = {
  id: "ljubljanica",
  nameZh: "卢布尔雅尼察河",
  nameEn: "Ljubljanica",
  category: "river",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "弗尔赫尼卡泉群", lon: 14.2886, lat: 45.9608, elevation: 293, kind: "meander" },
  bbox: [14.25, 45.93, 14.62, 46.10],
  axis: [[14.28, 45.96], [14.58, 46.08]],
  viewScale: 1.0,
  label: { lon: 14.45, lat: 46.12, rotation: 0 },
  source: "卢布尔雅尼察河（Ljubljanica）：斯洛文尼亚内陆喀斯特区的伏流河系的出口，在弗尔赫尼卡附近的莫奇尔尼克、雷托维耶与比斯特拉三组泉群最后一次涌出地表，流经卢布尔雅那后汇入萨瓦河；上游在喀斯特原野之间多次潜入地下又重新涌出，每次出露都有不同的名字，民间因此称它为「七个名字的河」（弗尔赫尼卡官方旅游门户口径，WebSearch 2026-09）。各段名称的列法各源略有出入，正文不逐一列名",
};

const LOGARSKA_DOLINA: TerrainEntry = {
  id: "logarska-dolina",
  nameZh: "洛加尔谷",
  nameEn: "Logar Valley",
  category: "valley",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "林卡瀑布", lon: 14.5864, lat: 46.3747, elevation: 1100, kind: "gorge" },
  bbox: [14.56, 46.36, 14.68, 46.43],
  axis: [[14.59, 46.37], [14.66, 46.42]],
  viewScale: 1.0,
  label: { lon: 14.62, lat: 46.45, rotation: 0 },
  source: "洛加尔谷（Logarska dolina）：卡姆尼克—萨维尼亚阿尔卑斯山北侧的一条冰蚀谷，长约 7 公里；谷头的林卡瀑布高约 90 米；1987 年设为景观公园（洛加尔谷景观公园官方网站与斯洛文尼亚旅游局口径，WebSearch 2026-09）",
};

const VINTGAR_GORGE: TerrainEntry = {
  id: "vintgar-gorge",
  nameZh: "温特加尔峡谷",
  nameEn: "Vintgar Gorge",
  category: "gorge",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "温特加尔峡谷", lon: 14.0850, lat: 46.3933, elevation: 560, kind: "gorge" },
  bbox: [14.06, 46.38, 14.11, 46.41],
  axis: [[14.07, 46.39], [14.10, 46.40]],
  viewScale: 1.0,
  label: { lon: 14.09, lat: 46.42, rotation: 0 },
  source: "温特加尔峡谷（Blejski Vintgar）：拉多夫纳河在霍姆山与博尔什特山之间切出的石灰岩峡谷，长约 1600 米、深可达 250 米；1891 年水位异常低时被当地村长雅各布·茹梅尔与摄影师贝内迪克特·莱尔盖特波雷尔探明，1893 年 8 月 28 日沿谷壁栈道正式开放；谷尾有什姆瀑布（温特加尔峡谷官方网站口径，WebSearch 2026-09）",
};

const TOLMIN_GORGES: TerrainEntry = {
  id: "tolmin-gorges",
  nameZh: "托尔明峡谷",
  nameEn: "Tolmin Gorges",
  category: "gorge",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "托尔明卡河与扎德拉什奇察河汇口", lon: 13.7392, lat: 46.2003, elevation: 180, kind: "gorge" },
  bbox: [13.71, 46.18, 13.77, 46.23],
  axis: [[13.72, 46.19], [13.76, 46.22]],
  viewScale: 1.0,
  label: { lon: 13.74, lat: 46.24, rotation: 0 },
  source: "托尔明峡谷（Tolminska korita）：托尔明卡河与扎德拉什奇察河两条隘谷的合称，两河在峡谷内汇合；汇口一带海拔约 180 米，是特里格拉夫国家公园的最低点，也是国家公园最南、最低的入口；步道经「魔鬼桥」（索查河谷旅游局与特里格拉夫国家公园口径，WebSearch 2026-09）",
};

const SKOCJAN_CAVES: TerrainEntry = {
  id: "skocjan-caves",
  nameZh: "什科茨扬溶洞",
  nameEn: "Škocjan Caves",
  category: "gorge",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "大塌陷洼地", lon: 13.9900, lat: 45.6636, elevation: 420, kind: "gorge" },
  bbox: [13.95, 45.64, 14.03, 45.69],
  axis: [[13.96, 45.67], [14.02, 45.66]],
  viewScale: 1.0,
  label: { lon: 13.99, lat: 45.70, rotation: 0 },
  source: "什科茨扬溶洞（Škocjanske jame）：雷卡河在喀斯特高原石灰岩中切出的地下河峡谷与洞穴系统，UNESCO 称其包含世界上已知规模最大的地下河峡谷之一，1986 年列入世界遗产名录；雷卡河在大塌陷洼地（Velika dolina）底部潜入地下，约 34 公里后在亚得里亚海岸附近的蒂马沃泉重新涌出（UNESCO 世界遗产中心与 IUGS 地质遗产名录口径，WebSearch 2026-09）",
};

const RAKOV_SKOCJAN: TerrainEntry = {
  id: "rakov-skocjan",
  nameZh: "拉科夫什科茨扬谷",
  nameEn: "Rakov Škocjan",
  category: "valley",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "拉科夫什科茨扬谷底", lon: 14.3014, lat: 45.7928, elevation: 510, kind: "gorge" },
  bbox: [14.26, 45.77, 14.35, 45.82],
  axis: [[14.27, 45.79], [14.34, 45.80]],
  viewScale: 1.0,
  label: { lon: 14.30, lat: 45.83, rotation: 0 },
  source: "拉科夫什科茨扬谷（Rakov Škocjan）：亚沃尔尼基山北坡一条由溶洞顶板沉降、塌落形成的喀斯特谷，谷两端各留有一座天生桥（小天生桥与大天生桥），是被毁溶洞的残余；拉克溪从谷东端的泽尔斯克洞涌出、在谷西端潜入特卡尔察洞；1949 年设为斯洛文尼亚第一个区域公园；与采尔克尼察湖一起列入拉姆萨尔国际重要湿地（诺特拉尼斯卡区域公园口径，WebSearch 2026-09）",
};

const LAKE_BLED: TerrainEntry = {
  id: "lake-bled",
  nameZh: "布莱德湖",
  nameEn: "Lake Bled",
  category: "lake",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "布莱德湖", lon: 14.0939, lat: 46.3636, elevation: 475, kind: "lake" },
  bbox: [14.07, 46.35, 14.12, 46.38],
  axis: [[14.08, 46.36], [14.11, 46.37]],
  viewScale: 1.0,
  label: { lon: 14.09, lat: 46.39, rotation: 0 },
  source: "布莱德湖（Blejsko jezero）：尤利安阿尔卑斯山东麓的冰川—构造复合成因湖，末次冰期的冰川加深了原有的构造洼地，冰退后积水成湖；湖长约 2120 米、宽约 1380 米，面积约 144 公顷，最深约 30.6 米；湖中小岛上有圣母升天教堂（布莱德官方旅游网站 bled.si 口径，WebSearch 2026-09；2026-09-13 当批核实改正：最深原写 29.5 米为 Wikipedia 口径，另删去「博希尼冰川」这一无可靠来源的冰川归属）",
};

const LAKE_BOHINJ: TerrainEntry = {
  id: "lake-bohinj",
  nameZh: "博希尼湖",
  nameEn: "Lake Bohinj",
  category: "lake",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "博希尼湖", lon: 13.8586, lat: 46.2847, elevation: 526, kind: "lake" },
  bbox: [13.82, 46.27, 13.90, 46.30],
  axis: [[13.83, 46.29], [13.89, 46.28]],
  viewScale: 1.0,
  label: { lon: 13.86, lat: 46.31, rotation: 0 },
  source: "博希尼湖（Bohinjsko jezero）：斯洛文尼亚面积最大的天然常年湖，面积约 3.18 平方公里、最深约 45 米；湖盆由博希尼冰川掘深，湖水约 1 亿立方米；主要入湖水源是萨维察溪，它汇集特里格拉夫湖谷的水，并在上游形成高约 78 米的萨维察瀑布；出湖水流为萨瓦博希尼卡河（特里格拉夫国家公园与博希尼官方旅游门户口径，WebSearch 2026-09）",
};

const LAKE_CERKNICA: TerrainEntry = {
  id: "lake-cerknica",
  nameZh: "采尔克尼察湖",
  nameEn: "Lake Cerknica",
  category: "lake",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "采尔克尼察湖", lon: 14.3950, lat: 45.7450, elevation: 550, kind: "lake" },
  bbox: [14.30, 45.70, 14.48, 45.80],
  axis: [[14.32, 45.78], [14.46, 45.71]],
  viewScale: 1.0,
  label: { lon: 14.39, lat: 45.82, rotation: 0 },
  source: "采尔克尼察湖（Cerkniško jezero）：采尔克尼察喀斯特原野（polje）底部的间歇湖，通常秋雨后与春季融雪时蓄满、五六月间干涸；水主要来自原野边缘的喀斯特泉，高水位时湖底的「涌泄两用洞」（estavela）会向上涌水、低水位时又把水排走；卡尼奥拉博物学家瓦尔瓦索尔最早研究其水文并因此获选英国皇家学会会员；2006-01-19 列入拉姆萨尔国际重要湿地（诺特拉尼斯卡区域公园与 DEIMS-SDR 长期生态研究站点口径，WebSearch 2026-09）。水面面积随季节变化很大，正文只写变化机制、不写具体面积",
};

const TRIGLAV_LAKES_VALLEY: TerrainEntry = {
  id: "triglav-lakes-valley",
  nameZh: "特里格拉夫湖谷",
  nameEn: "Triglav Lakes Valley",
  category: "valley",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "特里格拉夫湖区小屋一带", lon: 13.7572, lat: 46.3408, elevation: 1685, kind: "lake" },
  bbox: [13.72, 46.30, 13.80, 46.37],
  axis: [[13.76, 46.31], [13.74, 46.36]],
  viewScale: 1.0,
  label: { lon: 13.76, lat: 46.39, rotation: 0 },
  source: "特里格拉夫湖谷（Dolina Triglavskih jezer）：特里格拉夫峰西南、蒂查里察山与泽尔纳里察山陡壁之下的一条石灰岩悬谷，俗称「七湖谷」，但谷中实际不止七个湖；湖面海拔从最低的黑湖约 1294 米到最高的波德斯滕耶湖约 1993 米；谷水经萨维察溪流入博希尼湖（博希尼官方旅游门户与特里格拉夫国家公园口径，WebSearch 2026-09）",
};

const STRUNJAN_COAST: TerrainEntry = {
  id: "strunjan-coast",
  nameZh: "斯特伦扬海岸",
  nameEn: "Strunjan Coast",
  category: "coast",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "斯特伦扬海崖", lon: 13.6150, lat: 45.5361, elevation: 80, kind: "escarpment" },
  bbox: [13.58, 45.51, 13.66, 45.55],
  axis: [[13.59, 45.53], [13.65, 45.53]],
  viewScale: 1.0,
  label: { lon: 13.62, lat: 45.56, rotation: 0 },
  source: "斯特伦扬海岸（Strunjan）：斯洛文尼亚海岸中段一段由复理石构成的海崖，斯特伦扬海崖高约 80 米，崖下是卵石质的月亮湾；海崖一带沿岸长约 4 公里的地段属斯特伦扬景观公园（斯洛文尼亚自然公园联合会、波尔托罗日与皮兰旅游局口径，WebSearch 2026-09）。⚠️ 零争议：正文不写海岸线总长、不涉任何海域划界",
};

const PLANICA: TerrainEntry = {
  id: "planica",
  nameZh: "普拉尼察谷",
  nameEn: "Planica",
  category: "valley",
  regionId: "europe",
  country: "slovenia",
  landmark: { name: "普拉尼察谷口", lon: 13.7236, lat: 46.4764, elevation: 940, kind: "gorge" },
  bbox: [13.68, 46.40, 13.76, 46.50],
  axis: [[13.72, 46.49], [13.70, 46.41]],
  viewScale: 1.0,
  label: { lon: 13.72, lat: 46.52, rotation: 0 },
  source: "普拉尼察谷（Planica）：尤利安阿尔卑斯山北部一条狭长的冰蚀谷，在拉泰切附近从主谷分出向南伸入山中；西侧是蓬采山脊，东侧是莫伊斯特罗夫卡与奇佩尔尼克山脊；谷的上段称塔马尔，谷头耸立着亚洛韦茨峰；谷口一带是普拉尼察北欧运动中心与跳台滑雪场地（特里格拉夫国家公园与克拉尼斯卡戈拉旅游局口径，WebSearch 2026-09）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 斯洛文尼亚 =====
  JULIAN_ALPS_SLOVENIA, KAMNIK_SAVINJA_ALPS, KARAWANKS, POHORJE, SNEZNIK,
  KRAS_PLATEAU, POKLJUKA, VELIKA_PLANINA, TRNOVSKI_GOZD,
  GORISKA_BRDA, SLOVENSKE_GORICE, LJUBLJANSKO_BARJE,
  POMURSKA_RAVNINA, DRAVSKO_POLJE,
  SOCA_RIVER, SAVA_RIVER_SLOVENIA, LJUBLJANICA,
  LOGARSKA_DOLINA, RAKOV_SKOCJAN, TRIGLAV_LAKES_VALLEY, PLANICA,
  VINTGAR_GORGE, TOLMIN_GORGES, SKOCJAN_CAVES,
  LAKE_BLED, LAKE_BOHINJ, LAKE_CERKNICA,
  STRUNJAN_COAST,
];
