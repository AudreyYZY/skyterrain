import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 亚洲 — 土耳其
// ============================================================

const TAURUS_MOUNTAINS: TerrainEntry = {
  id: "toros-mountains",
  nameZh: "托罗斯山脉",
  nameEn: "Taurus Mountains (Toros Dağları)",
  category: "mountain_system",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "梅德茨兹峰（博尔卡山）", lon: 34.61, lat: 37.24, elevation: 3524, kind: "peak" },
  bbox: [29.5, 36.2, 37.8, 38.4],
  axis: [[30.0, 37.6], [37.5, 37.3]],
  viewScale: 1.6,
  label: { lon: 33.5, lat: 38.5, rotation: 0 },
  source: "托罗斯山脉：土耳其南部一条弧形山系，沿地中海海岸延伸，将地中海沿岸与中安纳托利亚高原分隔开，西起埃伊尔迪尔湖附近、东至幼发拉底河与底格里斯河上游一带，习惯上分为西托罗斯、中托罗斯与东南托罗斯三段；山系最高峰德米尔卡泽克峰海拔3756米，位于中段的阿拉达山地（Wikipedia WebSearch 2026）",
};

const PONTUS_MOUNTAINS: TerrainEntry = {
  id: "pontus-mountains",
  nameZh: "本都山脉（黑海山脉）",
  nameEn: "Pontic Mountains (Karadeniz Dağları)",
  category: "mountain_system",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "济甘那山口", lon: 39.32, lat: 40.62, elevation: 2030, kind: "peak" },
  bbox: [30.5, 40.0, 41.3, 41.6],
  axis: [[31.0, 41.1], [41.0, 41.0]],
  viewScale: 1.6,
  label: { lon: 36.0, lat: 41.7, rotation: 0 },
  source: "本都山脉：沿土耳其黑海南岸延伸的山系，古称本都地区因此得名，山体紧邻海岸陡然抬升、将湿润的黑海沿岸与干燥的中安纳托利亚高原分隔开；山系东段（东黑海山脉／卡奇卡尔山）海拔明显更高、发育现代冰川地貌，西段则相对低矮和缓（Britannica/Wikipedia WebSearch 2026）",
};

const CENTRAL_ANATOLIAN_PLATEAU: TerrainEntry = {
  id: "central-anatolian-plateau",
  nameZh: "中安纳托利亚高原",
  nameEn: "Central Anatolian Plateau",
  category: "plateau",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "安卡拉（高原核心城市）", lon: 32.86, lat: 39.93, elevation: 900, kind: "city" },
  bbox: [31.0, 37.5, 36.5, 41.0],
  viewScale: 2.2,
  label: { lon: 33.5, lat: 40.6, rotation: 0 },
  source: "中安纳托利亚高原：土耳其腹地一片相对平缓的高原，平均海拔600至1200米，南北分别被托罗斯山脉与本都山脉环绕，年降水量仅200至300毫米；高原上分布多个内流盆地，其中最大的两个是科尼亚平原与图兹湖盆地，是土耳其的农牧核心区（Britannica/newworldencyclopedia.org WebSearch 2026）",
};

const ALADAGLAR: TerrainEntry = {
  id: "aladaglar",
  nameZh: "阿拉达山地（东托罗斯支脉）",
  nameEn: "Aladağlar (Anti-Taurus)",
  category: "mountain_system",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "德米尔卡泽克峰", lon: 35.15, lat: 37.82, elevation: 3756, kind: "peak" },
  bbox: [34.9, 37.65, 35.35, 38.05],
  viewScale: 1.2,
  label: { lon: 35.15, lat: 38.12, rotation: 0 },
  source: "阿拉达山地：托罗斯山系东段一处石灰岩、大理岩与火山岩交织的高山地块，1995年设立阿拉达山地国家公园，公园平均海拔约3500米，园内4座山峰超过3700米，最高峰德米尔卡泽克峰海拔3756米，是托罗斯山系除西托罗斯外的最高点；地块内保留多处冰川作用形成的高山湖泊，山体因日落时泛红褐色而得名“阿拉达”（意为“绯红山”）（Wikipedia/nationalparksofturkey.com WebSearch 2026）",
};

