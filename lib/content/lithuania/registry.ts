import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 立陶宛（北欧次区域；联合国 M49 归北欧）
// 零争议红线：东部、南部、西南部边界地带不写邻国与界线 —— 梅德宁凯高地、斯文乔尼斯高地、苏杜瓦高地南缘、库尔斯沙嘴与潟湖的另一侧、
// 涅穆纳斯河界河段与三角洲主汊一律只写「境内部分」；贴近国界的全国最高点不作锚点；三角洲不写「左岸 / 右岸」；
// 二十世纪归属变化与政治、苏联时期建筑、军事设施与冷战遗址、少数民族与宗教、传说、境外地名与外语河名一律不写。
// 骨架：全境地表都是冰川留下的 —— 西部热马伊蒂亚高地与东南弧形的波罗的高地（苏杜瓦 / 祖基亚 / 奥克什泰蒂亚）夹着中立陶宛低地，
// 更东是倒数第二次冰期的古老高地（梅德宁凯 / 斯文乔尼斯）与东南沙质平原；西边滨海低地、库尔斯沙嘴与潟湖、涅穆纳斯三角洲；北部石膏喀斯特。
// 主要来源：国家保护区地籍 STVK 与河流湖泊地籍 UETK 的开放 WFS 服务（1 级；统计局与地质调查局网站被 Cloudflare 挡住），UNESCO，
// 立陶宛通用百科 vle.lt（2 级，地理学者撰写）；湖泊面积一律为地籍多边形口径、与百科差 1–3%。锚点坐标取 OSM / Wikidata / STVK；未查到实测海拔的为取景用概略值。
// ============================================================

const ZEMAICIAI_UPLAND: TerrainEntry = {
  id: "zemaiciai-upland",
  nameZh: "热马伊蒂亚高地",
  nameEn: "Samogitian Upland",
  category: "hills",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "梅德韦加利斯山", lon: 22.38892, lat: 55.62895, elevation: 235, kind: "peak" },
  bbox: [21.70, 55.30, 22.90, 56.20],
  viewScale: 1.5,
  label: { lon: 22.300, lat: 56.280, rotation: 0 },
  source: "热马伊蒂亚高地（Žemaičių aukštuma；中文维基国家公园条目作「萨莫吉提亚」）：立陶宛西部的岛状冰川堆积高地，西北—东南长约 100 km、宽约 50 km，形成于最后一次冰期波罗的阶段；中部是分水岭丘陵带，梅德韦加利斯山 234.64 m、沙特里亚山 229.11 m；东侧台地高 120–160 m；文塔河、米尼亚河等发源于此；迎风的西坡年降水 800–900 mm、东坡约 600 mm（立陶宛通用百科 vle.lt，2 级）；热马伊蒂亚国家公园 21,753.53 ha（1991）、瓦尔尼艾地区公园 33,731.74 ha（1992）（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）。「降水最多」不写；宗教建筑群、冷战时期设施与传说不写（研究子代理事实表 2026-09-15）",
};

const AUKSTAICIAI_UPLAND: TerrainEntry = {
  id: "aukstaiciai-upland",
  nameZh: "奥克什泰蒂亚高地",
  nameEn: "Aukštaitija Upland",
  category: "hills",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "梅米亚卡尔尼斯山", lon: 26.07324, lat: 55.54039, elevation: 240, kind: "peak" },
  bbox: [24.90, 54.90, 26.50, 55.95],
  axis: [[25.00, 55.00], [26.40, 55.85]],
  viewScale: 1.6,
  label: { lon: 25.600, lat: 55.980, rotation: 0 },
  source: "奥克什泰蒂亚高地（Aukštaičių aukštuma）：波罗的高地在立陶宛境内的北段，位于内里斯河（涅里斯河）、圣托伊河、热伊梅纳河之间，由塞利艾、乌田纳、莫莱塔伊、里耶谢四片丘陵区组成（最高 247.39 m），主要由最后一次冰期沉积物构成、厚 80–150 m，冰缘堆积部分为丘陵—洼地、湖泊密布，多深长的冰下河道湖，湖泊占高地面积 6% 以上（立陶宛通用百科 vle.lt，2 级）；波罗的高地弧在立陶宛境内约 340 km，立陶宛约 80% 的湖泊在波罗的高地（立陶宛通用百科 vle.lt，2 级）。与拉脱维亚 latgale-upland 同属波罗的高地弧，互相点名；「湖泊最多」「最大 / 最长湖」不写；锚点梅米亚卡尔尼斯山 239.65 m（VLE），高地最高点坐标未取到（研究子代理事实表 2026-09-15）",
};

