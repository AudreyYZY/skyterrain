import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 亚洲 / 韩国
// 东亚次区域第三个国家（中国、日本之后）；独岛/竹岛主权争议岛屿不收录，
// 与日本注册表的排除原则对称；东海/日本海命名争议一律回避海域专有名称，
// 只用"朝鲜半岛以东海域"等中性方位表述
// ============================================================

const TAEBAEK_MOUNTAINS: TerrainEntry = {
  id: "taebaek-mountains",
  nameZh: "太白山脉",
  nameEn: "Taebaek Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "太白山天祭坛", lon: 128.9161, lat: 37.0958, elevation: 1567, kind: "peak" },
  bbox: [128.55, 36.95, 129.15, 38.15],
  axis: [[129.05, 38.10], [128.95, 37.00]],
  viewScale: 1.2,
  label: { lon: 128.95, lat: 37.55, rotation: -80 },
  source: "太白山脉：沿朝鲜半岛东部纵贯南北的骨架山脉，是韩国汉江与洛东江两大水系的共同发源地，主峰太白山(1567米)山顶天祭坛自古为祭天场所（韩国国立公园公团/韩国地质资源研究院KIGAM）",
};

const SEORAKSAN: TerrainEntry = {
  id: "seoraksan",
  nameZh: "雪岳山",
  nameEn: "Seoraksan",
  category: "mountain_system",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "大青峰", lon: 128.4657, lat: 38.1191, elevation: 1708, kind: "peak" },
  bbox: [128.35, 38.05, 128.60, 38.20],
  label: { lon: 128.47, lat: 38.12, rotation: 0 },
  source: "雪岳山：韩国第三高峰(1708米)，花岗岩峰林与深切峡谷发育典型，1965年设为天然纪念保护区，1982年列入联合国教科文组织生物圈保护区（韩国国立公园公团/UNESCO）",
};

const JIRISAN: TerrainEntry = {
  id: "jirisan",
  nameZh: "智异山",
  nameEn: "Jirisan",
  category: "mountain_system",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "天王峰", lon: 127.7306, lat: 35.3372, elevation: 1915, kind: "peak" },
  bbox: [127.40, 35.15, 127.85, 35.45],
  label: { lon: 127.65, lat: 35.30, rotation: 0 },
  source: "智异山：韩国内陆最高峰(1915米)，1967年设为韩国第一座国家公园，山体横跨全罗南道、全北特别自治道、庆尚南道三道（韩国国立公园公团）",
};

const SONGNISAN: TerrainEntry = {
  id: "songnisan",
  nameZh: "俗离山",
  nameEn: "Songnisan",
  category: "mountain_system",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "天皇峰", lon: 127.8670, lat: 36.5406, elevation: 1058, kind: "peak" },
  bbox: [127.75, 36.45, 127.95, 36.60],
  label: { lon: 127.85, lat: 36.53, rotation: 0 },
  source: "俗离山：韩国中部一座花岗岩与片麻岩构成的孤立山体，主峰天皇峰海拔1058米，1970年设为韩国第六座国家公园，山麓法住寺为韩国重要佛教文化遗产（韩国国立公园公团）",
};

const DEOGYUSAN: TerrainEntry = {
  id: "deogyusan",
  nameZh: "德裕山",
  nameEn: "Deogyusan",
  category: "mountain_system",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "香积峰", lon: 127.7486, lat: 35.8614, elevation: 1614, kind: "peak" },
  bbox: [127.60, 35.75, 127.85, 35.95],
  label: { lon: 127.73, lat: 35.85, rotation: 0 },
  source: "德裕山：韩国第四高峰(1614米)，1975年设为韩国第十座国家公园，主峰香积峰周边保存亚高山针叶林生态，山麓茂朱一带建有韩国最早的高山滑雪场（韩国国立公园公团）",
};

const HALLASAN: TerrainEntry = {
  id: "hallasan",
  nameZh: "汉拿山",
  nameEn: "Hallasan",
  category: "mountain_system",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "白鹿潭", lon: 126.5292, lat: 33.3617, elevation: 1947, kind: "peak" },
  bbox: [126.42, 33.28, 126.62, 33.45],
  label: { lon: 126.53, lat: 33.36, rotation: 0 },
  source: "汉拿山：韩国最高峰(1947米)，是济州岛中心的盾状火山，山顶白鹿潭为破火山口积水形成的火口湖，2007年\"济州火山岛与熔岩洞\"列入联合国教科文组织世界自然遗产名录（UNESCO/韩国国立公园公团）",
};

