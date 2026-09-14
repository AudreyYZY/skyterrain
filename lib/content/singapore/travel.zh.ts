import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_ZH: Record<string, TravelGuide> = {
  // ============ 新加坡 ============
  "singapore-overview": {
    // identity sources: SingStat《Population Trends, 2025》：2025 年 6 月末总人口 6.11 百万，其中常住人口 420 万、非居民 191 万。https://www.singstat.gov.sg/publication-resources/population-trends-2025
    //   本批唯一一条数字与官方完全吻合的。核实日 2026-09-07，来源级别 1
    identity:
      "新加坡共和国是东南亚一座城市岛国，国土面积约735平方公里，2025年6月末总人口约611万（新加坡统计局），是继摩纳哥之后全球人口密度最高的独立国家之一；首都即新加坡市本身，官方语言为马来语（国语）、英语、华语与泰米尔语，货币为新加坡元(SGD)。",
    layout:
      "国土高度城市化，无传统意义上的多城市分区：滨海湾与市中心为政治经济核心，圣淘沙是南部知名度假岛，乌敏岛与圣约翰岛等离岛保留自然与历史景观，中央集水区与武吉知马是本岛仅存的大片森林绿地。",
    gettingAround:
      "樟宜机场是国际航空枢纽，距市区约20公里，地铁（MRT）40至45分钟可达市中心；岛内公共交通网络发达，地铁、巴士与网约车覆盖全岛，出租车与网约车Grab均可便捷叫车。新加坡是单一城市国家，无国内航班。多国公民短期旅游的免签安排以新加坡官方最新公布为准。",
    culture:
      "官方语言为马来语（国语）、英语（行政与经贸通用语）、华语与泰米尔语并行，社会以马来族、华族、印度族及欧亚裔多元种族构成。新加坡以严格的市容与公共秩序管理著称（如禁止随地吐痰、公共场所禁烟区）。入境禁止携带口香糖（药用除外），乱丢垃圾、在地铁车厢内饮食等行为会被处以罚款；新加坡毒品相关法律处罚极重，携带或走私毒品最高可判死刑，务必了解并遵守当地法律。餐厅账单常已含服务费，小费非强制传统。电压230V，英式三孔插座。",
    seeAndDo:
      "自然地貌：武吉知马与中央集水区原始雨林、乌敏岛与察哈湾湿地、双溪布洛红树林、拉柏多岩岸。海岛休闲：圣淘沙沙滩与主题乐园、姐妹岛海洋公园潜水。历史人文：牛车水、甘榜格南、小印度等多元族群街区；圣约翰岛与龟屿历史遗迹。",
    whenAndTips:
      "地处赤道附近，全年高温多湿，无明显四季之分；11月至次年1月降水相对较多（东北季风季），其余月份也常有午后阵雨；建议全年携带雨具，室内空调较强可备薄外套。",
  },
  "singapore-city": {
    identity:
      "新加坡市即新加坡全境的城市核心，坐落于新加坡岛南岸新加坡河入海口一带，是全岛的政治、经济、文化中心，也是全球重要的国际金融与贸易枢纽之一——这座城市的空间格局，很大程度上是从一处海峡贸易港逐层扩展而成的。",
    // howItWorks sources: Wikipedia (2026-09): Singapore (city-state, no local tier; 5 CDC districts; town councils; ~744 km²; 6.11 million 2025, ~4.2 million residents; 55 URA planning areas; ~78% HDB; MRT 6 lines; COE; 4 official languages; 6-digit postcode)
    howItWorks:
      "新加坡是一座城市国家，没有地方政府这一层：一个国家政府管着一切，从规划、住房到交通与警察。全国划为 5 个社区发展理事会辖区，组屋区的日常管理由国会议员主持的市镇理事会负责，而城市规划的单位是市区重建局划定的 55 个规划区——市中心区、乌节、大巴窑这些名字，既是规划区也是本地人说位置的语言。国土约 744 平方公里，仍在填海扩大，2025 年人口约 611 万，其中居民约 420 万。约 78% 的居民住在建屋发展局的组屋里，组屋区围绕地铁站成片规划，是这座城市的基本细胞。六条地铁线与公交用一张卡贯通，拥车须先竞标拥车证，费用高昂。英语、马来语、华语、泰米尔语并为官方语言，英语是工作语言。地址写“街区号、街道、楼层-单位号、六位邮编”，每栋楼的邮编独一无二。初来的人最容易犯的错，是把新加坡当作一座“市”，而它是一个国家，没有市政府。",
    layout:
      "新加坡河入海口一带保留着莱佛士登陆遗址与市政厅、旧国会大厦等殖民时期建筑，是城市最早的行政与商贸核心；沿河向外，牛车水、甘榜格南与小印度分别是华人、马来穆斯林与印度裔移民历史形成的传统聚居区；滨海湾则是20世纪末填海造陆后崛起的现代金融与地标核心，乌节路是新加坡最主要的购物商业街。",
    gettingAround:
      "樟宜机场距市区约20公里，机场地铁线约35至45分钟可达市中心；市内地铁（MRT）网络发达，公交车与网约车Grab覆盖全岛，是探索新加坡各区的主要交通方式。",
    culture:
      "官方语言为马来语、英语、华语与泰米尔语并行，社会以多元种族与宗教共存著称。新加坡以严格的公共秩序管理与整洁市容闻名，口香糖除药用外禁止入境，随地吐痰、乱丢垃圾、地铁车厢内饮食都会被罚款；毒品相关法律处罚极重，切勿以身试法。餐厅账单通常已含服务费，小费非强制传统。",
    seeAndDo:
      "鱼尾狮公园（新加坡河口，城市标志性观景点，可同框眺望殖民时期历史城区与滨海湾天际线）；新加坡河沿岸的驳船码头与克拉码头（早期贸易港口遗迹，现为餐饮夜生活区）；市政厅与旧国会大厦一带的历史建筑群；滨海湾花园与滨海湾金沙；牛车水与佛牙寺；甘榜格南与苏丹回教堂；小印度；新加坡植物园（UNESCO世界遗产）。",
    whenAndTips:
      "全年高温多湿，建议携带雨具应对午后阵雨；市区景点集中、地铁便捷，适合安排步行结合地铁的城市探索行程。",
  },
  sentosa: {
    identity:
      "圣淘沙是新加坡南部一座占地约500公顷的度假岛屿，原名“背后是死亡之岛”，1972年更名为“圣淘沙”（马来语意为“和平与宁静”），如今是新加坡最主要的海岛度假与主题乐园目的地。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Sentosa (Singapore; an island of about 4.71 km² off the southern coast across Keppel Harbour, the fourth-largest island apart from the main island; formerly Pulau Blakang Mati, a British military fortress and a Japanese prisoner-of-war camp in the Second World War, renamed Sentosa in 1972, the name from Sanskrit for peace and tranquillity; developed and managed by the Sentosa Development Corporation, a statutory board established in 1972, rather than as an ordinary planning area; about 25 million visitors a year; Resorts World Sentosa and Universal Studios Singapore; the artificial beaches Palawan, Siloso and Tanjong; the cable car, the Sentosa Express monorail and the boardwalk; Fort Siloso)
    howItWorks:
      "圣淘沙是新加坡南岸外的一座岛，面积约 4.71 平方公里，与本岛之间隔着吉宝海港。新加坡没有地方政府层级，全岛由中央政府直接治理，但这座岛更特别：它由 1972 年设立的法定机构“圣淘沙发展局”开发与管理，规划、经营与设施都归这一个机构，而不是像普通规划区那样由市区重建局与各部门分管。它原名“布拉干玛蒂岛”，长期是英军的海防要塞，二战期间曾用作战俘营，1972 年改名圣淘沙，名字取自梵语，意为“安宁”。此后它被整体改造成度假岛：圣淘沙名胜世界与新加坡环球影城在岛的中部，西罗索、巴拉湾与丹戎三片沙滩是人工填出来的，西罗索炮台保留着军事遗迹。上岛有三条路——缆车、圣淘沙捷运轻轨与一条步行栈道，每年约两千五百万人次到访。初来的人最容易犯的错，是以为这是一座天然的海岛，而它的沙滩与地形大半是造出来的。",
    layout:
      "岛屿近70%仍为天然雨林覆盖，南岸分布有多处沙滩与度假村，圣淘沙名胜世界（环球影城所在地）位于岛屿北部，与新加坡本岛之间有跨海缆车、单轨列车与堤道相连。",
    gettingAround:
      "本地无独立机场，经樟宜机场往返（距岛约30公里）；圣淘沙与新加坡本岛之间可乘缆车、圣淘沙捷运单轨或步行跨越圣淘沙大道堤道抵达，岛内另有巴士与沙滩电车代步。",
    culture:
      "官方语言为马来语、英语、华语与泰米尔语并行。圣淘沙自1972年起由圣淘沙发展局主导开发，从荒芜军事驻地转型为国际知名的休闲度假岛，2010年圣淘沙名胜世界开业是岛屿发展的重要里程碑。",
    seeAndDo:
      "圣淘沙名胜世界（新加坡环球影城）；西乐索海滩等南岸沙滩；跨海缆车观景；斜坡滑车与户外探险活动。",
    whenAndTips:
      "全年高温多湿，海滩与户外活动建议避开正午高温时段；11月至次年1月降水较多，出行前建议查询天气。",
  },
  "chinatown-singapore": {
    identity:
      "牛车水是新加坡历史最悠久的华人聚居区之一，中文旧称源于早年当地靠牛车运水供应居民用水；这里从19世纪的移民落脚点，逐渐发展为如今保留大量骑楼与庙宇的历史文化街区。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Chinatown, Singapore (a subzone and historic enclave within the Outram planning area of the Central Area, made up of five precincts developed between the 1820s and 1920s; under the Raffles Town Plan of 1822 areas were designated for different communities, the Chinese allotted land south-west of the Singapore River; the Chinese and Malay names, Kreta Ayer, come from the bullock water-carts that carried the district's water supply in the 19th century; the Buddha Tooth Relic Temple, Sri Mariamman Temple and Thian Hock Keng; the Chinatown Complex hawker centre; MRT connections; debate over conservation and commercialisation; spans the Tanjong Pagar and Jalan Besar constituencies)
    howItWorks:
      "牛车水是新加坡中区欧南规划区之下的一个分区，由 1820 至 1920 年代陆续成形的五个片区组成。新加坡没有地方政府层级，全岛由中央政府直接治理，市区重建局负责规划与保护，1989 年起把这一带的店屋整片列为保留区，因此外墙、门窗与屋顶的做法都受规定约束，改建只能在框架内进行。这片街区的由来是一次行政划分：1822 年的莱佛士市镇规划把新加坡河西南一带划给华人聚居，族群分区的格局由此定下。中文名“牛车水”与马来名 Kreta Ayer 同义，都指 19 世纪用牛车从别处运水到这一带的做法——这里当年没有自来水。今天它并不只有华人庙宇：佛牙寺、马里安曼兴都庙、天福宫与詹美回教堂在几条街之内并立，这种并置正是老城区的常态。牛车水熟食中心是本地最大的小贩中心之一。初来的人最容易犯的错，是把牛车水当作新加坡华人的聚居区，而全岛七成以上是华人，这里是历史街区而非族群飞地。",
    layout:
      "街区以史密斯街、宝塔街、丁加奴街等几条老街为核心，两三层高的南洋骑楼沿街密集排列，昔日按方言群聚居（福建、潮州、广东、海南、客家、兴化、福州人分区而居），如今仍能从街巷名称与庙宇分布看出这种早期分区的痕迹；佛牙寺与马里安曼兴都庙相距仅几百米，是华人与印度裔信仰在同一街区并存的直观例证。",
    gettingAround:
      "牛车水地铁站（EW/NE线换乘站）直接位于街区中心；本地无独立机场，经樟宜机场往返（距市区约20公里）；街区范围不大，步行是探索牛车水最合适的方式。",
    culture:
      "马里安曼兴都庙建于1827年，是新加坡历史最悠久的兴都教庙宇，庙门塔楼（哥普兰）布满色彩浓烈的神像雕塑；佛牙寺龙华院2007年建成，建筑仿唐代风格，供奉据称为佛陀真身舍利的佛牙。进入庙宇需脱鞋，兴都庙内部分区域可能限制非教徒进入核心殿堂，请留意现场指示。",
    seeAndDo:
      "马里安曼兴都庙（1827年，新加坡最古老兴都庙）；佛牙寺龙华院（唐代风格建筑与佛牙舍利）；史密斯街与丁加奴街骑楼老街区与夜市小吃；牛车水传统文化馆（了解早期移民生活史）；牛车水市场大厦（熟食中心与湿货市场）。",
    whenAndTips:
      "农历新年前后街区会挂满灯笼、举办年货市场，是牛车水一年中最热闹的时段，但也最拥挤；平日傍晚沿街觅食、逛庙宇是较悠闲的安排方式。",
  },
  "kampong-glam": {
    identity:
      "甘榜格南是新加坡的马来—穆斯林历史文化区，1822年莱佛士城市规划将这片区域划给马来人、武吉士人与阿拉伯人，1823年英属东印度公司正式把其中一块划给柔佛苏丹侯赛因沙阿作为王室驻地，是新加坡少数保留完整王室历史脉络的街区。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Kampong Glam (Singapore; a neighbourhood in the Rochor planning area known as the Muslim quarter; the name from the gelam tree, a Melaleuca species; home to Malay aristocracy before 1819, and under the Raffles Plan of 1822 designated for the Sultan and his household and for the Malay and Arab communities; the Sultan Mosque and Istana Kampong Glam, now the Malay Heritage Centre; restored shophouses along Arab Street, Haji Lane and Bussorah Street; traditional textile, blacksmith and religious-goods trades alongside galleries, cafes and design firms; the One Kampong Gelam association formed in 2014)
    howItWorks:
      "甘榜格南是新加坡梧槽规划区里的一片街区，常被称作“回教区”。新加坡没有地方政府层级，全岛由中央政府直接治理，市区重建局负责规划与保护，1989 年起这一带被划为保留区，店屋的立面与结构按规定修复，因此整片街区的外观是被制度固定下来的。地名来自本地的“格南树”，是一种白千层。1819 年之前这里是马来贵族的居住地；1822 年的莱佛士市镇规划把这一带划给苏丹及其家族，以及马来与阿拉伯社群——族群分区的安排在这里体现得最直接。苏丹回教堂的金顶是全区的地标，旁边的甘榜格南王宫现为马来文化馆。阿拉伯街与武吉士街一带原是布料、金饰、香料与朝觐用品的集散地，历史上前往麦加朝觐的行程多从这里安排；哈芝巷如今是小店与画廊。初来的人最容易犯的错，是以为这里只是餐饮与拍照的街区，而它至今仍是马来穆斯林社群的宗教与商业中心之一。",
    layout:
      "街区以苏丹回教堂为地理与视觉中心，哈芝巷与亚拉街一带的老店屋如今改造为咖啡馆、独立设计店与街头壁画聚集地，与庙宇周边保留的传统纺织品、香水与地毯商铺形成新旧混搭的街区肌理；旧王宫建筑群则是了解这段本土王室历史的核心场所。",
    gettingAround:
      "武吉士地铁站（EW/DT线换乘站）步行可达；本地无独立机场，经樟宜机场往返（距市区约20公里）；街区范围紧凑，步行是最主要的游览方式。",
    culture:
      "苏丹回教堂1824年由新加坡首任苏丹侯赛因沙阿始建，现存建筑为1932年重建，金色圆顶是街区地标，寺内地毯由沙特阿拉伯王室捐赠；进入清真寺需脱鞋，女性需备头巾、避免过于暴露的衣着。哈芝巷这一名称源于当年为前往麦加朝觐的贫困朝圣者提供住宿的客栈。",
    seeAndDo:
      "苏丹回教堂（1824年始建，现存建筑1932年重建）；旧王宫（马来传统文化馆，了解本地苏丹王室历史）；哈芝巷壁画与独立设计小店；亚拉街阿拉伯风情商铺与地毯店；周边中东与土耳其风味餐厅。",
    whenAndTips:
      "斋月期间部分店铺营业时间会调整，但也是体验本地穆斯林社群开斋饭市集氛围的好时机；平日傍晚光线柔和，是拍摄苏丹回教堂与哈芝巷壁画的较佳时段。",
  },
  "little-india-singapore": {
    identity:
      "小印度是新加坡的印度裔历史文化区，19世纪因当地石灰窑与制砖业需要大量劳工而聚集印度移民，逐渐形成以实龙岗路为主轴的印度裔聚居与商贸区，1989年被列为保护区。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Little India, Singapore (a district in the Rochor planning area east of the Singapore River, across from Chinatown and north of Kampong Glam, known within the Indian Singaporean community as Tekka; it grew from 19th-century cattle trading rather than from an allocation in the 1822 Raffles Town Plan, Indian migrant workers finding work in cattle rearing along the Serangoon River and settling permanently as Europeans left and the swamps were drained; gazetted as a conservation area on 7 July 1989; the Sri Veeramakaliamman Temple, the Tekka Centre market, Mustafa Centre and several mosques and temples; Deepavali and Thaipusam; served by the North East and Downtown MRT lines)
    howItWorks:
      "小印度是新加坡梧槽规划区里的一片街区，在新加坡河以东，与牛车水隔河相对，甘榜格南在其南面；本地印度裔社群多称它“竹脚”。新加坡没有地方政府层级，全岛由中央政府直接治理，市区重建局负责规划与保护，1989 年 7 月 7 日这一带被正式划为保留区。它的来历与牛车水、甘榜格南不同：1822 年的莱佛士市镇规划并没有把这里划给印度人，它是自己长出来的——19 世纪实龙岗河一带是牛只交易与砖窑集中的地方，需要大量劳力，印度移民因这份工作聚居于此，欧洲商人迁走、沼泽排干之后便定居下来。因此这片街区的中心是实龙岗路，沿街是维拉玛卡里雅曼兴都庙、清真寺与竹脚巴刹，慕斯达法中心几乎彻夜营业。屠妖节与大宝森节期间街道张灯，周日是外籍劳工聚会的日子。初来的人最容易犯的错，是把三个族群街区当作同一套安排的产物，而小印度不是规划出来的。",
    layout:
      "实龙岗路是街区主轴，沿线密集分布香料铺、金饰店、纱丽布庄与印度教庙宇；竹脚中心（前身竹脚巴刹1915年建成，现建筑1982年迁建落成）是新加坡最大的湿货市场之一，也是品尝印度裔美食的核心场所；街区建筑保留大量色彩鲜艳的南洋骑楼立面，与庙宇的多彩塔楼相互呼应。",
    gettingAround:
      "小印度地铁站（NE/DT线换乘站）位于街区核心；本地无独立机场，经樟宜机场往返（距市区约20公里）；街区不大，步行结合地铁是最便捷的游览方式。",
    culture:
      "斯里维拉玛卡里雅曼庙1855年起即有供奉卡莉女神的神龛、1881年建庙，是新加坡最早供奉卡莉女神的庙宇之一，庙门塔楼雕塑繁复精美；进入庙宇需脱鞋，女性衣着建议避免过于暴露。每年屠妖节（排灯节）与大宝森节期间，街区会举办盛大的灯饰装点与游行仪式。",
    seeAndDo:
      "斯里维拉玛卡里雅曼庙（1855年始有神龛、1881年建庙，供奉卡莉女神）；竹脚中心（前身1915年、现建筑1982年，最大湿货市场与美食中心之一）；实龙岗路香料与纱丽商铺；周边印度餐厅与甜品店。",
    whenAndTips:
      "屠妖节（10至11月，具体日期每年不同）与大宝森节（1至2月）期间街区张灯结彩、仪式盛大，是感受小印度文化氛围的最佳时段，但人流量也最大；平日午后逛庙宇与竹脚中心较为从容。",
  },
};
