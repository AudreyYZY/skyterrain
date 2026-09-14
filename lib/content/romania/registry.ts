import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 罗马尼亚（东欧次区域；联合国 M49 归东欧）
// 零争议红线：多瑙河大部分是界河 —— 只写境内段，锚点选两岸都在境内的布勒伊拉；铁门峡只写罗马尼亚岸，不写对岸、合建方、岛屿变迁与雕像；
// 多瑙河三角洲只写罗马尼亚境内面积，不写跨境比例与界河支流；黑海沿岸不写海域划界、岛屿与专属经济区；普鲁特河不收；
// 特兰西瓦尼亚与哈尔吉塔一带不写归属史、族群、外语地名；巴拉甘二十世纪史、宗教与伪科学说法（布切吉「斯芬克斯」）不写；
// 「摩尔多瓦高原」因中文名易被读作摩尔多瓦共和国且 1–2 级来源极少，本批不收。
// 骨架：喀尔巴阡弧（东喀 / 南喀 / 阿普塞尼）三面围住特兰西瓦尼亚盆地，外侧是副喀尔巴阡丘陵，再外是西部平原、罗马尼亚平原与多布罗加，
// 东南端是多瑙河三角洲与黑海沿岸；河流呈放射状汇入多瑙河。
// 山体→`mountain_system`、高原面 / 喀斯特台地 / 古老台地→`plateau`、沉积盆地→`basin`、褶皱丘陵带→`hills`、平原与三角洲→`plain`、
// 峡谷→`gorge`、湖与潟湖→`lake`、河→`river`、海岸→`coast`。
// 主要来源：INS《罗马尼亚统计年鉴》2019 年版第 1 章表 1.3–1.6（表源罗马尼亚科学院地理研究所，1 级；读的是第三方镜像的原版 PDF，
// 最新版数值是否有改动未核）、各国家 / 自然公园官网（1 级）、DDBRA、UNESCO；Enciclopedia României 为志愿编辑 wiki，只作旁证。
// 锚点坐标一律取 OSM（Wikidata 有明显错误）；锚点海拔未查到实测值的为取景用概略值（注明）。
// ============================================================

const EASTERN_CARPATHIANS: TerrainEntry = {
  id: "eastern-carpathians",
  nameZh: "东喀尔巴阡山脉（罗马尼亚段）",
  nameEn: "Eastern Carpathians (Romania)",
  category: "mountain_system",
  regionId: "europe",
  country: "romania",
  landmark: { name: "彼得罗苏尔·罗德内峰（Pietrosul Rodnei）", lon: 24.6338, lat: 47.5972, elevation: 2303, kind: "peak" },
  bbox: [23.00, 45.30, 26.70, 47.95],
  axis: [[24.30, 47.80], [26.00, 45.50]],
  viewScale: 2.0,
  label: { lon: 25.350, lat: 46.750, rotation: 0 },
  source: "东喀尔巴阡山脉罗马尼亚段（Carpații Orientali）：罗马尼亚喀尔巴阡三大分支之一，走向北北西—南南东；罗马尼亚段最高点罗德纳山彼得罗苏峰 2,303 m（INS《罗马尼亚统计年鉴》2019 年版表 1.3，表源罗马尼亚科学院地理研究所，1 级；罗德纳国家公园官网同值）；山体分三列平行带：西列新近纪火山岩山地（奥阿什、古塔伊、克利马尼、古尔吉乌、哈尔吉塔等）、中列结晶片岩、东列白垩纪—古近纪复理石褶皱山；罗马尼亚段长超过 500 km、平均宽约 100 km，山间盆地多（Enciclopedia României，2 级 wiki 式，作旁证）。国际通用的东喀范围包含境外段，本条只写罗马尼亚段；锚点坐标取 OSM（研究子代理事实表 2026-09-15）",
};

const SOUTHERN_CARPATHIANS: TerrainEntry = {
  id: "southern-carpathians",
  nameZh: "南喀尔巴阡山脉",
  nameEn: "Southern Carpathians",
  category: "mountain_system",
  regionId: "europe",
  country: "romania",
  landmark: { name: "摩尔多韦亚努峰", lon: 24.7362, lat: 45.5996, elevation: 2544, kind: "peak" },
  bbox: [22.20, 44.90, 25.70, 45.75],
  axis: [[22.30, 45.20], [25.60, 45.40]],
  viewScale: 1.9,
  label: { lon: 23.900, lat: 45.850, rotation: 0 },
  source: "南喀尔巴阡山脉（Carpații Meridionali，别名「特兰西瓦尼亚阿尔卑斯」）：INS 年鉴 2019 年版表 1.3 中超过 2,500 m 的五座峰都在这一段 —— 摩尔多韦亚努 2,544 m、内戈尤 2,535 m（弗格拉什）、大帕朗 2,519 m、佩莱亚加 2,509 m（雷泰扎特）、奥姆 2,505 m（布切吉）（1 级）；以结晶片岩为主，保存罗马尼亚典型的第四纪冰川地貌（Enciclopedia României，2 级）；东界普拉霍瓦河谷、西界蒂米什—切尔纳走廊，界线划法因学派而异；「特兰西瓦尼亚阿尔卑斯」之名来自 Emmanuel de Martonne 1906 年的论著（ROWIKI 3 级 + ER）；长度无 1–2 级来源，不写（研究子代理事实表 2026-09-15）",
};