const DZUKAI_UPLAND: TerrainEntry = {
  id: "dzukai-upland",
  nameZh: "祖基亚高地",
  nameEn: "Dzūkija Upland",
  category: "hills",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "盖达诺尼艾山", lon: 24.46213, lat: 54.6305, elevation: 257, kind: "peak" },
  bbox: [23.90, 54.30, 25.20, 54.95],
  axis: [[23.95, 54.35], [25.15, 54.90]],
  viewScale: 1.4,
  label: { lon: 24.600, lat: 55.000, rotation: 0 },
  source: "祖基亚高地（Dzūkų aukštuma）：波罗的高地中段，夹在涅穆纳斯河与内里斯河河谷之间，东北—西南走向，最高点盖达诺尼艾山 257.32 m；晚更新世冰舌推起冰碛丘块、压出冰川洼地（特拉凯、道盖等湖群洼地），丘块上多陡坡山丘、洼地里是平坦或波状平原，热融洼坑很多（立陶宛通用百科 vle.lt，2 级）；魔鬼坑深 40 m、长 220 m、宽 200 m（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数，国家自然遗产地貌对象）；奥克什塔德瓦里斯地区公园 17,004.90 ha（1992）（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）。「最深热融洼坑」不写（研究子代理事实表 2026-09-15）",
};

const SUDUVA_UPLAND: TerrainEntry = {
  id: "suduva-upland",
  nameZh: "苏杜瓦高地",
  nameEn: "Sūduva Upland",
  category: "hills",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "杜西亚湖", lon: 23.69528, lat: 54.2975, elevation: 106, kind: "lake" },
  bbox: [22.60, 54.20, 23.95, 54.65],
  axis: [[22.65, 54.35], [23.90, 54.45]],
  viewScale: 1.4,
  label: { lon: 23.300, lat: 54.720, rotation: 0 },
  source: "苏杜瓦高地（Sūduvos aukštuma）境内部分：波罗的高地西南部，东西向弧形延伸约 90 km、最宽约 20 km，北接中立陶宛低地，东以涅穆纳斯河谷与祖基亚高地分开；北坡是一串冰碛丘块，南部是冰下河道湖、北部是冰块压坑湖（立陶宛通用百科 vle.lt，2 级）；杜西亚湖地籍多边形面积 2,347 ha、类别为被拦高的湖（河流湖泊地籍 UETK WFS，1 级，地籍多边形口径，2026-09-15 取数）；梅泰利艾地区公园 17,720.69 ha、韦伊谢亚伊地区公园 12,288.35 ha（1992）（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）。高地最高点贴近国界，不作锚点；邻国高地名、境外流域不写；与波兰 masurian-lakes 可互相点名（研究子代理事实表 2026-09-15）",
};

const MEDININKAI_UPLAND: TerrainEntry = {
  id: "medininkai-upland",
  nameZh: "梅德宁凯高地",
  nameEn: "Medininkai Upland",
  category: "hills",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "克鲁奥皮内山", lon: 25.48463, lat: 54.54263, elevation: 294, kind: "peak" },
  bbox: [25.30, 54.25, 25.85, 54.75],
  label: { lon: 25.550, lat: 54.800, rotation: 0 },
  source: "梅德宁凯高地（Medininkų aukštuma）境内部分：奥克什托亚斯山 Aukštojas 293.84 m，2004 年由维尔纽斯格迪米纳斯技术大学测定、2005 年命名，VLE 称其为立陶宛最高点；此前一般认为最高的是相距约 500 m 的茹奥扎皮内山（立陶宛通用百科 vle.lt，2 级；「最高点」只有 2 级来源，正文带「据立陶宛通用百科」）；克鲁奥皮内山 293.57 m（VLE 表）；高地核心形成于倒数第二次冰期，比立陶宛其他高地古老，最后一次冰期的冻融风化与融冻泥流使湖泊洼地消失、形成大量谷地与干谷（立陶宛通用百科 vle.lt，2 级）；茹奥扎皮内地貌禁区 257.82 ha（1992），保护该高地典型的古老冰碛丘块与茹奥扎皮内山（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）。锚点不用贴近国界的奥克什托亚斯山，改用克鲁奥皮内山；邻国高地名、境外最高点、二十世纪纪念活动、神话与祭坛雕塑不写（研究子代理事实表 2026-09-15）",
};

const SVENCIONYS_UPLAND: TerrainEntry = {
  id: "svencionys-upland",
  nameZh: "斯文乔尼斯高地",
  nameEn: "Švenčionys Upland",
  category: "hills",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "内韦沙伊山", lon: 26.27848, lat: 55.28838, elevation: 290, kind: "peak" },
  bbox: [25.90, 54.95, 26.60, 55.40],
  label: { lon: 26.250, lat: 55.460, rotation: 0 },
  source: "斯文乔尼斯高地（Švenčionių aukštuma）境内部分：冰碛高地，东南部形成于梅德宁凯冰期、西北部形成于涅穆纳斯冰期格鲁达阶段，地形为丘陵—洼地，东北边缘被冰前湖冲刷；深的冰下河道谷地把高地分成几个丘块，最高内韦沙伊山 289.69 m；西部与南部属涅穆纳斯流域、北部与东部属道加瓦流域，年降水 650–700 mm（立陶宛通用百科 vle.lt，2 级）；西尔韦塔地区公园 8,754.66 ha（1992）（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）。面积与长宽是跨境总数，不写；中文维基条目名为白俄罗斯语转写，不用（研究子代理事实表 2026-09-15）",
};

