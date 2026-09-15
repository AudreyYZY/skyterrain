import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 — 德国（regionId: "europe", country: "germany"）
// 坐标 / 高程据德国联邦地质与自然资源局（BGR）、各州地质调查局、国家公园管理局、UNESCO
// ============================================================

const BAVARIAN_ALPS: TerrainEntry = {
  id: "bavarian-alps",
  nameZh: "巴伐利亚阿尔卑斯山",
  nameEn: "Bavarian Alps",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "楚格峰", lon: 10.9866, lat: 47.4211, elevation: 2962, kind: "peak" },
  bbox: [10.7, 47.35, 11.35, 47.55],
  label: { lon: 10.98, lat: 47.53, rotation: 0 },
  source: "巴伐利亚阿尔卑斯山：北阿尔卑斯石灰岩带的最北缘，主体维特斯坦山由三叠纪浅海沉积的维特斯坦灰岩经褶皱抬升而成；楚格峰海拔2962m，是德国最高点，峰顶位于德国与奥地利边境上，山顶保留着德国仅存的两小片冰川之一（BGR / 巴伐利亚州测量局）",
};

const BLACK_FOREST: TerrainEntry = {
  id: "black-forest",
  nameZh: "黑森林",
  nameEn: "Black Forest / Schwarzwald",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "费尔德山", lon: 7.9836, lat: 47.8744, elevation: 1493, kind: "peak" },
  bbox: [7.6, 47.55, 8.5, 48.65],
  axis: [[7.9, 47.6], [8.25, 48.55]],
  viewScale: 1.4,
  label: { lon: 8.15, lat: 48.2, rotation: -25 },
  source: "黑森林：德国西南一条南北长约160km的老陆块山地，核心是约10亿年前形成、海西造山期重新固结的片麻岩，外围覆盖较年轻的砂岩；因林木深密、常年荫蔽而得名；最高点费尔德山1493m，是巴登-符腾堡州最高点，也是阿尔卑斯以北德国最高的山（BGR / LGRB）",
};

const HARZ_MOUNTAINS: TerrainEntry = {
  id: "harz-mountains",
  nameZh: "哈茨山",
  nameEn: "Harz Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "布罗肯峰", lon: 10.6156, lat: 51.7991, elevation: 1141, kind: "peak" },
  bbox: [10.3, 51.6, 11.1, 51.95],
  label: { lon: 10.5, lat: 51.92, rotation: 0 },
  source: "哈茨山：德国北部平原上孤立隆起的一片古生代山地，海西造山运动挤压抬升，最古老的岩层逾5.6亿年；主峰布罗肯峰1141m，是德国最北端的高山，因常年多雾（年均起雾天数近300天）、气候近似高出千米的高山而闻名，山顶由约2.9亿年前侵入的布罗肯花岗岩构成（BGR）",
};

const ERZGEBIRGE: TerrainEntry = {
  id: "erzgebirge",
  nameZh: "厄尔士山脉",
  nameEn: "Erzgebirge (Ore Mountains)",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "菲希特尔山", lon: 12.9525, lat: 50.4292, elevation: 1215, kind: "peak" },
  bbox: [12.0, 50.35, 13.5, 50.75],
  axis: [[12.05, 50.55], [13.4, 50.62]],
  viewScale: 1.3,
  label: { lon: 12.6, lat: 50.68, rotation: -6 },
  source: "厄尔士山脉：德国萨克森州与捷克交界一带的海西期山地，最古老岩石约5.7亿年；德国一侧最高点菲希特尔山1215m；因12—20世纪近800年几乎不间断的银、锡、钴矿开采而得名（意为“矿石山”），矿业塑造的采矿聚落、水利系统景观2019年跨德捷两国列入世界遗产（BGR / UNESCO）",
};

const BAVARIAN_FOREST: TerrainEntry = {
  id: "bavarian-forest",
  nameZh: "巴伐利亚森林",
  nameEn: "Bavarian Forest",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "大拉黑尔峰", lon: 13.4013, lat: 49.0894, elevation: 1453, kind: "peak" },
  bbox: [13.0, 48.85, 13.6, 49.2],
  label: { lon: 13.15, lat: 49.18, rotation: 0 },
  source: "巴伐利亚森林：波希米亚地块的德国一侧，海西造山期形成的花岗岩、片麻岩低山，长期夷平后在阿尔卑斯造山期又被抬升；大拉黑尔峰1453m 一带保留着大片花岗岩巨砾“石海”；1970年设立的巴伐利亚森林国家公园是德国第一个国家公园（BGR / 国家公园管理局）",
};

