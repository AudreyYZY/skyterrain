import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ===== 亚洲 / 乌兹别克斯坦 =====（UNESCO 组成部分坐标优先，其次 Wikidata P625，缺的取 OpenStreetMap）
  tashkent: [
    { nameZh: "乔尔苏巴扎", nameEn: "Chorsu Bazaar", lon: 69.2351, lat: 41.3268, kind: "landmark" },
    { nameZh: "哈兹拉特·伊玛目建筑群", nameEn: "Hazrati Imam Complex", lon: 69.2399, lat: 41.3374, kind: "landmark" },
    { nameZh: "阿米尔·帖木儿广场", nameEn: "Amir Timur Square", lon: 69.2797, lat: 41.3114, kind: "landmark" },
    { nameZh: "乌兹别克斯坦国家历史博物馆", nameEn: "State Museum of History of Uzbekistan", lon: 69.2693, lat: 41.3114, kind: "landmark" },
    { nameZh: "国家艺术博物馆", nameEn: "State Museum of Arts", lon: 69.2779, lat: 41.3028, kind: "landmark" },
    { nameZh: "宇航员地铁站", nameEn: "Kosmonavtlar metro station", lon: 69.2647, lat: 41.3052, kind: "landmark" },
    { nameZh: "塔什干电视塔", nameEn: "Tashkent TV Tower", lon: 69.2846, lat: 41.3456, kind: "landmark" },
  ],
  samarkand: [
    { nameZh: "雷吉斯坦广场", nameEn: "Registan", lon: 66.9756, lat: 39.6547, kind: "landmark" },
    { nameZh: "古尔·艾米尔陵", nameEn: "Gur-e Amir", lon: 66.9689, lat: 39.6483, kind: "landmark" },
    { nameZh: "比比·哈内姆清真寺", nameEn: "Bibi-Khanym Mosque", lon: 66.9797, lat: 39.6606, kind: "landmark" },
    { nameZh: "沙赫静达建筑群", nameEn: "Shah-i-Zinda", lon: 66.9879, lat: 39.6626, kind: "landmark" },
    { nameZh: "兀鲁伯天文台", nameEn: "Ulugh Beg Observatory", lon: 67.0056, lat: 39.6752, kind: "landmark" },
    { nameZh: "阿弗拉西阿卜遗址", nameEn: "Afrasiyab", lon: 66.9877, lat: 39.6713, kind: "landmark" },
    { nameZh: "锡亚布巴扎", nameEn: "Siyob Bazaar", lon: 66.9795, lat: 39.6660, kind: "landmark" },
  ],
  bukhara: [
    { nameZh: "雅克城堡", nameEn: "Ark of Bukhara", lon: 64.4103, lat: 39.7778, kind: "landmark" },
    { nameZh: "卡扬宣礼塔", nameEn: "Kalyan Minaret", lon: 64.4150, lat: 39.7757, kind: "landmark" },
    { nameZh: "萨曼王陵", nameEn: "Samanid Mausoleum", lon: 64.4006, lat: 39.7770, kind: "landmark" },
    { nameZh: "拉比哈乌兹", nameEn: "Lyabi-Hauz", lon: 64.4202, lat: 39.7731, kind: "landmark" },
    { nameZh: "查尔米诺尔", nameEn: "Chor Minor", lon: 64.4274, lat: 39.7748, kind: "landmark" },
    { nameZh: "扎尔加龙圆顶市场", nameEn: "Toqi Zargaron trading dome", lon: 64.4167, lat: 39.7764, kind: "landmark" },
  ],
  khiva: [
    { nameZh: "伊钦·卡拉内城", nameEn: "Itchan Kala", lon: 60.3603, lat: 41.3781, kind: "landmark" },
    { nameZh: "卡尔塔宣礼塔", nameEn: "Kalta Minor Minaret", lon: 60.3580, lat: 41.3784, kind: "landmark" },
    { nameZh: "伊斯兰·霍加宣礼塔", nameEn: "Islam Khodja Minaret", lon: 60.3601, lat: 41.3766, kind: "landmark" },
    { nameZh: "库尼亚·阿尔克", nameEn: "Kunya Ark", lon: 60.3582, lat: 41.3789, kind: "landmark" },
    { nameZh: "塔什·哈乌利宫", nameEn: "Tosh Hovli Palace", lon: 60.3613, lat: 41.3784, kind: "landmark" },
    { nameZh: "穆罕默德·阿明汗经学院", nameEn: "Muhammad Amin Khan Madrasah", lon: 60.3572, lat: 41.3780, kind: "landmark" },
  ],
  kokand: [
    { nameZh: "胡达雅尔汗宫", nameEn: "Khudayar Khan Palace", lon: 70.9375, lat: 40.5383, kind: "landmark" },
    { nameZh: "浩罕主麻清真寺", nameEn: "Jami Mosque of Kokand", lon: 70.9492, lat: 40.5326, kind: "landmark" },
  ],
  shahrisabz: [
    { nameZh: "阿克萨赖宫遗址", nameEn: "Ak-Saray Palace ruins", lon: 66.8295, lat: 39.0608, kind: "landmark" },
    { nameZh: "多鲁特·提拉瓦特建筑群", nameEn: "Dorut Tilavat complex", lon: 66.8275, lat: 39.0497, kind: "landmark" },
    { nameZh: "哈兹拉特·伊玛目清真寺", nameEn: "Hazrat Imam Mosque", lon: 66.8298, lat: 39.0501, kind: "landmark" },
  ],
  qarshi: [
    { nameZh: "奥迪纳清真寺", nameEn: "Odina Mosque", lon: 65.8032, lat: 38.8677, kind: "landmark" },
    { nameZh: "卡尔希主麻清真寺", nameEn: "Jami Mosque of Karshi", lon: 65.7911, lat: 38.8637, kind: "landmark" },
  ],
};