const CENTRAL_LITHUANIAN_LOWLAND: TerrainEntry = {
  id: "central-lithuanian-lowland",
  nameZh: "中立陶宛低地",
  nameEn: "Central Lithuanian Lowland",
  category: "plain",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "帕内韦日斯", lon: 24.36389, lat: 55.725, elevation: 60, kind: "city" },
  bbox: [22.20, 54.60, 25.30, 56.45],
  viewScale: 2.0,
  label: { lon: 23.800, lat: 56.200, rotation: 0 },
  source: "中立陶宛低地（Vidurio Lietuvos žemuma）：位于热马伊蒂亚高地与波罗的高地之间，弧形自国土北部延伸到西南部；约 14,000 年前两股冰舌消融时形成，中部一串冰碛岗把低地分成两部分；主要由冰湖相黏土构成，地形平坦或波状，河网稠密，森林只长在砂地上；涅韦日斯河与杜比萨河是流向与地形总体坡向相反的「逆向河」（立陶宛通用百科 vle.lt，2 级）；全国平均海拔 99 m，32% 平坦平原、18% 波状、50% 丘陵（VLE「立陶宛地形」）。与拉脱维亚 zemgale-plain 互相点名；锚点海拔为概略值（研究子代理事实表 2026-09-15）",
};

const COASTAL_LOWLAND_LT: TerrainEntry = {
  id: "coastal-lowland-lt",
  nameZh: "滨海低地（立陶宛）",
  nameEn: "Lithuanian Coastal Lowland",
  category: "plain",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "加尔格日代", lon: 21.39502, lat: 55.71757, elevation: 20, kind: "city" },
  bbox: [21.00, 55.25, 21.75, 56.45],
  viewScale: 1.6,
  label: { lon: 21.500, lat: 56.100, rotation: 0 },
  source: "立陶宛滨海低地（Pajūrio žemuma）：沿波罗的海与库尔斯潟湖岸呈 30–40 km 宽的带状延伸，东侧过渡到西热马伊蒂亚台地；地形有砂质海成与河成阶地、冰湖平原、冰碛平原与冰水平原、冰碛岗、砂丘，几条河沿冰水古河谷流动，古河谷与冰碛岗标出最后一次冰期冰缘的位置；波罗的海水位变化形成了几级滨海阶地（立陶宛通用百科 vle.lt，2 级）；滨海地区公园 5,847.10 ha（1992），保护海岸沙丘带、利托里纳海沙丘岗、海崖与漂砾滩（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数 + VLE）。锚点海拔为概略值（研究子代理事实表 2026-09-15）",
};

const SOUTHEAST_SANDY_PLAIN: TerrainEntry = {
  id: "southeast-sandy-plain",
  nameZh: "东南沙质平原（达伊纳瓦）",
  nameEn: "Southeastern Sandy Plain (Dainava)",
  category: "plain",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "马尔辛科尼斯内陆沙丘", lon: 24.43736, lat: 54.10127, elevation: 140, kind: "dune" },
  bbox: [23.60, 53.95, 25.40, 54.80],
  viewScale: 1.8,
  label: { lon: 24.500, lat: 54.880, rotation: 0 },
  source: "东南沙质平原（Pietryčių lyguma，也称达伊纳瓦沙质平原）境内部分：冰水沉积平原，结构依次是高地脚下的冰水扇带、宽平古河谷、冰前湖湖底、大片内陆沙丘；森林占平原面积约 50%，土壤以砂土为主；冰前浅湖干涸后湖底砂被风吹成内陆沙丘（立陶宛通用百科 vle.lt，2 级）；祖基亚国家公园 58,334.40 ha（1991）；马尔辛科尼斯地貌禁区 1,320.72 ha（1994），保护内陆沙丘群与 Dalgiakalnis 沙丘及地衣松林（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）；梅尔基斯河境内长度 198.231 km（河流湖泊地籍 UETK WFS，1 级，地籍多边形口径，2026-09-15 取数）。南段贴近国界的地名与界河不写；「最大国家公园」可由 STVK 面积比出，正文不写；锚点海拔为概略值（研究子代理事实表 2026-09-15）",
};