const RHON_MOUNTAINS: TerrainEntry = {
  id: "rhon-mountains",
  nameZh: "罗恩山",
  nameEn: "Rhön Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "瓦塞尔库佩峰", lon: 9.9308, lat: 50.4989, elevation: 950, kind: "peak" },
  bbox: [9.7, 50.35, 10.3, 50.65],
  label: { lon: 9.85, lat: 50.62, rotation: 0 },
  source: "罗恩山：黑森、巴伐利亚、图林根三州交界处一片新生代玄武质火山遗迹，外围三叠纪砂岩地带（称“丘陵罗恩”）散布着许多孤立火山颈；核心“高罗恩”一带最高点瓦塞尔库佩峰950m，是一座已完全停止活动的死火山遗迹；因视野开阔、气流稳定，20世纪初就是德国滑翔机运动的发源地（BGR）",
};

const EIFEL: TerrainEntry = {
  id: "eifel",
  nameZh: "艾费尔",
  nameEn: "Eifel",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "曼德沙伊德玛珥火山群", lon: 6.833, lat: 50.100, elevation: 500, kind: "peak" },
  bbox: [6.3, 50.0, 7.1, 50.6],
  viewScale: 1.4,
  label: { lon: 6.5, lat: 50.5, rotation: 0 },
  source: "艾费尔：德国西部莱茵地堑一侧的第四纪火山场，约70万年前以来喷发形成100多座火山渣锥、玛珥式火山口和穹丘，属大陆裂谷背景下的岩浆活动；地表许多低平的圆形火山口积水成“玛珥湖”，是欧洲大陆内部最典型的玛珥火山群之一（BGR / 火山艾费尔地质公园）",
};

const VOGELSBERG: TerrainEntry = {
  id: "vogelsberg",
  nameZh: "福格尔斯山",
  nameEn: "Vogelsberg",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "陶夫施泰因峰", lon: 9.2333, lat: 50.5333, elevation: 773, kind: "peak" },
  bbox: [9.0, 50.4, 9.5, 50.7],
  label: { lon: 9.15, lat: 50.68, rotation: 0 },
  source: "福格尔斯山：黑森州一片面积约2500平方公里的玄武岩高地，是中欧面积最大的连片火山岩地貌，约1900万年前由无数次玄武岩喷发层层堆叠而成，从中心的“上林”高原向外呈阶梯状台地下降；德国唯一的盾状火山地貌，最高点陶夫施泰因峰773m（BGR / 黑森州地质调查局）",
};

const THURINGIAN_FOREST: TerrainEntry = {
  id: "thuringian-forest",
  nameZh: "图林根森林",
  nameEn: "Thuringian Forest",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "大贝尔山", lon: 10.7439, lat: 50.6494, elevation: 983, kind: "peak" },
  bbox: [10.4, 50.55, 11.1, 50.85],
  axis: [[10.42, 50.83], [11.05, 50.58]],
  label: { lon: 10.7, lat: 50.82, rotation: -20 },
  source: "图林根森林：图林根州南部一条长约70km、走向西北—东南的古老山地，海西与撒克逊造山期形成，山体浑圆，两侧坡度较陡；最高点大贝尔山983m，山顶保留着图林根森林少数几片高山沼泽之一（BGR / 图林根州地质调查局）",
};

const SWABIAN_JURA: TerrainEntry = {
  id: "swabian-jura",
  nameZh: "施瓦本汝拉山",
  nameEn: "Swabian Jura",
  category: "plateau",
  regionId: "europe",
  country: "germany",
  landmark: { name: "阿尔布陡崖（巴特乌拉赫一带）", lon: 9.40, lat: 48.49, elevation: 750, kind: "escarpment" },
  bbox: [8.7, 48.15, 10.2, 48.7],
  axis: [[8.75, 48.2], [10.15, 48.65]],
  viewScale: 1.6,
  label: { lon: 9.3, lat: 48.6, rotation: 25 },
  source: "施瓦本汝拉山：德国西南一片喀斯特台地，长约220km，宽40—70km，海拔500—1000m；由约1.45—2亿年前侏罗纪浅海沉积的石灰岩构成，最上部“白汝拉”层形成一道连续近180km、高达300m的陡崖（阿尔布陡崖），西北坡陡峭俯瞰内卡河谷，东南坡缓缓过渡到多瑙河谷；台地上溶洞逾2500个（BGR / 施瓦本汝拉山世界地质公园）",
};

