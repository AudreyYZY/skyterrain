import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ── 冰岛 ──
  reykjavik: [
    { nameZh: "哈尔格林姆教堂", nameEn: "Hallgrímskirkja", lon: -21.9266, lat: 64.1417, kind: "landmark" },
    { nameZh: "哈帕音乐厅", nameEn: "Harpa Concert Hall", lon: -21.9327, lat: 64.1503, kind: "landmark" },
    { nameZh: "“太阳航行者”雕塑", nameEn: "Sun Voyager", lon: -21.9224, lat: 64.1475, kind: "landmark" },
    { nameZh: "冰岛国家博物馆", nameEn: "National Museum of Iceland", lon: -21.9490, lat: 64.1416, kind: "landmark" },
    { nameZh: "劳加维格购物街", nameEn: "Laugavegur", lon: -21.9270, lat: 64.1443, kind: "district" },
    { nameZh: "辛格维利尔国家公园", nameEn: "Þingvellir National Park", lon: -21.1281, lat: 64.2559, kind: "nature" },
    { nameZh: "黄金瀑布与盖歇尔间歇泉", nameEn: "Gullfoss & Geysir", lon: -20.2000, lat: 64.3200, kind: "nature" },
  ],
  keflavik: [
    { nameZh: "蓝湖地热温泉", nameEn: "Blue Lagoon", lon: -22.4495, lat: 63.8804, kind: "nature" },
    { nameZh: "大陆桥", nameEn: "Bridge Between Continents", lon: -22.6740, lat: 63.8683, kind: "landmark" },
    { nameZh: "格纳胡佛地热区", nameEn: "Gunnuhver", lon: -22.6845, lat: 63.8188, kind: "nature" },
    { nameZh: "瓦拉赫努克海崖与灯塔", nameEn: "Valahnúkamöl & Reykjanesviti", lon: -22.7130, lat: 63.8155, kind: "nature" },
    { nameZh: "维京世界博物馆", nameEn: "Viking World", lon: -22.5720, lat: 63.9925, kind: "landmark" },
  ],
  vik: [
    { nameZh: "雷尼斯黑沙滩", nameEn: "Reynisfjara Black Beach", lon: -19.0447, lat: 63.4034, kind: "nature" },
    { nameZh: "迪尔霍拉埃海蚀拱", nameEn: "Dyrhólaey", lon: -19.1280, lat: 63.4020, kind: "nature" },
    { nameZh: "维克小教堂", nameEn: "Víkurkirkja", lon: -19.0060, lat: 63.4200, kind: "landmark" },
    { nameZh: "斯科加瀑布", nameEn: "Skógafoss", lon: -19.5111, lat: 63.5320, kind: "nature" },
    { nameZh: "费亚德拉尔峡谷", nameEn: "Fjaðrárgljúfur", lon: -18.1720, lat: 63.7710, kind: "nature" },
    { nameZh: "索尔黑马冰川", nameEn: "Sólheimajökull", lon: -19.3670, lat: 63.5300, kind: "nature" },
  ],
  hofn: [
    { nameZh: "杰古沙龙冰河湖", nameEn: "Jökulsárlón", lon: -16.1794, lat: 64.0484, kind: "nature" },
    { nameZh: "钻石沙滩", nameEn: "Diamond Beach", lon: -16.1830, lat: 64.0430, kind: "nature" },
    { nameZh: "菲亚德尔冰河湖", nameEn: "Fjallsárlón", lon: -16.3830, lat: 64.0130, kind: "nature" },
    { nameZh: "斯卡夫塔山", nameEn: "Skaftafell", lon: -16.9750, lat: 64.0160, kind: "nature" },
    { nameZh: "赫本港与潟湖", nameEn: "Höfn harbour & lagoon", lon: -15.2082, lat: 64.2539, kind: "district" },
  ],
  egilsstadir: [
    { nameZh: "亨吉瀑布", nameEn: "Hengifoss", lon: -14.8830, lat: 65.0790, kind: "nature" },
    { nameZh: "拉加尔湖", nameEn: "Lagarfljót", lon: -14.4500, lat: 65.1500, kind: "nature" },
    { nameZh: "哈尔姆斯塔济林地", nameEn: "Hallormsstaður Forest", lon: -14.7500, lat: 65.0900, kind: "nature" },
    { nameZh: "塞济斯菲厄泽彩虹街", nameEn: "Seyðisfjörður Rainbow Street", lon: -14.0090, lat: 65.2620, kind: "district" },
  ],
  akureyri: [
    { nameZh: "阿克雷里教堂", nameEn: "Akureyrarkirkja", lon: -18.0900, lat: 65.6800, kind: "landmark" },
    { nameZh: "阿克雷里植物园", nameEn: "Akureyri Botanical Garden", lon: -18.0930, lat: 65.6760, kind: "nature" },
    { nameZh: "上帝瀑布", nameEn: "Goðafoss", lon: -17.5500, lat: 65.6830, kind: "nature" },
    { nameZh: "米湖地热区", nameEn: "Lake Mývatn", lon: -17.0000, lat: 65.6000, kind: "nature" },
    { nameZh: "Hlíðarfjall 滑雪场", nameEn: "Hlíðarfjall ski area", lon: -18.1300, lat: 65.7100, kind: "nature" },
    { nameZh: "埃亚峡湾观鲸", nameEn: "Eyjafjörður whale watching", lon: -18.0800, lat: 65.7000, kind: "nature" },
  ],
  husavik: [
    { nameZh: "胡萨维克港（观鲸）", nameEn: "Húsavík harbour (whale watching)", lon: -17.3430, lat: 66.0480, kind: "district" },
    { nameZh: "鲸鱼博物馆", nameEn: "Húsavík Whale Museum", lon: -17.3390, lat: 66.0455, kind: "landmark" },
    { nameZh: "木教堂", nameEn: "Húsavíkurkirkja", lon: -17.3400, lat: 66.0440, kind: "landmark" },
    { nameZh: "GeoSea 海崖温泉", nameEn: "GeoSea Geothermal Sea Baths", lon: -17.3300, lat: 66.0530, kind: "nature" },
    { nameZh: "黛提瀑布", nameEn: "Dettifoss", lon: -16.3847, lat: 65.8148, kind: "nature" },
    { nameZh: "Ásbyrgi 马蹄峡谷", nameEn: "Ásbyrgi Canyon", lon: -16.5100, lat: 66.0200, kind: "nature" },
  ],
  isafjordur: [
    { nameZh: "老城木屋与遗产博物馆", nameEn: "Old town & Westfjords Heritage Museum", lon: -23.1300, lat: 66.0740, kind: "district" },
    { nameZh: "丁坚地瀑布", nameEn: "Dynjandi", lon: -23.2030, lat: 65.7350, kind: "nature" },
    { nameZh: "拉特拉尔角海崖", nameEn: "Látrabjarg", lon: -24.5320, lat: 65.5010, kind: "nature" },
    { nameZh: "霍恩斯特兰迪自然保护区", nameEn: "Hornstrandir Nature Reserve", lon: -22.4000, lat: 66.4200, kind: "nature" },
    { nameZh: "博伦加维克（水族馆一带）", nameEn: "Bolungarvík", lon: -23.2540, lat: 66.1560, kind: "district" },
  ],
  selfoss: [
    { nameZh: "奥尔福萨河大桥", nameEn: "Ölfusá Bridge", lon: -21.0048, lat: 63.9388, kind: "transport" },
    { nameZh: "塞尔福斯新市中心（复建老房子街区）", nameEn: "Selfoss New Town Centre", lon: -21.0035, lat: 63.9362, kind: "district" },
    { nameZh: "特里格维小屋", nameEn: "Tryggvaskáli", lon: -21.0034, lat: 63.9378, kind: "landmark" },
    { nameZh: "塞尔福斯教堂", nameEn: "Selfoss Church", lon: -21.0093, lat: 63.9383, kind: "landmark" },
    { nameZh: "英格尔夫斯山", nameEn: "Ingólfsfjall", lon: -21.0388, lat: 63.9821, kind: "nature" },
  ],
  heimaey: [
    { nameZh: "埃尔德费尔火山", nameEn: "Eldfell", lon: -20.2473, lat: 63.4323, kind: "nature" },
    { nameZh: "赫尔加山", nameEn: "Helgafell", lon: -20.2596, lat: 63.4293, kind: "nature" },
    { nameZh: "火山博物馆「火之家」", nameEn: "Eldheimar", lon: -20.2601, lat: 63.4350, kind: "landmark" },
    { nameZh: "赫约尔夫谷", nameEn: "Herjólfsdalur", lon: -20.2982, lat: 63.4425, kind: "nature" },
    { nameZh: "斯坎辛", nameEn: "Skansinn", lon: -20.2615, lat: 63.4438, kind: "landmark" },
    { nameZh: "兰达教堂", nameEn: "Landakirkja", lon: -20.2723, lat: 63.4370, kind: "landmark" },
  ],
  stykkisholmur: [
    { nameZh: "挪威木屋（地区博物馆）", nameEn: "Norska húsið (regional museum)", lon: -22.726941, lat: 65.077197, kind: "landmark" },
    { nameZh: "水之图书馆", nameEn: "Vatnasafn / Library of Water", lon: -22.728725, lat: 65.07724, kind: "landmark" },
    { nameZh: "苏甘迪塞岛与灯塔", nameEn: "Súgandisey island and lighthouse", lon: -22.722915, lat: 65.079975, kind: "nature" },
    { nameZh: "斯蒂基斯霍尔米教堂", nameEn: "Stykkishólmskirkja", lon: -22.721819, lat: 65.073898, kind: "landmark" },
    { nameZh: "市政厅", nameEn: "Town hall", lon: -22.726778, lat: 65.077371, kind: "district" },
  ],
  seydisfjordur: [
    { nameZh: "蓝教堂", nameEn: "Seyðisfjarðarkirkja (the Blue Church)", lon: -14.010597, lat: 65.261317, kind: "landmark" },
    { nameZh: "斯卡夫特费尔视觉艺术中心", nameEn: "Skaftfell Center for Visual Art", lon: -13.997864, lat: 65.261578, kind: "landmark" },
    { nameZh: "东部技术博物馆", nameEn: "Technical Museum of East Iceland", lon: -13.991947, lat: 65.265266, kind: "landmark" },
    { nameZh: "「双声」声音雕塑", nameEn: "Tvísöngur sound sculpture", lon: -13.981864, lat: 65.26781, kind: "landmark" },
  ],

  // ── 冰岛补城批（2026-09-18）四处 ──
  // 坐标来源：OSM / Overpass（3 级）；每个点相对镇中心的方位与直线距离由研究阶段按 haversine 自算，
  // 写进正文的都是**直线距离**。⚠️ 赫韦拉格迪的温泉河谷有三种口径（谷口直线 2.9 km / 步道长度约 3 km /
  // 谷内更深的 OSM 点 5.9 km），正文分开写，POI 取谷口那个点。
  // 米湖畔的地热浴场**已官方改名**：原 Mývatn Nature Baths（Jarðböðin）→ Earth Lagoon Mývatn（旧域名 301 跳转，站内自述 Formerly…）。
  // 邵扎克罗库尔北面的 Tindastóll 山按名在 OSM 查不到点，**如实不收，不倒推坐标**。
  siglufjordur: [
    { nameZh: "鲱鱼时代博物馆", nameEn: "The Herring Era Museum (Síldarminjasafn Íslands)", lon: -18.91332, lat: 66.14748, kind: "landmark" },
    { nameZh: "锡格吕菲厄泽教堂", nameEn: "Siglufjarðarkirkja", lon: -18.91215, lat: 66.15114, kind: "landmark" },
    { nameZh: "冰岛诗歌中心", nameEn: "Ljóðasetur Íslands (Icelandic Poetry Centre)", lon: -18.91000, lat: 66.15140, kind: "landmark" },
    { nameZh: "民歌中心", nameEn: "Folk Music Centre (Þjóðlagasetur)", lon: -18.90714, lat: 66.15013, kind: "landmark" },
    { nameZh: "Herhúsið 艺术中心", nameEn: "Herhúsið arts centre", lon: -18.90645, lat: 66.15101, kind: "landmark" },
    { nameZh: "哈夫纳希尔纳山", nameEn: "Hafnarhyrna", lon: -18.94127, lat: 66.15407, kind: "nature" },
    { nameZh: "斯特拉卡尔山", nameEn: "Strákar", lon: -18.92508, lat: 66.17523, kind: "nature" },
  ],
  saudarkrokur: [
    { nameZh: "邵扎克罗库尔教堂", nameEn: "Sauðárkrókskirkja", lon: -19.65063, lat: 65.74975, kind: "landmark" },
    { nameZh: "斯卡加峡湾地区图书馆", nameEn: "Héraðsbókasafn Skagfirðinga", lon: -19.64837, lat: 65.74727, kind: "landmark" },
    { nameZh: "市政游泳池", nameEn: "Sundlaug Sauðárkróks", lon: -19.64667, lat: 65.74628, kind: "landmark" },
    { nameZh: "“1238：冰岛之战”展馆", nameEn: "1238: The Battle of Iceland", lon: -19.65172, lat: 65.75242, kind: "landmark" },
    { nameZh: "格劳姆拜尔草皮农舍博物馆", nameEn: "Glaumbær (Skagafjörður Folk Museum)", lon: -19.50467, lat: 65.61098, kind: "landmark" },
    { nameZh: "格雷蒂斯温泉池", nameEn: "Grettislaug", lon: -19.73654, lat: 65.88223, kind: "nature" },
    { nameZh: "冰岛移民中心（霍夫索斯）", nameEn: "Icelandic Emigration Center, Hofsós", lon: -19.41846, lat: 65.89898, kind: "landmark" },
    { nameZh: "德朗艾岛", nameEn: "Drangey", lon: -19.68903, lat: 65.94684, kind: "nature" },
  ],
  reykjahlid: [
    { nameZh: "雷恰赫利兹教堂", nameEn: "Reykjahlíðarkirkja", lon: -16.91666, lat: 65.64587, kind: "landmark" },
    { nameZh: "斯托拉皲裂隙", nameEn: "Stóragjá", lon: -16.91006, lat: 65.63825, kind: "nature" },
    { nameZh: "格约塔皲裂隙温泉洞", nameEn: "Grjótagjá", lon: -16.88297, lat: 65.62641, kind: "nature" },
    { nameZh: "米湖地热浴场（原米湖自然浴场）", nameEn: "Earth Lagoon Mývatn (formerly Mývatn Nature Baths)", lon: -16.84819, lat: 65.63054, kind: "landmark" },
    { nameZh: "纳玛山", nameEn: "Námafjall", lon: -16.82112, lat: 65.64015, kind: "nature" },
    { nameZh: "赫维尔地热场（沸泥塘）", nameEn: "Hverir (Námaskarð geothermal field)", lon: -16.80918, lat: 65.64114, kind: "nature" },
    { nameZh: "赫维尔山爆破火山口", nameEn: "Hverfjall (Hverfell)", lon: -16.87395, lat: 65.60506, kind: "nature" },
    { nameZh: "黑暗城堡熔岩石林", nameEn: "Dimmuborgir", lon: -16.90932, lat: 65.58878, kind: "nature" },
    { nameZh: "斯库图斯塔济假火山口群", nameEn: "Skútustaðagígar pseudo-craters", lon: -17.02871, lat: 65.57138, kind: "nature" },
    { nameZh: "西居尔盖尔鸟类博物馆", nameEn: "Sigurgeir's Bird Museum", lon: -16.99500, lat: 65.62882, kind: "landmark" },
    { nameZh: "莱尔赫努克火山区", nameEn: "Leirhnjúkur (Krafla)", lon: -16.79354, lat: 65.72127, kind: "nature" },
  ],
  hveragerdi: [
    { nameZh: "赫韦拉格迪教堂", nameEn: "Hveragerðiskirkja", lon: -21.18729, lat: 64.00227, kind: "landmark" },
    { nameZh: "镇中心地热公园", nameEn: "Hveragarðurinn (Geothermal Park)", lon: -21.18740, lat: 64.00069, kind: "nature" },
    { nameZh: "阿尔内辛加美术馆", nameEn: "LÁ Art Museum (Listasafn Árnesinga)", lon: -21.18502, lat: 63.99638, kind: "landmark" },
    { nameZh: "「2008 年地震」展与图书馆", nameEn: "\"Quake 2008\" exhibition & library, Sunnumörk", lon: -21.18911, lat: 63.99536, kind: "landmark" },
    { nameZh: "劳加斯卡尔兹游泳池", nameEn: "Laugaskarð swimming pool", lon: -21.17988, lat: 64.00156, kind: "landmark" },
    { nameZh: "园林公园", nameEn: "Skrúðgarðurinn", lon: -21.18269, lat: 64.00165, kind: "nature" },
    { nameZh: "莱尔格尔泽地热喷口", nameEn: "Leirgerður geothermal vent", lon: -21.18082, lat: 64.00714, kind: "nature" },
    { nameZh: "雷恰达勒温泉河谷（谷口步道起点）", nameEn: "Reykjadalur hot-spring valley (trailhead)", lon: -21.21116, lat: 64.02116, kind: "nature" },
    { nameZh: "英戈尔夫斯山", nameEn: "Ingólfsfjall", lon: -21.07074, lat: 63.99895, kind: "nature" },
  ],
};
