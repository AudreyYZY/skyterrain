import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 非洲 / 纳米比亚
//
// 非洲首个收录国家，选定理由与另外五个候选各自推后的原因见
// docs/africa-country-selection-2026-09-18.md。
//
// 本国的来源格局与其它国家不同，写条目前必须知道：
//   · 地质调查局现站（mme.gov.na / gsn.gov.na）不稳定，但新版 MIME 出版页与搜索索引可取，
//     旧版 Geosite 单页也可经 Wayback 恢复；GSN 因而是本国地学内容的主力 1 级来源；
//   · 环境部已由 MET 改名 **MEFT**（meft.gov.na），旧域名已死、新域名有结构化公园页
//     （Park size / Proclamation / Natural features）—— 保护区面积与设立年份的 1 级来源；
//   · 拉姆萨尔网页版 418 反爬，但 `Ramsar-Sites-annotated-summary-Namibia.pdf` 返回 200，
//     742（沃尔维斯湾）/ 743（桑威奇）的面积、编号、中心点、指定日均出自它，其 RIS 信息为 1995 年口径。
//
// 红线（本国特别严）：`history` 段只写地质史、前现代史、保护区设立年份、UNESCO 列入；
// 殖民史、1904 年事件、独立战争一律不碰；跨境河流只写境内段、不提邻国国名。
// ============================================================

const NAMIB_DESERT: TerrainEntry = {
  id: "namib-desert",
  nameZh: "纳米布沙漠",
  nameEn: "Namib Desert",
  category: "desert",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "戈巴贝布", lon: 15.0402, lat: -23.5612, elevation: 403, kind: "dune" },
  bbox: [11.7, -28.7, 16.6, -17.2],
  axis: [[16.45, -28.63], [11.85, -17.3]],
  viewScale: 2.0,
  label: { lon: 13.8, lat: -23.0, rotation: -15 },
  source:
    "纳米布沙漠：沿非洲西南岸延伸的海岸沙漠，纳米比亚境内为其主体段（按 repo 既定做法只写境内、不提邻国）。" +
    "锚点戈巴贝布在库伊塞布河畔，是沙海、砾石平原、河谷三者唯一能同框的位置（坐标 OSM Nominatim，海拔按 SRTM 30 m 采样 403 米，均 3 级）。" +
    "海岸线约 1,570 公里、内陆宽度 25–180 公里，取 UNESCO 纳米布沙海申报文本所附 MET（今 MEFT）规划文书（1 级）；" +
    "纳米布-诺克卢福特公园 49,768 平方公里、1907/1968/1979 三个年份取 MEFT 公园页（1 级）。" +
    "中文维基条目名为「纳米比沙漠」，与国名只差一字易读成「纳米比亚的沙漠」，本库取更通行的「纳米布沙漠」。" +
    "流传的「南北超过 2,000 公里」只有 3 级出处且是跨国口径，未采用。",
};

const NAMIB_SAND_SEA: TerrainEntry = {
  id: "namib-sand-sea",
  nameZh: "纳米布沙海",
  nameEn: "Namib Sand Sea",
  category: "desert",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "索苏斯盐沼", lon: 15.2877, lat: -24.7398, elevation: 568, kind: "dune" },
  bbox: [14.4, -26.2, 15.95, -23.3],
  axis: [[14.52, -23.4], [15.4, -25.6]],
  viewScale: 1.7,
  label: { lon: 15.0, lat: -24.8, rotation: 20 },
  source:
    "纳米布沙海：2013 年列入世界遗产名录的风成沙海，纳米比亚唯一的自然遗产。" +
    "遗产地面积 3,077,700 公顷、缓冲区 899,500 公顷、沿海近 300 公里、内陆约 100 公里、申报中心点 15.183°E/24.485°S，" +
    "全部取 UNESCO 申报文本 1430.pdf（缔约方 MET 署名，1 级）；注意另有「沙丘与沙质平原约 4,000,000 公顷」的管理区口径，两者不可混用。" +
    "锚点索苏斯盐沼坐标取维基数据 Q1932730（3 级），与申报中心点方位一致；海拔 SRTM 30 m 采样 568 米（3 级）。" +
    "中文维基把 Deadvlei 译作「處死湖」（把 dead 当动词，且 vlei 是盐沼不是湖），本库写「死亡盐沼」；" +
    "Sossusvlei 沿用「索苏斯盐沼」。锚点不用 Big Daddy 沙丘：其「325 米」只有旅游站来源，无 1–2 级出处。",
};

