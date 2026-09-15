import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 斯洛伐克（东欧次区域第三国，波兰、捷克之后）
// 零争议红线：全境山地几乎都沿国界分布，跨境峰顶一律按「斯洛伐克与波兰/奥地利交界」这类
// 中性表述，不涉主权、不描述边界线；东北角（波洛尼尼—布科夫斯凯山）周边邻国情况敏感，
// 比照克罗地亚的更严做法 —— **一个邻国名都不提**，只写「斯洛伐克国土东北端」。
// `history` 段只写地质史、广泛记载的前现代史与 UNESCO 认定，二十世纪的政治/领土/民族议题一律不碰。
// 结晶岩核心高山 / 火山山地 / 石灰岩中山→`mountain_system`、喀斯特高原→`plateau`、
// 深切喀斯特峡谷→`gorge`、砾岩岩城→`hills`、冲积低地→`plain`、山间构造盆地→`basin`、
// 干流河段→`river`、冰蚀湖与山崩堰塞湖→`lake`、河间岛地→`island`。
// ============================================================

const HIGH_TATRAS: TerrainEntry = {
  id: "high-tatras",
  nameZh: "高塔特拉山",
  nameEn: "High Tatras",
  category: "mountain_system",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "格尔拉赫峰", lon: 20.1347, lat: 49.1642, elevation: 2655, kind: "peak" },
  bbox: [19.95, 49.10, 20.35, 49.28],
  axis: [[19.98, 49.16], [20.32, 49.20]],
  viewScale: 1.15,
  label: { lon: 20.14, lat: 49.30, rotation: 0 },
  source: "高塔特拉山（Vysoké Tatry）：塔特拉山中海拔最高、冰川地貌最典型的一段，主峰格尔拉赫峰（Gerlachovský štít）海拔约 2655 米（部分资料作 2654.4 米），是斯洛伐克全境与整条喀尔巴阡山脉的最高点，完全在斯洛伐克境内；主脊东西长约 26 公里、宽约 17 公里；山体是花岗岩质的结晶岩核心，冰斗、悬谷与冰蚀湖（pleso）成群（斯洛伐克旅游局与塔特拉国家公园口径，WebSearch 2026-09）。⚠️ 本库另有波兰侧的 `tatra-mountains` 条目（锚点为波兰最高点雷西峰西北峰 2499 米），两条讲的是同一条山脉的两个不同对象，写作时不要互相覆盖",
};

const WESTERN_TATRAS: TerrainEntry = {
  id: "western-tatras",
  nameZh: "西塔特拉山",
  nameEn: "Western Tatras",
  category: "mountain_system",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "比斯特拉峰", lon: 19.7419, lat: 49.1889, elevation: 2248, kind: "peak" },
  bbox: [19.55, 49.10, 19.98, 49.30],
  axis: [[19.58, 49.18], [19.95, 49.22]],
  viewScale: 1.15,
  label: { lon: 19.74, lat: 49.32, rotation: 0 },
  source: "西塔特拉山（Západné Tatry）：塔特拉山西段，最高点比斯特拉峰（Bystrá）海拔 2248 米；与高塔特拉的差别在于岩性不是单一花岗岩 —— 结晶岩核心之上还盖着石灰岩、白云岩的推覆岩片，因此山形更圆缓、并发育少量喀斯特，山脊沿斯洛伐克与波兰交界一带延伸（斯洛伐克旅游局与塔特拉国家公园口径，WebSearch 2026-09）",
};

const LOW_TATRAS: TerrainEntry = {
  id: "low-tatras",
  nameZh: "低塔特拉山",
  nameEn: "Low Tatras",
  category: "mountain_system",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "敦比耶尔峰", lon: 19.6461, lat: 48.9394, elevation: 2043, kind: "peak" },
  bbox: [19.15, 48.83, 20.30, 49.05],
  axis: [[19.20, 48.92], [20.25, 48.92]],
  viewScale: 1.35,
  label: { lon: 19.70, lat: 49.07, rotation: 0 },
  source: "低塔特拉山（Nízke Tatry）：瓦赫河与赫龙河河谷之间一条东西向的长山脊，最高点敦比耶尔峰（Ďumbier）海拔 2043 米；范围是斯洛伐克面积最大的国家公园，山脊线长而连续、两端分别以敦比耶尔与克拉洛瓦霍拉为高点，北坡发育著名的洞穴群（斯洛伐克旅游局与低塔特拉国家公园口径，WebSearch 2026-09）",
};