const FRANCONIAN_JURA: TerrainEntry = {
  id: "franconian-jura",
  nameZh: "弗兰肯汝拉山",
  nameEn: "Franconian Jura",
  category: "plateau",
  regionId: "europe",
  country: "germany",
  landmark: { name: "索伦霍芬石灰岩产地", lon: 10.9167, lat: 48.9167, elevation: 420, kind: "escarpment" },
  bbox: [10.5, 48.8, 11.8, 49.6],
  axis: [[10.6, 48.85], [11.7, 49.55]],
  viewScale: 1.5,
  label: { lon: 11.3, lat: 49.4, rotation: 30 },
  source: "弗兰肯汝拉山：施瓦本汝拉山向东北延续的同一套侏罗纪石灰岩台地，喀斯特地貌发育，多洞穴与干谷；索伦霍芬一带出产的“索伦霍芬石灰岩”颗粒极细，是特殊潟湖环境沉积形成，因保存了包括始祖鸟在内的大量精美化石而闻名，2022年被国际地质科学联合会列入首批“百大地质遗产”（BGR / IUGS）",
};

const SAXON_SWITZERLAND: TerrainEntry = {
  id: "saxon-switzerland",
  nameZh: "萨克森瑞士",
  nameEn: "Saxon Switzerland",
  category: "hills",
  regionId: "europe",
  country: "germany",
  landmark: { name: "巴斯泰岩", lon: 14.0956, lat: 50.9683, elevation: 305, kind: "escarpment" },
  bbox: [13.9, 50.85, 14.4, 51.05],
  label: { lon: 14.1, lat: 51.02, rotation: 0 },
  source: "萨克森瑞士（易北河砂岩山地）：约1亿年前浅海沉积的砂岩层被抬升后，易北河及支流沿裂隙下切、侵蚀成一片桌状山与深谷交错的地貌；巴斯泰岩是一组高出易北河约194m的砂岩塔群，18世纪末瑞士画家因景色联想到家乡阿尔卑斯而得名“萨克森瑞士”（BGR / 萨克森瑞士国家公园）",
};

const TEUTOBURG_FOREST: TerrainEntry = {
  id: "teutoburg-forest",
  nameZh: "条顿堡森林",
  nameEn: "Teutoburg Forest",
  category: "hills",
  regionId: "europe",
  country: "germany",
  landmark: { name: "埃克斯特施泰因岩柱群", lon: 8.9186, lat: 51.8703, elevation: 300, kind: "escarpment" },
  bbox: [8.3, 51.8, 8.95, 52.1],
  axis: [[8.32, 52.05], [8.9, 51.83]],
  viewScale: 1.3,
  label: { lon: 8.55, lat: 52.05, rotation: -35 },
  source: "条顿堡森林：德国西北部一条由多列平行山脊组成的单面山地带，约1.2亿年前白垩纪浅海沉积的砂岩因富含硅质胶结而抗侵蚀，被造山运动掀斜抬升后突出地表；埃克斯特施泰因是一组由这类硬砂岩风化残留形成的高耸岩柱。公元9年古罗马与日耳曼部落的条顿堡森林之战发生在这一带（具体地点学界仍有讨论），是欧洲古代史上的著名事件（BGR / 北莱茵-威斯特法伦州地质调查局）",
};

const NORTH_GERMAN_PLAIN: TerrainEntry = {
  id: "north-german-plain",
  nameZh: "北德平原",
  nameEn: "North German Plain",
  category: "plain",
  regionId: "europe",
  country: "germany",
  landmark: { name: "吕讷堡石楠草原一带", lon: 10.15, lat: 53.15, elevation: 80, kind: "escarpment" },
  bbox: [7.0, 51.5, 14.5, 54.5],
  viewScale: 2.2,
  label: { lon: 11.0, lat: 52.7, rotation: 0 },
  source: "北德平原：德国中部丘陵以北、南北两海之间的低地，第四纪多次冰期由斯堪的纳维亚冰盖反复覆盖、退却塑造——终碛垄呈西北—东南向断续分布，垄间是冰水沉积的沙质平原与无数冰蚀洼地积水成的小湖；吕讷堡石楠草原是这类冰碛沙地上发育的典型石楠灌丛景观（BGR）",
};

