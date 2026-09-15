import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 波兰
// 东欧次区域首个国家；喀尔巴阡山脉（塔特拉/贝斯基德/皮耶尼内/别什恰迪）沿波兰—
// 斯洛伐克/乌克兰边境分布，仅收录波兰境内部分，中性表述、不涉主权
// ============================================================

const TATRA_MOUNTAINS: TerrainEntry = {
  id: "tatra-mountains",
  nameZh: "塔特拉山脉",
  nameEn: "Tatra Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "poland",
  landmark: { name: "雷西峰西北峰", lon: 20.0881, lat: 49.1794, elevation: 2499, kind: "peak" },
  bbox: [19.85, 49.15, 20.25, 49.35],
  viewScale: 1.2,
  label: { lon: 20.05, lat: 49.24, rotation: 0 },
  source: "塔特拉山脉：喀尔巴阡山脉海拔最高的部分，沿波兰与斯洛伐克边境分布；雷西峰西北峰海拔2499米是波兰全境最高点，山体中央峰（2503米）与东南峰均位于斯洛伐克一侧（波兰地形测量与地籍总局 GUGiK）",
};

const SUDETES_KARKONOSZE: TerrainEntry = {
  id: "sudetes-karkonosze",
  nameZh: "苏台德山脉·卡尔科诺谢山",
  nameEn: "Sudetes / Karkonosze",
  category: "mountain_system",
  regionId: "europe",
  country: "poland",
  landmark: { name: "希尼耶日卡峰", lon: 15.7397, lat: 50.7361, elevation: 1603, kind: "peak" },
  bbox: [15.55, 50.68, 15.85, 50.85],
  label: { lon: 15.70, lat: 50.76, rotation: 0 },
  source: "苏台德山脉：波兰西南部与捷克交界的古老山系，卡尔科诺谢山是其最高部分，希尼耶日卡峰海拔1603米，为苏台德山脉最高峰，山顶横跨波兰与捷克边境（波兰地形测量与地籍总局）",
};

const BIESZCZADY_MOUNTAINS: TerrainEntry = {
  id: "bieszczady-mountains",
  nameZh: "别什恰迪山脉",
  nameEn: "Bieszczady Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "poland",
  landmark: { name: "塔尔尼察峰", lon: 22.7397, lat: 49.0742, elevation: 1346, kind: "peak" },
  bbox: [22.40, 49.00, 22.90, 49.25],
  viewScale: 1.3,
  label: { lon: 22.65, lat: 49.12, rotation: 0 },
  source: "别什恰迪山脉：喀尔巴阡山脉东段位于波兰东南角的部分，与斯洛伐克、乌克兰接壤，塔尔尼察峰海拔1346米为波兰境内最高峰，山体植被以开阔的亚高山草甸“波沃尼纳”著称（波兰地形测量与地籍总局）",
};

const BESKIDY_MOUNTAINS: TerrainEntry = {
  id: "beskidy-mountains",
  nameZh: "贝斯基德山脉",
  nameEn: "Beskids",
  category: "mountain_system",
  regionId: "europe",
  country: "poland",
  landmark: { name: "巴比亚古拉峰", lon: 19.5289, lat: 49.5733, elevation: 1725, kind: "peak" },
  bbox: [19.35, 49.50, 19.70, 49.70],
  label: { lon: 19.52, lat: 49.60, rotation: 0 },
  source: "贝斯基德山脉：喀尔巴阡山脉外圈位于波兰南部的组成部分，巴比亚古拉峰海拔1725米，是贝斯基德山脉最高峰，山顶植被垂直分带明显，1977年列入联合国教科文组织人与生物圈保护区（波兰地形测量与地籍总局 / UNESCO）",
};

const PIENINY_MOUNTAINS: TerrainEntry = {
  id: "pieniny-mountains",
  nameZh: "皮耶尼内山",
  nameEn: "Pieniny",
  category: "mountain_system",
  regionId: "europe",
  country: "poland",
  landmark: { name: "三王冠峰", lon: 20.4167, lat: 49.4167, elevation: 982, kind: "peak" },
  bbox: [20.30, 49.38, 20.55, 49.48],
  label: { lon: 20.42, lat: 49.42, rotation: 0 },
  source: "皮耶尼内山：喀尔巴阡山脉中一片较为孤立的石灰岩、白云岩山地，三王冠峰海拔982米，因杜纳耶茨河切穿山体形成的峡谷而闻名，1932年设立波兰最早的国家公园之一（波兰地形测量与地籍总局）",
};