const MALA_FATRA: TerrainEntry = {
  id: "mala-fatra",
  nameZh: "小法特拉山",
  nameEn: "Malá Fatra",
  category: "mountain_system",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "大克里万峰", lon: 19.0208, lat: 49.1758, elevation: 1709, kind: "peak" },
  bbox: [18.80, 49.03, 19.28, 49.30],
  axis: [[18.85, 49.10], [19.22, 49.25]],
  viewScale: 1.2,
  label: { lon: 19.02, lat: 49.32, rotation: 0 },
  source: "小法特拉山（Malá Fatra）：斯洛伐克西北部一条石灰岩与白云岩为主的中山，最高点大克里万峰（Veľký Kriváň）海拔 1709 米；主脊两侧被支谷切得很碎，亚诺希克峡谷群就发育在其中一条支谷里（斯洛伐克旅游局与小法特拉国家公园口径，WebSearch 2026-09）",
};

const VELKA_FATRA: TerrainEntry = {
  id: "velka-fatra",
  nameZh: "大法特拉山",
  nameEn: "Veľká Fatra",
  category: "mountain_system",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "奥斯特雷多克峰", lon: 19.0306, lat: 48.9481, elevation: 1592, kind: "peak" },
  bbox: [18.82, 48.78, 19.30, 49.16],
  axis: [[18.95, 48.82], [19.15, 49.12]],
  viewScale: 1.25,
  label: { lon: 19.03, lat: 49.18, rotation: 0 },
  source: "大法特拉山（Veľká Fatra）：小法特拉以东、图里耶茨盆地另一侧的山地，最高点奥斯特雷多克峰（Ostredok）海拔 1592 米；名字里的「大」指面积，不指高度 —— 它比小法特拉宽得多，但最高点比小法特拉低（斯洛伐克旅游局与大法特拉国家公园口径，WebSearch 2026-09）",
};

const MALE_KARPATY: TerrainEntry = {
  id: "male-karpaty",
  nameZh: "小喀尔巴阡山",
  nameEn: "Little Carpathians",
  category: "mountain_system",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "扎鲁比峰", lon: 17.4056, lat: 48.5033, elevation: 768, kind: "peak" },
  bbox: [16.95, 48.12, 17.80, 48.72],
  axis: [[17.05, 48.16], [17.72, 48.68]],
  viewScale: 1.3,
  label: { lon: 17.40, lat: 48.74, rotation: 0 },
  source: "小喀尔巴阡山（Malé Karpaty）：喀尔巴阡山脉的西南端，从多瑙河边一路向东北延伸约 100 公里，高程从河边约 132 米升到最高点扎鲁比峰（Záruby）768 米；它是整条喀尔巴阡弧在西南方向的收尾，布拉迪斯拉发就坐落在它的南端（斯洛伐克旅游局与小喀尔巴阡保护景观区口径，WebSearch 2026-09）",
};

const SLOVENSKE_RUDOHORIE: TerrainEntry = {
  id: "slovenske-rudohorie",
  nameZh: "斯洛伐克矿山",
  nameEn: "Slovak Ore Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "斯托利察峰", lon: 20.1875, lat: 48.7258, elevation: 1476, kind: "peak" },
  bbox: [19.25, 48.45, 21.30, 48.98],
  axis: [[19.30, 48.70], [21.25, 48.72]],
  viewScale: 1.6,
  label: { lon: 20.20, lat: 49.00, rotation: 0 },
  source: "斯洛伐克矿山（Slovenské rudohorie）：斯洛伐克南部一片东西向铺开的老山地，不是一条山脊而是一组山群与喀斯特高原的集合（斯托利采山、沃洛夫采山、雷武茨卡高地、韦波尔山、切尔纳霍拉，以及斯洛伐克喀斯特与斯皮什—盖梅尔喀斯特），最高点斯托利察峰（Stolica）海拔 1476 米；名字来自其长期的金属矿开采史（斯洛伐克地质调查所与斯洛伐克旅游局口径，WebSearch 2026-09）",
};

