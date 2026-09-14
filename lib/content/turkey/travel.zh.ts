import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_ZH: Record<string, TravelGuide> = {
  // ============ 土耳其 ============
  "turkey-overview": {
    // 回扫 sources（2026-09-15 核实，非人口六段回扫，content-verifier）: layout / culture：七大地理区域、本指南涉及五个；小费比例只查到 3 级且与原写 10–15% 不符，改为不给比例（规则 ⑪，同改 11 个条目）
    // identity sources: TÜİK《Adrese Dayalı Nüfus Kayıt Sistemi Sonuçları, 2025》：2025-12-31 地址登记人口 86,092,168 人。https://veriportali.tuik.gov.tr/tr/press/53899
    //   核实日 2026-09-07，来源级别 1
    identity:
      "土耳其地跨欧亚两洲，国土面积约78万平方公里，2025年末地址登记人口约8609万（土耳其统计局），首都安卡拉，最大城市伊斯坦布尔，官方语言土耳其语，货币为土耳其里拉(TRY)。",
    layout:
      "土耳其官方划分七大地理区域，本指南涉及其中五个：马尔马拉地区（伊斯坦布尔/布尔萨，博斯普鲁斯海峡两岸、亚欧交界）、爱琴海地区（伊兹密尔/博德鲁姆/棉花堡，深切海湾与古希腊罗马遗址）、地中海地区（安塔利亚，土耳其里维埃拉）、中安纳托利亚地区（安卡拉/科尼亚/卡帕多奇亚，高原与火山灰地貌）、黑海地区（特拉布宗，多雨山地海岸）。",
    gettingAround:
      "国内航班是跨区域出行的主要方式，土耳其航空、飞马航空、AJet等覆盖各主要城市；伊斯坦布尔市内有地铁、有轨电车与渡轮，长途大巴网络发达。气候南北差异明显：地中海与爱琴海沿岸夏热干燥冬温和，中安纳托利亚高原冬冷夏热、昼夜温差大，黑海沿岸全年多雨。多国公民可享受一定天数免签或落地签入境，具体以土耳其外交部最新公布为准。",
    culture:
      "土耳其是以突厥语族穆斯林为主体的世俗共和国，宪法规定政教分离，多数居民信奉伊斯兰教（逊尼派为主），社会整体氛围较为温和开放，饮酒合法且普遍可得，斋月期间白天在公共场合进食饮水虽不违法，但作为礼貌宜适当低调。进入清真寺需脱鞋，女性需备头巾、衣着覆盖肩膀与膝盖；餐厅小费不是强制的，服务满意时可以留一些，先看账单是否已含服务费。",
    seeAndDo:
      "伊斯坦布尔的圣索菲亚大教堂与蓝色清真寺；卡帕多奇亚的热气球飞行与精灵烟囱地貌；棉花堡的钙化梯田；安塔利亚的地中海海岸与古城遗址；以弗所古城；科尼亚的梅夫拉纳博物馆与旋转苦行僧仪式。",
    whenAndTips:
      "4月至6月、9月至10月气候最为宜人，是出行旺季；7、8月沿海地区高温且游客众多，中安纳托利亚高原昼夜温差可能很大，建议携带保暖衣物；跨区域出行建议提前规划航班或长途大巴。",
  },
  istanbul: {
    // 回扫 sources（2026-09-15 核实，非人口六段回扫，content-verifier）: whenAndTips：蓝色清真寺祈祷前后关闭约 1 小时、周五上午至约 14:30（访客须知 2 级）
    // howItWorks sources（2026-09-15 核实，update）: TÜİK ADNKS 2025（2 级）；下一期约 2027-02
    // identity sources（2026-09-15 核实，update）: TÜİK ADNKS 2025（2026-02-09 发布，经媒体转述，2 级）；下一期约 2027-02
    identity:
      "伊斯坦布尔是土耳其最大城市与经济文化中心，2025年末地址登记人口约1575万（土耳其统计局），横跨博斯普鲁斯海峡两岸、地跨亚欧两大洲，历史上先后是拜占庭帝国与奥斯曼帝国的都城，1923年后不再是首都但仍是土耳其最具国际影响力的城市。",
    // howItWorks sources: Wikipedia (2026-09): Istanbul (metropolitan municipality coextensive with province; elected mayor + appointed governor; 39 districts with elected mayors; 5,461 km²; ~15.7 million 2024; European side ~65%; Fatih UNESCO 1985; mahalle/muhtar; airport 2018); Metropolitan municipalities in Turkey (Law 6360)
    howItWorks:
      "伊斯坦布尔在行政上是一座与省同域的大都会市：民选的大都会市长管交通、供水与全市规划，中央任命的省长管警察、教育等国家事务，市下分 39 个区，各区有自己的民选区长和区议会；区之下是 mahalle，即社区，各有民选的社区长（muhtar），是登记住址与办事的基本单位。市域约 5,461 平方公里，2025 年末人口约 1,575 万（土耳其统计局）。博斯普鲁斯海峡把城市分成欧亚两岸，约三分之二的人口在欧洲一侧：法提赫区的历史半岛是 1985 年列入世界遗产的老城，贝伊奥卢与塔克西姆是 19 世纪以来的新城，莱文特—马斯拉克是商务区；亚洲一侧的卡德柯伊与于斯屈达尔各有自己的中心。三座跨海大桥、马尔马拉海底铁路、地铁与渡轮用一张 Istanbulkart 贯通。新机场 2018 年在北面启用。地址写“社区、街道、门牌、区”。初来的人最容易犯的错，是把历史半岛当作整座城，而它只是一个 1,500 万人城市里的一个区。",
    layout:
      "城市以博斯普鲁斯海峡为界分为欧洲区与亚洲区，欧洲区又以金角湾分为老城（苏丹艾哈迈德区，历史古迹集中）与新城（贝伊奥卢区，塔克西姆广场与现代商业中心）；亚洲区（卡德柯伊）以生活气息浓厚著称。",
    gettingAround:
      "伊斯坦布尔机场（IST）距欧洲区市中心直线约35公里；市内地铁、有轨电车、渡轮网络发达，跨海峡出行可乘渡轮或地铁马尔马雷线，是体验城市地理格局的便捷方式。",
    culture:
      "官方语言土耳其语。进入圣索菲亚大教堂或蓝色清真寺等宗教场所，女性需备头巾、衣着覆盖肩膀与膝盖，男女均需脱鞋，非祈祷时段游客可参观但应保持安静；餐厅小费不是强制的，服务满意时可以留一些，先看账单是否已含服务费。",
    seeAndDo:
      "圣索菲亚大教堂（拜占庭与奥斯曼建筑史的双重见证）；蓝色清真寺；托普卡帕宫（奥斯曼苏丹旧居）；大巴扎（全球最古老、规模最大的有顶市集之一）；加拉塔塔俯瞰金角湾与博斯普鲁斯海峡。",
    whenAndTips:
      "4月至5月、9月至10月气候最宜人、游客相对较少；蓝色清真寺在每日五次祈祷前后各约一小时、以及周五上午至约14:30不对游客开放，建议提前查询当日祈祷时间安排行程。",
  },
  ankara: {
    // howItWorks sources（2026-09-15 核实，update）: TÜİK ADNKS 2025（2 级）；下一期约 2027-02
    // identity sources（2026-09-15 核实，update）: TÜİK ADNKS 2025（2 级）；下一期约 2027-02
    identity:
      "安卡拉是土耳其共和国首都，2025年末地址登记人口约591万（土耳其统计局），是土耳其第二大城市，1923年由凯末尔选定为新首都，是土耳其的政治与行政中心。",
    // howItWorks sources: Wikipedia (2026-09): Ankara (capital 1923; metropolitan municipality = province; 25 districts; 25,632 km²; ~5.8 million 2024; Ulus/Kızılay/Çankaya; Jansen plan 1932 for 500,000); Metropolitan municipalities in Turkey
    howItWorks:
      "安卡拉自 1923 年起是土耳其的首都，在行政上是一座与省同域的大都会市：民选的大都会市长管交通与全市规划，中央任命的省长管国家事务，市下分 25 个区，各区有自己的民选区长和区议会，区之下是有民选社区长的 mahalle。省域约 25,632 平方公里，2025 年末人口约 591 万，是土耳其第二大城市。城市沿阿塔图尔克大道向南生长：北端的乌卢斯是城堡下的老城，克孜拉伊是共和国时期的中心，钱卡亚是总统府与使馆区，再往西南的松居特厄聚与恰伊约卢是新的商务与住宅区，国父陵在中间的山上。1932 年的扬森规划为 50 万人设计了这座首都，1950 年代起的移民早已把它撑大十倍。地铁与轻轨连起市区，高铁通往伊斯坦布尔与科尼亚，埃森博阿机场在北面。地址写“社区、街道、门牌、区”。初来的人最容易犯的错，是把安卡拉当作一座只有政府的城市，而它是一座 580 万人的大学与工业城市。",
    layout:
      "城市以安卡拉城堡所在的老城区为历史核心，向南延伸的新城区集中了政府机构、大学与使馆区；安尼特卡比尔（阿塔图尔克陵）坐落于城市西侧一处高地。",
    gettingAround:
      "埃森博阿机场（ESB）距市区直线约25公里；市内地铁与公交网络较为完善，是探索安纳托利亚文明博物馆等历史场馆的便捷交通基础。",
    culture:
      "官方语言土耳其语。安卡拉作为行政中心，衣着与礼仪整体较为正式；进入宗教场所仍需脱鞋、女性备头巾。餐厅小费不是强制的，服务满意时可以留一些，先看账单是否已含服务费。",
    seeAndDo:
      "安尼特卡比尔（土耳其共和国国父阿塔图尔克陵墓，庄严的纪念性建筑群）；安卡拉城堡（俯瞰全城的老城堡垒）；安纳托利亚文明博物馆（收藏赫梯等安纳托利亚早期文明文物）。",
    whenAndTips:
      "安卡拉属大陆性气候，夏季炎热干燥、冬季寒冷，4月至6月与9月至10月是较适宜的旅行季节；安尼特卡比尔参观需着装得体，游客较多建议避开土耳其国定假日高峰时段。",
  },
  izmir: {
    // identity sources: 人口：**TÜİK 的「伊兹密尔人口」是全省数**（2014 年起省界 = 大都会市界），4,504,185（2025-12-31，2026-02-09 发布）。「第三大城市」按省人口排名成立。2 级转引 TÜİK。2026-09-10 核。
    identity:
      "伊兹密尔是土耳其第三大城市（按省人口排名，伊兹密尔省自2014年起与大都会市同界），2025年省人口逾450万（土耳其统计局），是爱琴海沿岸重要港口，滨海的科尔顿长廊是城市地标，因此被称为“爱琴海明珠”。",
    // howItWorks sources: Wikipedia (2026-09): İzmir (metropolitan municipality = province; 30 districts; ~4.5 million 2024; Gulf of İzmir; Konak/Alsancak/Karşıyaka/Bornova/Bayraklı; İzban/metro/ferries; Ephesus 80 km); Metropolitan municipalities in Turkey
    howItWorks:
      "伊兹密尔在行政上是一座与省同域的大都会市：民选的大都会市长管交通与全市规划，中央任命的省长管国家事务，市下分 30 个区，各区有自己的民选区长和区议会，区之下是有民选社区长的 mahalle。2025 年省人口约 450 万（土耳其统计局），是土耳其第三大城市。城市环抱着伊兹密尔湾：科纳克与阿尔桑贾克是市中心，海滨的科尔敦长廊是市民散步的地方，凯麦拉尔特集市与古代士麦那的市集遗址在老城，卡迪费卡莱山俯瞰全城；对岸的卡尔希亚卡靠渡轮往来，博尔诺瓦是大学区，巴伊拉克勒是新的高楼商务区。İzban 通勤铁路、地铁与渡轮用一张卡贯通。港口与自由贸易区是经济支柱，以弗所在南面约 80 公里。地址写“社区、街道、门牌、区”。初来的人最容易犯的错，是把伊兹密尔当作去以弗所的中转站，而它是一座围着海湾生长、靠渡轮把两岸连成一体的大城市。",
    layout:
      "城市沿伊兹密尔湾呈弧形展开，科尔顿海滨长廊是市民日常休闲核心区；老城区卡迪费卡莱城堡所在的科纳克一带保留历史街区，士麦那古市集遗址位于市中心。",
    gettingAround:
      "阿德南·门德雷斯机场（ADB）距市区直线约15公里；市内有地铁与轻轨网络，前往以弗所古城通常需乘火车或大巴至邻近的塞尔柱镇，车程约1小时。",
    // culture sources: ⚠️ 零争议红线（D-redline）：identity 与 culture 两段原本都写了「相对世俗开放 / 世俗化程度较高」——对土耳其国内城市在世俗／宗教轴上做比较评价，2026-09-10 一并删除，换成不带评价的城市事实。
    culture:
      "官方语言土耳其语。伊兹密尔是滨海度假与商贸氛围较浓的城市，日常衣着以休闲为主；进入清真寺仍需遵守脱鞋、女性备头巾等基本礼仪。餐厅小费不是强制的，服务满意时可以留一些，先看账单是否已含服务费。",
    seeAndDo:
      "科尔顿海滨长廊（日落时分观景与用餐胜地）；卡迪费卡莱城堡；士麦那古市集遗址；以伊兹密尔为基地前往以弗所古城（古希腊罗马时期重要城邦遗址）一日游。",
    whenAndTips:
      "4月至6月、9月至10月气候最为宜人，7、8月沿海地区炎热且游客较多；前往以弗所建议安排一整天行程，早晨出发可避开旅游团高峰。",
  },
  antalya: {
    // identity sources: 人口：TÜİK 2025 安塔利亚省 2,777,677（省界 = 大市界，2014 年起）。「地中海沿岸最大」经与阿达纳 2,283,609、梅尔辛比对成立。2026-09-10 核。
    identity:
      "安塔利亚是土耳其地中海沿岸最大城市（按省人口，2025年省人口逾277万，土耳其统计局），是土耳其地中海（土耳其里维埃拉）旅游的核心枢纽，古城卡莱伊奇临海而建。",
    // howItWorks sources: 人口：省 2,777,677（TÜİK 2025）。**「城区约 140 万」核不到 TÜİK 一手口径**（疑为维基自定义 urban area），已撤下、记 unknown，不用另一个没核到的数替换。2026-09-10 核。
    howItWorks:
      "安塔利亚自 2014 年起是一座与省同域的大都会市：民选的大都会市长管交通与全市规划，中央任命的省长管国家事务，省下分 19 个区，各区有自己的民选区长和区议会；其中穆拉特帕夏、凯佩兹、科尼亚阿尔特、多谢梅阿尔特与阿克苏 5 个区构成城市本身，2024 年全省约 278 万人（2025年，土耳其统计局）；城区人口另有估算，但核不到官方口径，这里不写。人们心中的“安塔利亚度假区”多在别的区：贝莱克、锡德、阿拉尼亚、凯梅尔各在自己的区里，离市区几十到一百多公里。城市本身建在托罗斯山与地中海之间的海岸台地上：卡莱伊奇老城在港口上方的悬崖上，科尼亚阿尔特海滩在西，拉拉海滩在东，杜登瀑布从台地直接跌入海里。安塔利亚机场是土耳其最繁忙的机场之一，旅客多是度假者；AntRay 有轨电车连起市区。柑橘与温室农业是旅游之外的产业。地址写“社区、街道、门牌、区”。初来的人最容易犯的错，是把安塔利亚市当作度假村，而它本身是一座省会城市，度假村在几十公里外。",
    layout:
      "老城卡莱伊奇以哈德良门为标志性入口，保留奥斯曼时期街巷与港湾；城市周边分布科尼亚勒特、伦达等多处知名海滩，杜登瀑布位于市区东北侧。",
    gettingAround:
      "安塔利亚机场（AYT）距市区直线约7.8公里，是土耳其地中海沿岸最主要的国际航空门户之一；市内有轻轨与公交网络，前往阿斯彭多斯古剧场等周边古迹通常需包车或参加当地旅行团。",
    culture:
      "官方语言土耳其语。安塔利亚是土耳其最重要的国际旅游城市之一，衣着相对自由，海滩着泳装普遍可接受；进入清真寺仍需脱鞋、女性备头巾。餐厅小费不是强制的，服务满意时可以留一些，先看账单是否已含服务费。",
    seeAndDo:
      "卡莱伊奇老城与哈德良门；科尼亚勒特海滩；杜登瀑布；阿斯彭多斯古剧场（保存最完好的古罗马剧场之一）；以安塔利亚为基地前往佩尔盖等周边古城遗址。",
    whenAndTips:
      "4月至6月、9月至10月气候温和宜人，7、8月气温可超35摄氏度但仍是海滩旅游旺季；冬季（12月至次年3月）气候温和，适合探访古迹淡季出行。",
  },
  cappadocia: {
    // identity sources（2026-09-15 核实，update）: TÜİK ADNKS 2025 内夫谢希尔分乡镇数（地方媒体转述，2 级）；下一期约 2027-02
    identity:
      "卡帕多奇亚是中安纳托利亚一片以精灵烟囱火山灰地貌与热气球飞行闻名的地区，核心镇格雷梅2025年登记人口约2,236人（土耳其统计局），是土耳其最具辨识度的旅游目的地之一。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Cappadocia and Göreme (Turkey; a historical region of Central Anatolia spanning Nevşehir, Kayseri, Aksaray, Kırşehir, Sivas and Niğde provinces, the name from Old Persian Katpatuka; the landscape formed by erosion of thick volcanic deposits from eruptions of Erciyes, Hasan Dağ and Göllüdağ, producing the fairy chimneys; ruled in turn by Persian, Greek, Roman, Byzantine and Ottoman powers, an early Christian centre with the Cappadocian Fathers of the 4th century; the Göreme Open Air Museum with more than 30 rock-cut churches and chapels with Byzantine frescoes, Göreme National Park and the Rock Sites of Cappadocia inscribed by UNESCO in 1985; the underground cities of Derinkuyu and Kaymaklı; cave hotels and hot-air ballooning)
    howItWorks:
      "卡帕多奇亚是土耳其中安纳托利亚的一片历史地区，跨内夫谢希尔、开塞利、阿克萨赖等数省，游客常住的格雷梅是内夫谢希尔省的一个镇；土耳其 2012 年第 6360 号法之后，人口较多的省实行“大市”制，市界与省界重合，本地事务由市与区两级办理。这片地貌来自火山：埃尔吉耶斯山、哈桑山与格柳山的多次喷发把厚层火山灰盖在这一带，其后的流水与风把松软的凝灰岩切成柱与谷，硬质岩帽留在柱顶，形成当地所称的“仙人烟囱”。凝灰岩好挖不易塌，因此人们直接在岩体里凿出住房、教堂与整座地下城——代林库尤与卡伊马克勒的地下城可深入数层，用于避难；格雷梅露天博物馆里有三十多座岩凿教堂，壁画属拜占庭时期。1985 年“格雷梅国家公园与卡帕多奇亚岩石遗址”列入世界遗产。热气球在日出前起飞，由民航主管部门按天气与流量管控。初来的人最容易犯的错，是把卡帕多奇亚当作一个城，而它是一片跨省的地区。",
    layout:
      "格雷梅、于尔居普、阿瓦诺斯与于奇希萨尔等多个小镇散布于火山灰地貌区内，格雷梅国家公园与露天博物馆是区域核心，德林库尤等地下城位于区域南部。",
    gettingAround:
      "内夫谢希尔卡帕多奇亚机场（NAV）距格雷梅约40公里，凯塞利机场（ASR）距格雷梅约69公里，两者均可作为门户机场；区域内小镇之间距离较近，多数游客选择包车、当地穿梭巴士或热气球公司接送。",
    culture:
      "官方语言土耳其语。区域旅游业发达，多数从业者习惯与国际游客打交道；进入岩凿教堂等宗教历史场所应保持安静、不触碰壁画；热气球飞行前建议确认公司资质与安全记录，餐厅小费不是强制的，服务满意时可以留一些，先看账单是否已含服务费。",
    seeAndDo:
      "日出热气球飞行俯瞰精灵烟囱地貌；格雷梅露天博物馆（拜占庭岩凿教堂与壁画）；于奇希萨尔城堡俯瞰全景；帕夏贝的精灵烟囱群；德林库尤地下城。",
    whenAndTips:
      "4月至6月、9月至10月是热气球飞行成功率较高、气候最宜人的季节；热气球飞行受天气条件影响，建议预留备用日期以防取消；冬季偶有降雪，为岩柱地貌增添别样景观但飞行取消概率更高。",
  },
  bodrum: {
    // identity sources: 人口：博德鲁姆是穆拉省下的**区（ilçe）**、不是省会，故用区人口而非省人口（穆拉全省 2025 年 1,099,547，不适用）。TÜİK 2025 区人口 207,196，2/3 级转引。2026-09-10 核。
    identity:
      "博德鲁姆是土耳其爱琴海南岸半岛度假胜地，2025年区人口约20.7万（土耳其统计局），因白色建筑、风车与圣彼得城堡闻名，是土耳其地中海式生活方式的代表城镇之一。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Bodrum (Turkey; town and district of Muğla Province, the ancient Halicarnassus, whose Mausoleum was one of the Seven Wonders of the Ancient World; Bodrum Castle built by the Knights of St John from 1402 using stone from the Mausoleum, now the Museum of Underwater Archaeology; the district population grew from about 26,000 in 1965 to about 198,000 in 2023 as tourism replaced fishing and sponge diving; white-washed building mandated since 2006; peninsula villages including Yalıkavak, Gümüşlük and Türkbükü; marinas and gulet yachting; Milas-Bodrum Airport; ferries to Kos)
    howItWorks:
      "博德鲁姆是土耳其穆拉省的一个县与同名县城，在爱琴海边的一处半岛上；穆拉是实行“大市”制的省份，市界与省界重合，本地事务由大市与县两级办理。它是古代的哈利卡纳苏斯：公元前 4 世纪的摩索拉斯陵墓曾是世界七大奇迹之一，后毁于地震，1402 年起圣约翰骑士团用陵墓的石料在海岬上建起博德鲁姆城堡，如今这座城堡是水下考古博物馆，藏有从附近海域打捞的古代沉船。20 世纪中期这里还是渔业与采海绵的小镇，1965 年全县约 2.6 万人，2023 年已约 19.8 万、2025 年约 20.7 万（土耳其统计局），旅游把它彻底改写；2006 年起当地规定新建筑一律刷白，因此整个半岛外观统一。真正的度假区分散在半岛上的村子里——亚勒卡瓦克、居米什吕克、蒂尔克比库各有不同的气质，县城只是港口与交通的中心。米拉斯—博德鲁姆机场在东北，渡轮通往希腊的科斯岛。初来的人最容易犯的错，是把住宿定在县城，而多数人想去的海湾在半岛另一侧，开车还要半小时以上。",
    layout:
      "城市围绕博德鲁姆湾呈半圆形分布，圣彼得城堡（博德鲁姆城堡）矗立于港湾中央的岬角上，将港湾分为东、西两个海湾；半岛周边分布图尔古特雷斯、亚利卡瓦克等多个度假小镇。",
    gettingAround:
      "米拉斯—博德鲁姆机场（BJV）距市区直线约32公里；市内以出租车、租车与渡轮为主要交通方式，前往半岛其它度假小镇通常需驾车或乘坐当地巴士。",
    culture:
      "官方语言土耳其语。博德鲁姆是土耳其国际化程度较高的度假城市之一，衣着相对自由；进入清真寺仍需脱鞋、女性备头巾。餐厅小费不是强制的，服务满意时可以留一些，先看账单是否已含服务费。",
    seeAndDo:
      "博德鲁姆城堡（圣彼得城堡，原水下考古博物馆所在地）；哈利卡纳苏斯古剧场；博德鲁姆风车（观日落地标）；乘古式帆船（gulet）游览周边海湾。",
    whenAndTips:
      "5月至10月是博德鲁姆的旅游旺季，7、8月气温高但海滩活动氛围最热烈；帆船一日游建议提前预订，避开正午高温时段出海。",
  },
  pamukkale: {
    // 回扫 sources（2026-09-15 核实，非人口六段回扫，content-verifier）: howItWorks：台地旅馆与公路拆除年代查不到一手来源，删去「20 世纪 90 年代」
    identity:
      "棉花堡是土耳其西南部一处以洁白钙化梯田闻名的地热景观，隶属代尼兹利省，与山顶的希拉波利斯古城共同构成UNESCO世界遗产地。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Pamukkale (Turkey; in Denizli Province, the name meaning cotton castle; travertine terraces deposited by mineral water from hot springs, with 17 springs ranging from about 35 °C to 100 °C; the ancient Greek city of Hierapolis built above the terraces as a thermal spa, with theatre and necropolis, important in the Phrygian, Roman and Byzantine periods and an early Christian centre; Hierapolis-Pamukkale inscribed by UNESCO in 1988 for both cultural and natural value; over two million visitors a year, with UNESCO and local authorities regulating water flow and closing sections in turn to let the formations regenerate)
    howItWorks:
      "棉花堡在土耳其代尼兹利省，土耳其语的字面意思就是“棉花城堡”；代尼兹利是实行“大市”制的省份，市界与省界重合，本地事务由大市与县两级办理。这片白色台地是水造出来的：山坡上有十七处温泉，水温从约 35 度到接近沸点，泉水溶着大量碳酸钙，流出地表后二氧化碳逸散、碳酸钙析出，一层层沉积成钙华梯田，因此这片“雪”其实是石头，而且还在长。台地之上是古希腊城市希拉波利斯，公元前 2 世纪起就作为温泉疗养城建设，剧场与城外规模巨大的墓地保存至今，它也是早期基督教的重要地点。1988 年“希拉波利斯—棉花堡”以文化与自然双重价值列入世界遗产。为保护钙华，建在台地上的旅馆与公路后来被拆除，如今游客只能赤脚沿指定路线行走，管理方还按季轮流封闭部分区段、调控放水，让沉积恢复。初来的人最容易犯的错，是以为可以随处下水，而能踩的只有划定的一条线。",
    layout:
      "棉花堡台地位于代尼兹利市以北约20公里处，台地顶端是希拉波利斯古城遗址，山脚下的棉花堡镇为游客提供住宿与餐饮服务。",
    gettingAround:
      "代尼兹利恰尔达克机场（DNZ）距棉花堡公路约65公里；市内以出租车与当地巴士为主要交通方式，从代尼兹利市区乘中巴前往棉花堡约需30至40分钟。",
    culture:
      "官方语言土耳其语。进入钙化梯田水池需赤脚行走以保护地质结构，部分区域游客较为拥挤，建议尽量早到避开团队高峰。餐厅小费不是强制的，服务满意时可以留一些，先看账单是否已含服务费。",
    seeAndDo:
      "棉花堡钙化梯田（赤脚踏水体验阶梯状温泉池）；希拉波利斯古城遗址（古罗马浴场、剧场与墓葬群）；克利奥帕特拉温泉池（相传为埃及艳后沐浴之处，可付费入内游泳）。",
    whenAndTips:
      "日出或傍晚时段游客相对较少、光线柔和适合拍摄；夏季正午气温较高，梯田表面反光强烈，建议携带防晒用品并避开正午时段前往。",
  },
  trabzon: {
    // 零改动留痕（2026-09-10）：TZX 机场代码现行有效；前 756 年米利都殖民地特拉佩祖斯、1204 年第四次十字军后的
    //   特拉比松帝国、1461 年入奥斯曼——均为广泛记载的前现代史，未涉现代议题。
    // identity sources: 人口：identity 的「逾 80 万」是**省**人口（TÜİK 2025 823,323），howItWorks 的「约 33.5 万」是**中心区奥尔塔希萨尔**（2025 年 335,116）——两个都对，原来只是都没写口径，并排读像打架。2026-09-10 核。
    identity:
      "特拉布宗是土耳其黑海东岸重要港口城市，2025年省人口逾82万（土耳其统计局，特拉布宗省自2014年起与大市同界），历史上曾是丝绸之路支线港口与拜占庭特拉比松帝国都城，是探索黑海山地景观的核心门户。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Trabzon (Turkey; city and capital of Trabzon Province on the north-eastern Black Sea coast, urban population about 335,000; founded in 756 BC as the Greek colony Trapezus, capital of the Empire of Trebizond, a successor state of Byzantium after the Fourth Crusade of 1204, until Ottoman rule began in 1461; the Hagia Sophia of Trabzon; Sumela Monastery about 45 km away at Maçka; steep mountains behind the coast and the wettest region of Turkey; hazelnuts and tea the main exports, anchovies known throughout Turkey as hamsi; Uzungöl; Trabzonspor; Trabzon Airport)
    howItWorks:
      "特拉布宗是土耳其特拉布宗省的省会，在黑海东南岸，中心城区（奥尔塔希萨尔区）2025年人口约 33.5 万（土耳其统计局）；特拉布宗是实行“大市”制的省份，市界与省界重合，本地事务由大市与县两级办理。地形决定了这座城的形状：庞廷山脉在离岸很近的地方陡然升起，可用的平地只有沿海一条窄带，因此城市顺着海岸拉长，往山上一层层叠着建，公路与隧道是日常。公元前 756 年它作为希腊殖民城市特拉佩苏斯建立，1204 年第四次十字军东征之后成为特拉比松帝国的都城，1461 年起入奥斯曼治下；13 世纪的圣索菲亚教堂建筑保存至今，苏梅拉修道院嵌在城南约 45 公里马奇卡的悬崖上。这一带是土耳其降水最多的地区，山坡上密植茶树与榛子，两者是本地的主要出口；黑海的凤尾鱼在土耳其称“哈姆西”，是这座城的招牌食物。乌宗湖在南面山中。初来的人最容易犯的错，是按地中海沿岸的印象预期这里，而黑海岸多雨、多云、山陡。",
    layout:
      "城市沿黑海海岸带状分布，老城区保留拜占庭时期特拉布宗圣索菲亚教堂等历史建筑，市郊山区分布苏美拉修道院与乌宗湖等自然与人文景观。",
    gettingAround:
      "特拉布宗机场（TZX）距市区直线约6.2公里；市内以出租车与公交车为主要交通方式，前往苏美拉修道院或乌宗湖通常需包车或参加当地旅行团，车程各约1至2小时。",
    culture:
      "官方语言土耳其语，当地黑海方言与文化风俗较为独特。特拉布宗黑海沿岸整体气候湿润多雨，出行宜备雨具；进入清真寺仍需脱鞋、女性备头巾。餐厅小费不是强制的，服务满意时可以留一些，先看账单是否已含服务费。",
    seeAndDo:
      "苏美拉修道院（悬崖峭壁上的拜占庭时期东正教修道院）；特拉布宗圣索菲亚教堂（现存拜占庭壁画）；阿塔图尔克行馆；乌宗湖（黑海山区高山湖泊，周边多鳟鱼餐厅）。",
    whenAndTips:
      "6月至9月气候相对温暖干燥，是探访苏美拉修道院与乌宗湖的适宜季节；黑海地区全年多雨，出行建议随身携带雨具，山区道路多弯建议预留充足车程时间。",
  },
  konya: {
    // 零改动留痕（2026-09-10）：KYA 机场代码现行有效。identity 的「因苏菲派诗人鲁米与旋转苦行僧传统闻名，是重要的
    //   宗教文化中心」经专项复核为**客观史实／文旅表述**，与伊兹密尔那句「相对世俗开放」的国内比较评价不同，
    //   ✅ 不在红线之内，不改。
    // identity sources: 人口：TÜİK 2025 科尼亚省 2,343,409。**howItWorks 早就写清了口径、identity 没跟上**——C6-h「注释／另一段写对了，这一段没同步」的又一例。「宗教文化中心」是客观史实表述，与伊兹密尔那句国内比较评价不同，不踩红线、保留。2026-09-10 核。
    identity:
      "科尼亚是土耳其中安纳托利亚重要城市，2025年省人口逾234万（土耳其统计局，省界与大市同域），历史上是塞尔柱王朝在安纳托利亚的都城，因苏菲派诗人鲁米与旋转苦行僧传统闻名，是土耳其重要的宗教文化中心。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Konya (Turkey; city and capital of Konya Province, the largest province of Turkey by area, the metropolitan municipality counting 2,330,024 in 2024 and the sixth most populous city in Turkey; historically Iconium, capital of the Seljuk Sultanate of Rum in the 12th and 13th centuries with its Seljuk architecture; Rumi, called Mevlâna, spent his last years here and his turquoise-domed tomb is the chief visitor site, with authentic sema performances each Saturday at the Mevlana Cultural Centre and the Şeb-i Arûs in December; on the south-western edge of the Central Anatolian Plateau in Turkey's largest plain, a cold semi-arid climate; among the Anatolian Tigers economically; high-speed rail to Ankara, Istanbul and Karaman; Çatalhöyük nearby; etli ekmek)
    howItWorks:
      "科尼亚是土耳其科尼亚省的省会，科尼亚是土耳其面积最大的省；这里实行“大市”制，市界与省界重合，2025 年大市辖区人口 2,343,409——因此这个数字包括了广阔的农村，不是市区人口，市区在其中约占一半，全国排第六。城市在中安纳托利亚高原西南缘的大平原上，气候属冷半干旱，冬冷夏热、雨少，这片平原是土耳其最大的产粮区，小麦与甜菜是它的支柱，本地因经济活跃被归入“安纳托利亚之虎”。12 至 13 世纪它是塞尔柱罗姆苏丹国的首都，城中的塞尔柱式清真寺与经学院留自那个时代。13 世纪的苏非诗人鲁米在此度过晚年，绿松石圆顶的梅夫拉纳陵是全城最主要的参观地，每周六在文化中心有旋转舞“塞玛”的正式演出，12 月的“谢比阿鲁斯”纪念活动规模最大。高铁通往安卡拉与伊斯坦布尔，恰塔霍裕克遗址在东南约 40 公里。初来的人最容易犯的错，是用大市人口来估计城市规模，而那是全省的数字。",
    layout:
      "梅夫拉纳博物馆（鲁米陵墓所在地）是老城核心地标，周边分布阿拉丁清真寺、细长尖塔神学院博物馆等塞尔柱时期建筑，是科尼亚历史城区的核心区域。",
    gettingAround:
      "科尼亚机场（KYA）距市区公路约18公里；市内有轻轨与公交网络，前往加泰土丘等周边考古遗址通常需包车或参加当地旅行团。",
    culture:
      "官方语言土耳其语。科尼亚是土耳其宗教氛围相对保守浓厚的城市之一，建议着装相对保守得体；进入梅夫拉纳博物馆与清真寺需脱鞋，女性需备头巾。餐厅小费不是强制的，服务满意时可以留一些，先看账单是否已含服务费。",
    seeAndDo:
      "梅夫拉纳博物馆（鲁米陵墓与梅夫拉维教团文物收藏）；观赏旋转苦行僧仪式（Sema，通常定期或于每年12月鲁米纪念周举行）；阿拉丁清真寺；细长尖塔神学院博物馆（塞尔柱建筑代表作）。",
    whenAndTips:
      "每年12月中旬鲁米逝世纪念周（Şeb-i Arus）期间可观赏正式的旋转苦行僧仪式，但游客较多需提前订票；4月至6月、9月至10月是气候较宜人的旅行季节。",
  },
  bursa: {
    // 回扫 sources（2026-09-15 核实，非人口六段回扫，content-verifier）: identity / whenAndTips：迁都埃迪尔内年份多说，写 1360 年代；渡轮到达港为古泽尔亚勒（近穆丹亚）或班德尔马，耶尼卡帕是伊斯坦布尔一侧出发码头
    // 零改动留痕（2026-09-10）：howItWorks 段全篇没有写人口数字，与其余五城的体例不一致，但**不是错误**，本轮不补——
    //   补数字要连口径一起写，等下一轮连同布尔萨城区口径（三个中心区）一起查清再补。
    //   1326 年攻取、1360 年代迁都埃迪尔内、2014 年「布尔萨与朱马勒克兹克：奥斯曼帝国的诞生」列入 UNESCO：均核实无误。
    // identity sources: 人口：原文 216 万**量级就不对**——TÜİK 2025 布尔萨省 3,263,011。216 万接近三个中心区的城区规模，属把城区数当全市数用（C6-c）。「第四大」按省人口排名成立（伊斯坦布尔、安卡拉、伊兹密尔之后）。2 级转引 TÜİK。2026-09-10 核。
    identity:
      "布尔萨是土耳其第四大城市，2025年省人口逾326万（土耳其统计局，省界与大市同域），是奥斯曼帝国首个都城（1326年至1360年代），因清真寺众多与紧邻乌鲁山滑雪场而被称为“绿色布尔萨”。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Bursa (Turkey; city and capital of Bursa Province, the fourth most populous city in Turkey and second in the Marmara Region after Istanbul; captured from the Byzantines in 1326 and the capital of the early Ottoman state until the 1360s, when the capital moved to Edirne; Bursa and Cumalıkızık: the Birth of the Ottoman Empire, UNESCO World Heritage 2014; the Grand Mosque with twenty domes in four rows of five, the Green Mosque and Green Tomb, the Koza Han silk market; Mount Uludağ above the city with skiing and thermal springs used since Roman times; the largest production centre of the Turkish automotive industry with Fiat, Renault and Bosch, plus textiles and food; called Yeşil Bursa, green Bursa)
    howItWorks:
      "布尔萨是土耳其布尔萨省的省会，按大市人口计是土耳其第四大城市、马尔马拉地区仅次于伊斯坦布尔的第二大城市；布尔萨实行“大市”制，市界与省界重合，本地事务由大市与县两级办理。1326 年奥斯曼势力从拜占庭手中取得此城，此后到 1360 年代它是奥斯曼国家的第一个主要都城，之后迁往埃迪尔内；2014 年“布尔萨与楚马勒克兹克：奥斯曼帝国的诞生”列入世界遗产，涵盖大清真寺、绿色清真寺与绿陵以及山坡上的老村楚马勒克兹克。大清真寺的屋顶由二十个穹顶按四排五列排开，科扎商栈曾是丝绸交易的中心——布尔萨长期是丝绸之路西端的丝织重镇。城市贴着乌鲁山的北坡，山上有滑雪场与缆车，罗马时代起就利用这里的温泉，因此市内多浴场，绿地多，本地自称“绿布尔萨”。今天它是土耳其汽车工业最大的生产中心，菲亚特、雷诺与博世都在此设厂。初来的人最容易犯的错，是把它当作伊斯坦布尔的一日游，而它是一座工业与遗产并重的大城。",
    layout:
      "老城区集中分布布尔萨大清真寺、绿色清真寺等奥斯曼早期建筑，科扎商队旅馆一带是传统丝绸贸易市集所在地；乌鲁山耸立于城市南侧，山顶为滑雪度假区。",
    gettingAround:
      "布尔萨耶尼谢希尔机场（YEI）距市区直线约43公里，多数游客也会选择从伊斯坦布尔跨海轮渡加陆路前往；市内有轻轨网络，前往乌鲁山可乘缆车直达山顶。",
    culture:
      "官方语言土耳其语。进入布尔萨大清真寺、绿色清真寺等宗教场所需脱鞋，女性需备头巾、衣着覆盖肩膀与膝盖。餐厅小费不是强制的，服务满意时可以留一些，先看账单是否已含服务费。",
    seeAndDo:
      "布尔萨大清真寺（乌鲁清真寺，20座圆顶与中央喷泉）；绿色清真寺（蓝绿色瓷砖装饰的奥斯曼早期建筑代表作）；科扎商队旅馆（传统丝绸市集，可品尝布尔萨烤肉“伊斯干德”）；乌鲁山缆车与滑雪场。",
    whenAndTips:
      "12月至次年3月是乌鲁山滑雪旺季；4月至6月、9月至10月气候宜人，适合探访老城清真寺群；从伊斯坦布尔耶尼卡帕码头可乘高速渡轮至古泽尔亚勒（近穆丹亚）或班德尔马再转陆路，通常比陆路绕行更快。",
  },
};