const JEJU_ISLAND: TerrainEntry = {
  id: "jeju-island",
  nameZh: "济州岛",
  nameEn: "Jeju Island",
  category: "island",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "城山日出峰", lon: 126.9425, lat: 33.4587, elevation: 182, kind: "peak" },
  bbox: [126.15, 33.10, 126.95, 33.57],
  viewScale: 1.4,
  label: { lon: 126.55, lat: 33.25, rotation: 0 },
  source: "济州岛：韩国最大岛屿，由约180万至25万年前反复的玄武岩火山活动堆积而成，岛上分布368座\"오름\"寄生火山锥，城山日出峰是一座突入海中的水下凝灰岩火山锥，2010年整岛获评联合国教科文组织世界地质公园（UNESCO）",
};

const ULLEUNGDO: TerrainEntry = {
  id: "ulleungdo",
  nameZh: "郁陵岛",
  nameEn: "Ulleungdo",
  category: "island",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "圣人峰", lon: 130.8667, lat: 37.5083, elevation: 984, kind: "peak" },
  bbox: [130.78, 37.45, 130.93, 37.57],
  label: { lon: 130.86, lat: 37.50, rotation: 0 },
  source: "郁陵岛：朝鲜半岛以东海域一座第四纪火山岛，是一座从洋底隆起约3000米的层状火山露出海面的部分，全新世早期纳里破火山口的一次爆炸性喷发曾在日本本州中部沉积火山灰，岛上纳里盆地保留有完整的破火山口地貌（Global Volcanism Program/韩国地质资源研究院）",
};

const HAEAN_BASIN: TerrainEntry = {
  id: "haean-basin",
  nameZh: "海安盆地（\"面盆\"）",
  nameEn: "Haean Basin (\"Punchbowl\")",
  category: "basin",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "海安里", lon: 128.1075, lat: 38.2967, elevation: 450, kind: "city" },
  bbox: [128.03, 38.24, 128.20, 38.35],
  label: { lon: 128.11, lat: 38.29, rotation: 0 },
  source: "海安盆地：江原杨口郡一处近椭圆形侵蚀盆地，中心为侏罗纪花岗岩、边缘为前寒武纪变质岩，二者抗风化能力的差异被认为是盆地成因（韩国地质资源研究院 KIGAM，核实 2026-09-10）；南北长约10km、东西宽约7km，四周山脊高出盆底约400至800m，因形似大碗而俗称 Punchbowl",
};

const YONGNEUP_DAEAMSAN: TerrainEntry = {
  id: "yongneup-daeamsan",
  nameZh: "大岩山龙沼湿地",
  nameEn: "Yongneup, Mt. Daeam",
  category: "basin",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "龙沼", lon: 128.1333, lat: 38.2333, elevation: 1280, kind: "lake" },
  bbox: [128.10, 38.21, 128.16, 38.26],
  label: { lon: 128.13, lat: 38.24, rotation: 0 },
  source: "大岩山龙沼湿地：大岩山(1340米)西北坡海拔1280米处一片面积约7490平方米的高山泥炭沼泽，是韩国境内唯一保存泥炭层的高位沼泽，1997年成为韩国首个被列入《拉姆萨尔公约》的湿地（韩国环境部/拉姆萨尔公约秘书处）",
};

const CHEORWON_LAVA_PLATEAU: TerrainEntry = {
  id: "cheorwon-lava-plateau",
  nameZh: "铁原熔岩台地",
  nameEn: "Cheorwon Lava Plateau",
  category: "plateau",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "孤石亭", lon: 127.1930, lat: 38.1467, elevation: 200, kind: "escarpment" },
  bbox: [127.05, 38.08, 127.35, 38.25],
  viewScale: 1.3,
  label: { lon: 127.20, lat: 38.16, rotation: 0 },
  source: "铁原熔岩台地：第四纪玄武岩熔岩沿古河谷流淌约95公里后冷凝堆积形成的大范围熔岩台地，熔岩源出朝鲜半岛北部一座休眠火山，汉滩江切穿台地形成的峡谷发育有典型的柱状节理，2020年\"汉滩江熔岩地貌\"列入联合国教科文组织世界地质公园（UNESCO/汉滩江地质公园）",
};

const CHARYEONG_MOUNTAINS: TerrainEntry = {
  id: "charyeong-mountains",
  nameZh: "车岭山脉",
  nameEn: "Charyeong Mountains",
  category: "hills",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "七甲山", lon: 126.7333, lat: 36.4667, elevation: 561, kind: "peak" },
  bbox: [126.55, 36.30, 127.05, 36.65],
  axis: [[126.60, 36.60], [127.00, 36.35]],
  label: { lon: 126.80, lat: 36.48, rotation: -30 },
  source: "车岭山脉：贯穿忠清南道的一条低矮古老山地，历经长期侵蚀夷平，山势浑圆低缓，历史上是韩国传统地理区划\"湖西\"（忠清道）与\"湖南\"（全罗道）的天然分界，主峰七甲山海拔561米（韩国国土地理院）",
};