const NORDLINGER_RIES: TerrainEntry = {
  id: "nordlinger-ries",
  nameZh: "讷德林根里斯陨石坑",
  nameEn: "Nördlinger Ries",
  category: "basin",
  regionId: "europe",
  country: "germany",
  landmark: { name: "讷德林根古城（坑内）", lon: 10.4886, lat: 48.8514, elevation: 460, kind: "city" },
  bbox: [10.25, 48.75, 10.7, 48.95],
  label: { lon: 10.35, lat: 48.93, rotation: 0 },
  source: "讷德林根里斯陨石坑：直径约24km、约1480万年前一颗直径逾1km的小行星撞击形成的陨石坑，是欧洲保存最完好、研究最充分的撞击坑之一；撞击产生的冲击石英、苏依长石玻璃等矿物证据于1960年代确认了其撞击成因；讷德林根古城的中世纪城墙就完整地建在坑底平坦的盆地里（BGR / 里斯陨石坑博物馆）",
};

const RHINE_GORGE: TerrainEntry = {
  id: "rhine-gorge",
  nameZh: "莱茵河峡谷",
  nameEn: "Rhine Gorge",
  category: "gorge",
  regionId: "europe",
  country: "germany",
  landmark: { name: "罗蕾莱岩", lon: 7.7297, lat: 50.1428, elevation: 132, kind: "gorge" },
  bbox: [7.55, 49.95, 7.95, 50.38],
  axis: [[7.60, 50.35], [7.90, 49.97]],
  label: { lon: 7.65, lat: 50.30, rotation: 55 },
  source: "莱茵河峡谷（中莱茵河谷）：科布伦茨与宾根之间约65km的河段，莱茵河切穿约4亿年前泥盆纪褶皱形成的莱茵片岩山地；罗蕾莱岩是河道最窄（约130m）、最深处，因岩体是抗蚀的石英岩与板岩、比周边岩石更硬而在河谷持续拓宽过程中残留突出；沿岸城堡林立，2002年列入世界文化遗产（UNESCO / BGR）",
};

const DANUBE_GORGE: TerrainEntry = {
  id: "danube-gorge",
  nameZh: "多瑙河峡谷（魏尔滕堡峡）",
  nameEn: "Danube Gorge (Weltenburg Narrows)",
  category: "gorge",
  regionId: "europe",
  country: "germany",
  landmark: { name: "魏尔滕堡修道院峡口", lon: 11.8333, lat: 48.9083, elevation: 400, kind: "gorge" },
  bbox: [11.75, 48.87, 11.95, 48.95],
  label: { lon: 11.8, lat: 48.94, rotation: 0 },
  source: "多瑙河峡谷：弗兰肯汝拉山南缘，多瑙河切穿约1.5亿年前侏罗纪珊瑚礁灰岩形成的一段长约5km、崖壁高达70m的峡谷；约20万年前古多瑙河的一条支流沿灰岩裂隙下切形成今天的河道；峡谷内的魏尔滕堡修道院据传是巴伐利亚最古老的修道院之一，1978年获欧洲保护地文凭（BGR / 凯尔海姆旅游局）",
};

const MOSELLE_VALLEY: TerrainEntry = {
  id: "moselle-valley",
  nameZh: "摩泽尔河谷",
  nameEn: "Moselle Valley",
  category: "valley",
  regionId: "europe",
  country: "germany",
  landmark: { name: "贝恩卡斯特尔-库斯一带河曲", lon: 7.0708, lat: 49.9167, elevation: 110, kind: "meander" },
  bbox: [6.6, 49.7, 7.6, 50.2],
  axis: [[7.6, 49.75], [6.65, 50.15]],
  viewScale: 1.4,
  label: { lon: 7.1, lat: 50.05, rotation: 20 },
  source: "摩泽尔河谷：摩泽尔河下切泥盆纪板岩形成的深谷，河道极度蜿蜒——直线距离约减半的河段实际河长翻倍；谷坡最陡处近70°，是世界上最陡的葡萄园坡地之一，板岩土壤白天吸热、夜间缓慢释放，利于雷司令葡萄成熟；德国最古老的葡萄种植区，传统可追溯至古罗马时期（BGR / 摩泽尔葡萄酒协会）",
};