const CURONIAN_SPIT: TerrainEntry = {
  id: "curonian-spit",
  nameZh: "库尔斯沙嘴（立陶宛境内）",
  nameEn: "Curonian Spit (Lithuania)",
  category: "coast",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "阿吉拉沙丘", lon: 21.08374, lat: 55.43993, elevation: 53, kind: "dune" },
  bbox: [20.95, 55.28, 21.14, 55.72],
  axis: [[21.00, 55.30], [21.12, 55.70]],
  viewScale: 1.3,
  label: { lon: 20.950, lat: 55.550, rotation: 0 },
  source: "库尔斯沙嘴立陶宛境内部分（Kuršių nerija）：UNESCO 994 称整条沙嘴长 98 km、宽 0.4–3.8 km，约 5,000 年前洋流搬运的砂在冰碛岛上堆成把海与潟湖隔开的大沙丘脊，17–18 世纪砍伐后沙丘移动掩埋村落，19 世纪之交开始固沙（1 级；列入年份 2000 为 VLE 2 级）；国家自然遗产登记的沙丘高度：韦采克鲁加斯 67.2 m、阿吉拉 53.1 m 等（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）；库尔斯沙嘴国家公园 27,388.25 ha（1991），纳格利艾自然保护区保护被风吹蚀的灰色沙丘（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）；沙嘴从海到潟湖依次是海滩、前沙丘、平地、风蚀残丘带、大沙丘脊、潟湖侧平地；帕尔尼迪斯沙丘 1955–1973 年向潟湖推进 75 m（立陶宛通用百科 vle.lt，2 级）。长度与宽度是整条沙嘴的数；另一侧、归属史、苏联时期建筑、海上油田、战争遗留物、沙丘别名不写（研究子代理事实表 2026-09-15）",
};

const CURONIAN_LAGOON: TerrainEntry = {
  id: "curonian-lagoon",
  nameZh: "库尔斯潟湖（立陶宛境内）",
  nameEn: "Curonian Lagoon (Lithuania)",
  category: "lake",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "库尔斯潟湖", lon: 21.22, lat: 55.45, elevation: 0, kind: "lake" },
  bbox: [20.98, 55.26, 21.35, 55.73],
  viewScale: 1.2,
  label: { lon: 21.300, lat: 55.780, rotation: 0 },
  source: "库尔斯潟湖立陶宛境内部分（Kuršių marios）：地籍多边形面积 399.9 km²（河流湖泊地籍 UETK WFS，1 级，地籍多边形口径，2026-09-15 取数；VLE 为 381.6 km²，正文写约 380–400 km²）；典型的河口湾，咸海水与淡水在此混合；湖盆约 7,000 年前利托里纳海海侵时开始形成，洋流搬运物质形成沙坝、沙嘴隔出潟湖；北部最浅、常见水深 1–2 m，克莱佩达海峡被疏浚到 10–14 m；河流每年平均注入约 23.1 km³ 水，潟湖水位高于海面，平均含盐量 0.3‰；克莱佩达海峡不结冰（立陶宛通用百科 vle.lt，2 级）。整个潟湖的面积长宽、南部、边界航标、境外地名、古航道不写；「波罗的海最大潟湖」不写；锚点为水面概略点（研究子代理事实表 2026-09-15）",
};

const NEMUNAS_RIVER: TerrainEntry = {
  id: "nemunas-river",
  nameZh: "涅穆纳斯河（立陶宛境内）",
  nameEn: "Nemunas River (Lithuania)",
  category: "river",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "考纳斯汇流处", lon: 23.885, lat: 54.8989, elevation: 25, kind: "city" },
  bbox: [21.25, 53.90, 24.25, 55.35],
  axis: [[24.20, 54.00], [21.30, 55.30]],
  viewScale: 2.0,
  label: { lon: 23.300, lat: 55.400, rotation: 0 },
  source: "涅穆纳斯河（Nemunas，又称尼曼河）立陶宛境内：境内长度 476.913 km、河源不在立陶宛境内（河流湖泊地籍 UETK WFS，1 级，地籍多边形口径，2026-09-15 取数；该长度含界河段，正文不写「全部在境内」）；立陶宛境内流域占国土约 71.5%（VLE「Nemunas」，「Lietuvos upės」作 71.6%）；中游切入冰碛高地、河谷深而窄、河道极弯曲，1959 年在考纳斯筑坝形成考纳斯水库；考纳斯到尤尔巴尔卡斯河谷宽 1.5–2.0 km、谷坡高 30–35 m；每年平均向库尔斯潟湖输送约 23 km³ 水，补给中融雪 40%、雨水 25%、地下水 35%；三角洲在距河口 48 km 处开始（立陶宛通用百科 vle.lt，2 级）。流经国家、界河长度、外语河名、全长不写；「最大的河」不写；锚点海拔为概略值（研究子代理事实表 2026-09-15）",
};

