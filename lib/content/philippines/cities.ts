import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  {
    id: "manila", nameZh: "马尼拉", nameEn: "Manila", country: "philippines", tier: "capital", zone: "ph-luzon", admin1Zh: "马尼拉大都会", admin1En: "Metro Manila",
    lon: 120.9842, lat: 14.5995,
    airport: { iata: "MNL", nameZh: "尼诺伊·阿基诺国际机场", nameEn: "Ninoy Aquino International Airport", lon: 121.0198, lat: 14.5086 },
    source: "马尼拉市中心 14.5995,120.9842；MNL机场（距市区直线约 11 km，按本条目坐标算）：公开资料",
  },
  {
    id: "cebu-city", nameZh: "宿务市", nameEn: "Cebu City", country: "philippines", tier: "major", zone: "ph-visayas", admin1Zh: "宿务省", admin1En: "Cebu",
    lon: 123.8854, lat: 10.3157,
    airport: { iata: "CEB", nameZh: "麦克坦—宿务国际机场", nameEn: "Mactan-Cebu International Airport", lon: 123.9794, lat: 10.3075 },
    source: "宿务市中心 10.3157,123.8854；CEB机场（位于麦克坦岛，距市区约16km）：公开资料",
  },
  {
    id: "baguio", nameZh: "碧瑶", nameEn: "Baguio", country: "philippines", tier: "major", zone: "ph-luzon", admin1Zh: "本格特省", admin1En: "Benguet",
    lon: 120.5960, lat: 16.4023,
    airport: { iata: "MNL", nameZh: "尼诺伊·阿基诺国际机场", nameEn: "Ninoy Aquino International Airport", lon: 121.0198, lat: 14.5086 },
    source: "碧瑶市中心 16.4023,120.5960；本地洛坎机场（BAG）已停止商业客运，主要经马尼拉方向公路往返（约250km，山路车程约5至6小时）：公开资料",
  },
  {
    id: "puerto-princesa", nameZh: "普林塞萨港", nameEn: "Puerto Princesa", country: "philippines", tier: "major", zone: "ph-palawan", admin1Zh: "巴拉望省", admin1En: "Palawan",
    lon: 118.7384, lat: 9.7392,
    airport: { iata: "PPS", nameZh: "普林塞萨港国际机场", nameEn: "Puerto Princesa International Airport", lon: 118.7583, lat: 9.7422 },
    source: "普林塞萨港市中心 9.7392,118.7384；PPS机场（距市区约4km）：公开资料",
  },
  {
    id: "legazpi", nameZh: "黎牙实比", nameEn: "Legazpi", country: "philippines", tier: "notable", zone: "ph-luzon", admin1Zh: "阿尔拜省", admin1En: "Albay",
    lon: 123.7438, lat: 13.1391,
    airport: { iata: "DRP", nameZh: "比科尔国际机场", nameEn: "Bicol International Airport", lon: 123.6768, lat: 13.1119 },
    source: "黎牙实比市中心 13.1391,123.7438；DRP机场（位于达拉牙，距市区约8km，取代原黎牙实比机场）：公开资料",
  },
  {
    id: "tagaytay", nameZh: "塔加泰", nameEn: "Tagaytay", country: "philippines", tier: "notable", zone: "ph-luzon", admin1Zh: "甲米地省", admin1En: "Cavite",
    lon: 120.9367, lat: 14.1153,
    airport: { iata: "MNL", nameZh: "尼诺伊·阿基诺国际机场", nameEn: "Ninoy Aquino International Airport", lon: 121.0198, lat: 14.5086 },
    source: "塔加泰市中心 14.1153,120.9367；本地无商业机场，经马尼拉方向公路往返（约60km，车程约1.5至2小时）：公开资料",
  },
  {
    id: "boracay", nameZh: "长滩岛（马来镇）", nameEn: "Boracay (Malay)", country: "philippines", tier: "notable", zone: "ph-visayas", admin1Zh: "阿克兰省", admin1En: "Aklan",
    lon: 121.9248, lat: 11.9674,
    airport: { iata: "MPH", nameZh: "戈多弗雷多·拉莫斯机场", nameEn: "Godofredo P. Ramos Airport", lon: 121.954, lat: 11.9245 },
    source: "长滩岛 11.9674,121.9248；MPH机场（俗称卡蒂克兰机场，位于长滩岛对岸马来镇，需转乘渡船约10分钟上岛）：公开资料",
  },
  {
    id: "el-nido-town", nameZh: "艾尔尼多镇", nameEn: "El Nido", country: "philippines", tier: "notable", zone: "ph-palawan", admin1Zh: "巴拉望省", admin1En: "Palawan",
    lon: 119.4090, lat: 11.1949,
    airport: { iata: "ENI", nameZh: "艾尔尼多机场", nameEn: "El Nido Airport", lon: 119.4166, lat: 11.1783 },
    source: "艾尔尼多镇 11.1949,119.4090；ENI机场为私营小型机场（距镇区约3km），航班选择有限，多数游客经普林塞萨港转乘公路前往（约420km，车程约5至6小时）：公开资料",
  },
  {
    id: "coron-town", nameZh: "科隆镇", nameEn: "Coron", country: "philippines", tier: "notable", zone: "ph-palawan", admin1Zh: "巴拉望省", admin1En: "Palawan",
    lon: 120.2019, lat: 12.0011,
    airport: { iata: "USU", nameZh: "弗朗西斯科·雷耶斯机场", nameEn: "Francisco B. Reyes Airport", lon: 120.1042, lat: 12.1447 },
    source: "科隆镇 12.0011,120.2019；USU机场（位于布桑加岛，距镇区约30km，需转乘公路或渡船）：公开资料",
  },
  {
    id: "tagbilaran", nameZh: "塔比拉兰", nameEn: "Tagbilaran", country: "philippines", tier: "notable", zone: "ph-visayas", admin1Zh: "保和省", admin1En: "Bohol",
    lon: 123.8543, lat: 9.6474,
    airport: { iata: "TAG", nameZh: "保和—邦劳国际机场", nameEn: "Bohol-Panglao International Airport", lon: 123.7622, lat: 9.5675 },
    source: "塔比拉兰市中心 9.6474,123.8543；TAG机场（位于邦劳岛，2018年启用取代原塔比拉兰机场，距市区约18km）：公开资料",
  },
  {
    id: "vigan", nameZh: "维甘", nameEn: "Vigan", country: "philippines", tier: "notable", zone: "ph-luzon", admin1Zh: "南伊罗戈省", admin1En: "Ilocos Sur",
    lon: 120.3869, lat: 17.5747,
    airport: { iata: "LAO", nameZh: "拉瓦格国际机场", nameEn: "Laoag International Airport", lon: 120.5310, lat: 18.1751 },
    source: "维甘市中心 17.5747,120.3869；本地维甘机场客运航班暂不稳定，多数游客经马尼拉方向公路往返（约400km，车程约7至8小时）：公开资料；机场字段 2026-09-12 由 MNL（马尼拉，348 km）改为 LAO 拉瓦格国际机场（直线 69 km、有定期航班，OurAirports/RPLI）——本条目正文本来就写着「机场在北面 80 公里的拉瓦格」，注册表与正文原本矛盾",
  },
  {
    id: "iloilo-city", nameZh: "伊洛伊洛市", nameEn: "Iloilo City", country: "philippines", tier: "major", zone: "ph-visayas", admin1Zh: "伊洛伊洛省", admin1En: "Iloilo",
    lon: 122.5733, lat: 10.6933,
    airport: { iata: "ILO", nameZh: "伊洛伊洛国际机场", nameEn: "Iloilo International Airport", lon: 122.4934, lat: 10.8330 },
    source: "伊洛伊洛市中心（卡列雷亚尔一带）10.6932884,122.5732604（OSM Nominatim）；ILO OurAirports 10.8330,122.4934，直线约 18 km —— 机场在伊洛伊洛省卡巴图安镇、不在市域内（与宿务市的 CEB 同一结构），正文写明；admin1 按仓库既有惯例仍填地理上所在的省，但本市是高度城市化市、不受省政府管辖（已有城市补充批，2026-09-16）",
  },
  {
    id: "banaue", nameZh: "巴纳威", nameEn: "Banaue", country: "philippines", tier: "notable", zone: "ph-luzon", admin1Zh: "伊富高省", admin1En: "Ifugao",
    lon: 121.0608, lat: 16.9127,
    source: "巴纳威镇中心（Poblacion）16.9127250,121.0608282（OSM Nominatim）；镇内与近旁的小机场（Lepanto Mines 30 km、Bagabag 39 km）均 scheduled_service=no，不填 airport；最近有定期航班的是伊莎贝拉省卡瓦延 CYZ、直线约 74 km（算）；与地形条目 banaue-ifugao-rice-terraces（本库写作「班奈梯田」）互指（已有城市补充批，2026-09-16）",
  },
  {
    id: "bacolod", nameZh: "巴科洛德", nameEn: "Bacolod", country: "philippines", tier: "major", zone: "ph-visayas", admin1Zh: "内格罗斯西部省", admin1En: "Negros Occidental",
    lon: 122.9464, lat: 10.66933,
    airport: { iata: "BCD", nameZh: "巴科洛德-西莱国际机场", nameEn: "Bacolod–Silay International Airport", lon: 123.018879, lat: 10.776237 },
    source: "巴科洛德市中心广场 10.66933,122.94640（OSM way/53385483 leisure=park；新市政厅是另一个对象、在东南偏东 2.48 km，不要混用）；BCD 直线约 14 km、有国内与国际定期航班，**机场在北边的西莱市、不在本市市域**（比照伊洛伊洛 ILO 在卡巴图安镇的既有做法仍填 airport，正文写明）；离 FCDO 劝阻区（棉兰老）很远，见事实表 §1.1；与地形条目 mount-kanlaon 互指（已有城市补充批，2026-09-17）",
  },
  {
    id: "angeles", nameZh: "安赫莱斯", nameEn: "Angeles", country: "philippines", tier: "major", zone: "ph-luzon", admin1Zh: "邦板牙省", admin1En: "Pampanga",
    lon: 120.608022, lat: 15.165536,
    airport: { iata: "CRK", nameZh: "克拉克国际机场", nameEn: "Clark International Airport", lon: 120.559998, lat: 15.186 },
    source: "安赫莱斯市政厅 15.165536,120.608022（OSM way/96584426 amenity=townhall）—— ⚠️ **市政厅不在老城里**，老城（圣罗萨里奥一带）在西南偏南约 4 km，本条目所有距离都以市政厅为原点算，不要与老城原点混用；CRK 直线约 5.6 km、有国内与国际定期航班，**机场在克拉克自由港区内、行政上属马巴拉卡特市**，比照 ILO / SRG 的既有做法仍填 airport；与地形条目 mount-pinatubo 互指（已有城市补充批，2026-09-17）",
  },
];
