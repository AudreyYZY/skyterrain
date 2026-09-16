import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // 菲律宾
  manila: [
    { nameZh: "圣地亚哥堡（王城区）", nameEn: "Fort Santiago (Intramuros)", lon: 120.9740, lat: 14.5895, kind: "landmark" },
    { nameZh: "黎刹公园", nameEn: "Rizal Park", lon: 120.9790, lat: 14.5831, kind: "landmark" },
    { nameZh: "马卡蒂商业区", nameEn: "Makati CBD", lon: 121.0244, lat: 14.5547, kind: "district" },
    { nameZh: "国家博物馆", nameEn: "National Museum", lon: 120.9799, lat: 14.5836, kind: "landmark" },
  ],
  "cebu-city": [
    { nameZh: "麦哲伦十字架与圣婴大教堂", nameEn: "Magellan's Cross & Basilica del Santo Niño", lon: 123.9019, lat: 10.2934, kind: "landmark" },
    { nameZh: "圣佩德罗堡", nameEn: "Fort San Pedro", lon: 123.9053, lat: 10.2919, kind: "landmark" },
    { nameZh: "麦克坦岛海滩度假区", nameEn: "Mactan Island Beach Resorts", lon: 123.9700, lat: 10.2600, kind: "nature" },
    { nameZh: "宿务IT商业园区", nameEn: "Cebu IT Park", lon: 123.9057, lat: 10.3306, kind: "district" },
  ],
  baguio: [
    { nameZh: "碧瑶大教堂", nameEn: "Baguio Cathedral", lon: 120.5943, lat: 16.4128, kind: "landmark" },
    { nameZh: "彩虹公园", nameEn: "Burnham Park", lon: 120.5931, lat: 16.4113, kind: "landmark" },
    { nameZh: "普拉格山国家公园", nameEn: "Mount Pulag National Park", lon: 120.90, lat: 16.5947, kind: "nature" },
    { nameZh: "松林公园", nameEn: "Wright Park", lon: 120.6244, lat: 16.4126, kind: "nature" },
  ],
  "puerto-princesa": [
    { nameZh: "普林塞萨港地下河国家公园", nameEn: "Puerto Princesa Underground River National Park", lon: 118.9219, lat: 10.1996, kind: "nature" },
    { nameZh: "霍纳桑湾", nameEn: "Honda Bay", lon: 118.80, lat: 9.85, kind: "nature" },
    { nameZh: "巴拉望野生动物救护中心", nameEn: "Palawan Wildlife Rescue and Conservation Center", lon: 118.7167, lat: 9.8064, kind: "landmark" },
  ],
  legazpi: [
    { nameZh: "卡格萨瓦教堂遗址", nameEn: "Cagsawa Ruins", lon: 123.6844, lat: 13.1522, kind: "landmark" },
    { nameZh: "马荣火山观景点", nameEn: "Mayon Volcano Viewpoint", lon: 123.685, lat: 13.2572, kind: "nature" },
    { nameZh: "达拉牙教堂", nameEn: "Daraga Church", lon: 123.7256, lat: 13.1494, kind: "landmark" },
  ],
  tagaytay: [
    { nameZh: "塔阿尔湖观景台", nameEn: "Taal Lake Viewpoint", lon: 120.9938, lat: 14.0021, kind: "nature" },
    { nameZh: "天空之上人民公园", nameEn: "People's Park in the Sky", lon: 120.9294, lat: 14.1275, kind: "landmark" },
    { nameZh: "天空探险乐园", nameEn: "Sky Ranch", lon: 120.9394, lat: 14.1094, kind: "landmark" },
  ],
  boracay: [
    { nameZh: "白沙滩", nameEn: "White Beach", lon: 121.9236, lat: 11.9722, kind: "nature" },
    { nameZh: "布拉波海滩", nameEn: "Bulabog Beach", lon: 121.9314, lat: 11.9689, kind: "nature" },
    { nameZh: "D'Mall购物餐饮区", nameEn: "D'Mall", lon: 121.9236, lat: 11.9633, kind: "district" },
  ],
  "el-nido-town": [
    { nameZh: "大泻湖", nameEn: "Big Lagoon", lon: 119.3833, lat: 11.2000, kind: "nature" },
    { nameZh: "小泻湖", nameEn: "Small Lagoon", lon: 119.38, lat: 11.19, kind: "nature" },
    { nameZh: "纳克帕克海滩", nameEn: "Nacpan Beach", lon: 119.4128, lat: 11.2394, kind: "nature" },
  ],
  "coron-town": [
    { nameZh: "卡杨甘湖", nameEn: "Kayangan Lake", lon: 120.1975, lat: 11.9958, kind: "nature" },
    { nameZh: "双子泻湖", nameEn: "Twin Lagoon", lon: 120.20, lat: 12.06, kind: "nature" },
    { nameZh: "巴拉库达湖", nameEn: "Barracuda Lake", lon: 120.21, lat: 12.07, kind: "nature" },
  ],
  tagbilaran: [
    { nameZh: "巧克力山观景台", nameEn: "Chocolate Hills Viewpoint", lon: 124.1697, lat: 9.8264, kind: "nature" },
    { nameZh: "眼镜猴保护中心", nameEn: "Tarsier Conservation Area", lon: 123.9772, lat: 9.6864, kind: "landmark" },
    { nameZh: "洛博克河", nameEn: "Loboc River", lon: 124.0322, lat: 9.6314, kind: "nature" },
  ],
  vigan: [
    { nameZh: "横甘街", nameEn: "Calle Crisologo", lon: 120.3872, lat: 17.5747, kind: "district" },
    { nameZh: "维甘大教堂", nameEn: "Vigan Cathedral", lon: 120.3878, lat: 17.5747, kind: "landmark" },
    { nameZh: "西索克南遗产村", nameEn: "Syquia Mansion", lon: 120.3861, lat: 17.5731, kind: "landmark" },
  ],
  "iloilo-city": [
    { nameZh: "卡列雷亚尔老街", nameEn: "Calle Real", lon: 122.5699009, lat: 10.6956101, kind: "district" },
    { nameZh: "哈罗主教座堂与钟楼", nameEn: "Jaro Cathedral and Belfry", lon: 122.556161, lat: 10.7235033, kind: "landmark" },
    { nameZh: "莫洛教堂", nameEn: "Molo Church", lon: 122.5448377, lat: 10.6974422, kind: "landmark" },
    { nameZh: "伊洛伊洛河滨步道", nameEn: "Iloilo River Esplanade", lon: 122.5550093, lat: 10.7029972, kind: "nature" },
    { nameZh: "伊洛伊洛博物馆", nameEn: "Museo Iloilo", lon: 122.5685065, lat: 10.7027845, kind: "landmark" },
    { nameZh: "圣佩德罗堡", nameEn: "Fort San Pedro", lon: 122.580063, lat: 10.687971, kind: "landmark" },
  ],
  banaue: [
    { nameZh: "巴纳威主观景台", nameEn: "Banaue main viewpoint", lon: 121.0573118, lat: 16.9354701, kind: "nature" },
    { nameZh: "巴塔德梯田", nameEn: "Batad Rice Terraces", lon: 121.1378218, lat: 16.9314274, kind: "nature" },
    { nameZh: "邦阿安梯田与村落", nameEn: "Bangaan Rice Terraces and village", lon: 121.1268156, lat: 16.9106647, kind: "nature" },
    { nameZh: "塔皮亚瀑布", nameEn: "Tappiya Falls", lon: 121.1365037, lat: 16.9391695, kind: "nature" },
    { nameZh: "巴纳威博物馆", nameEn: "Banaue Museum", lon: 121.0602614, lat: 16.9118542, kind: "landmark" },
  ],
};