const NERIS_RIVER: TerrainEntry = {
  id: "neris-river",
  nameZh: "内里斯河（涅里斯河）",
  nameEn: "Neris River",
  category: "river",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "克尔纳韦", lon: 24.85, lat: 54.88333, elevation: 70, kind: "city" },
  bbox: [23.85, 54.60, 26.30, 55.20],
  axis: [[26.20, 54.95], [23.90, 54.90]],
  viewScale: 1.7,
  label: { lon: 25.000, lat: 55.250, rotation: 0 },
  source: "内里斯河（Neris，也译涅里斯河）立陶宛境内：境内长度 237.777 km、河源不在立陶宛境内（河流湖泊地籍 UETK WFS，1 级，地籍多边形口径，2026-09-15 取数）；沿岸（境内）有维尔纽斯、克尔纳韦、约纳瓦、考纳斯，在考纳斯城堡旁汇入涅穆纳斯河；沃凯河口以下穿过波罗的高地，挤进一条宽 0.5–1 km、深 60–70 m 的陡坡河谷，之后河谷展宽到 2–3 km；东部河谷阶地可达九级；河口多年平均流量 189.5 m³/s（立陶宛通用百科 vle.lt，2 级）；克尔纳韦考古遗址位于内里斯河谷，194.4 ha，保存约一万年的人类定居证据并记录冰川退缩过程（UNESCO 1137，1 级）。界河段、境外发源地、外语河名、上游水库、事故不写；「最大支流」不写；锚点海拔为概略值（研究子代理事实表 2026-09-15）",
};

const NEMUNAS_DELTA: TerrainEntry = {
  id: "nemunas-delta",
  nameZh: "涅穆纳斯河三角洲（立陶宛境内）",
  nameEn: "Nemunas Delta (Lithuania)",
  category: "plain",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "文泰岬", lon: 21.2, lat: 55.35, elevation: 1, kind: "delta" },
  bbox: [21.18, 55.25, 21.60, 55.45],
  viewScale: 1.2,
  label: { lon: 21.400, lat: 55.500, rotation: 0 },
  source: "涅穆纳斯河三角洲立陶宛境内部分（Nemuno delta）：涅穆纳斯三角洲地区公园 29,112.24 ha（1992，STVK 设立文件；VLE 作 1997 年）；前三角洲自然保护区保护三角洲形成过程最活跃的陆域与水域；奥克什图马拉泥炭沼泽禁区以大量沼泽小水塘复合体为特征（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）；境内三角洲地面近潟湖处高 0.5–1.5 m，大部分仍受洪水强烈影响、泥沙沉积，三角洲还在增长，春汛持续 20–28 天；1993 年列入拉姆萨尔湿地名录；文泰岬长 4.6 km，是陆地下沉、潟湖水淹没冰碛岗后形成的，灯塔建于 1863 年，1929 年起设鸟类环志站；奥克什图马拉高位沼泽泥炭最厚 9 m、形成于 9,000 多年前（立陶宛通用百科 vle.lt，2 级）。主汊国界、另一侧、「左岸 / 右岸」不写；锚点离国界约 11 km，已是可辨识度最高的选择（研究子代理事实表 2026-09-15）",
};

const SVENTOJI_RIVER: TerrainEntry = {
  id: "sventoji-river",
  nameZh: "圣托伊河",
  nameEn: "Šventoji River",
  category: "river",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "阿尼克什奇艾", lon: 25.10722, lat: 55.53444, elevation: 70, kind: "city" },
  bbox: [24.30, 55.05, 26.20, 55.85],
  axis: [[26.10, 55.60], [24.35, 55.10]],
  viewScale: 1.5,
  label: { lon: 25.300, lat: 55.900, rotation: 0 },
  source: "圣托伊河（Šventoji，内里斯河支流；立陶宛有三条同名河，本条为地籍编码 12210001）：长度 248.09 km（河流湖泊地籍 UETK WFS，1 级，地籍多边形口径，2026-09-15 取数；VLE 247.7 km）；发源于杜克什塔斯湖，穿过多个湖泊，先向西北、从萨尔泰湖起转向西南，经阿尼克什奇艾、乌克梅尔盖，在约纳瓦附近汇入内里斯河；湖泊调节径流，夏天水量也充足（立陶宛通用百科 vle.lt，2 级）；阿尼克什奇艾松林景观禁区保护圣托伊河谷及其露头与蓬图卡斯漂砾；蓬图卡斯漂砾高 5.7 m、长 7.54 m、宽 7.34 m（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）；蓬图卡斯由更新世冰盖从北方的维堡环斑花岗岩体搬运而来（立陶宛通用百科 vle.lt，2 级）。「最大支流」「第二大漂砾」「全长在境内的最长河」不写；漂砾上的浮雕与传说不写；锚点海拔为概略值（研究子代理事实表 2026-09-15）",
};

const MINIJA_RIVER: TerrainEntry = {
  id: "minija-river",
  nameZh: "米尼亚河",
  nameEn: "Minija River",
  category: "river",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "米尼亚河突破口", lon: 22.13438, lat: 55.84561, elevation: 100, kind: "gorge" },
  bbox: [21.25, 55.30, 22.40, 56.00],
  axis: [[22.35, 55.95], [21.30, 55.35]],
  viewScale: 1.4,
  label: { lon: 21.800, lat: 56.050, rotation: 0 },
  source: "米尼亚河（Minija）：长度 217.049 km（河流湖泊地籍 UETK WFS，1 级，地籍多边形口径，2026-09-15 取数；VLE 202 km，差异可能是河源或汇入点口径不同，正文写两百余公里）；米尼亚河突破口景观禁区 553.20 ha（1974）保护米尼亚河冲破冰碛岗的景观；米尼亚古河谷景观禁区（1992）保护侵蚀古河谷景观（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）；发源于迪多瓦斯湖，沿热马伊蒂亚高地西坡向西、西北流，比降 1.31 m/km，进入滨海低地后转向南、沿古河谷蜿蜒，比降降到 0.23 m/km，普列库莱以下进入几乎与潟湖水面齐平的三角洲平原，河床多石质急滩与大漂砾；约一半年份夏秋暴雨洪峰早于春汛（立陶宛通用百科 vle.lt，2 级）。「流域降水最多」不写；锚点海拔为概略值（研究子代理事实表 2026-09-15）",
};

