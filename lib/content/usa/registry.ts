import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 北美洲 — 美国（regionId: "north-america", country: "usa"）
// 坐标 / 高程据 USGS、NPS、NOAA、Encyclopædia Britannica
// ============================================================

const ROCKY_MOUNTAINS: TerrainEntry = {
  id: "rocky-mountains",
  nameZh: "落基山脉",
  nameEn: "Rocky Mountains",
  category: "mountain_system",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "埃尔伯特山", lon: -106.4453, lat: 39.1178, elevation: 4401, kind: "peak" },
  bbox: [-116.5, 33.0, -104.0, 49.0],
  axis: [[-110.0, 33.5], [-113.5, 49.0]],
  viewFrom: 90, // 从东侧大平原一侧看山墙
  label: { lon: -106.5, lat: 40.5, rotation: -70 },
  pois: [
    { name: "埃尔伯特山", lon: -106.4453, lat: 39.1178, note: "美国落基山脉最高峰，海拔约4401m（14440ft，USGS）" },
    { name: "派克斯峰", lon: -105.0442, lat: 38.8409, note: "科罗拉多前岭标志性山峰，海拔约4302m" },
  ],
  source: "落基山脉沿北美西部约4800km，从加拿大不列颠哥伦比亚到美国新墨西哥；锚点取美国境内最高峰埃尔伯特山（USGS 14440ft）",
};

const APPALACHIAN_MOUNTAINS: TerrainEntry = {
  id: "appalachian-mountains",
  nameZh: "阿巴拉契亚山脉",
  nameEn: "Appalachian Mountains",
  category: "mountain_system",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "米切尔山", lon: -82.2652, lat: 35.7648, elevation: 2037, kind: "peak" },
  bbox: [-84.5, 33.5, -70.0, 46.5],
  axis: [[-84.0, 34.0], [-71.0, 45.5]],
  viewFrom: 135,
  label: { lon: -80.0, lat: 38.5, rotation: -40 },
  pois: [
    { name: "米切尔山", lon: -82.2652, lat: 35.7648, note: "阿巴拉契亚山脉与密西西比河以东最高峰，海拔约2037m（6684ft）" },
    { name: "大烟山", lon: -83.4985, lat: 35.6118, note: "大烟山国家公园，克林曼斯山穹顶约2025m" },
  ],
  source: "阿巴拉契亚山脉沿北美东缘约2400km（从加拿大纽芬兰到美国阿拉巴马）；锚点取米切尔山（NPS / USGS，6684ft）",
};

const SIERRA_NEVADA_US: TerrainEntry = {
  id: "sierra-nevada-us",
  nameZh: "内华达山脉",
  nameEn: "Sierra Nevada",
  category: "mountain_system",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "惠特尼山", lon: -118.2921, lat: 36.5786, elevation: 4421, kind: "peak" },
  bbox: [-121.0, 35.4, -118.0, 40.2],
  axis: [[-118.3, 35.6], [-120.6, 40.0]],
  viewFrom: 100, // 从东侧欧文斯谷一侧看陡峭东坡
  label: { lon: -119.4, lat: 37.6, rotation: -60 },
  pois: [
    { name: "惠特尼山", lon: -118.2921, lat: 36.5786, note: "美国本土48州最高峰，海拔约4421m（14505ft，NAVD88）" },
    { name: "优胜美地谷", lon: -119.5383, lat: 37.7456, note: "冰川刻蚀的花岗岩峡谷" },
  ],
  source: "内华达山脉（Sierra Nevada）：加利福尼亚东部约640km的花岗岩断块山，西缓东陡；锚点取惠特尼山（USGS，14505ft NAVD88）",
};

const CASCADE_RANGE: TerrainEntry = {
  id: "cascade-range",
  nameZh: "喀斯喀特山脉",
  nameEn: "Cascade Range",
  category: "mountain_system",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "雷尼尔山", lon: -121.7603, lat: 46.8523, elevation: 4392, kind: "peak" },
  bbox: [-122.6, 40.3, -120.0, 49.0],
  axis: [[-121.6, 40.5], [-121.3, 49.0]],
  viewFrom: 270, // 从西侧普吉特低地一侧看
  label: { lon: -121.6, lat: 44.5, rotation: -82 },
  pois: [
    { name: "雷尼尔山", lon: -121.7603, lat: 46.8523, note: "喀斯喀特火山弧最高峰，活火山，海拔约4392m（14410ft，NPS）" },
    { name: "圣海伦斯山", lon: -122.1944, lat: 46.1912, note: "1980年剧烈喷发的活火山" },
    { name: "火山口湖", lon: -122.1685, lat: 42.9446, note: "马扎马火山塌陷成的破火山口湖，美国最深湖" },
  ],
  source: "喀斯喀特山脉：北美西北的火山山脉，从加拿大不列颠哥伦比亚到美国北加州，多座层状火山；锚点取雷尼尔山（NPS，14410ft）",
};