const KACKAR_MOUNTAINS: TerrainEntry = {
  id: "kackar-mountains",
  nameZh: "卡奇卡尔山脉",
  nameEn: "Kaçkar Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "卡奇卡尔峰", lon: 41.17, lat: 40.82, elevation: 3937, kind: "peak" },
  bbox: [40.9, 40.55, 41.65, 41.1],
  axis: [[40.95, 40.65], [41.55, 41.0]],
  label: { lon: 41.25, lat: 41.15, rotation: -10 },
  source: "卡奇卡尔山脉：本都山脉东段海拔最高的一段，最高峰卡奇卡尔峰海拔3937米，山地高原部分区域也达约3000米，距黑海海岸仅约40公里；山系是土耳其冰川地貌最发育的地区之一，陡峭的岩质山峰间散布众多冰蚀湖，山坡覆盖茂密针叶林（Wikipedia/summitpost.org WebSearch 2026）",
};

const MOUNT_ARARAT: TerrainEntry = {
  id: "mount-ararat",
  nameZh: "阿拉拉特山",
  nameEn: "Mount Ararat (Ağrı Dağı)",
  category: "mountain_system",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "大阿拉拉特峰", lon: 44.30, lat: 39.70, elevation: 5137, kind: "peak" },
  bbox: [43.95, 39.50, 44.60, 39.90],
  viewScale: 1.2,
  label: { lon: 44.30, lat: 39.45, rotation: 0 },
  source: "阿拉拉特山：土耳其最高峰，官方名阿厄勒达（Ağrı Dağı），是一座休眠的复合式层状火山，海拔5137米，位于土耳其伊迪尔省与阿厄勒省交界、靠近土耳其与亚美尼亚边境一带；山体由大、小两座火山锥组成，小阿拉拉特峰海拔3896米，整个山体底部宽度约35公里，末次喷发记录于1840年（Wikipedia/newworldencyclopedia.org WebSearch 2026）",
};

const MOUNT_ERCIYES: TerrainEntry = {
  id: "mount-erciyes",
  nameZh: "埃尔吉耶斯火山",
  nameEn: "Mount Erciyes",
  category: "mountain_system",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "埃尔吉耶斯峰", lon: 35.45, lat: 38.52, elevation: 3917, kind: "peak" },
  bbox: [35.30, 38.40, 35.62, 38.62],
  label: { lon: 35.45, lat: 38.35, rotation: 0 },
  source: "埃尔吉耶斯火山：中安纳托利亚海拔最高的火山，海拔3917米，是一座周边散布众多单成因火山锥、熔岩穹丘与一处玛珥式火口湖的大型层状火山，距凯塞利市区约15至25公里；现代火山主体在更新世喷发形成，末次喷发约在公元前6880年前后，是休眠火山；火山灰堆积是卡帕多奇亚精灵烟囱地貌的物质来源之一（Wikipedia/mta.gov.tr WebSearch 2026）",
};

const NEMRUT_CALDERA_VAN: TerrainEntry = {
  id: "nemrut-caldera-van",
  nameZh: "内姆鲁特火山口湖（比特利斯）",
  nameEn: "Nemrut Caldera & Lake Nemrut (Bitlis)",
  category: "basin",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "内姆鲁特火口湖", lon: 42.23, lat: 38.65, elevation: 2247, kind: "lake" },
  bbox: [42.05, 38.53, 42.38, 38.78],
  label: { lon: 42.23, lat: 38.48, rotation: 0 },
  source: "内姆鲁特火山：比特利斯省塔特万附近的层状火山，山顶火山口塌陷形成一处新月形破火山口湖——内姆鲁特湖，湖面海拔约2247米、水深176米，是世界第二大、土耳其第一大火口湖；约60万年前该火山的熔岩流曾一度堵塞穆拉特河，是形成凡湖的原因之一。（注：此内姆鲁特火山位于凡湖以西的比特利斯省，与阿德亚曼省内姆鲁特山巨石人像考古遗址为同名不同地的两处地点）（earth.com/kureansiklopedi.com WebSearch 2026）",
};