const ELBE_RIVER: TerrainEntry = {
  id: "elbe-river",
  nameZh: "易北河",
  nameEn: "Elbe River",
  category: "river",
  regionId: "europe",
  country: "germany",
  landmark: { name: "德累斯顿易北河谷", lon: 13.74, lat: 51.05, elevation: 110, kind: "meander" },
  bbox: [11.9, 51.0, 13.9, 53.9],
  axis: [[13.7, 51.05], [9.9, 53.55]],
  viewScale: 1.6,
  label: { lon: 12.5, lat: 52.3, rotation: -35 },
  source: "易北河：发源于捷克克尔科诺谢山，全长约1094km，其中约727km流经德国，向西北流经德累斯顿、马格德堡，在汉堡附近成为受潮汐影响的宽阔入海口，最终注入北海；历史上是中欧重要的内河航运通道，德累斯顿一段两岸保留着巴洛克城市天际线与河谷葡萄园（BGR / 联邦水道与航运局）",
};

const SPREEWALD: TerrainEntry = {
  id: "spreewald",
  nameZh: "施普雷森林",
  nameEn: "Spreewald",
  category: "river",
  regionId: "europe",
  country: "germany",
  landmark: { name: "吕贝瑙运河码头", lon: 13.95, lat: 51.8667, elevation: 55, kind: "meander" },
  bbox: [13.7, 51.7, 14.2, 52.05],
  label: { lon: 13.85, lat: 52.0, rotation: 0 },
  source: "施普雷森林：柏林东南施普雷河流经的一片内陆三角洲，末次冰期冰川消融形成的低平洼地让河流分汊成200多条自然与人工水道，总长约1500km，穿行于赤杨林与湿草甸之间；传统运输和农业靠平底木船（Kahn）沿水道进行，1991年列为联合国教科文组织生物圈保护区（UNESCO）",
};

const CHIEMSEE: TerrainEntry = {
  id: "chiemsee",
  nameZh: "基姆湖",
  nameEn: "Chiemsee",
  category: "lake",
  regionId: "europe",
  country: "germany",
  landmark: { name: "基姆湖", lon: 12.4167, lat: 47.8667, elevation: 518, kind: "lake" },
  bbox: [12.35, 47.82, 12.52, 47.92],
  label: { lon: 12.42, lat: 47.91, rotation: 0 },
  source: "基姆湖：巴伐利亚州最大的湖泊、德国第三大湖，约1万年前末次冰期一条冰舌刨蚀出的槽形谷地，冰川退却后积水成湖，湖面积约80平方公里，一度是现在的三倍大；湖中海伦岛上的赫伦基姆湖宫是巴伐利亚国王路德维希二世仿凡尔赛宫兴建的行宫（Bayerisches Landesamt für Umwelt）",
};

const MURITZ: TerrainEntry = {
  id: "muritz",
  nameZh: "米里茨湖",
  nameEn: "Müritz",
  category: "lake",
  regionId: "europe",
  country: "germany",
  landmark: { name: "米里茨湖", lon: 12.7167, lat: 53.4167, elevation: 62, kind: "lake" },
  bbox: [12.6, 53.33, 12.85, 53.5],
  label: { lon: 12.65, lat: 53.49, rotation: 0 },
  source: "米里茨湖：面积约117平方公里，是完全在德国境内的最大湖泊（仅次于跨境的博登湖）；由末次冰期冰川刨蚀、冰碛物拦蓄形成，所在的梅克伦堡湖区第四纪冰川作用留下了上千个大小湖泊；米里茨国家公园是德国大陆面积最大的国家公园之一（Nationalpark Müritz）",
};

const LAACHER_SEE: TerrainEntry = {
  id: "laacher-see",
  nameZh: "拉赫湖",
  nameEn: "Laacher See",
  category: "lake",
  regionId: "europe",
  country: "germany",
  landmark: { name: "拉赫湖", lon: 7.2683, lat: 50.4133, elevation: 275, kind: "lake" },
  bbox: [7.20, 50.38, 7.34, 50.44],
  label: { lon: 7.26, lat: 50.44, rotation: 0 },
  source: "拉赫湖：艾费尔火山场中最年轻的一次大喷发（约1.29万年前）留下的破火山口积水而成，喷发规模与1991年皮纳图博火山相当，喷出物质向东远达约400km；虽常被俗称为“玛珥湖”，严格地质定义上它是岩浆房排空后地表塌陷形成的破火山口湖，而非爆炸挖掘出的玛珥；湖东南岸至今有二氧化碳气体从地下渗出（地震监测显示岩浆活动尚未完全停止）（BGR）",
};