const ALASKA_RANGE: TerrainEntry = {
  id: "alaska-range",
  nameZh: "阿拉斯加山脉",
  nameEn: "Alaska Range",
  category: "mountain_system",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "迪纳利峰", lon: -151.0064, lat: 63.0692, elevation: 6190, kind: "peak" },
  bbox: [-153.5, 61.8, -144.5, 63.8],
  axis: [[-152.5, 62.3], [-145.5, 63.4]],
  viewFrom: 180, // 从南侧（安克雷奇方向）看北美最高峰
  label: { lon: -149.5, lat: 62.9, rotation: -12 },
  pois: [
    { name: "迪纳利峰", lon: -151.0064, lat: 63.0692, note: "北美最高峰，海拔约6190m（20310ft，USGS）；联邦官方名亦作麦金利山（Mount McKinley）" },
  ],
  source: "阿拉斯加山脉：阿拉斯加中南部约650km的弧形山脉，含北美最高峰迪纳利（USGS：20310ft）",
};

const COLORADO_PLATEAU: TerrainEntry = {
  id: "colorado-plateau",
  nameZh: "科罗拉多高原",
  nameEn: "Colorado Plateau",
  category: "plateau",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "大峡谷南缘", lon: -112.1130, lat: 36.0575, elevation: 2100, kind: "escarpment" },
  bbox: [-114.0, 35.0, -107.0, 39.5],
  axis: [[-113.0, 35.5], [-108.5, 39.0]],
  viewFrom: 200,
  label: { lon: -110.5, lat: 37.2, rotation: 0 },
  pois: [
    { name: "大峡谷", lon: -112.1130, lat: 36.0575, note: "科罗拉多河切入高原约1800m深" },
    { name: "纪念碑谷", lon: -110.1096, lat: 36.9980, note: "红色砂岩方山与孤峰群（纳瓦霍公园）" },
  ],
  source: "科罗拉多高原：约34万km²，跨科罗拉多/犹他/亚利桑那/新墨西哥四州交界，平均海拔约1500–2100m（USGS）",
};

const GRAND_CANYON: TerrainEntry = {
  id: "grand-canyon",
  nameZh: "大峡谷",
  nameEn: "Grand Canyon",
  category: "gorge",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "光明天使点（南缘）", lon: -112.1401, lat: 36.0575, elevation: 2100, kind: "gorge" },
  bbox: [-114.0, 35.9, -111.8, 36.6],
  axis: [[-113.9, 36.2], [-111.85, 36.1]],
  viewFrom: 20,
  label: { lon: -112.4, lat: 36.25, rotation: -12 },
  pois: [
    { name: "南缘（大峡谷村）", lon: -112.1130, lat: 36.0544, note: "游客主要出入口，海拔约2100m" },
    { name: "北缘", lon: -112.0526, lat: 36.1978, note: "海拔约2500m，比南缘更高更凉" },
  ],
  source: "大峡谷：科罗拉多河切穿科罗拉多高原，长约446km、最宽约29km、最深约1857m；岩层记录约18亿年（NPS）",
};

const GREAT_PLAINS_US: TerrainEntry = {
  id: "great-plains-us",
  nameZh: "北美大平原",
  nameEn: "Great Plains",
  category: "plain",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "内布拉斯加沙丘", lon: -101.5, lat: 41.8, elevation: 900, kind: "grassland" },
  bbox: [-105.0, 32.0, -97.0, 49.0],
  axis: [[-100.0, 32.5], [-100.5, 48.5]],
  viewFrom: 100,
  label: { lon: -100.5, lat: 40.5, rotation: -84 },
  source: "北美大平原：落基山脉以东的广阔缓坡平原，从加拿大草原省份到美国得州；自西向东由约1800m降到约500m（USGS）。此条目取美国部分",
};

