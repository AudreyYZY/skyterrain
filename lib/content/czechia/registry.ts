import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 捷克
// 东欧次区域第二个国家（波兰之后）；全境近乎被古老山地环绕
// （捷克—摩拉维亚高地即波希米亚地块基底出露），跨境山脉一律按
// "捷克与德国/波兰/奥地利交界"中性表述，不涉主权
// ============================================================

const KRKONOSE: TerrainEntry = {
  id: "krkonose",
  nameZh: "克尔科诺谢山（巨人山）",
  nameEn: "Krkonoše / Giant Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "斯涅日卡峰", lon: 15.7403, lat: 50.7361, elevation: 1603, kind: "peak" },
  bbox: [15.10, 50.68, 15.85, 50.83],
  axis: [[15.15, 50.78], [15.80, 50.735]],
  label: { lon: 15.45, lat: 50.76, rotation: 0 },
  source: "克尔科诺谢山（巨人山）：苏台德山脉海拔最高的部分，沿捷克与波兰边境分布；斯涅日卡峰海拔1603米，是捷克全境最高点，山顶横跨捷克与波兰边境（Wikipedia/krkonose.eu WebSearch 2026）",
};

const SUMAVA: TerrainEntry = {
  id: "sumava",
  nameZh: "舒马瓦山（波希米亚森林）",
  nameEn: "Šumava / Bohemian Forest",
  category: "mountain_system",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "普莱希峰", lon: 13.8572, lat: 48.7711, elevation: 1378, kind: "peak" },
  bbox: [13.10, 48.55, 13.95, 49.35],
  axis: [[13.15, 49.30], [13.85, 48.60]],
  viewScale: 1.4,
  label: { lon: 13.5, lat: 48.95, rotation: 0 },
  source: "舒马瓦山（波希米亚森林）：捷克西南部沿德国、奥地利边境延伸的低山，是伏尔塔瓦河的发源地；普莱希峰海拔1378米，是舒马瓦山捷克与奥地利一侧的最高点，德国巴伐利亚一侧的阿尔伯山（1456米）略高于此（Wikipedia/jiznicechy.org WebSearch 2026）",
};

const KRUSNE_HORY: TerrainEntry = {
  id: "krusne-hory",
  nameZh: "克鲁什内山（矿山山脉）",
  nameEn: "Krušné hory / Ore Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "克利诺韦茨峰", lon: 12.9678, lat: 50.3961, elevation: 1244, kind: "peak" },
  bbox: [12.40, 50.35, 13.90, 50.60],
  axis: [[12.40, 50.42], [13.85, 50.55]],
  label: { lon: 13.1, lat: 50.48, rotation: 0 },
  source: "克鲁什内山（矿山山脉）：沿捷克与德国萨克森州边境延伸约130公里的山系，历史上因银、锡、铅等矿藏开采得名；捷克一侧最高点克利诺韦茨峰海拔1244米，德国一侧最高点菲希特尔山1214米（Britannica/krusnehory.cz WebSearch 2026）",
};

const JESENIKY: TerrainEntry = {
  id: "jeseniky",
  nameZh: "耶塞尼克山（大耶塞尼克）",
  nameEn: "Jeseníky / Hrubý Jeseník",
  category: "mountain_system",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "普拉迭德峰", lon: 17.2333, lat: 50.0833, elevation: 1491, kind: "peak" },
  bbox: [16.85, 49.95, 17.35, 50.25],
  label: { lon: 17.1, lat: 50.1, rotation: 0 },
  source: "耶塞尼克山（大耶塞尼克）：苏台德山脉东段位于捷克摩拉维亚—西里西亚地区的部分；普拉迭德峰海拔1491米，是摩拉维亚与捷克西里西亚地区的最高点、也是捷克全境第五高峰，山顶建有气象观测塔（Wikipedia WebSearch 2026）",
};

const MORAVSKOSLEZSKE_BESKYDY: TerrainEntry = {
  id: "moravskoslezske-beskydy",
  nameZh: "摩拉维亚—西里西亚贝斯基德山",
  nameEn: "Moravian-Silesian Beskids",
  category: "mountain_system",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "利萨山", lon: 18.4475, lat: 49.5458, elevation: 1323, kind: "peak" },
  bbox: [18.15, 49.38, 18.75, 49.68],
  label: { lon: 18.45, lat: 49.52, rotation: 0 },
  source: "摩拉维亚—西里西亚贝斯基德山：喀尔巴阡山脉在捷克最东端、毗邻斯洛伐克边境的部分，是捷克境内喀尔巴阡山系海拔最高的区域；利萨山海拔1323米为最高峰，因山顶早年缺少树木得名“光头山”，年降水量约1500毫米，是捷克降水最多的地区之一（Wikipedia WebSearch 2026）",
};

