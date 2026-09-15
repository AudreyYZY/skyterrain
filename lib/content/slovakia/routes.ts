import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "bts-ksc": {
    // 全四段 sources: 大圆约 302 km（沿航点折线约 335 km），正文写「全程约三百公里」；
    // 小喀尔巴阡最高点扎鲁比峰 768 m、低塔特拉最高点敦比耶尔峰 2043 m、斯洛伐克矿山最高点斯托利察峰 1476 m
    // 均与本库地形条目一致。⚠️ 承运人 Wizz Air 已核实、航班号与机型未核实（route.source.status = "flight-unknown"），
    // 所以两套解说都**不点名航班号与机型**，travel 段只说「有直飞」。2026-09-13 首写。
    study: {
    "zh-CN":
      "布拉迪斯拉发飞科希策，全程约三百公里，是一条自西向东横穿整个斯洛伐克的航线，也是看清这个国家地形骨架最直接的一趟。" +
      "起飞后脚下先是小喀尔巴阡山——喀尔巴阡山脉的西南收尾，一条细长的森林山带，高程从多瑙河边的一百多米升到最高点扎鲁比峰七百六十八米，坡上的葡萄园与坡下的耕地界线分明。" +
      "越过这道山带后是多瑙低地北缘的丘陵与河谷，瓦赫河的河谷自西南向东北切开山地，是贯通西北的天然走廊。" +
      "航程中段进入低塔特拉——瓦赫河与赫龙河之间一条东西向的长脊，最高点敦比耶尔峰海拔两千零四十三米，脊线越过林线之后是连片的高山草甸，北坡的石灰岩里藏着成组的洞穴系统。" +
      "再往东，地形从一条脊变成一片：斯洛伐克矿山不是山脊而是山群与喀斯特高原的集合，最高点斯托利察峰一千四百七十六米；其中几块顶面平坦、边缘陡立的台地是喀斯特高原，台面上几乎看不到河流，水都在地下。" +
      "最后飞机沿霍尔纳德河谷下降，降落在科希策——斯洛伐克东部的中心城市，河谷两侧是低山，南郊是与市区面积相当的钢铁厂区。",
    "en-US":
      "Bratislava to Košice runs about three hundred kilometres west to east across the whole of Slovakia, and it is the most direct way to read the country's structural skeleton." +
      " Below the climb-out are the Little Carpathians, the south-western termination of the Carpathian chain: a slender forested band rising from a little over a hundred metres at the Danube to 768 m at Záruby, with vineyards on the lower slopes clearly bounded against the farmland below." +
      " Beyond that band come the hills and valleys of the northern Danubian Lowland, with the Váh valley cutting north-east through the uplands as the natural corridor through the north-west." +
      " The middle of the flight crosses the Low Tatras, one long east–west crest between the Váh and the Hron, highest at Ďumbier, 2,043 m; above the treeline the crest carries continuous alpine meadow, while sets of cave systems lie hidden in the limestone of its northern slope." +
      " Farther east the terrain changes from a line to an area: the Slovak Ore Mountains are not a crest but an assemblage of massifs and karst plateaus, highest at Stolica, 1,476 m, and several of their flat-topped, abruptly edged tablelands are karst plateaus whose surfaces show almost no rivers because the water is all underground." +
      " The flight finally descends along the Hornád valley into Košice, the principal city of eastern Slovakia, with low hills on both sides of the valley and, on the southern outskirts, a steelworks comparable in area to the city itself.",
    },
    travel: {
    "zh-CN":
      "布拉迪斯拉发到科希策飞约一小时，同一时区。这条国内航线中断多年后于2025年11月复航，班期以航司公布为准；斯洛伐克境内其余城市之间以铁路与长途大巴为主。" +
      "布拉迪斯拉发什特凡尼克机场距市区约9公里，有机场大巴与公交进城；科希策国际机场距市中心约6公里。" +
      "两地同用欧元、同属申根区，境内出行不过边检。科希策是探索斯洛伐克东部的枢纽：往南是斯洛伐克喀斯特的洞穴群，往西是斯洛伐克天堂与塔特拉山，往北是山区的木教堂。",
    "en-US":
      "Bratislava to Košice takes about an hour, with no time difference. This domestic route resumed in November 2025 after years without service, and frequencies are whatever the airline publishes; travel between Slovakia's other cities runs mainly on rail and long-distance coaches." +
      " Bratislava's M. R. Štefánik Airport is about 9 km from the centre, with an airport coach and city buses into town; Košice International Airport is about 6 km from the city centre." +
      " Both ends use the euro and lie inside the Schengen area, so there are no border checks on the way. Košice is the hub for exploring eastern Slovakia: the caves of the Slovak Karst to the south, Slovak Paradise and the Tatras to the west, and the wooden churches of the mountains to the north.",
    },
  },
};