const APUSENI_MOUNTAINS: TerrainEntry = {
  id: "apuseni-mountains",
  nameZh: "阿普塞尼山脉",
  nameEn: "Apuseni Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "romania",
  landmark: { name: "库库尔巴塔马雷峰（Cucurbăta Mare）", lon: 22.6889, lat: 46.4408, elevation: 1849, kind: "peak" },
  bbox: [22.00, 45.90, 23.80, 47.20],
  viewScale: 1.6,
  label: { lon: 22.900, lat: 47.250, rotation: 0 },
  source: "阿普塞尼山脉（Munții Apuseni）：罗马尼亚地理学所称「西喀尔巴阡」（Carpații Occidentali，含阿普塞尼、波亚纳鲁斯克山、巴纳特山）的主体，是罗马尼亚喀尔巴阡三分支中海拔最低的一支（ER，2 级）；国际通用的「西喀尔巴阡」指斯洛伐克—波兰—捷克一段，故不用此名作 id；最高点库库尔巴塔马雷峰 1,849 m、弗拉德阿萨峰 1,836 m（INS 年鉴表 1.3，1 级；ER 1,848 m）；中央山块 1,800 m 以上、外围多在 1,000 m 以下，保留两级剥蚀面（ER，2 级）；高处年降水超过 1,400 mm（阿普塞尼自然公园官网，1 级）（研究子代理事实表 2026-09-15）",
};

const FAGARAS_MOUNTAINS: TerrainEntry = {
  id: "fagaras-mountains",
  nameZh: "弗格拉什山脉",
  nameEn: "Făgăraș Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "romania",
  landmark: { name: "巴莱亚湖", lon: 24.6172, lat: 45.6033, elevation: 2040, kind: "lake" },
  bbox: [24.30, 45.42, 25.20, 45.72],
  axis: [[24.30, 45.60], [25.20, 45.55]],
  viewScale: 1.3,
  label: { lon: 24.750, lat: 45.760, rotation: 0 },
  source: "弗格拉什山脉（Munții Făgărașului）：INS 年鉴表 1.3 中海拔最高的两座峰摩尔多韦亚努 2,544 m、内戈尤 2,535 m 都在此（1 级）；巴莱亚湖为冰斗湖，面积 4.7 ha、蓄水 0.2 百万 m³；米奥阿雷洛尔湖（2,282 m）也在弗格拉什（INS 年鉴表 1.5，1 级）；东西约 70 km、北坡 8–10 km 内高差超过 2,000 m、南坡以长岭缓降（ROWIKI，3 级）；巴莱亚湖湖面海拔 2,034 m（ROWIKI）/ 2,045 m（OSM），取约 2,040 m；1932 年设自然保护区（ROWIKI，3 级）。弗格拉什公路与维德拉鲁水库不作主体（研究子代理事实表 2026-09-15）",
};

const BUCEGI_PLATEAU: TerrainEntry = {
  id: "bucegi-plateau",
  nameZh: "布切吉山",
  nameEn: "Bucegi Mountains",
  category: "plateau",
  regionId: "europe",
  country: "romania",
  landmark: { name: "斯芬克斯岩（Sfinxul）", lon: 25.4702, lat: 45.4083, elevation: 2206, kind: "escarpment" },
  bbox: [25.25, 45.25, 25.60, 45.50],
  label: { lon: 25.430, lat: 45.530, rotation: 0 },
  source: "布切吉山（Munții Bucegi）：最高点奥姆峰 2,505 m（INS 年鉴表 1.3、布切吉自然公园官网，1 级；OSM / ER 2,507 m、Wikidata 2,514 m）；布切吉自然公园 1990 年设立、32,500 ha，园内 15 座以上 2,000 m 以上的峰，首批保护区依据 1943 年 HCM 965 号决定（bucegipark.ro，1 级）；东侧普拉霍瓦坡陡壁高差 500–900 m，西侧是 1,600–2,400 m、由北向南倾斜的高原面；岩层主要为侏罗纪石灰岩、布切吉砾岩与云母砂岩（ROWIKI，3 级）；斯芬克斯岩高 8 m、宽 12 m（ROWIKI，3 级）；风化岩柱的具体成因无 1–2 级来源，正文只写砾岩风化；锚点取 OSM（Wikidata 巴贝莱岩坐标偏约 4 km）。伪科学说法与县界诉讼不写（研究子代理事实表 2026-09-15）",
};

const RETEZAT_MOUNTAINS: TerrainEntry = {
  id: "retezat-mountains",
  nameZh: "雷泰扎特山",
  nameEn: "Retezat Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "romania",
  landmark: { name: "布库拉湖", lon: 22.8749, lat: 45.3604, elevation: 2040, kind: "lake" },
  bbox: [22.65, 45.25, 23.05, 45.45],
  label: { lon: 22.850, lat: 45.480, rotation: 0 },
  source: "雷泰扎特山（Munții Retezat）与雷泰扎特国家公园：公园 1935 年设立，是罗马尼亚第一个国家公园，当时约 13,000 ha、现超过 38,000 ha；园内 50 座超过 2,000 m 的峰，最高佩莱亚加 2,509 m、帕普沙 2,508 m，雷泰扎特峰 2,482 m；湖泊 80 多个、常年有水的 54 个，约占全国冰川湖的 38%；布库拉湖是全国最大的冰川湖；1979 年列入 UNESCO「人与生物圈」计划（retezat.ro，1 级）；布库拉湖 10.5 ha（INS 年鉴表 1.5，1 级）；注意 INS 表中另有耶泽尔山的帕普沙峰 2,391 m，与此同名不同峰；MAB 现状未核，只写 1979 年列入（研究子代理事实表 2026-09-15）",
};