const GREAT_BASIN: TerrainEntry = {
  id: "great-basin",
  nameZh: "大盆地",
  nameEn: "Great Basin",
  category: "basin",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "大盐湖", lon: -112.6, lat: 41.15, elevation: 1280, kind: "salt-lake" },
  bbox: [-120.0, 37.0, -111.5, 42.0],
  axis: [[-119.0, 38.0], [-112.5, 41.5]],
  viewFrom: 200,
  label: { lon: -116.0, lat: 39.5, rotation: 0 },
  pois: [
    { name: "大盐湖", lon: -112.6, lat: 41.15, note: "西半球最大的咸水湖，无出海口" },
    { name: "惠勒峰（大盆地国家公园）", lon: -114.3142, lat: 38.9858, note: "海拔约3982m" },
  ],
  source: "大盆地：内华达山脉与瓦萨奇山脉之间的内流区（河水不流入海洋），约50万km²，典型的盆岭地貌（USGS / NPS）",
};

const DEATH_VALLEY: TerrainEntry = {
  id: "death-valley",
  nameZh: "死亡谷",
  nameEn: "Death Valley",
  category: "basin",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "巴德沃特盆地", lon: -116.7669, lat: 36.2295, elevation: -86, kind: "salt-lake" },
  bbox: [-117.3, 35.9, -116.4, 37.1],
  axis: [[-117.0, 36.1], [-116.7, 37.0]],
  viewFrom: 100,
  label: { lon: -116.9, lat: 36.5, rotation: -75 },
  pois: [
    { name: "巴德沃特盆地", lon: -116.7669, lat: 36.2295, note: "北美最低点，海拔-86m（-282ft，NPS）；盐滩约520km²" },
  ],
  source: "死亡谷：加州东部的断陷地堑，含北美最低点巴德沃特盆地（-86m，NPS）；夏季极端高温",
};

const MOJAVE_DESERT: TerrainEntry = {
  id: "mojave-desert",
  nameZh: "莫哈韦沙漠",
  nameEn: "Mojave Desert",
  category: "desert",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "约书亚树", lon: -116.1, lat: 34.1, elevation: 900, kind: "dune" },
  bbox: [-118.2, 33.0, -114.0, 37.2],
  axis: [[-117.5, 33.5], [-114.5, 37.0]],
  viewFrom: 200,
  label: { lon: -116.0, lat: 35.2, rotation: 0 },
  source: "莫哈韦沙漠：加州东南/内华达/亚利桑那/犹他交界的高地荒漠，约上万km²，介于大盆地与索诺兰沙漠之间，以约书亚树为标志植物（NPS）",
};

const GREAT_LAKES: TerrainEntry = {
  id: "great-lakes",
  nameZh: "五大湖",
  nameEn: "Great Lakes",
  category: "lake",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "休伦湖", lon: -82.4, lat: 44.8, elevation: 176, kind: "lake" },
  bbox: [-92.5, 41.0, -76.0, 49.0],
  axis: [[-91.0, 46.5], [-77.0, 43.0]],
  viewFrom: 200,
  label: { lon: -84.0, lat: 45.0, rotation: 0 },
  pois: [
    { name: "苏必利尔湖", lon: -87.5, lat: 47.7, note: "按面积计世界最大的淡水湖" },
    { name: "尼亚加拉瀑布", lon: -79.0747, lat: 43.0828, note: "伊利湖与安大略湖之间的落差" },
  ],
  source: "五大湖（苏必利尔/密歇根/休伦/伊利/安大略）：北美中部的冰川湖群，总面积约24.4万km²，约占全球地表淡水的两成（NOAA / USGS）。跨美加两国，此条目归美国",
};

const YELLOWSTONE: TerrainEntry = {
  id: "yellowstone",
  nameZh: "黄石高原",
  nameEn: "Yellowstone Plateau",
  category: "plateau",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "老忠实喷泉", lon: -110.8281, lat: 44.4605, elevation: 2240, kind: "escarpment" },
  bbox: [-111.2, 44.1, -109.8, 45.1],
  axis: [[-111.0, 44.3], [-110.0, 45.0]],
  viewFrom: 200,
  label: { lon: -110.5, lat: 44.6, rotation: 0 },
  pois: [
    { name: "老忠实喷泉", lon: -110.8281, lat: 44.4605, note: "定时喷发的间歇泉" },
    { name: "黄石大峡谷（下瀑布）", lon: -110.4962, lat: 44.7180, note: "黄石河切出的黄色岩壁峡谷" },
  ],
  source: "黄石高原：落基山脉中的火山高原，一座巨型破火山口约72×55km；世界上间歇泉最集中的地区（USGS / NPS）。1872年设立为国家公园",
};