const STIAVNICKE_VRCHY: TerrainEntry = {
  id: "stiavnicke-vrchy",
  nameZh: "什佳夫尼察山",
  nameEn: "Štiavnica Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "西特诺峰", lon: 18.8783, lat: 48.3958, elevation: 1009, kind: "peak" },
  bbox: [18.50, 48.22, 19.12, 48.62],
  axis: [[18.58, 48.30], [19.05, 48.55]],
  viewScale: 1.3,
  label: { lon: 18.88, lat: 48.64, rotation: 0 },
  source: "什佳夫尼察山（Štiavnické vrchy）：斯洛伐克面积最大的火山山地，是一座中新世层状火山被侵蚀后剩下的残体，构造上由一个约 18×22 公里的大破火山口、大范围的侵入岩体与一块回升的地垒组成；最高点西特诺峰（Sitno）海拔 1009 米（斯洛伐克旅游局与班斯卡什佳夫尼察地质公园口径，WebSearch 2026-09）",
};

const POLANA: TerrainEntry = {
  id: "polana",
  nameZh: "波利亚纳山",
  nameEn: "Poľana",
  category: "mountain_system",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "波利亚纳峰", lon: 19.4894, lat: 48.6392, elevation: 1458, kind: "peak" },
  bbox: [19.28, 48.53, 19.74, 48.77],
  axis: [[19.32, 48.64], [19.70, 48.64]],
  viewScale: 1.15,
  label: { lon: 19.49, lat: 48.79, rotation: 0 },
  source: "波利亚纳山（Poľana）：一座死火山，最高点海拔 1458 米；山体形成于约 1300 万至 1500 万年前，长期火山活动与其后的侵蚀在山体中央留下一个直径约 6 公里的破火山口，常被称为欧洲规模最大的死火山之一；1981 年设为保护景观区，1990 年列入 UNESCO 生物圈保护区（斯洛伐克旅游局与斯洛伐克自然保护局口径，WebSearch 2026-09）",
};

const VIHORLAT: TerrainEntry = {
  id: "vihorlat",
  nameZh: "维霍尔拉特山",
  nameEn: "Vihorlat Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "维霍尔拉特峰", lon: 22.1583, lat: 48.9236, elevation: 1076, kind: "peak" },
  bbox: [21.85, 48.78, 22.48, 49.02],
  axis: [[21.90, 48.88], [22.44, 48.90]],
  viewScale: 1.25,
  label: { lon: 22.16, lat: 49.04, rotation: 0 },
  source: "维霍尔拉特山（Vihorlatské vrchy）：斯洛伐克东部一片火山山地，最高点维霍尔拉特峰海拔 1076 米；山体森林覆盖率在斯洛伐克各山地中属最高的一档，其中的原始山毛榉林作为「喀尔巴阡山脉与欧洲其他地区的原始与古老山毛榉林」跨国系列世界遗产的组成部分列入名录；山体内的莫尔斯凯奥科湖是山崩堰塞成因（斯洛伐克旅游局与 UNESCO 口径，WebSearch 2026-09）",
};

const POLONINY: TerrainEntry = {
  id: "poloniny",
  nameZh: "波洛尼尼山地",
  nameEn: "Poloniny",
  category: "mountain_system",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "克雷梅涅茨一带", lon: 22.5486, lat: 49.0872, elevation: 1208, kind: "peak" },
  bbox: [22.15, 48.92, 22.62, 49.14],
  axis: [[22.20, 48.98], [22.58, 49.10]],
  viewScale: 1.2,
  label: { lon: 22.40, lat: 49.16, rotation: 0 },
  source: "波洛尼尼山地（Poloniny，布科夫斯凯山 Bukovské vrchy）：斯洛伐克国土最东北端的一片砂岩—页岩山地，1997-10-01 设为国家公园，是斯洛伐克最东的国家公园；园区最高点海拔约 1208 米，位于国土东北端的国界交汇处，紧邻海拔 1221 米的克雷梅涅茨（Kremenec）峰顶；园内的斯图日察（Stužica）原始林是跨国系列世界遗产「喀尔巴阡山脉与欧洲其他地区的原始与古老山毛榉林」的组成部分（斯洛伐克旅游局与 UNESCO 口径，WebSearch 2026-09）。⚠️ 零争议：该园三面临国界，正文与本条一律只写「国土东北端」「国界交汇处」，**不写任何邻国国名**",
};

