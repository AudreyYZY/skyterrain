import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 比利时
// ============================================================

const HAUTES_FAGNES: TerrainEntry = {
  id: "hautes-fagnes",
  nameZh: "高地芬（费恩高原）",
  nameEn: "Hautes Fagnes (High Fens)",
  category: "plateau",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "植物园峰（信号博特朗热）", lon: 6.0817, lat: 50.5039, elevation: 694, kind: "peak" },
  bbox: [5.95, 50.45, 6.15, 50.60],
  label: { lon: 6.05, lat: 50.52, rotation: 0 },
  source: "高地芬：阿登高原东部一片泥炭沼泽高原，最高点植物园峰海拔694米，是比利时全境最高点；高原保留着显著的冰缘地貌遗迹（多边形土、冻融构造等），是西北欧periglacial地貌研究的代表地点（维基）",
};

const CONDROZ: TerrainEntry = {
  id: "condroz",
  nameZh: "孔德罗兹高原",
  nameEn: "Condroz",
  category: "plateau",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "希尼镇", lon: 5.1, lat: 50.3, elevation: 250, kind: "city" },
  bbox: [4.6, 50.15, 5.6, 50.45],
  axis: [[4.65, 50.3], [5.55, 50.3]],
  viewScale: 1.5,
  label: { lon: 5.1, lat: 50.32, rotation: 0 },
  source: "孔德罗兹高原：瓦隆大区一处低缓起伏的高原，位于阿登高原与桑布尔—默兹河谷之间，海拔多在200至300米，地表由砂岩、石灰岩相间的条状山脊构成（大英百科 / 维基）",
};

const ARDENNES_FOREST: TerrainEntry = {
  id: "ardennes-forest",
  nameZh: "阿登森林高地",
  nameEn: "Ardennes Forest Uplands",
  category: "hills",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "圣于贝尔", lon: 5.3733, lat: 50.0311, elevation: 435, kind: "city" },
  bbox: [5.0, 49.7, 6.1, 50.3],
  viewScale: 1.8,
  label: { lon: 5.5, lat: 50.0, rotation: 0 },
  source: "阿登：比利时东南部及卢森堡、法国、德国交界一带的广大森林高地，比利时境内平均海拔约350至400米，最高处即高地芬泥炭高原（694米）；地表多为古生代变质岩，河流切割出陡峭河谷，森林覆盖率是比利时全国最高的地区（维基）",
};

const PAYS_DE_HERVE: TerrainEntry = {
  id: "pays-de-herve",
  nameZh: "埃尔沃地区",
  nameEn: "Pays de Herve",
  category: "hills",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "埃尔沃镇", lon: 5.7967, lat: 50.6408, elevation: 280, kind: "city" },
  bbox: [5.65, 50.55, 5.95, 50.72],
  label: { lon: 5.8, lat: 50.63, rotation: 0 },
  source: "埃尔沃地区：位于韦斯德河与默兹河之间的一片低缓丘陵，以树篱环绕的果园与草场景观著称，是比利时传统奶酪（埃尔沃奶酪）与糖浆的产区（维基）",
};

const HAGELAND: TerrainEntry = {
  id: "hageland",
  nameZh: "哈赫兰地区",
  nameEn: "Hageland",
  category: "hills",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "迪斯特镇", lon: 5.05, lat: 50.98, elevation: 45, kind: "city" },
  bbox: [4.75, 50.87, 5.15, 51.0],
  axis: [[4.78, 50.93], [5.12, 50.95]],
  label: { lon: 4.95, lat: 50.95, rotation: -5 },
  source: "哈赫兰地区：佛兰芒布拉班特省东部一系列东西走向的铁矿砂岩条状山脊，山体不高但排列规律，是中新世狄斯特砂层差异侵蚀留下的地貌遗存（维基 / 地质文献）",
};

const CAMPINE: TerrainEntry = {
  id: "campine",
  nameZh: "坎皮讷（肯彭地区）",
  nameEn: "Campine (Kempen)",
  category: "plain",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "莫尔镇", lon: 5.15, lat: 51.15, elevation: 30, kind: "city" },
  bbox: [4.7, 51.05, 6.05, 51.4],
  viewScale: 1.8,
  label: { lon: 5.4, lat: 51.2, rotation: 0 },
  source: "坎皮讷（荷兰语称肯彭）：比利时东北部与荷兰南部交界处一片地势低平的沙质高地，是默兹—莱茵三角洲的一部分，历史上曾大片覆盖着石楠荒原、沙丘与湿地（维基）",
};