const SKELETON_COAST: TerrainEntry = {
  id: "skeleton-coast",
  nameZh: "骷髅海岸",
  nameEn: "Skeleton Coast",
  category: "coast",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "特勒斯湾", lon: 13.03, lat: -19.98, elevation: 2, kind: "dune" },
  bbox: [11.7, -21.3, 14.05, -17.2],
  axis: [[13.62, -21.18], [12.0, -18.43]],
  viewScale: 1.8,
  label: { lon: 12.7, lat: -19.5, rotation: -25 },
  source:
    "骷髅海岸：取 MEFT 骷髅海岸公园页的公园口径（1 级）—— 南自乌加布河向北 500 公里至库内内河、内陆约 40 公里，" +
    "面积 16,390 平方公里，1971 年初设、1973 年成今日形态；地衣逾 100 种、鸟类 306 种同页。" +
    "另有把多罗布一段也算进来的地理通称口径（3 级），本库不采用。" +
    "锚点特勒斯湾坐标 OSM Nominatim（3 级）—— 注意英文维基的同名条目指加拿大安大略省的 Terrace Bay，勿取错。" +
    "axis 两端取乌加布河口与弗里乌角（均为实测点）；库内内河口坐标 Nominatim 无命中，未作为端点写入，bbox 北界按公园北止于库内内河的 1 级描述取值。" +
    "流传的「一千多艘沉船」只有 3 级出处、MEFT 自身只写 a number of，未采用。",
};

const CENTRAL_NAMIB_GRAVEL_PLAINS: TerrainEntry = {
  id: "central-namib-gravel-plains",
  nameZh: "中纳米布砾石平原",
  nameEn: "Central Namib Gravel Plains",
  category: "desert",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "月球景观", lon: 14.7904, lat: -22.6899, elevation: 295, kind: "escarpment" },
  bbox: [14.35, -23.6, 15.9, -22.1],
  axis: [[14.55, -22.55], [15.7, -23.3]],
  viewScale: 1.4,
  label: { lon: 15.0, lat: -22.8, rotation: 10 },
  source:
    "中纳米布砾石平原：纳米布三大地貌单元里沙海与海岸之外的那一块，英文名 Central Namib gravel plains 见 UNESCO 申报文本所附 MET 规划文书（1 级）。" +
    "基岩准平原自海平面升至沙丘东缘 800–1,000 米，取申报文本（1 级，原文 bedrock peneplain）；" +
    "多罗布国家公园 7,800 平方公里、2010 年设立，取 MEFT 公园页（1 级），地衣原野与百岁兰同页。" +
    "锚点月球景观（斯瓦科普河谷）坐标 OSM（3 级），海拔 SRTM 30 m 采样 295 米（3 级）。" +
    "分类取 desert：docs/terrain-taxonomy.md §3.2 的 desert 判据原文就是「风成沙漠、沙地或**砾质戈壁**」，本条正是砾质戈壁；" +
    "而 plain 的判据是「**低平的堆积**地面」，本条恰恰是**剥蚀**面、且向内陆升到 800–1,000 米，两项都不合。\n" +
    "（曾一度判 plain，理由是「本国已有两个 desert 条目，归 plain 能让分类覆盖更完整」—— 那是覆盖率配平、不是分类判据，已纠正；" +
    "同批的 docs/africa-country-selection-2026-09-18.md 对卡拉哈里也写明「判 desert、不判 plain」，口径一致。）",
};

const SANDWICH_HARBOUR: TerrainEntry = {
  id: "sandwich-harbour",
  nameZh: "桑威奇潟湖",
  nameEn: "Sandwich Harbour",
  category: "coast",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "桑威奇潟湖", lon: 14.4831, lat: -23.3831, elevation: 0, kind: "lake" },
  bbox: [14.42, -23.5, 14.62, -23.28],
  label: { lon: 14.5, lat: -23.38, rotation: 0 },
  source:
    "桑威奇潟湖：拉姆萨尔湿地编号 743，面积 16,500 公顷，1995-08-23 指定，中心点 23°22′59″S/14°28′59″E —— " +
    "全部取拉姆萨尔秘书处导出的纳米比亚 RIS 摘要 PDF（1 级；网页版 418 反爬，摘要 PDF 可取），其 RIS 信息为 1995 年口径。" +
    "本条是本批唯一锚点坐标有 1 级出处的条目。水鸟约 75,000 只（曾达 400,000）、2008 年 1 月火烈鸟计数、" +
    "人类利用此处海洋资源可追溯至约 1,600 年前，取 UNESCO 申报文本 1430.pdf（1 级）。" +
    "中文「桑威奇」已被南桑威奇群岛占用，且申报文本原文写明它 no longer a functioning harbour，故取「桑威奇潟湖」而非「桑威奇港」。" +
    "名字来源有捕鲸船说与德语讹变说两说且都涉殖民语境，按红线不写。",
};