const SLOVENSKY_KRAS: TerrainEntry = {
  id: "slovensky-kras",
  nameZh: "斯洛伐克喀斯特",
  nameEn: "Slovak Karst",
  category: "plateau",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "锡利察高原", lon: 20.5167, lat: 48.5583, elevation: 700, kind: "escarpment" },
  bbox: [20.25, 48.42, 20.98, 48.74],
  axis: [[20.30, 48.58], [20.94, 48.56]],
  viewScale: 1.35,
  label: { lon: 20.55, lat: 48.76, rotation: 0 },
  source: "斯洛伐克喀斯特（Slovenský kras）：斯洛伐克南部一片由中生代石灰岩组成的台地状喀斯特区，面积约 440 平方公里，是中欧面积最大的喀斯特区，地下形态密度很高（各家统计在 1000–1100 个洞穴与竖井之间）；其洞穴群与相邻的阿格泰莱克喀斯特一并列入 UNESCO 世界遗产；2002-03-01 设为国家公园（斯洛伐克旅游局、斯洛伐克喀斯特国家公园与 UNESCO 口径，WebSearch 2026-09）。⚠️ 本库另有匈牙利侧的 `aggtelek-karst` 条目，两侧是同一片喀斯特被国界分开的两半，跨境一律按中性表述",
};

const SLOVENSKY_RAJ: TerrainEntry = {
  id: "slovensky-raj",
  nameZh: "斯洛伐克天堂",
  nameEn: "Slovak Paradise",
  category: "plateau",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "多布希纳冰洞一带", lon: 20.3025, lat: 48.8836, elevation: 969, kind: "gorge" },
  bbox: [20.15, 48.83, 20.58, 49.00],
  axis: [[20.18, 48.90], [20.54, 48.90]],
  viewScale: 1.2,
  label: { lon: 20.35, lat: 49.02, rotation: 0 },
  source: "斯洛伐克天堂（Slovenský raj）：斯洛伐克东部一片被深谷切碎的喀斯特高原，国家公园面积约 197.6 平方公里，1988-01-18 设立；地表是台地状的高原面，边缘被一系列隘谷、跌水与瀑布切开，其中霍尔纳德河峡谷长约 11.7 公里，是园内最长的一条；园内的多布希纳冰洞 2000 年作为斯洛伐克与阿格泰莱克喀斯特洞穴世界遗产的扩展项列入（斯洛伐克天堂国家公园与 UNESCO 口径，WebSearch 2026-09）",
};

const MURANSKA_PLANINA: TerrainEntry = {
  id: "muranska-planina",
  nameZh: "穆兰高原",
  nameEn: "Muránska planina",
  category: "plateau",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "克拉克峰", lon: 20.0028, lat: 48.7625, elevation: 1409, kind: "peak" },
  bbox: [19.83, 48.66, 20.32, 48.90],
  axis: [[19.88, 48.76], [20.28, 48.78]],
  viewScale: 1.2,
  label: { lon: 20.05, lat: 48.92, rotation: 0 },
  source: "穆兰高原（Muránska planina）：斯洛伐克中部一片台地状喀斯特高原，属斯皮什—盖梅尔喀斯特，位于布雷兹诺、切尔韦纳斯卡拉、穆兰与蒂索韦茨之间；最高点克拉克峰（Kľak）海拔 1409 米；1997 年 10 月设为国家公园、1998-05-27 开园（斯洛伐克旅游局与穆兰高原国家公园口径，WebSearch 2026-09）",
};

const PRIELOM_HORNADU: TerrainEntry = {
  id: "prielom-hornadu",
  nameZh: "霍尔纳德河峡谷",
  nameEn: "Prielom Hornádu",
  category: "gorge",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "霍尔纳德河谷底", lon: 20.4000, lat: 48.9600, elevation: 520, kind: "gorge" },
  bbox: [20.28, 48.92, 20.54, 49.00],
  axis: [[20.30, 48.95], [20.52, 48.97]],
  viewScale: 1.1,
  label: { lon: 20.40, lat: 49.02, rotation: 0 },
  source: "霍尔纳德河峡谷（Prielom Hornádu）：霍尔纳德河横切斯洛伐克天堂喀斯特高原北缘形成的先成河谷，长约 11.7 公里，是斯洛伐克天堂国家公园内最长的一条峡谷；谷壁陡立，游步道靠架在岩壁上的栈道、梯子与铁链通过（斯洛伐克天堂国家公园口径，WebSearch 2026-09）",
};