const RODNA_MOUNTAINS: TerrainEntry = {
  id: "rodna-mountains",
  nameZh: "罗德纳山脉",
  nameEn: "Rodna Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "romania",
  landmark: { name: "伊内乌峰（Ineu）", lon: 24.8836, lat: 47.5259, elevation: 2279, kind: "peak" },
  bbox: [24.45, 47.40, 25.10, 47.65],
  axis: [[24.45, 47.58], [25.10, 47.52]],
  viewScale: 1.2,
  label: { lon: 24.780, lat: 47.680, rotation: 0 },
  source: "罗德纳山脉（Munții Rodnei）：伊内乌峰 2,279 m（INS 年鉴表 1.3，1 级）；罗德纳国家公园官网：在整个东喀尔巴阡山链中罗德纳山保存第四纪冰川痕迹最好，冰川地貌主要在北坡，冰期最盛时冰舌长 4–5 km、下探到约 1,100 m；主脊下约 23 个冰川湖、位于 1,800–1,950 m；主要由强烈变质的结晶片岩构成、夹大理岩；公园面积 47,202 ha（parcrodna.ro，1 级；ER 引 2000 年第 5 号法 46,399 ha，两个口径，正文不写面积）；皮耶特罗苏大山保护区 1979 年列入「人与生物圈」计划（ER，2 级）。锚点避开第 1 条已用的彼得罗苏峰（研究子代理事实表 2026-09-15）",
};

const CALIMANI_MOUNTAINS: TerrainEntry = {
  id: "calimani-mountains",
  nameZh: "克利马尼山",
  nameEn: "Călimani Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "romania",
  landmark: { name: "彼得罗苏尔·克利马尼峰（Pietrosul Călimanilor）", lon: 25.1856, lat: 47.1251, elevation: 2100, kind: "peak" },
  bbox: [25.00, 46.95, 25.45, 47.30],
  label: { lon: 25.220, lat: 47.330, rotation: 0 },
  source: "克利马尼山（Munții Călimani）：最高点彼得罗苏峰 2,100 m（INS 年鉴表 1.3，1 级）；克利马尼国家公园 1990 年部令宣布、2000 年第 5 号法确认、2003 年划界，现总面积 24,556 ha，含「十二使徒」地质保护区等（calimani.ro，1 级）；山体由熔岩、集块岩与火山灰交替构成，火山锥塌陷形成直径约 10 km 的破火山口（ROWIKI，3 级）；「罗马尼亚最大火山口」只见 3 级，不写；火山熄灭年代不写具体数字（研究子代理事实表 2026-09-15）",
};

const PIATRA_CRAIULUI: TerrainEntry = {
  id: "piatra-craiului",
  nameZh: "皮亚特拉克拉尤卢伊山",
  nameEn: "Piatra Craiului",
  category: "mountain_system",
  regionId: "europe",
  country: "romania",
  landmark: { name: "拉奥姆峰（La Om）", lon: 25.2117, lat: 45.527, elevation: 2238, kind: "peak" },
  bbox: [25.12, 45.45, 25.30, 45.60],
  axis: [[25.30, 45.60], [25.12, 45.45]],
  label: { lon: 25.210, lat: 45.620, rotation: 0 },
  source: "皮亚特拉克拉尤卢伊山（Piatra Craiului，字面「国王之石」）：最高点拉奥姆峰（Piscul Baciului）2,238 m（INS 年鉴表 1.3，1 级）；长约 25 km、东北—西南走向的孤立石灰岩山脊，斜交南喀总体走向，岩层近直立，形成岩齿、针峰与崩积锥；国家公园 1990 年设立、约 15,000 ha；东北端泽尔内什蒂峡谷长约 3.5 km、崖壁高 100–200 m（romaniasalbatica.ro，3 级）。「最长最高石灰岩山脊」「最深竖井」不写；园区官网正文未取到，面积与年份缺 1 级来源（研究子代理事实表 2026-09-15）",
};

const CEAHLAU_MASSIF: TerrainEntry = {
  id: "ceahlau-massif",
  nameZh: "恰赫勒乌山",
  nameEn: "Ceahlău Massif",
  category: "mountain_system",
  regionId: "europe",
  country: "romania",
  landmark: { name: "大奥科拉什峰（Ocolașu Mare）", lon: 25.9467, lat: 46.9527, elevation: 1907, kind: "peak" },
  bbox: [25.85, 46.88, 26.05, 47.05],
  label: { lon: 25.950, lat: 47.070, rotation: 0 },
  source: "恰赫勒乌山（Masivul Ceahlău）：恰赫勒乌国家公园官网：两个最高点大奥科拉什峰 1,907 m 与托阿卡峰 1,904 m（INS 年鉴表 1.3 作 1,900 m），山顶平台长约 5 km、最宽约 1 km，四周为 200–300 m 陡崖；山体中心是一个悬空向斜，由厚 500–600 m、1 亿多年前（早白垩世末）河流砾石胶结成的恰赫勒乌砾岩构成，崖壁与岩柱是砾岩与砂岩、石灰岩互层差异侵蚀的结果；杜鲁伊托阿雷瀑布分两级跌落；1955 年起受保护，现面积 7,742.5 ha（ceahlaupark.ro，1 级）；东麓紧邻比斯特里察河上的伊兹沃鲁蒙泰卢伊人工湖。宗教与传说地名来历不写（研究子代理事实表 2026-09-15）",
};