const WALVIS_BAY_LAGOON: TerrainEntry = {
  id: "walvis-bay-lagoon",
  nameZh: "沃尔维斯湾潟湖",
  nameEn: "Walvis Bay Lagoon",
  category: "coast",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "鹈鹕角", lon: 14.4487, lat: -22.868, elevation: 0, kind: "lake" },
  bbox: [14.4, -23.08, 14.6, -22.83],
  label: { lon: 14.48, lat: -22.95, rotation: 0 },
  source:
    "沃尔维斯湾潟湖：拉姆萨尔湿地编号 742，面积 12,600 公顷，1995-08-23 指定，中心点 23°00′S/14°27′E，行政区埃龙戈，" +
    "水鸟 37,000–79,000 只、常规出现的受胁鸟种 11 种 —— 全部取拉姆萨尔纳米比亚 RIS 摘要 PDF（1 级，1995 年口径，已 30 年未更新）。" +
    "锚点鹈鹕角沙嘴尖端坐标 OSM Nominatim（3 级，类型标为 cape）。" +
    "中文维基「鲸湾港」是城市条目，为免与将来的旅游模式城市条目撞名，地形条目取「沃尔维斯湾潟湖」、城市留给「鲸湾港／沃尔维斯湾」。" +
    "流传的「南部非洲最重要的海岸湿地」不可写 —— 拉姆萨尔原文的最高级带 One of 且给的是桑威奇、限定词只到 Namibia's；" +
    "「Dune 7 高 383 米」亦无 1–2 级出处，未采用。",
};

const BRANDBERG: TerrainEntry = {
  id: "brandberg",
  nameZh: "布兰德贝格山",
  nameEn: "Brandberg",
  category: "inselberg",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "国王岩峰", lon: 14.5776, lat: -21.1485, elevation: 2573, kind: "peak" },
  bbox: [14.4033, -21.2429, 14.6961, -21.0022],
  viewFrom: 135,
  label: { lon: 14.55, lat: -21.12, rotation: 0 },
  source:
    "布兰德贝格山：主峰国王岩峰海拔 2,573 米、为纳米比亚海平面以上最高点 —— 本轮升级为 1 级双源明文" +
    "（纳米比亚地质调查局 GSN Geosite 单页「standing 2573 m above sea level its central peak, Königstein, is the highest elevation in Namibia」+ UNESCO 预备名录 TL 1744）。" +
    "⚠️ 纳米比亚统计局不发布高程数据，这条的 1 级来源是 GSN 与 UNESCO、不是 NSA。另有 2,575／2,579／2,606 米流传，口径不明。" +
    "GSN 站点本身已死（mme.gov.na 无 A 记录；gsn.gov.na 有 A 记录但端口不通），全套 Geosite 说明书经 web.archive.org 取得 —— " +
    "这条通道推翻了 docs/africa-country-selection-2026-09-18.md 里「本国没有可用地质机构来源」的判定。" +
    "bbox 为 OSM natural=bare_rock 多边形实测外接矩形（约 30×27 公里），与 1 级「almost circular inselberg」及 2 级「直径 23 公里花岗岩体」吻合。" +
    "相对高差两个 1 级来源冲突（GSN >2,000 米 vs TL >1,800 米），正文取保守下界。" +
    "已列为国家纪念地、面积逾 450 平方公里，2002 年列入预备名录（TL 1744）；3 级来源称 1951 年划定，因会牵出当时治理主体，年份不写。" +
    "中文名撞车已核：「布兰德山」是奥地利 2,610 米山峰，中文维基另有「布兰德贝格山 (奥地利)」条目，而不带括号的「布兰德贝格山」中文维基判给本山，故沿用。" +
    "「世界最大花岗岩独石」在 1–2 级来源零命中，未采用。",
};

