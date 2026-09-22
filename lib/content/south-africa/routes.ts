import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  // sources（2026-09-22）：约翰内斯堡—布隆方丹航点关系 = Flightera/PlaneFinder/Airportia 交叉核对
  // （见 data/routes/jnb-bfn.json 的 source.note——Airlink 按方向分单双号，最初误用了返程号 4Z706，
  // 已改正为 4Z705）；高地草原地貌 = 已收录地形 highveld 条目（正文与来源见 terrain.zh.ts）；
  // 布隆方丹瑙瓦尔山（Naval Hill）辉绿岩残丘为公开地质常识，来源同城市条目 sources 注释。
  "jnb-bfn": {
    study: {
      "zh-CN":
        "约翰内斯堡飞布隆方丹，从豪登省的都会带一路向西南，横穿一整片开阔的高地草原，最后降落在自由州台地上。飞机从OR·坦博国际机场起飞，脚下先是约翰内斯堡—埃库尔勒尼—茨瓦内连成一片的建成区，昔日金矿带留下的人工矿渣堆在城市南侧仍隐约可辨。" +
        "离开都会带后，地表迅速转为一望无际的高地草原：海拔大多在1300到1700米之间，地势平坦到缓起伏，方形农田与圆形灌溉地拼接成规整图案，散落的农场聚落之间是长直的柏油路。这片高原正是南非小麦、玉米和绵羊放牧的核心地带，草原颜色随季节从枯黄到浅绿变化。" +
        "接近布隆方丹时，草原上开始出现孤立的平顶或圆丘状残丘——瑙瓦尔山便是其中之一，辉绿岩侵入体比周围沉积岩更耐风化，因而凸出于台地之上。飞机在市区东北降落，全程始终飞在同一片高地台地地貌之内，只是从豪登的都会景观过渡到自由州的农牧景观。",
      "en-US":
        "Johannesburg to Bloemfontein runs south-west across the Gauteng metro belt and then a wide stretch of open highveld grassland before landing on the Free State plateau. Leaving OR Tambo International Airport, the built-up area of Johannesburg, Ekurhuleni and Tshwane runs together below, with pale mine-tailings mounds from the old gold reef still faintly visible on the city's southern edge. " +
        "Beyond the metro belt the ground quickly gives way to open highveld grassland: mostly 1,300 to 1,700 metres above sea level, flat to gently rolling, with square dryland fields and circular irrigation plots forming a regular patchwork between scattered farmsteads and long straight tar roads. This plateau is a core area for South African wheat, maize and sheep farming, its grass colour shifting with the season from straw-yellow to pale green. " +
        "Approaching Bloemfontein, isolated flat-topped or rounded hills begin to break the grassland — Naval Hill is one of them, a dolerite intrusion more resistant to weathering than the surrounding sedimentary rock, standing above the plateau around it. The flight lands north-east of the city, having stayed within the same highveld plateau landform throughout, moving only from Gauteng's metropolitan setting to the Free State's farming landscape.",
    },
    travel: {
      "zh-CN":
        "这条国内航线由Airlink运营，飞行时间约1小时；实际班期与出发航站楼以行程单为准。" +
        "布拉姆·菲舍尔国际机场距布隆方丹市中心约10公里，可乘出租车或预约接送进城。布隆方丹是自由州省会，也是南非三首都之一（司法首都），市内可步行游览瑙瓦尔山与第一街区一带的历史建筑。" +
        "沿途所经的高地草原昼夜温差大，冬季（6—8月）清晨常有霜冻，夏季午后多雷阵雨，出行建议带外套并留意天气预报。",
      "en-US":
        "This domestic route is operated by Airlink with a flight time of about one hour; check the actual itinerary for schedule and terminal. " +
        "Bram Fischer International Airport is about 10 km from central Bloemfontein; a taxi or pre-booked transfer covers the distance. Bloemfontein is the capital of the Free State and one of South Africa's three capital cities (the judicial capital); Naval Hill and the First Avenue area are walkable for their historic buildings. " +
        "The highveld grassland crossed en route has a large day–night temperature swing: winter (June–August) mornings are often frosty and summer afternoons bring frequent thunderstorms, so pack a jacket and check the forecast before travelling.",
    },
  },

  // sources（2026-09-22）：约翰内斯堡—波罗奎瓦内航点关系 = Airportia/FlightAware/flyteam.jp 交叉核对（1 级/3 级）；
  // 布什维尔德杂岩体地貌 = 已收录地形 bushveld-igneous-complex 条目（正文与来源见同目录 terrain.zh.ts）；
  // ⚠️ 2026-09-22 content-verifier 核实推翻了本条目最初「波罗奎瓦内位于苏茨山脉南麓山麓谷地」的写法——
  // 该市实际坐落在海拔约 1230 米的台地上（en.wikipedia.org/wiki/Polokwane），真正在苏茨山脉脚下的
  // 是逾百公里外的路易特里查德（Louis Trichardt/Makhado），已改写为台地城市 + 苏茨山脉在更北处的表述。
  "jnb-ptg": {
    study: {
      "zh-CN":
        "约翰内斯堡飞波罗奎瓦内，从豪登省都会带向北穿过整片布什维尔德杂岩体，最后抵达林波波省台地上的省会城市。飞机从OR·坦博国际机场起飞，先越过约翰内斯堡北郊连绵的住宅区，随后建成区逐渐稀疏，地表转为高地草原与稀树草原交错的开阔地。" +
        "航线中段进入布什维尔德杂岩体的核心地带：这是地球上已知规模最大的层状火成岩体之一，地表可见环形山脊与台地状地形，是铂族金属、铬和钒矿藏的富集区，矿区道路与选矿设施在开阔地表间隔出现。杂岩体北侧地势逐渐抬升，进入林波波河谷南缘的稀树草原。" +
        "接近波罗奎瓦内时，飞机降落在一片海拔约1230米的台地之上——这座城市本身建在台地地貌上，不是山麓河谷。更往北逾百公里外，是东西走向的苏茨山脉，构成这一带再往北的天然屏障。飞机在市区东侧降落，全程从都会平原经矿业高原过渡到林波波台地城市。",
      "en-US":
        "Johannesburg to Polokwane runs north across the whole Bushveld Igneous Complex from the Gauteng metro belt to a plateau city that is the capital of Limpopo province. Leaving OR Tambo International Airport, the flight first crosses the continuous suburbs north of Johannesburg before the built-up area thins into open highveld grassland mixed with savanna. " +
        "The middle of the route crosses the core of the Bushveld Igneous Complex, one of the largest known layered igneous intrusions on Earth. Its surface shows ring-shaped ridges and plateau-like terrain, and it is rich in platinum-group metals, chrome and vanadium, with mine roads and processing plants breaking up the open ground at intervals. North of the complex the land rises gradually into savanna along the southern edge of the Limpopo valley. " +
        "Approaching Polokwane, the flight lands over a plateau at roughly 1,230 metres — the city itself sits on this plateau, not in a mountain-foot valley. The east–west folded Soutpansberg range lies well over a hundred kilometres further north, forming a natural barrier beyond this stretch of the route. The flight lands on the city's eastern side, having moved across the route from a metropolitan plain through a mining plateau to a Limpopo plateau city.",
    },
    travel: {
      "zh-CN":
        "这条国内航线由Airlink运营，飞行时间约50分钟；实际班期与出发航站楼以行程单为准。" +
        "波罗奎瓦内国际机场距市中心约5公里，出租车或预约接送即可到达。波罗奎瓦内是林波波省省会，也是前往克鲁格国家公园北部与苏茨山脉一带的补给中转城市。" +
        "沿途布什维尔德杂岩体一带海拔较低、气候炎热，夏季（11—3月）午后多雷阵雨，山区道路建议白天通行。",
      "en-US":
        "This domestic route is operated by Airlink with a flight time of about 50 minutes; check the actual itinerary for schedule and terminal. " +
        "Polokwane International Airport is about 5 km from the city centre, reachable by taxi or pre-booked transfer. Polokwane is the capital of Limpopo province and a supply and transit point for the northern Kruger National Park and the Soutpansberg area. " +
        "The Bushveld Igneous Complex crossed en route sits at relatively low elevation and is hot, with frequent afternoon thunderstorms in summer (November–March); daytime travel is advisable on the mountain roads.",
    },
  },

  // sources（2026-09-22）：约翰内斯堡—理查兹湾航点关系 = Airportia/理查兹湾机场官网/FlightAware 交叉核对
  // （见 data/routes/jnb-rcb.json 的 source.note——Airlink 按方向分单双号，最初误用了返程号 4Z884，
  // 已改正为 4Z883）；姆普马兰加高地边缘、夸祖鲁-纳塔尔沿海低地的地势描述按 SRTM 公开地形数据的
  // 通识写法，未与已收录地形条目产生 bbox 重叠，故用 feature 航点而非 terrain 航点。
  "jnb-rcb": {
    study: {
      "zh-CN":
        "约翰内斯堡飞理查兹湾，从豪登省高地一路向东南下降，越过姆普马兰加高地边缘，最终抵达夸祖鲁-纳塔尔的沿海低地港口城市。飞机从OR·坦博国际机场起飞，先掠过约翰内斯堡都会带，随后地表转为开阔的高地草原农牧区。" +
        "航线中段跨越姆普马兰加高地向低地的过渡带——这里地势从约1600米的高原逐级下降，地表由平缓台地转为切割更深的丘陵与谷地，是高地草原与低地稀树草原的分界地带。越往东南，植被逐渐由草原转为亚热带灌丛与甘蔗种植区。" +
        "接近理查兹湾时，飞机降到夸祖鲁-纳塔尔沿海低地：地势平坦，河流在入海前分汊出多条水道，甘蔗田连片分布，远处可见印度洋海岸线与港口设施。飞机在市区西侧降落，全程完成了一次从内陆高原到亚热带海岸低地的明显海拔与植被过渡。",
      "en-US":
        "Johannesburg to Richards Bay descends south-east from the Gauteng highveld, crosses the margin of the Mpumalanga highveld, and ends at a coastal port city on the KwaZulu-Natal lowland. Leaving OR Tambo International Airport, the flight first crosses the Johannesburg metro belt before the ground opens into highveld grassland farmland. " +
        "The middle of the route crosses the transition from the Mpumalanga highveld to lower ground, where elevation steps down from around 1,600 metres and the surface changes from gentle plateau to more deeply cut hills and valleys, marking the boundary between highveld grassland and lowveld savanna. Farther south-east, vegetation shifts from grassland to subtropical thicket and sugarcane farmland. " +
        "Approaching Richards Bay, the flight descends onto the KwaZulu-Natal coastal lowland: flat ground where rivers split into several channels before reaching the sea, continuous sugarcane fields, and the Indian Ocean coastline and port facilities visible in the distance. The flight lands west of the town, completing a clear elevation and vegetation transition from an inland plateau to a subtropical coastal lowland.",
    },
    travel: {
      "zh-CN":
        "这条国内航线由Airlink运营，飞行时间约1小时5分钟；实际班期与出发航站楼以行程单为准。" +
        "理查兹湾机场距市中心约10公里，出租车或预约接送即可到达。理查兹湾是非洲重要的煤炭出口港之一，也是前往圣卢西亚湿地公园与夸祖鲁-纳塔尔北海岸的中转城市。" +
        "沿途气候由内陆高原的温带转为沿海的亚热带，夏季（11—3月）湿热多雨，海边活动建议留意潮汐与水母提示。",
      "en-US":
        "This domestic route is operated by Airlink with a flight time of about 1 hour 5 minutes; check the actual itinerary for schedule and terminal. " +
        "Richards Bay Airport is about 10 km from the town centre, reachable by taxi or pre-booked transfer. Richards Bay is one of Africa's major coal-export ports and a transit point for the iSimangaliso Wetland Park and the KwaZulu-Natal north coast. " +
        "The climate shifts en route from the temperate inland plateau to the subtropical coast; summer (November–March) is warm, humid and rainy, so check tide and jellyfish advisories before beach activities.",
    },
  },
};