const LAKE_VAN: TerrainEntry = {
  id: "lake-van",
  nameZh: "凡湖",
  nameEn: "Lake Van",
  category: "lake",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "凡湖", lon: 42.95, lat: 38.62, elevation: 1646, kind: "lake" },
  bbox: [42.50, 38.20, 43.55, 38.95],
  viewScale: 1.4,
  label: { lon: 42.95, lat: 39.05, rotation: 0 },
  source: "凡湖：土耳其面积最大的湖泊，面积约3764平方公里、蓄水量约607立方公里，湖面海拔约1646米；约60万年前内姆鲁特火山熔岩流阻断穆拉特河河道形成如今的封闭湖盆，是一处火山成因湖，也是全球最大的苏打（碱性）湖，湖水高度碱性、含盐量高，仅少数耐盐鱼类可以生存（isdr.org/Wikipedia WebSearch 2026）",
};

const LAKE_TUZ: TerrainEntry = {
  id: "lake-tuz",
  nameZh: "图兹湖（盐湖）",
  nameEn: "Lake Tuz (Tuz Gölü)",
  category: "lake",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "图兹湖", lon: 33.35, lat: 38.75, elevation: 905, kind: "salt-lake" },
  bbox: [32.95, 38.40, 33.75, 39.15],
  viewScale: 1.3,
  label: { lon: 33.35, lat: 39.25, rotation: 0 },
  source: "图兹湖：土耳其第二大湖，面积约1665平方公里，长约80公里、宽约50公里，但平均水深仅0.5米，冬春季蓄水后夏季大面积蒸发干涸、湖底覆盖一层约30厘米厚的盐层；含盐量约32%至33%，与死海相近，是全球盐度最高的湖泊之一，年产盐约30万吨、供应土耳其全国约七成食盐（Wikipedia/naclsalt.com WebSearch 2026）",
};

const KONYA_BASIN: TerrainEntry = {
  id: "konya-basin",
  nameZh: "科尼亚盆地",
  nameEn: "Konya Basin (Konya-Karaman Plain)",
  category: "basin",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "科尼亚（盆地核心城市）", lon: 32.48, lat: 37.87, elevation: 1020, kind: "city" },
  bbox: [31.5, 37.0, 34.2, 38.7],
  viewScale: 2.0,
  label: { lon: 32.5, lat: 36.8, rotation: 0 },
  source: "科尼亚盆地：中安纳托利亚高原上一处大型内流（封闭）盆地，面积约5万平方公里，盆地平坦部分多在900至1050米，北靠本都山系、南依托罗斯山脉；盆地内有图兹湖与贝谢希尔湖两处主要湖泊，因长期地下水过度开采，近年出现较多地表塌陷（天坑）现象（researchgate.net/link.springer.com WebSearch 2026）",
};

const PAMUKKALE_TRAVERTINES: TerrainEntry = {
  id: "pamukkale-travertines",
  nameZh: "棉花堡钙化梯田",
  nameEn: "Pamukkale Travertines",
  category: "hills",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "棉花堡钙化梯田", lon: 29.1189, lat: 37.9203, elevation: 360, kind: "peak" },
  bbox: [29.08, 37.90, 29.16, 37.945],
  label: { lon: 29.12, lat: 37.88, rotation: 0 },
  source: "棉花堡：代尼兹利地堑一处断层沿线的地热泉华台地，逾17处温泉（水温35至100摄氏度）沿断层涌出，富含碳酸氢钙的热水历经数千年沉积、结晶为洁白的碳酸钙（石灰华）层，塑造出一连串阶梯状梯田水池；整片泉华地貌长约2700米、宽约600米、高约160米，公元前2世纪起古希腊罗马城市希拉波利斯即建于台地顶端泉眼旁，1988年与希拉波利斯古城一同列入UNESCO世界遗产（geologyscience.com/Wikipedia WebSearch 2026）",
};