const TRANSYLVANIAN_PLATEAU: TerrainEntry = {
  id: "transylvanian-plateau",
  nameZh: "特兰西瓦尼亚高原",
  nameEn: "Transylvanian Plateau",
  category: "basin",
  regionId: "europe",
  country: "romania",
  landmark: { name: "梅迪亚什", lon: 24.3508, lat: 46.1639, elevation: 330, kind: "city" },
  bbox: [22.90, 45.70, 25.50, 47.30],
  viewScale: 2.0,
  label: { lon: 24.200, lat: 46.950, rotation: 0 },
  source: "特兰西瓦尼亚高原（罗马尼亚语正式名 Depresiunea Colinară a Transilvaniei，「特兰西瓦尼亚丘陵状洼地」，也称特兰西瓦尼亚盆地）：位于喀尔巴阡弧内侧，被东喀、南喀与阿普塞尼三面环绕；外圈是褶皱带与山麓盆地 / 走廊，中心是近水平或穹状构造的台地区，含索梅什台地、「特兰西瓦尼亚平原」（实为丘陵）与特尔纳瓦台地；白垩纪末以来一直是沉积区，中新世含盐地层沿盆地边缘形成底辟褶皱，边缘多盐矿与盐湖；地貌以单面山、穹丘、滑坡与冲沟为特色；东高西低（ROWIKI，3 级，本条描述性事实多为 3 级）。分类按沉积盆地归 basin，名称沿用中文通行的「高原」。锚点为盆地中部城镇的概略点。归属史、族群与外语地名不写（研究子代理事实表 2026-09-15）",
};

const DOBROGEA_PLATEAU: TerrainEntry = {
  id: "dobrogea-plateau",
  nameZh: "多布罗加高原",
  nameEn: "Dobrogea Plateau",
  category: "plateau",
  regionId: "europe",
  country: "romania",
  landmark: { name: "卡西姆恰台地", lon: 28.3792, lat: 44.7139, elevation: 165, kind: "escarpment" },
  bbox: [27.90, 43.70, 29.00, 45.30],
  viewScale: 1.7,
  label: { lon: 28.450, lat: 44.450, rotation: 0 },
  source: "多布罗加高原（Podișul Dobrogei）：全区最高点默钦山楚楚亚图峰 467 m（INS 年鉴表 1.3，1 级）；年降水多布罗加低于 450 mm、海岸约 350 mm（INS 年鉴第 3 页，1 级，原文无「全国最少」）；北部为海西造山带、中部卡西姆恰台地属加里东期，长期剥蚀后多为 200–300 m 的低缓台地，以哈尔肖瓦—米迪亚角一线分为北多布罗加地块与南多布罗加台地；卡西姆恰台地出露元古宙绿片岩，年龄超过 6 亿年；南多布罗加低于 200 m、由萨尔马特期石灰岩构成（ROWIKI 引 Posea《罗马尼亚地理》教材，3 级）。锚点为卡西姆恰台地中部的概略点（研究子代理事实表 2026-09-15）",
};

const MACIN_MOUNTAINS: TerrainEntry = {
  id: "macin-mountains",
  nameZh: "默钦山脉",
  nameEn: "Măcin Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "romania",
  landmark: { name: "楚楚亚图峰（Țuțuiatu）", lon: 28.2634, lat: 45.205, elevation: 467, kind: "peak" },
  bbox: [28.05, 45.05, 28.45, 45.35],
  label: { lon: 28.250, lat: 45.380, rotation: 0 },
  source: "默钦山脉（Munții Măcinului）：最高点楚楚亚图峰 467 m（INS 年鉴表 1.3、默钦山国家公园官网，1 级）；园区海拔 7–467 m，山麓草原、往上为无梗花栎林与山顶岩石草地；在海西造山运动中形成，花岗岩风化出奇异岩形（parcmacin.ro，1 级）；主脊高出西侧布勒伊拉大岛 300–400 m（ROWIKI，3 级）。园区「罗马尼亚最古老的山」与多布罗加卡西姆恰绿片岩年龄的比较口径不同，不写最高级；公园面积缺 1 级来源不写（研究子代理事实表 2026-09-15）",
};

const SUBCARPATHIANS: TerrainEntry = {
  id: "subcarpathians",
  nameZh: "副喀尔巴阡丘陵",
  nameEn: "Subcarpathians",
  category: "hills",
  regionId: "europe",
  country: "romania",
  landmark: { name: "珀克莱莱马里泥火山", lon: 26.7122, lat: 45.3582, elevation: 322, kind: "escarpment" },
  bbox: [23.00, 44.90, 27.20, 47.30],
  viewScale: 1.8,
  label: { lon: 26.300, lat: 45.750, rotation: 0 },
  source: "副喀尔巴阡丘陵（Subcarpații）：喀尔巴阡外侧的褶皱丘陵带，由丘陵与山间盆地组合而成，分摩尔多瓦、弯曲段与盖蒂克副喀尔巴阡，另有特兰西瓦尼亚内侧的内副喀尔巴阡；构造活动强（ROWIKI，3 级）；布泽乌地位于喀尔巴阡弯曲区，UNESCO 称其为欧洲地球动力最活跃的地区之一，没有岩浆火山但有泥火山——地下烃类储层释放的气体把灰色黏土带到地表堆成冒泡的锥体；布泽乌地是 UNESCO 世界地质公园（unesco.org IGGP 页，1 级；列入年份未取到，不写）；珀克莱莱马里泥火山保护区依 2000 年第 5 号法设立（ROWIKI，3 级；面积口径混乱不写）。「欧洲最大泥火山」不写（研究子代理事实表 2026-09-15）",
};