const WADDEN_SEA: TerrainEntry = {
  id: "wadden-sea",
  nameZh: "瓦登海",
  nameEn: "Wadden Sea",
  category: "coast",
  regionId: "europe",
  country: "germany",
  landmark: { name: "北弗里西亚潮滩（叙尔特岛一带）", lon: 8.5, lat: 54.6, elevation: 0, kind: "escarpment" },
  bbox: [6.5, 53.3, 9.0, 55.1],
  axis: [[6.6, 53.4], [8.9, 55.0]],
  viewScale: 1.8,
  label: { lon: 7.6, lat: 54.9, rotation: 0 },
  source: "瓦登海：北海东南岸一片世界最大的连续潮间带滩涂，绵延荷兰、德国、丹麦三国海岸，由潮汐水道、沙洲、海草床、盐沼与堡状沙岛共同构成；德国一段沿岸有东弗里西亚、北弗里西亚两串堡状沙岛，退潮时大片滩涂出露；2009年德国与荷兰段、2014年丹麦段先后列入世界自然遗产（UNESCO）",
};

const RUGEN_CHALK_CLIFFS: TerrainEntry = {
  id: "rugen-chalk-cliffs",
  nameZh: "吕根岛白垩崖",
  nameEn: "Rügen Chalk Cliffs",
  category: "coast",
  regionId: "europe",
  country: "germany",
  landmark: { name: "王座崖（柯尼希施图尔）", lon: 13.6461, lat: 54.5578, elevation: 118, kind: "escarpment" },
  bbox: [13.55, 54.50, 13.75, 54.65],
  label: { lon: 13.62, lat: 54.63, rotation: 0 },
  source: "吕根岛白垩崖：波罗的海最大岛屿吕根岛东北岸一段长约12km、最高118m的白垩崖，由约7000万年前晚白垩世海洋微体藻类骨骼堆积成的白垩岩构成；海浪持续侵蚀松软的白垩，崖体不断崩塌后退，浪蚀出的燧石因更耐蚀而铺满崖下海滩，是亚斯蒙德国家公园的核心景观（BGR / 亚斯蒙德国家公园）",
};

const HELGOLAND: TerrainEntry = {
  id: "helgoland",
  nameZh: "黑尔戈兰岛",
  nameEn: "Helgoland",
  category: "island",
  regionId: "europe",
  country: "germany",
  landmark: { name: "黑尔戈兰红色砂岩崖", lon: 7.8875, lat: 54.1842, elevation: 56, kind: "island" },
  bbox: [7.84, 54.16, 7.93, 54.21],
  label: { lon: 7.87, lat: 54.20, rotation: 0 },
  source: "黑尔戈兰岛：德国唯一一座远离大陆的离岸岛屿，距最近海岸约50km；岛屿主体（“上地”）是一块早三叠世红色砂岩台地，四周被高约56m的红色崖壁环绕，在以沙质、泥质海岸为主的德国北海沿岸极为罕见；退潮时可步行前往的沙洲“杜纳”岛是海豹的重要栖息地（BGR）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 德国 =====
  BAVARIAN_ALPS, BLACK_FOREST, HARZ_MOUNTAINS, ERZGEBIRGE, BAVARIAN_FOREST,
  RHON_MOUNTAINS, EIFEL, VOGELSBERG, THURINGIAN_FOREST,
  SWABIAN_JURA, FRANCONIAN_JURA,
  SAXON_SWITZERLAND, TEUTOBURG_FOREST,
  NORTH_GERMAN_PLAIN,
  NORDLINGER_RIES,
  RHINE_GORGE, DANUBE_GORGE,
  MOSELLE_VALLEY,
  ELBE_RIVER, SPREEWALD,
  CHIEMSEE, MURITZ, LAACHER_SEE,
  WADDEN_SEA, RUGEN_CHALK_CLIFFS,
  HELGOLAND,
];
