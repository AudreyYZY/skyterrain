import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ── 西班牙 ──
  madrid: [
    { nameZh: "普拉多博物馆", nameEn: "Prado Museum", lon: -3.6926, lat: 40.4138, kind: "landmark" },
    { nameZh: "王宫", nameEn: "Royal Palace", lon: -3.7141, lat: 40.4180, kind: "landmark" },
    { nameZh: "丽池公园", nameEn: "El Retiro Park", lon: -3.6844, lat: 40.4153, kind: "nature" },
    { nameZh: "格兰大道", nameEn: "Gran Vía", lon: -3.7038, lat: 40.4200, kind: "district" },
    { nameZh: "托莱多", nameEn: "Toledo", lon: -4.0273, lat: 39.8628, kind: "district" },
  ],
  barcelona: [
    { nameZh: "圣家堂", nameEn: "Sagrada Família", lon: 2.1744, lat: 41.4036, kind: "landmark" },
    { nameZh: "米拉之家", nameEn: "Casa Milà", lon: 2.1619, lat: 41.3954, kind: "landmark" },
    { nameZh: "哥特区", nameEn: "Gothic Quarter", lon: 2.1770, lat: 41.3833, kind: "district" },
    { nameZh: "蒙锥克山", nameEn: "Montjuïc", lon: 2.1490, lat: 41.3641, kind: "nature" },
    { nameZh: "巴塞罗内塔海滩", nameEn: "Barceloneta Beach", lon: 2.1925, lat: 41.3785, kind: "nature" },
  ],
  seville: [
    { nameZh: "塞维利亚主教座堂", nameEn: "Seville Cathedral", lon: -5.9930, lat: 37.3860, kind: "landmark" },
    { nameZh: "阿尔卡萨尔王宫", nameEn: "Real Alcázar", lon: -5.9903, lat: 37.3838, kind: "landmark" },
    { nameZh: "西班牙广场", nameEn: "Plaza de España", lon: -5.9878, lat: 37.3772, kind: "landmark" },
    { nameZh: "特里亚纳区", nameEn: "Triana", lon: -6.0020, lat: 37.3850, kind: "district" },
  ],
  valencia: [
    { nameZh: "艺术科学城", nameEn: "City of Arts and Sciences", lon: -0.3487, lat: 39.4540, kind: "landmark" },
    { nameZh: "中央市场", nameEn: "Central Market", lon: -0.3789, lat: 39.4746, kind: "landmark" },
    { nameZh: "丝绸交易所", nameEn: "Silk Exchange", lon: -0.3785, lat: 39.4749, kind: "landmark" },
    { nameZh: "阿尔布费拉湖", nameEn: "Albufera", lon: -0.3200, lat: 39.3300, kind: "nature" },
  ],
  granada: [
    { nameZh: "阿尔罕布拉宫", nameEn: "Alhambra", lon: -3.5881, lat: 37.1761, kind: "landmark" },
    { nameZh: "阿尔拜辛区", nameEn: "Albaicín", lon: -3.5942, lat: 37.1820, kind: "district" },
    { nameZh: "格拉纳达主教座堂", nameEn: "Granada Cathedral", lon: -3.5994, lat: 37.1765, kind: "landmark" },
  ],
  malaga: [
    { nameZh: "毕加索博物馆", nameEn: "Picasso Museum", lon: -4.4204, lat: 36.7215, kind: "landmark" },
    { nameZh: "阿尔卡萨巴", nameEn: "Alcazaba", lon: -4.4160, lat: 36.7215, kind: "landmark" },
    { nameZh: "希布拉法罗城堡", nameEn: "Gibralfaro Castle", lon: -4.4130, lat: 36.7238, kind: "landmark" },
    { nameZh: "马拉格塔海滩", nameEn: "Malagueta Beach", lon: -4.4100, lat: 36.7200, kind: "nature" },
  ],
  bilbao: [
    { nameZh: "古根海姆博物馆", nameEn: "Guggenheim Museum Bilbao", lon: -2.9340, lat: 43.2686, kind: "landmark" },
    { nameZh: "老城七条街", nameEn: "Casco Viejo (Siete Calles)", lon: -2.9230, lat: 43.2580, kind: "district" },
    { nameZh: "阿尔恰恩达山", nameEn: "Mount Artxanda", lon: -2.9370, lat: 43.2760, kind: "nature" },
  ],
  "santiago-de-compostela": [
    { nameZh: "圣地亚哥主教座堂", nameEn: "Santiago Cathedral", lon: -8.5443, lat: 42.8805, kind: "landmark" },
    { nameZh: "奥夫拉多依罗广场", nameEn: "Praza do Obradoiro", lon: -8.5450, lat: 42.8809, kind: "landmark" },
  ],
  zaragoza: [
    { nameZh: "皮拉尔圣母大教堂", nameEn: "Basilica of Our Lady of the Pillar", lon: -0.8896, lat: 41.6561, kind: "landmark" },
    { nameZh: "阿尔哈费里亚宫", nameEn: "Aljafería Palace", lon: -0.9080, lat: 41.6470, kind: "landmark" },
    { nameZh: "罗马剧场遗址", nameEn: "Roman Theatre ruins", lon: -0.8790, lat: 41.6510, kind: "landmark" },
  ],
  palma: [
    { nameZh: "帕尔马主教座堂", nameEn: "Palma Cathedral", lon: 2.6475, lat: 39.5674, kind: "landmark" },
    { nameZh: "贝尔维尔城堡", nameEn: "Bellver Castle", lon: 2.6250, lat: 39.5680, kind: "landmark" },
    { nameZh: "德拉阿洞穴", nameEn: "Caves of Drach", lon: 3.3300, lat: 39.4230, kind: "nature" },
  ],
  "santa-cruz-de-tenerife": [
    { nameZh: "泰德国家公园", nameEn: "Teide National Park", lon: -16.6425, lat: 28.2717, kind: "nature" },
    { nameZh: "特内里费音乐厅", nameEn: "Auditorio de Tenerife", lon: -16.2450, lat: 28.4600, kind: "landmark" },
    { nameZh: "阿纳加山地", nameEn: "Anaga Mountains", lon: -16.2200, lat: 28.5500, kind: "nature" },
  ],

  // ── 西班牙 批2（2026-09-05）──
  "san-sebastian": [
    { nameZh: "贝壳海滩", nameEn: "La Concha Beach", lon: -1.9900, lat: 43.3180, kind: "nature" },
    { nameZh: "老城（品尝小吃）", nameEn: "Parte Vieja (pintxos)", lon: -1.9840, lat: 43.3240, kind: "district" },
    { nameZh: "乌尔古尔山", nameEn: "Monte Urgull", lon: -1.9860, lat: 43.3260, kind: "nature" },
    { nameZh: "伊格尔多山缆车", nameEn: "Monte Igueldo Funicular", lon: -2.0080, lat: 43.3140, kind: "transport" },
    { nameZh: "风之梳", nameEn: "Peine del Viento", lon: -2.0130, lat: 43.3160, kind: "landmark" },
    { nameZh: "苏里奥拉海滩", nameEn: "Zurriola Beach", lon: -1.9750, lat: 43.3260, kind: "nature" },
  ],
  toledo: [
    { nameZh: "托莱多主教座堂", nameEn: "Toledo Cathedral", lon: -4.0240, lat: 39.8570, kind: "landmark" },
    { nameZh: "阿尔卡萨尔", nameEn: "Alcázar of Toledo", lon: -4.0210, lat: 39.8580, kind: "landmark" },
    { nameZh: "圣多梅教堂（埃尔·格列柯）", nameEn: "Santo Tomé (El Greco)", lon: -4.0290, lat: 39.8570, kind: "landmark" },
    { nameZh: "圣玛丽亚·拉·布兰卡犹太会堂", nameEn: "Santa María la Blanca Synagogue", lon: -4.0310, lat: 39.8580, kind: "landmark" },
    { nameZh: "河谷观景台", nameEn: "Mirador del Valle", lon: -4.0200, lat: 39.8500, kind: "nature" },
    { nameZh: "托莱多站", nameEn: "Toledo Station", lon: -4.0090, lat: 39.8620, kind: "transport" },
  ],
  cordoba: [
    { nameZh: "清真寺—主教座堂", nameEn: "Mezquita-Cathedral", lon: -4.7794, lat: 37.8790, kind: "landmark" },
    { nameZh: "罗马桥", nameEn: "Roman Bridge", lon: -4.7780, lat: 37.8770, kind: "landmark" },
    { nameZh: "犹太区", nameEn: "Judería", lon: -4.7830, lat: 37.8800, kind: "district" },
    { nameZh: "基督教君主城堡", nameEn: "Alcázar de los Reyes Cristianos", lon: -4.7820, lat: 37.8770, kind: "landmark" },
    { nameZh: "麦地那·阿萨哈拉", nameEn: "Medina Azahara", lon: -4.8670, lat: 37.8880, kind: "landmark" },
    { nameZh: "科尔多瓦站", nameEn: "Córdoba Station", lon: -4.7900, lat: 37.8880, kind: "transport" },
  ],
  salamanca: [
    { nameZh: "马约尔广场", nameEn: "Plaza Mayor", lon: -5.6640, lat: 40.9650, kind: "district" },
    { nameZh: "新旧主教座堂", nameEn: "Old & New Cathedrals", lon: -5.6660, lat: 40.9600, kind: "landmark" },
    { nameZh: "大学与贝壳之家", nameEn: "University & Casa de las Conchas", lon: -5.6670, lat: 40.9620, kind: "landmark" },
    { nameZh: "罗马桥", nameEn: "Roman Bridge", lon: -5.6690, lat: 40.9580, kind: "landmark" },
    { nameZh: "萨拉曼卡站", nameEn: "Salamanca Station", lon: -5.6560, lat: 40.9720, kind: "transport" },
  ],
  girona: [
    { nameZh: "赫罗纳主教座堂", nameEn: "Girona Cathedral", lon: 2.8260, lat: 41.9875, kind: "landmark" },
    { nameZh: "犹太区", nameEn: "El Call (Jewish Quarter)", lon: 2.8250, lat: 41.9865, kind: "district" },
    { nameZh: "奥尼亚尔河彩色房屋", nameEn: "Onyar Houses", lon: 2.8240, lat: 41.9850, kind: "landmark" },
    { nameZh: "阿拉伯浴场", nameEn: "Arab Baths", lon: 2.8265, lat: 41.9885, kind: "landmark" },
    { nameZh: "城墙步道", nameEn: "Passeig de la Muralla", lon: 2.8300, lat: 41.9860, kind: "landmark" },
    { nameZh: "赫罗纳站", nameEn: "Girona Station", lon: 2.8170, lat: 41.9790, kind: "transport" },
  ],
  "las-palmas": [
    { nameZh: "拉斯坎特拉斯海滩", nameEn: "Las Canteras Beach", lon: -15.4360, lat: 28.1400, kind: "nature" },
    { nameZh: "韦格塔老城与圣安娜主教座堂", nameEn: "Vegueta & Santa Ana Cathedral", lon: -15.4140, lat: 28.1000, kind: "district" },
    { nameZh: "哥伦布之家", nameEn: "Casa de Colón", lon: -15.4130, lat: 28.1005, kind: "landmark" },
    { nameZh: "加那利博物馆", nameEn: "Museo Canario", lon: -15.4145, lat: 28.0995, kind: "landmark" },
    { nameZh: "特里亚纳街", nameEn: "Calle Triana", lon: -15.4160, lat: 28.1050, kind: "district" },
    { nameZh: "圣卡塔利娜公园", nameEn: "Parque Santa Catalina", lon: -15.4310, lat: 28.1400, kind: "nature" },
  ],
};