const YOSEMITE_VALLEY: TerrainEntry = {
  id: "yosemite-valley",
  nameZh: "优胜美地谷",
  nameEn: "Yosemite Valley",
  category: "valley",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "酋长岩", lon: -119.6379, lat: 37.7339, elevation: 2308, kind: "escarpment" },
  bbox: [-119.68, 37.70, -119.50, 37.78],
  axis: [[-119.66, 37.72], [-119.53, 37.75]],
  viewFrom: 200,
  label: { lon: -119.58, lat: 37.745, rotation: -6 },
  pois: [
    { name: "酋长岩", lon: -119.6379, lat: 37.7339, note: "单块花岗岩崖壁，海拔约2308m，崖面高约900m" },
    { name: "半圆顶", lon: -119.5332, lat: 37.7460, note: "被冰川削去一半的花岗岩穹丘，海拔约2696m" },
  ],
  source: "优胜美地谷：内华达山脉中默塞德河与冰川刻出的U形花岗岩谷，谷底海拔约1200m（NPS）；世界自然遗产",
};

const MISSISSIPPI_RIVER: TerrainEntry = {
  id: "mississippi-river",
  nameZh: "密西西比河",
  nameEn: "Mississippi River",
  category: "river",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "密西西比河三角洲（鸟足）", lon: -89.25, lat: 29.15, elevation: 0, kind: "delta" },
  bbox: [-95.0, 29.0, -89.0, 47.5],
  axis: [[-90.2, 47.2], [-89.4, 29.3]],
  viewFrom: 90,
  label: { lon: -91.0, lat: 35.0, rotation: -80 },
  pois: [
    { name: "河源（艾塔斯卡湖）", lon: -95.2075, lat: 47.2419, note: "明尼苏达州，公认的密西西比河源头" },
    { name: "“鸟足”三角洲", lon: -89.25, lat: 29.15, note: "河流带着泥沙冲进墨西哥湾形成的分汊三角洲" },
  ],
  source: "密西西比河：北美最大水系的干流，与密苏里河合计长约6000km；下游是大型泛滥平原和鸟足状三角洲（USGS）",
};

const CENTRAL_VALLEY_CA: TerrainEntry = {
  id: "central-valley-ca",
  nameZh: "中央谷地",
  nameEn: "Central Valley",
  category: "plain",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "萨克拉门托-圣华金三角洲", lon: -121.6, lat: 38.05, elevation: 3, kind: "delta" },
  bbox: [-122.3, 35.0, -118.9, 40.5],
  axis: [[-121.9, 40.2], [-119.3, 35.2]],
  viewFrom: 110,
  label: { lon: -120.5, lat: 37.5, rotation: -70 },
  source: "中央谷地：加州内华达山脉与海岸山脉之间约650km长的构造凹陷冲积平原；美国重要的农业区（USGS）",
};

const EVERGLADES: TerrainEntry = {
  id: "everglades",
  nameZh: "大沼泽地",
  nameEn: "Everglades",
  category: "plain",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "沙河（大沼泽腹地）", lon: -80.85, lat: 25.75, elevation: 1, kind: "grassland" },
  bbox: [-81.6, 25.1, -80.3, 27.2],
  axis: [[-80.9, 27.0], [-80.9, 25.2]],
  viewFrom: 90,
  label: { lon: -80.9, lat: 25.9, rotation: -84 },
  source: "大沼泽地：佛罗里达南部一片极缓的宽阔湿地，雨季从奥基乔比湖向南极慢地漫流入海，被称为“草之河”（NPS）；世界自然遗产",
};

