import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 马耳他（南欧次区域第七国；国土小，地形按卢森堡 / 新加坡的 12 条口径）
// 零争议红线：**不写任何海域、大陆架与邻国划界**（菲尔夫拉岛条目尤其注意，不提相关国际司法案）；
// `history` 段只写地质史、史前遗址、骑士团与英国时期的广泛记载史实、保护区设立年份与 UNESCO 认定；
// 独立以后的政治、移民、建设开发争议一律不碰。
// 骨架：群岛由渐新世—中新世五套海相沉积岩叠成（下珊瑚灰岩 / 抱球虫灰岩 / 蓝黏土 / 绿砂层 / 上珊瑚灰岩），
// 断层作用使群岛整体向东北倾斜 —— 西南抬起成崖、东北下沉成溺谷海湾，这一条贯穿全部 12 条。
// 海崖 / 溺谷港湾 / 塌陷海湾 / 沙滩沙丘 / 崩积坡海岸→`coast`、断层崖与地垒岭谷 / 台地丘陵→`hills`、
// 无人小岛与小岛→`island`、深切溺谷→`gorge`。
// 本国条目的正文数字一律只用本轮检索到的来源，追不到的不写。
// 主要来源：马耳他大学地理系 Ritienne Gauci《Rocks》（2025，UM OAR，下称 Gauci 2025，2 级）；
// IRMCo 戈佐岛电子教材 Unit 2《Geological Setting》（下称 IRMCo，2 级）。
// ============================================================

const DINGLI_CLIFFS: TerrainEntry = {
  id: "dingli-cliffs",
  nameZh: "丁利悬崖",
  nameEn: "Dingli Cliffs",
  category: "coast",
  regionId: "europe",
  country: "malta",
  landmark: { name: "塔德梅耶雷克（马耳他最高点）", lon: 14.3969, lat: 35.8458, elevation: 253, kind: "escarpment" },
  bbox: [14.37, 35.83, 14.43, 35.87],
  axis: [[14.375, 35.865], [14.425, 35.835]],
  viewFrom: 225,
  label: { lon: 14.40, lat: 35.875, rotation: 0 },
  source: "丁利悬崖（Rdumijiet ta' Ħad-Dingli）：马耳他岛西南岸的海崖，崖顶附近的塔德梅耶雷克（Ta' Dmejrek）海拔 253 米，为马耳他最高点；崖面下部出露下珊瑚灰岩，顶部为上珊瑚灰岩台地、中间夹蓝黏土坡；北西—南东走向的马格拉克断层（Magħlaq Fault）影响了丁利一带的崖岸，形成落差超过 200 米的断崖；群岛整体向东北倾斜，西南岸因此以高崖为主（Gauci 2025；Frontiers in Conservation Science 2025 马耳他崖岸植物论文；巴斯地质学会 2001 马耳他考察文，WebSearch 2026-09-13）",
};

const GREAT_FAULT_MALTA: TerrainEntry = {
  id: "great-fault-malta",
  nameZh: "马耳他大断层（维多利亚防线崖）",
  nameEn: "Great Fault (Victoria Lines Escarpment)",
  category: "hills",
  regionId: "europe",
  country: "malta",
  landmark: { name: "莫斯塔堡一带的断层崖", lon: 14.4250, lat: 35.9130, elevation: 120, kind: "escarpment" },
  bbox: [14.33, 35.89, 14.50, 35.95],
  axis: [[14.34, 35.912], [14.49, 35.935]],
  viewFrom: 340,
  label: { lon: 14.42, lat: 35.955, rotation: 0 },
  source: "马耳他大断层（Great Fault，又称维多利亚防线断层）：横贯马耳他岛中北部的东北东—西南西走向断层，以北是地垒与地堑相间的岭谷，以北地表以蓝黏土与上珊瑚灰岩为主、以南以抱球虫灰岩为主；英国海军军官斯普拉特（T.A.B. Spratt）在 1843 年的地形图上标出并命名；维多利亚防线沿断层崖顶修筑，全长约 12 公里，东起马德利纳、经莫斯塔、西至宾杰马，1875 年起先建三座堡垒，19 世纪 90 年代以连续步兵墙相连，因 1897 年维多利亚女王登基六十周年得名，1998 年列入 UNESCO 世界遗产预备名录（Gauci 2025；IRMCo；worldheritagesite.org 与 Military History Matters，WebSearch 2026-09-13）。锚点海拔 120 米为取景用概略值",
};