const WOLCHULSAN: TerrainEntry = {
  id: "wolchulsan",
  nameZh: "月出山",
  nameEn: "Wolchulsan",
  category: "inselberg",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "天皇峰", lon: 126.6961, lat: 34.7561, elevation: 809, kind: "peak" },
  bbox: [126.63, 34.72, 126.76, 34.79],
  label: { lon: 126.70, lat: 34.76, rotation: 0 },
  source: "月出山：从周边平地陡然拔起的一座花岗岩孤峰群，1988年设为韩国面积最小的国家公园(56.6平方公里)，主峰天皇峰海拔809米，山间跨越两峰之间的云桥为标志性景观（韩国国立公园公团）",
};

const SUNCHEON_BAY_WETLAND: TerrainEntry = {
  id: "suncheon-bay-wetland",
  nameZh: "顺天湾湿地",
  nameEn: "Suncheon Bay Wetland",
  category: "coast",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "龙山展望台", lon: 127.5090, lat: 34.9270, elevation: 100, kind: "escarpment" },
  bbox: [127.46, 34.87, 127.56, 34.96],
  label: { lon: 127.51, lat: 34.91, rotation: 0 },
  source: "顺天湾湿地：由约3.5公里溪流、约22.2平方公里滩涂与约2.3平方公里芦苇荡组成的河口湿地，2006年成为韩国首个列入《拉姆萨尔公约》的滨海湿地，2021年作为\"韩国滩涂\"组成部分列入联合国教科文组织世界自然遗产（UNESCO/拉姆萨尔公约秘书处）",
};

const BYEONSAN_PENINSULA_COAST: TerrainEntry = {
  id: "byeonsan-peninsula-coast",
  nameZh: "边山半岛海岸",
  nameEn: "Byeonsan Peninsula Coast",
  category: "coast",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "采石江", lon: 126.4922, lat: 35.6186, elevation: 10, kind: "escarpment" },
  bbox: [126.42, 35.58, 126.58, 35.68],
  label: { lon: 126.50, lat: 35.62, rotation: 0 },
  source: "边山半岛海岸：韩国唯一兼具山地与海岸景观的国家公园所在地，采石江一带海蚀崖由长期波浪侵蚀层状沉积岩形成，岩层纹理层叠如书册堆叠，1988年设为国家公园（韩国国立公园公团）",
};

const TAEAN_COAST_DUNES: TerrainEntry = {
  id: "taean-coast-dunes",
  nameZh: "泰安海岸沙丘",
  nameEn: "Taean Coast Dunes",
  category: "coast",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "新斗里海岸沙丘", lon: 126.1667, lat: 36.8167, elevation: 5, kind: "dune" },
  bbox: [126.10, 36.75, 126.35, 36.95],
  viewScale: 1.3,
  label: { lon: 126.22, lat: 36.84, rotation: 0 },
  source: "泰安海岸：西海岸一段长约230公里的海岸线，1978年设为国家公园，新斗里一带保存有韩国规模最大的海岸沙丘群，沙丘由长期沿岸流搬运的沙粒堆积而成（韩国国立公园公团）",
};

const HALLYEOHAESANG_MARINE_PARK: TerrainEntry = {
  id: "hallyeohaesang-marine-park",
  nameZh: "闲丽海上国立公园",
  nameEn: "Hallyeohaesang Marine National Park",
  category: "coast",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "闲山岛", lon: 128.4967, lat: 34.7844, elevation: 0, kind: "island" },
  bbox: [127.85, 34.60, 129.10, 35.05],
  viewScale: 1.5,
  label: { lon: 128.40, lat: 34.80, rotation: 0 },
  source: "闲丽海上国立公园：韩国南部沿海一片散布数百座岛屿的多岛海域，1968年设为韩国首座海上国家公园，公园名称取自闲山岛与丽水的合称（韩国国立公园公团）",
};

const DAEGWALLYEONG_HIGHLAND: TerrainEntry = {
  id: "daegwallyeong-highland",
  nameZh: "大关岭高原牧场",
  nameEn: "Daegwallyeong Highland Pastures",
  category: "grassland",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "三阳牧场", lon: 128.7239, lat: 37.6889, elevation: 1140, kind: "pass" },
  bbox: [128.65, 37.63, 128.80, 37.75],
  label: { lon: 128.72, lat: 37.69, rotation: 0 },
  source: "大关岭高原牧场：太白山脉一处海拔约1100至1400米的高山隘口地带，冷凉多风的气候条件使其成为韩国少见的大规模高山草场与风力发电场所在地，三阳牧场为其中规模最大的牧场（韩国国立公园公团/江原）",
};