const LUZICKE_HORY: TerrainEntry = {
  id: "luzicke-hory",
  nameZh: "卢日采山（卢萨蒂亚山）",
  nameEn: "Lužické hory / Lusatian Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "耶德洛瓦峰", lon: 14.5727, lat: 50.8635, elevation: 776, kind: "peak" },
  bbox: [14.35, 50.75, 14.75, 50.95],
  label: { lon: 14.55, lat: 50.85, rotation: 0 },
  source: "卢日采山（卢萨蒂亚山）：西苏台德山脉沿捷克与德国萨克森州边境分布的一列砂岩山地，多锥状火山岩残丘点缀其间；山系最高峰劳舍峰（793米）地处捷克与德国边境线上，完全位于捷克境内的最高点为耶德洛瓦峰，海拔776米（Wikipedia/doluzihor.cz WebSearch 2026）",
};

const NOVOHRADSKE_HORY: TerrainEntry = {
  id: "novohradske-hory",
  nameZh: "新城山（格拉琴山）",
  nameEn: "Novohradské hory / Gratzen Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "卡梅内茨峰", lon: 14.6694, lat: 48.585, elevation: 1072, kind: "peak" },
  bbox: [14.55, 48.55, 14.95, 48.72],
  label: { lon: 14.7, lat: 48.63, rotation: 0 },
  source: "新城山（格拉琴山）：波希米亚地块南缘沿捷克与奥地利边境延伸的古老山地，山势相对低矮浑圆；捷克一侧最高峰卡梅内茨峰海拔1072米，距奥地利边境仅约400米，奥地利一侧最高点菲堡山（1112米）略高于此（Wikipedia WebSearch 2026）",
};

const CESKOMORAVSKA_VRCHOVINA: TerrainEntry = {
  id: "ceskomoravska-vrchovina",
  nameZh: "捷克—摩拉维亚高地",
  nameEn: "Bohemian-Moravian Highlands",
  category: "hills",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "亚沃日采峰", lon: 15.3394, lat: 49.2211, elevation: 837, kind: "peak" },
  bbox: [15.00, 49.05, 16.10, 49.55],
  viewScale: 1.5,
  label: { lon: 15.55, lat: 49.30, rotation: 0 },
  source: "捷克—摩拉维亚高地：波希米亚地块基底出露形成的一片古老低矮高地，横贯捷克中南部、构成波希米亚与摩拉维亚两大历史地区的分界；地势整体在500至800米之间起伏和缓，亚沃日采峰海拔837米为最高点，也是欧洲主分水岭（易北河与多瑙河流域分界）经过之处（Wikipedia WebSearch 2026）",
};

const BRDY: TerrainEntry = {
  id: "brdy",
  nameZh: "布尔迪丘陵",
  nameEn: "Brdy",
  category: "hills",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "托克峰", lon: 13.8768, lat: 49.7042, elevation: 865, kind: "peak" },
  bbox: [13.55, 49.60, 14.05, 49.80],
  label: { lon: 13.8, lat: 49.70, rotation: 0 },
  source: "布尔迪丘陵：捷克中部一列沿西南—东北走向延伸约60公里的森林丘陵，托克峰海拔865米为最高点；1927至2016年长期作为军事训练区对公众封闭，人为活动稀少使区内保留了较为完整的原生林相，2016年设立布尔迪自然保护区向公众开放（VisitCzechia/Wikipedia WebSearch 2026）",
};

const CESKE_STREDOHORI: TerrainEntry = {
  id: "ceske-stredohori",
  nameZh: "捷克中央高地",
  nameEn: "České středohoří / Central Bohemian Uplands",
  category: "hills",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "米莱绍夫卡峰", lon: 13.9315, lat: 50.5552, elevation: 837, kind: "peak" },
  bbox: [13.65, 50.40, 14.35, 50.70],
  viewScale: 1.3,
  label: { lon: 14.0, lat: 50.55, rotation: 0 },
  source: "捷克中央高地：捷克境内新生代火山活动最显著的地区，沿俄赫热河谷发育出大量玄武岩、粗面岩质的锥状孤丘（约73.6%为玄武岩），地貌上呈现出典型的“群峰林立”景观；米莱绍夫卡峰海拔837米为最高点，因常年多风被称为捷克“风最大的山”（stredohori.cz/Wikipedia WebSearch 2026）",
};