const SWIETOKRZYSKIE_MOUNTAINS: TerrainEntry = {
  id: "swietokrzyskie-mountains",
  nameZh: "圣十字山",
  nameEn: "Świętokrzyskie Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "poland",
  landmark: { name: "维希查峰", lon: 20.9539, lat: 50.8797, elevation: 612, kind: "peak" },
  bbox: [20.70, 50.80, 21.10, 50.95],
  label: { lon: 20.90, lat: 50.87, rotation: 0 },
  source: "圣十字山：波兰中南部一列古老的褶皱山系，基岩年代可追溯至古生代，是波兰境内地质年代最古老的山脉之一，与年轻的喀尔巴阡山脉、苏台德山脉形成鲜明的地质年代对比，维希查峰海拔612米为最高点（波兰地形测量与地籍总局）",
};

const KRAKOW_CZESTOCHOWA_UPLAND: TerrainEntry = {
  id: "krakow-czestochowa-upland",
  nameZh: "克拉科夫—琴斯托霍瓦高原",
  nameEn: "Kraków-Częstochowa Upland",
  category: "plateau",
  regionId: "europe",
  country: "poland",
  landmark: { name: "皮耶斯科瓦斯卡拉城堡", lon: 19.7986, lat: 50.2394, elevation: 400, kind: "escarpment" },
  bbox: [19.60, 50.10, 19.95, 50.60],
  axis: [[19.75, 50.15], [19.85, 50.55]],
  viewScale: 1.5,
  label: { lon: 19.78, lat: 50.35, rotation: -85 },
  source: "克拉科夫—琴斯托霍瓦高原（俗称“波兰侏罗”）：由侏罗纪石灰岩构成的狭长台地，长期喀斯特溶蚀形成大量孤立岩塔与洞穴，沿线分布中世纪城堡遗址串成的“雄鹰之巢小径”，皮耶斯科瓦斯卡拉城堡是其中保存最完好的一座（波兰地形测量与地籍总局）",
};

const GORY_STOLOWE: TerrainEntry = {
  id: "gory-stolowe",
  nameZh: "斯托沃韦山（桌山）",
  nameEn: "Table Mountains (Góry Stołowe)",
  category: "plateau",
  regionId: "europe",
  country: "poland",
  landmark: { name: "什切利涅茨维尔基峰", lon: 16.3517, lat: 50.4794, elevation: 919, kind: "peak" },
  bbox: [16.25, 50.42, 16.55, 50.55],
  label: { lon: 16.40, lat: 50.48, rotation: 0 },
  source: "斯托沃韦山：苏台德山脉东段一片顶部平坦的砂岩台地，因水平砂岩层长期风化侵蚀出崖壁陡立、顶部平坦的“桌状”轮廓而得名，什切利涅茨维尔基峰海拔919米，是波兰境内最典型的桌山地貌（波兰地形测量与地籍总局）",
};

const MASURIAN_LAKES: TerrainEntry = {
  id: "masurian-lakes",
  nameZh: "马祖里湖区",
  nameEn: "Masurian Lake District",
  category: "lake",
  regionId: "europe",
  country: "poland",
  landmark: { name: "希尼亚尔德维湖", lon: 21.7500, lat: 53.7333, elevation: 116, kind: "lake" },
  bbox: [21.30, 53.55, 22.30, 54.10],
  viewScale: 1.6,
  label: { lon: 21.80, lat: 53.85, rotation: 0 },
  source: "马祖里湖区：波兰东北部末次冰期冰川侵蚀形成的湖泊密集区，境内湖泊数以千计，希尼亚尔德维湖长约22公里，是波兰境内面积最大的湖泊，湖区因密布水道与运河而成为欧洲重要的内河航行与帆船活动区域（波兰地形测量与地籍总局）",
};

const LAKE_HANCZA: TerrainEntry = {
  id: "lake-hancza",
  nameZh: "汉查湖",
  nameEn: "Lake Hańcza",
  category: "lake",
  regionId: "europe",
  country: "poland",
  landmark: { name: "汉查湖", lon: 22.7833, lat: 54.2167, elevation: 227, kind: "lake" },
  bbox: [22.70, 54.15, 22.90, 54.28],
  label: { lon: 22.79, lat: 54.21, rotation: 0 },
  source: "汉查湖：位于波兰东北部苏瓦乌基地区的冰蚀湖，最大水深约108米，是波兰境内水深最大的湖泊，也是中欧地区最深的湖泊之一（波兰地形测量与地籍总局）",
};