const SPITZKOPPE: TerrainEntry = {
  id: "spitzkoppe",
  nameZh: "斯皮茨科普山",
  nameEn: "Spitzkoppe",
  category: "inselberg",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "大斯皮茨科普峰", lon: 15.1688, lat: -21.8247, elevation: 1728, kind: "peak" },
  bbox: [15.02, -21.9, 15.23, -21.78],
  viewFrom: 135,
  label: { lon: 15.12, lat: -21.84, rotation: 25 },
  source:
    "斯皮茨科普山：GSN Geosite 单页标题为 SPITZKOPPE AND PONTOK MOUNTAINS，高出纳米布平原 600–700 米、侵入年代约 1.35 亿年前、围岩达马拉超群约 6.5 亿年（均 1 级，经 Wayback 取得）。" +
    "「非洲的马特洪峰」这个绰号有 1 级记录（GSN 原文 dubbed the 'Matterhorn of Africa'）。" +
    "锚点大斯皮茨科普峰坐标与海拔 1,728 米取 OSM（wikidata Q31784688，3 级）—— ⚠️ GSN 单页只给相对高差、未给绝对海拔。" +
    "bbox 由大／小斯皮茨科普与蓬托克山三个实测峰点外扩得到（中置信，非实测多边形：本轮 Overpass 三个镜像全部 406）。" +
    "**不给 axis**：与布兰德贝格／埃龙戈一致，按 docs/terrain-taxonomy.md §6.1 —— 这一族没有主脊线与走向，给不出 axis 本身就是信号；" +
    "且实测带 axis 时 deriveViewFrom 走在轴判定的边界上（northHalf 阈值只差约 0.0009°≈100 m），锚点微调就会让镜头翻到山体另一侧。改为显式 viewFrom。" +
    "中文名不稳定（另见斯皮兹考比／斯派特壳朴等译法，中文维基无条目），本库统一用「斯皮茨科普山」；" +
    "不用「斯普利特山谷」—— 既非山谷，又撞克罗地亚的斯普利特。不在 MEFT 32 个公园清单内（1 级否证），故不写保护区身份；" +
    "蓬托克山东端的 Bushman's Paradise 岩画点有国家纪念地地位（1 级 GSN），专名保留不译义。",
};

const ERONGO_MOUNTAINS: TerrainEntry = {
  id: "erongo-mountains",
  nameZh: "埃龙戈山",
  nameEn: "Erongo Mountains",
  category: "inselberg",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "霍恩施泰因峰", lon: 15.5285, lat: -21.728, elevation: 2319, kind: "peak" },
  bbox: [15.45, -21.82, 15.82, -21.48],
  viewFrom: 225,
  label: { lon: 15.63, lat: -21.66, rotation: 0 },
  source:
    "埃龙戈山：直径约 35 公里、高出周边达马拉准平原逾 1,000 米、位于奥马鲁鲁西南约 25 公里、环状辉绿岩岩脉（GSN 原文 dolerite）最厚 200 米、" +
    "成因事件 1.37–1.24 亿年前（全部 1 级 GSN Geosite「ERONGO」，经 Wayback 取得）。" +
    "分类判 inselberg 而非 mountain_system：GSN 记其为近圆形环状杂岩、四周为花岗岩断崖，**无主脊线、无走向**，mountain_system 的判据本身不成立；" +
    "也不判 basin —— 本库把 basin 给的是今日地形上呈洼地的破火山口，而埃龙戈是被剥蚀出来的岩核、地形上是凸的。" +
    "规模先例：哈萨克斯坦 bektau-ata（约 23×22 公里）、乌兹别克斯坦 tamdytau（约 75×44 公里）同为 inselberg。" +
    "⚠️ bbox 为中低置信推导值（按 GSN 的直径与方位 + OSM mountain_range 节点反推；Overpass 本轮不可用），**待在 CesiumMap 目视复核高亮块是否套住环形山体**。" +
    "最高峰霍恩施泰因 2,319 米只有 OSM 等 3 级来源，GSN 未给峰名与海拔，正文标明口径。" +
    "法定地位务必写对：**不是国家公园、也不是国家级保护区**（MEFT 32 个公园页实测无此条，1 级否证）；" +
    "实际是私人土地自愿联合的自然保护区（仅 3 级来源，成立年份与面积不写）。山中三处岩画洞穴已列为国家纪念地（1 级 GSN）。" +
    "同名的埃龙戈区是以本山命名的行政区，非同一对象。",
};