const APUSENI_KARST: TerrainEntry = {
  id: "apuseni-karst",
  nameZh: "阿普塞尼喀斯特",
  nameEn: "Apuseni Karst",
  category: "plateau",
  regionId: "europe",
  country: "romania",
  landmark: { name: "斯克里什瓦拉冰洞入口", lon: 22.8105, lat: 46.4899, elevation: 1165, kind: "gorge" },
  bbox: [22.45, 46.35, 22.95, 46.75],
  label: { lon: 22.700, lat: 46.780, rotation: 0 },
  source: "阿普塞尼喀斯特（帕迪什台地与斯克里什瓦拉冰洞，阿普塞尼自然公园）：自然公园 1990 年初设、2003 年划界，面积 75,784 ha；园内含比霍尔—弗拉德阿萨山 80% 的可溶岩，外喀斯特有帕迪什—蓬诺鲁城堡内流盆地、溶沟原野与洼地群，内喀斯特有 1,500 多个洞穴与竖井，帕迪什台地海拔 1,250 m；园内 10 多个较大的地下冰川，斯克里什瓦拉冰洞从约 50 m 深的竖井下降进入，冰体体积据近年研究评估超过 130,000 m³（parcapuseni.ro，1 级；ROWIKI 80,000 m³，两说）；冰洞发育在上侏罗统石灰岩中（ROWIKI，3 级）。「世界最大地下冰体」「欧洲最大落水洞」不写（研究子代理事实表 2026-09-15）",
};

const WESTERN_PLAIN_RO: TerrainEntry = {
  id: "western-plain-ro",
  nameZh: "西部平原",
  nameEn: "Western Plain",
  category: "plain",
  regionId: "europe",
  country: "romania",
  landmark: { name: "蒂米什瓦拉", lon: 21.23, lat: 45.7597, elevation: 94, kind: "city" },
  bbox: [20.25, 45.30, 23.00, 47.90],
  viewScale: 1.9,
  label: { lon: 21.500, lat: 46.700, rotation: 0 },
  source: "西部平原（Câmpia de Vest）：喀尔巴阡盆地（潘诺尼亚盆地）沉积平原在罗马尼亚境内的东缘部分，与匈牙利侧的 alfold（匈牙利大平原）属同一平原；长超过 375 km、平均宽约 45 km；分高平原、中平原、低平原三级，低平原河流易泛滥（ROWIKI，3 级）；巴纳特与克里沙纳平原原为草原与森林草原植被，现大部分已开垦（INS 年鉴第 4 页，1 级）。本条缺 1–2 级面积与长度数字，正文不写长宽；族群与国界不写（研究子代理事实表 2026-09-15）",
};

const ROMANIAN_PLAIN: TerrainEntry = {
  id: "romanian-plain",
  nameZh: "罗马尼亚平原",
  nameEn: "Romanian Plain",
  category: "plain",
  regionId: "europe",
  country: "romania",
  landmark: { name: "斯洛博齐亚", lon: 27.3661, lat: 44.5639, elevation: 20, kind: "city" },
  bbox: [22.60, 43.60, 28.20, 45.60],
  viewScale: 2.2,
  label: { lon: 25.400, lat: 44.350, rotation: 0 },
  source: "罗马尼亚平原（Câmpia Română，也称瓦拉几亚平原）：多瑙河下游北岸的大沉积平原，南、东以多瑙河为界，北接盖蒂克高原与副喀尔巴阡；地质上是强烈沉积的坳陷，最低处在锡雷特河下游河漫滩（10–20 m），最高约 300 m；以宽谷与平坦河间地为特征，河间地上有沉陷小洼地（crov），部分河流沿岸有沙丘（ROWIKI，3 级）；东部年降水不足 500 mm（INS 年鉴第 3 页，1 级）；布勒伊拉平原沉陷洼地湖扬卡湖 322 ha（INS 年鉴表 1.5，1 级）；东部巴拉甘平原以黑钙土和草原植被著称，19 世纪下半叶才大规模开垦（ROWIKI，3 级）。「最大地形单元」与跨境比例不写；巴拉甘二十世纪史不写（研究子代理事实表 2026-09-15）",
};

const DANUBE_DELTA: TerrainEntry = {
  id: "danube-delta",
  nameZh: "多瑙河三角洲",
  nameEn: "Danube Delta",
  category: "plain",
  regionId: "europe",
  country: "romania",
  landmark: { name: "苏利纳", lon: 29.6528, lat: 45.1594, elevation: 4, kind: "delta" },
  bbox: [28.18, 44.34, 29.71, 45.45],
  viewScale: 1.8,
  label: { lon: 29.050, lat: 45.320, rotation: 0 },
  source: "多瑙河三角洲（Delta Dunării）与多瑙河三角洲生物圈保护区：1991 年列入世界遗产（标准 vii、x），遗产面积 312,440 ha（UNESCO whc 588，1 级；UNESCO 原话「欧洲面积最大、保存最好的三角洲」按口径写为「UNESCO 称」）；保护区依 1993 年第 82 号法设立（DDBRA，1 级）；保护区总面积 5,800 km²，其中罗马尼亚境内三角洲本体 3,510 km²、拉济姆—锡诺耶潟湖群 1,145 km²、至 20 m 等深线海域 1,030 km²（ddbra.ro「Prezentare generală」，1 级）；全新世海平面上升后在「多瑙河湾」湾口形成 Letea–Caraorman 初始沙坝，圣格奥尔基、苏利纳、基利亚三条支流先后造出三角洲朵体；分河成三角洲与河海三角洲（DDBRA，1 级）；三角洲平均海拔 0.52 m（INS 年鉴第 3 页，1 级）；1991 年列为拉姆萨尔湿地。三角洲本体跨境比例、界河支流、族群不写；与第 24 条哈尔吉塔县的红湖同名的三角洲湖不混写（研究子代理事实表 2026-09-15）",
};

