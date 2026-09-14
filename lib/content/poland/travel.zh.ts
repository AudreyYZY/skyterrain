import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_ZH: Record<string, TravelGuide> = {
  // ============ 波兰 ============
  "poland-overview": {
    // identity sources: 人口：GUS 数据，2025 年末 37,332,000 人（较上年少 15.7 万）——只找到波兰通讯社 PAP Biznes 对 GUS 公报的转述，未能直取 GUS 官网原页，**来源级别 2**。https://biznes.pap.pl/wiadomosci/gospodarka/liczba-ludnosci-polski-na-koniec-2025-spadla-o-157-tys-rdr-do-37332-mln-gus
    //   排名：Eurostat《Demography of Europe, 2025 edition》按 2024-01-01 常住人口口径，波兰约 3660 万列欧盟第五（德法意西之后），领先第六名罗马尼亚约 1700 万，排名稳固——**排名断言本身属实**，缺的只是年份与口径。https://ec.europa.eu/eurostat/web/interactive-publications/demography-2025（级别 1）
    //   核实日 2026-09-07
    identity:
      "波兰地处中欧，面积约31.3万平方公里，2025年末人口约3733万（波兰中央统计局），按欧盟统计局2024年数据居欧盟第五，北临波罗的海、南接喀尔巴阡山脉，地势从北向南逐渐升高，是东欧地区经济与文化重镇。",
    layout:
      "可大致分为：马佐夫舍（华沙及周边，政治中心）、小波兰（克拉科夫、扎科帕内，喀尔巴阡山脉门户）、大波兰与西里西亚（波兹南、弗罗茨瓦夫，西部平原与工业区）、波美拉尼亚（格但斯克、什切青、托伦，波罗的海沿岸）、瓦尔米亚—马祖里与波德拉谢（奥尔什丁、比亚韦斯托克，东北部湖区与森林）。",
    gettingAround:
      "华沙肖邦机场是主要国际门户，国内航线以华沙为枢纽通达全国约30条航线，铁路网络覆盖主要城市。自驾靠右行驶。属温带大陆性气候，南部山区冬季寒冷多雪，北部沿海较为温和。餐厅账单通常不含服务费，习惯上给10%左右小费或凑整；若账单已列出服务费则不必再加。电压230V，欧标两圆脚插头。",
    culture:
      "官方语言为波兰语，年轻群体与旅游区英语普及率较高。波兰人重视天主教传统与家庭观念，社会节奏相对沉稳内敛。餐厅账单通常不含服务费，习惯上给10%左右小费或凑整；若账单已列出服务费则不必再加。",
    seeAndDo:
      "自然地貌：塔特拉山与扎科帕内、杜纳耶茨河峡谷木筏漂流、马祖里湖区、斯沃文斯基移动沙丘、比亚沃维耶扎原始森林（世界遗产）。历史人文：克拉科夫老城与瓦维尔城堡（世界遗产）、华沙老城（世界遗产）、维利奇卡盐矿（世界遗产）、奥斯维辛集中营纪念馆。",
    whenAndTips:
      "5-9月最宜人，也是探索塔特拉山与马祖里湖区的旺季；国内航线覆盖广泛，跨区域行程可优先考虑飞机衔接，南北与东西向铁路车程通常在3-6小时。",
  },
  warsaw: {
    // identity sources: 波兰中央统计局（GUS）最新一期：基准日 **2025-12-31**，**2026-04-29 发布**，华沙 1,866,729。
    //   https://poland.gg/population/masovian/warszawa（3 级，转引 GUS Bank Danych Lokalnych，2026-09-08 核）。
    //   **GUS 是半年度**：基准日 6-30 与 12-31 各一期。
    //   **波兰全境人口普遍在缓慢下降，但华沙、克拉科夫、格但斯克这三座是少数还在增长的** ——
    //   写方向之前要分清是哪一类，别一概写成「下降」。
    identity:
      "华沙是波兰首都与最大城市，人口约187万（2025年末，波兰中央统计局），坐落于维斯瓦河畔，二战期间城市遭受严重破坏后按原貌重建，1980年老城列入世界遗产名录。",
    // howItWorks sources: Wikipedia (2026-09): Warsaw (city with powiat status; 18 dzielnice with elected councils; 517 km²; ~1.86 million 2024; metro ~3.1 million; Warsaw Act 2002; 2 metro lines; SKM); Administrative divisions of Poland
    howItWorks:
      "华沙是一个拥有县（powiat）地位的市，由民选市长和市议会治理，市下分 18 个区（dzielnica），各区有自己的民选区议会与区政府；2002 年的《华沙法》把此前各自为政的市镇合并成一座统一的城市。市域约 517 平方公里，2025 年末人口约 187 万，都会区约 310 万人。维斯瓦河把城市分成两岸：左岸的中城区是政治与商业中心，1944 年被夷平后按旧貌重建的老城、文化科学宫都在这里，沃拉区正在长出新的摩天楼群；右岸的布拉加是保留了战前街景的旧区。两条地铁线、有轨电车与 SKM 市郊铁路连起市区。地址写“街道、门牌、邮编”，本地人以区名说位置。初来的人最容易犯的错，是把重建的老城当作华沙的本相，而这座城的大部分是战后从零建起的。",
    layout:
      "老城位于维斯瓦河西岸高地，重建后的中世纪街巷格局与彩色联排建筑保存完好，新城区沿老城向外延伸，河东岸的普拉加区保留了较多战前原貌建筑。",
    gettingAround:
      "肖邦机场距市中心约10公里，有火车与地铁接驳；市内地铁、有轨电车网络发达。属温带大陆性气候，冬季寒冷，夏季温和。",
    culture:
      "官方语言为波兰语，年轻群体英语普及率较高。华沙历经二战几乎被夷为平地后按战前原貌重建老城，这一重建工程本身即是波兰民族韧性的象征。餐厅账单通常不含服务费，习惯上给10%左右小费或凑整；若账单已列出服务费则不必再加。",
    seeAndDo:
      "华沙老城广场与皇家城堡（战后按原貌重建，世界遗产）；瓦津基公园（肖邦纪念碑）；华沙起义博物馆；维斯瓦河滨河步道。",
    whenAndTips:
      "5-9月最宜人；老城核心区步行可达，建议留出半日专门参观华沙起义博物馆，深入了解城市战时历史。",
  },
  krakow: {
    // identity sources: 克拉科夫 2025 年 816,614（GUS，经 poland.gg 转引，3 级，2026-09-08 核）。克拉科夫仍在增长。
    identity:
      "克拉科夫是波兰历史古都与第二大城市，人口约82万（2025年，波兰中央统计局），1038至1596年间是波兰王国首都，瓦维尔城堡与老城1978年列入首批世界遗产名录。",
    // howItWorks sources: Wikipedia (2026-09): Kraków (18 dzielnice with councils; 327 km²; 816,614 2025; metro ~1.5 million; UNESCO 1978; Nowa Huta annexed 1951; trams, no metro); Administrative divisions of Poland
    howItWorks:
      "克拉科夫是小波兰省的省会，是一个拥有县地位的市，由民选市长和市议会治理，市下分 18 个区（dzielnica），各有自己的区议会；市域约 327 平方公里，2025 年人口约 82 万，是波兰第二大城市，都会区约 150 万人。老城被普兰蒂公园环绕——那是中世纪城墙的位置——中央集市广场在正中，瓦维尔城堡在南端的山上，1978 年列入首批世界遗产；卡齐米日是老城南面的旧犹太区，波德古热在维斯瓦河对岸；东面的新胡塔是 1949 年起规划建设的社会主义工业新城，1951 年并入。有轨电车是市内的主干，没有地铁。地址写“街道、门牌、邮编”。维利奇卡盐矿在东南 15 公里的另一座市镇。初来的人最容易犯的错，是把老城当作整座城，而克拉科夫的大多数市民住在老城之外的战后街区里。",
    layout:
      "老城以中央集市广场为核心，瓦维尔城堡矗立在维斯瓦河畔的高地上俯瞰全城，卡齐米日区保留有历史悠久的犹太社区街区。",
    gettingAround:
      "克拉科夫机场距市区直线约12公里，有火车接驳；老城步行可达，市内有轨电车网络发达。属温带大陆性气候。",
    culture:
      "官方语言为波兰语，作为波兰重要的旅游与大学城市，英语普及率较高。克拉科夫因二战期间未遭严重破坏而完整保留了中世纪城市格局，是波兰历史文化底蕴最深厚的城市之一。餐厅账单通常不含服务费，习惯上给10%左右小费或凑整；若账单已列出服务费则不必再加。",
    seeAndDo:
      "瓦维尔城堡与主教座堂（波兰历代君主加冕与安葬地）；中央集市广场与圣玛丽教堂；卡齐米日历史街区；周边可前往维利奇卡盐矿（世界遗产）与奥斯维辛集中营纪念馆。",
    whenAndTips:
      "5-9月最宜人；克拉科夫是探索小波兰地区（扎科帕内、维利奇卡）的理想门户，建议至少安排两到三日深度游览老城与周边景点。",
  },
  zakopane: {
    // 零改动留痕（2026-09-10）：Górale（高地人）文化写作客观的地方文化事实、无族群评价，✅ 红线通过。
    //   无民用机场，最近为克拉科夫机场——正文表述无误。
    // identity sources: 人口：原文对应 2017 年的 27,266，**落后九年**。GUS BDL 2025 年约 24,921，持续下降（PAP 报道市政府警示人口流失，2 级）。2026-09-10 核。
    identity:
      "扎科帕内是波兰南部塔特拉山脉北麓的山城，2025年人口约2.49万（GUS，仍在下降），被称为波兰的“冬季首都”，是探索塔特拉国家公园的传统门户。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Zakopane (Poland; town in Lesser Poland Voivodeship at the foot of the Tatra Mountains near the Slovak border, 27,266 residents in 2017, at 800–1,100 m; called the winter capital of Poland with more than 2.5 million visitors a year; the centre at the crossing of Krupówki and Kościuszko streets; the Zakopane Style of Stanisław Witkiewicz joining Carpathian vernacular with modern design, as in Villa Koliba of 1892–93 and the Tatra Museum of 1913–24; a centre of Góral highlander culture, costume, music and oscypek cheese; the Kasprowy Wierch cable car completed 1936, Gubałówka, and the Wielka Krokiew ski jump opened 1925; Nordic World Ski Championships in 1929, 1939 and 1962)
    howItWorks:
      "扎科帕内是波兰小波兰省的城镇，2025 年人口约 2.49 万（仍在下降），海拔 800 至 1,100 米，在塔特拉山北麓、靠近斯洛伐克边境；波兰的地方行政分省、县与市镇三级，本镇属塔特拉县，市镇管本地事务，省管区域规划。它自称波兰的“冬都”，每年到访者超过两百五十万，几乎全国的滑雪、登山与暑期避暑都往这一处集中，克鲁普夫基街与科希丘什科街的交叉口是全城的中心。这里是戈拉尔高地人文化的中心，服饰、音乐、木屋与羊奶熏酪“奥斯齐佩克”都出自这一支；19 世纪末画家斯坦尼斯瓦夫·维特凯维奇把当地木构做法与现代设计合成“扎科帕内风格”，1892 年的科利巴别墅与 1913 至 1924 年的塔特拉博物馆是代表作，这套样式后来被视为波兰的民族建筑语言。1936 年通车的卡斯普罗维山缆车与 1925 年启用的大克罗基耶夫跳台仍在使用，1929、1939 与 1962 年三次举办北欧滑雪世锦赛。初来的人最容易犯的错，是把它当作单纯的雪场，而它同时是一个文化流派的发源地。",
    layout:
      "小城沿塔特拉山脉北麓山谷而建，克鲁普夫基大街是当地最热闹的商业步行街，多座缆车站连接城区与周边山峰。",
    gettingAround:
      "本地无商业机场，最近机场为克拉科夫机场（约100公里）；从克拉科夫乘火车或巴士约2小时。市内步行可达，登山需自驾或乘接驳巴士。属温带山地气候，冬季寒冷多雪，夏季凉爽。",
    culture:
      "官方语言为波兰语。扎科帕内及周边的哥拉尔人保留有独特的山地民族服饰、木构建筑与民间音乐传统，被称为“哥拉尔文化”。餐厅账单通常不含服务费，习惯上给10%左右小费或凑整；若账单已列出服务费则不必再加。",
    seeAndDo:
      "卡斯普罗维WIERCH峰缆车（俯瞰塔特拉山群峰）；克鲁普夫基步行街；哥拉尔木构建筑风情区；塔特拉国家公园徒步（雷西峰、莫尔斯科奥科湖）。",
    whenAndTips:
      "12月至次年3月是滑雪旺季，6-9月是徒步旺季；缆车与热门徒步路线在旺季人流较多，建议清晨出发。",
  },
  rzeszow: {
    // 零改动留痕（2026-09-10）：howItWorks 的「2026 年 1 月约 19.9 万」与 GUS 官方 199,436（2025-12-31，1 级）接近，属实。
    //   「F-16 发动机世界仅两家制造商之一」经核基本属实（F-16 只有普惠 F100 与通用电气 F110 两家供应商，普惠在热舒夫设厂产 F100 零部件）；「航空谷」产业集群属实。
    //   机场专名「热舒夫—亚西翁卡机场」为现行官方名。
    // identity sources: 人口：GUS 热舒夫统计局 2025-12-31 为 199,436（1 级）。原 identity 的 19.6 万缺年份、且与同条目 howItWorks 的 19.9 万打架。「波兰第 15 大城市」排名成立。2026-09-10 核。
    identity:
      "热舒夫是波兰东南部小波兰地区的城市，2025年末人口约19.9万（GUS），是探索别什恰迪山脉的门户，也是波兰重要的航空工业中心。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Rzeszów (Poland; capital of Subcarpathian Voivodeship and the largest city in south-eastern Poland, about 198,540 inhabitants in January 2026, the 15th largest Polish city, on both banks of the Wisłok in the Sandomierz Basin; unusually among Polish cities of its size the population is growing, with municipal boundaries extended between 2017 and 2021; town rights from Casimir III the Great in 1354; historically on the east-west trade route; Asseco Poland and G2A.COM, and aerospace manufacturing including one of the world's two makers of F-16 engines; the Renaissance town hall, Rzeszów Castle and preserved synagogues; the underground tourist route; Rzeszów-Jasionka Airport; the A4 motorway)
    howItWorks:
      "热舒夫是波兰喀尔巴阡山省的省会，也是波兰东南部最大的城市，2026 年 1 月人口约 19.9 万，是波兰第 15 大城市；波兰的地方行政分省、县与市镇三级，省会同时是省政府与省议会的所在。它在维斯沃克河两岸的桑多梅日盆地里，1354 年由卡齐米日三世授予城市权，历史上位于连接欧洲与东方的商路上。与波兰同等规模的城市普遍收缩不同，热舒夫的人口在增长，2017 至 2021 年间还多次扩大市界并入周边乡镇。支撑它的是两样产业：一是软件与信息技术，Asseco Poland 与 G2A 的总部在此；二是航空制造，本地的“航空谷”产业集群与热舒夫工业大学相互支撑，世界上仅有的两家 F-16 发动机制造商之一在这里设厂。文艺复兴式的市政厅与老城堡在市中心，地下有一条穿过老城地窖的参观通道，保存下来的犹太会堂建筑也在老城。亚西翁卡机场在城北，A4 高速从旁经过。初来的人最容易犯的错，是把波兰东南部当作农业地带，而这里是航空工业的集中区。",
    layout:
      "老城中心保留文艺复兴风格市集广场，市郊近年发展为波兰重要的航空产业集群，得名“波兰航空谷”。",
    gettingAround:
      "热舒夫—亚西翁卡机场距市区约10公里，有巴士接驳；从华沙乘火车约3小时。老城步行可达。属温带大陆性气候。",
    culture:
      "官方语言为波兰语。热舒夫是波兰东南部重要的区域中心城市，因航空工业发展吸引了大量年轻技术人才。餐厅账单通常不含服务费，习惯上给10%左右小费或凑整；若账单已列出服务费则不必再加。",
    seeAndDo:
      "热舒夫市集广场与地下旅游线路（16世纪地窖遗址）；机场附近的波德卡尔帕茨基航空博物馆；周边可前往别什恰迪山脉徒步。",
    whenAndTips:
      "5-9月最宜人；热舒夫是探索别什恰迪山脉波沃尼纳草甸的便捷门户，山区徒步建议安排至少一到两日。",
  },
  wroclaw: {
    // 零改动留痕（2026-09-10）：机场专名「弗罗茨瓦夫机场」为现行官方名。前现代史与建筑史（大教堂岛、集市广场、
    //   1913 年百年厅、2006 年列入世界遗产）照留，只删了 1945 年前后人口更替那一句。
    // identity sources: 人口：GUS 2025-06-30 为 672,545。**⚠️ 不要用「89.3 万」或「超 110 万」**——那是弗罗茨瓦夫大学的「生活痕迹」实验性估算，不是 GUS 登记人口口径。「波兰第三大城市」成立（2021 年普查后超越罗兹，与其差距很小）。2026-09-10 核。
    identity:
      "弗罗茨瓦夫是波兰西南部西里西亚地区的核心城市，2025年人口约67万（GUS），坐落于奥得河畔，以百余座桥梁与遍布全城的“弗罗茨瓦夫小矮人”雕塑闻名。",
    // howItWorks sources: ⚠️ 零争议红线：原 howItWorks 有一句陈述 1945 年前后人口与语言整体更替，2026-09-10 整句删除（比照 CLAUDE.md 对捷克「1938/1945 年人口迁移一律不写」的既有规定）。前现代史与建筑史照留。
    howItWorks:
      "弗罗茨瓦夫是下西里西亚省的省会，是一个拥有县地位的市，由民选市长和市议会治理，市下的基层单位是 48 个 osiedle，各有自己的居民议会——这里在 1990 年就撤销了区一级。市域约 293 平方公里，2025 年人口约 67 万，是波兰第三大城市。奥得河及其支流把城市切成十几座岛，一百多座桥把它们连起来：大教堂岛是城市的发源地，集市广场是中世纪的中心，1913 年建成的百年厅在东面的公园区，2006 年列入世界遗产。有轨电车是市内的主干。约 13 万学生让它成为一座大学城。地址写“街道、门牌、邮编”。初来的人最容易犯的错，是把弗罗茨瓦夫当作一座普通的波兰城市，而它的街道格局与建筑记着另一段历史。",
    layout:
      "老城建于奥得河及其支流形成的多座岛屿之上，主集市广场是老城核心，教堂岛保留有中世纪宗教建筑群。",
    gettingAround:
      "弗罗茨瓦夫机场距市区直线约11公里，有巴士接驳；从华沙乘火车约4.5小时。老城步行可达，河上桥梁众多。属温带大陆性气候。",
    culture:
      "官方语言为波兰语。弗罗茨瓦夫历史上曾属多个不同国家管辖，多元文化交融的历史造就了城市独特的建筑风貌。街头遍布数百座青铜小矮人雕塑是当地标志性的城市符号。餐厅账单通常不含服务费，习惯上给10%左右小费或凑整；若账单已列出服务费则不必再加。",
    seeAndDo:
      "主集市广场与市政厅；教堂岛；百年厅（世界遗产，20世纪初钢筋混凝土建筑代表作）；寻找街头小矮人雕塑；奥得河游船。",
    whenAndTips:
      "5-9月最宜人；弗罗茨瓦夫水系发达，河上游船是欣赏城市风貌的经典方式。",
  },
  poznan: {
    // identity sources: 波兹南市《2025 年市情报告》人口部分（转引 GUS 2025 年末）：534,239。
    //   https://badam.poznan.pl/i_my-i-nasze-zycie/01_mieszkancy/demografia-2025/（2 级，市政府官方页，2026-09-08 核）。
    //   **方向是降的** —— 波兰全境人口普遍缓降，波兹南、托伦、奥尔什丁都在跌，
    //   而华沙、克拉科夫、格但斯克还在涨，不要一概而论。
    identity:
      "波兹南是波兰西部大波兰地区的核心城市，人口约53.4万（2025年末，较上一年略有下降），是波兰最古老的城市之一，历史上曾是波兰早期国家的政治中心。",
    // howItWorks sources: Wikipedia (2026-09): Poznań (42 osiedla with councils since 2011, 5 historic dzielnice; 262 km²; ~540,000 2024; metro >1 million; Ostrów Tumski 966; PST 1997; International Fair); Administrative divisions of Poland
    howItWorks:
      "波兹南是大波兰省的省会，是一个拥有县地位的市，由民选市长和市议会治理，市下分 42 个 osiedle，各有自己的民选议会和支配的预算，2011 年起统一选举；老的 5 个区名——老城、新城、格伦瓦尔德、耶日采、维尔达——仍在日常语言里使用。市域约 262 平方公里，2025 年末人口约 53.4 万，都会区超过 100 万人。瓦尔塔河从城中穿过，河汊之间的大教堂岛是波兰国家的发源地之一，966 年的受洗据信在此发生；老集市广场是中世纪的中心，波兹南国际博览会是波兰最大的展会。1997 年通车的快速有轨电车是市内的主干。波兹南方言、圣马丁牛角包与务实的商业气质是这座城的标识。地址写“街道、门牌、邮编”。初来的人最容易犯的错，是把波兹南当作华沙与柏林之间的过路站，而它是波兰经济最活跃的地区之一的中心。",
    layout:
      "老城以老集市广场为核心，文艺复兴风格市政厅矗立其间，主教座堂岛保留有波兰最早的教堂遗址。",
    gettingAround:
      "波兹南—瓦维察机场距市区直线约6.9公里，有巴士接驳；从华沙乘火车约2.5小时。老城步行可达。属温带大陆性气候。",
    culture:
      "官方语言为波兰语。波兹南是波兰重要的商贸与会展城市，当地居民以务实高效的工作作风著称。老集市广场市政厅每日正午上演机械山羊报时表演。餐厅账单通常不含服务费，习惯上给10%左右小费或凑整；若账单已列出服务费则不必再加。",
    seeAndDo:
      "老集市广场与文艺复兴市政厅（正午机械山羊表演）；主教座堂岛（波兰最早的教堂遗址）；波兹南堡垒防御工事遗迹。",
    whenAndTips:
      "5-9月最宜人；波兹南是探索大波兰低地地区的理想门户，老城核心区步行即可覆盖主要景点。",
  },
  gdansk: {
    // identity sources: 格但斯克 GUS 2025-06-30 为 489,160。
    //   https://www.zawszepomorze.pl/artykul/23429,rosnie-liczba-mieszkancow-gdanska-miasto-ma-ich-obecnie-prawie-pol-miliona
    //   （3 级，转引 GUS，2026-09-08 核）。另有报道称 2025-12-31 已达约 489,328，但那出自市长社交媒体转述，
    //   没找到 GUS 官方页面直接确认，**只采信中期数字**。格但斯克在增长。
    identity:
      "格但斯克是波兰波罗的海沿岸的核心港口城市，人口约49万（2025年年中，波兰中央统计局），与索波特、格丁尼亚共同组成“三联城”，历史上是汉萨同盟重要的贸易城市。",
    // howItWorks sources: Wikipedia (2026-09): Gdańsk (city with powiat status; dzielnice with councils; 487,371 2023; Tricity ~1.1 million; Main Town rebuilt; Free City 1920–39; shipyard 1980; SKM); Administrative divisions of Poland
    howItWorks:
      "格但斯克是滨海省的省会，是一个拥有县地位的市，由民选市长和市议会治理，市下分三十多个区（dzielnica），各有自己的区议会；2025 年年中人口约 49 万，而它与格丁尼亚、索波特连成的“三联市”约 110 万人，三座城各有自己的市政府，SKM 市郊铁路像一条脊柱把它们串起来。莫特瓦瓦河边的主城是 1945 年后按旧貌重建的历史中心，长市场是它的坐标原点；1920 至 1939 年这里是国际联盟托管的自由市，1980 年造船厂的罢工诞生了团结工会。港口是波兰最大的海港，琥珀是这座城的传统商品。地址写“街道、门牌、邮编”。卡舒比人的家乡在西面的丘陵与湖区。初来的人最容易犯的错，是把格但斯克与三联市混同，而海滩在索波特、现代港口在格丁尼亚，各是另一座城。",
    layout:
      "老城沿摩特拉瓦河而建，长街与长市场是老城的历史主轴，绿门与金门等历史城门保留完好，港口区保留有历史悠久的起重机建筑。",
    gettingAround:
      "格但斯克莱赫瓦文萨机场距市区直线约12公里，有巴士与火车接驳；从华沙乘火车约2.5小时。老城步行可达，前往海尔半岛需自驾或乘火车。属温带海洋性气候，沿海较为温和。",
    culture:
      "官方语言为波兰语。格但斯克是1980年团结工会运动的发源地，这一历史事件被认为是东欧剧变的重要开端之一。餐厅账单通常不含服务费，习惯上给10%左右小费或凑整；若账单已列出服务费则不必再加。",
    seeAndDo:
      "长街与长市场历史街区；圣玛丽教堂（欧洲最大的砖砌教堂之一）；欧洲团结中心博物馆；港口历史起重机建筑；周边可前往海尔半岛或斯沃文斯基移动沙丘。",
    whenAndTips:
      "5-9月最宜人，也是波罗的海海滨度假旺季；格但斯克是探索海尔半岛与斯沃文斯基沙丘的便捷门户。",
  },
  szczecin: {
    // identity sources: 人口：什切青统计局 2025-12-31 约 38.4 万（1 级）。「波兰第七大城市」按最新 GUS 排序成立。2026-09-10 核。
    identity:
      "什切青是波兰西北部奥得河口的港口城市，2025年末人口约38.4万（GUS），紧邻德国边境，是波兰重要的海港与工业城市。",
    // howItWorks sources: ⚠️ 零争议红线：删去「二战后依波茨坦协定划归波兰」这半句（1945 年边界变动陈述）。1630 瑞典 / 1720 普鲁士属前现代史，照留。
    //   **核实方另建议把 culture 段「历史上曾长期属德国管辖，建筑风貌融合德国与波兰印记」也一并软化，未采纳** —— 那一句与克罗地亚条目写「哈布斯堡 / 威尼斯建筑遗产」是同一种处理，本身是建筑史事实、无评价成分；它之所以看着敏感，是因为**紧挨着上面那句波茨坦协定**。上面那句删掉之后，这一句就回到了与克罗地亚一致的尺度。**删一句和删一段是两件事**，2026-09-10 判定。
    howItWorks:
      "什切青是波兰西滨海省的省会，是按人口计波兰第七大城市，也是西北部最大的城市；波兰的地方行政分省、县与市镇三级，省会同时是省政府与省议会所在。城市在奥得河下游、什切青潟湖以南，与外海之间隔着一段内水航道，港口与更靠海的希维诺乌伊希切共同构成波兰最大的港口群之一，柏林在西面约 130 公里。它的记载可追到 8 世纪，中世纪在格里芬王朝治下成为波罗的海重要商埠，1630 年起属瑞典，1720 年归普鲁士。今天最能看出它历史的是街道：19 世纪的改造仿照奥斯曼改造后的巴黎，放射状的星形广场与宽林荫道贯穿全城，市区绿地与水面的比例在波兰各大城市中居前列。格里芬王朝的公爵城堡与河岸上的赫罗布雷堤台是主要地标，1999 年起北约的东北多国军团总部设在此。初来的人最容易犯的错，是以为这座港口城市临海，而它在河上，离开阔海面还有约 65 公里。",
    layout:
      "老城沿奥得河支流而建，波美拉尼亚公爵城堡矗立在城市高地，港口区沿奥得河展开，是波兰面积最大的城市绿地系统之一的所在地。",
    gettingAround:
      "什切青—戈萊尼乌夫机场距市区公路约45公里，有巴士接驳；从华沙乘火车约6.5小时，从柏林乘火车约1.5小时。老城步行可达。属温带海洋性气候。",
    culture:
      "官方语言为波兰语，因紧邻德国边境，德语在部分商业场合也可交流。什切青历史上曾长期属德国管辖，城市建筑风貌融合了德国与波兰的文化印记。餐厅账单通常不含服务费，习惯上给10%左右小费或凑整；若账单已列出服务费则不必再加。",
    seeAndDo:
      "波美拉尼亚公爵城堡；哈肯露台（俯瞰奥得河港口全景）；老城市政厅；周边可前往沃林岛国家公园探索海崖与野牛保护区。",
    whenAndTips:
      "5-9月最宜人；什切青地处波兰与德国交界，是跨国一日游的便捷起点，也是探索沃林岛的理想门户。",
  },
  torun: {
    // howItWorks sources（2026-09-15 核实，update）: 同上 · GUS Tabl.20 · Toruń=192,784, 2026-01-01口径 · 1级 · 2026-09-15 核；下一期约 2027-04
    // identity sources（2026-09-15 核实，update）: https://stat.gov.pl/download/gfx/portalinformacyjny/pl/defaultaktualnosci/5468/7/23/1/powierzchnia_i_ludnosc_w_przekroju_terytorialnym_2026_2.xlsx · GUS《Powierzchnia i ludność w przekroju terytorialnym w 2026 r.》(发布2026-04-29), Tabl.20 miasta · 直接下载xlsx解析: Toruń=192,784 · 1级 · 2026-09-15 核；下一期约 2027-04
    // identity sources: 托伦 GUS 常住人口：2021-12-31 = 197,112 → 2022 = 195,690 → **2023-12-31 = 194,771**
    //   （波兰语维基逐年列出 GUS 序列，3 级，2026-09-08 核）https://pl.wikipedia.org/wiki/Ludność_Torunia 。
    //   原注释里的 196,935 是英文维基旧版引的 2021 年 12 月数字。
    //   **两套口径不能互换**：市政府自己的「已登记居民」2024 年末 170,327、2025 年中 167,450，
    //   与 GUS 的常住人口长期差两万多。2024/2025 的 GUS 数未查到，下一轮补。
    identity:
      "托伦是波兰中北部维斯瓦河畔的历史古城，人口约19.3万（2026年1月，波兰GUS，持续下降），是天文学家哥白尼的出生地，完整保留的中世纪老城1997年列入世界遗产名录。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Toruń (Poland; city in Kuyavian-Pomeranian Voivodeship, one of two regional capitals alongside Bydgoszcz, about 196,935 residents, on the Vistula; founded by the Teutonic Knights in 1233, joined the Hanseatic League in 1264 and remained a significant trading centre, a royal city from 1506 with voting rights in Polish royal elections; the city avoided damage in both world wars and retained its Gothic to Baroque architecture, the Medieval Town of Toruń inscribed by UNESCO in 1997 for its intact layout and brick Gothic buildings; Nicolaus Copernicus born here in 1473, his birthplace now a museum; gingerbread made here for nearly a millennium; the Camerimage film festival)
    howItWorks:
      "托伦是波兰库亚维滨海省的城市，2026 年 1 月人口约 19.3 万，在维斯瓦河边；这个省有一个少见的安排——省会一分为二，省议会与省长（marszałek）在托伦，中央派驻的省督（wojewoda）在比得哥什，两座城市各占一半，这在波兰十六个省里是唯一的。城市 1233 年由条顿骑士团建立，1264 年加入汉萨同盟，长期是维斯瓦河上的贸易重镇，1506 年起成为王室直辖城市，可参与国王选举。它最不寻常的地方是完好：两次世界大战都没有波及市中心，从哥特式到巴洛克的建筑连片保存，1997 年“托伦中世纪城区”以其完整的城市格局与砖砌哥特建筑列入世界遗产。1473 年哥白尼生在这里，故居现为博物馆；姜饼在此制作了近千年，是本地的老行业。哥白尼大学在城中。初来的人最容易犯的错，是以为省会只有一个，而这个省的行政机构分设在两座城市。",
    layout:
      "老城沿维斯瓦河北岸而建，哥特式砖砌建筑密布，哥白尼故居博物馆与老城市政厅是老城核心地标。",
    gettingAround:
      "本地无商业机场，最近机场为比得哥什机场（约50公里）；从华沙乘火车约2.5小时。老城步行可达。属温带大陆性气候。",
    culture:
      "官方语言为波兰语。托伦以姜饼制作传统闻名，当地姜饼博物馆展示这一延续数百年的手工艺传统。餐厅账单通常不含服务费，习惯上给10%左右小费或凑整；若账单已列出服务费则不必再加。",
    seeAndDo:
      "哥白尼故居博物馆；老城市政厅与集市广场；托伦城堡遗址；姜饼博物馆体验手工制作。",
    whenAndTips:
      "5-9月最宜人；托伦老城保存完好、规模紧凑，适合安排半日到一日的深度漫步游览。",
  },
  olsztyn: {
    // howItWorks sources（2026-09-15 核实，update）: 同上 · GUS Tabl.20 · Olsztyn=165,393 · 1级 · 2026-09-15 核；下一期约 2027-04
    // identity sources（2026-09-15 核实，update）: 同上 · GUS Tabl.20 · Olsztyn(省会市本身，非琴斯托霍瓦县同名村)=165,393, 2026-01-01口径 · 1级 · 2026-09-15 核；下一期约 2027-04
    // identity sources: 奥尔什丁 GUS：2024-12-31 = 166,392，2025-06-30 = 165,855（又降 537 人）；2021 年为 169,793。
    //   https://tko.pl/316169,2025,10,22,co-sie-dzieje-z-olsztynem-gus-podal-zadziwiajace-dane-o-liczbie-mieszkancow
    //   （3 级，转引 GUS，2026-09-08 核）。奥尔什丁在下降。
    identity:
      "奥尔什丁是波兰东北部瓦尔米亚—马祖里地区的核心城市，人口约16.5万（2026年1月，波兰GUS，逐年略有下降），是探索马祖里湖区的传统门户。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Olsztyn (Poland; capital of Warmian-Masurian Voivodeship, about 169,793 residents in 2021, on the Łyna; a watchtower from 1334 and municipal rights in 1353 granted by the cathedral chapter of the Bishopric of Warmia; Nicolaus Copernicus lived in the town castle as administrator from 1516 to 1521 and directed its defence; 15 lakes within the administrative boundary covering about 725 ha and forest over 21 per cent of the city area, part of the Land of a Thousand Lakes; the Gothic co-cathedral of St James; the University of Warmia and Mazury founded 1999; the Michelin plant the largest employer)
    howItWorks:
      "奥尔什丁是波兰瓦尔米亚-马祖里省的省会，2026 年 1 月人口约 16.5 万，在瓦纳河边；波兰的地方行政分省、县与市镇三级，省会同时是省政府与省议会所在。它 1334 年从一座瞭望塔起步，1353 年由瓦尔米亚主教区的座堂议事会授予城市权——这一带中世纪长期由主教区治理，而不是世俗诸侯，城堡与教堂因此是城市的核心。哥白尼 1516 至 1521 年作为瓦尔米亚的管理者住在这座城堡里，并在 1520 至 1521 年主持了城市的防务。它最鲜明的特征是水与林：市界之内有十五个湖，水面约 725 公顷，森林占市域两成以上，因此它被视为马祖里湖区的门户，全省的标志性资源就是这一片湖群。圣雅各布哥特式共同主教座堂在老城，1999 年成立的瓦尔米亚与马祖里大学是本地最大的学校，米其林轮胎厂是最大的雇主。初来的人最容易犯的错，是把湖区想成城外的远方，而这座城本身就有十几个湖。",
    layout:
      "老城建于奥卡瓦河畔的高地上，哥特式砖砌城堡矗立城市核心，历史上是天文学家哥白尼曾任职管理的城堡之一。",
    gettingAround:
      "奥尔什丁—马祖里机场距市区公路约58公里，有巴士接驳；从华沙乘火车约2.5小时。老城步行可达，探索湖区需自驾或跟团。属温带大陆性气候。",
    culture:
      "官方语言为波兰语。奥尔什丁及周边地区历史上多元文化交融，普鲁士、波兰与立陶宛文化传统在此交织。餐厅账单通常不含服务费，习惯上给10%左右小费或凑整；若账单已列出服务费则不必再加。",
    seeAndDo:
      "奥尔什丁城堡（哥白尼曾任职管理）；老城集市广场；周边可乘船探索马祖里湖区，或前往希尼亚尔德维湖体验帆船活动。",
    whenAndTips:
      "5-9月最宜人，也是马祖里湖区帆船活动旺季；奥尔什丁是探索湖区的理想基地，建议安排至少一日湖区游船或帆船体验。",
  },
  bialystok: {
    // 零改动留痕（2026-09-10）：✅ 零争议红线通过——「族群与信仰混杂」「东正教堂」「犹太教堂遗址」均作客观历史／建筑事实呈现，
    //   未触及二战、族群冲突或现代政治；柴门霍夫创制世界语的动机写作「混杂的语言环境」，无冲突性措辞。
    //   机场：比亚韦斯托克—克雷夫拉尼（EPBK）是通用航空机场、**无定期商业客运**，在建的萨尼基机场尚未投运——正文「客运航班有限」准确、留有余地。
    // identity sources: 人口：GUS 2025-12-31 约 28.92 万。原 identity 的 29.7 万偏高且与同条目 howItWorks 的 28.9 万打架（C6i）——**howItWorks 是对的一侧**。2026-09-10 核。
    identity:
      "比亚韦斯托克是波兰东北部波德拉谢地区的核心城市，2025年末人口约28.9万（GUS），是探索比亚沃维耶扎原始森林与别布扎沼泽的门户。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Białystok (Poland; capital of Podlaskie Voivodeship and the largest city in north-eastern Poland, about 289,000 residents, tenth nationally, with the second-highest population density among Polish cities; about 200 km north-east of Warsaw on the Białystok Uplands along the Biała; recorded from about 1437 when a member of the Raczków family received a wilderness area along the river; flourished in the 18th century under the Branicki family, the Branicki Palace compared to Versailles; a major textile centre in the 19th century, called the Manchester of the North; L. L. Zamenhof, creator of Esperanto, born here in 1859; a historically multi-ethnic and multi-faith city with Orthodox churches; the fifth most forested Polish municipality, about 1,846 ha or 18 per cent)
    howItWorks:
      "比亚韦斯托克是波兰波德拉谢省的省会，也是波兰东北部最大的城市，2025 年末人口约 28.9 万，居全国第十，人口密度在波兰各大城市中位居第二；波兰的地方行政分省、县与市镇三级，省会同时是省政府与省议会所在。华沙在西南约 200 公里。城市约 1437 年见于记载，18 世纪在布拉尼茨基家族治下成型：他们把这里建成一座宫廷城市，巴洛克的布拉尼茨基宫与法式园林至今是市中心的核心，因此本地常称它“波德拉谢的凡尔赛”。19 世纪它成为纺织业中心，一度被称作“北方的曼彻斯特”。这一带历史上族群与信仰混杂，天主教堂与东正教堂并立至今，波兰的东正教徒有相当一部分集中在这个省；1859 年世界语的创制者柴门霍夫生于此城，他自述这种混杂的语言环境促成了他的想法。全市森林约 1,846 公顷、占市域一成八，比亚沃维耶扎原始森林在东南。初来的人最容易犯的错，是以为波兰只有天主教，而这里长期是多信仰并存之地。",
    layout:
      "老城以布拉尼茨基宫及其巴洛克花园为核心，被称为“波德拉谢的凡尔赛”，多元宗教建筑（天主教、东正教、犹太教堂遗址）见证了当地历史上的多元文化格局。",
    gettingAround:
      "本地机场客运航班有限，最近有稳定定期航班的机场为华沙肖邦机场（约180公里）；从华沙乘火车约2小时。老城步行可达，前往比亚沃维耶扎森林需自驾或乘巴士。属温带大陆性气候。",
    culture:
      "官方语言为波兰语。比亚韦斯托克历史上是国际语“世界语”创始人柴门霍夫的出生地，当地设有相关纪念展馆。餐厅账单通常不含服务费，习惯上给10%左右小费或凑整；若账单已列出服务费则不必再加。",
    seeAndDo:
      "布拉尼茨基宫与巴洛克花园；柴门霍夫纪念中心；周边可前往比亚沃维耶扎国家公园（世界遗产，欧洲野牛栖息地）或别布扎国家公园观鸟。",
    whenAndTips:
      "5-9月最宜人，也是观鸟与探索原始森林的最佳季节；比亚沃维耶扎森林距市区约1.5小时车程，建议安排至少一日专门游览。",
  },
};