const NORTHERN_MALTA_RIDGES: TerrainEntry = {
  id: "northern-malta-ridges",
  nameZh: "马耳他北部岭谷",
  nameEn: "Northern Malta Ridges and Valleys",
  category: "hills",
  regionId: "europe",
  country: "malta",
  landmark: { name: "梅利哈岭", lon: 14.3650, lat: 35.9550, elevation: 100, kind: "escarpment" },
  bbox: [14.32, 35.92, 14.42, 36.00],
  axis: [[14.33, 35.955], [14.41, 35.975]],
  label: { lon: 14.37, lat: 36.005, rotation: 0 },
  source: "马耳他北部岭谷：大断层以北由一组东北东—西南西走向的平行断层切出的地垒—地堑地形，自南向北依次为瓦尔迪亚岭、拜达岭、梅利哈岭、马尔法岭，岭间为宾杰马谷、帕瓦莱斯谷、米杰卜谷、梅利哈谷等谷地，谷地入海处形成海湾；梅利哈湾的加迪拉（Għadira）为盐沼湿地（Gauci 2025）；马尔法岭上的圣阿加莎塔（红塔）为骑士团时期所建，帕瓦莱斯湾沿岸有二战时期英军碉堡，帕瓦莱斯谷有西马尔自然保护区（公开资料，WebSearch 2026-09-13，2026-09-13 当批核实 ok）。锚点海拔 100 米为取景用概略值",
};

const GRAND_HARBOUR: TerrainEntry = {
  id: "grand-harbour",
  nameZh: "大港（瓦莱塔）",
  nameEn: "Grand Harbour (Valletta)",
  category: "coast",
  regionId: "europe",
  country: "malta",
  landmark: { name: "瓦莱塔", lon: 14.5125, lat: 35.8983, elevation: 50, kind: "city" },
  bbox: [14.49, 35.87, 14.54, 35.91],
  axis: [[14.535, 35.900], [14.500, 35.880]],
  label: { lon: 14.52, lat: 35.915, rotation: 0 },
  source: "大港（Il-Port il-Kbir）：马耳他岛东北岸的溺谷港湾，与北侧的马萨姆谢特港之间隔着瓦莱塔所在的希伯拉斯半岛；约 2 万年前的晚更新世海平面比今天低约 120 米，河流切入今天的大陆架，海平面回升后谷地被淹成港湾（Gauci 2025）；1565 年大围攻、瓦莱塔古城 1980 年列入世界遗产（UNESCO），WebSearch 2026-09-13",
};

const BLUE_GROTTO_MALTA: TerrainEntry = {
  id: "blue-grotto-malta",
  nameZh: "蓝洞（马耳他）",
  nameEn: "Blue Grotto (Malta)",
  category: "coast",
  regionId: "europe",
  country: "malta",
  landmark: { name: "蓝洞海蚀拱", lon: 14.4500, lat: 35.8167, elevation: 0, kind: "escarpment" },
  bbox: [14.43, 35.80, 14.47, 35.83],
  axis: [[14.435, 35.822], [14.465, 35.812]],
  viewFrom: 190,
  label: { lon: 14.45, lat: 35.835, rotation: 0 },
  source: "蓝洞（Taħt il-Ħnejja）：马耳他岛南岸泽里格谷（Wied iż-Żurrieq）小渔港附近崖脚的一组海蚀洞与海蚀拱，行政上属奎伦迪地方议会辖区；该段为下珊瑚灰岩直立崖岸，蓝洞所在海湾被归为溶洞塌陷后被海淹没的构造，崖脚海蚀洞沿陡倾节理与断裂发育；相邻的巴布谷（Wied Babu）为溺谷（Gauci 2025；维基「Blue Grotto (Malta)」3 级，WebSearch 2026-09-13）；附近的哈扎伊姆与姆纳德拉神庙属「马耳他巨石神庙」世界遗产（UNESCO）",
};