const FISH_RIVER_CANYON: TerrainEntry = {
  id: "fish-river-canyon",
  nameZh: "鱼河峡谷",
  nameEn: "Fish River Canyon",
  category: "gorge",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "霍巴斯主观景台", lon: 17.6061, lat: -27.6102, elevation: 900, kind: "gorge" },
  bbox: [17.35, -27.96, 17.95, -26.82],
  axis: [[17.79, -26.85], [17.49, -27.92]],
  viewScale: 1.3,
  label: { lon: 17.6, lat: -27.4, rotation: -15 },
  source:
    "鱼河峡谷：长度只写有口径的那一个 —— 56 公里，「沿河道量算，自最北观景台以北的第一处瀑布至楚达乌布三角点对面」（1 级 UNESCO 预备名录 TL 1745，2002）。" +
    "北段宽 8 公里／深 160–190 米、南段宽 5 公里／深 460–550 米，GSN 与 TL 1745 逐字一致（1 级双源）。" +
    "⚠️ 流传的「160 公里长」在 1–2 级来源零命中；「宽 27 公里」与 1 级冲突（那是外围地堑两侧断崖间距，不是峡谷宽度）；两者均未采用。" +
    "/Ai-/Ais 温泉禁猎公园 1968 年设立、1988 年并入洪斯山区扩界、面积 4,611 平方公里、2003 年 8 月签约设立跨境公园（1 级 MEFT）—— " +
    "跨境那条按本库既定做法只写签约事实，不写对岸国名与对方公园名；界河同样只写境内段。" +
    "温泉水温 60℃／上游硫泉 56℃、纳马语 /Ai-/Ais 意为「灼热的水」（1 级 MEFT 与 TL 一致）。" +
    "锚点霍巴斯主观景台坐标取 OSM valley 节点（中高置信）；**elevation 900 米是按上下两段深度反推的谷缘量级近似值、仅供相机高度补偿，不是引用数据**，正文不写此数。" +
    "「世界第二大峡谷」本轮又找到两个新的 1 级出处（GSN、TL 1745）共三个，但三个都不给单位、GSN 那句还把可量的 size 与不可量的 grandeur 捆在一起，维持不写；" +
    "「非洲最大天然峡谷」（MEFT，1 级）亦不写 —— 同样无单位，且青尼罗河峡谷深约 1,500 米、鱼河峡谷最深 460–550 米，以深度计明显不成立。" +
    "MEFT 的「历经 6 亿多年演化」与 GSN／TL 的分期口径完全不同，改写分期事实。" +
    "按 GSN／TL 的叙述，河与谷是同一个对象，故不再为「鱼河」单列 river 条目。" +
    "⚠️ bbox（约 59×126 公里）是自塞海姆一带到 /Ai-/Ais 温泉的**整条走廊**，**不是**正文那 56 公里量算段的范围 —— " +
    "正文已写明 56 公里的口径是「沿河道量算、自某瀑布至某三角点对面」，两者不是一回事，勿据 bbox 反推长度。",
};

const CAPE_CROSS: TerrainEntry = {
  id: "cape-cross",
  nameZh: "开普十字角",
  nameEn: "Cape Cross",
  category: "coast",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "开普十字角", lon: 13.9508, lat: -21.7728, elevation: 4, kind: "escarpment" },
  bbox: [13.9, -21.85, 14.05, -21.7],
  label: { lon: 13.97, lat: -21.78, rotation: 0 },
  source:
    "开普十字角：保护区面积 60 平方公里、1968 年设立、繁殖季（11–12 月）海豹数量可达 21 万只、" +
    "自然特征记为岩质海湾／沙滩／盐沼 —— 全部取 MEFT 开普十字海豹保护区页（1 级）。" +
    "1486 年葡萄牙航海者迪奥戈·康在此登陆并立石柱（padrão）、现地可见复制品、该区已列为国家遗产地，同页（1 级，属前现代史，可写）。" +
    "锚点坐标取英文维基 GeoData（3 级），海拔按 SRTM 30 m 采样 4 米（3 级）。" +
    "⚠️ MEFT 原文写「the world's largest breeding colony of Cape fur seals」，属无限定最高级、撞 check:claims 棘轮，正文降为「之一」。" +
    "🚫 不写 19 世纪的鸟粪采集与海豹产业、不写工人死亡（MEFT 页面都有，1 级，但属殖民期史）；不写当前的年度捕猎配额（属现行政策且会过期）。",
};

const KALAHARI_NAMIBIA: TerrainEntry = {
  id: "kalahari-namibia",
  nameZh: "卡拉哈里沙地",
  nameEn: "Kalahari Sandveld",
  category: "desert",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "斯坦普里特沙垄区", lon: 18.3973, lat: -24.349, elevation: 1169, kind: "dune" },
  bbox: [17.6, -27.0, 20.9, -19.6],
  axis: [[18.2, -26.6], [20.6, -21.0]],
  viewScale: 2.2,
  label: { lon: 19.2, lat: -23.6, rotation: -35 },
  source:
    "卡拉哈里沙地（纳米比亚东部）：UNESCO 纳米布沙海申报文本把这一带记为卡拉哈里盆地西缘，描述为" +
    "「linear, vegetated sand dunes relatively well stabilised by grassland vegetation and separated by wide interdune valleys」，" +
    "活动沙脊高度 <20 米、沿纳米比亚东部延伸逾 1,000 公里（1 级，1430.pdf 及其表 3.c.10）。" +
    "⚠️ 申报文本那句原文是「东部国境线」口径**且同句点了六个邻国国名** —— 数字可引、句子不可照抄，正文只写「纳米比亚东部」。" +
    "分类取 desert：taxonomy §3.2 的 desert 判据原文含「**沙地**」一档，中文地理学里「沙地」正指浑善达克这类半固定、有草被的风成沙丘区，与本条同型；" +
    "不取 grassland（判据要求地貌与植被一体，这里地貌是沙丘、植被只是覆盖层，归 grassland 会丢掉「红色线形沙垄 + 丘间谷地」这个唯一的空中识别特征）；" +
    "不取 plain（有规则起伏的沙垄阵，不是低平堆积面）。Tier T2。" +
    "⚠️ 锚点是村镇点不是地貌点（OSM 斯坦普里特，3 级）—— **1 级拿不到任何「卡拉哈里纳米比亚段」的官方命名地标**，MEFT 在这一带没有公园页；" +
    "axis 的沙垄走向按南部非洲线形沙垄的区域通例（NW–SE）推得，**无 1 级出处**。" +
    "中文维基条目名为「喀拉哈里沙漠」，本库用更常见的「卡拉哈里」；条目名取「沙地」而非「沙漠」是有意的，正文亦明写它不是流动沙漠。",
};

