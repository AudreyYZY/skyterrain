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
      "The Qinling Mountains run east–west across the exact middle of China for about 1,600 km. They are the country's single most important natural dividing line: warm-temperate dry farming to the north, subtropical rice country to the south. From the air the range splits the palette in two — the yellow Guanzhong Plain and Loess Plateau on the north side, the deep green Hanzhong and Sichuan basins on the south.",
    formation:
      "The Qinling was raised by the collision of the North China and Yangtze blocks and is built of hard granite and metamorphic rock. Ongoing uplift along a major fault on its northern edge makes the north slope steep — it drops almost straight onto the Guanzhong Plain — while the south slope descends gently. The summit, Mount Taibai (3,771 m), is the highest point in mainland China east of the Tibetan Plateau and carries horns and cirques left by Quaternary glaciers.",
    observation:
      "Identify the Qinling by its trend first: one continuous east–west ridge, not the scattered blocks of other ranges. Then look at the north face — it stands like a wall at the edge of the plain, with almost no foothills. In winter the crest holds snow while the basins to the south do not; that snow line is itself the north–south divide. Mount Taibai and Mount Hua (a granite fault block, one of the Five Great Mountains) are the two clearest landmarks.",
    distinguish:
      "The Qinling and the Nanling are both east–west watershed ranges and are easy to confuse. The Qinling is high, continuous, snow-capped, and marks the climate boundary between warm-temperate and subtropical China; the Nanling is low and broken, mostly around 1,000 m, snow-free, and only separates the Yangtze and Pearl river systems. Compared with the Qilian to the west: the Qilian runs on a slant (NW–SE) with continuous summit glaciers, while the Qinling runs true east–west with only a few relict glaciers.",
    concept:
      "The Qinling is often called \"China's central air conditioner.\" It blocks cold air pushing south in winter and traps moisture moving north in summer, so rainfall, coldest-month temperature, vegetation and farming all differ across it — roughly the 800 mm annual-rainfall line and the 0 °C January isotherm. It is also the drainage divide between the Yangtze and the Yellow River, and the popular boundary between north and south China.",
    history:
      "\"The road to Shu is harder than the road to heaven\" is about crossing the Qinling into Sichuan. The range is also key habitat for the giant panda, crested ibis and golden monkey, with reserves at Foping and Zhouzhi. Ancient plank roads such as the Ziwu and Baoxie routes threaded the mountains, linking Guanzhong with Hanzhong and Sichuan.",
  },

  qilian: {
    seeing:
      "The Qilian Mountains lie on the Gansu–Qinghai border and are the water tower and natural shield of the Hexi Corridor. Their summits carry permanent snow and some 2,000 glaciers, whose meltwater feeds a string of oasis cities — Wuwei, Zhangye, Jiuquan. From the air they sit as a white band between the arid corridor and gobi to the north and the moist grasslands of Qinghai to the south.",
    formation:
      "The Qilian is the north-eastern edge of the Tibetan Plateau, still rising under the northward push of the Indian plate. It is a set of parallel ridges and valleys trending NW–SE, built of Palaeozoic metamorphic rock and granite. Its 2,000-odd glaciers make it China's second-largest glacier region; the highest summit, Tuanjie (Kangze'gyai) Peak, reaches about 5,808 m.",
    observation:
      "The easiest tell is the slant — the crest runs NW–SE, clearly different from the true east–west Qinling. Snow and ice run together along the summits, and a row of triangular alluvial fans spreads out at the foot, each fan edge turning green as an oasis. The dead-straight Hexi Corridor lies below the north slope; the open grasslands of Qinghai below the south — one side yellow, the other green.",
    distinguish:
      "The Qilian and the Qinling are both large ranges east of the Tibetan Plateau, but the Qilian is farther west, higher and colder, with connected glaciers and a snow line above 4,500 m; the Qinling runs true east–west with only scattered glaciers. Versus the Kunlun: the Kunlun is longer and farther south, the border range between the Tarim Basin and the plateau; the Qilian is shorter, wedged between the Tibetan and Inner Mongolian plateaus.",
    concept:
      "The Qilian is a textbook block-faulted range — not one arch but several parallel ridges sliced by faults, ridge and valley alternating. Its glaciers and snow feed the three inland rivers of the Hexi Corridor (the Shiyang, Hei and Shule). Without the Qilian there would be no corridor oases and no Silk Road route through here.",
    history:
      "In the Xiongnu language qilian meant \"heaven,\" so Qilian is literally \"Heaven Mountain.\" The Han general Huo Qubing broke the Xiongnu here, leaving them the lament \"lose our Qilian Mountains and our herds will not thrive.\" The Hexi Corridor then entered the Central Plains realm and became the throat of the Silk Road.",
  },

  tianshan: {
    seeing:
      "The Tianshan crosses central Xinjiang and splits the region into a southern and a northern half. About 2,500 km long, it is one of the largest mountain systems on Earth that stands far from any ocean. From the air you see white peaks and glaciers, a ring of yellow-green alluvial fans and oases at the foot, and beyond them the Taklamakan and Gurbantunggut deserts.",
    formation:
      "The Tianshan is a Palaeozoic fold system re-uplifted in the Cenozoic under the push of the Indian plate — a \"regenerated\" range. It is made of several parallel ranges with basins between them (the Ili valley, the Yanqi basin). Tomur Peak (7,443 m) is the highest point; Bogda Peak (5,445 m), just beside Ürümqi, is the best-known landmark.",
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
      "The Altai Mountains sit at the far north of Xinjiang, the border range shared by China, Kazakhstan, Russia and Mongolia. \"Altai\" means \"gold mountain\" in Mongolian, and the range has yielded gold since ancient times. It holds emerald glacial lakes and dense conifer forest — Kanas Lake is the most famous.",
    formation:
      "The Altai is a Palaeozoic fold range strongly reworked by Quaternary glaciation, which left U-shaped valleys, cirques and moraine-dammed lakes. It trends NW–SE. China's highest point here, Youyi (Friendship) Peak, reaches 4,374 m at the China–Russia–Mongolia junction. Kanas Lake is a landslide-and-moraine-dammed lake formed by glacial scour.",
    observation:
      "The Altai is lower and greener than the Tianshan: its slopes carry unbroken stands of Siberian larch and Schrenk's spruce, the densest mountain forest in Xinjiang. Winding glacial lakes lie in the valley floors, their water tinged green (Kanas is famous for changing colour). The trend is on a slant (NW–SE), unlike the true east–west Tianshan.",
    distinguish:
      "See the Tianshan entry: the Altai is high-latitude, with a low snow line, dense forest, a short range body and a slanted trend. It is also the only part of China draining to the Arctic Ocean — the Irtysh River rises here and reaches the Arctic via Russia, whereas Xinjiang's other rivers cannot leave the region (internal drainage).",
    concept:
      "At its high latitude (about 47–49° N) the Altai is not especially tall but its snow line is low, and its vertical zones are complete: from piedmont desert-steppe up through mountain forest and subalpine meadow to alpine snow and ice. It is also one of China's most heavily forested mountain regions.",
    history:
      "The Altai has been pasture for nomadic peoples for millennia, and Kazakh herders still move their flocks here seasonally. Rock art and deer stones in the mountains record thousands of years of steppe culture. The Tuvan villages around Kanas keep a distinctive log-cabin architecture and folk life.",
  },

  kunlun: {
    seeing:
      "The Kunlun is one of China's longest ranges — about 2,500 km from the Pamirs in the west to Qinghai in the east — and is called the \"ancestor of ten thousand mountains.\" It is the great barrier between the Tarim Basin and the Tibetan Plateau: the north slope drops steeply to desert, the south slope grades gently onto the plateau.",
    formation:
      "The Kunlun rose with the Tibetan Plateau under the India–Eurasia collision. It is built mainly of metamorphic rock and granite and trends roughly east–west. The western section carries 7,000 m peaks such as Kongur (7,649 m) and Muztagh Ata (7,546 m); the eastern section lowers gradually and joins the Altun and Qilian ranges.",
    observation:
      "From the air the Kunlun is an extremely long, extremely continuous east–west wall of snow mountains. To the north lies the yellow sand sea of the Tarim Basin (the Taklamakan), with almost no transition; to the south, the smoothly rolling high country of the Tibetan Plateau. Yuzhu Peak and the Kunlun Pass (4,768 m, where the Qinghai–Tibet Highway crosses) are good reference points.",
    distinguish:
      "The Kunlun and the Karakoram sound alike and lie next to each other, but they are not the same: the Karakoram is south-west of the Kunlun, closer to Pakistan, steeper, with denser glaciers and K2 (Qogir, 8,611 m, the world's second-highest peak). The Kunlun is broader, longer, older, with a higher snow line.",
    concept:
      "The Kunlun is the divide between two great geographic units — the internally drained, arid Tarim Basin and the cold, high Tibetan Plateau. Its glacier meltwater waters the oases of Hotan, Ruoqiang and others along the southern rim of the Tarim. Because the north slope drops straight to desert with no transition, the northern foot of the Kunlun is one of the most abrupt relief contrasts in China.",
    history:
      "In Chinese myth the Kunlun is the home of the gods and the Queen Mother of the West, the source of \"Kunlun culture.\" The southern Silk Road ran along its northern foot, stringing together the oasis kingdoms of Loulan, Yutian (Khotan) and Qiemo.",
  },

  karakoram: {
    seeing:
      "The Karakoram sits at the far south-west of Xinjiang on the China–Pakistan border, one of the densest concentrations of extreme peaks on Earth. It has four 8,000 m summits, including K2 (Qogir, 8,611 m), the world's second-highest mountain. \"Karakoram\" means \"black gravel mountains.\"",
    formation:
      "Like the Himalaya, the Karakoram belongs to the belt of the India–Eurasia collision; it rises fast and is deeply cut, making the terrain exceptionally steep. It holds the largest mountain glaciers of the middle latitudes — the Siachen Glacier is about 70 km long. The Karakoram Pass between China and Pakistan sits at about 4,700 m.",
    observation:
      "From the air the Karakoram is a dense field of sharp black rock peaks and white glaciers, with peak-to-valley relief often 3,000–4,000 m — more jagged than the main Kunlun crest. K2 is a near-perfect pyramid rising as an isolated peak.",
    distinguish:
      "See the Kunlun entry. Compared with the Himalaya: the Himalaya is longer, bowed, and the first barrier to Indian Ocean moisture, with a very wet south slope and a very dry north slope; the Karakoram is more continental and drier overall, yet its glaciers are larger, sustained by extreme altitude and cold.",
    concept:
      "The Karakoram is the classic case of \"why glaciers can exist in a dry region\": precipitation is low, but the altitude is so great and temperatures so low that both evaporation and melting are slow, so the glaciers are actually more massive than in wetter ranges. It is also an important source of the Indus.",
    history:
      "The Karakoram Highway, built jointly by China and Pakistan in 1978 (the China–Pakistan Friendship Highway), crosses here and is one of the highest paved international roads in the world. K2, remote and severe, is regarded by climbers as a harder ascent than Everest.",
  },

  taihang: {
    seeing:
      "The Taihang Mountains run through north China as the dividing line between the Loess Plateau and the North China Plain, trending NE–SW for about 400 km. Their signature is \"steep east, gentle west\": the east slope is a line of cliffs dropping straight onto the plain, while the west slope grades up onto the plateau.",
    formation:
      "The Taihang is a fault block of the North China platform, sharply uplifted along a fault on its eastern edge, which produced the steep east face. The upper rock is flat-lying red sandstone and limestone, cut by streams into the layered red cliffs of the \"Zhangshiyan landform.\" The high point, Xiaowutai Shan, reaches 2,882 m; Wutai Shan (near the Northern Great Mountain, Hengshan) lies in its northern section.",
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
      "The Greater Khingan Range runs through north-east China, trending NE–SW, the divide between the Inner Mongolian Plateau and the Northeast (Songnen) Plain and China's largest tract of natural forest. It is not high — mostly 1,100–1,400 m — with rounded, gentle summits, but the forest is so dense the whole range reads as one dark green mass.",
    formation:
      "The Greater Khingan is a Palaeozoic fold range long worn down and then tilted and uplifted as a block: the west slope grades gently onto the Inner Mongolian Plateau, the east slope drops along a fault to the Songnen Plain — clearly asymmetric. The southern section had volcanic activity, and cones and crater lakes survive around Arxan. The high point, Huanggang Peak, reaches 2,029 m.",
    observation:
      "From the air the Greater Khingan is a rounded, unbroken, dark-green sea of forest — no sharp peaks, no bare rock, no snow. The clearest feature is the east slope: a sharp line between the forest above and the checkerboard farm fields of the Songnen Plain below, with a marked drop.",
    distinguish:
      "The Greater and Lesser Khingan: the Greater Khingan is the long north–south body dividing the Inner Mongolian Plateau from the Northeast Plain; the Lesser Khingan lies to its north-east, trends NW–SE, and sits between the Songnen and Sanjiang plains, lower still. Versus Changbai Shan: Changbai is an isolated volcanic dome with a crater lake and greater height (2,691 m); the Greater Khingan is a continuous, rounded fold range.",
    concept:
      "The Greater Khingan roughly follows China's 400 mm annual-rainfall line and is the boundary between semi-humid and semi-arid China, and between forest and steppe. To the west is the Hulunbuir grassland; to the east, farmland and forest. It is also one of China's most important \"green lungs\" and timber regions.",
    history:
      "The Greater Khingan is traditional hunting ground for the Oroqen and Ewenki peoples. The catastrophic fire of May 1987 burned about 1.01 million hectares, the worst forest fire since 1949, after which the state greatly changed how the forest region is managed.",
  },

  changbai: {
    seeing:
      "Changbai Shan sits in south-eastern Jilin on the China–North Korea border, a large dormant volcano and the source of three great rivers — the Songhua, the Tumen and the Yalu. Its summit crater lake, Heaven Lake (Tianchi), is a near-circular caldera lake at 2,189 m, one of the highest and deepest lakes in China.",
    formation:
      "Changbai Shan is a shield volcano built by repeated Cenozoic eruptions. Its most recent large eruption, around 946 CE (the \"Millennium Eruption\"), was one of the largest on Earth in the past two thousand years. The crater then filled to form Heaven Lake; the edifice is basalt and volcanic debris, ringed by lava plateaus.",
    observation:
      "Amid the low, gentle hills of the north-east, Changbai Shan stands out sharply: an isolated, massive, nearly symmetrical cone, its top a jagged ring of crater wall around the deep blue circular lake. The slopes show clean vertical vegetation belts, from Korean pine forest at the foot to alpine tundra at the top.",
    distinguish:
      "Changbai versus the Greater Khingan: Changbai is an isolated volcano with a crater lake, high and symmetrical; the Greater Khingan is a continuous rounded fold range with no crater lake. Changbai's Heaven Lake versus the Tianshan's Heaven Lake: the former is a crater lake (circular, deep, at the summit), the latter a glacially scoured, moraine-dammed lake (elongated, on the mountainside).",
    concept:
      "Changbai Shan is the model of \"volcanic landforms\": a crater lake at the centre, then lava plateaus, then volcanic-debris slopes outward. Heaven Lake is a classic crater (maar-type) lake. Though called dormant, there is still a magma chamber below, and it is an active volcano requiring long-term monitoring.",
    history:
      "Changbai Shan is revered by the Manchu as their place of origin and was long closed to entry under the Qing. It is also a sacred mountain to the Korean people. Under the 1960 border agreement, about 54.5% of the Heaven Lake surface is on the Chinese side.",
  },

  hengduan: {
    seeing:
      "The Hengduan Mountains, in south-west China, are the only belt of high ranges that runs north–south, \"cutting across\" (heng duan) the connection between the Tibetan Plateau and the Sichuan Basin and Yunnan–Guizhou Plateau. The Jinsha (upper Yangtze), Lancang (Mekong) and Nu (Salween) rivers are squeezed here into parallel southward courses — the \"Three Parallel Rivers\" World Natural Heritage site.",
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
      "The Himalaya is the highest mountain range on Earth, a great arc more than 2,400 km long along the southern edge of the Tibetan Plateau between China and India and Nepal. Of the world's fourteen 8,000 m peaks, ten lie in or near this range. Mount Everest (Qomolangma), at 8,848.86 m, is the highest point on the planet.",
    formation:
      "About 50 million years ago the Indian plate struck Eurasia; sea-floor sediments were squeezed and lifted into mountains, and the range is still rising about 1 cm a year. That is why marine fossils can be found near the summit of Everest. The rock is sedimentary and metamorphic.",
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
      "Low as it is, the Nanling is still an important geographic line: it roughly marks the boundary between the middle and southern subtropical zones, so double-cropped rice and tropical crops grow on the south side and not the north. It is also a world-class metallogenic belt for non-ferrous metals and rare earths (the \"Nanling belt\").",
    history:
      "The First Emperor of Qin had the Lingqu Canal dug to link the Xiang and Li rivers, so that Central Plains boats could cross the Nanling into the Pearl system. In the Tang, Zhang Jiuling opened the Dayu Ridge road, and the Meiguan pass became a key north–south artery.",
  },

  helan: {
    seeing:
      "The Helan Mountains stand on the Ningxia–Inner Mongolia border, running north–south for about 200 km — an isolated, sharply rising rock range. Their purpose is to block: they stop cold air and drifting sand from the north-west (the Tengger Desert) and shelter the Ningxia Plain to the east, making it a \"Jiangnan beyond the passes.\"",
    formation:
      "The Helan is a fault-block range faulted on both the east and west sides, with the central block lifted as a whole, so it is steep-sided with large relief. It is built mainly of gneiss and limestone. The high point, Aobao Geda, reaches 3,556 m.",
    observation:
      "From the air the Helan is a north–south, grey, almost bare rock crest standing abruptly between two expanses of yellow: to the east the green Ningxia (Yinchuan) Plain, irrigated by diverted Yellow River water; to the west the deserts and gobi of Alxa. Large alluvial fans spread at the mountain mouths.",
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
      "The Tibetan Plateau (Qinghai–Tibet Plateau) is the highest, largest and youngest plateau on Earth, averaging above 4,000 m and covering about 2.5 million km² — the \"roof of the world\" and \"third pole.\" The Yangtze, Yellow, Lancang–Mekong, Yarlung Tsangpo–Brahmaputra and Indus all rise here.",
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
      "The plateau is traditional Mongol pasture and the stage for the Xiongnu, Turks, Khitan and Mongols in turn. The Xilingol and Hulunbuir grasslands are famous natural pastures. Grazing bans and rest-grazing in recent years have allowed some degraded grassland to recover.",
  },

  "yunnan-guizhou": {
    seeing:
      "The Yunnan–Guizhou Plateau, in south-west China, covers eastern Yunnan and most of Guizhou at 1,000–2,000 m. It is best known for karst: limestone dissolved by water into stone forests, caves, sinkholes and underground rivers, leaving a surface where \"there are not three feet of level ground.\"",
    formation:
      "This was shallow sea in the geological past, which laid down thick limestone; it was later uplifted with the Tibetan Plateau. Limestone dissolves slowly in carbon-dioxide-charged water, and over millions of years both surface and underground have been \"hollowed out\" into fantastic shapes. The Yunnan part is higher with gentler relief (more basins, bazi); the Guizhou part is more deeply cut and broken.",
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
      "The Pamirs, at the far west of China, are the \"knot\" where the Tianshan, Kunlun, Karakoram and Hindu Kush meet, averaging above 4,000 m — the ancient \"Congling\" (Onion Range). Muztagh Ata (7,546 m), with its rounded form and glaciers running from summit to foot, is called the \"father of ice mountains.\"",
    formation:
      "The Pamirs are the western extension of the Tibetan Plateau, a plateau raised where several mountain systems are pressed together, its surface a broad high plain with snow peaks and widespread glaciers rising from it.",
    observation:
      "From the air the Pamirs are a lofty, open, cold-toned highland scattered with dome-topped giant peaks and the deep-blue alpine lakes at their feet (Karakul reflecting Muztagh Ata is the classic view). It stands four or five thousand metres above the Tarim Basin around it.",
    distinguish:
      "The Pamirs versus the Tibetan Plateau: the Pamirs are the western extension, far smaller, a \"mountain knot\" rather than a broad plateau. Versus the Tianshan: the Tianshan extends north-east from the Pamirs, one of its \"arms.\"",
    concept:
      "The Pamirs are \"the mountain knot of Asia\" — several great ranges converge here — and a watershed for several large rivers (the Amu Darya, some tributaries feeding the Tarim, tributaries of the Indus). High and not at especially high latitude, it is one of the most heavily glaciated regions in China.",
    history:
      "The Pamirs were the pass that the Silk Road had to cross to reach Central Asia and beyond; Xuanzang crossed the \"Congling\" on both his westward journey and his return. Tashkurgan is the highland gateway county, home for generations to the Tajik people.",
  },

  // ============ Basins ============
  "tarim-basin": {
    seeing:
      "The Tarim Basin, in southern Xinjiang, is enclosed on all four sides by the Tianshan, Kunlun, Pamirs and Altun ranges — China's largest inland basin (about 400,000 km²). Its centre is China's largest desert, the Taklamakan, with a ring of oases holding the sand in.",
    formation:
      "The Tarim Basin is an old, stable block (the Tarim craton); debris shed from the surrounding rising ranges has long accumulated in it, forming thick sediments that also hold rich oil and gas. The basin floor is about 800–1,300 m.",
    observation:
      "From the air the Tarim Basin is a huge yellow oval: the moving dunes of the Taklamakan in the centre (rows of crescent sand ridges), a ring of snowmelt-fed oasis cities around it (Kashgar, Hotan, Aksu, Korla), and grey gobi and white snow mountains beyond. The Tarim River skirts the desert along the northern rim.",
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
      "From the air the Junggar Basin is roughly triangular: the Gurbantunggut Desert in the centre, but its dunes are mostly fixed by saxaul, so it reads as mottled yellow-green rather than the pure moving yellow of the Taklamakan. Lakes such as Aibi and Manas lie in the north, and the piedmont oasis belt of the northern Tianshan (Ürümqi, Shihezi, Karamay) rings the edge.",
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
      "Turpan was a Silk Road hub; the ruined cities of Jiaohe and Gaochang attest to more than two thousand years of prosperity here. The karez, the local answer to the dry heat, is ranked with the Great Wall and the Grand Canal as one of ancient China's three great works.",
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
      "The North China Plain has been the centre of Chinese civilisation since the Xia, Shang and Zhou. The Grand Canal runs north–south across it, linking the Hai, Yellow, Huai and Yangtze river systems. Every great change of course of the Yellow River has profoundly shaped the people on this land.",
  },

  yangtze: {
    seeing:
      "The Middle-Lower Yangtze Plain runs from Yichang in Hubei to the mouth of the Yangtze — a string of alluvial plains along the river (the Two-Lakes Plain, the Poyang Lake Plain, the Wanjiang Plain, the Yangtze Delta). It is water-netted and lake-rich, home to China's largest group of freshwater lakes, and has been a \"land of fish and rice\" since ancient times.",
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
      "The Taklamakan Desert lies in the centre of the Tarim Basin, about 330,000 km² — the largest desert in China and the second-largest shifting-sand desert in the world. \"Taklamakan\" is often glossed as \"go in and you won't come out.\" Almost all of it is tall moving dunes, dune chain after dune chain.",
    formation:
      "The sand comes from weathered debris off the surrounding ranges, carried and piled by the wind. The basin is closed and extremely arid (under 50 mm of rain a year, and the centre gets essentially none), vegetation is minimal, and the dunes are pushed along by the wind, the tallest sand mountains reaching 100–200 m of relative height.",
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
      "The Hexi Corridor, in western Gansu, is a long narrow strip of level ground, about 1,000 km long and tens to just over a hundred kilometres wide, between the Qilian Mountains and the Heli and Longshou ranges to the north. \"Hexi\" means \"west of the (Yellow) River.\" It is a corridor that links the Central Plains with the Western Regions, the single most important section of the ancient Silk Road.",
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
      "The Three Gorges of the Yangtze are the great canyon where the river cuts through the Wu Shan range, from Baidicheng at Fengjie in Chongqing to Nanjinguan at Yichang in Hubei — about 190 km, made up of the Qutang, Wu and Xiling gorges with wider valleys between. It is the most rugged and magnificent stretch of the Yangtze, cliffs squeezing the river between them.",
    formation:
      "The Wu Shan is a roughly north–south fold range. The Yangtze already existed; as the Wu Shan rose, the river cut down at the same rate (the classic case in the \"antecedent river\" debate), sawing the range open into a deep trough — a beaded course of gorges alternating with open valleys.",
    observation:
      "From the air the Three Gorges are a deep, narrow, twisting canyon cut by the Yangtze through the mountains: in the gorge sections the walls stand sheer and the river narrows; in the open-valley sections it widens out with towns and fields. The Kui Gate at the mouth of Qutang Gorge, two mountains facing off, is the most dramatic; the Three Gorges Dam is at the mouth of Xiling Gorge.",
    distinguish:
      "The Three Gorges versus the Yarlung Tsangpo Grand Canyon: the Three Gorges is a V-shaped canyon cut by the Yangtze through a fold range, about a thousand metres deep, famous for ruggedness and grandeur; the Yarlung Tsangpo Grand Canyon is a horseshoe-shaped hairpin of the Yarlung Tsangpo around Namcha Barwa, with peak-to-valley relief of 5,000–6,000 m — the deepest and longest canyon in the world. Versus Tiger Leaping Gorge: Tiger Leaping Gorge is where the Jinsha cuts between the Jade Dragon and Haba snow mountains, about 3,900 m deep, deeper and narrower than the Three Gorges.",
    concept:
      "The Three Gorges is a textbook of \"river downcutting\": it proves that as long as uplift is slow enough and the river's discharge large enough, a river can \"saw through\" a mountain. The Three Gorges Project uses the drop and the gorge terrain to build the world's largest hydropower station, and it has also changed the water and sediment rhythm downstream and the water regime of the lower lakes.",
    history:
      "Baidicheng, Qu Yuan's hometown and Wang Zhaojun's hometown all lie along the Three Gorges; Li Bai's \"at dawn I left Baidi amid coloured clouds\" is about this stretch. The Three Gorges Project began in 1994 and was completed in 2009, involving the relocation of over a million people and a large heritage-rescue effort.",
  },

  "tsangpo-gorge": {
    seeing:
      "The Yarlung Tsangpo Grand Canyon, in south-eastern Tibet, is the huge horseshoe hairpin where the Yarlung Tsangpo swings around Namcha Barwa (7,782 m). It averages about 2,268 m deep, reaches 6,009 m at its deepest, and runs 504 km — the deepest and longest canyon in the world.",
    formation:
      "The Yarlung Tsangpo flows west to east across the Tibetan Plateau; here it meets Namcha Barwa, a mountain rising fast, and is forced into a nearly 180° bend before cutting south through the Himalaya and off the plateau into India. The mountain rises fast and the river cuts hard, producing the extreme peak-to-valley relief.",
    observation:
      "From the air the Yarlung Tsangpo Grand Canyon is a bottomless slot wrapped in a great loop around the snow peak of Namcha Barwa. Because Indian Ocean moisture pours up the river valley, almost every vegetation belt on Earth is stacked here, from tropical rainforest on the valley floor to snow and ice on the summit. Namcha Barwa is usually veiled in cloud — the \"shy girl peak.\"",
    distinguish:
      "See the Three Gorges entry. What makes the Yarlung Tsangpo Grand Canyon special: it is the \"gate\" for moisture to enter the Tibetan Plateau — warm, moist air from the Indian Ocean travels north up this deep valley, making south-eastern Tibet the wettest, greenest corner of the plateau. Neither the Three Gorges nor Tiger Leaping Gorge has this moisture-carrying function.",
    concept:
      "The Yarlung Tsangpo Grand Canyon is an extreme case of terrain–climate coupling: a deeply cut river valley becomes a moisture channel, carrying outside humidity into the closed interior of the plateau, so the valley gets two or three thousand millimetres of rain a year while the plateau interior gets only one or two hundred. Its hydropower potential also ranks first among the world's great rivers.",
    history:
      "Downstream of the canyon the Yarlung Tsangpo enters India and becomes the Brahmaputra, finally joining the Ganges and emptying into the Bay of Bengal. The core of the canyon is almost untrodden; a Chinese scientific team first traversed the entire canyon on foot only in 1998.",
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
      "Hainan was once connected to the mainland; the Qiongzhou Strait later dropped along faults and the sea flooded in, making it an island. The centre is mountains of granite and metamorphic rock (Wuzhi Shan, 1,867 m; Yinggeling), grading outward through hills, terraces and plains to the coast. The north has extensive basalt volcanic plateaus and craters (Huguangyan, Ma'anling volcano).",
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
      "Taiwan is China's largest island, off the south-east of the mainland at the western edge of the Pacific, facing Fujian across the Taiwan Strait. It is a long, narrow, mountainous island: a Central Range runs the length of it from north to south, splitting the island into an eastern and a western half, and the main summit, Yushan, at 3,952 m, is the highest point in eastern China and on the western Pacific island arc.",
    formation:
      "Taiwan sits exactly on the collision belt between the Eurasian plate and the Philippine Sea plate; the collision squeezes sea-floor sediments up into mountains, and the island is still rising fast (about 0.5–1 cm a year), with frequent earthquakes and many hot springs. The Central, Xueshan, Yushan, Alishan and Coastal ranges run roughly parallel.",
    observation:
      "From the air: the east side is steep mountains dropping straight to the coast (the Qingshui Cliffs), with almost no plain; the west side steps down from mountains to hills, terraces and then alluvial plains (the Jianan Plain), where the cities and farmland are concentrated. Continuous high mountains run down the centre, and the high peaks hold snow in winter.",
    distinguish:
      "Taiwan versus Hainan: both are continental islands with a range running the length. But Taiwan's mountains are higher, steeper and earthquake-prone (an active collision belt), and range from subtropical to cool-temperate; Hainan's mountains are low, the geology stable, the whole island tropical, and the terrain a ring.",
    concept:
      "Taiwan is a living specimen of \"young collision mountain-building\": it shows that building mountains does not take tens of millions of years — under fierce plate collision, near-4,000 m mountains can be piled up in a few million years, and they are still growing. The steep-east, gentle-west asymmetry is exactly the direction of the collision squeeze.",
    history:
      "Taiwan has been Chinese territory since ancient times; Sun Quan of the Three Kingdoms and Emperor Yang of Sui sent people there, and the Yuan set up the Penghu Inspectorate. It became a province in 1885. After the Treaty of Shimonoseki it was occupied by Japan, and it returned to China in 1945 after victory in the war of resistance.",
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
      "The Australian Alps are the highest part of the continent, straddling the New South Wales–Victoria border at the southern end of the Great Dividing Range. Mount Kosciuszko, at 2,228 m, is the highest point in mainland Australia. This is the only substantial area of the country that holds a reliable winter snowpack.",
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
      "The rock was laid down in a sinking basin around 800–500 million years ago, then folded into a great arch. Erosion has stripped the soft core, leaving the hard, upturned rims standing as ridges — Wilpena Pound is simply the eroded centre of one such fold, enclosed by its own resistant edges. The rocks here hold some of the world's earliest animal fossils (the Ediacaran).",
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
      "The Blue Mountains rise just west of Sydney — not really mountains but a deeply dissected sandstone plateau, standing about 1,100 m and slashed by sheer-walled valleys. The famous view is of the Three Sisters and the Jamison Valley from the escarpment at Katoomba. The blue haze that names them comes from fine droplets of eucalyptus oil scattering light.",
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
      "The Kimberley is a remote sandstone plateau in Australia's far north-west, about the size of Germany, with a deeply indented coast of tidal gorges and a monsoon climate. Its best-known feature is the Bungle Bungle Range in Purnululu — a maze of orange-and-grey banded beehive domes. The tides here are among the largest in the world, over 10 m.",
    formation:
      "The plateau is very old, flat-lying sandstone, dissected by rivers into gorges and mesas. The Bungle Bungles' domes are what remains after weathering along a grid of vertical cracks in the sandstone; the grey bands are a thin skin of cyanobacteria protecting the softer, orange, iron-stained layers between more clay-rich grey bands. The huge tides drown the river mouths, making \"horizontal waterfalls\" where water is forced through narrow gaps.",
    observation:
      "From the air the Kimberley is red-and-black rock, savanna woodland, and a coast that looks bitten out — long fjord-like inlets, reefs and islands. Purnululu's beehive domes cluster like a hive; Mitchell Falls steps down a tiered gorge. In the wet season the rivers flood brown and huge.",
    distinguish:
      "Compared with the Blue Mountains (also a sandstone plateau), the Kimberley is tropical, monsoonal, and coastal, with tidal gorges the Blue Mountains lack. The Bungle Bungles are sometimes taken for wind-sculpted dunes; they are solid rock, shaped by water and biology along joints.",
    concept:
      "The banded domes are a rare case of biology shaping a landform: the dark stripes are living cyanobacterial crust that armours the rock. The plateau also shows \"antecedent drainage\" — rivers older than the present relief, cutting gorges as the land rose. The giant tides come from the shape of the continental shelf funnelling and amplifying the tidal wave.",
    history:
      "The Kimberley holds Gwion Gwion and Wandjina rock art, some of the oldest figurative art known. It was one of the last parts of the continent settled by Europeans, from the 1880s, and remains sparsely populated, with large Aboriginal-owned lands.",
  },

  "simpson-desert": {
    seeing:
      "The Simpson Desert covers about 176,000 km² of central Australia, spanning three states. It is famous for its dunes: more than 1,100 parallel sand ridges running NNW–SSE, some over 200 km long without a break — the longest parallel dunes on Earth. \"Big Red,\" near Birdsville, is the best-known.",
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
      "For Aboriginal peoples the mound springs were reliable water and important sites on trade routes across the desert. The first flowing bore was drilled in 1878; within decades thousands of uncontrolled bores were wasting water, and the artesian pressure has been falling ever since.",
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
      "The Twelve Apostles are a group of tall limestone stacks standing in the Southern Ocean just off the Great Ocean Road in Victoria. They rise up to about 45 m out of the surf, a short way from sheer coastal cliffs. Despite the name there were never twelve; today about seven remain standing.",
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
      "Tasmania is a piece of continental crust that was joined to the mainland until rising seas flooded Bass Strait about 12,000 years ago. Much of its high country is capped by dolerite, a hard volcanic rock that forms columned cliffs and boulder fields. Ice-age glaciers scoured the west, gouging U-shaped valleys, cirques and hundreds of lakes.",
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
};