const FILFLA: TerrainEntry = {
  id: "filfla",
  nameZh: "菲尔夫拉岛",
  nameEn: "Filfla",
  category: "island",
  regionId: "europe",
  country: "malta",
  landmark: { name: "菲尔夫拉岛", lon: 14.4103, lat: 35.7875, elevation: 60, kind: "island" },
  bbox: [14.39, 35.775, 14.43, 35.80],
  viewFrom: 20,
  label: { lon: 14.41, lat: 35.772, rotation: 0 },
  source: "菲尔夫拉岛（Filfla）：马耳他岛南岸外约 4.5 公里的无人小岛，顶部平坦、四周陡崖；1980 年划为鸟类保护区，1988 年《菲尔夫拉自然保护区法》（Filfla Nature Reserve Act, XV of 1988）设为自然保护区，登岛只能出于教育或科研目的并须事先许可；风暴海燕繁殖地，国际鸟盟重要鸟区（ECOLEX 法规库 2 级、维基 3 级，WebSearch 2026-09-13）。⚠️ 零争议：不写任何海域 / 大陆架划界相关内容。锚点海拔 60 米为崖高概略值",
};

const COMINO: TerrainEntry = {
  id: "comino",
  nameZh: "科米诺岛",
  nameEn: "Comino",
  category: "island",
  regionId: "europe",
  country: "malta",
  landmark: { name: "科米诺岛", lon: 14.3367, lat: 36.0114, elevation: 30, kind: "island" },
  bbox: [14.31, 35.995, 14.36, 36.025],
  label: { lon: 14.335, lat: 36.030, rotation: 0 },
  source: "科米诺岛（Kemmuna）：马耳他岛与戈佐岛之间海峡中的岛屿，面积约 3.5 平方公里，马耳他三座有人居住的岛屿之一；主要由上珊瑚灰岩构成，岛上洞穴由石灰岩沿裂隙溶蚀与海浪侵蚀共同形成（Gauci 2025）；西侧与科米诺托岛之间的浅水海峡即「蓝湖」；圣玛丽塔 1618 年建成；属「自然2000」保护区网络（Friends of the Earth Malta 等 3 级，WebSearch 2026-09-13，2026-09-13 当批核实 ok）。锚点海拔 30 米为取景用概略值",
};

const GOZO_UPLANDS: TerrainEntry = {
  id: "gozo-uplands",
  nameZh: "戈佐岛台地丘陵",
  nameEn: "Gozo Mesas and Uplands",
  category: "hills",
  regionId: "europe",
  country: "malta",
  landmark: { name: "塔德比耶吉山", lon: 14.2050, lat: 36.0630, elevation: 190, kind: "peak" },
  bbox: [14.18, 36.01, 14.34, 36.08],
  axis: [[14.19, 36.05], [14.33, 36.04]],
  viewScale: 1.1,
  label: { lon: 14.26, lat: 36.09, rotation: 0 },
  source: "戈佐岛台地丘陵：戈佐岛为马耳他群岛第二大岛，地形以顶平边陡的台地丘陵为主，上珊瑚灰岩为顶、下伏蓝黏土；岛东部为纳杜尔与沙拉两片较大的被切割台地，往西依次变为泽布季、拉巴特一带的残余小丘与吉奥丹这样近锥形的丘陵；最高点塔德比耶吉（Ta' Dbieġi）海拔约 190 米（IRMCo；维基写 195 米，两说并存，正文只写「不到 200 米」）；蓝黏土不透水，托住上方灰岩中的地下水（IRMCo；Wikipedia「Geology of Malta」3 级，WebSearch 2026-09-13）",
};

const DWEJRA: TerrainEntry = {
  id: "dwejra",
  nameZh: "德维耶拉海岸（戈佐岛）",
  nameEn: "Dwejra (Gozo)",
  category: "coast",
  regionId: "europe",
  country: "malta",
  landmark: { name: "内海", lon: 14.1911, lat: 36.0538, elevation: 0, kind: "lake" },
  bbox: [14.175, 36.040, 14.205, 36.062],
  viewFrom: 250,
  label: { lon: 14.19, lat: 36.068, rotation: 0 },
  source: "德维耶拉（Dwejra）：戈佐岛西端海岸，内海（Il-Qawra）为经崖下天然隧洞通海的浅水潟湖，德维耶拉湾与内海被归为溶洞塌陷后被海水淹没的构造（Gauci 2025；IRMCo，并记斯普拉特最早认识到戈佐岛这类近圆形洼地）；湾内真菌岩为一块大型石灰岩岩块；「蓝窗」海蚀拱 2017 年 3 月 8 日在风暴中坍塌（MaltaToday / TVM 等，WebSearch 2026-09-13）；真菌岩 18 世纪中叶被骑士团大团长下令禁止擅入（维基 3 级，2026-09-13 当批核实 ok）",
};