const IRON_GATES: TerrainEntry = {
  id: "iron-gates",
  nameZh: "多瑙河铁门峡",
  nameEn: "Iron Gates",
  category: "gorge",
  regionId: "europe",
  country: "romania",
  landmark: { name: "丘卡鲁马雷山（大卡扎内峡段北岸）", lon: 22.2593, lat: 44.6087, elevation: 318, kind: "gorge" },
  bbox: [21.35, 44.55, 22.70, 44.95],
  axis: [[21.40, 44.80], [22.65, 44.62]],
  viewScale: 1.3,
  label: { lon: 22.000, lat: 44.980, rotation: 0 },
  source: "多瑙河铁门峡（Porțile de Fier / 卡扎内峡段 Cazanele Dunării）罗马尼亚岸：铁门自然公园依 2000 年第 5 号法设立，IUCN 第 V 类，园内 18 个保护区，其中「大卡扎内与小卡扎内」混合保护区 215 ha（pnportiledefier.ro，1 级）；广义铁门指约 134 km 河段（旅游站 144 km），大卡扎内是最窄的一段，河宽收窄到约 150 m（ROWIKI，3 级；旅游站另有 207 m、230 m）；1972 年铁门一号大坝与水电站投运，坝上游水位抬高约 35 m（ROWIKI，3 级，工程事实）。公园面积缺 1 级数字不写；只写罗马尼亚岸，对岸山名、合建方、岛屿变迁、雕像一律不写（研究子代理事实表 2026-09-15）",
};

const BICAZ_GORGE: TerrainEntry = {
  id: "bicaz-gorge",
  nameZh: "比卡兹峡谷",
  nameEn: "Bicaz Gorge",
  category: "gorge",
  regionId: "europe",
  country: "romania",
  landmark: { name: "比卡兹峡谷", lon: 25.8345, lat: 46.8175, elevation: 850, kind: "gorge" },
  bbox: [25.78, 46.78, 25.88, 46.84],
  label: { lon: 25.830, lat: 46.860, rotation: 0 },
  source: "比卡兹峡谷（Cheile Bicazului）与比卡兹峡谷—赫什马什国家公园：公园 1990 年设立，位于东喀中组的赫什马什山（cheilebicazului-hasmas.ro，1 级；面积官网 7,072 ha 与 ANANP 摘要 6,575 ha 两个 1 级来源冲突，正文不写面积）；赫什马什山全线分布石灰岩与白云岩，山比周围更高、多孤立岩峰与深切峡谷，最高赫什马什大山 1,792 m（园区官网与 INS 年鉴表 1.3，1 级）；峡谷中生代岩层含大量侏罗—白垩纪化石（园区官网，1 级）；峡谷沿 DN12C 公路延伸约 7.5 km，最窄一段叫「地狱之喉」（ROWIKI 里程推算，3 级）；崖高无可靠来源不写。锚点海拔为取景用概略值；外语地名不写（研究子代理事实表 2026-09-15）",
};

const TURDA_GORGE: TerrainEntry = {
  id: "turda-gorge",
  nameZh: "图尔达峡谷",
  nameEn: "Turda Gorge",
  category: "gorge",
  regionId: "europe",
  country: "romania",
  landmark: { name: "图尔达峡谷", lon: 23.6803, lat: 46.5632, elevation: 450, kind: "gorge" },
  bbox: [23.66, 46.55, 23.71, 46.58],
  label: { lon: 23.685, lat: 46.595, rotation: 0 },
  source: "图尔达峡谷（Cheile Turzii）：克卢日县图尔达市以西约 6 km，由哈什达特溪切割侏罗纪石灰岩形成（ROWIKI，3 级）；2004 年 HG 2151 号设为保护区，崖壁有塔柱、扶壁、喀斯特平台与洞穴，已知约 60 个洞穴（Enciclopedia României，2 级）；长度（1,300 m / 约 2,900 m / 3.5 km）、崖高（200 / 300 / 350 m）、面积（324 / 175.7 / 125 ha）多说并存且无 1 级来源，正文不写具体数字。锚点海拔为取景用概略值；宗教设施不写（研究子代理事实表 2026-09-15）",
};