const ZADIELSKA_TIESNAVA: TerrainEntry = {
  id: "zadielska-tiesnava",
  nameZh: "扎迪耶尔峡谷",
  nameEn: "Zádielska tiesňava",
  category: "gorge",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "扎迪耶尔谷口", lon: 20.8428, lat: 48.6208, elevation: 330, kind: "gorge" },
  bbox: [20.79, 48.59, 20.90, 48.66],
  axis: [[20.84, 48.60], [20.85, 48.65]],
  viewScale: 1.0,
  label: { lon: 20.84, lat: 48.68, rotation: 0 },
  source: "扎迪耶尔峡谷（Zádielska tiesňava）：斯洛伐克喀斯特台地边缘一条深切的石灰岩隘谷，谷长约 2200 米、深约 300 米（局部可达 400 米）、谷底最窄处仅约 10 米；它是长约 3.8 公里的扎迪耶尔谷（Zádielska dolina）中最险的一段，为国家自然保护区（斯洛伐克旅游局与斯洛伐克喀斯特国家公园口径，WebSearch 2026-09）",
};

const JANOSIKOVE_DIERY: TerrainEntry = {
  id: "janosikove-diery",
  nameZh: "亚诺希克峡谷群",
  nameEn: "Jánošíkove diery",
  category: "gorge",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "亚诺希克峡谷谷口", lon: 19.0500, lat: 49.2167, elevation: 640, kind: "gorge" },
  bbox: [18.99, 49.19, 19.11, 49.26],
  axis: [[19.02, 49.21], [19.08, 49.24]],
  viewScale: 1.0,
  label: { lon: 19.05, lat: 49.27, rotation: 0 },
  source: "亚诺希克峡谷群（Jánošíkove diery）：小法特拉山北侧一组石灰岩隘谷，由下谷（Dolné diery）、上谷（Horné diery）、新谷（Nové diery）与窄槽（Tesná rizňa）几段组成，全程沿途约二十处跌水，靠架在岩壁上的梯子与栈道通行（斯洛伐克旅游局与小法特拉国家公园口径，WebSearch 2026-09）",
};

const PRIELOM_DUNAJCA: TerrainEntry = {
  id: "prielom-dunajca",
  nameZh: "杜纳耶茨河峡谷",
  nameEn: "Dunajec Gorge",
  category: "gorge",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "杜纳耶茨河曲流段", lon: 20.4083, lat: 49.4083, elevation: 450, kind: "gorge" },
  bbox: [20.28, 49.37, 20.52, 49.45],
  axis: [[20.30, 49.40], [20.50, 49.41]],
  viewScale: 1.05,
  label: { lon: 20.40, lat: 49.47, rotation: 0 },
  source: "杜纳耶茨河峡谷（Prielom Dunajca）：杜纳耶茨河横切皮耶尼尼山的石灰岩山体形成的深切曲流峡谷，沿斯洛伐克与波兰交界一带展开；最险的一段长约 8 公里，河道在谷中反复绕出大曲流，两侧是近乎垂直的石灰岩壁（斯洛伐克旅游局口径，WebSearch 2026-09）。⚠️ 本库另有波兰侧的 `pieniny-mountains` 条目讲的是山体，本条讲的是河谷；跨境只写交界、不涉主权、不描述边界线",
};

const SULOVSKE_SKALY: TerrainEntry = {
  id: "sulovske-skaly",
  nameZh: "苏洛夫岩城",
  nameEn: "Súľov Rocks",
  category: "hills",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "苏洛夫岩群", lon: 18.5981, lat: 49.1683, elevation: 660, kind: "escarpment" },
  bbox: [18.52, 49.12, 18.68, 49.22],
  axis: [[18.54, 49.15], [18.66, 49.19]],
  viewScale: 1.05,
  label: { lon: 18.60, lat: 49.24, rotation: 0 },
  source: "苏洛夫岩城（Súľovské skaly）：斯洛伐克西北部苏洛夫山中一片由古近纪砾岩（「苏洛夫砾岩」）风化而成的岩塔、岩针、岩窗与岩门群；1973 年设为国家自然保护区，面积约 5.4 平方公里，砾岩层在局部厚达数百米（斯洛伐克旅游局与日利纳旅游信息中心口径，WebSearch 2026-09）",
};

