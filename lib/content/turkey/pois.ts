import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // 土耳其
  istanbul: [
    { nameZh: "圣索菲亚大教堂", nameEn: "Hagia Sophia", lon: 28.9802, lat: 41.0086, kind: "landmark" },
    { nameZh: "苏丹艾哈迈德清真寺（蓝色清真寺）", nameEn: "Blue Mosque (Sultan Ahmed Mosque)", lon: 28.9768, lat: 41.0054, kind: "landmark" },
    { nameZh: "托普卡帕宫", nameEn: "Topkapı Palace", lon: 28.9834, lat: 41.0115, kind: "landmark" },
    { nameZh: "大巴扎", nameEn: "Grand Bazaar", lon: 28.9680, lat: 41.0106, kind: "district" },
    { nameZh: "加拉塔塔", nameEn: "Galata Tower", lon: 28.9744, lat: 41.0256, kind: "landmark" },
  ],
  ankara: [
    { nameZh: "安尼特卡比尔（阿塔图尔克陵）", nameEn: "Anıtkabir (Atatürk's Mausoleum)", lon: 32.8378, lat: 39.9256, kind: "landmark" },
    { nameZh: "安卡拉城堡", nameEn: "Ankara Castle", lon: 32.8617, lat: 39.9420, kind: "landmark" },
    { nameZh: "安纳托利亚文明博物馆", nameEn: "Museum of Anatolian Civilizations", lon: 32.8626, lat: 39.9398, kind: "landmark" },
  ],
  izmir: [
    { nameZh: "卡迪费卡莱城堡", nameEn: "Kadifekale (Izmir Castle)", lon: 27.1394, lat: 38.4130, kind: "landmark" },
    { nameZh: "科尔顿海滨长廊", nameEn: "Kordon Waterfront", lon: 27.1287, lat: 38.4325, kind: "nature" },
    { nameZh: "士麦那古市集遗址", nameEn: "Agora of Smyrna", lon: 27.1417, lat: 38.4193, kind: "landmark" },
    { nameZh: "以弗所古城", nameEn: "Ancient City of Ephesus", lon: 27.3417, lat: 37.9394, kind: "landmark" },
  ],
  antalya: [
    { nameZh: "卡莱伊奇老城", nameEn: "Kaleiçi Old Town", lon: 30.7058, lat: 36.8841, kind: "district" },
    { nameZh: "科尼亚勒特海滩", nameEn: "Konyaaltı Beach", lon: 30.6653, lat: 36.8598, kind: "nature" },
    { nameZh: "杜登瀑布", nameEn: "Düden Waterfalls", lon: 30.7864, lat: 36.9203, kind: "nature" },
    { nameZh: "哈德良门", nameEn: "Hadrian's Gate", lon: 30.7069, lat: 36.8847, kind: "landmark" },
    { nameZh: "阿斯彭多斯古剧场", nameEn: "Aspendos Theatre", lon: 31.1697, lat: 36.9367, kind: "landmark" },
  ],
  cappadocia: [
    { nameZh: "格雷梅露天博物馆", nameEn: "Göreme Open Air Museum", lon: 34.8436, lat: 38.6447, kind: "landmark" },
    { nameZh: "于奇希萨尔城堡", nameEn: "Uçhisar Castle", lon: 34.8083, lat: 38.6317, kind: "landmark" },
    { nameZh: "帕夏贝（精灵烟囱）", nameEn: "Paşabağı (Fairy Chimneys)", lon: 34.8611, lat: 38.6864, kind: "nature" },
    { nameZh: "德林库尤地下城", nameEn: "Derinkuyu Underground City", lon: 34.7356, lat: 38.3778, kind: "landmark" },
    { nameZh: "爱情谷", nameEn: "Love Valley", lon: 34.8278, lat: 38.6597, kind: "nature" },
  ],
  bodrum: [
    { nameZh: "博德鲁姆城堡（圣彼得城堡）", nameEn: "Bodrum Castle (Castle of St. Peter)", lon: 27.4297, lat: 37.0333, kind: "landmark" },
    { nameZh: "哈利卡纳苏斯古剧场", nameEn: "Ancient Theatre of Halicarnassus", lon: 27.4258, lat: 37.0378, kind: "landmark" },
    { nameZh: "博德鲁姆风车", nameEn: "Bodrum Windmills", lon: 27.4467, lat: 37.0389, kind: "landmark" },
  ],
  pamukkale: [
    { nameZh: "棉花堡钙化梯田", nameEn: "Pamukkale Travertines", lon: 29.1189, lat: 37.9203, kind: "nature" },
    { nameZh: "希拉波利斯古城", nameEn: "Ancient City of Hierapolis", lon: 29.1233, lat: 37.9258, kind: "landmark" },
    { nameZh: "克利奥帕特拉温泉池", nameEn: "Cleopatra's Antique Pool", lon: 29.1219, lat: 37.9236, kind: "landmark" },
  ],
  trabzon: [
    { nameZh: "苏美拉修道院", nameEn: "Sümela Monastery", lon: 39.6647, lat: 40.6997, kind: "landmark" },
    { nameZh: "特拉布宗圣索菲亚教堂", nameEn: "Hagia Sophia of Trabzon", lon: 39.7186, lat: 41.0003, kind: "landmark" },
    { nameZh: "阿塔图尔克行馆", nameEn: "Atatürk Kiosk", lon: 39.7325, lat: 40.9925, kind: "landmark" },
    { nameZh: "乌宗湖", nameEn: "Uzungöl", lon: 40.2864, lat: 40.6194, kind: "nature" },
  ],
  konya: [
    { nameZh: "梅夫拉纳博物馆", nameEn: "Mevlana Museum", lon: 32.5089, lat: 37.8714, kind: "landmark" },
    { nameZh: "阿拉丁清真寺", nameEn: "Alaeddin Mosque", lon: 32.4933, lat: 37.8722, kind: "landmark" },
    { nameZh: "细长尖塔神学院博物馆", nameEn: "İnce Minaret Museum", lon: 32.4919, lat: 37.8706, kind: "landmark" },
  ],
  bursa: [
    { nameZh: "布尔萨大清真寺（乌鲁清真寺）", nameEn: "Grand Mosque (Ulu Cami)", lon: 29.0644, lat: 40.1828, kind: "landmark" },
    { nameZh: "绿色清真寺", nameEn: "Green Mosque (Yeşil Cami)", lon: 29.0764, lat: 40.1836, kind: "landmark" },
    { nameZh: "科扎商队旅馆", nameEn: "Koza Han", lon: 29.0656, lat: 40.1831, kind: "district" },
  ],
};