const CAPPADOCIA_FAIRY_CHIMNEYS: TerrainEntry = {
  id: "cappadocia-fairy-chimneys",
  nameZh: "卡帕多奇亚精灵烟囱地貌",
  nameEn: "Cappadocia Fairy Chimneys (Göreme)",
  category: "hills",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "格雷梅露天博物馆一带", lon: 34.8286, lat: 38.6431, elevation: 1150, kind: "peak" },
  bbox: [34.55, 38.55, 35.05, 38.78],
  viewScale: 1.3,
  label: { lon: 34.80, lat: 38.82, rotation: 0 },
  source: "卡帕多奇亚：中新世至上新世（约1000万至300万年前）埃尔吉耶斯、哈桑等火山多次喷发的厚层火山灰堆积、固结为松软的凝灰岩，局部夹杂更坚硬的玄武岩、安山岩或熔结凝灰岩盖层；此后构造抬升与气候变化令这些岩层暴露于雨水、河流与风的侵蚀，软质凝灰岩比坚硬盖层风化更快，逐渐雕琢出顶部戴“帽子”的锥状岩柱（精灵烟囱）；区域以埃尔吉耶斯山（3916米）与哈桑山（3253米）两座火山为界，涵盖内夫谢希尔、于尔居普与阿瓦诺斯之间的格雷梅国家公园，1985年列入UNESCO世界遗产（geologyin.com/whc.unesco.org WebSearch 2026）",
};

const IHLARA_VALLEY: TerrainEntry = {
  id: "ihlara-valley",
  nameZh: "伊赫拉拉峡谷",
  nameEn: "Ihlara Valley",
  category: "gorge",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "伊赫拉拉峡谷（梅伦迪兹河段）", lon: 34.31, lat: 38.25, elevation: 1250, kind: "gorge" },
  bbox: [34.25, 38.21, 34.42, 38.31],
  label: { lon: 34.31, lat: 38.17, rotation: 0 },
  source: "伊赫拉拉峡谷：卡帕多奇亚西南部一处深切峡谷，全长约15公里、最深处约150米，由发源于梅伦迪兹山、全长约60公里的梅伦迪兹河历经数千年侵蚀哈桑山喷发后堆积的火山岩层而成；峡谷内保存约50座拜占庭时期开凿于崖壁的岩凿教堂，是研究卡帕多奇亚地区岩凿聚落与早期基督教历史的重要地点（Wikipedia/visitcappadocia.com WebSearch 2026）",
};

const SAKLIKENT_GORGE: TerrainEntry = {
  id: "saklikent-gorge",
  nameZh: "萨克勒肯特峡谷",
  nameEn: "Saklıkent Gorge",
  category: "gorge",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "萨克勒肯特峡谷入口", lon: 29.360, lat: 36.548, elevation: 450, kind: "gorge" },
  bbox: [29.28, 36.48, 29.46, 36.62],
  label: { lon: 29.36, lat: 36.42, rotation: 0 },
  source: "萨克勒肯特峡谷：土耳其西南部费特希耶附近一处峡谷，深约300米、长约18公里，是土耳其最深的峡谷之一；峡谷因托罗斯山脉抬升引发地壳运动、河流持续侵蚀较软岩层而形成，；“萨克勒肯特”在土耳其语意为“隐藏之城”，1996年设立萨克勒肯特国家公园（Wikipedia/researchgate.net WebSearch 2026）",
};

const BOSPHORUS_STRAIT: TerrainEntry = {
  id: "bosphorus-strait",
  nameZh: "博斯普鲁斯海峡",
  nameEn: "Bosphorus Strait",
  category: "coast",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "博斯普鲁斯海峡（伊斯坦布尔段）", lon: 29.03, lat: 41.10, elevation: 0, kind: "city" },
  bbox: [28.92, 40.97, 29.20, 41.26],
  axis: [[29.15, 41.24], [28.98, 40.98]],
  label: { lon: 28.80, lat: 41.15, rotation: 0 },
  source: "博斯普鲁斯海峡：连接黑海与马尔马拉海的天然海峡，全长约31公里，宽度730米至3300米不等、最深处约110米，是亚洲与欧洲两大洲之间的传统地理分界之一；地质上该处第三纪时曾是河谷，第三纪末期被海水淹没形成海峡，伊斯坦布尔城即跨海峡两岸而建，是全球最繁忙的海上通道之一（marineinsight.com/Wikipedia WebSearch 2026）",
};