const LIPTOVSKA_KOTLINA: TerrainEntry = {
  id: "liptovska-kotlina",
  nameZh: "利普托夫盆地",
  nameEn: "Liptov Basin",
  category: "basin",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "利普托夫斯卡马拉水库", lon: 19.5100, lat: 49.0900, elevation: 564, kind: "lake" },
  bbox: [19.18, 48.98, 19.92, 49.22],
  axis: [[19.22, 49.08], [19.88, 49.08]],
  viewScale: 1.25,
  label: { lon: 19.51, lat: 49.24, rotation: 0 },
  source: "利普托夫盆地（Liptovská kotlina）：瓦赫河上游的一块山间构造盆地，北侧是西塔特拉与乔奇山，南侧是低塔特拉，盆地底部由河流沉积物填充；盆中的利普托夫斯卡马拉水库总库容约 3.605 亿立方米，是斯洛伐克库容最大的水库，属瓦赫河梯级工程（斯洛伐克旅游局与利普托夫旅游局口径，WebSearch 2026-09）",
};

const ZAHORSKA_NIZINA: TerrainEntry = {
  id: "zahorska-nizina",
  nameZh: "扎霍里低地",
  nameEn: "Záhorie Lowland",
  category: "plain",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "什拉内茨沙地", lon: 17.0500, lat: 48.4800, elevation: 165, kind: "dune" },
  bbox: [16.84, 48.20, 17.50, 48.92],
  axis: [[17.05, 48.25], [17.20, 48.88]],
  viewScale: 1.3,
  label: { lon: 17.10, lat: 48.94, rotation: 0 },
  source: "扎霍里低地（Záhorská nížina）：小喀尔巴阡山以西、摩拉瓦河以东的一片低地，是斯洛伐克境内唯一发育大面积内陆风成沙丘的地区；沙源是末次冰期摩拉瓦河（及其支流迪耶河）的河流沉积被风吹扬堆积 —— **不是多瑙河**（2026-09-13 当批核实改正：ŠGÚDŠ 与 ŠOP SR 两处口径都只写摩拉瓦河与迪耶河），沙丘局部高出周围地面可达 20 米，什拉内茨沙地（Šranecké piesky）是中欧较大的内陆沙丘群之一，保护区面积约 9.88 平方公里（987.59 公顷，ŠOP SR）；该沙丘区长期作为军事训练区因而免于开垦、保住裸沙生境，后由欧盟 LIFE06 NAT/SK/000115「Záhorie Sands」项目开展恢复管理（欧盟 LIFE 项目数据库，1 级）（斯洛伐克地质调查所与欧盟 LIFE「Záhorie Sands」项目口径，WebSearch 2026-09）",
};

const PODUNAJSKA_NIZINA: TerrainEntry = {
  id: "podunajska-nizina",
  nameZh: "多瑙低地",
  nameEn: "Danubian Lowland",
  category: "plain",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "多瑙低地平原面", lon: 17.9000, lat: 48.0500, elevation: 125, kind: "delta" },
  bbox: [17.05, 47.72, 18.95, 48.55],
  axis: [[17.15, 48.10], [18.85, 48.10]],
  viewScale: 1.7,
  label: { lon: 17.95, lat: 48.58, rotation: 0 },
  source: "多瑙低地（Podunajská nížina）：斯洛伐克西南部的低地，是中欧潘诺尼亚盆地北缘伸入斯洛伐克的一片，由地势极平的多瑙平原（Podunajská rovina）与其北面起伏的多瑙丘陵地（Podunajská pahorkatina）两部分组成；地表由多瑙河及其支流的河流沉积填充，是斯洛伐克最主要的农业区（斯洛伐克旅游局与斯洛伐克地质调查所口径，WebSearch 2026-09）",
};