const VISTULA_RIVER: TerrainEntry = {
  id: "vistula-river",
  nameZh: "维斯瓦河",
  nameEn: "Vistula",
  category: "river",
  regionId: "europe",
  country: "poland",
  landmark: { name: "华沙", lon: 21.0122, lat: 52.2297, elevation: 80, kind: "city" },
  bbox: [18.50, 49.50, 22.00, 54.50],
  axis: [[18.93, 49.55], [18.65, 54.35]],
  viewScale: 2.2,
  label: { lon: 20.20, lat: 51.80, rotation: -30 },
  source: "维斯瓦河：波兰最长的河流，全长约1047公里，发源于贝斯基德山脉，纵贯波兰全境流经克拉科夫、华沙等主要城市，最终在格但斯克附近注入波罗的海，是波兰的国家象征性河流（波兰地形测量与地籍总局）",
};

const ODER_RIVER: TerrainEntry = {
  id: "oder-river",
  nameZh: "奥得河",
  nameEn: "Oder",
  category: "river",
  regionId: "europe",
  country: "poland",
  landmark: { name: "什切青", lon: 14.5528, lat: 53.4285, elevation: 5, kind: "city" },
  bbox: [14.50, 50.00, 17.00, 53.50],
  axis: [[17.00, 50.05], [14.55, 53.40]],
  viewScale: 1.9,
  label: { lon: 15.50, lat: 51.50, rotation: -55 },
  source: "奥得河：波兰第二长河流，发源于捷克，下游构成波兰与德国的界河，最终经什切青附近注入波罗的海，是波兰西部重要的水运通道（波兰地形测量与地籍总局）",
};

const BUG_RIVER: TerrainEntry = {
  id: "bug-river",
  nameZh: "布格河",
  nameEn: "Bug",
  category: "river",
  regionId: "europe",
  country: "poland",
  landmark: { name: "弗沃达瓦", lon: 23.5500, lat: 51.5500, elevation: 160, kind: "city" },
  bbox: [23.00, 50.80, 24.10, 52.50],
  axis: [[23.60, 50.85], [23.50, 52.45]],
  viewScale: 1.5,
  label: { lon: 23.55, lat: 51.70, rotation: -80 },
  source: "布格河：发源于乌克兰，下游构成波兰与白俄罗斯、乌克兰的界河，是欧洲少数几条未经大规模水利调节、保留自然河道形态的大型河流之一（波兰地形测量与地籍总局）",
};

const NAREW_RIVER: TerrainEntry = {
  id: "narew-river",
  nameZh: "纳雷夫河",
  nameEn: "Narew",
  category: "river",
  regionId: "europe",
  country: "poland",
  landmark: { name: "纳雷夫国家公园（库罗沃段）", lon: 22.7500, lat: 52.9167, elevation: 105, kind: "meander" },
  bbox: [22.55, 52.80, 22.95, 53.05],
  label: { lon: 22.75, lat: 52.92, rotation: 0 },
  source: "纳雷夫河：流经纳雷夫国家公园的一段呈罕见的辫状水系形态，河道分汊成数十条并行的支流蜿蜒穿行于湿地沼泽之间，是欧洲低地地区保存最完好的辫状河流地貌之一，当地俗称“波兰的亚马逊”（波兰地形测量与地籍总局）",
};

const DUNAJEC_GORGE: TerrainEntry = {
  id: "dunajec-gorge",
  nameZh: "杜纳耶茨河峡谷",
  nameEn: "Dunajec River Gorge",
  category: "gorge",
  regionId: "europe",
  country: "poland",
  landmark: { name: "斯罗莫夫采漂流码头", lon: 20.3833, lat: 49.4167, elevation: 450, kind: "gorge" },
  bbox: [20.15, 49.38, 20.45, 49.45],
  axis: [[20.20, 49.42], [20.42, 49.40]],
  label: { lon: 20.30, lat: 49.41, rotation: -10 },
  source: "杜纳耶茨河峡谷：杜纳耶茨河切穿皮耶尼内山石灰岩、白云岩山体形成的峡谷，两岸崖壁高耸，是波兰—斯洛伐克跨境著名的木筏漂流河段（波兰地形测量与地籍总局）",
};