const KUISEB_CANYON: TerrainEntry = {
  id: "kuiseb-canyon",
  nameZh: "库伊塞布峡谷",
  nameEn: "Kuiseb Canyon",
  category: "gorge",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "库伊塞布峡谷观景台", lon: 15.7451, lat: -23.3419, elevation: 650, kind: "gorge" },
  bbox: [15.0, -23.7, 16.1, -23.2],
  axis: [[16.05, -23.52], [15.05, -23.56]],
  viewScale: 1.2,
  label: { lon: 15.6, lat: -23.42, rotation: -8 },
  source:
    "库伊塞布峡谷：源头在中部内陆高原、温得和克西南约 20 公里；大陡崖以西切入晚前寒武纪变质沉积岩成「deeply incised gorge」，" +
    "至距海约 65 公里处开阔，距海 20–40 公里之间谷宽约 1–2 公里；深切由第三纪末陆内抬升启动，第四纪多期堆积／再切交替 —— " +
    "全部取纳米比亚地质调查局 Memoir 9（1987，库伊塞布谷新生代层序，1 级，经 Wayback 取得）。" +
    "「河挡住沙海北进」双 1 级：Memoir 9「forms the northern boundary of the main Namib Sand Sea」+ 申报文本「intermittent Kuiseb floods impede the dunes ... from extending northward」。" +
    "锚点取 OSM C14 公路旁观景台节点，**并有 1 级交叉印证**：Memoir 9 把 Karpfenkliff 组层型地点记为 23°20′S/15°45′E，与该点相距约 1 公里。" +
    "**elevation 650 米是谷缘量级的近似值、仅供相机高度补偿，不是引用数据**，正文不写此数。" +
    "⚠️ **峡谷的深度与长度 1 级拿不到**（流传的「逾 200 米」「约 150 公里」均为 3 级），正文一律不写这两个数，只写 1 级能支撑的形态描述。" +
    "⚠️ axis 为推导值（Overpass 本轮不可用，未能从河道图层描线），bbox 西端按 Memoir 9「距海 65 公里处开阔」反算、与戈巴贝布位置互相印证。" +
    "中文名无权威定名（中文维基无条目），本库用音译「库伊塞布」。" +
    "🚫 **绝对不写** GSN 塞斯瑞姆单页里那句二战期间两位德国地质学家躲避拘留的轶事（二战 + 拘留 + 殖民期国籍，三重红线，最容易被当成有趣的地质学家故事顺手写进去）；" +
    "不写 MEFT 页里「托普纳尔人的居住权由维多利亚女王保障」与 1907 年设园动机那两段；不写公园内铀矿探矿权。",
};