const PAVLOVSKE_VRCHY: TerrainEntry = {
  id: "pavlovske-vrchy",
  nameZh: "巴甫洛夫丘陵（帕拉瓦）",
  nameEn: "Pavlovské vrchy / Pálava",
  category: "hills",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "杰温峰", lon: 16.6497, lat: 48.8694, elevation: 550, kind: "peak" },
  bbox: [16.58, 48.82, 16.72, 48.90],
  label: { lon: 16.64, lat: 48.86, rotation: 0 },
  source: "巴甫洛夫丘陵（帕拉瓦）：南摩拉维亚一列由侏罗纪白垩质石灰岩构成的狭长孤立山脊，地处摩拉维亚全境最干旱、气候最接近潘诺尼亚型的地区，发育有草原、林草原等稀有生态群落；杰温峰海拔550米为最高点，1986年联合国教科文组织将其纳入下摩拉维亚生物圈保护区，周边是捷克重要的葡萄酒产区（VisitCzechia/Wikipedia WebSearch 2026）",
};

const CESKY_RAJ: TerrainEntry = {
  id: "cesky-raj",
  nameZh: "捷克天堂（波希米亚天堂）",
  nameEn: "Český ráj / Bohemian Paradise",
  category: "hills",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "普拉霍夫岩城", lon: 15.2840, lat: 50.4676, elevation: 400, kind: "escarpment" },
  bbox: [14.95, 50.40, 15.35, 50.60],
  label: { lon: 15.15, lat: 50.50, rotation: 0 },
  source: "捷克天堂（波希米亚天堂）：捷克最早（1955年）设立的自然保护区之一，由白垩纪晚期海相沉积的巨厚砂岩经长期风化侵蚀，形成成群的岩塔、岩柱与“岩石迷宫”地貌；普拉霍夫岩城是园内最具代表性的一片，岩塔高度可达40米，2015年整片区域列入联合国教科文组织世界地质公园网络（UNESCO/hkregion.cz WebSearch 2026）",
};

const ADRSPACH_TEPLICE_ROCKS: TerrainEntry = {
  id: "adrspach-teplice-rocks",
  nameZh: "阿德尔斯帕赫—捷普利采岩城",
  nameEn: "Adršpach-Teplice Rocks",
  category: "hills",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "阿德尔斯帕赫岩城", lon: 16.1150, lat: 50.6114, elevation: 500, kind: "escarpment" },
  bbox: [16.05, 50.58, 16.20, 50.65],
  label: { lon: 16.12, lat: 50.61, rotation: 0 },
  source: "阿德尔斯帕赫—捷普利采岩城：捷克东北部布鲁莫夫地区一整块砂岩体经风化侵蚀断裂而成的岩塔群与峡谷迷宫，岩塔高度可达40米，是中欧规模最大的连片砂岩“岩城”地貌之一，也是捷克境内最著名、游客最多的砂岩景观；1933年起被列为国家级自然保护区（Springer/Wikipedia WebSearch 2026）",
};

const POLABI_LOWLAND: TerrainEntry = {
  id: "polabi-lowland",
  nameZh: "波拉比低地（易北河低地）",
  nameEn: "Polabí / Elbe Lowland",
  category: "plain",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "梅尔尼克（易北河与伏尔塔瓦河汇流处）", lon: 14.4750, lat: 50.3519, elevation: 156, kind: "city" },
  bbox: [14.40, 50.00, 15.85, 50.40],
  viewScale: 1.6,
  label: { lon: 15.1, lat: 50.2, rotation: 0 },
  source: "波拉比低地（易北河低地）：沿易北河中游、大致在帕尔杜比采与梅尔尼克之间展布的低平沃土带，海拔多在150至300米之间，是捷克重要的粮食与蔬果产区；梅尔尼克是易北河与捷克境内最长河流伏尔塔瓦河的汇流处，也是波拉比低地下游的标志性地点（Wikipedia WebSearch 2026）",
};