const RAZIM_SINOE: TerrainEntry = {
  id: "razim-sinoe",
  nameZh: "拉济姆—锡诺耶潟湖群",
  nameEn: "Razim–Sinoe Lagoons",
  category: "lake",
  regionId: "europe",
  country: "romania",
  landmark: { name: "拉济姆湖", lon: 28.9847, lat: 44.8267, elevation: 0, kind: "lake" },
  bbox: [28.60, 44.40, 29.20, 45.00],
  viewScale: 1.3,
  label: { lon: 28.900, lat: 45.030, rotation: 0 },
  source: "拉济姆—锡诺耶潟湖群（Complexul lagunar Razim-Sinoie）：潟湖群总面积约 1,145 km²，其中湖面 863 km²，主体是古哈尔米里斯湾，后被沙坝与沙脊分隔；近几十年经人为改造成为周边灌溉系统供水的淡水水库（ddbra.ro，1 级）；拉济姆湖 41,500 ha、909 百万 m³，锡诺耶湖 17,150 ha，列为「海成潟湖」类（INS 年鉴表 1.5，1 级；ROWIKI 面积另有 394.3 / 135.6 km²，两个口径）；拉济姆湖最大水深 2.8 m，1980 年代筑堤前通过两个口门与黑海相通（ROWIKI，3 级）。工程评价不写（研究子代理事实表 2026-09-15）",
};

const LAKE_SFANTA_ANA: TerrainEntry = {
  id: "lake-sfanta-ana",
  nameZh: "圣安娜湖",
  nameEn: "Lake Sfânta Ana",
  category: "lake",
  regionId: "europe",
  country: "romania",
  landmark: { name: "圣安娜湖", lon: 25.887, lat: 46.1263, elevation: 949, kind: "lake" },
  bbox: [25.88, 46.12, 25.895, 46.132],
  label: { lon: 25.887, lat: 46.140, rotation: 0 },
  source: "圣安娜湖（Lacul Sfânta Ana）：火山口湖，在 INS 年鉴表 1.5 主要天然湖中是「火山口湖」类唯一列出的湖，面积 22.0 ha、蓄水 0.6 百万 m³（1 级；这不是「全国唯一火山口湖」的官方认定，不写唯一）；所在火山乔马图属哈尔吉塔山块，最高点 1,301 m（INS 年鉴表 1.3，1 级）；湖水只靠降水补给，2005 年实测面积 19.3 ha、最大深 6.4 m，比 1909 年的 21.3 ha 缩小（ROWIKI，3 级）；乔马图最后一次喷发在几万年前（ROWIKI，3 级，不写具体年数）；湖面海拔 946 / 949 m 两说。外语名、宗教活动、族群地区名不写（研究子代理事实表 2026-09-15）",
};

const LACUL_ROSU: TerrainEntry = {
  id: "lacul-rosu",
  nameZh: "红湖",
  nameEn: "Red Lake",
  category: "lake",
  regionId: "europe",
  country: "romania",
  landmark: { name: "红湖", lon: 25.7853, lat: 46.7881, elevation: 983, kind: "lake" },
  bbox: [25.78, 46.785, 25.80, 46.795],
  label: { lon: 25.790, lat: 46.800, rotation: 0 },
  source: "红湖（Lacul Roșu）：由比卡兹溪被天然堵塞形成，形成于 1837 年，是比卡兹峡谷—赫什马什国家公园的一部分（cheilebicazului-hasmas.ro，1 级；ROWIKI 作 1838 年）；INS 年鉴表 1.5 列为「天然堰塞湖」类，面积 12.6 ha、蓄水 0.7 百万 m³（1 级；1987 年实测 11.47 ha）；被淹没的森林树干顶部至今露出水面（Enciclopedia României，2 级）；崩塌诱因暴雨 / 地震两说，正文只写山体崩塌堵塞溪流；湖面海拔 983 m（OSM）。「最年轻的天然湖」、外语名与传说不写（研究子代理事实表 2026-09-15）",
};

const DANUBE_ROMANIA: TerrainEntry = {
  id: "danube-romania",
  nameZh: "多瑙河罗马尼亚段",
  nameEn: "Danube in Romania",
  category: "river",
  regionId: "europe",
  country: "romania",
  landmark: { name: "布勒伊拉", lon: 27.9575, lat: 45.2692, elevation: 25, kind: "city" },
  bbox: [21.35, 43.63, 29.75, 45.45],
  axis: [[21.40, 44.75], [29.70, 45.15]],
  viewScale: 2.2,
  label: { lon: 25.300, lat: 43.700, rotation: 0 },
  source: "多瑙河罗马尼亚段（Dunărea）：在罗马尼亚南部流经 1,075 km 后注入黑海；罗马尼亚河流呈放射状、多发源于喀尔巴阡，最终汇入多瑙河（INS 年鉴第 3 页与表 1.4，1 级）；布勒伊拉大岛面积 710 km²、1950–60 年代排干筑堤改为农田；其东侧布勒伊拉小岛由 7 个岛组成（ROWIKI，3 级）；河漫滩湖布拉泰什 2,111 ha、比斯特雷茨 1,867 ha（INS 年鉴表 1.5，1 级）。与匈牙利侧 danube-hungary 等同一条河的不同段，id 不复用；锚点选两岸都在境内的布勒伊拉一带；界河段落与邻国不写（研究子代理事实表 2026-09-15）",
};

