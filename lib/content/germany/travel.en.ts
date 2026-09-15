import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  "germany-overview": {
    // identity sources: Destatis 新闻稿 PD26_203_124（2026-06-16）：2025 年末德国人口 83.5 百万，较 2024 年末**减少**约 11 万（−0.1%），是 2020 年以来首次下降（死亡多于出生 35.2 万，净移民 +23.5 万）。https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/06/PD26_203_124.html （级别 1）
    //   发布节奏：每年 1 月出上年末初步值，当年 6 月出修正后的正式值——本条用的是 6 月的正式值。
    identity:
      "Germany, in Central Europe, covers about 358,000 km² with a population of about 83.5 million at the end of 2025 (Destatis), one of Europe's most populous countries. The terrain rises gradually from north to south — a lowland plain in the north shaped by Quaternary glaciation, a belt of old low mountains and hills in the centre, and the Bavarian Alps in the south, home to Germany's highest point, the Zugspitze (2,962 m).",
    layout:
      "Roughly: Berlin (the capital, on the north-eastern plain); Bavaria (Munich, Nuremberg — the Alps and traditional beer culture); the north (Hamburg — port city on the North Sea and Baltic coasts); the west (Cologne, Trier — the Rhine and Moselle valleys); the centre (Frankfurt — the financial hub); the east (Dresden — the Elbe and the sandstone landforms of Saxon Switzerland); the south-west (Freiburg, Heidelberg — the Black Forest and the Neckar valley); the north-east (Stralsund — the Baltic coast and Rügen).",
    gettingAround:
      "Germany's rail network is extensive; the ICE high-speed trains link major cities quickly and frequently, and rail is often more convenient than flying between many city pairs. Domestic flights are mainly for quick cross-regional connections. Public transport (metro, tram, bus) in big cities is well developed, usable with a single transport card. Driving is on the right; some motorway stretches have no speed limit. The climate transitions from temperate maritime toward continental — the north is wet and rainy, the south (especially the Bavarian Alps) has cold, snowy winters. The electrical standard is 230V with the European two-round-pin plug.",
    culture:
      "The official language is German, with high English proficiency in big cities and tourist areas. Germans value punctuality and order; restaurant and shop hours tend to be fixed, and many shops close on Sundays. Beer culture runs deep in daily life, with distinct traditional styles by region. Crossing at a red light is widely observed even when no cars are coming — jaywalking, especially with children present, tends to draw a disapproving look or comment from passers-by; many homes and hotels also observe quiet hours (Ruhezeit) at night and on Sundays, so avoid loud noise then. Restaurant bills usually don't include a tip; rounding up or adding about 10% is customary.",
    seeAndDo:
      "Monuments and architecture: Berlin's Museum Island and Brandenburg Gate, Cologne Cathedral, Dresden's Baroque old town. Nature: the Zugspitze in the Bavarian Alps, the castles and vineyards of the Rhine Gorge, the spa towns of the Black Forest, the sandstone table mountains of Saxon Switzerland. Beer and food: Munich's Oktoberfest, and regionally distinct German breads and sausages.",
    whenAndTips:
      "May–September has the most comfortable weather, the best season for outdoor sights and city touring; December's Christmas markets are a winter highlight, cold but full of atmosphere; the Bavarian Alps ski season runs December to March. Germany is in the Schengen area; citizens of most countries can visit short-term visa-free or under Schengen rules. Most shops are closed on Sundays, so plan shopping accordingly.",
  },

  berlin: {
    // identity sources: **德国的官方人口口径**（2026-09-09 核）：① **amtliche Bevölkerungsfortschreibung（官方人口推算，Zensus 2022 基准）** —— 各州统计局在 2022 年普查基础上逐年滚动推算，**跨市可比、最权威**，发布月份各州不同（巴伐利亚次年 5 月 · 北威州次年 6 月中 · 黑森次年 6–7 月 · 汉堡与石荷次年 7 月初 · 柏林-勃兰登堡次年年中 · **巴登-符腾堡滞后约 16 个月**）；② **各市自己的居民登记（Melderegister / Einwohnerregister）** —— 含主/次要住所，通常**高于**州口径（柏林两者差约 21 万、科隆差约 7 万），多数城市次年 2–3 月就能出年末数；③ **Europäische Metropolregion（MKRO 认定的 11 个都市区）** —— **不是联邦统计局口径**，边界很大、人口由各都市区协会自己发布。⚠️ **Zensus 2022 把不少城市的人口向下修正了几个百分点**（汉堡 −5.6%、海德堡 −5.3%），起算点是 2022-05-15，此后按每年 12-31 滚动。
    //   柏林 2025-12-31：官方人口推算（Zensus 2022 基准）**3,700,577**；居民登记统计 **3,913,644**（差约 21.3 万）。正文用的是前者、数字准确。级别 1，2026-09-09 核。
    //   https://www.statistik-berlin-brandenburg.de/presse/2026/16-einwohnerregisterstatistik/
    //   **两套数并存这件事本身要写在这里** —— 下一轮碰到 391 万的人才不会以为我们漏了更新（同一处理见杰古沙龙湖深、费蒙湖深）。
    identity:
      "Berlin, Germany's capital, had a population of about 3.7 million at the end of 2025 on the official state estimate, the country's largest city, on the north-eastern plain. Before reunification in 1990, Berlin was divided by the Berlin Wall into east and west for nearly 30 years — that history is visible everywhere today, in the city's museums, memorials and surviving sections of the wall.",
    // howItWorks sources: Wikipedia (2026-09): Berlin (city-state; 12 Bezirke without own budgets; 891 km²; ~3.7 million; S-Bahn ring; VBB zones A/B/C); States of Germany
    howItWorks:
      "Berlin is both the capital of Germany and one of its sixteen federal states — a city-state governed by a Governing Mayor and Senate, whose state parliament is also its city council. Beneath it lie twelve boroughs (Bezirke), each with an elected assembly and district office but no budget of its own, since the finances rest with the state. Cold War division left a polycentric city: Mitte in the east is the historic centre and seat of government, the Kurfürstendamm district in the west is 'City West', and each has its own shopping streets and landmarks; the S-Bahn ring is the boundary of the inner city in local minds. The city covers about 891 km² with about 3.7 million people at the end of 2025 on the official estimate, and is entirely surrounded by the state of Brandenburg, with Potsdam just to the south-west. Addresses give street, number and postcode, and public transport is priced in fare zones A, B and C, the last already in Brandenburg. Newcomers most often go wrong by looking for a single city centre, when Berlin still has two.",
    layout:
      "Museum Island (an island in the Spree holding five national museums) and the Brandenburg Gate are the central landmarks; the area around Checkpoint Charlie preserves remnants of the Cold War border crossing; the East Side Gallery is a surviving stretch of the Berlin Wall covered in murals. The city covers a large area, and its districts (such as Kreuzberg and Friedrichshain) each have a distinct character.",
    gettingAround:
      "The airport is about 20 km from the centre, with a rail line and metro running directly there. Berlin's public transport network (metro, tram, bus) is extensive and covers the whole city. The terrain is flat, making it good for cycling. Temperate climate: summer (June–August) is warm, winter is cold, with snow common in December.",
    culture:
      "Berlin is Germany's cultural and creative-industries hub, with a lively nightlife and contemporary-art scene. Berliners tend to be fairly relaxed and open to diverse cultures. Tipping is customary at around 10% or rounding up, not required.",
    seeAndDo:
      "Museum Island (the Pergamon Museum and others); the Brandenburg Gate and the Reichstag; the Berlin Wall Memorial and East Side Gallery; Checkpoint Charlie; a boat trip on the Spree. Day trips can reach Potsdam (Sanssouci Palace).",
    whenAndTips:
      "May–September has the most comfortable weather, peak season for outdoor activities and al fresco dining; December's Christmas markets are atmospheric but cold. Berlin's sights are spread out, so plan your transport route. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  munich: {
    // identity sources: 德国各州统计局的 Gemeinde（市本身）人口，**基准均为 Zensus 2022**（2022 年人口普查导致不少城市的官方人口被下修，此后在新基准上逐年推算 —— 引用德国数字时必须区分 Zensus 前后）。
    //   **德国有两套并存的官方口径**：州统计局的 Zensus 调节数 vs 城市自己的居民登记（Melderegister，常含次要住所），两者可以差好几万，正文必须写明用的是哪一档。
    //   发布节奏：巴伐利亚州**次年 5 月**；汉堡与石荷州（Statistikamt Nord）**次年 7 月初**；北威州 IT.NRW **次年 6 月中**；黑森州**次年 6—7 月**；**巴登-符腾堡州滞后特别长（约 16 个月）** —— 2024-06-30 的数迟至 2025-10 才发布，别按其他州的节奏去催。城市自己的登记口径多在次年 2—3 月。
    //   慕尼黑 2025-12-31 = **1,505,036**（巴伐利亚州统计局，级别 1），与 2024 年的 1,505,005 几乎持平。
    identity:
      "Munich, capital of Bavaria and Germany's third-largest city, has a population of about 1.505 million (end of 2025), on the Isar river at the northern foot of the Bavarian Alps. It is known for its traditional beer culture, Oktoberfest, and a well-preserved Bavarian old town.",
    // howItWorks sources: 德国各州统计局的 Gemeinde（市本身）人口，**基准均为 Zensus 2022**（2022 年人口普查导致不少城市的官方人口被下修，此后在新基准上逐年推算 —— 引用德国数字时必须区分 Zensus 前后）。
    //   **德国有两套并存的官方口径**：州统计局的 Zensus 调节数 vs 城市自己的居民登记（Melderegister，常含次要住所），两者可以差好几万，正文必须写明用的是哪一档。
    //   发布节奏：巴伐利亚州**次年 5 月**；汉堡与石荷州（Statistikamt Nord）**次年 7 月初**；北威州 IT.NRW **次年 6 月中**；黑森州**次年 6—7 月**；**巴登-符腾堡州滞后特别长（约 16 个月）** —— 2024-06-30 的数迟至 2025-10 才发布，别按其他州的节奏去催。城市自己的登记口径多在次年 2—3 月。
    //   同上。
    howItWorks:
      "Munich is the capital of Bavaria, governed by a Lord Mayor and city council, with 25 boroughs (Stadtbezirke) whose district committees take part in local affairs; covering about 311 km² with about 1.505 million people at the end of 2025, it is Germany's third city, and its metropolitan region holds about 6 million. The centre is the old town within the Altstadtring, with Marienplatz at its heart; the Isar flows through the east of the city, dividing its banks. BMW and Siemens have their headquarters here. Addresses give street, number and postcode, public transport is run by the MVV federation in concentric fare zones, and every S-Bahn line shares one underground trunk through the centre. The Alps lie about 50 km south and can be seen from the city on clear days. Newcomers most often go wrong by picturing Munich as the site of the beer festival, when it is among the highest-earning and highest-rent big cities in Germany.",
    layout:
      "Marienplatz is the old town's centre, with the glockenspiel show on the New Town Hall's tower a signature scene; Nymphenburg Palace, the Bavarian royal family's summer residence, lies to the west; the English Garden is one of Europe's largest urban parks, where a branch of the Isar draws river surfers.",
    gettingAround:
      "The airport is about 30 km from the centre, with a rail line running directly there. The city's metro, tram and bus network is extensive, and the old town is walkable. Continental climate: warm summers, cold and snowy winters; being near the Alps, weather can change quickly, with an occasional Föhn wind bringing brief warm spells.",
    culture:
      "Bavarians take pride in traditional dress (lederhosen for men, dirndls for women) and local festivals, and Oktoberfest is the year's biggest event. Beer-hall culture is a key part of daily life in Munich. Tipping is customary — round up or give 5–10%.",
    seeAndDo:
      "Marienplatz and the New Town Hall; Nymphenburg Palace; the English Garden; Oktoberfest (mid-September to early October); beer-hall visits (such as the Hofbräuhaus). Day trips can reach the Zugspitze or Neuschwanstein Castle.",
    whenAndTips:
      "Oktoberfest (mid-September to early October) is the liveliest and most crowded time of year — book accommodation months ahead; May–September is best for the outdoors and day trips; winter is good for skiing. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  hamburg: {
    // identity sources: 德国各州统计局的 Gemeinde（市本身）人口，**基准均为 Zensus 2022**（2022 年人口普查导致不少城市的官方人口被下修，此后在新基准上逐年推算 —— 引用德国数字时必须区分 Zensus 前后）。
    //   **德国有两套并存的官方口径**：州统计局的 Zensus 调节数 vs 城市自己的居民登记（Melderegister，常含次要住所），两者可以差好几万，正文必须写明用的是哪一档。
    //   发布节奏：巴伐利亚州**次年 5 月**；汉堡与石荷州（Statistikamt Nord）**次年 7 月初**；北威州 IT.NRW **次年 6 月中**；黑森州**次年 6—7 月**；**巴登-符腾堡州滞后特别长（约 16 个月）** —— 2024-06-30 的数迟至 2025-10 才发布，别按其他州的节奏去催。城市自己的登记口径多在次年 2—3 月。
    //   **这条是本批唯一的 wrong**：汉堡 2025-12-31 官方数为 **1,869,473**（Statistikamt Nord，Zensus 2022 基准）。**原文 howItWorks 的「197 万」是 Zensus 2022 下修前的旧数字**，比官方口径高出约 10 万（5.6%）。identity 的「190 万」也偏高。https://www.statistik-nord.de/fileadmin/Dokumente/A_I_1_j25_HH_Zensus2022.pdf （级别 1）
    identity:
      "Hamburg, Germany's second-largest city, has a population of about 1.87 million (end of 2025, on the 2022 census basis), on the Elbe river — Germany's largest seaport and historically a core Hanseatic League city, still carrying a strong port-trade tradition today.",
    // howItWorks sources: 德国各州统计局的 Gemeinde（市本身）人口，**基准均为 Zensus 2022**（2022 年人口普查导致不少城市的官方人口被下修，此后在新基准上逐年推算 —— 引用德国数字时必须区分 Zensus 前后）。
    //   **德国有两套并存的官方口径**：州统计局的 Zensus 调节数 vs 城市自己的居民登记（Melderegister，常含次要住所），两者可以差好几万，正文必须写明用的是哪一档。
    //   发布节奏：巴伐利亚州**次年 5 月**；汉堡与石荷州（Statistikamt Nord）**次年 7 月初**；北威州 IT.NRW **次年 6 月中**；黑森州**次年 6—7 月**；**巴登-符腾堡州滞后特别长（约 16 个月）** —— 2024-06-30 的数迟至 2025-10 才发布，别按其他州的节奏去催。城市自己的登记口径多在次年 2—3 月。
    //   同上。
    howItWorks:
      "Hamburg is both a city and a German federal state, governed by a First Mayor and Senate whose role is closer to that of a state premier. Beneath them lie seven boroughs (Bezirke) and 104 quarters (Stadtteile), each borough with a council and administration subordinate to the Senate. Covering about 755 km² with about 1.87 million people at the end of 2025, it is Germany's second city. It grew around its port on the Elbe — the largest in Germany and third in Europe — with the centre on the Alster lakes, formed by damming the river; the Greater Hamburg Act of 1937 absorbed the formerly Prussian cities of Altona, Wandsbek and Harburg, so today's western and southern districts were once towns of their own, and HafenCity is a new quarter built on the old docks. Addresses give street, number and postcode, and the HVV federation runs public transport. Newcomers most often go wrong by imagining Hamburg on the coast, when the North Sea lies more than a hundred kilometres away and the sense of the sea comes from the port and the river.",
    layout:
      "The port district's Speicherstadt (a World Heritage Site) is known for its red-brick warehouse complex and criss-crossing canals; the Elbphilharmonie concert hall is the port district's new landmark; the Inner and Outer Alster lakes are two open stretches of water in the city centre, with the main commercial district around their shores.",
    gettingAround:
      "The airport is about 10 km from the centre, with a metro line running directly there. The city's metro, S-Bahn and bus network is extensive, and the port district can be toured by boat. Temperate maritime climate, mild and rainy year-round — summers are not especially hot, winters not especially cold; carry rain gear.",
    culture:
      "Hamburgers are known for being practical and understated, with commerce and port culture running through the city's character. St. Pauli is a well-known nightlife district. Tipping is customary — round up or give 5–10%.",
    seeAndDo:
      "The Speicherstadt and Elbphilharmonie; a harbour boat tour; the St. Pauli Fish Market (Sunday mornings); a walk along the Alster lakes; the Rathaus (city hall) square.",
    whenAndTips:
      "May–September is relatively dry and mild, the best travel season; it rains year-round, so carry rain gear. Book ahead for popular slots at the port district and Elbphilharmonie. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  cologne: {
    // identity sources: 德国各州统计局的 Gemeinde（市本身）人口，**基准均为 Zensus 2022**（2022 年人口普查导致不少城市的官方人口被下修，此后在新基准上逐年推算 —— 引用德国数字时必须区分 Zensus 前后）。
    //   **德国有两套并存的官方口径**：州统计局的 Zensus 调节数 vs 城市自己的居民登记（Melderegister，常含次要住所），两者可以差好几万，正文必须写明用的是哪一档。
    //   发布节奏：巴伐利亚州**次年 5 月**；汉堡与石荷州（Statistikamt Nord）**次年 7 月初**；北威州 IT.NRW **次年 6 月中**；黑森州**次年 6—7 月**；**巴登-符腾堡州滞后特别长（约 16 个月）** —— 2024-06-30 的数迟至 2025-10 才发布，别按其他州的节奏去催。城市自己的登记口径多在次年 2—3 月。
    //   **科隆有两套并存的官方数，差约 7 万**：
    //   ① 州统计局 IT.NRW（Zensus 2022 调节）2025-12-31 = **1,025,523**
    //   ② 科隆市自己的居民登记（含主/次要住所）2025-12-31 = **1,100,076**（其中主要住所 1,092,607）
    //   **原文 identity 用的是市登记口径、howItWorks 用的是州口径，两段各用一套却都没写明** —— 这就是口径混用。
    //   **另外还有一处年份错标**：howItWorks 把 1,025,523 标成「2024 年」，而那其实是 **2025** 年的数（2024 年是 1,024,621）—— 这是本轮第五例「量级合理但年份错标」。
    identity:
      "Cologne, a large city on the Rhine in western Germany, has about 1.10 million residents on the city's own register or about 1.026 million by the state statistical office (both end-2025), known for Cologne Cathedral (one of Europe's tallest Gothic cathedrals, a World Heritage Site) and one of Germany's oldest cities, dating back to Roman times.",
    // howItWorks sources: 德国各州统计局的 Gemeinde（市本身）人口，**基准均为 Zensus 2022**（2022 年人口普查导致不少城市的官方人口被下修，此后在新基准上逐年推算 —— 引用德国数字时必须区分 Zensus 前后）。
    //   **德国有两套并存的官方口径**：州统计局的 Zensus 调节数 vs 城市自己的居民登记（Melderegister，常含次要住所），两者可以差好几万，正文必须写明用的是哪一档。
    //   发布节奏：巴伐利亚州**次年 5 月**；汉堡与石荷州（Statistikamt Nord）**次年 7 月初**；北威州 IT.NRW **次年 6 月中**；黑森州**次年 6—7 月**；**巴登-符腾堡州滞后特别长（约 16 个月）** —— 2024-06-30 的数迟至 2025-10 才发布，别按其他州的节奏去催。城市自己的登记口径多在次年 2—3 月。
    //   同上。
    howItWorks:
      "Cologne is the largest city of North Rhine-Westphalia, governed by a Lord Mayor and council, with nine boroughs (Stadtbezirke) and 85 quarters (Stadtteile); with about 1.026 million people at the end of 2025 by the state statistical office (about 1.10 million on the city's own register) it is Germany's fourth city, forms a metropolitan region of about 3.5 million with Bonn, and belongs to the Rhine-Ruhr agglomeration of more than eleven million. The Rhine divides it: the left bank holds the old city and the cathedral, the right bank Deutz with the trade fair and new offices, and the medieval walls have become the Ring boulevards. Cologne people identify strongly with their 'Veedel', the neighbourhood, and the carnival societies are organised by them. Addresses give street, number and postcode, and the KVB light rail joins the banks. The state capital, Düsseldorf, lies about 35 km north-west, and the rivalry between the two is a favourite local topic. Newcomers most often go wrong by assuming Cologne is the state capital, when that is Düsseldorf next door.",
    layout:
      "Cologne Cathedral sits right next to the main train station, the city's signature landmark; the old town runs along the Rhine, and the Hohenzollern Bridge is covered in \"love locks\"; the museum district clusters around the cathedral, with the Museum Ludwig known for its modern-art collection.",
    gettingAround:
      "The airport is about 15 km from the centre, with a rail line and S-Bahn running directly there. The old town is walkable, and the city has a metro and tram network. Temperate maritime climate, mild year-round — summers not especially hot, winters not especially cold.",
    culture:
      "Cologne is known for its easy-going humour and Karneval culture — the Cologne Carnival each February–March is one of Germany's largest carnival celebrations. The local Kölsch beer, served in small glasses, is a local tradition. Tipping is customary — round up or give 5–10%.",
    seeAndDo:
      "Cologne Cathedral (climb the tower for a city view); a walk or boat trip along the Rhine; the old town and the Hohenzollern Bridge; the Museum Ludwig. A day trip along the Rhine can reach Bonn or the Rhine Gorge stretch.",
    whenAndTips:
      "Carnival (February–March) is lively but accommodation is tight; May–September has the most comfortable weather. Cologne Cathedral is open year-round; mornings are quieter and better for visiting. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  frankfurt: {
    // identity sources: 德国各州统计局的 Gemeinde（市本身）人口，**基准均为 Zensus 2022**（2022 年人口普查导致不少城市的官方人口被下修，此后在新基准上逐年推算 —— 引用德国数字时必须区分 Zensus 前后）。
    //   **德国有两套并存的官方口径**：州统计局的 Zensus 调节数 vs 城市自己的居民登记（Melderegister，常含次要住所），两者可以差好几万，正文必须写明用的是哪一档。
    //   发布节奏：巴伐利亚州**次年 5 月**；汉堡与石荷州（Statistikamt Nord）**次年 7 月初**；北威州 IT.NRW **次年 6 月中**；黑森州**次年 6—7 月**；**巴登-符腾堡州滞后特别长（约 16 个月）** —— 2024-06-30 的数迟至 2025-10 才发布，别按其他州的节奏去催。城市自己的登记口径多在次年 2—3 月。
    //   法兰克福 2025-12-31 = **760,656**（黑森州统计局官方数据表，已下载核对，级别 1）。
    identity:
      "Frankfurt, Germany's financial hub and home to the European Central Bank, has a population of about 761,000 (end of 2025), known for a high-rise skyline unusual in Germany, jokingly nicknamed \"Mainhattan\" (a play on the river Main and Manhattan).",
    // howItWorks sources: 德国各州统计局的 Gemeinde（市本身）人口，**基准均为 Zensus 2022**（2022 年人口普查导致不少城市的官方人口被下修，此后在新基准上逐年推算 —— 引用德国数字时必须区分 Zensus 前后）。
    //   **德国有两套并存的官方口径**：州统计局的 Zensus 调节数 vs 城市自己的居民登记（Melderegister，常含次要住所），两者可以差好几万，正文必须写明用的是哪一档。
    //   发布节奏：巴伐利亚州**次年 5 月**；汉堡与石荷州（Statistikamt Nord）**次年 7 月初**；北威州 IT.NRW **次年 6 月中**；黑森州**次年 6—7 月**；**巴登-符腾堡州滞后特别长（约 16 个月）** —— 2024-06-30 的数迟至 2025-10 才发布，别按其他州的节奏去催。城市自己的登记口径多在次年 2—3 月。
    //   同上。
    howItWorks:
      "Frankfurt is governed by a Lord Mayor and council, with sixteen area districts (Ortsbezirke) and 46 quarters (Stadtteile); with about 761,000 people at the end of 2025 it is not large among German cities, but the Rhine-Main metropolitan region around it holds 5.6 million, with Wiesbaden, Mainz, Darmstadt and Offenbach as independent cities and hundreds of thousands commuting in each day. The bank towers crowd inside the ring of green on the old walls, the European Central Bank stands by the river to the east, and Sachsenhausen across the Main is the old quarter of cider taverns. Addresses give street, number and postcode, and the RMV federation runs public transport. Frankfurt Airport is among the busiest hubs in Europe. Newcomers most often go wrong by taking Frankfurt for an island of finance, when it is the core of a polycentric region whose daytime and night-time populations differ enormously.",
    layout:
      "The financial district's towers cluster on the north bank of the Main; the Sachsenhausen district on the south bank keeps traditional apple-wine taverns and old-town character; Goethe's birthplace house and the Römerberg (the rebuilt historic square) are the historic and cultural landmarks.",
    gettingAround:
      "Frankfurt Airport is Germany's largest international airport, about 12 km from the centre, with an S-Bahn line running directly there, and it's also a major hub of the German rail network. The city's metro and tram network is extensive. Temperate climate with four distinct seasons — warm summers, cold winters.",
    culture:
      "Frankfurt is one of Germany's most international cities, with heavy business traffic. Local apple wine (Apfelwein) is most popular in the traditional taverns of Sachsenhausen. Tipping is customary — round up or give 5–10%.",
    seeAndDo:
      "The Römerberg old town square; the museums along the Main (the Städel Museum and others); Frankfurt Cathedral; apple wine in Sachsenhausen. Day trips can reach Heidelberg or the Rhine valley.",
    whenAndTips:
      "As a transport hub, Frankfurt is often the first stop or a connecting point on a German itinerary; May–September has the most comfortable weather; hotels are tight during the Frankfurt Book Fair (October). Citizens of most countries follow Schengen-area rules for short visits.",
  },

  dresden: {
    identity:
      "Dresden, capital of Saxony, sits on the Elbe, known for its well-preserved Baroque old town and rich art collections, historically nicknamed \"Florence on the Elbe.\" It is the gateway to the sandstone landforms of Saxon Switzerland.",
    // howItWorks sources: **德国的官方人口口径**（2026-09-09 核）：① **amtliche Bevölkerungsfortschreibung（官方人口推算，Zensus 2022 基准）** —— 各州统计局在 2022 年普查基础上逐年滚动推算，**跨市可比、最权威**，发布月份各州不同（巴伐利亚次年 5 月 · 北威州次年 6 月中 · 黑森次年 6–7 月 · 汉堡与石荷次年 7 月初 · 柏林-勃兰登堡次年年中 · **巴登-符腾堡滞后约 16 个月**）；② **各市自己的居民登记（Melderegister / Einwohnerregister）** —— 含主/次要住所，通常**高于**州口径（柏林两者差约 21 万、科隆差约 7 万），多数城市次年 2–3 月就能出年末数；③ **Europäische Metropolregion（MKRO 认定的 11 个都市区）** —— **不是联邦统计局口径**，边界很大、人口由各都市区协会自己发布。⚠️ **Zensus 2022 把不少城市的人口向下修正了几个百分点**（汉堡 −5.6%、海德堡 −5.3%），起算点是 2022-05-15，此后按每年 12-31 滚动。
    //   德累斯顿市居民登记 **571,510（2025-12-31）**，市官网（级别 1）；原文的 56.5 万取自 en.wikipedia 的滞后估计值。2026-09-09 核。
    //   https://www.dresden.de/de/leben/stadtportrait/statistik/bevoelkerung-gebiet/Bevoelkerungsbestand.php
    //   ⚠️ **「城市连绵区约 79 万」已从正文撤下**：市官网的 Ballungsraum Dresden 是**欧盟噪声地图指令下的行政边界**（用于环境噪声监测），不同年份/口径在 75–80 万之间摆动，本轮没能拿到标明基准年的一手文件 —— 按既定做法，拿不到基准年的数字不留在正文里（同处理见伯尔尼集聚区）。
    howItWorks:
      "Dresden is the capital of Saxony with about 572,000 people on the city register at the end of 2025, the state's second city after Leipzig; the city council and the state parliament both sit here, and police and schools belong to the state. The Elbe divides it: the Altstadt on the south bank is the Baroque ensemble of Augustus the Strong's day, with the Zwinger, the Semperoper and the State Art Collections, and the Frauenkirche rebuilt to its old form between 1994 and 2005 as the symbol of the city's recovery; the Neustadt on the north bank is the quarter of bars and the young. The bombing of February 1945 destroyed the entire centre and killed about twenty-five thousand people; the Elbe Valley was inscribed as World Heritage in 2004 and delisted in 2009 over a new bridge. Semiconductors have earned the region the name 'Silicon Saxony', and Saxon Switzerland lies 30 km south-east. Newcomers most often go wrong by taking Dresden for Saxony's largest city, when Leipzig is bigger.",
    layout:
      "The Zwinger Palace, the Frauenkirche and Dresden Castle cluster in the old-town core along the Elbe, one of Germany's most complete surviving Baroque cityscapes; the Neustadt across the river is a younger, livelier district.",
    gettingAround:
      "The airport is about 9 km from the centre, with an S-Bahn line running directly there. The old town is walkable, and the city has a tram network. Temperate continental climate, warm summers and cold winters, with a fairly large day-to-night temperature swing along the Elbe valley.",
    culture:
      "Dresden values its art and music traditions, and the Semperoper is one of Germany's major opera houses. The traditional Christmas cake Stollen originated here, and its Christmas market has a long history. Tipping is customary — round up or give 5–10%.",
    seeAndDo:
      "The Zwinger Palace and the Old Masters Gallery; the Frauenkirche; the Green Vault treasury in Dresden Castle; a walk along the Elbe. A day trip can reach Saxon Switzerland National Park (the Bastei).",
    whenAndTips:
      "May–September has the most comfortable weather; December's Christmas market (one of Germany's oldest) is full of atmosphere. Start early for a Saxon Switzerland day trip. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  nuremberg: {
    identity:
      "Nuremberg, Bavaria's second-largest city, preserves one of Germany's most typical medieval old towns, the gateway to the Franconian Jura and the Franconian wine region, and one of the cities most associated with Germany's traditional Christmas-market culture.",
    // howItWorks sources: **德国的官方人口口径**（2026-09-09 核）：① **amtliche Bevölkerungsfortschreibung（官方人口推算，Zensus 2022 基准）** —— 各州统计局在 2022 年普查基础上逐年滚动推算，**跨市可比、最权威**，发布月份各州不同（巴伐利亚次年 5 月 · 北威州次年 6 月中 · 黑森次年 6–7 月 · 汉堡与石荷次年 7 月初 · 柏林-勃兰登堡次年年中 · **巴登-符腾堡滞后约 16 个月**）；② **各市自己的居民登记（Melderegister / Einwohnerregister）** —— 含主/次要住所，通常**高于**州口径（柏林两者差约 21 万、科隆差约 7 万），多数城市次年 2–3 月就能出年末数；③ **Europäische Metropolregion（MKRO 认定的 11 个都市区）** —— **不是联邦统计局口径**，边界很大、人口由各都市区协会自己发布。⚠️ **Zensus 2022 把不少城市的人口向下修正了几个百分点**（汉堡 −5.6%、海德堡 −5.3%），起算点是 2022-05-15，此后按每年 12-31 滚动。
    //   纽伦堡 **531,159（2025-12-31）**，巴伐利亚州统计局报表（级别 1）。
    //   https://www.statistik.bayern.de/mam/produkte/veroffentlichungen/statistische_berichte/a1210c_202500.pdf
    //   欧洲纽伦堡都市区 **3,572,122（2025-12-31）**，由都市区协会自己发布 —— **MKRO 认定的官方都市区，但不是 Destatis 的统计口径**（2/3 级）。做法与瑞士的巴塞尔三国区、瑞典的 Göteborgsregionen、捷克布拉格的 Eurostat FUA 一致：**写明发布方与年份，不删这个词**。
    howItWorks:
      "Nuremberg is Bavaria's second city and the capital of Middle Franconia, with about 531,000 people at the end of 2025 and a Metropolitan Region of Nuremberg of about 3.57 million — a figure the region's own association publishes, not a federal statistics category — the adjoining city of Fürth a separate municipality; the city council runs local services, and police and schools belong to the state. The old town is ringed by its medieval wall, the Kaiserburg stands on the rock at its northern end where the Imperial Regalia were kept from 1424 to 1806, Dürer's house lies within the walls and the Pegnitz runs through the middle; a single raid on 2 January 1945 destroyed about eighty per cent of the old town, which was rebuilt to its former shape, the Nuremberg trials were held that year in Courtroom 600 of the Palace of Justice, and the former party rally grounds now hold a documentation centre. The Christmas market and the international toy fair are its two fixed events of the year, Germany's first railway ran from here to Fürth in 1835, and the U-Bahn has driverless lines. Franconian speech and identity differ from southern Bavaria's. Newcomers most often go wrong by reading Nuremberg as simply Bavarian, when Franconia has a dialect, a beer and a sausage of its own.",
    layout:
      "The old town is ringed by medieval walls, with the Pegnitz river running through it; Nuremberg Castle overlooks the whole old town; St. Lorenz and St. Sebaldus churches are the old town's two great Gothic landmarks; the central market square hosts one of Germany's most famous Christmas markets each November–December.",
    gettingAround:
      "The airport is about 6 km from the centre, with a metro line running directly there. The old town is walkable, and the city has a metro and tram. Continental climate — warm summers, cold winters.",
    culture:
      "Nuremberg is known for traditional gingerbread (Lebkuchen) and its small grilled sausages (Nürnberger Rostbratwürste); its Christmas-market tradition goes back centuries. Tipping is customary — round up or give 5–10%.",
    seeAndDo:
      "Nuremberg Castle overlooking the old town; St. Lorenz Church; the central-square Christmas market (November–December); the Germanic National Museum. Day trips can reach the Franconian Jura (the Solnhofen fossil site).",
    whenAndTips:
      "Late November to December, during the Christmas market, is the busiest time of year, so book accommodation ahead; May–September is best for touring the old town and nearby nature. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  freiburg: {
    identity:
      "Freiburg, at the foot of the Black Forest in Germany's south-west corner, is one of Baden-Württemberg's mildest, sunniest cities, known as Germany's \"eco-capital\" and the main gateway to the Black Forest.",
    // howItWorks sources: 德国各州统计局的 Gemeinde（市本身）人口，**基准均为 Zensus 2022**（2022 年人口普查导致不少城市的官方人口被下修，此后在新基准上逐年推算 —— 引用德国数字时必须区分 Zensus 前后）。
    //   **德国有两套并存的官方口径**：州统计局的 Zensus 调节数 vs 城市自己的居民登记（Melderegister，常含次要住所），两者可以差好几万，正文必须写明用的是哪一档。
    //   发布节奏：巴伐利亚州**次年 5 月**；汉堡与石荷州（Statistikamt Nord）**次年 7 月初**；北威州 IT.NRW **次年 6 月中**；黑森州**次年 6—7 月**；**巴登-符腾堡州滞后特别长（约 16 个月）** —— 2024-06-30 的数迟至 2025-10 才发布，别按其他州的节奏去催。城市自己的登记口径多在次年 2—3 月。
    //   弗赖堡市自身登记口径 2025-12-31 = **234,565**（2026 年中已降至 233,932，呈下降趋势）；州统计局 Zensus 调节口径 2024-06-30 = 236,182。原文的 237,500 比两个口径都略高，且没跟上后续的下降。
    howItWorks:
      "Freiburg im Breisgau is a city in the south-western corner of Baden-Württemberg and the seat of the Freiburg administrative district, about 153 km² with about 235,000 people at the end of 2025 (city register) and an urban area of about 354,500; the council runs local services, and police and schools belong to the state. The city was founded in 1120 as a free market town, the Münster built between 1200 and 1530 stands at the centre of the old town, and the Bächle, medieval water channels along the streets, still run; the university founded in 1457 is among the oldest in Germany and students make up a large share of the city. It is known as a green city: the Vauban district was built in the 1990s on low-energy, low-car principles, and solar power and trams are its badge; from 2003 to 2015 it held the German temperature record and it remains among the warmest and sunniest cities in the country. The Schauinsland cable car runs 3.6 km, the longest in Germany, the Black Forest begins east of town, and France and Basel each lie a few tens of kilometres away. Newcomers most often go wrong by treating the 'green' label as marketing, when the city's planning, transport and housing have followed that line for decades.",
    layout:
      "The old-town centre preserves the medieval \"Bächle\" — shallow open water channels running along the streets, said to bring good luck in marriage if you step in one; Freiburg Minster's spire is the old town's high point; the old town is ringed by vineyards and the hills of the Black Forest.",
    gettingAround:
      "Freiburg has no large commercial airport of its own; most visitors connect via EuroAirport Basel-Mulhouse-Freiburg (about 70 km) or Frankfurt Airport and continue by train. The city has a main rail station, the old town is walkable, and there's an extensive tram network. One of Germany's mildest climates — warm summers, comparatively less cold winters.",
    culture:
      "Freiburg is an important German university town and a pioneer of environmental design (solar architecture, bike-friendly planning). Tipping is customary — round up or give 5–10%.",
    seeAndDo:
      "Strolling past the old town's Bächle; Freiburg Minster; the Schlossberg funicular for a city view; a Black Forest day trip (hiking the Feldberg, Lake Titisee); nearby wine-region tastings.",
    whenAndTips:
      "May–September has the most comfortable weather and is also the peak season for hiking in the Black Forest; winter is good for skiing in the Black Forest mountains. Freiburg has no direct flights, so build in connection time when planning. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  heidelberg: {
    identity:
      "Heidelberg, on the Neckar river, is known for the ruins of Heidelberg Castle and Germany's oldest university (Heidelberg University, founded 1386); a favourite subject for poets and artists of the Romantic era, it still keeps a well-preserved old town.",
    // howItWorks sources: **德国的官方人口口径**（2026-09-09 核）：① **amtliche Bevölkerungsfortschreibung（官方人口推算，Zensus 2022 基准）** —— 各州统计局在 2022 年普查基础上逐年滚动推算，**跨市可比、最权威**，发布月份各州不同（巴伐利亚次年 5 月 · 北威州次年 6 月中 · 黑森次年 6–7 月 · 汉堡与石荷次年 7 月初 · 柏林-勃兰登堡次年年中 · **巴登-符腾堡滞后约 16 个月**）；② **各市自己的居民登记（Melderegister / Einwohnerregister）** —— 含主/次要住所，通常**高于**州口径（柏林两者差约 21 万、科隆差约 7 万），多数城市次年 2–3 月就能出年末数；③ **Europäische Metropolregion（MKRO 认定的 11 个都市区）** —— **不是联邦统计局口径**，边界很大、人口由各都市区协会自己发布。⚠️ **Zensus 2022 把不少城市的人口向下修正了几个百分点**（汉堡 −5.6%、海德堡 −5.3%），起算点是 2022-05-15，此后按每年 12-31 滚动。
    //   海德堡：Zensus 2022 普查结果 **153,809**（基准日 2022-05-15），比旧（Zensus 2011 基准）推算的 162,273 **低约 5.3%**；市自身居民登记（仅主要住所）**149,495（2023-12-31）**。市官网概览页写「约 155,000」但**没标基准日，按红线不采信**。巴登-符腾堡州统计局滞后约 16 个月，未找到 2024 年之后的州口径数。级别 1 + 3 级，2026-09-09 核。
    //   https://www.heidelberg.de/
    //   **这是 Zensus 2022 下修的又一个实例**（前一例是汉堡 −5.6%）。⚠️ 下一轮回来找 2024/2025 年的更新数据。学生约占四分之一在两个口径下都成立（38,500 学生对 15.4 万或 14.9 万都是 25%–26%）。
    howItWorks:
      "Heidelberg is the fifth city of Baden-Württemberg with roughly 150,000 people (the 2022 census counted 153,809 and the city's own register 149,495 at the end of 2023; no more recent dated official figure was found), about a quarter of them students; the council runs local services, police and schools belong to the state, and it lies in the Rhine-Neckar metropolitan region with the larger Mannheim next door. Heidelberg University, founded in 1386, is the oldest in Germany, its faculties scattered through the old town and along the north bank of the Neckar; the old town runs about 1.6 km along one main street with the castle ruin hanging on the slope above the south bank, the old bridge of 1786–88 crossing the river and the Philosophers' Walk on the north bank as the place to look back at the city. The Second World War left it almost unbombed, so the old town is original; American forces were stationed here until 2013 and their vacated barracks are being converted to housing, while the Bahnstadt west of the station is a new low-energy quarter. Frankfurt airport lies about 78 km north-west and SAP's headquarters at Walldorf to the south. Newcomers most often go wrong by taking Heidelberg for an old town of tourists alone, when it is a city carried by its university and research institutes.",
    layout:
      "The ruins of Heidelberg Castle overlook the whole old town and the Neckar valley; the Old Bridge connects both banks of the Neckar, offering a classic view back toward the castle and old town; the old town's main street is one of the longest pedestrian streets in Europe, lined with Baroque buildings.",
    gettingAround:
      "Heidelberg has no commercial airport of its own; most visitors connect via Frankfurt Airport (about 85 km) by train or coach, about an hour's journey. The old town is walkable, and the city has a tram network. Temperate climate; the Neckar valley, sheltered by hills on both sides, is comparatively warm in summer.",
    culture:
      "Heidelberg is a classic German university town with a lively student culture, and many old-town taverns have histories going back centuries. Tipping is customary — round up or give 5–10%.",
    seeAndDo:
      "Heidelberg Castle and its gardens; the Old Bridge and the Philosophers' Walk (the classic path across the Neckar with the best view of the castle); a stroll down the old-town main street; the old campus of Heidelberg University.",
    whenAndTips:
      "May–September has the most comfortable weather, the best season for the castle and the Philosophers' Walk; Heidelberg is a popular day-trip destination, with more visitors during the day in peak season, so start early. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  trier: {
    // identity sources: 「德国最古老的城市」在德国国内有争论：特里尔（公元前 17 年罗马建城，罗马桥木桩年代测定）vs 肯普滕（公元前 15 年罗马定居点、约公元 18 年斯特拉波最早文字记载），判据不同（建城年 / 最早文字记载 / 连续建成史）。2 级媒体报道，2026-09-09 核。
    //   https://www.t-online.de/leben/alltagswissen/id_100663112/aelteste-stadt-in-deutschland-kempten-und-trier-fuehren-hitzige-debatte.html
    //   **这一条的形状值得记：同一条目内部对同一个断言的确定性程度不一致** —— howItWorks 段早就写了「自称」，identity 段却写成既定事实。**修法是把 identity 降到与 howItWorks 相同的确定性**，而不是反过来。
    identity:
      "Trier, on the Moselle, calls itself Germany's oldest city — a title contested with Kempten — and was founded by the Romans around 16 BC, preserving the richest group of Roman remains north of the Alps, and the gateway to the Moselle wine valley.",
    // howItWorks sources: **德国的官方人口口径**（2026-09-09 核）：① **amtliche Bevölkerungsfortschreibung（官方人口推算，Zensus 2022 基准）** —— 各州统计局在 2022 年普查基础上逐年滚动推算，**跨市可比、最权威**，发布月份各州不同（巴伐利亚次年 5 月 · 北威州次年 6 月中 · 黑森次年 6–7 月 · 汉堡与石荷次年 7 月初 · 柏林-勃兰登堡次年年中 · **巴登-符腾堡滞后约 16 个月**）；② **各市自己的居民登记（Melderegister / Einwohnerregister）** —— 含主/次要住所，通常**高于**州口径（柏林两者差约 21 万、科隆差约 7 万），多数城市次年 2–3 月就能出年末数；③ **Europäische Metropolregion（MKRO 认定的 11 个都市区）** —— **不是联邦统计局口径**，边界很大、人口由各都市区协会自己发布。⚠️ **Zensus 2022 把不少城市的人口向下修正了几个百分点**（汉堡 −5.6%、海德堡 −5.3%），起算点是 2022-05-15，此后按每年 12-31 滚动。
    //   特里尔 **113,577（2025-12-31，市居民登记）**，市政府《Bevölkerungsbericht 2025》新闻稿（级别 1）。2026-09-09 核。
    //   https://www.trier.de/aktuelles/nachrichten/18606.Bevoelkerungsbericht-2025-Zuwanderung-als-Wachstumsmotor.html
    howItWorks:
      "Trier is the fourth city of Rhineland-Palatinate with about 113,600 people at the end of 2025, in the Moselle valley near Luxembourg; the council runs local services, and police and schools belong to the state. The Romans founded Augusta Treverorum here about 17 BC, which lets the city call itself the oldest in Germany; from the late third to the fourth century it was one of the four imperial capitals under the Tetrarchy, and the Porta Nigra, the Imperial Baths, the Aula Palatina and the cathedral were inscribed together as World Heritage in 1986, the cathedral holding the Holy Tunic. Karl Marx was born in a house in town in 1818, now a museum; the vineyards on both banks of the Moselle are the local industry and the University of Trier lies south of the centre. Luxembourg is about 50 km west and many residents cross the border to work there each day; there is no airport with scheduled flights. Newcomers most often go wrong by taking Trier for a small border town, when it is the oldest city in Germany and its Roman monuments are the originals, not copies.",
    layout:
      "The Porta Nigra (a Roman city gate, a World Heritage Site) is the old town's signature landmark; the old-town centre also preserves Roman imperial baths and an amphitheatre; the banks of the Moselle are lined with terraced vineyards.",
    gettingAround:
      "The nearest commercial airport is Frankfurt-Hahn (about 50 km), with a connecting coach; the city has a train station, the old town is walkable, and there's a bus network. Temperate climate; the Moselle valley, sheltered by terrain, has a comparatively mild climate well suited to viticulture.",
    culture:
      "Trier is the birthplace of philosopher Karl Marx, and his birthplace house is now a museum. Riesling wine culture runs deep locally, with many traditional wineries along the valley. Tipping is customary — round up or give 5–10%.",
    seeAndDo:
      "The Porta Nigra; the Roman imperial baths; the amphitheatre; the Karl Marx House museum; a Moselle valley day trip (wine tasting, hiking the steep vineyards).",
    whenAndTips:
      "May–September has the most comfortable weather and is also peak season for hiking and tasting in the Moselle valley; autumn (September–October) is harvest season, when the valley is especially scenic. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  stralsund: {
    identity:
      "Stralsund, on Germany's north-eastern Baltic coast, is a well-preserved historic Hanseatic town; its old town was World Heritage-listed as a whole in 2002 together with the old town of Wismar, and it is the main gateway to Rügen's chalk cliffs.",
    // howItWorks sources: **德国的官方人口口径**（2026-09-09 核）：① **amtliche Bevölkerungsfortschreibung（官方人口推算，Zensus 2022 基准）** —— 各州统计局在 2022 年普查基础上逐年滚动推算，**跨市可比、最权威**，发布月份各州不同（巴伐利亚次年 5 月 · 北威州次年 6 月中 · 黑森次年 6–7 月 · 汉堡与石荷次年 7 月初 · 柏林-勃兰登堡次年年中 · **巴登-符腾堡滞后约 16 个月**）；② **各市自己的居民登记（Melderegister / Einwohnerregister）** —— 含主/次要住所，通常**高于**州口径（柏林两者差约 21 万、科隆差约 7 万），多数城市次年 2–3 月就能出年末数；③ **Europäische Metropolregion（MKRO 认定的 11 个都市区）** —— **不是联邦统计局口径**，边界很大、人口由各都市区协会自己发布。⚠️ **Zensus 2022 把不少城市的人口向下修正了几个百分点**（汉堡 −5.6%、海德堡 −5.3%），起算点是 2022-05-15，此后按每年 12-31 滚动。
    //   施特拉尔松德：54,128（2025-06-01）与 54,094（2024-12-31），两个二/三级来源互相印证。**没有取到标明基准日的市级一手文件** —— 它不是独立市（M-V 全州只有罗斯托克与施威林两个 kreisfreie Stadt），州统计局新闻稿只到县级，官方 PDF 是图片版取不到文字。**来源级别偏低，如实标在这里**，下一轮换渠道核到一手数。2026-09-09 核。
    howItWorks:
      "Stralsund is the fifth city of Mecklenburg-Vorpommern and the seat of the Vorpommern-Rügen district, about 54 km² with about 54,100 people in mid-2025; the council runs local services, and police and schools belong to the state. The old town stands on an island between the Strelasund and a set of ponds, water on every side, chartered in 1234 as the oldest city in Pomerania and a member of the Hanseatic League from the end of the thirteenth century; the brick Gothic churches of St Nicholas and St Mary and the town hall are its skeleton, St Mary's was the tallest structure in the world between 1625 and 1647, and in 2002 the old town was inscribed as World Heritage together with Wismar. From 1648 to 1815 the city belonged to Sweden. The Ozeaneum stands by the old harbour with the sailing ship Gorch Fock at the quay, the Rügen bridge crosses the sound north of town, and shipbuilding is still an industry. Newcomers most often go wrong by taking Stralsund for a stop on the way to Rügen, when it is a Hanseatic old town and the bridge only its northern exit.",
    layout:
      "The old town sits on a peninsula surrounded by water on three sides, with brick Gothic churches such as St. Nicholas's defining the skyline; the Ozeaneum, in the port district, is a well-known German marine-life museum; across the Strelasund strait lies the island of Rügen.",
    gettingAround:
      "The nearest commercial airport is Rostock-Laage (about 70 km); the city has a train station, and the old town is walkable. Temperate maritime climate — cool, pleasant summers and windy winters, changeable year-round, so carry a jacket.",
    culture:
      "Stralsund is a classic northern German Hanseatic town, and brick Gothic architecture is the local hallmark style. Local fishing and Baltic seafood are culinary specialties. Tipping is customary — round up or give 5–10%.",
    seeAndDo:
      "The old town's brick Gothic churches; the Ozeaneum; a walk through the port district. A day trip can reach Rügen (the Königsstuhl chalk cliffs, Jasmund National Park).",
    whenAndTips:
      "May–September has the most comfortable weather, the best season for touring Rügen and the coast; winters are windy with changeable weather. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  // ── Germany batch 2 (2026-09-05) ──
  leipzig: {
    identity:
      "Leipzig is the largest city in Saxony, with about 634,000 people (2025), and one of Germany's fastest-growing cities in recent years. It is a city of music: Bach was cantor of the Thomaskirche from 1723 to 1750 and its boys' choir continues today, the Gewandhaus Orchestra founded in 1743 is among the oldest civic orchestras in the world, and Mendelssohn, Schumann and Wagner are all tied to the city. The 'Monday demonstrations' that grew out of peace prayers at the Nikolaikirche in autumn 1989 drove the changes in East Germany; the 1813 Battle of the Nations was the largest battle in Europe before the First World War, and its 91 m monument was completed in 1913. The Leipzig trade fair dates back to 1190, the main station is Europe's largest by floor area, and the old cotton mill, the Spinnerei, is now an arts quarter.",
    // howItWorks sources: Wikipedia (2026-09): Leipzig (2025-12 pop 633,592; Saxony; largest station by floor area; Monday demonstrations 1989)
    howItWorks:
      "Leipzig is the largest city of Saxony, though the state capital is Dresden; it is governed by a Lord Mayor and council, with ten boroughs (Stadtbezirke) and 63 localities (Ortsteile), and with about 634,000 people in 2025 it is the fastest-growing big city in eastern Germany. The old town lies within a ring road on a tight grid, with the main station — Europe's largest by floor area — on the ring's northern edge; Plagwitz to the west is an old industrial quarter turned arts district, and the new lake district to the south is a set of flooded open-cast mines. The Monday demonstrations that began at the Nikolaikirche in 1989 are the key page of the city's modern history. Addresses give street, number and postcode, the MDV federation runs public transport, and the S-Bahn links the airport and Halle. Newcomers most often go wrong by assuming Leipzig is Saxony's capital, when it is only its largest city.",
    layout:
      "The old town lies within a ring road and is compact: the Markt and the old town hall are at the centre, the Thomaskirche on the west side, the Nikolaikirche on the east, and Augustusplatz (the Gewandhaus, the opera, the university) on the eastern edge; the covered arcades threading the old town (Auerbachs Keller in the Mädler arcade) are a local feature. The main station stands on the northern edge of the old town. The Battle of the Nations monument lies about 4 km south-east, the Spinnerei in the Plagwitz district to the west, and the Karl-Heine canal and the new lake district (former open-cast mines turned lakes) in the south are the leisure grounds. The airport is about 20 km north-west.",
    gettingAround:
      "Leipzig/Halle Airport (LEJ), about 20 km from the city, is about 15 minutes from the main station by S-Bahn; its passenger routes are mainly holiday services, and it is DHL's European cargo hub. ICE trains take about 1 hour 15 from Berlin, about 3 hours from Munich and about 3 from Frankfurt. The city has S-Bahn, trams and buses, and the old town is walkable; take a tram to the monument and the S-Bahn to the Spinnerei. The climate is temperate continental with warm summers and cold winters.",
    culture:
      "German is universal and English is common among the young. The Thomaskirche holds motet performances by the boys' choir on Fridays and Saturdays, and Bach's grave lies before the altar; the Nikolaikirche is a memorial of the 1989 peaceful revolution — keep quiet. Book Gewandhaus concerts ahead. The book fair in March and the Bach Festival in June are the major events. Local food includes Leipziger Allerlei (mixed vegetables), the Lerche pastry and Gose beer. Tip about 10% in restaurants.",
    seeAndDo:
      "The Thomaskirche and the Bach Museum; the Nikolaikirche and the Forum of Contemporary History (East German history); the old town hall, the Markt, the Mädler arcade and Auerbachs Keller; a Gewandhaus concert; the Battle of the Nations monument (climb it); the Mendelssohn and Schumann houses; the Spinnerei arts quarter and the contemporary galleries; the Museum of Fine Arts; Leipzig Zoo; boating on the Karl-Heine canal and the new lake district.",
    whenAndTips:
      "May–September is most comfortable, and the December Christmas market is one of Germany's oldest; lodging is tight during the June Bach Festival. A day and a half to two days for the city. A day trip from Berlin works, and it links with Dresden and Weimar.",
  },
  stuttgart: {
    // identity sources: 德国各州统计局的 Gemeinde（市本身）人口，**基准均为 Zensus 2022**（2022 年人口普查导致不少城市的官方人口被下修，此后在新基准上逐年推算 —— 引用德国数字时必须区分 Zensus 前后）。
    //   **德国有两套并存的官方口径**：州统计局的 Zensus 调节数 vs 城市自己的居民登记（Melderegister，常含次要住所），两者可以差好几万，正文必须写明用的是哪一档。
    //   发布节奏：巴伐利亚州**次年 5 月**；汉堡与石荷州（Statistikamt Nord）**次年 7 月初**；北威州 IT.NRW **次年 6 月中**；黑森州**次年 6—7 月**；**巴登-符腾堡州滞后特别长（约 16 个月）** —— 2024-06-30 的数迟至 2025-10 才发布，别按其他州的节奏去催。城市自己的登记口径多在次年 2—3 月。
    //   **斯图加特两个口径都在下降**：州统计局口径 2025-12-31 ≈ **609,365**；市自身登记（主要住所）= **605,663**，比 2024 年末又少 3,671 人。州数据本身直接核到的是 2024-06-30 的 612,986（级别 1），609,365 来自媒体转述市统计局新闻稿（**级别 2**）。
    identity:
      "Stuttgart is the capital of Baden-Württemberg, in a basin of the Neckar valley, with about 609,000 people (end of 2025, state statistical office; about 606,000 on the city's own register), and Germany's 'car capital': Daimler and Maybach built some of the first automobiles here in 1886, and the headquarters and museums of Mercedes-Benz and Porsche are both in the city. Vineyards climb the hills around the town (wine grapes grow inside the city limits), the Schlossplatz and the New Palace form the centre, and the Staatsgalerie is one of Germany's important galleries. The Cannstatter Volksfest, held since 1818, is Germany's second-largest folk festival after Munich's Oktoberfest, and Ludwigsburg Palace about 15 km north is called the 'Swabian Versailles'.",
    // howItWorks sources: 德国各州统计局的 Gemeinde（市本身）人口，**基准均为 Zensus 2022**（2022 年人口普查导致不少城市的官方人口被下修，此后在新基准上逐年推算 —— 引用德国数字时必须区分 Zensus 前后）。
    //   **德国有两套并存的官方口径**：州统计局的 Zensus 调节数 vs 城市自己的居民登记（Melderegister，常含次要住所），两者可以差好几万，正文必须写明用的是哪一档。
    //   发布节奏：巴伐利亚州**次年 5 月**；汉堡与石荷州（Statistikamt Nord）**次年 7 月初**；北威州 IT.NRW **次年 6 月中**；黑森州**次年 6—7 月**；**巴登-符腾堡州滞后特别长（约 16 个月）** —— 2024-06-30 的数迟至 2025-10 才发布，别按其他州的节奏去催。城市自己的登记口径多在次年 2—3 月。
    //   同上。
    howItWorks:
      "Stuttgart is the capital of Baden-Württemberg, governed by a Lord Mayor and council, with 23 boroughs (Stadtbezirke) and their district committees; with about 609,000 people at the end of 2025 and still falling it heads a metropolitan region of about 2.7 million. The city sits in a basin of the Neckar valley, with the centre around the Schlossplatz on the valley floor and the residential districts climbing the slopes, where vineyards still grow; Bad Cannstatt on the river to the north-east holds the folk festival grounds and the Mercedes-Benz Museum, and Zuffenhausen to the north is Porsche's ground. Addresses give street, number and postcode, the VVS federation runs public transport, and the 'Stuttgart 21' project is turning the main station into an underground through-station. Newcomers most often go wrong by picturing Stuttgart as a flat industrial city, when its daily life climbs up and down between basin and hillside.",
    layout:
      "The centre lies on the floor of the basin: the Schlossplatz (the New Palace, the Kunstmuseum) is the core, the Königstraße pedestrian shopping street runs from the main station into the centre, with the Schillerplatz, the Old Palace and the market hall beside it, and the Staatsgalerie to the east. The Mercedes-Benz Museum stands on the Neckar in the Bad Cannstatt district to the north-east (with the festival grounds and the Wilhelma zoo nearby), and the Porsche Museum in Zuffenhausen to the north. The slopes around the basin carry vineyards and lookouts (the television tower on the hill to the south, built in 1956 as the world's first concrete TV tower). The airport is about 13 km south.",
    gettingAround:
      "Stuttgart Airport (STR), about 13 km from the centre, is about 30 minutes from the main station on the S2/S3, with flights across Europe and a few intercontinental routes. ICE trains take about 1 hour 20 from Frankfurt, 2 hours 15 from Munich and 3 hours 15 from Paris; the 'Stuttgart 21' underground station works at the main station are still in progress, with temporary walkways. The city has S-Bahn, Stadtbahn light rail and buses, and the centre is walkable; the two car museums are reached by S-Bahn or light rail. The climate is temperate, with a muggy basin in summer and mild winters.",
    culture:
      "German is universal, with a strong Swabian dialect. The car museums close on Mondays; the Mercedes-Benz Museum includes a free audio guide, and the Porsche Museum offers factory tours by reservation. The Volksfest (late September to mid-October) fills the Cannstatt meadow, with tent tables to be booked. Swabian food includes Spätzle noodles, Maultaschen dumplings and roast beef rolls; the local wines (Trollinger, Riesling) are drunk in seasonal Besenwirtschaft taverns in the vineyards. Tip about 10% in restaurants.",
    seeAndDo:
      "The Mercedes-Benz Museum; the Porsche Museum; the Schlossplatz, the New Palace and the Old Palace (state museum); the Staatsgalerie; the Wilhelma zoo and botanical garden; the television tower view; the market hall; vineyard trails and the lookouts of the Neckar valley; Ludwigsburg Palace and gardens; day trips to Tübingen, Baden-Baden on the edge of the Black Forest and Hohenzollern Castle.",
    whenAndTips:
      "May–October is most comfortable, with the Volksfest and the grape harvest the liveliest in September–October; the December Christmas market is one of Germany's largest. A day and a half for the city, half a day for each car museum. A stop between Frankfurt and Munich, linked with the Black Forest and Tübingen.",
  },
  dusseldorf: {
    identity:
      "Düsseldorf is the capital of North Rhine-Westphalia, on the east bank of the Rhine, with about 619,000 people (2025) — a major business, fashion and trade-fair city and home to one of Europe's largest Japanese communities (about 11,000 people). The Altstadt has some 260 bars and restaurants, called 'the longest bar in the world', where the local Altbier is served in small glasses topped up without asking; the Königsallee is a boulevard of luxury shops along a canal, the Rhine promenade and Frank Gehry's MedienHafen buildings set old against new, and the 240.8 m Rheinturm is the highest point. The K20 and K21 galleries hold modern and contemporary art, and Cologne lies about 40 km south.",
    // howItWorks sources: Wikipedia (2026-09): Düsseldorf (2025-12 pop 619,444; state capital of NRW; DUS 4th busiest; Rhine-Ruhr); States of Germany
    howItWorks:
      "Düsseldorf is the capital of North Rhine-Westphalia, governed by a Lord Mayor and council, with ten boroughs (Stadtbezirke); with about 619,000 people in 2025 it is the administrative and business centre of the Rhine-Ruhr region, seat of the state parliament and government and of many corporate headquarters. The Rhine flows along the west of the city, with the old town and the Königsallee on the east bank, the MedienHafen as the new office district on the old docks, and Oberkassel across the river as a residential quarter. Addresses give street, number and postcode, public transport is run by the VRR federation, and Düsseldorf Airport is Germany's fourth-busiest by passengers. Cologne lies about 40 km south, and the two cities' rail networks run into each other. Newcomers most often go wrong by taking Düsseldorf for a suburb of Cologne, when it is the capital of the state.",
    layout:
      "The centre lies on the east bank of the Rhine: the Altstadt sits by the river with the town hall, St Lambertus and the bar streets, and the Rhine promenade runs south from the Altstadt to the MedienHafen; the Königsallee lies east of the Altstadt with boutiques along both banks of its canal, and the Hofgarten and K20 lie to the north. The MedienHafen and the Rheinturm occupy the old harbour south of the centre, with the state parliament beside them; K21 is in the Ständehaus to the south. The Japanese quarter (Immermannstraße) lies near the main station. Oberkassel across the river has the skyline view. The airport is about 7 km north.",
    gettingAround:
      "Düsseldorf Airport (DUS), about 7 km from the centre, is Germany's fourth-busiest by passengers, with S-Bahn and regional trains from the airport station (linked to the terminals by the SkyTrain) reaching the main station in about 10 minutes, and flights across Europe and intercontinentally. ICE trains take about 25 minutes from Cologne, 1.5 hours from Frankfurt and about 4 from Berlin. The city has a metro, trams and buses, and the Altstadt, the Königsallee and the MedienHafen are walkable. The climate is temperate maritime, mild and wet.",
    culture:
      "German is universal, and business and the Japanese community make English and Japanese common. Altbier custom: waiters refill an empty glass automatically and mark the beer mat; put the mat on the glass when you have had enough. Altbier and Cologne's Kölsch are 'rivals' — don't order Kölsch in the Altstadt. Carnival (February–March, the Rose Monday parade) is one of the centres of the Rhineland carnival, and Japan Day in May ends with fireworks. Tip about 10% in restaurants. The ramen shops and izakaya of the Japanese quarter are a local speciality.",
    seeAndDo:
      "The Altstadt bars and Altbier breweries (Uerige, Füchschen, Schumacher); the Rhine promenade and river cruises; the Gehry buildings of the MedienHafen and the Rheinturm view; the Königsallee; the K20 and K21 galleries and the Kunstpalast; the Hofgarten; the Japanese quarter; Benrath Palace (a Baroque palace in the south); the skyline from the Oberkassel bank; day trips to Cologne Cathedral, the Zollverein colliery in Essen and Neuss.",
    whenAndTips:
      "May–September is most comfortable; the 'largest fair on the Rhine' in July and the Christmas market draw crowds, and hotels are very expensive during trade fairs (ProWein and boot in March, among others). A day to a day and a half for the city. A same-day visit to Cologne is easy — the heart of the Rhine-Ruhr region.",
  },
  lubeck: {
    // identity sources: 德国各州统计局的 Gemeinde（市本身）人口，**基准均为 Zensus 2022**（2022 年人口普查导致不少城市的官方人口被下修，此后在新基准上逐年推算 —— 引用德国数字时必须区分 Zensus 前后）。
    //   **德国有两套并存的官方口径**：州统计局的 Zensus 调节数 vs 城市自己的居民登记（Melderegister，常含次要住所），两者可以差好几万，正文必须写明用的是哪一档。
    //   发布节奏：巴伐利亚州**次年 5 月**；汉堡与石荷州（Statistikamt Nord）**次年 7 月初**；北威州 IT.NRW **次年 6 月中**；黑森州**次年 6—7 月**；**巴登-符腾堡州滞后特别长（约 16 个月）** —— 2024-06-30 的数迟至 2025-10 才发布，别按其他州的节奏去催。城市自己的登记口径多在次年 2—3 月。
    //   **吕贝克两个口径方向不同**：州统计局（Statistikamt Nord，Zensus 2022 基准）2024-12-31 = **216,889**（级别 1）；吕贝克市自己的居民登记 2025-12-31 = **223,261**，据报道为 **47 年来最高**（移民流入所致，**级别 2**）—— 比州口径高出约 6,400 人。两档并列写明。
    identity:
      "Lübeck lies on the Trave river near the Baltic in northern Germany, with about 217,000 people (end of 2024, state statistical office; the city's own register already showed about 223,000 at the end of 2025), and in the Middle Ages was the de facto capital of the Hanseatic League — the 'Queen of the Hansa'. The old town stands on an island ringed by the Trave; the Holstentor gate completed in 1478 is the city's emblem, seven church spires make its skyline, and St Mary's is the archetype of the Brick Gothic of the Baltic; the old town was inscribed as a World Heritage site in 1987, among the first in Germany. Thomas Mann was born here and set 'Buddenbrooks' in the family house, and Günter Grass lived nearby in his later years; Niederegger has made marzipan here since 1806. Travemünde is Lübeck's seaside district, with a Baltic beach and ferry port.",
    // howItWorks sources: 人口两档：州统计局 Statistikamt Nord（2022 年普查基准）2024-12-31 = 216,889（1 级，次年 7 月初发布）；吕贝克市居民登记（Melderegister）2025-12-31 = 223,261（市统计通讯第 71 号，2 级，次年 2—3 月发布，原文记为 1978 年以来最高）。德国这两档并存、差约 6 千人，identity 段早已并列写明，本轮把 howItWorks 段也改成并列。⚠️ 删掉「德国波罗的海沿岸第二大城市」：基尔约 24.7 万 > 吕贝克 > 罗斯托克约 20.9 万，数量级成立，但**没有任何机构正式按「德国波罗的海沿岸城市」排过名**，属自行推断的排名断言。
    howItWorks:
      "Lübeck is an independent city of Schleswig-Holstein where two official counts coexist: about 217,000 at the end of 2024 on the state statistical office's 2022-census basis, and about 223,000 at the end of 2025 in the city's own residence register; the council runs local services, and police and schools belong to the state. In the Middle Ages it was the leading city of the Hanseatic League, the 'Queen of the Hanse' as it was called, and its old town stands on an island in the Trave, inscribed as World Heritage in 1987 with the Holstentor as its emblem; the skyline of seven towers rises from five churches, six of them over 100 m, St Mary's built between 1265 and 1351 is the model of brick Gothic, Thomas Mann's Buddenbrooks describes a merchant family of this city and Günter Grass lived nearby in later life. Niederegger marzipan is its speciality. The beach and ferry port of Travemünde at the city's northern edge is a main German ferry port for Scandinavia, and Hamburg lies about 65 km south-west. Newcomers most often go wrong by taking Lübeck for a suburb of Hamburg, when it was the centre of Baltic trade and Hamburg once merely its rival.",
    layout:
      "The old town occupies an oval island enclosed by the Trave and canals, with the Holstentor and the salt storehouses at the western entrance, the Markt, the town hall and St Mary's on the highest ground in the middle, and the Buddenbrookhaus and the Niederegger café beside the church; the cathedral stands at the southern tip, St James's and the European Hansemuseum at the northern end, and the island's lanes and courtyards (Gänge und Höfe) are a special feature. The main station lies west of the island, about 10 minutes' walk across the bridge to the Holstentor. Travemünde is about 20 km north-east at the river mouth on the sea.",
    gettingAround:
      "Lübeck's local airport has very few flights; the city relies on Hamburg Airport (about 74 km, about 1.5 hours by train via Hamburg's main station). Regional trains take about 45 minutes from Hamburg; ICE trains take about 3 hours from Berlin (some direct). The old town is walkable, about 15 minutes from the station to the Markt; Travemünde is about 25 minutes by regional train. The climate is temperate maritime, cool and breezy.",
    culture:
      "German is universal, with traces of Low German. St Mary's keeps the bells that fell in the 1942 bombing as a memorial — keep quiet; most churches charge a small entry fee. The Niederegger café has a marzipan museum upstairs, and marzipan is the souvenir to buy. The old-town courtyards are private homes — enter by day and stay quiet. The December Christmas markets spread across the old town (in front of the town hall, the crafts market beside St Mary's). Local food includes Baltic fish and beef braised in red wine; tip about 10% in restaurants.",
    seeAndDo:
      "The Holstentor and the salt storehouses; St Mary's (the fallen bells, the astronomical clock); the Markt and the town hall; the Buddenbrookhaus (Thomas Mann museum); the Niederegger marzipan café and museum; the European Hansemuseum; the old-town lanes and courtyards; the cathedral and the St Anne's museum; the tower of St Peter's for the seven spires; Trave river cruises; Travemünde beach, the old lighthouse and the Passat sailing ship.",
    whenAndTips:
      "May–September is most comfortable, with Travemünde beach lively in July–August; the December Christmas market is one of the best known in northern Germany. A day for the old town, half a day for Travemünde. An easy day trip from Hamburg.",
  },
  rothenburg: {
    // identity sources: 德国各州统计局的 Gemeinde（市本身）人口，**基准均为 Zensus 2022**（2022 年人口普查导致不少城市的官方人口被下修，此后在新基准上逐年推算 —— 引用德国数字时必须区分 Zensus 前后）。
    //   **德国有两套并存的官方口径**：州统计局的 Zensus 调节数 vs 城市自己的居民登记（Melderegister，常含次要住所），两者可以差好几万，正文必须写明用的是哪一档。
    //   发布节奏：巴伐利亚州**次年 5 月**；汉堡与石荷州（Statistikamt Nord）**次年 7 月初**；北威州 IT.NRW **次年 6 月中**；黑森州**次年 6—7 月**；**巴登-符腾堡州滞后特别长（约 16 个月）** —— 2024-06-30 的数迟至 2025-10 才发布，别按其他州的节奏去催。城市自己的登记口径多在次年 2—3 月。
    //   罗滕堡 2025-12-31 = **11,331**（巴伐利亚州统计局，级别 1），较 2024 年的 11,365 略降 34 人。
    identity:
      "Rothenburg ob der Tauber sits above the Tauber valley in the Franconian north-west of Bavaria, with about 11,300 people (end of 2025) — one of the best-preserved medieval towns in Germany and the most famous stop on the Romantic Road. It is one of only four German towns still fully encircled by their walls (with Nördlingen, Dinkelsbühl and Berching), and the long stagnation after the Thirty Years' War kept its medieval face; the Plönlein fork is among the most photographed streetscapes in Germany, and the town hall tower looks over the red roofs. About a third of the buildings were destroyed by bombing at the end of the Second World War and rebuilt as they were. The Käthe Wohlfahrt Christmas village and the German Christmas Museum are open all year, and the Schneeball pastry is the local speciality.",
    // howItWorks sources: 德国各州统计局的 Gemeinde（市本身）人口，**基准均为 Zensus 2022**（2022 年人口普查导致不少城市的官方人口被下修，此后在新基准上逐年推算 —— 引用德国数字时必须区分 Zensus 前后）。
    //   **德国有两套并存的官方口径**：州统计局的 Zensus 调节数 vs 城市自己的居民登记（Melderegister，常含次要住所），两者可以差好几万，正文必须写明用的是哪一档。
    //   发布节奏：巴伐利亚州**次年 5 月**；汉堡与石荷州（Statistikamt Nord）**次年 7 月初**；北威州 IT.NRW **次年 6 月中**；黑森州**次年 6—7 月**；**巴登-符腾堡州滞后特别长（约 16 个月）** —— 2024-06-30 的数迟至 2025-10 才发布，别按其他州的节奏去催。城市自己的登记口径多在次年 2—3 月。
    //   同上。
    howItWorks:
      "Rothenburg ob der Tauber is a town of Ansbach district in Middle Franconia, Bavaria, about 42 km² with about 11,300 people at the end of 2025, governed by an elected council and mayor, with police and schools belonging to the state. The town stands on a plateau above the Tauber, its walls still complete — only four German towns kept theirs whole — and it was a free imperial city until 1803, when it passed to Bavaria; the market square, the fork at the Plönlein and the night watchman's tour are the visitor's three things, a year-round Christmas shop stands on the main street, and it is the best-known stop on the Romantic Road. A raid in 1945 destroyed about a third of the town, which was rebuilt to its old form. The railway is only a branch from Steinach, Nuremberg lies about 80 km east and Würzburg about 60 km north. Newcomers most often go wrong by assuming the whole town is medieval original, when a third of it was rebuilt from old drawings in the 1950s.",
    layout:
      "The town stands on high ground on the east side of the Tauber valley, fully ringed by walls: the Marktplatz and the town hall are at the centre, the Schmiedgasse runs south from the square to the Plönlein and the Sieber tower and on to the Spital gate; the castle gate and the Burggarten at the western end look over the valley, St James's church (Riemenschneider's Holy Blood altar) stands north of the Marktplatz, and the wall walk (about 2.5 km, roofed) can be joined at several points. The station is about 500 m east of the walls. In the valley below lie the Double Bridge and the Topplerschlösschen, reached on foot.",
    gettingAround:
      "Rothenburg has no airport with scheduled flights; the nearest are Nuremberg (about 100 km) and Frankfurt (about 200 km). Trains from Nuremberg or Würzburg run to Steinach with a branch-line connection of about 15 minutes to Rothenburg, about 1–1.5 hours in all; the Romantic Road coach stops in summer. The town is entirely on foot, with visitors' cars in the car parks outside the walls. The climate is temperate with cold snowy winters.",
    culture:
      "German is universal, and with so many visitors English and Japanese signage is common. The Night Watchman's tour at 8 pm (in English) is a tradition, starting from the Marktplatz. Keep quiet in St James's; the wall walk is narrow — give way. Day-trip groups crowd the line from the Marktplatz to the Plönlein by day, while early morning and evening are quiet. Franconian food includes roasts, Spätzle and Franconian wine in the Bocksbeutel bottle. Tip about 10% in restaurants.",
    seeAndDo:
      "The Plönlein; the town hall tower climb; the Marktplatz and the mechanical clock of the Councillors' Tavern; the wall walk (from the Spital gate to the Klingen gate); the Riemenschneider altar in St James's; the Burggarten for the Tauber valley; the Medieval Crime Museum; the German Christmas Museum and the Käthe Wohlfahrt Christmas village; the Night Watchman's tour; the walk down to the Double Bridge and the Topplerschlösschen; the Imperial City Museum.",
    whenAndTips:
      "May–June and September–October are most comfortable, and the December Christmas market (Reiterlesmarkt) is the most atmospheric but very crowded; summer days are busy. Stay a night — early morning and evening are best for photographs. A stop on the Romantic Road (Würzburg to Füssen), linked with Dinkelsbühl and Nördlingen.",
  },
  regensburg: {
    // identity sources: 德国各州统计局的 Gemeinde（市本身）人口，**基准均为 Zensus 2022**（2022 年人口普查导致不少城市的官方人口被下修，此后在新基准上逐年推算 —— 引用德国数字时必须区分 Zensus 前后）。
    //   **德国有两套并存的官方口径**：州统计局的 Zensus 调节数 vs 城市自己的居民登记（Melderegister，常含次要住所），两者可以差好几万，正文必须写明用的是哪一档。
    //   发布节奏：巴伐利亚州**次年 5 月**；汉堡与石荷州（Statistikamt Nord）**次年 7 月初**；北威州 IT.NRW **次年 6 月中**；黑森州**次年 6—7 月**；**巴登-符腾堡州滞后特别长（约 16 个月）** —— 2024-06-30 的数迟至 2025-10 才发布，别按其他州的节奏去催。城市自己的登记口径多在次年 2—3 月。
    //   雷根斯堡 2025-12-31 = **151,517**（巴伐利亚州统计局，级别 1）。
    identity:
      "Regensburg lies on the northernmost bend of the Danube in eastern Bavaria, where the Regen and the Naab flow in, with about 151,500 people (end of 2025). The Romans founded the Castra Regina camp here in AD 179, in the Middle Ages it was one of the most prosperous cities of the Holy Roman Empire, and from 1663 to 1806 the Imperial Diet sat here permanently; the old town survives almost intact with nearly 1,500 listed buildings, inscribed as a World Heritage site in 2006 and called 'the largest medieval city north of the Alps'. The Stone Bridge of 1135–1146 is a masterpiece of medieval bridge-building, St Peter's Cathedral is the model of Bavarian Gothic and its choir, the Domspatzen, has a thousand-year history; the historic sausage kitchen at the bridgehead claims to be the oldest sausage restaurant in the world. The palace of the Thurn und Taxis family lies in the south of the old town, and the Walhalla temple about 10 km downstream.",
    // howItWorks sources: 德国各州统计局的 Gemeinde（市本身）人口，**基准均为 Zensus 2022**（2022 年人口普查导致不少城市的官方人口被下修，此后在新基准上逐年推算 —— 引用德国数字时必须区分 Zensus 前后）。
    //   **德国有两套并存的官方口径**：州统计局的 Zensus 调节数 vs 城市自己的居民登记（Melderegister，常含次要住所），两者可以差好几万，正文必须写明用的是哪一档。
    //   发布节奏：巴伐利亚州**次年 5 月**；汉堡与石荷州（Statistikamt Nord）**次年 7 月初**；北威州 IT.NRW **次年 6 月中**；黑森州**次年 6—7 月**；**巴登-符腾堡州滞后特别长（约 16 个月）** —— 2024-06-30 的数迟至 2025-10 才发布，别按其他州的节奏去催。城市自己的登记口径多在次年 2—3 月。
    //   同上。原文这句连年份都没有。
    howItWorks:
      "Regensburg is the fourth city of Bavaria and the capital of the Upper Palatinate, with about 151,500 people at the end of 2025; the council runs local services, and police and schools belong to the state. The city stands where the Danube meets the Naab and the Regen at the river's northernmost point, and in 179 AD the Romans built the legionary fortress of Castra Regina here; from 1663 to 1806 the Perpetual Imperial Diet of the Holy Roman Empire sat here, the envoys of the German states meeting in the town hall for more than a hundred and forty years. The old town with Stadtamhof across the river was inscribed as World Heritage in 2006 as the largest medieval city site north of the Alps, with nearly 1,500 listed buildings, the Stone Bridge of 1135–46 and the cathedral begun in 1275 its two reference points; the Second World War left it almost untouched. The BMW plant and the university are today's mainstay, the Walhalla stands 10 km downstream and Munich about 120 km south. Newcomers most often go wrong by taking Regensburg for a small town, when it is a city with a university and a car plant, and the old town only its centre.",
    layout:
      "The old town lies on the south bank of the Danube, with the Stone Bridge crossing from its northern edge to the Stadtamhof district (also within the World Heritage site); at the bridgehead are the salt store, the visitor centre and the sausage kitchen, the cathedral about 200 m south of the bridge, and the Haidplatz, the old town hall (the Imperial Diet museum) and the merchants' towers in the west of the old town. The Thurn und Taxis palace (St Emmeram's Abbey) lies on the southern edge of the old town, with the station about 500 m further south. Walhalla stands on the north bank at Donaustauf to the east, reached by boat.",
    gettingAround:
      "Regensburg has no airport with scheduled flights; the nearest are Munich (about 120 km, about 1.5 hours by train) and Nuremberg (about 100 km, about 1 hour). Regional expresses take about 1.5 hours from Munich and 1 hour from Nuremberg, and ICE trains about 3 hours from Frankfurt. The old town is walkable, about 15 minutes from the station to the cathedral; Danube boats reach Walhalla in about 45 minutes. The climate is temperate continental with warm summers and cold winters.",
    culture:
      "German is universal, with a strong Bavarian dialect. The Domspatzen sing at the cathedral's Sunday mass — keep quiet while visiting; the Imperial Diet hall and the interrogation chamber of the old town hall are seen on guided tours. The sausage kitchen serves only grilled sausages with sauerkraut and sweet mustard, often with a queue. The Danube-side beer gardens (such as the Spitalgarten) are the summer haunt, with local beers such as Kneitinger. The Dult folk festival in May–June and the Christmas markets (the romantic market at the Thurn und Taxis palace) are the seasonal events. Tip about 10% in restaurants.",
    seeAndDo:
      "The Stone Bridge, the salt store and the historic sausage kitchen; St Peter's Cathedral (Sunday choir); the old town hall and the Imperial Diet museum; the Haidplatz and the merchants' towers (the Golden Tower); a tour of the Thurn und Taxis palace; Stadtamhof and the Danube banks; a Danube boat to the Walhalla temple; St Emmeram's church; day trips to the Danube gorge and Weltenburg Abbey at Kelheim, and to Passau.",
    whenAndTips:
      "May–September is most comfortable, with the beer gardens and the riverbank liveliest in summer; the Christmas markets run in December. A day for the old town, half a day for Walhalla. An easy day trip from Munich or Nuremberg and the starting point for the Danube (Passau, Vienna).",
  },
};