const HONAM_PLAIN: TerrainEntry = {
  id: "honam-plain",
  nameZh: "湖南平原",
  nameEn: "Honam Plain",
  category: "plain",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "金堤", lon: 126.8808, lat: 35.8033, elevation: 15, kind: "city" },
  bbox: [126.60, 35.55, 127.15, 36.05],
  viewScale: 1.3,
  label: { lon: 126.85, lat: 35.80, rotation: 0 },
  source: "湖南平原：朝鲜半岛面积最大的平原，面积约3500平方公里，是韩国最重要的稻米产区，金堤地处平原中心，境内古代碧骨堤是朝鲜半岛已知最早的大型蓄水灌溉设施之一（韩国国土地理院/金堤市）",
};

const NAKDONG_ESTUARY_EULSUKDO: TerrainEntry = {
  id: "nakdong-estuary-eulsukdo",
  nameZh: "洛东江河口三角洲（乙淑岛）",
  nameEn: "Nakdong River Estuary (Eulsukdo)",
  category: "plain",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "乙淑岛", lon: 128.9581, lat: 35.0964, elevation: 3, kind: "delta" },
  bbox: [128.88, 35.03, 129.03, 35.16],
  label: { lon: 128.96, lat: 35.10, rotation: 0 },
  source: "洛东江河口三角洲：洛东江注入朝鲜半岛西南沿海处发育的辫状三角洲，河道分汊携带泥沙堆积形成多处沙洲与湿地，乙淑岛是其中最大的一处沙洲，为候鸟迁徙的重要中途停歇地（韩国国立公园公团/洛东江河口生态公园）",
};

const HAN_RIVER: TerrainEntry = {
  id: "han-river",
  nameZh: "汉江",
  nameEn: "Han River",
  category: "river",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "两水里", lon: 127.3161, lat: 37.5375, elevation: 45, kind: "city" },
  bbox: [127.10, 37.30, 129.05, 37.65],
  axis: [[128.92, 37.15], [126.85, 37.57]],
  viewScale: 1.3,
  label: { lon: 127.60, lat: 37.45, rotation: -10 },
  source: "汉江：发源于太白山脉金台峰，全长约508公里，流经韩国首都首尔，南汉江与北汉江在两水里交汇后称汉江干流，20世纪后期首尔沿江地区的快速城市化被称为\"汉江奇迹\"（韩国国土地理院）",
};

const NAKDONG_RIVER: TerrainEntry = {
  id: "nakdong-river",
  nameZh: "洛东江",
  nameEn: "Nakdong River",
  category: "river",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "安东", lon: 128.7294, lat: 36.5684, elevation: 70, kind: "city" },
  bbox: [128.20, 35.10, 129.15, 37.20],
  axis: [[128.98, 37.10], [128.90, 35.15]],
  viewScale: 1.4,
  label: { lon: 128.75, lat: 36.20, rotation: -5 },
  source: "洛东江：发源于太白山脉黄池川，全长约510公里，是韩国境内最长的河流，流经安东、大邱等岭南地区主要城市，最终在釜山附近注入海（韩国国土地理院）",
};

const GEUM_RIVER: TerrainEntry = {
  id: "geum-river",
  nameZh: "锦江",
  nameEn: "Geum River",
  category: "river",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "扶余", lon: 126.9099, lat: 36.2758, elevation: 15, kind: "city" },
  bbox: [126.85, 35.75, 127.75, 36.30],
  axis: [[127.65, 35.80], [126.90, 36.28]],
  label: { lon: 127.20, lat: 36.05, rotation: -20 },
  source: "锦江：发源于小白山脉新舞山，全长约397公里，是韩国第三长河流，流经百济故都扶余一段被称为\"白马江\"，沿岸落花岩记录了百济王朝历史（韩国国土地理院）",
};

const HOERYONGPO_ANDONG_MEANDER: TerrainEntry = {
  id: "hahoe-andong-meander",
  nameZh: "安东河回村曲流",
  nameEn: "Hahoe (Andong) Incised Meander",
  category: "valley",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "芙蓉台", lon: 128.5169, lat: 36.5390, elevation: 64, kind: "meander" },
  bbox: [128.47, 36.51, 128.57, 36.57],
  label: { lon: 128.52, lat: 36.54, rotation: 0 },
  source: "安东河回村曲流：洛东江在花岗岩基岩中下切形成的一处马蹄形嵌入式曲流，河流环绕村落三面，隔岸芙蓉台悬崖为俯瞰曲流全貌的观景点，2010年河回村与庆州良洞村列入联合国教科文组织世界遗产名录\"韩国历史村落\"（UNESCO/韩国国立公园公团）",
};

