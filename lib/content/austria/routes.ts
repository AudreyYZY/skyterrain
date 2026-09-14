import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "vie-inn": {
    study: {
    "zh-CN":
      "维也纳飞因斯布鲁克，是一趟自东向西横贯奥地利全境的航线，从维也纳盆地一路飞越阿尔卑斯山脉，抵达蒂罗尔州的山间城市因斯布鲁克。起飞后不久，脚下展开维也纳盆地开阔平坦的地势——这是阿尔卑斯山与喀尔巴阡山之间一处年轻的构造沉降盆地。" +
      "飞机继续向西，进入维也纳森林——阿尔卑斯山脉向东延伸的最后一段石灰岩丘陵，森林覆盖率极高。越过维也纳森林后，飞机跨越奥地利中部大片山地，抵达达赫斯坦山上空——山顶终年积雪的哈尔施塔特冰川清晰可见，喀斯特地貌发育的灰白色山体格外醒目。飞机继续向西，最后掠过卡尔文德尔山陡峭的石灰岩崖壁，沿因河谷下降，降落在四周被阿尔卑斯山环绕的因斯布鲁克。",
    "en-US":
      "Flying from Vienna to Innsbruck crosses the whole of Austria from east to west, from the Vienna Basin over the Alps to the mountain city of Innsbruck in Tyrol. Soon after take-off, the broad, flat expanse of the Vienna Basin unfolds below — a young tectonic subsidence basin between the Alps and the Carpathians." +
      " The flight continues west into the Wienerwald, the easternmost limestone hill range where the Alps taper off, densely forested throughout. Beyond the Wienerwald the plane crosses a wide swath of central Austrian mountains and passes over the Dachstein, where the year-round snow of the Hallstatt Glacier is clearly visible against the pale grey karst massif below. Continuing west, the flight skirts the steep limestone cliffs of the Karwendel before descending along the Inn Valley into Innsbruck, ringed on all sides by the Alps.",
    },
    // travel sources: 全四段（study/travel × 中英）: 维也纳盆地、维也纳森林、达赫斯坦、卡尔文德尔与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "维也纳到因斯布鲁克飞约55分钟，两地同一时区，也可选择约4-5小时的城际列车（奥地利铁路 ÖBB 网络便捷，很多本地人更倾向于坐火车）。因斯布鲁克机场离市区约4公里。因斯布鲁克是蒂罗尔州首府，也是探索厄茨塔尔阿尔卑斯山、齐勒河谷滑雪区的理想基地。奥地利属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Vienna to Innsbruck is about 55 minutes, same time zone; an intercity train (about 4-5 hours on the ÖBB rail network) is another option many locals prefer. Innsbruck Airport is about 4 km from the centre. Innsbruck is the capital of Tyrol and an ideal base for exploring the Ötztal Alps and the Zillertal ski areas. Austria is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "vie-grz": {
    study: {
    "zh-CN":
      "维也纳飞格拉茨，是一趟深入奥地利东南部施泰尔马克州的短途航线。起飞后不久，脚下出现维也纳盆地开阔平坦的地势，随后飞机进入维也纳森林——阿尔卑斯山脉向东延伸的最后一段石灰岩丘陵地带，森林覆盖率极高。" +
      "飞机继续向西南，一片相对平缓的喀斯特高原出现在下方——拉克斯—施内山，海拔2076米的施内山是阿尔卑斯山脉向东延伸中最后一座超过2000米的山峰，也是维也纳市民熟悉的“后山”。越过这片山地后，飞机降落在穆尔河畔的格拉茨——按人口计奥地利第二大城市。",
    "en-US":
      "Flying from Vienna to Graz is a short hop deep into Styria in south-eastern Austria. Soon after take-off, the broad, flat Vienna Basin appears below, and the flight then enters the Wienerwald, the easternmost, densely forested stretch of limestone hills where the Alps taper off." +
      " Continuing south-west, a comparatively gentle karst highland comes into view — the Rax-Schneeberg Group, whose Schneeberg, at 2,076 m, is the easternmost peak in the Alps to exceed 2,000 m and a familiar \"local mountain\" for Vienna's residents. Past this highland, the flight descends into Graz on the Mur River, Austria's second-largest city by population.",
    },
    // travel sources: 全四段（study/travel × 中英）: 施内山 2076 m、格拉茨为奥地利第二大城市与本库一致；UNESCO 年份原写 2000，按 1 级来源改为 1999。核实 2026-09-11
    travel: {
    "zh-CN":
      "维也纳到格拉茨飞约40分钟，两地同一时区，也可选择约2.5小时的城际列车。格拉茨机场离市区约10公里。格拉茨是施泰尔马克州首府，老城1999年列入联合国教科文组织世界遗产名录，也是探索穆尔河上游河漫滩森林的理想基地。奥地利属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Vienna to Graz is about 40 minutes, same time zone; an intercity train (about 2.5 hours) is another option. Graz Airport is about 10 km from the centre. Graz is the capital of Styria, its old town a UNESCO World Heritage site since 1999, and an ideal base for exploring the floodplain forests of the upper Mur. Austria is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "vie-klu": {
    study: {
    "zh-CN":
      "维也纳飞克拉根福，是一趟从维也纳盆地飞向奥地利南部克恩顿州湖区的航线。起飞后不久，脚下展开维也纳盆地开阔平坦的地势，随后飞机跨越拉克斯—施内山——阿尔卑斯山脉最东端的喀斯特高原，海拔2076米的施内山是这一带的最高点。" +
      "飞机继续向西南，一片面积广阔的喀斯特高原出现在下方——陶滕山，中欧面积最大的喀斯特高原，山体崖壁陡峭、顶部相对平坦，散布着大量圆形溶蚀洼地。越过陶滕山后，飞机降落在沃尔特湖东端的克拉根福——奥地利南部重要的湖区旅游城市。",
    "en-US":
      "Flying from Vienna to Klagenfurt heads from the Vienna Basin toward the lake district of Carinthia in southern Austria. Soon after take-off, the broad, flat Vienna Basin unfolds below, and the flight then crosses the Rax-Schneeberg Group, the karst highland at the easternmost tip of the Alps, whose Schneeberg (2,076 m) is the area's highest point." +
      " Continuing south-west, an extensive karst plateau comes into view — the Totes Gebirge, Central Europe's largest karst plateau, its cliffs steep and its summit comparatively flat, scattered with numerous circular dissolution hollows. Past the Totes Gebirge, the flight descends into Klagenfurt at the eastern end of Wörthersee, an important lake-resort city in southern Austria.",
    },
    // travel sources: 全四段（study/travel × 中英）: 陶滕山「中欧面积最大的喀斯特高原」与本库一致；克拉根福在沃尔特湖东端。核实 2026-09-11
    travel: {
    "zh-CN":
      "维也纳到克拉根福飞约50分钟，两地同一时区，也可选择约4小时的城际列车。克拉根福机场离市区约3公里。克拉根福是克恩顿州首府，坐落在沃尔特湖东端，是探索克恩顿州湖区（沃尔特湖、米尔施塔特湖）的理想基地。奥地利属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Vienna to Klagenfurt is about 50 minutes, same time zone; an intercity train (about 4 hours) is another option. Klagenfurt Airport is about 3 km from the centre. Klagenfurt, the capital of Carinthia, sits at the eastern end of Wörthersee and is an ideal base for exploring Carinthia's lake district (Wörthersee, Millstätter See). Austria is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "pvg-vie": {
    // study sources: 全四段（study/travel × 中英）: 萨雷阿尔卡 2008 年列入 UNESCO，与本库 terrain/korgalzhyn-reserve 一致；维也纳盆地。核实 2026-09-11
    study: {
    "zh-CN":
      "上海飞维也纳，从长江口向西北横穿亚欧大陆，终点在阿尔卑斯山东端的一片低地。起飞后先掠过华北平原，黄河与海河冲积出来的低平耕地，地势极为平坦，耕地与城镇连成一片，是中国人口最密集的区域之一。再往西北进入蒙古高原南缘的戈壁，地表以砾石为主，河流稀少且多为季节性；昼夜温差极大，夏季地表能升到五六十度，冬季又降到零下三四十度，几乎没有连续植被。风把细沙吹走后留下坚硬的砾幂，被搬走的沙在下风处堆成沙丘带。接着是萨雷阿尔卡草原——哈萨克丘陵上的一片干草原，地势起伏和缓；春季融雪在洼地里积成成千上万个季节性湖泊，是候鸟迁徙路线上的重要中继站，这一带的湖群已列入世界遗产。夏季蒸发强烈，不少湖泊缩小甚至干涸，湖岸留下白色的盐壳，草场随之从绿转黄，牧群向北迁到还有水的洼地。这一带地下埋藏着丰富的铜、铅锌与煤，采矿点散布在草原之间，是哈萨克斯坦最主要的工业地带之一。再往西草原逐渐让位给耕地，河流开始稳定，田块与防风林带成排出现，聚落密度肉眼可见地上升。飞越东欧平原之后，地势依旧平缓，直到喀尔巴阡山在南面拉出一道弧线。飞机最后进入维也纳盆地，这片低地夹在阿尔卑斯山与喀尔巴阡山之间，多瑙河从中穿过，降落在城市东南的维也纳国际机场。",
    "en-US":
      "Shanghai to Vienna runs north-west from the mouth of the Yangtze across the Eurasian landmass to a lowland at the eastern end of the Alps. After take-off the flight crosses the North China Plain, low farmland built by the silt of the Yellow and Hai rivers, so level that fields and towns run together as one of the most densely settled parts of China. Farther north-west it enters the Gobi on the southern edge of the Mongolian Plateau, a surface mostly of gravel where rivers are few and largely seasonal; the daily temperature swing is extreme, ground temperatures climbing above 50°C in summer and falling to −30°C or lower in winter, and no continuous vegetation forms. The wind has carried the fine sand away to leave a hard pavement and piled it downwind into belts of dune. Next comes the Saryarka steppe on the Kazakh Uplands, dry grassland on gentle relief where the spring melt pools into many thousands of seasonal lakes, an important staging ground on the migratory bird routes, with the lake systems here inscribed as World Heritage. Evaporation is strong in summer, so many of the lakes shrink or dry out entirely and leave white salt crusts along their shores, the grass turns from green to straw, and herds move north to the hollows that still hold water. Copper, lead-zinc and coal lie under this ground, and mining sites scattered across the grassland make it one of Kazakhstan's principal industrial belts. Farther west the grassland gives way to cultivated land, rivers run more reliably, fields and shelterbelts appear in rows, and the density of settlement visibly rises. Beyond the East European Plain the ground stays gentle until the Carpathians draw an arc across the south. The flight finally enters the Vienna Basin, a lowland caught between the Alps and the Carpathians with the Danube running through it, and lands at Vienna International Airport south-east of the city.",
    },
    travel: {
    "zh-CN":
      "上海到维也纳约12小时25分钟，时差6-7小时（奥地利夏令时期间6小时）。维也纳四季分明，夏季温暖、冬季寒冷，音乐会与歌剧演出全年不断，冬季还有圣诞市集。" +
      "维也纳国际机场距市中心约18公里，机场城铁（CAT）约16分钟直达市中心，也有较便宜的S7城铁线路。市内电车、地铁票制统一，美泉宫、圣斯蒂芬大教堂、维也纳国家歌剧院都是必游景点，不少博物馆有学生/夜间优惠。" +
      "奥地利属申根区，签证按国籍不同、以奥地利驻当地使领馆最新公布为准，行前确认并预留办理时间。剧院、教堂等场所着装宜整洁得体。",
    "en-US":
      "Shanghai to Vienna takes about 12 hours 25 minutes, with a 6–7 hour time difference (6 hours during Austrian summer time). Vienna has distinct seasons — warm summers, cold winters — with concerts and opera running year-round, plus Christmas markets in winter." +
      " Vienna International Airport is about 18 km from the city centre; the City Airport Train (CAT) takes about 16 minutes direct into town, and the cheaper S7 suburban line also runs in. Trams and the metro share one ticketing system. Schönbrunn Palace, St. Stephen's Cathedral and the Vienna State Opera are must-sees, and many museums offer student or evening discounts." +
      " Austria is in the Schengen area; visa rules vary by nationality — check the latest from the Austrian consulate for your location and allow time to arrange one. Dress neatly for theatres and churches.",
    },
  },
};