const FLANDERS_COASTAL_PLAIN: TerrainEntry = {
  id: "flanders-coastal-plain",
  nameZh: "佛兰德沿海平原",
  nameEn: "Plain of Flanders",
  category: "plain",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "迪克斯梅德", lon: 2.87, lat: 51.03, elevation: 3, kind: "city" },
  bbox: [2.55, 50.85, 3.4, 51.15],
  viewScale: 1.5,
  label: { lon: 2.95, lat: 50.98, rotation: 0 },
  source: "佛兰德沿海平原：比利时西北部一片地势极为低平的沿海平原，向内陆延伸约10至20公里，土壤多为粘质海相沉积，历史上通过筑堤排水从海中围垦而来（大英百科）",
};

const FAGNE_FAMENNE: TerrainEntry = {
  id: "fagne-famenne",
  nameZh: "法涅—法梅讷凹地",
  nameEn: "Fagne-Famenne",
  category: "basin",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "罗什福尔", lon: 5.22, lat: 50.16, elevation: 210, kind: "city" },
  bbox: [4.6, 50.05, 5.6, 50.25],
  axis: [[4.65, 50.15], [5.55, 50.18]],
  viewScale: 1.5,
  label: { lon: 5.1, lat: 50.15, rotation: 0 },
  source: "法涅—法梅讷凹地：夹在孔德罗兹高原与阿登高原之间的一条狭长凹陷地带，由较软的泥盆纪页岩经差异侵蚀而成，凹地南缘是卡雷斯蒂耶讷石灰岩条带——比利时喀斯特地貌最集中的区域（Britannica / 地质文献）",
};

const MEUSE_VALLEY_BE: TerrainEntry = {
  id: "meuse-valley-be",
  nameZh: "默兹河谷（比利时段）",
  nameEn: "Meuse Valley (Belgian stretch)",
  category: "valley",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "迪南", lon: 4.9127, lat: 50.2603, elevation: 100, kind: "city" },
  bbox: [4.75, 50.15, 5.65, 50.65],
  axis: [[4.85, 50.15], [5.6, 50.6]],
  viewScale: 1.3,
  label: { lon: 5.2, lat: 50.4, rotation: 40 },
  source: "默兹河谷：默兹河流经比利时境内的一段，河流切穿孔德罗兹与阿登高原边缘的石灰岩层，两岸崖壁陡峭，迪南、那慕尔、于伊、列日等历史城镇沿河而建；默兹河流域的绝大部分位于比利时境内（维基）",
};

const SEMOIS_VALLEY: TerrainEntry = {
  id: "semois-valley",
  nameZh: "塞穆瓦河谷",
  nameEn: "Semois Valley",
  category: "valley",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "布永", lon: 5.0664, lat: 49.7942, elevation: 220, kind: "city" },
  bbox: [4.75, 49.75, 5.55, 49.9],
  axis: [[4.8, 49.83], [5.5, 49.82]],
  viewScale: 1.3,
  label: { lon: 5.15, lat: 49.83, rotation: 0 },
  source: "塞穆瓦河谷：塞穆瓦河全长约210公里，发源于阿尔隆附近，向北流经阿登高原后转而向西，最终在法国境内汇入默兹河；河道在页岩地层中蜿蜒切出一连串极深的河曲，谷坡覆盖山毛榉与栎树林，2023年谷地大部分被划为瓦隆大区首个自然公园（维基）",
};

const OURTHE_VALLEY: TerrainEntry = {
  id: "ourthe-valley",
  nameZh: "乌尔特河谷",
  nameEn: "Ourthe Valley",
  category: "valley",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "拉罗什昂阿登", lon: 5.5764, lat: 50.1828, elevation: 210, kind: "city" },
  bbox: [5.4, 50.05, 5.85, 50.55],
  axis: [[5.5, 50.1], [5.65, 50.5]],
  viewScale: 1.2,
  label: { lon: 5.6, lat: 50.3, rotation: 75 },
  source: "乌尔特河谷：阿登高原最主要的河谷之一，乌尔特河切穿高原古老的变质岩层，谷坡陡峭、森林茂密，拉罗什昂阿登等古镇坐落在河曲环抱的台地上（维基）",
};

