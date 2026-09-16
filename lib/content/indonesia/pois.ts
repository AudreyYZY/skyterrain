import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // 印度尼西亚
  jakarta: [
    { nameZh: "独立广场与国家纪念塔", nameEn: "Merdeka Square & National Monument", lon: 106.8272, lat: -6.1754, kind: "landmark" },
    { nameZh: "老城巴达维亚广场", nameEn: "Fatahillah Square (Kota Tua)", lon: 106.8133, lat: -6.1352, kind: "district" },
    { nameZh: "伊斯蒂克拉尔清真寺", nameEn: "Istiqlal Mosque", lon: 106.8309, lat: -6.1701, kind: "landmark" },
    { nameZh: "千岛群岛", nameEn: "Thousand Islands", lon: 106.60, lat: -5.60, kind: "nature" },
    { nameZh: "塔曼米尼印尼缩影公园", nameEn: "Taman Mini Indonesia Indah", lon: 106.8951, lat: -6.3025, kind: "landmark" },
  ],
  yogyakarta: [
    { nameZh: "婆罗浮屠", nameEn: "Borobudur", lon: 110.2038, lat: -7.6079, kind: "landmark" },
    { nameZh: "普兰巴南神庙群", nameEn: "Prambanan Temple Complex", lon: 110.4915, lat: -7.7520, kind: "landmark" },
    { nameZh: "苏丹王宫（克拉顿）", nameEn: "Kraton (Sultan's Palace)", lon: 110.3644, lat: -7.8053, kind: "landmark" },
    { nameZh: "水宫遗址", nameEn: "Taman Sari Water Castle", lon: 110.3594, lat: -7.8103, kind: "landmark" },
    { nameZh: "马利波罗大街", nameEn: "Jalan Malioboro", lon: 110.3654, lat: -7.7925, kind: "district" },
  ],
  denpasar: [
    { nameZh: "圣泉寺（提尔塔恩帕库神庙）", nameEn: "Tirta Empul Temple", lon: 115.3151, lat: -8.4149, kind: "landmark" },
    { nameZh: "乌布梯田", nameEn: "Tegalalang Rice Terrace", lon: 115.2783, lat: -8.4310, kind: "nature" },
    { nameZh: "乌鲁瓦图神庙", nameEn: "Uluwatu Temple", lon: 115.0849, lat: -8.8291, kind: "landmark" },
    { nameZh: "水明漾海滩", nameEn: "Seminyak Beach", lon: 115.1633, lat: -8.6913, kind: "nature" },
    { nameZh: "巴厘博物馆", nameEn: "Bali Museum", lon: 115.2160, lat: -8.6673, kind: "landmark" },
  ],
  surabaya: [
    { nameZh: "苏拉门鱼与鳄鱼纪念碑", nameEn: "Suro and Boyo Statue", lon: 112.7378, lat: -7.2455, kind: "landmark" },
    { nameZh: "老城阿拉伯区与红桥", nameEn: "Arab Quarter & Red Bridge", lon: 112.7350, lat: -7.2379, kind: "district" },
    { nameZh: "泗水英雄纪念碑", nameEn: "Heroes Monument (Tugu Pahlawan)", lon: 112.7378, lat: -7.2431, kind: "landmark" },
    { nameZh: "松波拉商行博物馆", nameEn: "House of Sampoerna Museum", lon: 112.7364, lat: -7.2367, kind: "landmark" },
  ],
  bandung: [
    { nameZh: "亚非会议纪念博物馆", nameEn: "Asian-African Conference Museum", lon: 107.6079, lat: -6.9214, kind: "landmark" },
    { nameZh: "丹格班佩拉胡火山口", nameEn: "Tangkuban Perahu Crater", lon: 107.6098, lat: -6.7597, kind: "nature" },
    { nameZh: "芝威德火山硫磺湖", nameEn: "Kawah Putih (Kawah White Crater)", lon: 107.4022, lat: -7.1661, kind: "nature" },
    { nameZh: "万隆理工学院周边建筑群", nameEn: "ITB Art Deco District", lon: 107.6107, lat: -6.8915, kind: "district" },
  ],
  medan: [
    { nameZh: "马以蒙清真寺（棉兰大清真寺）", nameEn: "Al Mashun Grand Mosque", lon: 98.6839, lat: 3.5875, kind: "landmark" },
    { nameZh: "马来苏丹王宫", nameEn: "Maimun Palace", lon: 98.6844, lat: 3.5822, kind: "landmark" },
    { nameZh: "帕拉帕特（多巴湖门户镇）", nameEn: "Parapat (Lake Toba Gateway)", lon: 98.9367, lat: 2.6741, kind: "district" },
    { nameZh: "武吉拉旺猩猩保护区", nameEn: "Bukit Lawang Orangutan Sanctuary", lon: 98.1194, lat: 3.5561, kind: "nature" },
  ],
  makassar: [
    { nameZh: "罗塔达要塞", nameEn: "Fort Rotterdam", lon: 119.4058, lat: -5.1345, kind: "landmark" },
    { nameZh: "洛萨里滨海大道", nameEn: "Losari Beach Promenade", lon: 119.4076, lat: -5.1372, kind: "district" },
    { nameZh: "巴龙布伊斯兰墓地建筑群", nameEn: "Barombong Islamic Cemetery Complex", lon: 119.3833, lat: -5.1811, kind: "landmark" },
  ],
  "labuan-bajo": [
    { nameZh: "帕达尔岛观景台", nameEn: "Padar Island Viewpoint", lon: 119.5722, lat: -8.6203, kind: "nature" },
    { nameZh: "粉红沙滩", nameEn: "Pink Beach", lon: 119.6469, lat: -8.5389, kind: "nature" },
    { nameZh: "卡纳瓦岛", nameEn: "Kanawa Island", lon: 119.7717, lat: -8.4325, kind: "nature" },
    { nameZh: "林卡岛", nameEn: "Rinca Island", lon: 119.6667, lat: -8.6667, kind: "nature" },
  ],
  balikpapan: [
    { nameZh: "巴厘巴板红树林保护区", nameEn: "Balikpapan Mangrove Center", lon: 116.8244, lat: -1.2419, kind: "nature" },
    { nameZh: "山区公园", nameEn: "Hutan Kota Hilltop Park", lon: 116.8397, lat: -1.2242, kind: "nature" },
    { nameZh: "克里安达努伊斯兰中心清真寺", nameEn: "Balikpapan Islamic Center", lon: 116.8961, lat: -1.2542, kind: "landmark" },
  ],
  manado: [
    { nameZh: "布纳肯国家公园", nameEn: "Bunaken National Park", lon: 124.7614, lat: 1.6214, kind: "nature" },
    { nameZh: "博尔瓦海滨大道", nameEn: "Manado Boulevard", lon: 124.8367, lat: 1.4858, kind: "district" },
    { nameZh: "万鸦老大清真寺", nameEn: "Manado Grand Mosque", lon: 124.8419, lat: 1.4909, kind: "landmark" },
  ],
  "pangkalan-bun": [
    { nameZh: "利基营地（红毛猩猩喂食站）", nameEn: "Camp Leakey", lon: 111.9333, lat: -2.7167, kind: "nature" },
    { nameZh: "塞孔耶尔河船宿码头", nameEn: "Sekonyer River Dock", lon: 111.8500, lat: -2.7500, kind: "transport" },
  ],
  semarang: [
    { nameZh: "三宝垄老城", nameEn: "Semarang Old Town", lon: 110.4268983, lat: -6.96723, kind: "district" },
    { nameZh: "布伦杜克教堂", nameEn: "Blenduk Church", lon: 110.4274633, lat: -6.9681633, kind: "landmark" },
    { nameZh: "千门大楼", nameEn: "Lawang Sewu", lon: 110.4107909, lat: -6.9839786, kind: "landmark" },
    { nameZh: "三保洞", nameEn: "Sam Poo Kong", lon: 110.3983842, lat: -6.9958722, kind: "landmark" },
    { nameZh: "中爪哇大清真寺", nameEn: "Great Mosque of Central Java", lon: 110.4455923, lat: -6.9836458, kind: "landmark" },
    { nameZh: "五岔路广场", nameEn: "Simpang Lima", lon: 110.4235821, lat: -6.9893202, kind: "district" },
    { nameZh: "丹绒马斯港", nameEn: "Tanjung Emas Port", lon: 110.4282515, lat: -6.9464685, kind: "district" },
  ],
  mataram: [
    { nameZh: "安佩南老城", nameEn: "Ampenan Old Town", lon: 116.0773385, lat: -8.5717135, kind: "district" },
    { nameZh: "梅鲁庙", nameEn: "Pura Meru", lon: 116.1312306, lat: -8.5876944, kind: "landmark" },
    { nameZh: "马尤拉水宫", nameEn: "Taman Mayura", lon: 116.1331976, lat: -8.586649, kind: "landmark" },
    { nameZh: "西努省伊斯兰中心", nameEn: "NTB Islamic Center", lon: 116.1008337, lat: -8.580264, kind: "landmark" },
    { nameZh: "洛昂巴洛克海滩", nameEn: "Loang Baloq Beach", lon: 116.0740182, lat: -8.6028864, kind: "nature" },
    { nameZh: "沙洋沙洋艺术市场", nameEn: "Sayang-Sayang Art Market", lon: 116.1270748, lat: -8.5659896, kind: "district" },
  ],
};
