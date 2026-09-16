import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // 土耳其
  {
    id: "istanbul", nameZh: "伊斯坦布尔", nameEn: "Istanbul", country: "turkey", tier: "major", zone: "tr-marmara", admin1Zh: "伊斯坦布尔省", admin1En: "Istanbul Province",
    lon: 28.9784, lat: 41.0082,
    airport: { iata: "IST", nameZh: "伊斯坦布尔机场", nameEn: "Istanbul Airport", lon: 28.7519, lat: 41.2753 },
    source: "伊斯坦布尔市中心 41.0082,28.9784；IST机场（欧洲区，距市中心约35km），跨博斯普鲁斯海峡两岸、横跨亚欧两大洲：公开资料",
  },
  {
    id: "ankara", nameZh: "安卡拉", nameEn: "Ankara", country: "turkey", tier: "capital", zone: "tr-central-anatolia", admin1Zh: "安卡拉省", admin1En: "Ankara Province",
    lon: 32.8597, lat: 39.9334,
    airport: { iata: "ESB", nameZh: "安卡拉埃森博阿机场", nameEn: "Ankara Esenboğa Airport", lon: 32.9951, lat: 40.1281 },
    source: "安卡拉市中心 39.9334,32.8597；ESB机场（距市区约28km），土耳其首都、共和国成立后新建的行政中心：公开资料",
  },
  {
    id: "izmir", nameZh: "伊兹密尔", nameEn: "Izmir", country: "turkey", tier: "major", zone: "tr-aegean", admin1Zh: "伊兹密尔省", admin1En: "Izmir Province",
    lon: 27.1428, lat: 38.4237,
    airport: { iata: "ADB", nameZh: "伊兹密尔阿德南·门德雷斯机场", nameEn: "Izmir Adnan Menderes Airport", lon: 27.1570, lat: 38.2924 },
    source: "伊兹密尔市中心 38.4237,27.1428；ADB机场（距市区约18km），土耳其第三大城市、爱琴海沿岸港口，是前往以弗所古城的门户：公开资料",
  },
  {
    id: "antalya", nameZh: "安塔利亚", nameEn: "Antalya", country: "turkey", tier: "major", zone: "tr-mediterranean", admin1Zh: "安塔利亚省", admin1En: "Antalya Province",
    lon: 30.7133, lat: 36.8969,
    airport: { iata: "AYT", nameZh: "安塔利亚机场", nameEn: "Antalya Airport", lon: 30.8005, lat: 36.8987 },
    source: "安塔利亚市中心 36.8969,30.7133；AYT机场（距市区约13km），土耳其地中海（土耳其里维埃拉）旅游中心，卡莱伊奇老城临海而建：公开资料",
  },
  {
    id: "cappadocia", nameZh: "卡帕多奇亚（格雷梅）", nameEn: "Cappadocia (Göreme)", country: "turkey", tier: "notable", zone: "tr-central-anatolia", admin1Zh: "内夫谢希尔省", admin1En: "Nevşehir Province",
    lon: 34.8286, lat: 38.6431,
    airport: { iata: "NAV", nameZh: "内夫谢希尔卡帕多奇亚机场", nameEn: "Nevşehir Kapadokya Airport", lon: 34.5344, lat: 38.7708 },
    source: "格雷梅镇中心 38.6431,34.8286；NAV机场（距格雷梅约40km，车程约35至40分钟），凯塞利阿散机场（ASR）距格雷梅约69km亦可作备选门户：公开资料",
  },
  {
    id: "bodrum", nameZh: "博德鲁姆", nameEn: "Bodrum", country: "turkey", tier: "notable", zone: "tr-aegean", admin1Zh: "穆拉省", admin1En: "Muğla Province",
    lon: 27.4305, lat: 37.0344,
    airport: { iata: "BJV", nameZh: "米拉斯—博德鲁姆机场", nameEn: "Milas–Bodrum Airport", lon: 27.6644, lat: 37.2506 },
    source: "博德鲁姆市中心 37.0344,27.4305；BJV机场（距市区约36km），爱琴海南岸半岛度假胜地：公开资料",
  },
  {
    id: "pamukkale", nameZh: "棉花堡（代尼兹利）", nameEn: "Pamukkale (Denizli)", country: "turkey", tier: "notable", zone: "tr-aegean", admin1Zh: "代尼兹利省", admin1En: "Denizli Province",
    lon: 29.1189, lat: 37.9203,
    airport: { iata: "DNZ", nameZh: "代尼兹利恰尔达克机场", nameEn: "Denizli Çardak Airport", lon: 29.7013, lat: 37.7856 },
    source: "棉花堡台地 37.9203,29.1189；DNZ机场（距棉花堡约65km，距代尼兹利市区约55km）：公开资料",
  },
  {
    id: "trabzon", nameZh: "特拉布宗", nameEn: "Trabzon", country: "turkey", tier: "notable", zone: "tr-black-sea", admin1Zh: "特拉布宗省", admin1En: "Trabzon Province",
    lon: 39.7168, lat: 41.0027,
    airport: { iata: "TZX", nameZh: "特拉布宗机场", nameEn: "Trabzon Airport", lon: 39.7897, lat: 40.9950 },
    source: "特拉布宗市中心 41.0027,39.7168；TZX机场（距市区约6km），黑海东岸港口城市，是前往苏美拉修道院的门户：公开资料",
  },
  {
    id: "konya", nameZh: "科尼亚", nameEn: "Konya", country: "turkey", tier: "notable", zone: "tr-central-anatolia", admin1Zh: "科尼亚省", admin1En: "Konya Province",
    lon: 32.4932, lat: 37.8746,
    airport: { iata: "KYA", nameZh: "科尼亚机场", nameEn: "Konya Airport", lon: 32.5619, lat: 37.9787 },
    source: "科尼亚市中心 37.8746,32.4932；KYA机场（距市区约18km），塞尔柱王朝古都、鲁米与旋转苦行僧发源地：公开资料",
  },
  {
    id: "bursa", nameZh: "布尔萨", nameEn: "Bursa", country: "turkey", tier: "notable", zone: "tr-marmara", admin1Zh: "布尔萨省", admin1En: "Bursa Province",
    lon: 29.0665, lat: 40.1826,
    airport: { iata: "YEI", nameZh: "布尔萨耶尼谢希尔机场", nameEn: "Bursa Yenişehir Airport", lon: 29.5622, lat: 40.2530 },
    source: "布尔萨市中心 40.1826,29.0665；YEI机场（距市区约45km），奥斯曼帝国首个都城，紧邻乌鲁山：公开资料",
  },
  {
    id: "safranbolu", nameZh: "萨夫兰博卢", nameEn: "Safranbolu", country: "turkey", tier: "notable", zone: "tr-black-sea", admin1Zh: "卡拉比克省", admin1En: "Karabük Province",
    lon: 32.6930, lat: 41.2457,
    source: "萨夫兰博卢老城（钟楼与琴吉客栈之间）41.245666,32.692957（OSM Nominatim）；55 km 内没有任何机场记录（OurAirports 2026-09），不填 airport；ONQ 直线约 58 km（2026 年只有国际定期航班）、KFS 约 93 km、ESB 约 127 km（算）（已有城市补充批，2026-09-16）",
  },
  {
    id: "amasya", nameZh: "阿马西亚", nameEn: "Amasya", country: "turkey", tier: "notable", zone: "tr-black-sea", admin1Zh: "阿马西亚省", admin1En: "Amasya Province",
    lon: 35.8329, lat: 40.6503,
    airport: { iata: "MZH", nameZh: "阿马西亚梅尔济丰机场", nameEn: "Amasya Merzifon Airport", lon: 35.5220, lat: 40.8294 },
    source: "阿马西亚老城（耶希尔河南岸）40.650325,35.832915（OSM Nominatim）；MZH OurAirports 40.8294,35.5220，在梅尔济丰区、直线约 33 km，有国内定期航班；注：Nominatim 查「Amasya Saat Kulesi」返回的是梅尔济丰区的钟楼，不是本市的（已有城市补充批，2026-09-16）",
  },
];