const ETOSHA_PAN: TerrainEntry = {
  id: "etosha-pan",
  nameZh: "埃托沙盐沼",
  nameEn: "Etosha Pan",
  category: "lake",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "埃托沙盐沼中心", lon: 16.3667, lat: -18.7667, elevation: 1078, kind: "salt-lake" },
  bbox: [15.8405, -19.1423, 16.9184, -18.4237],
  axis: [[15.88, -18.82], [16.88, -18.72]],
  viewScale: 1.5,
  label: { lon: 16.37, lat: -18.78, rotation: -5 },
  source:
    "埃托沙盐沼：UNESCO 预备名录 TL 6095（2016，纳米比亚全国委员会提交）给出面积 4,730 平方公里、中心点 18°46′S/16°22′E、" +
    "海拔 1,071–1,086 米，并明确它是库韦莱水系位于奥万博盆地最低处的终端盐沼；雨季偶发浅水通常不超过 1 米（1 级）。" +
    "GSN Geosite 单页给出近似面积 4,760 平方公里，属不同取整口径；正文统一采用 UNESCO 的 4,730 平方公里，不混用。" +
    "GSN 记古湖约 500–700 万年前形成、约 200 万年前河流袭夺切断主要来水，随后蒸发与风蚀共同塑成今日盐沼（1 级）。" +
    "bbox 取 OSM relation 5694335 外接矩形，和 UNESCO 中心点、椭圆形描述一致（3 级几何；中心与高程为 1 级）。" +
    "埃托沙国家公园 1907 年设立、现面积 22,935 平方公里，取 MEFT 公园页（1 级）；公园面积不是盐沼面积，正文分开写。" +
    "⚠️ MEFT 与 UNESCO 均含多处最高级／排名句，正文只保留可量事实；中文取「盐沼」而非「湖」，因为它绝大多数时间是干燥盐壳，仅异常湿年形成浅水面。",
};

const WATERBERG_PLATEAU: TerrainEntry = {
  id: "waterberg-plateau",
  nameZh: "瓦特贝格高原",
  nameEn: "Waterberg Plateau",
  category: "plateau",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "瓦特贝格高原观景点", lon: 17.2412, lat: -20.5046, elevation: 1650, kind: "escarpment" },
  bbox: [17.0944, -20.6048, 17.5605, -20.2295],
  axis: [[17.12, -20.58], [17.52, -20.27]],
  viewScale: 1.15,
  label: { lon: 17.31, lat: -20.42, rotation: -38 },
  source:
    "瓦特贝格高原：MEFT 公园页给出 50 公里长的多孔砂岩山体、山脚永久泉群、公园面积 405 平方公里、1972 年设立（1 级）。" +
    "GSN Geosite『WATERBERG & MOUNT ETJO』记其平顶、最高面约 1,930 米；砂岩覆盖页岩与泥岩，地层约 2.2–1.8 亿年前沉积，" +
    "顶部为保存古沙丘形态的风成埃乔砂岩；雨水渗入多孔砂岩，在下伏致密泥岩界面重新出露成泉（1 级）。" +
    "分类取 plateau：主体是约 50 公里长、连续平顶且由砂岩硬盖保护的桌状高地；GSN 在区域成因讨论中亦把它列入 Karoo-age inselbergs，" +
    "但本库按今日形态与观察尺度判 plateau，不把整块长条高原降成单体岩丘。" +
    "bbox 取 OSM Waterberg Plateau Park way 79371984；锚点为 OSM Waterberg Plateau Viewpoint，海拔 1,650 米为相机补偿近似值、正文不写（3 级）。" +
    "🚫 MEFT 页面第 11 行整段涉及 1904 年事件，本文完全不用；history 只写地质、足迹与 1972 年设园。",
};

const ETENDEKA_PLATEAU: TerrainEntry = {
  id: "etendeka-plateau",
  nameZh: "埃滕德卡高原",
  nameEn: "Etendeka Plateau",
  category: "plateau",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "塔费尔贝格", lon: 14.1505, lat: -20.1713, elevation: 1602, kind: "peak" },
  bbox: [13.15, -21.05, 14.9, -18.95],
  axis: [[13.45, -20.8], [14.55, -19.15]],
  viewScale: 1.65,
  label: { lon: 14.0, lat: -20.0, rotation: -30 },
  source:
    "埃滕德卡高原：GSN Geosite 单页给出白垩纪火山岩地貌、胡阿布河至霍阿尼布河之间约 78,000 平方公里、东缘高出深切基底 700–800 米，" +
    "并解释 Etendeka 在当地语言中意为『平顶山之地』（1 级）。" +
    "约 80% 火山岩为玄武质熔岩，其余为层间石英粗面岩与少量粗面岩；塔费尔贝格保留厚度 880 米、原始最大地层厚度可能超过 1,000 米，" +
    "早期熔岩与下伏特韦弗尔方丹风成砂岩互层（1 级）。" +
    "成因取 GSN 的裂隙喷发解释：不是单一火山锥，而是冈瓦纳裂解期由大量裂隙反复溢流形成的洪流玄武岩高原；" +
    "与对岸同龄火山岩的跨洋对比只在概念段说明曾属同一火成省，不写现代国名。" +
    "锚点塔费尔贝格坐标与海拔取 OSM node 12382685756（3 级），其位置和 GSN『高原东南部』一致；bbox 按 GSN 两条河界与地质图概括，非实测多边形。" +
    "⚠️ GSN 单页把胡阿布变质杂岩年代写成约 1.6 million years，显系 1.6 billion 的排字错误；正文不引用这个数。",
};