const VESDRE_VALLEY: TerrainEntry = {
  id: "vesdre-valley",
  nameZh: "韦斯德河谷",
  nameEn: "Vesdre Valley",
  category: "valley",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "韦尔维耶", lon: 5.8631, lat: 50.5905, elevation: 260, kind: "city" },
  bbox: [5.75, 50.55, 6.0, 50.68],
  label: { lon: 5.87, lat: 50.6, rotation: 0 },
  source: "韦斯德河谷：韦斯德河切穿阿登高原北缘古老变质岩层形成的狭窄河谷，历史上是比利时呢绒纺织业的发源地之一，韦尔维耶等城镇沿河而建（维基）",
};

const LESSE_VALLEY: TerrainEntry = {
  id: "lesse-valley",
  nameZh: "莱斯河谷",
  nameEn: "Lesse Valley",
  category: "valley",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "上翁—莱斯（莱斯河谷村）", lon: 5.1897, lat: 50.1067, elevation: 180, kind: "city" },
  bbox: [4.9, 50.0, 5.3, 50.2],
  axis: [[4.95, 50.05], [5.25, 50.18]],
  label: { lon: 5.1, lat: 50.1, rotation: -35 },
  source: "莱斯河谷：莱斯河在流经卡雷斯蒂耶讷石灰岩条带一段发育出典型的喀斯特谷地地貌，河道两侧多石灰岩崖壁与地下暗河，上翁—莱斯附近的溶洞群（阿甘溶洞）即由这条河的地下段侵蚀而成（维基）",
};

const AMBLEVE_GORGE: TerrainEntry = {
  id: "ambleve-gorge",
  nameZh: "昂布利沃峡谷",
  nameEn: "Amblève Gorge",
  category: "gorge",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "库瀑布", lon: 5.8386, lat: 50.3919, elevation: 280, kind: "gorge" },
  bbox: [5.79, 50.37, 5.88, 50.41],
  label: { lon: 5.84, lat: 50.39, rotation: 0 },
  source: "昂布利沃峡谷：昂布利沃河切穿阿登高原东部形成的一段河谷，谷中的库瀑布落差约15米，是比利时较知名的瀑布之一；瀑布并非天然形成，而是18世纪当地修士为给磨坊供水，人工截断河曲弯道而成（维基）",
};

const HAN_SUR_LESSE_CAVES: TerrainEntry = {
  id: "han-sur-lesse-caves",
  nameZh: "上翁溶洞",
  nameEn: "Caves of Han-sur-Lesse",
  category: "gorge",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "上翁溶洞入口", lon: 5.1897, lat: 50.1039, elevation: 175, kind: "gorge" },
  bbox: [5.17, 50.09, 5.21, 50.12],
  label: { lon: 5.19, lat: 50.10, rotation: 0 },
  source: "上翁溶洞：莱斯河约50万年前改道穿入布万石灰岩山体，经长期溶蚀后又在约2公里外重新出露地表，途中留下的这套洞穴系统，主厅“穹顶大厅”宽约150米、拱顶高约127米；洞内常年温度约13℃，考古发现青铜时代与石器时代人类活动遗迹（维基）",
};

const VIROIN_VALLEY: TerrainEntry = {
  id: "viroin-valley",
  nameZh: "维鲁安河谷",
  nameEn: "Viroin Valley",
  category: "gorge",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "尼斯姆", lon: 4.5183, lat: 50.0958, elevation: 190, kind: "gorge" },
  bbox: [4.45, 50.05, 4.65, 50.15],
  label: { lon: 4.55, lat: 50.1, rotation: 0 },
  source: "维鲁安河谷：维鲁安河切穿卡雷斯蒂耶讷石灰岩条带形成的一段峡谷型河谷，两岸多裸露的中泥盆世石灰岩崖壁，是比利时喀斯特地貌最集中、洞穴最密集的区段之一，属法梅讷—阿登联合国教科文组织世界地质公园的核心区域（UNESCO / 维基）",
};

