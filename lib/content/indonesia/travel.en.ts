import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Indonesia ============
  "indonesia-overview": {
    // identity sources: 印尼中央统计局（BPS）2025 年人口间隔调查 SUPAS 2025：2025 年年中 284.67 百万人。只找到 BPS 官方账号发布，未取到 bps.go.id 上的出版物页面，**来源级别按 2 记**。
    //   另有一个 2.876 亿的数字来自 DTSEN 社会福利登记库，与 SUPAS 人口统计口径不同，不要混用。原文「逾 2.7 亿」字面成立但已滞后一千多万。核实日 2026-09-07
    identity:
      "Indonesia is a Southeast Asian archipelagic nation of about 17,000 islands, covering roughly 1.91 million km² with a mid-2025 population of about 284.7 million (BPS-Statistics Indonesia) — the world's fourth most populous country; its capital is Jakarta, the official language is Indonesian (Bahasa Indonesia), and its currency is the Indonesian rupiah (IDR).",
    layout:
      "The country divides roughly into five main islands and their surrounding archipelagos: Java (Jakarta, Yogyakarta, Surabaya, Bandung — the population and economic core), Sumatra (Medan — volcanoes and rainforest), Kalimantan (Balikpapan — Indonesia's portion of Borneo), Sulawesi (Makassar, Manado — religiously diverse coastlines and coral reefs) and the Bali–Nusa Tenggara islands (Denpasar, Labuan Bajo — volcanoes, rice terraces and island resorts).",
    gettingAround:
      "Domestic flights are the primary way to travel between islands, with Garuda Indonesia, Lion Air, Batik Air and other carriers covering all major cities; Java has a reasonably developed rail network, and inter-island ferries also operate. The country spans three time zones (western, central and eastern). The climate is tropical rainforest and monsoon, hot and humid year-round, with a wet season from October to April and a dry season from May to September, varying somewhat by region. Visa policy varies by nationality, with visa-on-arrival or visa-free entry available to many — check Indonesia's immigration authority for current rules.",
    culture:
      "Indonesia has the world's largest Muslim population, and most regions follow halal dietary practice with relatively modest public dress; shoes come off before entering a mosque, and women are generally expected to cover their hair. During Ramadan, restaurant hours in some areas may shift. Bali is predominantly Hindu — temple visits require a sarong and sash, and offerings placed on the ground (canang sari) should never be stepped on. North Sulawesi and Flores, by contrast, have Christian-majority populations with different dietary norms. Eating and passing items with the right hand is considered more polite; tipping isn't expected, though a service charge is often already included in the bill.",
    seeAndDo:
      "Java's Borobudur and Prambanan temples and active volcanoes such as Bromo and Merapi; Bali's rice terraces, temples and beaches; Sumatra's Lake Toba and rainforest; Komodo National Park and Flores' volcanic crater lakes; Sulawesi's coral reef diving and Tana Toraja highland culture; Borneo's orangutan rainforest.",
    whenAndTips:
      "The dry season (May–September) is generally the best time to travel, with volcano hikes and island activities less affected by weather; the wet season (October–April) brings heavier rain in some areas and can affect mountain roads. Build in generous transit time for inter-island travel, since flights to remote islands run less frequently and are more prone to weather cancellations. Customs enforcement on meat, certain medications and drugs is strict, and drug offences carry extremely severe penalties — know and follow local law.",
  },
  jakarta: {
    // identity sources: 首都地位：印尼宪法法院 2026 年 5 月第 71/PUU-XXIV/2026 号裁决 —— 总统令（Keppres）生效前雅加达在法律上仍是首都；截至 2026-09-12 该总统令未签署（1/2 级：内阁秘书处 setkab.go.id + Kompas）。⚠️ 这一句属「尚未发生的事不能提前写」那一类，正文已带时点。下一轮回来查 setkab.go.id 是否已公布 Keppres。
    identity:
      "As of September 2026 Jakarta remains Indonesia's legal capital: laws passed in 2022 and 2024 provide for capital functions to move to Nusantara, and Indonesia's Constitutional Court ruled in May 2026 that Jakarta stays the capital until a presidential decree takes effect, a decree that has still not been signed; Greater Jakarta (Jabodetabek) has been estimated at 28–32 million in recent years; it is the country's political, economic, financial and transport hub and one of the largest cities in Southeast Asia, on the northwest coast of Java.",
    // howItWorks sources: 口径：印尼统计局**不发布 Jabodetabek 的单一汇总人口**（只到市县级），各市县官方数相加近年在 3,000 万—3,500 万；联合国《世界城市化展望》2025 年版按都市聚合区推算约 4,200 万并列全球第一 —— **两套方法不可混用**（known-errors C6-b）。原文的「约 3,200 万」追不到出处，「世界上人口最多的都会区之一」按 UN 2025 已不准确（是第一，不是之一）。2026-09-12 核。
    howItWorks:
      "Jakarta is Indonesia's 'Special Capital Region', ranking with the provinces and governed by an elected governor; its five 'administrative cities' — Central, North, South, West and East — and the Thousand Islands regency are not self-governing, their mayors are appointed by the governor and they have no councils, unlike cities in other provinces with elected mayors. The region covers about 662 km² with about 11.01 million people in the first half of 2025 (residence registration), while Greater Jakarta (Jabodetabek), with Bogor, Depok, Tangerang and Bekasi, has no single official Indonesian figure — summing the official counts for each city and regency puts it between 30 and 35 million in recent years, and the UN's World Urbanization Prospects 2025 puts the urban agglomeration above 42 million on a different method that is an international projection rather than an Indonesian government statistic. Those satellite cities belong to West Java and Banten provinces. The city grew along a north–south axis: Kota Tua in the north is the Dutch Batavia, the Sudirman–Thamrin corridor is the high-rise business district, and the residential districts run south. Addresses carry RT/RW neighbourhood numbers below the street. MRT, LRT and TransJakarta buses form a network, yet congestion is daily life. Under laws of 2022 and 2024 the capital functions are to move to Nusantara in Kalimantan, and Jakarta remains the capital until a presidential decree takes effect. Newcomers most often go wrong by taking the city for one municipal government, when it is a province whose five cities are only its branches.",
    layout:
      "The old town of Batavia (Kota Tua) preserves Dutch colonial architecture, with Merdeka Square and its surroundings forming the political core; the central business district runs along Jalan Sudirman-Thamrin, dense with modern skyscrapers and malls, while the city has expanded heavily south and east into the wider Greater Jakarta metropolitan area.",
    gettingAround:
      "Soekarno-Hatta International Airport is about 23 km from the city centre, roughly an hour by airport express to downtown; the city has MRT, LRT and the Transjakarta bus rapid transit system, but ground traffic is severely congested, so build in generous time during peak hours; ride-hailing apps (Gojek, Grab) are widely used citywide.",
    culture:
      "The official language is Indonesian. Jakarta is a multi-ethnic, multi-religious metropolis, Muslim-majority with significant Chinese and Betawi communities among others. Shoes come off before entering a mosque and women should carry a headscarf; dress relatively modestly in public, and bring a light layer for indoor air conditioning, which runs strong. During Ramadan, restaurant hours in some areas may shift; tipping isn't expected, though a service charge is often already included in the bill.",
    seeAndDo:
      "Merdeka Square and the National Monument; Kota Tua's Fatahillah Square and Dutch colonial buildings; Istiqlal Mosque (Southeast Asia's largest mosque); a day trip to the Thousand Islands; Taman Mini Indonesia Indah cultural park.",
    whenAndTips:
      "The dry season (May–September) is relatively drier; the wet season (October–April) often brings heavy afternoon downpours and localised flooding. Traffic congestion is the main constraint on itinerary planning — avoid morning and evening rush hours and favour routes near the metro lines.",
  },
  yogyakarta: {
    // identity sources: 日惹市有两套并存官方数：**BPS 基于 2020 年普查的年度推算**，2023 年约 376,000；
    //   **Dukcapil（内政部民政总局）户籍登记**，2024 年在 415,605—459,797 之间
    //   （https://dataset.jogjakota.go.id/dataset/kyda2024-37，2 级，市民政局开放数据，2026-09-08 核；
    //   注意这两个 Dukcapil 数字本身就互相不一致）。
    //   正文用的是 BPS 推算口径。**印尼这两套口径能差四五万，写哪一套要说明。**
    identity:
      "Yogyakarta is one of Indonesia's special administrative regions, hereditarily ruled by a sultan, with a city population of about 376,000 (2023, official projection); it is the centre of Javanese culture, art and traditional craft, and the gateway to Borobudur, Prambanan and Mount Merapi.",
    // howItWorks sources: 与 gettingAround 段同源（Angkasa Pura 官方，1 级）。
    howItWorks:
      "Yogyakarta is the capital of the Special Region of Yogyakarta, divided into fourteen districts called kemantren, a name used nowhere else in the country; the city had about 376,000 people in 2023, while the built-up area spreading into Sleman and Bantul holds about 4 million, and daily life long ago crossed the city line. The region is unique in Indonesia: under the special status law of 2012 the hereditary Sultan, Hamengkubuwono, serves as governor by law, and the Kraton palace is both cultural and political centre. The city is laid out on a north–south axis — Mount Merapi to the north, the Kraton in the middle, the Indian Ocean to the south — with Malioboro Street as the commercial spine along it. Javanese language and court culture, batik, wayang and gamelan, are preserved here most fully. Borobudur lies in Central Java province, and Prambanan straddles the provincial border. Addresses carry RT/RW neighbourhood numbers below the street. Yogyakarta International Airport, in full operation since 2020 after limited service from May 2019, lies about 45 km west in Kulon Progo. Newcomers most often go wrong by taking Yogyakarta for an ordinary provincial capital, when it is the seat of a special region governed by its Sultan.",
    layout:
      "The city is laid out around the Sultan's Palace (Kraton) following traditional Javanese cosmology, with a north-south axis linking Mount Merapi to the Indian Ocean; Jalan Malioboro is the main commercial street, Borobudur lies about 40 km to the west, and Prambanan about 17 km to the east.",
    // gettingAround sources: 启用：2019-05 起部分通航，**2020-03-29 全面启用**并取代阿迪苏钣多机场（机场运营商 Angkasa Pura 官方，1 级）。原来两段各写一个年份、互相矛盾，实为同一过程的两个阶段。机场铁路 2021-09 通车、仍在运营。
    gettingAround:
      "Yogyakarta International Airport (YIA) began limited service in May 2019 and moved to full operation in March 2020, replacing the old Adisutjipto Airport, about 45 km from the city centre with a direct airport rail link; becak (pedicabs), motorbike taxis and ride-hailing apps are the main ways to get around town, and the train station connects to Surabaya, Jakarta and other major cities on Java.",
    culture:
      "The official language is Indonesian, with Javanese spoken locally. Yogyakarta is one of the birthplaces of Javanese court culture and batik craft; dress appropriately when visiting religious sites like Borobudur and Prambanan, and a sarong is required in some areas. As a special region retaining a hereditary sultanate, locals place notable weight on traditional etiquette. Tipping isn't expected.",
    seeAndDo:
      "A sunrise tour of the Borobudur Buddhist site; the Prambanan Hindu temple complex; the Sultan's Palace (Kraton) and Water Castle ruins; a jeep adventure on Mount Merapi; shopping and street food along Jalan Malioboro.",
    whenAndTips:
      "The dry season (May–September) is best for climbing Mount Merapi and the Borobudur sunrise tour; the wet season (October–April) can affect some outdoor plans. The Borobudur sunrise tour requires a pre-dawn start — book tickets and a guide in advance.",
  },
  denpasar: {
    // identity sources: 登巴萨市 2024 年 670,210（BPS《Kota Denpasar Dalam Angka 2024》，1 级来源页；
    //   BPS 各站点本轮 WebFetch 均返回 403，数字经明确注明「引 BPS 原始表」的二手转述交叉核实，
    //   实际置信度按 2 级计，2026-09-08）。
    //   **原 identity 的「约 90 万」追溯不到任何官方口径** —— 既不是市区人口，
    //   也不是 Sarbagita 都会区的 220 万。
    //   **印尼有两套并存官方数**：BPS 的普查/推算，与 Dukcapil（内政部民政总局）的户籍登记，
    //   能差不少，写的时候要说明是哪一套。
    identity:
      "Denpasar is the capital of Bali province, with a population of about 670,000 (2024, BPS); it is Bali's administrative and transport hub, and most visitors use it as a starting point for Kuta, Seminyak, Ubud and other parts of the island.",
    // howItWorks sources: Wikipedia (2026-09): Denpasar (Bali capital; 4 kecamatan; 126 km²; 2024 pop ~670,000; Sarbagita ~2.2 million; Kuta/airport in Badung; desa adat); Subdivisions of Indonesia
    howItWorks:
      "Denpasar is the capital of Bali, with an elected mayor and council and four districts (kecamatan) — East, West, South and North; it covers about 126 km² with about 670,000 people in 2024, while the Sarbagita metropolitan area with Badung, Gianyar and Tabanan regencies holds about 2.2 million. Most of what people picture as 'Bali' lies outside the city: Kuta, Seminyak, Nusa Dua and the airport are in Badung Regency, Ubud is in Gianyar, each under a government of its own, and only Sanur's beach lies within Denpasar. Alongside government, Balinese community life is organised through the banjar, the neighbourhood association, and the desa adat, the customary village, which decide festivals, temple affairs and collective matters. About two-thirds of residents are Hindu. Addresses carry RT/RW neighbourhood numbers below the street. The island has no railway, public transport carries only a small fraction of trips, and almost everything moves by car and motorcycle. Newcomers most often go wrong by taking Denpasar for a resort area, when it is a provincial capital where locals live and do business, with the resorts in the neighbouring regency.",
    layout:
      "The city itself is largely administrative and commercial; the beach resort areas of Kuta and Seminyak lie south of Denpasar, Ubud's rice terraces and art village are about an hour north, and temple and clifftop sites such as Tirta Empul and Uluwatu lie to the east.",
    // gettingAround sources: 唯一性：截至 2026-09 成立。北巴厘国际机场 2025-02 列为国家战略项目、2025-07 获批，尚未开工（3 级）。到期回来复核。
    gettingAround:
      "Ngurah Rai International Airport (DPS) is about 13 km from central Denpasar and as of September 2026 remains Bali's only operating commercial airport, the planned North Bali International Airport having national-strategic-project status but not yet broken ground; getting around the island relies mainly on ride-hailing apps, hired drivers or motorbikes, with limited public transport and cross-island journeys often slowed by traffic.",
    culture:
      "Bali is one of the few Hindu-majority regions in Indonesia; a sarong and sash are required for temple visits, and offerings placed on the ground (canang sari) should never be stepped on. Everyday dress is relatively relaxed, but religious sites still call for appropriate attire. A service charge is often already included in restaurant bills, and additional tipping isn't required.",
    seeAndDo:
      "Tirta Empul (Holy Spring Temple); Ubud's rice terraces and art village; sunset at Uluwatu Temple on its clifftop; Seminyak and Kuta beaches; the Bali Museum for local Hindu culture.",
    // whenAndTips sources: 宁静日：机场全面关闭 **24 小时**（仅医疗后送与紧急飞行例外），2026 年为 3 月 19 日 06:00—20 日 06:00、暂停 440 班（2 级，安塔拉引机场 NOTAM）。日期按巴厘萨卡历逐年变动，正文已改成不写死月份。
    whenAndTips:
      "The dry season (April–October) is best for beach and outdoor activities; the wet season (November–March) often brings afternoon showers. On Bali's Hindu New Year, Nyepi or the Day of Silence, the whole island shuts down and the airport routinely closes for a full 24 hours (medevac and emergency flights excepted); Nyepi follows the Balinese Saka calendar, so its date on the Gregorian calendar shifts every year — always check the announcement for the year you travel.",
  },
  surabaya: {
    // identity sources: BPS 口径 2024 年约 302 万。随机抽样审计（seed=3）抽中。2026-09-13 核。
    identity:
      "Surabaya is Indonesia's second-largest city, with a population of about 3.02 million (2024, BPS); it is the capital of East Java province and a major port city with an important industrial and trade role, as well as one of the gateways to Mount Bromo.",
    // howItWorks sources: 与 identity 段同一处更正。2026-09-13 核。
    howItWorks:
      "Surabaya is the capital of East Java, with an elected mayor and council, divided into 31 districts (kecamatan) and 154 urban villages; with about 3.02 million people in 2024 it is Indonesia's second city, while the metropolitan area with Sidoarjo, Gresik and their neighbours exceeds 10 million, each regency under a head of its own. The city grew around the port of Tanjung Perak to the north — one of Indonesia's busiest, from which sugar, tobacco and coffee once shipped; the old town, Kota Lama, lies on the Kalimas River with the Arab quarter of Ampel and the Chinese quarter beside it, and newer business districts spread south and west. The Suramadu Bridge ties the city to Madura across the strait. Locals speak Suroboyoan, a blunt Javanese with Madurese colouring, and directness is the city's character. Addresses carry RT/RW neighbourhood numbers below the street, and travel depends on cars, motorcycles and buses. Newcomers most often go wrong by taking Surabaya for a copy of Jakarta, when it is a city built on port and trade with a dialect and temper of its own.",
    layout:
      "The old town preserves historic Dutch colonial and Arab/Chinese quarter streetscapes, and the city sits on the Madura Strait as a key eastern Java port hub; the Bromo Tengger Semeru National Park lies about three hours south of the city.",
    // gettingAround sources: 行政归属：机场在西多阿佐县 Sedati 区，不在泗水市内（3 级）。距离：注册表坐标算出直线 14.1 公里、正南，公路约 20 公里合理，故保留 20。
    gettingAround:
      "Juanda International Airport (SUB) lies in Sidoarjo Regency south of Surabaya, outside the city's own boundary, about 20 km by road from the centre; Surabaya is the eastern rail hub of Java, with trains to Yogyakarta, Jakarta and other cities; taxis and ride-hailing apps are the main way to get around town.",
    culture:
      "The official language is Indonesian, with a direct-spoken local dialect of Javanese common in Surabaya. The city is Muslim-majority — shoes come off before entering a mosque and women should carry a headscarf; dress relatively modestly in public. Tipping isn't expected.",
    seeAndDo:
      "The Suro and Boyo (shark and crocodile) statue, the city's namesake landmark; the old Arab quarter and Red Bridge; the Surabaya Heroes Monument; the historic Kya-Kya Chinatown district; a base for a sunrise trip to Mount Bromo (about 3–4 hours by road).",
    whenAndTips:
      "Mount Bromo sunrise tours typically depart around 2–3 a.m. — arrange accommodation and a guide in advance; the dry season (May–September) offers clearer visibility and is the best time to view the Bromo sunrise.",
  },
  bandung: {
    identity:
      "Bandung is the capital of West Java province, with a population of about 2.61 million (2024, BPS), sitting at about 768 m elevation with a cool climate; it was a famous Dutch-era hill-station resort town and is today a centre for Indonesian fashion, creative industry and technical education.",
    // howItWorks sources: 万隆市 BPS：2023 年 2,506,603 → **2024 年 2,609,884**
    //   （经 databoks 转引 BPS 原始数字，3 级，2026-09-08 核）。
    //   **「印尼第四大城市」这个名次已删**：多个来源显示勿加泗（2023 年约 254 万）可能已超过万隆，
    //   没查到 BPS 官方城市人口排名表能确认第四这个具体名次 —— 按红线不写没核实的名次。
    howItWorks:
      "Bandung is the capital of West Java, with an elected mayor and council — directly elected by residents since 2008 — and 30 districts (kecamatan); with about 2.61 million people in 2024 it is one of Indonesia's most populous cities, while the Bandung Basin metropolitan area holds about 9 million, with Bandung Regency, West Bandung Regency and the city of Cimahi under governments of their own. The city sits in a basin ringed by volcanoes at about 768 m, cool enough that the Dutch planned it as a resort, and the Art Deco of Braga Street and Gedung Sate dates from that era. Sundanese is the everyday language. The Whoosh high-speed railway of 2023 reaches Jakarta in about 40 minutes, but its stations at Padalarang and Tegalluar lie outside the city. Addresses carry RT/RW neighbourhood numbers below the street, and travel depends on cars and motorcycles in heavy congestion. Newcomers most often go wrong by taking Bandung for Jakarta's weekend garden, when it is the centre of a basin of 9 million people.",
    layout:
      "The old town centre preserves substantial Dutch-era Art Deco architecture, with Jalan Asia Afrika, home to the Asian-African Conference Museum, forming the historic core; the city is ringed by volcanoes and tea plantations, with Mount Tangkuban Perahu to the north and Mount Kawah Putih to the south being popular day trips.",
    // gettingAround sources: BDO：印尼交通部宣布自 2026-09-17 起恢复喷气机商业航班（跑道翻修与救援等级升级完成），国际航线目标 2026 年 10 月（2 级，2026-09-12 核）。KJT 截至 2026-06 只有 Scoot 每周两班新加坡航线。⚠️ 本条写的是「已宣布自某日恢复」，**恢复本身尚未发生**，下一轮回来确认是否如期。
    gettingAround:
      "Husein Sastranegara Airport (BDO) is about 4 km from the city centre; since October 2023 most jet services have moved to West Java International Airport (KJT), and Indonesia's transport ministry has announced that BDO resumes commercial jet flights from 17 September 2026, so check the airport's latest notices for the routes actually operating; a toll road and rail line connect Bandung to Jakarta, about 2.5–3 hours by road; taxis, ride-hailing apps and angkot minibuses are the main ways to get around town.",
    culture:
      "The official language is Indonesian, with Sundanese spoken locally. Bandung hosted the 1955 Bandung Conference, commemorated at the Asian-African Conference Museum; the city's cool climate lends itself to relatively casual dress, and Sundanese cuisine is a local specialty. Tipping isn't expected.",
    seeAndDo:
      "The Asian-African Conference Museum; a hike around the Tangkuban Perahu volcanic crater; the sulphur lake at Kawah Putih; the Art Deco district around the Bandung Institute of Technology; nearby tea plantations and hot springs.",
    whenAndTips:
      "Bandung's climate is cool year-round, making it a popular escape from coastal heat; the dry season (May–September) is best for volcano hikes, and the Jakarta–Bandung toll road can be heavily congested on weekends and holidays.",
  },
  medan: {
    identity:
      "Medan is Sumatra's largest city, with a population of about 2.35 million (2024, BPS); it is the capital of North Sumatra province and the island's leading economic and trade centre, and a gateway to Lake Toba and the Bukit Lawang orangutan sanctuary.",
    // howItWorks sources: 棉兰市 2024 年 2,354,446（BPS 男女分项合计，经 databoks 转引 BPS 原始表，3 级，2026-09-08 核）。
    //   **原来写的「2024 年约 249 万」是年份错位**：2,494,512 是棉兰 **2020 年人口普查**数，
    //   被标成了 2024 年。识别这类错误的办法是**把数字放回它自己的年份序列里看**：
    //   2020 普查 249 万 → 2024 实测 235 万，是下降的。
    howItWorks:
      "Medan is the capital of North Sumatra, with an elected mayor and council and 21 districts (kecamatan); with about 2.35 million people in 2024 it is the most populous city outside Java, while the Mebidangro metropolitan area with Binjai, Deli Serdang and Karo holds about 4.94 million. The city grew out of the tobacco plantations of the 1860s: the Deli Railway carried tobacco, rubber and palm oil to the port of Belawan 19 km north, and the Kesawan old street, the Maimun Palace and the Great Mosque survive from that era. Batak, Javanese, Chinese, Malay and Tamil communities make up the city, about two-thirds Muslim and a quarter Christian. Addresses carry RT/RW neighbourhood numbers below the street. Kualanamu Airport, 39 km south-east and opened in 2013, was Indonesia's first with a direct rail link, while travel in the city depends on becak, minibuses and cars. Newcomers most often go wrong by treating Medan only as the gateway to Lake Toba, when it is Sumatra's largest city with a full history and street life of its own.",
    layout:
      "The old town centre preserves Dutch colonial buildings and the Sultanate of Deli's Maimun Palace, with a diverse population spanning Chinese, Malay, Batak and Indian communities among others; Lake Toba is about 4–5 hours south by road, and Bukit Lawang about 3 hours west.",
    gettingAround:
      "Kualanamu International Airport (KNO) is about 39 km from the city centre with a direct airport rail link; taxis and ride-hailing apps are the main way to get around town, and reaching Lake Toba or Bukit Lawang typically requires a hired car or long-distance bus.",
    culture:
      "The official language is Indonesian, and Medan's population and faiths are notably diverse — some areas are predominantly halal, while Chinese-majority districts offer non-halal dining as well; shoes come off before entering a mosque and women should carry a headscarf. Medan is known for its fusion of culinary traditions; tipping isn't expected.",
    seeAndDo:
      "Maimun Palace (the Sultanate of Deli's residence); the Al Mashun Grand Mosque; the old colonial architecture district; using Medan as a base to circle Lake Toba (Samosir Island) or spot wild orangutans at Bukit Lawang.",
    whenAndTips:
      "Allow at least 2–3 days for a Lake Toba or Bukit Lawang trip; road conditions are generally better in the dry season (roughly May–September), while mountain roads can be affected by rain in the wet season.",
  },
  makassar: {
    // identity sources: 人口：2025 年约 149 万（与本条目 howItWorks 一致）。原 identity 把年份剥掉了。**未取得 BPS 一手数字，本轮按 3 级记**。「苏拉威西岛最大城市」排名可信（南苏拉威西省会 + 主要港口）。2026-09-10 核。
    identity:
      "Makassar is the largest city on Sulawesi, with a population of about 1.49 million in 2025; it is the capital of South Sulawesi province and the island's leading port and trading centre, and the gateway to the Tana Toraja highlands.",
    // howItWorks sources: Wikipedia (2026-09): Makassar (South Sulawesi capital; 15 kecamatan; 2025 pop ~1.49 million; Mamminasata ~2.8 million; renamed from Ujung Pandang 1999); Subdivisions of Indonesia
    howItWorks:
      "Makassar is the capital of South Sulawesi, with an elected mayor and council and 15 districts (kecamatan); with about 1.49 million people in 2025 it is the largest city in eastern Indonesia, while the Mamminasata metropolitan area with Maros, Gowa and Takalar holds about 2.8 million. From 1971 to 1999 it was called Ujung Pandang before reverting to its old name. The city grew around its port: Fort Rotterdam is the Dutch stronghold, the pinisi sailing ships of the Bugis and Makassar peoples still moor in the harbour, and Losari Beach is a seafront square built on reclaimed land. It is the air and sea hub for Papua and Maluku, and most flights east change here. The seafaring tradition of Bugis-Makassar culture is the city's foundation. Addresses carry RT/RW neighbourhood numbers below the street, and travel depends on cars, motorcycles and buses. Newcomers most often go wrong by taking Makassar for a stopover on the way to Toraja, when it is the central city of the whole of eastern Indonesia.",
    layout:
      "The city runs along the Makassar Strait; the old town around Fort Rotterdam preserves Dutch and Portuguese-era colonial buildings, and Losari Beach promenade is a popular spot for evening sunsets; Tana Toraja lies about 8–9 hours north by road.",
    gettingAround:
      "Sultan Hasanuddin International Airport (UPG) is about 21 km from the city centre and is Sulawesi's main aviation hub; taxis, ride-hailing apps and angkot minibuses are the main ways to get around town, and reaching Tana Toraja usually means a long-distance bus or hired car.",
    culture:
      "The official language is Indonesian, with Makassarese and Buginese spoken locally. Makassar is Muslim-majority — shoes come off before entering a mosque and women should carry a headscarf; the local Bugis people have a long historical tradition of traditional wooden shipbuilding (the pinisi schooner). Tipping isn't expected.",
    seeAndDo:
      "Fort Rotterdam (a Dutch-era colonial fortress); sunset along Losari Beach promenade; the Islamic tomb complex at Barombong; using Makassar as a base to visit Tana Toraja's traditional boat-shaped houses and funeral ceremony culture.",
    whenAndTips:
      "Allow at least two days for a Tana Toraja trip, given the long mountain drive; the dry season (roughly May–September) offers better road conditions. If the opportunity arises to observe a traditional Torajan funeral ceremony, learn local etiquette in advance and be respectful.",
  },
  "labuan-bajo": {
    // identity sources: 人口：镇区 2024 年中约 7,226（与本条目 howItWorks 一致）；科莫多县（kecamatan）同期 62,224。**原文「约 3 万」两个口径都对不上、查无出处**，且与本条目 howItWorks 自相矛盾。2026-09-10 核。
    identity:
      "Labuan Bajo is a small port town at the western tip of Flores, with a population of about 7,200 in mid-2024; it is the core gateway for exploring Komodo National Park and the surrounding islands, and has rapidly grown into an international tourism town in recent years thanks to diving and island-hopping speedboat trips.",
    // howItWorks sources: 岛屿数：官方与各方一致为 **29 座**（3 座大岛 + 26 座小岛），面积约 1,733 平方公里；原文的「128 座」查无任何出处。巨蜥分布：野生种群全球唯一，但约三分之一在邻近的弗洛雷斯岛、多在公园边界之外，故正文改为「这些岛屿与邻近弗洛雷斯岛沿海一带」。1991 年列入世界遗产属实；公园 1980 年设立（公园官方站，1 级）。2026-09-12 核。
    howItWorks:
      "Labuan Bajo is a fishing town and the seat of West Manggarai Regency in East Nusa Tenggara, Indonesia, at the western tip of Flores, with about 7,226 people in mid-2024; Indonesia runs on regional autonomy, the heads of provinces and of regencies and cities alike being directly elected, the regency handling local affairs while the national park answers to central forestry and environment authorities, the two systems running side by side. The town's role is gateway: Komodo National Park is made of 29 islands — Komodo, Rinca and Padar plus 26 smaller ones — and holds the world's only wild population of Komodo dragons, which also live along the nearby coast of Flores; the park was inscribed as World Heritage in 1991, and nearly every boat into it leaves from this harbour. In 2018 Indonesia named it one of five super-priority tourism destinations, meant to draw visitors away from Bali, and a great deal of accommodation followed — thirteen five-star hotels and close to a hundred other places to stay by 2019. That growth brings pressure: the park and the area around it produce an average of about thirteen tonnes of rubbish a day, much of it plastic that cannot be recycled. Komodo Airport lies 3 km out with direct flights from Bali. Newcomers most often go wrong by expecting to see dragons in town, when they live on a few islands reached only by boat.",
    layout:
      "The town sits along a harbour, its main street lined with hotels, dive shops and restaurants; visiting Komodo National Park requires a boat from the harbour, whether as a single-day trip or a multi-day island-hopping cruise.",
    gettingAround:
      "Komodo Airport (LBJ) is about 2 km from the town centre and is western Flores' main air gateway; most of the town is walkable, and visiting Komodo National Park requires booking a boat through the harbour.",
    culture:
      "The official language is Indonesian. Flores has historically been shaped by Portuguese and Dutch Catholic missionary activity and is one of the few Catholic-majority regions in Indonesia, differing from the country's overall Muslim-majority makeup, which also means a broader range of dining options here. Bring sunscreen and motion-sickness medication for liveaboard island-hopping trips.",
    seeAndDo:
      "Komodo National Park (Komodo dragon spotting); the Padar Island viewpoint overlooking the archipelago; snorkelling at Pink Beach; a sunset island-hopping trip to Kanawa Island; nearby coral reef dive sites.",
    whenAndTips:
      "The dry season (April–October) brings calmer seas and is the best time for island-hopping and diving; the wet season (November–March) occasionally brings strong winds that can affect boat trips — confirm boat arrangements in advance.",
  },
  balikpapan: {
    // identity sources（2026-09-15 核实，update）: berandapost.com 2026-02-22、beritakaltim.co 2026-02-23 转引巴厘巴板市民政局 Disdukcapil 局长发布（3 级，两文末三位 766,502/766,052 略有出入，正文取约数）；BPS 站点 403；下一期约 2027-02
    // identity sources: 人口：2024 年中 757,418（与本条目 howItWorks 一致），原 identity 的「约 70 万」低了近 8 万且无年份。3 级。「通往努桑塔拉的主要空中门户」「新首都在建设中」已妥善带不确定性限定，不改。2026-09-10 核。
    identity:
      "Balikpapan is East Kalimantan's oil-industry city, with a registered population of about 766,000 in the second half of 2025 (Balikpapan City Civil Registry); it is one of Indonesia's most important economic centres on Borneo and the main air gateway to Nusantara, the country's new capital under construction.",
    // howItWorks sources: 与 layout 段统一为「以北」，并写明两个县名。
    howItWorks:
      "Balikpapan is a seaport city on the east coast of Borneo in East Kalimantan, Indonesia, with 757,418 residents in mid-2024; Indonesia runs on regional autonomy and the heads of provinces and of cities and regencies alike are directly elected. One relation is commonly mistaken here: Balikpapan is the largest economic centre in the province but not its capital — the capital is Samarinda to the north-east, joined to it by a toll road completed in 2021. The city exists because of oil: the first well was drilled here on 10 February 1897 as the beginning of the Indonesian oil industry, a Dutch petroleum company built works from 1907, the city and refinery were destroyed in the Second World War and rebuilt by 1950, and the state refinery remains the heart of the place while international energy companies keep regional offices and Kalimantan's financial business concentrates here. Because it was laid out around that industry, its streets and appearance are more orderly than those of Indonesian cities of similar size. It has gained a further role of late: Nusantara, the new Indonesian capital under construction, lies in the neighbouring regencies of Penajam Paser Utara and Kutai Kartanegara to the north and much of the traffic to the site passes through this city. The Sungai Wain protected forest outside town holds sun bears and proboscis monkeys. Newcomers most often go wrong by assuming it is the provincial capital, when that is Samarinda.",
    // layout sources: 方位与距离：IKN 核心区在巴厘巴板**以北**（跨北巴生巴瑟县与库泰卡塔内加拉县）；规划中的直连收费公路约 47 公里、现有道路约 90 公里／两小时。原文的「60 至 70 公里」查无出处，且与同条目 howItWorks 段的「西北」方位不一致（已统一为「以北」）。3 级，2026-09-12 核。
    layout:
      "The city runs along the Makassar Strait, its centre dominated by modern commercial districts and petroleum industry facilities; the core zone of the new capital Nusantara lies north of Balikpapan across the regencies of Penajam Paser Utara and Kutai Kartanegara, with a planned toll road of about 47 km to link the two directly and about 90 km, or two hours, by existing roads, the site of Indonesia's major ongoing capital-relocation project.",
    gettingAround:
      "Sultan Aji Muhammad Sulaiman Airport (BPN) is about 11 km from the city centre; taxis and ride-hailing apps are the main way to get around town, and reaching the Nusantara site or the Borneo interior generally requires a hired car.",
    culture:
      "The official language is Indonesian. Balikpapan is Muslim-majority — shoes come off before entering a mosque and women should carry a headscarf; as an oil-industry city, the pace of local life leans relatively business-oriented. Tipping isn't expected.",
    seeAndDo:
      "Balikpapan's mangrove conservation area; a hilltop park overlooking the city and strait; the Islamic Center Mosque; a day trip into the surrounding Bornean rainforest.",
    whenAndTips:
      "The dry season (roughly May–September) offers more reliable roads and flights; as the gateway city to a rapidly developing new capital, infrastructure here is changing quickly — check current transport and accommodation information before travelling.",
  },
  manado: {
    // identity sources: 人口：2025 年中约 46.3 万（与本条目 howItWorks 一致），原 identity 剥掉了年份。3 级。
    //   ✅ 零争议红线：宗教构成写的是「本地基督徒占多数、与全国穆斯林主体不同」——这是**万鸦老与全国**的客观人口构成对比，不是红线点名要回避的「万鸦老 vs 望加锡」两城对比，也无评价性用词，通过。
    identity:
      "Manado is the capital of North Sulawesi province, with a population of about 463,000 in mid-2025; it is a major port city in eastern Indonesia and the gateway to the Bunaken National Park diving destination, and — unlike the country's Muslim-majority makeup overall — has a Christian-majority population.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Manado (Indonesia; capital of North Sulawesi Province with about 462,658 residents in mid-2025 over 162.35 km²; the indigenous Minahasa people form the majority; Protestant Christianity is the major religion at about 62.89 per cent of residents in 2023, and the city is nicknamed the city of a thousand churches, hosting Indonesia's largest annual Christmas celebration; Bunaken National Marine Park offshore is the principal attraction; Mount Lokon, Mount Mahawu and Lake Linow nearby; Sam Ratulangi International Airport connects to major Asian cities; the local motto that all are family)
    howItWorks:
      "Manado is the capital of North Sulawesi Province in Indonesia with about 462,700 residents in mid-2025 over some 162 km²; Indonesia runs on regional autonomy, the heads of provinces and of cities and regencies alike are directly elected, and the provincial capital holds the administration, hospitals and higher education of the province. Its plainest feature is its composition: the indigenous Minahasa are the main people, about 62.89 per cent of residents were Protestant Christians in 2023, among the highest shares of any large Indonesian city, churches stand thickly through the town so that it calls itself the city of a thousand churches, and its Christmas celebration is the largest in the country. Its geography is equally particular: the city lies on the volcanic belt at the northern tip of Sulawesi, with Mount Lokon and Mount Mahawu above Tomohon to the south and Lake Linow filling a crater; offshore, Bunaken National Marine Park is known for its sheer coral walls as one of Indonesia's earliest marine parks, and divers come for it. Sam Ratulangi International Airport flies to several East Asian cities. The local cooking is known for its heat. Newcomers most often go wrong by expecting the food and festivals of other parts of Indonesia, when Manado stands apart in both.",
    layout:
      "The city runs along a bay, with the Boulevard waterfront a popular spot for sunset dining; Bunaken National Park lies in the waters north of Manado and is the area's premier diving and snorkelling destination.",
    gettingAround:
      "Sam Ratulangi International Airport (MDC) is about 13 km from the city centre; reaching Bunaken National Park requires a boat from the harbour, typically booked through a dive centre or tour operator along with a snorkelling or diving itinerary.",
    culture:
      "The official language is Indonesian, with the local Minahasan language also spoken. Manado and the surrounding North Sulawesi region were significantly shaped by Dutch colonial and Christian missionary history and are one of the few Christian-majority areas in Indonesia; pork dishes are commonly found on local menus, unlike in most of the country's predominantly halal dining scene. Tipping isn't expected.",
    seeAndDo:
      "Diving and snorkelling at Bunaken National Park; the Boulevard waterfront; the cityscape of the Manado Grand Mosque alongside numerous churches; the Minahasa highlands and lakes nearby.",
    whenAndTips:
      "April–October brings relatively calm seas, the best time for diving and snorkelling; book a Bunaken day trip a day ahead through a dive centre for boat tickets and equipment.",
  },
  "pangkalan-bun": {
    // identity sources: 邦卡兰文镇区 2024 年年中 108,814（阿鲁特南区 7 个 kelurahan + Pasir Panjang 一个 desa，
    //   引 BPS 西哥打瓦林金县统计，3 级，2026-09-08 核）。原 identity 的「约 7 万」追溯不到来源。
    identity:
      "Pangkalan Bun is a riverside town in Central Kalimantan, with a population of about 109,000 (mid-2024); it is the main gateway town for visiting Tanjung Puting National Park to see wild orangutans.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Pangkalan Bun (Indonesia; the seat of West Kotawaringin Regency in Central Kalimantan on Borneo, mostly on the eastern bank of the Arut river, with about 108,814 residents in mid-2024; Iskandar Airport connects to Jakarta, Surabaya and Semarang; Birutė Galdikas established Camp Leakey about 30 miles upriver for orangutan study and conservation, now part of Tanjung Puting National Park, reached by klotok riverboat from Kumai; a tropical rainforest climate with more than 2,600 mm of rain a year, at 24 m above sea level; the operational centre for the search after the 2014 AirAsia Flight 8501 crash in the nearby Karimata Strait)
    howItWorks:
      "Pangkalan Bun is the seat of West Kotawaringin Regency in Central Kalimantan on Borneo, Indonesia, mostly on the eastern bank of the Arut river, with about 108,800 residents in mid-2024; Indonesia runs on regional autonomy, the heads of provinces and of regencies and cities alike are directly elected, the regency handling local affairs while national parks answer to central forestry and environment authorities. The town matters as the entrance to Tanjung Puting National Park: the park lies on the peninsula to the south with no road into it, so visitors go first to the nearby port of Kumai and change to the wooden boats called klotok, going up the Sekonyer river and usually sleeping aboard — the way in is itself part of the trip. In 1971 Birutė Galdikas founded Camp Leakey about fifty kilometres upriver to study and release orangutans, and the camp is now one of the park's core areas. Iskandar Airport is at the edge of town with scheduled domestic flights. The climate is tropical rainforest with more than 2,600 mm of rain a year at just 24 m above sea level, and oil palm is the large local industry. Newcomers most often go wrong by planning a day trip to see the orangutans, when going into the park means at least one night on the boat.",
    layout:
      "The town sits along a tributary of the Arut River; visiting Tanjung Puting National Park means boarding a traditional klotok riverboat from the local dock for a journey up the Sekonyer River into the park — the area's signature way to explore.",
    // gettingAround sources: 机场距离：注册表坐标算出直线 6.7 公里；原文短于直线、不可能成立，已改。
    gettingAround:
      "Iskandar Airport (PKN) is about 6.7 km in a straight line from the town centre; the town itself is small enough to cover on foot or by motorbike taxi, and visiting the national park requires booking a boat and guide through a local tour operator.",
    culture:
      "The official language is Indonesian. Pangkalan Bun is Muslim-majority — shoes come off before entering a mosque and women should carry a headscarf; as a national-park gateway town, the pace of life here is relaxed, and most visitors come primarily to observe wildlife. Tipping isn't expected.",
    seeAndDo:
      "Orangutan viewing in Tanjung Puting National Park (feeding stations such as Camp Leakey); a liveaboard trip along the Sekonyer River; watching proboscis monkeys and tropical birdlife within the park.",
    whenAndTips:
      "Liveaboard trips typically run 2–3 days — book in advance through a reputable operator and confirm the boat's and guide's credentials; the dry season (roughly May–September) offers more stable river conditions and better wildlife viewing.",
  },
};
