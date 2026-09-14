import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  tokyo: [
    { nameZh: "浅草寺 · 雷门", nameEn: "Senso-ji & Kaminarimon", lon: 139.797, lat: 35.715, kind: "landmark" },
    { nameZh: "东京晴空塔", nameEn: "Tokyo Skytree", lon: 139.811, lat: 35.710, kind: "landmark" },
    { nameZh: "明治神宫", nameEn: "Meiji Shrine", lon: 139.699, lat: 35.676, kind: "landmark" },
    { nameZh: "涩谷十字路口", nameEn: "Shibuya Crossing", lon: 139.700, lat: 35.659, kind: "district" },
    { nameZh: "上野公园", nameEn: "Ueno Park", lon: 139.774, lat: 35.715, kind: "nature" },
    { nameZh: "皇居东御苑", nameEn: "Imperial Palace East Gardens", lon: 139.757, lat: 35.685, kind: "nature" },
    { nameZh: "筑地场外市场", nameEn: "Tsukiji Outer Market", lon: 139.770, lat: 35.665, kind: "district" },
  ],

  kyoto: [
    { nameZh: "清水寺", nameEn: "Kiyomizu-dera", lon: 135.785, lat: 34.995, kind: "landmark" },
    { nameZh: "伏见稻荷大社", nameEn: "Fushimi Inari Taisha", lon: 135.773, lat: 34.967, kind: "landmark" },
    { nameZh: "金阁寺", nameEn: "Kinkaku-ji", lon: 135.729, lat: 35.039, kind: "landmark" },
    { nameZh: "岚山竹林", nameEn: "Arashiyama Bamboo Grove", lon: 135.672, lat: 35.017, kind: "nature" },
    { nameZh: "祇园", nameEn: "Gion", lon: 135.775, lat: 35.003, kind: "district" },
    { nameZh: "二条城", nameEn: "Nijo Castle", lon: 135.748, lat: 35.014, kind: "landmark" },
    { nameZh: "银阁寺 · 哲学之道", nameEn: "Ginkaku-ji & Philosopher's Path", lon: 135.798, lat: 35.027, kind: "landmark" },
  ],

  "osaka-city": [
    { nameZh: "道顿堀", nameEn: "Dotonbori", lon: 135.501, lat: 34.669, kind: "district" },
    { nameZh: "大阪城", nameEn: "Osaka Castle", lon: 135.526, lat: 34.687, kind: "landmark" },
    { nameZh: "通天阁 · 新世界", nameEn: "Tsutenkaku & Shinsekai", lon: 135.506, lat: 34.652, kind: "district" },
    { nameZh: "黑门市场", nameEn: "Kuromon Market", lon: 135.506, lat: 34.665, kind: "district" },
    { nameZh: "梅田蓝天大厦", nameEn: "Umeda Sky Building", lon: 135.490, lat: 34.705, kind: "landmark" },
    { nameZh: "日本环球影城", nameEn: "Universal Studios Japan", lon: 135.433, lat: 34.668, kind: "landmark" },
  ],

  sapporo: [
    { nameZh: "大通公园", nameEn: "Odori Park", lon: 141.352, lat: 43.061, kind: "nature" },
    { nameZh: "札幌电视塔", nameEn: "Sapporo TV Tower", lon: 141.356, lat: 43.061, kind: "landmark" },
    { nameZh: "时计台", nameEn: "Clock Tower", lon: 141.353, lat: 43.063, kind: "landmark" },
    { nameZh: "藻岩山", nameEn: "Mount Moiwa", lon: 141.320, lat: 43.026, kind: "nature" },
    { nameZh: "狸小路商店街", nameEn: "Tanukikoji Arcade", lon: 141.353, lat: 43.056, kind: "district" },
    { nameZh: "北海道厅旧本厅舍", nameEn: "Former Hokkaido Government Office", lon: 141.347, lat: 43.064, kind: "landmark" },
    { nameZh: "定山溪温泉", nameEn: "Jozankei Onsen", lon: 141.164, lat: 42.966, kind: "nature" },
  ],

  fukuoka: [
    { nameZh: "中洲屋台", nameEn: "Nakasu Yatai", lon: 130.406, lat: 33.593, kind: "district" },
    { nameZh: "栉田神社", nameEn: "Kushida Shrine", lon: 130.412, lat: 33.593, kind: "landmark" },
    { nameZh: "天神", nameEn: "Tenjin", lon: 130.399, lat: 33.591, kind: "district" },
    { nameZh: "大濠公园", nameEn: "Ohori Park", lon: 130.378, lat: 33.585, kind: "nature" },
    { nameZh: "福冈城迹", nameEn: "Fukuoka Castle ruins", lon: 130.383, lat: 33.585, kind: "landmark" },
    { nameZh: "太宰府天满宫", nameEn: "Dazaifu Tenmangu", lon: 130.535, lat: 33.521, kind: "landmark" },
    { nameZh: "海之中道", nameEn: "Uminonakamichi", lon: 130.360, lat: 33.660, kind: "nature" },
  ],

  naha: [
    { nameZh: "国际通", nameEn: "Kokusai-dori", lon: 127.686, lat: 26.214, kind: "district" },
    { nameZh: "首里城公园", nameEn: "Shuri Castle Park", lon: 127.719, lat: 26.217, kind: "landmark" },
    { nameZh: "第一牧志公设市场", nameEn: "Makishi Public Market", lon: 127.686, lat: 26.215, kind: "district" },
    { nameZh: "波上宫 · 波之上海滩", nameEn: "Naminoue Shrine & Beach", lon: 127.667, lat: 26.221, kind: "landmark" },
    { nameZh: "冲绳县立博物馆·美术馆", nameEn: "Okinawa Prefectural Museum & Art Museum", lon: 127.719, lat: 26.226, kind: "landmark" },
    { nameZh: "和平祈念公园", nameEn: "Peace Memorial Park", lon: 127.727, lat: 26.096, kind: "landmark" },
  ],

  sendai: [
    { nameZh: "青叶城迹", nameEn: "Aoba Castle Site", lon: 140.856, lat: 38.253, kind: "landmark" },
    { nameZh: "瑞凤殿", nameEn: "Zuihoden", lon: 140.858, lat: 38.247, kind: "landmark" },
    { nameZh: "大崎八幡宫", nameEn: "Osaki Hachimangu", lon: 140.842, lat: 38.281, kind: "landmark" },
    { nameZh: "定禅寺通", nameEn: "Jozenji-dori", lon: 140.868, lat: 38.263, kind: "district" },
    { nameZh: "松岛 · 瑞岩寺", nameEn: "Matsushima · Zuiganji", lon: 141.060, lat: 38.370, kind: "nature" },
    { nameZh: "山寺（立石寺）", nameEn: "Yamadera (Risshakuji)", lon: 140.440, lat: 38.310, kind: "landmark" },
    { nameZh: "秋保温泉", nameEn: "Akiu Onsen", lon: 140.730, lat: 38.230, kind: "nature" },
  ],

  yokohama: [
    { nameZh: "港未来21", nameEn: "Minato Mirai 21", lon: 139.632, lat: 35.457, kind: "district" },
    { nameZh: "红砖仓库", nameEn: "Red Brick Warehouses", lon: 139.643, lat: 35.453, kind: "landmark" },
    { nameZh: "横滨中华街", nameEn: "Yokohama Chinatown", lon: 139.645, lat: 35.443, kind: "district" },
    { nameZh: "山手西式洋馆", nameEn: "Yamate Western Houses", lon: 139.653, lat: 35.435, kind: "landmark" },
    { nameZh: "港见丘公园", nameEn: "Harbour View Park", lon: 139.652, lat: 35.437, kind: "nature" },
    { nameZh: "三溪园", nameEn: "Sankeien Garden", lon: 139.657, lat: 35.417, kind: "nature" },
    { nameZh: "八景岛海岛乐园", nameEn: "Hakkeijima Sea Paradise", lon: 139.643, lat: 35.336, kind: "landmark" },
  ],

  nagoya: [
    { nameZh: "名古屋城", nameEn: "Nagoya Castle", lon: 136.899, lat: 35.185, kind: "landmark" },
    { nameZh: "热田神宫", nameEn: "Atsuta Shrine", lon: 136.909, lat: 35.128, kind: "landmark" },
    { nameZh: "德川美术馆 · 德川园", nameEn: "Tokugawa Art Museum & Garden", lon: 136.945, lat: 35.194, kind: "landmark" },
    { nameZh: "大须商店街", nameEn: "Osu Shopping District", lon: 136.900, lat: 35.159, kind: "district" },
    { nameZh: "名古屋港水族馆", nameEn: "Port of Nagoya Public Aquarium", lon: 136.876, lat: 35.090, kind: "landmark" },
    { nameZh: "磁悬浮·铁道馆", nameEn: "SCMaglev and Railway Park", lon: 136.802, lat: 35.055, kind: "landmark" },
  ],

  kanazawa: [
    { nameZh: "兼六园", nameEn: "Kenrokuen", lon: 136.663, lat: 36.562, kind: "nature" },
    { nameZh: "金泽城公园", nameEn: "Kanazawa Castle Park", lon: 136.658, lat: 36.565, kind: "landmark" },
    { nameZh: "金泽21世纪美术馆", nameEn: "21st Century Museum of Contemporary Art", lon: 136.658, lat: 36.559, kind: "landmark" },
    { nameZh: "东茶屋街", nameEn: "Higashi Chaya District", lon: 136.667, lat: 36.572, kind: "district" },
    { nameZh: "长町武家屋敷", nameEn: "Nagamachi Samurai District", lon: 136.653, lat: 36.567, kind: "district" },
    { nameZh: "近江町市场", nameEn: "Omicho Market", lon: 136.657, lat: 36.571, kind: "district" },
  ],

  nara: [
    { nameZh: "东大寺", nameEn: "Todaiji", lon: 135.840, lat: 34.689, kind: "landmark" },
    { nameZh: "春日大社", nameEn: "Kasuga Taisha", lon: 135.848, lat: 34.681, kind: "landmark" },
    { nameZh: "兴福寺", nameEn: "Kofukuji", lon: 135.831, lat: 34.683, kind: "landmark" },
    { nameZh: "奈良国立博物馆", nameEn: "Nara National Museum", lon: 135.842, lat: 34.685, kind: "landmark" },
    { nameZh: "若草山", nameEn: "Wakakusayama", lon: 135.849, lat: 34.694, kind: "nature" },
    { nameZh: "唐招提寺", nameEn: "Toshodaiji", lon: 135.785, lat: 34.676, kind: "landmark" },
    { nameZh: "法隆寺", nameEn: "Horyuji", lon: 135.734, lat: 34.614, kind: "landmark" },
  ],

  hiroshima: [
    { nameZh: "和平纪念公园 · 原爆圆顶", nameEn: "Peace Memorial Park · Atomic Bomb Dome", lon: 132.453, lat: 34.395, kind: "landmark" },
    { nameZh: "广岛和平纪念资料馆", nameEn: "Hiroshima Peace Memorial Museum", lon: 132.452, lat: 34.391, kind: "landmark" },
    { nameZh: "广岛城", nameEn: "Hiroshima Castle", lon: 132.459, lat: 34.403, kind: "landmark" },
    { nameZh: "缩景园", nameEn: "Shukkeien Garden", lon: 132.469, lat: 34.400, kind: "nature" },
    { nameZh: "严岛神社（宫岛）", nameEn: "Itsukushima Shrine (Miyajima)", lon: 132.320, lat: 34.296, kind: "landmark" },
    { nameZh: "弥山", nameEn: "Mount Misen", lon: 132.317, lat: 34.278, kind: "nature" },
  ],

  takamatsu: [
    { nameZh: "栗林公园", nameEn: "Ritsurin Garden", lon: 134.043, lat: 34.329, kind: "nature" },
    { nameZh: "屋岛", nameEn: "Yashima", lon: 134.107, lat: 34.360, kind: "nature" },
    { nameZh: "高松城迹（玉藻公园）", nameEn: "Takamatsu Castle Site (Tamamo Park)", lon: 134.052, lat: 34.354, kind: "landmark" },
    { nameZh: "直岛 · 地中美术馆", nameEn: "Naoshima · Chichu Art Museum", lon: 133.995, lat: 34.452, kind: "landmark" },
    { nameZh: "丰岛美术馆", nameEn: "Teshima Art Museum", lon: 134.075, lat: 34.494, kind: "landmark" },
    { nameZh: "小豆岛寒霞溪", nameEn: "Kankakei Gorge, Shodoshima", lon: 134.278, lat: 34.503, kind: "nature" },
  ],

  nagasaki: [
    { nameZh: "哥拉巴园", nameEn: "Glover Garden", lon: 129.869, lat: 32.734, kind: "landmark" },
    { nameZh: "大浦天主堂", nameEn: "Oura Church", lon: 129.870, lat: 32.735, kind: "landmark" },
    { nameZh: "出岛", nameEn: "Dejima", lon: 129.874, lat: 32.744, kind: "landmark" },
    { nameZh: "新地中华街", nameEn: "Shinchi Chinatown", lon: 129.872, lat: 32.742, kind: "district" },
    { nameZh: "眼镜桥", nameEn: "Spectacles Bridge", lon: 129.882, lat: 32.746, kind: "landmark" },
    { nameZh: "稻佐山", nameEn: "Mount Inasa", lon: 129.860, lat: 32.746, kind: "nature" },
    { nameZh: "长崎原爆资料馆 · 和平公园", nameEn: "Nagasaki Atomic Bomb Museum · Peace Park", lon: 129.865, lat: 32.771, kind: "landmark" },
    { nameZh: "军舰岛（端岛）", nameEn: "Gunkanjima (Hashima)", lon: 129.738, lat: 32.628, kind: "landmark" },
  ],

  // ── 日本 批2（2026-09-05）──
  kobe: [
    { nameZh: "北野异人馆街", nameEn: "Kitano Ijinkan", lon: 135.1900, lat: 34.7000, kind: "district" },
    { nameZh: "三宫·旧居留地", nameEn: "Sannomiya & Former Foreign Settlement", lon: 135.1950, lat: 34.6910, kind: "district" },
    { nameZh: "南京町", nameEn: "Nankinmachi Chinatown", lon: 135.1880, lat: 34.6880, kind: "district" },
    { nameZh: "美利坚公园·神户港塔", nameEn: "Meriken Park & Kobe Port Tower", lon: 135.1880, lat: 34.6820, kind: "landmark" },
    { nameZh: "六甲山", nameEn: "Mount Rokkō", lon: 135.2300, lat: 34.7700, kind: "nature" },
    { nameZh: "有马温泉", nameEn: "Arima Onsen", lon: 135.2480, lat: 34.7970, kind: "nature" },
  ],
  himeji: [
    { nameZh: "姬路城", nameEn: "Himeji Castle", lon: 134.6939, lat: 34.8394, kind: "landmark" },
    { nameZh: "好古园", nameEn: "Kōko-en Garden", lon: 134.6900, lat: 34.8380, kind: "nature" },
    { nameZh: "书写山圆教寺", nameEn: "Engyō-ji (Mount Shosha)", lon: 134.6300, lat: 34.8600, kind: "landmark" },
    { nameZh: "大手前通", nameEn: "Ōtemae-dōri", lon: 134.6920, lat: 34.8320, kind: "district" },
    { nameZh: "姬路站", nameEn: "Himeji Station", lon: 134.6900, lat: 34.8260, kind: "transport" },
  ],
  takayama: [
    { nameZh: "三町老街", nameEn: "Sanmachi Suji", lon: 137.2610, lat: 36.1420, kind: "district" },
    { nameZh: "宫川朝市", nameEn: "Miyagawa Morning Market", lon: 137.2590, lat: 36.1440, kind: "district" },
    { nameZh: "高山阵屋", nameEn: "Takayama Jinya", lon: 137.2570, lat: 36.1400, kind: "landmark" },
    { nameZh: "飞驒之里", nameEn: "Hida Folk Village", lon: 137.2400, lat: 36.1330, kind: "landmark" },
    { nameZh: "白川乡荻町", nameEn: "Shirakawa-gō (Ogimachi)", lon: 136.9060, lat: 36.2580, kind: "district" },
  ],
  matsumoto: [
    { nameZh: "松本城", nameEn: "Matsumoto Castle", lon: 137.9690, lat: 36.2385, kind: "landmark" },
    { nameZh: "中町通", nameEn: "Nakamachi Street", lon: 137.9720, lat: 36.2330, kind: "district" },
    { nameZh: "松本市美术馆", nameEn: "Matsumoto City Museum of Art", lon: 137.9750, lat: 36.2310, kind: "landmark" },
    { nameZh: "大王山葵农场", nameEn: "Daio Wasabi Farm", lon: 137.9050, lat: 36.3510, kind: "nature" },
    { nameZh: "上高地河童桥", nameEn: "Kamikōchi (Kappa Bridge)", lon: 137.6380, lat: 36.2510, kind: "nature" },
  ],
  hakodate: [
    { nameZh: "函馆山", nameEn: "Mount Hakodate", lon: 140.7050, lat: 41.7590, kind: "nature" },
    { nameZh: "五棱郭", nameEn: "Goryōkaku", lon: 140.7570, lat: 41.7970, kind: "landmark" },
    { nameZh: "元町", nameEn: "Motomachi", lon: 140.7100, lat: 41.7640, kind: "district" },
    { nameZh: "函馆朝市", nameEn: "Hakodate Morning Market", lon: 140.7250, lat: 41.7720, kind: "district" },
    { nameZh: "金森红砖仓库", nameEn: "Kanemori Red Brick Warehouses", lon: 140.7180, lat: 41.7670, kind: "landmark" },
    { nameZh: "汤川温泉", nameEn: "Yunokawa Onsen", lon: 140.7900, lat: 41.7800, kind: "nature" },
  ],
  kumamoto: [
    { nameZh: "熊本城", nameEn: "Kumamoto Castle", lon: 130.7060, lat: 32.8060, kind: "landmark" },
    { nameZh: "樱之马场城彩苑", nameEn: "Sakura-no-baba Jōsaien", lon: 130.7050, lat: 32.8030, kind: "district" },
    { nameZh: "水前寺成趣园", nameEn: "Suizenji Jōjuen Garden", lon: 130.7350, lat: 32.7900, kind: "nature" },
    { nameZh: "熊本站", nameEn: "Kumamoto Station", lon: 130.6890, lat: 32.7900, kind: "transport" },
    { nameZh: "阿苏山（中岳火口）", nameEn: "Mount Aso (Nakadake Crater)", lon: 131.0840, lat: 32.8840, kind: "nature" },
  ],
  kagoshima: [
    { nameZh: "仙岩园", nameEn: "Sengan-en", lon: 130.5780, lat: 31.6170, kind: "nature" },
    { nameZh: "樱岛（渡轮码头）", nameEn: "Sakurajima (Ferry Terminal)", lon: 130.6580, lat: 31.5930, kind: "nature" },
    { nameZh: "城山展望台", nameEn: "Shiroyama Observatory", lon: 130.5500, lat: 31.5960, kind: "nature" },
    { nameZh: "天文馆", nameEn: "Tenmonkan", lon: 130.5560, lat: 31.5900, kind: "district" },
    { nameZh: "鹿儿岛中央站", nameEn: "Kagoshima-Chūō Station", lon: 130.5420, lat: 31.5840, kind: "transport" },
    { nameZh: "指宿砂蒸温泉", nameEn: "Ibusuki Sand Baths", lon: 130.6400, lat: 31.2500, kind: "nature" },
  ],
  matsuyama: [
    { nameZh: "道后温泉本馆", nameEn: "Dōgo Onsen Honkan", lon: 132.7860, lat: 33.8520, kind: "landmark" },
    { nameZh: "松山城", nameEn: "Matsuyama Castle", lon: 132.7660, lat: 33.8450, kind: "landmark" },
    { nameZh: "石手寺", nameEn: "Ishite-ji", lon: 132.7960, lat: 33.8500, kind: "landmark" },
    { nameZh: "大街道·银天街", nameEn: "Ōkaidō & Gintengai Arcades", lon: 132.7680, lat: 33.8390, kind: "district" },
    { nameZh: "松山市站", nameEn: "Matsuyama-shi Station", lon: 132.7660, lat: 33.8320, kind: "transport" },
    { nameZh: "岛波海道（今治起点）", nameEn: "Shimanami Kaidō (Imabari)", lon: 133.0000, lat: 34.0660, kind: "nature" },
  ],
};