const AUKSTAITIJA_LAKES: TerrainEntry = {
  id: "aukstaitija-lakes",
  nameZh: "奥克什泰蒂亚湖区（陶拉格纳斯湖）",
  nameEn: "Aukštaitija Lakes (Lake Tauragnas)",
  category: "lake",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "陶拉格纳斯湖", lon: 25.89185, lat: 55.44733, elevation: 165, kind: "lake" },
  bbox: [25.80, 55.22, 26.25, 55.52],
  label: { lon: 26.020, lat: 55.560, rotation: 0 },
  source: "奥克什泰蒂亚国家公园湖区：奥克什泰蒂亚国家公园 41,055.73 ha，1974 年设立（STVK 五个国家公园中唯一早于 1991 年设立）；陶拉格纳斯景观禁区设立目的原文：保护「立陶宛最深的湖——陶拉格纳斯湖」清晰的湖盆谷地（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数，名次有 1 级口径）；陶拉格纳斯湖地籍多边形面积 506.6 ha（河流湖泊地籍 UETK WFS，1 级，地籍多边形口径，2026-09-15 取数）；陶拉格纳斯湖最大水深 62.5 m、平均 18.4 m，冰下河道成因，主要由地下泉补给、水位变化很小（立陶宛通用百科 vle.lt，2 级）；公园位于斯文乔尼斯高地与奥克什泰蒂亚高地之间，长而深的谷地里是岸线曲折的冰下河道湖，园内 127 个湖，森林约占 65%（立陶宛通用百科 vle.lt，2 级）。「最早的国家公园」只写年份；设立机构名、境外湖名、宗教建筑不写（研究子代理事实表 2026-09-15）",
};

const NEMUNAS_LOOPS: TerrainEntry = {
  id: "nemunas-loops",
  nameZh: "涅穆纳斯河大弯",
  nameEn: "Nemunas Loops",
  category: "valley",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "涅穆纳斯河大弯", lon: 24.0145, lat: 54.58025, elevation: 60, kind: "meander" },
  bbox: [23.90, 54.52, 24.12, 54.68],
  label: { lon: 24.000, lat: 54.720, rotation: 0 },
  source: "涅穆纳斯河大弯（Didžiosios Nemuno kilpos）：涅穆纳斯大弯水文禁区 1,348.29 ha（1997）保护普尼亚、巴尔别里什基斯、普列奈与比尔什托纳斯大弯的水文结构；涅穆纳斯大弯地区公园 25,074.85 ha（1992）（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）；大弯河段长 59 km，由几个弯组成，最窄的弯颈宽 1.2 km；河谷平均深 40 m、谷坡最高约 50 m；晚冰期这里是冰前湖，湖底沉积厚达 10 m 的纹泥，涅穆纳斯切穿纹泥与冰碛形成曲流、阶地与露头（立陶宛通用百科 vle.lt，2 级）。弯的个数两说（VLE 三个 / STVK 列四个名字），正文不写个数；「独一无二」不写；锚点海拔为概略值（研究子代理事实表 2026-09-15）",
};

const TRAKAI_LAKES: TerrainEntry = {
  id: "trakai-lakes",
  nameZh: "特拉凯湖群（加尔维湖）",
  nameEn: "Trakai Lakes (Lake Galvė)",
  category: "lake",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "加尔维湖", lon: 24.93333, lat: 54.66111, elevation: 148, kind: "lake" },
  bbox: [24.85, 54.58, 25.02, 54.72],
  label: { lon: 24.940, lat: 54.760, rotation: 0 },
  source: "特拉凯湖群：特拉凯历史国家公园 8,146.66 ha（1991）；加尔维湖水文禁区 374.53 ha（1993）（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）；加尔维湖地籍多边形面积 371.5 ha（河流湖泊地籍 UETK WFS，1 级，地籍多边形口径，2026-09-15 取数；VLE 361 ha）；加尔维湖南北长 3.2 km、最大水深 46.8 m、平均 13.6 m，冰下河道湖兼被拦高的湖，21 个岛，南与卢卡湖、托托里什凯斯湖、东与斯凯斯蒂斯湖相连（立陶宛通用百科 vle.lt，2 级）；公园地形形成于最后一次冰期，南部是波状冰水扇平原、北部是冰碛丘链，32 个湖合计约 1,400 ha（立陶宛通用百科 vle.lt，2 级）。湖岸线两说差距大不写；少数民族文化、中世纪人物与战争史不写（研究子代理事实表 2026-09-15）",
};