const SCHELDT_RIVER_BE: TerrainEntry = {
  id: "scheldt-river-be",
  nameZh: "斯海尔德河（比利时段）",
  nameEn: "Scheldt River (Belgian stretch)",
  category: "river",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "安特卫普", lon: 4.4025, lat: 51.2194, elevation: 5, kind: "city" },
  bbox: [3.6, 50.95, 4.5, 51.35],
  axis: [[3.65, 50.98], [4.4, 51.3]],
  viewScale: 1.4,
  label: { lon: 4.0, lat: 51.15, rotation: 30 },
  source: "斯海尔德河：发源于法国北部，全长约435公里，其中约200公里流经比利时，自罗马时代起即是重要的水运通道；安特卫普港坐落在河道下游，是欧洲第二大港口；河口段（西斯海尔德河）流经荷兰境内出海，比利时与荷兰就这段航道的通行与维护订有长期协议（大英百科 / 维基）",
};

const SAMBRE_RIVER: TerrainEntry = {
  id: "sambre-river",
  nameZh: "桑布尔河",
  nameEn: "Sambre River",
  category: "river",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "沙勒罗瓦", lon: 4.4450, lat: 50.4108, elevation: 120, kind: "city" },
  bbox: [3.6, 50.2, 4.9, 50.47],
  axis: [[3.65, 50.25], [4.85, 50.46]],
  viewScale: 1.4,
  label: { lon: 4.2, lat: 50.35, rotation: 10 },
  source: "桑布尔河：发源于法国北部，全长约193公里，是默兹河左岸支流，在瓦隆大区首府那慕尔汇入默兹河；沙勒罗瓦是桑布尔河沿岸最重要的工业城市，历史上曾是比利时煤铁工业的核心地带（维基）",
};

const MEUSE_RIVER_BE: TerrainEntry = {
  id: "meuse-river-be",
  nameZh: "默兹河（比利时段）",
  nameEn: "Meuse River (Belgian stretch)",
  category: "river",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "列日", lon: 5.5731, lat: 50.6326, elevation: 65, kind: "city" },
  bbox: [4.5, 50.2, 5.75, 50.75],
  axis: [[4.6, 50.25], [5.7, 50.7]],
  viewScale: 1.4,
  label: { lon: 5.1, lat: 50.5, rotation: 35 },
  source: "默兹河：比利时境内最主要的通航大河，默兹河流域的大部分面积都位于比利时境内；下游经列日后转向北流，最终在荷兰境内与莱茵河三角洲汇合入海；列日是默兹河沿岸比利时最大的内河港口城市（维基）",
};

const IJZER_RIVER: TerrainEntry = {
  id: "ijzer-river",
  nameZh: "伊瑟河",
  nameEn: "Yser (IJzer) River",
  category: "river",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "迪克斯梅德伊瑟塔", lon: 2.8664, lat: 51.0322, elevation: 3, kind: "city" },
  bbox: [2.6, 50.7, 2.95, 51.1],
  axis: [[2.75, 50.75], [2.87, 51.05]],
  viewScale: 1.2,
  label: { lon: 2.8, lat: 50.9, rotation: -15 },
  source: "伊瑟河：发源于法国北部，流经比利时西弗兰德省沿海平原，在纽波特附近注入北海；河流下游地势低平、多经人工排水渠道调节，第一次世界大战期间这一带的低洼地形曾被用于防御性放水（维基）",
};

const BELGIAN_COAST_DUNES: TerrainEntry = {
  id: "belgian-coast-dunes",
  nameZh: "比利时海岸沙丘",
  nameEn: "Belgian Coast Dunes",
  category: "coast",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "德帕纳沙丘", lon: 2.5883, lat: 51.0908, elevation: 10, kind: "dune" },
  bbox: [2.53, 51.06, 2.65, 51.12],
  label: { lon: 2.59, lat: 51.09, rotation: 0 },
  source: "比利时海岸沙丘：沿比利时约65公里长的北海海岸分布的一列沙丘带，是从法国敦刻尔克延伸至丹麦的欧洲北海沿岸沙丘系统的一部分，沙丘高出后方平原约10米；受海岸城市化影响，现存沙丘面积已不足历史峰值的三分之二，德帕纳一带保留着较宽的沙丘带（Coastal Wiki）",
};

const ZWIN: TerrainEntry = {
  id: "zwin",
  nameZh: "兹温湿地",
  nameEn: "Zwin",
  category: "coast",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "兹温自然保护区", lon: 3.3667, lat: 51.3667, elevation: 1, kind: "escarpment" },
  bbox: [3.33, 51.35, 3.40, 51.38],
  label: { lon: 3.365, lat: 51.365, rotation: 0 },
  source: "兹温湿地：位于比利时与荷兰边境的一片潮汐盐沼湿地，涨潮时定期被海水淹没，独特的盐分梯度孕育出以海拉凡德拉为代表的耐盐植物群落；比利时境内面积约180公顷，记录到的鸟类种数占比利时全国观测种数的一半以上（维基）",
};

