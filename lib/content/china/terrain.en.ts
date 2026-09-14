import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Mountain systems ============
  qinling: {
    // seeing sources: 太白山拔仙台海拔 3,771.2 m；广义秦岭山系东西长约 1,600 km ——
    //   陕西省宁陕县人民政府 https://www.ningshan.gov.cn/Content-644809.html（1 级，2026-09-08 核）。
    //   「秦岭是长江与黄河的分水岭」等表述经复核准确，中英逐句对应无分歧。
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
    // formation sources: 现代冰川约 2680 条、面积约 1600 km² —— 中国第二次冰川编目（2693 条 / 1597.8 km²），
    //   与正文一致，2026-09-08 核。
    //   **团结峰（岗则吾结）海拔没有定论**：流传的数值至少有 5808、5827、5937 米三组，
    //   没有找到测绘部门的定论。原文写「各次测量在 5808—5827 米之间」，**把两个数字当成了区间的上下界**，
    //   而 5937 米这一组落在区间之外 —— 已改成并列举例，不宣称边界。
    //   下一轮去核自然资源部 / 国家基础地理信息中心是否有正式高程（见 issue）。
    formation:
      "The Qilian is the north-eastern edge of the Tibetan Plateau, still rising under the northward push of the Indian plate. It is a set of parallel ridges and valleys trending NW–SE, built of Palaeozoic metamorphic rock and granite. China's second glacier inventory counts about 2,680 glaciers here, roughly 1,600 km² of ice — the solid reservoir of the Hexi Corridor. The highest summit, Tuanjie (Kangze'gyai) Peak, is about 5,800 m; published survey figures do not agree, among them 5,808 m and 5,827 m.",
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
    // formation sources: 托木尔峰海拔 **7443 m**（中国官方 1:100 万地图口径；国际常用值 7439 m，两者是测量口径差异，
    //   注释里已并列），位于阿克苏地区温宿县与吉尔吉斯斯坦国境线上 —— 正文只陈述地理位置、不涉主权。
    //   博格达峰主峰 5445 m，在阜康市境内、天山天池所在山。2026-09-08 核。
    //   **「最有名的地标」是没有限定语的主观最高级，中英两边都踩了**，已改成带范围的说法。
    //   天山全长约 2500 km、中国境内约 1700 km；「世界上最大的独立纬向山系**之一**」——
    //   **多数来源写的是不带「之一」的绝对说法，正文反而比来源更保守**，是正确写法的范例。
    //   雪线 3600–4200 m（《中国国家地理》给天山约 3900–4100 m）、阿尔泰约 2800 m（中国雪线最低处），均核实无误。
    //   **零争议红线复核通过**：`history` 段只写古丝绸之路北道/中道、绿洲城市历史与 2013 年 UNESCO 列入。
    formation:
      "The Tianshan is a Palaeozoic fold system re-uplifted in the Cenozoic under the push of the Indian plate — geomorphologists call it a \"regenerated\" range. It is made of several parallel ranges with basins between them (the Ili valley, the Yanqi basin). Its highest point, Tomur Peak (about 7,443 m), sits on the China–Kyrgyzstan border; Bogda Peak (5,445 m), just beside Ürümqi, is a well-known landmark of the range's eastern section.",
    observation:
      "Three things identify the Tianshan: a continuous set of parallel east–west ridges; large modern glaciers and permanent snow on the summits; and a row of huge alluvial fans at the foot, each fan edge holding an oasis city (Ürümqi, Shihezi, Korla). Heavenly Lake (Tianchi), a glacial lake below Bogda Peak, is deep blue and the easiest single point to pick out.",
    distinguish:
      "The Tianshan and the Altai both sit in northern Xinjiang. The Tianshan is at lower latitude, with a high snow line (3,600–4,200 m), a wide belt of piedmont oases, and enormous east–west length; the Altai is farther north, with a low snow line (about 2,800 m), dense forest, a NW–SE trend, and a fraction of the length. Versus the Qilian: the Tianshan is longer and encloses large basins; the Qilian is shorter and farther east.",
    concept:
      "The Tianshan is Xinjiang's climate wall and its \"wet island\": the north slope faces the westerlies and is moist enough for forest and grassland, while the south slope is dry and drops straight to desert. Its glacier meltwater is the lifeline of almost every oasis on both sides — hence the saying that Tianshan snowmelt is \"as precious as oil.\"",
    history:
      "The northern foot of the Tianshan carried the northern Silk Road; the southern foot, the middle road. Cities such as Ürümqi and Yining were all built on oases watered by Tianshan snowmelt. In 2013 Xinjiang Tianshan was inscribed as a World Natural Heritage site for its glaciers, snowy peaks and vertical natural zones.",
  },

  // altai formation sources: 4,374 m for Youyi/Khüiten — CAS IGSNRR, 《中国地貌·阿尔泰山脉》
  //   https://igsnrr.cas.cn/cbkx/kpyd/zgdl/cndm/202009/t20200910_5692378.html (level 2);
  //   border attribution and tripoint — en.wikipedia "Nairamdal Peak" / zh.wikipedia 「友谊峰」
  //   (level 3, checked 2026-09-08). Naming trap: Chinese 「友谊峰」 (Friendship Peak, 4,374 m,
  //   on the China–Mongolia border) is Mongolian Khüiten; Mongolian Nairamdal ("friendship",
  //   4,082 m) is the tripoint and is 奎屯峰/Kuitun in Chinese. The two languages' "Friendship
  //   Peak" are different mountains — the original text said the 4,374 m peak was at the tripoint.
  altai: {
    // seeing sources: 2026-09-08 复核：`formation` 段刚修过的那处（友谊峰是中蒙界峰、三国交界点是奎屯峰）
    //   **没有回归**，条目上方的命名陷阱注释与中英正文三处一致。
    //   其余 5 个板块经逐句对照未见中英分歧；额尔齐斯河经俄罗斯注入北冰洋、
    //   是新疆唯一的外流水系，属公认地理事实。
    seeing:
      "The Altai Mountains sit at the far north of Xinjiang, spanning China, Kazakhstan, Russia and Mongolia. \"Altai\" is generally taken to come from a Turkic–Mongolic word for \"gold,\" and the region has historically produced placer gold. It holds greenish glacial lakes and stands of conifer forest, including the well-known Kanas Lake.",
    // formation sources: 友谊峰 4374 m 为中蒙界峰；**中俄蒙三国交界点是它以北约 2.5 km、海拔 4082 m 的奎屯峰
    //   （Nairamdal Peak）** —— 中科院地理科学与资源研究所《中国地貌·阿尔泰山脉》（2 级）与
    //   Wikidata/维基「Nairamdal Peak」词条，2026-09-08 复核。
    //   **复核时撞到一条相反的英文摘要**（称友谊峰就在三国交界点上），来源不明、与 Wikidata 冲突，
    //   采信力更低，**未据以推翻已核实的结论** —— 记在这里，免得下一轮再被同一条摘要动摇。
    //   阿尔泰山雪线约 2800 m，是中国雪线最低处。`history` 段只写游牧牧场、哈萨克族转场、岩画鹿石、
    //   图瓦人村落，均为客观民俗与历史事实，零争议红线通过。
    formation:
      "The Altai's folding dates from the Palaeozoic; Quaternary glaciation was strong here and left U-shaped valleys, cirques and moraine-dammed lakes. It trends NW–SE. The Chinese section is over 500 km long, with ridges mostly above 3,000 m; the highest point, Youyi (Friendship) Peak — Khüiten Peak on the Mongolian side — reaches 4,374 m on the China–Mongolia border, while the China–Russia–Mongolia tripoint is Kuitun Peak (4,082 m) about 2.5 km to its north. Kanas Lake is generally explained as a glacially scoured valley dammed by terminal moraine.",
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
    // formation sources: 公格尔峰约 7649 m、昆仑山口 4768 m、乔戈里峰 8611 m（世界第二高峰）经核无误，2026-09-08。
    //   **慕士塔格峰有两个并行数值**：7509 m 与 7546 m。中文维基正文给 7509、同时标注「一说 7546 米」，
    //   且该条目自 2014 年起标着「没有列出任何参考或来源」—— 原文单挑了 7546 当定论，已改成两个并列。
    //   `history` 段只写神话文化与古代丝绸之路，未涉现代政治，零争议红线通过。
    formation:
      "The Kunlun rose with the Tibetan Plateau under the India–Eurasia collision. It is built mainly of metamorphic rock and granite and trends roughly east–west. Where its western section meets the Pamirs it carries 7,000 m peaks such as Kongur (about 7,649 m) and Muztagh Ata (in the 7,500 m class; sources give both 7,509 m and 7,546 m); the eastern section lowers gradually and joins the Altun and Qilian ranges.",
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
    // formation sources: 喀喇昆仑山脉全球 4 座 8000 米级山峰（K2 8611 m、加舒尔布鲁姆 I / II、布洛阿特峰）——
    //   条目未误称这 4 座都在中国境内，表述准确。红其拉甫达坂约 4700—4733 m；
    //   喀喇昆仑山口国际资料多给 5540 m（文中 5575 m，差约 35 m，属不同测绘口径）。
    //   中巴公路施工实际是 1966 年起、1978/79 年完工，文中「1970 年代」是简化但落在主要施工年代内。
    //   **零争议红线复核通过**，但记两处「离争议最近」的地方供以后优先复核：
    //   ① 锡亚琴冰川位于印巴克什米尔争议区、是军事对峙前线，条目只引用其长度作地理事实、
    //      未提归属或争议 —— 是全书里离克什米尔议题最近的一句；
    //   ② 真正的喀喇昆仑山口位于中国新疆与印控拉达克之间，条目只说「在东侧」、未点国别、
    //      未描述边界，处理方式已是中性表述。
    //   两处都符合当前红线，**若以后收紧，从这两处开始看**。
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
    // seeing sources: 长约 400 km、主峰小五台山东台 2882 m、沿东缘大断裂强烈抬升的断块山成因、
    //   与黄土高原/华北平原的分界关系 —— 《中国国家地理》
    //   https://www.dili360.com/cng/article/p54ed2aee95d2c70.htm（2 级）与太行山东麓断裂带研究，2026-09-08 核。
    //   全篇 6 板块核实无误，本轮无需改动。
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
    // seeing sources: 黄岗峰 2029 m 为大兴安岭最高峰；1987 年「5·6」特大森林火灾过火面积 101 万公顷
    //   （其中有林面积 70 万公顷）、211 人遇难 —— 中国人大网《关于大兴安岭特大森林火灾事故和处理情况的汇报》
    //   http://www.npc.gov.cn/wxzl/gongbao/2000-12/13/content_5001951.htm（1 级，2026-09-08 核）。
    //   全篇 6 板块核实无误，本轮无需改动。
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
    // history sources: 天池海拔 2189.1 m、火山口湖 —— 吉林省人民政府
    //   https://dfz.jl.gov.cn/ybjl/201811/t20181108_5447143.html（1 级，2026-09-08 核）；
    //   946 年前后的「千年大喷发」为过去两千年全球规模最大的火山喷发之一（VEI 6–7），原文用「之一」措辞克制，无需改。
    //   **history 段原写「1962 年边界条约……略多于一半在中国一侧」，方向是反的**
    //   （该条约把天池约 54.5% 划在朝鲜一侧）。**但修法不是把比例改对，而是整句删掉** ——
    //   项目零争议红线写明 `history` 段不碰现代政治与领土，「哪一国分到多少」正属这一类。
    //   现在只保留「天池跨在中国与朝鲜的边界上」这个中性地理事实。
    history:
      "Changbai Shan is revered by the Manchu as their place of origin and was long closed to entry under the Qing. It is also regarded as a sacred mountain on the Korean Peninsula. Heaven Lake straddles the border between China and North Korea.",
  },

  hengduan: {
    // seeing sources: 贡嘎山 7508.9 m（2023 年 10 月公布的最新高程），四川省与横断山系最高峰；
    //   三江并流 2003-07-02 列入 UNESCO 世界遗产 https://whc.unesco.org/en/list/1083/（1 级），
    //   是中国唯一满足全部四条自然遗产标准的项目；「物质向东南挤出」的成因与学界主流解释一致。
    //   2026-09-08 核，全篇 6 板块无误，本轮无需改动。
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
    // seeing sources: 珠峰新高程 8848.86 m，2020-12-08 中尼两国联合宣布 ——
    //   国家体育总局 https://www.sport.gov.cn/n4/n15219/c972329/content.html（1 级，2026-09-08 核）。
    //   长 2400 余 km、14 座 8000 m 级山峰中 10 座在此一带，均核实无误。
    //   碰撞时间「约 5000 万年前」是通行的教科书近似值（学界研究结论在 35–65 Ma 之间），
    //   原文已用「约」字，不算断言。
    //   **零争议红线复核通过**：`history` 段只写登山史与两国联合测量，边界表述为中性地理事实。
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
    // seeing sources: 五岭（越城岭/都庞岭/萌渚岭/骑田岭/大庾岭）、猫儿山 2141.5 m（越城岭主峰、南岭最高峰）；
    //   灵渠为秦经略岭南所凿、沟通湘江与漓江，唐代张九龄开凿大庾岭道 —— 均为公认史实，2026-09-08 核。
    //   全篇 6 板块无误；`history` 只涉前现代史，零争议红线通过。
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
    // seeing sources: 主峰敖包疙瘩 3556 m；东麓年降水约 190–200 mm、西麓降至 110 mm 以下 ——
    //   中国气象局 https://www.cma.gov.cn/kppd/kppdqxsj/kppdtqqh/202111/t20211103_4158960.html（1 级，2026-09-08 核）。
    //   **长度「约 200 公里」各来源不一致**：宁夏贺兰山国家级自然保护区管理局给保护区本身南北长 170 km，
    //   维基给约 270 km，差异来自统计起讫点与是否含保护区外延伸段。「约 200 公里」落在通行范围内，
    //   本轮不改，但下一轮若拿到测绘口径应写明按什么算。
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
    // formation sources: 平均海拔 4000 m 以上、总面积约 250 万 km²、地壳厚约 70 km ——
    //   中国科学院青藏高原研究所 https://itpcas.cas.cn/new_kxcb/new_kpwz/202012/t20201211_5814695.html（1 级，2026-09-08 核）。
    //   **隆升过程：不是整体抬升，是分阶段差异性隆升** —— 丁林院士团队综述，中科院官网报道
    //   https://www.cas.cn/cm/202208/t20220803_4843832.shtml（1 级）：
    //   约 9500 万年前冈底斯隆出海面 → 约 5500–4500 万年前冈底斯造山带升至约 4500 m →
    //   约 4500–4000 万年前分水岭山脉升至约 5000 m（「两山夹一盆」）→ 约 4000–3000 万年前中央谷地抬升 →
    //   约 2500–1500 万年前喜马拉雅与昆仑接近现代高度。原文的「整体抬升」把跨越八千万年的过程
    //   写成了一次性事件。
    //   **history 段已删去「1951 年西藏和平解放」一句** —— 那是关于当代主权的政治表述，
    //   触及项目零争议红线（`history` 段只写地质史与广泛记载的前现代史）；公路、铁路通车年份是
    //   中性工程事实，保留。
    formation:
      "The plateau is the result of the Indian plate driving north into Eurasia; the crust has been thickened to about 70 km (normal continental crust is about 35 km). The plateau did not rise all at once: research from the Chinese Academy of Sciences shows the Gangdise belt stood above sea level around 95 million years ago, after which different ranges rose in stages — the Gangdise orogen reached about 4,500 m some 55 to 45 million years ago, while the Himalaya and Kunlun only approached their present heights roughly 25 to 15 million years ago, which is when the plateau took its modern form. It carries several roughly east–west ranges (Gangdise, Nyainqentanglha, Tanggula, Kunlun) with broad lake basins and grasslands between them.",
    observation:
      "From ten kilometres up the plateau is a vast, comparatively flat, yellow-brown highland, dotted with countless deep-blue lakes (Namtso, Selin Co, Qinghai Lake) and white snow ranges. The edges (Himalaya, Hengduan, Kunlun) are steep and broken; the interior (northern Tibet, Hoh Xil) is smooth. The air is thin and visibility extreme.",
    distinguish:
      "The Tibetan Plateau versus the Inner Mongolian and Loess plateaus: the Tibetan Plateau stands two to three thousand metres higher, is alpine and cold, and has \"high mountains on top of a plateau\"; the Inner Mongolian Plateau is flat, dry and about 1,000 m; the Loess Plateau is broken, loess-covered and 1,000–2,000 m.",
    concept:
      "The Tibetan Plateau is \"a rise of the land,\" not just \"ground that is high\": the whole-scale uplift of this thick slab of crust changed Asia's atmospheric circulation, shaped the East Asian monsoon, and made the plateau itself cold — its climatic influence reaches far beyond its own area, which is why it is called the \"driver\" of Asian climate.",
    history:
      "The plateau is the homeland of the Tibetan people; the Potala Palace and Jokhang Temple are sacred sites of Tibetan Buddhism. The Sichuan–Tibet and Qinghai–Tibet highways opened in 1954, and the Qinghai–Tibet Railway — the highest railway in the world — opened throughout in 2006.",
  },

  loess: {
    seeing:
      "The Loess Plateau, in north-central China, has the largest and thickest loess cover on Earth, up to 100–200 m deep. Its surface is dissected into a maze of gullies, it is the main source of the Yellow River's sediment, and it is a cradle of Chinese civilisation.",
    // formation sources: 风成说（刘东生「新风成说」）为学界共识：黄土矿物成分与本地基岩不同、与中亚—蒙古戈壁一致，
    //   颗粒由西北向东南变细 —— 正文表述无误，2026-09-08 核。
    //   **黄土厚度因地而异**：晋东南/豫西北 20–80 m、晋西 80–120 m、陕北 100–150 m、
    //   甘肃境内 200–300 m，兰州九州台最厚 326–409 m ——
    //   国家发改委《黄土高原地区综合治理规划大纲》
    //   https://www.ndrc.gov.cn/fzggw/jgsj/njs/sjdt/201101/W020240430572756442125.pdf（1 级）。
    //   正文的「100–200 米」是中段概括，作为整体特征描述不算错，本轮不改。
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
    // seeing sources: 内蒙古高原为中国第二大高原（次于青藏高原），海拔一般 1000–1200 m（局部 1000–1400 m），
    //   大致以 400 mm 等降水量线为半干旱/干旱分界 —— 多来源一致，2026-09-08 核（3 级）。
    //   与大兴安岭条目里「400 mm 线的地理标志物」的说法相互印证、不矛盾。
    //   全篇 6 板块无误，本轮无需改动。
    seeing:
      "The Inner Mongolian Plateau, China's second-largest plateau by area, spans central and eastern Inner Mongolia at about 1,000–1,200 m. Its signature is flatness — relief is minimal, and grassland runs east to west, grading from meadow steppe through typical steppe to desert steppe and finally into desert.",
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
    // seeing sources: 云贵高原海拔 1000–2000 m，跨云南东部与贵州大部；喀斯特为其标志性地貌。
    //   「工程性缺水」「坝子」「峰林峰丛」等表述经复核准确（2026-09-08 核）。
    //   **原文「最出名的是」是没有比较口径的主观最高级，已改成直接陈述** —— 事实一点没少。
    seeing:
      "The Yunnan–Guizhou Plateau, in south-west China, covers eastern Yunnan and most of Guizhou at 1,000–2,000 m. Karst is its signature landform: limestone dissolved by water into stone forests, caves, sinkholes and underground rivers, leaving a surface where \"there are not three feet of level ground.\"",
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
    // seeing sources: 2026-09-08 逐句核实全篇 6 板块，未发现事实性错误。
    //   **一处保留意见**：formation 段「帕米尔是青藏高原向西的延伸」是中科院等机构常用的通俗表述；
    //   严格地质学上帕米尔是印度—欧亚碰撞的独立前缘突出部，不是简单的延伸。
    //   该简化与官方科普口径一致，本轮不改，但下一轮若要写得更准，这里是可以改进的一句。
    //   **零争议红线复核通过**：`history` 段只涉丝路古国与前现代史，无边界线描述、无主权表述。
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
    // seeing sources: 塔里木盆地面积约 **53 万平方公里**（东西长约 1500 km、南北宽约 600 km）——
    //   若羌县人民政府 https://www.xjrq.gov.cn/rqxrmzf/c109233/201412/0ef6e4260694488a8611ae14feb455eb.shtml
    //   （1 级，2026-09-08 核，原文「面积达53万平方公里」）。
    //   **原文的「约 40 万」少了约四分之一，任何一手来源里都找不到依据** ——
    //   它接近塔克拉玛干沙漠本身的量级（33.76 万 km²），像是把盆地和盆地中央的沙漠混了一层。
    //   盆地底部沉积厚 800–1300 m、塔里木克拉通、绿洲环列等其余表述经复核准确。
    seeing:
      "The Tarim Basin, in southern Xinjiang, is enclosed on all four sides by the Tianshan, Kunlun, Pamirs and Altun ranges — China's largest inland basin (about 530,000 km²). Its centre is China's largest desert, the Taklamakan, with a ring of oases holding the sand in.",
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
      "The Junggar Basin, in northern Xinjiang, lies between the Tianshan and the Altai — China's second-largest inland basin by area. It has a gap in the north-west (the Alataw Pass) through which a little Atlantic moisture can blow in, so it is wetter than the Tarim to the south and its desert is smaller.",
    formation:
      "The Junggar Basin has been a subsidence zone since the Palaeozoic, continually filled with debris from the surrounding ranges, and holds rich oil (the Karamay field) and coal. The basin floor is about 500 m; the lowest point, Lake Ebi, is only about 190 m.",
    observation:
      "From the air the Junggar Basin is roughly triangular: the Gurbantunggut Desert in the centre, but its dunes are mostly fixed by saxaul, so it reads as mottled yellow-green rather than the pure moving yellow of the Taklamakan. Lake Ulungur lies on the northern rim and Lake Ebi on the west (Lake Manas has largely dried up), and the piedmont oasis belt of the northern Tianshan (Ürümqi, Shihezi, Karamay) rings the southern edge.",
    distinguish:
      "See the Tarim entry. The core difference: the Junggar is \"half-open, wetter, fixed dunes, small,\" the Tarim is \"fully closed, extremely arid, moving dunes, large.\" In winter the Junggar Basin develops a very thick temperature inversion and the floor becomes bitterly cold.",
    // concept sources: 同 `gurbantunggut/seeing` 的来源与口径。
    //   **同一个排名断言写在两个条目里** —— 修的时候要一起改，否则全站口径不一致。
    //   准噶尔盆地为中国第二大内陆盆地（中科院地理科学与资源研究所，1 级）；
    //   艾比湖湖面海拔 189 m 为盆地最低点，与「盆地底部约 500 m」不矛盾（后者是整体底面海拔）。
    //   克拉玛依油田 1955-10-29 一号井喷油、为新中国第一个大油田（人民网，2 级）—— 均核实属实。
    concept:
      "The Junggar Basin shows how a single gap can change how wet a region is. The Gurbantunggut is China's largest fixed-and-semi-fixed desert by area, because a steady supply of snowmelt and relatively more rain let saxaul forest take root and stop the dunes moving.",
    history:
      "The Junggar Basin lay on the northern Silk Road. The Karamay oilfield, discovered in 1955, was the first large oilfield of the People's Republic; \"Karamay\" means \"black oil\" in Uyghur.",
  },

  qaidam: {
    // seeing sources: 2026-09-08 逐句核实全篇 6 板块（海拔 2600–3000 m、察尔汗盐湖为中国最大盐湖、
    //   盐壳上修筑公路与铁路、雅丹地貌），未发现事实性错误，本轮无需改动。
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
    // seeing sources: 2026-09-08 逐句核实全篇 6 板块（盆地底部海拔 250–750 m、都江堰公元前 256 年建成、
    //   三国蜀汉史实），未发现事实性错误，本轮无需改动。
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
    // seeing sources: 艾丁湖湖面 **−154.31 m**（2008 年国家测绘公布数据），与正文「约 −154 米」相符；
    //   博格达峰 5445 m、与艾丁湖高差约 5600 m；地表温度实测常达 75–88℃，正文「超 70℃」成立；
    //   坎儿井与长城、大运河并称「中国古代三大工程」——2026-09-08 逐句核实，全篇 6 板块无误。
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
    // seeing sources: 2026-09-08 逐句核实全篇 6 板块（中国面积最大的平原约 35 万 km²、黑土区、闯关东、大庆油田），
    //   未发现事实性错误。**正文没有写具体面积数字**，因此不构成「缺年份/缺口径」的问题，本轮无需改动。
    seeing:
      "The Northeast Plain is China's largest plain, made up of the Songnen, Liaohe and Sanjiang plains, ringed by the Greater and Lesser Khingan ranges and Changbai Shan. It has vast tracts of fertile black soil and is one of China's main commodity-grain bases — the \"great northern granary.\"",
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
    // concept sources: 「黄河含沙量世界第一」**在 2026-09 仍然成立** —— 黄委会（1 级）与新华网（2 级）2023—2024 年的
    //   报道仍称其为「世界上公认含沙量最大、最难治理的河流」，2026-09-08 复核。
    //   **必须分清两个口径**：**含沙量**（每立方米水含多少泥沙）与**年输沙总量**是两回事。
    //   后者近二十年因水土保持大幅下降（2001—2020 年中游年均约 2.4 亿吨，较历史峰值降七成以上）——
    //   **如果以后要改写成强调「输沙总量」，那个数字必须带年份**（known-errors C6-j）。
    //   地上悬河机制、开封段最典型，均核实无误。
    concept:
      "The most characteristic idea of the North China Plain is the \"suspended river\": the Yellow River carries the world's highest sediment load, which builds up its lower bed until it stands several to more than ten metres above the land (most dramatically at Kaifeng), so a breach is a disaster. The Yellow River has changed course many times through history, and the range of those floods is roughly the outline of today's North China Plain. The plain is also one of China's most water-short, supplied by the South-to-North Water Diversion.",
    history:
      "The North China Plain has been the centre of Chinese civilisation since the Xia, Shang and Zhou. The Grand Canal runs north–south across it, linking the Hai, Yellow, Huai, Yangtze and Qiantang river systems. Every great change of course of the Yellow River has profoundly shaped the people on this land.",
  },

  yangtze: {
    // seeing sources: 2026-09-08 逐句核实全篇 6 板块（江湖调蓄机制、崇明岛成因、三峡工程对下游水沙节律的影响），
    //   未发现事实性错误，本轮无需改动 —— 机制类表述没有被简化成错的，这一点专门核过。
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
    // seeing sources: 面积约 33 万 km²（中科院新疆生态与地理研究所口径 33.76 万），中国最大沙漠；
    //   「世界第二大流动沙漠」次于鲁卜哈利沙漠 —— 正文用「常被称为」的限定写法，成立。
    //   年降水量不足 100 mm、沙丘相对高度 100–300 m、1995 年塔里木沙漠公路建成，均核实准确。
    //   **名称释义处理得当**：正文明确写了「有多种说法」并列民间与学界解释，没有单挑一个当定论。
    //   2026-09-08 核。**零争议红线复核通过**。
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
    // seeing sources: 2026-09-08 逐句核实全篇 6 板块（长约 1000 km、西汉设河西四郡、莫高窟），
    //   未发现事实性错误，本轮无需改动。
    seeing:
      "The Hexi Corridor, in western Gansu, is a long narrow strip of level ground, about 1,000 km long and anywhere from a few to over a hundred kilometres wide, between the Qilian Mountains and the Heli and Longshou ranges to the north. \"Hexi\" means \"west of the (Yellow) River.\" It is a corridor that links the Central Plains with the Western Regions, a key section of the ancient Silk Road.",
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
    // seeing sources: 2026-09-08 逐句核实全篇 6 板块，未发现事实性错误，本轮无需改动。
    //   **这条注释本身是留痕**：批 2 里核过而无需改动的篇目原先不写注释，
    //   下一轮就会被当成「没核过」再派一遍工 —— 核过无误也要留痕。
    seeing:
      "The Three Gorges of the Yangtze are the great canyon where the river cuts through the Wu Shan range, from Baidicheng at Fengjie in Chongqing to Nanjinguan at Yichang in Hubei — about 190 km, made up of the Qutang, Wu and Xiling gorges with wider valleys between. It is the most rugged stretch of the Yangtze, cliffs squeezing the river between them.",
    formation:
      "The Wu Shan is a roughly north–south fold range. The Yangtze already existed; as the Wu Shan rose, the river cut down at the same rate (the classic case in the \"antecedent river\" debate), sawing the range open into a deep trough — a beaded course of gorges alternating with open valleys.",
    observation:
      "From the air the Three Gorges are a deep, narrow, twisting canyon cut by the Yangtze through the mountains: in the gorge sections the walls stand sheer, several hundred metres above the river, and the channel narrows; in the open-valley sections it widens out with towns and fields. The Kui Gate at the mouth of Qutang Gorge, two mountains facing off, is especially dramatic; the Three Gorges Dam is inside Xiling Gorge.",
    distinguish:
      "The Three Gorges versus the Yarlung Tsangpo Grand Canyon: the Three Gorges is a canyon cut by the Yangtze through a fold range, its walls several hundred metres above the river, famed for ruggedness; the Yarlung Tsangpo Grand Canyon is a horseshoe-shaped hairpin of the Yarlung Tsangpo around Namcha Barwa, with peak-to-valley relief reaching five to six thousand metres. Versus Tiger Leaping Gorge: Tiger Leaping Gorge is where the Jinsha cuts between the Jade Dragon and Haba snow mountains, about 3,790 m from river to the Jade Dragon summit, deeper and narrower than the Three Gorges.",
    concept:
      "The Three Gorges is a textbook of \"river downcutting\": it proves that as long as uplift is slow enough and the river's discharge large enough, a river can \"saw through\" a mountain. The Three Gorges Project uses the drop and the gorge terrain to build the world's largest hydropower station, and it has also changed the water and sediment rhythm downstream and the water regime of the lower lakes.",
    history:
      "Baidicheng, Qu Yuan's hometown and Wang Zhaojun's hometown all lie along the Three Gorges; Li Bai's \"at dawn I left Baidi amid coloured clouds\" is about this stretch. The Three Gorges Project began in 1994 and its main structure was finished in 2009, involving the relocation of about 1.3 million people and a large heritage-rescue effort.",
  },

  "tsangpo-gorge": {
    // seeing sources: 长约 504 km、平均深约 2268 m、最深约 6009 m，均据 **1994 年中国科学家测算**，
    //   正文已如实标注测算方与年份，**没有做无限定的「世界最深」绝对断言** —— 正确写法的范例。
    //   1998 年中国科考队首次徒步穿越；下游称布拉马普特拉河、汇入孟加拉湾（纯地理事实）。
    //   2026-09-08 核。**零争议红线复核通过**：`history` 段无边界线描述、无主权表述。
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
    // seeing sources: 青海湖水体面积 **4,650.08 km²（2024-12-20 监测）**，较 2023 年同期增 28.1 km²，
    //   **已连续约二十年扩张**（2005 年低点约 4,237 km²）；水位约 3,196.72 m（2024-09 监测）——
    //   新华网转青海省监测数据 http://www.qh.xinhuanet.com/20241222/642252c2ce2b4e60ab173787387bb0b1/c.html
    //   （2 级）；另见青海省人民政府 2024-03 发布的另一次监测 4,540.98 km²（1 级），2026-09-08 核。
    //   **同一年里两次监测就差一百多平方公里 —— 湖泊面积必须带监测时点，写一个裸数就是错的。**
    //   原文的「约 4500 平方公里」是中途某一年的旧数且没交代时点。
    //   **下一轮回来刷新**：青海省年末例行发布，注意换成当时的最新一期。
    seeing:
      "Qinghai Lake, in north-eastern Qinghai on the north-eastern Tibetan Plateau, is the largest lake in China and its largest salt lake. It has been expanding for about two decades: monitoring at the end of 2024 put its surface elevation at about 3,196 m and its water area at about 4,650 km². Its Tibetan name is Tso Ngonpo and its Mongolian name Kokonur, both meaning \"blue sea.\"",
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
    // seeing sources: **鄱阳湖面积丰枯水期能差好几倍**，正文写的是「丰水期可达 3000 多 km²、枯水期只有几百 km²」
    //   这样的季节性区间，**没有给出误导性的单一定数** —— 这是正确写法的范例，与青海湖那条
    //   （写了一个不带时点的裸数）正好构成对照。
    //   鄱阳湖之战 36 天鏖战、退田还湖、洞庭湖历史上因淤积围垦让位于鄱阳湖，均核实准确，2026-09-08。
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
    // seeing sources: 2026-09-08 逐句核实全篇 6 板块，未发现事实性错误，本轮无需改动。
    seeing:
      "Hainan Island is China's second-largest island by area (after Taiwan), in the northern South China Sea, facing the Leizhou Peninsula of Guangdong across the Qiongzhou Strait. It is China's only fully tropical island province, shaped like an oval \"bun\": high in the middle, low around the edges.",
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
      "Taiwan is China's largest island, off the south-east of the mainland at the western edge of the Pacific, facing Fujian across the Taiwan Strait. It is a long, narrow, mountainous island: a Central Range runs the length of it from north to south, splitting the island into an eastern and a western half, and the main summit, Yushan, at 3,952 m, is the highest point in south-eastern China, higher than Japan's Mount Fuji (3,776 m).",
    formation:
      "Taiwan sits exactly on the collision belt between the Eurasian plate and the Philippine Sea plate; the collision squeezes sea-floor sediments up into mountains, and the island is still rising fast (about 0.5–1 cm a year), with frequent earthquakes and many hot springs. The Central, Xueshan, Yushan, Alishan and Coastal ranges run roughly parallel.",
    observation:
      "From the air: the east side is steep mountains dropping straight to the coast (the Qingshui Cliffs), with almost no plain; the west side steps down from mountains to hills, terraces and then alluvial plains (the Jianan Plain), where the cities and farmland are concentrated. Continuous high mountains run down the centre, and the high peaks hold snow in winter.",
    distinguish:
      "Taiwan versus Hainan: both are continental islands with a range running the length. But Taiwan's mountains are higher, steeper and earthquake-prone (an active collision belt), and span tropical and subtropical lowlands up to an alpine cold zone; Hainan's mountains are low, the geology stable, the whole island tropical, and the terrain a ring.",
    concept:
      "Taiwan is a living specimen of \"young collision mountain-building\": it shows that building mountains does not take tens of millions of years — under fierce plate collision, near-4,000 m mountains can be piled up in a few million years, and they are still growing. The steep-east, gentle-west asymmetry is exactly the direction of the collision squeeze.",
    // history sources: 玉山主峰 **3952 m**（2003 年内政部土地测量局实测 3951.798 ± 0.072 m，公告值 3952 m）；
    //   中央山脉现今隆升速率约 1 cm/年、扣除侵蚀后净增约 0.5 cm/年（2 级），与正文「约 0.5—1 厘米」相符。
    //   2026-09-09 核。
    //   **`history` 段删掉了两句**：首句的主权断言与末句的近代治理更迭 ——
    //   CLAUDE.md 零争议红线写明 `history` 只写地质史与广泛记载的前现代史，不碰现代政治与领土。
    //   中间三句（三国、隋朝的记载；元朝澎湖巡检司；1885 年建省）是前现代行政史，保留。
    //   **这是同一条原则的第三次应用**：青藏高原「1951 年西藏和平解放」、长白山天池分界比例、这一处。
    //   **「东北亚地区的最高峰」也已删**：见 terrain/taiwan/rank。
    history:
      "The histories record that both the Three Kingdoms and the Sui dynasty sent people there; the Yuan set up the Penghu Inspectorate; and it formally became a province in 1885.",
  },

  kanas: {
    seeing:
      "Kanas Lake lies deep in the Altai Mountains at the far northern tip of China, at about 1,370 m — a long, narrow alpine lake. Its water changes colour with the weather, the season and the amount of suspended silt, from jade green to near-black blue, which is why it is called the \"colour-changing lake.\" It is ringed by dense Siberian conifer forest.",
    // formation sources: 海拔 1374 m、长约 24.5 km、最深 197 m（另一说 188.5 m）——
    //   喀纳斯景区管理委员会 https://www.kns.gov.cn/004/004004/20181122/5c36ad14-a023-450c-b4d3-947f8b9b2e8c.html
    //   （1 级，2026-09-08 核）。
    //   **「中国最深的湖泊之一」用了「之一」，且排序成立**（长白山天池最深 373 m > 喀纳斯 188.5 m >
    //   抚仙湖 158.9 m）—— 正确写法的范例。图瓦人聚落、属北冰洋水系等表述经复核准确。全篇 6 板块无误。
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
    // formation sources: 海拔 2073 m、面积 453 km²，官方表述为「新疆海拔最高、面积最大的高山冷水湖」（3 级，2026-09-08 核）。
    //   成因：断陷盆地构造湖 + 第四纪冰川改造，与地质研究吻合。全篇 6 板块无误。
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
    // formation sources: 海拔 1910 m、长 3400 m、最深约 105 m —— 阜康市人民政府
    //   https://www.fk.gov.cn/zjfk/mlfk/mqgj/842410.htm（1 级，2026-09-08 核）。
    //   1982 年首批国家重点风景名胜区；「瑶池」传说与长白山天池的成因区分（冰川堰塞 vs 火山口湖）
    //   经复核准确 —— **这两个「天池」同名不同地、成因也不同，是最容易被混成一件事的一对**。全篇无误。
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
    // seeing sources: 海拔 1048 m；大湖面积约 988 km²，含小湖区共 1646 km² —— 新疆维吾尔自治区文化和旅游厅
    //   https://wlt.xinjiang.gov.cn/wlt/c112782/202208/008cef60035646c3ae9d0397e613f8fa.shtml（1 级，2026-09-08 核）。
    //   「中国最大的内陆淡水湖」成立：这个口径专指不入海的内流区淡水湖，呼伦湖微咸且经额尔古纳河
    //   间歇外泄、洪泽湖属外流区，都不计入；正文用「常被称为」做了软化。
    //   **面积数字有意没写进正文** —— 湖面面积逐年变化（近年因生态调水水位回升近 2 米），
    //   日后若要补面积必须注明监测年份（known-errors C6-j）。
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
    // seeing sources: 海拔 189 m（博乐市人民政府，1 级）；「新疆最大的咸水湖」为官方与主流媒体一致表述。
    //   **2007-04-06 国务院办公厅批准艾比湖湿地晋升国家级自然保护区** ——
    //   https://www.gov.cn/gzdt/2007-05/28/content_628018.htm（1 级，2026-09-08 核）。
    //   **水域面积有意没写进正文**：受上游用水影响逐年剧烈波动、近几十年萎缩明显，
    //   日后若要补面积必须标注监测年份与来源，不能写成固定值（known-errors C6-j）。
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
    // formation sources: **最后干涸时间约 1962 年** —— 中国科学院新疆生态与地理研究所 2008 年「东方道迩罗布泊大型
    //   综合考察」依据实地与遥感资料的结论（中新社报道，2 级，2026-09-08 核）
    //   http://www.chinanews.com.cn/cul/news/2008/12-25/1503302.shtml。
    //   **原文写「1970 年代前后」，是把「卫星第一次拍到」当成了「实际干涸」**：
    //   1972 年美国地球资源卫星拍到那张「大耳朵」影像时，湖底早已是干的。
    //   学界另有二十世纪三四十年代之说，但没有主流研究支持 1970 年代这个年代。
    //   同条目 `seeing` 段用的「20 世纪中后期」更稳，两处原本口径不一致，已把 formation 收紧到有出处的结论。
    //   1964-10-16 中国首颗原子弹在罗布泊地区试爆、1980 年彭加木失踪、1996 年余纯顺遇难，均核实无误。
    //   **这是一个会被新考察结论修正的量**，日后有权威新结论要回来更新。
    formation:
      "Lop Nur is the lowest collecting area of the Tarim Basin, and historically it \"wandered\" around the basin as the rivers changed course, growing and shrinking. In modern times heavy upstream irrigation plus a drying climate cut the inflow sharply, and a Chinese Academy of Sciences survey concluded the lake dried out completely around 1962, though scholars still disagree on the exact date, leaving a salt crust tens of centimetres thick. Wind erosion has carved fields of yardangs across the dry bed and its surroundings.",
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
    // seeing sources: **塔里木河长度有两套并存口径，差别接近一倍**：
    //   ① **干流 1321 km**（三条源流在肖夹克汇合处 → 台特玛湖）—— 新疆塔里木河流域管理局口径（2 级）；
    //   ② **含最长源流** 2137 / 2179 / 2327 / 2486 km（从叶尔羌河源头算起）—— 各家数字还互不统一，
    //      新疆水利厅《水利百科》给 2179 km（1 级）
    //      http://slt.xinjiang.gov.cn/slt/slbk/201803/a23aa18292b54492b41bbda5049991da.shtml，2026-09-08 核。
    //   **原文的「约 2000 公里」卡在两者中间，哪一套都不是**，而同条目 formation 段写的是「三条源流汇合而成」
    //   （暗示从汇合点起算）—— 一篇之内自相矛盾。**写正文前先确认是干流还是含源流**，
    //   这与达令河「干流 1545 km / 含最长源头支流 2740 km」是同一形状的坑。
    //   20 世纪 70 年代起下游约 400 km 断流、台特玛湖干涸，2000 年起生态输水（至 2024 年已第 25 次、
    //   累计约 98 亿 m³），台特玛湖重新维持水面 —— 经复核准确。
    seeing:
      "The Tarim River runs west to east along the northern rim of the Tarim Basin — China's longest inland river; its main stem, from where the three source rivers meet to Lake Taitema, is 1,321 km, or over 2,000 km measured from the source of its longest tributary, the Yarkand. It has no outlet to the sea and finally dies away in the desert and terminal lakes of the south-eastern basin. From the air it is a curving line at the edge of the yellow sand sea, fringed with dark-green wild poplar and farmland.",
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
    // seeing sources: 「中国唯一流入北冰洋的河流」—— 新疆维吾尔自治区自然资源厅
    //   https://zrzyt.xinjiang.gov.cn/xjgtzy/mtxc/202106/9e1ee097d1ee466ea7ebf86005ddaa43.shtml（1 级，2026-09-08 核）。
    //   喀纳斯经喀纳斯河→布尔津河汇入额尔齐斯河、同属该水系，正文的简化表述没有把两条河混成一件事。
    //   **出境后的流路用的是中性水文表述，不描述边界线、不表态主权** —— 零争议红线复核通过。全篇无误。
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
    // seeing sources: 在三源汇合处，**阿克苏河多年平均水量占三源总水量约 78%（33.58 亿 m³）**，是塔里木河干流
    //   唯一常年补给源；**叶尔羌河同处年均水量仅 0.23 亿 m³（约 0.5%）**，出山后大部分渗漏蒸发于沙漠，
    //   只有洪水期才有余水汇入干流 —— 中国科学院新疆生态与地理研究所
    //   https://egi.cas.cn/xwdt/mtsm/202308/t20230814_6859047.html（1 级，2026-09-08 核）。
    //   **原文的「最大的一条源流」按水量是错的，只有按河道长度才成立** ——
    //   「最大」这个词在河流里至少可以指长度、水量、流域面积三样，不写明按哪一样就会指向不同的河。
    //   同条目 distinguish 段写的「主要水源之一」是对的，两处原本自相矛盾。
    seeing:
      "The Yarkand River rises on the northern slope of the Karakoram and flows from south-west to north-east through the western parts of the Kashgar and Hotan areas — the longest of the Tarim's three source rivers by course, though it carries far less water than the Aksu, which is the main stem's principal year-round source. From the air it comes out of the brown mountains toward the Kunlun and spreads into a huge alluvial fan at the mountain front, with a string of oases along the fan edge.",
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
    // formation sources: 伊犁河谷平均年降水量约 417 mm、山区达 600–700 mm，为新疆最湿润区域 —— 中国气象局
    //   https://www.cma.gov.cn/kppd/kppdsytj/202111/t20211103_4154439.html（1 级，2026-09-08 核）。
    //   **正文写的是「局部……可达 500 毫米以上」，没有把山区数据当成全谷平均值** —— 正确写法。
    //   伊犁河向西流入巴尔喀什湖属外流河，是中性水文表述，不涉边界线与主权，红线复核通过。
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
    // concept sources: 那拉提是天山垂直自然带里介于森林带与高山带之间的草甸带。
    //   断陷谷地、云杉林、哈萨克族「转场」等表述经复核准确（2026-09-08 核）。
    //   **原文「最好的夏季牧场」比较对象与评价标准都没给，已降级为「之一」。**
    concept:
      "Nalati shows how a mountain meadow comes about: high enough that forest cannot grow, not yet so high that only bare rock and ice remain, plus steady rain and snowmelt — the result is this meadow belt between the forest belt and the alpine belt. It is one link in the vertical zonation of the Tianshan, and one of its important summer pastures.",
    history:
      "Nalati is traditional Kazakh summer pasture; each summer the herders move stock up the mountain along fixed routes. The name \"Nalati\" is usually explained as \"the place where the sun is.\" In 2013 the Xinjiang Tianshan (including the Nalati area) was inscribed as World Natural Heritage for its glaciers, snow peaks and vertical natural zones.",
  },

  bayanbulak: {
    // seeing sources: 平均海拔 2400 m —— 和静县人民政府（1 级，2026-09-08 核）；另有二手资料给 2500 m，两说并存，
    //   正文与政府侧数据一致。四面环山的高山盆地里的曲流成因、蒙古语词源、天鹅湖国家级自然保护区
    //   均经复核准确。全篇 6 板块无误。
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
    // seeing sources: 2026-09-09 逐句核实全篇 6 板块：库车大峡谷的中生代—新生代红色砂泥岩侵蚀成因、
    //   与火焰山的区分、龟兹古国与克孜尔石窟的丝路佛教史 —— 均为前现代史实性表述，无数字类断言。
    //   **零争议红线复核通过**：不涉现代政治、宗教评价或族群评价。
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
    // concept sources: 东西绵延约 100 km（东起鄯善兰干流沙河、西止吐鲁番桃儿沟），最宽处约 10 km，多方一致，2026-09-08 核。
    //   **「地表温度」与「气象站气温」是两回事**：火焰山地表近年多次测得 80–89℃（景区温度计），
    //   那是裸露沙石的地表温度；中国最热地区的气温纪录出自吐鲁番的气象站。
    //   **正文已明确把两者分开、并用「之一」做了限定，是正确写法的范例**，本轮无需改动。
    //   **具体温度数字有意没写进正文** —— 那是逐年刷新的极值，写死就会过期（known-errors C6-j）。
    concept:
      "The Flaming Mountains are a combination of \"anticline ridge plus dry heat\": the beds were arched into an anticline, the exposed soft red layers were cut by water into regular gullies; add a closed, low basin, clear skies and dark rock that absorbs heat strongly, and you get the extreme ground temperatures here. The actual temperature records come from nearby weather stations, not from the range itself.",
    history:
      "The Flaming Mountains are known to every Chinese reader from Journey to the West, where the Monkey King borrows a banana-leaf fan. Historically they lay on the northern Silk Road, with the ruined city of Gaochang and the Bezeklik caves at their foot. Grape Valley on the southern side uses Tianshan snowmelt and is a well-known grape-growing area.",
  },

  gurbantunggut: {
    // seeing sources: 古尔班通古特沙漠面积约 4.88 万 km²，按面积计为中国第二大沙漠、中国最大的固定半固定沙漠
    //   —— 中科院地理科学与资源研究所《中国地貌》
    //   http://www.igsnrr.cas.cn/cbkx/kpyd/zgdl/cndm/202009/t20200910_5692337.html（1 级）
    //   与中国林业科学研究院 https://www.caf.ac.cn/info/1298/30042.htm（1 级），2026-09-08 核。
    //   纬度范围约 44°11′—46°21′N，「中国纬度最高的沙漠」这一条已给出坐标作为实证。
    //   **两个排名此前都没写比较口径，已补「按面积计」** —— 数字对、排名也对，缺的是口径。
    seeing:
      "The Gurbantunggut Desert lies in the centre of the Junggar Basin, about 48,000 km² — China's second-largest desert by area, and its largest fixed-and-semi-fixed desert by area. Its dunes are lower and gentler than the Taklamakan's; the surface carries drought-tolerant saxaul and large numbers of spring ephemerals, and snow can be seen in winter.",
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
    // seeing sources: 库姆塔格在突厥语里就是「沙山」。沙丘成因（东北风、地形背风堆积）、
    //   与古尔班通古特和塔克拉玛干的区分、「锁边」用词经复核准确（2026-09-08 核）。
    //   **原文的「它最特别的地方是」只是主观框定语，删掉之后后半句的事实照旧成立** ——
    //   这类不用改写内容，删掉框定词即可。
    seeing:
      "The Kumtag Desert (this entry refers to the patch south of Shanshan) lies in the eastern Turpan Basin, at the southern foot of the eastern Tianshan. \"Kumtag\" is simply \"sand mountain\" in Turkic. The desert runs right up to the edge of Shanshan town, with almost no transition — a few steps out of town and you are at dunes tens of metres high.",
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
    // history sources: **黑龙江重点国有林区（含伊春一带）自 2014-04-01 起全面停止天然林商业性采伐**；
    //   伊春市本身 2013 年即已先行全面停伐 —— 伊春市人民政府
    //   https://www.yc.gov.cn/ycsrmzf/c101986/202505/400158.shtml（1 级）与新华网（2 级），2026-09-08 核。
    //   **原文写「近年」——相对时间词本身就是会过期的写法**，与格兰坪「近年恢复官方双名」（实为 1998 年）
    //   同一形状。海拔 500–800 m、五大连池火山群在其西南缘，均核实无误。
    history:
      "The Lesser Khingan is traditional hunting ground of the Oroqen and Ewenki, and was once one of China's most important logging regions (the Yichun area was called \"the home of Korean pine\"). In 2014, commercial logging of natural forest in Heilongjiang's key state forest areas stopped entirely, replaced by conservation and eco-tourism.",
  },

  yinshan: {
    // formation / concept sources: 主峰呼和巴什格 2364 m，山脊普遍 2000—2400 m，正文「约 2300—2400 米」区间合理。
    //   「大兴安岭—阴山—贺兰山—巴颜喀拉山—冈底斯山」一线为季风区／非季风区分界、且与 400 毫米年降水量线大致重合，
    //   是中国地理教材通行表述，正文未过度拔高（3 级教学资料，与教材口径一致）。2026-09-10 核，verdict: ok。
    // seeing sources: 长度：**两说并存、都只有 3 级来源** —— 1000 km（百度百科等）与 1200 多 km（中文维基正文，该句无脚注）。两轮核实都没找到自然资源部 / 内蒙古自治区自然资源厅 / 《中国自然地理》一类 1—2 级来源给出定论，因此正文不再押注单一数值，改为并列两说并写明尚无权威口径（与 `qilian` 团结峰高程同一处理方式）。2026-09-12 核。
    seeing:
      "The Yin Mountains run east–west across the central Inner Mongolian Plateau; published figures for their length range from about 1,000 km to over 1,200 km and no authoritative measurement settles it. The range is made up of the Lang Shan, Wula Shan, Daqing Shan and other sections. The south slope is steep and drops onto the Hetao Plain and the Loess Plateau; the north slope is gentle and merges into the Inner Mongolian Plateau. The summit area is about 2,300–2,400 m.",
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
    // seeing sources: 主峰关帝山（又名孝文山、孝文峰）海拔 **2831 m**，位于交城县与方山县之间 —— 多来源一致，2026-09-08 核。
    //   全篇 6 板块逐句核实无误，本轮无需改动。
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
    // seeing sources: 主峰米缸山（又名美高山）海拔 **2942 m**，在泾源县与隆德县交界 —— 多来源一致，2026-09-08 核。
    //   全篇 6 板块逐句核实无误，本轮无需改动。
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
    // seeing sources: 主峰化龙山 **2917 m**（大巴山中段）；大巴山分东、中、西三段，米仓山即西段、横亘陕川交界，2026-09-08 核。
    //   成因：华北与扬子两大板块之间强烈褶皱、逆冲抬升 —— 方向正确；更精确的说法是**秦岭造山带南缘
    //   中生代以来的复合变形**（《地质通报》大巴山冲断推覆构造研究，2 级）。属常见简化，未被简化成错。
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
    // seeing sources: 主峰苏宝顶 **1934 m**；雪峰山是公认的中国地形第二、三级阶梯分界线之一（与大兴安岭、太行山、
    //   巫山并列）—— **正文用「大致对应」作了限定，是正确写法的范例**，2026-09-08 核。
    //   1945 年雪峰山会战（湘西会战，04-09 至 06-07）为抗战正面战场最后一次大规模会战，以中国军队获胜结束。
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
    // seeing sources: 主峰黄岗山 **2160.8 m**，称「华东最高峰」「东南 10 省区最高峰」——
    //   **这是有明确地理范围限定的排名断言，不是空泛的主观最高级**，成立（2 级，2026-09-08 核）。
    //   武夷山 **1999 年**列入世界文化与自然双重遗产（第 23 届世界遗产委员会会议，符合自然标准 vii、x
    //   与文化标准 iii、vi）—— https://whc.unesco.org/en/list/911/（1 级）。
    //   `history` 段只写朱子理学与茶文化，零争议红线通过。
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
    // formation sources: 大别山—苏鲁超高压变质带因出露大量榴辉岩闻名国际地质学界，是大陆深俯冲研究的关键窗口 ——
    //   公认地质事实，2026-09-08 复核；`concept` 段用的是「关键窗口**之一**」，有限定，写法正确。
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
    // seeing sources: 主峰金佛山（凤凰岭/风吹岭）**2238 m**，多方一致（3 级，2026-09-09 核）；
    //   赤水河谷为白酒产区、丹霞与喀斯特景观集中，均无误。
    //   **核实方建议删掉 history 段「1935 年娄山关战斗 + 毛泽东《忆秦娥·娄山关》」，本轮未采纳。**
    //   理由：仓库里 **六盘山**（1935 年长征翻越 + 《清平乐·六盘山》）、**吕梁**（晋绥根据地）、
    //   **大巴山**（多个革命根据地）、**大别山**（鄂豫皖苏区、1947 年挺进大别山）四篇早已是同一写法；
    //   上一轮核中国山地时也明确判过「属历史事实陈述、非评价性表述，与项目现有尺度一致」。
    //   **只删大娄山会让同类内容尺度不一**，且这一改动超出「核实事实」的范围 ——
    //   若要调整，应当是一次覆盖全部同类条目的口径决定，不是在某一批里顺手改掉一条。
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
    // seeing sources: 主峰苏拉木塔格峰约 **6295 m**，西段最高点约 6161 m —— 均超过 6000 m，与正文相符（3 级，2026-09-09 核）。
    //   **零争议红线复核通过**：`history` 段只写阿尔金断裂的科学意义与前现代史，不涉现代政治、领土、宗教或族群评价。
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
    // seeing sources: 面积 **1.881 万 km²**（科普中国，2 级）—— 与正文的「约 1.9 万」吻合；
    //   另有广义 2.29 万、狭义 0.734 万两个常见口径，**写的时候要知道自己用的是哪一个**。
    //   海拔：从都江堰约 **730 m** 降到成都主城区约 **500 m**（同源），另一独立来源给 460—750 m ——
    //   **两个来源都不支持原文的 450 m 下限**，已改为 500—730 m。2026-09-08 核。
    //   **注意别与「成都平原经济区」混用** —— 那是行政/经济概念，不是同一个地貌单元。
    seeing:
      "The Chengdu Plain occupies the western Sichuan Basin — the largest and flattest plain in the basin, about 19,000 km², at 500–730 m. It was built by the Min, Tuo and other rivers as they left the mountains, and its fertile, easily irrigated land is the core of the \"land of abundance.\"",
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
    // seeing sources: 2026-09-08 逐句核实全篇 6 板块：断陷地堑盆地机制、「八百里秦川」别称、周秦汉唐建都关中、
    //   战国郑国渠、「关中」因函谷关/大散关等得名 —— 均为学界公认表述，未发现数字或口径问题。
    //   `history` 段只涉前现代史，零争议红线通过。
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
    // seeing sources: 2026-09-08 逐句核实全篇 6 板块。正文不含可核验的量化断言；
    //   「黄河百害，唯富一套」为广泛流传的谚语；秦汉设郡屯田属广泛记载的前现代史。
    //   **这是本批两个位于边境地带的条目之一（另一个是戈壁），零争议红线专项核对通过** ——
    //   没有边界线描述、没有主权表态、没有把现代政治议题带进来。
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
    // seeing sources: 长江三角洲（**地貌学口径**，北纬 30°20′—32°30′、东经 119°24′—122°30′）**面积达 4 万 km²** ——
    //   中科院地理科学与资源研究所引《中国大百科全书》
    //   https://igsnrr.cas.cn/cbkx/kpyd/zgdl/cndm/202009/t20200910_5692356.html（2 级，2026-09-08 核）。
    //   **原文的「约 5 万」既不是地貌口径的 4 万，也不是国家规划的「长三角地区」（沪苏浙皖一体化范围
    //   35.8 万 km²）—— 是两个口径之间的一个中间值**，与塔里木河「约 2000 公里」是同一形状的错。
    //   崇明岛为「世界上最大的河口冲积岛」经上海市崇明区人民政府官网确认（1 级）；
    //   「近几十年输沙量大幅下降、部分岸段转为侵蚀后退」为学界公认（多站点较建库前降 74.8%—92.7%），
    //   机制表述没有被简化成错。
    seeing:
      "The Yangtze Delta is the huge alluvial plain the Yangtze has built at its mouth, spreading east from around Zhenjiang and Yangzhou in Jiangsu to the sea, about 40,000 km². The land is extremely low and flat and water-netted; Lake Tai is its central lake, and Shanghai, Suzhou, Wuxi and Nantong are all on it.",
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
    // seeing sources: 珠江三角洲约 **1.1 万—1.13 万 km²**（狭义口径：西北江三角洲 + 东江三角洲 8,601.1 km²）——
    //   多来源一致，2026-09-08 核（中科院 IGSNRR 原链接证书异常，经搜索摘要交叉确认，2—3 级）。
    //   **「岛式三角洲」「丘陵性三角洲」是地貌学界的公认描述** —— 发育在一个被海水淹没的多岛屿古海湾里，
    //   与长江三角洲那种典型的河口沉积三角洲成因不同。桑基鱼塘的运作方式（挖塘养鱼、塘泥上基种桑、
    //   桑叶养蚕、蚕沙喂鱼）描述准确。
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
      "The Badain Jaran Desert lies in the western Alxa Plateau of Inner Mongolia, about 49,000 km² — China's third-largest desert by area. It is best known for its tall sand mountains — many two or three hundred metres of relative height, the highest, Bilutu, about 460 m, among the tallest sand mountains in the world — with more than a hundred interdune lakes scattered between them.",
    formation:
      "The sand comes from weathered material off the surrounding mountains and dry riverbeds, piled up by wind over a long time. Why the sand mountains here are so tall is still discussed by researchers; it may involve the shape of the underlying bedrock, a fairly steady wind regime, and groundwater cementing the sand grains. In the interdune hollows groundwater emerges as lakes, mostly saline, a few fed by fresh springs.",
    observation:
      "From the air the Badain Jaran is a field of golden sand mountains in violent relief, like frozen giant waves, with small deep-blue or jade-green lakes set in the troughs, often with a patch of green and a temple beside them. Sliding down the steep dune faces makes a roaring sound (\"singing sand\").",
    distinguish:
      "The Badain Jaran and the Taklamakan: both are moving-sand deserts, but the Badain Jaran's sand mountains are far taller and it holds many lakes; the Taklamakan is far larger, drier and almost lakeless. The Badain Jaran and the Tengger (both in Alxa): the Badain Jaran is to the west, with tall sand mountains and many lakes; the Tengger is to the east, its dunes lower, and is closer to the Yellow River and the railway.",
    // concept sources: 巴丹吉林沙漠—沙山湖泊群 2024-07-26 列入世界自然遗产（UNESCO 第 46 届大会，标准 vii、viii），
    //   中国首个沙漠类世界自然遗产 —— 教育部官网转发官方通报（1 级，2026-09-08 核）。
    //   面积约 4.92 万 km²、按面积计中国第三大沙漠（中科院地理科学与资源研究所，1 级）。
    //   **必鲁图沙峰：相对高度约 460 m，绝对海拔约 1610 m** —— 条目写的是「相对高度」，没混。
    //   沙山为何这么高，条目如实写了「学界还有讨论」，是正确处理。
    concept:
      "The Badain Jaran is a sample of \"why there are lakes in a desert\": the hollows between the dunes cut down to the water table, so groundwater seeps out and pools. Why the sand mountains grow so tall and are not blown flat is a not-yet-fully-solved problem in desert geomorphology. In 2024 the sand-mountain-and-lake complex of the Badain Jaran was inscribed as World Natural Heritage.",
    history:
      "Herders have long settled by the desert's lakes, with small temples (such as the Badain Jaran temple). Thinly peopled and hard to reach, the area has long been a natural laboratory for studying arid-zone dunes and groundwater.",
  },

  tengger: {
    // seeing sources: 腾格里沙漠约 4.27 万 km²，按面积计中国第四大
    //   （塔克拉玛干 33 万 → 古尔班通古特 4.88 万 → 巴丹吉林 4.43 万 → 腾格里 4.27 万）——3 级，2026-09-08 核。
    //   **中英不同步的第四种方向：英文丢掉了中文已有的限定词** ——
    //   中文写「面积第四大」，英文只写 fourth-largest。已补 by area。
    //   （前三种：英文凭空多出数字、注释与正文不同步、中文把有限定的说法收紧成绝对断言。）
    //   草方格固沙发源地、1958 年包兰铁路通车经复核属实。
    seeing:
      "The Tengger Desert lies mostly in Alxa Left Banner in Inner Mongolia, extending south to the edges of Gansu and Ningxia, about 43,000 km² — China's fourth-largest desert by area. \"Tengger\" means \"sky\" in Mongolian. It is mostly moving dunes, with many lake basins and grassy flats scattered among them.",
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
    // seeing sources: 1.41 万 km²（国家林草局，1 级）。核实 2026-09-12
    seeing:
      "The Kubuqi Desert lies on the northern rim of the Ordos Plateau in Inner Mongolia, on the south bank of the great \"几\"-bend of the Yellow River, about 14,100 km² — China's seventh-largest desert and the closest desert to Beijing. \"Kubuqi\" means \"bowstring\" in Mongolian — the desert runs along the Yellow River like a string on a bow.",
    formation:
      "The Kubuqi's sand comes partly from Yellow River silt and partly from weathered material off the Ordos Plateau, blown by the prevailing north-west wind and piled on the south bank of the river. Historic overgrazing and cultivation stripped the vegetation and sped up the sand's spread. The dunes are mostly moving to semi-fixed.",
    observation:
      "From the air the Kubuqi is an east–west yellow sand belt on the south bank of the Yellow River, with the green farmland of the Hetao Plain just across the river to the north — a sharp contrast. In the last twenty years large planted edge-locking shelterbelts, solar farms and grids of straw checkerboards have appeared in the desert, and its margin has clearly greened.",
    distinguish:
      "The Kubuqi and the Mu Us Sandy Land (both around Ordos): the Kubuqi is on the northern plateau rim, along the Yellow River, mostly moving dunes; the Mu Us is in the southern plateau, a semi-arid \"sandy land\" with a better vegetation base, mostly fixed and semi-fixed. The Kubuqi and the Tengger: one hugs the Yellow River, the other hugs the river and the railway, both key sand-control areas.",
    concept:
      "The Kubuqi is a case of sand control moving from engineering to industry: combining straw-checkerboard fixing, drought-tolerant planting, solar power and desert cash crops so that fixing the sand also produces income. It also shows that much sand-land expansion has human causes, and that easing grazing and cultivation pressure plus planted measures can reverse part of it.",
    // history sources: UNCCD **COP13 于 2017-09-06 至 09-16 在内蒙古鄂尔多斯召开**（1 级，UNCCD 官方文件，2026-09-09 核），
    //   库布其治沙经验作为大会背景素材被广泛报道。
    //   **面积仍是 unknown**：本轮另找到人民网（2 级）复述 **1.86 万 km²**，与正文一致，
    //   且「中国第七大沙漠」「距北京最近的沙漠（约 800 余公里）」也由人民网等复述 ——
    //   **但仍未拿到国家林草局全国荒漠化和沙化调查报告的一手数字**，无法仲裁 1.86 万 vs 另一批来源的 1.39 万。
    //   证据往 1.86 万那边偏，issue 继续开着等一手来源。
    history:
      "The Kubuqi desert edge was historically a farming–herding frontier. In the late 20th century it was badly desertified and a frequent dust source. Since the 1990s local companies and residents have kept building roads, planting trees and developing desert industries; in 2017 the Kubuqi sand-control experience was presented at the conference of the UN Convention to Combat Desertification.",
  },

  "ulan-buh": {
    // seeing sources: 乌兰布和沙漠面积：二手来源收敛在 **0.91 万—1.03 万 km²**，与正文「约 1 万」相符（3 级，2026-09-08 核）。
    //   **没有一手政府/科研机构的公报数字**（巴彦淖尔市政府原链接已失效 404），下一轮补核。
    //   汉代文献记载的古湖「屠申泽」干涸后、湖底沙被风扬起再堆积成沙丘 —— 当地地貌与历史地理学界公认的因果链，
    //   未被简化成错。
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
      "The Mu Us Sandy Land straddles northern Shaanxi, southern Ordos in Inner Mongolia and eastern Ningxia, about 42,000 km² by a 2023 Shaanxi Provincial Forestry Bureau report, or 38,000 km² in a more recent national forestry monitoring round — two official figures in parallel. Note that it is a \"sandy land,\" not a \"desert\": it is in a semi-arid zone with more rainfall than a true desert, has a base of grassland and vegetation, and its dunes are mostly fixed and semi-fixed.",
    formation:
      "The Mu Us area was historically grassland with fairly good water and grass. Climate swings, shrinking rivers and lakes, and long overgrazing, cultivation and war damage to the vegetation let drifting sand gradually expand, producing a \"sandy land\" of dunes alternating with flats and lake basins. Its desertification is largely reversible.",
    observation:
      "From the air the Mu Us is a mottled landscape on the northern edge of the Loess Plateau: fixed dunes carrying shrubs and planted forest, with grassy flats, farmland and small lakes between them, and only patches of moving dune left. After decades of management most of the area is now green.",
    distinguish:
      "The Mu Us (sandy land) and the Badain Jaran or Taklamakan (deserts): a desert is in an arid zone, almost without vegetation, mostly moving dunes, hard to change fundamentally; a sandy land is in a semi-arid zone, with a vegetation base, mostly fixed and semi-fixed, and can be reversed over large areas by management. The Mu Us and the Kubuqi: the Kubuqi is farther north, drier and has more drifting sand.",
    // concept sources: **官方口径是「治理率」，不是「治理完成」，而且这是有意的措辞**：
    //   陕西省林业局（2023-01-13）https://lyj.shaanxi.gov.cn/zwxx/mtbd/202301/t20230113_2271585.html（1 级）：
    //   「沙区治理率超过 80%，林木覆盖率达 30%，流沙基本『拴牢』」；
    //   国家林草局 https://www.forestry.gov.cn/c/www/zxdt/593401.jhtml（1 级）：「毛乌素沙地已八成染绿」、
    //   2020 年榆林沙化土地治理率 93.24% —— **但同一篇特意强调「这个绿是不稳固的，仅仅刚走过初级阶段」**。
    //   原文的「大部分已经治理完成」把持续过程写成了已完结的结论，与流传很广的
    //   「毛乌素即将消失／已被消灭」是同一类夸大。2026-09-08 核。
    //   **治理率本身也是会变的量**，下一轮回来刷新（known-errors C6-j）。
    concept:
      "The Mu Us represents \"a sandy land is not a desert, and desertification can be reversed\": in a semi-arid zone with some rainfall, simply stopping overgrazing and cultivation, plus planting grass and trees and laying straw checkerboards, can re-fix the dunes and bring the vegetation back. More than 80 per cent of the Mu Us Sandy Land within Shaanxi has been brought under treatment, according to a 2023 report by the Shaanxi Provincial Forestry Bureau — though officials stress that this new vegetation cover is still fragile and that holding back the sand is an ongoing effort, not a finished job.",
    history:
      "The Mu Us area was once an important base of the Xiongnu (the city of Tongwancheng was built here), when the vegetation was far better than in modern times. In recent decades Yulin in Shaanxi, Ordos in Inner Mongolia and others have kept planting forest and grass and spreading straw checkerboards, turning this sandy land from expanding to shrinking — a model of China's desertification control.",
  },

  gobi: {
    // seeing sources: **「戈壁」有两个意思：地表类型（砾质荒漠）与地名（蒙古国与中国内蒙古之间那片区域）。**
    //   本篇从头到尾用的是前者，没有把两件事混成一件 —— 这是 2026-09-08 专项核对的结论。
    //   风力分选留下搬不动的砾石、结成「荒漠砾幂」，是公认的干旱地貌学机制，未被简化成错。
    //   **酒泉卫星发射中心实际在内蒙古阿拉善盟额济纳旗东风镇，不在甘肃酒泉市** ——
    //   正文写的是「设在这片戈壁里」，避开了这个很常见的地理误解。居延汉简出土为公认考古史实。
    //   `history` 段只涉汉代屯戍等前现代史，零争议红线通过。
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
    // seeing sources: 主峰步云山 **1130.7 m**，称「辽南第一峰」—— 多来源一致，2026-09-08 核。
    //   **与山东丘陵的 distinguish 段交叉核对**：辽东丘陵是长白山脉向西南延伸的余脉（花岗岩、变质岩剥蚀低山），
    //   山东丘陵中的泰山、鲁山、沂山、蒙山是沿断裂抬升的断块山 —— 两篇的归属与相对高度关系一致，
    //   没有出现乌鲁鲁/卡塔丘塔那种「区分段互相抄错方向」的问题。
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
    // seeing sources: 泰山（玉皇顶）标准高程 **1532.7 m** —— 2007-04-27 国家测绘局与建设部联合公布，
    //   是目前最权威、最精确的数据，景区官方与学术文献均沿用（2026-09-08 核）。
    //   泰山 **1987 年**列入《世界遗产名录》，为文化与自然双重遗产、也是世界第一个双重遗产 ——
    //   https://whc.unesco.org/zh/list/437（1 级）。
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
    // distinguish sources: **镜像交叉核对（2026-09-08）**：与两广丘陵条目的 distinguish / seeing 段逐句对照，
    //   两篇对「江南丘陵在南岭以北、红壤与花岗岩/砂岩为主」「两广丘陵在南岭以南、石灰岩喀斯特峰林为主」
    //   的归属完全一致，没有出现上一批乌鲁鲁/卡塔丘塔那种「区分段互相抄错方向」的问题。
    //   **相邻条目的「区分」段是互相镜像的，一处写错就会传染 —— 这类条目要成对核。**
    //   南岭作为两者分界为公认地理界线。
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
    // history sources: 灵渠沟通湘江（长江水系）与漓江（珠江水系），公元前 214 年前后秦始皇为统一岭南而修建 ——
    //   广泛记载的水利与军事史常识，只涉前现代史，零争议红线通过（2026-09-08 核）。
    //   **与江南丘陵的 distinguish/seeing 段再次交叉复核**：南岭为界、两广以喀斯特峰林为标志、
    //   江南以红壤低山与花岗岩名山为标志，两篇互相印证，未出现抄错方向。
    history:
      "The scenery of Guilin has long been called \"the finest under heaven\" and appears again and again in Chinese landscape painting and travel writing. The Lingqu Canal links the Xiang and Li rivers, letting the Central Plains reach the Pearl system by water — a key work in the Qin unification of the far south.",
  },

  namtso: {
    // seeing sources: 纳木错湖面海拔 **4718 m**；**色林错自 2014 年监测起面积超过纳木错，成为西藏第一大湖**，
    //   纳木错退居第二 —— https://www.chinanews.com.cn/sh/2014/07-21/6407632.shtml（2 级，2026-09-09 核）。
    //   对比用的青海湖湖面 3196 m 与中科院口径一致。
    //   **正文刻意没有给纳木错的具体面积数字** —— 那是会随冰川融水变化的量（近年呈扩张趋势），
    //   不写死是正确处理（known-errors C6-j）；日后若要加，必须带监测年份与机构。
    //   `history` 段只写藏传佛教圣湖的民俗事实，零争议红线通过。
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
    // seeing sources: 洞庭湖**现有水面 2625 km²，是全国水量最大、水面面积第二的淡水湖泊** ——
    //   湖南省人民政府 https://www.hunan.gov.cn/topic/2020hnjksc/jkscwzewm/202412/t20241223_33533635.html
    //   （1 级，2024-12 发布页，2026-09-09 核）；鄱阳湖平水位约 3150 km²、高水位超 4125 km²，均更大。
    //   **正文只写「退居第二」、没有给具体面积数字，回避了会随季节与围垦剧烈变化的量** —— 正确写法。
    //   **但这个名次本身也是会变的**（洞庭湖历史上曾是第一），下一轮要连同监测时点一起复核。
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
      "Dongting has traditionally been called the finest water under heaven, and Yueyang the finest tower — the Yueyang Tower, famous from Fan Zhongyan's essay, stands on the lake shore. The Dongting Lake plain is an important \"land of fish and rice.\" The lake's finless porpoises and wintering birds are a focus of recent conservation.",
  },

  "tiger-leaping-gorge": {
    // seeing / concept sources: 先成河机制（金沙江先于两山抬升存在、下切速度追上抬升）、上／中／下虎跳三段划分、
    //   石鼓「长江第一湾」均核实无误。
    //   ⚠️ **「高差约 3900 米」记 unknown**：这个数字在中文旅游／百科类来源里高度一致地反复出现，但**全是 3 级及以下**，
    //   未找到自然资源部／中科院／地方地质志一类 1 级来源。「世界最深峡谷之一」同样缺可比口径——**不同资料对「峡谷深度」
    //   的量法本身不统一**（量到最高峰顶 vs 量到谷肩）。正文已有「之一」限定、不是裸最高级，**本轮不改**，
    //   待找到一级来源再收紧或改写。2026-09-10 核，verdict: ok（一项 unknown）。
    // seeing sources: 谷深 3790 m、全长 17 km（中科院地理所，1 级）。核实 2026-09-12
    seeing:
      "Tiger Leaping Gorge, in north-western Yunnan, is an extremely deep, extremely narrow gorge the Jinsha River has cut between the Jade Dragon Snow Mountain (about 5,596 m) and the Haba Snow Mountain (about 5,396 m), roughly 17 km long. From the river to the Jade Dragon summit is about 3,790 m — one of the deepest gorges in the world. Legend says a tiger once leaped the river using a boulder in mid-channel, hence the name.",
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
    // seeing sources: 2026-09-09 逐句核实全篇 6 板块：玄武岩台地、湖光岩玛珥湖（玛珥式火山口湖）成因属标准地质表述；
    //   `history` 段的雷州得名、贬官流放史、热带作物均为前现代与客观地理事实。中英对照一致，无需改动。
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
};
