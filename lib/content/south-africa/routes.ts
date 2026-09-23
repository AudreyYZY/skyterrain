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

  // sources（2026-09-23）：约翰内斯堡—金伯利航点关系 = Airportia + AirNav Radar 尾号追溯 + Trip.com 机型摘要交叉核对；
  // 弗里德堡陨石坑地貌事实（撞击年龄2.023 Ga、含金地层抬升、瓦尔河两岸石英岩残丘）与已收录 vredefort-dome
  // 地形条目正文保持一致（terrain.zh.ts 同目录）；航线大圆路径与陨石坑锚点最近距离约3.6 km（127 km 处），
  // 几何上确认经过，非估读。
  "jnb-kim": {
    study: {
      "zh-CN":
        "约翰内斯堡飞金伯利，从豪登省都会带向西南飞越弗里德堡陨石坑，最终降落在自由州以西、北开普省边缘的高原城市。飞机从OR·坦博国际机场起飞，先越过约翰内斯堡南郊的建成区，随后地表转为高地草原农牧区——这一段与飞往布隆方丹的航线起点相同，都在同一片高地台地上。" +
        "航线中段，飞机几乎正对着弗里德堡陨石坑飞越——这是一处20.23亿年前的天体撞击遗迹，地球上已知最古老的陨石坑。今天地表看不到一个完整的坑，而是一圈孤立残留的石英岩残丘，环绕在瓦尔河两岸起伏的高原上，那是撞击后地壳弹性回弹形成的中央隆起，历经二十多亿年剥蚀才露出今天的样子；深埋的含金地层也因这次撞击被抬升到近地表。" +
        "越过弗里德堡之后，地势继续向西南降低，高地草原逐渐让位给更干燥的开阔平原——这里已经接近自由州与北开普省的交界，植被稀疏、地表趋于半干旱。飞机在市区西侧降落，金伯利地处哈普高原边缘，是通往北开普省的门户城市。",
      "en-US":
        "Johannesburg to Kimberley flies almost directly over the Vredefort Dome on its way south-west from the Gauteng metro belt to a plateau city on the edge of the Northern Cape. Leaving OR Tambo International Airport, the flight first crosses the southern suburbs of Johannesburg before the ground opens into highveld farmland — the same terrain the Bloemfontein route starts over. " +
        "Midway through the route, the flight passes almost directly over the Vredefort Dome — the site of an asteroid impact 2.023 billion years ago, the oldest known impact structure on Earth. What survives at the surface today is not a crater but a ring of isolated quartzite hills around the Vaal River, the central uplift left behind after the crust rebounded from the impact and more than two billion years of erosion; the deeply buried gold-bearing strata beneath were also pushed up close to the surface by the same event. " +
        "Beyond Vredefort the land keeps dropping toward the south-west, and highveld grassland gives way to a drier, more open plain near the Free State–Northern Cape boundary, where vegetation thins and the surface turns semi-arid. The flight lands west of the city — Kimberley sits on the edge of the Ghaap Plateau, a gateway into the Northern Cape.",
    },
    travel: {
      "zh-CN":
        "这条国内航线由Airlink运营，飞行时间约1小时10分钟；实际班期与出发航站楼以行程单为准。" +
        "金伯利机场距市中心约10公里，出租车或预约接送即可到达。金伯利是北开普省省会，也是前往上卡鲁与北开普干旱区的补给中转城市。" +
        "沿途弗里德堡陨石坑一带属高地草原气候，越往西南越干燥，夏季（11—3月）午后偶有雷阵雨，出发前留意天气预报。",
      "en-US":
        "This domestic route is operated by Airlink with a flight time of about 1 hour 10 minutes; check the actual itinerary for schedule and terminal. " +
        "Kimberley Airport is about 10 km from the city centre, reachable by taxi or pre-booked transfer. Kimberley is the capital of the Northern Cape and a supply and transit point for the upper Karoo and the arid Northern Cape interior. " +
        "The Vredefort Dome area crossed en route has a highveld climate that turns drier toward the south-west; summer (November–March) can bring occasional afternoon thunderstorms, so check the forecast before travelling.",
    },
  },

  // sources（2026-09-23）：约翰内斯堡—乌平通航点关系 = flightmapper.net 直读时刻 + AirNav Radar 尾号追溯交叉核对；
  // 乌平通机场坐标（-28.3999,21.2603）落在已收录 orange-river-south-africa 地形 bbox（[17.0,-28.8,21.5,-28.3]）
  // 范围内，与 cities.ts 里「乌平通以西约120公里是奥拉比斯瀑布」的既有表述一致；但该地形条目的
  // landmark（奥拉比斯瀑布，lon 20.345）比乌平通本身更靠西，若直接引用该 terrain 航点，
  // check:routes 会报「航点回退」（航点投影超出终点）——因此改用贴近乌平通本身、不越过终点的
  // feature 航点表示奥兰治河谷，不引用该地形条目 id，但地理事实（乌平通两岸有奥兰治河灌溉绿洲）
  // 与已收录条目一致，未新增未核实的空间关系。
  "jnb-utn": {
    study: {
      "zh-CN":
        "约翰内斯堡飞乌平通，从豪登省高地一路向西南穿越高地草原与半干旱内陆台地，最终降落在奥兰治河畔的绿洲城市。飞机从OR·坦博国际机场起飞，先越过约翰内斯堡都会带，随后地表转为开阔的高地草原农牧区，这一段与飞往布隆方丹、金伯利的航线共用同一片起飞地貌。" +
        "航线中段，飞机持续向西南飞越自由州与北开普省交界的半干旱内陆台地——这里降雨渐少，地表植被从草原转为稀疏灌丛，是本国国土向卡拉哈里边缘过渡的地带，沿途少有城镇，是本批航线中过渡地带最长的一段。" +
        "临近乌平通时，地表突然出现一条深绿色的带状植被——奥兰治河，本国最长的河流。乌平通就坐落在河岸两侧，河水在这片半干旱台地上撑起一片绿洲式的灌溉农业带；抵达航点本身就落在这条河流沿线的地形范围内。飞机在市区北侧降落，完成了一次从高地草原到卡拉哈里边缘河谷绿洲的完整过渡。",
      "en-US":
        "Johannesburg to Upington runs south-west across highveld grassland and a semi-arid interior plateau before landing at an oasis town on the Orange River. Leaving OR Tambo International Airport, the flight first crosses the Gauteng metro belt before the ground opens into the same highveld farmland shared with the Bloemfontein and Kimberley routes. " +
        "The middle of the route continues south-west across the semi-arid interior plateau along the Free State–Northern Cape boundary, where rainfall thins and grassland gives way to sparse scrub — the longest stretch of transitional terrain in this batch of routes, with few towns along the way. " +
        "Approaching Upington, a dark green band of vegetation suddenly appears against the pale plateau — the Orange River, the country's longest. Upington sits on both banks, where the river supports an oasis-like belt of irrigated farming across the semi-arid plateau; the arrival waypoint itself falls within this river corridor. The flight lands north of the town, completing a transect from highveld grassland to a river oasis on the edge of the Kalahari.",
    },
    travel: {
      "zh-CN":
        "这条国内航线由Airlink运营，飞行时间约1小时35分钟；实际班期与出发航站楼以行程单为准。" +
        "乌平通国际机场距市中心约5公里，出租车或预约接送即可到达。乌平通沿奥兰治河而建，是通往上游奥拉比斯瀑布与卡拉哈里南缘的补给中转城市。" +
        "沿途半干旱台地昼夜温差大，夏季（11—3月）炎热干燥，出行建议携带充足饮水并留意防晒。",
      "en-US":
        "This domestic route is operated by Airlink with a flight time of about 1 hour 35 minutes; check the actual itinerary for schedule and terminal. " +
        "Upington International Airport is about 5 km from the city centre, reachable by taxi or pre-booked transfer. Upington sits along the Orange River and is a supply and transit point for the Augrabies Falls upstream and the southern edge of the Kalahari. " +
        "The semi-arid plateau crossed en route has a wide day–night temperature range; summer (November–March) is hot and dry, so carry enough water and sun protection when travelling.",
    },
  },

  // sources（2026-09-23）：开普敦—乔治航点关系 = Planefinder/Airportia（方向）+ planemapper.com 4Z622 直读时刻
  // + flightmapper.net 4Z627 直读交叉核对；机型两源冲突（ERJ135 vs E195-E2），未取得单一确认型号，
  // aircraft 字段与本篇解说均不点名具体机型。航线不与任何已收录南非地形 bbox 相交（大圆路径全程在
  // karoo/cederberg/table-mountain/cape-peninsula-coast 等 bbox 之外），改用 feature 航点描述区域地貌，
  // 不复述 george 城市条目里「市中心位于山麓」这类更具体的空间断言。
  "cpt-grj": {
    study: {
      "zh-CN":
        "开普敦飞乔治，沿南非南部海岸向东飞越开普褶皱带内陆一侧，最终降落在花园大道的门户城市。飞机从开普敦国际机场起飞，先掠过桌山半岛以东的开普平原，随后转向东，沿着南部海岸线飞行。" +
        "航线中段，飞机在开普褶皱带内陆一侧飞行——这是一条沿本国西南与南部海岸延伸的褶皱山系，与已收录的塞德堡属同一条造山带，只是这里的褶皱强度与地层组合不同。飞机始终在这条山系与海岸线之间的走廊里飞行，不直接飞越任何单一山峰。" +
        "临近乔治时，地表逐渐转为花园大道沿岸的丘陵与森林地貌——这一带因温和湿润的气候与茂密植被得名，是本国南部海岸旅游线路的核心地带。飞机在市区南侧降落，全程都在开普褶皱带与南部海岸之间的狭长地带内飞行。",
      "en-US":
        "Cape Town to George flies east along South Africa's southern coast, past the inland side of the Cape Fold Belt, to a gateway town on the Garden Route. Leaving Cape Town International Airport, the flight first crosses the Cape Flats east of the Cape Peninsula before turning east along the southern coastline. " +
        "The middle of the route runs along the inland side of the Cape Fold Belt — the same folded mountain system that runs along the country's south-western and southern coast as the already-registered Cederberg, though with different fold intensity and rock sequence here. The flight stays within the corridor between this mountain system and the coastline rather than crossing any single peak directly. " +
        "Approaching George, the surface gives way to the hills and forest of the Garden Route — a stretch named for its mild, wet climate and dense vegetation, and the core of the country's southern coastal tourist route. The flight lands south of the town, having stayed within the narrow strip between the Cape Fold Belt and the southern coast for the whole route.",
    },
    travel: {
      "zh-CN":
        "这条国内航线由Airlink运营，飞行时间约55分钟；实际班期与出发航站楼以行程单为准。" +
        "乔治机场距市中心约10公里，出租车或预约接送即可到达。乔治机场是花园大道地区唯一有定期商业客运航班的机场，也是前往克尼斯纳、莫塞尔湾等周边旅游小镇的中转起点。" +
        "沿途南部海岸属温带海洋性气候，全年降雨分布均匀，出发前留意沿海路段的风雨预报。",
      "en-US":
        "This domestic route is operated by Airlink with a flight time of about 55 minutes; check the actual itinerary for schedule and terminal. " +
        "George Airport is about 10 km from the city centre, reachable by taxi or pre-booked transfer. It is the only airport in the Garden Route area with scheduled commercial passenger flights, and a transit point for nearby towns such as Knysna and Mossel Bay. " +
        "The southern coast crossed en route has a temperate oceanic climate with rainfall spread through the year, so check coastal wind and rain forecasts before travelling.",
    },
  },
};