const AEGEAN_COAST_TURKEY: TerrainEntry = {
  id: "aegean-coast-turkey",
  nameZh: "爱琴海岸（土耳其段）",
  nameEn: "Aegean Coast (Turkey)",
  category: "coast",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "博德鲁姆半岛海岸", lon: 27.43, lat: 37.03, elevation: 0, kind: "city" },
  bbox: [26.60, 36.60, 28.05, 38.55],
  viewScale: 1.6,
  label: { lon: 26.90, lat: 38.65, rotation: 0 },
  source: "土耳其爱琴海岸：从达达尼尔海峡南口至博德鲁姆半岛一带的深切锯齿状海岸，沿岸半岛、海湾与近岸岛屿交错分布，是新构造运动中地壳伸展、断块沉降形成的沉溺海岸地貌；博德鲁姆半岛一带海岸线曲折、岬湾相间，是土耳其爱琴海旅游区的核心地带（Wikipedia WebSearch 2026）",
};

const LYCIAN_COAST: TerrainEntry = {
  id: "lycian-coast",
  nameZh: "利西亚海岸（绿松石海岸）",
  nameEn: "Lycian Coast (Turquoise Coast)",
  category: "coast",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "卡什海湾", lon: 29.64, lat: 36.20, elevation: 0, kind: "city" },
  bbox: [28.60, 36.10, 30.55, 36.65],
  viewScale: 1.4,
  label: { lon: 29.60, lat: 36.75, rotation: 0 },
  source: "利西亚海岸（绿松石海岸）：土耳其西南部特凯半岛沿岸一段以清澈碧蓝海水得名的地中海海岸，是托罗斯山脉西段直抵海边形成的高山临海地貌，海岸线由众多岬角、深水海湾与陡崖组成；历史上曾是古利西亚地区所在地，如今卡什、卡尔坎等沿海小镇是土耳其地中海旅游的代表地点之一（roughguides.com/spotblue.com WebSearch 2026）",
};

const BLACK_SEA_COAST_TURKEY: TerrainEntry = {
  id: "black-sea-coast-turkey",
  nameZh: "黑海海岸（土耳其段）",
  nameEn: "Black Sea Coast (Turkey)",
  category: "coast",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "特拉布宗海岸", lon: 39.72, lat: 41.00, elevation: 0, kind: "city" },
  bbox: [37.50, 40.90, 41.60, 41.65],
  viewScale: 1.8,
  label: { lon: 39.5, lat: 41.75, rotation: 0 },
  source: "土耳其黑海海岸：本都山脉紧邻海岸陡然抬升形成的狭长沿海地带，海岸线相对平直、少大型海湾，山地迎风坡年降水量可超2000毫米，是土耳其最湿润的地区；沿岸城市特拉布宗历史上曾是丝绸之路支线上的重要港口，山地内保存有建于悬崖上的苏美拉修道院等历史遗迹（Wikipedia/serendipityturkey.com WebSearch 2026）",
};

const MEKE_CRATER_LAKE: TerrainEntry = {
  id: "meke-crater-lake",
  nameZh: "梅凯火口湖",
  nameEn: "Lake Meke",
  category: "lake",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "梅凯火口湖", lon: 33.5967, lat: 37.6842, elevation: 1000, kind: "lake" },
  bbox: [33.55, 37.65, 33.65, 37.72],
  label: { lon: 33.60, lat: 37.60, rotation: 0 },
  source: "梅凯湖：科尼亚省卡拉皮纳尔火山田内一处双层火山湖，约400万年前一次火山喷发形成最初的破火山口湖，约9000年前岩浆遇地下水发生水汽爆炸、在湖内又形成一座嵌套的火山渣锥与内部玛珥火口湖，湖泊整体呈椭圆形、直径约1800米×1600米；卡拉皮纳尔火山田由5座火山渣锥、2处熔岩流与多处爆炸坑及玛珥组成，梅凯湖形似“土耳其蓝眼睛”护身符，是该火山田的标志性景观（mta.gov.tr/grokipedia.com WebSearch 2026）",
};

const EUPHRATES_HEADWATERS: TerrainEntry = {
  id: "euphrates-headwaters",
  nameZh: "幼发拉底河源区（卡拉苏—穆拉特河）",
  nameEn: "Euphrates Headwaters (Karasu–Murat)",
  category: "river",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "凯班（两源汇合处附近）", lon: 38.75, lat: 38.78, elevation: 850, kind: "city" },
  bbox: [39.0, 38.5, 42.5, 40.2],
  axis: [[41.5, 39.9], [38.75, 38.78]],
  viewScale: 1.5,
  label: { lon: 40.5, lat: 40.4, rotation: -15 },
  source: "幼发拉底河：西亚最长河流，由发源于埃尔祖鲁姆省杜姆卢山、长约450公里的西源卡拉苏河，与发源于阿拉拉特山以北、长约722公里的东源穆拉特河，在凯班以北约10公里处汇合后始称幼发拉底河；两条源流均流经东安纳托利亚高原山地地形，河流出土耳其后向东南注入美索不达米亚平原（Wikipedia/Britannica WebSearch 2026）",
};