const PLATELIAI_LAKE: TerrainEntry = {
  id: "plateliai-lake",
  nameZh: "普拉特利艾湖",
  nameEn: "Lake Plateliai",
  category: "lake",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "普拉特利艾湖", lon: 21.87306, lat: 56.04722, elevation: 146, kind: "lake" },
  bbox: [21.80, 56.00, 21.93, 56.09],
  label: { lon: 21.870, lat: 56.130, rotation: 0 },
  source: "普拉特利艾湖（Platelių ežeras）：普拉特利艾景观禁区设立目的原文保护「热马伊蒂亚地区最大、最深的普拉特利艾湖」（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数，名次有 1 级口径，范围限定为热马伊蒂亚地区）；地籍类别为被拦高的湖，地籍多边形面积 1,207.5 ha（河流湖泊地籍 UETK WFS，1 级，地籍多边形口径，2026-09-15 取数）；在热马伊蒂亚国家公园内，南北长 8.4 km、最宽 3.3 km，最大水深 46 m、平均 11.4 m，湖盆一部分是冰下河道成因、一部分是冰块压坑，18 世纪末已筑坝拦高，1960 年在南端建新坝；湖岸保留 8 级阶地，7 个岛（立陶宛通用百科 vle.lt，2 级）；普洛克什蒂内自然保护区保护热融洼地里的森林—沼泽复合体（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）。冷战时期设施、宗教建筑与庄园不写（研究子代理事实表 2026-09-15）",
};

const BIRZAI_KARST: TerrainEntry = {
  id: "birzai-karst",
  nameZh: "比尔扎伊喀斯特区",
  nameEn: "Biržai Karst",
  category: "basin",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "基尔基来湖", lon: 24.6889, lat: 56.248, elevation: 50, kind: "lake" },
  bbox: [24.60, 56.15, 24.80, 56.30],
  label: { lon: 24.700, lat: 56.340, rotation: 0 },
  source: "比尔扎伊喀斯特区：基尔基来景观禁区 1,009.11 ha（1998）保护形态复杂的喀斯特塌陷坑与石膏喀斯特湖；卡拉伊米什基斯景观禁区保护受喀斯特与潜蚀作用强烈影响、塌陷坑密集的景观与牛洞；比尔扎伊地区公园 14,405.76 ha（1992）；希尔韦纳景观禁区设立目的称希尔韦纳湖是「立陶宛最古老的人工湖」（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）；基尔基来湖地籍多边形面积 13.5 ha（河流湖泊地籍 UETK WFS，1 级，地籍多边形口径，2026-09-15 取数）；公园里有成千上万个塌陷坑，每年都登记到新坑，其下是晚泥盆世会溶蚀的含石膏岩层；喀斯特作用在不断改造立陶宛北部地形，塌陷坑深可达十几米，较大的坑里有小湖（立陶宛通用百科 vle.lt，2 级）。牛洞尺寸两个口径不写；「唯一」不写；城堡家族史与传说不写；北面邻国不写；锚点海拔为概略值（研究子代理事实表 2026-09-15）",
};

const OLANDO_KEPURE: TerrainEntry = {
  id: "olando-kepure",
  nameZh: "荷兰人帽海崖",
  nameEn: "Olando Kepurė (Dutchman's Cap)",
  category: "coast",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "荷兰人帽海崖", lon: 21.06767, lat: 55.79593, elevation: 16, kind: "escarpment" },
  bbox: [21.05, 55.78, 21.09, 55.81],
  label: { lon: 21.080, lat: 55.830, rotation: 0 },
  source: "荷兰人帽海崖（Olando Kepurė；STVK 登记名 Olandų kepurės skardis）：国家地质遗产对象，高 16 m、长 800 m（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数；VLE 称约 18 m、约 1 km，公园条另说至 24 m，正文写十几米到二十余米）；荷兰人帽景观禁区 91.53 ha 保护海岸陡崖与成熟松林（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）；克莱佩达区吉鲁利艾以北的波罗的海岸侵蚀陡崖，崖壁是夹薄砂层的冰碛亚黏土，不断被浪蚀，崖脚海滩是砾石、卵石与漂砾，长期是水手的航行地标（立陶宛通用百科 vle.lt，2 级）；从荷兰人帽到内米尔塞塔的海里与岸边有冰碛海崖被侵蚀后留下的漂砾滩（VLE「滨海地区公园」）。形成年代两个口径不写数字；「海岸最高」「独特」不写；与拉脱维亚 jurkalne-cliffs 同为冰碛物被浪蚀的海崖，可互相点名（研究子代理事实表 2026-09-15）",
};