const OJCOW_VALLEY: TerrainEntry = {
  id: "ojcow-valley",
  nameZh: "奥伊苏夫谷地",
  nameEn: "Ojców Valley (Prądnik Valley)",
  category: "gorge",
  regionId: "europe",
  country: "poland",
  landmark: { name: "克拉科夫门岩", lon: 19.8300, lat: 50.2064, elevation: 380, kind: "gorge" },
  bbox: [19.78, 50.18, 19.90, 50.24],
  label: { lon: 19.84, lat: 50.21, rotation: 0 },
  source: "奥伊苏夫谷地：普隆德尼克河切穿克拉科夫—琴斯托霍瓦高原石灰岩形成的喀斯特峡谷，两岸密布孤立岩柱与溶洞，克拉科夫门岩是谷内最具代表性的天然岩石拱门，1956年设立波兰面积最小的国家公园（波兰地形测量与地籍总局）",
};

const SLOWINSKI_DUNES: TerrainEntry = {
  id: "slowinski-dunes",
  nameZh: "斯沃文斯基移动沙丘",
  nameEn: "Słowiński Moving Dunes",
  category: "coast",
  regionId: "europe",
  country: "poland",
  landmark: { name: "沃夫佐涅茨基山移动沙丘", lon: 17.4500, lat: 54.7333, elevation: 42, kind: "dune" },
  bbox: [17.30, 54.68, 17.65, 54.80],
  viewScale: 1.2,
  label: { lon: 17.48, lat: 54.74, rotation: 0 },
  source: "斯沃文斯基移动沙丘：波罗的海沿岸欧洲规模最大的活动沙丘群，沙丘高度可达42米，每年在盛行风作用下向内陆移动约3至10米，1967年设立斯沃文斯基国家公园保护这一独特地貌（波兰地形测量与地籍总局）",
};

const HEL_PENINSULA: TerrainEntry = {
  id: "hel-peninsula",
  nameZh: "海尔半岛",
  nameEn: "Hel Peninsula",
  category: "coast",
  regionId: "europe",
  country: "poland",
  landmark: { name: "海尔镇", lon: 18.8083, lat: 54.6081, elevation: 3, kind: "city" },
  bbox: [18.45, 54.58, 18.85, 54.78],
  axis: [[18.55, 54.75], [18.80, 54.61]],
  viewScale: 1.2,
  label: { lon: 18.65, lat: 54.68, rotation: -50 },
  source: "海尔半岛：一条长约35公里、最窄处不足200米的沙嘴，由沿岸流长期搬运沙粒堆积而成，将波罗的海与格但斯克湾分隔开来，末端的海尔镇是波兰重要的海滨度假地（波兰地形测量与地籍总局）",
};

const WOLIN_ISLAND: TerrainEntry = {
  id: "wolin-island",
  nameZh: "沃林岛",
  nameEn: "Wolin Island",
  category: "island",
  regionId: "europe",
  country: "poland",
  landmark: { name: "梅济兹德罗耶悬崖", lon: 14.4497, lat: 53.9294, elevation: 95, kind: "escarpment" },
  bbox: [14.15, 53.85, 14.55, 54.00],
  label: { lon: 14.35, lat: 53.92, rotation: 0 },
  source: "沃林岛：波兰西北部波罗的海沿岸岛屿，岛上沃林国家公园内一段长约15公里的海崖是波罗的海南岸少见的高崖海岸，公园内设有小型欧洲野牛保护区（波兰地形测量与地籍总局）",
};

const GREAT_POLISH_LOWLAND: TerrainEntry = {
  id: "great-polish-lowland",
  nameZh: "大波兰低地",
  nameEn: "Great Polish Lowland",
  category: "plain",
  regionId: "europe",
  country: "poland",
  landmark: { name: "波兹南", lon: 16.9252, lat: 52.4064, elevation: 70, kind: "city" },
  bbox: [15.50, 51.50, 19.00, 53.00],
  viewScale: 2.0,
  label: { lon: 17.30, lat: 52.30, rotation: 0 },
  source: "大波兰低地：中欧平原位于波兰境内的主体部分，由末次冰期冰川堆积物构成，地势平坦开阔，是波兰面积最大的农业区，波兹南等波兰中西部主要城市均坐落于此（波兰地形测量与地籍总局）",
};

const ZULAWY_WISLANE: TerrainEntry = {
  id: "zulawy-wislane",
  nameZh: "维斯瓦三角洲低地",
  nameEn: "Żuławy Wiślane (Vistula Delta Lowland)",
  category: "plain",
  regionId: "europe",
  country: "poland",
  landmark: { name: "新德富尔格但斯基", lon: 19.1167, lat: 54.2000, elevation: -1, kind: "delta" },
  bbox: [18.75, 53.95, 19.45, 54.40],
  viewScale: 1.3,
  label: { lon: 19.10, lat: 54.15, rotation: 0 },
  source: "维斯瓦三角洲低地：维斯瓦河入海口处的冲积三角洲平原，部分区域海拔低于海平面（最低处约海平面下1.8米），历史上经中世纪荷兰移民带来的堤坝排水技术围垦而成，是波兰境内地势最低的区域（波兰地形测量与地籍总局）",
};