const SONORAN_DESERT: TerrainEntry = {
  id: "sonoran-desert",
  nameZh: "索诺兰沙漠",
  nameEn: "Sonoran Desert",
  category: "desert",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "巨柱仙人掌（萨瓜罗国家公园）", lon: -110.90, lat: 32.25, elevation: 900, kind: "dune" },
  bbox: [-114.5, 31.3, -109.5, 34.5],
  axis: [[-113.5, 31.6], [-110.0, 34.2]],
  viewFrom: 200,
  label: { lon: -112.0, lat: 32.8, rotation: 0 },
  source: "索诺兰沙漠：横跨美国亚利桑那/加州与墨西哥的热荒漠，夏冬两次降水，以巨柱仙人掌（saguaro）为标志（NPS）。此条目取美国部分",
};

const MONUMENT_VALLEY: TerrainEntry = {
  id: "monument-valley",
  nameZh: "纪念碑谷",
  nameEn: "Monument Valley",
  category: "inselberg",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "东、西手套峰", lon: -110.1096, lat: 36.9980, elevation: 1900, kind: "peak" },
  bbox: [-110.3, 36.85, -109.9, 37.15],
  axis: [[-110.2, 36.9], [-109.95, 37.1]],
  viewScale: 1.4,
  label: { lon: -110.1, lat: 37.0, rotation: 0 },
  source: "纪念碑谷：科罗拉多高原上一群红色砂岩方山和孤峰，相对高差约100–300m，由纳瓦霍部落公园管理（Navajo Nation Parks & Recreation）",
};

const HAWAIIAN_ISLANDS: TerrainEntry = {
  id: "hawaiian-islands",
  nameZh: "夏威夷群岛",
  nameEn: "Hawaiian Islands",
  category: "island",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "冒纳罗亚火山", lon: -155.6076, lat: 19.4753, elevation: 4169, kind: "peak" },
  bbox: [-160.3, 18.9, -154.8, 22.3],
  axis: [[-159.6, 22.0], [-155.3, 19.3]],
  viewFrom: 200,
  label: { lon: -157.0, lat: 20.6, rotation: -30 },
  pois: [
    { name: "冒纳罗亚火山", lon: -155.6076, lat: 19.4753, note: "按体积计地球上最大的盾状火山之一，海拔约4169m，活火山" },
    { name: "基拉韦厄火山", lon: -155.2870, lat: 19.4211, note: "夏威夷岛上最活跃的火山" },
  ],
  source: "夏威夷群岛：太平洋中部的火山岛链，由一个地幔热点上方板块移动形成，越往西北岛越老、越低（USGS）",
};

const COLUMBIA_PLATEAU: TerrainEntry = {
  id: "columbia-plateau",
  nameZh: "哥伦比亚高原",
  nameEn: "Columbia Plateau",
  category: "plateau",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "德赖瀑布（干瀑布）", lon: -119.3536, lat: 47.6070, elevation: 500, kind: "escarpment" },
  bbox: [-121.0, 43.8, -116.0, 47.7],
  axis: [[-120.0, 44.2], [-117.0, 47.3]],
  viewFrom: 200,
  label: { lon: -119.0, lat: 46.0, rotation: 0 },
  pois: [
    { name: "哥伦比亚河峡谷", lon: -121.4, lat: 45.7, note: "哥伦比亚河切穿玄武岩和喀斯喀特山脉" },
    { name: "河道疤地", lon: -118.2, lat: 47.0, note: "冰期米苏拉大洪水冲刷出的裸岩沟谷群" },
  ],
  source: "哥伦比亚高原：美国西北部由中新世（约1700–600万年前）溢流玄武岩堆成的高原，玄武岩总覆盖约21万km²（USGS）；冰期米苏拉大洪水冲出“河道疤地”",
};

const GREAT_SALT_LAKE: TerrainEntry = {
  id: "great-salt-lake",
  nameZh: "大盐湖",
  nameEn: "Great Salt Lake",
  category: "lake",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "大盐湖", lon: -112.5, lat: 41.15, elevation: 1280, kind: "salt-lake" },
  bbox: [-113.2, 40.6, -111.9, 41.75],
  axis: [[-112.9, 41.6], [-112.2, 40.7]],
  viewFrom: 200,
  label: { lon: -112.5, lat: 41.2, rotation: 0 },
  source: "大盐湖：西半球最大的咸水湖，冰期邦纳维尔湖的残留；无出海口，靠蒸发平衡，水位和面积随降水大幅波动，近年偏低（USGS / 犹他州）",
};

