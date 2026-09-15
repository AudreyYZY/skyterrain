import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  "japan-overview": {
    // identity sources: 総務省統計局 令和7年国勢調査 人口速報集計結果：2025-10-01 时点总人口 123,049,524 人（含在住外国人）。https://www.soumu.go.jp/menu_news/s-news/01toukei03_01000140.html
    //   英文原文写的是 125 million，比实际高出约 200 万；中文「约1.2亿」数值成立但缺年份。核实日 2026-09-07，来源级别 1
    identity:
      "Japan is an island country on the western edge of the Pacific, made up of the four large islands of Honshu, Hokkaido, Kyushu and Shikoku and thousands of smaller ones, with a population of about 123 million in the 2025 national census (Statistics Bureau of Japan), most of it concentrated in a few metropolitan areas on the Pacific side of Honshu. The archipelago sits on a plate boundary and is mountainous, with many volcanoes, earthquakes and hot springs, and a very high forest cover.",
    layout:
      "Japan can be divided roughly into sections: Hokkaido (high-latitude, sparsely settled, cool summers and snowy winters); Honshu (the largest island, with the Tokyo, Nagoya and Kyoto–Osaka–Kobe metropolitan areas along the Pacific side, and the 3,000 m Japanese Alps down the centre dividing the climate into a Pacific side and a Sea of Japan side); Shikoku (smaller, mostly the Inland Sea and mountains); Kyushu (concentrated volcanoes and hot springs, with Fukuoka as the gateway); and the southernmost Nansei Islands (subtropical, coral reefs, with Naha as the centre).",
    gettingAround:
      "Travel between cities is mostly by Shinkansen and intercity rail — dense and punctual — with flights only for long distances and island hops; the rail system is complex but a single IC card (Suica, ICOCA and others) works throughout, and a JR Pass can be worth it for wide travel. Big-city subways are extensive; stand and walk on the left (Kansai is the reverse). The climate is temperate monsoon overall: hot, humid summers with a rainy season in June–July and typhoons from July to October; winters are dry on the Pacific side and snowy on the Sea of Japan side and in Hokkaido. Tap water is drinkable and convenience stores are everywhere.",
    culture:
      "The language is Japanese; English signage is fairly complete in big cities and major sights and limited in the countryside. Society values order and not troubling others: queue, keep quiet in public, take your rubbish with you, and do not talk on the phone on trains. Remove shoes for tatami rooms and some temples and inns; before a hot-spring bath, wash thoroughly, and note that swimwear is usually not worn and large tattoos may be turned away. Tipping is not customary.",
    seeAndDo:
      "The old capitals and gardens of Kyoto, Nara and Kanazawa; the cities and food of Tokyo and Osaka; the nature and skiing of Hokkaido and Tohoku; the volcanoes and hot springs of Kyushu; the islands and art of the Inland Sea; the mountains and forests of Mount Fuji, the Japanese Alps and Yakushima. The seasons are distinct, and the cherry blossom (late March to April) and autumn leaves (around November) are two viewing peaks.",
    whenAndTips:
      "Spring (March–May) and autumn (October–November) have the most comfortable weather and are also peak season; in the cherry-blossom and autumn-leaf periods, book accommodation in popular places early. Golden Week (late April to early May), Obon (mid-August) and the new-year holidays are nationwide travel peaks with high prices. In summer take heat precautions and carry an umbrella; flights and trains stop when typhoons hit. Entry has restrictions on meat, fruit and some medicines — declare honestly. Visa rules vary by nationality; check the latest from Japan's Ministry of Foreign Affairs before you travel.",
  },

  tokyo: {
    // identity sources: **日本的官方口径**：総務省統計局按「市区町村」逐一发布人口，**没有「市区人口」这个复合概念**
    //   （「市」与「区」在日本是平行的不同层级，「区」特指政令指定都市下辖的行政区或东京 23 区）。
    //   都市圏有两套官方定义：**大都市圏**（1.5% 通勤/通学阈值，官方专名如「東京圏」「近畿大都市圏」
    //   「中京大都市圏」）与**都市圏**（10% 阈值，范围小很多）；**从来没有「都会区」这个词**
    //   （另有学术口径「都市雇用圏」，非官方）。2026-09-08 核。
    //   **发布节奏**：国勢調査每 5 年一次（年份末位 0/5，基准日 10 月 1 日）；**速報集計在普查次年 5 月末前后**
    //   分批公布；**人口等基本集計（确定数）在普查次年 9 月末前后**；住民基本台帳全国汇总每年 7 月。
    //   **東京圏（1 都 3 県）2025 年国势调查速报合计约 3699 万**：东京都 14,246,219 + 神奈川 9,193,657
    //   + 埼玉 7,287,169 + 千叶 6,258,512 —— 総務省統計局（1 级，2026-09-08 核）。
    //   注意「東京圏」与国势调查里 1.5% 通勤定义的「大都市圏」边界略有不同（后者含茨城/栃木南部部分市町村）。
    identity:
      "Tokyo is the capital and largest city of Japan, Greater Tokyo — Tokyo Metropolis together with Kanagawa, Saitama and Chiba prefectures — had about 36.99 million people at the 2025 census (Statistics Bureau of Japan), one of the world's most populous city regions. It is the undisputed centre of politics, economy, culture and transport, made up of many districts with strong individual characters — skyscrapers and round-the-clock commercial quarters as well as quiet old neighbourhoods and large areas of greenery.",
    // howItWorks sources: 东京府本身也被撤销，不是「市并入府」。随机抽样审计（seed=2）抽中。2026-09-13 核。
    howItWorks:
      "Tokyo is not a city. In 1943 both Tokyo Prefecture and Tokyo City were abolished and merged into the new prefecture-level Tokyo Metropolis, which governs 23 special wards, the 26 cities and the towns and villages of the Tama area, and islands far out in the Pacific. The 23 wards are precisely the old Tokyo City, about 627 km² with about 9.95 million residents in the special wards at the 2025 census. Each has its own mayor and assembly and calls itself a City in English, yet water, sewerage and fire services come from the Metropolitan Government. Tokyo is polycentric: Chiyoda, Chuo and Minato hold government and finance, while Shinjuku, Shibuya, Ikebukuro and Shinagawa on the Yamanote line are the officially designated sub-centres. An address here is written layer by layer — prefecture, ward or city, district, chōme, block, number — most streets have no names, and people give a location by its nearest station. Distance is measured in railway minutes to the inside of the Yamanote loop, and 'inside or outside the 23 wards' is the boundary that matters. Newcomers most often go wrong by treating a single ward as an independent city, or by assuming Tokyo has one downtown.",
    layout:
      "Tokyo is built on the Kanto Plain, cut up by the Sumida and Ara rivers and Tokyo Bay. The \"city centre\" is conventionally the loop of the JR Yamanote line, which strings together the main hubs — Tokyo Station, Shinjuku, Shibuya, Ikebukuro, Ueno — with the Imperial Palace near its centre-east. West are continuous residential districts reaching the Tama Hills and the Okutama mountains; east are the low-lying old town and reclaimed waterfront.",
    gettingAround:
      "Narita Airport is far from the centre (about an hour by express train); Haneda is much closer (about 20–30 minutes). The subway (Tokyo Metro plus Toei) and JR lines form a web; a single Suica or PASMO card covers the whole city, last trains run past midnight, and after that it is taxis. Walking and transfer distances are often long. The climate is Pacific-side temperate: hot, muggy summers (July–September) often above 35°C with afternoon thunderstorms and typhoons, and clear, cold, dry winters with little snow in the city; cherry blossom opens around late March.",
    culture:
      "Standard Japanese is spoken, with Chinese, English and Korean signage at major stations and sights. The city is fast, punctual and orderly: stand on the left on escalators (the right is for people in a hurry), keep quiet on trains, carry your rubbish. Restaurants generally do not take tips, and many small places are cash-only or take Japanese e-payment. Shrines and temples have their own etiquette (bow, purify your hands, do not stand in the exact centre of the path).",
    seeAndDo:
      "Asakusa with the Kaminarimon and Nakamise; the museums and park of Ueno; Meiji Shrine and Yoyogi Park; the Shibuya crossing; the East Gardens of the Imperial Palace; the Skytree or the Metropolitan Government observatory for a city panorama; Tsukiji Outer Market and Toyosu for seafood; a walk through the old streets of Nezu and Yanaka. Day trips: Kamakura, Nikko, Hakone (views of Fuji), Mount Takao.",
    whenAndTips:
      "Late March to early April (blossom) and November (autumn leaves) are the best scenery but the most crowded, with expensive rooms; late April to early May (Golden Week) and the new year are nationwide travel peaks. The rainy season (June) is wet, and high summer is very hot — take heat precautions. Book popular exhibitions and restaurants ahead. Earthquakes occur occasionally; note the evacuation guidance at your accommodation — in most cases \"drop, cover, hold on\" is the response.",
  },

  kyoto: {
    // identity sources: **日本的官方口径**：総務省統計局按「市区町村」逐一发布人口，**没有「市区人口」这个复合概念**
    //   （「市」与「区」在日本是平行的不同层级，「区」特指政令指定都市下辖的行政区或东京 23 区）。
    //   都市圏有两套官方定义：**大都市圏**（1.5% 通勤/通学阈值，官方专名如「東京圏」「近畿大都市圏」
    //   「中京大都市圏」）与**都市圏**（10% 阈值，范围小很多）；**从来没有「都会区」这个词**
    //   （另有学术口径「都市雇用圏」，非官方）。2026-09-08 核。
    //   **发布节奏**：国勢調査每 5 年一次（年份末位 0/5，基准日 10 月 1 日）；**速報集計在普查次年 5 月末前后**
    //   分批公布；**人口等基本集計（确定数）在普查次年 9 月末前后**；住民基本台帳全国汇总每年 7 月。
    //   京都市 **2025 年国势调查速报 1,431,713 人**（较 2020 年 1,463,723 减少 32,010、−2.2%）——
    //   京都市官网 https://www.city.kyoto.lg.jp/sogo/page/0000353577.html（1 级，2026-09-08 核）。
    //   **原文的「市区人口」是自造口径**，数值凑巧接近但术语不对、也没年份。
    identity:
      "Kyoto was the capital of Japan for over a thousand years, and is famous for its well-preserved temples, shrines, gardens and machiya townhouse streets — the core city for experiencing traditional Japan. The city's population was about 1.43 million at the 2025 census (City of Kyoto); the city is not large in scale, but its historic heritage is extremely dense and visitor numbers are high year-round.",
    // howItWorks sources: Wikipedia (2026-09): Kyoto (designated city, 11 wards; Heian-kyō grid 794; agaru/sagaru address style; 2020 census ~1.46 million; 2 subway lines)
    howItWorks:
      "Kyoto is the seat of Kyoto Prefecture and a designated city of eleven wards, which are administrative divisions rather than self-governing bodies. Its skeleton is the chessboard grid of Heian-kyō laid out in 794, and locals give addresses not by house number but by the crossing of two streets and a direction — 'agaru' for north, 'sagaru' for south, 'higashi-iru' and 'nishi-iru' for east and west — so that an address is a set of walking instructions. The Kamo River divides the city, with the centre and city hall in Nakagyō ward on the west bank, Gion and Higashiyama at the foot of the eastern hills, the Kyoto Station area the commercial district to the south, and the mountains on three sides the city's edge. The 2025 census counted about 1.43 million residents, down about 32,000 from 2020; buses are the main transport, the subway has only the Karasuma and Tōzai lines, and JR, Hankyu and Keihan carry commuters to Osaka. Newcomers most often go wrong by taking Kyoto for a city of temples, when it is a prefectural capital where about 1.43 million people live everyday lives and the temples lie at the edge of the hills.",
    layout:
      "The Kyoto basin is enclosed by mountains on three sides, and the city is laid out on an ancient Tang-inspired grid, with streets running true north–south and east–west — easy to navigate. The centre is the Shijo–Kawaramachi shopping area and the Gion entertainment district; a line of famous temples runs along the eastern foothills from Kiyomizu-dera and Yasaka through Nanzen-ji to Ginkaku-ji (the Philosopher's Path); Kinkaku-ji and Arashiyama are to the north-west, and Fushimi Inari is to the south.",
    gettingAround:
      "Kyoto has no airport with scheduled flights; people usually arrive from Kansai Airport on the Haruka express (about 75 minutes) or by transfer at Osaka. The bus network is dense but very crowded at peak times, there are only two subway lines, and cycling is good for short distances. The sights lie around the edge of the basin, so planning by area saves backtracking. The climate is that of an inland basin: hot, muggy summers (\"the Kyoto summer\" is notoriously hard), damp cold winters with occasional snow, and short, beautiful springs and autumns.",
    culture:
      "Kansai-dialect Japanese is spoken, with multilingual signage at the sights. Gion is a working geisha district — geiko and maiko are people at work, so do not chase them for photos or block their way, and some lanes now ban visitor photography. Most temples and shrines require removing shoes, forbid photography indoors, and expect quiet in the gardens. Machiya guesthouses and ryotei have their own rules. No tipping.",
    seeAndDo:
      "Kiyomizu-dera with Ninen-zaka and Sannen-zaka; the thousand torii of Fushimi Inari (fewer people early); Kinkaku-ji and the Ryoan-ji rock garden; the bamboo grove and Togetsukyo bridge at Arashiyama; Gion and Pontocho in the evening; Nanzen-ji, Eikan-do and Tofuku-ji for autumn leaves. Nishijin and Uji (tea and the Byodo-in) are each a half-day.",
    whenAndTips:
      "The blossom (early April) and autumn leaves (mid-to-late November) are Kyoto's peak and most crowded two weeks — visit popular temples first thing and book rooms months ahead. High summer and the rainy season are uncomfortable; January–February is cold but quiet, with occasionally lovely snow scenes. Many temples have fixed opening hours and last-entry times and close early in the evening, so leave a margin in your plans.",
  },

  "osaka-city": {
    // identity sources: 同 travel/sendai/greater-sendai-2015：2015 口径落后两个周期，官方无现成圈域人口表，e-Stat『大都市圏・都市圏 対象市区町村データ』需自行加总。下一轮从那张表补。2026-09-12 核。
    identity:
      "Osaka is the central city of the Kansai region and the core of Japan's second-largest metropolitan area by population, the Kinki Major Metropolitan Area (Statistics Bureau definition, centred on Osaka, Kyoto, Kobe and Sakai). Historically a centre of commerce and wholesale trade, the city has a direct, down-to-earth character and is famous for its food — a contrast with the restraint of Kyoto.",
    // howItWorks sources: 与 identity 段同一处更正。2026-09-12 核。
    howItWorks:
      "Osaka has two layers of government: Osaka Prefecture under a governor, and within it the City of Osaka, a designated city under a mayor and council, divided into 24 wards. Unlike Tokyo's special wards, these are administrative divisions of the city with no assemblies of their own; referendums in 2015 and 2020 on reorganising the city into special wards directly under the prefecture were both rejected, and the 24-ward structure remains. The centre has two poles: Kita, around Umeda and Osaka Station, the business and department-store district, and Minami, around Namba, Shinsaibashi and Dōtonbori, the district of restaurants and entertainment, with the Loop Line circling both. The 2020 census counted about 2.75 million people in the city. Addresses run prefecture, city, ward, district, chōme, block, number. Newcomers most often go wrong by confusing Osaka Prefecture with Osaka City, or by assuming Osaka has a single downtown.",
    layout:
      "Osaka straddles the Yodo River on the Osaka Plain. The city has roughly two centres — \"Kita\" (around Umeda and Osaka Station, offices and department stores) and \"Minami\" (Namba, Shinsaibashi and Dotonbori, shopping, food and entertainment) — with Osaka Castle between them to the east. West are the waterfront districts and Osaka Bay, where Universal Studios is.",
    gettingAround:
      "Kansai Airport is on a reclaimed island off the south coast, about 35–50 minutes to the city on the Haruka or Rapi:t express; Itami Airport, to the north, handles domestic flights. The Osaka Metro plus the JR Loop Line cover the city; pay by IC card. Osaka is the Kansai hub: about 30 minutes to Kyoto and Kobe, around an hour to Nara and Himeji. The climate is similar to Tokyo's but a bit muggier — a hard summer, and a mild winter with little snow.",
    culture:
      "Osaka-dialect Japanese is spoken — lively and fond of jokes. On escalators, Osaka stands on the right (the opposite of Tokyo). The food culture is strong and values good value; there are many street stalls and stand-and-eat places, and many shops are cash-only or take Japanese e-payment. Tipping is not customary.",
    seeAndDo:
      "The signs and food of Dotonbori (takoyaki, okonomiyaki, kushikatsu — where the rule is \"no double-dipping the sauce\"); Osaka Castle Park; Shinsekai and Tsutenkaku; the Kuromon Market; the floating garden observatory of the Umeda Sky Building for night views; Universal Studios Japan. Osaka is a convenient base for Kyoto, Nara, Kobe and Himeji.",
    whenAndTips:
      "Spring and autumn (late March to May, October–November) are the most comfortable. High summer (July–August) is very muggy — take heat precautions — and the rainy season is wet. Golden Week and the new year are busy and pricey. Book popular restaurants ahead and buy express passes for Universal Studios. Shinsaibashi and Dotonbori are very crowded at night — watch your belongings.",
  },

  sapporo: {
    // identity sources: 日本 **令和 7 年（2025 年）国勢調査人口速報集計**，普查时点 2025-10-01，由各都道府县公布市区町村数。子代理逐条核对官方 PDF / xls 原表，**级别 1**。
    //   发布节奏：国勢調査每五年一次（年份末位 0/5，时点 10-01）；**人口速報集計**在普查后次年 5 月末左右，**人口等基本集計**在次年 9 月末左右。住民基本台帳人口则由各市按月发布，总务省全国汇总每年 7 月。
    //   札幌市 2025-10-01 = 1,964,034 人，较 2020 年（1,973,395）减少 9,361 人 —— **国勢調査有史以来首次减少**。北海道厅官方 PDF。
    identity:
      "Sapporo is the central city of Hokkaido, with a population of about 1.96 million at the 2025 census — a relatively young large Japanese city, planned and built only from the latter half of the 19th century, with a regular grid where addresses are given as \"North n, West n\". Winters are severe and snowy; it is a city of skiing and the Snow Festival.",
    // howItWorks sources: 札幌市交通局口径为「日本唯一」；台北捷运文湖线、广州珠江新城 APM 同为胶轮系统，故「东亚唯一」不成立。2026-09-12 核。
    howItWorks:
      "Sapporo is the seat of the Hokkaido government and a designated city of ten wards, with about 1.96 million residents at the 2025 census, its first decline since the census began — Japan's fifth-largest city and the largest north of Tokyo. Laid out on a grid in 1869, it uses coordinates rather than district names for addresses: from the origin at Odori Park and the Sōsei River, 'Kita 3 Nishi 4' means three blocks north and four blocks west, and locals navigate by numbers. Odori Park runs through the centre, Susukino is the entertainment district to the south, and the three subway lines are the only rubber-tyred metro in Japan. About 4.8 m of snow falls each year, among the heaviest of any large city in the world, and winter life revolves around the underground streets and snow clearing. Newcomers most often go wrong by reading Sapporo addresses as ordinary street names, when the numbers after north, south, east and west are the real location.",
    layout:
      "Sapporo is built on the southern edge of the Ishikari Plain facing Ishikari Bay, with hills such as Mount Teine behind it. The city is divided true north–south and east–west, with the east–west green strip of Odori Park as its axis: Sapporo Station is to the north, and Susukino (the Tanukikoji arcade and the Susukino food-and-entertainment district) to the south. South-west into the mountains are the Jozankei hot springs and the ski areas.",
    gettingAround:
      "New Chitose Airport to Sapporo Station is about 40 minutes on the JR rapid. The city has three subway lines plus a streetcar and buses, and in winter the underground arcades and skywalks are very useful. Distances between Hokkaido towns are large; Furano, Biei, Asahikawa, Otaru and Toya are reached by JR or hire car. The climate is northern: cool, dry, low-humidity summers (July–August) and a long winter with snow cover from December to March and January–February usually below freezing.",
    culture:
      "Standard Japanese with a slight Hokkaido accent is spoken, and tourist facilities have full multilingual signage. Winter life revolves around snow clearing and traction; indoor heating is strong, and you shake the snow off at the door. The food is seafood, soup curry, Genghis Khan grilled lamb, miso ramen, dairy and beer. No tipping.",
    seeAndDo:
      "Odori Park, the Sapporo TV Tower, the Clock Tower and the red-brick former government building; the Snow Festival in February (the Odori, Susukino and Tsudome sites); the Mount Moiwa ropeway for night views; Tanukikoji and the Nijo Market for seafood; the suburban Jozankei hot springs and the Shiroi Koibito Park. Use Sapporo as a hub for Otaru, the Asahikawa zoo and the Furano flower fields.",
    whenAndTips:
      "The Snow Festival in February is the busiest, coldest and most expensive time — book rooms months ahead. Summer (June–August) is cool and pleasant, good for escaping the heat and for the flower fields; during the lavender season (about July) the Furano area is crowded. In winter bring waterproof, non-slip shoes, a heavy coat, a hat and gloves, and take short steps on ice.",
  },

  fukuoka: {
    // identity sources: 日本 **令和 7 年（2025 年）国勢調査人口速報集計**，普查时点 2025-10-01，由各都道府县公布市区町村数。子代理逐条核对官方 PDF / xls 原表，**级别 1**。
    //   发布节奏：国勢調査每五年一次（年份末位 0/5，时点 10-01）；**人口速報集計**在普查后次年 5 月末左右，**人口等基本集計**在次年 9 月末左右。住民基本台帳人口则由各市按月发布，总务省全国汇总每年 7 月。
    //   **「都会区」不是日本官方统计称谓**。福冈确有一个官方跨市町协议会口径「福岡都市圏」（含福冈市在内 10 市 7 町的广域行政范围）：2026-08-01 推计 2,670,304 人（3 级）；学术口径「福岡都市雇用圏」（11 市 7 町）2020 年国勢調査约 267 万 —— 2026-09-14 抽样 seed=11 查出两口径被揉成一句，已拆开。原文的「250 万」与「福冈+北九州合成 257 万」都查不到出处，且后者与「福岡都市圏」是两个不同概念，不能混。
    identity:
      "Fukuoka is the largest city on Kyushu, with an estimated 2.67 million in August 2026 across the Fukuoka Metropolitan Area, the joint administrative area of 10 cities (Fukuoka included) and 7 towns, and one of the Japanese cities closest to mainland Asia. It is compact and convenient with relatively low prices, the airport is very close to the centre, and in recent years it has drawn attention as a liveable and start-up city.",
    // howItWorks sources: 日本 **令和 7 年（2025 年）国勢調査人口速報集計**，普查时点 2025-10-01，由各都道府县公布市区町村数。子代理逐条核对官方 PDF / xls 原表，**级别 1**。
    //   发布节奏：国勢調査每五年一次（年份末位 0/5，时点 10-01）；**人口速報集計**在普查后次年 5 月末左右，**人口等基本集計**在次年 9 月末左右。住民基本台帳人口则由各市按月发布，总务省全国汇总每年 7 月。
    //   同上，「福冈+北九州合成 257 万」查无出处。
    howItWorks:
      "Fukuoka is the seat of Fukuoka Prefecture and a designated city of seven wards, with about 1.66 million residents at the 2025 census, up about 51,500 in five years, the largest city in Kyushu. In 1889 the castle town of Fukuoka west of the Naka River and the merchant port of Hakata to its east were merged into one city, which took the name Fukuoka while the railway station was named Hakata and the dialect is still called Hakata-ben, and locals still call the port side 'Hakata'. The centre is therefore twin-poled: Tenjin is the commercial heart of old Fukuoka, Hakata the station and the newer office district, facing each other across the river; the airport is two subway stops, about five minutes, from Hakata Station, closer to its downtown than any other big-city airport in Japan. Fukuoka and Kitakyushu form a metropolitan area of an estimated 2.67 million in August 2026 across the Fukuoka Metropolitan Area, the joint administrative area of 10 cities (Fukuoka included) and 7 towns. Addresses run prefecture, city, ward, district, chōme, block, number. Newcomers most often go wrong by taking Hakata and Fukuoka for two cities, when they are two centres of one.",
    layout:
      "Fukuoka was formed by merging the old merchant town of Hakata (by Hakata Station) and the old castle town of Fukuoka (around Tenjin), separated by the Naka River, with both centres on flat land on the south side of the bay. North are Hakata Bay and the reclaimed Momochi and Uminonakamichi; south, the land soon becomes hills.",
    gettingAround:
      "Fukuoka Airport is just two subway stops (about 5 minutes) from Hakata Station — one of the closest airport-to-centre links among big Japanese cities. The city has three subway lines plus buses; pay by IC card, and the Nishitetsu railway runs to Dazaifu and Yanagawa. Fukuoka is Kyushu's rail hub: Shinkansen about 40 minutes to Kumamoto and about 1.5 hours to Kagoshima, limited express to Nagasaki and Yufuin. The climate is a bit warmer than Honshu — muggy summers, a clear rainy season in June–July, typhoons to watch from July to September, and mild winters with occasional light snow.",
    culture:
      "Hakata-dialect Japanese is spoken, with multilingual signage in tourist areas. Fukuoka is famous for its yatai (night street stalls, concentrated around Nakasu and Tenjin), as well as tonkotsu ramen, mentaiko, mizutaki and sesame mackerel. Yatai are small, usually cash-only, and have basic etiquette (order a dish or two, do not linger to hold a seat). No tipping.",
    seeAndDo:
      "The yatai of Nakasu and the Naka River night view; Kushida Shrine and the old town of Hakata (home of the Hakata Gion Yamakasa festival); the Tenjin shopping district and underground arcade; Ohori Park and the Fukuoka Castle ruins; Uminonakamichi and Nokonoshima for the sea. Day trips: Dazaifu Tenmangu, a boat ride in Yanagawa, the Yufuin and Beppu hot springs, Kumamoto Castle and Aso.",
    whenAndTips:
      "Spring and autumn (late March to May, October–November) are the most comfortable; Maizuru and Nishi parks are busy at blossom time. During the Yamakasa festival in July the city is lively but rooms are tight. In the typhoon season (July–September) watch flights and ferries. In the yatai high season (especially weekend nights) go early or queue, and mind your belongings.",
  },

  naha: {
    // identity sources: **日本的官方口径**：総務省統計局按「市区町村」逐一发布人口，**没有「市区人口」这个复合概念**
    //   （「市」与「区」在日本是平行的不同层级，「区」特指政令指定都市下辖的行政区或东京 23 区）。
    //   都市圏有两套官方定义：**大都市圏**（1.5% 通勤/通学阈值，官方专名如「東京圏」「近畿大都市圏」
    //   「中京大都市圏」）与**都市圏**（10% 阈值，范围小很多）；**从来没有「都会区」这个词**
    //   （另有学术口径「都市雇用圏」，非官方）。2026-09-08 核。
    //   **发布节奏**：国勢調査每 5 年一次（年份末位 0/5，基准日 10 月 1 日）；**速報集計在普查次年 5 月末前后**
    //   分批公布；**人口等基本集計（确定数）在普查次年 9 月末前后**；住民基本台帳全国汇总每年 7 月。
    //   那霸市 **2025 年国势调查速报 311,073 人**（较 2020 年 317,625 减少 6,552、−2.1%）——
    //   沖縄県企画部統計課《令和 7 年国勢調査速報》PDF 逐行核对（1 级，2026-09-08）。
    //   **同条目 howItWorks 原写「约 313,000」偏高约 2 千，很可能引的是推算值而不是本次速报** —— 已一并改。
    identity:
      "Naha is the capital of Okinawa Prefecture and the central city of the subtropical Nansei island region, with a population of about 311,000 at the 2025 census. It is the gateway to Okinawa, and centres on the Kokusai-dori shopping street, its markets, and historic sites from the Second World War and the Ryukyu Kingdom era; the beaches are mostly around the fringes and on the outer islands.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Naha (Okinawa capital; ~40 km²; ~313,000 2025; Kokusai-dori 1.6 km; Shuri Castle UNESCO 2000, burned 2019; Yui Rail monorail only rail in prefecture; Tomari wharf to Kerama; airport; Okinawa Island ~100 km long; bases mostly outside Naha)
    howItWorks:
      "Naha is the seat of Okinawa Prefecture, a core city of only about 40 km² with about 311,000 people at the 2025 census; the city runs local services, police and schools belong to the prefecture, and Okinawa's US bases lie mostly outside Naha at Ginowan and Kadena. The centre lies around Kokusai-dori, a 1.6 km shopping street as its axis, Shuri Castle on the heights to the east, World Heritage since 2000 and rebuilt after the main hall burned in 2019, the airport at the south-west corner of the city, the Yui Rail monorail running from the airport through the centre to Shuri as the prefecture's only rail line, and boats from Tomari wharf to the Kerama Islands. Newcomers most often go wrong by taking Naha for Okinawa, when the main island runs about 100 km north to south and almost nothing is reached without a car.",
    layout:
      "Naha is in the south of Okinawa's main island, facing the East China Sea. The centre is Kokusai-dori and its surrounding shopping streets and markets (the Makishi Public Market), with Shuri Castle Park on higher ground to the east (the main hall and others are being restored after a 2019 fire). The port connects to the outer islands, and the airport is south-west of the centre.",
    gettingAround:
      "From Naha Airport, the Yui Rail monorail reaches the centre (Kencho-mae, Kokusai-dori) in a little over ten minutes. The monorail is a single line covering only central Naha; for the rest of the main island (the Churaumi Aquarium, the Onna coast, the southern war sites) you almost always need a hire car (driving on the left) or a tour. High-speed boats and ferries serve outer islands such as Zamami and Tokashiki. The climate is subtropical and warm all year, with a rainy season in May–June and a typhoon season from July to October; even winter has mild days around 20°C, though the sea wind is cool.",
    culture:
      "Japanese is spoken, and some older people still speak Okinawan. Okinawa has a history (the Ryukyu Kingdom) and culture separate from Honshu, with its own food (goya chanpuru, sea grapes, Okinawa soba, awamori), music (the sanshin) and architecture (red tiles, stone lion-dogs). Life is slower than on Honshu. No tipping.",
    seeAndDo:
      "Kokusai-dori and the Makishi Market, and the Tsuboya pottery street; Shuri Castle Park and nearby Ryukyu Kingdom sites (Shikinaen, the Tamaudun mausoleum); Naminoue Shrine and Naminoue Beach; the Prefectural Museum and Art Museum for Okinawan history. Farther out: the Peace Memorial Park and war sites in the south (solemn places), the Churaumi Aquarium in the north, the Onna coast, and boat trips to the outer islands for snorkelling.",
    whenAndTips:
      "March–May and October–November have the most settled weather for the outdoors. July–September brings frequent typhoons, which stop flights, ferries and some facilities when they hit, so leave slack in your plans. The summer sun is very strong — use sun protection year-round. Choose licensed operators for water activities and check equipment and insurance; outer-island boat schedules depend heavily on sea conditions.",
  },

  sendai: {
    // identity sources: 2015 年国势调查口径已落后两个周期（2020、2025 均已发布）。总务省《大都市圏・都市圏 全国図》与《人口等基本集計 結果の要約》两份 PDF 都只有圈域名与构成、无人口表；圈域人口需从 e-Stat 『令和２年国勢調査 大都市圏・都市圏 対象市区町村データ』(stat_infid=000032261915) 自行加总。**下一轮若要补这个数，直接去那张表，不必再重走检索。**构成（14 市町村）经宫城县官网核实属实。2026-09-12 核。
    identity:
      "Sendai is the largest city of the Tohoku region and the capital of Miyagi Prefecture, at the centre of the Greater Sendai urban area, the 14 municipalities designated as such by Miyagi Prefecture. Ringed by mountains on three sides and facing the Pacific, its tree-lined centre earns it the name \"City of Trees\"; it is also the hub for Matsushima, Yamadera, the Naruko hot springs and the rest of Tohoku.",
    // howItWorks sources: 「日本一の七夕」为主办方自称，非第三方量化认证，故加「之一」。2026-09-12 核。
    howItWorks:
      "Sendai is the seat of Miyagi Prefecture and the largest city of Tōhoku, a designated city since 1989 with five wards, about 786 km² and about 1.1 million people at the 2025 census, essentially flat over five years; the wards are branches of the city, the city runs local services, and police and schools belong to the prefecture. Date Masamune built his castle on Aobayama in 1600 and the city grew from the castle town, the zelkova avenues of Jōzenji-dōri and Aoba-dōri earning it the name 'City of Trees', the Tanabata festival in August among the largest in Japan, two subway lines crossing the centre, the Shinkansen about an hour and a half to Tokyo, the airport in Natori to the south with a rail link since 2007; Matsushima lies about 25 km north-east, and the tsunami of 2011 flooded the coast of Wakabayashi ward to the east. Newcomers most often go wrong by taking Sendai for an industrial city, when it is a city of universities and commerce, a million people running from the mountains to the sea.",
    layout:
      "Sendai is built on the valley plain cut by the Hirose River, backed by the Ou Mountains and facing the Sendai plain and the Pacific. The centre is west of Sendai Station, and the ruins of Aoba Castle (Sendai Castle) stand on high ground to the west. North-east along the coast is Matsushima Bay; south-west into the hills are the Sakunami and Akiu hot springs; north is Naruko. The 2011 earthquake and tsunami hit the coast hard, and some rebuilt areas now have memorial facilities.",
    gettingAround:
      "Sendai Airport is south-east of the city, about 25 minutes to Sendai Station on the airport line. Sendai is a main stop on the Tohoku Shinkansen: about 1.5 hours to Tokyo, 40 minutes to Morioka. The city has two subway lines plus buses and the Loople Sendai sightseeing bus. The climate is Pacific-side temperate: summers that are not too hot and fairly humid, cold winters with little snow in the city, and comfortable springs and autumns.",
    culture:
      "Standard Japanese with a slight Tohoku accent is spoken, and tourist facilities have full multilingual signage. Local specialities include grilled beef tongue, sasa-kamaboko fish cake and zunda (sweet edamame paste) desserts. The Sendai Tanabata Festival in summer is one of the three great festivals of Tohoku. The pace is easier than Tokyo's. No tipping.",
    seeAndDo:
      "The Aoba Castle site with the equestrian statue of Date Masamune and a city panorama; the Zuihoden (the Date family mausoleum); the Osaki Hachimangu shrine; the trees of Jozenji-dori and the Pageant of Starlight (December). Nearby: the islands of Matsushima Bay and the Zuiganji temple (by sightseeing boat), Yamadera (the Risshakuji, up stone steps) in Yamagata, and the Akiu and Sakunami hot springs. The tsunami memorial sites and museums along the coast (solemn places).",
    whenAndTips:
      "May–June and September–October have the most comfortable weather; the Tanabata Festival in early August is the liveliest but rooms are tight. Winters are cold and mountain roads can ice up. Matsushima boat trips and the Yamadera climb depend on the weather — watch for slippery paths in rain or snow. Be quiet and respectful at the disaster memorial sites.",
  },

  yokohama: {
    // identity sources: 日本 **令和 7 年（2025 年）国勢調査人口速報集計**，普查时点 2025-10-01，由各都道府县公布市区町村数。子代理逐条核对官方 PDF / xls 原表，**级别 1**。
    //   发布节奏：国勢調査每五年一次（年份末位 0/5，时点 10-01）；**人口速報集計**在普查后次年 5 月末左右，**人口等基本集計**在次年 9 月末左右。住民基本台帳人口则由各市按月发布，总务省全国汇总每年 7 月。
    //   横滨市 2025-10-01 = 3,754,840 人，较 2020 年减少 22,651（−0.6%）—— **自 1947 年以来首次减少**。「日本人口最多的市（不含东京 23 区）」这条排名不受影响，仍成立。
    identity:
      "Yokohama is the capital of Kanagawa Prefecture, a port city on Tokyo Bay just south of Tokyo, and Japan's most populous incorporated city (about 3.75 million at the 2025 census) — behind only Tokyo's 23 special wards, which are not a single incorporated city. It opened as a port in the mid-19th century, one of Japan's first cities for foreign trade, and now mixes a Chinatown, Western-era buildings and a modernised port district; many people visit it as a day trip from Tokyo.",
    // howItWorks sources: 日本 **令和 7 年（2025 年）国勢調査人口速報集計**，普查时点 2025-10-01，由各都道府县公布市区町村数。子代理逐条核对官方 PDF / xls 原表，**级别 1**。
    //   发布节奏：国勢調査每五年一次（年份末位 0/5，时点 10-01）；**人口速報集計**在普查后次年 5 月末左右，**人口等基本集計**在次年 9 月末左右。住民基本台帳人口则由各市按月发布，总务省全国汇总每年 7 月。
    //   同上。
    howItWorks:
      "Yokohama is the seat of Kanagawa Prefecture and a designated city of eighteen wards, with about 3.75 million residents at the 2025 census, its first decline since 1947 — the most populous municipality in Japan, since Tokyo's 23 wards are not legally a city. It has two faces: the old port opened in 1859 lies around Kannai and Yamashita, with Chinatown and the former foreign settlement, while Minato Mirai 21 is the new centre built since the 1980s on former shipyards, its Landmark Tower rising by the water. Yokohama is only about 30 minutes from Tokyo, and many residents work in the capital and live in the hillside wards, so it is at once a city and part of the Greater Tokyo Area. Addresses run prefecture, city, ward, district, chōme, block, number, and the municipal subway and Minatomirai line join the port districts. Newcomers most often go wrong by taking Yokohama for a suburb of Tokyo, when it is an independent city larger than any Tokyo ward.",
    layout:
      "Yokohama runs along the western shore of Tokyo Bay. The core is the towers and ferris wheel of Minato Mirai 21 and the waterfront around the Red Brick Warehouses; south are the Western-style old houses of Yamate and the Harbour View Park, with Japan's largest Chinatown below; farther south are Honmoku and Kanazawa Ward. North it quickly joins the Tokyo metropolitan area.",
    gettingAround:
      "From Haneda Airport, an airport bus or train reaches Yokohama Station in about 30 minutes. Trains between Yokohama and Tokyo are frequent (JR, Tokyu, Keikyu), about 30 minutes, with a single Suica or PASMO card. The city has a subway and the Minatomirai Line, and the waterfront is walkable. The climate is almost the same as Tokyo's: muggy summers, clear cold winters with little snow, and plum rains in June.",
    culture:
      "Standard Japanese is spoken, with multilingual signage in the tourist areas. Chinatown is a Chinese community and Yokohama's liveliest dining district. The port area has many museums and galleries. The pace is like Tokyo's but with a more relaxed seaside feel. Restaurants do not expect an extra tip.",
    seeAndDo:
      "Minato Mirai 21: the Landmark Tower observatory, the Cosmo Clock 21 ferris wheel, the Red Brick Warehouses and the waterfront promenade past the car museum; dim sum in Yokohama Chinatown; the Western houses and foreigners' cemetery of Yamate and the Harbour View Park; the Japanese garden of Sankeien; the Sea Paradise amusement park on Hakkeijima (for families).",
    whenAndTips:
      "Spring and autumn (April–May, October–November) are the most comfortable, and the Minato Mirai night view is good all year. The plum rains and high summer are muggy. Chinatown and the Red Brick Warehouses are crowded on weekends and holidays. Yokohama works as a half-day to full-day part of a Tokyo trip, with an easy train ride each way.",
  },

  nagoya: {
    // identity sources: **日本的官方口径**：総務省統計局按「市区町村」逐一发布人口，**没有「市区人口」这个复合概念**
    //   （「市」与「区」在日本是平行的不同层级，「区」特指政令指定都市下辖的行政区或东京 23 区）。
    //   都市圏有两套官方定义：**大都市圏**（1.5% 通勤/通学阈值，官方专名如「東京圏」「近畿大都市圏」
    //   「中京大都市圏」）与**都市圏**（10% 阈值，范围小很多）；**从来没有「都会区」这个词**
    //   （另有学术口径「都市雇用圏」，非官方）。2026-09-08 核。
    //   **发布节奏**：国勢調査每 5 年一次（年份末位 0/5，基准日 10 月 1 日）；**速報集計在普查次年 5 月末前后**
    //   分批公布；**人口等基本集計（确定数）在普查次年 9 月末前后**；住民基本台帳全国汇总每年 7 月。
    //   **中京大都市圏**（総務省 1.5% 通勤圈定义，跨爱知/岐阜/三重）**2020 年国势调查 9,192,193 人**
    //   （2 级转引官方数据，2026-09-08 核；下一轮用 e-Stat 原表核到 1 级）。
    //   **原文 identity 写 900 万、howItWorks 写 1,024 万，同条目两处差 124 万**，后者查无出处。
    //   名古屋市 **2025 年国势调查速报 2,345,892 人**（历史新高，较 2020 年 +13,716、+0.6%）——
    //   名古屋市官网（1 级）；howItWorks 原写「约 230 万」低了约 4.6 万，已一并改。
    identity:
      "Nagoya is the capital of Aichi Prefecture and the central city of Japan's Chubu region, where the Chūkyō Major Metropolitan Area (Statistics Bureau definition, reaching into Gifu and Mie) held about 9.19 million at the 2020 census. It is a manufacturing centre, especially for cars; the city is regular with wide roads, known in itself for Nagoya Castle and its miso-based \"Nagoya food\", and it is also the hub for Shirakawa-go, Takayama, the Tateyama–Kurobe route and Ise.",
    // howItWorks sources: Wikipedia (2026-09): Nagoya (designated city, 16 wards, 326 km²; ~2.3 million 2025; Chūkyō ~10.24 million; Meieki/Sakae)
    howItWorks:
      "Nagoya is the seat of Aichi Prefecture and a designated city of sixteen wards over about 326 km², with about 2.35 million residents at the 2025 census — Japan's fourth-largest city — and the Chūkyō Major Metropolitan Area reaching into Gifu and Mie held about 9.19 million at the 2020 census. The city has two centres: Meieki around Nagoya Station, the hub of the Shinkansen and the towers, and Sakae to the east, the traditional commercial heart, about two kilometres apart. Tokugawa Ieyasu moved the capital of Owari here in 1610, and the castle and its castle town set the grid of the centre. Nagoya is the home ground of Toyota, the most car-dependent of Japan's big cities — locals joke about 'Nagoya driving' — with the municipal subway covering the main corridors. Addresses run prefecture, city, ward, district, chōme, block, number. Newcomers most often go wrong by taking the station district for downtown, when to locals the centre of the city is Sakae.",
    layout:
      "Nagoya is built on the Nobi Plain, flat, with streets on a regular grid. The centre has two hubs, Nagoya Station (\"Meieki\") and Sakae; Nagoya Castle is to the north and the Atsuta Shrine to the south. North lie Gifu, Takayama and Shirakawa-go; east are the Central Alps and the Kiso valley; south is the Chita Peninsula; west are Ise and Toba.",
    gettingAround:
      "Chubu Centrair International Airport is on a man-made island, about 30 minutes to Nagoya Station on the Meitetsu express. Nagoya is a main stop on the Tokaido Shinkansen: about 1.5 hours to Tokyo and to Osaka. The city has several subway lines plus buses; use a manaca or other IC card. The climate is Pacific-side temperate — muggy summers (often hotter than Tokyo) and clear cold winters with little snow in the city.",
    culture:
      "The Nagoya dialect is spoken, with standard Japanese used. Nagoya's food is its own school: miso katsu, miso-simmered udon, hitsumabushi (eel rice three ways), tenmusu, and grilled chicken wings (tebasaki). Locals have a strong sense of local identity. No tipping.",
    seeAndDo:
      "Nagoya Castle (the golden shachihoko, the reconstructed Honmaru Palace); the Atsuta Shrine; the Tokugawa Art Museum and Tokugawa Garden; the arcades and secondhand shops of Osu; the Port of Nagoya Public Aquarium and the JR Central Maglev and Railway Park. From Nagoya: the old streets and Hida beef of Takayama, the gassho-zukuri villages of Shirakawa-go, the Tateyama–Kurobe Alpine Route (open April–November), and the Ise Grand Shrine.",
    whenAndTips:
      "Spring and autumn (March–May, October–November) are the most comfortable. High summer is hot — take heat precautions — and the plum rains are wet. The Shirakawa-go winter light-up (January–February, booking required) is very popular. The Tateyama–Kurobe route runs from mid-April to late November, with the snow corridor at its tallest in April–May; book transport ahead in high season.",
  },

  kanazawa: {
    // identity sources: **日本的官方口径**：総務省統計局按「市区町村」逐一发布人口，**没有「市区人口」这个复合概念**
    //   （「市」与「区」在日本是平行的不同层级，「区」特指政令指定都市下辖的行政区或东京 23 区）。
    //   都市圏有两套官方定义：**大都市圏**（1.5% 通勤/通学阈值，官方专名如「東京圏」「近畿大都市圏」
    //   「中京大都市圏」）与**都市圏**（10% 阈值，范围小很多）；**从来没有「都会区」这个词**
    //   （另有学术口径「都市雇用圏」，非官方）。2026-09-08 核。
    //   **发布节奏**：国勢調査每 5 年一次（年份末位 0/5，基准日 10 月 1 日）；**速報集計在普查次年 5 月末前后**
    //   分批公布；**人口等基本集計（确定数）在普查次年 9 月末前后**；住民基本台帳全国汇总每年 7 月。
    //   金泽市 **2025 年国势调查速报 454,071 人**（较 2020 年 463,254 减少 9,183、−1.98%）——
    //   石川県総務部《令和 7 年国勢調査速報集計結果》PDF 逐行核对（1 级，2026-05-29 改订版，2026-09-08 核）。
    //   **原 identity 写「市区人口约 45 万」（自造口径）、howItWorks 写「约 47 万」（英文维基的估计值 466,000，
    //   是过时推算数）—— 两段本来就打架**，已一并对齐到速报值。
    identity:
      "Kanazawa is the capital of Ishikawa Prefecture, the central city of the Kaga area on the Sea of Japan side, with a city population of about 454,000 at the 2025 census. It was the castle town of the Kaga domain in the Edo period — long wealthy and devoted to crafts (gold leaf, lacquer, Kaga yuzen dyeing, Kutani ware) — and, spared major war damage, it keeps large old quarters and a famous garden, earning it the nickname \"Little Kyoto\".",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Kanazawa (core city; ~469 km²; ~466,000; Ishikawa capital; Maeda/Kaga domain; Kenroku-en; Higashi Chaya/Nagamachi; gold leaf 99% of Japan; Hokuriku Shinkansen 2015 ~2.5 h Tokyo; Komatsu airport ~30 km; buses, no subway)
    howItWorks:
      "Kanazawa is the seat of Ishikawa Prefecture, a core city of about 469 km² with about 454,000 people at the 2025 census; the city runs local services, and police and schools belong to the prefecture. The Maeda clan's Kaga domain made it their castle town in the Edo period, and the division into samurai, merchant and temple quarters survives: Kenroku-en and the castle on the high ground in the centre, Higashi Chaya across the Asano River, the samurai houses of Nagamachi by the Sai River, Omicho market between them, and more than nine-tenths of Japan's gold leaf made here; the Hokuriku Shinkansen opened in 2015 at about two and a half hours from Tokyo, Komatsu airport lies about 30 km south-west, and there is no rail transit in the city, only buses. Newcomers most often go wrong by taking Kanazawa for a smaller Kyoto, when it is a Hokuriku capital never bombed, with its castle-town plan intact.",
    layout:
      "Kanazawa is built on hills and flat ground between the Sai and Asano rivers. The centre is around Kanazawa Castle and Kenrokuen; north across the Asano is the Higashi Chaya district (an old geisha quarter); south-west across the Sai are the Nishi Chaya district and the temples of Teramachi; the Nagamachi area still has samurai residences behind earthen walls. Kanazawa Station is the modern gateway, with a large wooden Tsuzumi Gate.",
    gettingAround:
      "Komatsu Airport is about 30 km south-west of the city, about 40 minutes to Kanazawa Station by airport bus; you can also take the Hokuriku Shinkansen from Tokyo (about 2.5 hours). Kanazawa's sights are compact, walked plus the castle-town loop bus. The climate is Sea-of-Japan side: cloudy, snowy, humid winters (locals say you can forget your lunch but not your umbrella), muggy summers, and comfortable springs and autumns.",
    culture:
      "The Kanazawa dialect is spoken, with standard Japanese used. Kanazawa is known for traditional crafts and for tea-ceremony and wagashi culture, and gold leaf is used on buildings, objects and even food. The food is Kaga cuisine, jibuni, and seafood at the Omicho Market. The pace is unhurried. No tipping.",
    seeAndDo:
      "Kenrokuen (one of the three great gardens of Japan, different in each season, with \"yukitsuri\" snow ropes in winter); Kanazawa Castle Park; the 21st Century Museum of Contemporary Art (the \"swimming pool\" work); the tea-house buildings and gold-leaf shops of the Higashi Chaya district; the samurai residences of Nagamachi; seafood at the Omicho Market; the D.T. Suzuki Museum. From Kanazawa: Shirakawa-go, Gokayama, the Noto Peninsula and the Kaga hot-spring resorts.",
    whenAndTips:
      "April–May and September–November have the best weather. Winters are grey and snowy, so bring an umbrella and waterproof shoes for outdoor plans, though the snow scenery at Kenrokuen is lovely. The plum rains and high summer are muggy. The Omicho Market and Kenrokuen are crowded on weekends — go in the morning.",
  },

  nara: {
    identity:
      "Nara is the capital of Nara Prefecture, about 40 km by road south of Kyoto, and was the capital of Japan (as Heijo-kyo) in the 8th century — earlier than Kyoto. The city is small; several huge old temples and shrines and a large park where wild deer roam are all close together, making Nara the place to feel the Nara period and early Buddhist art.",
    // howItWorks sources: 奈良の鹿愛護会每年 7 月调查：2026-07 = 1,687 头，2025-07 = 1,465 头。会变的量，下一轮（2027 年 7 月之后）回来刷新。2026-09-12 核。
    howItWorks:
      "Nara city is the seat of Nara Prefecture, a core city of about 277 km² with about 338,000 people at the 2025 census; the city runs local services, and police and schools belong to the prefecture. From 710 to 784 this was the Japanese capital of Heijō-kyō, whose palace site lies in the fields to the west, while Tōdai-ji, Kōfuku-ji and Kasuga Shrine stand in Nara Park to the east with about 1,700 deer wandering through it (July 2026 count), the group inscribed as World Heritage in 1998; Kintetsu Nara station lies at the park's edge, JR Nara 1 km west, Kyoto about 45 minutes and Osaka about 40, and most visitors come and go in a day. Newcomers most often go wrong by confusing Nara city with Nara Prefecture, or by expecting Hōryū-ji in the city, when it lies 12 km south-west in the town of Ikaruga.",
    layout:
      "The core of Nara is Nara Park — a broad expanse of grass and woodland holding Todaiji, Kasuga Taisha, Kofukuji, the National Museum and several hundred wild deer, walkable from Kintetsu Nara Station. West of the centre are the Heijo Palace site and the Toshodaiji and Yakushiji temples (Nishi-no-kyo); farther south-west is Horyuji (Ikaruga). The rest of the city is quiet residential streets.",
    gettingAround:
      "Nara has no airport with scheduled flights; people usually arrive from Kansai Airport by limousine bus or train (via Osaka or Kyoto), or from Kyoto or Osaka on the Kintetsu line (about 40 minutes to Kintetsu Nara Station). The central sights are compact, on foot plus buses, and Nishi-no-kyo and Ikaruga are reached by train and a short walk. The climate is that of an inland basin: muggy summers, damp cold winters, and short springs and autumns.",
    culture:
      "Kansai-dialect Japanese is spoken, with multilingual signage at the sights. The deer of Nara Park are treated as protected wild animals: you may feed them the special \"deer crackers\", but do not tease them or give other food, and note that they will butt people for food. Most temples require removing shoes and forbid photography indoors. The pace is even slower than Kyoto's. No tipping.",
    seeAndDo:
      "Todaiji (the Great Buddha Hall and the Vairocana Buddha, the guardian figures at the Nandaimon); Kasuga Taisha (stone lanterns, vermilion corridors); the five-storey pagoda of Kofukuji and the Ashura figure in its treasure hall; the Nara National Museum (the annual autumn Shosoin exhibition); Wakakusayama for sunset; Toshodaiji and Yakushiji at Nishi-no-kyo; Horyuji at Ikaruga (one of the oldest groups of wooden buildings anywhere).",
    whenAndTips:
      "Cherry blossom (early April), fresh green (May) and autumn leaves (late November) are the peak seasons. High summer and the plum rains are uncomfortable. Most people day-trip from Kyoto or Osaka, but an overnight lets you catch Nara Park before the crowds. Take care feeding the deer, and keep valuables and paper bags away (the deer will grab them).",
  },

  hiroshima: {
    // identity sources: 广岛市《第2期広島広域都市圏発展ビジョン》（2024-03）：30 市町（13 市 17 町），2020 年国势调查基准约 242.5 万。**市官网另一页（2026-04）写 34 市町（16 市 18 町）**——两份官方页面的构成数不一致，正文取有人口数附着的那一份并注明版本；下一轮回来看是否统一。2026-09-12 核。
    identity:
      "Hiroshima is the capital of Hiroshima Prefecture and the largest city of the Chugoku region, with about 2.42 million at the 2020 census in the Hiroshima Metropolitan Area (30 municipalities across three prefectures within about 60 km, per the 2024 official plan). It sits on the delta of the Ota River on the Seto Inland Sea; it was destroyed by an atomic bomb in August 1945 and rebuilt, and is now known for its peace memorial sites, the Itsukushima Shrine on Miyajima and the scenery of the Inland Sea.",
    // howItWorks sources: 1949-08-06《广岛和平纪念都市建设法》公布施行；公园用地 1946-11 划入城市规划，1955 年建成（原爆资料馆 1955-08-24 开馆）。2026-09-12 核。
    howItWorks:
      "Hiroshima is the seat of Hiroshima Prefecture and a designated city of eight wards, with about 1.17 million residents at the 2025 census, down about 28,300 in five years. It stands on the delta of the Ōta River, six channels cutting the city into a chain of sandbars; Mōri Terumoto built his castle here in 1589, the atomic bomb of August 1945 destroyed about seventy per cent of its buildings, and the city that followed was rebuilt on the ruins, with the Peace Memorial Park — planned under the 1949 Peace Memorial City Construction Law and completed in 1955 — and the preserved Atomic Bomb Dome at its heart. The Hiroden streetcars, running since 1912 and back in service three days after the bombing, remain the main public transport, and the Astram line climbs to the hillside suburbs to the north. Mazda's headquarters and works stand on the shore to the east, and Miyajima lies within the city's bounds. Addresses run prefecture, city, ward, district, chōme, block, number. Newcomers most often go wrong by assuming Hiroshima is only the Peace Park, when it is a city of over a million rebuilt across a delta.",
    layout:
      "Hiroshima is built on the delta split by the many channels of the Ota River, cut into blocks by water. The centre is around Kamiyacho and Hatchobori; the Peace Memorial Park and the Atomic Bomb Dome are on the Motoyasu River just west of the centre, with Hiroshima Castle to the north. South-west by boat or train is Miyajima (Itsukushima); east along the Inland Sea are Kure, Onomichi and the islands.",
    gettingAround:
      "Hiroshima Airport is about 50 km east of the city, about 45 minutes to Hiroshima Station by limousine bus. Hiroshima is a main stop on the Sanyo Shinkansen: about 1.5 hours to Osaka, an hour to Fukuoka. The city has trams (\"Hiroden\") plus buses and water buses. The climate is Seto Inland Sea style: mild all year with relatively little rain and many clear days, muggy summers and winters that are not very cold.",
    culture:
      "The Hiroshima dialect is spoken, with standard Japanese used. The local speciality is Hiroshima-style okonomiyaki (batter, cabbage and noodles cooked in layers, different from the Osaka style), plus oysters and small Inland Sea fish. Baseball (the Hiroshima Toyo Carp) is very popular locally. The pace is easy. No tipping.",
    seeAndDo:
      "The Peace Memorial Park, the Atomic Bomb Dome (a World Heritage Site) and the Hiroshima Peace Memorial Museum — a solemn place; be quiet and follow the museum's rules. Miyajima: the Itsukushima Shrine (the great torii that \"floats\" at high tide) and Mount Misen, with wild deer on the island; Hiroshima Castle and the Shukkeien garden; farther out, the Yamato Museum at Kure, the hillside old streets of Onomichi, and the Shimanami Kaido island-hopping cycle route.",
    whenAndTips:
      "Spring and autumn (March–May, October–November) are the most comfortable, and the Momijidani valley on Miyajima is lovely in November. The plum rains (June–July) and high summer are muggy. To see the torii, match the tide (walk close at low tide, photograph the \"floating\" effect at high tide) — check that day's tide times before going. Be respectful in word and manner at the peace memorial sites.",
  },

  takamatsu: {
    // identity sources: 日本 **令和 7 年（2025 年）国勢調査人口速報集計**，普查时点 2025-10-01，由各都道府县公布市区町村数。子代理逐条核对官方 PDF / xls 原表，**级别 1**。
    //   发布节奏：国勢調査每五年一次（年份末位 0/5，时点 10-01）；**人口速報集計**在普查后次年 5 月末左右，**人口等基本集計**在次年 9 月末左右。住民基本台帳人口则由各市按月发布，总务省全国汇总每年 7 月。
    //   高松市 2025-10-01 = 407,208 人，较 2020 年（417,496）减少 10,288 人，是香川县内减少最多的市。
    identity:
      "Takamatsu is the capital of Kagawa Prefecture, a city on the north coast of Shikoku on the Seto Inland Sea, with a population of about 407,000 at the 2025 census. It is the sea gateway to Shikoku, known for Ritsurin Garden, Sanuki udon and the Inland Sea islands (the contemporary art of Naoshima and Teshima).",
    // howItWorks sources: 日本 **令和 7 年（2025 年）国勢調査人口速報集計**，普查时点 2025-10-01，由各都道府县公布市区町村数。子代理逐条核对官方 PDF / xls 原表，**级别 1**。
    //   发布节奏：国勢調査每五年一次（年份末位 0/5，时点 10-01）；**人口速報集計**在普查后次年 5 月末左右，**人口等基本集計**在次年 9 月末左右。住民基本台帳人口则由各市按月发布，总务省全国汇总每年 7 月。
    //   同上（英文排名句单独改）。
    howItWorks:
      "Takamatsu is the seat of Kagawa, Japan's smallest prefecture, a core city of about 375 km² with about 407,000 people at the 2025 census, the second-largest city on Shikoku by population, after Matsuyama, though its metropolitan area is Shikoku's largest; the city runs local services, and police and schools belong to the prefecture. The city forms a half-circle facing the Inland Sea, Takamatsu port and the Sunport waterfront its face, the castle's moat filled with seawater, Ritsurin Garden to the south, the little Kotoden trains crossing the town and Yashima to the east; ferries sail from the port to Naoshima, Teshima and Shodoshima, the Seto Ohashi bridge crosses to Honshu from Sakaide 20 km west, and sanuki udon is daily life. Newcomers most often go wrong by counting Naoshima as part of Takamatsu, when it is another town and Takamatsu is only the pier for the islands.",
    layout:
      "Takamatsu is built on a narrow strip of flat land by the Inland Sea, backed by Yashima, the plateau-topped hill that is the city's symbol. The centre is around Takamatsu Station and the Marugamemachi arcade, with Ritsurin Garden to the south. Takamatsu Port has ferries to Naoshima, Shodoshima, Megijima and other islands. West are Marugame and Kotohira (the Kotohiragu shrine); east is Tokushima.",
    gettingAround:
      "Takamatsu Airport is about 15 km south of the city, about 40 minutes to the centre by airport bus. Takamatsu is linked to Honshu by the Seto Ohashi bridge — about an hour to Okayama by JR, then the Shinkansen. The city has buses and the Kotoden (Kotohira Electric Railway). The climate is Seto Inland Sea style: mild all year with little rain and many clear days, muggy summers and mild winters.",
    culture:
      "The Sanuki dialect is spoken, with standard Japanese used. Sanuki udon is the local pride, with many self-service \"noodle workshops\" where you serve your own noodles, add toppings and pay — cheap and quick. Bone-in grilled chicken thigh is a Marugame speciality. The pace is slow. No tipping.",
    seeAndDo:
      "Ritsurin Garden (a large stroll garden of the daimyo, highly rated among Japanese gardens); Yashima for a panorama of the Inland Sea and the Yashimaji temple; the Takamatsu Castle site (Tamamo Park, with a seawater moat); ferries to Naoshima (the Chichu Art Museum, the pumpkin, Benesse House), the Teshima Art Museum and Shodoshima (olives, the Kankakei gorge). The Setouchi Triennale art festival is held around here.",
    whenAndTips:
      "Spring and autumn (March–May, October–November) are the most comfortable. The art-island museums mostly need advance booking and often close on Mondays, and ferry sailings are limited, so check schedules and opening days before planning. Summer is muggy and there is little shade on the islands, so carry water and sun protection.",
  },

  nagasaki: {
    // identity sources: 日本 **令和 7 年（2025 年）国勢調査人口速報集計**，普查时点 2025-10-01，由各都道府县公布市区町村数。子代理逐条核对官方 PDF / xls 原表，**级别 1**。
    //   发布节奏：国勢調査每五年一次（年份末位 0/5，时点 10-01）；**人口速報集計**在普查后次年 5 月末左右，**人口等基本集計**在次年 9 月末左右。住民基本台帳人口则由各市按月发布，总务省全国汇总每年 7 月。
    //   长崎市 2025-10-01 约 381,738 人，较 2020 年（409,118）减少 27,380 人。**长崎县发布的速报 PDF 是扫描图片、抓不到机器可读文本**，这个数字取自第三方汇总并与长崎市官网引用的 2020 年基准 409,118 交叉印证，**级别 2/3**；2026-09-01 住民基本台帳推计人口 378,558 人。建议后续用 e-Stat 或 OCR 补一次一级核实。
    identity:
      "Nagasaki is the capital of Nagasaki Prefecture, a port city at the western end of Kyushu facing the East China Sea, with a population of about 382,000 at the 2025 census. In the Edo period it was Japan's only port open to the outside world (to the Dutch and the Chinese), leaving Dejima, the Chinese quarter and blocks of Western and Chinese architecture built up the hillsides; it was struck by an atomic bomb in August 1945 and also has peace memorial facilities.",
    // howItWorks sources: 日本 **令和 7 年（2025 年）国勢調査人口速報集計**，普查时点 2025-10-01，由各都道府县公布市区町村数。子代理逐条核对官方 PDF / xls 原表，**级别 1**。
    //   发布节奏：国勢調査每五年一次（年份末位 0/5，时点 10-01）；**人口速報集計**在普查后次年 5 月末左右，**人口等基本集計**在次年 9 月末左右。住民基本台帳人口则由各市按月发布，总务省全国汇总每年 7 月。
    //   同上。
    howItWorks:
      "Nagasaki is the seat of Nagasaki Prefecture, a core city of about 406 km² with about 382,000 people at the 2025 census; the city runs local services, and police and schools belong to the prefecture. The city climbs the slopes either side of a long narrow harbour, the trams run on the flat land at the harbour's foot, the centre lies on the east shore, Dejima, Chinatown and Glover Garden to the south, the atomic bomb of 1945 burst over Urakami to the north where the Peace Park stands, Oura church was inscribed as World Heritage in 2018 among the Hidden Christian sites, boats leave the harbour for Gunkanjima and Mount Inasa rises on the west side; the Nishi-Kyushu Shinkansen opened in 2022, and the airport lies about 40 km north-east at Ōmura. Newcomers most often go wrong by picturing Nagasaki as a flat port city, when its houses climb the hillsides and every doorstep opens onto steps.",
    layout:
      "Nagasaki is a classic harbour city, its districts running up the hillsides on both sides of a bay that reaches inland, with stacked houses and many slopes and stone steps. The centre runs from Nagasaki Station to the Hamamachi arcade; Dejima is to its south; the Glover Garden and Oura Church are on the Minamiyamate side on the east of the bay; Mount Inasa is on the west. North is the hypocentre and Peace Park.",
    gettingAround:
      "Nagasaki Airport is built on a man-made island in Omura Bay, about 45 minutes to the city by airport bus. The West Kyushu Shinkansen runs to Nagasaki, changing at Takeo-Onsen, about 1.5 hours to Hakata. In the city, trams are the main transport (a one-day pass is good value), and the hillside neighbourhoods use inclined lifts and a ropeway. The climate is western-Kyushu maritime: mild and rainy all year, muggy summers with typhoons to watch July–September, and winters that are not very cold.",
    culture:
      "The Nagasaki dialect is spoken, with standard Japanese used. Nagasaki's food mixes Chinese, Dutch and Portuguese influences: champon, sara-udon, shippoku cuisine, castella sponge cake and kakuni-manju. The Nagasaki Lantern Festival, a Chinese-style lantern event, is held around the Spring Festival. The pace is easy. No tipping.",
    seeAndDo:
      "The Glover Garden and Oura Church (Western residences of the late Edo period, with harbour views); Dejima (the reconstructed Dutch trading post); the Shinchi Chinatown; the Spectacles Bridge; Mount Inasa for the night view (by ropeway); the Hypocentre Park, the Nagasaki Atomic Bomb Museum and the Peace Park — solemn places; be quiet and follow the rules. Farther out: Gunkanjima (Hashima, by boat, weather-dependent), Unzen and Shimabara.",
    whenAndTips:
      "Spring and autumn (March–May, October–November) are the most comfortable. The plum rains (June–July) are heavy — Nagasaki is one of the wetter cities in Japan, so carry an umbrella. Boats to Gunkanjima are often cancelled at short notice for wind and swell, so have a backup. Be respectful in word and manner at the atomic-bomb sites.",
  },

  // ── Japan batch 2 (2026-09-05) ──
  kobe: {
    // identity sources: 神户 2025 国势调查 1,497,630；川崎 1,561,132 已反超。口径改为「政令指定都市中第七」。2026-09-12 核。
    identity:
      "Kobe is the capital of Hyōgo Prefecture, on the narrow strip between Mount Rokkō and the northern shore of Osaka Bay, with about 1.50 million people at the 2025 census, seventh among Japan's twenty designated cities. Opened to foreign trade in 1868, it was among the first Japanese ports to meet the West, and the Ijinkan (nineteenth-century Western residences) of Kitano, the office buildings of the former foreign settlement and the Nankinmachi Chinatown survive from that era. The Great Hanshin earthquake of 17 January 1995 (magnitude 6.9) killed about 6,434 people and wrecked the port, which remains one of Japan's main container ports. Kobe beef, Arima Onsen and the night view from Rokkō are its bywords; the Akashi Kaikyō Bridge, the world's second-longest suspension span, lies west of the city.",
    // howItWorks sources: 同一个 2015 年数字在本库住了三处（osaka-city 两段 + kobe 一段），本轮一并删。2026-09-12 核。
    howItWorks:
      "Kobe is the seat of Hyōgo Prefecture and, since 1956, a designated city of nine wards, with about 1.50 million residents at the 2025 census. Wedged between Mount Rokkō and Osaka Bay, it is long from east to west and narrow from north to south: Sannomiya is the commuter hub and centre, with Motomachi and the former foreign settlement to its west, Port Island and Rokkō Island reach out into the bay, and the rebuilding after the 1995 earthquake shaped today's port district. Kobe lies about 35 km, or 30 minutes by train, from Osaka, and Hanshin commuting folds it into the Kinki Major Metropolitan Area (Statistics Bureau definition). Addresses run prefecture, city, ward, district, chōme, block, number, and locals take their bearings from 'the hill side' and 'the sea side'. Newcomers most often go wrong by taking Kobe for Osaka's port, when it is a city with a centre of its own stretching tens of kilometres along the coast.",
    layout:
      "The city runs east–west between the foot of Rokkō and the shore: Sannomiya is the transport and commercial hub, the Kitano Ijinkan stand on the slope north of it, the former settlement, Motomachi and Nankinmachi lie south-west, and Meriken Park and the Port Tower are on the waterfront. Port Island and Rokkō Island are artificial islands in the bay, with Kobe Airport at the southern tip of Port Island. Mount Rokkō rises north of the city, reached by cable car, with Arima Onsen on its northern foot. The Suma and Maiko shores and the Akashi Kaikyō Bridge lie west, and Nada is the sake-brewing district.",
    // gettingAround sources: 2025-04-18 起为国际包机（韩/中/台 4 家航司、每周 40 往返）；定期国际航线目标约 2030 年。下一轮回来看是否已转为定期。2026-09-12 核。
    gettingAround:
      "Kobe Airport (UKB), on the artificial island at the tip of Port Island, is 18 minutes from Sannomiya by the Port Liner, mostly serving domestic routes with international charter flights since April 2025 (scheduled international service is planned for around 2030); Kansai International (KIX) lies about 70 km across the bay with direct buses and a high-speed ferry. The Shinkansen stops at Shin-Kobe north of Sannomiya, and Osaka is about 30 minutes from Sannomiya by JR, Hankyu or Hanshin trains. The city has a subway, JR and private lines and the Port Liner, and central Sannomiya is walkable; take the cable car up Rokkō and a train or bus to Arima. The climate is humid temperate with hot summers, mild winters and cool air on Rokkō.",
    culture:
      "Japanese is universal, with plenty of English signage. The Ijinkan are historic houses with paid entry — remove shoes where indicated; the public baths of Arima follow onsen etiquette (wash first, no swimwear, check the tattoo policy). Buy Kobe beef from reputable restaurants — it is expensive. Nankinmachi is a snack street where eating while walking is accepted. The port night view is seen from Rokkō, the Port Tower and Mount Maya. No tipping in restaurants.",
    seeAndDo:
      "The Kitano Ijinkan (the Weathercock House, the Moegi House); the former foreign settlement and the Motomachi arcade; Nankinmachi; Meriken Park, the Port Tower and the maritime museum; Mount Rokkō (cable car, viewpoints, the farm); Arima Onsen (the gold and silver springs); the sake breweries of Nada; the Suma shore and the Maiko marine promenade beneath the Akashi Kaikyō Bridge; Kobe beef teppanyaki.",
    whenAndTips:
      "March–May and October–November are most comfortable, with Rokkō's foliage in November; summers are humid. A day for the city, a day for Rokkō and Arima. Kobe sits in Kansai with Osaka and Kyoto and makes an easy day trip. The Kobe Luminarie commemorates the earthquake and is a solemn illumination event, held in January in recent years.",
  },
  himeji: {
    identity:
      "Himeji lies on the Harima plain in western Hyōgo Prefecture, with about 518,000 people (2025), and is known for Himeji Castle — the keep completed in 1609 is the most complete and largest surviving castle complex in Japan, inscribed as a World Heritage site in 1993 among Japan's first, and called the 'White Heron Castle' for its white plaster walls. Wartime bombing burned most of the city, but the castle survived intact. Kōko-en beside it is a reconstructed daimyō garden, and Engyō-ji on Mount Shosha north-west of the city is a Tendai temple with a thousand years of history, used as a location for 'The Last Samurai'.",
    // howItWorks sources: **日本的官方口径**：総務省統計局按「市区町村」逐一发布人口，**没有「市区人口」这个复合概念**
    //   （「市」与「区」在日本是平行的不同层级，「区」特指政令指定都市下辖的行政区或东京 23 区）。
    //   都市圏有两套官方定义：**大都市圏**（1.5% 通勤/通学阈值，官方专名如「東京圏」「近畿大都市圏」
    //   「中京大都市圏」）与**都市圏**（10% 阈值，范围小很多）；**从来没有「都会区」这个词**
    //   （另有学术口径「都市雇用圏」，非官方）。2026-09-08 核。
    //   **发布节奏**：国勢調査每 5 年一次（年份末位 0/5，基准日 10 月 1 日）；**速報集計在普查次年 5 月末前后**
    //   分批公布；**人口等基本集計（确定数）在普查次年 9 月末前后**；住民基本台帳全国汇总每年 7 月。
    //   姫路市 **2025 年国势调查速报 518,311 人**（较 2020 年 530,495 减少 12,184、−2.3%）——
    //   姫路市官网（1 级，2026-09-08 核）。identity 已标注「约 51.8 万（2025 年）」，howItWorks 的「约 52 万」
    //   是合理取整，两段一致，本轮无需改动。
    howItWorks:
      "Himeji is a core city of Hyōgo Prefecture, not its seat — that is Kobe — covering about 534 km² with about 518,000 people at the 2025 census as the centre of the Harima region; the city runs local services, and police and schools belong to the prefecture. Himeji Castle stands at the end of the avenue 1 km north of the station, World Heritage since 1993 and the best-preserved castle in Japan, with Kōko-en beside it and Engyō-ji on Mount Shosha to the north-west; the Shinkansen reaches Osaka and Kyoto in about an hour, there is no airport with scheduled flights, Kobe or Kansai serving, the coast to the south is a belt of steel and chemical works, and the Ieshima islands lie within the city. Newcomers most often go wrong by taking Himeji for a small castle town, when it is an industrial and commercial city of half a million, and the castle one corner north of the station.",
    layout:
      "The castle stands due north of the centre: from JR Himeji Station walk about 1 km north up Ōtemae-dōri, the boulevard lined with the city's shops, to reach it. Kōko-en lies on the castle's west side and the city art museum to its east. Mount Shosha is about 8 km north-west, reached by bus to the foot and a ropeway to the top. Himeji port has boats to the Ieshima islands and Shōdoshima. Kobe lies about 55 km east and Okayama about 90 km west.",
    gettingAround:
      "Himeji has no airport with scheduled flights; the nearest are Kobe (about 66 km) and Kansai International (about 127 km). The San'yō Shinkansen stops at Himeji: Osaka about 30 minutes, Kyoto about 45, Okayama about 20; local JR and San'yō Electric trains reach Kobe in about 40 minutes. The castle is a walk from the station; the Shinki bus to Mount Shosha takes about 30 minutes. The climate is humid temperate with a mean of about 15.6°C, hot summers and cool winters.",
    culture:
      "Japanese is universal, and the castle has English-speaking volunteer guides. Shoes come off inside the keep and are carried in a bag; the stairs are steep and the floors wooden, so wear easy footwear. In peak periods (cherry blossom, holiday weeks) entry to the keep may be limited by numbered tickets. Engyō-ji is a working monastery — keep quiet in the halls. Local dishes include conger-eel rice and Himeji oden with ginger soy sauce. No tipping in restaurants.",
    seeAndDo:
      "Himeji Castle (the keep, the Nishinomaru corridor, the moat in cherry-blossom season); Kōko-en; Engyō-ji on Mount Shosha (the Maniden and the three halls); the city art museum and the prefectural history museum; Ōtemae-dōri and the arcades; a day on the Ieshima islands; Taiyo Park (replica monuments); the Himeji Yukata Festival in August.",
    whenAndTips:
      "Early April, with cherry blossom against the white castle, is the peak season and the most crowded; November brings autumn colour. Half a day for the castle and Kōko-en, half a day for Engyō-ji. A day trip from Osaka, Kyoto or Kobe is the usual pattern — the easiest World Heritage site to fit into a Kansai itinerary.",
  },
  takayama: {
    // identity sources: 日本 **令和 7 年（2025 年）国勢調査人口速報集計**，普查时点 2025-10-01，由各都道府县公布市区町村数。子代理逐条核对官方 PDF / xls 原表，**级别 1**。
    //   发布节奏：国勢調査每五年一次（年份末位 0/5，时点 10-01）；**人口速報集計**在普查后次年 5 月末左右，**人口等基本集計**在次年 9 月末左右。住民基本台帳人口则由各市按月发布，总务省全国汇总每年 7 月。
    //   **这条标着「2025 年」的数字是错的**：岐阜县官方 2025 年国勢調査速報值逐行核对为 **79,355 人**（较 2020 年 84,419 减少 5,064，−6.0%）。原文的 8.2 万很可能引的是高山市自己的**人口ビジョン（人口展望/推算文件）里对 2025 年的预测值**，不是普查实测。
    //   **把推算值当成实测值、还标上普查年份，是这一批里最需要警惕的错法。**
    identity:
      "Takayama lies in the Hida highlands of northern Gifu Prefecture, with about 79,000 people at the 2025 census across 2,178 km² — the largest city in Japan by area. Under the Tokugawa shogunate it was the centre of the directly governed Hida region, and the Sanmachi Suji old town keeps whole streets of Edo-period merchant houses, while the Takayama Jinya is the only surviving shogunate provincial administrative office. The spring and autumn Takayama Festivals (the Sannō Festival on 14–15 April and the Hachiman Festival on 9–10 October) are famous for their ornate floats and rank among Japan's most beautiful festivals. It is the gateway to the World Heritage village of Shirakawa-gō, Hida beef is the local speciality, and more than 3 m of snow falls each year.",
    // howItWorks sources: 松本市官网：上高地「全域が松本市に属している」。奥穗高岳、乘鞍岳剑之峰的山顶在长野（松本市）／岐阜（高山市）主稜线交界。2026-09-12 核，级别 1。
    howItWorks:
      "Takayama is a city of Gifu Prefecture which, since merging the surrounding towns and villages in 2005, covers about 2,178 km², the largest city in Japan by area and bigger than Tokyo, yet with only about 79,000 people at the 2025 census; the city runs local services, and police and schools belong to the prefecture. The town lies in a basin at about 570 m, the old streets of Sanmachi and the morning markets its centre, the spring and autumn Takayama festivals its holidays and Hida beef its taste; the city's territory runs east into the Northern Alps, with the summits of Okuhotaka (3,190 m) and Norikura on the boundary between Takayama and Matsumoto, while Kamikōchi lies wholly on the Matsumoto side, Shirakawa-go to the north-west about 50 minutes by bus, the JR Takayama Line about two and a half hours to Nagoya, no airport with scheduled flights, and winter snow of more than 5 m. Newcomers most often go wrong by taking Takayama for a small old-street town, when its territory is a whole mountain range and the old streets are a few blocks in the basin.",
    layout:
      "The town sits in a small basin on the Miyagawa River, with JR Takayama Station on the west side; across the river are the Sanmachi Suji old town and the Takayama Jinya, and the morning markets are held daily along the river and in front of the Jinya. Sakurayama Hachiman Shrine, with the festival float hall, lies north of the centre, and the Hida Folk Village on the slopes to the south-west. Shirakawa-gō is about 50 km north-west, the Okuhida hot-spring villages and the Shinhotaka Ropeway about 50 km east at the foot of the Northern Alps, and Gero Onsen about 50 km south.",
    gettingAround:
      "Takayama has no airport with scheduled flights; from Nagoya's Chubu Centrair the Hida limited express via Nagoya takes about 2.5 hours, and from Toyama about 1.5. Highway buses take about 2.5 hours from Nagoya or Matsumoto and about 2 from Kanazawa; Nohi buses link Takayama and Shirakawa-gō in about 50 minutes (reserve in peak season). The town is walkable, with the old town about 10 minutes from the station; take a bus to the Hida Folk Village. The climate is inland mountain, with cold snowy winters and cool summers.",
    culture:
      "Japanese is universal, with plenty of English signage. Many old-town houses are working shops and homes — ask before entering courtyards; festival lodging sells out a year ahead, and spectators stay behind the lines during float processions. Morning-market stalls sell mountain vegetables, pickles and crafts, mostly run by local farmers. Hida beef comes as sushi, skewers or steak; Takayama ramen and hōba miso are local dishes. No tipping in restaurants. Onsen etiquette is the same as elsewhere in Japan.",
    seeAndDo:
      "The Sanmachi Suji old town (Kami-Sannomachi, the sake breweries and townhouse cafés); the Miyagawa and Jinya-mae morning markets; the Takayama Jinya; Sakurayama Hachiman Shrine and the festival float hall; the Hida Folk Village (an open-air museum of gasshō and farmhouses); a day at Shirakawa-gō (the Ogimachi viewpoint); the Shinhotaka Ropeway into the Northern Alps; Okuhida or Gero hot springs; the festivals in April and October.",
    whenAndTips:
      "Mid-April and early October festivals are the liveliest but rooms are scarce; May–June greenery and October–November foliage are most comfortable; winter brings snow scenes and the Shirakawa-gō illuminations (January–February, reservation required). A day for the town, half a day to a day for Shirakawa-gō. Combine with Kanazawa and Matsumoto on a central-mountains route.",
  },
  matsumoto: {
    // identity sources: 日本 **令和 7 年（2025 年）国勢調査人口速報集計**，普查时点 2025-10-01，由各都道府县公布市区町村数。子代理逐条核对官方 PDF / xls 原表，**级别 1**。
    //   发布节奏：国勢調査每五年一次（年份末位 0/5，时点 10-01）；**人口速報集計**在普查后次年 5 月末左右，**人口等基本集計**在次年 9 月末左右。住民基本台帳人口则由各市按月发布，总务省全国汇总每年 7 月。
    //   同高山：**标着「2025 年」的数字与实测对不上**。长野县官方附表逐行核对为 **232,347 人**（较 2020 年 241,145 减少 8,798，−3.65%）。原文的 23.6 万大概率也是推算/展望值。
    identity:
      "Matsumoto lies in the Matsumoto basin of central Nagano Prefecture at about 610 m, with about 232,000 people at the 2025 census, and is the gateway to the Japanese Alps. Matsumoto Castle, built in the late sixteenth century, is one of only five castle keeps designated National Treasures, called the 'Crow Castle' for its black walls; the former Kaichi School (1876) is one of Japan's first modern primary schools and also a National Treasure. Kamikōchi, the highland valley at the foot of the Northern Alps, is about 1.5 hours away; the artist Yayoi Kusama was born here and the city art museum has a permanent display of her work. The storehouse street of Nakamachi and the Daio wasabi farm in Azumino are popular stops.",
    // howItWorks sources: 日本 **令和 7 年（2025 年）国勢調査人口速報集計**，普查时点 2025-10-01，由各都道府县公布市区町村数。子代理逐条核对官方 PDF / xls 原表，**级别 1**。
    //   发布节奏：国勢調査每五年一次（年份末位 0/5，时点 10-01）；**人口速報集計**在普查后次年 5 月末左右，**人口等基本集計**在次年 9 月末左右。住民基本台帳人口则由各市按月发布，总务省全国汇总每年 7 月。
    //   同上。
    howItWorks:
      "Matsumoto is the second city of Nagano Prefecture, a core city since 2021 covering about 978 km² with about 232,000 people at the 2025 census, the prefectural seat lying 75 km north at Nagano city; the city runs local services, and police and schools belong to the prefecture. The city sits in the Matsumoto basin at about 590 m, the black keep of Matsumoto Castle a national treasure, the old streets of Nakamachi and Nawate south of the castle, Shinshu University in town, and the Suzuki Method of music teaching spread from here; buses to Kamikōchi and Norikura leave from Shin-Shimashima, the Utsukushigahara highland lies to the east, the Azusa limited express reaches Shinjuku in about two and a half hours, and the airport lies south-west of town. Newcomers most often go wrong by taking Matsumoto for an outlying district of Nagano, when it is an independent city with a castle, a university and an airport of its own, and the gate to the Alps is here, not at Nagano.",
    layout:
      "The city sits either side of the Metoba River, with JR Matsumoto Station on the west and the castle about 15 minutes' walk east; Nakamachi and Nawate streets lie along the river between them, and the city art museum is in the south-east. The Kaichi School stands north of the castle. Azumino (the Daio wasabi farm) is about 14 km in a straight line north; Kamikōchi lies in the mountains to the west, reached by train to Shin-Shimashima and then bus; the Utsukushigahara highland rises to the east, with Norikura highland and Shirahone Onsen to the south-west. The airport is about 9 km south-west.",
    gettingAround:
      "Matsumoto Airport (MMJ), about 9 km south-west of the centre at 657 m, is the highest commercial airport in Japan, with very few scheduled routes. The Azusa limited express from Shinjuku in Tokyo takes about 2.5 hours, the Shinano from Nagoya about 2 and Nagano about 1; highway buses from Shinjuku take about 3.5 hours. The city is covered on foot and by the town bus; for Kamikōchi take the Matsumoto Electric Railway to Shin-Shimashima and change to a bus (private cars are banned all year; open mid-April to mid-November). The climate is inland, with cool summers and cold winters with little snow.",
    culture:
      "Japanese is universal. Shoes come off in the castle keep, the stairs are extremely steep and queues are long in peak season; projection shows light the castle at night. Kamikōchi is a special protection zone of the national park — keep to the trails, do not feed the monkeys or other wildlife, and carry out all rubbish. Matsumoto cherishes its 'three gaku' — mountains, music and learning — and hosts the Seiji Ozawa Matsumoto Festival each summer. Shinshu soba, sanzoku-yaki chicken and wasabi dishes are the local tastes. No tipping in restaurants.",
    seeAndDo:
      "Matsumoto Castle (the keep, the night illuminations); Nakamachi and Nawate streets; the former Kaichi School; the city art museum (Yayoi Kusama); Kamikōchi (Kappa Bridge, Taishō Pond, Myōjin Pond — a day); the Daio wasabi farm; the Utsukushigahara highland; Norikura highland and Shirahone Onsen; Asama Onsen.",
    whenAndTips:
      "Kamikōchi is open from mid-April to mid-November, at its best in May–June greenery and October foliage; winter brings snow on the castle but Kamikōchi is closed. A day for Matsumoto, a day for Kamikōchi. A stop on the route across central Japan from Tokyo to Takayama and Kanazawa.",
  },
  hakodate: {
    // identity sources: 日本 **令和 7 年（2025 年）国勢調査人口速報集計**，普查时点 2025-10-01，由各都道府县公布市区町村数。子代理逐条核对官方 PDF / xls 原表，**级别 1**。
    //   发布节奏：国勢調査每五年一次（年份末位 0/5，时点 10-01）；**人口速報集計**在普查后次年 5 月末左右，**人口等基本集計**在次年 9 月末左右。住民基本台帳人口则由各市按月发布，总务省全国汇总每年 7 月。
    //   函馆市 2025-10-01 = 230,498 人，较 2020 年（251,084）减少 20,586 人，是北海道内减少人数第二多的市（仅次于旭川）。
    identity:
      "Hakodate lies on the Oshima peninsula at the southern tip of Hokkaido, with about 230,000 people at the 2025 census, and was among the first Japanese ports opened to foreign trade after the 1854 Convention of Kanagawa (formally opened in 1859). The churches, consulates and Western houses on the slopes of Motomachi, the Kanemori red-brick warehouses and the Western-style star fort of Goryōkaku (1864) are the legacy of that era. The night view from Mount Hakodate (334 m) is among the most famous in Japan. The morning market is known for seafood — squid, sea urchin, crab — and the Hokkaido Shinkansen reached Shin-Hakodate-Hokuto in 2016.",
    // howItWorks sources: 日本 **令和 7 年（2025 年）国勢調査人口速報集計**，普查时点 2025-10-01，由各都道府县公布市区町村数。子代理逐条核对官方 PDF / xls 原表，**级别 1**。
    //   发布节奏：国勢調査每五年一次（年份末位 0/5，时点 10-01）；**人口速報集計**在普查后次年 5 月末左右，**人口等基本集計**在次年 9 月末左右。住民基本台帳人口则由各市按月发布，总务省全国汇总每年 7 月。
    //   同上。
    howItWorks:
      "Hakodate is a core city at the southern tip of Hokkaido and the seat of the Oshima subprefecture, covering about 678 km² with about 230,000 people at the 2025 census; the city runs local services, and police and schools belong to the prefecture. The city stands on a sandbar joining Mount Hakodate to the mainland, opened in 1859 as one of the first treaty ports, the churches and slopes of Motomachi and the red-brick warehouses on the west side below the mountain, the morning market beside the station, the star-shaped fort of Goryōkaku to the north, the trams stringing them along the bar and the night view from Mount Hakodate at the western end; the Hokkaido Shinkansen opened in 2016 but its station lies about 18 km north at Shin-Hakodate-Hokuto, the airport lies to the east and a ferry crosses to Aomori. Newcomers most often go wrong by assuming the Shinkansen runs into Hakodate itself, when stepping off means another twenty minutes on a connecting train.",
    // layout sources: JR 函館本線 函館—新函館北斗 営業キロ 17.9 km；条目内 howItWorks 原本就写 18 公里，本次把 layout 与英文侧统一。2026-09-12 核。
    layout:
      "The city sits on a sandbar joining Mount Hakodate to the mainland, with sea on both sides: JR Hakodate Station and the morning market are in the middle of the bar, Motomachi and the Kanemori warehouses (the bay area) lie south-west towards the mountain, and Goryōkaku is about 4 km north-east. Yunokawa Onsen is on the shore to the east, with the airport beyond it. Shin-Hakodate-Hokuto Station is about 18 km north of the city. Ōnuma Quasi-National Park lies about 30 km north and the Trappistine convent east of the city.",
    gettingAround:
      "Hakodate Airport (HKD), about 8 km east of the station, has scheduled domestic and international flights, with an airport bus of about 20 minutes to the station. The Hokkaido Shinkansen reaches Shin-Hakodate-Hokuto (about 4 hours from Tokyo), with the Hakodate Liner taking about 20 minutes on to Hakodate Station; the Hokuto limited express to Sapporo takes about 3.5 hours. Trams link the station with Motomachi, the bay area and Goryōkaku; the Mount Hakodate ropeway leaves from near Motomachi (sometimes suspended by wind in winter, when buses run). The climate is humid subarctic with cold snowy winters and cool foggy summers.",
    culture:
      "Japanese is universal. Keep quiet inside the Motomachi churches (Orthodox and Catholic), some of which charge entry; Goryōkaku is a historic park that fills in cherry-blossom season (early May). At the morning market you can pick seafood for a 'katte-don' rice bowl; haggling is unusual. Yunokawa's baths look out to sea and follow onsen etiquette. Hakodate shio ramen, squid 'sōmen' and Lucky Pierrot burgers are local tastes. No tipping in restaurants.",
    seeAndDo:
      "The Mount Hakodate night view (ropeway; go up before sunset); the Motomachi slopes, the churches and the old Public Hall; the Kanemori warehouses and bay area; the morning market; Goryōkaku park and tower; Yunokawa Onsen and the hot-spring monkeys at the tropical garden (winter); the Trappistine convent; Ōnuma park (cycling, boating); Cape Tachimachi.",
    whenAndTips:
      "Early May brings Goryōkaku's cherry blossom, June–September is the cool peak season, and December–February offers snow scenes and winter illuminations; the night view is clearest in winter but bitterly cold. A day and a half for the city, half a day for Ōnuma. Reached the same day from Sapporo or Tokyo by Shinkansen, and often linked with Sapporo and Noboribetsu.",
  },
  kumamoto: {
    identity:
      "Kumamoto is the capital of Kumamoto Prefecture, on the Kumamoto plain in central Kyushu, with about 738,000 people (2025). Kumamoto Castle, completed in 1607 by Katō Kiyomasa, is counted among Japan's three great castles, famous for its steep 'musha-gaeshi' stone walls; the two strong earthquakes of 14 and 16 April 2016 (up to magnitude 7.1) badly damaged it — the keep reopened in 2021 and restoration of the walls and other buildings continues. Suizenji Jōjuen is an Edo-period stroll garden of the Hosokawa lords, Mount Aso — one of the world's largest calderas — lies about 40 km east, and Kumamon is the prefecture's mascot.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Kumamoto (designated city 2012, 5 wards; ~390 km²; ~738,000 2025; prefecture capital; castle damaged 2016 earthquake, under restoration; Suizenji; trams; Shimotori/Kamitori arcades; groundwater city; Aso ~40 km; Kyushu Shinkansen; airport ~20 km; TSMC at Kikuyō 2024)
    howItWorks:
      "Kumamoto is the seat of Kumamoto Prefecture, a designated city since 2012 with five wards, about 390 km² and about 738,000 people in 2025; the wards are branches of the city, the city runs local services, and police and schools belong to the prefecture. Kumamoto Castle stands on the high ground in the centre, still under repair after the earthquake of 2016, the arcades of Shimotori and Kamitori south of the castle are the commercial centre, Suizenji garden lies to the east, trams cross the town, and the whole city's tap water comes from groundwater; Mount Aso lies about 40 km east, the Kyushu Shinkansen station west of the centre, the airport about 20 km east, and TSMC's plant began production at Kikuyō in the eastern suburbs in 2024. Newcomers most often go wrong by taking Kumamoto for a stop on the way to Aso, when it is a prefectural capital of 738,000 with the castle and the arcades as a centre of its own.",
    layout:
      "The castle stands on high ground on the north side of the centre; below it the Sakura-no-baba Jōsaien is the food and souvenir quarter, and the Tōrichōsuji and Shimotōri arcades south of the castle form the city centre, crossed by trams. Suizenji Jōjuen lies about 3 km south-east on the tram line. JR Kumamoto Station, also the Shinkansen stop, is about 2 km south-west of the centre. Mount Aso lies east — about 1.5 hours by the JR Hōhi line to Aso Station then bus; the airport is about 20 km east at Mashiki, and the Amakusa islands about 2 hours south-west.",
    gettingAround:
      "Kumamoto Airport (KMJ, Aso Kumamoto Airport) is about 20 km from the centre, about 50 minutes by airport bus, with scheduled domestic and international flights. The Kyushu Shinkansen puts Hakata about 35 minutes and Kagoshima-Chūō about 45 minutes from Kumamoto Station. Trams cover the station, the centre, the castle and Suizenji, so walking plus trams suffices; Aso needs JR or a car, Amakusa a bus or car. The climate is humid subtropical with hot rainy summers and mild winters.",
    culture:
      "Japanese is universal. The earthquake restoration zones of the castle are fenced, with a dedicated viewing route — follow it; the keep displays the damage and repair. The Nakadake crater on Aso closes at short notice when gas levels rise — check before setting out, and people with asthma or respiratory conditions should stay away from the crater. Kumamoto specialities include horse sashimi, karashi-renkon (mustard lotus root), Kumamoto ramen and hitomoji leeks. No tipping in restaurants.",
    seeAndDo:
      "Kumamoto Castle (the keep, the special viewing route, the walls from Katō Shrine); Sakura-no-baba Jōsaien; Suizenji Jōjuen; the Shimotōri and Kamitōri arcades; the prefectural art museum; Mount Aso (the Nakadake crater, Kusasenri — a day); Kurokawa Onsen north of Aso; dolphin watching and the Catholic churches of Amakusa; the Yachiyoza theatre in Yamaga.",
    whenAndTips:
      "March–April for the castle's cherry blossom and October–November for comfort; summers are hot and June–July is the rainy season. A day for the city, a day for Aso. Kumamoto sits on the Kyushu Shinkansen, a day's reach from Fukuoka and Kagoshima.",
  },
  kagoshima: {
    // identity sources: 日本 **令和 7 年（2025 年）国勢調査人口速報集計**，普查时点 2025-10-01，由各都道府县公布市区町村数。子代理逐条核对官方 PDF / xls 原表，**级别 1**。
    //   发布节奏：国勢調査每五年一次（年份末位 0/5，时点 10-01）；**人口速報集計**在普查后次年 5 月末左右，**人口等基本集計**在次年 9 月末左右。住民基本台帳人口则由各市按月发布，总务省全国汇总每年 7 月。
    //   鹿儿岛市 2025-10-01 = 580,970 人，较 2020 年（593,128）减少 12,158（−2.05%）。
    identity:
      "Kagoshima lies on the western shore of Kinkō Bay at the southern tip of Kyushu, with about 581,000 people at the 2025 census, and 4 km across the water stands Sakurajima, a volcano still active today — ash regularly falls on the city, and residents keep special 'ash bags'. This was the domain of the Shimazu lords of Satsuma, whose late-Edo reforms helped drive the Meiji Restoration; Sengan-en, the Shimazu villa, and the former Shūseikan works beside it form part of the 'Sites of Japan's Meiji Industrial Revolution' inscribed by UNESCO in 2015. Kagoshima is the port for Yakushima and Tanegashima, Ibusuki to the south is famous for its sand baths, and black pork, shōchū and 'shirokuma' shaved ice are local specialities.",
    // howItWorks sources: 直线 27.5 公里、方位东北；两段统一为「东北约 30 公里」。
    howItWorks:
      "Kagoshima is the seat of Kagoshima Prefecture, a core city of about 547 km² with about 581,000 people at the 2025 census; the city runs local services, and police and schools belong to the prefecture. The city faces Kinkō Bay with the volcano Sakurajima 4 km across the water, part of Kagoshima city itself since the merger of 2004, a ferry every 15 minutes, volcanic ash daily life and schoolchildren in helmets; the Tenmonkan arcade is the centre, trams cross the town, Sengan-en lies on the shore to the north, and the history of the Satsuma domain and Saigō Takamori is everywhere in town; the Kyushu Shinkansen ends at Kagoshima-Chūō in the centre, the airport lies about 30 km north-east at Kirishima, and ferries sail to Yakushima. Newcomers most often go wrong by taking Sakurajima for another town across the bay, when it is part of Kagoshima city, and its ash part of the city too.",
    layout:
      "The city occupies the flat shore of the bay, with Kagoshima-Chūō Station on the west, the Tenmonkan shopping district in the centre and trams linking the two; Shiroyama rises north of the centre with a lookout facing Sakurajima. The Sakurajima ferry leaves from the shore at the north end of the city, a 15-minute crossing; Sengan-en lies on the coast about 5 km north. Ibusuki is about 50 km south, the Kirishima hot springs and the airport about 30 km north-east, and the jetfoil to Yakushima leaves from the south pier.",
    gettingAround:
      "Kagoshima Airport (KOJ) at Kirishima is about 30 km from Kagoshima-Chūō, about 40 minutes by airport bus, with flights to Tokyo Haneda (one of Japan's busiest routes), Osaka and Nagoya and to Seoul and Taipei. The Kyushu Shinkansen puts Hakata about 1 hour 20 minutes from Kagoshima-Chūō. Trams and the City View sightseeing bus link the station, Tenmonkan, Shiroyama and Sengan-en; the Sakurajima ferry runs around the clock; the JR Ibusuki-Makurazaki line reaches Ibusuki in about 1 hour and the jetfoil Yakushima in about 2. The climate is humid subtropical with hot wet summers, mild winters and ashfall when Sakurajima erupts.",
    culture:
      "Japanese is universal, with a distinctive local dialect. Sakurajima is an active volcano — stay within the open areas and follow instructions when the alert level rises; wear a mask and protect your eyes in ashfall. Sengan-en is Shimazu family property with a shrine inside — keep quiet. At the Ibusuki sand baths you lie in a yukata and are buried in hot sand, timed by the staff. Black-pork shabu-shabu, satsuma-age fish cakes, Kagoshima ramen and shōchū are the local tastes. No tipping in restaurants.",
    seeAndDo:
      "Sengan-en and the former Shūseikan (World Heritage); Sakurajima (the ferry, the Yunohira lookout, the foot bath, the lava trail); sunset over Sakurajima from the Shiroyama lookout; Tenmonkan and the area around Kagoshima-Chūō; the Museum of the Meiji Restoration; the Ibusuki sand baths and Mount Kaimon; Kirishima Shrine and hot springs; Yakushima (a day trip or an overnight); shirokuma shaved ice.",
    whenAndTips:
      "March–May and October–November are most comfortable; summers are hot and in typhoon season; winters are mild for hot springs. A day for the city and Sakurajima, a day for Ibusuki or Kirishima, at least two for Yakushima. Kagoshima is the southern end of the Kyushu Shinkansen, linked with Kumamoto and Fukuoka.",
  },
  matsuyama: {
    // identity sources: **日本的官方口径**：総務省統計局按「市区町村」逐一发布人口，**没有「市区人口」这个复合概念**
    //   （「市」与「区」在日本是平行的不同层级，「区」特指政令指定都市下辖的行政区或东京 23 区）。
    //   都市圏有两套官方定义：**大都市圏**（1.5% 通勤/通学阈值，官方专名如「東京圏」「近畿大都市圏」
    //   「中京大都市圏」）与**都市圏**（10% 阈值，范围小很多）；**从来没有「都会区」这个词**
    //   （另有学术口径「都市雇用圏」，非官方）。2026-09-08 核。
    //   **发布节奏**：国勢調査每 5 年一次（年份末位 0/5，基准日 10 月 1 日）；**速報集計在普查次年 5 月末前后**
    //   分批公布；**人口等基本集計（确定数）在普查次年 9 月末前后**；住民基本台帳全国汇总每年 7 月。
    //   松山市 **2025 年国势调查速报 497,041 人** —— 愛媛県《令和 7 年国勢調査 地方集計結果》PDF（1 级，2026-09-08 核）。
    //   **原文标的「2026 年」是错的口径写法**：国勢調査每五年一次、年份末位 0/5，
    //   **不存在「2026 年国势调查」**，2026 只是速报的公布年份。
    //   **把公布年当成基准年**是日本条目上很容易犯的错 —— 与此前高山市/松本市
    //   「拿人口ビジョン的预测值当 2025 年实测值」是同一类：年份看起来很像已经核到最新一期。
    identity:
      "Matsuyama is the capital of Ehime Prefecture and the largest city on Shikoku, with about 497,000 people at the 2025 census. Dōgo Onsen, with a legend of 3,000 years, is among the oldest hot springs in Japan, and its Honkan bathhouse of 1894 is an Important Cultural Property still in business as a wooden public bath; Matsuyama Castle (begun 1602) is one of Japan's twelve surviving original keeps, standing on Katsuyama hill in the centre. Natsume Sōseki's novel 'Botchan' is set here, the haiku poet Masaoka Shiki was born here and has a memorial museum, and its trams are run by Iyotetsu, a company founded in 1887. Ishite-ji is temple 51 of the 88-temple Shikoku pilgrimage, and Imabari to the north is the Shikoku end of the Shimanami Kaidō.",
    // howItWorks sources: 1887 = 伊予铁道创立年；1888 年开通的是轻便铁道，市内电车前身松山电气轨道 1911 年开业、1921 年并入。正文改为只说创立年。2026-09-12 核。
    howItWorks:
      "Matsuyama is the seat of Ehime Prefecture and the largest city on Shikoku, a core city of about 429 km² with about 497,000 people at the 2025 census; the city runs local services, and police and schools belong to the prefecture. Matsuyama Castle stands on Katsuyama in the centre with a ropeway up from the shopping street below, Dōgo Onsen lies 3 km east with its bathhouse of 1894 among the oldest in Japan, the trams of Iyotetsu, a company founded in 1887, join the station, the castle town and Dōgo, with the 'Botchan train' as their period piece; Sōseki's Botchan is set here, Masaoka Shiki made it the city of haiku, the airport lies 6 km west, ferries sail from Matsuyama Kankō port to Hiroshima, and the Shimanami Kaidō starts at Imabari 40 km north. Newcomers most often go wrong by taking Dōgo Onsen for the centre of Matsuyama, when the centre lies at the foot of the castle and Dōgo is the spa town at the end of the tram line.",
    layout:
      "The city lies on the Matsuyama plain with the castle on Katsuyama in the middle; at its foot are the Ōkaidō and Gintengai arcades and the prefectural offices. JR Matsuyama Station is west of the castle and Iyotetsu's Matsuyama-shi Station south of it, both on the tram lines. Dōgo Onsen is about 3 km north-east at the end of the tram line, with the Honkan, the arcade and the ryokan quarter clustered together; Ishite-ji is about 1 km further east. The airport is about 6 km south-west, the ferry port north-west, and Imabari about 40 km north-east.",
    gettingAround:
      "Matsuyama Airport (MYJ), about 6 km from the centre, is about 15 minutes by bus to Matsuyama-shi Station and 40 to Dōgo, with scheduled domestic and international flights. JR limited expresses reach Okayama, on the Shinkansen, in about 2 hours 40 minutes; from the ferry port, jetfoils reach Hiroshima in about 1 hour 10 minutes, with car ferries too. Iyotetsu trams link the stations, the centre and Dōgo, and the 'Botchan Train' is a replica of the old steam tram; a ropeway or chairlift climbs to the castle. The climate is humid temperate on the dry Seto Inland Sea side, with hot summers and mild winters.",
    // culture sources: 与 howItWorks 同一处更正，同条目两段一并改。2026-09-12 核。
    culture:
      "Japanese is universal. The Dōgo Onsen Honkan is a cultural property — follow bath etiquette (wash first, no swimwear, towels out of the water) and check the tattoo policy; the Honkan sells different bathing courses and queues by time slot. Shoes come off in the castle keep. Pilgrims in white robes with staffs are a common sight at Ishite-ji — leave them undisturbed. Local tastes include sea-bream rice, five-colour sōmen, Botchan dango and mikan oranges. No tipping in restaurants.",
    seeAndDo:
      "The Dōgo Onsen Honkan (and the Asuka-no-yu and Tsubaki-no-yu baths) and the Dōgo arcade; Matsuyama Castle (ropeway up; the keep looks over the city and the Inland Sea); Ishite-ji; the Shiki memorial museum and Botchan sites; the Ōkaidō and Gintengai arcades; the Saka no Ue no Kumo Museum; cycling the Shimanami Kaidō from Imabari (a day); the old streets of Uchiko; Tobe pottery.",
    whenAndTips:
      "March–May and October–November are most comfortable, with the castle's cherry blossom in early April; summers are hot. A day for the city and Dōgo, a day for the Shimanami Kaidō. Matsuyama is the gateway to western Shikoku and links easily with Hiroshima by sea.",
  },
};