const DOLNOMORAVSKY_UVAL: TerrainEntry = {
  id: "dolnomoravsky-uval",
  nameZh: "下摩拉瓦低地",
  nameEn: "Dolnomoravský úval / Lower Morava Valley",
  category: "plain",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "莱德尼采庄园", lon: 16.8033, lat: 48.7997, elevation: 170, kind: "city" },
  bbox: [16.60, 48.65, 17.10, 49.05],
  label: { lon: 16.85, lat: 48.85, rotation: 0 },
  source: "下摩拉瓦低地：摩拉瓦河下游沿捷克与奥地利、斯洛伐克边境展布的低地，气候偏向潘诺尼亚型，夏季炎热少雨、冬季相对温和，降水偏少，是捷克最干旱的地区之一；富含钙质的黄土状母质与充足光照使其成为捷克最重要的葡萄酒产区，莱德尼采—瓦尔季采庄园园林群1996年列入联合国教科文组织世界遗产名录（Wikipedia/UNESCO WebSearch 2026）",
};

const LABE_RIVER: TerrainEntry = {
  id: "labe-river",
  nameZh: "易北河（拉贝河）",
  nameEn: "Labe / Elbe",
  category: "river",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "赫热恩斯科河谷", lon: 14.2425, lat: 50.8744, elevation: 130, kind: "gorge" },
  bbox: [14.20, 50.30, 15.60, 50.85],
  axis: [[15.53, 50.78], [14.24, 50.87]],
  viewScale: 1.6,
  label: { lon: 14.9, lat: 50.55, rotation: -40 },
  source: "易北河（拉贝河）：中欧主要大河之一，全长约1094公里（FGG Elbe 捷德跨国流域委员会口径，核实 2026-09-11），其中约三分之一流经捷克境内；源头在克尔科诺谢山南坡、海拔约1386米的拉贝草甸，向西南、再转北流贯波希米亚盆地，最终在赫热恩斯科附近切穿克鲁什内山进入德国，出境处海拔约115米，是捷克全境地势最低点（Britannica/Wikipedia WebSearch 2026）",
};

const VLTAVA_RIVER: TerrainEntry = {
  id: "vltava-river",
  nameZh: "伏尔塔瓦河",
  nameEn: "Vltava",
  category: "river",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "布拉格城区曲流", lon: 14.4208, lat: 50.0880, elevation: 190, kind: "meander" },
  bbox: [13.55, 48.95, 14.60, 50.40],
  axis: [[13.56, 48.97], [14.475, 50.352]],
  viewScale: 1.8,
  label: { lon: 14.1, lat: 49.6, rotation: -70 },
  source: "伏尔塔瓦河：捷克境内最长的河流，全长430公里，是易北河水量最大的支流；发源于舒马瓦山黑伏尔塔瓦河源头，向南、再折向北纵贯捷克南部与中部，流经切斯基克鲁姆洛夫、捷克布杰约维采、布拉格，最终在梅尔尼克汇入易北河；布拉格市区河段绕城形成一段舒缓曲流，是捷克辨识度最高的城市河景之一（jiznicechy.cz/Wikipedia WebSearch 2026）",
};

const OHRE_RIVER: TerrainEntry = {
  id: "ohre-river",
  nameZh: "俄赫热河（埃格尔河）",
  nameEn: "Ohře / Eger",
  category: "river",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "海布", lon: 12.3706, lat: 50.0794, elevation: 451, kind: "city" },
  bbox: [12.30, 49.95, 14.20, 50.55],
  axis: [[12.37, 50.08], [14.18, 50.53]],
  viewScale: 1.5,
  label: { lon: 13.3, lat: 50.25, rotation: -15 },
  source: "俄赫热河（埃格尔河）：易北河左岸支流，全长约305公里，其中约256公里流经捷克境内，是捷克第四长河；发源于德国菲希特尔山，经海布进入捷克后流经索科洛夫盆地、卡罗维发利盆地，最终在利托梅日采附近汇入易北河；沿河的卡罗维发利、玛丽亚温泉市等温泉城镇因构造断裂带涌出的矿泉水而闻名（Britannica WebSearch 2026）",
};

