import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "kul-pen": {
    study: {
    "zh-CN":
      "吉隆坡飞槟城，是马来半岛西海岸最繁忙的国内航线之一，全程约330公里，是马来西亚航空客流量最高的航线之一。飞机离开吉隆坡后向西北飞行，脚下先掠过巴生河谷的城市化平原，随后进入马来半岛西海岸相对平坦的沿海低地地带，大片棕榈油种植园从空中清晰可辨。" +
      "飞机继续向西北飞行，沿途可见蒂蒂旺沙山脉西侧余脉在内陆隐约可见，海岸线一侧棕榈种植园与红树林交替分布，最终降落在槟城——马来半岛西北岸外一座花岗岩岛屿，2008年老城区乔治市列入UNESCO世界遗产名录。",
    "en-US":
      "Flying from Kuala Lumpur to Penang is one of the busiest domestic routes on the peninsula's west coast, spanning about 330 km. After leaving Kuala Lumpur the flight heads northwest, first passing over the urbanised plain of the Klang Valley before entering the comparatively flat coastal lowland of the peninsula's west coast." +
      " The flight continues northwest, the western foothills of the Titiwangsa Mountains faintly visible inland, palm plantations and mangroves alternating along the coastline, before landing on Penang, a granite island off the peninsula's northwest coast whose old town of George Town was inscribed on the UNESCO World Heritage List in 2008.",
    },
    // travel sources: 全四段（study/travel × 中英）: 乔治市 2008 年列入 UNESCO；全程距离原写约 300 km，按大圆（325 km）改为约 330 km。核实 2026-09-11
    travel: {
    "zh-CN":
      "吉隆坡到槟城飞约55分钟，同一时区，是亚洲航空运营的国内航班之一（每日约9班）。吉隆坡国际机场距市区约45公里；槟城国际机场距乔治市约18公里。这是马来西亚客流量最高的国内航线之一。",
    "en-US":
      "Kuala Lumpur to Penang is about 55 minutes, same time zone, operated by AirAsia (about 9 flights daily) as one of Malaysia's domestic routes. Kuala Lumpur International Airport is about 45 km from the city centre; Penang International Airport is about 18 km from George Town. This is one of Malaysia's highest-volume domestic air routes.",
    },
  },

  "kul-bki": {
    study: {
    "zh-CN":
      "吉隆坡飞亚庇，是连接马来半岛与婆罗洲的核心航线，全程约1630公里，是马来西亚客流量最大的国内航线，日均航班多达十余班，飞行时长约两个半小时。飞机离开吉隆坡后向东飞行，很快越过马来半岛东海岸线，进入南海开阔水域。" +
      "飞机持续在南海上空飞行逾两小时，接近婆罗洲海岸时，京那巴鲁山裸露的花岗岩峰体从云海中显露，海拔4095米的山体是马来西亚与马来群岛最高峰，最终降落在亚庇——沙巴州首府，是探索京那巴鲁公园与沙巴海岛的核心门户。",
    "en-US":
      "Flying from Kuala Lumpur to Kota Kinabalu is the core route linking the Malay Peninsula with Borneo, spanning about 1,630 km — Malaysia's highest-volume domestic route. After leaving Kuala Lumpur the flight heads east, soon crossing the peninsula's east coast into the open waters of the South China Sea." +
      " The flight continues over the South China Sea for more than two hours; as it nears the Bornean coast, the bare granite summit of Mount Kinabalu emerges from the sea of cloud — at 4,095 m, the highest peak in Malaysia and the Malay Archipelago — before landing in Kota Kinabalu, capital of Sabah and the core gateway to Kinabalu Park.",
    },
    // travel sources: 全四段（study/travel × 中英）: 京那巴鲁 4095 m 与本库一致；全程约 1630 km 与大圆一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "吉隆坡到亚庇飞约150分钟，同一时区，是亚洲航空运营的国内航班之一，是马来西亚境内客流量最大的单一航线（每日多达14至16班）。吉隆坡国际机场距市区约45公里；亚庇国际机场距市区约7公里。",
    "en-US":
      "Kuala Lumpur to Kota Kinabalu is about 150 minutes, same time zone, operated by AirAsia as one of Malaysia's domestic routes, and the single busiest air route within the country (up to 14–16 daily flights). Kuala Lumpur International Airport is about 45 km from the city centre; Kota Kinabalu International Airport is about 7 km from the city centre.",
    },
  },

  "kul-kch": {
    study: {
    "zh-CN":
      "吉隆坡飞古晋，是连接马来半岛与砂拉越的主要航线，全程约970公里，是马来西亚境内客流量位居前列的国内航线之一，全天多个班次往返两地。飞机离开吉隆坡后向东南飞行，越过马来半岛南部后进入南海，飞越加里曼丹岛与马来半岛之间的开阔海域。" +
      "飞机继续向东南飞行，接近砂拉越海岸时，巴哥国家公园沿岸砂岩地貌与海蚀柱景观隐约可见，最终降落在古晋——砂拉越州首府，坐落于砂拉越河畔，是探索姆鲁山国家公园与尼亚洞穴的重要门户。",
    "en-US":
      "Flying from Kuala Lumpur to Kuching is the main route linking the Malay Peninsula with Sarawak, spanning about 970 km. After leaving Kuala Lumpur the flight heads southeast, crossing the southern peninsula before entering the South China Sea and flying over the open water between Borneo and the peninsula." +
      " The flight continues southeast; as it nears the Sarawak coast, the sandstone coastal landform and sea stacks of Bako National Park become faintly visible, before landing in Kuching, capital of Sarawak on the banks of the Sarawak River and an important gateway to Gunung Mulu National Park and the Niah Caves.",
    },
    // travel sources: 全四段（study/travel × 中英）: 全程距离原写约 1110 km，按大圆改为约 970 km。核实 2026-09-11
    travel: {
    "zh-CN":
      "吉隆坡到古晋飞约110分钟，同一时区，是亚洲航空运营的国内航班之一（全天多班）。吉隆坡国际机场距市区约45公里；古晋国际机场距市区约11公里。",
    "en-US":
      "Kuala Lumpur to Kuching is about 110 minutes, same time zone, operated by AirAsia (multiple flights daily) as one of Malaysia's domestic routes. Kuala Lumpur International Airport is about 45 km from the city centre; Kuching International Airport is about 11 km from the city centre.",
    },
  },

  "kul-lgk": {
    study: {
    "zh-CN":
      "吉隆坡飞浮罗交怡，是马来半岛西海岸北向的热门航线，全程约450公里，是马来西亚知名的度假岛屿航线之一，尤其在节假日期间班次密集。飞机离开吉隆坡后向西北飞行，沿途经过槟城以北海域，逐渐接近马来半岛与泰国交界的安达曼海海域。" +
      "飞机继续向西北飞行，浮罗交怡群岛错落分布的岛屿与基林河口红树林、喀斯特尖峰地貌逐渐显现，最终降落在浮罗交怡——2007年获认定为东南亚首个UNESCO世界地质公园，地质记录跨越逾5.5亿年。",
    "en-US":
      "Flying from Kuala Lumpur to Langkawi is a popular route heading north along the peninsula's west coast, spanning about 450 km. After leaving Kuala Lumpur the flight heads northwest, passing waters north of Penang and approaching the Andaman Sea near the Malaysia-Thailand border." +
      " The flight continues northwest, the scattered islands of the Langkawi archipelago and the mangroves and karst pinnacles of the Kilim estuary gradually coming into view, before landing on Langkawi, recognised in 2007 as the first UNESCO Global Geopark in Southeast Asia, its geological record spanning more than 550 million years.",
    },
    // travel sources: 全四段（study/travel × 中英）: 浮罗交怡 2007 年东南亚首个 UNESCO 世界地质公园与本库一致；全程距离原写约 370 km，按大圆改为约 450 km。核实 2026-09-11
    travel: {
    "zh-CN":
      "吉隆坡到浮罗交怡飞约65分钟，同一时区，是亚洲航空运营的国内航班之一。吉隆坡国际机场距市区约45公里；浮罗交怡国际机场距瓜镇约11公里。浮罗交怡是马来西亚知名的免税购物与度假岛屿。",
    "en-US":
      "Kuala Lumpur to Langkawi is about 65 minutes, same time zone, operated by AirAsia as one of Malaysia's domestic routes. Kuala Lumpur International Airport is about 45 km from the city centre; Langkawi International Airport is about 11 km from Kuah town. Langkawi is a well-known duty-free shopping and resort island in Malaysia.",
    },
  },

  "kul-kbr": {
    study: {
    "zh-CN":
      "吉隆坡飞哥打巴鲁，是横贯马来半岛、连接西海岸与东海岸的航线，全程约420公里，飞行方向大致垂直于蒂蒂旺沙山脉走向，是往返东海岸最便捷的空中通道之一。飞机离开吉隆坡后向东北飞行，脚下先掠过蒂蒂旺沙山脉——马来半岛的脊梁山系，连绵的绿色山脊贯穿半岛中轴。" +
      "越过蒂蒂旺沙山脉后，飞机继续向东北飞行，掠过大汉山国家公园大片原始热带雨林，最终降落在哥打巴鲁——吉兰丹州首府，坐落于吉兰丹河口，是马来传统文化保存最完整的城市之一。",
    "en-US":
      "Flying from Kuala Lumpur to Kota Bharu crosses the Malay Peninsula, linking its west and east coasts, spanning about 420 km. After leaving Kuala Lumpur the flight heads northeast, first passing over the Titiwangsa Mountains — the peninsula's backbone range, a continuous green ridge running down its centre." +
      " Past the Titiwangsa range, the flight continues northeast over the extensive primary rainforest of Taman Negara, at whose centre Gunung Tahan rises as the highest peak on the peninsula, before landing in Kota Bharu, capital of Kelantan at the mouth of the Kelantan River, one of the cities where traditional Malay culture is best preserved.",
    },
    // travel sources: 全四段（study/travel × 中英）: 全程约 420 km（大圆约 386 km，在容差内）；「马来传统文化保存最完整的城市之一」带限定、为定性说法，核实代理报 unknown，调用方判保留。核实 2026-09-11
    travel: {
    "zh-CN":
      "吉隆坡到哥打巴鲁飞约60分钟，同一时区，是亚洲航空运营的国内航班之一。吉隆坡国际机场距市区约45公里；苏丹依斯迈布特拉机场距市区约8公里。",
    "en-US":
      "Kuala Lumpur to Kota Bharu is about 60 minutes, same time zone, operated by AirAsia as one of Malaysia's domestic routes. Kuala Lumpur International Airport is about 45 km from the city centre; Sultan Ismail Petra Airport is about 8 km from the city centre.",
    },
  },

  "sdk-bki": {
    study: {
    "zh-CN":
      "山打根飞亚庇，是沙巴内陆的区域航线，全程约230公里，是沙巴境内客流量最大的支线航班之一，也是连接沙巴东西海岸的重要空中通道。飞机离开山打根后向西飞行，脚下逐渐展开克罗克山脉连绵起伏的山脊地貌。" +
      "克罗克山脉呈南北走向、长约120公里，无突出的单一主峰，主体为深海浊积砂岩与泥岩，与不远处京那巴鲁山年轻的花岗岩体分属不同的地质单元；飞机继续向西飞行，越过克罗克山脉后进入沿海平原，最终降落在亚庇——沙巴州首府。",
    "en-US":
      "Flying from Sandakan to Kota Kinabalu is a regional route within Sabah, spanning about 230 km. After leaving Sandakan the flight heads west, the rolling ridgeline of the Crocker Range gradually unfolding below." +
      " The Crocker Range runs north-south for about 120 km with no single dominant peak, a sedimentary range distinct from the younger granite massif of nearby Mount Kinabalu; the flight continues west, crossing the range before descending over the coastal plain and landing in Kota Kinabalu, capital of Sabah.",
    },
    // travel sources: 全四段（study/travel × 中英）: AirBorneo 2026-01 接管原马仕运航空属实；克罗克山脉与京那巴鲁地质关系原为旧说法，已按本库 terrain/crocker-range 改。核实 2026-09-11
    travel: {
    "zh-CN":
      "山打根到亚庇飞约55分钟，同一时区，是沙巴内陆航班之一。山打根机场距市区约11公里；亚庇国际机场距市区约7公里。",
    "en-US":
      "Sandakan to Kota Kinabalu is about 55 minutes, same time zone, one of Sabah's regional routes. Sandakan Airport is about 11 km from the city centre; Kota Kinabalu International Airport is about 7 km from the city centre.",
    },
  },

  "kch-myy": {
    study: {
    "zh-CN":
      "古晋飞美里，是砂拉越境内连接两大城市的区域航线，全程约510公里，是前往姆鲁山国家公园与尼亚洞穴的常用中转航段。飞机离开古晋后向东北飞行，沿婆罗洲海岸平原上空前行，脚下砂拉越沿海地带的河网与红树林交织分布。" +
      "飞机继续向东北飞行，接近美里前掠过尼亚国家公园——苏比斯山石灰岩地块北缘的洞穴群，大洞洞口高逾60米，2024年列入UNESCO世界遗产名录，最终降落在美里——砂拉越东北部港口城市，是探索姆鲁山国家公园的重要中转枢纽。",
    "en-US":
      "Flying from Kuching to Miri is a regional route linking Sarawak's two major cities, spanning about 510 km. After leaving Kuching the flight heads northeast along Borneo's coastal plain, rivers and mangroves of Sarawak's coastal belt interweaving below." +
      " The flight continues northeast, passing near Niah National Park before reaching Miri — a cave complex on the northern edge of the Gunong Subis limestone massif, its Great Cave mouth more than 60 m high, inscribed on the UNESCO World Heritage List in 2024 — before landing in Miri, a port city in northeastern Sarawak and an important transit hub for exploring Gunung Mulu National Park.",
    },
    // travel sources: 全四段（study/travel × 中英）: 尼亚国家公园 2024 年列入 UNESCO 与本库一致；全程距离原写约 420 km，按大圆改为约 510 km。核实 2026-09-11
    travel: {
    "zh-CN":
      "古晋到美里飞约75分钟，同一时区，是砂拉越内陆航班之一。古晋国际机场距市区约11公里；美里机场距市区约8公里。美里是转乘小型飞机前往姆鲁山国家公园的重要枢纽。",
    "en-US":
      "Kuching to Miri is about 75 minutes, same time zone, one of Sarawak's regional routes. Kuching International Airport is about 11 km from the city centre; Miri Airport is about 8 km from the city centre. Miri is an important hub for connecting flights to Gunung Mulu National Park.",
    },
  },

  "pek-kul": {
    // study sources: 全四段（study/travel × 中英）: 蒂蒂旺沙山脉约 480 km，与本库 terrain 一致。核实 2026-09-11
    study: {
    "zh-CN":
      "北京飞吉隆坡，是一条纵贯东亚与东南亚大陆的长航线，从华北平原一路飞越云贵高原、中南半岛，抵达马来半岛。起飞后，飞机先越过华北平原与黄土高原，随后进入云贵高原——中国西南一片以喀斯特地貌为主的高原，石林、溶洞广布。继续向南，飞机跨过中南半岛，沿途山地与河谷交替出现，航程大部分时间在陆地上空。接近赤道时，飞机进入马来半岛，蒂蒂旺沙山脉出现在下方——这是马来半岛的脊梁山系，呈西北—东南走向绵延约480公里，把半岛分成东西两侧不同的气候区。飞机沿山脉南段下降，吉隆坡就坐落在山脉西侧山麓地带。近六个小时的航程，跨越了近40个纬度，从温带平原飞到了赤道附近的热带城市。",
    "en-US":
      "Beijing to Kuala Lumpur is a long haul spanning mainland East and Southeast Asia, crossing the Yunnan–Guizhou Plateau and the Indochinese Peninsula on the way from the North China Plain to the Malay Peninsula. After take-off the flight crosses the North China Plain and the Loess Plateau, then enters the Yunnan–Guizhou Plateau, a region of south-west China dominated by karst landforms, with stone forests and cave systems widespread. Continuing south, the flight crosses the Indochinese Peninsula, with mountains and river valleys alternating below for most of the journey, nearly all of it over land. Approaching the equator, the flight reaches the Malay Peninsula, where the Titiwangsa Mountains come into view — the peninsula's spine range, running north-west to south-east for about 480 km and splitting it into climatically distinct eastern and western sides. The plane descends along the southern end of the range, and Kuala Lumpur sits in the foothills on its western flank. In almost six hours the flight crosses nearly 40 degrees of latitude, from a temperate plain to a tropical city near the equator.",
    },
    travel: {
    "zh-CN":
      "北京到吉隆坡约六小时，两地无时差，均为UTC+8。吉隆坡属热带雨林气候，全年高温多雨，无明显干湿季之分，出行随时需备雨具。市内交通以轻轨（LRT/MRT）和网约车为主；双子塔、独立广场、黑风洞是热门景点，黑风洞需爬约272级台阶，寺庙区域衣着应得体。吉隆坡是多元族群社会，华人、马来人、印度人聚居区风俗各异：进入清真寺须脱鞋、女性通常需披罩袍并遮盖头发；马来餐厅多为清真（Halal），不供应猪肉和酒类，用餐前留意标识。中国护照持有者可享受落地签或免签政策，具体以马来西亚移民局最新公布为准。",
    "en-US":
      "Beijing to Kuala Lumpur takes about six hours, with no time difference — both cities are on UTC+8. Kuala Lumpur has a tropical rainforest climate: hot and rainy year-round with no clearly defined dry season, so it's worth carrying rain gear whenever you go. City transport runs mainly on LRT/MRT light rail and ride-hailing apps; the Petronas Twin Towers, Merdeka Square and the Batu Caves are popular sights — Batu Caves involves climbing about 272 steps, and modest dress is expected in the temple area. Kuala Lumpur is a multi-ethnic society, and customs vary between its Chinese, Malay and Indian communities: mosques require shoes off, and women are usually expected to wear a robe and cover their hair; Malay restaurants are mostly halal and serve neither pork nor alcohol, so check signage before ordering. Chinese passport holders may qualify for visa-on-arrival or visa-free entry; check the latest notices from Malaysia's Immigration Department.",
    },
  },
};