const MURES_RIVER: TerrainEntry = {
  id: "mures-river",
  nameZh: "穆列什河",
  nameEn: "Mureș River",
  category: "river",
  regionId: "europe",
  country: "romania",
  landmark: { name: "穆列什峡谷下口（德达）", lon: 24.8718, lat: 46.9475, elevation: 450, kind: "gorge" },
  bbox: [20.30, 45.90, 25.80, 46.95],
  axis: [[25.60, 46.90], [20.40, 46.15]],
  viewScale: 2.0,
  label: { lon: 22.900, lat: 46.400, rotation: 0 },
  source: "穆列什河（Mureș）：罗马尼亚境内长 761 km、流域 27,890 km²，在 INS 年鉴表 1.4 境内河长中仅次于多瑙河（1 级）；发源于东喀的焦尔焦山一带，在托普利察—德达之间切穿克利马尼与古尔吉乌两火山山块形成长约 34 km 的穆列什峡谷（ROWIKI 引《罗马尼亚地理》第 III 卷，3 级）；向西流出国境后汇入蒂萨河（与匈牙利侧 tisza-river 互相点名）。全长 789 / 803 km 两说不写；界河段与外语名不写。锚点海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const OLT_RIVER: TerrainEntry = {
  id: "olt-river",
  nameZh: "奥尔特河",
  nameEn: "Olt River",
  category: "river",
  regionId: "europe",
  country: "romania",
  landmark: { name: "奥尔特河峡谷下口（克利默内什蒂）", lon: 24.3433, lat: 45.2392, elevation: 260, kind: "gorge" },
  bbox: [24.00, 43.70, 25.90, 46.80],
  axis: [[25.70, 46.50], [24.30, 43.75]],
  viewScale: 2.0,
  label: { lon: 24.600, lat: 44.600, rotation: 0 },
  source: "奥尔特河（Olt）：全长 615 km、流域 24,050 km²（INS 年鉴表 1.4，1 级）；上游在东喀（ER，2 级），在图尔努罗舒至科齐亚之间横切南喀，形成长约 47 km 的奥尔特河峡谷，在伊斯拉兹附近汇入多瑙河（ROWIKI，3 级）；科齐亚国家公园 17,100 ha、依 2000 年第 5 号法宣布（ROWIKI，3 级，正文不写面积）。「全国最长峡谷」与多瑙河铁门峡冲突，不写。锚点海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const SIRET_RIVER: TerrainEntry = {
  id: "siret-river",
  nameZh: "锡雷特河",
  nameEn: "Siret River",
  category: "river",
  regionId: "europe",
  country: "romania",
  landmark: { name: "锡雷特河下游（加拉茨）", lon: 28.0553, lat: 45.4336, elevation: 30, kind: "city" },
  bbox: [26.00, 45.40, 27.95, 47.98],
  axis: [[26.10, 47.90], [27.95, 45.45]],
  viewScale: 1.9,
  label: { lon: 27.400, lat: 46.800, rotation: 0 },
  source: "锡雷特河（Siret）：罗马尼亚境内长 559 km、流域 42,890 km²（INS 年鉴表 1.4，1 级；表中流域面积为所列河流最大一档，多瑙河一栏口径特殊）；自北入境、沿东喀外侧南流，在加拉茨附近汇入多瑙河；东喀东坡的比斯特里察、特罗图什、布泽乌等河属锡雷特水系（常识性水系归属，表内未直接标注）。发源地与上游不写。锚点为汇口附近城市的概略点（研究子代理事实表 2026-09-15）",
};

const BLACK_SEA_COAST_RO: TerrainEntry = {
  id: "black-sea-coast-ro",
  nameZh: "罗马尼亚黑海沿岸",
  nameEn: "Romanian Black Sea Coast",
  category: "coast",
  regionId: "europe",
  country: "romania",
  landmark: { name: "图兹拉灯塔", lon: 28.6661, lat: 43.9908, elevation: 30, kind: "escarpment" },
  bbox: [28.55, 43.73, 29.75, 45.20],
  viewScale: 1.6,
  label: { lon: 29.200, lat: 44.500, rotation: 0 },
  source: "罗马尼亚黑海沿岸（Litoralul românesc）：海岸线长 245 km（INS 年鉴第 3 页，1 级）；其中三角洲与拉济姆—锡诺耶潟湖段 163 km，从奇图克沙坝往南约三分之二是 20–40 m 高的海崖；三角洲、潟湖与被沙坝隔开的锡乌特吉奥尔、泰基尔吉奥尔等溺谷湖都在冰后期黑海水位稳定后形成（ROWIKI，3 级）；溺谷湖塔绍尔 2,335 ha、泰基尔吉奥尔 1,161 ha（湖面海拔 1.5 m），海成潟湖锡乌特吉奥尔 1,900 ha（INS 年鉴表 1.5 与第 3 页，1 级）。海域划界、岛屿、专属经济区、国界端点一律不写；锚点不用贴国界的沃马韦凯；锚点海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 罗马尼亚 =====
  EASTERN_CARPATHIANS, SOUTHERN_CARPATHIANS, APUSENI_MOUNTAINS, FAGARAS_MOUNTAINS,
  BUCEGI_PLATEAU, RETEZAT_MOUNTAINS, RODNA_MOUNTAINS, CALIMANI_MOUNTAINS,
  PIATRA_CRAIULUI, CEAHLAU_MASSIF, TRANSYLVANIAN_PLATEAU, DOBROGEA_PLATEAU,
  MACIN_MOUNTAINS, SUBCARPATHIANS, APUSENI_KARST, WESTERN_PLAIN_RO,
  ROMANIAN_PLAIN, DANUBE_DELTA, IRON_GATES, BICAZ_GORGE,
  TURDA_GORGE, RAZIM_SINOE, LAKE_SFANTA_ANA, LACUL_ROSU,
  DANUBE_ROMANIA, MURES_RIVER, OLT_RIVER, SIRET_RIVER,
  BLACK_SEA_COAST_RO,
];
