import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  // sources（2026-09-21）：当前 Windhoek–Rundu 定期航点关系 = 航司官方 destinations 页（1 级）；
  // 中部高原→北部沙地林地→卡万戈河的地理结构 = GSN 全国地质图、NTB Four Rivers / Transportation（1 级）。
  // 航班号、机型与精确时长拿不到，route.source.status=flight-unknown，四套解说都不点名。
  "ers-ndu": {
    study: {
      "zh-CN":
        "温得和克飞伦杜，从海拔较高、起伏明显的中部高原一路向北，最后到达常年有水的卡万戈河岸。飞机从市南的埃罗斯机场起飞，脚下先是温得和克周围的干燥山岭和浅谷：裸岩山脊之间散布城市、牧场和季节性河道。" +
        "离开中部高原后，地势逐渐变平。红褐色沙土覆盖更大范围，笔直公路穿过稀疏聚落；越往北，木本植被越连续，地面从开阔灌木草原转为沙地林地。这里属于卡拉哈里沙层的北部延伸，风成沙被植被固定，不是连绵移动沙丘。" +
        "接近伦杜时，一条深绿色带突然横在浅色地表上——卡万戈河。河岸树木高大，低地里有耕地、支汊和湿地斑块，城市沿南岸东西展开。飞机降落在市区西南的伦杜机场，短短一段航程跨过了纳米比亚从高原旱地到常年河谷的明显环境梯度。",
      "en-US":
        "Windhoek to Rundu runs north from the high, broken central plateau to the bank of the perennial Kavango River. Leaving Eros Airport south of the city, the first view is dry ridges and shallow valleys around Windhoek, with urban ground, grazing land and seasonal channels fitted between bare-rock hills. " +
        "Beyond the central highlands the relief gradually flattens. Red-brown sand covers more of the surface, straight roads cross sparse settlement, and woody cover becomes more continuous toward the north as open thornbush gives way to sandveld woodland. This is a northern extension of the Kalahari sand sheet, fixed by vegetation rather than a field of migrating dunes. " +
        "Approaching Rundu, a deep green line suddenly cuts across the pale ground — the Kavango River. Tall trees edge the channel, with fields, side channels and wet patches on low ground, and the city extends east–west along the southern bank. Landing south-west of town completes a compact transect from dry highland to perennial river valley.",
    },
    travel: {
      "zh-CN":
        "本条地理航线以市南的埃罗斯机场为起点；实际班期和出发机场会变，订票时务必按行程单再次确认，不要只凭城市名判断。" +
        "伦杜机场距市中心直线约5公里。伦杜是去迪文杜、波帕急流和东北部保护区的重要补给点，抵达后可用出租车进城，再租车或跟团继续向东。" +
        "5月至9月较干爽；雨季炎热，低地道路可能积水。离开伦杜前补足燃油、现金、饮水和离线地图，河边不要随意下水或靠近没有护栏的水缘。",
      "en-US":
        "This geographic route uses Eros Airport south of the city as its starting point. Operating schedules and departure airports can change, so confirm the airport and date shown on the actual itinerary rather than relying on the city name. " +
        "Rundu Airport is about 5 km from the centre in a straight line. Rundu is the main supply point for Divundu, the Popa rapids and the north-eastern protected areas; take a taxi into town, then continue east by rental vehicle or tour. " +
        "May to September is drier and more comfortable. The wet season is hot and low roads can flood. Load fuel, cash, water and offline maps before leaving Rundu, and do not swim casually or approach an unprotected river edge.",
    },
  },

  // sources（2026-09-21）：当前 Windhoek–Katima Mulilo 定期航点关系 = 航司官方 destinations 页（1 级）；
  // 卡拉哈里沙地 = UNESCO 1430；东北水道与 Nkasa Rupara = MEFT（1 级）。航班细节未知，不点名。
  "ers-mpa": {
    study: {
      "zh-CN":
        "温得和克飞卡蒂马穆利洛，是一条从纳米比亚中部干燥高原斜穿东部沙地，进入东北河流湿地的国内航线。飞机从埃罗斯机场起飞，先越过温得和克周围的岩石山岭；高原向东北逐渐变缓，裸岩减少，红褐色沙层和稀树草原占据地表。" +
        "航线中段进入卡拉哈里沙地北部。这里不是巨型活动沙丘，而是被草和灌木稳定的低沙垄与宽阔丘间地；从空中能看到植被顺着沙垄形成细长纹理，季节性洼地和笔直道路打断其间。继续向东北，树木变密，浅槽、水塘和洪泛低地越来越多。" +
        "接近终点前，恩卡萨—鲁帕拉一带展示出完全不同的地表：深色水道在浅绿芦苇间分汊，白蚁丘和高树组成略高的岛状斑块。丰水期水面连成网，旱季则露出草地和旧水道。飞机随后转向北，在卡蒂马穆利洛机场降落；从起点到终点，年降雨与地表水的重要性一路增加。",
      "en-US":
        "Windhoek to Katima Mulilo cuts diagonally from Namibia's dry central highlands across the eastern sandveld into the river wetlands of the north-east. After leaving Eros Airport, the flight crosses rocky ridges around Windhoek. The plateau gradually becomes gentler to the north-east, bare rock decreases, and red-brown sand with open savanna takes over. " +
        "The middle of the route enters the northern Kalahari sandveld. This is not a field of giant active dunes, but low sand ridges fixed by grass and shrubs with broad interdune ground between them. From the air, vegetation follows the ridges in long fine bands, interrupted by seasonal hollows and straight roads. Farther north-east, tree cover thickens and shallow channels, pools and flood lows become more frequent. " +
        "Near the destination, Nkasa Rupara shows a completely different surface: dark channels divide through pale-green reeds, and termite mounds with tall trees form slightly raised islands. High water joins the channels into a web; the dry season exposes grass and former waterways. The flight then turns north to Katima Mulilo Airport, completing a route along which rainfall and surface water become steadily more important.",
    },
    travel: {
      "zh-CN":
        "本条地理航线以埃罗斯机场为起点；公开静态页面不足以确认每个日期的实际班期和出发机场，订票后请按行程单核对，不要只凭城市名。" +
        "卡蒂马穆利洛机场距市中心直线约18公里，提前约接送最稳妥。这里是姆杜穆、恩卡萨—鲁帕拉与东北河流活动的补给城市；公园道路会随水位改变，部分季节需要带救援装备的四驱车。" +
        "5月至10月较凉爽干燥，雨季湿热且洪水可能切断支路。出发去偏远公园前确认水位、燃油、营地和通信，河上活动用登记向导，不接近河马、鳄鱼或象群。",
      "en-US":
        "This geographic route uses Eros Airport as its starting point. Public static pages are not sufficient to establish the operating schedule and departure airport for every date, so check the airport shown on the actual itinerary rather than relying on the city name. " +
        "Katima Mulilo Airport is about 18 km from the centre in a straight line, so a pre-arranged transfer is simplest. The city is the supply base for Mudumu, Nkasa Rupara and north-eastern river activities. Park roads change with water level, and some seasons require a four-wheel-drive vehicle with recovery equipment. " +
        "May to October is cooler and drier; the wet season is humid and floods can cut minor roads. Before a remote park trip confirm water level, fuel, camp and communications, use registered river guides, and never approach hippos, crocodiles or elephants.",
    },
  },
};