const VYCHODOSLOVENSKA_NIZINA: TerrainEntry = {
  id: "vychodoslovenska-nizina",
  nameZh: "东斯洛伐克低地",
  nameEn: "East Slovak Lowland",
  category: "plain",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "东斯洛伐克低地平原面", lon: 21.9194, lat: 48.6000, elevation: 105, kind: "delta" },
  bbox: [21.25, 48.25, 22.35, 48.95],
  axis: [[21.35, 48.60], [22.30, 48.55]],
  viewScale: 1.4,
  label: { lon: 21.85, lat: 48.98, rotation: 0 },
  source: "东斯洛伐克低地（Východoslovenská nížina）：斯洛伐克东南部的一片低地，同属潘诺尼亚盆地北缘，由博德罗格河、拉托里察河、翁河（Uh）、拉博雷茨河（Laborec）与翁道瓦河（Ondava）的冲积物填充（2026-09-13 当批核实改正：原写「霍尔纳德河下游」有误 —— 霍尔纳德河下游汇入斯拉纳河，属另一水系）；斯洛伐克全境最低点（约 94 米）就在这片低地东南角的博德罗格河畔（斯洛伐克旅游局与斯洛伐克地质调查所口径，WebSearch 2026-09）。⚠️ 最低点的具体海拔各源多写 94 米，正文按「约 94 米」并写明是全境最低点，未拿到大地测量机构的一手公告",
};

const VAH_RIVER: TerrainEntry = {
  id: "vah-river",
  nameZh: "瓦赫河",
  nameEn: "Váh",
  category: "river",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "特伦钦河段", lon: 18.0444, lat: 48.8945, elevation: 205, kind: "meander" },
  bbox: [17.85, 47.72, 20.20, 49.22],
  axis: [[19.90, 49.10], [18.12, 47.76]],
  viewScale: 1.8,
  label: { lon: 18.05, lat: 48.95, rotation: 0 },
  source: "瓦赫河（Váh）：斯洛伐克最长的河流，长约 403 公里；有两条源流 —— 白瓦赫（Biely Váh）出自高塔特拉的克里万峰一带，黑瓦赫（Čierny Váh）出自低塔特拉的克拉洛瓦霍拉一带，两支汇合后向西南流，在科马尔诺注入多瑙河；沿河的地带称波瓦日耶（Považie），干流上建有梯级水库群（斯洛伐克旅游局与斯洛伐克水务机构口径，WebSearch 2026-09）",
};

const DANUBE_SLOVAKIA: TerrainEntry = {
  id: "danube-slovakia",
  nameZh: "多瑙河斯洛伐克段",
  nameEn: "Danube in Slovakia",
  category: "river",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "德文门", lon: 16.9772, lat: 48.1739, elevation: 140, kind: "gorge" },
  bbox: [16.84, 47.70, 18.95, 48.30],
  axis: [[16.90, 48.16], [18.90, 47.75]],
  viewScale: 1.7,
  label: { lon: 17.60, lat: 48.32, rotation: 0 },
  source: "多瑙河斯洛伐克段：多瑙河在布拉迪斯拉发上游穿过德文门（Devínska brána）这道天然门户进入斯洛伐克，随即坡度骤减、河道分汊，在多瑙低地上摊开成汊流与河间岛地带；德文门在构造上是阿尔卑斯山系与喀尔巴阡山系之间的缺口（斯洛伐克旅游局与斯洛伐克地质调查所口径，WebSearch 2026-09）。⚠️ 本库另有 `danube-gorge`（匈牙利维谢格拉德一带）、`danube-river-at`（奥地利段）、`danube-hungary` 三条同一条河的不同河段条目，写作时各自只讲本段",
};