const COLORADO_RIVER: TerrainEntry = {
  id: "colorado-river",
  nameZh: "科罗拉多河",
  nameEn: "Colorado River",
  category: "river",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "格伦峡谷（马蹄湾）", lon: -111.5104, lat: 36.8791, elevation: 1130, kind: "gorge" },
  bbox: [-115.5, 31.8, -105.5, 40.5],
  axis: [[-105.8, 40.2], [-114.6, 32.0]],
  viewFrom: 20,
  label: { lon: -111.5, lat: 36.5, rotation: -20 },
  pois: [
    { name: "米德湖（胡佛水坝）", lon: -114.7377, lat: 36.0161, note: "美国库容最大的水库之一" },
    { name: "鲍威尔湖（格伦峡谷水坝）", lon: -111.4837, lat: 36.9375, note: "淹没了格伦峡谷" },
  ],
  source: "科罗拉多河：从落基山流向加利福尼亚湾，长约2330km；切出大峡谷，被胡佛、格伦峡谷等大坝分段拦蓄，近几十年多数年份不再入海（USGS）",
};

const ATLANTIC_COASTAL_PLAIN: TerrainEntry = {
  id: "atlantic-coastal-plain",
  nameZh: "大西洋沿岸平原",
  nameEn: "Atlantic Coastal Plain",
  category: "plain",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "切萨皮克湾", lon: -76.1, lat: 37.8, elevation: 2, kind: "delta" },
  bbox: [-82.5, 30.0, -72.0, 40.5],
  axis: [[-74.0, 40.0], [-81.5, 30.5]],
  viewFrom: 110,
  label: { lon: -77.5, lat: 35.5, rotation: -55 },
  source: "大西洋沿岸平原：北美东缘一条自北向南加宽的低平地带，由抬升出海面的松散沉积构成；与阿巴拉契亚山麓之间以“瀑布线”为界（USGS）",
};

const FLORIDA_PENINSULA: TerrainEntry = {
  id: "florida-peninsula",
  nameZh: "佛罗里达半岛",
  nameEn: "Florida Peninsula",
  category: "coast",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "银泉（喀斯特泉）", lon: -82.0578, lat: 29.2108, elevation: 12, kind: "escarpment" },
  bbox: [-83.5, 24.5, -80.0, 30.7],
  axis: [[-81.6, 30.4], [-81.2, 25.2]],
  viewFrom: 90,
  label: { lon: -81.6, lat: 28.3, rotation: -84 },
  source: "佛罗里达半岛：一块巨大的石灰岩台地露出海面的部分，地势极低平，多喀斯特天坑、地下河和大泉；沿岸有障壁岛（USGS / 佛州地质调查）",
};

const CHIHUAHUAN_DESERT_US: TerrainEntry = {
  id: "chihuahuan-desert-us",
  nameZh: "奇瓦瓦沙漠",
  nameEn: "Chihuahuan Desert",
  category: "desert",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "白沙（石膏沙丘）", lon: -106.1746, lat: 32.7872, elevation: 1200, kind: "dune" },
  bbox: [-107.8, 28.8, -102.8, 34.2],
  axis: [[-106.8, 29.2], [-103.5, 33.8]],
  viewFrom: 200,
  label: { lon: -105.0, lat: 31.5, rotation: 0 },
  source: "奇瓦瓦沙漠：北美按面积最大的荒漠，主体在墨西哥，美国部分在西得州、新墨西哥南部和亚利桑那东南；海拔较高的雨影荒漠，以丝兰和沙漠灌丛为主（NPS）。此条目取美国部分",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 北美洲 / 美国 =====
  ROCKY_MOUNTAINS, APPALACHIAN_MOUNTAINS, SIERRA_NEVADA_US, CASCADE_RANGE, ALASKA_RANGE,
  COLORADO_PLATEAU, GRAND_CANYON, GREAT_PLAINS_US, GREAT_BASIN, DEATH_VALLEY,
  MOJAVE_DESERT, GREAT_LAKES,
  YELLOWSTONE, YOSEMITE_VALLEY, MISSISSIPPI_RIVER, CENTRAL_VALLEY_CA, EVERGLADES,
  SONORAN_DESERT, MONUMENT_VALLEY, HAWAIIAN_ISLANDS,
  COLUMBIA_PLATEAU, GREAT_SALT_LAKE, COLORADO_RIVER, ATLANTIC_COASTAL_PLAIN,
  FLORIDA_PENINSULA, CHIHUAHUAN_DESERT_US,
];