const SOGEUMGANG_GORGE: TerrainEntry = {
  id: "sogeumgang-gorge",
  nameZh: "小金刚峡谷",
  nameEn: "Sogeumgang Gorge",
  category: "gorge",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "九龙瀑布", lon: 128.6664, lat: 37.7864, elevation: 600, kind: "gorge" },
  bbox: [128.62, 37.75, 128.71, 37.82],
  label: { lon: 128.67, lat: 37.79, rotation: 0 },
  source: "小金刚峡谷：五台山国家公园内一段花岗岩深切峡谷，因景致可与朝鲜半岛北部的金刚山媲美而得名，九龙瀑布沿花岗岩崖壁跌落形成九级连瀑（韩国国立公园公团）",
};

const JUWANGSAN_GORGE: TerrainEntry = {
  id: "juwangsan-gorge",
  nameZh: "周王山峡谷",
  nameEn: "Juwangsan Gorge",
  category: "gorge",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "龙湫瀑布", lon: 129.1839, lat: 36.3961, elevation: 400, kind: "gorge" },
  bbox: [129.13, 36.36, 129.24, 36.44],
  label: { lon: 129.18, lat: 36.40, rotation: 0 },
  source: "周王山峡谷：由约7000万年前一次火山喷发冷凝形成的流纹质凝灰岩经周王川长期侵蚀切割而成，两岸石英质悬崖陡峭，龙湫瀑布等多级瀑布沿峡谷分布，2003年周王山成为联合国教科文组织世界地质公园（UNESCO/韩国国立公园公团）",
};

const SOYANG_LAKE: TerrainEntry = {
  id: "soyang-lake",
  nameZh: "昭阳湖",
  nameEn: "Soyang Lake",
  category: "lake",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "昭阳江大坝", lon: 127.8151, lat: 37.9489, elevation: 200, kind: "lake" },
  bbox: [127.68, 37.85, 128.10, 38.15],
  viewScale: 1.2,
  label: { lon: 127.88, lat: 38.00, rotation: 0 },
  source: "昭阳湖：1973年拦截昭阳江修建的人工水库，蓄水量约29亿立方米，是韩国库容最大的水库、亚洲最大的土石坝水库之一，湖区跨越春川、洪川、杨口、麟蹄多地（韩国水资源公社K-water）",
};

const GYEONGPO_LAGOON: TerrainEntry = {
  id: "gyeongpo-lagoon",
  nameZh: "镜浦湖",
  nameEn: "Gyeongpo Lagoon",
  category: "lake",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "镜浦台", lon: 128.8994, lat: 37.7961, elevation: 5, kind: "lake" },
  bbox: [128.86, 37.78, 128.93, 37.81],
  label: { lon: 128.90, lat: 37.80, rotation: 0 },
  source: "镜浦湖：东海岸一处由沿岸沙嘴封闭海湾形成的潟湖，\"镜浦\"意为\"如镜的湖面\"，湖畔镜浦台等亭台自朝鲜王朝以来即为文人赏月观景之地，\"一月映五处\"（天上月、海中月、湖中月、杯中月、恋人眼中月）的说法流传至今（江陵市）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 亚洲 / 韩国 =====
  TAEBAEK_MOUNTAINS, SEORAKSAN, JIRISAN, SONGNISAN, DEOGYUSAN, HALLASAN,
  JEJU_ISLAND, ULLEUNGDO,
  HAEAN_BASIN, YONGNEUP_DAEAMSAN,
  CHEORWON_LAVA_PLATEAU,
  CHARYEONG_MOUNTAINS,
  WOLCHULSAN,
  SUNCHEON_BAY_WETLAND, BYEONSAN_PENINSULA_COAST, TAEAN_COAST_DUNES, HALLYEOHAESANG_MARINE_PARK,
  DAEGWALLYEONG_HIGHLAND,
  HONAM_PLAIN, NAKDONG_ESTUARY_EULSUKDO,
  HAN_RIVER, NAKDONG_RIVER, GEUM_RIVER,
  HOERYONGPO_ANDONG_MEANDER,
  SOGEUMGANG_GORGE, JUWANGSAN_GORGE,
  SOYANG_LAKE, GYEONGPO_LAGOON,
];
