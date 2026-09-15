import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Kazakhstan ============
  "kazakhstan-overview": {
    // identity sources: 哈萨克斯坦国家统计局《Population of the Republic of Kazakhstan (as of January 1, 2025)》：2025-01-01 为 20,283,399 人；2025-12-01 为 20,478,879 人。https://stat.gov.kz/en/industries/social-statistics/demography/publications/312581/
    //   核实日 2026-09-07，来源级别 1
    identity:
      "Kazakhstan is the world's largest landlocked country, covering about 2.72 million km² with a population of about 20.28 million at the start of 2025, about 20.48 million by year-end (Bureau of National Statistics); its capital is Astana, the official language is Kazakh, Russian is widely used as the language of interethnic communication, and its currency is the Kazakhstani tenge (KZT).",
    layout:
      "The country divides roughly into six regions: the North (Astana, Kokshetau — steppe and lakes), the Southeast (Almaty — the northern Tian Shan foothills, former capital and cultural centre), the South (Shymkent, Turkestan — ancient Silk Road cities and oasis agriculture), the West (Aktau — the Caspian coast and the desert wonders of Mangystau), the Centre (Karaganda — a mining city in the Kazakh Uplands), and the East (Semey, Pavlodar — along the Irtysh River).",
    gettingAround:
      "Domestic flights are the main way to travel between regions, with Air Astana, SCAT and other carriers covering major cities; the rail network is extensive, and long-distance sleeper trains are an economical if slow option (some routes exceed 20 hours). Since March 2024 Kazakhstan has used a single UTC+5 time zone nationwide (previously the east and west fell into two separate zones). The climate is a classic continental one — hot, dry summers and long, severe winters, with large diurnal and seasonal temperature swings. Citizens of many countries can enter visa-free for up to 30 days — check Kazakhstan's Ministry of Foreign Affairs for current rules.",
    culture:
      "Kazakhstan is a secular, multi-ethnic country where Islam and Orthodox Christianity are the main religions, and the religious atmosphere is generally moderate. Kazakh hospitality (konakasy) is taken very seriously — guests invited into a home are typically served generously, and accepting food offered by a host is basic courtesy. Shoes come off before entering a mosque or mausoleum, and women should carry a headscarf. Unlike many Southeast Asian countries, tipping is customary in Kazakhstan — typically 5–10% of the restaurant bill, though upscale places may already include a service charge.",
    seeAndDo:
      "The Zailiysky Alatau, Charyn Canyon and the Kolsai-Kaindy lakes around Almaty; Astana's futuristic architecture; the Yasawi Mausoleum in Turkestan (a UNESCO World Heritage Site); the desert wonders of Bozzhyra Canyon and the Karagiye Depression in Mangystau; Lake Balkhash's \"two waters in one lake\" phenomenon; the Saryarka steppe and the Korgalzhyn migratory-bird reserve.",
    whenAndTips:
      "May through September is the peak travel season, with milder weather suited to mountain hikes, lake trips and desert exploration; winters are severe (some regions drop below -30°C), so pack accordingly if travelling then. Allow generous time for inter-regional travel, and plan supplies and a guide well in advance for self-drive trips into remote desert regions like Mangystau.",
  },
  astana: {
    // 人口与红线回扫 2026-09-16：人口统一刷新为哈萨克斯坦国家统计局《2026 年 1 月 1 日人口》xlsx 表 2 / 表 3（stat.gov.kz/api/iblock/element/341325，1 级；「市行政区 г.а.」含所辖村镇，另列城区）；突厥斯坦原「约 30 万（2023）」与该表 245,522 差距过大，按表改正；同批删去族群比例、劳改营与强制迁移叙事（零争议红线）。上方旧注释里的人口数已作废。
    // identity sources: 阿斯塔纳 2025 年初人口约 153 万（哈萨克斯坦国家统计局口径，见 howItWorks 已有留痕），
    //   是 2002 年的三倍 —— **增长极快的城市，「逾130万」这种不带年份的写法很快就会过期**。
    identity:
      "Astana is Kazakhstan's current capital, with a population of about 1.64 million (start of 2026); the capital moved here from Almaty in 1997, and the city is known for its dense cluster of futuristic landmark buildings — a showcase of Kazakhstan's post-independence nation-building.",
    // howItWorks sources: Wikipedia (2026-09): Astana (capital since 1997; city of republican significance, appointed akim + elected maslikhat; ~810 km²; ~1.53 million Jan 2025; Ishim right/left bank; Kurokawa plan; second-coldest capital; LRT 2026)
    howItWorks:
      "Astana has been the capital of Kazakhstan since December 1997, named Astana in 1998 and, between 2019 and 2022, Nur-Sultan; it is a 'city of republican significance', with a mayor (akim) appointed by the president and a council (maslikhat) elected by residents, divided into several districts. It covers about 810 km² with about 1.64 million people at the start of 2026, more than three times the figure of 2002. The Ishim River divides the city: the right bank is the Soviet-era town of Tselinograd, with its street grid and old apartment blocks; the left bank is the new city built to the master plan of the Japanese architect Kisho Kurokawa, where the presidential palace, the Bayterek tower and the Khan Shatyr line up along one axis, and where the ministries and new housing stand. It is the second-coldest capital in the world after Ulaanbaatar, with winters down to −35°C. The long-built elevated light rail line entered service in 2026, and buses and shared taxis carry most journeys. Kazakh and Russian are both in use. Addresses give street, building and apartment. Newcomers most often go wrong by taking the new left bank for the whole of Astana, when the old right bank is where most people live.",
    layout:
      "The city is divided by the Ishim River (a tributary of the Irtysh) into a right bank, which preserves the Soviet-era old town, and a left bank, where large landmark structures including the Bayterek Tower, the Khan Shatyr entertainment centre and the Nur-Astana Mosque have been built since the late 1990s — the core of Astana's \"new city.\"",
    gettingAround:
      "Astana International Airport (NQZ) is about 18 km in a straight line from the city centre; taxis, ride-hailing apps and buses are the main way to get around town, and the left-bank new city's wide boulevards mean walking distances there tend to be long.",
    culture:
      "The official language is Kazakh, with Russian widely spoken. Kazakh hospitality is taken seriously, and accepting food offered by a host is basic courtesy. Shoes come off before entering the Nur-Astana Mosque or other religious sites, and women should carry a headscarf. Tipping is customary in Kazakhstan — typically an extra 5–10% on top of the restaurant bill.",
    seeAndDo:
      "The Bayterek Tower (climb up for a view over the city and steppe); the Khan Shatyr entertainment centre (designed by Norman Foster, the world's largest tent-like structure); the Nur-Astana Mosque (2005) and the Astana Grand Mosque (completed in 2022, the largest mosque in Central Asia); the National Museum of Kazakhstan; the Presidential Cultural Centre and Independence Square.",
    whenAndTips:
      "Astana's winters are extremely cold and long (temperatures can drop below -30°C), while summers are hot and dry — May through September is the more comfortable travel season; the left-bank landmark cluster is compact, so plan a full day combining walking with taxis.",
  },
  almaty: {
    // identity sources: 阿拉木图 2026 年约 235 万（哈萨克斯坦国家统计局口径，见 howItWorks 已有留痕）；
    //   **加上阿拉木图州周边城镇的约 300 万是另一个口径**，只写在 howItWorks 里，不要混进 identity。
    identity:
      "Almaty is Kazakhstan's former capital and largest city, with a population of about 2.35 million (2026), set at the foot of the Zailiysky Alatau in the northern Tian Shan; it is the country's cultural, educational and economic centre and the core gateway for exploring the natural landscapes of the northern Tian Shan.",
    // howItWorks sources: Wikipedia (2026-09): Almaty (capital until 1997; city of republican significance; 8 districts; ~2.35 million 2026; agglomeration ~3 million; alluvial fan, uphill = south; Medeu/Shymbulak in city; 1 metro line 2011)
    howItWorks:
      "Almaty is Kazakhstan's largest city and its capital until 1997; it is a 'city of republican significance', with a mayor (akim) appointed by the president and a council (maslikhat) elected by residents, divided into eight districts. It had about 2.35 million people in 2026, and about 3 million with the towns of Almaty Region around it. The city stands on the alluvial fan at the foot of the Trans-Ili Alatau, the whole of it tilting up to the south, so locals give directions not by compass points but as 'up' and 'down' — up is the mountains to the south, down the steppe to the north. The Soviet-era centre lies around Panfilov Park and Republic Square, on a neat grid of streets lined with trees and irrigation channels, and the Medeu skating rink and Shymbulak ski resort lie in the mountains within the city limits. One metro line opened in 2011, and buses carry most journeys. The city sits on an earthquake belt, and smog trapped by winter inversions is daily life. Russian is in general use, and the apple is the city's name and emblem. Addresses give street, building and apartment. Newcomers most often go wrong by picturing Almaty as a city on a plain, when it is slope from end to end, with the mountains fixing every sense of direction.",
    layout:
      "The city follows a grid layout that rises from north to south; the southern districts, closer to the mountains, sit at higher elevation and enjoy cooler air, with Panfilov Park and Republic Square forming the city centre's core; the snow-capped peaks of the Zailiysky Alatau are visible looking south from the city, and both Medeu Gorge and Big Almaty Lake lie within commuting distance.",
    gettingAround:
      "Almaty International Airport (ALA) is about 21 km in a straight line from the city centre; the city has a single metro line and a bus network, while reaching mountain sites like Medeu or Big Almaty Lake usually requires a hired car or a local tour; Charyn Canyon and the Kolsai-Kaindy lakes require a one- or two-day trip out of Almaty.",
    culture:
      "The official language is Kazakh, with Russian widely used in Almaty — in some contexts even more common. Almaty is one of Kazakhstan's most cosmopolitan and secular cities, and everyday dress is fairly relaxed; religious sites still call for basic etiquette such as removing shoes and women carrying a headscarf. Tipping is customary — typically an extra 5–10% on top of the restaurant bill.",
    seeAndDo:
      "The Medeu high-altitude skating rink and viewpoint; Big Almaty Lake (a glacial lake and alpine hiking); Panfilov Park and the Ascension Cathedral (a wooden Orthodox church); Republic Square and the Abay Opera and Ballet Theatre; using Almaty as a base for a one- or multi-day trip to Charyn Canyon or the Kolsai and Kaindy lakes.",
    whenAndTips:
      "May through September is the best season for mountain hikes and lake trips; from October through April, mountain roads can be affected by snow. Charyn Canyon and Kolsai-Kaindy day trips involve long drives — book a local tour or hired car a day in advance.",
  },
  shymkent: {
    // 人口与红线回扫 2026-09-16：人口统一刷新为哈萨克斯坦国家统计局《2026 年 1 月 1 日人口》xlsx 表 2 / 表 3（stat.gov.kz/api/iblock/element/341325，1 级；「市行政区 г.а.」含所辖村镇，另列城区）；突厥斯坦原「约 30 万（2023）」与该表 245,522 差距过大，按表改正；同批删去族群比例、劳改营与强制迁移叙事（零争议红线）。上方旧注释里的人口数已作废。
    identity:
      "Shymkent is Kazakhstan's third-largest city, with a population of about 1.29 million (start of 2026); a city of republican significance since 2018 (before that it was the capital of South Kazakhstan Region, which was renamed Turkistan Region that year with its seat moved to Turkistan), historically an important Silk Road trading centre, and today a major industrial and transport hub in southern Kazakhstan.",
    // howItWorks sources: Wikipedia (2026-09): Shymkent (city of republican significance since 2018-06-19; ~1,170 km²; ~1.27 million 2025; Kazakh 67.5%, Uzbek 17.7%, Russian 8.9%; Tashkent 120 km; Sayram)
    howItWorks:
      "Shymkent has been a 'city of republican significance' since June 2018, ranking with Astana and Almaty, with a mayor (akim) appointed by the president and a council (maslikhat) elected by residents; before that it was the capital of South Kazakhstan Region, which on its separation was renamed Turkistan Region with its capital moved to Turkistan. The city covers about 1,170 km² with about 1.29 million people at the start of 2026, Kazakhstan's third city. It is an old Silk Road town, at first the outpost of the neighbouring ancient city of Sayram, and today the commercial and industrial centre of the south, with oil refining, pharmaceuticals, metallurgy and textiles, and a rail junction and airport joining north and south. Tashkent lies about 120 km south, and Kazakh is heard here more than in the northern cities. The bazaar is the city's daily life. Addresses give street, building and apartment. Newcomers most often go wrong by taking Shymkent for the capital of Turkistan Region, when since 2018 it has been a city in its own right and the regional capital lies elsewhere.",
    layout:
      "The old town preserves some Soviet-era buildings and traditional bazaars, while the newer Independence Park and Al-Farabi Square form the city centre's leisure core; the ancient city of Turkestan lies about 160 km to the north.",
    gettingAround:
      "Shymkent International Airport (CIT) is about 12 km in a straight line from the city centre; buses and taxis are the main way to get around town, and reaching Turkestan usually means about 2 hours by highway.",
    culture:
      "The official language is Kazakh, and the city carries a comparatively strong traditional Kazakh cultural atmosphere, one of the places in southern Kazakhstan where older customs are best preserved. Tipping is customary — typically an extra 5–10% on top of the restaurant bill, and accepting food offered by a host is basic hospitality etiquette.",
    seeAndDo:
      "Shymkent's central bazaar (everyday local market life); Independence Park and Al-Farabi Square; the Regional History Museum; using Shymkent as a base for a visit to the Yasawi Mausoleum in Turkestan.",
    whenAndTips:
      "Shymkent's summers are hot and dry, with May and September comparatively pleasant; plan a full day for the Turkestan trip, since the round-trip drive plus time at the mausoleum takes several hours.",
  },
  aktau: {
    // 人口与红线回扫 2026-09-16：人口统一刷新为哈萨克斯坦国家统计局《2026 年 1 月 1 日人口》xlsx 表 2 / 表 3（stat.gov.kz/api/iblock/element/341325，1 级；「市行政区 г.а.」含所辖村镇，另列城区）；突厥斯坦原「约 30 万（2023）」与该表 245,522 差距过大，按表改正；同批删去族群比例、劳改营与强制迁移叙事（零争议红线）。上方旧注释里的人口数已作废。
    // identity sources: 人口：2023 年 270,886（与本条目 howItWorks 一致）。⚠️ 俄文维基 infobox 另有「306,650（2026）」，但其引用链接返回 404、同页正文却仍停在 2020 年的 183,097——**三个数字互相矛盾，且 stat.gov.kz 深层页对自动抓取返回 500/404**，本轮不采用那个更高的数。下一轮换带会话的浏览器工具直接取一手。
    identity:
      "Aktau is the capital of Mangystau Region, with about 307,000 people in its city administration area at the start of 2026 (Bureau of National Statistics); it is Kazakhstan's largest city on the Caspian coast, with a dry, low-rainfall climate, and serves as the core gateway to the desert wonders of Mangystau — Bozzhyra, Karagiye and Torysh.",
    // howItWorks sources: Wikipedia (2026-09): Aktau (Mangystau capital; ~270,886 2023; founded 1958/1963, Shevchenko 1964–1991; BN-350 1973–1999; port + Baku ferry; Caspian Depression; microdistrict addressing)
    howItWorks:
      "Aktau is the capital of Mangystau Region, on the Mangyshlak Peninsula on the east shore of the Caspian Sea, with about 307,000 people in its city administration area at the start of 2026, about 299,000 of them in the city proper. The city was born of uranium prospecting in 1958 and was named Shevchenko from 1964 to 1991; it stands in desert, much of it below sea level, and its fresh water once came from the BN-350 fast reactor's desalination plant — the reactor ran from 1973 to 1999, the world's first industrial-scale nuclear desalination unit. Oil is today's mainstay, and the port and the Caspian ferry to Baku tie the city to the Caucasus. It was built to a Soviet plan and has no street names: addresses give microdistrict number, building number and apartment, locals place things by microdistrict number, and this is unique in Kazakhstan. Buses carry the traffic, and there is no rail transit. The Ustyurt plateau and the Bozzhyra formations lie in the desert beyond the city. Newcomers most often go wrong by looking for street names in this city, when from the day it was built it has had only numbers.",
    layout:
      "The city follows a Soviet-era grid plan, its districts identified by numbered microdistricts (mkr) rather than traditional street names, with several beaches and a seaside promenade along the Caspian shore; landmarks deep in the Mangystau desert such as Bozzhyra and Karagiye require several hours' drive from Aktau to reach.",
    gettingAround:
      "Aktau International Airport (SCO) is about 24 km in a straight line from the city centre; taxis are the main way to get around town, while reaching desert sites like Bozzhyra and Karagiye involves rough terrain and usually requires a rented 4x4 with a local guide familiar with the route.",
    culture:
      "The official language is Kazakh, with Russian widely used. Aktau is an oil-industry city on the Caspian coast, and the pace of local life leans business-oriented; shoes come off before entering religious sites, and women should carry a headscarf. Tipping is customary — typically an extra 5–10% on top of the restaurant bill.",
    seeAndDo:
      "Bozzhyra Canyon (chalk \"fang\" rock towers and \"Martian\" terrain); the Karagiye Depression (Kazakhstan's lowest point); Torysh, the Valley of Balls (spherical sandstone concretions); Aktau's seaside promenade and Blue Bay beach; the Mangystau Regional History Museum.",
    whenAndTips:
      "Road conditions in the Mangystau desert are rough — go only in dry season and avoid muddy stretches after rain; midday summer heat is intense, so carry plenty of water and sun protection. Bozzhyra and Karagiye are each several hours' drive from Aktau — plan at least two days and arrange a reputable guide in advance.",
  },
  turkestan: {
    // 人口与红线回扫 2026-09-16：人口统一刷新为哈萨克斯坦国家统计局《2026 年 1 月 1 日人口》xlsx 表 2 / 表 3（stat.gov.kz/api/iblock/element/341325，1 级；「市行政区 г.а.」含所辖村镇，另列城区）；突厥斯坦原「约 30 万（2023）」与该表 245,522 差距过大，按表改正；同批删去族群比例、劳改营与强制迁移叙事（零争议红线）。上方旧注释里的人口数已作废。
    identity:
      "Turkestan is a historic city in southern Kazakhstan, with a population of about 246,000 (start of 2026); once an important Silk Road trading and religious centre, it is famous today for the Yasawi Mausoleum and is Kazakhstan's most important Islamic pilgrimage and historical-cultural destination.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Turkistan (Kazakhstan; capital of Turkistan Region, 160 km north-west of Shymkent near the Syr Darya; the region was renamed and the capital moved here in 2018 when Shymkent became a city of republican status; population about 300,000 in 2023, about 52.5 per cent Kazakh and 45.2 per cent Uzbek; archaeological records from the 4th century, capital of the Kazakh Khanate between the 16th and 18th centuries; the Mausoleum of Khoja Ahmed Yasawi built by Timur in the 1390s, UNESCO World Heritage and on Kazakh banknotes until 2006; local tradition holds that three visits equal one pilgrimage to Mecca; proclaimed Spiritual Capital of the Turkic World by the Organization of Turkic States in 2021; Hazrat Sultan International Airport opened 2021; Ahmet Yassawi University)
    // howItWorks sources（2026-09-13 回扫改）：新机场 2020-12-01 启用（hsairport.kz，1 级），原「2021 年」与同条目 gettingAround 自相矛盾；2021-03-31 称「突厥世界精神首都」时组织名为突厥语国家合作委员会，11 月才更名突厥国家组织（Astana Times，2 级）。核实 2026-09-13
    howItWorks:
      "Turkistan is the capital of Turkistan Region in Kazakhstan, about 160 km in a straight line north-west of Shymkent near the Syr Darya, with about 246,000 people at the start of 2026; Kazakh local government has two levels, region and district, with governors appointed by the president and local assemblies elected. Its status as capital is recent: in 2018 Shymkent became a city of republican status, the former South Kazakhstan Region was renamed Turkistan Region and its capital moved here, and the city has been built up on a large scale since, with a new international airport opened in 2020. The city's weight comes from one building: in the 1390s Timur ordered a mausoleum for the Sufi teacher Khoja Ahmed Yasawi, work stopped before completion, and its main front still shows undecorated brick — which makes it a physical record of how Timurid builders worked, inscribed as World Heritage in 2003 as Kazakhstan's first. Between the sixteenth and eighteenth centuries this was the capital of the Kazakh Khanate and its khans were buried beside the shrine. A local saying holds that three visits here equal one pilgrimage to Mecca, and in 2021 the Cooperation Council of Turkic-Speaking States — renamed the Organization of Turkic States later that year — called it the spiritual capital of the Turkic world. Newcomers most often go wrong by expecting an old city, when most of what stands was built in recent years.",
    layout:
      "The Yasawi Mausoleum is the old town's central landmark, surrounded by an archaeological heritage park and newly built religious and cultural facilities; the city has undergone large-scale modernisation in recent years, visibly reflected in the new Hazrat Sultan International Airport and tidy civic squares.",
    gettingAround:
      "Hazrat Sultan International Airport (HSA), opened in 2020, is about 24 km in a straight line from the city centre; taxis are the main way to get around town, and the city is easily reached from either Shymkent or its own airport.",
    culture:
      "The official language is Kazakh. The Yasawi Mausoleum is one of Kazakhstan's most important Islamic sacred sites — dress modestly and remove shoes before entering the mausoleum complex, and women should carry a headscarf; as a pilgrimage site, keep noise down and be respectful of worshippers in prayer. Tipping is customary — typically an extra 5–10% on top of the restaurant bill.",
    seeAndDo:
      "The Yasawi Mausoleum (commissioned by Timur in 1389–1405, a UNESCO World Heritage Site and a showcase of Timurid architectural experimentation); the archaeological heritage park surrounding the mausoleum; the Hazrat Sultan Mosque; the Turkestan Regional History Museum.",
    whenAndTips:
      "May through September brings comparatively mild weather, well suited to visiting the mausoleum and outdoor heritage sites; allow at least half a day for the mausoleum to take in the distinctive unfinished structural details left from the Timurid period.",
  },
  karaganda: {
    // 人口与红线回扫 2026-09-16：人口统一刷新为哈萨克斯坦国家统计局《2026 年 1 月 1 日人口》xlsx 表 2 / 表 3（stat.gov.kz/api/iblock/element/341325，1 级；「市行政区 г.а.」含所辖村镇，另列城区）；突厥斯坦原「约 30 万（2023）」与该表 245,522 差距过大，按表改正；同批删去族群比例、劳改营与强制迁移叙事（零争议红线）。上方旧注释里的人口数已作废。
    // identity sources: 人口：2020 年普查 497,777（与本条目 howItWorks 一致）。⚠️ 俄文维基 infobox 另有 2023 年 515,632，但引用页返回 404、**无法在一手来源上坐实**，本轮不采用。下一轮复核。
    identity:
      "Karaganda is an industrial city in the central Kazakh Uplands, with about 533,000 people at the start of 2026 (Bureau of National Statistics); it grew historically around coal mining and remains an important mining and industrial centre in central Kazakhstan, as well as one of the gateways to the Karkaraly Mountains and Bektau-Ata.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Karaganda (Kazakhstan; capital of Karaganda Region in central Kazakhstan about 230 km south-east of Astana, 497,777 residents in the 2020 census, the fifth-most populous city in the country; coal mining anchors the economy, production beginning in 1930 and the railway arriving in February 1931 bringing supplies and qualified staff, with 8 coal mines today against as many as 26 in the Soviet period; the Karlag camp was in the region and by 1939 the city held about 100,000 people; ethnic Germans, many deported Volga Germans, were a large share of inhabitants in the 1940s and more than 100,000 people have emigrated to Germany since 1991; Karaganda State University; Sary-Arka Airport 20 km south-east; the highest PM2.5 levels measured among Kazakh cities from 2017 to 2022)
    // howItWorks sources（2026-09-13 回扫改）：删「2017—2022 年细颗粒物浓度全国最高」—— 查不到哈萨克斯坦水文气象局一手排名，只有零散 3 级报道，按规矩只删不补。核实 2026-09-13
    howItWorks:
      "Karaganda is the capital of Karaganda Region in central Kazakhstan, about 230 km by road south-east of Astana, with 533,314 residents at the start of 2026, the fifth-most populous city in the country; Kazakh local government has two levels, region and district, with governors appointed by the president and local assemblies elected. The city exists because of coal: large-scale mining began in 1930, the railway reached the field in February 1931 bringing supplies and trained staff, and the city formed quickly on the steppe; in the Soviet period as many as 26 mines worked here and about 8 do today, with the steel town of Temirtau to the north forming one continuous industrial district with it. Karaganda State University is in town and Sary-Arka Airport lies 23 km south-east. Newcomers most often go wrong by assuming steppe cities are ancient, when this one is not yet a hundred years old.",
    layout:
      "The city developed around Soviet-era coal-mining industry, and its centre preserves a large number of Soviet-era buildings; Karkaraly National Park lies about 220 km to the east, and the granite massif of Bektau-Ata about 300 km to the south, some 70 km north of Lake Balkhash.",
    gettingAround:
      "Sary-Arka Airport (KGF) is about 23 km in a straight line from the city centre; buses and taxis are the main way to get around town, and reaching Karkaraly or Bektau-Ata usually requires a hired car, each several hours' drive on mountain roads.",
    culture:
      "The official language is Kazakh, with Russian widely used in Karaganda. Tipping is customary — typically an extra 5–10% on top of the restaurant bill, and accepting food offered by a host is basic hospitality etiquette.",
    seeAndDo:
      "The Karaganda Regional History Museum; using Karaganda as a base for a trip to Karkaraly National Park (granite mountains, pine forest and lakes); hiking and rock climbing among the granite boulders of Bektau-Ata.",
    whenAndTips:
      "May through September is the best season for hiking trips to Karkaraly and Bektau-Ata; both sites are a considerable distance away, so plan a full day for each.",
  },
  semey: {
    // 人口与红线回扫 2026-09-16：人口统一刷新为哈萨克斯坦国家统计局《2026 年 1 月 1 日人口》xlsx 表 2 / 表 3（stat.gov.kz/api/iblock/element/341325，1 级；「市行政区 г.а.」含所辖村镇，另列城区）；突厥斯坦原「约 30 万（2023）」与该表 245,522 差距过大，按表改正；同批删去族群比例、劳改营与强制迁移叙事（零争议红线）。上方旧注释里的人口数已作废。
    // identity sources: 人口：2024-11 为 312,764（与本条目 howItWorks 一致）。identity 的重心改为阿拜·库南巴耶夫的故乡与 19 世纪文化重镇（新设阿拜州即以他命名）。
    //   ⚠️ 机场专名待改（B1-b，低优先级）：现名 **Semei International Airport**（以阿拜命名），正文写的是「谢梅伊机场」；IATA（PLX）与坐标无误，只是名称精度问题。
    identity:
      "Semey is a historic city on the Irtysh River in eastern Kazakhstan, with a population of about 315,000 at the start of 2026 (Bureau of National Statistics); it is the home town of the poet and thinker Abai Qunanbaiuly and was a nineteenth-century cultural centre — the Abai Region created in 2022 is named for him — and today is an important cultural and educational city along the Irtysh.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Semey (Kazakhstan; formerly Semipalatinsk, capital of Abai Region, created in 2022, on the Irtysh near the Russian border, population 312,764 in November 2024; the settlement began in 1718 as a Russian fort near ruins of seven buildings that gave it the name meaning seven-chambered city; capital of the Alash Autonomy as Alash-Qala between 1917 and 1920; renamed Semey in 2007; Dostoevsky was exiled here from 1854 to 1859 and the Dostoevsky Literary Memorial Museum is the only one outside Russia; the poet and philosopher Abai Qunanbaiuly and the Abai Museum; the Semipalatinsk nuclear test site established 180 km west in 1949, where 456 tests took place between 1949 and 1989, the site closed on 29 August 1991)
    howItWorks:
      "Semey, formerly Semipalatinsk, is the capital of Abai Region in Kazakhstan, a region created in 2022 with its capital set here; Kazakh local government has two levels, region and district, with governors appointed by the president and local assemblies elected. The city stands on the Irtysh near the Russian border with 315,276 people at the start of 2026. Russia built a fort here in 1718 near the ruins of seven buildings, from which came the name Semipalatinsk, the seven-chambered city; between 1917 and 1920 it was the seat of the Alash Autonomy under the name Alash-Qala, and the city was renamed Semey in 2007. The Russian writer Dostoevsky served his exile here from 1854 to 1859, and the Dostoevsky literary museum in town is the only one outside Russia; the Kazakh poet and thinker Abai Qunanbaiuly was closely tied to this city, the Abai museum stands here, and the new region carries his name. In 1949 the Soviet Union established the Semipalatinsk test site about 180 km west, where 456 nuclear tests were carried out between 1949 and 1989, and the site was closed on 29 August 1991, a date later marked as the international day against nuclear tests. A suspension bridge over the Irtysh opened in 2001. Newcomers most often go wrong by taking the two names for two cities, when they are one place.",
    layout:
      "The city straddles both banks of the Irtysh River, with the Semey cable-stayed bridge one of its landmarks; the old town preserves some late-19th- and early-20th-century historic buildings, connected to the period when the writer Fyodor Dostoevsky lived here in exile.",
    gettingAround:
      "Semey Airport (PLX) is about 6.6 km in a straight line from the city centre; buses and taxis are the main way to get around town.",
    // culture sources: ⚠️ 零争议红线，**只改这一句**：删掉「承受深重的核辐射影响」这半句评价性表述（谈的是活着的人群的健康后果），保留「有严肃的纪念与教育设施、参观请保持尊重」这条对读者有用的实用信息。
    //   **核实方建议把核试验场整块删掉，没有照办** —— 它给的依据是「任务指令本身」，而那是我在 prompt 里写的黑名单。按仓库判据逐句量：howItWorks 那句是日期与次数、无评价词（8 月 29 日成为联合国国际禁核试日是公开事实），seeAndDo 的纪念馆是真实公开运营的场馆——两处都与越南保留挂牌景点的判例同型，**保留**。**英文侧本来就更克制**（写的是 carries the serious historical legacy…，完全没提辐射影响），只有中文那半句带评价——又一处中文比英文过火的中英不同步。2026-09-10 判定。
    culture:
      "The official language is Kazakh, with Russian widely used. Semey carries the serious historical legacy of the Soviet nuclear test site nearby, and the city maintains solemn memorial and educational facilities related to this history — visit related memorials respectfully. Tipping is customary — typically an extra 5–10% on top of the restaurant bill.",
    seeAndDo:
      "The Semey cable-stayed bridge (a landmark spanning the Irtysh River); the Abai Memorial Museum (documents and artefacts related to the Kazakh national poet Abai); the Dostoevsky Literary Memorial Museum; the Museum of Nuclear Test Victims (learning about the Soviet nuclear testing history).",
    whenAndTips:
      "Semey has a classic continental climate — hot summers and severe winters — with May through September the more comfortable travel season; the nuclear-test memorial museums cover heavy material, so prepare accordingly.",
  },
  pavlodar: {
    // 人口与红线回扫 2026-09-16：人口统一刷新为哈萨克斯坦国家统计局《2026 年 1 月 1 日人口》xlsx 表 2 / 表 3（stat.gov.kz/api/iblock/element/341325，1 级；「市行政区 г.а.」含所辖村镇，另列城区）；突厥斯坦原「约 30 万（2023）」与该表 245,522 差距过大，按表改正；同批删去族群比例、劳改营与强制迁移叙事（零争议红线）。上方旧注释里的人口数已作废。
    // identity sources: 人口：2023 年估计 367,254（与本条目 howItWorks 一致），未发现更新一期。
    //   ⚠️ **待补**：巴甫洛达尔机场（PWQ）**2025-04-01 起因改造关闭**，截至 2026-09 已有航线恢复（FlyArystan 飞阿拉木图）。正文的「距市区约 13 公里」本身没错，但完全没提这段停运与复航——下一轮确认班次恢复情况后补一句带时点的表述。
    identity:
      "Pavlodar is a city on the Irtysh River in eastern Kazakhstan, with about 370,000 people in its city administration area at the start of 2026 (Bureau of National Statistics); it is the capital of Pavlodar Region, historically built up around heavy industries such as aluminium and petrochemicals, and today an important industrial and cultural city along the Irtysh.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Pavlodar (Kazakhstan; capital of Pavlodar Region in the north-east, about 450 km north-east of Astana on the Irtysh, estimated population 367,254 in 2023; founded in 1720 as the Koryakovsky outpost of Imperial Russia and renamed Pavlodar in 1861, the name meaning the gift of Paul, for the birth of Grand Duke Paul Alexandrovich; the economy centres on aluminium, industrial chemicals and farm machinery, with an oil refinery completed in 1978 and the pharmaceutical company Romat; about 46.5 per cent Kazakh and 41.6 per cent Russian with Ukrainian, German and Tatar communities; an 89 km tram network in service since 1965; a river port on the Irtysh; Pavlodar Airport)
    howItWorks:
      "Pavlodar is the capital of Pavlodar Region in north-eastern Kazakhstan, about 450 km by road north-east of Astana on the Irtysh, with 370,211 people in its city administration area at the start of 2026, 336,079 of them in the city proper; Kazakh local government has two levels, region and district, with governors appointed by the president and local assemblies elected. It was founded in 1720 as the Russian Koryakovsky outpost and renamed Pavlodar in 1861, the name meaning the gift of Paul, after the birth that year of Grand Duke Paul Alexandrovich. In the twentieth century it was built as a heavy-industrial city: aluminium, industrial chemicals and farm machinery are its mainstays and an oil refinery was completed in 1978; the open-cast coal and mine-mouth power stations of Ekibastuz to the east supply this industrial district and form one of Kazakhstan's most important energy bases. The river port on the Irtysh sends freight downstream on a river that ends in Russia and the Arctic Ocean. Russian is widely used day to day. The tram network opened in 1965 runs about 89 km and is still in service. Newcomers most often go wrong by picturing Kazakhstan as steppe and herding throughout, when this is a district of factories and power stations.",
    layout:
      "The city sits along the right bank of the Irtysh River, with a riverside promenade and central square forming the main public leisure space; the old town preserves buildings from the Soviet era and earlier.",
    gettingAround:
      "Pavlodar Airport (PWQ) is about 13 km in a straight line from the city centre; buses and taxis are the main way to get around town.",
    culture:
      "The official language is Kazakh, with Russian widely used. Tipping is customary — typically an extra 5–10% on top of the restaurant bill, and accepting food offered by a host is basic hospitality etiquette.",
    seeAndDo:
      "The Irtysh riverside promenade; the Pavlodar Regional History Museum; the central square and civic building cluster; nearby steppe lakes such as Lake Bayanaul.",
    whenAndTips:
      "Pavlodar has a classic continental climate — hot summers and long, severe winters — with May through September the more comfortable travel season.",
  },
  kokshetau: {
    // 人口与红线回扫 2026-09-16：人口统一刷新为哈萨克斯坦国家统计局《2026 年 1 月 1 日人口》xlsx 表 2 / 表 3（stat.gov.kz/api/iblock/element/341325，1 级；「市行政区 г.а.」含所辖村镇，另列城区）；突厥斯坦原「约 30 万（2023）」与该表 245,522 差距过大，按表改正；同批删去族群比例、劳改营与强制迁移叙事（零争议红线）。上方旧注释里的人口数已作废。
    // identity sources: 人口：2024 年估计 176,849（与本条目 howItWorks 一致）。**原 identity 的「约 15 万」低了近 3 万、量级都不对**——不是缺年份，是数字本身错，且与同条目另一段打架（C6i）。
    identity:
      "Kokshetau is the capital of Akmola Region in northern Kazakhstan, with about 199,000 people in its city administration area at the start of 2026 (Bureau of National Statistics), set within the Kokshetau Hills; it is the main gateway to Burabay National Park, known as \"Kazakhstan's Switzerland.\"",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Kokshetau (Kazakhstan; capital of Akmola Region about 300 km north-west of Astana, stretching along the southern shore of Lake Kopa in the Kokshetau Hills at 234 m; estimated population 176,849 in 2024, the 17th-largest city in the country; founded in 1824 as a Russian administrative outpost and given city status in 1895, the administrative centre of Kokshetau Oblast from 1944 until its dissolution in 1997, then capital of Akmola Region from 1999; about 62 per cent Kazakh, up from 36 per cent in 1999, and about 23 per cent Russian; Burabay National Park about 70 km away; the Akmola Regional Museum; named Kazakhstan's City of Culture for 2021)
    howItWorks:
      "Kokshetau is the capital of Akmola Region in Kazakhstan, about 300 km north-west of Astana, spread along the southern shore of Lake Kopa in the Kokshetau hills at 234 m, with 199,357 people in its city administration area at the start of 2026, 183,170 of them in the city proper; Kazakh local government has two levels, region and district, with governors appointed by the president and local assemblies elected. One relation is easily confused here: the capital of Akmola Region is not the place called Akmola — that name later became the former name of the national capital Astana — and the regional government sits in this city instead. It was founded in 1824 as a Russian administrative outpost, received city status in 1895, was the centre of Kokshetau Oblast from 1944 until that oblast was dissolved in 1997, and became capital of Akmola Region in 1999. What the district is really known for lies about 70 km south-east at Burabay National Park, where pine forest, granite hills and lakes stand together in a way that startles on open steppe, and which is called the Kazakh Switzerland locally. Newcomers most often go wrong by confusing the city with Akmola, the former name of Astana.",
    layout:
      "The city itself is modest in scale, serving mainly administrative and transport functions; Burabay National Park lies about 70 km to the north and is the region's principal natural tourism destination.",
    gettingAround:
      "Kokshetau Airport (KOV) is about 15 km in a straight line from the city centre; taxis are the main way to get around town, and reaching Burabay usually requires a hired car, about an hour's drive.",
    culture:
      "The official language is Kazakh, with Russian widely used. Tipping is customary — typically an extra 5–10% on top of the restaurant bill, and accepting food offered by a host is basic hospitality etiquette.",
    seeAndDo:
      "Using Kokshetau as a base for a trip to Burabay National Park: boating on Lake Burabay, hiking the granite hills, and taking in the pine-forest scenery; the Kokshetau Regional History Museum.",
    whenAndTips:
      "May through September is the best season for a summer trip and outdoor activities at Burabay, with weekends and summer holidays bringing more visitors; in winter Burabay's lakes freeze over, offering ice fishing and snow activities.",
  },
  oskemen: {
    // 全七段 sources: 同中文侧（Bureau of National Statistics population on 1 January 2026 xlsx, tier 1; OurAirports distance computed; rail and airport schedule sites, tier 3）。 核实 2026-09-16 当批（content-verifier 独立检索，火车车程「将近一天」对阿斯塔纳不准、主站方位有歧义，已改，其余 ok）。
    identity:
      "Oskemen is the capital of East Kazakhstan Region in eastern Kazakhstan; its Russian name is Ust-Kamenogorsk, and official statistical tables use both names. The city stands where the Ulba flows into the Irtysh, and on 1 January 2026 its city administration area had about 381,000 people, about 361,000 of them in the urban area (Bureau of National Statistics). It is one of the main cities on the way towards the Altai mountains in the east.",
    howItWorks:
      "Oskemen is the capital of East Kazakhstan Region; local administration in Kazakhstan has two levels, regions and districts, with regional governors appointed by the president and local assemblies elected. In 2022 Abai Region was split off from East Kazakhstan with its capital at Semey, leaving Oskemen's region noticeably smaller. Statistically, 'Oskemen city' is more than the urban area: the city administration also covers surrounding villages, and about 20,000 of its 381,000 people live in rural settlements. The centre is around the confluence of the two rivers, where the regional museum of history and local lore and the riverside embankment are, and the rivers divide the city into several parts linked by bridges. Addresses give the street, building number and flat number. Daily life is shaped by the rivers and the railway, and long trips are mostly by air, since trains to Astana or Almaty take from well over half a day to about a full day. Newcomers most often take 'Oskemen' and 'Ust-Kamenogorsk' for two different cities, when they are simply the Kazakh and Russian names of the same place.",
    layout:
      "The city centre is at the confluence of the Irtysh and the Ulba, with the regional museum of history and local lore and the embankment near the meeting of the rivers; the city spreads along the banks of both rivers, with residential districts extending to the north-east and north-west. The city has more than one railway station, and the airport lies north-west of the city, about 13 km away in a straight line.",
    gettingAround:
      "Oskemen Airport (UKK), about 13 km from the centre in a straight line, has scheduled domestic flights. Long-distance trains run to Astana and Almaty, taking from well over half a day to about a full day (checked September 2026); the city has more than one station, so check the departure station and times with the railway company. The city has buses and trams, and taxis and ride-hailing are widely used.",
    culture:
      "Kazakh is the official language and Russian is widely spoken; English is usable among younger people but not common outside tourism. Winters are long and cold, so bring warm clothing.",
    seeAndDo:
      "The confluence of the two rivers and the embankment; the regional museum of history and local lore; the East Kazakhstan regional museum-reserve of architecture, ethnography and natural landscapes; and, in summer, trips from here into the eastern mountains and lakes.",
    whenAndTips:
      "June–September is the most comfortable; winters are severe with long snow cover. Routes and access to the eastern mountains depend heavily on the season, so check with local tour operators or the managing authorities before setting off.",
  },
};