const NAUKLUFT_MOUNTAINS: TerrainEntry = {
  id: "naukluft-mountains",
  nameZh: "奈克拉夫特山",
  nameEn: "Naukluft Mountains",
  category: "mountain_system",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "巴肯科普峰", lon: 16.1922, lat: -24.1568, elevation: 1978, kind: "peak" },
  bbox: [15.75, -24.5, 16.43, -23.75],
  axis: [[15.82, -24.35], [16.35, -23.85]],
  viewScale: 1.25,
  label: { lon: 16.08, lat: -24.1, rotation: -35 },
  source:
    "奈克拉夫特山：GSN Geosite『NAUKLUFT』明确分出三套单元——18–10 亿年前的基底、约 6 亿年前浅海沉积的纳马群砂岩与碳酸盐岩、" +
    "以及最上部由白云岩／灰岩／页岩／砾岩／石英岩组成的奈克拉夫特推覆体（1 级）。" +
    "推覆体原沉积于以北约 80 公里处，约 5.5–5.0 亿年前沿一层薄白云岩向南滑移到当前位置；后期碳酸盐岩溶蚀形成地下排水、泉池与钙华（1 级）。" +
    "MEFT 把奈克拉夫特山列为纳米布—奈克拉夫特公园自然特征；奈克拉夫特山斑马公园 1968 年设立，1979 年与既有沙漠公园及国有地合并（1 级）。" +
    "分类取 mountain_system：这是多片强烈褶皱、层状推覆体叠置成的山块，有连续山脊与深切谷地；不取 plateau（顶面并非单一平面），也不取 inselberg。" +
    "锚点巴肯科普峰坐标与 1,978 米海拔取 OSM node 8697337393（3 级）；bbox 按 GSN 卫星图与公园东界概括，非实测多边形。" +
    "🚫 GSN 单页末段涉及 20 世纪初武装冲突，本文完全不用；只保留石器与岩画的前现代记录。",
};

const KUNENE_RIVER_NAMIBIA: TerrainEntry = {
  id: "kunene-river-namibia",
  nameZh: "库内内河（纳米比亚段）",
  nameEn: "Kunene River (Namibian Reach)",
  category: "river",
  regionId: "africa",
  country: "namibia",
  landmark: { name: "埃普帕瀑布", lon: 13.2447, lat: -17.0016, elevation: 600, kind: "gorge" },
  bbox: [11.7, -17.75, 14.25, -16.92],
  axis: [[14.2181, -17.3931], [11.75, -17.25]],
  viewScale: 1.55,
  label: { lon: 13.15, lat: -17.24, rotation: -5 },
  source:
    "库内内河只收纳米比亚段：MEFT《Ruacana Landscape Profile》写明河在鲁阿卡纳进入纳米比亚，西部山地属于大陡崖，" +
    "地势急降在鲁阿卡纳最明显；谷地为冲积土，河水支撑沿岸小规模灌溉（1 级）。" +
    "MEFT 骷髅海岸公园页把库内内河口列为重要湿地，并以河口作为公园北端（1 级）；GSN 全国地质景点图列出鲁阿卡纳瀑布与埃普帕瀑布（1 级）。" +
    "GSN 埃托沙单页提供地质联系：古埃托沙湖约 500–700 万年前曾接收古库内内水系，约 200 万年前河流袭夺使主要来水转向西流，古湖随之萎缩（1 级）。" +
    "锚点埃普帕瀑布坐标取 OSM node 6084367435；鲁阿卡纳瀑布取 node 1486960514；河口约 11.75°E/17.25°S，" +
    "axis 与 bbox 只用于覆盖纳米比亚最北缘的下游走廊，海拔 600 米为相机补偿近似值，均属 3 级几何。" +
    "正文不写全河长度、流域跨境面积、上游工程或对岸国名；条目名明确加『纳米比亚段』，避免把整条河归入单一国家。",
};

export const TERRAINS: TerrainEntry[] = [
  NAMIB_DESERT,
  NAMIB_SAND_SEA,
  SKELETON_COAST,
  CENTRAL_NAMIB_GRAVEL_PLAINS,
  SANDWICH_HARBOUR,
  WALVIS_BAY_LAGOON,
  BRANDBERG,
  SPITZKOPPE,
  ERONGO_MOUNTAINS,
  FISH_RIVER_CANYON,
  CAPE_CROSS,
  KALAHARI_NAMIBIA,
  KUISEB_CANYON,
  ETOSHA_PAN,
  WATERBERG_PLATEAU,
  ETENDEKA_PLATEAU,
  NAUKLUFT_MOUNTAINS,
  KUNENE_RIVER_NAMIBIA,
];
