import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ===== 欧洲 / 马耳他 =====（维基坐标；未取到维基坐标的按地图概略定位）
  valletta: [
    { nameZh: "圣约翰副主教座堂", nameEn: "St John's Co-Cathedral", lon: 14.5128, lat: 35.8978, kind: "landmark" },
    { nameZh: "上巴拉卡花园", nameEn: "Upper Barrakka Gardens", lon: 14.5122, lat: 35.8947, kind: "landmark" },
    { nameZh: "大团长宫", nameEn: "Grandmaster's Palace", lon: 14.5142, lat: 35.8986, kind: "landmark" },
    { nameZh: "圣埃尔莫堡", nameEn: "Fort St Elmo", lon: 14.5188, lat: 35.9020, kind: "landmark" },
  ],
  sliema: [
    { nameZh: "蒂涅角", nameEn: "Tigné Point", lon: 14.5123, lat: 35.9069, kind: "landmark" },
    { nameZh: "斯利马渡轮码头", nameEn: "Sliema Ferries", lon: 14.5055, lat: 35.9040, kind: "landmark" },
    { nameZh: "塔路海滨步道", nameEn: "Tower Road promenade", lon: 14.5090, lat: 35.9140, kind: "landmark" },
  ],
  "st-julians": [
    { nameZh: "斯皮诺拉湾", nameEn: "Spinola Bay", lon: 14.4905, lat: 35.9190, kind: "landmark" },
    { nameZh: "帕切维尔", nameEn: "Paceville", lon: 14.4914, lat: 35.9237, kind: "landmark" },
    { nameZh: "巴卢塔湾", nameEn: "Balluta Bay", lon: 14.4940, lat: 35.9150, kind: "landmark" },
  ],
  mdina: [
    { nameZh: "圣保罗主教座堂（姆迪纳）", nameEn: "St Paul's Cathedral, Mdina", lon: 14.4039, lat: 35.8864, kind: "landmark" },
    { nameZh: "姆迪纳主城门", nameEn: "Mdina Gate", lon: 14.4025, lat: 35.8845, kind: "landmark" },
    { nameZh: "罗马宅邸遗址", nameEn: "Domvs Romana", lon: 14.4001, lat: 35.8853, kind: "landmark" },
    { nameZh: "圣保罗地下墓穴", nameEn: "St Paul's Catacombs", lon: 14.3976, lat: 35.8807, kind: "landmark" },
  ],
  birgu: [
    { nameZh: "圣安杰洛堡", nameEn: "Fort St Angelo", lon: 14.5183, lat: 35.8919, kind: "landmark" },
    { nameZh: "宗教裁判所宫", nameEn: "Inquisitor's Palace", lon: 14.5225, lat: 35.8872, kind: "landmark" },
    { nameZh: "马耳他海事博物馆", nameEn: "Malta Maritime Museum", lon: 14.5208, lat: 35.8875, kind: "landmark" },
    { nameZh: "森格莱阿", nameEn: "Senglea", lon: 14.5169, lat: 35.8878, kind: "landmark" },
  ],
  "victoria-gozo": [
    { nameZh: "维多利亚古城堡", nameEn: "Cittadella, Victoria", lon: 14.2394, lat: 36.0464, kind: "landmark" },
    { nameZh: "吉甘提亚神庙", nameEn: "Ġgantija Temples", lon: 14.2692, lat: 36.0472, kind: "landmark" },
    { nameZh: "塔皮努圣母堂", nameEn: "Ta' Pinu Basilica", lon: 14.2148, lat: 36.0618, kind: "landmark" },
    { nameZh: "施伦迪湾", nameEn: "Xlendi Bay", lon: 14.2189, lat: 36.0297, kind: "landmark" },
    { nameZh: "德维耶拉内海", nameEn: "Inland Sea, Dwejra", lon: 14.1911, lat: 36.0538, kind: "landmark" },
  ],
  marsaxlokk: [
    { nameZh: "马尔萨什洛克海滨与渔船", nameEn: "Marsaxlokk waterfront", lon: 14.5447, lat: 35.8417, kind: "landmark" },
    { nameZh: "圣彼得池", nameEn: "St Peter's Pool", lon: 14.5620, lat: 35.8340, kind: "landmark" },
  ],
  mellieha: [
    { nameZh: "梅利哈圣母堂", nameEn: "Sanctuary of Our Lady of Mellieħa", lon: 14.3613, lat: 35.9604, kind: "landmark" },
    { nameZh: "梅利哈湾", nameEn: "Mellieħa Bay", lon: 14.3503, lat: 35.9699, kind: "landmark" },
    { nameZh: "大力水手村", nameEn: "Popeye Village", lon: 14.3413, lat: 35.9608, kind: "landmark" },
    { nameZh: "红塔（圣阿加莎塔）", nameEn: "Red Tower (St Agatha's Tower)", lon: 14.3390, lat: 35.9770, kind: "landmark" },
  ],
  "st-pauls-bay": [
    { nameZh: "布吉巴", nameEn: "Buġibba", lon: 14.4117, lat: 35.9492, kind: "landmark" },
    { nameZh: "夸拉", nameEn: "Qawra", lon: 14.4200, lat: 35.9542, kind: "landmark" },
    { nameZh: "圣保罗群岛", nameEn: "St Paul's Islands", lon: 14.4000, lat: 35.9700, kind: "landmark" },
    { nameZh: "西马尔湿地保护区", nameEn: "Is-Simar Nature Reserve", lon: 14.3822, lat: 35.9456, kind: "landmark" },
  ],
  qrendi: [
    { nameZh: "哈扎伊姆神庙", nameEn: "Ħaġar Qim Temples", lon: 14.4422, lat: 35.8278, kind: "landmark" },
    { nameZh: "姆纳德拉神庙", nameEn: "Mnajdra Temples", lon: 14.4364, lat: 35.8267, kind: "landmark" },
    { nameZh: "蓝洞", nameEn: "Blue Grotto", lon: 14.45, lat: 35.8167, kind: "landmark" },
    { nameZh: "泽里格谷渔村", nameEn: "Wied iż-Żurrieq", lon: 14.4586, lat: 35.8225, kind: "landmark" },
    { nameZh: "马克卢巴塌陷坑", nameEn: "Il-Maqluba sinkhole", lon: 14.4578, lat: 35.8306, kind: "landmark" },
  ],
  xaghra: [
    { nameZh: "季甘蒂亚神庙（世界遗产）", nameEn: "Ġgantija temples", lon: 14.2691, lat: 36.0472, kind: "landmark" },
    { nameZh: "塔科拉风车", nameEn: "Ta' Kola Windmill", lon: 14.2668, lat: 36.0498, kind: "landmark" },
    { nameZh: "圣母诞辰圣殿", nameEn: "Basilica of the Nativity of Our Lady", lon: 14.265, lat: 36.0503, kind: "landmark" },
    { nameZh: "尼努溶洞", nameEn: "Ninu Cave", lon: 14.2646, lat: 36.0512, kind: "nature" },
    { nameZh: "拉姆拉湾（红沙滩）", nameEn: "Ir-Ramla l-Ħamra", lon: 14.2824, lat: 36.0622, kind: "nature" },
  ],
  mosta: [
    { nameZh: "莫斯塔圆顶教堂", nameEn: "Mosta Rotunda", lon: 14.4258, lat: 35.9101, kind: "landmark" },
    { nameZh: "塔比斯特拉地下墓穴", nameEn: "Ta' Bistra Catacombs", lon: 14.4162, lat: 35.9155, kind: "landmark" },
    { nameZh: "莫斯塔堡（不对外开放）", nameEn: "Fort Mosta (not open to visitors)", lon: 14.4263, lat: 35.9226, kind: "landmark" },
    { nameZh: "加塞尔谷", nameEn: "Wied il-Għasel", lon: 14.4268, lat: 35.9124, kind: "nature" },
    { nameZh: "斯佩兰扎谷", nameEn: "Speranza Valley", lon: 14.4118, lat: 35.9061, kind: "nature" },
  ],
};