const TIGRIS_HEADWATERS: TerrainEntry = {
  id: "tigris-headwaters",
  nameZh: "底格里斯河源区（哈扎尔湖）",
  nameEn: "Tigris Headwaters (Lake Hazar)",
  category: "river",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "哈扎尔湖", lon: 39.49, lat: 38.47, elevation: 1150, kind: "lake" },
  bbox: [39.30, 38.30, 40.50, 38.60],
  axis: [[40.30, 38.45], [39.49, 38.47]],
  label: { lon: 40.0, lat: 38.20, rotation: 0 },
  source: "底格里斯河：西亚主要河流之一，公认发源于埃拉泽省东南约22公里处、托罗斯山脉内海拔约1150米的裂谷湖——哈扎尔湖，湖水主要来自高山融雪补给；河流出土耳其境内约400公里后向东南流入美索不达米亚平原，是与幼发拉底河并称的两河流域主要水系之一（Britannica/Wikipedia WebSearch 2026）",
};

const KIZILIRMAK_RIVER: TerrainEntry = {
  id: "kizilirmak-river",
  nameZh: "克孜勒河（红河）",
  nameEn: "Kızılırmak River (Red River)",
  category: "river",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "阿瓦诺斯河湾", lon: 34.85, lat: 38.72, elevation: 950, kind: "city" },
  bbox: [34.9, 38.6, 39.6, 41.75],
  axis: [[39.4, 39.6], [35.9, 41.65]],
  viewScale: 1.4,
  label: { lon: 37.0, lat: 40.6, rotation: -20 },
  source: "克孜勒河：土耳其境内最长河流，全长约1355公里，古称哈勒斯河，发源于锡瓦斯省因拉尼耶附近克孜勒山、海拔约2000米处，流经锡瓦斯、开塞利、内夫谢希尔、安卡拉等省份，最终在黑海沿岸城市巴夫拉附近以宽阔三角洲注入黑海；河流因携带红色沉积物得名“克孜勒”（红），在卡帕多奇亚阿瓦诺斯一带形成显著的河湾，历史上是安纳托利亚重要的农业与文化分界线（alaturka.info/Wikipedia WebSearch 2026）",
};

const SALDA_LAKE: TerrainEntry = {
  id: "salda-lake",
  nameZh: "萨尔达湖",
  nameEn: "Lake Salda",
  category: "lake",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "萨尔达湖白色沙滩", lon: 29.6892, lat: 37.5486, elevation: 1140, kind: "lake" },
  bbox: [29.60, 37.50, 29.78, 37.60],
  label: { lon: 29.69, lat: 37.42, rotation: 0 },
  source: "萨尔达湖：土耳其西南部布尔杜尔省一处火山口成因湖泊，以清澈的蓂蓝色湖水与湖岸洁白的水菱镁矿（氢镁石）沉积滩地著称；湖岸白色沉积被认为由微生物参与形成的“微生物岩”经风化侵蚀而成，其矿物成分与NASA“毅力号”探测的火星耶泽罗撞击坑古湖沉积高度相似，2020至2021年NASA团队曾在此开展地质对比研究，是地球上少数几处公认的火星湖泊沉积类比地点之一（iugs-geoheritage.org/livescience.com WebSearch 2026）",
};

const CUKUROVA_PLAIN: TerrainEntry = {
  id: "cukurova-plain",
  nameZh: "丘库罗瓦平原",
  nameEn: "Çukurova Plain",
  category: "plain",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "阿达纳（平原核心城市）", lon: 35.33, lat: 36.90, elevation: 25, kind: "city" },
  bbox: [34.9, 36.5, 36.2, 37.35],
  viewScale: 1.4,
  label: { lon: 35.5, lat: 37.45, rotation: 0 },
  source: "丘库罗瓦平原：土耳其地中海东岸最大的冲积平原，由塞伊汉河、杰伊汉河与贝尔丹河携带的泥沙历经长期堆积形成，是地中海沿岸规模较大的三角洲平原体系之一，平原被东侧米西斯山与北、西两侧托罗斯山脉环绕；因土壤肥沃、灌溉水源充足，是土耳其最重要的农业区之一，主要城市阿达纳即坐落于平原核心（researchgate.net/tandfonline.com WebSearch 2026）",
};

