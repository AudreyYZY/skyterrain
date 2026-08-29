/**
 * 旅游模式：每座城市攻略正文里提到的主要地点，选中城市时标注在地图上。
 *
 * 坐标为地标概略位置（城市尺度取景 ~26km 足够），非导航精度。
 * 取自各地公开的地标位置资料；不含任何有争议的地点或表述。
 */

import type { CityPoi } from "@/lib/places-registry";

export const POIS_BY_CITY: Record<string, CityPoi[]> = {
  // ── 澳大利亚 ──
  sydney: [
    { nameZh: "悉尼歌剧院", nameEn: "Sydney Opera House", lon: 151.2153, lat: -33.8568, kind: "landmark" },
    { nameZh: "海港大桥", nameEn: "Sydney Harbour Bridge", lon: 151.2108, lat: -33.8523, kind: "landmark" },
    { nameZh: "邦迪海滩", nameEn: "Bondi Beach", lon: 151.2744, lat: -33.8908, kind: "nature" },
    { nameZh: "环形码头", nameEn: "Circular Quay", lon: 151.2110, lat: -33.8610, kind: "transport" },
    { nameZh: "皇家植物园", nameEn: "Royal Botanic Garden", lon: 151.2166, lat: -33.8642, kind: "nature" },
  ],
  melbourne: [
    { nameZh: "联邦广场", nameEn: "Federation Square", lon: 144.9690, lat: -37.8180, kind: "landmark" },
    { nameZh: "维多利亚州立图书馆", nameEn: "State Library Victoria", lon: 144.9647, lat: -37.8098, kind: "landmark" },
    { nameZh: "皇家植物园", nameEn: "Royal Botanic Gardens", lon: 144.9797, lat: -37.8304, kind: "nature" },
    { nameZh: "维多利亚女王市场", nameEn: "Queen Victoria Market", lon: 144.9568, lat: -37.8076, kind: "district" },
    { nameZh: "圣基尔达", nameEn: "St Kilda", lon: 144.9800, lat: -37.8678, kind: "district" },
  ],
  brisbane: [
    { nameZh: "南岸公园", nameEn: "South Bank Parklands", lon: 153.0230, lat: -27.4790, kind: "district" },
    { nameZh: "龙柏考拉保护区", nameEn: "Lone Pine Koala Sanctuary", lon: 152.9686, lat: -27.5335, kind: "nature" },
    { nameZh: "库萨山瞭望台", nameEn: "Mount Coot-tha Lookout", lon: 152.9490, lat: -27.4776, kind: "nature" },
    { nameZh: "故事桥", nameEn: "Story Bridge", lon: 153.0410, lat: -27.4640, kind: "landmark" },
  ],
  perth: [
    { nameZh: "国王公园", nameEn: "Kings Park", lon: 115.8320, lat: -31.9615, kind: "nature" },
    { nameZh: "弗里曼特尔", nameEn: "Fremantle", lon: 115.7480, lat: -32.0560, kind: "district" },
    { nameZh: "罗特尼斯岛", nameEn: "Rottnest Island", lon: 115.5200, lat: -32.0000, kind: "nature" },
    { nameZh: "科茨洛海滩", nameEn: "Cottesloe Beach", lon: 115.7520, lat: -31.9950, kind: "nature" },
  ],
  adelaide: [
    { nameZh: "中央市场", nameEn: "Adelaide Central Market", lon: 138.5990, lat: -34.9295, kind: "district" },
    { nameZh: "阿德莱德植物园", nameEn: "Adelaide Botanic Garden", lon: 138.6110, lat: -34.9165, kind: "nature" },
    { nameZh: "格雷尔海滩", nameEn: "Glenelg Beach", lon: 138.5150, lat: -34.9800, kind: "nature" },
    { nameZh: "巴罗萨谷", nameEn: "Barossa Valley", lon: 138.9500, lat: -34.5500, kind: "nature" },
    { nameZh: "汉多夫", nameEn: "Hahndorf", lon: 138.8100, lat: -35.0270, kind: "district" },
  ],
  cairns: [
    { nameZh: "凯恩斯滨海泻湖", nameEn: "Cairns Esplanade Lagoon", lon: 145.7800, lat: -16.9160, kind: "landmark" },
    { nameZh: "库兰达", nameEn: "Kuranda", lon: 145.6380, lat: -16.8200, kind: "district" },
    { nameZh: "戴恩树雨林", nameEn: "Daintree Rainforest", lon: 145.4200, lat: -16.1700, kind: "nature" },
    { nameZh: "阿瑟顿高地", nameEn: "Atherton Tablelands", lon: 145.4800, lat: -17.2700, kind: "nature" },
  ],
  darwin: [
    { nameZh: "明迪海滩", nameEn: "Mindil Beach", lon: 130.8330, lat: -12.4380, kind: "nature" },
    { nameZh: "达尔文滨海区", nameEn: "Darwin Waterfront", lon: 130.8460, lat: -12.4720, kind: "district" },
    { nameZh: "卡卡杜国家公园", nameEn: "Kakadu National Park", lon: 132.9550, lat: -12.4090, kind: "nature" },
    { nameZh: "利奇菲尔德国家公园", nameEn: "Litchfield National Park", lon: 130.8000, lat: -13.1700, kind: "nature" },
  ],

  // ── 中国 ──
  beijing: [
    { nameZh: "故宫", nameEn: "Forbidden City", lon: 116.3972, lat: 39.9163, kind: "landmark" },
    { nameZh: "天安门广场", nameEn: "Tiananmen Square", lon: 116.3975, lat: 39.9055, kind: "landmark" },
    { nameZh: "天坛", nameEn: "Temple of Heaven", lon: 116.4126, lat: 39.8822, kind: "landmark" },
    { nameZh: "颐和园", nameEn: "Summer Palace", lon: 116.2755, lat: 39.9999, kind: "landmark" },
    { nameZh: "慕田峪长城", nameEn: "Mutianyu Great Wall", lon: 116.5700, lat: 40.4310, kind: "landmark" },
    { nameZh: "什刹海", nameEn: "Shichahai", lon: 116.3830, lat: 39.9400, kind: "district" },
  ],
  shanghai: [
    { nameZh: "外滩", nameEn: "The Bund", lon: 121.4900, lat: 31.2400, kind: "landmark" },
    { nameZh: "陆家嘴", nameEn: "Lujiazui", lon: 121.5050, lat: 31.2380, kind: "district" },
    { nameZh: "豫园", nameEn: "Yu Garden", lon: 121.4920, lat: 31.2270, kind: "landmark" },
    { nameZh: "武康路", nameEn: "Wukang Road", lon: 121.4340, lat: 31.2110, kind: "district" },
    { nameZh: "上海博物馆", nameEn: "Shanghai Museum", lon: 121.4750, lat: 31.2290, kind: "landmark" },
  ],
  guangzhou: [
    { nameZh: "沙面岛", nameEn: "Shamian Island", lon: 113.2410, lat: 23.1090, kind: "district" },
    { nameZh: "陈家祠", nameEn: "Chen Clan Ancestral Hall", lon: 113.2430, lat: 23.1290, kind: "landmark" },
    { nameZh: "越秀公园", nameEn: "Yuexiu Park", lon: 113.2660, lat: 23.1400, kind: "nature" },
    { nameZh: "广州塔", nameEn: "Canton Tower", lon: 113.3190, lat: 23.1060, kind: "landmark" },
    { nameZh: "白云山", nameEn: "Baiyun Mountain", lon: 113.2930, lat: 23.1810, kind: "nature" },
  ],
  shenzhen: [
    { nameZh: "华侨城创意园", nameEn: "OCT-LOFT", lon: 113.9840, lat: 22.5430, kind: "district" },
    { nameZh: "莲花山公园", nameEn: "Lianhuashan Park", lon: 114.0570, lat: 22.5590, kind: "nature" },
    { nameZh: "华强北", nameEn: "Huaqiangbei", lon: 114.0850, lat: 22.5470, kind: "district" },
    { nameZh: "大鹏所城", nameEn: "Dapeng Fortress", lon: 114.5230, lat: 22.5940, kind: "landmark" },
  ],
  chengdu: [
    { nameZh: "大熊猫繁育研究基地", nameEn: "Chengdu Panda Base", lon: 104.1470, lat: 30.7330, kind: "nature" },
    { nameZh: "宽窄巷子", nameEn: "Kuanzhai Alleys", lon: 104.0560, lat: 30.6690, kind: "district" },
    { nameZh: "武侯祠·锦里", nameEn: "Wuhou Shrine & Jinli", lon: 104.0475, lat: 30.6450, kind: "landmark" },
    { nameZh: "都江堰", nameEn: "Dujiangyan", lon: 103.6170, lat: 31.0030, kind: "landmark" },
    { nameZh: "青城山", nameEn: "Mount Qingcheng", lon: 103.5670, lat: 30.9000, kind: "nature" },
  ],
  chongqing: [
    { nameZh: "洪崖洞", nameEn: "Hongyadong", lon: 106.5820, lat: 29.5620, kind: "landmark" },
    { nameZh: "解放碑", nameEn: "Jiefangbei", lon: 106.5770, lat: 29.5580, kind: "district" },
    { nameZh: "长江索道", nameEn: "Yangtze River Cableway", lon: 106.5870, lat: 29.5560, kind: "transport" },
    { nameZh: "李子坝轻轨站", nameEn: "Liziba Station", lon: 106.5490, lat: 29.5480, kind: "transport" },
    { nameZh: "大足石刻", nameEn: "Dazu Rock Carvings", lon: 105.7050, lat: 29.7040, kind: "landmark" },
  ],
  xian: [
    { nameZh: "兵马俑", nameEn: "Terracotta Army", lon: 109.2785, lat: 34.3853, kind: "landmark" },
    { nameZh: "西安城墙·钟楼", nameEn: "City Wall & Bell Tower", lon: 108.9420, lat: 34.2610, kind: "landmark" },
    { nameZh: "大雁塔", nameEn: "Big Wild Goose Pagoda", lon: 108.9640, lat: 34.2220, kind: "landmark" },
    { nameZh: "回民街", nameEn: "Muslim Quarter", lon: 108.9390, lat: 34.2660, kind: "district" },
    { nameZh: "华山", nameEn: "Mount Hua", lon: 110.0870, lat: 34.4830, kind: "nature" },
  ],
  hangzhou: [
    { nameZh: "西湖", nameEn: "West Lake", lon: 120.1490, lat: 30.2450, kind: "nature" },
    { nameZh: "雷峰塔", nameEn: "Leifeng Pagoda", lon: 120.1490, lat: 30.2310, kind: "landmark" },
    { nameZh: "灵隐寺", nameEn: "Lingyin Temple", lon: 120.1010, lat: 30.2410, kind: "landmark" },
    { nameZh: "龙井村", nameEn: "Longjing Village", lon: 120.1210, lat: 30.2280, kind: "nature" },
    { nameZh: "西溪湿地", nameEn: "Xixi Wetland", lon: 120.0700, lat: 30.2700, kind: "nature" },
  ],
  kunming: [
    { nameZh: "翠湖", nameEn: "Green Lake", lon: 102.7060, lat: 25.0520, kind: "nature" },
    { nameZh: "滇池", nameEn: "Dianchi Lake", lon: 102.6800, lat: 24.9500, kind: "nature" },
    { nameZh: "西山龙门", nameEn: "Dragon Gate, Western Hills", lon: 102.6390, lat: 24.9560, kind: "nature" },
    { nameZh: "金马碧鸡坊", nameEn: "Jinma-Biji Archways", lon: 102.7180, lat: 25.0400, kind: "landmark" },
    { nameZh: "石林", nameEn: "Stone Forest", lon: 103.2700, lat: 24.7730, kind: "nature" },
  ],
  guilin: [
    { nameZh: "象鼻山", nameEn: "Elephant Trunk Hill", lon: 110.2960, lat: 25.2570, kind: "nature" },
    { nameZh: "漓江", nameEn: "Li River", lon: 110.4000, lat: 25.0500, kind: "nature" },
    { nameZh: "阳朔西街", nameEn: "West Street, Yangshuo", lon: 110.4960, lat: 24.7780, kind: "district" },
    { nameZh: "遇龙河", nameEn: "Yulong River", lon: 110.4300, lat: 24.7400, kind: "nature" },
    { nameZh: "龙脊梯田", nameEn: "Longji Rice Terraces", lon: 110.1180, lat: 25.7560, kind: "nature" },
  ],
};

export function getCityPois(cityId: string): CityPoi[] {
  return POIS_BY_CITY[cityId] ?? [];
}