const MORAVA_RIVER: TerrainEntry = {
  id: "morava-river",
  nameZh: "摩拉瓦河",
  nameEn: "Morava",
  category: "river",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "利托维尔（摩拉维亚威尼斯）", lon: 17.0761, lat: 49.7011, elevation: 225, kind: "meander" },
  bbox: [16.80, 48.75, 17.35, 50.20],
  axis: [[16.85, 50.18], [17.05, 48.78]],
  viewScale: 1.5,
  label: { lon: 17.0, lat: 49.5, rotation: -80 },
  source: "摩拉瓦河：多瑙河支流，全长约365公里，发源于克拉利茨基山南坡，向南纵贯摩拉维亚全境，下游构成捷克与斯洛伐克、进而斯洛伐克与奥地利之间的界河，最终在布拉迪斯拉发附近汇入多瑙河；“摩拉维亚”之名即源自这条河，利托维尔一带河道分汊成数条支流穿城而过，有“摩拉维亚威尼斯”之称（Britannica WebSearch 2026）",
};

const CESKE_SVYCARSKO: TerrainEntry = {
  id: "ceske-svycarsko",
  nameZh: "捷克瑞士（易北河砂岩山地）",
  nameEn: "České Švýcarsko / Bohemian Switzerland",
  category: "gorge",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "普拉夫齐茨卡石拱", lon: 14.2815, lat: 50.8838, elevation: 200, kind: "gorge" },
  bbox: [14.10, 50.83, 14.45, 50.98],
  label: { lon: 14.28, lat: 50.90, rotation: 0 },
  source: "捷克瑞士（易北河砂岩山地）：易北河切穿白垩纪晚期海相砂岩台地形成的深切峡谷与岩塔景观区，两岸崖壁陡立、支流侵蚀出众多狭窄岩缝峡谷；园内的普拉夫齐茨卡石拱跨度26.5米、内部净高16米，是欧洲最大的天然砂岩拱门，2000年设立捷克瑞士国家公园（VisitCzechia/Wikipedia WebSearch 2026）",
};

const PODYJI_GORGE: TerrainEntry = {
  id: "podyji-gorge",
  nameZh: "波迪伊河谷（迪耶河峡谷）",
  nameEn: "Podyjí / Thayatal Gorge",
  category: "gorge",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "兹诺伊莫河曲", lon: 15.900, lat: 48.850, elevation: 220, kind: "meander" },
  bbox: [15.70, 48.78, 16.10, 48.92],
  label: { lon: 15.9, lat: 48.85, rotation: 0 },
  source: "波迪伊河谷（迪耶河峡谷）：迪耶河沿捷克与奥地利边境切穿捷克—摩拉维亚高地东南缘，历经约40公里河段刻蚀出深达220米的峡谷式河谷，谷内多岩石圆丘、崖壁与河曲；1951年后作为“铁幕”边境管制区近40年无人进入，反而使原始生态保存完好，1991年设立波迪伊国家公园（捷克面积最小的国家公园），2000年与奥地利一侧的塔亚河谷国家公园共同构成跨境保护区（Wikipedia/nppodyji.cz WebSearch 2026）",
};

const MORAVSKY_KRAS: TerrainEntry = {
  id: "moravsky-kras",
  nameZh: "摩拉维亚喀斯特",
  nameEn: "Moravský kras / Moravian Karst",
  category: "plateau",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "马措哈深渊", lon: 16.7297, lat: 49.3731, elevation: 410, kind: "escarpment" },
  bbox: [16.65, 49.32, 16.85, 49.45],
  label: { lon: 16.75, lat: 49.38, rotation: 0 },
  source: "摩拉维亚喀斯特：中欧最重要的喀斯特地貌区之一，由泥盆纪石灰岩构成，面积约100平方公里内已探明溶洞与峡谷逾1100处；马措哈深渊由巨大溶洞洞顶塌陷形成，垂直深度138.5米（至下湖水面），是中欧最深的天然竖井状深渊之一，地下的普恩克瓦河可乘船游览、直达深渊底部（VisitCzechia/moravskykras.net WebSearch 2026）",
};

const CHEBSKO_SOKOLOVSKA_PANEV: TerrainEntry = {
  id: "chebsko-sokolovska-panev",
  nameZh: "海布—索科洛夫盆地（卡罗维发利温泉盆地）",
  nameEn: "Cheb-Sokolov Basin / Karlovy Vary Spa Basin",
  category: "basin",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "卡罗维发利温泉回廊", lon: 12.8725, lat: 50.2306, elevation: 447, kind: "escarpment" },
  bbox: [12.30, 49.95, 13.10, 50.40],
  label: { lon: 12.7, lat: 50.15, rotation: 0 },
  source: "海布—索科洛夫盆地（卡罗维发利温泉盆地）：俄赫热河构造断陷带（俄赫热地堑）在捷克西部形成的一系列新生代沉积盆地，地壳断裂活动至今仍在延续，区域内偶有地震活动；断裂带涌出数十处温度、矿化度各异的矿泉，日涌水量约300万升，卡罗维发利即因这些温泉发展成欧洲著名的温泉疗养城市，市内沿捷普拉河两岸建有多条历史悠久的温泉回廊（casopis.ochranaprirody.cz/Springer WebSearch 2026）",
};