const BIALOWIEZA_FOREST: TerrainEntry = {
  id: "bialowieza-forest",
  nameZh: "比亚沃维耶扎森林",
  nameEn: "Białowieża Forest",
  category: "hills",
  regionId: "europe",
  country: "poland",
  landmark: { name: "比亚沃维耶扎村", lon: 23.8667, lat: 52.7000, elevation: 160, kind: "city" },
  bbox: [23.50, 52.60, 23.95, 52.85],
  label: { lon: 23.72, lat: 52.72, rotation: 0 },
  source: "比亚沃维耶扎森林：欧洲平原地区保存最完好的原始森林之一，跨波兰与白俄罗斯边境，是欧洲野牛的重要栖息地，1979年列入联合国教科文组织世界遗产名录（UNESCO）",
};

const ROZTOCZE: TerrainEntry = {
  id: "roztocze",
  nameZh: "罗兹托切丘陵",
  nameEn: "Roztocze",
  category: "hills",
  regionId: "europe",
  country: "poland",
  landmark: { name: "兹维日涅茨", lon: 22.9667, lat: 50.6167, elevation: 310, kind: "city" },
  bbox: [22.75, 50.35, 23.55, 50.75],
  axis: [[22.80, 50.40], [23.50, 50.70]],
  viewScale: 1.4,
  label: { lon: 23.10, lat: 50.55, rotation: -30 },
  source: "罗兹托切丘陵：波兰东南部一条呈狭长带状延伸的石灰岩丘陵，森林覆盖率高，2019年经波兰、乌克兰跨境部分共同列入联合国教科文组织罗兹托切生物圈保护区（UNESCO）",
};

const KASHUBIAN_SWITZERLAND: TerrainEntry = {
  id: "kashubian-switzerland",
  nameZh: "卡舒比“瑞士”",
  nameEn: "Kashubian Switzerland",
  category: "hills",
  regionId: "europe",
  country: "poland",
  landmark: { name: "维耶日察峰", lon: 18.0894, lat: 54.2264, elevation: 329, kind: "peak" },
  bbox: [17.85, 54.10, 18.30, 54.35],
  label: { lon: 18.05, lat: 54.22, rotation: 0 },
  source: "卡舒比“瑞士”：波兰北部波美拉尼亚地区一片末次冰期终碛丘陵，湖泊与森林密布，维耶日察峰海拔329米，是波兰北部地势最高点，因起伏地貌与瑞士山地相似而得名（波兰地形测量与地籍总局）",
};

const BIEBRZA_MARSHES: TerrainEntry = {
  id: "biebrza-marshes",
  nameZh: "别布扎沼泽",
  nameEn: "Biebrza Marshes",
  category: "basin",
  regionId: "europe",
  country: "poland",
  landmark: { name: "奥索维茨要塞", lon: 22.6667, lat: 53.4833, elevation: 110, kind: "city" },
  bbox: [22.30, 53.30, 23.30, 53.75],
  viewScale: 1.6,
  label: { lon: 22.80, lat: 53.55, rotation: 0 },
  source: "别布扎沼泽：波兰面积最大的低位沼泽湿地，沿别布扎河谷分布，末次冰期后排水不畅形成大面积湿地生态系统，是欧洲现存最完整的低地河谷沼泽之一，1993年设立别布扎国家公园（波兰地形测量与地籍总局）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 波兰 =====
  TATRA_MOUNTAINS, SUDETES_KARKONOSZE, BIESZCZADY_MOUNTAINS,
  BESKIDY_MOUNTAINS, PIENINY_MOUNTAINS, SWIETOKRZYSKIE_MOUNTAINS,
  KRAKOW_CZESTOCHOWA_UPLAND, GORY_STOLOWE,
  MASURIAN_LAKES, LAKE_HANCZA,
  VISTULA_RIVER, ODER_RIVER, BUG_RIVER, NAREW_RIVER,
  DUNAJEC_GORGE, OJCOW_VALLEY,
  SLOWINSKI_DUNES, HEL_PENINSULA,
  WOLIN_ISLAND,
  GREAT_POLISH_LOWLAND, ZULAWY_WISLANE,
  BIALOWIEZA_FOREST, ROZTOCZE, KASHUBIAN_SWITZERLAND,
  BIEBRZA_MARSHES,
];