const WIED_IL_GHASRI: TerrainEntry = {
  id: "wied-il-ghasri",
  nameZh: "加斯里谷（戈佐岛）",
  nameEn: "Wied il-Għasri (Gozo)",
  category: "gorge",
  regionId: "europe",
  country: "malta",
  landmark: { name: "加斯里谷谷口", lon: 14.2285, lat: 36.0788, elevation: 0, kind: "gorge" },
  bbox: [14.215, 36.065, 14.240, 36.085],
  viewFrom: 20,
  label: { lon: 14.228, lat: 36.090, rotation: 0 },
  source: "加斯里谷（Wied il-Għasri）：戈佐岛北岸深切进崖岸的狭长海谷，谷底尽头有小海滩，谷地向内陆延伸到加斯里村；Gauci 2025 把它与米加尔伊克西尼、施伦迪列为戈佐岛的溺谷，并指出从米加尔伊克西尼顺时针经塔琴奇、皮努角到加斯里谷的海岸以下珊瑚灰岩直立崖为主（维基「Għasri Valley」3 级，WebSearch 2026-09-13）",
};

const RAMLA_BAY: TerrainEntry = {
  id: "ramla-bay",
  nameZh: "拉姆拉湾（戈佐岛）",
  nameEn: "Ramla Bay (Gozo)",
  category: "coast",
  regionId: "europe",
  country: "malta",
  landmark: { name: "拉姆拉湾红沙滩", lon: 14.2830, lat: 36.0620, elevation: 0, kind: "dune" },
  bbox: [14.270, 36.052, 14.297, 36.072],
  viewFrom: 20,
  label: { lon: 14.283, lat: 36.076, rotation: 0 },
  source: "拉姆拉湾（Ir-Ramla l-Ħamra，意为「红沙」）：戈佐岛东北岸的沙质海湾；从马尔萨尔福恩湾东侧岬角到达赫莱特科罗特的海岸以崩积坡（rdum）为主，拉姆拉湾是其间唯一打断崩积坡的沙滩，此处蓝黏土与上抱球虫灰岩在海平面附近相接；沉积型海滩只占马耳他海岸线约 2.4%（Gauci 2025）；沙丘为「自然2000」特别保护区（ERA 标准数据表 MT0000005，1 级），沙色来自周边岩土中的铁质（visitgozo.com，WebSearch 2026-09-13）",
};

const MAJJISTRAL_COAST: TerrainEntry = {
  id: "majjistral-coast",
  nameZh: "马伊斯特拉尔海岸",
  nameEn: "Majjistral Coast",
  category: "coast",
  regionId: "europe",
  country: "malta",
  landmark: { name: "卡拉巴岬", lon: 14.3400, lat: 35.9300, elevation: 40, kind: "escarpment" },
  bbox: [14.325, 35.915, 14.360, 35.960],
  axis: [[14.342, 35.918], [14.345, 35.958]],
  viewFrom: 270,
  label: { lon: 14.338, lat: 35.965, rotation: 0 },
  source: "马伊斯特拉尔海岸：马耳他岛西北岸，上珊瑚灰岩台地之下为蓝黏土与抱球虫灰岩，形成崩积巨石坡（rdum）与黏土劣地，卡拉巴岬（il-Karraba）为典型（Gauci 2025）；2007 年 9 月以第 251 号法律公告设立马伊斯特拉尔自然与历史公园，范围自金湾至普拉耶特与沙拉哈姆拉一带，含约 3 公里受保护的海岸悬崖、属「自然2000」特别保护区，官网称为马耳他首个国家公园（majjistral.org，WebSearch 2026-09-13）。锚点海拔 40 米为取景用概略值",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 马耳他 =====
  DINGLI_CLIFFS, GREAT_FAULT_MALTA, NORTHERN_MALTA_RIDGES, GRAND_HARBOUR,
  BLUE_GROTTO_MALTA, FILFLA, COMINO, GOZO_UPLANDS,
  DWEJRA, WIED_IL_GHASRI, RAMLA_BAY, MAJJISTRAL_COAST,
];