const LAKE_BEYSEHIR: TerrainEntry = {
  id: "lake-beysehir",
  nameZh: "贝谢希尔湖",
  nameEn: "Lake Beyşehir",
  category: "lake",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "贝谢希尔湖", lon: 31.53, lat: 37.68, elevation: 1121, kind: "lake" },
  bbox: [31.30, 37.50, 31.85, 38.05],
  viewScale: 1.1,
  label: { lon: 31.53, lat: 38.15, rotation: 0 },
  source: "贝谢希尔湖：土耳其最大的淡水湖，也是地中海流域最大的淡水湖，面积约650平方公里、长约45公里、宽约20公里，平均水深5至6米；湖泊水源主要来自苏丹山与阿纳马斯山的溪流补给，湖内散布32座大小不一的岛屿，是重要的候鸟栖息地，1993年设立贝谢希尔湖国家公园（geovillages.fandom.com/thekonyanews.com WebSearch 2026）",
};

const ULUDAG: TerrainEntry = {
  id: "uludag",
  nameZh: "乌鲁山",
  nameEn: "Uludağ",
  category: "mountain_system",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "乌鲁山主峰", lon: 29.13, lat: 40.08, elevation: 2543, kind: "peak" },
  bbox: [29.00, 40.00, 29.30, 40.16],
  label: { lon: 29.13, lat: 39.96, rotation: 0 },
  source: "乌鲁山：西安纳托利亚地区最高峰，海拔2543米，紧邻布尔萨市南侧，是一处经断块抬升形成的花岗岩、片麻岩山体；山顶保留9处冰蚀湖（夏季多干涸），古称密细亚奥林匹斯山，1961年设立乌鲁山国家公园，是土耳其访客量最高的国家公园与首要滑雪胜地之一，年积雪期约150天（national-parks.org/nomadicniko.com WebSearch 2026）",
};

const MOUNT_SUPHAN: TerrainEntry = {
  id: "mount-suphan",
  nameZh: "苏芬火山",
  nameEn: "Mount Süphan",
  category: "mountain_system",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "苏芬火山峰", lon: 42.82, lat: 38.93, elevation: 4058, kind: "peak" },
  bbox: [42.65, 38.83, 43.00, 39.05],
  label: { lon: 42.82, lat: 38.75, rotation: 0 },
  source: "苏芬火山：土耳其第三高峰、第二高火山，海拔4058米，位于凡湖以北的比特利斯省，是一座层状火山；山顶东西两峰之间有一处宽约1.5公里的洼地，洼地内分布两处小型湖泊；作为凡湖北岸的地标性火山，苏芬火山与南岸的内姆鲁特火山共同构成了这片火山成因湖泊区的骨架地貌（summitpost.org/peakvisor.com WebSearch 2026）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 亚洲 / 土耳其 =====
  TAURUS_MOUNTAINS, PONTUS_MOUNTAINS, CENTRAL_ANATOLIAN_PLATEAU,
  ALADAGLAR, KACKAR_MOUNTAINS, MOUNT_ARARAT, MOUNT_ERCIYES,
  NEMRUT_CALDERA_VAN, LAKE_VAN, LAKE_TUZ, KONYA_BASIN,
  PAMUKKALE_TRAVERTINES, CAPPADOCIA_FAIRY_CHIMNEYS,
  IHLARA_VALLEY, SAKLIKENT_GORGE,
  BOSPHORUS_STRAIT, AEGEAN_COAST_TURKEY, LYCIAN_COAST, BLACK_SEA_COAST_TURKEY,
  MEKE_CRATER_LAKE,
  EUPHRATES_HEADWATERS, TIGRIS_HEADWATERS, KIZILIRMAK_RIVER,
  SALDA_LAKE, CUKUROVA_PLAIN, LAKE_BEYSEHIR,
  ULUDAG, MOUNT_SUPHAN,
];