const ZUVINTAS: TerrainEntry = {
  id: "zuvintas",
  nameZh: "祖文塔斯湖沼",
  nameEn: "Žuvintas Lake and Wetland",
  category: "lake",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "祖文塔斯湖", lon: 23.62861, lat: 54.47083, elevation: 87, kind: "lake" },
  bbox: [23.50, 54.40, 23.75, 54.55],
  label: { lon: 23.630, lat: 54.580, rotation: 0 },
  source: "祖文塔斯湖沼（Žuvintas）：祖文塔斯生物圈保护区 18,573.84 ha，2002 年设立（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）；地籍类别为被拦高的湖，地籍多边形面积 941.6 ha（河流湖泊地籍 UETK WFS，1 级，地籍多边形口径，2026-09-15 取数；VLE 971.2 ha）；残留湖、湖盆是冰块压坑，富营养、正在沼泽化，最大水深 2.5 m、平均 0.67 m，四周被沼泽包围；1968 年在出水口建节制闸抬高水位；水生植物形成浮岛，1951–2005 年开阔水面每年缩小约 2.85 ha；1937 年获保护区地位（立陶宛通用百科 vle.lt，2 级）。「第一个保护区」「人与生物圈」身份无 1 级来源不写（研究子代理事实表 2026-09-15）",
};

const DUBYSA_VALLEY: TerrainEntry = {
  id: "dubysa-valley",
  nameZh: "杜比萨古河谷",
  nameEn: "Dubysa Valley",
  category: "valley",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "贝蒂加拉", lon: 23.36688, lat: 55.36208, elevation: 60, kind: "corridor" },
  bbox: [23.25, 55.05, 23.55, 55.85],
  axis: [[23.40, 55.80], [23.35, 55.10]],
  viewScale: 1.3,
  label: { lon: 23.500, lat: 55.600, rotation: 0 },
  source: "杜比萨古河谷（Dubysos senslėnis）：贝蒂加拉景观禁区 2,238.29 ha（1996）保护杜比萨河底宽、坡陡、深切的古河谷及其侵蚀冲沟群与山嘴复合体；文塔—杜比萨古河谷景观禁区保护自然形成又被人改造的古河谷与运河；杜比萨地区公园 11,469.32 ha（1992）（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数）；杜比萨河长度 142.941 km（河流湖泊地籍 UETK WFS，1 级，地籍多边形口径，2026-09-15 取数；VLE 147.9 km）；涅穆纳斯河右岸支流，从布比艾水库坝下流出、向南在谢雷季尤斯汇入涅穆纳斯，河谷宽 300–500 m、谷坡高至 30 m 且很陡；杜比萨河是「逆向河」（立陶宛通用百科 vle.lt，2 级）。「独一无二」不写；桥梁名次与战争史不写；锚点海拔为概略值（研究子代理事实表 2026-09-15）",
};

const KAMANOS_BOG: TerrainEntry = {
  id: "kamanos-bog",
  nameZh: "卡马诺斯沼泽",
  nameEn: "Kamanos Bog",
  category: "plain",
  regionId: "europe",
  country: "lithuania",
  landmark: { name: "卡马诺斯沼泽", lon: 22.64345, lat: 56.29171, elevation: 110, kind: "lake" },
  bbox: [22.55, 56.24, 22.75, 56.34],
  label: { lon: 22.650, lat: 56.380, rotation: 0 },
  source: "卡马诺斯沼泽（Kamanų pelkė）：卡马诺斯国家自然保护区 4,361.70 ha，设立目的称卡马诺斯沼泽是「北立陶宛黏土平原上最大、最有价值的沼泽复合体」，带有内部干地、被泥潭包围的沼泽水眼与小湖（国家保护区地籍 STVK WFS，1 级，2026-09-15 取数，名次有 1 级口径、范围限定为北立陶宛黏土平原；设立年份 STVK 同一记录 1979 / 1978 不一致，正文写 1979 年）；约 50% 为森林、43.8% 为沼泽，沼泽上长着矮松，水塘众多，11 条溪流由此流出，泥炭层平均厚 3.8 m，1993 年列入拉姆萨尔湿地名录（立陶宛通用百科 vle.lt，2 级）。北面邻国不写；锚点海拔为概略值（研究子代理事实表 2026-09-15）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 立陶宛 =====
  ZEMAICIAI_UPLAND, AUKSTAICIAI_UPLAND, DZUKAI_UPLAND, SUDUVA_UPLAND,
  MEDININKAI_UPLAND, SVENCIONYS_UPLAND, CENTRAL_LITHUANIAN_LOWLAND, COASTAL_LOWLAND_LT,
  SOUTHEAST_SANDY_PLAIN, CURONIAN_SPIT, CURONIAN_LAGOON, NEMUNAS_RIVER,
  NERIS_RIVER, NEMUNAS_DELTA, SVENTOJI_RIVER, MINIJA_RIVER,
  AUKSTAITIJA_LAKES, NEMUNAS_LOOPS, TRAKAI_LAKES, PLATELIAI_LAKE,
  BIRZAI_KARST, OLANDO_KEPURE, ZUVINTAS, DUBYSA_VALLEY,
  KAMANOS_BOG,
];
