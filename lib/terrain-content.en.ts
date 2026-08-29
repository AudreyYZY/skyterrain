/**
 * Terrain lessons — English.
 *
 * Written to the same authoritative register as the Chinese set (standard
 * physical-geography facts from textbooks, the Chinese Academy of Sciences,
 * the Ministry of Natural Resources, China National Geographic). Not literary
 * voiceover, not machine translation of the Chinese.
 *
 * 6 sections, same order as types/terrain.ts TerrainLesson:
 *   seeing · formation · observation · distinguish · concept · history
 */

import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_CONTENT_EN: Record<string, TerrainLesson> = {
  // ============ Mountain systems ============
  qinling: {
    seeing:
      "The Qinling Mountains run east–west across the exact middle of China; the range system as a whole is about 1,600 km long. They are one of the country's most important natural dividing lines: warm-temperate dry farming to the north, subtropical rice country to the south. From the air the range splits the palette in two — the yellow Guanzhong Plain and Loess Plateau on the north side, the deep green Hanzhong and Sichuan basins on the south.",
    formation:
      "The Qinling was raised by the collision of the North China and Yangtze blocks and is built mainly of granite and of metamorphic rock such as gneiss and schist. Ongoing uplift along a major fault on its northern edge makes the north slope steep — it drops almost straight onto the Guanzhong Plain — while the south slope descends gently. The summit, Mount Taibai (3,771 m), is generally regarded as the highest point in mainland China east of the Tibetan Plateau; its upper slopes keep horns, cirques and glacial lakes from the Quaternary ice ages, and Taibai is one of the few mountains in eastern China with confirmed glacial traces.",
    observation:
      "Identify the Qinling by its trend first: one continuous east–west ridge, not the scattered blocks of other ranges. Then look at the north face — it stands like a wall at the edge of the plain, with almost no foothills. In winter the crest holds snow, and snow on the summit often lasts into early summer, while the basins to the south stay bare. Mount Taibai and Mount Hua (a granite fault block, one of the Five Great Mountains) are the two clearest landmarks.",
    distinguish:
      "The Qinling and the Nanling are both east–west watershed ranges and are easy to confuse. The Qinling is high and continuous, holds summer snow on its highest peaks, and marks the climate boundary between warm-temperate and subtropical China; the Nanling is low and broken, mostly around 1,000 m, snow-free, and only separates the Yangtze and Pearl river systems. Compared with the Qilian: the Qilian runs on a slant (NW–SE) and has large modern glaciers on its summits, while the Qinling runs true east–west and has only Quaternary glacial traces, no modern glaciers.",
    concept:
      "The Qinling is often called \"China's central air conditioner.\" It blocks cold air pushing south in winter and traps moisture moving north in summer, so rainfall, coldest-month temperature, vegetation and farming all differ across it — roughly the 800 mm annual-rainfall line and the 0 °C January isotherm. It is also the drainage divide between the Yangtze and the Yellow River, and the popular boundary between north and south China.",
    history:
      "\"The road to Shu is harder than the road to heaven\" is about crossing the Qinling into Sichuan. The range is also key habitat for the giant panda, crested ibis and golden monkey, with reserves at Foping and Zhouzhi. Ancient plank roads such as the Ziwu and Baoxie routes threaded the mountains, linking Guanzhong with Hanzhong and Sichuan.",
  },

  qilian: {
    seeing:
      "The Qilian Mountains lie on the Gansu–Qinghai border and are the water tower and natural shield of the Hexi Corridor. Their summits carry permanent snow and thousands of glaciers, whose meltwater feeds a string of oasis cities — Wuwei, Zhangye, Jiuquan. From the air they sit as a white band between the arid corridor and gobi to the north and the moist grasslands of Qinghai to the south.",
    formation:
      "The Qilian is the north-eastern edge of the Tibetan Plateau, still rising under the northward push of the Indian plate. It is a set of parallel ridges and valleys trending NW–SE, built of Palaeozoic metamorphic rock and granite. China's second glacier inventory counts about 2,680 glaciers here, roughly 1,600 km² of ice — the solid reservoir of the Hexi Corridor. The highest summit, Tuanjie (Kangze'gyai) Peak, is about 5,800 m, with survey figures ranging from 5,808 to 5,827 m.",
    observation:
      "The easiest tell is the slant — the crest runs NW–SE, clearly different from the true east–west Qinling. Snow and ice run together along the summits, and a row of triangular alluvial fans spreads out at the foot, each fan edge turning green as an oasis. The dead-straight Hexi Corridor lies below the north slope; the open grasslands of Qinghai below the south — one side yellow, the other green.",
    distinguish:
      "The Qilian and the Qinling are both large ranges east of the Tibetan Plateau, but the Qilian is farther west, higher and colder, with connected glaciers and a snow line above 4,500 m; the Qinling runs true east–west and has no modern glaciers at all. Versus the Kunlun: the Kunlun is longer and farther south, the border range between the Tarim Basin and the plateau; the Qilian is shorter, wedged between the Tibetan and Inner Mongolian plateaus.",
    concept:
      "The Qilian is a textbook block-faulted range — not one arch but several parallel ridges sliced by faults, ridge and valley alternating. Its glaciers and snow feed the three inland rivers of the Hexi Corridor (the Shiyang, Hei and Shule). Without the Qilian there would be no corridor oases and no Silk Road route through here.",
    history:
      "Han-dynasty commentary records that in the Xiongnu language qilian meant \"heaven,\" making Qilian literally \"Heaven Mountain.\" The Han general Huo Qubing broke the Xiongnu here, and the histories preserve their lament: \"lose our Qilian Mountains and our herds will not thrive.\" The Hexi Corridor then entered the Central Plains realm and became the throat of the Silk Road.",
  },

  tianshan: {
    seeing:
      "The Tianshan crosses central Xinjiang and splits the region into a southern and a northern half. The whole system runs about 2,500 km east–west, some 1,700 km of it inside China, and is one of the largest independent latitudinal (east–west) mountain systems on Earth. From the air you see white peaks and glaciers, a ring of yellow-green alluvial fans and oases at the foot, and beyond them the Taklamakan and Gurbantunggut deserts.",
    formation:
      "The Tianshan is a Palaeozoic fold system re-uplifted in the Cenozoic under the push of the Indian plate — geomorphologists call it a \"regenerated\" range. It is made of several parallel ranges with basins between them (the Ili valley, the Yanqi basin). Its highest point, Tomur Peak (about 7,443 m), sits on the China–Kyrgyzstan border; Bogda Peak (5,445 m), just beside Ürümqi, is the best-known landmark.",
    observation:
      "Three things identify the Tianshan: a continuous set of parallel east–west ridges; large modern glaciers and permanent snow on the summits; and a row of huge alluvial fans at the foot, each fan edge holding an oasis city (Ürümqi, Shihezi, Korla). Heavenly Lake (Tianchi), a glacial lake below Bogda Peak, is deep blue and the easiest single point to pick out.",
    distinguish:
      "The Tianshan and the Altai both sit in northern Xinjiang. The Tianshan is at lower latitude, with a high snow line (3,600–4,200 m), a wide belt of piedmont oases, and enormous east–west length; the Altai is farther north, with a low snow line (about 2,800 m), dense forest, a NW–SE trend, and a fraction of the length. Versus the Qilian: the Tianshan is longer and encloses large basins; the Qilian is shorter and farther east.",
    concept:
      "The Tianshan is Xinjiang's climate wall and its \"wet island\": the north slope faces the westerlies and is moist enough for forest and grassland, while the south slope is dry and drops straight to desert. Its glacier meltwater is the lifeline of almost every oasis on both sides — hence the saying that Tianshan snowmelt is \"as precious as oil.\"",
    history:
      "The northern foot of the Tianshan carried the northern Silk Road; the southern foot, the middle road. Cities such as Ürümqi and Yining were all built on oases watered by Tianshan snowmelt. In 2013 Xinjiang Tianshan was inscribed as a World Natural Heritage site for its glaciers, snowy peaks and vertical natural zones.",
  },

  altai: {
    seeing:
      "The Altai Mountains sit at the far north of Xinjiang, spanning China, Kazakhstan, Russia and Mongolia. \"Altai\" is generally taken to come from a Turkic–Mongolic word for \"gold,\" and the region has historically produced placer gold. It holds greenish glacial lakes and stands of conifer forest, of which Kanas Lake is the best known.",
    formation:
      "The Altai's folding dates from the Palaeozoic; Quaternary glaciation was strong here and left U-shaped valleys, cirques and moraine-dammed lakes. It trends NW–SE. The Chinese section is over 500 km long, with ridges mostly above 3,000 m; the highest point, Youyi (Friendship) Peak, reaches 4,374 m at the China–Russia–Mongolia junction. Kanas Lake is generally explained as a glacially scoured valley dammed by terminal moraine.",
    observation:
      "The Altai's forest is denser than the Tianshan's: its slopes carry taiga — Siberian larch, Siberian spruce, Siberian fir and Siberian pine — a conifer forest that in China is found only here and in the northern Greater Khingan. Winding glacial lakes lie in the valley floors, their water tinged green (Kanas is known as a \"colour-changing lake\"). The range runs on a slant (NW–SE), unlike the true east–west Tianshan.",
    distinguish:
      "Against the Tianshan: the Altai is at higher latitude, its snow line is lower, its forest is denser, the Chinese section of the range is shorter, and it runs on a slant. It is also the only part of China draining to the Arctic Ocean — the Irtysh River rises here and reaches the Arctic via Russia, whereas Xinjiang's other rivers cannot leave the region (internal drainage).",
    concept:
      "At its high latitude (about 47–49° N) the Altai's lowest snow line drops to around 2,800 m — the lowest in China. Because the latitude is high and temperatures low, its vertical zones are complete: from piedmont desert-steppe up through mountain forest (tree line around 1,800 m) and subalpine meadow to alpine snow and ice.",
    history:
      "The Altai has long been pasture for nomadic peoples, and Kazakh herders still move their flocks here seasonally. Rock art and deer stones in the mountains record the activity of steppe peoples. Tuvan villages around Kanas keep log-cabin architecture and distinctive folk customs.",
  },

  kunlun: {
    seeing:
      "The Kunlun is one of China's longest ranges — about 2,500 km from the Pamirs in the west to Qinghai in the east — and is called the \"ancestor of ten thousand mountains.\" It is the great barrier between the Tarim Basin and the Tibetan Plateau: the north slope drops steeply to desert, the south slope grades gently onto the plateau.",
    formation:
      "The Kunlun rose with the Tibetan Plateau under the India–Eurasia collision. It is built mainly of metamorphic rock and granite and trends roughly east–west. Where its western section meets the Pamirs it carries 7,000 m peaks such as Kongur (about 7,649 m) and Muztagh Ata (about 7,546 m); the eastern section lowers gradually and joins the Altun and Qilian ranges.",
    observation:
      "From the air the Kunlun is an extremely long, extremely continuous east–west wall of snow mountains. To the north lies the yellow sand sea of the Tarim Basin (the Taklamakan), with almost no transition; to the south, the smoothly rolling high country of the Tibetan Plateau. Yuzhu Peak and the Kunlun Pass (4,768 m, where the Qinghai–Tibet Highway crosses) are good reference points.",
    distinguish:
      "The Kunlun and the Karakoram sound alike and lie next to each other, but they are not the same: the Karakoram is south-west of the Kunlun, closer to Pakistan, steeper, with denser glaciers and K2 (Qogir, 8,611 m, the world's second-highest peak). The Kunlun is broader, longer, older, with a higher snow line.",
    concept:
      "The Kunlun is the divide between two great geographic units — the internally drained, arid Tarim Basin and the cold, high Tibetan Plateau. Its glacier meltwater waters the oases of Hotan, Ruoqiang and others along the southern rim of the Tarim. Because the north slope drops straight to desert with almost no transition, the northern foot of the Kunlun is one of the most abrupt relief contrasts in China.",
    history:
      "In Chinese myth the Kunlun is the home of the gods and the Queen Mother of the West, the source of \"Kunlun culture.\" The southern Silk Road ran along its northern foot, stringing together the oasis kingdoms of Yutian (Khotan), Qiemo (Cherchen) and Jingjue.",
  },

  karakoram: {
    seeing:
      "The Karakoram sits at the far south-west of Xinjiang on the China–Pakistan border, one of the densest concentrations of extreme peaks on Earth. It has four 8,000 m summits, including K2 (Qogir, 8,611 m), the world's second-highest mountain. \"Karakoram\" means \"black gravel mountains.\"",
    formation:
      "Like the Himalaya, the Karakoram belongs to the belt of the India–Eurasia collision; it rises fast and is deeply cut, making the terrain exceptionally steep. It holds some of the largest glaciers outside the polar regions — the Siachen is about 70 km long, the Biafo about 63 km. The China–Pakistan Highway crosses at the Khunjerab Pass, about 4,700 m (the true Karakoram Pass lies to the east at about 5,575 m, with no road).",
    observation:
      "From the air the Karakoram is a dense field of sharp black rock peaks and white glaciers, with peak-to-valley relief often 3,000–4,000 m — more jagged than the main Kunlun crest. K2 is a near-perfect pyramid rising as an isolated peak.",
    distinguish:
      "See the Kunlun entry. Compared with the Himalaya: the Himalaya is longer, bowed, and the first barrier to Indian Ocean moisture, with a very wet south slope and a very dry north slope; the Karakoram is more continental and drier overall, yet its glaciers are larger, sustained by extreme altitude and cold.",
    concept:
      "The Karakoram is the classic case of \"why glaciers can exist in a dry region\": precipitation is low, but the altitude is so great and temperatures so low that both evaporation and melting are slow, so the glaciers are actually more massive than in wetter ranges. It is also an important source of the Indus.",
    history:
      "The Karakoram Highway, built jointly by China and Pakistan in the 1970s (the China–Pakistan Friendship Highway), crosses here and is one of the highest paved international roads in the world. K2 — remote, storm-prone and technically hard — has a markedly higher climbing death rate than Everest and is regarded as a more dangerous 8,000 m peak.",
  },

  taihang: {
    seeing:
      "The Taihang Mountains run through north China as the dividing line between the Loess Plateau and the North China Plain, trending NE–SW for about 400 km. Their signature is \"steep east, gentle west\": the east slope is a line of cliffs dropping straight onto the plain, while the west slope grades up onto the plateau.",
    formation:
      "The Taihang is a fault block of the North China platform, sharply uplifted along a fault on its eastern edge, which produced the steep east face. The upper rock is gently dipping red quartz sandstone and limestone, cut by streams into the layered red cliffs of the \"Zhangshiyan landform.\" The main peak is usually taken to be Xiaowutai Shan in Hebei, at 2,882 m; Wutai Shan and the sacred Hengshan, both in Shanxi, are sometimes counted in the northern Taihang.",
    observation:
      "Identify the Taihang by its east face: a near-vertical red rock wall with the endless North China Plain right at its foot and almost no hill transition. The mountains hold many \"cliff-hanging roads\" and villages perched on the escarpment (Guoliang, Xiyaigou). To the west the land steps up onto the gullied Loess Plateau.",
    distinguish:
      "The Taihang and the Qinling are both important boundary ranges, but the Taihang runs north–south (NE–SW) and separates plateau from plain (a landform boundary); the Qinling runs east–west and separates south from north China (a climate boundary). Versus the Lüliang Mountains: the Lüliang lie inside Shanxi, the divide between the Yellow and Fen rivers, farther west and deeper into the plateau.",
    concept:
      "The Taihang is one of the dividing lines between China's second topographic step (the Loess Plateau) and its third step (the North China Plain). The \"Taihang and Wangwu mountains\" of the fable \"The Foolish Old Man Moves the Mountains\" are here. Several rivers cut through the range at gaps called xing (\"the eight passes of the Taihang\"), the historic routes between Shanxi and Hebei.",
    history:
      "The eight passes of the Taihang have always been contested ground. During the war against Japan, the Eighth Route Army built the Shanxi–Hebei–Shandong–Henan base area on the range, the source of the phrase \"Taihang spirit.\"",
  },

  daxinganling: {
    seeing:
      "The Greater Khingan Range runs through north-east China, trending NE–SW, the divide between the Inner Mongolian Plateau and the Northeast (Songnen) Plain and one of China's largest state forest regions. It is not high — mostly 1,100–1,400 m — with rounded, gentle summits, but the forest is so dense the whole range reads as one dark green mass.",
    formation:
      "The Greater Khingan is a Palaeozoic fold range long worn down and then tilted and uplifted as a block: the west slope grades gently onto the Inner Mongolian Plateau, the east slope drops along a fault to the Songnen Plain — clearly asymmetric. The southern section had volcanic activity, and cones and crater lakes survive around Arxan. The high point, Huanggang Peak, reaches 2,029 m.",
    observation:
      "From the air the Greater Khingan is a rounded, unbroken, dark-green sea of forest — no sharp peaks, no bare rock, no snow. The clearest feature is the east slope: a sharp line between the forest above and the checkerboard farm fields of the Songnen Plain below, with a marked drop.",
    distinguish:
      "The Greater and Lesser Khingan: the Greater Khingan is the long north–south body dividing the Inner Mongolian Plateau from the Northeast Plain; the Lesser Khingan lies to its north-east, trends NW–SE, and sits between the Songnen and Sanjiang plains, lower still. Versus Changbai Shan: Changbai is an isolated volcanic dome with a crater lake and greater height (2,691 m); the Greater Khingan is a continuous, rounded fold range.",
    concept:
      "The Greater Khingan roughly follows China's 400 mm annual-rainfall line and is the boundary between semi-humid and semi-arid China, and between forest and steppe. To the west is the Hulunbuir grassland; to the east, farmland and forest. It is also one of China's important \"green lungs\" and timber-forest bases.",
    history:
      "The Greater Khingan is traditional hunting ground for the Oroqen and Ewenki peoples. The catastrophic fire of May 1987 burned about 1.01 million hectares, the worst forest fire since 1949, after which the state greatly changed how the forest region is managed.",
  },

  changbai: {
    seeing:
      "Changbai Shan sits in south-eastern Jilin on the China–North Korea border, a large dormant volcano and the source of three great rivers — the Songhua, the Tumen and the Yalu. Its summit crater lake, Heaven Lake (Tianchi), is a near-circular caldera lake at 2,189 m, one of the highest and deepest lakes in China.",
    formation:
      "Changbai Shan is a composite stratovolcano built by repeated Cenozoic eruptions: basaltic lava first spread a broad shield-shaped plateau, then a steeper cone of trachyte and pyroclastic rock rose on top. Its most recent large eruption, around 946 CE (the \"Millennium Eruption\"), was one of the largest on Earth in the past two thousand years; the summit then collapsed into a caldera that filled to form Heaven Lake.",
    observation:
      "Amid the low, gentle hills of the north-east, Changbai Shan stands out sharply: an isolated, massive, nearly symmetrical cone, its top a jagged ring of crater wall around the deep blue circular lake. The slopes show clean vertical vegetation belts, from Korean pine forest at the foot to alpine tundra at the top.",
    distinguish:
      "Changbai versus the Greater Khingan: Changbai is an isolated volcano with a crater lake, high and symmetrical; the Greater Khingan is a continuous rounded fold range with no crater lake. Changbai's Heaven Lake versus the Tianshan's Heaven Lake: the former is a crater lake (circular, deep, at the summit), the latter a glacially scoured, moraine-dammed lake (elongated, on the mountainside).",
    concept:
      "Changbai Shan is the model of \"volcanic landforms\": a crater lake at the centre, then lava plateaus, then volcanic-debris slopes outward. Heaven Lake is a classic caldera lake — formed by summit collapse after the eruption, not the low, flat maar type. Though often called dormant, there is still a magma chamber below, and it is an active volcano requiring long-term monitoring.",
    history:
      "Changbai Shan is revered by the Manchu as their place of origin and was long closed to entry under the Qing. It is also regarded as a sacred mountain on the Korean Peninsula. A 1962 China–North Korea boundary treaty set the border, dividing Heaven Lake between the two countries, with a little over half on the Chinese side.",
  },

  hengduan: {
    seeing:
      "The Hengduan Mountains, in south-west China, are the country's largest belt of ranges running north–south, \"cutting across\" (heng duan) the connection between the Tibetan Plateau and the Sichuan Basin and Yunnan–Guizhou Plateau. The Jinsha (upper Yangtze), Lancang (Mekong) and Nu (Salween) rivers are squeezed here into parallel southward courses — the \"Three Parallel Rivers\" World Natural Heritage site.",
    formation:
      "The Hengduan Mountains result from the northward push of the Indian plate forcing crust to \"escape\" toward the south-east, so a series of ranges and deep gorges line up north–south. Uplift is fast and river downcutting is fierce, producing enormous relief. Gongga Shan (7,509 m) is the highest peak in Sichuan and in the Hengduan system.",
    observation:
      "From the air the Hengduan Mountains look like a washboard of north–south ridges and canyons: a snow range, then a deep gorge, then another snow range, with rivers as thin threads in the valley floors. This contrasts sharply with the east–west ranges around them (Qinling, Daba Shan). Gongga Shan, Meili Xue Shan (Kawagarbo) and Tiger Leaping Gorge are the landmarks.",
    distinguish:
      "The Hengduan versus the Tibetan Plateau: the Hengduan is high, gorge-cut and violently dissected, the steep transition belt from plateau to lowland; the plateau itself is comparatively flat. The Hengduan versus the Yunnan–Guizhou Plateau: the latter is uplifted and dissected high country, but far less rugged than the Hengduan.",
    concept:
      "The Hengduan Mountains are a global biodiversity hotspot: the north–south gorges act as corridors for plants and animals to migrate, and the huge vertical relief (a single mountain runs from subtropical valley floor to alpine snow) creates \"four seasons on one mountain, different weather every few miles.\"",
    history:
      "The Hengduan region is the heart of the Tea Horse Road and home to Tibetan, Yi, Naxi, Lisu and other peoples. The Three Parallel Rivers area (Jinsha, Lancang, Nu) was inscribed as World Natural Heritage in 2003.",
  },

  himalaya: {
    seeing:
      "The Himalaya is the highest mountain range on Earth, a great arc more than 2,400 km long along the southern edge of the Tibetan Plateau — the vast boundary range between China and South Asia. Of the world's fourteen 8,000 m peaks, ten lie in or near this range. Mount Everest (Qomolangma), at 8,848.86 m, on the China–Nepal border, is the highest point on the planet.",
    formation:
      "About 50 million years ago the Indian plate struck Eurasia; sea-floor sediments were squeezed and lifted into mountains, and the range is still slowly rising, on the order of a few millimetres a year. That is why Ordovician marine fossils can be found in the limestone near the summit of Everest. The rock is sedimentary and metamorphic.",
    observation:
      "From the air the Himalaya is a row of sharp pyramid peaks forming a white arc-wall. The south slope is steep and wet — facing the Indian Ocean monsoon, cloud-wrapped, densely forested — while the north slope is gentle and dry, up on the Tibetan Plateau, clear and rain-shadowed. Everest, Lhotse and Makalu cluster along the China–Nepal border.",
    distinguish:
      "The Himalaya versus the Gangdise and Nyainqentanglha ranges (also in the southern Tibetan Plateau): the Himalaya is the southernmost row, the highest, and the one that stops the monsoon directly; the others lie farther north and are somewhat lower. Versus the Karakoram: the Karakoram is at the north-west end, more continental and drier, but with equally huge glaciers.",
    concept:
      "The Himalaya is \"the wall of the monsoon\": in summer warm, moist air from the Indian Ocean is blocked, leaving most of its rain on the south slope, and by the time the air crosses the crest almost no moisture is left — which is why the Tibetan Plateau and Xinjiang are so dry. It is also the source region of the Ganges, the Indus and the Yarlung Tsangpo–Brahmaputra, part of Asia's \"water tower.\"",
    history:
      "Everest was first summited by humans in 1953. In 1960 a Chinese team made the first ascent from the north (Chinese) side. In 2020 China and Nepal jointly announced the latest elevation of 8,848.86 m.",
  },

  nanling: {
    seeing:
      "The Nanling is a belt of low mountains straddling Hunan, Jiangxi, Guangdong and Guangxi, made up of five ranges — Yuecheng, Dupang, Mengzhu, Qitian and Dayu — hence the name \"Five Ridges.\" It is the drainage divide between the Yangtze and Pearl river systems and the transition zone between central and southern China.",
    formation:
      "The Nanling is low mountains and hills formed by several phases of granite intrusion, mostly around 1,000 m, with the highest peak, Mao'er Shan, at 2,141 m. The range is discontinuous, cut into segments by rivers, with wide valleys that have always allowed passage.",
    observation:
      "From the air the Nanling is a scattered, low, green-covered hill country with no obvious main crest and no snow. Several broad gaps (the Hunan–Guangxi corridor, the Dayu Ridge road) connect north and south through it. It is completely unlike the high, continuous Qinling to its north.",
    distinguish:
      "The Nanling versus the Qinling: both are east–west watershed ranges, but the Nanling is low and broken, snow-free, and divides two river systems (a hydrological boundary); the Qinling is high and continuous, snow-capped, and divides warm-temperate from subtropical China (a climate boundary). The Nanling is only a weak barrier to climate — cold waves occasionally spill over into south China.",
    concept:
      "Low as it is, the Nanling is still an important geographic line: it roughly marks the boundary between the middle and southern subtropical zones, so double-cropped rice and tropical crops grow on the south side and not the north. It is also one of China's — and the world's — important tungsten, tin and rare-earth metallogenic belts (the \"Nanling belt\").",
    history:
      "The First Emperor of Qin had the Lingqu Canal dug to link the Xiang and Li rivers, so that Central Plains boats could cross the Nanling into the Pearl system. In the Tang, Zhang Jiuling opened the Dayu Ridge road, and the Meiguan pass became a key north–south artery.",
  },

  helan: {
    seeing:
      "The Helan Mountains stand on the Ningxia–Inner Mongolia border, running north–south for about 200 km — an isolated, sharply rising rock range. Their purpose is to block: they stop cold air and drifting sand from the north-west (the Tengger Desert) and shelter the Ningxia Plain to the east, making it a \"Jiangnan beyond the passes.\"",
    formation:
      "The Helan is a fault-block range faulted on both the east and west sides, with the central block lifted as a whole, so it is steep-sided with large relief. It is built mainly of gneiss and limestone. The high point, Aobao Geda, reaches 3,556 m.",
    observation:
      "From the air the Helan is a north–south, grey rock crest standing abruptly between two expanses of yellow: to the east the green Ningxia (Yinchuan) Plain, irrigated by diverted Yellow River water; to the west the deserts and gobi of Alxa. The lower slopes are bare rock, while shaded slopes at middle elevations carry stands of Qinghai spruce. Large alluvial fans spread at the mountain mouths.",
    distinguish:
      "The Helan versus the Liupan Mountains (both in Ningxia): the Helan is in the north, north–south, arid bare rock, blocking sand and wind; the Liupan is in the south, also north–south but wetter and forested, the divide between the Wei and Jing rivers. Versus the Yin Shan: both are boundaries between monsoon and non-monsoon, farming and herding, but the Yin Shan runs east–west across central Inner Mongolia.",
    concept:
      "The Helan roughly marks one of China's boundaries between monsoon and non-monsoon regions, and between the exterior-drainage (Yellow River) and interior-drainage zones. Rainfall differs sharply across it: the east slope can exceed 200 mm a year, the west slope less than 100 mm. Without the Helan, the Ningxia Plain would be swallowed by desert.",
    history:
      "The eastern foot of the Helan holds rock art thousands of years old — tens of thousands of images of sun gods, hunts and animals. The Western Xia dynasty built its capital at the foot of the range (modern Yinchuan), and the Western Xia royal tombs back onto the Helan. Yue Fei's poem \"Man Jiang Hong\" uses the name: \"drive the long chariot through the gap of Helan Mountain.\"",
  },

  // ============ Plateaus ============
  "qinghai-tibet": {
    seeing:
      "The Tibetan Plateau (Qinghai–Tibet Plateau) is the highest and largest plateau on Earth and also a geologically young one, averaging above 4,000 m and covering about 2.5 million km² within China — the \"roof of the world\" and \"third pole.\" The Yangtze, Yellow, Lancang–Mekong, Yarlung Tsangpo–Brahmaputra and Indus all rise here.",
    formation:
      "The plateau is the result of the Indian plate driving north into Eurasia; the crust has been thickened to about 70 km (normal continental crust is about 35 km) and lifted as a whole. It carries several roughly east–west ranges (Gangdise, Nyainqentanglha, Tanggula, Kunlun) with broad lake basins and grasslands between them.",
    observation:
      "From ten kilometres up the plateau is a vast, comparatively flat, yellow-brown highland, dotted with countless deep-blue lakes (Namtso, Selin Co, Qinghai Lake) and white snow ranges. The edges (Himalaya, Hengduan, Kunlun) are steep and broken; the interior (northern Tibet, Hoh Xil) is smooth. The air is thin and visibility extreme.",
    distinguish:
      "The Tibetan Plateau versus the Inner Mongolian and Loess plateaus: the Tibetan Plateau stands two to three thousand metres higher, is alpine and cold, and has \"high mountains on top of a plateau\"; the Inner Mongolian Plateau is flat, dry and about 1,000 m; the Loess Plateau is broken, loess-covered and 1,000–2,000 m.",
    concept:
      "The Tibetan Plateau is \"a rise of the land,\" not just \"ground that is high\": the whole-scale uplift of this thick slab of crust changed Asia's atmospheric circulation, shaped the East Asian monsoon, and made the plateau itself cold — its climatic influence reaches far beyond its own area, which is why it is called the \"driver\" of Asian climate.",
    history:
      "The plateau is the homeland of the Tibetan people; the Potala Palace and Jokhang Temple are sacred sites of Tibetan Buddhism. Tibet was peacefully liberated in 1951, the Sichuan–Tibet and Qinghai–Tibet highways opened in 1954, and the Qinghai–Tibet Railway — the highest railway in the world — opened throughout in 2006.",
  },

  loess: {
    seeing:
      "The Loess Plateau, in north-central China, has the largest and thickest loess cover on Earth, up to 100–200 m deep. Its surface is dissected into a maze of gullies, it is the main source of the Yellow River's sediment, and it is a cradle of Chinese civilisation.",
    formation:
      "Loess is not weathered from local rock; it was blown here layer by layer by north-west winds over millions of years (the \"aeolian hypothesis\"). Loess is loose, has strong vertical jointing, and erodes easily, so under running water it has formed three typical landforms — yuan (flat loess tableland), liang (long loess ridge) and mao (dome-shaped loess hill).",
    observation:
      "From the air the Loess Plateau is a yellow highland shredded by countless branching gullies, with terraces wrapping the slopes in bands. The yuan tops are still fairly flat; their edges are deeply incised ravines. The Yellow River and its tributaries (the Wei, the Fen, the Wuding) cut yellow, silt-laden channels through the loess with an extreme sediment load.",
    distinguish:
      "The Loess Plateau versus the Inner Mongolian Plateau: both are on the second topographic step, but the Inner Mongolian surface is flat and mostly grassland, while the Loess Plateau is shredded into thousands of gullies and known for dry farming and soil erosion. Versus the Yunnan–Guizhou Plateau: the latter is limestone karst (peaks, caves); the Loess Plateau is loess (yuan-liang-mao, gullies).",
    concept:
      "The Loess Plateau is a plateau because it is a large, coherent highland of 1,000–2,000 m with scarps at its edges — even though the surface is cut to pieces. Its key idea is the erodibility of loess: precisely because loess is so loose, erosion is severe, and so are cave dwellings (yaodong), homes dug straight into the loess.",
    history:
      "The Banpo site, the Yangshao culture and the Zhouyuan are all on the Loess Plateau. Yan'an is a holy site of the Chinese revolution. Decades of large-scale conversion of farmland to forest and grass and check-dam building have sharply cut the Yellow River's sediment load, and the plateau has visibly greened.",
  },

  "inner-mongolia": {
    seeing:
      "The Inner Mongolian Plateau, China's second-largest plateau, spans central and eastern Inner Mongolia at about 1,000–1,200 m. Its signature is flatness — relief is minimal, and grassland runs east to west, grading from meadow steppe through typical steppe to desert steppe and finally into desert.",
    formation:
      "The Inner Mongolian Plateau is an old, stable block with no strong tectonic disturbance for a long time; its surface has been planed very smooth and is covered by loess and wind-blown sand. Its edges (the Yin Shan, the Greater Khingan side) have scarps that separate it from the surrounding lowlands.",
    observation:
      "From the air the Inner Mongolian Plateau is a broad, monotonous, flat green (or yellow-green) surface, almost without mountains, with few and shallow rivers and the occasional saucer-shaped lake or deflation hollow. The east is the Hulunbuir grassland; the west grades into gobi and desert (the Badain Jaran, the Tengger, the Ulan Buh).",
    distinguish:
      "The Inner Mongolian Plateau versus the Loess Plateau: the Inner Mongolian is flat and given to grazing and stock-raising; the Loess Plateau is broken and given to dry farming and soil erosion. Versus the Northeast Plain: both are flat, but the Inner Mongolian Plateau is above 1,000 m with edge scarps and an arid climate, while the Northeast Plain is below 200 m, humid, and black-soil farmland.",
    concept:
      "The Inner Mongolian Plateau is \"as flat as a plain,\" so why call it a plateau? Because it meets two conditions: a fairly high elevation (above 1,000 m) and clear scarps at its edges. It lies roughly west of China's 400 mm annual-rainfall line, in the semi-arid to arid zone, naturally suited to grazing rather than crops.",
    history:
      "The plateau is traditional Mongol pasture and the stage for the Xiongnu, Turks, Khitan and Mongols in turn. The Xilingol and Hulunbuir grasslands are among China's largest and most important natural pastures. Grazing bans and rest-grazing in recent years have allowed some degraded grassland to recover.",
  },

  "yunnan-guizhou": {
    seeing:
      "The Yunnan–Guizhou Plateau, in south-west China, covers eastern Yunnan and most of Guizhou at 1,000–2,000 m. It is best known for karst: limestone dissolved by water into stone forests, caves, sinkholes and underground rivers, leaving a surface where \"there are not three feet of level ground.\"",
    formation:
      "This was shallow sea for long stretches of the geological past, which laid down thick limestone; it was later uplifted in the Cenozoic along with the wider south-west. Limestone dissolves slowly in carbon-dioxide-charged water, and over millions of years both surface and underground have been \"hollowed out\" into fantastic shapes. The Yunnan part is higher with gentler relief (more basins, bazi); the Guizhou part is more deeply cut and broken.",
    observation:
      "From the air the Yunnan–Guizhou Plateau is a rolling green highland studded with cones and domes of small hills (peak forests, peak clusters), with enclosed hollows and small basins between them (bazi) where farmland and towns crowd in. Surface rivers often \"dive underground\" and re-emerge. The Stone Forest and Huangguoshu Falls are the landmarks.",
    distinguish:
      "The Yunnan–Guizhou versus the Loess Plateau: both are dissected and broken, but the Yunnan–Guizhou is limestone karst (peaks, caves, underground rivers, greener), the Loess Plateau is loess (yuan-liang-mao, gullies, more yellow). Versus the Sichuan Basin: the Sichuan Basin is ringed by mountains, flat inside, with red sandstone; the Yunnan–Guizhou Plateau is itself uplifted, dissected high country.",
    concept:
      "A common question: the Yunnan–Guizhou Plateau is not especially high (mostly 1,000–2,000 m), so why a \"plateau\"? Because \"plateau\" is about a large, coherent highland with clear drops at its edges, not about absolute height. It stands well above the Guangdong–Guangxi hills to the east and the Sichuan Basin to the north, with scarps at its margins. Karst regions also face a real problem — \"engineering water shortage\": it rains a lot, but the water quickly leaks underground and the surface cannot hold it.",
    history:
      "The plateau is home to the Miao, Yi, Bouyei, Dong and other peoples, and terraced fields (the Yuanyang Hani terraces, a World Cultural Heritage site) are their answer to the mountains. Gejiu tin, Liupanshui coal and Tongren mercury have all been historically important.",
  },

  pamir: {
    seeing:
      "The Pamirs, at the far west of China, are the \"knot\" where the Tianshan, Kunlun, Karakoram and Hindu Kush meet, averaging above 4,000 m — the ancient \"Congling\" (Onion Range). Muztagh Ata (about 7,546 m), with its rounded form and large glaciers running from near the summit down to its foot, is called the \"father of ice mountains.\"",
    formation:
      "The Pamirs are the western extension of the Tibetan Plateau, a plateau raised where several mountain systems are pressed together, its surface a broad high plain with snow peaks and widespread glaciers rising from it.",
    observation:
      "From the air the Pamirs are a lofty, open, cold-toned highland scattered with dome-topped giant peaks and the deep-blue alpine lakes at their feet (Karakul reflecting Muztagh Ata is the classic view). It stands four or five thousand metres above the Tarim Basin around it.",
    distinguish:
      "The Pamirs versus the Tibetan Plateau: the Pamirs are the western extension, far smaller, a \"mountain knot\" rather than a broad plateau. Versus the Tianshan: the Tianshan extends north-east from the Pamirs, one of its \"arms.\"",
    concept:
      "The Pamirs are \"the mountain knot of Asia\" — several great ranges converge here — and a watershed for several large rivers (the Amu Darya, some tributaries feeding the Tarim, tributaries of the Indus). High and not at especially high latitude, it is one of the most heavily glaciated regions in China.",
    history:
      "The Pamirs were the barrier the Silk Road had to cross to link Central and South Asia; the monk Xuanzang came back over the \"Congling\" to Khotan on his return from India. Tashkurgan is the highland gateway county, home for generations to the Tajik people.",
  },

  // ============ Basins ============
  "tarim-basin": {
    seeing:
      "The Tarim Basin, in southern Xinjiang, is enclosed on all four sides by the Tianshan, Kunlun, Pamirs and Altun ranges — China's largest inland basin (about 400,000 km²). Its centre is China's largest desert, the Taklamakan, with a ring of oases holding the sand in.",
    formation:
      "The Tarim Basin is an old, stable block (the Tarim craton); debris shed from the surrounding rising ranges has long accumulated in it, forming thick sediments that also hold rich oil and gas. The basin floor is about 800–1,300 m.",
    observation:
      "From the air the Tarim Basin is a huge yellow oval: the moving dunes of the Taklamakan in the centre (tall compound sand ridges and crescent dunes), a ring of snowmelt-fed oasis cities around it (Kashgar, Hotan, Aksu, Korla), and grey gobi and white snow mountains beyond. The Tarim River skirts the desert along the northern rim.",
    distinguish:
      "The Tarim versus the Junggar Basin: the Tarim is fully enclosed, extremely arid, with moving dunes and only internal-drainage rivers; the Junggar has a gap in the north-west (the Alataw Pass), is wetter, and its desert is fixed to semi-fixed and smaller. Versus the Sichuan Basin: both are mountain-ringed, but the Tarim is arid yellow sand sea, Sichuan is humid with red sandstone and dense farmland.",
    concept:
      "The Tarim Basin is the classic stage for oasis farming: every city and field must sit at the edge of a piedmont alluvial fan, where water comes down from the mountains. Off that lifeline it is barren. The basin is closed, and all its rivers cannot leave (internal drainage), ending in the desert or in terminal lakes.",
    history:
      "The Tarim Basin was the core of the southern and middle Silk Roads, with the oasis kingdoms of Loulan, Niya, Kucha and Khotan. The changing course of the Tarim River and the shrinking of Lop Nur are a distillation of thousands of years of the relationship between people and an arid land.",
  },

  "junggar-basin": {
    seeing:
      "The Junggar Basin, in northern Xinjiang, lies between the Tianshan and the Altai — China's second-largest inland basin. It has a gap in the north-west (the Alataw Pass) through which a little Atlantic moisture can blow in, so it is wetter than the Tarim to the south and its desert is smaller.",
    formation:
      "The Junggar Basin has been a subsidence zone since the Palaeozoic, continually filled with debris from the surrounding ranges, and holds rich oil (the Karamay field) and coal. The basin floor is about 500 m; the lowest point, Lake Ebi, is only about 190 m.",
    observation:
      "From the air the Junggar Basin is roughly triangular: the Gurbantunggut Desert in the centre, but its dunes are mostly fixed by saxaul, so it reads as mottled yellow-green rather than the pure moving yellow of the Taklamakan. Lake Ulungur lies on the northern rim and Lake Ebi on the west (Lake Manas has largely dried up), and the piedmont oasis belt of the northern Tianshan (Ürümqi, Shihezi, Karamay) rings the southern edge.",
    distinguish:
      "See the Tarim entry. The core difference: the Junggar is \"half-open, wetter, fixed dunes, small,\" the Tarim is \"fully closed, extremely arid, moving dunes, large.\" In winter the Junggar Basin develops a very thick temperature inversion and the floor becomes bitterly cold.",
    concept:
      "The Junggar Basin shows how a single gap can change how wet a region is. The Gurbantunggut is China's largest fixed and semi-fixed desert, because a steady supply of snowmelt and relatively more rain let saxaul forest take root and stop the dunes moving.",
    history:
      "The Junggar Basin lay on the northern Silk Road. The Karamay oilfield, discovered in 1955, was the first large oilfield of the People's Republic; \"Karamay\" means \"black oil\" in Uyghur.",
  },

  qaidam: {
    seeing:
      "The Qaidam Basin, in north-western Qinghai, is a large basin on the Tibetan Plateau at 2,600–3,000 m. \"Qaidam\" means \"salt marsh\" in Mongolian — salt lakes are everywhere, and the Qarhan Salt Lake, China's largest, has a salt crust so thick that highways and railways are built directly on it.",
    formation:
      "The Qaidam is a structural basin within the Tibetan Plateau, ringed by the Kunlun, Qilian and Altun ranges. The climate is extremely arid, evaporation far exceeds precipitation, and water off the surrounding mountains evaporates entirely in the basin, leaving salts in thick layers (rich in potash, lithium and magnesium). The western basin also has extensive wind-eroded yardangs (\"devil's city\").",
    observation:
      "From the air the Qaidam is a lofty, desolate, vividly coloured depression: white salt crusts and salt pans, yellow-brown gobi, grey-green brine lakes, and in the west rows of parallel yellow yardang mounds. Snow mountains ring it all — a stark contrast.",
    distinguish:
      "The Qaidam versus the Tarim Basin: both are arid and mountain-ringed, but the Qaidam sits on the Tibetan Plateau, 2,000 m higher, and is known for salt lakes and yardangs; the Tarim is off the plateau and known for its great desert. Versus the Sichuan Basin: one is cold high desert, the other humid farmland — almost opposite extremes.",
    concept:
      "A common question: the Qaidam Basin is nearly 3,000 m high, so why a \"basin\"? Because \"basin\" is relative — it is about \"high all around, low in the middle.\" The Kunlun, Qilian and Altun ranges around it all rise above 4,000–5,000 m, while the basin floor is relatively low, closed off — so it is a basin. It and the Turpan Basin (below sea level) are the two extremes: a very high basin and a very low one.",
    history:
      "The Qaidam has been explored and developed on a large scale since the 1950s and is an important base for potash fertiliser (Qarhan), oil and natural gas. Both the Qinghai–Tibet Highway and Railway cross Golmud on the southern rim — a city that exists almost entirely because of transport and resources.",
  },

  sichuan: {
    seeing:
      "The Sichuan Basin, in south-west China, is enclosed by the Tibetan Plateau, the Daba Shan, the Wu Shan and the Yunnan–Guizhou Plateau. It is the only one of China's four great basins that is humid and rich — the historic \"land of abundance.\" Its rocks are largely purple-red sandstone and mudstone, so it is also called the \"Red Basin\" or \"Purple Basin.\"",
    formation:
      "The Sichuan Basin is an old sedimentary basin: once an inland lake, then filled by debris from the surrounding ranges into thick red rock layers that also hold large natural-gas reserves. The floor is 250–750 m; the western Chengdu Plain is an alluvial fan built by the Min River.",
    observation:
      "From the air the Sichuan Basin is high mountains all around a comparatively flat green lowland, with very clear boundaries. Inside: the flat Chengdu Plain in the west (irrigated from Dujiangyan, neat fields), and rows of parallel low ridges and valleys in the east (the \"parallel ridge-and-valley\" country, like a washboard). The basin is cloudy and misty year-round — \"the dogs of Shu bark at the sun.\"",
    distinguish:
      "The Sichuan Basin versus the Tarim Basin: both are mountain-ringed, but Sichuan is humid, misty, red sandstone and densely farmed; the Tarim is arid yellow desert. The parallel ridges of eastern Sichuan versus the north–south ranges of the Hengduan: the parallel ridges are folded low hills inside the basin, only a few hundred metres high; the Hengduan are thousands of metres.",
    concept:
      "The Sichuan Basin is \"terrain as a climate amplifier\": the surrounding mountains (especially the Qinling and Daba Shan to the north) block winter cold waves and trap moisture and cloud in the basin, so it is mild in winter, humid, low in sunshine and often foggy. Though also a \"basin,\" it has taken the opposite path to the arid basins of the north-west.",
    history:
      "The Dujiangyan irrigation works, built in 256 BCE, still water the Chengdu Plain more than two thousand years later — the foundation of the \"land of abundance.\" In the Three Kingdoms, Liu Bei founded Shu Han here; Chengdu's Wuhou Shrine and the Jianmen Pass are tied to that history.",
  },

  "turpan-basin": {
    seeing:
      "The Turpan Basin, in the eastern Tianshan of Xinjiang, is the lowest place in China — the surface of Lake Aydingkol in the basin is about 154 m below sea level. It is also one of the hottest and driest places in China, with ground temperatures over 70 °C in summer, hence the name \"the land of fire.\"",
    formation:
      "The Turpan Basin is a block that dropped along faults between ranges of the Tianshan, walled in on all sides; Bogda Peak to the north reaches 5,445 m, nearly 5,600 m above the basin floor at Aydingkol. The floor is dried salt lake and gobi; the Flaming Mountains along the northern rim are a red sandstone anticline.",
    observation:
      "From the air the Turpan Basin is a deep hollow set into the eastern Tianshan: the bright white salt crust of Lake Aydingkol at the centre, grey gobi around it, and along the northern rim a strikingly red range (the Flaming Mountains). In the basin you can trace rows of \"wells\" — the karez, underground channels bringing groundwater to the oases.",
    distinguish:
      "The Turpan Basin versus the Qaidam Basin: one is below sea level and extremely hot; the other is nearly 3,000 m high and cold. Both are extremely arid and both are famous for salt lakes — the contrast of \"the lowest basin\" and \"a very high basin.\" Versus the Tarim Basin: Turpan is far smaller, hotter and lower.",
    concept:
      "Why is Turpan so hot? The basin is closed, the elevation is low (compressed air heats up), skies are usually clear, and the dark gobi surface absorbs heat strongly, so the heat cannot escape. The extreme dry heat plus abundant sunshine and a large day–night temperature range is exactly what makes Turpan's grapes and Hami melons so sweet. Water comes from the karez — Tianshan snowmelt tapped as groundwater and carried in covered channels to cut evaporation.",
    history:
      "Turpan was a Silk Road hub; the ruined cities of Jiaohe and Gaochang attest to more than two thousand years of prosperity here. The karez, the local answer to the dry heat, is often ranked with the Great Wall and the Grand Canal as one of ancient China's three great works.",
  },

  // ============ Plains ============
  northeast: {
    seeing:
      "The Northeast Plain is China's largest plain, made up of the Songnen, Liaohe and Sanjiang plains, ringed by the Greater and Lesser Khingan ranges and Changbai Shan. It has vast tracts of fertile black soil and is China's most important commodity-grain base — the \"great northern granary.\"",
    formation:
      "The Northeast Plain was built by the long-term alluviation of the Songhua, Liao and Amur rivers plus debris from the surrounding mountains. The land is low and flat (mostly below 200 m), with some low rises and marshes in the middle. The black soil formed over thousands of years as meadow plant remains slowly accumulated in the cold — extremely fertile.",
    observation:
      "From the air the Northeast Plain is an endless grid of huge rectangular fields, with meandering rivers and scattered marshes and ponds. In winter it is snow-covered; in summer, deep green. The boundary with the forested mountains around it is sharp.",
    distinguish:
      "The Northeast Plain versus the North China Plain: both are great plains, but the Northeast is at higher latitude, cold, one harvest a year, and dominated by black soil, maize, soybean and rice; the North China Plain is at lower latitude, dominated by Yellow River loess alluvium, two harvests a year, and short of water. Versus the Inner Mongolian Plateau: one is low, humid black-soil farmland, the other high, arid grassland.",
    concept:
      "The core of the Northeast Plain is its black soil: one of the world's three great black-soil regions, where one centimetre of black soil takes centuries to form. Decades of intensive cultivation have thinned the black-soil layer, and \"black soil protection\" is now a national action. \"Turning the Great Northern Wilderness into the Great Northern Granary\" is a model of large-scale Chinese agricultural development.",
    history:
      "The Northeast Plain is the place of origin of the Manchu. In modern times the \"Chuang Guandong\" migration wave brought large numbers of north-China farmers here to open land. After 1949 the Daqing oilfield and a cluster of heavy industry were built here — \"the eldest son of the Republic's industry.\"",
  },

  "north-china": {
    seeing:
      "The North China Plain (the Huang–Huai–Hai Plain), in eastern China, was built by alluvium from the Yellow, Huai and Hai rivers and is a core region of Chinese civilisation. The land is exceptionally low and flat (mostly below 50 m), densely populated and city-lined — Beijing, Tianjin, Shijiazhuang, Jinan and Zhengzhou are all on it.",
    formation:
      "The North China Plain was built by the Yellow River repeatedly changing course and depositing huge amounts of silt. On its lower course the Yellow River bed has been raised higher and higher into a \"suspended river\" standing above the surrounding land, held in only by two great dykes. The plain is also dotted with sand ridges and hollows left by old Yellow River channels.",
    observation:
      "From the air the North China Plain is a huge, dense expanse of rectangular fields and towns, with almost no relief visible. The lower Yellow River is a broad golden band clearly higher than the land on either side; at the mouth, silt fans out into the sea as a muddy yellow plume against the blue water.",
    distinguish:
      "The North China Plain versus the Northeast Plain: North China is at lower latitude, dominated by Yellow River loess, two harvests a year, and severely short of water; the Northeast is at higher latitude, black soil, one harvest a year, and relatively water-rich. Versus the Middle-Lower Yangtze Plain: North China is shaped by the Yellow River, drier, dryland farming; the Yangtze plain is shaped by the Yangtze, water-netted, paddy farming.",
    concept:
      "The most characteristic idea of the North China Plain is the \"suspended river\": the Yellow River carries the world's highest sediment load, which builds up its lower bed until it stands several to more than ten metres above the land (most dramatically at Kaifeng), so a breach is a disaster. The Yellow River has changed course many times through history, and the range of those floods is roughly the outline of today's North China Plain. The plain is also one of China's most water-short, supplied by the South-to-North Water Diversion.",
    history:
      "The North China Plain has been the centre of Chinese civilisation since the Xia, Shang and Zhou. The Grand Canal runs north–south across it, linking the Hai, Yellow, Huai, Yangtze and Qiantang river systems. Every great change of course of the Yellow River has profoundly shaped the people on this land.",
  },

  yangtze: {
    seeing:
      "The Middle-Lower Yangtze Plain runs from Yichang in Hubei to the mouth of the Yangtze — a string of alluvial plains along the river (the Two-Lakes Plain, the Poyang Lake Plain, the Chaohu Plain, the Yangtze Delta). It is water-netted and lake-rich, home to China's largest group of freshwater lakes, and has been a \"land of fish and rice\" since ancient times.",
    formation:
      "The Yangtze and its tributaries built the plains by long alluviation, and structural hollows along the way filled with water to form the many lakes. Poyang and Dongting act as natural \"flood-control reservoirs\" for the Yangtze: in flood season river water backs into the lakes, in the dry season the lakes feed the river, so both are \"a sheet of water in flood, a thread in drought,\" with huge seasonal area changes.",
    observation:
      "From the air the Middle-Lower Yangtze Plain is dense paddy fields, canals, polders and lakes large and small, with the Yangtze as a main artery and the lake arms as capillaries. Poyang and Dongting are broad sheets of water at high water and shrink to winding channels plus mudflats at low water. Chongming Island at the mouth is an oval sand island built from Yangtze silt.",
    distinguish:
      "The Middle-Lower Yangtze Plain versus the North China Plain: one is shaped by the Yangtze, water-netted, paddy farming, humid; the other is shaped by the Yellow River, a suspended river, dryland farming, drier. The lakes here (exterior-drainage, freshwater, connected to the river) are also completely different from the lakes of the Tibetan Plateau (mostly interior-drainage, salty, closed).",
    concept:
      "The key idea here is the \"river–lake relationship\": Poyang and Dongting are not isolated lakes but part of the Yangtze system, cutting flood peaks and storing water. Reclaiming lakes for farmland weakens that function and worsens flooding, so \"returning farmland to lake\" has been promoted in recent years. Since the Three Gorges Dam was built, the water and sediment rhythm downstream has changed.",
    history:
      "The Middle-Lower Yangtze is one of China's most developed regions — Shanghai, Nanjing, Wuhan and Hangzhou are all here. The mulberry-dyke-and-fish-pond and polder systems of the Jiangnan water country are a wisdom of both fighting the water for land and living with it.",
  },

  // ============ Deserts / corridors / canyons ============
  taklamakan: {
    seeing:
      "The Taklamakan Desert lies in the centre of the Tarim Basin, about 330,000 km² — the largest desert in China and often called the second-largest shifting-sand desert in the world. The meaning of \"Taklamakan\" is disputed; it is popularly glossed as \"go in and you won't come out,\" while scholars propose \"old abandoned place\" or \"vineyard place.\" Almost all of it is tall moving dunes, dune chain after dune chain.",
    formation:
      "The sand comes from weathered debris off the surrounding ranges, carried and piled by the wind. The basin is closed and extremely arid (under 100 mm of rain a year at the edges, essentially none in the centre), vegetation is minimal, and the dunes are pushed along by the wind, the tallest sand mountains reaching 100–300 m of relative height.",
    observation:
      "From the air the Taklamakan is a pure golden-to-tan sand sea, its surface regular crescent dunes and sand ridges like frozen waves. A dead-straight road runs through the middle (the Tarim Desert Highway), flanked by narrow drip-irrigated shelterbelts. The Tarim and Hotan rivers run along the desert's edge or across it.",
    distinguish:
      "The Taklamakan versus the Gurbantunggut Desert (Junggar Basin): the Taklamakan is moving dunes, large, extremely arid; the Gurbantunggut is fixed to semi-fixed dunes, with saxaul forest, small. Versus the Kumtag, Badain Jaran and others: all shifting-sand deserts, but the Taklamakan is the largest.",
    concept:
      "The Taklamakan is aridity at its most extreme: it is ringed by the snow and ice of the Tianshan and Kunlun, yet cannot hold a drop — every river seeps away or evaporates the moment it enters the sand. It is also the best classroom for the \"oasis–desert\" relationship: all human activity is confined to the water line on the basin rim. Photovoltaic sand control and edge-locking shelterbelts on the desert margin are now trying to check the desert's spread.",
    history:
      "Buried in the Taklamakan are the ruins of many Silk Road cities — Niya, Dandan Oilik — which were once watered oases and were engulfed by sand as rivers shifted and water dwindled. In 1995 China completed its first graded road across a shifting-sand desert.",
  },

  "hexi-corridor": {
    seeing:
      "The Hexi Corridor, in western Gansu, is a long narrow strip of level ground, about 1,000 km long and anywhere from a few to over a hundred kilometres wide, between the Qilian Mountains and the Heli and Longshou ranges to the north. \"Hexi\" means \"west of the (Yellow) River.\" It is a corridor that links the Central Plains with the Western Regions, the single most important section of the ancient Silk Road.",
    formation:
      "The Hexi Corridor is a string of piedmont sloping plains (alluvial fans) along the northern foot of the Qilian, built of debris carried down by Qilian snowmelt. Three inland rivers (the Shiyang, the Hei and the Shule) cross the corridor and form a chain of oases at the fan edges: Wuwei, Zhangye, Jiuquan, Dunhuang.",
    observation:
      "From the air the Hexi Corridor is a passage between two ranges: snow-covered Qilian to the south, low barren hills and gobi to the north, and in the middle a broken green chain of oasis cities and farmland along the rivers, with gravel gobi beyond the oases. Zhangye's coloured Danxia landform is a striking point.",
    distinguish:
      "The Hexi Corridor is a \"corridor\" landform, neither basin nor plain: long, narrow, walled by mountains on two sides, with a clear direction. It is like the oasis belts on the rim of the Tarim Basin (both fed by Qilian or Tianshan snowmelt), but the Hexi Corridor is a \"through passage\" that strung together east–west traffic.",
    concept:
      "Everything in the Hexi Corridor depends on the Qilian: more snow and ice on the mountains means larger oases; retreating glaciers and less runoff means the oases shrink (Minqin and the lower Shiyang are the warning). It is a rare habitable farming belt west of the Hu Huanyong Line, and an important commodity-grain and seed-production base, as well as a new-energy (wind and solar) base.",
    history:
      "The Western Han established the \"four commanderies of Hexi\" — Wuwei, Zhangye, Jiuquan and Dunhuang — pushing Central Plains power to the gate of the Western Regions. For two thousand years afterward the caravans, monks and envoys of the Silk Road passed through this corridor. The Mogao Caves at Dunhuang are the crystallisation of the meeting of civilisations on this route.",
  },

  "yangtze-gorges": {
    seeing:
      "The Three Gorges of the Yangtze are the great canyon where the river cuts through the Wu Shan range, from Baidicheng at Fengjie in Chongqing to Nanjinguan at Yichang in Hubei — about 190 km, made up of the Qutang, Wu and Xiling gorges with wider valleys between. It is the most rugged stretch of the Yangtze, cliffs squeezing the river between them.",
    formation:
      "The Wu Shan is a roughly north–south fold range. The Yangtze already existed; as the Wu Shan rose, the river cut down at the same rate (the classic case in the \"antecedent river\" debate), sawing the range open into a deep trough — a beaded course of gorges alternating with open valleys.",
    observation:
      "From the air the Three Gorges are a deep, narrow, twisting canyon cut by the Yangtze through the mountains: in the gorge sections the walls stand sheer, several hundred metres above the river, and the channel narrows; in the open-valley sections it widens out with towns and fields. The Kui Gate at the mouth of Qutang Gorge, two mountains facing off, is the most dramatic; the Three Gorges Dam is inside Xiling Gorge.",
    distinguish:
      "The Three Gorges versus the Yarlung Tsangpo Grand Canyon: the Three Gorges is a canyon cut by the Yangtze through a fold range, its walls several hundred metres above the river, famed for ruggedness; the Yarlung Tsangpo Grand Canyon is a horseshoe-shaped hairpin of the Yarlung Tsangpo around Namcha Barwa, with peak-to-valley relief reaching five to six thousand metres. Versus Tiger Leaping Gorge: Tiger Leaping Gorge is where the Jinsha cuts between the Jade Dragon and Haba snow mountains, about 3,900 m from river to the Jade Dragon summit, deeper and narrower than the Three Gorges.",
    concept:
      "The Three Gorges is a textbook of \"river downcutting\": it proves that as long as uplift is slow enough and the river's discharge large enough, a river can \"saw through\" a mountain. The Three Gorges Project uses the drop and the gorge terrain to build the world's largest hydropower station, and it has also changed the water and sediment rhythm downstream and the water regime of the lower lakes.",
    history:
      "Baidicheng, Qu Yuan's hometown and Wang Zhaojun's hometown all lie along the Three Gorges; Li Bai's \"at dawn I left Baidi amid coloured clouds\" is about this stretch. The Three Gorges Project began in 1994 and its main structure was finished in 2009, involving the relocation of about 1.3 million people and a large heritage-rescue effort.",
  },

  "tsangpo-gorge": {
    seeing:
      "The Yarlung Tsangpo Grand Canyon, in south-eastern Tibet, is the huge horseshoe hairpin where the Yarlung Tsangpo swings around Namcha Barwa (7,782 m). By the 1994 measurements of Chinese scientists it runs about 504 km, averages about 2,268 m deep and reaches about 6,009 m at its deepest — the deepest and longest canyon in the world.",
    formation:
      "The Yarlung Tsangpo flows west to east across the Tibetan Plateau; here it meets Namcha Barwa, a mountain rising fast, and is forced into a nearly 180° bend, then turns south, cutting through the Himalaya and off the plateau toward South Asia. The mountain rises fast and the river cuts hard, producing the extreme peak-to-valley relief.",
    observation:
      "From the air the Yarlung Tsangpo Grand Canyon is a bottomless slot wrapped in a great loop around the snow peak of Namcha Barwa. Because Indian Ocean moisture pours up the river valley, a near-complete sequence of vegetation belts is stacked here, from subtropical and tropical vegetation on the valley floor to snow and ice on the summit. Namcha Barwa is usually veiled in cloud — the \"shy girl peak.\"",
    distinguish:
      "See the Three Gorges entry. What makes the Yarlung Tsangpo Grand Canyon special: it is the \"gate\" for moisture to enter the Tibetan Plateau — warm, moist air from the Indian Ocean travels north up this deep valley, making south-eastern Tibet the wettest, greenest corner of the plateau. Neither the Three Gorges nor Tiger Leaping Gorge has this moisture-carrying function.",
    concept:
      "The Yarlung Tsangpo Grand Canyon is an extreme case of terrain–climate coupling: a deeply cut river valley becomes a moisture channel, carrying outside humidity into the closed interior of the plateau, so the valley gets two or three thousand millimetres of rain a year while the plateau interior gets only one or two hundred. Around the Great Bend the river drops some two thousand metres in a short distance, giving it enormous hydropower potential.",
    history:
      "After leaving China the Yarlung Tsangpo is known downstream as the Brahmaputra, and after joining the Ganges it empties into the Bay of Bengal. The core of the canyon is almost untrodden; a Chinese scientific team first traversed the entire canyon on foot only in 1998.",
  },

  // ============ Lakes / islands ============
  "qinghai-lake": {
    seeing:
      "Qinghai Lake, in north-eastern Qinghai on the north-eastern Tibetan Plateau, is the largest lake in China and its largest salt lake — surface elevation about 3,196 m, area about 4,500 km². Its Tibetan name is Tso Ngonpo and its Mongolian name Kokonur, both meaning \"blue sea.\"",
    formation:
      "Qinghai Lake was originally an exterior-drainage freshwater lake connected to the Yellow River system. Some hundred-odd thousand years ago the surrounding mountains rose and blocked its outlet, making it an interior-drainage lake: water only enters, is lost to evaporation, and salts accumulate, so it turned salty, and its area has slowly shrunk and rebounded.",
    observation:
      "From the air Qinghai Lake is a huge, saturated deep blue set into the north-eastern plateau, its edges golden dunes and large fields of rape flowers in summer, with the Bird Islands on the west side where migratory birds gather. A string of dunes on the east side (Sand Island) is where wind has piled up lakeshore sand.",
    distinguish:
      "Qinghai Lake (interior-drainage, salty, on the plateau edge, large) and Poyang and Dongting (exterior-drainage, freshwater, on the Middle-Lower Yangtze Plain, swinging violently with the seasons) are two completely different kinds of lake. Qinghai Lake versus Namtso: both are on the Tibetan Plateau and both salty, but Namtso is higher (4,718 m) and deeper in the plateau interior.",
    concept:
      "Qinghai Lake is the standard answer to \"why do salt lakes form\": once a lake becomes an interior-drainage lake with \"input but no output,\" in an arid climate evaporation keeps carrying water away and leaving salt, and sooner or later it turns salty. Qinghai Lake is also key to the local ecology — the naked carp (Gymnocypris) is the base of the food chain and of the migratory birds, and was nearly wiped out by overfishing before recovering after years of fishing bans.",
    history:
      "Qinghai Lake is the gateway to the north-eastern Tibetan Plateau and was historically contested ground among the Central Plains, the Tubo and the Tuyuhun. An international road-cycling race is held around the lake each year.",
  },

  poyang: {
    seeing:
      "Poyang Lake, in northern Jiangxi on the south bank of the Yangtze, is China's largest freshwater lake (at high water). Its signature is transformation: in summer flood it is a vast open lake (over 3,000 km²), in winter drought it shrinks to winding channels plus large grass flats and mudflats (a few hundred km²) — locally, \"a lake at high water, a river at low water.\"",
    formation:
      "Poyang Lake is a structural fault basin filled with water; five rivers flow in (the Gan, Fu, Xin, Rao and Xiu), and the lake water reaches the Yangtze at Hukou. It connects directly to the Yangtze and acts as a natural flood-storage regulator: when the Yangtze is high in flood season the lake water cannot drain out and can even back-flow in; when the Yangtze is low in the dry season the lake feeds it.",
    observation:
      "From the air Poyang Lake at high water is one continuous sheet; at low water it looks like an inverted tree — the trunk (the outflow channel to the Yangtze) plus the branches formed where the five rivers enter, with yellow-green grass flats between the branches. In winter hundreds of thousands of migratory birds (Siberian cranes, swans, wild geese) overwinter on the flats.",
    distinguish:
      "Poyang versus Dongting: both are flood-storage lakes on the south bank of the middle Yangtze, connected to the river, both \"a sheet in flood, a thread in drought.\" Dongting was historically China's largest freshwater lake but dropped to second as heavy silting and reclamation shrank it, and Poyang became first. Poyang versus Qinghai Lake: one is exterior-drainage freshwater, swinging violently with the seasons; the other interior-drainage salt water, comparatively stable.",
    concept:
      "The key idea for Poyang is \"river and lake both benefit\": the lake cuts flood peaks and stores water for the Yangtze, easing flooding downstream; the river feeds the lake in the dry season. Reclaiming the lake for farmland breaks that balance, so \"returning farmland to lake\" is promoted. In recent years the dry season has come earlier and lasted longer, and Poyang's water regime is closely watched; whether to build a control gate is disputed.",
    history:
      "Poyang Lake was a place of military importance in the past — at the end of the Yuan, Zhu Yuanzhang and Chen Youliang fought one of the largest naval battles in Chinese history here (the Battle of Lake Poyang). Bird protection in the lake district and the \"ten-year fishing ban\" are the focus of recent ecological governance.",
  },

  hainan: {
    seeing:
      "Hainan Island is China's second-largest island (after Taiwan), in the northern South China Sea, facing the Leizhou Peninsula of Guangdong across the Qiongzhou Strait. It is China's only fully tropical island province, shaped like an oval \"bun\": high in the middle, low around the edges.",
    formation:
      "Hainan was once connected to the mainland; the Qiongzhou Strait later dropped along faults and the sea flooded in, making it an island. The centre is mountains of granite and metamorphic rock (Wuzhi Shan, 1,867 m; Yinggeling), grading outward through hills, terraces and plains to the coast. The north around Haikou has extensive basalt volcanic plateaus and craters (the Shishan volcanic cluster, Ma'anling volcano).",
    observation:
      "From the air Hainan is a ring structure: deep green mountains at the centre (tropical rainforest), a belt of pale-green terraces and farmland around them (rubber, coconut, tropical fruit), then white beaches and coral reefs at the edge. The north around Haikou is flat, and dark lava plateaus can be seen.",
    distinguish:
      "Hainan versus Taiwan: both are continental islands (once joined to the mainland) with mountains in the middle. But Taiwan's mountains are higher (Yushan, 3,952 m), run the length of the island, sit on a plate-collision belt, and give frequent earthquakes; Hainan's mountains are lower, sit in the middle in a ring, and the geology is relatively stable, and the whole island is tropical. Hainan versus the Leizhou Peninsula: they face each other across the strait and both have volcanic landforms, but the Leizhou Peninsula is attached to the mainland and flatter.",
    concept:
      "Hainan is the model of a \"continental island\": its rocks and biota were of one piece with the mainland, and it was cut off by rising sea level and fault subsidence — different from a \"volcanic island\" built by eruption or a \"coral island\" built by coral. Its ring terrain (mountains–hills–terraces–plains–coast) is a good example of island landform zonation.",
    history:
      "Hainan had a commandery set up in the Han and was historically a place of exile (Su Shi was banished to Danzhou). In 1988 Hainan became a province and a special economic zone, and from 2018 it has been building a free-trade port. Wenchang is the site of China's low-latitude space launch centre.",
  },

  taiwan: {
    seeing:
      "Taiwan is China's largest island, off the south-east of the mainland at the western edge of the Pacific, facing Fujian across the Taiwan Strait. It is a long, narrow, mountainous island: a Central Range runs the length of it from north to south, splitting the island into an eastern and a western half, and the main summit, Yushan, at 3,952 m, is the highest point in south-eastern China and in north-east Asia (higher than Japan's Mount Fuji).",
    formation:
      "Taiwan sits exactly on the collision belt between the Eurasian plate and the Philippine Sea plate; the collision squeezes sea-floor sediments up into mountains, and the island is still rising fast (about 0.5–1 cm a year), with frequent earthquakes and many hot springs. The Central, Xueshan, Yushan, Alishan and Coastal ranges run roughly parallel.",
    observation:
      "From the air: the east side is steep mountains dropping straight to the coast (the Qingshui Cliffs), with almost no plain; the west side steps down from mountains to hills, terraces and then alluvial plains (the Jianan Plain), where the cities and farmland are concentrated. Continuous high mountains run down the centre, and the high peaks hold snow in winter.",
    distinguish:
      "Taiwan versus Hainan: both are continental islands with a range running the length. But Taiwan's mountains are higher, steeper and earthquake-prone (an active collision belt), and span tropical and subtropical lowlands up to an alpine cold zone; Hainan's mountains are low, the geology stable, the whole island tropical, and the terrain a ring.",
    concept:
      "Taiwan is a living specimen of \"young collision mountain-building\": it shows that building mountains does not take tens of millions of years — under fierce plate collision, near-4,000 m mountains can be piled up in a few million years, and they are still growing. The steep-east, gentle-west asymmetry is exactly the direction of the collision squeeze.",
    history:
      "Taiwan has been Chinese territory since ancient times. The histories record that both the Three Kingdoms and the Sui dynasty sent people there; the Yuan set up the Penghu Inspectorate; and it formally became a province in 1885. After the Treaty of Shimonoseki it was occupied by Japan for fifty years, and it returned to China in 1945 after victory in the war of resistance.",
  },

  // ================= AUSTRALIA =================
  "great-dividing-range": {
    seeing:
      "The Great Dividing Range runs more than 3,500 km down the eastern edge of Australia, from far north Queensland through New South Wales and Victoria — the third-longest land-based range on Earth. It is Australia's main watershed: rivers on the east flow a short way to the Pacific, rivers on the west drain inland toward the Murray–Darling. From the air it reads as a long, low, forested rampart set back from the coast.",
    formation:
      "Despite the name, it is not a single alpine chain but a broad belt of plateaus, escarpments and low ranges — the uplifted and dissected eastern margin of the continent, worn down over more than 100 million years. Most of it is 300–1,500 m; the highest ground is in the Australian Alps at its southern end. Eastward-flowing rivers have cut deep gorges into its seaward side.",
    observation:
      "The clearest feature is the eastern escarpment: a step where the tableland breaks away toward the coastal plain, often with waterfalls where rivers pour over the edge. West of the crest the land tilts gently down into dry inland plains; east of it, a narrow green coastal strip holds most of Australia's people. There is no line of snow peaks — it is a rolling, eucalypt-covered upland.",
    distinguish:
      "Unlike the Andes or the Himalaya, the Great Dividing Range is old, low and passive — no active mountain-building, few earthquakes. Compared with the Australian Alps (its highest section): the Alps hold snow in winter and true alpine country; the rest of the range does not. It is a divide by drainage, not by climate.",
    concept:
      "\"Range\" here means a continental drainage divide, not a wall of peaks. Its importance is hydrological: it separates the well-watered east coast from the arid interior, and its western slopes feed the Murray–Darling, the basin that grows much of Australia's food. Early colonists were penned to the coast for 25 years until a route through the Blue Mountains escarpment was found in 1813.",
    history:
      "For tens of thousands of years the range's passes and river valleys were travel and trade routes for Aboriginal nations. The 1813 crossing of the Blue Mountains opened the inland to European settlement. Today the range carries most of eastern Australia's national parks, catchments and hill towns.",
  },

  "australian-alps": {
    seeing:
      "The Australian Alps are the highest part of the continent, straddling the New South Wales–Victoria border at the southern end of the Great Dividing Range. Mount Kosciuszko, at 2,228 m, is the highest point in mainland Australia. It is the only substantial area of the Australian mainland that holds a reliable winter snowpack.",
    formation:
      "The Alps are an uplifted block of very old rock, planed nearly flat and then raised — which is why the summit area is a broad, gently rounded plateau rather than jagged peaks. Ice-age glaciers were small here, but they left cirques and moraine-dammed lakes near Kosciuszko, the only glacial lakes on the Australian mainland.",
    observation:
      "From the air the high country looks like a rolling, treeless upland — alpine herbfield and snow gum woodland — not a spiky range. In winter it is white; in summer, tawny gold with dark bands of forest in the valleys. The Snowy, Murray and Murrumbidgee rivers all rise here.",
    distinguish:
      "Against the European Alps or New Zealand's Southern Alps, the Australian Alps are far lower, older and more subdued — rounded summits, no permanent ice, no sharp relief. Against the rest of the Great Dividing Range, this is the one section with genuine alpine climate and vegetation.",
    concept:
      "\"Alps\" here is about climate and vegetation zones, not altitude in the Swiss sense: above roughly 1,800 m the trees stop and true alpine plant communities take over — a rare environment on a hot, flat continent. The snowpack also matters economically: meltwater feeds the Snowy Mountains Scheme, a major hydro-electric and irrigation system.",
    history:
      "The high country is the land of the Ngarigo, Walgalu and other peoples, who travelled up in summer to feast on Bogong moths. Cattle grazing ran from the 1830s until it was largely ended to protect the fragile catchments. The Snowy Mountains Scheme (1949–1974) reshaped the region's rivers.",
  },

  "macdonnell-ranges": {
    seeing:
      "The MacDonnell Ranges run east–west across the centre of Australia for about 640 km, with Alice Springs sitting in a gap near their middle. They are a set of sharp parallel ridges rising a few hundred metres above the surrounding desert plain, cut through by dramatic gorges. Mount Zeil (1,531 m) is the highest peak in the Northern Territory.",
    formation:
      "The ridges are the upturned edges of hard quartzite beds, folded about 300–400 million years ago and then exposed as the softer rock around them eroded away. Ancient rivers, older than the ranges' present relief, kept cutting down as the land rose, slicing the narrow chasms of Standley Chasm, Ormiston and Glen Helen.",
    observation:
      "From the air the MacDonnells are unmistakable: long, straight, parallel red ridgelines running east–west across an otherwise flat landscape, like the grain in a plank. The gorges show as thin dark notches; permanent waterholes in them are green dots. The colour is deep rust-red rock against pale spinifex.",
    distinguish:
      "Unlike a folded belt such as the Appalachians, the MacDonnells are a single narrow ridge system in the middle of a continent, with no coast or plain beyond — desert on both sides. Compared with the Flinders Ranges to the south, the MacDonnells are straighter, more strictly east–west, and drier.",
    concept:
      "This is a textbook \"ridge-and-valley\" landscape produced by differential erosion: hard quartzite stands up as ridges, soft rock is stripped to valleys. The gorges are \"antecedent\" — the rivers were there first and cut down as the ridges rose. Their permanent waterholes made the ranges a lifeline across the desert.",
    history:
      "The ranges are Arrernte country, rich in sacred sites and Dreaming tracks. Alice Springs grew at a gap where the Overland Telegraph Line crossed in the 1870s. The Larapinta Trail now follows the range's spine for walkers.",
  },

  "flinders-ranges": {
    seeing:
      "The Flinders Ranges are South Australia's largest mountain range, running about 430 km north from near Adelaide into the arid outback. Their signature is Wilpena Pound (Ikara), a huge natural amphitheatre of rock ringed by cliffs. St Mary Peak, on its rim, reaches 1,171 m.",
    formation:
      "The rock was laid down in a sinking basin around 800–500 million years ago, then folded into a great arch. Erosion has stripped the soft core, leaving the hard, upturned rims standing as ridges — Wilpena Pound is simply the eroded centre of one such fold, enclosed by its own resistant edges. The rocks here hold some of the earliest known complex-animal fossils (the Ediacaran biota).",
    observation:
      "From the air Wilpena Pound looks like a footprint or a cupped hand: an oval basin walled by a continuous ridge, with a single narrow gap where a creek escapes. The ridges elsewhere run in long curved lines, following the folds. Red rock, blue-grey native pine and cypress, and the dry ochre plains around.",
    distinguish:
      "Compared with the strictly east–west MacDonnell Ranges, the Flinders curve and swing, following folded structure, and are somewhat wetter and more vegetated. Wilpena Pound is often mistaken for a crater or a meteorite scar; it is neither — it is an erosional basin inside a fold.",
    concept:
      "The Pound shows how folding plus erosion can build an enclosed basin ringed by high ground — \"high all around, low in the middle\" produced without any impact or volcano. The Flinders are also a key site for understanding the dawn of complex life: the Ediacara Hills nearby give their name to a whole geological period.",
    history:
      "The ranges are Adnyamathanha country; Ikara means \"meeting place.\" Pastoralists pushed in from the 1850s, and the ruins of failed wheat farms north of Goyder's Line record where farming hit the limits of the dry.",
  },

  "blue-mountains": {
    seeing:
      "The Blue Mountains rise just west of Sydney — not really mountains but a deeply dissected sandstone plateau, standing about 1,100 m and slashed by sheer-walled valleys. The famous view is of the Three Sisters and the Jamison Valley from the escarpment at Katoomba. The blue haze that names them is generally attributed to fine oil droplets from the eucalypts, together with the air itself, scattering sunlight.",
    formation:
      "The plateau is a thick, flat-lying layer of quartz sandstone laid down by ancient rivers, later uplifted with the Great Dividing Range. Streams have since cut down through it along joints, carving canyons with vertical walls and leaving flat-topped ridges and isolated pillars like the Three Sisters where harder caps protect the rock beneath.",
    observation:
      "From the air the Blue Mountains are a green tableland split by a maze of cliff-lined gorges — the plateau surface stays roughly level while the valleys drop hundreds of metres straight down. Waterfalls hang off the escarpment edges. The forest is unbroken eucalypt, hazed blue in the distance.",
    distinguish:
      "It is a plateau, not a fold or volcanic range: the skyline is flat, and the drama is in the canyons cut into it. Compared with the Loess Plateau's soft, yellow, gullied slopes, the Blue Mountains are hard sandstone with vertical cliffs. The Grand Canyon (USA) is a closer analogue in process, at smaller scale.",
    concept:
      "\"Mountains\" here really means \"dissected plateau\": relief comes from downcutting into a raised flat layer, not from anything pushed up into peaks. The escarpment was also a 25-year barrier to the early Sydney colony — the ridge-and-canyon maze had no easy through route until 1813.",
    history:
      "The area is the country of the Gundungurra and Darug peoples. The 1813 crossing by Blaxland, Lawson and Wentworth opened the western plains to settlement. The Greater Blue Mountains was inscribed as World Heritage in 2000 for its eucalypt diversity.",
  },

  pilbara: {
    seeing:
      "The Pilbara is a vast, ancient, iron-rich region of north-western Australia. Its heart is the Hamersley Range, whose banded rocks are cut by the deep red gorges of Karijini National Park; Mount Meharry (1,249 m) is the highest point in Western Australia. This is one of the oldest, most stable pieces of land on the planet — and the source of most of Australia's iron ore.",
    formation:
      "The Pilbara craton is over 3 billion years old. Its famous banded iron formations formed on an early sea floor 2.5 billion years ago, when the first photosynthetic microbes released oxygen that reacted with dissolved iron and settled out in layers. Later uplift and river erosion sliced the Karijini gorges into these iron-hard beds.",
    observation:
      "From the air the Pilbara is deep rust-red rock and spinifex, with the Hamersley Range as a broad dark upland. The gorges are narrow slots of red-and-blue banded rock hundreds of metres deep, with permanent green pools. Enormous open-cut iron mines and dead-straight ore railways stand out as pale scars.",
    distinguish:
      "Unlike a young alpine range, the Pilbara has almost no tectonic relief — it is an eroded plateau on ancient crust. Its gorges resemble those of the MacDonnell Ranges but are cut into iron formation rather than quartzite, giving the striking layered red-and-blue walls.",
    concept:
      "The Pilbara is a window into the early Earth: its stromatolite fossils are among the oldest evidence of life (about 3.5 billion years), and its banded iron formations record the \"Great Oxidation\" of the atmosphere. It also shows how the oldest, most stable continental cores (\"cratons\") survive as low, worn-down land, not high mountains.",
    history:
      "The Pilbara is home to many Aboriginal groups; Murujuga (the Burrup Peninsula) holds over a million petroglyphs, one of the world's densest rock-art sites. Large-scale iron mining began in the 1960s and now drives much of Australia's export economy.",
  },

  kimberley: {
    seeing:
      "The Kimberley is a remote sandstone plateau in Australia's far north-west, about 420,000 km² — larger than Germany — with a deeply indented coast of tidal gorges and a monsoon climate. Its best-known feature is the Bungle Bungle Range in Purnululu — a maze of orange-and-grey banded beehive domes. The tides here are among the largest in the world, over 10 m.",
    formation:
      "The plateau is very old, flat-lying sandstone, dissected by rivers into gorges and mesas. The Bungle Bungles' domes are what remains after weathering along a grid of vertical cracks in the sandstone; the grey bands are a thin skin of cyanobacteria protecting the softer, orange, iron-stained layers between more clay-rich grey bands. The huge tides drown the river mouths, making \"horizontal waterfalls\" where water is forced through narrow gaps.",
    observation:
      "From the air the Kimberley is red-and-black rock, savanna woodland, and a coast that looks bitten out — long fjord-like inlets, reefs and islands. Purnululu's beehive domes cluster like a hive; Mitchell Falls steps down a tiered gorge. In the wet season the rivers flood brown and huge.",
    distinguish:
      "Compared with the Blue Mountains (also a sandstone plateau), the Kimberley is tropical, monsoonal, and coastal, with tidal gorges the Blue Mountains lack. The Bungle Bungles are sometimes taken for wind-sculpted dunes; they are solid rock, shaped by water and biology along joints.",
    concept:
      "The banded domes are a rare case of biology shaping a landform: the dark stripes are living cyanobacterial crust that armours the rock. The plateau also shows \"antecedent drainage\" — rivers older than the present relief, cutting gorges as the land rose. The giant tides come from the shape of the continental shelf funnelling and amplifying the tidal wave.",
    history:
      "The Kimberley holds Gwion Gwion (Bradshaw) and Wandjina rock art, among the world's very old figurative rock art. It was one of the last parts of the continent settled by Europeans, from the 1880s, and remains sparsely populated, with large Aboriginal-owned lands.",
  },

  "simpson-desert": {
    seeing:
      "The Simpson Desert covers about 176,000 km² of central Australia, spanning three states. It is famous for its dunes: more than 1,100 parallel sand ridges running NNW–SSE, some over 200 km long without a break — among the longest parallel dunes on Earth. \"Big Red,\" near Birdsville, is the best-known.",
    formation:
      "The sand was carried in by rivers from the surrounding ranges and then reworked by the prevailing south-easterly winds into long, straight ridges that all line up with the wind. The dune crests still shift, but the flanks are held by spinifex and other plants, so the pattern is stable. Clay pans and salt lakes lie in the swales between ridges.",
    observation:
      "From the air the Simpson is one of the most orderly landscapes on the planet: endless parallel red lines, evenly spaced, all pointing the same way, to the horizon. After rare rain the swales turn green and the claypans fill silver. The dunes are red where iron-stained, paler where fresh sand is exposed on the crests.",
    distinguish:
      "Against the Taklamakan's shifting crescent dunes, the Simpson's dunes are mostly fixed linear ridges, vegetated on their flanks, set by a steady wind. Against the Great Victoria Desert to the west, the Simpson has far more regular, longer, more continuous dunes.",
    concept:
      "Linear (longitudinal) dunes form where sand is limited and the wind blows from a consistent direction — the ridges grow parallel to the net wind, not across it. The Simpson is the classic example. Its very regularity is the point: it records thousands of years of one prevailing wind.",
    history:
      "The desert is Wangkangurru and other peoples' country; they survived here using \"mikiri,\" hand-dug wells in the swales. It was the last major Australian desert crossed by Europeans (1936, then by vehicle in 1962). Today it is a national park and a four-wheel-drive destination.",
  },

  "great-victoria-desert": {
    seeing:
      "The Great Victoria Desert is the largest desert in Australia, about 350,000 km², sprawling across Western Australia and South Australia. It is a mix of long sand dunes, gravel plains and dry salt lakes, sparsely covered with spinifex, mulga and desert oak. It is one of the least-populated regions on Earth.",
    formation:
      "The desert sits on very old, flat, weathered crust, blanketed by wind-blown sand and ancient river deposits. Its linear dunes, like the Simpson's, were built and aligned by prevailing winds, but they are lower, more broken and more vegetated. Chains of salt lakes mark the courses of rivers that no longer flow.",
    observation:
      "From the air it is a subtle, mottled landscape rather than a sea of dunes — patchy scrub, reddish sand, pale salt pans, low ridges — stretching unbroken to the horizon in every direction. There are almost no roads, towns or landmarks.",
    distinguish:
      "Unlike the Simpson (dominated by very regular, long dunes) or the Nullarbor (flat, treeless limestone), the Great Victoria is a varied, scrubby desert with irregular dunes and no single strong pattern. It is bigger than any of them.",
    concept:
      "\"Desert\" here is defined by aridity, not by sand seas: much of the Great Victoria is vegetated. It illustrates that Australia's deserts are mostly old, stable, and only partly sandy — the continent is dry because it sits under the subtropical high-pressure belt, far from moist air.",
    history:
      "It is the country of the Anangu, Pila Nguru (\"Spinifex People\") and others, some of whom lived a traditional desert life into the 1980s. Part of it was used for British nuclear tests at Maralinga in the 1950s and 1960s, with lasting harm to Aboriginal communities.",
  },

  "nullarbor-plain": {
    seeing:
      "The Nullarbor is a vast, flat, treeless plain on the southern edge of Australia — its name is Latin-derived for \"no trees.\" It is the world's largest single slab of limestone, about 200,000 km², and it ends abruptly at the Bunda Cliffs, which drop straight into the Great Australian Bight for hundreds of kilometres.",
    formation:
      "The limestone formed on a shallow sea floor 15–40 million years ago and was lifted, almost perfectly flat, above the sea. Rain sinks straight into it, so there are no surface rivers — instead the rock is riddled with caves, sinkholes and blowholes. The southern edge has been trimmed back by the ocean into the sheer Bunda Cliffs.",
    observation:
      "From the air the Nullarbor is astonishingly featureless — a pale, level plain with saltbush and bluebush but no trees, running dead flat to the horizon. The one dramatic line is the coastal cliff, where the plain simply stops and the Southern Ocean begins. The Trans-Australian Railway crosses it in a 478 km dead-straight stretch, the longest in the world.",
    distinguish:
      "Unlike a sandy desert, the Nullarbor is bare rock and thin soil, not dunes. Compared with the Yunnan–Guizhou Plateau (also limestone karst), the Nullarbor is flat and dry with underground caves but no peak forest — arid karst rather than humid karst.",
    concept:
      "This is karst — limestone dissolved by water — but arid karst: the drainage is all underground, so the surface stays a featureless plain while huge caves develop below. The flatness records how gently and evenly the sea floor was lifted. \"Nullarbor\" also disproves a common assumption that deserts must be sandy.",
    history:
      "The plain is Mirning and Wangai country, with songlines running along the coast. Edward John Eyre made the first recorded European crossing in 1841, nearly dying of thirst. The railway (1917) and later the Eyre Highway made it a crossing point rather than a barrier.",
  },

  "great-artesian-basin": {
    seeing:
      "The Great Artesian Basin is not a landform you can see as a shape — it is a vast underground reservoir of water beneath about one-fifth of Australia, roughly 1.7 million km². Rain that fell on the eastern highlands hundreds of thousands to a million years ago slowly seeps through porous rock and emerges, sometimes hot, at natural springs and bores far out in the dry inland.",
    formation:
      "Layers of water-bearing sandstone were laid down in a shallow sea and swamps 100–250 million years ago, then buried and tilted, with the porous layers sandwiched between impermeable clays. Water enters where the sandstone outcrops along the Great Dividing Range, is trapped under pressure, and rises on its own wherever a bore or fault reaches the aquifer — hence \"artesian.\"",
    observation:
      "On the surface you see the basin only indirectly: mound springs — low cones of minerals and green wetland built by water pushing up in the middle of gibber desert — and the old free-flowing bores that turned the country around them into channels of reeds. From the air these are bright anomalies in a bare landscape.",
    distinguish:
      "Unlike the Tarim or Sichuan basins, which are topographic hollows ringed by mountains, the Great Artesian Basin is defined by geology and groundwater, not by shape — the ground above it is mostly flat plain. Its \"low point\" is underground.",
    concept:
      "\"Basin\" here is a geological structure: a downwarp holding tilted, layered rock, where a porous aquifer is confined between seals so the water is under pressure. It made pastoral settlement of arid inland Australia possible after the 1870s. Over-tapping dropped the pressure, and capping wild bores is now a major conservation effort.",
    history:
      "For Aboriginal peoples the mound springs were reliable water and important sites on trade routes across the desert. The first flowing bore was drilled about 1878; within decades thousands of uncontrolled bores were wasting water, and the artesian pressure has been falling ever since.",
  },

  "lake-eyre": {
    seeing:
      "Kati Thanda–Lake Eyre, in the South Australian outback, is the lowest point in Australia — its floor lies about 15 m below sea level. It is the country's largest lake, but it is usually a blinding white salt pan; it fills completely only a few times a century, when monsoon rains far to the north drain down into it.",
    formation:
      "The lake sits in a large, low, closed basin with no outlet to the sea. Rivers from Queensland — Cooper Creek, the Diamantina — carry occasional floods hundreds of kilometres across the desert into it. The water then evaporates entirely, leaving its dissolved salt behind, so a thick salt crust has built up over tens of thousands of years.",
    observation:
      "From the air, dry, it is a dead-flat, glaring white sheet ringed by red dunes and gibber plain. When it floods it becomes a huge inland sea, pink and green with algae and brine shrimp, drawing enormous flocks of waterbirds within weeks — one of the great boom-and-bust spectacles on Earth.",
    distinguish:
      "Like Qinghai Lake it is an internal-drainage salt lake, but Lake Eyre is far more extreme: it is below sea level, and it is dry most of the time rather than permanently full. The Turpan Basin's Lake Aydingkol is a close analogue — both are the salt floor of a below-sea-level basin.",
    concept:
      "Lake Eyre is the endpoint of an entire internal-drainage system: whatever water reaches it cannot leave except by evaporation, so salt accumulates and the lake is normally a playa (dry salt pan). Its rare fillings depend on rain a thousand kilometres away, which is why it is a barometer of the northern monsoon.",
    history:
      "The lake is central to the traditions of the Arabana people, who hold native title over it; \"Kati Thanda\" is their name. Donald Campbell set a world land-speed record on the dry lakebed in 1964. Its floods are now closely tracked for the birdlife they trigger.",
  },

  uluru: {
    seeing:
      "Uluṟu is a single massive block of sandstone rising 348 m out of the flat desert of central Australia, about 9 km around the base. It is one of the largest exposed rocks in the world and the best-known natural landmark in Australia. To its Anangu traditional owners it is a living cultural landscape, dense with law and story.",
    formation:
      "Uluṟu is the tilted, upturned edge of a thick bed of hard sandstone (arkose), laid down by rivers about 550 million years ago, then folded almost vertical and buried. As the softer surrounding rock eroded away over hundreds of millions of years, this resistant slab was left standing — most of it is still underground. Its surface is grey; the famous red is a thin skin of iron oxide.",
    observation:
      "From the air Uluṟu is an isolated, smooth, elongated dome with steep sides and parallel grooves running down its flanks, marking the near-vertical rock layers. It glows deep red at sunrise and sunset because low-angle light passes through more dust and air. Waterholes and shady gorges hide at its base.",
    distinguish:
      "Uluṟu is an inselberg — an \"island mountain\" — not a plateau or a volcano. Nearby Kata Tjuṯa is made of coarse conglomerate and forms many separate domes, whereas Uluṟu is one continuous block of fine sandstone. It is not a meteorite and not hollow.",
    concept:
      "An inselberg is what is left when erosion strips a plain but a body of especially hard rock resists and stands proud. Uluṟu's near-vertical layering — you can see the bedding running up its sides — shows how far the rock has been tilted from its original flat-lying position.",
    history:
      "Uluṟu has been a focus of Anangu life and ceremony for tens of thousands of years. It was returned to its traditional owners in 1985 and is jointly managed as a national park. Climbing the rock was permanently closed in 2019 at the owners' request.",
  },

  "kata-tjuta": {
    seeing:
      "Kata Tjuṯa (\"many heads\"), also called the Olgas, is a cluster of 36 steep-sided rock domes rising from the desert about 30 km west of Uluṟu. The tallest, Mount Olga, stands about 546 m above the plain — higher than Uluṟu. Deep, sheer-walled gorges run between the domes.",
    formation:
      "Kata Tjuṯa is made of conglomerate — pebbles and boulders of granite and basalt cemented in sandstone — deposited by fast rivers pouring off a mountain range that once stood to the south, around 550 million years ago. Weathering has since worked along cracks in this coarse rock, rounding it into separate domes rather than one block.",
    observation:
      "From the air Kata Tjuṯa looks like a group of giant red loaves or knuckles set close together, with dark chasms between them — the Valley of the Winds threading through the middle. The rock surface is knobbly with embedded cobbles, unlike Uluṟu's smoother sandstone.",
    distinguish:
      "Uluṟu and Kata Tjuṯa share an origin — both are the eroded remains of sediment shed off the same vanished mountains — but Uluṟu is fine sandstone tilted almost vertical and eroded into one mass, while Kata Tjuṯa is coarse conglomerate, less steeply tilted, broken into many domes.",
    concept:
      "The pair is a lesson in how rock type controls landform: same age, same setting, different sediment — and one becomes a single monolith, the other a field of domes. The pebbles in Kata Tjuṯa's rock are direct evidence of the ancient mountains that supplied them.",
    history:
      "Kata Tjuṯa is a men's sacred site of deep importance to Anangu, and much of its detailed story is restricted. It lies within Uluṟu-Kata Tjuṯa National Park, World Heritage-listed for both its geology and its living Aboriginal culture.",
  },

  "great-barrier-reef": {
    seeing:
      "The Great Barrier Reef stretches about 2,300 km along the north-east coast of Australia — the largest coral reef system in the world and the largest structure built by living organisms. It is made of roughly 3,000 individual reefs and 900 islands, and is visible from space.",
    formation:
      "The reef is built by tiny coral animals that grow their skeletons on the remains of earlier corals, over thousands of years, in warm, clear, shallow water. The present reef has grown since the last ice age, as rising seas flooded a former coastal plain; it sits on the foundations of much older reefs. It runs parallel to the coast along the edge of the continental shelf.",
    observation:
      "From the air the reef is a broken ribbon of turquoise and jade set in deep blue, following the coast far offshore — individual reefs show as pale patches, some ring-shaped around lagoons, with sand cays as bright dots. Between the reef and the mainland lies a calmer, shallower lagoon.",
    distinguish:
      "This is a barrier reef — separated from the shore by a wide lagoon and following the shelf edge — as opposed to a fringing reef attached to the coast, or an atoll ringing a sunken island. It is a biological structure, not rock uplifted by earth movements.",
    concept:
      "A reef is a landform made by life: the coral framework is the accumulated skeleton of colonial animals, and it can only build where the water is warm, clear and shallow enough for the corals' symbiotic algae to photosynthesise. That makes reefs acutely sensitive to warming and murky water — mass \"bleaching\" events have hit the reef repeatedly since the 1990s.",
    history:
      "Sea Country here has been central to the lives of Aboriginal and Torres Strait Islander peoples for millennia. James Cook's Endeavour ran aground on the reef in 1770. It became a marine park in 1975 and World Heritage in 1981, and is now a focus of global concern over climate change.",
  },

  "twelve-apostles": {
    seeing:
      "The Twelve Apostles are a group of tall limestone stacks standing in the Southern Ocean just off the Great Ocean Road in Victoria. They rise up to about 45 m out of the surf, a short way from sheer coastal cliffs. Despite the name there were never twelve; today only seven or eight remain standing.",
    formation:
      "The cliffs are soft limestone, laid down on a sea floor 10–20 million years ago. The Southern Ocean's waves attack the base of the cliff, cutting caves, then arches, then — when an arch collapses — leaving an isolated pillar, or stack. The stacks are slowly undercut in turn and fall; one dropped in 2005. New ones are being cut from the retreating cliff.",
    observation:
      "From the air the coast is a straight line of yellow cliffs with the stacks standing just offshore, wave trains wrapping around them, and the flat green farmland running right to the cliff edge. Gorges, blowholes and half-collapsed arches (London Bridge, the Grotto) punctuate the cliff line.",
    distinguish:
      "These are sea stacks — erosional remnants of a retreating cliff — not reefs, not volcanic plugs, not deposited features. The process is the same one that made chalk stacks like the Old Man of Hoy, in softer, younger rock.",
    concept:
      "Sea stacks record coastal erosion in progress: cliff → cave → arch → stack → stump. The \"Twelve Apostles\" are a snapshot of a coastline eating landward at roughly 2 cm a year. The number will keep changing as old stacks fall and new ones are isolated.",
    history:
      "This is the Sea Country of the Eastern Maar people. The stacks were long known as the \"Sow and Piglets\"; the grander name was adopted for tourism in the 1920s. The Great Ocean Road, built by returned WWI soldiers, made the coast accessible.",
  },

  tasmania: {
    seeing:
      "Tasmania is Australia's island state, about 240 km south of the mainland across Bass Strait. It is small but mountainous and wet, with a rugged, glacier-carved western wilderness, cool temperate rainforest, and a jagged coastline. Nearly half the island is national park or reserve.",
    formation:
      "Tasmania is a piece of continental crust that was joined to the mainland until rising seas flooded Bass Strait about 12,000 years ago. Much of its high country is capped by dolerite, a hard dark igneous rock that forms columned cliffs and boulder fields. Ice-age glaciers scoured the west, gouging U-shaped valleys, cirques and hundreds of lakes.",
    observation:
      "From the air western Tasmania is a tangle of sharp quartzite ridges, dark rainforest, buttongrass moorland and lakes, often under cloud. The centre has the dolerite plateau and peaks like Cradle Mountain; the east is drier, gentler farmland. The coast is deeply indented with bays and islands.",
    distinguish:
      "Like Hainan and Taiwan, Tasmania is a continental island cut off by rising sea level — its rocks and (former) wildlife are mainland stock. Unlike them it is cool, wet and heavily glaciated, with landforms closer to New Zealand's South Island than to tropical China.",
    concept:
      "Tasmania shows what glaciation does to a landscape even at modest altitude: at these latitudes ice-age glaciers reached low, leaving lake-filled cirques and troughs across the highlands. Its isolation also preserved species lost on the mainland — it was the last stronghold of the thylacine.",
    history:
      "Tasmanian Aboriginal people lived on the island for tens of thousands of years, cut off after the land bridge drowned; colonisation from 1803 was catastrophic for them. The Tasmanian Wilderness World Heritage Area, secured after the Franklin Dam campaign of the early 1980s, covers about a fifth of the state.",
  },

  "murray-darling": {
    seeing:
      "The Murray–Darling is Australia's largest river system, draining about one-seventh of the continent across four states. The Murray runs about 2,500 km and the Darling about 2,700 km; they meet at Wentworth in far western New South Wales and reach the sea in South Australia. It is the country's most important farming region — and its most fought-over water.",
    formation:
      "The rivers flow across the Murray Basin, a very large, very flat lowland floored by river sediments. Because the gradient is so gentle, the Murray winds in tight meanders, cutting off billabongs (oxbow lakes), and the Darling can take weeks to move a flood pulse downstream. The system ends in the Coorong lagoon and a set of barrages at the Murray Mouth.",
    observation:
      "From the air the rivers are dark, hugely sinuous green lines — river red gum forest tracing every bend — winding across pale, dead-flat plains, with old cut-off loops as crescent lakes alongside. In dry years the channels shrink to strings of pools; in floods the water spreads for tens of kilometres.",
    distinguish:
      "Unlike the Yangtze or the Yellow River, the Murray–Darling carries little water for its size — much of its catchment is arid, and a lot of the flow never reaches the sea. Its rhythm is boom-and-bust, driven by episodic inland rain, more like an outback creek scaled up than a monsoon river.",
    concept:
      "The system shows what a very low gradient does to a river: extreme meandering, slow flood travel, and heavy reliance on floodplain wetlands. It also illustrates over-allocation — more water was licensed for irrigation than the rivers reliably carry, and balancing farms, towns and the environment is the point of the Murray–Darling Basin Plan.",
    history:
      "The rivers were travel routes and rich food sources for dozens of Aboriginal nations, whose fish traps and scarred canoe trees line the banks. Paddle steamers carried wool and supplies from the 1850s. Water sharing between the states has been disputed since Federation and remains so.",
  },

  kgari: {
    seeing:
      "K'gari (Fraser Island), off the south-east coast of Queensland, is about 123 km long and the largest sand island in the world. It is made almost entirely of quartz sand, yet grows rainforest over 30 m tall — the only place on Earth where rainforest grows on pure sand. World Heritage-listed in 1992; \"K'gari\" means \"paradise\" in the local language.",
    formation:
      "The island is a set of parallel dune ridges built over hundreds of thousands of years, as currents and wind carried continental-shelf sand northward and piled it up. Some of the dune sequences are among the oldest known on Earth. Wind keeps blowing fresh sand up onto older dunes, generation over generation, and the dunes are still creeping inland and north.",
    observation:
      "From the air K'gari is a long green island running north–south: an almost unbroken beach over 100 km long on the east, deep-green rainforest and a string of lakes (some tea-brown, some bright green) through the centre and west, and more than 40 km of coloured sand cliffs on the west. White \"sand blowouts\" show where moving dunes are pushing through the forest.",
    distinguish:
      "Unlike a coral cay (the sand islets of the Great Barrier Reef) or a volcanic island, K'gari is a \"sand island\" built of pure sand. Most of its lakes are \"perched\": organic matter in the dune hollows cements the sand into an impermeable pan, so rainwater pools partway up the dune, not connected to the water table. About half the world's perched lakes are here, and Lake Boomanjin is the largest perched lake on Earth.",
    concept:
      "K'gari is the counter-intuitive case of \"rainforest on sand\": pure sand holds almost no nutrients, but over hundreds of thousands of years leaf litter and a fungal mycorrhizal network recycle nutrients again and again, supporting tall rainforest. It also shows that dune landforms are not static — the whole island is slowly moving and growing.",
    history:
      "K'gari is the home of the Butchulla people, who have lived here for thousands of years. After the wreck of the Stirling Castle in 1836, the ordeal of the captain's wife Eliza Fraser led Europeans to call it \"Fraser Island.\" It was logged for prized timbers such as kauri pine until 1991, then World Heritage-listed the next year; the Aboriginal name K'gari was officially restored in 2023.",
  },

  kakadu: {
    seeing:
      "Kakadu, in Australia's Northern Territory, covers about 20,000 km² — Australia's largest terrestrial national park, and one of the few places listed as World Heritage for both natural and cultural value. Its frame is the Arnhem Land sandstone plateau and, along its western edge, an escarpment running about 500 km and 30–330 m high, with vast seasonally flooded wetlands below it.",
    formation:
      "About 140 million years ago this area was a shallow sea: the sandstone plateau was the sea floor and the escarpment was the coastline. The plateau is mostly hard Kombolgie sandstone. Since then the escarpment has retreated eastward by roughly a metre every thousand years, its debris building the lowland plains, and wet-season floods have laid down the wetlands.",
    observation:
      "From the air Kakadu is layered: red, broken, gorge-cut sandstone \"stone country\" on the east; sloping woodland in the middle; floodplains on the west that merge into a sheet of water in the wet and shrink to chains of billabongs in the dry; and tidal mudflats and mangroves at the outer edge. Jim Jim and Twin Falls drop straight off the escarpment.",
    distinguish:
      "Kakadu's sandstone plateau and escarpment form much as the Blue Mountains and the Kimberley do (flat-lying sandstone uplifted and dissected), but Kakadu has a tropical monsoon climate, and the huge dry-season/wet-season swing drives everything. Its floodplains resemble the Murray–Darling's, but Kakadu's water is entirely monsoon-controlled, going from cracked mud to inland sea within a year.",
    concept:
      "Kakadu shows how a \"monsoon switch\" shapes landform and life: the November–April monsoon sends rivers into flood, turns the wetlands into a sea and concentrates waterbirds (up to about 2 million by the late dry); May–October brings almost no rain and the wetlands shrink to pools. The steady backward retreat of the escarpment is a living lesson in scarp-retreat landscape evolution.",
    history:
      "Aboriginal people have lived in the Kakadu region for tens of thousands of years; the Madjedbebe rock shelter has been dated by some studies to about 65,000 years. The rock art at Ubirr and Nourlangie records a long history from prehistoric animals to European sailing ships. The land is owned by Bininj/Mungguy traditional owners and leased back for joint management. Uranium found nearby in the 1970s brought years of controversy over mining.",
  },

  grampians: {
    seeing:
      "The Grampians (Aboriginal name Gariwerd), in western Victoria, are a set of sandstone cuestas tilted up out of the plain, made of several roughly parallel ranges; the highest, Mount William, is about 1,167 m. They are known for their cliffs, rock lookouts and the richest concentration of Aboriginal rock art in Victoria.",
    formation:
      "About 400 million years ago (the Devonian) an inland basin filled with several kilometres of sandstone and siltstone, which was later folded and tilted as a whole toward the west. Because the beds dip west, every range is a cuesta — a steep cliff facing east, a gentle slope running west. Granite intruded the pile about 395 million years ago.",
    observation:
      "From the air the Grampians are several dark, parallel ridge lines standing above pale farmland: each range has a sheer sandstone cliff on its east side and a gentle wooded slope on the west. The ridge tops are bare sandstone benches with lookouts such as the Pinnacles and Boroka. Long narrow valleys and reservoirs lie between the ranges.",
    distinguish:
      "The Grampians' cuestas are different from the body of the Great Dividing Range (a low, gentle upwarp) — they are clear \"cliff-plus-slope\" asymmetric ridges. Their sandstone is older than the Blue Mountains' and much more folded: the Blue Mountains beds are still roughly horizontal, the Grampians beds are visibly tilted.",
    concept:
      "A cuesta is the textbook landform of \"differential erosion on tilted beds\": soft layers are stripped to a gentle slope, the cut edge of a hard sandstone layer stands as a cliff, and the cliff faces the up-dip direction. A whole set of parallel cuestas like the Grampians is the best outcrop for reading the dip of the rock in the field.",
    history:
      "Gariwerd is deeply significant to the Jardwadjali and Djab Wurrung peoples, and holds about 80% of Victoria's known Aboriginal rock art sites. The explorer Thomas Mitchell named the range in 1836 after the Grampian Mountains of Scotland. \"Gariwerd\" has recently been restored as an official dual name.",
  },

  ningaloo: {
    seeing:
      "Ningaloo Reef, on the north-west coast of Western Australia, is about 300 km long and Australia's largest fringing reef — a coral reef growing right against the shore, in places only a hundred metres or two out. It is World Heritage-listed together with the inland Cape Range (2011). Between March and August one of the world's largest aggregations of whale sharks gathers here.",
    formation:
      "A fringing reef grows directly on the rocky shallows at the edge of the land, without the wide lagoon of a barrier reef. The coast at Ningaloo is slowly rising, and the neighbouring Cape Range is a limestone anticline that has been lifted and then cut into gorges by old rivers. The present reef is coral growing upward on older reef foundations since sea level rose after the last ice age.",
    observation:
      "From the air Ningaloo is a pale reef line hugging the coast: only a narrow band of turquoise shallow water lies between reef and shore, and deep-blue Indian Ocean starts immediately outside. Onshore is the red-brown Cape Range, with dry gorges (such as Yardie Creek) cut right down to the sea.",
    distinguish:
      "Ningaloo is a fringing reef; the Great Barrier Reef is a barrier reef — the key difference is how far the reef sits from shore: a fringing reef is against the land with almost no lagoon; a barrier reef lies tens of kilometres offshore behind a wide lagoon, along the shelf edge. At Ningaloo you can swim to the coral straight from the beach; the Great Barrier Reef needs a boat.",
    concept:
      "A fringing reef is the \"youngest\" and simplest of the three basic reef types (fringing–barrier–atoll): coral starts in place in the shallows at the edge of the land. Darwin's classic model holds that if the land keeps subsiding a fringing reef grades into a barrier reef and finally an atoll; Ningaloo stays at the fringing stage because its coast is rising.",
    history:
      "The Ningaloo coast is the traditional sea country of the Yinigudura and other Aboriginal groups, with shell middens and rock art thousands of years old. There was a whaling station here in the 19th century (Norwegian Bay). A marine park was declared in 1987 and the area was World Heritage-listed in 2011.",
  },


  kanas: {
    seeing:
      "Kanas Lake lies deep in the Altai Mountains at the far northern tip of China, at about 1,370 m — a long, narrow alpine lake. Its water changes colour with the weather, the season and the amount of suspended silt, from jade green to near-black blue, which is why it is called the \"colour-changing lake.\" It is ringed by dense Siberian conifer forest.",
    formation:
      "Kanas is a glacial-scour lake: a Quaternary glacier gouged a U-shaped valley, and after the ice retreated a terminal moraine (a ridge of glacier-carried gravel) dammed the valley mouth, so meltwater and rain pooled behind it. The lake is about 24 km long and around 190 m deep — one of the deepest lakes in China.",
    observation:
      "From the air Kanas is a curving blue ribbon set in a dark green sea of forest, held between two ridges, connected to snow mountains at one end and draining into the Kanas River at the other. The colour is uneven — greener and paler where the inflow carries silt, bluer downstream. Wolong Bay and Moon Bay to the west are large meanders of the river.",
    distinguish:
      "Compared with Sayram Lake in the Tianshan: Kanas is a glacial-scour lake gouged by ice and dammed by a moraine — long and narrow, boxed into a valley, ringed by conifer forest; Sayram is a fault-depression tectonic lake — rounded, sitting in an open mountain basin, ringed by grassland. Kanas is far lower, and drains to the Arctic Ocean via the Irtysh; Sayram is closed, internal drainage.",
    concept:
      "Kanas's \"colour change\" is not mysterious: extremely fine \"rock flour\" ground up by the glaciers upstream stays suspended in the water and scatters light green; when there is less silt the water is clear and deep blue. Many glacier-fed lakes do this. The Irtysh, which drains Kanas, is the only river system in China that flows to the Arctic Ocean.",
    history:
      "The lake area is traditional grazing land of the Tuvan people; the three Tuvan villages of Kanas, Hemu and Baihaba keep their log houses and transhumant herding. Winters are long and severe, and this is one of the few places in China where you see stands of Siberian larch, spruce and fir.",
  },

  sayram: {
    seeing:
      "Sayram Lake sits on the northern slope of the Tianshan at the south-western edge of the Junggar Basin, at about 2,070 m — the largest alpine lake in Xinjiang. It is a closed, internal-drainage lake, walled in by Tianshan mountain country, with deep blue, highly transparent water.",
    formation:
      "Sayram is generally taken to be a tectonic lake in a fault-depression mountain basin, later modified by glaciers. It is fed by snowmelt and rain off the surrounding mountains, has no outlet, and balances by evaporation, so it is slightly saline. Several old shorelines around the lake show that the water once stood higher than it does now.",
    observation:
      "From the air Sayram is a near-oval of deep blue, ringed by a band of green alpine meadow and then by the snow ranges of the Tianshan. A road runs around the east shore; strong winds blow constantly at the north-west. Because it is high and the water is deep and clear, it is bluer than any other water body around it.",
    distinguish:
      "See the Kanas entry. The core difference: Sayram is a tectonic lake in a down-faulted basin — rounded, ringed by grassland, closed and slightly saline; Kanas is a glacial-scour lake — long and narrow, ringed by conifer forest, part of an Arctic-draining river system.",
    concept:
      "Sayram shows why a large lake can persist in a high mountain basin: the basin is closed, snowmelt supply is steady, and inflow and evaporation are roughly in balance. With no outlet, minerals slowly accumulate and the water turns slightly salty — the common fate of every closed lake, and Sayram is still at an early stage of it.",
    history:
      "Sayram Lake was on the northern Silk Road route that crossed the Tianshan into the Ili valley. Kazakh and Mongol herders have moved stock through the lakeside pastures for generations. The lake had almost no fish until cold-water species were introduced in the 20th century.",
  },

  tianchi: {
    seeing:
      "Tianchi (Heavenly Lake) of the Tianshan lies on the northern slope of Bogda Peak, about 100 km east of Ürümqi, at around 1,900 m — a glacial-scour lake hung partway up the mountainside. From the window you can see the deep-blue lake, the spruce forest at its shore and the permanently snow-capped Bogda Peak behind it all at once. It was anciently called \"Yaochi.\"",
    formation:
      "Tianchi is a lake where a Quaternary glacier gouged a U-shaped valley, then a moraine ridge dammed the valley mouth after the ice retreated and meltwater pooled behind it. The lake is about 3 km long and around 100 m deep. Glacial striations, roches moutonnées and several moraine ridges around it record repeated advances and retreats of the ice.",
    observation:
      "From the air Tianchi is a crescent of deep blue on the north side of the Tianshan crest, boxed into a steep valley and standing higher than the valley floor below it. Above the lake is bare rock and the glaciers of Bogda; below it, spruce forest runs down the valley.",
    distinguish:
      "The Tianshan's Tianchi and Changbai Shan's Tianchi share a name but form completely differently: the Tianshan one is a glacial-scour lake dammed by a moraine — long and narrow, partway up the mountain; the Changbai one is a caldera lake formed by summit collapse after an eruption — near-circular, at the summit. The Tianshan Tianchi and Kanas are both glacial-scour lakes, but Tianchi is smaller, higher and closer to the snow peaks.",
    concept:
      "Tianchi is a close-up sample of \"how a glacier makes a lake\": the ice first gouges a deep valley like a bulldozer, then piles a dam of its own carried rubble across the valley mouth; the ice melts, the dam stays, and the water is held. Lakes of this \"scour-plus-moraine-dam\" type are common high in the Tianshan and Altai.",
    history:
      "Tianchi was anciently called \"Yaochi\" and appears in Tang-dynasty texts; legend makes it the place where the Queen Mother of the West feasted King Mu of Zhou. Local Kazakh herders graze the lakeside pastures in summer and move down the mountain in winter. It was named in China's first group of key national scenic areas in 1982.",
  },

  bosten: {
    seeing:
      "Bosten Lake lies in the Yanqi Basin at the southern foot of the Tianshan, at about 1,050 m, and is often called China's largest inland freshwater lake. The Kaidu River enters from the north-west and the Konqi River leaves to the south-west — it is an unusual inland lake with both an inflow and an outflow. Its west shore has extensive reed wetlands. It was anciently called the \"Western Sea.\"",
    formation:
      "Bosten Lake fills a fault-depression basin. Tianshan snowmelt reaches it via the Kaidu River, and the surplus leaves via the Konqi River toward the southern Tarim Basin (finally lost in the desert, never reaching the sea). Because there is an outlet, salt does not build up as it does in a purely closed lake, so the body of the lake is fresh, with only the eastern part slightly brackish.",
    observation:
      "From the air Bosten is an irregular sheet of turquoise at the southern foot of the Tianshan, mountains to the north and oasis farmland to the south. The west shore is a spread of pale reed marsh and small lakes (the \"small-lake district\"); the main body is open and deep blue. The Kaidu River has built a delta where it enters.",
    distinguish:
      "Bosten and Lake Ebi both sit low in a basin, but Bosten has an outlet, is mostly fresh, and is ringed by oasis farmland; Ebi has no outlet, is saline, and is ringed by salt flats and desert. Versus Qinghai Lake: Qinghai Lake is closed, saline and on the plateau; Bosten takes in and lets out, is fresh, and is in a basin.",
    concept:
      "Bosten shows that whether an inland lake has an outlet decides its fate: with an outlet, salt can leave with the water and the lake stays fresh; without one, evaporation removes only water and leaves salt, and the lake eventually turns salty. In recent decades increased upstream water use has made Bosten's level and water quality fluctuate considerably.",
    history:
      "Bosten Lake, anciently the \"Western Sea,\" was an important water source on the northern Silk Road, with the ancient kingdom of Yanqi on its shore. The lake produces reeds and freshwater fish.",
  },

  aibi: {
    seeing:
      "Lake Ebi sits in the south-western corner of the Junggar Basin, just inside the Alataw Pass — the largest saltwater lake in Xinjiang. It is the lowest collecting point of the western Junggar Basin, at about 190 m. Its area swings widely with the season and the inflow, and it is ringed by broad white salt flats and desert.",
    formation:
      "Several rivers — the Bortala, the Jing and others — bring salt into this closed hollow, which has no outlet, and strong evaporation leaves the salt behind, building a salt lake over a long time. In recent decades upstream water use has shrunk the lake noticeably, and the exposed lake bed has become one source of regional dust.",
    observation:
      "From the air Lake Ebi is an irregular, whitish sheet of shallow water or salt pan in the desert, facing straight into the Alataw Pass to the north — a gap between the Tianshan and the Alatau, where strong winds blow all year. You can see the wind carrying salt dust and sand off the surface in long plumes.",
    distinguish:
      "Lake Ebi and Lop Nur are both salt lakes at the low point of a basin, but Lake Ebi still has a seasonal water surface while Lop Nur is completely dry. Lake Ebi versus Bosten Lake: one is closed, salty and shrinking; the other takes in and lets out, is fresh, and is ringed by farmland.",
    concept:
      "Lake Ebi is a classic case of \"closed-lake shrinkage\": upstream river water is diverted for irrigation, less water reaches the lake, the lake contracts, and the dried lake bed's salt dust is lifted by the strong winds, affecting ecology and transport downwind. The same problem is common across the arid heart of Central Asia (the Aral Sea, for instance).",
    history:
      "The Alataw Pass is a famous wind gap with many gale days a year; the Jing–Yi–Huo railway and the China–Europe freight trains leave the country here. The lakeside was historically Mongol and Kazakh grazing land. The Ebi Lake wetland reserve was raised to national level in 2007.",
  },

  "lop-nur": {
    seeing:
      "Lop Nur lies at the far eastern end of the Tarim Basin. It was once the terminal lake of the Tarim, Konqi and other rivers, and one of the largest lakes of the Western Regions. It dried out completely in the mid-to-late 20th century and is now a plain of salt crust and yardangs. In satellite images, rings of former shoreline make the dry lake bed look like an ear — the \"ear of the Earth.\"",
    formation:
      "Lop Nur is the lowest collecting area of the Tarim Basin, and historically it \"wandered\" around the basin as the rivers changed course, growing and shrinking. In modern times heavy upstream irrigation plus a drying climate cut the inflow sharply, and the lake dried out completely around the 1970s, leaving a salt crust tens of centimetres thick. Wind erosion has carved fields of yardangs across the dry bed and its surroundings.",
    observation:
      "From the air Lop Nur is a large, stark-white salt-crust plain in the eastern basin, with concentric pale stripes (the \"big ear\") marking shorelines of different ages. To the north-west is a field of yardang mounds; to the south, the gobi of the Altun Mountains. In recent years large, regular blue-green ponds have appeared in the lake area — artificial brine ponds for mining potash.",
    distinguish:
      "Lop Nur and Lake Aydingkol in the Turpan Basin are both salt pans at the low point of a basin, but Aydingkol is below sea level and still holds a little seasonal water, while Lop Nur is above sea level and essentially all dry. Versus Qinghai Lake: one was once vast and is now gone; the other is still China's largest lake.",
    concept:
      "Lop Nur is an extreme case of the fate of a \"terminal lake\": the water of an inland river all ends up at the lowest point of the basin, with nowhere to go but evaporation, and salt keeps accumulating; as soon as the upstream water is taken, the terminal lake is the first thing to dry up. It is a reminder that in a dry region, water used upstream often means the loss of the lakes and oases downstream.",
    history:
      "Lop Nur was a key node of the ancient Silk Road, and the kingdom of Loulan was built on its shore and abandoned when its water failed. In 1964 China's first atomic bomb was tested in the Lop Nur area. In 1980 the scientist Peng Jiamu disappeared here on an expedition, and in 1996 the trekker Yu Chunshun died nearby. The area now holds an important national potash-production base.",
  },


  "tarim-river": {
    seeing:
      "The Tarim River runs west to east along the northern rim of the Tarim Basin for about 2,000 km — China's longest inland river. It has no outlet to the sea and finally dies away in the desert and terminal lakes of the south-eastern basin. From the air it is a curving line at the edge of the yellow sand sea, fringed with dark-green wild poplar and farmland.",
    formation:
      "The Tarim forms where three source rivers — the Aksu, the Yarkand and the Hotan — meet near Alar, carrying snowmelt from the Tianshan, Kunlun and Pamirs. The basin floor is extremely flat and the water is silt-laden, so the channel keeps silting up and shifting — a classic \"wandering river\" — and its floodplain grows salt- and drought-tolerant wild poplar.",
    observation:
      "From the air the Tarim's channel looks like a braid that splits and rejoins, swinging left and right across flat desert. Hugging the channel is a belt of poplar, dark green in summer or gold in autumn; grey gobi lies beyond. The river's tail spreads out and seeps away near Lake Taitema.",
    distinguish:
      "The Tarim and the Irtysh are both in northern Xinjiang, but the Tarim is an inland river that cannot get out, its flow swinging sharply with the season, its banks desert poplar; the Irtysh is an exterior-drainage river (to the Arctic via Russia), its flow steady, its banks dense poplar woods and meadow.",
    concept:
      "The Tarim is the best example of an \"inland river\": fed entirely by mountain snowmelt, it loses water all the way to evaporation, seepage and irrigation, so there is less and less of it downstream until it dries in the sand. In the 20th century the lower river ran dry for years and poplars died in swathes; since 2000, deliberate ecological water releases have restored the lower channel and some of the forest.",
    history:
      "The Tarim's oases string together the towns of Korla, Alar and Yuli. Its terminal lake was once Lop Nur, and as the flow shrank the end point kept retreating upstream. Its rise and fall is a mirror of thousands of years of the relationship between people and an arid land.",
  },

  ertis: {
    seeing:
      "The Irtysh rises on the southern slope of the Altai and flows from south-east to north-west across northern Xinjiang; beyond the border it runs through Kazakhstan and Russia and finally reaches the Arctic Ocean — the only river in China belonging to an Arctic drainage. From the air it meanders in a broad, flat valley lined with continuous poplar woods and green meadow.",
    formation:
      "The Irtysh follows the fault zone along the front of the Altai, giving it a wide, flat valley. It is fed mainly by Altai snowmelt and relatively generous rain, and as an exterior-drainage river its flow is far steadier than Xinjiang's inland rivers, so dense valley forest can grow along it.",
    observation:
      "From the air the Irtysh is a full, blue ribbon at the southern foot of the Altai, its channel meandering freely in a broad valley with many oxbow lakes and mid-channel bars. The \"Five-Colour Bluff\" near Burqin is a coloured rock bank eroded on one side of the river. The poplar and willow belts along the banks are darker than the surrounding grassland.",
    distinguish:
      "See the Tarim River entry. What makes the Irtysh special: it is Xinjiang's only exterior-drainage river, its water eventually reaching an ocean, so its regime is steady and its valley green; Xinjiang's other rivers either drain internally or end in the inland lakes of Central Asia.",
    concept:
      "The Irtysh shows what the interior/exterior-drainage divide means for a river: a river that can reach an ocean flushes its silt and salt away with the water, and its valley stays fertile and moist; an inland river that cannot get out grows saltier and weaker downstream. In this part of Xinjiang, China's interior/exterior drainage boundary lies along the southern edge of the Irtysh basin.",
    history:
      "The Irtysh valley has long been Kazakh grazing land and an important route from Xinjiang into Central Asia. The river holds cold-water fish such as taimen. In recent decades water diverted from the Irtysh has eased shortages elsewhere in northern Xinjiang.",
  },

  "yarkant-river": {
    seeing:
      "The Yarkand River rises on the northern slope of the Karakoram and flows from south-west to north-east through the western parts of the Kashgar and Hotan areas — the largest single source of the Tarim River. From the air it comes out of the brown mountains toward the Kunlun and spreads into a huge alluvial fan at the mountain front, with a string of oases along the fan edge.",
    formation:
      "The Yarkand's water is glacial meltwater from the Karakoram and the Pamirs. It carries a heavy silt load and builds a very large alluvial fan on the south-western rim of the Tarim Basin; the oases of Yarkand, Makit and Bachu all sit on this fan. Its lower channel wanders and shifts.",
    observation:
      "From the air the river's mouth is a radiating spread of channels and a fan of oasis, greenest near the mountain gap where there is most water and narrowing toward the desert. When the glaciers melt hard in summer the river runs high and muddy yellow.",
    distinguish:
      "The Yarkand River versus the Tarim main stem: the Yarkand is farther south and farther upstream, one of the Tarim's main sources; it becomes the \"Tarim\" only after the sources join. Versus the Ili River: the Yarkand is in an extremely arid zone, fed by glaciers, its banks oasis farming; the Ili is in a semi-humid zone, fed by westerly rain, its banks continuous farmland and grassland.",
    concept:
      "The Yarkand River is a textbook case of \"glacial meltwater feeding oases\": the oases are not sited at random but locked onto the edge of the alluvial fan, where the water table is high and canal water reaches. Off that water line it is barren. In years with more glacial melt the river is fuller and the harvests good; as the glaciers retreat, the future of the oases is in question.",
    history:
      "The Yarkand valley is the lifeline of the south-western Tarim oases. The Yarkand Khanate of the 16th–17th centuries had its capital here and was a political and cultural centre of the Western Regions. Dolan culture also grew up along this river at the desert's edge.",
  },

  "ili-valley": {
    seeing:
      "The Ili Valley, in western Xinjiang, is a triangular valley in the Tianshan that opens to the west. The Ili River winds along its floor between farmland, orchards and grassland, with the snow peaks of the Tianshan to the north. Greener and moister than anywhere else in Xinjiang, it is called \"the Jiangnan beyond the passes.\"",
    formation:
      "The valley mouth faces west, straight into the prevailing westerlies, so moisture from the Atlantic and Central Asia is funnelled in and drops more rain on the windward slopes (locally over 500 mm a year, far more than southern Xinjiang). River alluvium has laid a flat, fertile plain on the valley floor, and the flanking mountains carry vertical belts of forest and meadow.",
    observation:
      "From the air the Ili Valley is an unusually broad, vivid-green lowland among the Tianshan ranges: the Ili River's meanders and a spread of checkerboard fields (wheat, maize, lavender) down the middle, dark spruce forest and alpine meadow on the flanking slopes, and the western end open, merging into the plains on the Kazakhstan side.",
    distinguish:
      "The Ili Valley is the opposite of the Tarim and Yarkand valleys of southern Xinjiang: it opens west and catches westerly moisture, so it is moist, rainy and given to dryland farming and natural grassland; the southern valleys are boxed in by mountains and desert, extremely arid, and can only support glacier-fed oasis farming. The Ili River flows west into Lake Balkhash in Kazakhstan — an exterior-drainage river.",
    concept:
      "The Ili Valley is a classic case of \"terrain deciding climate\": both are in the Tianshan, both in Xinjiang, yet only because the valley mouths face different ways, one catches the rain and one lies in the rain shadow. This is also why Xinjiang's oases and population are so concentrated on the northern slope of the Tianshan and in places like Ili — windward and near water.",
    history:
      "Ili has long been an important farming and grazing region of the Western Regions. In the Qing it was the seat of the \"General of Ili,\" the top military-civil authority for Xinjiang. The Khorgos port is an important land crossing into Central Asia. Today the Ili Valley is a major grain and specialty-crop region of Xinjiang.",
  },

  narat: {
    seeing:
      "The Nalati grassland lies in the heart of the Tianshan, along the Kunes valley at the eastern end of the Ili Valley, mostly above about 1,800 m. It is classic mountain meadow steppe: gently rolling ground, a thick green sward, stands of Tianshan spruce along the valley sides, and the snow peaks of the Tianshan beyond.",
    formation:
      "Nalati lies in a down-faulted valley within the Tianshan. Its mouth catches some westerly moisture, so it gets far more rain than the surrounding desert, and the high elevation, low temperature and weak evaporation together support a well-watered alpine meadow. Deep winter snow feeds the pasture in spring and summer.",
    observation:
      "From the air Nalati is a rolling green slope between Tianshan snow peaks, white Kazakh felt tents scattered across it, dark spruce forest running in bands down the shady slopes and valleys. The Kunes River winds along the valley floor. It is deep green in summer, with the spruce edges turning gold in autumn.",
    distinguish:
      "Nalati and Bayanbulak are both in valleys or basins within the Tianshan, but Nalati is lower, warmer, its meadow lusher, with large areas of spruce forest; Bayanbulak is higher (above about 2,400 m), colder, flatter, with more marsh wetland and almost no forest.",
    concept:
      "Nalati shows how a mountain meadow comes about: high enough that forest cannot grow, not yet so high that only bare rock and ice remain, plus steady rain and snowmelt — the result is this meadow belt between the forest belt and the alpine belt. It is one link in the vertical zonation of the Tianshan, and its best summer pasture.",
    history:
      "Nalati is traditional Kazakh summer pasture; each summer the herders move stock up the mountain along fixed routes. The name \"Nalati\" is usually explained as \"the place where the sun is.\" In 2013 the Xinjiang Tianshan (including the Nalati area) was inscribed as World Natural Heritage for its glaciers, snow peaks and vertical natural zones.",
  },

  bayanbulak: {
    seeing:
      "The Bayanbulak grassland lies in a mountain-ringed high basin in the central Tianshan, above about 2,400 m. The basin floor is very flat and poorly drained, with wide areas of marsh and meandering channels. The Kaidu River loops through it in countless tight bends — the famous \"Nine Bends and Eighteen Turns.\"",
    formation:
      "Bayanbulak is a down-faulted basin within the Tianshan. Walled in by mountains, its floor is flat with a tiny gradient, so the river runs slowly, erodes sideways, and develops dense free meanders and oxbow lakes. The high, cold climate has weak evaporation, the ground stays wet year-round, and it is a broad expanse of cold alpine meadow and marsh.",
    observation:
      "From the air Bayanbulak is a flat grass bowl held by snow mountains, the Kaidu River coiled across it in row after row of close silver hairpins that fill with reflected light at sunset. Pools and marshes are scattered through the basin — a breeding ground for swans and other waterbirds.",
    distinguish:
      "See the Nalati grassland entry. Bayanbulak's key traits: high, flat and wet — so it is a combination of meanders, marsh and cold alpine meadow, not the forested rolling slopes of Nalati.",
    concept:
      "Bayanbulak is a living lesson in why a river makes big bends: on a valley floor with almost no gradient the water has no drive to cut down, so it erodes sideways instead — cutting the concave bank, building the convex bank — and the bends grow until the river cuts them off as oxbow lakes. This extreme free meandering needs exactly such a closed, flat high basin.",
    history:
      "\"Bayanbulak\" means \"abundant springs\" in Mongolian; it was historically pasture of the Mongol Torghut people. One of China's earlier swan nature reserves is here, and large numbers of whooper, tundra and mute swans breed on it each year. It is also part of the Xinjiang Tianshan World Natural Heritage.",
  },

  kuche: {
    seeing:
      "The Kuqa (Kizilya) Grand Canyon lies in the mountains north of Kuqa city, on the southern slope of the Tianshan. It is a narrow canyon cut into red rock, with sheer walls, a slot at its narrowest that admits only one or two people abreast, and only a strip of sky overhead. The rock is an intense ochre-red in the sun.",
    formation:
      "The canyon is cut into Mesozoic–Cenozoic red sandstone and mudstone on the southern Tianshan. These beds are fairly soft, and Tianshan floods and snowmelt working down the joints over a long time, plus wind erosion, have cut this deep narrow slot, leaving water- and wind-worn pillars and niches on the walls.",
    observation:
      "From the air the Kuqa Grand Canyon is a winding deep slit in the brown-red mountains of the southern Tianshan, the main gorge flanked by many smaller side slits. The red walls contrast sharply with the sparse grey-green desert plants on top. Just outside the southern mouth is the farmland of the Kuqa oasis.",
    distinguish:
      "The Kuqa Grand Canyon and the Flaming Mountains are both erosion of Mesozoic red beds in the Turpan–Kuqa region, but the Kuqa canyon is a narrow, deep, downcut gorge — you look at enclosed walls; the Flaming Mountains are a low ridge cut to pieces — spread out east–west, you look at a continuous ochre-red massif. Against the Three Gorges of the Yangtze it is far smaller and has no great river running through it.",
    concept:
      "The Kuqa Grand Canyon shows that an arid region can also have dramatic running-water landforms: rain is scarce all year, but short-lived floods from Tianshan snowmelt and occasional storms, carrying gravel and concentrated in narrow gullies, cut down powerfully and can saw a deep canyon into soft rock within a few hundred thousand years.",
    history:
      "Kuqa was the site of the ancient kingdom of Qiuci (Kucha), an important Buddhist centre on the Silk Road, with large cave-temple complexes such as the Kizil Caves nearby. Ancient beacon towers and cave sites survive around the canyon. It is now a national geopark.",
  },

  "flaming-mountains": {
    seeing:
      "The Flaming Mountains run along the northern rim of the Turpan Basin for about 100 km — a bare, ochre-red low range. At noon in summer the sun-baked red rock shimmers in the heat haze and, from a distance, looks like it is burning, hence the name. It is one of the hottest places in China in summer.",
    formation:
      "The Flaming Mountains are an anticline on the northern rim of the Turpan Basin that has been lifted and then eroded, built mainly of Mesozoic red sandstone, mudstone and conglomerate; iron and manganese oxides in the rock give it its red colour. Water working down the joints has cut a set of near-parallel deep gullies, and the range is almost bare of plants. The basin is closed and low, so heat cannot escape and ground temperatures are extreme.",
    observation:
      "From the air the Flaming Mountains are a continuous red rock ridge with regularly spaced gullies on the north side of the Turpan Basin, gobi and karez oasis to the south, the brown mountains of the Tianshan to the north. Several streams (such as Mutou Gully and Grape Valley) cut straight across the range, and those gullies are green strips.",
    distinguish:
      "See the Kuqa Grand Canyon entry. The Flaming Mountains are \"broad and low, regularly gullied, continuous as a ridge\" — you look at the continuous red massif and its sharp contrast with the oasis to the south; the Kuqa Grand Canyon is a single \"narrow and deep\" gorge.",
    concept:
      "The Flaming Mountains are a combination of \"anticline ridge plus dry heat\": the beds were arched into an anticline, the exposed soft red layers were cut by water into regular gullies; add a closed, low basin, clear skies and dark rock that absorbs heat strongly, and you get the extreme ground temperatures here. The actual temperature records come from nearby weather stations, not from the range itself.",
    history:
      "The Flaming Mountains are known to every Chinese reader from Journey to the West, where the Monkey King borrows a banana-leaf fan. Historically they lay on the northern Silk Road, with the ruined city of Gaochang and the Bezeklik caves at their foot. Grape Valley on the southern side uses Tianshan snowmelt and is a well-known grape-growing area.",
  },

  gurbantunggut: {
    seeing:
      "The Gurbantunggut Desert lies in the centre of the Junggar Basin, about 48,000 km² — China's second-largest desert and its largest fixed and semi-fixed desert. Its dunes are lower and gentler than the Taklamakan's; the surface carries drought-tolerant saxaul and large numbers of spring ephemerals, and snow can be seen in winter.",
    formation:
      "The Junggar Basin has gaps in the north-west (the Irtysh valley, the Alataw Pass) that let in some westerly moisture, and steady winter snowmelt on top of that, so annual rainfall is higher than in the Tarim Basin. That moisture lets plants root on the dunes and hold the sand, so this is mostly fixed and semi-fixed dunes rather than a pure sea of moving sand.",
    observation:
      "From the air the Gurbantunggut is a mottled grey-yellow-and-green sand sheet, its ridges mostly long north–south strips with a network of shrubs in the troughs and on the flanks. When the ephemerals green up in spring the surface briefly flushes pale green. The basin rim is the oasis belt along the northern foot of the Tianshan and Altai.",
    distinguish:
      "The Gurbantunggut and the Taklamakan: one is fixed and semi-fixed, vegetated, its dunes low and gentle, with winter snow, and smaller; the other is moving, almost bare, its dunes tall, extremely arid, and far larger. The reason is that the Junggar Basin is half-open and gets a little moisture, while the Tarim Basin is sealed on all sides.",
    concept:
      "The Gurbantunggut shows that \"a little water can lock down the sand\": as long as rainfall and snowmelt are enough for xerophytes like saxaul to survive, their roots and litter fix the dune surface and the sand stops moving freely. It is China's highest-latitude desert (about 44–46° N), cold and snow-covered in winter — unusual among the world's deserts.",
    history:
      "The desert holds relict wild poplar and saxaul woodland and is habitat for animals such as Przewalski's horse and the goitered gazelle. Oilfields such as Karamay and transport lines lie around the basin rim, while the desert interior is little peopled and ecologically fragile.",
  },

  kumtag: {
    seeing:
      "The Kumtag Desert (this entry refers to the patch south of Shanshan) lies in the eastern Turpan Basin, at the southern foot of the eastern Tianshan. \"Kumtag\" is simply \"sand mountain\" in Turkic. What is most striking here is that the desert runs right up to the edge of Shanshan town, with almost no transition — a few steps out of town and you are at dunes tens of metres high.",
    formation:
      "The sand of this patch is fine sand blown from the surrounding gobi and dry riverbeds by the prevailing north-east wind and piled in the lee at the southern foot of the Tianshan. It is extremely arid, with little rain and very strong evaporation, and the dunes are mostly tall moving dunes — crescent, linear, and tall pyramidal sand mountains.",
    observation:
      "From the air the Kumtag is a field of golden dunes on the southern edge of the Shanshan oasis, town and vineyard checkerboard on one side, a run of rolling sand mountains on the other, the line between them very sharp. The surface carries clear, regular wind ripples.",
    distinguish:
      "The Kumtag (this Shanshan patch) versus the Gurbantunggut: the Kumtag is moving dunes, almost bare, drier; the Gurbantunggut is fixed and semi-fixed, with saxaul, and snowy in winter. Against the Taklamakan it is far smaller, but likewise tall moving dunes. (A larger, separate Kumtag Desert, a wild-camel reserve, lies east of Lop Nur and shares the name.)",
    concept:
      "The Kumtag is a good place to watch \"how wind shapes dunes\": different wind regimes make different dune forms — crescent under a single dominant wind, linear under two alternating directions, tall pyramidal sand mountains where winds from several directions converge. Here several forms sit close together and are easy to read.",
    history:
      "The desert edge was a segment of the ancient Silk Road, with old beacon towers nearby. The name Shanshan (anciently Loulan, later the kingdom of Shanshan) comes from a Western-Regions kingdom of this area. It is now a desert scenic area whose feature is the town meeting the sand.",
  },


  xiaoxinganling: {
    seeing:
      "The Lesser Khingan Range runs through north-central Heilongjiang, trending NW–SE between the Songnen Plain and the Sanjiang Plain, and dividing the two. It is lower than the Greater Khingan, mostly 500–800 m, with rounded, gentle summits and a dense mixed conifer-broadleaf forest.",
    formation:
      "The Lesser Khingan is a low, worn fold range that was later slowly uplifted; it is mostly granite and metamorphic rock, with basalt plateaus and volcanic landforms among it (the Wudalianchi volcanic group sits on its south-western edge). Rivers have cut the range into broad, shallow valleys.",
    observation:
      "From the air the Lesser Khingan is a rounded, continuous, dark-green sea of low forested hills, with no sharp peaks or bare rock. The Tangwang and Hulan rivers wind through the woods. The Songnen and Sanjiang plains on either side are checkerboard farmland, with a sharp edge against the forest.",
    distinguish:
      "The Lesser and Greater Khingan: the Greater Khingan is the long north–south body dividing the Inner Mongolian Plateau from the Northeast Plain, grassland on its west; the Lesser Khingan lies to the north-east, trends more east–west (NW–SE), divides the Songnen and Sanjiang plains, and is lower, farther east and moister. Versus Changbai Shan: Changbai is an isolated high volcano, the Lesser Khingan a continuous low fold range.",
    concept:
      "The Lesser Khingan is an example of \"a low range as an important geographic line\": it is not high, but as a watershed it separates two great plains of the Songhua system, and it is the northern limit of the Korean pine forest. With the Greater Khingan and Changbai Shan it forms the \"green screen\" on three sides of the Northeast Plain.",
    history:
      "The Lesser Khingan is traditional hunting ground of the Oroqen and Ewenki, and was once one of China's most important logging regions (the Yichun area was called \"the home of Korean pine\"). Commercial logging of natural forest has now stopped entirely, replaced by conservation and eco-tourism.",
  },

  yinshan: {
    seeing:
      "The Yin Mountains run east–west across the central Inner Mongolian Plateau for about 1,000 km, made up of the Lang Shan, Wula Shan, Daqing Shan and other sections. The south slope is steep and drops onto the Hetao Plain and the Loess Plateau; the north slope is gentle and merges into the Inner Mongolian Plateau. The summit area is about 2,300–2,400 m.",
    formation:
      "The Yin Shan is a fault-block range, sharply uplifted along a fault on its southern edge, giving the steep south face, with a gentler north slope; the rock is mostly old metamorphic rock and granite. It roughly blocks moist air on its southern side, so the landscape north and south of it is markedly different.",
    observation:
      "From the air the Yin Shan is an east–west grey-brown rock wall across the Inner Mongolian Plateau: green Hetao Plain irrigated from the Yellow River to the south, arid steppe and gobi to the north — a strong contrast. Cities such as Hohhot and Baotou lie along the southern foot of the Daqing Shan.",
    distinguish:
      "The Yin Shan and the Helan Shan: both are boundary ranges between the monsoon and non-monsoon zones, and between farming and herding, but the Yin Shan is in central Inner Mongolia, east–west and longer; the Helan Shan is in Ningxia, north–south and shorter, and blocks sand and wind from the north-west. The Yin Shan and the Qinling: the Qinling is the climate line between north and south China, higher and moister; the Yin Shan is the line through the farming–herding transition belt, drier.",
    concept:
      "The Yin Shan roughly marks one of China's boundaries between the monsoon and non-monsoon zones, exterior and interior drainage, and farming and herding, and lies close to the 400 mm annual-rainfall line. Powers to its north and south fought back and forth across this line through history — \"Yin Shan\" is almost a byword for the farming–herding divide.",
    history:
      "The land north and south of the Yin Shan was long contested between the Central Plains dynasties and the Xiongnu, Turks and others; the Zhao and Qin walls were both built along the Yin Shan. Yin Shan rock art records thousands of years of hunting and life among the steppe peoples. The Northern Wei set the \"six garrisons\" along the Yin Shan.",
  },

  luliang: {
    seeing:
      "The Lüliang Mountains run north–south through western Shanxi and are the watershed between the Yellow River (west) and the Fen River (east). The range is buried under thick loess, with rolling ridges and hills cut by a maze of gullies and severe soil erosion. The main peak, Guandi (Xiaowen) Shan, is about 2,831 m.",
    formation:
      "At its core the Lüliang is an old fold-and-fault range, later covered over large areas by loess. Loess is loose and erodes easily, and with steep slopes and vegetation once stripped, running water has cut the slopes into dense branching gullies — one significant source of the middle Yellow River's silt.",
    observation:
      "From the air the Lüliang Mountains are a yellow, gully-shredded north–south highland in the eastern Loess Plateau, the ridge line still fairly continuous, the Yellow River and Fen River valleys on either side holding ribbons of farmland and towns. Conversion of farmland to forest has re-greened some slopes in recent years.",
    distinguish:
      "The Lüliang and the Taihang: both are in Shanxi and both run north–south, but the Taihang is on the east, the boundary between the Loess Plateau and the North China Plain, with a cliff on its east face; the Lüliang is on the west, inside the Loess Plateau, the divide between the Yellow and Fen rivers, covered in loess throughout.",
    concept:
      "The Lüliang is a classic \"loess-covered range\": a hard rock range at the base, wrapped in a hundred metres of loess, so from a distance it is a range and up close it is loess gullies everywhere. It also shows that a watershed need not be a lofty peak — a low ridge buried in loess can still keep two great river systems apart.",
    history:
      "The Lüliang area is an old revolutionary base and was the core of the Shanxi–Suiyuan base during the war against Japan. It is also an important home of Chinese folk song and wheat-flour food culture. Its long record of soil-erosion control and farmland-to-forest conversion is a microcosm of ecological repair on the Loess Plateau.",
  },

  liupan: {
    seeing:
      "The Liupan Mountains lie in southern Ningxia and eastern Gansu, a rocky north–south range in the western Loess Plateau. It is higher and far moister than the loess hills around it, with stands of forest on its slopes — a \"green island\" on the Loess Plateau. The main peak, Migang Shan, is about 2,942 m.",
    formation:
      "The Liupan is a fault-and-fold range strongly uplifted since the Cenozoic, built of hard sandstone and conglomerate and not wholly buried by loess. Because it is high and windward, it catches more rain and has developed forest and alpine meadow, in sharp contrast with the arid loess around it.",
    observation:
      "From the air the Liupan is a dark-green north–south ridge on the western edge of the Loess Plateau, standing out above the pale-yellow loess hills. The Jing and Qingshui rivers rise here. Cloud and mist are common, and the road climbs the mountain in coils — hence the name \"six coils.\"",
    distinguish:
      "The Liupan and the Helan Shan: both in Ningxia and both north–south, but the Helan is in the north, arid bare rock, blocking sand and wind; the Liupan is in the south, moist and forested, the divide between the Wei and Jing rivers. The Liupan and the Lüliang: the Lüliang is loess-covered and known for soil erosion; the Liupan is a rock range known as the \"green island of the plateau.\"",
    concept:
      "The Liupan shows how uplift makes a \"wet island\": on an arid loess plateau, a range that is high and windward enough will catch extra rain and turn a small patch of the dry country into forest. Such wet islands matter greatly for regional water supply and ecology.",
    history:
      "In 1935 the Central Red Army crossed the Liupan Mountains on the Long March — the last big mountain of the March — and Mao Zedong wrote the poem \"Qingpingyue: Mount Liupan\" here (\"you are no hero until you reach the Great Wall\"). The Liupan is now a national nature reserve and a site of \"red\" tourism.",
  },

  dabashan: {
    seeing:
      "The Daba Mountains straddle the borders of Shaanxi, Sichuan, Chongqing and Hubei, lying across the northern rim of the Sichuan Basin and trending roughly NW–SE. With the Qinling to the north they form a double screen against north–south air movement. The main peak, Hualong Shan, is about 2,917 m. The Micang Shan to the west is part of the range.",
    formation:
      "The Daba Shan is a range strongly folded and thrust up between the North China and Yangtze blocks, its rock mostly limestone and sandstone. The limestone areas develop gorges, caves and sinkholes; the range is deeply cut by tributaries of the Han and Jialing rivers, with deep valleys and steep slopes.",
    observation:
      "From the air the Daba Shan is a continuous, clearly folded dark-green rock wall on the northern rim of the Sichuan Basin, its ridges arcing in rows and cut across by deep valleys. Its south slope drops onto the red hills of the Sichuan Basin; its north slope meets the Hanzhong Basin. Cloud and mist are constant.",
    distinguish:
      "The Daba Shan and the Qinling: parallel, both east–west, both north of the Sichuan Basin, but the Qinling is farther north, more continuous, the main north–south divide; the Daba Shan is farther south, more broken, mainly the northern screen of the Sichuan Basin. Together they are called the \"Qinling–Daba mountains.\" The Daba Shan and the Hengduan: the Daba Shan is east–west and a fold range; the Hengduan is north–south with fault-block deep gorges.",
    concept:
      "The Daba Shan and the Qinling together show what a \"double wall\" means for climate: in winter a cold wave has to cross two ranges to reach the Sichuan Basin, and most of it is blocked, so the basin's winters are mild; in summer moisture is lifted and drops as rain on the windward side. The gentle climate of the \"land of abundance\" is largely a gift of these two ranges.",
    history:
      "The Daba Shan is so high and gorge-cut that travel was historically extremely hard, crossed by parts of the ancient \"roads to Shu\" (the Lizhi and Micang routes). It held several revolutionary base areas and is an important water-conservation zone for the middle route of the South-to-North Water Diversion (the Han River).",
  },

  xuefeng: {
    seeing:
      "The Xuefeng Mountains run NE–SW through western Hunan, a range on the eastern edge of the Yunnan–Guizhou Plateau where it grades into the Hunan hills and the Dongting Lake plain. Within Hunan it roughly marks the boundary between China's second and third topographic steps. The main peak, Subaoding, is about 1,934 m.",
    formation:
      "The Xuefeng is an old fold range, uplifted and eroded over a long time, built mainly of metamorphic rock and sandstone. It is the watershed between the Zi and Yuan rivers; the rivers on either side cut down into deep gorges, while the ridge crest is comparatively gentle.",
    observation:
      "From the air the Xuefeng is a continuous NE–SW dark-green ridge in western Hunan, the land clearly higher to the west toward the Yunnan–Guizhou Plateau and stepping down to the east into hills and the lake plain. The Zi and Yuan rivers wind in deep cuts on either side. The summit sees occasional snow in winter, hence the name (\"snow peak\").",
    distinguish:
      "The Xuefeng and the Nanling: both are southern watershed ranges, but the Nanling runs roughly east–west, divides the Yangtze and Pearl river systems, and marks the central–south China transition; the Xuefeng runs NE–SW, divides the Zi and Yuan rivers, and marks the transition from the Yunnan–Guizhou Plateau to the Hunan hills. The Xuefeng and the Wuyi: one is in western Hunan and a step boundary; the other is on the Fujian–Jiangxi border, known for Danxia and biodiversity.",
    concept:
      "The Xuefeng shows that \"a step boundary need not be very high\": it is under 2,000 m, but as the line of the second/third topographic steps through Hunan, the elevation, the depth of river incision and the climate all differ noticeably on either side. It is also a secondary barrier to cold air pushing south.",
    history:
      "In 1945 the last large-scale battle of the war against Japan — the Battle of West Hunan (Xuefeng Mountains Campaign) — was fought here and ended in a Chinese victory. The mountains are home to Miao, Dong and Yao peoples, whose terraced fields and stilt houses are adaptations to steep terrain.",
  },

  wuyi: {
    seeing:
      "The Wuyi Mountains straddle the Fujian–Jiangxi border, trending NE–SW, an important range of south-east China. The main peak, Huanggang Shan, is about 2,161 m, the highest point in mainland south-east China. The range is known for two things: the Danxia landform around the Nine-Bend Stream, and well-preserved mid-subtropical forest.",
    formation:
      "The body of the Wuyi is Yanshanian granite and volcanic rock, uplifted into mountains; the Nine-Bend Stream area is Cretaceous red sandstone and conglomerate, cut and collapsed by running water into flat-topped, steep-sided, gently-based red peaks and peak clusters — Danxia landform.",
    observation:
      "From the air the Wuyi is a continuous stretch of dark-green mid-elevation mountains between Fujian and Jiangxi, gullies running down both sides of the main ridge. The Nine-Bend Stream stands out: a jade-green stream winding in nine great bends among ochre-red mesas and rock pillars, tea gardens on the banks.",
    distinguish:
      "The Wuyi's Danxia and the Yunnan–Guizhou Plateau's karst: Danxia is red sandstone and conglomerate eroded and collapsed by running water into mesas and peak clusters (reddish); karst is limestone dissolved by water into peak forests and caves (greyish, with underground rivers). The Wuyi and the Nanling: the Wuyi is farther east and known for Danxia and forest; the Nanling is farther west and is the Yangtze–Pearl watershed.",
    concept:
      "The Wuyi is one of the type areas of \"Danxia landform\": the key is the rock — horizontal or gently dipping red sandstone and conglomerate, cut by vertical joints, which running water and gravity carve along the joints into isolated mesas and pillars. It also preserves a complete mid-subtropical mountain vertical vegetation sequence and is rich in species.",
    history:
      "The Wuyi was inscribed as a mixed World Cultural and Natural Heritage site in 1999. It is one of the birthplaces of Zhu Xi's neo-Confucianism (Zhu Xi taught here) and a famous tea region — Wuyi rock tea (such as Da Hong Pao) is grown among these rock walls.",
  },

  dabie: {
    seeing:
      "The Dabie Mountains straddle the borders of Hubei, Henan and Anhui, trending NW–SE, and are the watershed between the Yangtze and the Huai, roughly also the transition between the northern subtropics and the warm temperate zone. They are not high — the main peak, Baima Jian, is about 1,777 m — with a heavy, rounded profile.",
    formation:
      "The Dabie Shan is part of the collision belt between the North China and Yangtze blocks and has undergone intense metamorphism; the rock is mostly gneiss and other metamorphic rock, and it also exposes special rocks that record deep geological processes (such as eclogite), making it an important area for geological research. Long erosion has left it as rounded low-to-mid mountains.",
    observation:
      "From the air the Dabie Shan is a continuous, rounded, dark-green stretch of low-to-mid mountains between the Yangtze and the Huai, its ridge line not prominent, cut up by many reservoirs and streams. Water off its north slope goes to the Huai, off its south slope to the Yangtze. Tea gardens and farmland lie in the intermontane basins and valleys.",
    distinguish:
      "The Dabie Shan and the Qinling: both are watersheds between the Yangtze and another great river and both lie in the north–south transition belt, but the Qinling is higher, farther west and the main divide; the Dabie is lower, farther east and the divide between the Yangtze and the Huai. The Dabie and the Nanling: one divides the Yangtze and the Huai, the other the Yangtze and the Pearl.",
    concept:
      "The Dabie Shan is another example of \"a low range as a great watershed\": it is not high, yet it separates the drainage of two of China's great rivers in the east, and roughly marks a north–south climate transition line. Geologically it is one of the key windows into continental deep subduction.",
    history:
      "The Dabie area is a well-known old revolutionary base — the centre of the Hubei–Henan–Anhui Soviet during the land-revolution period; the Liu–Deng army's 1947 thrust into the Dabie Mountains was a turning point in the civil war. The area produces tea, chestnuts and medicinal herbs.",
  },

  dalou: {
    seeing:
      "The Dalou Mountains lie in northern Guizhou and southern Chongqing, trending NE–SW, the boundary range between the Yunnan–Guizhou Plateau and the Sichuan Basin. They separate the Guizhou plateau from the Chongqing basin and are the watershed of rivers such as the Wu and the Chishui. The main peak, Jinfo Shan, is about 2,238 m.",
    formation:
      "The Dalou Shan is a folded, uplifted range that exposes large amounts of limestone and develops classic karst: peak clusters, closed depressions, caves, sinkholes and underground rivers. Its north side drops steeply toward the Sichuan Basin, where rivers cut down hard into deep gorges (such as the Chishui valley).",
    observation:
      "From the air the Dalou Shan is a rolling dark-green highland on the northern rim of the Yunnan–Guizhou Plateau, dense with cone-shaped hills and closed hollows. The north slope is cut into deep gorges by rivers like the Chishui, the walls layered in red and grey rock. The pass at Loushan is a strategic gap.",
    distinguish:
      "The Dalou Shan and the body of the Yunnan–Guizhou Plateau: the Dalou Shan is the northern edge of the plateau, more deeply cut and gorge-filled, the \"scarp\" from plateau down to the Sichuan Basin; the plateau interior is comparatively gentle. The Dalou Shan and the Daba Shan: both are on the rim of the Sichuan Basin, but the Daba Shan is on the north rim and mainly a fold range; the Dalou Shan is on the south rim and known for karst.",
    concept:
      "The Dalou Shan shows the \"scarp\" character of the Yunnan–Guizhou Plateau's edge: the plateau surface itself is fairly gentle, but at the margin rivers plunge from plateau toward basin, cut down fiercely and carve deep gorges and waterfalls (the Danxia waterfalls around Chishui are here). The drop at the edge is one of the tests of whether a highland counts as a \"plateau.\"",
    history:
      "In 1935 the Red Army won a battle at the Loushan Pass in the Dalou Mountains on the Long March, and Mao Zedong wrote the poem \"Yi Qin'e: Loushan Pass\" here. The Chishui valley is a famous liquor-producing region. The area is also a concentration of Danxia and karst scenery.",
  },

  altun: {
    seeing:
      "The Altun Mountains lie in south-eastern Xinjiang and north-western Qinghai, trending roughly NE–SW, across the gap between the Tarim Basin and the Qaidam Basin and the Tibetan Plateau. They are the link between the Kunlun and the Qilian; the range is high, extremely arid and almost uninhabited, with summits over 6,000 m.",
    formation:
      "The Altun Mountains run along a huge strike-slip fault (the Altyn Tagh Fault) — one of the important tectonic boundaries along which the Tibetan Plateau spreads north and material \"escapes\" eastward, still active today. The range has been uplifted and strongly eroded, its north slope dropping steeply onto the southern rim of the Tarim Basin.",
    observation:
      "From the air the Altun Mountains are a straight, continuous brown rock wall between the Tarim Basin and the Tibetan Plateau, with scattered snow on the crest. To the north is the yellow sand sea of the Taklamakan, with almost no transition; to the south is a gently rolling, lake-dotted cold desert (the Altun Mountains Nature Reserve).",
    distinguish:
      "The Altun Mountains and the Kunlun and Qilian: the three are connected, with the Altun as the middle link — shorter than the Kunlun, drier than the Qilian. Its landform story belongs largely to the Kunlun and Qilian, and its \"character\" as an independent range is weak; its main significance is the great fault it follows.",
    concept:
      "The Altun Mountains are an example of \"strike-slip fault mountain-building\": not simple compressional uplift, but two blocks sliding past each other along a fault and being lifted along the slip zone. The Altyn Tagh Fault is one of the largest strike-slip faults in the world, and studying it helps show how the Tibetan Plateau both grows taller and spreads outward.",
    history:
      "The Altun Mountains area is barely peopled; the Altun Mountains National Nature Reserve, established in 1983, is important habitat for Tibetan antelope, wild yak and kiang, and one of China's largest reserves of the high cold-desert type. Some branch routes of the ancient Silk Road skirted its northern foot.",
  },


  "chengdu-plain": {
    seeing:
      "The Chengdu Plain occupies the western Sichuan Basin — the largest and flattest plain in the basin, about 19,000 km², at 450–750 m. It was built by the Min, Tuo and other rivers as they left the mountains, and its fertile, easily irrigated land is the core of the \"land of abundance.\"",
    formation:
      "The Chengdu Plain is a compound fan plain made of the alluvial fans of several rivers merged together. The Min River leaves the Longmen Mountains to the west and, below the mountain gap, spreads out the gravel and silt it carries, finer downstream. The Dujiangyan works split the Min River at the fan head into a self-flowing irrigation network covering the whole plain.",
    observation:
      "From the air the Chengdu Plain is a neat green lowland on the west side of the Sichuan Basin, backed by the steep Longmen Mountains and ringed on the other three sides by the basin's red hills. The fields are regular, the canals a dense grid, Chengdu in the centre. Because the basin is closed and moisture abundant, it is cloudy and low in sunshine year-round.",
    distinguish:
      "The Chengdu Plain and the Sichuan Basin: the Chengdu Plain is a distinct alluvial-fan plain inside the basin, which is the mountain-ringed regional unit — the former is part of the latter. The Chengdu Plain and the Guanzhong Plain: both are river-alluvial plains in mountain-walled fault basins, but the Chengdu Plain is moister and cloudier; the Guanzhong Plain is drier and sunnier.",
    concept:
      "The Chengdu Plain is a model of \"alluvial-fan plain plus ancient waterworks\": a river leaving the mountains naturally builds a fan plain, and the Dujiangyan works, built in 256 BCE, tamed the Min River into a controllable irrigation network that has run for over two thousand years, turning a drought- and flood-prone fan into a reliable granary.",
    history:
      "The Chengdu Plain was the centre of the ancient Shu civilisation; the Sanxingdui and Jinsha sites are here. Dujiangyan was built under Li Bing, the Qin governor of Shu commandery, and still irrigates today. Prosperous and relatively stable, the plain often served as a \"rear area\" in times of war.",
  },

  "guanzhong-plain": {
    seeing:
      "The Guanzhong Plain, also called the Wei River Plain, lies in central Shaanxi between the Qinling to the south and the Weibei uplands (the Northern Mountains) to the north, built by the Wei River and its tributaries. It is long east–west and narrow north–south, anciently called \"the eight hundred li of Qin.\" Xi'an sits in the middle of it.",
    formation:
      "The Guanzhong Plain is a graben — a down-dropped rift basin: the sides were uplifted into mountains (the Qinling, the Northern Mountains) along faults while the middle block sank, and silt from the Wei River filled the hollow into a plain. The plain slopes gently from both sides toward the Wei River valley, with several river terraces.",
    observation:
      "From the air the Guanzhong Plain is an east–west yellow-green flat at the northern foot of the Qinling, with the wall-like Qinling scarp to the south and the gullied loess tablelands to the north. The Wei River crosses the middle from west to east, its banks dense with farmland and towns, Xi'an, Xianyang and Baoji in a line.",
    distinguish:
      "The Guanzhong Plain and the North China Plain: both are river-alluvial and both are cradles of civilisation, but the Guanzhong Plain is a fault basin pinched between the Qinling and the Northern Mountains and is small; the North China Plain is a great plain built by the Yellow and other rivers in open country and is far larger. The Guanzhong Plain and the Chengdu Plain: one is drier and sunny, the other moist and cloudy.",
    concept:
      "The Guanzhong Plain is a classic graben basin: the crust is pulled apart, a block in the middle drops while the sides rise, and river silt fills the dropped part flat — a plain held between two ranges. This terrain — ringed by mountains, easy to defend, and watered by the Wei — is why it was a capital region for so long.",
    history:
      "The Guanzhong Plain was the capital region of the Zhou, Qin, Han, Tang and a dozen other dynasties — \"who holds Guanzhong holds the realm.\" The Zheng Guo Canal of the Warring States and the grain-transport canals of the Han and Tang were the basis of Guanzhong farming. \"Guanzhong\" means \"within the passes\" — it is ringed by passes such as Hangu and Dasan.",
  },

  "hetao-plain": {
    seeing:
      "The Hetao Plain lies inside the great \"几\"-shaped bend of the Yellow River, south of the Yin Mountains — a string of plains laid down by the Yellow River as it flows through Ningxia and Inner Mongolia. In the narrow sense it is the Rear Tao (around Bayannur) and the Front Tao (the Tumochuan around Hohhot) inside Inner Mongolia; in a broader sense the Ningxia Plain (the West Tao) upstream is sometimes counted in as well. There is a saying: \"the Yellow River brings a hundred harms and enriches only the one Tao.\"",
    formation:
      "The Hetao Plain is a down-faulted zone between the Yin Mountains and the Ordos Plateau. Entering this hollow the Yellow River slows and drops much of its silt, filling it into a plain. The ground is very flat, and the river has swung across it, leaving old channels, marshes and salt flats.",
    observation:
      "From the air the Hetao Plain is a green belt along the Yellow River on the arid Inner Mongolian Plateau, backed by the grey-brown Yin Mountains to the north and meeting the Ordos uplands and deserts to the south. It is checkerboard farmland irrigated from the Yellow River, laced with trunk canals, and turns back into desert steppe just beyond the oasis.",
    distinguish:
      "The Hetao Plain and the North China Plain: both are Yellow River alluvium, but the Hetao Plain is on the upper-middle river, pinched between the Yin Mountains and the plateau, and depends on diversion irrigation; the North China Plain is on the lower river, in open country, and is the great plain of the \"suspended river\" and acute water shortage. The Hetao Plain and the Guanzhong Plain: both are river-alluvial plains in fault basins; the Hetao is drier and farther north.",
    concept:
      "The Hetao Plain shows that \"the same river does opposite things in different reaches\": on the Loess Plateau the Yellow River picks up silt; on the lower course it raises its bed and floods; but through the Hetao its water and silt built a belt of good oasis farmland — because here the land is flat enough to be irrigated and the Yin Mountains block the sand and wind from the north.",
    history:
      "The Hetao Plain has long been a farming–herding frontier; the Qin and Han set up commanderies and military farms here, and it changed hands repeatedly afterward. In modern times large-scale digging of Yellow River trunk canals (such as the \"eight great canals of the Rear Tao\") made it one of Inner Mongolia's most important grain regions.",
  },

  "yangtze-delta": {
    seeing:
      "The Yangtze Delta is the huge alluvial plain the Yangtze has built at its mouth, spreading east from around Zhenjiang and Yangzhou in Jiangsu to the sea, about 50,000 km². The land is extremely low and flat and water-netted; Lake Tai is its central lake, and Shanghai, Suzhou, Wuxi and Nantong are all on it.",
    formation:
      "The Yangtze carries huge amounts of silt to its mouth each year, and under tides and waves the silt keeps building up and prograding on both sides of the mouth and underwater, pushing the coastline far to the east over thousands of years. Sandbars in the channel gradually join the shore or grow — that is how Chongming Island formed, now the largest estuary alluvial island in the world.",
    observation:
      "From the air the Yangtze Delta is a very flat, very dense water country at the river mouth: channels, lakes, fish ponds and polders woven into a net, with almost no natural relief. Where the Yangtze meets the sea, muddy yellow silt fans out into the blue water as a plume. Chongming Island is a large oval green sand island at the mouth.",
    distinguish:
      "The Yangtze Delta and the Pearl River Delta: both are compound deltas at the mouths of great rivers, both water-netted, both economically developed, but the Yangtze Delta is built mainly on the Lake Tai plain and is more uniformly flat; the Pearl River Delta is three rivers meeting, with many bedrock hills scattered among it (an \"island delta\"). The Yangtze Delta and the North China Plain: one is shaped by the Yangtze, mainly paddy; the other by the Yellow River, mainly dryland.",
    concept:
      "The Yangtze Delta is a \"river-and-tide-built\" delta: the river supplies the silt, and tides and waves sort and shape it. In recent decades upstream reservoirs and vegetation recovery have sharply cut the Yangtze's silt load, and the delta's natural growth has slowed markedly, with some shore sections even eroding back — a reminder that a delta needs a continuing supply of silt to be maintained.",
    history:
      "The Yangtze Delta was developed early and has been the economic and tax centre of the country since the Tang and Song — \"when Suzhou and Huzhou are ripe, the realm has enough.\" Its dense network of canals, polders and market towns is the basis of the old Jiangnan water country. Today it is one of the most densely peopled and economically dense regions in China.",
  },

  "pearl-delta": {
    seeing:
      "The Pearl River Delta, in south-central Guangdong, is the compound delta built where the West, North and East rivers meet near Guangzhou and reach the sea together, about 11,000 km². Its features are an especially dense river network and many isolated small hills scattered through it. Guangzhou, Shenzhen, Foshan, Dongguan, Hong Kong and Macau are all here.",
    formation:
      "The Pearl River Delta grew in a drowned, island-studded former bay. Silt from the three rivers accumulated in the shallow water between the islands, gradually joining island to island and filling the bay into a plain — which is why many bedrock hills still stand in the plain, hence \"island delta\" or \"hilly delta.\"",
    observation:
      "From the air the Pearl River Delta is a green water-net shredded by countless channels, its meshes full of farmland, fish ponds and towns, with rounded small hills dotted among them. The West, North and East rivers interweave in the net, and several mouths deliver water and silt into Lingding Bay and Huangmao Sea.",
    distinguish:
      "See the Yangtze Delta entry. What makes the Pearl River Delta distinctive: first, three rivers meet, so the network is more complex; second, the plain keeps many bedrock hills, rather than the flat expanse of the Yangtze Delta. It is at lower latitude, in the southern subtropics, and can grow three crops a year.",
    concept:
      "The Pearl River Delta is a classic \"island delta\": the silt did not spread over an open coast but \"filled in\" an island-studded former bay, silting the water between islands into land. The mulberry-dyke-and-fish-pond system — dig ponds for fish, plant mulberry on the dyke, feed silkworms with the leaves, feed the fish with the silkworm waste — is the cyclical farming the locals developed in this low water country.",
    history:
      "The Pearl River Delta was reclaimed into farmland on a large scale from the Song onward, and grew rich on silk, sericulture and foreign trade in the Ming and Qing. Guangzhou was long an important port for China's foreign trade. Since the 1980s the region has been a front line of reform and opening and a major world manufacturing base.",
  },


  "badain-jaran": {
    seeing:
      "The Badain Jaran Desert lies in the western Alxa Plateau of Inner Mongolia, about 49,000 km² — China's third-largest desert. It is best known for its tall sand mountains — many two or three hundred metres of relative height, the highest, Bilutu, about 460 m, among the tallest sand mountains in the world — with more than a hundred interdune lakes scattered between them.",
    formation:
      "The sand comes from weathered material off the surrounding mountains and dry riverbeds, piled up by wind over a long time. Why the sand mountains here are so tall is still discussed by researchers; it may involve the shape of the underlying bedrock, a fairly steady wind regime, and groundwater cementing the sand grains. In the interdune hollows groundwater emerges as lakes, mostly saline, a few fed by fresh springs.",
    observation:
      "From the air the Badain Jaran is a field of golden sand mountains in violent relief, like frozen giant waves, with small deep-blue or jade-green lakes set in the troughs, often with a patch of green and a temple beside them. Sliding down the steep dune faces makes a roaring sound (\"singing sand\").",
    distinguish:
      "The Badain Jaran and the Taklamakan: both are moving-sand deserts, but the Badain Jaran's sand mountains are far taller and it holds many lakes; the Taklamakan is far larger, drier and almost lakeless. The Badain Jaran and the Tengger (both in Alxa): the Badain Jaran is to the west, with tall sand mountains and many lakes; the Tengger is to the east, its dunes lower, and is closer to the Yellow River and the railway.",
    concept:
      "The Badain Jaran is a sample of \"why there are lakes in a desert\": the hollows between the dunes cut down to the water table, so groundwater seeps out and pools. Why the sand mountains grow so tall and are not blown flat is a not-yet-fully-solved problem in desert geomorphology. In 2024 the sand-mountain-and-lake complex of the Badain Jaran was inscribed as World Natural Heritage.",
    history:
      "Herders have long settled by the desert's lakes, with small temples (such as the Badain Jaran temple). Thinly peopled and hard to reach, the area has long been a natural laboratory for studying arid-zone dunes and groundwater.",
  },

  tengger: {
    seeing:
      "The Tengger Desert lies mostly in Alxa Left Banner in Inner Mongolia, extending south to the edges of Gansu and Ningxia, about 43,000 km² — China's fourth-largest desert. \"Tengger\" means \"sky\" in Mongolian. It is mostly moving dunes, with many lake basins and grassy flats scattered among them.",
    formation:
      "The Tengger's sand is debris from the surrounding mountains and old Yellow River channels, moved and piled by the wind. Some of the hollows between the dunes reach groundwater or hold seasonal water, forming lakes and salt marshes of various sizes (locally \"grass lakes\") — the green points in the desert.",
    observation:
      "From the air the Tengger is a rolling yellow sea of dunes, its south-eastern edge right against the Yellow River and the Ningxia Plain. Around Shapotou near Zhongwei you can see the railway and road crossing the sand, the surface laid with a grid of straw checkerboards — a sand-fixing net made by pressing wheat straw into the sand.",
    distinguish:
      "See the Badain Jaran entry. The Tengger's traits: its dunes are lower than the Badain Jaran's but it likewise has lake basins; it is farther south-east and directly threatens the Yellow River and the Baotou–Lanzhou railway, so it is one of the earliest and most concentrated sites of sand-control engineering in China.",
    concept:
      "Shapotou in the Tengger is the birthplace of \"straw-checkerboard sand fixing\": wheat or rice straw is pressed upright into the sand, left sticking up ten-odd centimetres, in one-metre squares, which block the near-surface wind and hold the drifting sand so plants have a chance to root. This simple method has protected the Baotou–Lanzhou railway since the 1950s and has since been used in many sand regions worldwide.",
    history:
      "The Baotou–Lanzhou railway, opened in 1958, crosses the Tengger Desert twice. To keep trains running safely, Chinese researchers set up a sand-control station at Shapotou and tested and spread a whole set of sand-fixing techniques including straw checkerboards. Shapotou is now both a showcase of sand-control results and a tourist area.",
  },

  kubuqi: {
    seeing:
      "The Kubuqi Desert lies on the northern rim of the Ordos Plateau in Inner Mongolia, on the south bank of the great \"几\"-bend of the Yellow River, about 18,600 km² — China's seventh-largest desert and the closest desert to Beijing. \"Kubuqi\" means \"bowstring\" in Mongolian — the desert runs along the Yellow River like a string on a bow.",
    formation:
      "The Kubuqi's sand comes partly from Yellow River silt and partly from weathered material off the Ordos Plateau, blown by the prevailing north-west wind and piled on the south bank of the river. Historic overgrazing and cultivation stripped the vegetation and sped up the sand's spread. The dunes are mostly moving to semi-fixed.",
    observation:
      "From the air the Kubuqi is an east–west yellow sand belt on the south bank of the Yellow River, with the green farmland of the Hetao Plain just across the river to the north — a sharp contrast. In the last twenty years large planted edge-locking shelterbelts, solar farms and grids of straw checkerboards have appeared in the desert, and its margin has clearly greened.",
    distinguish:
      "The Kubuqi and the Mu Us Sandy Land (both around Ordos): the Kubuqi is on the northern plateau rim, along the Yellow River, mostly moving dunes; the Mu Us is in the southern plateau, a semi-arid \"sandy land\" with a better vegetation base, mostly fixed and semi-fixed. The Kubuqi and the Tengger: one hugs the Yellow River, the other hugs the river and the railway, both key sand-control areas.",
    concept:
      "The Kubuqi is a case of sand control moving from engineering to industry: combining straw-checkerboard fixing, drought-tolerant planting, solar power and desert cash crops so that fixing the sand also produces income. It also shows that much sand-land expansion has human causes, and that easing grazing and cultivation pressure plus planted measures can reverse part of it.",
    history:
      "The Kubuqi desert edge was historically a farming–herding frontier. In the late 20th century it was badly desertified and a frequent dust source. Since the 1990s local companies and residents have kept building roads, planting trees and developing desert industries; in 2017 the Kubuqi sand-control experience was presented at the conference of the UN Convention to Combat Desertification.",
  },

  "ulan-buh": {
    seeing:
      "The Ulan Buh Desert lies in eastern Alxa Left Banner and around Dengkou in Bayannur, Inner Mongolia, about 10,000 km². \"Ulan Buh\" means \"red bull\" in Mongolian. It sits on the west bank of the Yellow River, right next to the Hetao Plain to the north-east — the desert closest to the river and its farmland.",
    formation:
      "The Ulan Buh area held a large lake in the geological past (called \"Tushen Marsh\" in the Han dynasty); after the lake dried, its bed sand was lifted by the wind and re-piled into dunes. Historic reclamation and firewood-cutting stripped the vegetation, and the desert gradually spread, at one point trending toward the Yellow River and the Hetao Plain.",
    observation:
      "From the air the Ulan Buh is a patch of yellow dunes and sand-degraded grassland on the west bank of the Yellow River, with the river and broad farmland to the east and the gobi of Alxa to the west. In recent years belts of shelterbelt forest and solar bases along the river and farmland side have formed an \"edge-locking\" green strip.",
    distinguish:
      "The Ulan Buh and the Kubuqi: both hug the Yellow River, but the Kubuqi is on the south bank (inside the bend), in central Inner Mongolia; the Ulan Buh is on the west bank, farther west, pressing directly against the Hetao Plain. The Ulan Buh and the Tengger: the Ulan Buh is smaller and farther north-east, with a more direct threat to the river channel and the irrigation district.",
    concept:
      "The Ulan Buh is an example of \"a dried lake leaving a sand source\": a former lake bed, with the climate drying and the water gone, exposes its fine sand, which the wind moves and piles into dunes in place or downwind. It is also a classic stretch where desert, river and farmland lie next to each other and the boundary must be held with shelterbelts and sand-fixing works.",
    history:
      "The Han dynasty farmed and set up counties around the Ulan Buh, which were later abandoned and turned to sand. In modern times Dengkou and other areas resumed Yellow River irrigation and built shelterbelt forest (part of the \"Three-North\" shelterbelt), pushing the desert back and saving the farmland along the river.",
  },

  muus: {
    seeing:
      "The Mu Us Sandy Land straddles northern Shaanxi, southern Ordos in Inner Mongolia and eastern Ningxia, about 42,000 km². Note that it is a \"sandy land,\" not a \"desert\": it is in a semi-arid zone with more rainfall than a true desert, has a base of grassland and vegetation, and its dunes are mostly fixed and semi-fixed.",
    formation:
      "The Mu Us area was historically grassland with fairly good water and grass. Climate swings, shrinking rivers and lakes, and long overgrazing, cultivation and war damage to the vegetation let drifting sand gradually expand, producing a \"sandy land\" of dunes alternating with flats and lake basins. Its desertification is largely reversible.",
    observation:
      "From the air the Mu Us is a mottled landscape on the northern edge of the Loess Plateau: fixed dunes carrying shrubs and planted forest, with grassy flats, farmland and small lakes between them, and only patches of moving dune left. After decades of management most of the area is now green.",
    distinguish:
      "The Mu Us (sandy land) and the Badain Jaran or Taklamakan (deserts): a desert is in an arid zone, almost without vegetation, mostly moving dunes, hard to change fundamentally; a sandy land is in a semi-arid zone, with a vegetation base, mostly fixed and semi-fixed, and can be reversed over large areas by management. The Mu Us and the Kubuqi: the Kubuqi is farther north, drier and has more drifting sand.",
    concept:
      "The Mu Us represents \"a sandy land is not a desert, and desertification can be reversed\": in a semi-arid zone with some rainfall, simply stopping overgrazing and cultivation, plus planting grass and trees and laying straw checkerboards, can re-fix the dunes and bring the vegetation back. By around 2020 most of the Mu Us Sandy Land in Shaanxi had been brought under control.",
    history:
      "The Mu Us area was once an important base of the Xiongnu (the city of Tongwancheng was built here), when the vegetation was far better than in modern times. In recent decades Yulin in Shaanxi, Ordos in Inner Mongolia and others have kept planting forest and grass and spreading straw checkerboards, turning this sandy land from expanding to shrinking — a model of China's desertification control.",
  },

  gobi: {
    seeing:
      "\"Gobi\" here means the large gravel desert of western Inner Mongolia (around Alxa and Ejin). \"Gobi\" is Mongolian for land that can barely grow plants, its surface covered with gravel and coarse sand. It differs from a sand desert — a sand desert's surface is sand, a gobi's surface is stone.",
    formation:
      "A gobi forms by the wind's \"sorting\" action: the wind blows away the fine sand and dust from the surface and carries it elsewhere (piling it as sand desert or loess), leaving behind the gravel it cannot move, which over time forms a tight surface layer — a \"desert pavement.\" That pavement in turn protects the finer soil beneath from further wind erosion.",
    observation:
      "From the air a gobi is a broad, grey-brown, mottled, almost plant-free flat of gravel, with sparse camelthorn, saxaul or wild poplar only along seasonal channels and where groundwater is shallow. The lower Hei River at Ejin is a rare green corridor through the gobi, ending at the Juyan lakes.",
    distinguish:
      "Gobi and sand desert: a gobi's surface is gravel, relatively stable, and can be driven over; a sand desert's surface is moving sand, hard for vehicles and animals. The two are often adjacent — the same wind blows the fine sand to one place as sand desert and leaves the coarse gravel in place as gobi. Gobi and desert steppe: a gobi is almost bare, desert steppe still has sparse xerophytic grass.",
    concept:
      "The gobi is the best example for understanding \"how wind sorts surface material\": the wind's carrying power depends on grain size — dust and fine sand can be blown far, coarse sand only hops along, gravel barely moves. So a region's surface is \"sieved\" by the wind into different zones: where material is blown away becomes gobi, where it piles up becomes sand desert or the Loess Plateau.",
    history:
      "The gobi has always been a belt crossed by the Silk Road and the steppe route, and a front line of frontier defence through the dynasties. The Juyan area at Ejin was an important Han garrison, where large numbers of \"Juyan Han bamboo slips\" have been excavated. Today the Jiuquan Satellite Launch Centre (Dongfeng space city) is set in this gobi.",
  },


  "liaodong-hills": {
    seeing:
      "The Liaodong Hills occupy the Liaodong Peninsula in south-eastern Liaoning — the south-westward spur of the Changbai mountain system, surrounded by the Yellow and Bohai seas on three sides. They are not high, mostly below 500 m, with the main peak Buyun Shan about 1,130 m, rounded and gentle, covered in forest and orchards.",
    formation:
      "The base of the Liaodong Hills is old granite and metamorphic rock, worn down by long erosion from higher mountains into hills. The peninsula keeps rising slightly, and its coast is cut into many bays and headlands. The granite around Qian Shan, weathered and split, has formed many strange peaks and rocks.",
    observation:
      "From the air the Liaodong Hills are a sea-ringed, gently rolling stretch of dark-green low mountains, with apple, chestnut and other orchards and farmland in the valleys and coastal flats. Laotie Shan at the peninsula's tip faces the Bohai Strait — the boundary between the Bohai and Yellow seas, and an important corridor for migrating birds.",
    distinguish:
      "The Liaodong Hills and the Shandong Hills: they face each other across the Bohai Strait, both low hills ringed by plain and sea, both mainly granite, both apple country, but the Shandong Hills contain a large fault-block mountain like Tai Shan, while the Liaodong Hills are lower overall and closer to the Changbai system.",
    concept:
      "The Liaodong Hills show that \"hills\" are what mountains become after long erosion: a once-higher mountain area, without strong uplift, is gradually worn down and rounded by weathering and running water until its relief drops within a few hundred metres and it becomes hills. Being sea-ringed on three sides also makes its climate milder and moister than inland at the same latitude.",
    history:
      "The Liaodong Peninsula sits at a land–sea crossroads and was historically a route between the Central Plains, the north-east and the Korean Peninsula, and in modern times a focus of great-power contention. Port cities such as Dalian and Dandong were built on the hills, facing the sea. The peninsula's apples and cherries are well-known local products.",
  },

  "shandong-hills": {
    seeing:
      "The Shandong Hills include the mountains of central-southern Shandong and the hills of the Jiaodong Peninsula, ringed on three sides by the North China Plain and the Yellow River delta. They are a low mountain-and-hill area bulging up in the middle of the plain, mostly around 500 m, with the main peak of Tai Shan about 1,533 m — the highest here.",
    formation:
      "The Shandong Hills are mostly old granite and gneiss. Tai Shan, Lu Shan, Yi Shan and Meng Shan in central-southern Shandong are fault-block mountains uplifted along faults — steep, often with clear fault scarps; the hills of the Jiaodong Peninsula were uplifted less and are lower and more rounded. The surrounding plains were filled in by the silt of the Yellow and other rivers.",
    observation:
      "From the air the Shandong Hills are a rolling green highland in the centre of the great North China Plain, with a few main peaks like Tai Shan standing out abruptly above the hills. The hills lower toward all sides into flat farmland plain; the Jiaodong Peninsula reaches into the Bohai and Yellow seas with an indented, bay-filled coast.",
    distinguish:
      "The Shandong Hills and the Liaodong Hills: both are granite low mountains ringed by plain and sea, but the Shandong Hills have a fault-block mountain like Tai Shan and lie closer to the heart of the North China Plain; the Liaodong Hills are lower overall and are a spur of the Changbai system. The Shandong Hills and the Loess Plateau: one is rock hills bulging up within the North China Plain, the other a coherent loess-covered highland.",
    concept:
      "Tai Shan is a good example of a \"fault-block mountain\": it is not the edge of a whole plateau, but a block of rock lifted as a whole along the faults around it, with steep fault scarps on the sides (especially the south). Because it rises abruptly from the plain with large relief, the ancients saw it as a link to heaven, and it became the first of the Five Great Mountains.",
    history:
      "Tai Shan was where dynasties held the feng and shan sacrifices and is an important symbol of Confucian culture; it was inscribed as a mixed World Cultural and Natural Heritage site in 1987. The Shandong Hills are the heartland of Qi–Lu culture, and the hometowns of Confucius and Mencius are here.",
  },

  "jiangnan-hills": {
    seeing:
      "The Jiangnan Hills lie south of the Yangtze and north of the Nanling, mainly across Hunan, Jiangxi and Zhejiang — a gently rolling area of low mountains and hills with basins and river valleys of all sizes among them. The surface is mostly a red weathering crust (red earth), and the hills carry Masson pine, tea gardens and oil-tea groves.",
    formation:
      "The Jiangnan Hills have varied rock — granite, sandstone, slate and more — deeply weathered by a long hot, wet climate into a thick red crust. Differential uplift has pushed some rock bodies up into mountains: the granite of Huang Shan, the fault block of Lu Shan, the sandstone-conglomerate of Longhu Shan (Danxia) and others are scattered through the hills.",
    observation:
      "From the air the Jiangnan Hills are a continuous, ridge-less, rolling stretch of green low mountains south of the Yangtze, with red-earth slopes and terraces between and paddy fields, towns in the basins. A few famous peaks such as Huang Shan and Lu Shan stand out with sheer rock above the surrounding gentle hills. Seas of cloud often flow among the hills after rain.",
    distinguish:
      "The Jiangnan Hills and the Liangguang Hills: both are southern hills, but the Jiangnan Hills are north of the Nanling and mainly red earth with granite/sandstone landforms; the Liangguang Hills are south of the Nanling, with limestone karst (peak forest) most typical. The Jiangnan Hills and the Yunnan–Guizhou Plateau: the plateau is a coherently uplifted highland with scarped edges; the Jiangnan Hills have no clear coherent uplift or edge scarp, and are lower.",
    concept:
      "The Jiangnan Hills are \"hills in a hot, wet climate\": ample rain and heat weather the rock deeply into red earth — iron and aluminium oxides make it red, and the same process leaches out the nutrients, so red earth needs improvement to be productive. This \"red hill\" landscape is the typical face of southern China's low-mountain country.",
    history:
      "The basins and valleys of the Jiangnan Hills have long been important farming areas, and are the home of tea, oil-tea and citrus. Famous mountains such as Lu Shan and Huang Shan rank high in Chinese cultural history. The hills around Jinggang Shan and Ruijin were base areas of the early Chinese revolution.",
  },

  "liangguang-hills": {
    seeing:
      "The Liangguang Hills lie south of the Nanling, across Guangdong and Guangxi — an area of low mountains, hills and basins. Its most typical landform is limestone karst — the \"peak forest\" and \"peak cluster\" rising straight from flat ground around Guilin and Yangshuo are its emblem; there is also Danxia formed from red sandstone-conglomerate (such as Danxia Shan).",
    formation:
      "Guangdong and Guangxi have large areas of limestone, dissolved over a long time by carbon-dioxide-charged water in a hot, wet, rainy climate: the surface is \"dissolved\" into isolated rock peaks, peak clusters and closed hollows, while underground it develops many caves and rivers. Where the rock is not limestone, there are gentle low hills under red earth.",
    observation:
      "From the air the Liangguang Hills are most distinctive around Guilin: on a flat paddy plain stand densely packed cone- and dome-shaped isolated limestone peaks, with the Li River winding among the peak forest. Elsewhere are continuous gentle red-earth hills and towns and farmland in basins.",
    distinguish:
      "The Liangguang Hills' karst and the Yunnan–Guizhou Plateau's karst: the landform types are similar (peak forest, caves), but the Yunnan–Guizhou Plateau is high overall (1,000–2,000 m), an uplifted highland; the Liangguang Hills are far lower, and the peak forest mostly rises from plains. The Liangguang Hills and the Jiangnan Hills: one is marked by karst peak forest, the other by red-earth low hills and famous granite mountains.",
    concept:
      "The Guilin peak forest of the Liangguang Hills is a classic of \"tropical–subtropical karst\": the hotter and wetter the climate, the stronger and faster the limestone dissolves, until a continuous limestone surface is \"eaten\" down to isolated rock peaks standing on a dissolution plain. This \"peak-forest plain\" is a late stage of karst development.",
    history:
      "The scenery of Guilin has long been called \"the finest under heaven\" and appears again and again in Chinese landscape painting and travel writing. The Lingqu Canal links the Xiang and Li rivers, letting the Central Plains reach the Pearl system by water — a key work in the Qin unification of the far south.",
  },

  namtso: {
    seeing:
      "Nam Co lies in central Tibet at the northern foot of the Nyainqentanglha range, at about 4,718 m — one of the highest large lakes in the world, and the second-largest lake in Tibet (after Serling Co). It is a closed saltwater lake with intensely deep-blue water, and one of the three great sacred lakes of Tibetan Buddhism.",
    formation:
      "Nam Co sits in a down-faulted tectonic basin on the Tibetan Plateau, walled in by fault-block mountains. It is fed by Nyainqentanglha snowmelt and rain, has no outlet, and balances by strong evaporation, so salt has accumulated over a long time into a saltwater lake. Several old shorelines around the lake show that the water once stood higher and the lake was larger.",
    observation:
      "From the air Nam Co is a large, saturated patch of deep blue on the plateau, its southern shore hard against a line of permanently snow-capped Nyainqentanglha peaks, lake and snow mountains mirroring each other. Peninsulas and small limestone hills reach into the lake in the south-west. Around it is open cold-steppe, with herders' tents scattered here and there.",
    distinguish:
      "Nam Co and Qinghai Lake: both are closed saltwater tectonic lakes on a plateau, but Nam Co is far higher (4,718 m against 3,196 m), deeper into the Tibetan Plateau, and colder. Nam Co and the Tianshan's Tianchi: one is a large saltwater lake in a fault depression, the other a small freshwater lake gouged by ice and dammed by moraine.",
    concept:
      "Nam Co is a sample of \"why the plateau has so many salt lakes\": the Tibetan Plateau is full of down-faulted basins, which fill with water into lakes, but the climate is cold and dry and most lakes have no outlet, so evaporation keeps concentrating them and salt builds up. In recent decades a warming climate and more glacial meltwater have made a number of plateau lakes, Nam Co among them, still grow.",
    history:
      "Nam Co is a sacred lake of Tibetan Buddhism; the Tashi Peninsula on its shore has many caves and hermitage sites, and pilgrims circle the lake (\"lake kora\"). Nyainqentanglha is regarded as a guardian mountain. The area is part of the northern Tibetan pastoral region.",
  },

  dongting: {
    seeing:
      "Dongting Lake lies in northern Hunan on the south bank of the middle Yangtze. It was historically China's largest freshwater lake, and heavy silt accumulation and lake-to-farmland reclamation have dropped it to second (behind Poyang). Like Poyang it \"changes face\" sharply: a vast lake in flood, and in the dry season a set of winding channels plus wide areas of exposed flats.",
    formation:
      "Dongting Lake fills a down-faulted, subsiding basin. The \"four rivers\" — the Xiang, Zi, Yuan and Li — enter from the south; in flood season Yangtze floodwater diverts into the lake through several \"mouths\" on the north, cutting the Yangtze's flood peak; the lake water finally rejoins the Yangtze at Chenglingji in the north-east. Silt from the Yangtze and the four rivers has kept building up in the lake for centuries.",
    observation:
      "From the air Dongting Lake in high water is a large connected sheet of water on the south bank of the Yangtze, cut by dykes and polders into eastern, southern and western parts; in low water it shrinks to a hanging \"tree\" — a main trunk plus the branches where the four rivers enter, with yellow-green flats between the branches, a wintering ground for migratory birds.",
    distinguish:
      "Dongting Lake and Poyang Lake: both are on the south bank of the middle Yangtze, both connected to the river, both \"a sheet of water in flood, a thread in drought\"; Dongting was historically larger and dropped to second through silting and reclamation. Dongting Lake and Qinghai Lake: one is exterior-drainage, fresh, and swings sharply with the season; the other interior-drainage, saline, and relatively stable.",
    concept:
      "The key ideas for Dongting Lake are the \"river–lake relationship\" and the double pressure of \"silting and reclamation\": it cuts the Yangtze's flood peak and stores water, but silt from the Yangtze and the four rivers keeps shoaling it, and historically people then diked the new flats into farmland (\"reclaiming the lake for fields\"), so the lake shrank and its storage capacity weakened. After the great flood of 1998, \"returning farmland to lake\" was promoted.",
    history:
      "\"Dongting holds the finest water under heaven, Yueyang the finest tower\" — the Yueyang Tower, famous from Fan Zhongyan's essay, stands on the lake shore. The Dongting Lake plain is an important \"land of fish and rice.\" The lake's finless porpoises and wintering birds are a focus of recent conservation.",
  },

  "tiger-leaping-gorge": {
    seeing:
      "Tiger Leaping Gorge, in north-western Yunnan, is an extremely deep, extremely narrow gorge the Jinsha River has cut between the Jade Dragon Snow Mountain (about 5,596 m) and the Haba Snow Mountain (about 5,396 m), roughly 16 km long. From the river to the Jade Dragon summit is about 3,900 m — one of the deepest gorges in the world. Legend says a tiger once leaped the river using a boulder in mid-channel, hence the name.",
    formation:
      "The two snow mountains here are rising fast while the Jinsha River, which already existed, cuts down at almost the same rate, sawing a narrow slot between them. The gorge has an upper, middle and lower section; the river is only about 30 m wide at its narrowest, with violent rapids and whirlpools among the boulders.",
    observation:
      "From the air Tiger Leaping Gorge is a straight deep slit between the Jade Dragon and Haba snow mountains, the muddy-yellow Jinsha a thread on the floor. The walls are near-vertical, and a full sequence of vegetation belts is stacked from the subtropical valley floor to the snow and ice on top. Just outside the southern mouth, the Jinsha makes the famous \"First Bend of the Yangtze\" at Shigu.",
    distinguish:
      "Tiger Leaping Gorge and the Three Gorges of the Yangtze: both are canyons where the Yangtze system cuts through mountains, but Tiger Leaping Gorge is on the upper river (the Jinsha reach), held between two snow mountains, and far deeper and narrower; the Three Gorges are on the middle river, cutting a lower fold range, and known for ruggedness and the dam. Tiger Leaping Gorge and the Yarlung Tsangpo Grand Canyon: the latter is longer, with greater peak-to-valley relief — the deepest and longest canyon in the world.",
    concept:
      "Tiger Leaping Gorge is an extreme sample of \"river downcutting keeping pace with uplift\": as long as uplift is not too fast and the river's discharge and gradient are enough, the water keeps sawing down at its original level — the higher the mountains grow, the deeper the gorge cuts. This narrow deep slot between Jade Dragon and Haba was \"sawn\" this way over a few million years.",
    history:
      "Tiger Leaping Gorge was a dangerous stretch of the Tea Horse Road and is now a classic trekking route. The Jinsha has a large drop and rich hydropower potential here. The slopes on both sides are home to Naxi and Yi people.",
  },

  leizhou: {
    seeing:
      "The Leizhou Peninsula, in south-western Guangdong, is the southernmost peninsula of the Chinese mainland, facing Hainan Island across the Qiongzhou Strait. It is broadly a low basalt platform, mostly below 100 m, with a red weathering soil, an indented coast, and abundant volcanic landforms.",
    formation:
      "The Leizhou Peninsula was formed by repeated Cenozoic volcanic eruptions: basalt lava spread layer on layer into a large low lava platform, and some of the eruption craters filled with water into lakes. Huguangyan near Zhanjiang is a classic maar lake — a near-circular deep pit blasted out when rising magma met groundwater, then filled with water.",
    observation:
      "From the air the Leizhou Peninsula is a dark-red, low, flat piece of land reaching into the sea, almost without hills, its platform surface cut by shallow valleys and gullies, its coast fringed with mangroves and mudflats. Round craters and maar lakes are scattered across it. Xuwen at the southern tip faces the Qiongzhou Strait.",
    distinguish:
      "The Leizhou Peninsula and Hainan Island: they face each other across the strait and both have volcanic landforms, but the Leizhou Peninsula is attached to the mainland, broadly a low flat basalt platform with no high mountains; Hainan is a fault-formed continental island with granite mountains in the middle and a ring terrain. The Leizhou maar (Huguangyan) differs from the volcanic lakes of Changbai Shan and the Tianshan: a maar is a low, wide explosion pit filled with water, not a crater lake high on a mountain.",
    concept:
      "The Leizhou Peninsula is a combination of \"basalt platform plus maar-type volcanism\": low-viscosity, free-flowing basaltic magma spreads into broad flat platforms when it erupts, rather than piling up steep cones; when rising magma meets groundwater it explodes with steam, blasting a shallow wide pit at the surface, and water in it is a maar lake. Such landforms are direct evidence for reading the character of a region's volcanic activity.",
    history:
      "The Leizhou Peninsula is named for its frequent thunderstorms (\"Leizhou\" — thunder prefecture). Historically remote, it was a place of banishment for demoted officials. Hot, wet and typhoon-prone, it grows sugarcane, pineapple, sisal and other tropical crops, and is the mainland's gateway to Hainan.",
  },

  // —— Oases & towns (settlement): human–landform interface; uses Overview / From the air / History ——

  kashgar: {
    seeing:
      "Kashgar (Kashi) sits at the far western edge of the Tarim Basin, on the piedmont plain where the Pamir, Tian Shan and Kunlun ranges meet. Rivers such as the Kizil and the Gez spread into alluvial fans here, and groundwater and canal water at the fan edges support a large oasis, with the city at its centre.",
    formation: "",
    observation:
      "From the air Kashgar is a big block of checkerboard green — fields, shelter-belts and canals — ringed by brown gobi and desert, with the dense old and new city at the centre. To the west the oasis ends quickly and the land climbs into the brown Pamir; to the east lies the sand sea of the Taklamakan.",
    history:
      "Kashgar is the gateway where the southern and central Silk Road met before crossing the Pamir into Central and South Asia — a trading city for over two thousand years, part of the kingdom of Shule in Han times. It is mainly Uyghur today; the Id Kah Mosque is China's largest, and the old town's terraced earthen houses are a living traditional quarter. A National Historic and Cultural City.",
  },

  hotan: {
    seeing:
      "Hotan lies at the northern foot of the Kunlun and the southern edge of the Taklamakan, on a narrow oasis strip squeezed between high mountains and desert. The White Jade River (Yurungkash) and Black Jade River (Karakash) descend from the Kunlun and build alluvial fans at the mountain front, and the oasis grows along their water.",
    formation: "",
    observation:
      "From the air Hotan is a broken string of green dots along the desert's southern rim, hard against the pale grey shadow of the Kunlun. The fans at the two river mouths are the greenest; the oasis narrows and frays toward the desert. On dusty days the whole oasis vanishes into haze.",
    history:
      "Hotan was the ancient kingdom of Khotan, a major Silk Road town and once an important Buddhist centre (the Niya and Rawak sites). Its two rivers have yielded nephrite jade since antiquity — the \"Jade Road\" predates the Silk Road. It is mainly Uyghur today, known for jade, atlas silk and carpets.",
  },

  "turpan-city": {
    seeing:
      "The city of Turpan sits inside the Turpan Depression at the southern foot of Bogda Peak, not far north of Lake Ayding at about -154 m — the lowest land in China. It lies among the Flaming Mountains, gobi, and karez-fed oasis.",
    formation: "",
    observation:
      "From the air Turpan is a deep-green oasis surrounded by red-brown gobi and the Flaming Mountains, with vine trellises and shelter-belts covering the basin floor. Look closely and you see neat rows of small earth mounds across the oasis — the shafts of the karez, underground channels that carry Tian Shan snowmelt here and keep the oasis alive.",
    history:
      "This was successively the centre of Jushi, the Gaochang kingdom and the Qocho Uyghurs; the ruined cities of Jiaohe and Gaochang and the Bezeklik caves are all nearby. Extreme heat (among the hottest places in China) plus karez water made it famous for grapes and Hami melons. It is mainly Uyghur today.",
  },

  bachu: {
    seeing:
      "Bachu lies on the western edge of the Tarim Basin, on the alluvial plain of the lower Yarkand River, on the corridor between Kashgar and Aksu, with the Taklamakan to its east. It is a little-known farming county where oasis, desert steppe and natural poplar forest interlace.",
    formation: "",
    observation:
      "From the air Bachu is a broken patchwork of green along the tail of the Yarkand River: dark belts of wild poplar (Populus euphratica) line the channel, pale desert steppe and salt flats lie beyond, and then the sand. The river's flow swings widely between wet and dry years, and the green expands and shrinks with it.",
    history:
      "In Han times the area belonged to small Western-Regions states such as Weitou. It is mainly Uyghur today, growing cotton, wheat and fruit on Yarkand River irrigation; wild poplar forest and Bachu mushrooms are local specialities. It is a textbook case of the Tarim rim, where the oasis reaches exactly as far as the river.",
  },

  maigaiti: {
    seeing:
      "Makit (Maigaiti) lies in the south-west of the Tarim Basin on the east bank of the Yarkand River. It is described as the only county town in China set inside the desert — the town is wrapped on three sides by the Taklamakan, and desert once made up about 90% of the county's area. A single oasis is held together by Yarkand River water.",
    formation: "",
    observation:
      "From the air Makit is a small strip of riverside green in a yellow sand sea, its edge held by belts of wild and planted poplar that block the drifting sand. Just beyond the oasis run the long linear dunes typical of the Taklamakan. There is sea-buckthorn wetland along the Donghe flats.",
    history:
      "Makit is the heartland of the Dolan people; Dolan muqam and Dolan meshrep are both national intangible-heritage items (the muqam is also on the UNESCO list). Dolan culture grew up along the Yarkand River at the desert's edge, and the drums and dance of the meshrep are its sharpest expression.",
  },

  // ============ North America · United States ============
  "rocky-mountains": {
    seeing:
      "The Rocky Mountains are the backbone of western North America, running about 4,800 km from British Columbia in Canada to New Mexico in the United States. They carry the Continental Divide — rivers on the two sides of the crest drain to the Pacific and (via the Gulf of Mexico) to the Atlantic. The highest peak on the U.S. side is Mount Elbert in Colorado, about 4,401 m.",
    formation:
      "The Rockies largely formed in the Laramide orogeny, roughly 80 to 55 million years ago. The general view is that an oceanic plate then subducted at a very shallow angle beneath North America, buckling continental crust far inland. The core of the ranges is ancient Precambrian crystalline rock; once uplifted it was carved by rivers and Quaternary glaciers into today's spires, cirques and U-shaped valleys. Colorado alone has more than fifty peaks above 4,267 m (14,000 ft).",
    observation:
      "From the air the Rockies are a broad, roughly north–south belt of high mountains of uneven width, with a sharp edge against the Great Plains to the east — plain on one side, peaks on the other, with almost no foothill transition. In summer, bare grey rock and lingering snow lie above the tree line and dark conifer forest below it; many of the intermontane basins are open high country, known locally as \"parks\". The volcanic and fault-block country around Yellowstone and the Tetons is a distinctive stretch.",
    distinguish:
      "The Rockies and the Appalachians to the east both run broadly north–south, but the Rockies are young and high, with modern glaciers and peaks over 4,000 m; the Appalachians are old, low and rounded, topping out below 2,100 m. Versus the Sierra Nevada: the Sierra is a single tilted granite fault block along the edge of California, gentle on the west and steep on the east; the Rockies are a collection of parallel ranges with high basins between them.",
    concept:
      "The Rockies are a mountain system, not a single range — dozens of roughly parallel ranges with broad valleys and high country between them. A common misconception is to call all of the mountainous American West \"the Rockies\": the Pacific-side Coast ranges, the Sierra Nevada and the Cascades are not part of the Rockies, and arid uplands such as the Great Basin lie between them.",
    history:
      "The Rockies were long home to, and a travel corridor for, many Native American nations. The 19th-century fur trade, the Colorado gold rush and the building of the transcontinental railroad drove the growth of mountain settlements. The ranges hold Yellowstone (established 1872, among the first national parks in the world), Rocky Mountain and Grand Teton national parks.",
  },

  "appalachian-mountains": {
    seeing:
      "The Appalachian Mountains run about 2,400 km along the eastern edge of North America, from Newfoundland in Canada to Alabama in the United States. They are not high — the highest, Mount Mitchell, is about 2,037 m — but they are continuous, parallel and heavily forested, the main topographic barrier of eastern North America, and long an obstacle to European settlers moving inland.",
    formation:
      "The Appalachians are an ancient fold mountain belt, raised mainly in a series of continental collisions between about 480 and 260 million years ago that ultimately assembled the supercontinent Pangaea; they are generally thought to have stood as high then as the Alps do today. Hundreds of millions of years of erosion since have worn them down and rounded them, so that what is seen now is the resistant rock layers of a stripped-down old range — a set of parallel long ridges with valleys between them, the \"Ridge and Valley\".",
    observation:
      "From the air the Appalachians are a set of rounded, parallel ridges trending south-west to north-east, of similar crest height, with no standout peaks; the range is forested almost end to end in mixed hardwood and conifer, turning colour widely in autumn. A wide valley (the Great Valley) runs the length of the belt through its middle. In the south, the Great Smoky Mountains often carry a blue-grey haze over the ridgetops.",
    distinguish:
      "Among \"American mountains\" the Appalachians are most easily confused with the Rockies. The test: the Appalachians are old, low, rounded, continuous, forested almost throughout, and have no modern glaciers; the Rockies are young, high, with bare rock spires, peaks over 4,000 m and modern glaciers. The Appalachians are comparable to Europe's Ural Mountains — both are ancient fold ranges planed down by long erosion.",
    concept:
      "The Appalachians are a classic old fold mountain range: their significance is not in height but in the record of a continental collision. A common misconception is that \"low means unimportant\" — they set the river drainage divide, the climate zones and the early population pattern of eastern North America. \"Appalachia\" is also used for a larger cultural-geographic region that does not exactly match the mountains as a landform.",
    history:
      "The Appalachians are the traditional homeland of the Cherokee and many other Native American nations. From the 18th century, a few passes such as the Cumberland Gap became the routes by which settlers crossed the mountains into the Ohio Valley. Appalachian coal underpinned U.S. industrialisation in the 19th and 20th centuries. The roughly 3,500 km Appalachian National Scenic Trail follows the crest through 14 states.",
  },

  "sierra-nevada-us": {
    seeing:
      "The Sierra Nevada is a range in eastern California about 640 km long, running north–south. Its western slope rises gently from the Central Valley; its eastern side drops as a steep fault scarp into the Owens Valley, a fall of up to about 3,000 m. The high point, Mount Whitney, is about 4,421 m — the highest peak in the 48 contiguous United States. Winter moisture off the Pacific falls here as heavy snow, making the range an important natural reservoir for California.",
    formation:
      "The core of the Sierra Nevada is a large body of granite that cooled deep underground more than 100 million years ago (the Sierra Nevada batholith). A few million years ago, crustal extension tilted the whole block up along a fault on its eastern edge and westward, producing today's fault-block mountain, gentle west and steep east. Quaternary glaciers carved the upper range into spires, cirques and U-shaped valleys; Yosemite Valley is the best-known glacial valley.",
    observation:
      "From the air the Sierra Nevada is a straight north–south wall, its eastern fault scarp standing knife-cut above the flat Owens Valley with a very clear boundary; the western side is a long series of steadily descending forested slopes. Broad exposures of pale granite and alpine lakes lie along the crest, with giant sequoia and pine forest lower down. Lake Tahoe is a large deep-blue lake at the northern end of the crest.",
    distinguish:
      "The Sierra Nevada and the Rockies to the east are both \"mountains of the American West\"; the difference is that the Sierra is a single granite fault block — one continuous crest, gentle west and steep east — while the Rockies are a collection of parallel ranges. Versus the Cascades: the Cascades are a line of separate volcanic cones (Rainier, St. Helens and others); the Sierra Nevada has no active volcanoes and is the product of fault-block uplift and glacial carving. It shares its name with Spain's Sierra Nevada but is unrelated.",
    concept:
      "The Sierra Nevada is a classic fault-block mountain — not folded up, but a single slab of crust lifted and tilted along a fault. A common misconception is to group it with volcanic ranges: there has been almost no Quaternary volcanic activity in the range. \"Sierra\" is Spanish for a jagged, saw-toothed ridge — a description of its skyline.",
    history:
      "The Sierra Nevada is the traditional homeland of the Paiute, Maidu and other Native American nations. Gold was found in the western foothills in 1848, setting off the California Gold Rush and a large influx of people. The range holds Yosemite, Sequoia and Kings Canyon national parks, which protect the giant sequoia — the largest tree in the world by volume.",
  },

  "cascade-range": {
    seeing:
      "The Cascade Range is a volcanic mountain range in the Pacific Northwest of North America, running from southern British Columbia in Canada into northern California. Its signature is a line of widely spaced, steep-sided stratovolcano cones, of which Mount Rainier, about 4,392 m, is the highest and is an active volcano. The range separates the wet coastal region from the dry interior plateau.",
    formation:
      "The Cascades are a subduction-zone volcanic arc: the Juan de Fuca plate subducts beneath North America from the west, melting at about 100 km depth to produce magma that rises to build volcanoes. The range has two parts — an older, eroded base of volcanic rock in the west, and a line of young stratovolcanoes sitting on it (Rainier, Adams, St. Helens, Hood, Shasta and others). Mount St. Helens had a major lateral eruption in 1980.",
    observation:
      "From the air the bulk of the Cascades is a forested belt of moderate height; what stands out is the handful of symmetrical, permanently snow-capped volcanic cones rising alone out of that belt — one or two thousand metres above the surrounding ridges, and easy to pick out. Dense temperate rainforest lies west of the crest; east of it the land turns quickly to dry open woodland and shrub. Crater Lake in Oregon is a deep-blue caldera lake in a collapsed volcano.",
    distinguish:
      "The Cascades meet the Sierra Nevada in the American West (around Mount Shasta in northern California), but their origins are entirely different: the Cascades are an active subduction-zone volcanic arc, with symmetrical cones and eruptive histories; the Sierra Nevada is an inactive granite fault block. Versus the Rockies: the Cascades are near the coast and volcanic; the Rockies are interior and have no active volcanoes.",
    concept:
      "The Cascades are a classic volcanic arc — the peaks were not squeezed up but built one volcano at a time, which is why they stand isolated and symmetrical. A common misconception is to treat the range as an ordinary fold mountain: several of its main peaks are active volcanoes with eruption potential, monitored continuously by the U.S. Geological Survey.",
    history:
      "The Cascade volcanoes appear in the oral traditions of many Native American nations. In the 19th century, emigrant wagon trains had to cross the range's passes to reach the Willamette Valley in Oregon. The range holds Mount Rainier, Crater Lake and North Cascades national parks; after its 1980 eruption Mount St. Helens was set aside as a national volcanic monument for the study of ecological recovery.",
  },

  "alaska-range": {
    seeing:
      "The Alaska Range is an arc-shaped range about 650 km long in south-central Alaska, separating the Pacific coast from the Alaskan interior. Rising from its middle is the highest peak in North America, Denali, about 6,190 m (U.S. Geological Survey figure; the federal official name is also given as Mount McKinley). Because the lowland at its base is so low, Denali's rise from base to summit is among the greatest of any land mountain on Earth.",
    formation:
      "The Alaska Range runs along a large strike-slip fault (the Denali Fault) and is the result of the Pacific-side plate pushing north, compressing and displacing crust upward; it is still slowly rising and is seismically active. The rock is mostly sedimentary and granitic, and the upper range is covered by huge valley glaciers — the Kahiltna and others flow tens of kilometres down from around Denali.",
    observation:
      "From the air the Alaska Range is a continuous white wall of snow mountains lying between the green interior lowland and the coast to the south. Denali and neighbouring Mount Foraker stand well above the main crest, their upper parts under permanent snow and threaded with glaciers, many of which end in the lowland as grey meltwater rivers and braided channels. North of the range is open tundra and boreal forest, and beyond that no more high mountains.",
    distinguish:
      "The Alaska Range and the Rockies are both major North American mountain systems, but the Alaska Range is at high latitude and far more heavily glaciated — the whole upper range is under ice, whereas the Rockies carry only small glaciers on a few high summits. It runs parallel to the coastal Chugach and Wrangell ranges and is the more inland one.",
    concept:
      "Two figures for Denali's height are often confused: an elevation of about 6,190 m (above sea level), and a base-to-summit rise of about 5,500 m measured from lowland at roughly 600 m. The first makes it the highest point in North America by elevation; the second explains why it looks so tall from below. The mountain has two names in use: Denali (from a local Native language, meaning \"the high one\") and Mount McKinley.",
    history:
      "The Alaska Range area is the traditional land of several Athabaskan-speaking Native nations. Denali National Park and Preserve, established in 1917, covers about 24,000 km² and is an important area for observing northern ecosystems and for mountaineering.",
  },

  "colorado-plateau": {
    seeing:
      "The Colorado Plateau spans the meeting point of Colorado, Utah, Arizona and New Mexico (the \"Four Corners\"), an area of about 337,000 km². It is a high, arid tableland, averaging roughly 1,500 to 2,100 m, cut into countless deep canyons by the Colorado River and its tributaries. It concentrates a set of national parks famous for bare rock layers and red landforms — the Grand Canyon, Monument Valley, Arches, Zion, Bryce.",
    formation:
      "The Colorado Plateau is built of roughly flat-lying sedimentary rock (sandstone, shale, limestone) recording hundreds of millions of years of deposition. Since the start of the Cenozoic the whole plateau has been raised about 1,500 to 2,000 m fairly evenly, without the layers being folded — they stay horizontal. After uplift, rivers cut down hard, carving the tableland into mesas, buttes and canyons; the dry climate keeps the colour and bedding of the layers clearly visible.",
    observation:
      "From the air the Colorado Plateau is a large, reddish-brown upland of low relief, its surface split by a branching network of dark canyons — the Colorado River system. The plateau's edges are often stepped, retreating cliffs (a \"staircase\"); isolated mesas and volcanic necks dot the surface. Vegetation is sparse and rock is exposed — it is one of the easiest landscapes anywhere to \"read\" rock structure from above.",
    distinguish:
      "The Colorado Plateau and the Tibetan Plateau are both \"plateaus\", but the Tibetan Plateau was squeezed up by continental collision, sits above 4,000 m and has strongly deformed rock; the Colorado Plateau is only 1,500 to 2,100 m, its layers are essentially flat, and it was raised evenly as a block. Versus the neighbouring Great Basin: the Great Basin has been pulled apart into a set of fault troughs and parallel ranges; the Colorado Plateau is one intact block that was not torn.",
    concept:
      "The Colorado Plateau shows that what matters for a \"plateau\" is a large area raised relatively intact — not necessarily great height. A common misconception is that canyons were \"ripped open\": the Grand Canyon was sawn down over millions of years by the Colorado River, faster where the plateau rose faster. Flat layers plus a dry climate make this a classic region worldwide for studying sedimentary rock and river erosion.",
    history:
      "The Colorado Plateau is home to the Navajo, Hopi, Ute and other Native nations; the Navajo Nation is the largest Indian reservation in the United States, and places such as Monument Valley are managed by Navajo Parks. The plateau also holds many Ancestral Puebloan cliff-dwelling sites, such as Mesa Verde. Today it is dominated by its cluster of national parks and outdoor tourism.",
  },

  "grand-canyon": {
    seeing:
      "The Grand Canyon is the vast canyon the Colorado River cut through the Colorado Plateau, in northern Arizona — about 446 km long, up to about 29 km wide, and up to about 1,857 m deep. Its walls of clearly bedded red and yellow rock record nearly 1.8 billion years of Earth history. Most visitors look out from the South Rim, at about 2,100 m.",
    formation:
      "The Grand Canyon formed mainly over the past 5 to 6 million years, as the Colorado River kept cutting down while the Colorado Plateau was being raised. The river does the \"cutting deeper\"; wall retreat and side gullies do the \"widening\"; and the dry climate slows collapse and plant cover, keeping the layers sharp. The Vishnu Schist exposed at the bottom is about 1.8 billion years old, among the oldest rock in North America; the Kaibab Limestone at the top is about 270 million years old.",
    observation:
      "From the air the Grand Canyon is an extremely deep, wide, crook-edged gash in the plateau surface; inside are stepped-back terraces and cliffs, colours shading from pale at the top to deep, from yellow to red to grey-black going down. A deep-green ribbon of river runs along the bottom. The North Rim is clearly higher than the South Rim and more forested. Low sun at sunrise and sunset makes the layering most three-dimensional.",
    distinguish:
      "The Grand Canyon and China's Yangtze Three Gorges are both canyons cut by a big river, but the Three Gorges is the Yangtze cutting across a mountain belt, with steep V-shaped rock walls; the Grand Canyon is the Colorado cutting into a plateau of flat layers, so its walls are stepped, wider and paler. Versus the Yarlung Tsangpo Grand Canyon: that one is deeper, narrower, wetter and more forested; the Grand Canyon is wider, drier and bare-rock.",
    concept:
      "The Grand Canyon is often wrongly called the \"deepest\" or \"largest\" canyon — by depth and length it is neither first (the Yarlung Tsangpo Grand Canyon is deeper and longer). What is genuinely special is its width, its continuous exposure of rock layers, and the way the dry climate makes about 1.8 billion years of geology legible at a glance. It is a classic case of river down-cutting combined with block uplift.",
    history:
      "The Grand Canyon and its surroundings have long been home to the Havasupai, Hualapai, Navajo, Hopi, Ute and other Native nations, and tribal communities still live in and around the canyon. Grand Canyon National Park was established in 1919 and listed as a World Heritage site in 1979. Grand Canyon Village on the South Rim is the main visitor hub.",
  },

  "great-plains-us": {
    seeing:
      "The Great Plains are a broad, gently sloping plain east of the Rocky Mountains, running from the Prairie provinces of Canada down to Texas and several hundred kilometres wide. They fall from about 1,800 m in the west to about 500 m in the east so gradually that the slope is barely perceptible. Once continuous tall- and short-grass prairie with huge bison herds, they are now a major U.S. wheat, corn and cattle belt.",
    formation:
      "The material of the Great Plains came mostly from the Rocky Mountains — as the ranges rose, wind and rivers carried large amounts of debris and silt out onto the mountain front and spread it flat, building an east-tilted apron of sediment. Quaternary glaciers left till and loess in the north; the central-south has wind-blown dune fields (such as the Nebraska Sandhills). Beneath lies the vast Ogallala Aquifer, which supports the region's irrigated farming.",
    observation:
      "From the air the Great Plains are an endless, near-level pale yellow-green surface; what stands out is the regular grid of fields and the green discs left by centre-pivot irrigation. Rivers are among the few landform clues — they run out from the Rockies in the west and cut shallow, broad valleys across the plain. Near the mountains in the west there are flat-topped erosion remnants and badlands.",
    distinguish:
      "The Great Plains and China's North China Plain are both plains built by rivers moving sediment, but the North China Plain is the alluvial fans and floodplains of the Yellow River and others — extremely flat and densely populated; the Great Plains are mostly a piedmont \"alluvial-aeolian\" apron with a clear but gentle overall westward-to-eastward tilt, and are thinly populated. Compared with the wetter Central Lowland to the east, the Great Plains are higher, drier and more given to grazing.",
    concept:
      "The Great Plains remind us that a \"plain\" need not be near sea level. Their western edge reaches 1,800 m, yet because the surface is flat, continuous and built of sediment, it is still a plain, not a plateau. A common misconception is to lump them with the wetter \"Midwest farmland\" further east — the boundary between the two runs roughly along the 500 mm rainfall line (about the 100th meridian).",
    history:
      "The Great Plains were long the territory of the Cheyenne, Lakota (Sioux), Comanche, Blackfeet and other bison-based Native nations. The 19th-century railroads, the Homestead Act, and the near-extermination of the bison brought large-scale farming and ranching settlement. Poor farming practice plus drought in the 1930s produced the Dust Bowl. Today the region's agriculture is highly mechanised and many counties continue to lose population.",
  },

  "great-basin": {
    seeing:
      "The Great Basin is a large area of \"internal drainage\" between the Sierra Nevada and the Wasatch Range — rivers and snowmelt here never reach the ocean, ending instead in salt lakes, salt flats or by soaking into the ground. It covers about 500,000 km², filling almost all of Nevada and spilling into neighbouring states, and is one of the driest parts of North America. The Great Salt Lake is the remnant water body at its lowest point.",
    formation:
      "The Great Basin is the result of the crust being stretched east–west: blocks break along north–south normal faults, half rising into parallel ranges and half dropping into the valleys between, producing classic \"Basin and Range\" topography — dozens of north–south ranges lined up like a row of caterpillars. During the ice ages the basins held large lakes such as Lake Bonneville; most are now dry, leaving the Great Salt Lake and broad salt flats.",
    observation:
      "From the air the Great Basin is a strikingly regular set of north–south stripes: brown ranges alternating with pale, flat valleys, one after another. The valley centres often hold white salt flats or dry lake beds (playas). Vegetation is mostly grey-green sagebrush, thinning toward the basin floors. The Great Salt Lake is a shallow, salty, pinkish-white sheet of water in the north-east corner.",
    distinguish:
      "The Great Basin and the Tarim Basin are both dry, internally drained basins, but the Tarim is a single large basin ringed by high mountains with one continuous desert in the middle; the Great Basin is not a basin at all but a whole \"Basin and Range\" province of dozens of small basins and small ranges. Versus the Colorado Plateau: the plateau is an intact block that was not torn; the Great Basin is a block that was stretched apart.",
    concept:
      "The name \"Great Basin\" is misleading — it is not one bowl-shaped hollow but an area where all water is trapped inland, made of many small basins. The test is the drainage: any region whose rivers ultimately do not reach the sea and vanish inland is an area of internal drainage. It is at once a landform region (Basin and Range), a hydrologic region (internal drainage) and a desert region (the Great Basin Desert), and the three do not match exactly.",
    history:
      "The Great Basin is the traditional homeland of the Western Shoshone, Paiute, Washoe, Ute and other Native nations, who developed gathering and hunting practices suited to extreme drought. In the 19th century emigrant trains had to struggle across the basin to reach California; Mormon settlers established themselves by the Great Salt Lake in 1847. Today it holds Great Basin National Park, protecting ancient bristlecone pines and limestone caves.",
  },

  "death-valley": {
    seeing:
      "Death Valley is a deep north–south valley in eastern California, part of the Great Basin. Its floor at Badwater Basin lies at −86 m, the lowest point in North America, while Telescope Peak on its western side rises to 3,366 m — only about 30 km apart horizontally. Summers are extremely hot, among the hottest recorded anywhere on Earth, and it is the driest place in the contiguous United States.",
    formation:
      "Death Valley is a \"pull-apart basin\" — the crust has been stretched along faults so that the whole valley floor keeps dropping relative to the ranges on either side, while receiving debris washed down from the mountains. With almost no outlet and very strong evaporation, the floor has accumulated thick salt, mud and sand, forming large salt flats, cracked salt crust and seasonal shallow salt lakes. The alluvial fans along the valley edge are large and steep.",
    observation:
      "From the air Death Valley is a long, narrow trough between two brown ranges; the lowest part of the floor is a glaring white salt flat, edged by pale alluvial fans spreading out from the mountain mouths. In places there are wind-eroded yellow dunes and multi-coloured oxidised rock faces (the \"Artist's Palette\"). Almost no green shows along the valley, only small patches of vegetation near springs.",
    distinguish:
      "Death Valley and China's Turpan Basin are both hot, dry basins below sea level, but Turpan is a structural basin ringed by the Tianshan, kept as an oasis by karez channels bringing snowmelt; Death Valley is a fault-opened graben with almost no oasis, hotter and lower. Versus the Qaidam Basin: Qaidam is high, cold and dry; Death Valley is below sea level and extremely hot.",
    concept:
      "Death Valley shows that a \"basin\" is defined by form and drainage, not elevation — it lies below sea level and is still a basin (an internally drained one). A common misconception is to equate \"lowest\" with \"deepest\": Badwater is the lowest point relative to sea level, but the roughly 3,400 m difference between the valley floor and the adjacent summit is a better measure of how deep it is. Hiking on the valley floor in summer carries a real health risk.",
    history:
      "Death Valley is home to the Timbisha Shoshone, who still have a community within the valley. The name comes from a group of emigrants who became trapped here in the mid-19th century while looking for a shortcut. Borax was briefly mined here in the late 19th century and hauled out of the desert by twenty-mule teams. Death Valley National Park was established in 1994 and is one of the largest national parks in the contiguous United States.",
  },

  "mojave-desert": {
    seeing:
      "The Mojave Desert lies in south-eastern California, southern Nevada and the neighbouring corners of Arizona and Utah, wedged between the Great Basin to the north and the Sonoran Desert to the south. It is a relatively high desert, mostly 600 to 1,200 m. Its signature plant is the Joshua tree, a tall yucca that grows only in the Mojave. Las Vegas, Death Valley and Joshua Tree National Park are all within it.",
    formation:
      "The Mojave's dryness comes from rain shadow: Pacific moisture is stripped out by the Sierra Nevada and other ranges, leaving little by the time it reaches here. In landform terms it is part of the Basin and Range — broad basins between low fault-block ranges, the basins holding dry lake beds, salt flats and dunes. It too had lakes during the ice ages, now reduced to traces.",
    observation:
      "From the air the Mojave is an open surface of pale brown to pale red, dotted with isolated dark ranges and white dry lake beds. Around Joshua Tree National Park the ground is strewn with piles of dark granite boulders. Overall it is emptier than the Sonoran Desert to the south, with lower, sparser vegetation. Large solar power plants and dead-straight highways are conspicuous human marks.",
    distinguish:
      "The Mojave, Great Basin and Sonoran deserts meet in the American South-West. The test is mostly plants and rainfall season: the Great Basin is a \"cold desert\", with winter snow and dominated by sagebrush; the Sonoran is a \"hot desert\", with summer and winter rain and giant columnar saguaro cactus; the Mojave is in between, its rain concentrated in winter, marked by the Joshua tree.",
    concept:
      "The Mojave shows that desert boundaries are set mainly by climate and vegetation, not by a clear landform line. In landform terms the Mojave and the Great Basin are both Basin and Range — the Mojave is simply warmer and further south. A common misconception is that deserts are all low: most of the Mojave floor is above 600 m, higher than many humid regions.",
    history:
      "The Mojave Desert is the traditional land of the Mojave, Chemehuevi, Southern Paiute and other Native nations, and old trade routes crossed it linking the Colorado River with the Pacific coast. The 19th-century \"Old Spanish Trail\" and later Route 66 and the railroads all crossed on similar lines. Today it holds Joshua Tree and Mojave National Preserve, and the parts near Las Vegas are developing quickly.",
  },

  "great-lakes": {
    seeing:
      "The Great Lakes are a set of connected large freshwater lakes in the middle of North America — Superior, Michigan, Huron, Erie and Ontario, running from west to east across the U.S.–Canada border. Their combined area is about 244,000 km², and they hold roughly a fifth of the world's surface liquid fresh water. Their water eventually reaches the Atlantic via the St. Lawrence River. Chicago, Toronto and Detroit are among the big cities on their shores.",
    formation:
      "The Great Lakes basins were mainly gouged out by Quaternary glaciers. As the ice sheet advanced south again and again, it scoured the ground deeper along belts of softer rock and piled up the sides; after the ice withdrew about 14,000 years ago, meltwater and the ice-depressed land together formed today's lakes. The crust is still slowly rebounding, so the shorelines are still adjusting.",
    observation:
      "From the air the Great Lakes are several huge, complex-edged sheets of deep-blue water, strung together like a chain opening to the south-east. Short channels and falls connect them (Niagara Falls sits between Erie and Ontario). In winter the lakes partly freeze and the downwind shores get heavy \"lake-effect\" snow. At night the shoreline cities run together in a band of light.",
    distinguish:
      "The Great Lakes and the African Great Lakes are both clusters of large freshwater lakes, but the African lakes mostly sit in crustal rifts and are deep and narrow; the Great Lakes were scraped out by glaciers and are relatively wide, shallow and irregular. Versus the Caspian Sea: the Caspian is an internally drained salt \"lake\" (really an enclosed sea); the Great Lakes are freshwater lakes with an outlet, linked to the ocean by the St. Lawrence.",
    concept:
      "The Great Lakes are named together but are not one lake: the five stand at different levels and drain step by step through connecting channels. Lakes Michigan and Huron are at the same surface elevation and joined by the wide Straits of Mackinac, so hydrologically they are one body (\"Lake Michigan–Huron\"), just conventionally counted as two. What makes a \"Great Lake\" is not whether it is connected but its area and volume.",
    history:
      "The shores of the Great Lakes are home to the Anishinaabe, Haudenosaunee (Iroquois), Huron and other Native nations, and the lakes were an important water route. The fur trade spread along them from the 17th century; in the 19th century canals (the Erie Canal and others) linked the Great Lakes to the Atlantic and the Mississippi system, driving the industrialisation of the American Midwest. Today the lakes are a major shipping, water-supply and fishing region, and face pressure from pollution and invasive species.",
  },

  yellowstone: {
    seeing:
      "The Yellowstone Plateau lies in the northern Rockies across Wyoming, Montana and Idaho, at about 2,400 m. It sits on top of a large active volcano — an underground magma chamber has domed the surface into an upland — and in the past 2.1 million years it has had three enormous eruptions, the most recent about 640,000 years ago, which collapsed a caldera about 72 by 55 km. As a result the surface has the densest concentration of geysers, hot springs and mud pots in the world, and Yellowstone (1872) was one of the first national parks anywhere.",
    formation:
      "The energy of the Yellowstone volcano comes from a roughly fixed mantle hot spot. As the North American plate moves south-west, it has left a line of older eruptive centres trailing north-east (the Snake River Plain). The current magma chamber is still there, heating the surface: rain and snowmelt sink underground, are heated, and rise back along fractures; where they pass through travertine or silica plumbing they build geysers. The Grand Canyon of the Yellowstone is where the Yellowstone River has cut into volcanic rock stained yellow by hydrothermal alteration.",
    observation:
      "From the air the Yellowstone Plateau is a relatively gentle, forested upland among the peaks of the Rockies, with the shallow saucer outline of the giant caldera in the middle and ring-fracture ridges around the edge. The thermal areas are patches of white, grey and coloured bare ground in the sea of forest, steaming; Yellowstone Lake is a large water body inside the caldera. The Yellowstone River cuts a bright yellow canyon at the northern edge. Large fires have left stands of dead standing trees.",
    distinguish:
      "The Yellowstone Plateau and the Colorado Plateau are both \"plateaus\", but the Colorado Plateau is flat-lying sedimentary rock raised as a block — dry, known for canyons; the Yellowstone Plateau was pushed up by volcanism, is covered in volcanic rock and forest, and is known for hot springs and geysers. Versus Hawaii's shield volcanoes: Hawaii is an oceanic hot spot beneath thin plate, erupting mostly fluid lava; Yellowstone is a hot spot beneath thick continental crust, and its big eruptions are explosive.",
    concept:
      "Yellowstone is often called a \"supervolcano\", which can suggest a catastrophic eruption is imminent. The scientific statement is that it is an active volcano with a history of very large eruptions, currently in a quiet interval, monitored continuously by the U.S. Geological Survey's Yellowstone Volcano Observatory, with no sign of an eruption in the near future. The geysers and hot springs are the normal expression of residual magmatic heat, not a warning sign.",
    history:
      "The Yellowstone area was used for thousands of years for hunting and gathering by the Shoshone, Crow, Blackfeet, Nez Perce and other Native nations. In 1872 the U.S. Congress set it aside as a national park — the starting point of the national-park idea, later copied by many countries. Today Yellowstone is a World Heritage site and an important place for the study of volcanism, geothermal systems and wildlife (grizzly bears, wolves, bison).",
  },

  "yosemite-valley": {
    seeing:
      "Yosemite Valley is a deep valley about 11 km long in the Sierra Nevada, its floor at about 1,200 m, walled by nearly vertical pale granite cliffs — El Capitan, Half Dome, Sentinel Rock. The Merced River runs through it, and side streams drop straight off the rim as high waterfalls including Yosemite Falls. The valley is the heart of Yosemite National Park and one of the birthplaces of rock climbing.",
    formation:
      "Yosemite Valley was first cut by the Merced River along a structural weakness into a V-shape, then repeatedly scraped, deepened and widened into today's U-shape by valley glaciers over the Quaternary ice ages. Granite breaks apart along sets of parallel joints, producing single cliff faces like El Capitan and domes like Half Dome (Half Dome was not \"sliced in half\" by a glacier — the missing side's rock was never complete, and fell away as the joints allowed). After the ice retreated the valley floor was a lake, which filled with sediment to become the flat meadows.",
    observation:
      "From the air Yosemite Valley is a straight, flat-bottomed cleft in a sea of conifer forest, its walls bare, whitish granite, its floor green meadow and a winding river. El Capitan is a nearly vertical single face on the north side at the valley mouth; Half Dome is a round-topped dome with one side sheared flat at the eastern end. The falls run hardest at spring snowmelt, and some dry up by late summer.",
    distinguish:
      "Yosemite Valley and Norway's Sognefjord are both glacier-cut U-shaped valleys; the difference is that Sognefjord's floor is drowned by the sea to make a fjord, while Yosemite Valley is in the interior highlands with a river and meadows on its floor. Versus an ordinary river valley: a river valley is V-shaped in cross-section with slopes descending all the way; a glacial valley is U-shaped with steep straight walls and a flat floor, and often \"hanging valleys\" (side valleys left high on the main wall, from which waterfalls drop).",
    concept:
      "Yosemite Valley is a textbook glacial U-shaped valley. A common misconception explains Half Dome's shape as a glacier having \"cut off half\" of it — the geological evidence shows glaciers never overtopped Half Dome, and its shape is controlled mainly by granite jointing. Another misconception is that the granite here is volcanic: it is an intrusive rock that crystallised slowly deep underground, and was only later uplifted, exposed and glaciated.",
    history:
      "Yosemite Valley is the home of the Ahwahneechee (a group of the Southern Miwok); the name \"Yosemite\" comes from a neighbouring people's term for them. It became known to outsiders after gold seekers entered the mountains in the mid-19th century. In 1864 the U.S. federal government set Yosemite Valley aside for protection — one of the earliest acts anywhere by a government to reserve a natural landscape for the public; a national park followed in 1890. Today it is a World Heritage site.",
  },

  "mississippi-river": {
    seeing:
      "The Mississippi River is the main stem of the largest river system in North America, rising at Lake Itasca in Minnesota and flowing about 3,700 km south to the Gulf of Mexico; measured from its longest tributary, the Missouri, the system is about 6,000 km long. Together with its tributaries it drains roughly 40% of the surface runoff of the contiguous United States. Its lower reaches run through a broad, flat floodplain, and its mouth is a \"bird's-foot\" delta reaching into the sea.",
    formation:
      "The plain the lower Mississippi crosses was itself built, layer by layer, by this river and its predecessors over millions of years, and by the sediment carried in Quaternary glacial meltwater. The channel swings freely across the plain, leaving many oxbow lakes and natural levees. At the mouth the current slows sharply, sediment drops out, and a branching delta builds seaward; because the sediment leaves through a few fixed passes, the shape resembles a bird's foot.",
    observation:
      "From the air the middle and lower Mississippi is a wide brown band looping back and forth across flat farmland, flanked by crescent oxbow lakes and abandoned channels, with built levees running along the banks. Toward the mouth the channel splits into several arms, edged by broad wetlands and mudflats sinking into the sea. Offshore of the delta the water is often stained yellow-brown for a large area.",
    distinguish:
      "The Mississippi Delta and the Yellow River Delta are both built by a heavily silt-laden river, but the Yellow River Delta is fan-shaped and its channel shifts drastically and often; the Mississippi's \"bird's-foot\" delta is a set of long fingers extended seaward along fixed passes, kept from shifting mainly by engineering. Compared with the Nile Delta, which is a classic triangle, the Mississippi is bird's-foot shaped.",
    concept:
      "The Mississippi shows that a large river has two sides to its landform work: erosion and transport dominate the upper and middle river, deposition dominates the lower river and mouth. A common misconception is that a delta only ever grows — in recent decades the Mississippi Delta has been shrinking, because upstream dams trap sediment, the channel is fixed for navigation and flood control, and the ground is subsiding, so the coastal wetlands are being lost.",
    history:
      "The Mississippi was long a central axis of life and travel for many Native nations, and its valley holds large earthwork-mound cities such as Cahokia. It served in turn as a border and trade route for France, Spain and the United States; 19th-century steamboats and later barge traffic made it the economic artery of the American interior. Today the U.S. Army Corps of Engineers manages the river with an extensive system of locks, levees and floodways.",
  },

  "central-valley-ca": {
    seeing:
      "The Central Valley is a flat lowland about 650 km long and 80 to 100 km wide between the Sierra Nevada and the Coast Ranges of California. Its northern half is drained by the Sacramento River and its southern half by the San Joaquin River; the two meet in a delta that reaches the sea through San Francisco Bay. The climate is dry summers and wet winters, the soil is deep, and it is one of the most productive agricultural regions in the United States.",
    formation:
      "The Central Valley is a structural trough — with the Sierra Nevada rising on one side and the Coast Ranges on the other, the block between sank relatively and has long received debris and river sediment from the mountains on both sides, filling in to several kilometres of sediment. The valley once held large seasonal lakes and marshes (such as Tulare Lake), most of them drained since the late 19th century and turned into farmland.",
    observation:
      "From the air the Central Valley is an extremely flat green-to-brown ribbon among mountains, almost entirely covered by regular fields whose colour changes with the crop and the season. The Sacramento and San Joaquin rivers are among the few natural curves; the delta in the middle is a grid of leveed islands and channels. At the edges of the valley the mountains rise abruptly, with a clear boundary.",
    distinguish:
      "The Central Valley and China's Chengdu Plain are both structural basin-plains ringed by mountains and filled by river sediment, but the Chengdu Plain is the alluvial fan of the Min River — small, irrigated from the Dujiangyan works for over two thousand years; the Central Valley is much longer and relies on inter-basin water transfers and groundwater. Versus the Great Plains: the Great Plains are a gently tilted piedmont apron given to dryland farming and grazing; the Central Valley is a closed trough given to irrigated agriculture.",
    concept:
      "The Central Valley is a reminder that a \"plain\" can be the result of structural sinking plus sediment fill, not just a river spreading out over open ground. A recurring concern is groundwater: long-term over-pumping has caused parts of the valley floor to keep subsiding (locally by several metres), making it one of the best-known cases of land subsidence in the world.",
    history:
      "The Central Valley is the traditional home of the Yokuts, Miwok, Wintun and other Native nations. Gold was found at the valley's eastern edge in 1848, and California's population surged. From the late 19th century, large-scale drainage, irrigation canals and later the Central Valley Project and State Water Project turned it into an intensively farmed belt. Today the valley is also one of California's faster-growing and more air-quality-challenged regions.",
  },

  everglades: {
    seeing:
      "The Everglades are a very broad, very gently sloping wetland at the southern end of the Florida peninsula. In the wet season, water spills from Lake Okeechobee in the centre and forms a sheet tens of centimetres deep and over a hundred kilometres wide, creeping south across sawgrass prairie at a few hundred metres a day and finally spreading into Florida Bay — which is why it is called the \"river of grass\". It is the only place where the American alligator and the American crocodile live side by side.",
    formation:
      "The Everglades sit on a nearly level limestone platform, the ground falling only a few metres from Lake Okeechobee to the coast. A thin layer of peat and marl over the limestone holds the seasonal shallow water. Its \"river\" has no defined channel — it is one wide, shallow sheet flow. Along the coast it becomes mangrove swamp; sawgrass prairie, tree islands (hammocks) and mangrove alternate with differences of only a few centimetres in ground height.",
    observation:
      "From the air the Everglades are a huge expanse of yellow-green grass, cut by countless narrow water tracks and dotted with oval tree islands, both the tracks and the islands stretched out along the direction of flow. In the wet season it is a sheet of water; in the dry season it retreats to scattered pools. Near the southern coast the prairie gives way to a dark-green maze of mangrove and winding tidal estuaries. Dead-straight canals and levee roads stand out sharply.",
    distinguish:
      "The Everglades are unlike an ordinary delta or estuarine wetland: they were not built by one large river carrying sediment, but are rainwater spreading over a flat limestone platform, carrying almost no sediment. Compared with an inland marsh such as Zoigê: Zoigê is a cold-climate peat bog on a poorly drained plateau; the Everglades are a warm, wide, shallow sheet-flow wetland.",
    concept:
      "The Everglades are a classic example of a \"flowing wetland\" — the water moves slowly as a whole, rather than sitting still. In the 20th century, canals and levees built for flood control and development changed the paths and volume of the flow, markedly shrinking the wetland and its ecosystem; a large \"Everglades restoration\" programme has since aimed to return the natural pattern of water movement.",
    history:
      "The Everglades and their surroundings are home to Seminole peoples including the Miccosukee, and after repeated 19th-century conflicts between the U.S. Army and the Seminole, some Seminole people remained deep in the wetland. Everglades National Park was established in 1947 — the first U.S. national park set aside chiefly to protect an ecosystem rather than scenery; it is also a World Heritage site and a Wetland of International Importance.",
  },

  "sonoran-desert": {
    seeing:
      "The Sonoran Desert covers southern Arizona, a small part of south-eastern California, and the Mexican states of Sonora and Baja California — one of the lowest-latitude and hottest deserts in North America. Its signature is the saguaro cactus, which can grow more than ten metres tall and live over a century, and grows only in the Sonoran Desert. Phoenix and Tucson are both within it.",
    formation:
      "The Sonoran Desert's dryness comes from the sinking air of the subtropical high-pressure belt, plus the rain shadow of the peninsular ranges to the west. In landform terms it is the southern extension of the Basin and Range — broad basins between low fault-block ranges, with large gravel alluvial fans at the mountain feet. Unlike the Mojave and Great Basin to the north, the Sonoran has two rainy seasons: winter frontal rain off the Pacific, and summer \"monsoon\" thunderstorms from the south-east.",
    observation:
      "From the air the Sonoran Desert looks \"greener\" than the Mojave — the basin floors are densely covered with dark shrubs and cactus of various heights, and the alluvial fans at the mountain feet are pale spreading cones. Between isolated brown ranges run dead-straight highways and grids of irrigated fields and cities. Dry washes (arroyos) show as pale branching lines, carrying water only after storms.",
    distinguish:
      "The Sonoran, Mojave, Chihuahuan and Great Basin deserts are the four great deserts of North America and meet one another. The test is vegetation and rainfall: the Great Basin is a cold desert dominated by sagebrush; the Mojave is between cold and hot, marked by the Joshua tree; the Sonoran is a hot desert with saguaro and tree-like plants and two rainy seasons; the Chihuahuan is further inland and east, dominated by yucca and desert scrub.",
    concept:
      "The Sonoran Desert shows that \"desert\" does not mean \"barren\" — because it has two rainy seasons, it is one of the most plant- and animal-rich deserts in the world. A common misconception is to picture all deserts as sand dunes: most of the Sonoran surface is gravel, shrub and cactus, and true dune fields (such as the Algodones Dunes) are only local.",
    history:
      "The Sonoran Desert is home to the O'odham, Cocopah and other Native nations, who developed farming that relies on the summer monsoon rains. It also holds the remains of large irrigation canals built by the Hohokam. In the 18th century Spanish missionaries built a string of mission villages along the rivers. Today the Phoenix–Tucson area of Arizona is one of the faster-growing regions in the United States, its water supply heavily dependent on transfers from the Colorado River and on groundwater.",
  },

  "monument-valley": {
    seeing:
      "Monument Valley lies on the Colorado Plateau at the Utah–Arizona border — a group of red sandstone mesas and buttes standing on a flat red desert, with a relief of about 100 to 300 m. Classic forms such as the East and West Mitten Buttes and the Merrick Butte appear often in films and photographs. It is managed by the Navajo Nation as a tribal park and is part of the Navajo reservation.",
    formation:
      "The rock of Monument Valley is Permian to Triassic red sandstone and shale that was once a single continuous set of layers. After the Colorado Plateau was uplifted, water and wind eroded away the softer beds, leaving columns and tables only where a hard \"cap rock\" protects them: a continuous cliff wastes back into a mesa, the mesa shrinks to a pointed butte, the butte thins to a spire, and finally it collapses. Iron oxide in the sandstone gives it its deep red colour.",
    observation:
      "From the air Monument Valley is a large, nearly level pale-red desert floor, out of which stand a dozen or so red rock bodies with steep sides and flat tops, widely spaced and not connected to one another. Each usually has a gentle apron of collapsed debris at its base. The floor carries sparse shrub and a few dirt roads, and casts very long shadows — the place is known for its light at sunrise and sunset.",
    distinguish:
      "The mesas and buttes of Monument Valley and the sandstone pinnacles of Zhangjiajie are both sandstone shaped by erosion, but Zhangjiajie is a humid climate cutting hundreds of dense, slender, vegetation-covered columns along closely spaced vertical joints; Monument Valley is a dry climate leaving a few isolated, stout, bare red rock bodies from flat layers.",
    concept:
      "Monument Valley is a viewing window on the \"mesa–butte–spire\" erosion sequence: the same set of flat layers, cut and worn back to different degrees, shows different forms. A common misconception is to treat it as a \"canyon\" — it is not a river-cut valley but a broad low area between erosion remnants on a former plateau surface.",
    history:
      "Monument Valley has long been Navajo land for living and grazing, and Navajo families still live within it. From the mid-20th century it was filmed extensively as a location for American Westerns, becoming one of the visual symbols of \"the American West\" in global popular culture. Entering the core area requires a ticket from the Navajo tribal park, and some areas may be visited only with a Navajo guide.",
  },

  "hawaiian-islands": {
    seeing:
      "The Hawaiian Islands are a chain of volcanic islands in the middle of the Pacific, forming the U.S. state of Hawaii. There are 8 main inhabited islands; the largest and youngest is the Island of Hawaii (the \"Big Island\") at the south-east end, where Mauna Loa and Kīlauea are active volcanoes. Toward the north-west the islands get older, lower and smaller, and finally sink below the surface as reefs and seamounts.",
    formation:
      "The Hawaiian Islands sit above a roughly fixed mantle hot spot. The Pacific plate moves north-west at about 7 to 10 cm a year, carrying away, one by one like a conveyor belt, the volcanoes that form over the hot spot — leaving a chain of volcanoes that gets progressively younger from north-west to south-east. Each island above the surface is one or several shield volcanoes, built up gradually by layer on layer of very fluid basalt lava, with gentle slopes and a shield-like outline.",
    observation:
      "From the air the Hawaiian Islands are a line of green islands in the deep-blue ocean, aligned north-west to south-east. The Big Island is largest, showing the gentle rounded outlines of several shield volcanoes and the craters at their summits; the windward north-east slopes are lush and cloudy, the leeward south-west slopes dry and yellow. The older islands (such as Kauai) are deeply eroded into ridges and gorges, with tall cliffs along the coast. Pale coral reefs fringe the islands.",
    distinguish:
      "The Hawaiian Islands are \"hot spot volcanic islands\", different from the \"island arcs\" of Japan or Indonesia: an island arc sits on a subduction zone, is made of a row of andesitic volcanoes, and has explosive eruptions and earthquakes; Hawaii sits on a hot spot in the middle of a plate, erupts mostly fluid basalt, is relatively gentle, and is strung out in a line with age changing regularly along it.",
    concept:
      "The Hawaiian Islands are classic evidence for \"plate motion plus a fixed hot spot\" — if the hot spot is still and the plate moves, it should leave a chain of volcanoes with ages changing along it, and the Hawaiian–Emperor chain does exactly that; the bend in the chain even records a change in the plate's direction of motion about 47 million years ago. A common misconception is that Hawaii is on a plate boundary: it is far from any plate boundary, in the interior of the Pacific plate.",
    history:
      "Polynesian voyagers reached and settled the Hawaiian Islands more than a thousand years ago and developed an independent Hawaiian Kingdom. After Europeans arrived in 1778, disease, trade and outside powers deeply changed the society; the islands were annexed by the United States in 1898 and became the 50th state in 1959. Today the Hawaiian language and culture are undergoing a revival, and volcanic activity, tourism and military bases are focal points of the islands' economy and land questions.",
  },

  "columbia-plateau": {
    seeing:
      "The Columbia Plateau is in the north-western United States, across eastern Washington, eastern Oregon and western Idaho — a broad upland built of basalt. In the Miocene (about 17 to 6 million years ago) large volumes of very fluid lava poured out of a set of fissures and spread across the region in sheet after sheet; the basalt covers a total of about 210,000 km². The Columbia and Snake rivers have cut deep canyons into the plateau.",
    formation:
      "The Columbia Plateau is a \"flood basalt\" landscape: the lava did not erupt from a cone but flowed quietly in huge volumes from long cracks in the crust, spread out like water, cooled into a layer, and was buried by the next flow — stacked several kilometres thick in places. During the ice ages, repeated bursting of ice dams sent the \"Missoula floods\" across the eastern plateau, stripping off the topsoil and carving a maze of bare-rock coulees into the basalt — the \"Channeled Scablands\". Dry Falls is the dry bed left by one enormous former waterfall.",
    observation:
      "From the air the Columbia Plateau is a gently rolling, yellow-brown upland, split by a few deeply cut river valleys (the Columbia, the Snake) whose walls often show layer upon layer of horizontal dark basalt steps. The Channeled Scablands in the east are an unusual terrain — a crisscross of dry coulees, bare rock islands and dry waterfalls. In the south-west the loess-covered Palouse Hills have been turned into wheat fields.",
    distinguish:
      "The Columbia Plateau and the Colorado Plateau are both \"plateaus\", but the Colorado Plateau is flat-lying sedimentary rock raised as a block; the Columbia Plateau was built up by lava piling on lava. Versus the Yellowstone Plateau: Yellowstone was domed up by a hot spot and its big eruptions are explosive; the Columbia Plateau's flood basalts came out quietly and on a far larger, flatter scale.",
    concept:
      "The Columbia Plateau shows that a \"plateau\" can be built up, not only pushed up. It is one of the youngest and best-preserved large continental flood-basalt provinces on Earth. A common misconception is to picture flood basalt as one great eruption — it was actually hundreds of separate lava flows laid down over two or three million years.",
    history:
      "The Columbia Plateau is home to the Nez Perce, Yakama, Cayuse and other Plateau Native nations, for whom the salmon runs were central to life. The 19th-century Oregon Trail crossed the region. In the 20th century, dams on the Columbia such as Grand Coulee turned it into an irrigated farming region and also deeply affected the salmon populations.",
  },

  "great-salt-lake": {
    seeing:
      "The Great Salt Lake is in north-western Utah, the largest saltwater lake in the Western Hemisphere. It has no outlet — rivers flow in and water leaves only by evaporation, so salt keeps concentrating, and salinity ranges from a little above seawater to near-saturation in different parts of the lake. The lake is shallow, only a few metres deep over much of its area, so a small change in level moves the shoreline a long way. In recent years, sustained drought and upstream water use have kept it low.",
    formation:
      "The Great Salt Lake is the remnant of a much larger freshwater lake of the ice ages, Lake Bonneville. About 14,000 years ago the climate dried, Bonneville shrank drastically, and only the Great Salt Lake was left in the lowest ground; the old shorelines are still cut into the hillsides around it like contour lines. The south-east shore has river deltas and wetlands; the rest is mostly flat salt flat.",
    observation:
      "From the air the Great Salt Lake is a shallow, broad sheet of water, pinkish-white or blue-green — a causeway splits it in two, and the northern half, which gets almost no fresh water and is saltier, is stained a distinct pink by salt-loving microbes, in contrast with the blue-green southern half. Around the lake are broad white salt flats and plains, and beyond them the brown parallel ranges of the Basin and Range.",
    distinguish:
      "The Great Salt Lake and China's Qinghai Lake are both internally drained salt lakes and both remnants of larger ice-age lakes, but Qinghai Lake sits high on the Tibetan Plateau, is deeper, and is about half as salty as seawater; the Great Salt Lake is lower, extremely shallow, much saltier, and swings widely with rainfall. Compared with the Dead Sea, the Dead Sea is smaller, deeper, saltier and falling fast and steadily.",
    concept:
      "The Great Salt Lake is a classic \"terminal lake\" — water only enters and leaves by evaporation. Its area and level have no \"normal\" value, only a range that shifts with the climate. A common misconception is to read its shrinking as permanent loss — it has risen and fallen many times; but if upstream use stays above the inflow, dust from the exposed lakebed affects the region's air, which is a current real concern.",
    history:
      "The Great Salt Lake area is the traditional land of the Shoshone, Ute, Goshute and other Native nations. Mormon settlers established Salt Lake City on the south-east shore in 1847. In the 19th century some emigrants tried to cut across the salt flats west of the lake as a shortcut and became stranded repeatedly. Today the lake area has brine extraction, salt works and migratory-bird refuges, and the lake level is a matter of active public discussion in Utah.",
  },

  "colorado-river": {
    seeing:
      "The Colorado River rises in the Rocky Mountains and flows south-west through seven states for about 2,330 km to the Gulf of California. It cut the Grand Canyon, Glen Canyon and a series of other deep gorges, and is the most important water source in the arid South-West. The Hoover Dam, Glen Canyon Dam and others built in the 20th century divide it into a chain of reservoirs, and its water is so fully allocated that in most years of recent decades the Colorado runs dry before reaching its mouth.",
    formation:
      "The Colorado's landform work is known for down-cutting: as the Colorado Plateau rose over the past few million years, the river cut down to keep its gradient, sawing the flat layers into deep canyons, the Grand Canyon being the deepest stretch. The river originally carried a heavy sediment load (\"Colorado\" is Spanish for \"red\"); since the dams, much of that sediment is trapped in reservoirs, the water downstream runs clear, and the supply to the riverbed and delta has fallen.",
    observation:
      "From the air the upper Colorado is an ordinary mountain river in the Rockies; on entering the Colorado Plateau it becomes a deep, winding green thread set in red rock, with stepped-back canyon walls on either side. Lake Mead and Lake Powell are two artificial blue sheets on the river's course, shaped like drowned branching canyons. Downstream in the Sonoran Desert the channel is canalised and the banks are irrigated fields.",
    distinguish:
      "The Colorado and the Yellow River are both heavily silt-laden, heavily dammed rivers with strained downstream water supplies, but the lower Yellow River is a \"suspended river\", its bed raised above the plain by silt and held in by levees; the lower Colorado is a canyon river cut into rock, and its problem is mainly that the water is fully divided and it barely reaches the sea. Compared with the Mississippi, the Mississippi carries far more water and is managed mostly for navigation and flood control; the Colorado is managed mostly for water supply and power.",
    concept:
      "The Colorado shows that river landforms are shaped not only by natural processes but deeply by human engineering. A common misconception is that a big river always reaches the sea — because of interstate water allocation and a chain of large dams, the Colorado's natural delta has largely dried and turned saline, recovering only briefly in occasional release years. It is also a classic case of canyon-cutting by river down-cutting plus block uplift.",
    history:
      "The Colorado River and its canyons have long been home to many Native nations, and dozens of federally recognised tribes are in the basin today. In the early 20th century seven states signed the Colorado River Compact allocating water rights, later layered with a treaty with Mexico and a series of court rulings into a complex body of \"river law\". Today about 40 million people use its water, and the long drought under climate change has made the allocation an ongoing public issue.",
  },

  "atlantic-coastal-plain": {
    seeing:
      "The Atlantic Coastal Plain is a low, flat belt along the eastern edge of North America, beginning around New York and New Jersey and widening southward all the way to Florida and around into the Gulf coast. It is relatively recently emerged sea floor, made of loose sand, mud and shell material, very gently sloping, with a coast of barrier islands, lagoons and drowned river mouths. Cities such as Washington and Richmond sit roughly along its boundary with the Appalachian foothills.",
    formation:
      "The Atlantic Coastal Plain is essentially the landward extension of the continental shelf — over the past tens of millions of years, sea level has risen and fallen repeatedly, flooding and exposing this shallow sea floor, each time leaving a nearly horizontal, seaward-tilted layer of sediment. When sea level was low in the ice ages, rivers cut valleys across the plain; when it rose afterward, the valley mouths were drowned into wide bays (such as Chesapeake Bay). The plain's edge against the foothills is the \"Fall Line\", where rivers drop from hard old rock onto soft sediment in a set of small falls and rapids.",
    observation:
      "From the air the Atlantic Coastal Plain is an extremely flat, water-laced lowland of alternating forest and farmland, wider toward the south. The coastline is not a solid line but a string of long thin barrier islands, with narrow lagoons and salt marsh between them and the mainland; several large rivers open into funnel-shaped bays reaching inland. There is no visible high ground, only very gentle undulation.",
    distinguish:
      "The Atlantic Coastal Plain and the Great Plains are both flat, but the Great Plains lie east of the Rockies, are high (up to 1,800 m), are built of mountain debris, and are relatively dry; the Atlantic Coastal Plain hugs the sea, is only tens of metres above sea level, is built of marine sediment, and is humid. Compared with the North China Plain, that is an inland river-alluvial plain; the Atlantic Coastal Plain was shaped by marine transgression and regression along a coast.",
    concept:
      "The Atlantic Coastal Plain reminds us that a \"plain\" can be a \"former sea floor\". The test is the material and the history — it is made of loose marine sediment in near-horizontal, seaward-dipping beds, different in origin from a river-alluvial plain or a structural-basin plain. The \"Fall Line\" is one of its important geographic boundaries: many early cities were built on it, because it offered both water power and the head of navigation.",
    history:
      "The Atlantic Coastal Plain is home to the Powhatan, Lenni-Lenape, Creek and many other Native nations. From the 17th century, Europeans built some of the earliest colonial settlements along its bays and river mouths (Jamestown, Charleston and others). The warm, humid lowlands of the southern part developed a plantation economy based on enslaved labour. Today the region is city-dense and heavily populated, and its low coast makes it especially sensitive to sea-level rise and storm surge.",
  },

  "florida-peninsula": {
    seeing:
      "The Florida Peninsula is a low, flat strip of land reaching south-east into the sea from North America, about 650 km long. It is really the emerged part of a huge limestone platform; even its highest point is only about 100 m above sea level. Limestone dissolves easily in water, so the peninsula is full of sinkholes, underground rivers and clear large springs; the southern end is the Everglades, and the coast is fringed with barrier islands and coral reefs (the Florida Keys).",
    formation:
      "The Florida Peninsula's foundation is a thick layer of limestone built up over tens of millions of years in warm shallow seas and by the accumulation of the remains of organisms. When sea level fell, the platform emerged as land, and rain and groundwater dissolved the limestone along cracks, forming caves; where a cave roof collapses, a sinkhole forms, some filling with water to make round lakes. Beneath the peninsula lies a huge aquifer, and the springs are simply where that groundwater emerges in low places.",
    observation:
      "From the air the Florida Peninsula is an extremely flat, extremely green, lake-dotted lowland — the many round lakes scattered across the centre are mostly water-filled sinkholes. The coastline is edged by a nearly continuous string of thin barrier islands, with narrow lagoons between them and the land. At the southern end the grass-green Everglades spread toward Florida Bay, and beyond that is an arc of reef islands.",
    distinguish:
      "The Florida Peninsula and China's Leizhou Peninsula are both low, flat coastal peninsulas, but Leizhou is capped with basalt and has volcanic landforms; the Florida Peninsula is a limestone platform with karst features (sinkholes, underground rivers, springs). Compared with the Atlantic Coastal Plain, the Florida Peninsula is the section of that plain that juts furthest south and is surrounded by sea, where the limestone base is nearer the surface and karst is better developed.",
    concept:
      "The Florida Peninsula shows that \"coast\" landforms can be governed by rock type: a soluble rock like limestone lets water hollow out both the surface and the subsurface into a distinctive form. A common misconception is to take the round lakes here for volcanic craters or artificial ponds — most are sinkholes. Because the ground is porous limestone and the land is low, groundwater, land subsidence and saltwater intrusion are long-standing management problems.",
    history:
      "The Florida Peninsula is home to the Tequesta, Calusa and later the Seminole and other Native nations. Spain reached and named \"La Florida\" in 1513; Spanish and then British control followed, and it passed to the United States in 1821. In the 20th century, drainage works, air conditioning and railways and highways turned this hot, wet lowland into one of the fastest-growing regions in the United States, with an ongoing tension between wetland protection and urban expansion.",
  },

  "chihuahuan-desert-us": {
    seeing:
      "The Chihuahuan Desert is the largest desert in North America by area; its main body is in Mexico, and the part in the United States is in west Texas, southern New Mexico and south-eastern Arizona. It is a relatively high rain-shadow desert (mostly 1,100 to 1,500 m), with ranges on the east and west blocking the moisture. The vegetation is dominated by yucca, agave and creosote bush, and the large gypsum dune field of White Sands National Park is its most distinctive corner.",
    formation:
      "The Chihuahuan Desert's dryness is mainly topographic: the Sierra Madre to the west and a series of mountains to the east strip out the moisture from the seas on either side. It is the southern extension of the Basin and Range — broad basins between north–south fault-block ranges, the basins holding dry salt lakes. The gypsum at White Sands comes from the surrounding mountains, dissolved by rain, carried into a closed basin, and left as gypsum crystals when the water evaporates, then blown by the wind into the largest gypsum dune field in the world.",
    observation:
      "From the air the Chihuahuan Desert is an open, pale-brown, shrub-dotted set of basins, separated by rows of isolated brown ranges. White Sands is a glaring pure-white sand sea within it, in sharp contrast with the surrounding brown. The Rio Grande cuts a deep canyon around Big Bend National Park — an uncommon landform clue in the desert. Unlike the Sonoran Desert further west, there are no giant saguaro cactus here.",
    distinguish:
      "The Chihuahuan, Sonoran, Mojave and Great Basin are the four great deserts of North America. The test is elevation, temperature and vegetation: the Great Basin is a cold desert dominated by sagebrush; the Mojave is marked by the Joshua tree; the Sonoran is a low, hot desert with giant saguaro; the Chihuahuan is higher, further inland and east, colder in winter, and dominated by yucca, agave and desert scrub.",
    concept:
      "The Chihuahuan Desert shows that \"largest desert\" is not the same as \"hottest desert\" — it is the largest by area, but because it is high it gets frost and even snow in winter. A common misconception is to take White Sands for ordinary quartz dunes: it is water-soluble gypsum, which barely absorbs heat, so it is not hot underfoot even at midday, and it hardens briefly after rain.",
    history:
      "The Chihuahuan Desert is the traditional land of the Mescalero Apache and other Native nations. The Rio Grande valley has had irrigated farming for a very long time, and Spanish settlers built a string of towns along the river in the 17th century. In the 20th century the region's open space and clear skies made it a site for U.S. military testing and spaceflight (the White Sands Missile Range is next to the dunes). Today Big Bend, Guadalupe Mountains and White Sands national parks protect its core landforms.",
  },

  // ============ North America · Canada ============
  "canadian-shield": {
    seeing:
      "The Canadian Shield is a large area of ancient crystalline rock wrapped around Hudson Bay, shaped like a huge shallow saucer, covering about half of Canada and extending into parts of the United States. Its rock is among the oldest on Earth (some more than 3 billion years), but the surface is not high — repeated glaciation has scraped it into a low, hard land dense with lakes and bogs. Most of Canada's forest, mineral wealth and hydropower is on the Shield.",
    formation:
      "The Canadian Shield is North America's \"craton\" — the most stable ancient core of the continent. It was assembled from older blocks of crust billions of years ago, and since then it has had no strong mountain building, only slow wearing down. In the past two or three million years, continental ice sheets repeatedly spread out from its centre and retreated, stripping off the soil and loose material, rounding the rock, and leaving countless ice-scoured hollows and lakes dammed by glacial debris.",
    observation:
      "From the air the Canadian Shield is a surface of dark green (conifer forest) interwoven with countless bright patches (lakes); rock is often bare, worn into smooth rounded backs. The lakes are irregular and randomly oriented, many lined up along cracks in the bedrock and glacial scratches. Relief is very low, with no obvious mountains — only low rock knobs and long glacially moulded ridges. Toward the north near the Arctic Circle, forest gives way to tundra.",
    distinguish:
      "The Canadian Shield and the Brazilian Highlands are both ancient cratons of a continent and geologically similar; but the Brazilian Highlands lie in the tropics, are raised higher, and are marked by red soil and mesas; the Canadian Shield is lower, at high latitude, and marked by glacial scouring and lakes. Versus a true \"plateau\": the Shield was not raised as a block — it is simply a large area of ancient rock long exposed and then planed by glaciers, and is named by its geological region (a shield), not by elevation.",
    concept:
      "A \"shield\" is a geological concept, not a landform one — it means a large area of a continent where Precambrian crystalline rock is exposed and has been stable for a long time, and its elevation can be high or low. A common misconception is to picture it as a shield-shaped highland: most of the Canadian Shield is only a few hundred metres above sea level, and Hudson Bay in its centre is actually sea. It is still slowly rising by \"isostatic rebound\" now that the ice sheets have melted.",
    history:
      "The Canadian Shield has been home for thousands of years to the Cree, Inuit, Anishinaabe, Innu and other Native nations, whose travel network was the rivers and lakes. From the 17th century the fur trade reached inland along the Shield's river and lake systems. In the 20th century the Shield's rich nickel, copper, gold, uranium and iron ores, and hydroelectric stations on its large rivers, became mainstays of the Canadian economy.",
  },

  "canadian-rockies": {
    seeing:
      "The Canadian Rockies are the stretch of the Rocky Mountain system along the British Columbia–Alberta border. They are closer to the west coast and more heavily glaciated than the U.S. Rockies. They are known for clearly bedded sedimentary rock, jagged peaks, large icefields and a string of glacial lakes; Banff, Jasper, Yoho and Kootenay national parks form a connected block that is a World Heritage site. The highest peak, Mount Robson, is 3,954 m.",
    formation:
      "The rock of the Canadian Rockies is mostly limestone, dolomite and shale deposited in shallow seas over hundreds of millions of years. About 100 to 60 million years ago, compression from the west stacked these layers up along a series of near-parallel thrust faults — like pushing a stack of books — forming ranges of consistent trend. Glaciers then carved the upper mountains into horns, arêtes, cirques and U-shaped valleys; the Columbia Icefield is a large surviving alpine icefield whose meltwater flows to the Pacific, the Atlantic and the Arctic oceans.",
    observation:
      "From the air the Canadian Rockies are a set of parallel ranges of consistent trend, with layer upon layer of horizontal or tilted sedimentary rock clearly visible on the mountainsides; many peaks are \"cuesta\" forms, a steep cliff on one side and a gentler dip slope on the other. The valleys are wide and flat (glacial U-shapes), with turquoise glacial lakes on their floors (rock flour in the water scatters the light) such as Lake Louise and Moraine Lake. The Columbia Icefield is a white plateau-like ice surface on the main crest.",
    distinguish:
      "The Canadian Rockies and the U.S. Rockies are different stretches of the same system: the Canadian stretch is at higher latitude, has far more glaciers and icefields, and is mostly unmetamorphosed sedimentary rock with very clear bedding; the U.S. stretch (especially around Colorado) has a core of ancient crystalline rock, more peaks over 4,000 m, and very few modern glaciers. Versus the Coast Mountains: the Coast Mountains are on the Pacific with granite and fjords; the Rockies are inland and are stacked, thrust-faulted sedimentary layers.",
    concept:
      "The Canadian Rockies are a clear example of a \"thrust-and-fold mountain range\" — not simply squeezed into folds, but layers pushed up along faults and stacked on top of one another. A common misconception is to take the blue-green colour of the glacial lakes for pollution or mineral staining: it is very fine \"rock flour\" suspended in the water, scattering the blue-green part of sunlight.",
    history:
      "The Canadian Rockies are the traditional territory and seasonal hunting grounds of the Stoney Nakoda, Cree, Ktunaxa and other Native nations. The Canadian Pacific Railway crossed the mountains in 1885, and in the same year a reserve was set aside around the hot springs at Banff — Canada's first national park. Today this mountain area is one of Canada's most important tourism destinations, and is dealing with visitor numbers, wildlife corridors and glacier retreat.",
  },

  "coast-mountains": {
    seeing:
      "The Coast Mountains run along the Pacific coast of North America, from southern British Columbia to the Alaska border, about 1,600 km. They rise straight out of the sea, their body cut by countless long, deep fjords, and are covered in temperate rainforest and many glaciers. The highest peak entirely within British Columbia is Mount Waddington, 4,019 m. Vancouver and Whistler are on the southern edge.",
    formation:
      "The core of the Coast Mountains is a large body of granite (the Coast Plutonic Complex) that crystallised deep underground from subduction-zone magma in the Mesozoic and Cenozoic. Continued subduction of the Pacific-side plate keeps raising the crust. During the ice ages, glaciers coming off the mountains cut hard down the existing river valleys, right below present sea level; when the ice retreated and the sea rose, seawater flooded these U-shaped valleys to make fjords. The mountains still hold many valley glaciers and small icefields.",
    observation:
      "From the air the Coast Mountains are a belt of snow mountains hugging the coast and broken into pieces — the coastline is extremely intricate, and straight fjords driving far inland cut the range into peninsulas and islands. The lower slopes are dense dark-green rainforest; the upper slopes are bare rock and sheets of glacier and snowfield. There is a lot of cloud and rain; on clear days you can see pale granite cliffs and hanging glaciers.",
    distinguish:
      "The Coast Mountains and the inland Canadian Rockies run parallel but are entirely different: the Coast Mountains are coastal, marked by granite and fjords, wetter, with glaciers reaching the sea; the Rockies are inland, marked by sedimentary bedding and thrust-faulted ranges. Versus Norway's Scandinavian Mountains: both are coastal ranges cut into fjords by glaciers, with different origins (a rising granite batholith versus an ancient mountain belt) and rock types, but a similar fjord landscape.",
    concept:
      "The Coast Mountains are a good example for understanding \"fjords\": a fjord is a U-shaped inlet formed where a glacier cut a coastal river valley below sea level and the sea flooded it after the ice retreated — steep walls, deep water, often deeper inside than at the mouth (a glacial \"sill\" at the entrance). A common misconception is to take a fjord for an ordinary river mouth or bay — a fjord is always tied to glacial action.",
    history:
      "The Coast Mountains and their fjords are home to the Coast Salish, Kwakwaka'wakw, Haida, Tsimshian and other Pacific Northwest Native nations, who built complex societies and art (totem poles and more) around cedar, salmon and travel by sea. The 19th-century fur trade and later logging, fishing and mining spread along the fjords. Today the area holds large protected areas such as the Great Bear Rainforest, and is an important shipping and cruising waterway.",
  },

  "saint-elias-mountains": {
    seeing:
      "The Saint Elias Mountains are in the south-western corner of Yukon on the Alaska border — the highest mountain country in North America. Canada's highest peak, Mount Logan, is here at 5,959 m, and its base has one of the largest circumferences of any mountain on Earth. The range holds the largest non-polar icefield in the world, with glaciers flowing down to the lowlands and the sea. Kluane National Park, together with the adjacent U.S. parks, is a World Heritage site.",
    formation:
      "The Saint Elias Mountains are where the Pacific plate is running obliquely and fast into North America — some far-travelled terranes (accreted blocks of crust) have been \"bulldozed\" onto the continental edge and strongly uplifted, and the range is still rising fast and is very seismically active. High latitude plus high elevation puts the snowline very low, so snow that falls on the mountains cannot melt and is compressed year after year into huge icefields and valley glaciers tens of kilometres long.",
    observation:
      "From the air the Saint Elias Mountains are a vast field of white — almost no bare rock, only black horns and arêtes poking out of a continuous icefield. Wide valley glaciers wind downslope like frozen rivers, striped with dark \"medial moraines\" (debris carried down from where two glaciers merge), breaking into a maze of ice pinnacles and meltwater lakes at their lowland ends.",
    distinguish:
      "The Saint Elias Mountains and the adjacent Alaska Range (with Denali) are both high mountains of north-western North America and both intensely glaciated; the Saint Elias are closer to the sea, rising faster, with a larger icefield, and nearer the coast. Versus the Himalaya: the Himalaya are higher, longer, and formed by two continents meeting head-on; the Saint Elias are an oceanic plate hitting a continent obliquely and shoving accreted terranes up.",
    concept:
      "The Saint Elias Mountains show that huge icefields can form outside the poles — as long as it is high and cold and snowy enough, ice can build up over a large area. A common misconception is that these glaciers are static, unchanging ice: they flow continuously, and some \"surge\" periodically (advancing several kilometres in a few years), making them an important site for the study of glacier dynamics.",
    history:
      "The Saint Elias area is the traditional land of the Southern Tutchone, Tlingit and other Native nations, and the mountain passes were trade routes between the coast and the interior. In the 18th century European navigators saw and named Mount Saint Elias from the sea. In 1993 this mountain area (with the Alaska side) was inscribed as a World Heritage site, chiefly for its glaciers and ecosystems.",
  },

  "torngat-mountains": {
    seeing:
      "The Torngat Mountains are at the far northern tip of the Labrador Peninsula, the boundary range between the provinces of Newfoundland and Labrador and Quebec, and the highest mountain country in mainland eastern Canada. \"Torngait\" means \"spirits\" in Inuktitut. There are no trees, roads or permanent residents; the coast is a series of deep glacier-cut fjords; and in summer there are polar bears and caribou. It became a national park reserve in 2005.",
    formation:
      "The Torngat Mountains are made of very old crystalline rock of the Canadian Shield (some of it close to 4 billion years old, among the oldest known on Earth). This ancient block was raised somewhat as a whole, then strongly scoured in successive ice ages by continental ice sheets and valley glaciers — the summits cut into horns and arêtes, the valleys hollowed into U-shapes, and the coastal valleys cut below sea level to become fjords. The land is still slowly rebounding since the ice left.",
    observation:
      "From the air the Torngat Mountains are a grey-brown, almost entirely bare rock highland rising straight out of the sea and the fjords. The ridges are sharp and the valleys deep and wide, with patches of remnant snow and a few small glaciers on the slopes. The coastline is extremely intricate, with long fjords reaching into the mountains, often ending in braided meltwater rivers. There is no forest, only low tundra plants clinging to sheltered spots.",
    distinguish:
      "The Torngat Mountains and the Canadian Rockies to the west are both Canadian mountains, but the Rockies are relatively young thrust-faulted sedimentary mountains with big icefields and tourist infrastructure; the Torngats are extremely ancient Shield rock, worn low by glaciers, remote and roadless. Compared with the mountains of northern Norway: both are ancient rock plus glacial fjords plus tundra, with a similar look.",
    concept:
      "The Torngat Mountains show that \"ancient does not mean tall\": their rock is among the oldest on Earth, but billions of years of erosion and glacial scouring have left them only a bit over a thousand metres high. A common misconception is to attribute all sharp peaks and steep valleys to \"young uplift\" — here the rugged terrain is mainly glaciers carving into ancient, hard rock.",
    history:
      "The Torngat Mountains are the traditional land of the Labrador Inuit (Nunatsiavut) and the Quebec Inuit (Nunavik), and the fjord mouths along the coast hold camps and sites used for generations. Moravian missionaries built stations along the Labrador coast in the 19th century. Today the national park is co-managed with the Inuit, reached mainly by boat or small plane, and the park base station employs Inuit guides and bear guards.",
  },

  "long-range-mountains": {
    seeing:
      "The Long Range Mountains are a north–south highland on the western side of the island of Newfoundland, the north-easternmost stretch of the Appalachian Mountains in mainland North America. They are essentially a raised, then glacier-cut plateau, flat on top and steep-edged. Gros Morne National Park is here — best known for \"the Tablelands\", a bare orange-brown mountain whose surface rock should be tens of kilometres down in the mantle.",
    formation:
      "The Long Range Mountains record an ancient continental collision. About 500 million years ago an old ocean closed, and crust and mantle rock from the ocean floor were thrust up onto the edge of the continent — the mantle peridotite of the Tablelands was carried up this way. The range was then eroded into a low, flat plateau. Quaternary glaciers cut cliffs into the plateau edge and deepened the valleys below sea level — Western Brook Pond is a glacier-cut inland \"fjord\" later cut off from the sea.",
    observation:
      "From the air the Long Range Mountains are a flat-topped highland belt along Newfoundland's west coast, its surface bare rock and tundra dotted with countless small ponds, its edges a continuous cliff hundreds of metres high. At the foot of the cliffs, long, straight, steep-walled deep lakes (fjord-form lakes) reach inland, looking almost exactly like Norwegian fjords except that they are closed off from the sea. The Tablelands is one block that is distinctly orange-brown and almost bare of plants.",
    distinguish:
      "The Long Range Mountains and the main body of the U.S. Appalachians are the two ends of the same ancient fold belt: the U.S. stretch is longer, more continuous and heavily forested; the Long Range is its northern end in Newfoundland, more thoroughly reworked by glaciers, with fjord-form lakes and exposed mantle rock. Versus Norwegian fjords: Western Brook Pond and the others are \"fjord lakes\" — the form of a glacial fjord, but now cut off from the sea and freshwater.",
    concept:
      "The Long Range Mountains (Gros Morne) were inscribed as a World Heritage site because they lay the process of \"plate collision\" open to view: mantle rock that normally sits tens of kilometres underground is exposed here at the surface, and the boundary between ocean crust and mantle can be seen. A common misconception is that all surface rock comes from the crust — the Tablelands peridotite is from the mantle, and its chemistry is toxic to most plants, which is why it is bare.",
    history:
      "The west coast of Newfoundland is the land of the Mi'kmaq and, historically, the Beothuk. Around AD 1000, Norse (Viking) people built a short-lived settlement at L'Anse aux Meadows at the northern tip of Newfoundland — the earliest confirmed European foothold in the Americas. From the 18th century, French and English fishermen worked this coast for cod. Gros Morne was inscribed as a World Heritage site in 1987.",
  },

  "interior-plains-ca": {
    seeing:
      "The Interior Plains of Canada lie between the Rocky Mountains to the west and the Canadian Shield to the east, reaching north all the way to the Arctic Ocean. Their southern part is the Prairies of Alberta, Saskatchewan and Manitoba, Canada's grain belt; further north the grassland gives way to aspen parkland, then boreal forest, and finally the lowlands of the lower Mackenzie. The surface is near-horizontal sedimentary rock, cut into broad shallow valleys by rivers.",
    formation:
      "The sedimentary rock of the Interior Plains was laid down in shallow seas and in rivers and lakes inside the continent over hundreds of millions of years, then hardened; it thins eastward toward the Shield. Quaternary ice sheets covered the region repeatedly, leaving thick till on retreat, lakes dammed by ice (Lake Winnipeg is the remnant of glacial Lake Agassiz), and some deep glacially scoured troughs (today's major valleys). Beneath the plains lie large deposits of oil, natural gas, potash and coal.",
    observation:
      "From the air the southern Interior Plains are a vast area cut into regular squares of wheat and canola, colour changing with the season and crop, with rivers winding through and cutting ribbons of valley woodland. Northward the field grid fades and gives way to patchy woodland, marsh and thousands of round and oval small lakes (\"potholes\"), all left by the glaciers.",
    distinguish:
      "The Canadian Interior Plains and the U.S. Great Plains are the northern and southern halves of the same great plain, continuous in geology and landform; the difference is climate and land use — the Canadian stretch is at higher latitude and colder, its south a short-season spring-wheat area, its north forest and marsh. Versus the Canadian Shield: the Shield is ancient crystalline rock, lake-strewn, with almost no farming; the Interior Plains are younger sedimentary rock with deep soil and are the main farming region.",
    concept:
      "The Canadian Interior Plains remind us that a \"plain\" comes in several kinds by origin: this is a \"cratonic cover plain\" — the stable interior of a continent that received sediment for a long time and was then smoothed by glaciers — different from a piedmont apron (the western Great Plains) or a river-alluvial plain (the North China Plain). The small round lakes all over the southern prairie are a mark of glacial till, not sinkholes or craters.",
    history:
      "The southern Interior Plains were the bison-based territory of the Blackfoot, Cree, Assiniboine, Métis and other peoples. After the bison were nearly exterminated and the Canadian Pacific Railway was completed in the 19th century, the government pushed large-scale settlement and wheat farming, and the grid of fields and towns of the three Prairie provinces dates from then. Today the region is the core of Canadian agriculture and oil and gas.",
  },

  "hudson-bay-lowlands": {
    seeing:
      "The Hudson Bay Lowlands wrap around the southern shores of Hudson Bay and James Bay — an extremely flat lowland of bog and shallow pool, stretching a few hundred kilometres inland where it is widest. It is one of the largest continuous wetlands in the world, and an important area (around Churchill) where polar bears wait on land for the sea ice to form. The ground has almost no perceptible slope, and the rivers are wide, shallow and meandering to the sea.",
    formation:
      "The Hudson Bay Lowlands were once part of the floor of Hudson Bay. In the last ice age a very thick ice sheet pressed this crust down by hundreds of metres; after the ice melted about 8,000 years ago the unloaded land began to \"rebound\" fast — the area is still rising at roughly a metre per century, the coastline keeps advancing into the bay, and the newly exposed flat seabed becomes new bog. The bedrock is limestone with poor drainage, and with weak evaporation and permafrost blocking the way, the water cannot escape and forms vast peat bog.",
    observation:
      "From the air the Hudson Bay Lowlands are a grey-green, waterlogged flat — countless tiny pools and winding channels woven into a net, and on the seaward side a series of roughly parallel, curved low sand ridges (former shorelines) recording the land rising and the coast retreating. There is no relief, no forest (only scattered black spruce); tundra and bog in summer, all white in winter.",
    distinguish:
      "The Hudson Bay Lowlands and the U.S. Everglades are both very flat, wide wetlands, but the Everglades are on a subtropical limestone platform fed by rainwater sheet flow; the Hudson Bay Lowlands are subarctic, formed by post-glacial crustal rebound turning seabed into land, plus permafrost and peat. Compared with the great bogs of Siberia: both are large peat wetlands in a high-latitude, permafrost setting, by a similar mechanism.",
    concept:
      "The Hudson Bay Lowlands are a good place to see \"post-glacial isostatic rebound\": an ice sheet is a heavy load that presses the crust down; when the ice melts, the crust springs slowly back like an unloaded spring. The curved sand ridges here are the \"footprints\" of the coast retreating step by step as the land rose. A common misconception is that a retreating coastline always means falling sea level — here it is the land that is rising.",
    history:
      "The Hudson Bay Lowlands are the traditional land of the Cree and the Inuit. In 1670 the English Hudson's Bay Company received a charter and built fur-trade posts on the bay shore (York Factory, Prince of Wales Fort and others); for over two centuries this coast was one of the main gateways for Europeans into the Canadian interior. Today Churchill is known as the \"polar bear capital\" and is an important place for ecotourism and Arctic research.",
  },

  "saint-lawrence-lowlands": {
    seeing:
      "The St. Lawrence Lowlands are a comparatively narrow, flat valley between the eastern Great Lakes and the mouth of the St. Lawrence River, hemmed in by the Canadian Shield to the north and the Appalachian uplands to the south. With fertile soil, a relatively mild climate and easy water transport, it is the most densely populated and industrially and agriculturally concentrated belt in Canada — Toronto, Ottawa, Montreal and Quebec City are all on this corridor.",
    formation:
      "The St. Lawrence Lowlands are a fault-bounded sedimentary trough between the Shield and the Appalachians, filled with Palaeozoic limestone and shale. Ice sheets pushed along this lowland in the ice ages; on retreat, seawater flooded up the ice-depressed valley to form the \"Champlain Sea\", which withdrew to leave a flat, fertile plain of marine clay. The isolated small hills near Montreal (the \"Monteregian Hills\") are old magma bodies that never reached the surface, later exposed by erosion.",
    observation:
      "From the air the St. Lawrence Lowlands are a flat green corridor between two uplands, covered by dense farmland and cities, with the wide, island-studded St. Lawrence River as its main axis. Around Quebec you can see French-style \"long lots\" — each field narrow and long, set at right angles to the riverbank. On both sides of the lowland the land rises abruptly (the rocky hills of the Shield to the north, the long ridges of the Appalachians to the south).",
    distinguish:
      "The St. Lawrence Lowlands and the U.S. Atlantic Coastal Plain are both densely populated eastern lowlands, but the Atlantic Coastal Plain is emerged, loose marine sediment spread along the coast; the St. Lawrence Lowlands are an inland, fault-bounded sedimentary valley along a great river. Versus the Canadian Interior Plains: the Interior Plains are far larger and more given to farming and ranching; the St. Lawrence Lowlands are small, concentrated and highly urbanised.",
    concept:
      "The St. Lawrence Lowlands show how landform shapes where people live: they are a small fraction of Canada's area, yet because they are flat, warm and navigable, they hold a large share of the country's population and economy. A common misconception is to take Montreal's Mount Royal and the other isolated hills for volcanoes — they are intrusive rock bodies that never erupted, exposed after the overlying rock eroded away.",
    history:
      "The St. Lawrence Lowlands are the land of the St. Lawrence Iroquoians and later of the Algonquin, Mohawk and other Native nations, with the St. Lawrence River as their travel artery. In the 17th century the French built Quebec City and Montreal along the river, forming the core of \"New France\"; the region passed to Britain after 1763. This corridor has been the centre of Canada's politics, economy and population ever since, and is the meeting zone of English- and French-speaking Canada.",
  },

  "great-slave-lake": {
    seeing:
      "Great Slave Lake is in the Northwest Territories, the deepest lake in North America, about 614 m at its deepest. It is very irregular in shape: the western half is wide and shallow, sitting on sedimentary rock; the East Arm is deep and narrow, cut into the hard Canadian Shield, its shores bare rock and countless small islands. The territorial capital, Yellowknife, is on the north shore of the East Arm. The lake is frozen for about eight months of the year.",
    formation:
      "The basin of Great Slave Lake straddles the boundary between two kinds of rock. The western half formed where faulting dropped a block of sedimentary rock; the East Arm is a deep trough gouged by glaciers repeatedly scouring along a weak zone in the Shield. After the last ice age the area was part of a much larger ice-margin lake (glacial Lake McConnell); the level later fell, leaving today's Great Slave Lake. The Slave River flows in from the south, and the Mackenzie River flows out from the western end.",
    observation:
      "From the air the western half of Great Slave Lake is an open expanse of water with a straight shoreline, surrounded by forest and marsh; the East Arm is entirely different — the arms of the lake reach like branches into grey bare Shield rock, and the water is full of long thin rocky islands and peninsulas, all of consistent trend (following the structure of the bedrock). In winter the lake ice is thick, and \"ice roads\" are built across it.",
    distinguish:
      "Great Slave Lake and Great Bear Lake to the north are the two largest lakes in the Canadian Northwest, similar in form (both straddling the Shield–sedimentary boundary); Great Bear is larger in area, further north and colder; Great Slave is deeper, with a city and roads on its southern shore. Versus Lake Baikal: Baikal formed by a crustal rift dropping down and is far deeper; Great Slave's depth comes mainly from glacial scouring plus faulting.",
    concept:
      "The depth of Great Slave Lake (about 600 m) shows the power of glacial excavation: a continuous ice sheet advancing repeatedly along a weak zone in the rock can dig a valley floor hundreds of metres below the surrounding ground. A common misconception is that all high-latitude big lakes are shallow — Great Slave and Great Bear are both deep, because part of their basins was deeply excavated by glaciers, not just low ground holding water.",
    history:
      "The Great Slave Lake area is the home of the Chipewyan, Tłı̨chǫ, Yellowknives and other First Nations and later the Métis. The name \"Slave\" comes from an old term used by a neighbouring people for the local Dene; it is now regarded as derogatory, and some place names are being changed to Dene-language names. Gold was found on the north shore of the East Arm in the 1930s, and Yellowknife was founded because of it. Today the lake area has fishing, tourism and a winter ice road toward the Arctic.",
  },

  "great-bear-lake": {
    seeing:
      "Great Bear Lake is in the Northwest Territories, straddling the Arctic Circle — the largest lake entirely within Canada and one of the largest lakes in the world. It is made of five large arms and shaped like an open hand; the water is extremely clear and cold, frozen for about nine months a year, and the only community on it is the small settlement of Délı̨nę.",
    formation:
      "Great Bear Lake's basin sits half on the ancient Canadian Shield and half on younger sedimentary rock, the boundary running roughly through the lake. It is mainly the work of continental ice sheets scouring and then glacial debris damming: the ice dug several arms along weak zones in the rock, and meltwater filled them after the ice retreated. Because it is at high latitude, deep and very large, the water stays near-freezing almost year round, and its clarity is among the highest of the great lakes.",
    observation:
      "From the air Great Bear Lake is a huge deep-blue sheet of water, its arms reaching in different directions, separated by bare rock peninsulas. The eastern and northern shores are the bare rock and tundra of the Shield, with rocky islands in the lake; the south-western shore is gentler, with scattered conifer forest. The lake only opens up in summer, and its water is exceptionally deep-coloured and clear.",
    distinguish:
      "Great Bear Lake and Great Slave Lake to the south are the two giant lakes of the Canadian Northwest: Great Bear is larger in area, further north (across the Arctic Circle), colder and almost uninhabited; Great Slave is deeper, with a city on its south shore. Versus the Great Lakes: the Great Lakes are in the temperate zone, densely populated and busy shipping lanes; Great Bear Lake is on the edge of the Arctic and close to a natural state.",
    concept:
      "Great Bear Lake shows that a \"large lake\" is not the same as a \"warm lake\" or a \"peopled lake\": it is among the ten largest in the world by area, but being high-latitude and deep it is frozen most of the year with very few people around. Its high water clarity is partly because there is almost no farming or industry in the watershed adding nutrients and silt.",
    history:
      "Great Bear Lake is the home of the Sahtú Dene (the \"Great Bear Lake people\"). In the 1930s a pitchblende deposit was found at Eldorado on the eastern shore, and for a time this was one of the few places in the world producing uranium and radium, the ore hauled out along a long water-and-land route; the associated health and environmental problems have received attention ever since. Today the lake area is mainly wilderness tourism and traditional fishing and hunting.",
  },

  "mackenzie-river": {
    seeing:
      "The Mackenzie River is the longest river in Canada. Measured from its farthest headwater, the Finlay, the whole system is about 4,200 km long. It flows out of Great Slave Lake, north-west through the subarctic forest and lowlands, and into the Beaufort Sea of the Arctic Ocean. Its lower reach is one of the largest Arctic deltas in North America, dense with tens of thousands of small lakes. The whole river is frozen for much of the year and is a winter \"ice road\" for the communities along it.",
    formation:
      "The Mackenzie runs in the structural lowland between the Rocky Mountains and the Canadian Shield, its direction set by that lowland. It strings together a chain of large glacial lakes (Great Bear, Great Slave and others act as its reservoirs). Carrying sediment from upstream, at its mouth — where the current slows sharply and sea ice and permafrost come into play — it has built a wide, extremely broken-up delta: the permafrost stops the channels cutting down, the arms keep shifting, and countless \"thermokarst\" lakes are left ringed by abandoned channels.",
    observation:
      "From the air the Mackenzie is a wide brown band winding through dark green conifer forest, with braided arms and sandbars. At the delta the river splits into a spider-web of channels, between them tens of thousands of round-edged lakes of every size — from above it looks like a waterlogged green sponge. The Beaufort Sea beyond the delta carries sea ice year round.",
    distinguish:
      "The Mackenzie, like Siberia's Ob and Lena, is a great river flowing to the Arctic Ocean: the headwaters thaw first in the warm season while the lower river is still frozen, so ice jams and spring floods form easily. Versus the Mississippi: the Mississippi flows south, its lower river warm, managed mostly for navigation; the Mackenzie flows north, frozen most of the year, and matters mostly as a lifeline for northern communities and an ecological corridor.",
    concept:
      "The Mackenzie shows the character of a \"north-flowing great river\": because the upper river thaws before the lower river, meltwater often runs into ice that has not yet broken up downstream, building ice jams and sudden floods. Its delta full of round lakes is a classic \"thermokarst\" landform on permafrost — local thawing of frozen ground, the surface subsiding and filling with water.",
    history:
      "The Mackenzie and its tributaries have long been the travel and subsistence artery of the Dene and the Inuvialuit. In 1789 Alexander Mackenzie, working for a rival of the Hudson's Bay Company, travelled down the river to the Arctic Ocean, and the river was later named for him (its Dene name means \"big river\"). In the 20th century oil and gas were found along the river, and the debate over whether to build a gas pipeline ran for decades, helping drive negotiations over Indigenous land rights in Canada.",
  },

  "hudson-bay": {
    seeing:
      "Hudson Bay is a huge inland sea reaching deep into Canada — larger than many countries, yet only a little over a hundred metres deep on average, so it is a very shallow sea. It sits in a depression in the centre of the Canadian Shield, connected to the Atlantic through Hudson Strait to the north, and is covered by sea ice for much of the year. It acts as a giant \"cold source\" that strongly affects the climate of the surrounding region.",
    formation:
      "There are several ideas about the origin of the Hudson Bay depression: part of it may be linked to a large meteorite impact about 3.9 billion years ago (the curved arc of coastline in the south-east may be a remnant of an impact structure), but more importantly the Shield here has sagged slowly and as a whole over a long time. In the last ice age the centre of the North American ice sheet sat over the Hudson Bay area, pressing the crust down by hundreds of metres; since the ice melted the crust has been rebounding fast, and the bay is slowly shrinking.",
    observation:
      "From the air Hudson Bay is a nearly circular pale expanse of water, covered with broken sea ice in winter and spring and only clearing by late summer. The south-eastern shore is a smooth great arc, and the bay holds some low flat islands (the Belcher Islands and others). All around is the extremely flat marshy lowland (the Hudson Bay Lowlands), with curved former shorelines running from the present coast tens of kilometres inland.",
    distinguish:
      "Hudson Bay and the Baltic Sea are both high-latitude, fairly shallow inland seas that freeze in winter and were pressed down by ice sheets and are now rebounding, by a similar mechanism. Versus the Great Lakes: Hudson Bay is salt water, connected to the ocean, and has tides; the Great Lakes are freshwater lakes. Versus the Caspian Sea: the Caspian is a fully enclosed internally drained salt \"sea\"; Hudson Bay is connected to the Atlantic through a strait.",
    concept:
      "Hudson Bay shows that \"sea\" versus \"bay\" is not simply about size: it is enormous, but because it is enclosed on three sides by land and joined to the ocean only by one strait, it is conventionally a \"bay\". It is also a key area for understanding post-glacial rebound — the thickest part of the North American ice sheet was here, so the land is rising fastest here now, and the bay floor keeps emerging as new land.",
    history:
      "The shores of Hudson Bay are where the Cree and the Inuit have lived for generations. In 1610 Henry Hudson's ship entered these waters (he was cast adrift in the bay by a mutiny the following year), and the bay is named for him. The Hudson's Bay Company, founded in 1670 with the whole drainage basin as its trading territory, ran fur-trade posts on the bay shore for over two centuries and was one of the most far-reaching commercial institutions in Canadian history.",
  },

  "baffin-island": {
    seeing:
      "Baffin Island is in the Canadian Arctic Archipelago in the north-east — Canada's largest island and the fifth largest in the world. Its eastern edge is a high mountain belt of hard Shield rock, with large ice caps, deep fjords and several granite cliff faces over a kilometre high (Mount Thor, well known to climbers, is here); the western half of the island is low, flat sedimentary platform. The capital, Iqaluit, is in the south-east.",
    formation:
      "The mountain belt of Baffin Island is the eastern edge of the Canadian Shield, raised and then repeatedly scoured by glaciers. Quaternary ice sheets cut hard down the old river valleys, shaping the mountains into horns and arêtes and hollowing the valleys into U-shapes cut below sea level to make fjords. The mountains still hold remnant ice such as the Barnes Ice Cap. The western lowland is unraised platform, covered by near-horizontal Palaeozoic rock.",
    observation:
      "From the air the east coast of Baffin Island is a high mountain belt in white and grey-black — ice caps, snowfields and bare black peaks — its coastline cut to pieces by long deep fjords. Inland and westward the mountains drop quickly to a rolling, lake-strewn brown tundra platform. The whole island is essentially treeless, tundra in summer and snow in winter.",
    distinguish:
      "Baffin Island and Ellesmere Island further north are both large Arctic Archipelago islands characterised by Shield mountains and ice caps; Ellesmere is further north, drier (a polar desert), and more ice-capped; Baffin is a bit lower in latitude with better-developed fjords and cliffs. Versus Greenland: Greenland's centre is a single huge ice sheet covering the whole island; Baffin Island has only scattered ice caps.",
    concept:
      "The big cliff faces of eastern Baffin Island show the power of glaciers to carve hard rock: a face like Mount Thor's — nearly vertical and over a kilometre high — is where a glacier removed one whole side of a rock body along its joints. A common misconception is to picture all Arctic islands as low, flat ice fields — the eastern edge of Baffin Island is genuinely rugged alpine country.",
    history:
      "Baffin Island is the home of the Inuit; the name comes from William Baffin, an English navigator who searched for the Northwest Passage nearby in the early 17th century. The area also has earlier Dorset and Thule culture sites. In 1999 the territory of Nunavut was created out of the Northwest Territories as a majority-Inuit self-governing region, with Iqaluit as its capital. Today the island's economy is traditional fishing and hunting, government, and a growing tourism sector.",
  },

  "ellesmere-island": {
    seeing:
      "Ellesmere Island is Canada's northernmost large island and the tenth largest in the world; its northern tip is the closest land to the North Pole apart from Greenland. It has the highest peak in eastern North America, Barbeau Peak (2,616 m), large ice caps, and Quttinirpaaq National Park. Precipitation is extremely low year-round — this is a \"polar desert\" — but it is so cold that the little snow that falls does not melt and builds up into ice over the years.",
    formation:
      "The mountains of northern Ellesmere Island (the Innuitian Mountains) are an ancient fold belt, connected to the mountains of northern Greenland; raised, then heavily reworked by glaciers. The centre and south have sedimentary platform and structural basins. The large ice caps, and the \"fjord glaciers\" that flow through passes right down into the fjords, are ice that has never fully disappeared since the last ice age. In recent years several large \"ice shelves\" (thick ice attached to the shore and floating on the sea) have broken up.",
    observation:
      "From the air Ellesmere Island is white, grey and black: continuous ice caps and snowfields, black bare ridges poking out of the ice, glacier tongues reaching into deep-blue fjords. Because it hardly ever snows, many slopes are dry, shattered bare rock (\"polar desert\"), a grey-brown colour. Sea ice offshore is present year-round. In summer there is 24-hour daylight, in winter 24-hour night.",
    distinguish:
      "Ellesmere Island and Baffin Island to the south are both large Arctic Archipelago islands: Ellesmere is further north, colder, drier, more ice-capped, and almost unpopulated; Baffin is a bit lower in latitude, with better-developed fjords and cliffs, and a capital city. Versus northern Greenland: their mountains are the two halves of the same fold belt, later separated by a strait.",
    concept:
      "Ellesmere Island shows that a \"desert\" is defined by precipitation, not temperature: annual precipitation here is about as low as parts of the Sahara, making it a true desert — just a cold one. A common misconception is that the polar regions are \"all ice everywhere\" — much of a polar desert is dry gravel and bare rock, and ice exists only where it can accumulate.",
    history:
      "Ellesmere Island has seasonal-camp sites of the Inuit and earlier Palaeo-Eskimo cultures; today there are only a very few outposts (Grise Fiord, an Inuit community, and Eureka, a weather and research station). In the early 20th century it was a jumping-off point for expeditions to the North Pole. Quttinirpaaq National Park (\"top of the world\") protects the far north of the island.",
  },

  "vancouver-island": {
    seeing:
      "Vancouver Island lies off the coast of British Columbia and is the largest island on the west coast of North America. A mountain spine runs the length of it, dividing it in two: the west coast faces the open Pacific, with fjords, heavy rain and tall temperate rainforest; the east coast is in the lee, gentler, drier and where most people live, with the provincial capital, Victoria, at the southern tip. The Strait of Georgia separates the island from the mainland.",
    formation:
      "Vancouver Island is an accreted terrane \"pasted\" onto the western edge of North America — it began as a volcanic island arc and submarine plateau in the ocean and was carried into North America by plate motion and shoved up. The island's mountains are made of volcanic and sedimentary rock, later carved by glaciers into horns, U-shaped valleys and the west-coast fjords. The lower ground on the eastern side is covered by glacial and marine loose sediment.",
    observation:
      "From the air Vancouver Island is a long island trending north-west to south-east, high in the middle and low on both sides. The west coast is extremely intricate, with fjords reaching into forested mountains and many small islands and reefs offshore; the east coast is far straighter, with towns, farmland and harbours visible. There is remnant snow and a few alpine lakes along the spine.",
    distinguish:
      "Vancouver Island faces the mainland Coast Mountains across the strait and looks similar (both have fjords and rainforest), but the Coast Mountains are an uplifted granite batholith, higher and more continuous; Vancouver Island is an accreted terrane and its mountains are lower. Versus the islands of Japan: both are islands near a subduction zone, but Japan's islands are dominated by active volcanoes and earthquakes, while Vancouver Island has no active volcanoes (though it is on a major earthquake zone).",
    concept:
      "Vancouver Island is an example for understanding \"terrane accretion\": the western edge of North America is not original — over the past 200 million years it has grown westward as island arcs and submarine plateaus drifted in from the Pacific and welded on, one after another, and Vancouver Island is one of the later additions. A common misconception is that a continental margin has always been where it is now — it has actually been \"growing\" seaward.",
    history:
      "Vancouver Island is home to the Nuu-chah-nulth, Kwakwaka'wakw and Coast Salish peoples, who built rich carving and seafaring cultures around cedar and marine resources. In the 18th century Spanish and British navigators (including George Vancouver) reached and surveyed the coast. Coal mining and logging grew along the east coast in the 19th century. Today the island's economy is forestry, fishing, tourism and the service sector around Victoria.",
  },

  "prince-edward-island": {
    seeing:
      "Prince Edward Island is a crescent-shaped, low, flat island in the Gulf of St. Lawrence, the smallest and most densely populated province of Canada. Its bedrock is red sandstone, so the soil, the cliffs and even some of the beaches are a distinct rust-red. There are no hills; the highest point is only a few tens of metres, and the surface is covered with farmland (especially potato fields) and small patches of woodland.",
    formation:
      "The red sandstone of Prince Edward Island was deposited about 300 million years ago in rivers and floodplains under a hot, dry climate, stained red by iron oxide, and then hardened. This rock is soft and easily eroded by waves and wind — the north shore has red-clay sea cliffs, and the eroded sand is carried by longshore currents into long spits and dunes that close off some bays into lagoons. Ice-age ice sheets planed the island's surface smooth, and after they retreated rising sea level separated the island from the mainland.",
    observation:
      "From the air Prince Edward Island is a long, thin green land cut into many small bays, its edges rimmed with a striking red — red-clay cliffs and red beaches. The north shore has a nearly continuous white-gold dune belt, with narrow blue lagoons on its inner side. Inland is a neat grid of fields, dark-red tilled ground alternating with green crops.",
    distinguish:
      "Prince Edward Island and its neighbours Nova Scotia and New Brunswick are all in the Appalachian geological region, but those two have hills and hard-rock coasts; Prince Edward Island is all soft red sandstone, extremely low and flat, its coast dominated by erosion and deposition landforms. Compared with the red-clay coasts of the Shandong Peninsula: a similar mechanism (soft rock + wave erosion + spits), but Prince Edward Island's red comes from the ancient red-bed sandstone itself.",
    concept:
      "Prince Edward Island shows how the colour and hardness of rock decide the look of a coast: the soft red sandstone gives both the colour and, because it erodes easily, a north shore that keeps retreating while building spits and dunes downdrift. A common misconception is that the red beaches are pollution or man-made — it is the natural result of iron oxide from the sandstone being ground up and mixed into the sand.",
    history:
      "Prince Edward Island is the traditional land of the Mi'kmaq, who call it \"Epekwitk\". French (Acadian) settlers arrived in the 18th century; it passed to Britain after 1763 and took its present name. In 1864 the conference to discuss uniting the British North American colonies was held at Charlottetown on the island, seen as one of the starting points of Canadian Confederation. Today the island's economy is potato farming, fishing (lobster, mussels) and tourism.",
  },

  "bay-of-fundy": {
    seeing:
      "The Bay of Fundy, between Nova Scotia and New Brunswick, is a long, narrow, funnel-shaped bay that gets shallower toward its head. It is known for having among the largest tides in the world — at the Minas Basin at the head of the bay, the water level can change by about 16 metres between low and high tide, the height of a five-storey building. At low tide broad red-brown mudflats are exposed; at high tide the same ground is deep water.",
    formation:
      "The funnel shape of the Bay of Fundy, combined with its length, happens to be close to the natural oscillation period of the tide in the North Atlantic, producing \"resonance\" — each tidal pulse is amplified, and rises higher toward the head of the bay. This is a classic case of tidal range magnified by shape. The bay's red cliffs are Triassic red sandstone and basalt; the Hopewell Rocks are stacks left where waves hollowed out the soft rock, leaving isolated pillars capped with vegetation.",
    observation:
      "From the air the same stretch of Fundy coast looks completely different at different times: at low tide, endless water-sheened red-brown mudflat with tidal creeks branching across it; at high tide, the mudflat is drowned and only the cliffs and rock pillars stand above the water. The water in the bay is turbid (strong tidal currents stir up sediment), and a clear scoured intertidal zone is visible on shore.",
    distinguish:
      "The large tides of the Bay of Fundy have the same cause as those of the Severn Estuary in Britain and the Bay of Saint-Malo in France — a funnel-shaped bay plus tidal resonance. Compared with an ordinary bay: most bays have a tidal range of a metre or two; the Bay of Fundy reaches a dozen or more metres, the result of shape \"focusing\" tidal energy. Tidal power generation has been tested here for this reason.",
    concept:
      "The Bay of Fundy shows that tidal range is not fixed: it depends on whether the shape and size of a bay is \"in tune\" with the tidal wave. A common misconception is that tidal range is set directly by the Moon and Sun — the bodies provide the basic tidal force, but the actual range at a given place is set mainly by how the local coast and seafloor amplify or damp the tidal wave.",
    history:
      "The shores of the Bay of Fundy are the traditional territory of the Mi'kmaq and the Wolastoqiyik (Maliseet). In the 17th century French (Acadian) settlers built dykes to reclaim the salt marshes along the bay, creating a distinctive farming landscape; in 1755 the British authorities carried out a mass deportation of the Acadians (the \"Grand Dérangement\"). Today the Bay of Fundy is known for its tides, whale watching, its fossil coast (Joggins Fossil Cliffs, a World Heritage site), and tidal-energy research.",
  },

  "gaspe-peninsula": {
    seeing:
      "The Gaspé Peninsula is a piece of land at the eastern end of Quebec reaching into the Gulf of St. Lawrence, the northernmost stretch of the Appalachian Mountains on the North American mainland. Its interior is the Chic-Choc Mountains (among the highest parts of the Appalachians in Canada), with a rare patch of alpine tundra above the tree line and caribou in summer. At the tip of the peninsula is the landmark Percé Rock — a single block of limestone with a natural arch, standing in the sea.",
    formation:
      "The rock of the Gaspé Peninsula is folded and thrust-faulted layers squeezed up in the Appalachian orogeny (a series of continental collisions between about 500 and 300 million years ago), mostly marine limestone, sandstone and shale, rich in Palaeozoic fossils (the fish fossils of Miguasha are a World Heritage site). The mountains were then long eroded to a middle-height range, and Quaternary glaciers rounded and steepened the valleys and coast. Percé Rock is what is left where waves cut through a limestone ridge section by section along its joints.",
    observation:
      "From the air the Gaspé Peninsula is a forested, valley-cut range of middle height, dropping eastward toward the sea. The north coast is a straight, steep cliff coast, with the highway hugging the base of the cliffs; the south and east coasts are more intricate, with spits (such as the Barachois de Malbaie) and sea-erosion landforms like Percé Rock. The highest summits of the Chic-Chocs are pale, treeless tundra.",
    distinguish:
      "The Gaspé Peninsula, Nova Scotia and Newfoundland's Long Range Mountains are different stretches of the Appalachians in Canada. Gaspé is characterised by folded-and-thrust sedimentary mountains, fossils and Percé Rock; the Long Range by exposed mantle rock and fjord lakes. Compared with the main body of the U.S. Appalachians: Gaspé is further north, more reworked by glaciers, and has alpine tundra.",
    concept:
      "The Gaspé Peninsula (especially Miguasha) is important because its Devonian rock preserves many fossils from the transition \"from fish toward four-limbed animals\" — a key step in vertebrates moving from water onto land. A common misconception is to take the arch of Percé Rock for something carved by people: it was cut naturally by waves along cracks in the rock, and one day the arch will collapse.",
    history:
      "The Gaspé Peninsula is the traditional land of the Mi'kmaq; the word \"Gaspé\" comes from the Mi'kmaq language and means \"land's end\". In 1534 Jacques Cartier raised a cross at Gaspé Bay claiming the land for the King of France, usually taken as the start of French colonisation in North America. From the 18th to the 20th century the peninsula's coast lived by cod fishing and processing. Today its tourism centres on Forillon National Park, Percé, and the scenic road around the peninsula.",
  },

  "niagara-escarpment": {
    seeing:
      "The Niagara Escarpment is a continuous slope about 725 km long, running from around Niagara on the U.S.–Canada border, curving north-west across southern Ontario, out to the Bruce Peninsula and Manitoulin Island in Lake Huron. It has a gentle slope on one side and a cliff tens to over a hundred metres high on the other — a classic \"cuesta\". Niagara Falls is where the Niagara River drops over this escarpment.",
    formation:
      "The Niagara Escarpment is the result of differential erosion of a set of Palaeozoic rock layers that dip gently inland: the top layer is hard dolostone \"cap rock\", underlain by softer shale. The soft rock erodes and retreats faster, the hard cap rock loses support and falls away in blocks, so the cliff stays vertical and slowly retreats inland as a whole. The lip of Niagara Falls is \"eating\" its way upstream at less than a metre a year.",
    observation:
      "From the air the Niagara Escarpment is a clear curved \"step\" in the flat farmland and lake shores of southern Ontario — tableland and woodland on the top side, lowland, orchards (the vineyards of the Niagara Peninsula) and towns on the base side. At the Bruce Peninsula the escarpment forms the peninsula's east coast directly, a white cliff plunging into Georgian Bay, with very pale blue-green water at its foot.",
    distinguish:
      "The Niagara Escarpment has the same origin as many \"cuestas\" in North America — an asymmetric slope eroded out of gently dipping hard rock; the U.S. Midwest has several parallel cuestas. Versus a fault scarp (such as the eastern face of the Sierra Nevada): a fault scarp forms directly from a block moving along a fault; the Niagara Escarpment has no major fault and is purely differential erosion plus cap-rock retreat.",
    concept:
      "The Niagara Escarpment is a living sample of \"cap-rock-controlled cliff retreat\", and Niagara Falls is one point where the process is happening now. A common misconception is that the falls' position is fixed — it is continuously retreating upstream, and in a few thousand years it will reach Lake Erie, at which point the falls will disappear. The escarpment is a UNESCO Biosphere Reserve, because its cliff strip preserves old-growth forest that has vanished from the surrounding plain.",
    history:
      "Along the Niagara Escarpment is the land of the Neutral, Huron, Anishinaabe and other Native nations, and the gaps between the top and base of the escarpment were old travel routes. In the 19th century people used the falls and other drops on the escarpment for mills and early hydroelectric plants — Niagara was one of the first places in North America to develop hydropower on a large scale. Today the roughly 900 km Bruce Trail follows the escarpment, the longest continuous trail in Canada.",
  },

  "alberta-badlands": {
    seeing:
      "The Alberta Badlands are a stretch of eroded, gullied, barely vegetated \"bad land\" on the Canadian prairie, mainly along the Red Deer River and its tributaries, with Drumheller and Dinosaur Provincial Park at its core. Where the flat prairie surface is cut open, it exposes banded grey, brown and white rock walls, pointed \"hoodoos\", and bare rounded knolls. This is one of the richest sources of dinosaur fossils in the world.",
    formation:
      "The rock of the Alberta Badlands was laid down about 70 million years ago in Late Cretaceous rivers, deltas and coasts — mudstone, sandstone and coal seams, with the bones of the dinosaurs, turtles and crocodiles of the time buried in it. At the end of the ice age, glacial meltwater cut hard down a few channels, carving deep valleys into the flat prairie; the semi-arid climate and sparse vegetation since then have let rain and snowmelt keep scouring the exposed soft rock into gullies, ridges and hoodoos, and keep exposing fresh fossils.",
    observation:
      "From the air the Alberta Badlands are a set of brown-grey \"scars\" suddenly cut into an endless green-gold plain — on both sides of a winding river valley are dense erosion gullies, striped rock walls and clusters of pointed hoodoos. On the valley floor is a meandering river and a thin oasis-like strip of poplar woodland. Driving across the prairie, you often don't see this hidden world until you reach the edge.",
    distinguish:
      "The Alberta Badlands and the U.S. Badlands National Park (South Dakota), and China's Yuanmou earth forest, form by a similar process — soft sedimentary rock intensely eroded by rain in a semi-arid climate with little plant cover. The main difference is the age and content of the rock: the Alberta Badlands' Cretaceous layers are known for dinosaur fossils; the Yuanmou forest is younger river-and-lake sediment. Versus the Grand Canyon: the Grand Canyon is one big river cutting deep into hard rock; the badlands are large areas of soft rock cut to pieces by sheet and gully erosion.",
    concept:
      "\"Badlands\" is a landform term for dense gully terrain eroded by water in soft sedimentary rock without protective vegetation — the name comes from early travellers finding such ground \"hard to cross and useless\". A common misconception is to take a hoodoo for a carved sculpture: it is a natural pillar left where a harder rock on top protects the soft rock beneath while everything around washes away.",
    history:
      "This area is the territory of the Blackfoot Confederacy and other prairie Native nations. In the late 19th century, geological surveys and railway building turned up large numbers of dinosaur bones, followed by fossil excavation that continues today — many dinosaur skeletons in museums around the world came from here. Coal was also mined around Drumheller in the early 20th century. Today Dinosaur Provincial Park (a World Heritage site) and the Royal Tyrrell Museum of Palaeontology are the focus.",
  },

  "manicouagan-reservoir": {
    seeing:
      "Manicouagan Reservoir is in central Quebec — from the air or from orbit it is a nearly perfect ring-shaped lake, about 70 km across, with a large round island (René-Levasseur Island) in the middle, which is why it is called the \"Eye of Quebec\". It is the structure left by a huge meteorite impact about 214 million years ago; a later reservoir dam raised the water level and flooded the ring of low ground into this circle of lake.",
    formation:
      "About 214 million years ago, an asteroid roughly 5 km across struck here, blasting out a crater about 100 km wide. The heat and pressure of the impact melted rock and made the crater floor \"rebound\" upward into a central high. Hundreds of millions of years of erosion since (especially Quaternary glaciers) have planed the crater down a great deal, leaving only a ring of lower, softer rock in the impact structure. When a dam was built in the 1970s, the water collected in this ring of low ground and the central high became an island.",
    observation:
      "From the air Manicouagan is, among the countless irregular lakes of the Canadian Shield, one abrupt, smooth-edged circle — a ring of blue water in dark forest, with a large dark landmass (the island) in the middle. The ring is so large you have to zoom out to see all of it. The other lakes of the surrounding Shield are chaotic in shape, in sharp contrast with this circle.",
    distinguish:
      "Manicouagan, like other large impact structures on Earth (Vredefort in South Africa, the Chesapeake Bay crater in the U.S.), can only be recognised as a \"ring structure\" and not as an actual crater, because of its great age and heavy erosion. Versus a crater lake: a crater lake is water in a round pit made by a volcanic eruption or collapse; Manicouagan is a ring lake made by impact plus erosion plus an artificial reservoir.",
    concept:
      "Manicouagan shows that ancient meteorite craters mostly do not look like \"craters\" at the surface — hundreds of millions of years of erosion strips away the crater rim and floor, leaving only the deformed rock underneath (an \"impact structure\") and a ring of landform difference. Its perfect circle appears only because the reservoir water happens to flood the ring of low ground and the central uplift stands as an island — a coincidence of natural structure and human engineering.",
    history:
      "The Manicouagan area is the traditional land of the Quebec Innu. The chain of hydroelectric stations on the Manicouagan River (especially Daniel-Johnson Dam, a huge multiple-arch dam) is an important part of Quebec's hydropower system, and building it in the 1970s created today's reservoir. The impact crater itself was confirmed by geologists in the 1960s, and has since been an important site for studying impact structures and dating (it is often used to mark an end-Triassic extinction event).",
  },

  "athabasca-sand-dunes": {
    seeing:
      "The Athabasca Sand Dunes are on the south shore of Lake Athabasca in northern Saskatchewan — a belt of active dunes about 100 km long, and the highest-latitude large active dune field in the world (about 59°N). All around is boreal conifer forest and Shield rock, and in the middle is a field of moving sand hills, some up to 30 m high, with unusual \"gushing sand\" features and several plant species found nowhere else.",
    formation:
      "The sand comes from the last ice age. A large lake at the front of the ice sheet (glacial Lake Athabasca) accumulated a great deal of fine sand; when the ice retreated and the lake level dropped, the sand was exposed and then carried and piled into dunes by strong winds blowing off the lake. The dunes are still slowly moving south-east under the wind, burying the forest at their edge a little at a time. Being remote and roadless, the dune field is essentially in a natural state.",
    observation:
      "From the air the Athabasca Sand Dunes are a striking pale-yellow band between dark-green forest and blue lake — crescent and transverse dunes lined up along the prevailing wind, a gentle windward slope and a steep lee slope. Between the dunes are half-buried conifers and small streams and wetlands where groundwater emerges. Along the north edge the sand runs straight into Lake Athabasca, forming beaches and spits.",
    distinguish:
      "The dune forms of the Athabasca Sand Dunes are similar to those of most great deserts (the Sahara, the Taklamakan), but the origin and setting are entirely different: those are the product of long wind erosion and deposition in a dry climate; the Athabasca dunes are a \"periglacial aeolian\" landform of glacial-lake sediment reworked by wind, sitting in a humid forest belt, sustained by limited but steady wind plus the fact that no vegetation can take root on moving sand.",
    concept:
      "The Athabasca Sand Dunes show that \"desert landform\" is not the same as \"desert climate\": there is plenty of rain here and forest all around, yet because there is abundant loose sand to move and a steady wind, classic active dunes form. A common misconception is that seeing dunes means the local area is extremely dry — judging a dune means looking at \"sand supply plus wind\", not necessarily at rainfall.",
    history:
      "This area is the traditional land of the Denesuline (Chipewyan), who hunt and fish along Lake Athabasca. Being remote, the dunes were not systematically studied until the 20th century, and in 1992 they were made a provincial park (reached only by floatplane or boat). They are a point of botanical interest for their endemic plants (such as Athabasca campion).",
  },

  "lake-winnipeg": {
    seeing:
      "Lake Winnipeg is in central Manitoba, a lake that is very large in area but very shallow (average depth only about 12 m). It is long and narrow north–south, pinched in the middle by a narrows into a north and a south basin. It is the remnant of a much larger ice-age lake, glacial Lake Agassiz. Today its water finally reaches Hudson Bay by way of the Nelson River.",
    formation:
      "At the end of the last ice age, meltwater at the south-western edge of the North American ice sheet was dammed by ice and ponded up across what is now Manitoba, Minnesota and North Dakota into \"glacial Lake Agassiz\", larger in area than all today's Great Lakes combined. The ice dam burst and released water many times, and the lake level rose and fell repeatedly. About 8,000 to 9,000 years ago the ice finally retreated and the land rebounded, Lake Agassiz drained, and only a few lowest spots kept remnant lakes — Lake Winnipeg, Lake Manitoba, Lake Winnipegosis. The thick lake clay on the lakebed and the surrounding plain is what Lake Agassiz left behind.",
    observation:
      "From the air Lake Winnipeg is a north–south, relatively straight-edged sheet of pale blue water, with the rock and forest of the Canadian Shield on the east shore (an intricate shoreline with many small islands and rock points) and the flat farming plain on the west shore (a straight shoreline with beaches and lagoons). The lake is so shallow that a strong wind stirs up the bottom sediment, and from the air it is often a turbid yellow-green.",
    distinguish:
      "Lake Winnipeg, Great Slave Lake and Great Bear Lake are all large Canadian lakes, but the latter two are deep and cold and in the Shield; Lake Winnipeg is extremely shallow, warmer, straddling the boundary between the Shield and the plain, surrounded by farmland. Versus the Great Lakes: Lake Winnipeg is the remnant of Lake Agassiz, the Great Lakes are basins gouged directly by glaciers — both connected to glaciation, by different mechanisms; Lake Winnipeg is far shallower.",
    concept:
      "Lake Winnipeg reminds us that many large lakes we see today are just a small remnant of a bigger ice-age water body that \"shrank\". To identify such a remnant lake, look for a wide area of flat lake clay and rings of former shorelines on the surrounding plain — Lake Agassiz's old shorelines are still clearly visible on the Manitoba plain. Lake Winnipeg's shallowness is one reason its water quality is especially sensitive to nutrient input from farming in the watershed.",
    history:
      "The Lake Winnipeg area is home to the Anishinaabe, Cree, Dakota and Métis, and the lake and connecting rivers were a north–south travel artery. In the 18th and 19th centuries the fur trade's \"York boats\" ran this water route between the prairies and Hudson Bay. In the 20th century hydro development on the Nelson River regulated the lake's outflow. Today the lake area has commercial fishing and resorts, and has long faced problems with blue-green algae blooms.",
  },

  nahanni: {
    seeing:
      "The South Nahanni River flows out of the Mackenzie Mountains in the Northwest Territories, cutting straight across several mountain ranges and carving a series of canyons over a kilometre deep. On the river is Virginia Falls (Náįlįcho in the local Dene language), about 96 m high — twice the height of Niagara Falls. The area also has limestone caves, hot springs and nodular \"karst towers\". Nahanni National Park Reserve became one of the first four natural World Heritage sites in the world in 1978.",
    formation:
      "The canyons of the South Nahanni have an unusual feature: the river existed and followed its course before the mountains rose; the ranges then rose slowly along faults, and the river held its line by cutting down hard, sawing straight through the rising mountains to make canyons that cross the ridges (an \"antecedent river\"). The cut layers are visible on the canyon walls. The karst comes from soluble limestone exposed in the area.",
    observation:
      "From the air the South Nahanni is a deeply incised meandering river in forested mountains — the valley is narrow and deep, and the river swings back and forth strongly on its floor (\"incised meanders\", meaning it kept its bends while cutting down through slow uplift). At Virginia Falls the river is split into two streams by a rock pillar as it drops into a deep pool, and immediately downstream enters the deepest canyon (\"Fourth Canyon\").",
    distinguish:
      "The Nahanni canyons and the Grand Canyon in the U.S. are both cut by a big river, but the Grand Canyon is a river cutting into a plateau of little-deformed flat layers; the Nahanni is an antecedent river cutting straight through folded mountains as they rise, so its canyon walls are tilted and folded, and the valley keeps its incised meanders. Compared with the Yangtze Three Gorges: the Three Gorges is also a river cutting across a mountain belt, by a similar mechanism, but wider and with far more water.",
    concept:
      "The South Nahanni is a classic case of an \"antecedent river\": to tell whether a river predates the mountains, see whether it cuts \"unreasonably\" straight through a range rather than going around it — if a river can cut through a ridge that is rising, it usually means its rate of down-cutting kept pace with the uplift, and its course was set before the mountains rose.",
    history:
      "The Nahanni watershed is the traditional land of the Dene Nahʔą people, and \"Nahanni\" comes from their name for themselves. In the early 20th century, several mysterious disappearances and deaths of gold prospectors in the valley gave the area legends like \"Headless Valley\" and drew explorers. In 1976, at the urging of Indigenous people, the national park reserve was created, and it was inscribed as a World Heritage site in 1978; in 2009 the park was greatly enlarged to protect the whole upper South Nahanni watershed.",
  },

  // ============ Asia · Japan ============
  "mount-fuji": {
    seeing:
      "Mount Fuji is the highest mountain in Japan, 3,776 m, in the centre of Honshu about 100 km from Tokyo. It is a near-perfect cone-shaped active volcano, standing alone above the lowlands and lakes around it and visible from far away. It has a high place in Japanese culture, religion and art, and in 2013 was inscribed as a World Heritage cultural site as an \"object of worship and wellspring of art\".",
    formation:
      "Mount Fuji is a stratovolcano: over roughly the past 100,000 years, successive layers of basalt-to-andesite lava and pyroclastic material have piled up into today's cone, which actually sits on top of several older volcanoes. Its most recent eruption was the Hōei eruption of 1707, which blasted a crater still visible on the south-eastern flank and dropped ash as far as Edo (now Tokyo). The Japan Meteorological Agency lists it as an active volcano under continuous monitoring.",
    observation:
      "From the air Mount Fuji is an isolated, symmetrical cone rising from low ground, with a crater about 700 m across at the summit. For the colder half of the year the upper mountain is snow-covered; below the snowline are dark forest and the brown scar of the 1707 crater. Five lakes (the Fuji Five Lakes) are strung along the northern foot, formed where lava flows dammed river valleys. The mountain sends no ridge in any direction — exactly the difference between a single volcano and a mountain range.",
    distinguish:
      "Mount Fuji, like Kilimanjaro and Mayon, is an isolated, symmetrical stratovolcano cone built by repeated eruptions, and so belongs to no mountain range. It is unlike the Japanese Alps: the Alps are a continuous range raised by crustal compression and carved by glaciers, with many peaks and ridges; Mount Fuji is one mountain and one crater.",
    concept:
      "Mount Fuji shows that the \"highest mountain\" need not be in a range — a well-placed volcano with enough eruptions can stand higher than the squeezed-up ranges around it. A common misconception is that it is extinct: it has simply not erupted for a long time and is still an active volcano in a quiet interval. Its symmetrical cone is well preserved because its main building phase is relatively young and not yet destroyed by erosion.",
    history:
      "Mount Fuji has long been an object of mountain worship, with a shrine at the summit and, historically, large-scale pilgrimage climbs (the \"Fuji-kō\"). It was painted again and again in ukiyo-e prints such as Hokusai's \"Thirty-six Views of Mount Fuji\" and became one of Japan's visual symbols. Today a summer climbing season of about two months draws many climbers, and the foot of the mountain is an important tourism and resort area.",
  },

  "japanese-alps": {
    seeing:
      "The Japanese Alps is the collective name for the Hida, Kiso and Akaishi ranges — three roughly parallel ranges in central Honshu that hold most of Japan's peaks over 3,000 m. The highest, Mount Kita, is 3,193 m, the second-highest mountain in Japan. This is the most rugged, sharp-crested part of Japan, where its glacial landforms are best preserved and where mountaineering is most developed.",
    formation:
      "The uplift of the Japanese Alps is quite young — mainly in the past one to two million years, the result of the Pacific and Philippine Sea plates pressing Honshu from the east and south, strongly shortening and raising the crust; it is still rising fast and is seismically active. During the ice ages, valley glaciers formed on the higher ground, carving the summits into cirques and arêtes; today a few very small modern glaciers survive in shaded spots in the Hida range.",
    observation:
      "From the air the Japanese Alps are a belt of high mountains cut by deep valleys and lined with continuous ridges, standing well above the surrounding hills and plains. The crest line is around 3,000 m and carries deep snow for the colder half of the year. Cirques (semicircular hollows below the summits) and arêtes can be picked out. Kamikōchi in the Northern Alps is a broad valley enclosed by high peaks, with the Azusa River on its floor.",
    distinguish:
      "The Japanese Alps and Mount Fuji are often mentioned together but are entirely different: the Alps are a continuous fold-and-fault range raised by plate compression and carved by glaciers, with dozens of high peaks; Mount Fuji is a single volcanic cone. Versus the European Alps: the name was borrowed by foreigners in the 19th century, and both are rugged with glacial landforms, but the European Alps are far larger with far more modern glaciers.",
    concept:
      "The Japanese Alps show that even at a modest latitude, if mountains are high enough, glaciers form in the ice ages and leave glacial landforms. A common misconception is that Japan has no glaciers: the Northern Alps do have a few confirmed modern glaciers, just very small ones. The \"Alps\" name is an analogy and does not imply a geological connection to the European Alps.",
    history:
      "This mountain country was thinly peopled and regarded as a realm of the gods. In the late 19th century the Englishman William Gowland and the missionary Walter Weston brought European-style mountaineering here and spread the name \"Japanese Alps\"; Weston is called the \"father of modern mountaineering in Japan\". Today the Chūbu-Sangaku National Park covers most of the area, and the Kamikōchi and Tateyama–Kurobe routes are important mountain-tourism destinations.",
  },

  "mount-aso": {
    seeing:
      "Mount Aso is in central Kyushu — one of the largest calderas in the world. A ring of surrounding mountains (the outer rim) encloses a basin about 25 km north–south and 18 km east–west, home to some 50,000 people, planted with rice, and crossed by a railway. In the middle of the basin is a group of still-active volcanoes (Nakadake and others) that steam constantly and erupt on a small scale from time to time.",
    formation:
      "This huge caldera was made by four giant eruptions between about 270,000 and 90,000 years ago: each poured out a great volume of magma, and the ground above the emptied magma chamber collapsed. The largest of the four (about 90,000 years ago) covered all of Kyushu in ash and blew it as far as Honshu and even the Korean Peninsula. After the collapse, a new group of central volcanoes grew inside the caldera, and Nakadake's crater is still active.",
    observation:
      "From the air Mount Aso is a complete ring of mountains, enclosing a large flat lowland covered in fields and roads (the caldera floor), with a group of black volcanic cones rising from its centre, one of them steaming white. The outer rim is cut on its outer side by radiating valleys. There is a gap in the west of the rim, through which the Shira River flows out.",
    distinguish:
      "Mount Aso, like Yellowstone in the U.S. and Toba in Indonesia, is a caldera formed by collapse after a giant eruption, far larger than an ordinary volcanic crater. It is the opposite of a stratovolcano like Mount Fuji: Fuji is \"built up\", Aso \"collapsed into a pit\". To tell whether a volcano is a caldera, see whether it is a ring-shaped depression much larger than the volcano itself.",
    concept:
      "Mount Aso shows the difference between a \"caldera\" and a \"crater\" as directly as anywhere: a crater is the vent of an eruption, usually a few hundred metres across; a caldera is a depression formed when the ground collapses over an emptied magma chamber, and can be tens of kilometres across, with room for people and farms inside. A common misconception is to treat the whole of Mount Aso as one big crater — that is the collapse basin; the actual eruptive vents are on the central volcanoes.",
    history:
      "The Aso area has had volcano worship since ancient times, and Aso Shrine is an important local shrine. The flat land of the caldera floor was cleared for farming early, and the grasslands of the outer rim have a thousand-year tradition of grazing, maintained by regular burning. Today Aso is the core of Aso-Kujū National Park and a UNESCO Global Geopark, and Nakadake's crater can be visited up close during quiet periods.",
  },

  sakurajima: {
    seeing:
      "Sakurajima is in Kagoshima Bay at the southern tip of Kyushu, directly across from the city of Kagoshima — one of the most active volcanoes in Japan. It erupts on a small scale nearly year-round, and ash often falls on the city, where clearing and coping with ash is routine. It was once an island; a large eruption in 1914 poured out lava that joined it to the Ōsumi Peninsula to the east, so it is no longer truly an \"island\".",
    formation:
      "Sakurajima is a stratovolcano that has grown on the southern rim of the Aira caldera. The Aira caldera itself formed by collapse after a giant eruption about 29,000 years ago, and the northern half of Kagoshima Bay today is that caldera. Magma activity then concentrated on the caldera's southern rim and built Sakurajima. It has two main peaks, Kitadake and Minamidake; the currently active one is Minamidake and its crater.",
    observation:
      "From the air Sakurajima is a black volcano reaching into a long narrow bay, with one or two summit craters steaming, and dark tongue-shaped scars of nearly bare rock down its slopes from the 1914 and later lava flows. The 1914 lava completely filled the strait, a few hundred metres wide, between the island and the peninsula, and that stretch is now land. On the far side of the bay is the built-up area of Kagoshima, only a few kilometres away.",
    distinguish:
      "Sakurajima resembles Stromboli in Italy — an active volcano that erupts frequently on a small scale, so eruptions can be watched almost on schedule. It differs from Mount Fuji in its state of activity: Fuji has not erupted for over three hundred years, while Sakurajima erupts almost daily. Sitting on the rim of the Aira caldera, it is also like the central volcanoes of Aso — a new volcano growing on or in a large caldera after it collapsed.",
    concept:
      "Sakurajima shows that an active volcano and a city can coexist for the long term: a volcano erupting constantly right next to a city of several hundred thousand people is managed with dense monitoring, warnings, and everyday preparation (designated shelters, ash helmets for children). A common misconception is that \"active volcano\" means constant disaster — most of the time it is just steady low-level activity, and what has to be guarded against is the occasional large eruption.",
    history:
      "Kagoshima (formerly Satsuma), where Sakurajima sits, was historically the centre of the Satsuma domain. The 1914 eruption (the \"Taishō eruption\") was the largest volcanic eruption in Japan in the 20th century, killing dozens, forcing the whole island to evacuate, and leaving relics such as the \"Kurokami buried torii\", a shrine gate buried in ash to its top. Today Sakurajima is a symbol and main attraction of Kagoshima, and residents live normally with the volcano's routine activity.",
  },

  "mount-unzen": {
    seeing:
      "Mount Unzen is a group of active volcanoes on the Shimabara Peninsula in Kyushu. From 1990 to 1995 it went through a sustained eruption: the vent extruded viscous lava that piled up into a new lava dome, named \"Heisei-shinzan\", now the highest point in Nagasaki Prefecture (1,483 m). The eruption repeatedly produced pyroclastic flows (hot gas carrying debris rushing downslope at high speed); one in 1991 killed 43 people, including several volcanologists and journalists who were observing.",
    formation:
      "Mount Unzen sits in a graben (the Shimabara graben) that is being pulled apart and dropping, and magma rises along the graben's faults. Its magma is highly viscous and does not release its gas easily, so it erupts by slowly \"squeezing out\" lava into a dome rather than by violent jetting. When the dome grows too steep and tall, its edges collapse, and the hot fragments and gas mix into a pyroclastic flow that rushes down the valleys.",
    observation:
      "From the air Mount Unzen is a group of forested mountains in the middle of the Shimabara Peninsula, the most conspicuous being Heisei-shinzan — a grey, jagged, nearly bare new rock mass still giving off a little steam. From Heisei-shinzan a clear channel runs east (toward Shimabara city and the Ariake Sea), swept by the 1991 pyroclastic flows, filled with pyroclastic debris with vegetation still recovering. The peninsula has many hot springs.",
    distinguish:
      "Mount Unzen, like Mont Pelée in the Caribbean and Mount St. Helens in the U.S., is a volcano known for pyroclastic flows — in common, its magma is viscous, tends to build a dome, and dome collapse produces deadly high-speed hot flows. It differs from Sakurajima: Sakurajima has frequent small explosive eruptions (throwing ash and rock), while Unzen has intermittent \"dome-building plus pyroclastic flows\".",
    concept:
      "Mount Unzen (especially the 1991 event) is a key case for understanding the danger of \"pyroclastic flows\": this hot flow moves along the ground at high speed and cannot be outrun, one of the deadliest volcanic phenomena, and it often strikes suddenly during a seemingly quiet \"lava-squeezing\" phase. A common misconception is that standing upstream of a lava flow, or to the side, is safe — a pyroclastic flow can suddenly change direction and top topographic obstacles.",
    history:
      "Unzen has been known for its hot springs since ancient times, and Unzen Onsen was one of the earlier hot-spring resorts developed in Japan; in 1934 the area became one of Japan's first national parks. In 1792 volcanic activity at Unzen triggered a huge landslide of Mount Mayuyama, whose debris rushed into the Ariake Sea and caused a tsunami, killing about 15,000 people — the deadliest volcanic disaster in Japanese history. After the 1990s eruption a dedicated disaster memorial hall and monitoring system were established.",
  },

  "hakone-caldera": {
    seeing:
      "Hakone is east of Mount Fuji, about 80 km from Tokyo — a multiple-caldera volcano. A ring of outer mountains encloses a central cone and a caldera lake, Lake Ashi. Geothermal activity is still lively, with sulphurous steam venting from the slopes around Ōwakudani. Being close to the capital, and having hot springs, mountains and a lake, Hakone is one of the best-known resort areas in Japan.",
    formation:
      "Volcanic activity at Hakone goes back a few hundred thousand years. It has been through several eruptions and collapses, forming two nested calderas, a larger and a smaller. About 3,000 years ago an explosion caused the central Mount Kamiyama to collapse, and the debris dammed the river draining the caldera, ponding up Lake Ashi. Today's geothermal activity and steam venting are residual magmatic heat warming groundwater.",
    observation:
      "From the air Hakone is a ring of undulating mountains, enclosing forested hills and a central cone, with the long narrow Lake Ashi on the cone's south-west side. On the north slope of Mount Kamiyama is a grey-white, plant-free slope giving off white steam — Ōwakudani. There is a gap in the west of the caldera rim, from which the Haya River flows out east into Sagami Bay.",
    distinguish:
      "Hakone, Mount Fuji to its west, and the Izu Islands to its south-east are all on the same volcanic belt, but Fuji is a single stratovolcano (built up) and Hakone is a caldera volcano (collapse plus a central cone). Versus Aso: both are calderas, but Aso's is far larger, with tens of thousands of people living on its floor; Hakone's is smaller and centred on a lake and hot springs.",
    concept:
      "Hakone shows that a caldera need not be empty wasteland — a moderately sized caldera with stable geothermal activity can be heavily developed because of its hot springs, flat land and scenery. A common misconception is to read the steam venting at Ōwakudani as a sign of an imminent eruption: steady geothermal venting is normal for this kind of volcano; Ōwakudani was briefly closed in 2015 when activity increased, but monitoring showed it did not reach eruptive levels.",
    history:
      "In the Edo period Hakone was an important checkpoint on the Tōkaidō highway (the Hakone Sekisho), controlling traffic in and out of Edo, with strict inspections. After railways and roads were built in the late 19th century, Hakone used its hot springs and closeness to Tokyo to become a resort favoured by the imperial family and writers. Today it has a classic sightseeing loop of mountain railway, cable car and lake boat, and several art museums.",
  },

  daisetsuzan: {
    seeing:
      "Daisetsuzan is a group of volcanoes in central Hokkaido, including Hokkaido's highest peak, Asahidake (2,291 m). Although not especially high by Japanese standards, the high latitude and cold climate make its environment equivalent to alpine country above 3,000 m further south — the mountains carry large areas of alpine tundra, permafrost and patterned ground, and snowfields and alpine flower meadows survive into July. It is Japan's largest national park.",
    formation:
      "Daisetsuzan is a volcanic group built by overlapping Quaternary volcanic activity, with a caldera about 2 km across (Ohachidaira) in the centre, ringed by cones such as Asahidake. There are active fumaroles on the western slope of Asahidake. Glaciers formed here during the ice ages, and with present-day freeze–thaw action, the flat summit plateaus have developed \"patterned ground\" such as stone circles and stone stripes — rare elsewhere in Japan.",
    observation:
      "From the air Daisetsuzan is a rounded, open highland in central Hokkaido, with generally gentle summits (a volcanic-plateau trait) and the shallow saucer outline of the central caldera. White fumaroles show on one side of Asahidake. In the warmer half of the year the summits are patchy tundra and snow, the mid-slopes dense conifer forest that turns colour earliest in autumn. In winter this is one of the mountain areas in Japan with the earliest and longest snow.",
    distinguish:
      "Daisetsuzan and the Japanese Alps are both high mountains of Japan, but the Alps are a fold-and-fault range raised by plate compression, dominated by rock peaks and steep valleys; Daisetsuzan is a volcanic group with gentle summits, dominated by volcanic plateau and alpine tundra. Its alpine environment is closer to the mountains of Siberia or northern Europe than to the mountains of central Honshu.",
    concept:
      "Daisetsuzan shows that an \"alpine environment\" is set not only by elevation but also by latitude: in Hokkaido, a height of just over 2,000 m produces the permafrost, patterned ground and tundra that on Honshu require over 3,000 m. A common misconception is that tundra and permafrost occur only in the polar regions and the Himalaya — given enough cold, mid-latitude mountains of modest height have them too.",
    history:
      "The Daisetsuzan area is the traditional land of the Ainu, who call it \"Kamuy Mintar\", the \"playground of the gods\". This mountain country was long little visited, and became a national park in 1934. Today a cable car runs partway up Asahidake, and it is an important destination for alpine ecotourism and skiing in Japan; the core area remains fairly pristine, and winter travel carries avalanche and cold risk.",
  },

  "kii-mountains": {
    seeing:
      "The Kii Mountains occupy the interior of the Kii Peninsula, the large peninsula at the southern end of Honshu — a steep, rainy, densely forested range of middle height, its highest point Hakkyōgatake at 1,915 m. Facing the Pacific, it is one of the wettest parts of Honshu, with local annual rainfall over 4,000 mm. It has long been regarded as a sacred place of religious training, and the Kumano Sanzan, Kōyasan and Yoshino shrines and temples, and the \"Kumano Kodō\" pilgrimage routes linking them, are inscribed as a World Heritage cultural landscape.",
    formation:
      "The rock of the Kii Mountains is mostly uplifted marine sediment plus some granitic rock. It lies south of a major fault (the Median Tectonic Line), in the \"outer zone\" accretionary wedge — built where a subducting oceanic plate scraped seafloor sediment off, layer by layer, onto the continental margin. After uplift, the heavy rainfall let rivers cut hard down, slicing the range into dense deep V-shaped valleys, and vegetation covers almost every slope.",
    observation:
      "From the air the Kii Mountains are a continuous, rolling range covered almost entirely in dark-green forest, with no bare rock peaks — ridge and valley alike are hidden under the canopy. Countless rivers run radially out of the mountains to the coasts all around, cutting deep gorges, the water clear. The heavy rain keeps cloud and mist wrapped around the slopes. The southern coast of the peninsula is a cliff coast.",
    distinguish:
      "The Kii Mountains and the Japanese Alps are both mountains of Honshu, but the Alps are high, with rock peaks and glacial landforms, in the core of plate compression; the Kii Mountains are lower, without bare rock or glaciers, the result of the outer accretionary wedge being uplifted and eroded, characterised by extreme rainfall and dense forest. Compared with Yakushima: both are extremely rainy and densely forested, but Yakushima is a granite-dome island.",
    concept:
      "The Kii Mountains are a display of the \"accretionary wedge\" idea: a subducting oceanic plate acts like a scraper, shaving seafloor sediment off and stacking it onto the continental margin, and many mountains on Japan's Pacific side formed this way. A common misconception is to class all mountains as \"squeezed up by continental collision\" — an accretionary wedge is \"scraped\" off during subduction (one plate sliding under another), a different mechanism.",
    history:
      "The Kii Mountains have been a centre of mountain worship and of Shugendō (a fusion of Buddhist and Shinto training) since the Nara period. Kōyasan is the head temple of the Shingon school, founded by Kūkai in the 9th century; the Kumano Sanzan were pilgrimage destinations for emperors and commoners alike; and the \"Kumano Kodō\" routes linking the sacred sites have been walked by countless pilgrims over a thousand years. In 2004 this whole set of \"Sacred Sites and Pilgrimage Routes in the Kii Mountain Range\" was inscribed as a World Heritage cultural site.",
  },

  "kanto-plain": {
    seeing:
      "The Kanto Plain is the largest plain in Japan, about 17,000 km², in central Honshu on the Pacific side. Japan's largest metropolitan area — Tokyo, Yokohama, Saitama and Chiba running together — is built on it, home to about 40 million people. The plain is enclosed by mountains on three sides (the Kanto Mountains to the west, the Ashio and Echigo ranges to the north) and opens south-east onto Tokyo Bay and the Pacific.",
    formation:
      "The Kanto Plain is a slowly subsiding structural basin that has long received sediment carried down from the surrounding mountains by the Tone, Ara, Tama and other rivers. It is not a single lowland at one level: near the rivers is low alluvial ground, and between them rise several river-cut terraces (such as the Musashino Terrace), capped by a thick layer of wind-blown volcanic ash from Mount Fuji, Hakone and other volcanoes (the \"Kanto loam\").",
    observation:
      "From the air the Kanto Plain is one nearly continuous grey city held in the arms of the mountains — the built-up area covers almost the whole plain, with strips of green and farmland surviving only along the rivers and at the terrace edges. The Tone, Ara and other large rivers wind through the urban grid, their channels held by high levees. On a clear day the isolated cone of Mount Fuji is visible to the south-west from the plain.",
    distinguish:
      "The Kanto Plain and China's North China Plain are both large, densely populated river-alluvial plains, but the North China Plain is far larger and shaped by frequently shifting rivers such as the Yellow River; the Kanto Plain is small, ringed by mountains, built by several rivers that stay in their own sectors, and overlain by volcanic-ash terraces. Versus the Osaka Plain: the Kanto Plain is much larger, while the Osaka Plain is cut to pieces by fault-block mountains.",
    concept:
      "The Kanto Plain shows that a \"plain\" has internal structure: it has both low river-alluvial ground and higher, volcanic-ash-covered terraces, and the two differ in ground conditions, groundwater and hazard risk. A common misconception is that all of a big city sits on solid ground — the Tokyo Bay shore has large areas of modern reclamation and soft alluvium, which amplify shaking and can liquefy in an earthquake.",
    history:
      "The Kanto Plain has long been the agricultural and population centre of the Kanto region. In 1590 Tokugawa Ieyasu moved his base to Edo, then a small town, and Edo (renamed Tokyo after 1868) grew into Japan's largest city. In the 20th century the plain's fields and woodlots were swallowed by rapid urbanisation into today's continuous metropolis; flood control (especially the rerouting and levee works on the Tone River) is what allows the plain to hold so many people.",
  },

  "nobi-plain": {
    seeing:
      "The Nōbi Plain is in central Honshu on the northern shore of Ise Bay, the alluvial plain of the Nagoya area. Three large rivers — the Kiso, the Nagara and the Ibi — cross the plain almost side by side and empty together into Ise Bay. The south-western part of the plain is very low, with a substantial area of ground below sea level (below high tide), and it has always fought with floods.",
    formation:
      "The Nōbi Plain sits on a tilting block that is sinking on the west and rising on the east — the west keeps dropping along a fault at the foot of the Yōrō Mountains, so all three rivers are pushed to the western side of the plain and crowded together, and the south-western corner keeps getting lower. The rivers' sediment fills this sinking area into a plain, but not as fast as it subsides, so the lowland is kept only by ever-raised levees.",
    observation:
      "From the air the Nōbi Plain is a lowland covered in regular fields and towns, its most striking feature the three big rivers running in parallel on the west side, separated only by narrow belts of levee. In the south-west you can see ring levees (\"wajū\") enclosing villages and fields one by one, the ground inside clearly lower than the river. Nagoya's built-up area is on slightly higher ground in the east of the plain.",
    distinguish:
      "The Nōbi Plain is like the low country of the Netherlands — a delta below sea level kept habitable by levees and drainage. Versus the Kanto Plain: the Kanto Plain is larger, has volcanic-ash terraces and little subsidence; the Nōbi Plain is small, almost all low alluvium, with the south-western half continuously subsiding and flood pressure more concentrated.",
    concept:
      "The \"wajū\" of the Nōbi Plain are a classic case of \"living with water\": in lowland where floods cannot be fully kept out, each settlement is enclosed by its own ring levee, and inside there is a hierarchy — houses and shrines on the highest spots, plus purpose-built raised platforms (\"mizuya\") as flood refuges. A common misconception is that building levees solves flooding for good — the higher the levee, the greater the head and the damage if it breaks.",
    history:
      "The Nōbi Plain has long been a strategic corridor linking eastern and western Japan, and battles that changed Japanese history — Sekigahara, Okehazama — were fought here. In the Edo period the shogunate organised large flood-control projects (such as the 1750s \"Hōreki\" works carried out by the Satsuma domain) to separate the three rivers and build levees. The Isewan Typhoon of 1959 caused a storm surge here that killed or left missing over 5,000 people, after which Japan greatly strengthened coastal disaster defences.",
  },

  "osaka-plain": {
    seeing:
      "The Osaka Plain is in western Honshu, on the eastern and northern shores of Osaka Bay — the core of the Kansai region. The three big cities of Osaka, Kyoto and Kobe and the continuous urban area between them lie on this plain and in the valleys around it. The plain is not large (about 1,600 km²) and is tightly hemmed in by rows of fault-block mountains such as Ikoma and Rokkō, with a very clear boundary between mountain and plain.",
    formation:
      "The Osaka Plain is a relatively subsiding area \"framed\" by the uplift of the surrounding fault-block mountains, filled by the alluvium of the Yodo, Yamato and other rivers. Thousands of years ago the sea reached deep into what is now central Osaka (\"Kawachi Bay\"), later turned to land by Yodo River sediment and by human reclamation. In modern times the Osaka Bay shore has been extended further by large-scale reclamation, creating ports, an airport (Kansai International Airport is on an artificial island) and industrial zones.",
    observation:
      "From the air the Osaka Plain is a grey urban hollow between rows of steep ranges — the built-up area almost fills the plain, with the Yodo River cutting diagonally across from north-east to south-west and splitting into arms at its mouth. Rokkō stands like a wall behind the city of Kobe, dense housing right at its foot. Squared artificial islands are visible in Osaka Bay. Kyoto sits at the northern end of the plain in a small basin enclosed by hills on three sides.",
    distinguish:
      "The Osaka Plain and the Kanto Plain are both big-city plains of Japan, but the Kanto Plain is open and has volcanic-ash terraces; the Osaka Plain is cut to pieces by fault-block mountains, assembled from a string of small plains and basins, with a closer relationship between mountain and city. Versus the Nōbi Plain: the Osaka Plain does not have the large below-sea-level area that Nōbi does, so its flood problem is less extreme.",
    concept:
      "The Osaka Plain shows how block movement shapes settlement: the surrounding mountains are lifted along faults, the block between drops and is filled flat by rivers, and the cities grow in these dropped lowlands — with the fault often right at the mountain foot. There is an active fault at the base of Rokkō, and the 1995 Great Hanshin earthquake came from it. A common misconception is to take the mountain foot for the safest \"backed-by-mountain\" spot — in fault-block mountain country, the mountain foot often faces an active fault.",
    history:
      "The Osaka Plain was one of the centres of ancient Japanese civilisation — Naniwa, Asuka, Heijō-kyō (Nara) and Heian-kyō (Kyoto) were all in this area. Osaka became \"the nation's kitchen\" through water transport in the Edo period, a commercial and logistics hub for the whole country. In modern times Osaka grew into an industrial city, Kyoto kept its old-capital character, and Kobe is a major port — together with their surroundings they form Japan's second-largest metropolitan area.",
  },

  "ishikari-plain": {
    seeing:
      "The Ishikari Plain is the largest plain in Hokkaido, in the south-west of the island, on the lower Ishikari River. Sapporo, the capital of Hokkaido, is built on the southern edge of the plain, which also holds cities such as Asahikawa and large areas of rice paddy. It is enclosed by mountains and hills on three sides and opens north-west through Ishikari Bay to the Sea of Japan.",
    formation:
      "The Ishikari Plain formed by long alluvial deposition of the Ishikari River and its tributaries in a relatively subsiding lowland. The Ishikari River was originally extremely sinuous across the plain, leaving many oxbow lakes; the centre of the plain was once a large poorly drained peat bog (the \"Ishikari peatland\"). From the Meiji era, to develop Hokkaido as an agricultural base, the government organised large-scale drainage, channel straightening and \"soil dressing\" (covering the peat with mineral soil) to turn the bog into paddy.",
    observation:
      "From the air the Ishikari Plain is a large area of regular grid fields ringed by mountains, with the Ishikari River winding through it — along the river you can see many crescent oxbow lakes and abandoned old channels left after straightening. Sapporo's built-up area is at the southern end of the plain against the mountains, its streets a neat checkerboard (planned in the Meiji era). In winter the whole plain is under deep snow.",
    distinguish:
      "The Ishikari Plain and the Kanto and Nōbi plains of Honshu are all river-alluvial plains, but the Ishikari Plain is at high latitude, with cold snowy winters, and was originally mostly peat bog — one of the most heavily \"modernly engineered\" plains in Japan. Compared with the Interior Plains of Canada: both are high-latitude, with peat, given to grain or rice farming on a large scale, by a similar mechanism.",
    concept:
      "The Ishikari Plain is a sample of \"peatland reclamation\": peat is plant remains accumulated by incomplete decomposition under waterlogged, oxygen-poor conditions — soft, acidic, with poor bearing strength and unsuited to cropping. Turning it into farmland needs drainage to lower the water table plus a cover of mineral soil — but once drained, the peat oxidises and decomposes and the ground subsides, a long-term problem for such areas.",
    history:
      "The Ishikari Plain is the traditional land of the Ainu, and the Ishikari River was their main artery for salmon fishing and travel. In 1869 the Meiji government set up the \"Colonisation Commission\", chose Sapporo as the centre of Hokkaido's development, laid the city out on a grid, and brought in American-style large-scale agriculture and a militia-settler system. The northern limit of rice growing on the Ishikari Plain is the result of Japanese rice varieties and techniques being pushed steadily into colder country.",
  },

  "tokachi-plain": {
    seeing:
      "The Tokachi Plain is in south-eastern Hokkaido, a fan-shaped plain built out from the surrounding mountains by the Tokachi River and its tributaries, enclosed by the Hidaka Mountains to the west, Daisetsuzan to the north and the Shiranuka Hills to the east. With plenty of sunshine and dry summers, it is one of the few areas in Japan given over to large-scale, mechanised dryland farming and dairying — potatoes, sugar beet, beans and wide hayfields. The central city is Obihiro.",
    formation:
      "The Tokachi Plain is made mainly of a set of overlapping alluvial fans and volcanic-ash terraces. The surrounding volcanoes (Daisetsuzan, Mount Tokachi and others) have erupted repeatedly, and the ash blown onto the plain has formed a thick, well-drained terrace soil; the Tokachi River and its tributaries have cut valleys between the terraces and built fan-shaped alluvial ground. This \"mostly volcanic-ash terrace\" foundation, plus low rainfall, makes the area better for dryland crops than for paddy.",
    observation:
      "From the air the Tokachi Plain is a large area of unusually regular, large-parcelled fields in a half-ring of mountains — completely unlike the small fragmented paddies elsewhere in Japan, this is big dryland fields divided into a checkerboard by shelterbelts, with rows of barns and cattle sheds. Rivers run radially out of the Hidaka Mountains to the west, cutting ribbons of riparian woodland.",
    distinguish:
      "The Tokachi Plain and the Ishikari Plain are both in Hokkaido, but the Ishikari Plain was originally peat bog and after reclamation is mostly rice; the Tokachi Plain is volcanic-ash terrace, low-rainfall, given to dryland crops and livestock, with large fields and a high degree of mechanisation, looking more like a North American or European farming region. Versus the plains of Honshu: those are dominated by paddy and dense small-holdings; Tokachi is a different type.",
    concept:
      "The Tokachi Plain shows how foundation (here, volcanic-ash terrace) and climate (low rainfall) together decide the kind of farming: land that drains well but is short of water is hard to grow rice on, but good for dryland crops like potatoes and sugar beet and for grazing. A common misconception is that Japanese farming is all \"small and intensive paddy\" — Tokachi is a large-scale, low-density, mechanised counterexample.",
    history:
      "The Tokachi Plain is the traditional land of the Ainu; the name \"Tokachi\" comes from the Ainu language. In the Meiji era, private settlement groups such as the Banseisha and militia settlers moved into what was then forest and open country. In the 20th century Tokachi built up a farming belt centred on Obihiro and developed processing industries in sugar, dairy and confectionery (\"Tokachi\" is often used as a food brand).",
  },

  "lake-biwa": {
    seeing:
      "Lake Biwa is the largest lake in Japan, about 670 km², in central Honshu in Shiga Prefecture, north-east of Kyoto. It is long and narrow, named for its resemblance to a biwa lute. It is more than just a large body of water: at about 4 million years old it is one of the very few \"ancient lakes\" in the world, with over fifty species that live only in Lake Biwa. It also supplies water to about 14 million people downstream in Kyoto, Osaka and Kobe.",
    formation:
      "Lake Biwa is a fault-depression lake: the block its basin sits on keeps dropping along faults, forming an ever-deepening hollow that collects water from the surrounding mountains. Its position has actually been migrating north over the past few million years — the earliest \"proto-Biwa\" was around present-day Mie Prefecture, and with fault activity the basin gradually moved to its current site. Continuous subsidence has kept it from filling with sediment and disappearing like an ordinary lake, and it has instead \"lived\" for millions of years.",
    observation:
      "From the air Lake Biwa is a long, narrow sheet of blue among the mountains of central Honshu, the north end narrow and deep, tightly clasped by mountains, the south end wide and shallow, ringed by plain and cities (Ōtsu and others). The Hira Mountains stand like a screen on the west shore; the east shore is the more open Ōmi Plain and farmland. The lake's water leaves through its one outlet, the Seta River (called the Uji, then the Yodo, downstream), flowing south-west to Osaka Bay.",
    distinguish:
      "Lake Biwa, like Lake Baikal and Lake Tanganyika, is a fault-depression \"ancient lake\" — in common, the basin keeps subsiding, the lifespan is extremely long, and many endemic species evolve. It is far smaller and shallower than those two. Versus China's Lake Taihu: Taihu is a shallow, young hollow holding water; Lake Biwa is a deep, ancient fault-depression lake, entirely different in biological distinctiveness.",
    concept:
      "Lake Biwa is a representative \"ancient lake\": the great majority of lakes live only a few thousand to a few tens of thousands of years before filling with sediment or draining; only a very few (about 20 worldwide) last more than a few million years because their basins keep subsiding, becoming \"islands of life\" that evolve on their own. To identify an ancient lake, look for many locally endemic fish, molluscs and shrimp.",
    history:
      "Lake Biwa has long been a land-and-water hub linking Kyoto with the Hokuriku region and eastern Japan, with very busy lake ports and ferry crossings. Canals were dug several times through history to bring lake water toward Kyoto; the \"Lake Biwa Canal\", completed in 1890, still supplies water to Kyoto and generates power. In the 20th century the lake suffered serious eutrophication (\"freshwater red tide\") from domestic and agricultural pollution, after which Shiga Prefecture enacted relatively strict environmental legislation.",
  },

  "lake-towada": {
    seeing:
      "Lake Towada is in the mountains at the far northern end of Honshu, on the border of Aomori and Akita — a caldera lake. It is a double nested caldera, its shores the cliffs left by the collapse, and it is about 327 m at its deepest. The water is clear and cold year-round, and its one natural outlet is the Oirase Stream on the eastern shore — a valley famous for its continuous waterfalls and rapids.",
    formation:
      "Towada is an active volcano. Two giant eruptions, about 55,000 and 15,000 years ago, in turn emptied the underground magma chamber and collapsed the ground, forming an outer and an inner caldera; the water that collected is today's Lake Towada, and the jutting \"Nakanoumi\" peninsula in the middle is part of a volcanic cone that later grew inside the caldera. Its most recent eruption, around AD 915, was the largest in Japan in the past two thousand years.",
    observation:
      "From the air Lake Towada is a deep-blue sheet of water with a complex outline in dense forest — the edges of the two calderas and the central peninsula make it look as if it has several arms. The shores are almost all steep cliff, with hardly any gentle beach. There is a gap in the east shore where the Oirase Stream comes out, cutting a narrow green valley eastward, waterfall after waterfall.",
    distinguish:
      "Lake Towada, like Lake Ashi at Hakone and Lake Tōya in Hokkaido, is a caldera lake — in common, deep, with steep shores, and often a central island. Versus an ordinary tectonic or glacial lake: a caldera lake's outline is closer to circular or double-ringed, and the lakebed is often the former eruptive centre. China's Tianchi on Changbai Mountain is a caldera lake of the same kind, younger and higher.",
    concept:
      "Lake Towada is a reminder that a scenic, seemingly quiet lake may itself be an active volcano. The AD 915 Towada eruption was the largest in recorded Japanese history, covering the Tōhoku region thickly in ash and changing the local rivers and land. To tell whether a round deep lake is a caldera lake, look for a ring of cliffs (an outer rim) and eruptive deposits around it.",
    history:
      "The Lake Towada area was a hunting ground for the Ainu and later Tōhoku mountain people, long regarded as a sacred realm, with a long-told legend that the lake \"has no fish\" (salmonids came later by stocking). In the early 20th century, promotion of Oirase and Towada by writers and poets, together with new roads and railways, made this a representative sightseeing area of Tōhoku, and it was included in Towada-Hachimantai National Park in 1936.",
  },

  "shikotsu-toya": {
    seeing:
      "Shikotsu-Tōya is an area in south-western Hokkaido centred on volcanoes and caldera lakes, named for its two large lakes — Lake Shikotsu and Lake Tōya. Active volcanoes are dense here: Mount Usu has erupted four times in the 20th century, and in 1943–1945 a brand-new volcano (Shōwa-shinzan) \"grew\" out of a wheat field; Mount Tarumae and Mount Eniwa are active too. The Tōya Caldera–Usu Volcano area is a UNESCO Global Geopark.",
    formation:
      "Both Lake Shikotsu and Lake Tōya are caldera lakes: giant eruptions tens of thousands of years ago emptied underground magma chambers and collapsed the ground, and water filled the hollows; the islands in the middle (Nakajima in Lake Tōya, a volcano by Lake Shikotsu) are volcanoes that grew later inside the caldera. Mount Usu is a young active volcano on the southern rim of the Tōya caldera, known for eruptions that \"lift the ground\": the 1910, 1943, 1977 and 2000 eruptions all came with clear ground uplift, and Shōwa-shinzan formed when the 1943 eruption's rising magma raised a small patch of farmland as a block by about 170 m.",
    observation:
      "From the air Shikotsu-Tōya is a volcanic landscape of interlocking forest and lakes: Lake Tōya is nearly circular with an island in the middle, and Mount Usu's grey-white eruption scars and the red-brown Shōwa-shinzan sit right against its southern shore; Lake Shikotsu has a more irregular outline, enclosed on three sides by Mount Eniwa, Mount Fuppushi and Mount Tarumae, and Mount Tarumae carries a conspicuous lava dome on its summit like an upturned bowl.",
    distinguish:
      "Shikotsu-Tōya, like Aso and Hakone, is a combination of \"caldera plus later volcanoes\". Its distinctive feature is exceptionally frequent activity, and eruptions of the \"ground-uplift\" type — Mount Usu clearly bulges before each eruption, giving warning time; the 2000 eruption was evacuated in advance and no one was hurt, a model case of successful volcanic warning.",
    concept:
      "Shikotsu-Tōya (especially Mount Usu) shows the value of volcano monitoring: Mount Usu always has clear crustal deformation and increased earthquakes before an eruption, and scientists can issue a warning days ahead on that basis. Shōwa-shinzan is a vivid teaching example — it records the whole process of magma rising underground and lifting the surface as a block, documented day by day by a local postmaster (Masao Mimatsu).",
    history:
      "This area is Ainu land. In the 20th century Lake Tōya developed into a resort on its hot springs, and the 2008 G8 summit was held on its shore. With Mount Usu's repeated eruptions, the area has built a whole system for living with an active volcano: detailed volcanic hazard maps, designated evacuation routes, and roads and buildings damaged in the 2000 eruption preserved in place as \"ruins\" for visits and disaster education.",
  },

  "kurobe-gorge": {
    seeing:
      "The Kurobe Gorge is a deep V-shaped gorge cut by the Kurobe River through the Northern Alps (the Hida Mountains) — one of the deepest gorges in Japan. Its walls run almost straight up and down, with a height difference of one to two thousand metres between the floor and the ridges, hard to enter on foot; the main way through is a small railway built for hydropower work. Kurobe Dam upstream is the tallest arch dam in Japan.",
    formation:
      "The Northern Alps have been strongly and rapidly uplifted over the past one to two million years, and to keep its gradient the Kurobe River has cut hard down through solid granite and metamorphic rock. The faster the uplift and the harder the down-cutting, and with the rock here being tough and not prone to collapsing sideways, the result is a gorge that is narrow and deep with a V-shaped cross-section. The area has extremely deep winter snow, and the meltwater gives the river strong cutting power.",
    observation:
      "From the air the Kurobe Gorge is a thin, deep slit among continuous snow mountains, its floor barely visible — only at the bends can you glimpse a line of green river and the railway clinging to the cliff. The walls are densely forested and turn colour from bottom to top in autumn. Upstream you can see the arched wall of Kurobe Dam and the reservoir (Lake Kurobe) it holds back.",
    distinguish:
      "The Kurobe Gorge and the Grand Canyon in the U.S. are both river down-cutting, but the Grand Canyon is a river cutting into a plateau of flat layers, wide and pale with stepped walls; the Kurobe Gorge is a river cutting through a range of hard crystalline rock being rapidly uplifted, extremely narrow with near-vertical V-shaped walls. Versus the Yangtze Three Gorges: the Three Gorges are wider and carry far more water; the Kurobe Gorge is deeper and narrower with a small flow.",
    concept:
      "The Kurobe Gorge shows that \"narrow and deep\" depends on rock hardness and uplift rate: hard rock does not retreat sideways easily, the mountains rise fast, and the river can only keep cutting downward into a V-shaped gorge; if the rock were soft or the uplift slow, the gorge would widen faster. A common misconception is that a deeper gorge means a bigger river — the Kurobe is not actually a large river.",
    history:
      "Because it is so rugged, the Kurobe Gorge was uninhabited country for a long time, called one of the \"last unexplored places\" in Japan. In the early 20th century, to use the Kurobe River's great drop for power, work crews cut tunnels and laid rail in a gorge with almost nowhere to stand, extraordinarily dangerous work (Akira Yoshimura's documentary novel \"The High-heat Tunnel\" records one stretch). The small railway built to carry materials is now open to the public as a sightseeing line; Kurobe Dam was completed in 1963.",
  },

  kamikochi: {
    seeing:
      "Kamikōchi is a broad, flat stretch of the upper Azusa River valley in the Northern Alps, at about 1,500 m, tightly ringed by peaks over 3,000 m such as the Hotaka range and Mount Yake. The valley floor has the clear Azusa River, wetlands, larch and birch forest, and ponds reflecting the snow peaks. It is one of the birthplaces of modern mountaineering and nature conservation in Japan, and to protect the environment, private cars cannot drive in.",
    formation:
      "The broad flat floor of Kamikōchi was shaped by glaciers and rivers in turn: in the ice ages a valley glacier carved this stretch into a U-shape with a flat bottom; after the ice retreated the Azusa River wandered and deposited across the flat floor. In 1915 the active volcano Mount Yake, on the south side of the valley, erupted, and a mudflow rushed down and dammed the Azusa River, forming Taishō Pond — dead trees drowned then still stand in it. So Kamikōchi's landform is the sum of glacial, river and volcanic action.",
    observation:
      "From the air Kamikōchi is an unusually flat, bright-green valley floor among high mountains, the Azusa River braiding into several strands and rejoining. On the east side of the valley is the row of grey-white rock peaks of the Hotaka range; at the south-western end is Mount Yake, giving off a little smoke, with Taishō Pond below it. The boundary between the flat floor and the steep valley sides is sharp — the classic sign of a glacial U-shaped valley.",
    distinguish:
      "Kamikōchi and Yosemite Valley are both glacial U-shaped valleys ringed by high mountains with flat floors; the difference is that Yosemite's walls are bare granite cliffs, while Kamikōchi's walls are forested and it has an active volcano and a barrier lake the volcano made. Versus an ordinary river valley: a river valley is V-shaped with slopes descending all the way; Kamikōchi is U-shaped, flat-floored, steep-walled.",
    concept:
      "Taishō Pond at Kamikōchi is a vivid case of a \"barrier lake\": a volcanic mudflow (or a landslide or lava flow) suddenly dams a river, and water ponds up upstream. Such lakes are often unstable — the barrier can be worn open gradually or breach suddenly. Taishō Pond has also been silting up since it formed and is kept clear by dredging.",
    history:
      "Kamikōchi was once a place for logging and grazing. In 1891 the English missionary and mountaineer Walter Weston climbed Hotaka, Jōnen and other peaks from here and introduced Kamikōchi to the world; there is a memorial to him in the valley, and a \"Weston Festival\" each year. In the early 20th century the campaign against a dam on the upper Azusa was one of Japan's early nature-conservation movements. Today Kamikōchi is the gateway to Chūbu-Sangaku National Park, with strict management of vehicles and visitor numbers.",
  },

  "seto-inland-sea": {
    seeing:
      "The Seto Inland Sea is a semi-enclosed sea framed by the three large islands of Honshu, Shikoku and Kyushu, about 450 km long east–west. It is scattered with roughly 700 islands, and the water is divided by islands and peninsulas into a chain of open \"nada\" (basins) and narrow \"seto\" (channels). With small waves, a mild, dry climate and plenty of sunshine, it has been an important shipping lane and fishing ground since ancient times, and its shores and islands are densely populated.",
    formation:
      "The Seto Inland Sea is essentially a drowned landscape of mountains and valleys. The blocks here dropped relatively along a set of east–west faults, forming several basin-like hollows (today's \"nada\"), while the higher ground between them became islands and the narrow \"seto\" that pinch the channels. When sea level was low in the ice ages most of this was land; when it rose afterward, the sea came in from both ends, drowning the lowlands into a sea and leaving the hilltops as islands.",
    observation:
      "From the air the Seto Inland Sea is a body of water broken to pieces by islands, held within land — islands large and small aligned along a few trends, with channels of varying width between island and island and island and shore, the narrowest spanned by long sea-crossing bridges (the Seto Ōhashi, the Akashi Kaikyō Bridge). The islands are mostly rounded low hills, terraced fields and citrus groves reaching down near the shore. Tidal currents form conspicuous whirlpools in the narrow seto (as at Naruto).",
    distinguish:
      "The Seto Inland Sea is a \"drowned valley\" coast/inland sea — the land subsided or the sea rose, and the sea flooded former valleys and basins, turning ridges into peninsulas and island chains. It is unlike Norwegian fjords: fjords are glacier-deepened valleys that were flooded, deep and narrow with steep walls; the Seto Inland Sea is drowned hill-and-basin country not deepened by glaciers, with rounded islands and shallower water. The mechanism is like that of China's Zhoushan Archipelago.",
    concept:
      "The Seto Inland Sea shows that the same landform takes on a different face as sea level changes: today's islands were hilltops in the ice ages; today's \"nada\" were basins then. To identify this kind of \"drowned\" coast, see whether the islands and peninsulas are rounded, whether their trend matches the ridges on land, and whether the water is shallow — all signs of flooded land, not of a coast built by wave erosion or deposition.",
    history:
      "The Seto Inland Sea has been the main shipping route linking the Kinai (the Kyoto–Osaka area) with Kyushu and the mainland since ancient times, lined with ancient ports, bases of \"suigun\" (sea warriors, such as the Murakami), and Buddhist holy sites. In modern times its shores developed into a heavy-industry belt (the Seto Inland Sea Industrial Zone), badly polluted for a time with frequent red tides, later somewhat recovered. In 1934 it became one of Japan's first national parks; in recent years some islands have drawn visitors again with contemporary art (the Setouchi Triennale).",
  },

  "sanriku-coast": {
    seeing:
      "The Sanriku Coast is about 600 km of the Pacific side of north-eastern Honshu (roughly from southern Aomori to northern Miyagi). It has two halves: the north is raised marine terraces, forming flat-topped tablelands and continuous cliffs up to 200 m high (such as Kitayamazaki); the south is a drowned-valley \"ria coast\" — the sea has flooded a set of parallel valleys, forming a jagged line of long narrow bays reaching inland.",
    formation:
      "The Sanriku Coast lies directly above the subduction zone of the Japan Trench and is tectonically active. The north is slowly rising as a whole, lifting former wave-cut platforms out of the sea one level at a time as terraces. The south is the opposite, or has sea-level rise on top of it, and the sea has flooded parallel valleys to make a ria coast. These narrow bays are deep and calm, excellent natural harbours and aquaculture sites — but precisely because they are narrow and taper inland, they sharply raise the water level when a tsunami runs in.",
    observation:
      "From the air the northern Sanriku Coast is a neat green terrace edge dropping straight to the sea as a white cliff, with sea stacks and arches offshore; the southern coast line is jagged, in and out, with long narrow bays cutting deep into the mountains, small patches of flat land and fishing ports at their heads. The whole coast is backed right up against the Kitakami Mountains, with almost no plain as a buffer.",
    distinguish:
      "The southern Sanriku ria coast has the same origin as the Rías Baixas of Galicia in Spain (the source of the word \"ria\") — parallel valleys flooded by the sea. It differs from the Seto Inland Sea: Sanriku's valleys face straight onto the open ocean and its bays are V-shapes pointing inland; the Seto Inland Sea is an inland sea enclosed by three large islands with rounded islands. The raised terraces of the north are like other tectonically raised coasts (such as the east coast of Taiwan).",
    concept:
      "The Sanriku Coast (especially the south) explains why tsunami damage is especially severe on a ria coast: the long, inland-tapering, deep bays act like funnels, concentrating the energy of an incoming tsunami and raising the water very high; and the head of the bay is usually exactly where the fishing port and the settlement are. In the 2011 Tōhoku earthquake tsunami, some bay heads recorded run-up of more than ten metres, in places much higher. In rebuilding, the local area greatly raised the ground and the seawalls, and moved housing to higher land.",
    history:
      "The Sanriku coast has been a fishing coast settled since the Jōmon period, and has suffered many tsunamis in history (the Meiji Sanriku of 1896, the Shōwa Sanriku of 1933 and others), with many tsunami stone markers reading \"do not build houses below this point\". The 2011 tsunami dealt this area a devastating blow. Afterwards the former Rikuchū Kaigan and other national parks were reorganised into the \"Sanriku Fukkō (Reconstruction) National Park\", linking the coastal scenery with disaster-education facilities.",
  },

  "shiretoko-peninsula": {
    seeing:
      "The Shiretoko Peninsula is at the north-eastern tip of Hokkaido, reaching like a finger into the Sea of Okhotsk. Its centre is a ridge of volcanoes (the Shiretoko range), with cliffs plunging straight into the sea on both sides, and almost no roads or residents. In winter, sea ice (drift ice) floats down from the north and piles up against the shore — this is the southernmost place in the Northern Hemisphere where large-scale seasonal sea ice comes to land. The sea has abundant fish, and the shore has a dense population of brown bears.",
    formation:
      "The Shiretoko Peninsula is the south-western extension of the Kuril volcanic arc — the Pacific plate subducts and has built a line of volcanoes here, which joined together and were uplifted to form the peninsula's ridge backbone; Mount Rausu, Mount Iō and others are still active volcanoes. The cliffs on both sides of the peninsula are volcanic rock long eroded by waves, and in many places waterfalls drop straight off the cliff top into the sea (such as the hot-spring falls at Kamuiwakka).",
    observation:
      "From the air the Shiretoko Peninsula is a narrow, elongated land with a ridge down the middle, carrying a few volcanic cones and snow, and continuous dark cliffs plunging into the sea on both sides. There is no road to the peninsula's tip (Cape Shiretoko). In winter and spring the sea on the Okhotsk side is covered with white drift ice right up to the shore. Inland on the western side are the \"Shiretoko Five Lakes\" — small lakes on volcanic-mudflow deposits.",
    distinguish:
      "The Shiretoko Peninsula, like Kamchatka and the Aleutians, is land on a subduction-zone volcanic arc, characterised by active volcanoes, cliff coasts and cold marine ecosystems. It differs from Japan's other peninsulas (Kii, Noto) in being almost undeveloped and known for a complete \"sea-to-mountain\" food chain: plankton brought by the sea ice feeds fish, fish feed salmon, seals and Steller's sea eagles, and on up to the brown bears on shore.",
    concept:
      "Shiretoko was inscribed as a World Heritage site for the tight link between its marine and terrestrial ecosystems: the nutrients brought by winter drift ice are the start of the whole food chain. A common misconception is to see sea ice as a symbol of \"barren, lifeless\" — the edge of seasonal sea ice is in fact a zone of very high productivity, and the nutrients and algae released as the ice melts support a great deal of life.",
    history:
      "Shiretoko is the traditional land of the Ainu; \"Shiretoko\" comes from the Ainu \"sir etok\", meaning \"the end of the earth\". In the mid-20th century settlers tried to farm on the peninsula but mostly gave up because of the harsh environment. In the 1960s–70s the local \"Shiretoko 100 Square Metre Movement\" raised public money to buy land and stop development. In 2005 Shiretoko was inscribed as a World Heritage site, with strict entry management and measures to prevent bear–human conflict.",
  },

  "tottori-sand-dunes": {
    seeing:
      "The Tottori Sand Dunes are on the Sea of Japan coast in western Honshu — the largest dune field in Japan, about 16 km east–west and 2 km north–south, with a local relief of about 47 m. In rainy, mountainous, forested Japan, such an open field of moving dunes is unusual, and it is often called \"Japan's only desert landscape\", though the climate here is not actually dry.",
    formation:
      "The sand of the Tottori Dunes comes from the Sendai River. The Sendai River carries large amounts of granite-weathered sand from the Chūgoku Mountains into the Sea of Japan, waves push the sand back to the shore, and the strong winter monsoon winds off the Sea of Japan blow the dry sand onshore and pile it beyond the coast. Since the ice ages this cycle of \"river supply — wave transport — wind deposition\" has continued, forming today's dunes. There are groundwater-fed hollows between the dunes.",
    observation:
      "From the air the Tottori Dunes are a striking pale-yellow band between the dark-green pine shelterbelt and the blue Sea of Japan — transverse dunes lined up parallel to the coast, a gentle slope on the seaward side and a steep slope on the landward side. In strong wind there are clear sand ripples on the surface, and between the big dunes is a larger, seasonally flooded hollow (an \"oasis\"). The inner edge of the dunes is right against farmland and towns.",
    distinguish:
      "The Tottori Dunes look like the dunes of the Sahara or the Taklamakan, but the origin and setting are entirely different: those are the product of long wind erosion and deposition in a dry climate and are enormous; the Tottori Dunes are \"coastal aeolian dunes\" — sustained by continuous river sand supply, wave transport and monsoon deposition, in a humid climate, and far smaller. Other Japanese coasts have similar but smaller dunes.",
    concept:
      "The Tottori Dunes show that a \"dune\" is a product of wind, not the same as a \"desert\": given a steady sand supply and enough wind, active dunes can form on a coast in a humid region. Their existence depends on the Sendai River's sand supply — in the 20th century, dams upstream, shore protection, and planted shelterbelts reduced both the sand and the wind, and the dunes shrank noticeably and were invaded by weeds; the area now weeds by hand to keep the dunes \"moving\".",
    history:
      "The Tottori Dune area was historically poor wasteland, and from the Edo period local people planted shelterbelts on the lee side and tried sand-tolerant crops such as rakkyō (a kind of scallion); the area around the dunes still produces rakkyō and sweet potatoes. In the 20th century the dunes became known as a sightseeing spot and a location for art and film (the imagery of Kōbō Abe's novel \"The Woman in the Dunes\" is associated with them). They are the core attraction of the San'in Kaigan UNESCO Global Geopark.",
  },

  yakushima: {
    seeing:
      "Yakushima is off the southern tip of Kyushu — a nearly circular granite island about 25 km across. Its centre is mountain country above 3,000 feet, the highest peak Miyanoura-dake at 1,936 m, the highest mountain south of Kyushu. It is known for extreme rainfall (there is a saying that it \"rains 35 days a month\"), a complete vertical sequence of vegetation zones from subtropical to subarctic, and Japanese cedars (\"Yakusugi\") that may be thousands of years old; it was inscribed as a World Heritage site in 1993.",
    formation:
      "Yakushima formed when a large body of granite magma cooled underground about 14 million years ago, was later uplifted rapidly as a block, and emerged from the sea after the overlying rock eroded away. The high granite island stands right in the path of moist air from the Pacific and the East China Sea, forcing the air to rise and drop huge amounts of rain — annual rainfall in the mountains can exceed 8,000 to 10,000 mm. The abundant rain erodes hard along the granite joints, cutting the island into deep valleys, and the rivers are short and steep with many waterfalls.",
    observation:
      "From the air Yakushima is a circular green mountain island rising abruptly from the sea, its centre a ring of high peaks under near-permanent cloud, the summits bare pale granite boulders and low alpine plants, then conifer forest, then broadleaf evergreen forest going down, and subtropical vegetation and coral reef at the coast. Countless short rivers rush radially down from the central mountains, in deep valleys with white water.",
    distinguish:
      "Yakushima and the Kii Mountains are both among the rainiest, most densely forested places in Japan, but the Kii Mountains are an uplifted accretionary-wedge range on the continental margin, large in area; Yakushima is an isolated granite dome island, presenting the full vertical sequence of vegetation zones over a very short horizontal distance — from subtropical at the shore to something like Hokkaido's climate at the summit, in only a dozen or so kilometres.",
    concept:
      "Yakushima is the most compact display of \"vertical vegetation zones\": because the mountain is high and isolated in a warm sea, the climate change from foot to summit is like travelling from Okinawa all the way to Hokkaido. A common misconception is to treat \"Yakusugi\" as a species — it is just the ordinary Japanese cedar, but growing on Yakushima's poor granite it grows extremely slowly, and so has dense wood that resists rot for thousands of years.",
    history:
      "Yakushima has had a distinctive mountain worship since ancient times, with islanders climbing the mountains to pray at set times. In the Edo period the Satsuma domain organised logging of Yakusugi and processed the wood into roofing shingles (\"hiraki\") as tribute; there are still remains of that logging and transport on the island (such as Kosugidani). Campaigns in the 1960s–70s against continued logging of old-growth forest led to the 1993 World Heritage inscription. Today hikers aim for \"Jōmon Sugi\", one especially famous giant Yakusugi.",
  },

  "ryukyu-islands": {
    seeing:
      "The Ryukyu Islands (called the Nansei Islands in Japan) are a chain of islands stretching about 1,000 km south-west from Kyushu, separating the Pacific from the East China Sea. The climate is subtropical maritime, coral reefs are widely developed around the islands, and many islands' surface is \"Ryukyu limestone\" formed from uplifted coral reef, so there are limestone terraces, caves (\"gama\") and karst landforms. Amami-Ōshima, northern Okinawa Island and other islands were inscribed as a World Heritage site in 2021 for their well-preserved subtropical broadleaf evergreen forest.",
    formation:
      "The Ryukyu Islands are an island arc formed at the edge of the Eurasian plate above the Philippine Sea plate subduction zone. The arc itself is rising, and at the same time sea level has changed many times since the Quaternary — during high-sea-level periods thick coral reef accumulated around the islands, and then as the islands rose and the sea fell, these reefs were lifted out of the sea and hardened into Ryukyu limestone overlying the older rock. On the inner side of the arc is the Okinawa Trough, a spreading submarine basin.",
    observation:
      "From the air the Ryukyu Islands are a chain of green islands aligned north-east to south-west in the deep-blue ocean, each ringed by a band of pale green to pale blue coral reef and lagoon, the water dropping abruptly to dark blue outside the reef. Limestone-dominated islands (southern Okinawa, Miyako) are low and flat with white sea cliffs at the edge; islands dominated by volcanic or older rock (Amami, northern Okinawa) have dense forested mountains.",
    distinguish:
      "The Ryukyu Islands are unlike the islands of the Japanese mainland: the mainland islands are dominated by volcanoes and drowned mountains, while the Ryukyus are dominated by coral reef and uplifted limestone, with a subtropical climate and an ecology closer to Taiwan and southern China. Versus pure coral islands like the Maldives: the Ryukyu islands have a rock base and mountains, and are not simple atolls.",
    concept:
      "The \"uplifted coral reef\" landform of the Ryukyus shows how crustal uplift and sea-level change act together: coral reef can only grow in warm shallow seas, and once lifted out of the sea it stops growing and turns to limestone; if reef accumulates and is uplifted repeatedly through different high-sea-level periods, a staircase of coral-reef terraces forms. A common misconception is to treat all tropical islands as volcanic — many Ryukyu islands have a surface of \"petrified coral\".",
    history:
      "Many of the Ryukyu Islands were long ruled by the Ryukyu Kingdom, which had close tribute and trade ties with China, Japan and South-East Asia; sites such as Shuri Castle (\"Gusuku Sites and Related Properties of the Kingdom of Ryukyu\") are a World Heritage cultural site. The area has a strong local character in language, music, food and religion. The Battle of Okinawa (1945) was the largest ground battle within Japanese home territory in the Pacific War.",
  },

  "shinano-river": {
    seeing:
      "The Shinano River is the longest river in Japan, about 367 km (called the Chikuma River within Nagano Prefecture, and the Shinano River after it enters Niigata Prefecture). It rises in the Kanto Mountains of central Honshu, passes through the Nagano Basin, cuts through the Echigo Mountains, and finally empties into the Sea of Japan on the Echigo Plain in Niigata. The lower Echigo Plain is one of Japan's important rice-growing areas.",
    formation:
      "The upper Shinano is in the mountains, its valley a deep cut in uplifted mountain country, and the string of intermontane basins (Nagano, Ueda) formed by faulting. The lower Echigo Plain is a subsiding structural basin, filled with sediment brought in by the Shinano and its tributaries into a flat, marshy alluvial plain. Because the basin is sinking and the channel is raised within its own silted-up levees, the Echigo Plain suffered severe flooding through history.",
    observation:
      "From the air the upper Shinano is a deeply cut, strongly meandering river in the mountains; the middle river passes through several field-filled intermontane basins; on the Echigo Plain the river widens, held between high levees, with endless paddy on both sides, and you can see the man-made \"Ōkōzu Diversion Channel\" — a flood channel that leads the Shinano's floodwater straight to the Sea of Japan. The mouth is in the city of Niigata, wrapped in port facilities.",
    distinguish:
      "The Shinano and the Tone are the two longest rivers in Japan, but the Shinano flows to the Sea of Japan side, its basin confined by mountains, so it is \"long and slim\"; the Tone flows to the Pacific side, spreading across the open Kanto Plain, with a far larger basin. Versus a very silt-laden river like the Yellow River: the Shinano does not carry as much sediment, and its main problems are the flood peaks of the snowmelt and plum-rain seasons and the continued subsidence of the lower basin.",
    concept:
      "The \"Ōkōzu Diversion\" on the lower Shinano is a sample of \"flood diversion\": when the lower channel of a river cannot hold the flood no matter how high the levees are raised, a shortcut channel is dug part-way along to carry the excess flood straight out to sea, bypassing the downstream cities and farmland. This diversion, completed in 1922, fundamentally changed the flooding situation on the Echigo Plain.",
    history:
      "The Shinano basin has long been important for farming and travel; Kawanakajima on the upper river was where the great daimyo Takeda and Uesugi fought repeatedly in the 16th century. The Echigo Plain was historically a producer of \"landlord rice\" and a place of frequent floods and heavy peasant burdens, and only the modern diversion works and land improvement made it a stable granary. Today there are several hydroelectric stations on the Shinano.",
  },

  "tone-river": {
    seeing:
      "The Tone River has the largest drainage basin in Japan (about 16,800 km²) and runs right across the Kanto Plain. Historically it was nicknamed \"Bandō Tarō\" (\"Bandō\" is an old name for Kanto, and \"Tarō\" means eldest son, the biggest). It rises in the mountains of northern Kanto, gathers many tributaries on the Kanto Plain, and finally empties into the Pacific at Chōshi in Chiba Prefecture. It supplies a great deal of the domestic and industrial water for the Tokyo metropolitan area.",
    formation:
      "The Tone River originally flowed into Tokyo Bay. The Kanto Plain is a slowly subsiding basin, and the Tone, together with the Ara, the Watarase and others, wandered and flooded across it. In the early Edo period the shogunate, to protect Edo from floods, to open up the marshland downstream, and to open a water route toward the north-east, spent about 60 years (in the 17th century) moving the lower Tone channel eastward section by section, finally making it flow to the Pacific at Chōshi — a project called the \"Tone River eastward diversion\".",
    observation:
      "From the air the Tone is a broad, strongly meandering brown river on the Kanto Plain, held between wide levees, with continuous paddy, dry fields and ever-expanding cities on both sides. Near Chōshi in its lower reach the river becomes very wide, with large shallow lakes and marshes (Lake Kasumigaura, Lake Kitaura) alongside — these are what the old channels and hollows left behind after the eastward diversion. In the upper mountains you can see several reservoir dams.",
    distinguish:
      "The Tone and the Shinano are the two longest rivers in Japan: the Tone is a bit shorter but has a far larger basin and spreads across an open plain; the Shinano is longer, flows to the Sea of Japan, and its basin is confined by mountains. The degree to which the Tone has been \"artificially rerouted\" is notable even among the world's large rivers — its lower channel today is essentially dug by people.",
    concept:
      "The Tone eastward diversion shows that a river's \"channel\" can be changed on a large scale by people, with far-reaching effects: moving a large river from one sea to another protected the downstream city (Edo/Tokyo), but also shifted the \"burden\" of sediment and floods to a new mouth, and incidentally turned the wetlands along the way into farmland. A common misconception is to treat a large river's course as purely natural — the drainage pattern of the Kanto Plain is largely a result of Edo-period planning.",
    history:
      "The \"Tone River eastward diversion\" was one of the largest civil-engineering projects of the Edo shogunate, spanning most of the 17th century. It freed Edo from the direct threat of the Tone, turned the downstream reed marshes into new fields, and established an inland shipping network from Edo via the Tone and Lake Kasumigaura to the north-east. In the 20th century, as Tokyo's water demand surged, a series of reservoirs were built on the upper Tone; in the 1947 Kathleen Typhoon the Tone breached its banks and flooded a large part of the Kanto Plain, after which flood-control standards were greatly raised.",
  },

  "aoraki-southern-alps": {
    seeing:
      "The Southern Alps (Māori: Kā Tiritiri o te Moana) run for about 500 km along the western side of New Zealand's South Island, separating the wet West Coast from the drier eastern interior. The highest peak, Aoraki / Mount Cook, is 3,724 m — the highest mountain in New Zealand — and the range holds almost all of the country's 3,000 m peaks and glaciers. Its south-western part lies within the Te Wāhipounamu World Heritage Area.",
    formation:
      "The Southern Alps are being pushed up by the oblique collision of the Pacific and Australian plates along the Alpine Fault, which runs along the western foot of the range. Uplift reaches around 10 mm a year in places, among the fastest of any mountain belt, and is roughly balanced by equally rapid erosion driven by heavy rain from the westerlies. The rock is mostly greywacke and schist.",
    observation:
      "From the air the Southern Alps are a continuous, jagged white wall: the western side is cloudy and steep, with glaciers reaching down into coastal temperate rainforest; the eastern side is in rain shadow, dry, with pale tussock grassland and braided rivers at its foot. The Aoraki area concentrates the highest, sharpest peaks and large glaciers such as the Tasman; the crest is the island's main divide.",
    distinguish:
      "The Southern Alps look like the European Alps but formed differently: the European Alps are fold mountains from continent-continent compression, while the Southern Alps are a young range shoved up along one large strike-slip fault. Compared with the Andes they have no volcanoes, and the contrast between their two sides is more extreme — metres of rain a year on the west, only a few hundred millimetres on the east.",
    concept:
      "The Southern Alps are a textbook case of tectonic uplift and erosion in balance: the mountains are not getting steadily higher — as fast as they rise, they are worn down, holding a roughly steady height over the long term. A common misconception is that Aoraki has a fixed height — a 1991 rock avalanche removed part of the summit, the official figure was lowered, and it was later re-surveyed.",
    history:
      "For Ngāi Tahu, the main South Island iwi, Aoraki is the most important ancestral mountain and is deeply revered. Settlement legislation in 1998 gave the peak the dual name \"Aoraki / Mount Cook\" and returned Aoraki / Mount Cook to the iwi, who then gifted it back to the nation. The area is also the birthplace of New Zealand mountaineering; Edmund Hillary, who first climbed Everest in 1953, trained here.",
  },

  "kaikoura-ranges": {
    seeing:
      "The Kaikōura Ranges, in the north-east of the South Island, are two parallel greywacke ranges that rise very steeply a short distance inland from the Pacific. Tapuae-o-Uenuku, in the Inland Kaikōura Range, is 2,885 m — the highest mountain in New Zealand outside the main Southern Alps. The town of Kaikōura and its small peninsula are known for sperm whales that can be seen year-round because deep water lies close to shore.",
    formation:
      "The Kaikōura Ranges sit on a belt of active faults where the Pacific and Australian plates meet, and are being uplifted and offset continuously. The November 2016 Kaikōura earthquake (magnitude 7.8) ruptured more than a dozen faults at once and lifted parts of the coast by up to about 6 m, raising broad areas of former seabed permanently above the water.",
    observation:
      "From the air the Kaikōura Ranges are a steep wall hard against the coastline: wide inland valleys on the west, and on the east the mountains drop almost straight into the Pacific, with snow on the tops in winter and green pasture, road and rail squeezed onto a narrow coastal terrace below. Offshore the sea colour deepens quickly over the Kaikōura Canyon.",
    distinguish:
      "The Kaikōura Ranges and the main Southern Alps are both greywacke and both rising fast, but the Kaikōura ranges sit further east and closer to the sea — a branch thrown off to the east of the main mountain belt. Because they are so near the coast, they go from sea level to nearly 3,000 m in only a few tens of kilometres, an even more abrupt land-sea contrast than the main divide.",
    concept:
      "Kaikōura is a case study in coseismic uplift: normally the fault belt raises the coast a few millimetres a year, but a single large earthquake can lift it several metres in seconds. The flights of raised shore platforms along the coast are a record of many such past earthquakes. A common misconception is that shoreline height is set only by sea level — here, the land itself is moving.",
    history:
      "Kaikōura means \"the place to eat crayfish (kōura)\" in Māori and has long been a place of fishing and settlement. In the 19th century it was a shore-based whaling station; by the late 20th century it had shifted to ecotourism built around watching whales, dolphins and albatrosses. After the 2016 earthquake the road and rail links to Kaikōura were cut for a long time and extensively rebuilt.",
  },

  "the-remarkables": {
    seeing:
      "The Remarkables (Māori: Kawarau) rise on the eastern shore of Lake Wakatipu, south-east of Queenstown, as a fault-block range that climbs almost sheer from the lake. The highest point, Double Cone, is 2,319 m. Their sharp saw-toothed skyline above Queenstown is one of the most photographed mountain views in New Zealand, and there is a ski field on the range.",
    formation:
      "The Remarkables are a schist fault-block: compression of the crust lifted a block along faults and tilted it, giving a steep face (west, above the lake) and a gentler back slope (east). Schist is South Island greywacke recrystallised deep in the crust under heat and pressure; it splits readily along its foliation, which gives the range its ribbed, angular profile.",
    observation:
      "From the air the Remarkables are a north-south rock wall with a sheer western face plunging into the deep blue of Lake Wakatipu, and an eastern side that steps down more gently to alpine tussock and a few small cirque tarns. The shaded western face holds deep snow in winter and shows grey-blue schist in summer.",
    distinguish:
      "The Remarkables and the main Southern Alps are both schist, but the Remarkables are one especially high block within the basin-and-range country of Central Otago — a fairly self-contained massif ringed by down-faulted basins and lakes — whereas the main divide is a continuous watershed. Their steep west face comes from fault tilting, not glacial plucking.",
    concept:
      "The Remarkables show how a fault block produces an asymmetric mountain: one side is an uplifted fault scarp, very steep, and the other is the gently back-tilted former land surface. Central Otago has a series of these parallel schist blocks with basins between them. A common misconception is to read every steep rock face as glacial — here the steepness is tectonic.",
    history:
      "The Wakatipu basin below the Remarkables was one of the routes Māori used to gather pounamu (greenstone) and to travel. The Otago gold rush of the 1860s brought many miners to Queenstown and the Kawarau River. Today the area, centred on Queenstown, is New Zealand's most concentrated outdoor and adventure tourism region, and the Remarkables have appeared as a film location several times.",
  },

  "tararua-range": {
    seeing:
      "The Tararua Range is part of the North Island's axial mountain chain, north of Wellington, dividing the Kāpiti Coast on the west from the Wairarapa on the east. The mountains are not very high — Mitre, the highest, is 1,571 m — but because they face straight into the wind funnel of Cook Strait and the weather changes fast, they have long been a proving ground for New Zealand tramping and mountain training.",
    formation:
      "The Tararua Range is made of hard greywacke and is the strongly folded, faulted axial belt of the North Island, uplifted along faults under oblique plate compression. Dense faulting shatters the rock, and rivers cutting down the shatter zones have carved deep, steep gorges; the Manawatū Gorge is a river that was there before the mountains rose and has sawn straight through the rising range.",
    observation:
      "From the air the Tararua Range is a north-south ridge cloaked in dense native forest, its tops usually wrapped in cloud with only a short stretch of alpine herbfield showing above the bushline. The western slope faces the prevailing westerlies and is heavy with cloud and rain; the Wairarapa on the east is visibly drier, given over to pasture and vineyards.",
    distinguish:
      "The Tararua Range and the South Island's Southern Alps are both greywacke axial divides, but the Tararua has no glaciers and is far lower; it is \"known\" mainly for its dense forest and its severe weather. Unlike the volcanic Ruapehu and Taranaki, it is an entirely non-volcanic range built by compression and folding.",
    concept:
      "The Tararua Range is a case study in how terrain amplifies weather: a modest mountain range, if it sits square across a strong wind gap and faces a moist airstream, has its ridge-top wind, rainfall and cooling all magnified far beyond what the same altitude would see on flat ground. A common misconception is that a low range is not dangerous — the wind chill here can cause hypothermia even in summer.",
    history:
      "The Tararua Range and its passes were long a route for Māori travelling between the east and west coasts of the North Island. In the 19th century settlers drove road and rail through the Manawatū Gorge to link the two sides. Today most of the range is forest park — the back-country hills for the people of Wellington and Manawatū to tramp and hunt in, and a stronghold for North Island native birds.",
  },

  "mount-ruapehu": {
    seeing:
      "Mount Ruapehu stands on the volcanic plateau of the central North Island at 2,797 m — the highest peak in the North Island and an active volcano, with a summit Crater Lake that heats up and changes colour with volcanic activity. Together with the young cone of Ngāuruhoe and the older, multi-craered Tongariro alongside it, it makes up Tongariro National Park — New Zealand's first national park (established 1887) and a dual natural and cultural World Heritage Site.",
    formation:
      "Ruapehu is an andesitic stratovolcano at the southern end of the Taupō Volcanic Zone, built by magma rising where the Pacific plate subducts beneath the North Island. Repeated eruptions and collapses have given it several overlapping cones. Its Crater Lake is the key to its behaviour: the water connects to the hot volcanic conduit, and an eruption or a collapse of the lake rim can send a volcanic mudflow (lahar) racing down the valleys.",
    observation:
      "From the air Ruapehu is a broad, ragged, permanently snow-capped volcano on the plateau, with a grey-green Crater Lake in the summit hollow and deep channels cut radially by lahars and snowmelt. Immediately to the north is the near-perfect cone of Ngāuruhoe, and beyond it the low, multi-craered Tongariro. The three mountains are surrounded by dark lava flows and alpine desert.",
    distinguish:
      "Ruapehu and Taranaki are both North Island andesitic stratovolcanoes, but Ruapehu is a cluster of overlapping cones with a summit crater lake and year-round skiable snow, while Taranaki is an isolated, symmetrical single cone. Compared with the collapsed rhyolitic calderas of Taupō and Rotorua, Ruapehu is a volcano built up rather than dropped down.",
    concept:
      "Ruapehu is a classic place to understand lahars: a volcano need not erupt to be deadly — once the summit lake water and snow are disturbed, they mix with volcanic debris and pour down fixed valleys at speed, reaching the lower slopes in tens of minutes. The national park has a lahar warning system for this reason. A common misconception is to treat a snow-covered volcano as an ordinary snow mountain.",
    history:
      "In 1887 the paramount chief of Ngāti Tūwharetoa, Horonuku Te Heuheu Tūkino IV, placed these sacred mountains in the care of the nation on condition that a national park protect them — making this one of the earliest national parks in New Zealand and the world. On Christmas Eve 1953 a lahar from Ruapehu's Crater Lake destroyed a rail bridge, causing the Tangiwai disaster. Today there are ski fields on the mountain, and the Tongariro Alpine Crossing below it is New Zealand's most popular day walk.",
  },

  "mount-taranaki": {
    seeing:
      "Mount Taranaki (official name Taranaki Maunga; formerly Mount Taranaki or Mount Egmont) stands alone on the Taranaki peninsula of the western North Island at 2,518 m — a near-perfectly symmetrical volcanic cone, visible in full from the streets of New Plymouth on a clear day. Its resemblance to Mount Fuji has made it a filming location for several productions.",
    formation:
      "Taranaki is an andesitic stratovolcano, built up by successive eruptions of lava and volcanic debris, and is the youngest of a chain of volcanoes in the district that get progressively younger from north to south. It has undergone several large collapses whose debris blankets the lower slopes as a gently sloping ring plain; geologists generally regard it as capable of erupting again.",
    observation:
      "From the air the most striking thing about Taranaki is the near-circular line at its foot: a forest boundary drawn in 1881 at a radius of about 9.6 km from the summit, with dark native forest inside and neat dairy pasture outside, the edge as sharp as if drawn with a compass. The summit usually carries a small patch of snow and a shallow crater, with rivers running evenly off the slopes in a radial pattern.",
    distinguish:
      "Taranaki and Ruapehu are both North Island andesitic volcanoes, but Taranaki is an isolated, symmetrical single cone well away from the main axis of the Taupō Volcanic Zone, whereas Ruapehu sits near the axis and is a cluster of overlapping cones with a summit crater lake. Taranaki's symmetry reflects its youth — it has not yet been deeply eroded.",
    concept:
      "The circular forest boundary at Taranaki's foot is an extreme example of a hard land-use edge: a line drawn purely for administrative reasons that, decades later, shows up on the ground — and from satellites — as an abrupt change in vegetation. A common misconception is to read that circle as a natural treeline; it is the park boundary set in 1881.",
    history:
      "Mount Taranaki is a revered ancestor and a core of identity for the local iwi (such as Taranaki and Te Āti Awa). In 2025 New Zealand passed legislation making Taranaki Maunga the mountain's official name and granting it legal personhood, represented by an entity called Te Kāhui Tupua, with iwi and the Crown jointly speaking for its interests. Egmont National Park is the second-oldest national park in New Zealand.",
  },
};
