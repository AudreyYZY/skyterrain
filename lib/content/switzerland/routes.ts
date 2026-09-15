import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "zrh-gva": {
    study: {
    "zh-CN":
      "苏黎世飞日内瓦，是瑞士两大城市之间的连线，几乎全程在阿尔卑斯山以北的“中部高原”上飞——瑞士的人口、城市和农田都集中在这条从东北到西南的丘陵湖泊带里。" +
      "起飞后先经过卢塞恩湖一带的湖山交界，然后是典型的高原景观：一片片牧场和麦田、散落的村镇、几个中等大小的湖（比尔湖、纳沙泰尔湖），背景是南面阿尔卑斯的雪墙。" +
      "接近终点，出现一个巨大的新月形湖——日内瓦湖（法语 Lac Léman），是阿尔卑斯北缘最大的湖，罗讷河从东端流入、西端的日内瓦流出。城市几乎被法国领土包住，湖对岸远处是勃朗峰。",
    "en-US":
      "Zürich to Geneva links Switzerland's two largest cities, flown almost entirely over the 'Swiss Plateau' north of the Alps — where the country's population, cities and farmland are concentrated, in this belt of hills and lakes running north-east to south-west." +
      " After take-off you pass the lake-and-mountain junction around Lake Lucerne, then the typical plateau landscape: patchwork pasture and wheat fields, scattered towns, a few medium lakes (Biel, Neuchâtel), with the wall of the Alps to the south." +
      " Near the end a huge crescent lake appears — Lake Geneva (Lac Léman), the largest lake on the northern edge of the Alps, with the Rhône flowing in at the east end and out at Geneva in the west. The city is almost surrounded by French territory, and Mont Blanc is visible in the distance across the lake.",
    },
    // travel sources: 全四段（study/travel × 中英）: 日内瓦湖「阿尔卑斯北缘最大的湖」（区域内博登湖、纳沙泰尔湖均更小）；瑞士高原与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "苏黎世到日内瓦飞约 45 分钟，同一时区。瑞士国内基本靠火车（约 2 小时 45 分、直达、市中心到市中心），SWISS 飞这条线主要是为转机旅客。" +
      "苏黎世是德语区、日内瓦是法语区，两地生活方式略不同、都英语通用。日内瓦国际组织多、物价在瑞士也偏高，很多博物馆每月第一个周日免费。" +
      "机场取行李处可领 80 分钟市内交通票，住宿通常送交通卡。",
    "en-US":
      "Zürich to Geneva is about 45 minutes, in the same time zone. Domestic travel in Switzerland is essentially by train (about 2 hours 45 minutes, direct, city centre to city centre), and SWISS flies this route mainly for connecting passengers." +
      " Zürich is German-speaking and Geneva French-speaking, with slightly different lifestyles, and English works in both. Geneva has many international organisations and high prices even for Switzerland, and many museums are free on the first Sunday of the month." +
      " At baggage claim you can collect an 80-minute transit ticket, and accommodation usually includes a transport card.",
    },
  },

  "pvg-zrh": {
    // study sources: 全四段（study/travel × 中英）: 瑞士高原夹在汝拉与阿尔卑斯之间，与本库瑞士条目一致；瑞士属申根不属欧盟。核实 2026-09-11
    study: {
    "zh-CN":
      "上海飞苏黎世，向西北横跨亚欧大陆，全程约九千四百公里，终点在阿尔卑斯山北麓。起飞后先越过长江口，江水带来的泥沙把这一带的海面染成浑黄。接着进入华北平原——黄河与海河长期泛滥淤积出来的低平耕地，地势自西向东缓缓降低，坡度小到肉眼难以察觉；黄河历史上多次改道，留下一条条废弃的古河床和高出地面的堤岸，如今这里是中国耕地与人口最密集的地区之一。再往西北进入蒙古高原南缘的戈壁——以砾石和裸岩为主的干旱带，年降水多在两百毫米以下，风把细沙吹走后留下坚硬的砾幂，被搬走的沙在下风处堆成沙丘带；河流大多是季节性的，雨后短暂过水随即干涸，昼夜温差常超过三十度。越往西北，砾漠逐渐让位给草原，地表重新出现连续的草皮和季节性的牧场。接着是中亚腹地的萨雷阿尔卡草原，哈萨克丘陵之上起伏平缓的干草原，属于横贯欧亚的大草原带；这里降水稀少、蒸发强烈，地表水多汇入没有出海口的内流湖，湖岸留下白色盐壳，春季短暂返青后草场迅速转黄。再往西地势继续下降，进入里海北岸的低地——世界上面积最大的洼地之一，部分地面低于海平面；伏尔加河从这里注入里海，河口散开成大片芦苇湿地和沙洲，是候鸟迁徙路线上的重要中继站。越过伏尔加河后是东欧平原，古老地台之上起伏极小的开阔低地，河流舒缓，田块与林带的图案从空中看格外规整，冬季常见大范围积雪。最后飞机跨过中欧的丘陵，进入瑞士高原：夹在汝拉山与阿尔卑斯山之间的一条带状低地，冰川退去后留下湖泊与冰碛丘陵，瑞士的大部分城市都集中在这里。飞机降落在苏黎世机场。",
    "en-US":
      "Shanghai to Zurich runs north-west across the Eurasian landmass, about 9,400 km in all, ending at the northern foot of the Alps. After take-off it crosses the mouth of the Yangtze, where the river's silt stains the sea a muddy yellow. The route then enters the North China Plain, low farmland built up by long flooding of the Yellow and Hai rivers, sloping so gently from west to east that the fall is invisible to the eye; the Yellow River has changed course many times, leaving abandoned channels and raised levees across the ground, and this is now among the most densely farmed and densely settled parts of China. Farther north-west comes the Gobi Desert on the southern edge of the Mongolian Plateau, an arid belt of gravel and bare rock where most years bring less than 200 millimetres of rain; the wind has carried the fine sand away to leave a hard pavement and piled it downwind into dune fields, the rivers are mostly seasonal, running briefly after rain and then drying out, and the daily temperature can swing more than thirty degrees. The farther north-west the flight goes, the more the gravel gives way to steppe, with continuous turf and seasonal pasture returning to the surface. Next is the Saryarka Steppe in the heart of Central Asia, gently rolling dry grassland on the Kazakh Uplands and part of the great Eurasian steppe belt; rain is scarce and evaporation strong, surface water collects in lakes with no outlet to the sea and leaves white salt crusts on their shores, and the grass greens briefly in spring before turning to straw. Farther west the land keeps dropping into the lowland north of the Caspian, one of the largest depressions on Earth, parts of it below sea level; the Volga enters the Caspian here, spreading at its mouth into wide reed marsh and sandbars that are an important staging ground on the bird migration routes. Past the Volga lies the East European Plain, an open lowland on an ancient platform with almost no relief, its rivers slow and its fields and shelterbelts reading from the air as a strikingly regular pattern, often under broad winter snow. The flight finally crosses the hills of central Europe onto the Swiss Plateau, a belt of lowland between the Jura and the Alps where retreating glaciers left lakes and moraine hills and where most of the country's cities are concentrated. It lands at Zurich Airport.",
    },
    travel: {
    "zh-CN":
      "上海到苏黎世约12小时，两地时差6-7小时（瑞士夏令时期间6小时）。瑞士夏季凉爽宜人，冬季寒冷多雪，阿尔卑斯山区昼夜温差大，出行建议分层穿衣。" +
      "苏黎世机场距市中心约10公里，有便捷的S-Bahn城铁直达苏黎世火车总站，车程约10分钟。市内公共交通（有轨电车、巴士、渡轮）票制统一，苏黎世老城、班霍夫大街、林登霍夫高地都是热门去处，湖畔散步也很受欢迎。" +
      "瑞士属申根区但非欧盟成员，签证按国籍不同、以瑞士驻当地使领馆最新公布为准，行前确认并预留办理时间。瑞士整体治安良好，但公共设施与物价水平均较高，出行预算需留有余量。",
    "en-US":
      "Shanghai to Zurich takes about 12 hours, with a 6–7 hour time difference (6 hours during Swiss summer time). Switzerland has cool, pleasant summers and cold, snowy winters, with large day–night temperature swings in the Alps — pack layers." +
      " Zurich Airport is about 10 km from the city centre; the S-Bahn runs directly to Zurich main station in about 10 minutes. Trams, buses and ferries share one ticketing system. Zurich's Old Town, Bahnhofstrasse and the Lindenhof terrace are popular spots, and a stroll along the lakeshore is a local favourite." +
      " Switzerland is in the Schengen area but not an EU member; visa rules vary by nationality — check the latest from the Swiss consulate for your location and allow time to arrange one. Switzerland is generally very safe, but prices for services and goods run high, so budget accordingly.",
    },
  },
};