const LIPNO_RESERVOIR: TerrainEntry = {
  id: "lipno-reservoir",
  nameZh: "利普诺水库",
  nameEn: "Lipno Reservoir",
  category: "lake",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "利普诺大坝", lon: 14.183, lat: 48.650, elevation: 726, kind: "lake" },
  bbox: [13.95, 48.55, 14.35, 48.95],
  viewScale: 1.3,
  label: { lon: 14.1, lat: 48.72, rotation: 0 },
  source: "利普诺水库：1952至1959年在伏尔塔瓦河上游、舒马瓦山间修建的水利枢纽，正常蓄水位海拔725.6米，水域面积近50平方公里，是捷克境内面积最大的水体，也是捷克最大的人工湖；水库全长约44公里、最宽处约14公里，兼具径流调节、发电与夏季度假功能（ČEZ/Wikipedia WebSearch 2026）",
};

const MACHOVO_JEZERO: TerrainEntry = {
  id: "machovo-jezero",
  nameZh: "马哈湖",
  nameEn: "Lake Mácha",
  category: "lake",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "马哈湖", lon: 14.6497, lat: 50.5831, elevation: 270, kind: "lake" },
  bbox: [14.58, 50.55, 14.72, 50.62],
  label: { lon: 14.65, lat: 50.58, rotation: 0 },
  source: "马哈湖：捷克北部一座人工蓄水塘，面积2.84平方公里，是利贝雷茨地区最大的水面，因规模较大而俗称“湖”；14世纪由查理四世下令蓄水成塘，1930年代经沙滩改造成为避暑胜地，1961年以曾多次到访、并以此为长诗《五月》背景地的捷克浪漫主义诗人卡雷尔·希内克·马哈之名命名（Wikipedia WebSearch 2026）",
};

const VLTAVA_VALLEY_CESKY_KRUMLOV: TerrainEntry = {
  id: "vltava-valley-cesky-krumlov",
  nameZh: "切斯基克鲁姆洛夫伏尔塔瓦河曲流",
  nameEn: "Vltava Meander at Český Krumlov",
  category: "valley",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "切斯基克鲁姆洛夫城堡", lon: 14.3153, lat: 48.8111, elevation: 492, kind: "meander" },
  bbox: [14.28, 48.78, 14.36, 48.84],
  label: { lon: 14.315, lat: 48.81, rotation: 0 },
  source: "切斯基克鲁姆洛夫伏尔塔瓦河曲流：伏尔塔瓦河在舒马瓦山北麓切出的一段深切曲流，河道呈双重马蹄形几乎环绕古城核心，13世纪始建的克鲁姆洛夫城堡即矗立于曲流内侧崖丘之上；这种紧凑的曲流地貌与建成于其上的中世纪城镇格局共同构成完整的历史景观，1992年整座古城列入联合国教科文组织世界遗产名录（UNESCO/Wikipedia WebSearch 2026）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 捷克 =====
  KRKONOSE, SUMAVA, KRUSNE_HORY, JESENIKY, MORAVSKOSLEZSKE_BESKYDY,
  LUZICKE_HORY, NOVOHRADSKE_HORY,
  CESKOMORAVSKA_VRCHOVINA, BRDY, CESKE_STREDOHORI, PAVLOVSKE_VRCHY,
  CESKY_RAJ, ADRSPACH_TEPLICE_ROCKS,
  POLABI_LOWLAND, DOLNOMORAVSKY_UVAL,
  LABE_RIVER, VLTAVA_RIVER, OHRE_RIVER, MORAVA_RIVER,
  CESKE_SVYCARSKO, PODYJI_GORGE,
  MORAVSKY_KRAS, CHEBSKO_SOKOLOVSKA_PANEV,
  LIPNO_RESERVOIR, MACHOVO_JEZERO, VLTAVA_VALLEY_CESKY_KRUMLOV,
];