const ZITNY_OSTROV: TerrainEntry = {
  id: "zitny-ostrov",
  nameZh: "黑麦岛",
  nameEn: "Žitný ostrov",
  category: "island",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "顿瑙斯卡斯特雷达一带", lon: 17.6194, lat: 47.9928, elevation: 115, kind: "island" },
  bbox: [17.08, 47.72, 18.35, 48.22],
  axis: [[17.12, 48.15], [18.30, 47.76]],
  viewScale: 1.45,
  label: { lon: 17.70, lat: 48.24, rotation: 0 },
  source: "黑麦岛（Žitný ostrov）：多瑙河与其分流小多瑙河（Malý Dunaj）、瓦赫河之间围出的一片河间岛地，长约 84 公里、宽 15–30 公里，自布拉迪斯拉发延伸到科马尔诺，是欧洲面积最大的河流岛；面积**两说并存**（英文维基等作约 1900 平方公里，斯洛伐克语维基作约 1615 平方公里），2026-09-13 当批核实未能定一说，正文按并列写法；岛下的砾石层是中欧重要的地下水储集体（斯洛伐克旅游局与斯洛伐克水务机构口径，WebSearch 2026-09）。⚠️ 本库另有匈牙利侧的 `szigetkoz` 条目，两者是多瑙河同一段两侧的河间岛地，跨境按中性表述",
};

const STRBSKE_PLESO: TerrainEntry = {
  id: "strbske-pleso",
  nameZh: "什特尔布斯凯湖",
  nameEn: "Štrbské pleso",
  category: "lake",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "什特尔布斯凯湖", lon: 20.0611, lat: 49.1206, elevation: 1346, kind: "lake" },
  bbox: [20.02, 49.10, 20.10, 49.14],
  axis: [[20.04, 49.12], [20.08, 49.12]],
  viewScale: 1.0,
  label: { lon: 20.06, lat: 49.15, rotation: 0 },
  source: "什特尔布斯凯湖（Štrbské pleso）：高塔特拉南坡的一处冰蚀湖，湖面海拔 1346 米、面积约 19.8 公顷、最深约 26 米（2026-09-13 当批核实改正：旅游资料常引 20 米，斯洛伐克语百科的信息框与正文两处都写 26 米），是高塔特拉斯洛伐克一侧面积第二大的冰蚀湖；湖畔的同名聚落是塔特拉地区主要的度假与冬季运动中心之一（斯洛伐克旅游局与塔特拉国家公园口径，WebSearch 2026-09）",
};

const MORSKE_OKO: TerrainEntry = {
  id: "morske-oko",
  nameZh: "莫尔斯凯奥科湖",
  nameEn: "Morské oko",
  category: "lake",
  regionId: "europe",
  country: "slovakia",
  landmark: { name: "莫尔斯凯奥科湖", lon: 22.2306, lat: 48.8386, elevation: 618, kind: "lake" },
  bbox: [22.19, 48.82, 22.27, 48.86],
  axis: [[22.21, 48.84], [22.25, 48.84]],
  viewScale: 1.0,
  label: { lon: 22.23, lat: 48.87, rotation: 0 },
  source: "莫尔斯凯奥科湖（Morské oko）：维霍尔拉特山中一处山崩堰塞湖，湖面海拔 618 米、面积约 13.8 公顷（19 世纪 80 年代在出水口筑坝把水位抬高约 5 米后达今值；「原约 7 公顷」这个数字 2026-09-13 当批核实未找到来源，已从正文删去）、最长约 750 米、最宽约 312 米、最深约 25 米；它是斯洛伐克面积最大的非喀斯特成因天然湖、按面积为全国第三大天然湖；1984 年设为保护区，现为国家自然保护区（斯洛伐克旅游局与科希策地区旅游局口径，WebSearch 2026-09）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 斯洛伐克 =====
  HIGH_TATRAS, WESTERN_TATRAS, LOW_TATRAS, MALA_FATRA, VELKA_FATRA,
  MALE_KARPATY, SLOVENSKE_RUDOHORIE,
  STIAVNICKE_VRCHY, POLANA, VIHORLAT, POLONINY,
  SLOVENSKY_KRAS, SLOVENSKY_RAJ, MURANSKA_PLANINA,
  PRIELOM_HORNADU, ZADIELSKA_TIESNAVA, JANOSIKOVE_DIERY, PRIELOM_DUNAJCA,
  SULOVSKE_SKALY, LIPTOVSKA_KOTLINA, ZAHORSKA_NIZINA,
  PODUNAJSKA_NIZINA, VYCHODOSLOVENSKA_NIZINA,
  VAH_RIVER, DANUBE_SLOVAKIA, ZITNY_OSTROV,
  STRBSKE_PLESO, MORSKE_OKO,
];