const SONIAN_FOREST: TerrainEntry = {
  id: "sonian-forest",
  nameZh: "索尼森林",
  nameEn: "Sonian Forest",
  category: "hills",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "格罗嫩达尔", lon: 4.4167, lat: 50.7667, elevation: 100, kind: "city" },
  bbox: [4.35, 50.72, 4.5, 50.82],
  viewScale: 1.1,
  label: { lon: 4.43, lat: 50.77, rotation: 0 },
  source: "索尼森林：布鲁塞尔东南郊一片面积约4421公顷的古老山毛榉林，部分林木树龄超过200年，是欧洲现存最大、最古老的山毛榉林之一，栖息着多种甲虫与约40种哺乳动物；2017年作为跨国系列遗产“欧洲喀尔巴阡山脉及其他地区古老与原始山毛榉林”的一部分列入联合国教科文组织世界遗产名录（维基 / UNESCO）",
};

const STAVELOT_MASSIF: TerrainEntry = {
  id: "stavelot-massif",
  nameZh: "斯塔沃洛地块",
  nameEn: "Stavelot Massif",
  category: "hills",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "斯塔沃洛镇", lon: 5.9333, lat: 50.4, elevation: 300, kind: "city" },
  bbox: [5.75, 50.3, 6.15, 50.5],
  viewScale: 1.3,
  label: { lon: 5.95, lat: 50.4, rotation: 0 },
  source: "斯塔沃洛地块：阿登高原东部出露的一片早古生代基岩，由约3000米厚（估计2700至3500米）的寒武纪至奥陶纪石英岩与板岩互层构成，是阿登地区出露的寒武纪至奥陶纪基底之一，先后经历加里东与海西造山运动的挤压变形（维基 / 地质文献）",
};

const HESBAYE: TerrainEntry = {
  id: "hesbaye",
  nameZh: "埃斯巴伊高原",
  nameEn: "Hesbaye",
  category: "plateau",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "瓦雷姆", lon: 5.25, lat: 50.7, elevation: 150, kind: "city" },
  bbox: [5.0, 50.6, 5.6, 50.8],
  viewScale: 1.4,
  label: { lon: 5.3, lat: 50.72, rotation: 0 },
  source: "埃斯巴伊高原：默兹河与斯海尔德河两大流域之间一片开阔的黄土台地，是罗马时代以前即已开垦的农业区，黄土母质发育的壤质土壤十分肥沃，至今仍是比利时最重要的谷物产区之一，有“比利时粮仓”之称（大英百科 / 维基）",
};

const GAUME: TerrainEntry = {
  id: "gaume",
  nameZh: "戈姆地区",
  nameEn: "Gaume",
  category: "hills",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "维尔通", lon: 5.5325, lat: 49.5667, elevation: 320, kind: "city" },
  bbox: [5.3, 49.5, 5.85, 49.65],
  viewScale: 1.3,
  label: { lon: 5.55, lat: 49.58, rotation: 0 },
  source: "戈姆地区：比利时最南端一片海拔低于阿登高原的丘陵地带，与法国洛林地区接壤，因气候相对温暖干燥、盛产果园与葡萄而被称为“比利时的普罗旺斯”（维基）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 比利时 =====
  HAUTES_FAGNES, CONDROZ, HESBAYE,
  ARDENNES_FOREST, PAYS_DE_HERVE, HAGELAND, SONIAN_FOREST, STAVELOT_MASSIF, GAUME,
  CAMPINE, FLANDERS_COASTAL_PLAIN,
  FAGNE_FAMENNE,
  MEUSE_VALLEY_BE, SEMOIS_VALLEY, OURTHE_VALLEY, VESDRE_VALLEY, LESSE_VALLEY,
  AMBLEVE_GORGE, HAN_SUR_LESSE_CAVES, VIROIN_VALLEY,
  SCHELDT_RIVER_BE, SAMBRE_RIVER, MEUSE_RIVER_BE, IJZER_RIVER,
  BELGIAN_COAST_DUNES, ZWIN,
];
