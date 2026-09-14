import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_ZH: Record<string, TravelGuide> = {
  // ============ 蒙古 ============
  "mongolia-overview": {
    // identity sources（2026-09-13 核改）：**NSO 官网 1212.mn 首页统计看板「2025-12-31 Population 3 591 120（+1.0%）」**（1 级，在浏览器里直接读取；证书问题 2026-09-13 已恢复，strict TLS 可访问）→ 正文改为 2025 年末约 359.1 万，关闭 issue #197。以下为旧记录：MONTSAME 2024-04-30 转引 NSO：截至 2023 年末约 350 万（+4.72 万 / +1.4%）。**2024 年末终值未查到**。⚠️ 蒙古政府站点的证书问题不止 1212.mn 一个域名——新开的 data.nso.mn 本轮同样报 certificate expired，说明是这批站点普遍的问题。下一轮换手段：① web.archive.org 抓 1212.mn / data.nso.mn 的历史快照绕开实时证书校验；② UN Demographic Yearbook（UNSD 收录各国统计局报送数）。2026-09-12 核。
    identity:
      "蒙古国是一个内陆国家，北接俄罗斯、南接中国，国土面积约156.4万平方公里（蒙古土地组织·大地测量·制图总局，2023年末口径）、2025年末人口约359.1万（蒙古国家统计局），首都乌兰巴托，官方语言为蒙古语（西里尔字母），货币为图格里克(MNT)。",
    layout:
      "国土大致分为：中部（乌兰巴托、哈拉和林鄂尔浑河谷，政治文化核心区）、北部（额尔登特、达尔汗、木伦，森林与湖泊地带）、西部（科布多、乌力吉，蒙古阿尔泰山与哈萨克族聚居区）、南部戈壁（达兰扎德嘎德，戈壁沙漠地带）与东部（乔巴山，达乌尔草原地带）。",
    gettingAround:
      "国内航班以乌兰巴托成吉思汗国际机场为枢纽，通达科布多、乌力吉、木伦、达兰扎德嘎德、乔巴山等地，部分航线为季节性运营；国内铁路以纵贯全国的蒙古纵贯铁路（乌兰巴托—苏赫巴托尔—俄罗斯，乌兰巴托—扎门乌德—中国）为主干；跨省长途多依赖公路，部分路段路况有限。多国公民短期旅游的签证或免签安排以蒙古官方最新公布为准。",
    culture:
      "官方语言为蒙古语（西里尔字母书写），英语在乌兰巴托及旅游业有一定普及。蒙古人重视游牧传统与待客之道，进入蒙古包（格尔）做客有相应礼俗（如不可脚踩门槛、双手接物）。餐厅小费非强制传统，但城市餐厅留5%-10%日益普遍。电压220V，插座多为C/E/F欧标两圆脚。",
    seeAndDo:
      "自然地貌：戈壁古尔班赛罕国家公园（洪戈林额勒斯沙丘、约林音峡谷）、库苏古尔湖、鄂尔浑瀑布、达里干嘎火山群。历史人文：哈拉和林鄂尔浑河谷文化景观、额尔德尼召寺、布尔汗哈勒敦圣山。草原生活：呼斯泰国家公园普氏野马、蒙古包牧家体验、那达慕大会（每年7月）。",
    whenAndTips:
      "6-8月气候最宜人、是旅游旺季，也是那达慕大会举办季节；冬季（12-次年2月）严寒漫长，乌兰巴托常为全球最冷首都之一，出行需充分保暖；国土辽阔，跨区域行程建议合理规划国内航班或预留充足公路交通时间。",
  },
  ulaanbaatar: {
    // identity sources: 乌兰巴托 2025 年约 1,796,045（蒙古国家统计局，经维基 infobox 转引 data.1212.mn，
    //   **3 级**，2026-09-08 核）。
    //   **1212.mn 本轮仍无法直连**（unable to verify the first certificate），
    //   蒙古各城的数字都只能核到这一级 —— 恢复访问后应优先回源核对。
    identity:
      "乌兰巴托是蒙古国首都，人口约179.6万（2025年），占全国近一半人口，坐落于图拉河畔的高原谷地，是蒙古政治、经济、文化中心。",
    // howItWorks sources: Wikipedia (2026-09): Ulaanbaatar (provincial status; 9 districts, 204 khoroo; Citizens' Representatives Khural 45 members; governor appointed by PM on nomination; ~4,700 km²; ~1.7 million 2024 ≈ half of Mongolia; ger districts; buses only; airport 50 km)
    howItWorks:
      "乌兰巴托是蒙古国的首都，级别与省相同，由民选的市民代表呼拉尔和市长治理，市长由呼拉尔提名、总理任命；市下分 9 个区，区之下是 200 余个“霍罗”，是居民登记与办事的基层单位。市域约 4,700 平方公里，大部分是山地与草原，2025 年人口约 179.6 万，接近全国的一半。城市建在图拉河谷里，海拔约 1,350 米，南面是博格达汗山：苏赫巴托广场是政治与商业中心，和平大道是贯穿东西的主轴，苏联时期的公寓区围绕中心铺开，而超过一半的市民住在四周山坡上蔓延的蒙古包区——那里多没有自来水与集中供暖，冬天燃煤取暖是空气污染的主要来源。公共交通只有公交，没有轨道；成吉思汗国际机场在南面约 50 公里。地址写“区、霍罗、街、楼、门”。初来的人最容易犯的错，是以为乌兰巴托是一座苏式的紧凑城市，而它的大部分人口住在中心之外的蒙古包区。",
    layout:
      "市中心以苏赫巴托尔广场（成吉思汗广场）为核心，甘丹寺一带保留传统藏传佛教建筑，城市周边分布有大片传统蒙古包聚居区（格尔区）。",
    gettingAround:
      "成吉思汗国际机场2021年启用，位于市区以南约52公里，机场大巴约1小时可达市区。市内以公交车与出租车为主，市区高峰时段交通拥堵较为常见。",
    culture:
      "官方语言为蒙古语，年均气温约-0.8摄氏度，是全球气候最寒冷的首都之一。城市融合了苏联式建筑、藏传佛教寺院与现代高楼。餐厅小费非强制，城市餐厅留5%-10%较为常见。",
    seeAndDo:
      "苏赫巴托尔广场（成吉思汗广场）；甘丹寺；国家历史博物馆；成吉思汗骑马雕像（近郊）；博格达汗冬宫博物馆。",
    whenAndTips:
      "6-8月气候最宜人；冬季严寒漫长，1月平均气温可低至零下20多摄氏度，出行需充分保暖并预留室内活动安排。",
  },
  erdenet: {
    // 人口 sources（2026-09-13 核改）：蒙古国家统计局数据库 data.1212.mn 表 DT_NSO_0300_004V5（**常住人口 resident population**，苏木/巴格级，PX-Web API 直接取数，1 级）：鄂尔浑省巴彦温都尔苏木（额尔登特市）2025 年 103,118 / 2024 年 103,283 —— 原写「2026 年约 11 万」查无 2026 年官方数，改。⚠️ 口径：NSO 另有「总人口」表 DT_NSO_0300_004V1（全国 2025 年 3,591,120、乌兰巴托 1,796,045，只到省级），**苏木级只有常住人口这一档**，所以城市条目统一写「常住人口」，与国家概览 / 乌兰巴托的总人口不可直接相加比较。
    identity:
      "额尔登特是蒙古第二大城市，2025年常住人口约10.3万（蒙古国家统计局），坐落于蒙古北部鄂尔浑省，因大型铜钼矿开采而发展为蒙古重要的工业城市。",
    // howItWorks sources: Wikipedia (2026-09): Erdenet (Orkhon Province capital; 112,520 2026; founded 1974 around copper-molybdenum mine; 240 km NW of Ulaanbaatar; rail branch; carpet factory 1981)
    howItWorks:
      "额尔登特是蒙古国第二大城市，也是鄂尔浑省的省会——这个省 1994 年专为这座城设立，面积很小，几乎就是城市本身。2025 年常住人口约 10.3 万。这座城 1974 年为开采额尔登特铜钼矿而建，矿山至今是亚洲最大的铜矿之一，矿业公司曾是蒙苏合资企业，如今由蒙古方面控股，是国家外汇收入的主要来源之一。城市按苏联的规划建成，公寓楼成片排列，矿区在城北的山上；1981 年建成的地毯厂是另一个标志。它在色楞格河与鄂尔浑河之间的谷地里，乌兰巴托在东南约 240 公里，一条铁路支线接入蒙古纵贯铁路，公路已全线铺装。地址写“区、街、楼、门”。初来的人最容易犯的错，是把额尔登特当作一座普通的省城，而它是一座为一座矿山而存在的城市。",
    layout:
      "城市依托额尔登特矿业公司的采矿与选矿设施而建，城区布局带有典型苏联时期规划工业城镇的特征，居民区与厂区相对分离。",
    gettingAround:
      "本地设有额尔登特机场（ERT），航班班次以实际时刻表为准；也可经公路或蒙古国铁支线往返乌兰巴托，车程约数小时。",
    culture:
      "官方语言为蒙古语。额尔登特因铜矿开采于1970年代由蒙古与苏联合作建立，城市人口构成中技术工人比例较高，是蒙古工业城市文化的代表。",
    seeAndDo:
      "额尔登特矿业公司观景点；城市中心广场；周边杭爱山北麓自然风光。",
    whenAndTips:
      "6-8月气候最宜人；作为工业城市，游客较少，适合对蒙古现代工业发展感兴趣的旅行者短暂停留。",
  },
  darkhan: {
    // 人口 sources（2026-09-13 核改，关闭 issue #217）：蒙古国家统计局数据库 data.1212.mn 表 DT_NSO_0300_004V5「RESIDENT POPULATION IN MONGOLIA, by location, bag, khoroo, and by year」，PX-Web API 直接取数（1 级；1212.mn 证书问题已恢复）：达尔汗苏木 2025 年 89,421 / 2024 年 88,894 / 2022 年 87,923 / 2017 年 84,256。
    // identity sources: 达尔汗-乌勒省国家注册局：省 102,014 人、达尔汗市 85,066 人，**页面未标统计时点**，故正文不写年份而写明「该页未标注」——比硬安一个年份诚实。原文的「2022 年 8.8 万」来源已追不到。2026-09-12 核。
    identity:
      "达尔汗按人口计是蒙古第三大城市，2025年人口约8.94万（蒙古国家统计局，达尔汗苏木常住人口），坐落于蒙古北部达尔汗乌勒省，是蒙古纵贯铁路线上的重要工业与交通枢纽城市。",
    // howItWorks sources: Wikipedia (2026-09): Darkhan (city) (Darkhan-Uul capital; 87,696 2022; founded 1961 with Comecon aid; old/new Darkhan; 220 km N of Ulaanbaatar; Trans-Mongolian Railway; 86% in apartments)
    howItWorks:
      "达尔汗是蒙古国第三大城市，也是达尔汗乌拉省的省会——这个省 1994 年设立，是全国面积最小的省之一。2025 年常住人口约 8.94 万。这座城 1961 年在经互会的援助下作为工业城市从零建起，波兰、匈牙利等国的专家参与了建设，木材、肉类加工与建材是最初的产业，如今煤矿、冶金与建材是支柱。城市分成两片：老达尔汗是最早的工业区与车站一带，新达尔汗是后来规划的居住区，约 86% 的市民住在公寓里，蒙古包区在城市边缘，这在蒙古国的城市里是少见的比例。它在蒙古纵贯铁路与主干公路上，乌兰巴托在南面约 220 公里，俄罗斯边境在北面百余公里，周围是蒙古国重要的农业区。地址写“区、街、楼、门”。初来的人最容易犯的错，是把达尔汗当作过路的车站，而它是一座有自己规划与工业的城市。",
    layout:
      "城市分为南北两片区，之间由工业区相连，是蒙古计划经济时期按苏联模式规划建设的典型新兴工业城市之一。",
    gettingAround:
      "本地无稳定定期客运航班，主要经蒙古纵贯铁路（乌兰巴托—苏赫巴托尔线）与公路往返乌兰巴托，车程约3至4小时。",
    culture:
      "官方语言为蒙古语。达尔汗始建于1961年，是蒙古社会主义时期第二座按统一规划建设的工业城市，城市名意为“铁匠”，象征工业属性。",
    seeAndDo:
      "达尔汗中心广场；周边草原与河谷风光；蒙古纵贯铁路沿线风景。",
    whenAndTips:
      "6-8月气候最宜人；作为铁路沿线城市，适合作为乌兰巴托与色楞格河北部、俄罗斯边境方向行程的中转停留点。",
  },
  kharkhorin: {
    // 人口 sources（2026-09-13 核改，关闭 issue #217）：蒙古国家统计局数据库 data.1212.mn 表 DT_NSO_0300_004V5「RESIDENT POPULATION IN MONGOLIA, by location, bag, khoroo, and by year」，PX-Web API 直接取数（1 级；1212.mn 证书问题已恢复）：哈拉和林苏木 2025 年 11,805 / 2017 年 12,516 —— **原写「2017 年约 1.48 万」与官方 2017 年数（12,516）对不上，是错的**。
    identity:
      "哈拉和林是13至14世纪蒙古帝国的都城遗址所在地，坐落于鄂尔浑河谷，如今是探索鄂尔浑河谷文化景观（2004年列入世界遗产）的核心门户。这条河谷水草丰美、扼中部草原要冲，在蒙古帝国之前就已是突厥、回鹘等草原政权的中心（回鹘都城哈剌巴剌哈孙遗址就在附近），窝阔台把帝国都城定在这里也是沿袭了这一传统；1260年忽必烈即位后将都城迁往上都，哈拉和林自此逐渐衰落。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Kharkhorin (Mongolia; town and sum centre of Övörkhangai Province, 14,765 residents in 2017 over 20.5 km²; in the lower Orkhon valley where the Khangai mountains meet the central steppe; the site of Karakorum, capital of the Mongol Empire in the 13th century; Erdene Zuu monastery; the Orkhon Valley Cultural Landscape UNESCO World Heritage; Kharakhorum Museum; tourism and irrigated agriculture; airport with flights to Ulaanbaatar; coal-fired heating September to May)
    howItWorks:
      "哈拉和林是蒙古国前杭爱省的一个苏木中心，2025 年人口约 1.18 万（蒙古国家统计局，哈拉和林苏木常住人口）；蒙古的地方行政分省（艾马格）与苏木两级，省长由中央任命、地方议会选举产生，教育与医疗按省统筹。镇子在鄂尔浑河下游的谷地，杭爱山脉在这里落到中部草原上。它的分量全在脚下：13 世纪蒙古帝国的都城哈拉和林就在此处，1235 年前后建成，是当时横跨欧亚的这个帝国的政治中心，后来被毁，如今地面上只剩基址与散落的石构件。1585 年建成的额尔德尼召寺就用废墟里的石料砌起，围墙上一百零八座白塔是它的标志，寺院至今在使用。鄂尔浑河谷文化景观 2004 年列入世界遗产，覆盖的正是这一带。旅游与河谷的灌溉农业是本地经济，乌兰巴托在东面约 360 公里。初来的人最容易犯的错，是以为能看到一座都城，而地面上的城早已不存，看的是遗址与寺。",
    layout:
      "现代哈拉和林镇紧邻古城遗址与额尔德尼召寺而建，遗址范围大部分尚待考古发掘，地表可见部分城墙与建筑基址痕迹。",
    gettingAround:
      "本地哈拉和林机场几乎无客运处理设施，通常经公路往返乌兰巴托，车程约6至7小时（约370公里）。",
    culture:
      "官方语言为蒙古语。哈拉和林由成吉思汗之子窝阔台于1235年建为蒙古帝国都城，16世纪额尔德尼召寺建成后，古城遗迹大量石料被用于寺院建设。",
    seeAndDo:
      "额尔德尼召寺（建于16世纪，蒙古现存最早的藏传佛教寺院之一）；哈拉和林古城遗址博物馆；龟形石碑；鄂尔浑河谷牧场风光。",
    whenAndTips:
      "6-8月气候最宜人；建议留出充足时间探索鄂尔浑河谷文化景观周边的游牧牧场体验，不宜只做古城遗址的短暂停留。",
  },
  moron: {
    // 人口 sources（2026-09-13 核改）：蒙古国家统计局数据库 data.1212.mn 表 DT_NSO_0300_004V5（**常住人口 resident population**，苏木/巴格级，PX-Web API 直接取数，1 级）：库苏古尔省木伦苏木 2025 年 42,921 / 2017 年 39,404（与原 2017 年数一致）。⚠️ 口径：NSO 另有「总人口」表 DT_NSO_0300_004V1（全国 2025 年 3,591,120、乌兰巴托 1,796,045，只到省级），**苏木级只有常住人口这一档**，所以城市条目统一写「常住人口」，与国家概览 / 乌兰巴托的总人口不可直接相加比较。
    // identity sources: 人口：取**有明确年份**的 2017 年 39,404。⚠️ 网上流传的 46,918 在英文维基同一条目里与 infobox 的 2017 数并存且**没有年份**——按「拿不准就不要编一个年份」，不采用。1212.mn 证书错误无法访问，已进豁免表。「蒙古第五大城市」经与乔巴山条目互证仍成立、不受数字选择影响。
    identity:
      "木伦是蒙古北部库苏古尔省首府，2025年常住人口约4.29万（蒙古国家统计局），是探索库苏古尔湖的核心门户城市。",
    // howItWorks sources: 人口：蒙古国家统计局 2017 年 39,404（1 级），与 identity 段统一。原文这一段的「约 4.7 万」查无出处、与 identity 段相差近 20%。更新一期取不到（蒙古国家统计局 1212.mn 证书失效，issue #197 同因）。
    // howItWorks sources（2026-09-13 回扫改）：删「机场 1957 年起运行」—— 3 级来源分别写 1956 与 1960，互相矛盾，查无一手。核实 2026-09-13
    howItWorks:
      "木伦是蒙古国库苏古尔省的省会，2025年常住人口约4.29万（蒙古国家统计局）；蒙古的地方行政分省与苏木两级，省长由中央任命、地方议会选举产生，省会集中了全省的行政、医疗与中学。城市在德勒格尔木伦河边，海拔约 1,710 米，名字在蒙古语里就是“河”的意思。它从一座寺院长起来：约 1809 至 1811 年间此地建寺，鼎盛时住着约一千三百名僧人，1937 年被毁，1990 年在原址附近重建了丹赞达尔扎寺。省博物馆藏有三千六百多件文物。这座城的现代化来得很晚——2004 年才通电，到乌兰巴托的柏油公路 2014 年 12 月才修通，因此长期以来飞机比公路更管用。库苏古尔湖在北面约 100 公里的哈特嘎勒，省内还有驯鹿放牧的查坦人。冬季最低纪录约零下 47 度。初来的人最容易犯的错，是把木伦当作湖边的镇，而湖在一百公里之外。",
    layout:
      "城市坐落于德勒格尔河谷平地，周边被森林覆盖的山地环绕，与库苏古尔湖之间由公路相连。",
    gettingAround:
      "本地设有木伦机场（MXV），有乌兰巴托往返定期航班；从木伦市区到库苏古尔湖南岸的哈特嘎尔村约需1至1.5小时车程。",
    culture:
      "官方语言为蒙古语，当地图瓦人、达尔哈德人等游牧族群保留有传统渔猎与放牧生活方式。",
    seeAndDo:
      "库苏古尔湖（蒙古最大淡水湖）；库苏古尔国家公园；哈特嘎尔村传统游牧生活体验；驯鹿人聚落（季节性可达）。",
    whenAndTips:
      "6-8月气候最宜人，是探索库苏古尔湖的最佳季节；冬季湖面结冰，部分年份可开展冰上活动，但需专业向导安排。",
  },
  dalanzadgad: {
    // 人口 sources（2026-09-13 核改，关闭 issue #217）：蒙古国家统计局数据库 data.1212.mn 表 DT_NSO_0300_004V5「RESIDENT POPULATION IN MONGOLIA, by location, bag, khoroo, and by year」，PX-Web API 直接取数（1 级；1212.mn 证书问题已恢复）：达兰扎德嘎德苏木 2025 年 33,284 / 2024 年 32,701。
    // identity sources: 人口：2024 年 32,674，底层引用**南戈壁省统计局 2025 年发布**——是这批九城里来源质量最好的一条（与本条目 howItWorks 一致）。
    identity:
      "达兰扎德嘎德是蒙古南部南戈壁省首府，2025年常住人口约3.33万（蒙古国家统计局），是探索戈壁古尔班赛罕国家公园的核心门户城市。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Dalanzadgad (Mongolia; capital of Ömnögovi (South Gobi) Province, about 32,674 residents in 2024 over 476 km², divided into ten bags; 540 km south of Ulaanbaatar, paved road completed 2014; one of the warmest places in Mongolia in winter, extremes −36.1 °C to 39.9 °C, annual precipitation 134 mm; Yolyn Am gorge in Gurvan Saikhan National Park with streams and grass in the desert; dinosaur fossil sites and major mining in the province; airport runway the second longest in the country)
    howItWorks:
      "达兰扎德嘎德是蒙古国南戈壁省的省会，2025 年常住人口约 3.33 万，市域约 476 平方公里，下分十个“巴格”；蒙古的地方行政分省与苏木两级，省长由中央任命、地方议会选举产生。它在戈壁的中部，乌兰巴托在北面 540 公里，柏油公路 2014 年才通到这里。这里的气候是戈壁式的：年降水量只有约 134 毫米，极端气温从零下 36 度到近 40 度，但按蒙古的标准，它的冬天算是全国最暖的地方之一。城西约 50 公里的三美山国家公园里有约林安峡谷，谷底有流水与青草，夏天仍能见到残冰，与四周的荒漠形成反差；洪高林沙丘与巴彦扎格的“火焰崖”分别在更远处，后者以恐龙蛋化石的发现闻名。省内的奥尤陶勒盖与塔本陶勒盖是蒙古的两处大型矿区，采矿与旅游共同支撑本地。机场的跑道长度在全国仅次于乌兰巴托。初来的人最容易犯的错，是以为景点就在城边，而戈壁的距离以数百公里计。",
    layout:
      "城市坐落于古尔班赛罕山北麓的戈壁荒漠边缘，是南戈壁地区行政与物资补给中心。",
    gettingAround:
      "本地设有达兰扎德嘎德机场（DLZ），有乌兰巴托往返定期航班；从市区到洪戈林额勒斯沙丘、约林音峡谷、巴彦扎格等景点均需公路自驾或包车前往，车程各约1至3小时。",
    culture:
      "官方语言为蒙古语。达兰扎德嘎德及周边戈壁地区保留有传统骆驼牧养文化，双峰驼是当地游牧生活的重要组成部分。",
    seeAndDo:
      "戈壁古尔班赛罕国家公园（洪戈林额勒斯歌唱沙丘、约林音冰谷）；巴彦扎格燃烧的悬崖；古尔班赛罕山徒步。",
    whenAndTips:
      "5-6月与9月气候最为舒适，7-8月戈壁地区白天气温可超过35摄氏度；冬季严寒且部分景点道路受限，建议避开极端季节前往。",
  },
  khovd: {
    // 人口 sources（2026-09-13 核改，关闭 issue #217）：蒙古国家统计局数据库 data.1212.mn 表 DT_NSO_0300_004V5「RESIDENT POPULATION IN MONGOLIA, by location, bag, khoroo, and by year」，PX-Web API 直接取数（1 级；1212.mn 证书问题已恢复）：科布多省扎尔嘎朗特苏木（科布多市）2025 年 34,510 / 2017 年 29,800。
    // identity sources: 科布多市 2017 年 29,800（蒙古国家统计局，经维基 infobox 转引，3 级，2026-09-08 核）。
    //   **这已是九年前的数**，1212.mn 证书错误无法直连，确认不了有没有更新一期。
    //   原 identity 的「3.1 万」对不上任何已知年份的官方数。
    identity:
      "科布多是蒙古西部科布多省首府，2025年常住人口约3.45万（蒙古国家统计局），坐落在阿尔泰山脉东麓，是探索蒙古阿尔泰山与西部多民族聚居区的重要门户。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Khovd (Mongolia; capital of Khovd Province in the west, about 29,800 residents in 2017; at the foot of the Altai mountains, bisected by the Buyant river; founded in 1685 by Galdan Boshugtu Khan of the Dzungar Khanate, later moved to the present site on the Buyant; Mongolian forces took the city on 7 August 1912 and destroyed the garrisons; ethnically diverse — Khalkha, Zakhchin, Torghut, Uriankhai, Kazakh and others; Khar-Us Lake protected area about 25 km east; Museum of Khovd Province; cold desert climate with records near −45 °C)
    // howItWorks sources（2026-09-13 回扫改，零争议红线）：删「1912 年 8 月 7 日蒙古军队攻下此城、摧毁驻军营地」—— 涉及蒙古独立与清朝之间的军事冲突，按红线「修法是删不是改对」，只保留清代驻防城城墙遗迹这一中性事实。核实 2026-09-13
    howItWorks:
      "科布多是蒙古国西部科布多省的省会，2025 年常住人口约 3.45 万；蒙古的地方行政分省与苏木两级，省长由中央任命、地方议会选举产生，省会集中全省的行政、医疗与高等教育，科布多大学在这里。城市在阿尔泰山脉的东麓，布延特河把它分成两半。1685 年准噶尔的噶尔丹博硕克图汗在这一带筑城，后来城址迁到布延特河边的今址；城外保留着清代驻防城的城墙遗迹。这里是蒙古族群最杂的城市之一，哈拉哈、扎哈沁、土尔扈特、乌梁海与哈萨克等十多个族群共居，语言与习俗各不相同。东面约 25 公里是哈日乌斯湖国家公园，是候鸟的重要栖息地。气候属寒漠，冬季最低纪录接近零下 45 度。初来的人最容易犯的错，是以为蒙古西部只有牧民，而这座城是一整个省的行政与大学中心。",
    layout:
      "城市沿穿城而过的河流两岸展开，是蒙古西部历史上多民族（蒙古族、哈萨克族、图瓦人等）聚居与贸易往来的传统中心。",
    gettingAround:
      "本地设有科布多机场（HVD），有乌兰巴托往返定期航班；前往蒙古阿尔泰山塔王博格达等景点需公路自驾或包车，车程约数小时至一整天不等。",
    culture:
      "官方语言为蒙古语，当地民族构成多元，杜尔伯特蒙古人、哈萨克族等族群长期共同生活，宗教信仰兼有藏传佛教与伊斯兰教。",
    seeAndDo:
      "科布多省博物馆；周边草原与河谷风光；蒙古阿尔泰山方向徒步与骑马路线（需专业向导）。",
    whenAndTips:
      "6-8月气候最宜人；作为西部多民族聚居区，建议结合当地节庆（如哈萨克族传统活动）安排行程时间。",
  },
  olgii: {
    // 人口 sources（2026-09-13 核改）：蒙古国家统计局数据库 data.1212.mn 表 DT_NSO_0300_004V5（**常住人口 resident population**，苏木/巴格级，PX-Web API 直接取数，1 级）：巴彦乌列盖省乌列盖苏木 2025 年 41,110（2024 年 42,172）、全省常住人口 2025 年 109,038 —— 原写「市镇 2024 年约 5 万」与官方 2024 年数 42,172 相差近两成，改。⚠️ 口径：NSO 另有「总人口」表 DT_NSO_0300_004V1（全国 2025 年 3,591,120、乌兰巴托 1,796,045，只到省级），**苏木级只有常住人口这一档**，所以城市条目统一写「常住人口」，与国家概览 / 乌兰巴托的总人口不可直接相加比较。
    // identity sources: 乌力吉**市镇本身** 2024 年 50,126；**巴彦乌列盖省** 2024 年约 110,800，其中约九成三是哈萨克族
    //   （蒙古国家统计局，经维基 infobox 转引，3 级，2026-09-08 核）。
    //   **市与省差一倍多，两段各讲一个而都不写明主体，读者会以为其中一个错了。**
    //   原 identity 的「约 3 万」既不是市镇也不是省，是过期值。
    identity:
      "乌力吉是蒙古最西端巴彦乌列盖省首府，乌列盖苏木2025年常住人口约4.11万（全省约10.9万，蒙古国家统计局），是蒙古境内哈萨克族的主要聚居区，也是探索塔王博格达山群的核心门户。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Ölgii and Bayan-Ölgii Province (Mongolia; the westernmost province, established 1940 with its capital at Ölgii, 45,704.89 km², about 110,799 residents in 2024, the country's only Kazakh-majority and Muslim aimag with about 93 per cent Kazakh; the Abu-Bakr Siddiq central mosque in Ölgii; an estimated 80 per cent of the world's eagle hunters live in the province, with a Golden Eagle Festival each October; Altai Tavan Bogd National Park 6,362 km² with Khüiten Peak 4,374 m, Mongolia's highest; the Khovd river rises here; Ölgii Airport with flights to Ulaanbaatar; 2.3 million head of livestock in 2022)
    howItWorks:
      "乌力吉是蒙古国巴彦乌列盖省的省会；蒙古的地方行政分省与苏木两级，省长由中央任命、地方议会选举产生，省会集中全省的行政、医疗与中等教育。这个省 1940 年设立，位于蒙古最西端，面积约 4.57 万平方公里，2025 年常住人口约 10.9 万，其中约九成三是哈萨克族——它是蒙古唯一以哈萨克族为主、以伊斯兰教为主要信仰的省，因此城里通行哈萨克语，阿布伯克尔清真寺立在中心，节庆与饮食都与蒙古其他地方不同。据估计，世界上约八成的驯鹰人生活在这个省，每年十月的金雕节把他们聚到乌力吉城外，是本地最大的活动。科布多河发源于这一带；阿尔泰塔班博格德国家公园面积 6,362 平方公里，蒙古最高峰奎屯峰海拔 4,374 米在其中。畜牧是主业，2022 年全省牲畜 230 万头。初来的人最容易犯的错，是以为蒙古各地都一样，而这里的语言与宗教自成一格。",
    layout:
      "城市坐落于蒙古阿尔泰山麓的河谷地带，是巴彦乌列盖省的行政与文化中心，哈萨克传统文化在此地保留完整。",
    gettingAround:
      "本地设有乌力吉国际机场（ULG），全年有乌兰巴托往返定期航班，4至10月旅游季班次更多；前往塔王博格达山群需公路自驾或包车并配备专业向导。",
    culture:
      "巴彦乌列盖省是蒙古境内哈萨克族的主要聚居地，官方语言为蒙古语，当地哈萨克族保留有独特的语言、伊斯兰信仰与金雕猎鹰的传统技艺。",
    seeAndDo:
      "塔王博格达山群（呼依滕峰、蒙古阿尔泰山冰川）；金雕猎鹰传统技艺展示（每年10月金雕节）；哈萨克族传统蒙古包牧家体验。",
    whenAndTips:
      "6-8月是徒步塔王博格达山群的最佳季节；每年10月的金雕节是观赏哈萨克族传统猎鹰文化的最佳时机，但气温已转冷，需注意保暖。",
  },
  choibalsan: {
    // 人口 sources（2026-09-13 核改）：蒙古国家统计局数据库 data.1212.mn 表 DT_NSO_0300_004V5（**常住人口 resident population**，苏木/巴格级，PX-Web API 直接取数，1 级）：道尔诺德省克鲁伦苏木（乔巴山市）2025 年 46,773 —— 原写「2025 年约 3.85 万」与该表对不上（差约两成），出处不明，改。⚠️ 口径：NSO 另有「总人口」表 DT_NSO_0300_004V1（全国 2025 年 3,591,120、乌兰巴托 1,796,045，只到省级），**苏木级只有常住人口这一档**，所以城市条目统一写「常住人口」，与国家概览 / 乌兰巴托的总人口不可直接相加比较。
    // identity sources: 人口：2025 年 38,537（与本条目 howItWorks 一致），是这批里最新的一期；原 identity 的「约 3.9 万」取整偏松，已与 howItWorks 对齐。
    //   「蒙古第四大城市」经维基原文「after Ulaanbaatar, Darkhan, and Erdenet」直接印证。
    //   ✅ 红线：howItWorks 提到 1939 年哈拉哈河战役与朱可夫纪念馆——广泛记载的军事史事实、不涉现代邻国关系或评价，**判定保留**。
    identity:
      "乔巴山是蒙古东部道尔诺德省首府，2025年常住人口约4.68万（蒙古国家统计局），坐落于克鲁伦河畔，是探索蒙古东部达乌尔草原的核心门户城市。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Choibalsan (Mongolia; capital of Dornod Province in the east, 38,537 residents in 2025, the fourth-largest city in Mongolia after Ulaanbaatar, Darkhan and Erdenet; on the Kherlen river at 747 m; called Bayan Tümen until 1941, renamed for the 20th anniversary of the 1921 revolution after Khorloogiin Choibalsan; mainly Khalkha with Buryat and other groups; Choibalsan Airport with flights to Ulaanbaatar and Chinese cities; a railway to the Trans-Siberian, passenger service ending at Chuluunkhoroot on the border; museum to Georgy Zhukov near the site of the Battle of Khalkhin Gol; extremes −41.1 °C to 41.9 °C)
    howItWorks:
      "乔巴山是蒙古国东部道尔诺德省的省会，2025 年常住人口约 4.68 万，是继乌兰巴托、达尔汗与额尔登特之后蒙古第四大城市；蒙古的地方行政分省与苏木两级，省长由中央任命、地方议会选举产生。城市在克鲁伦河边，海拔约 747 米，四周是蒙古东部一望无际的草原——这片草原是世界上保存最完整的温带草原之一，蒙原羚成群迁徙的地方就在附近。它原名巴彦图门，1941 年为纪念 1921 年革命二十周年，改用当时领导人霍尔洛·乔巴山的名字。20 世纪它是通往北方铁路的节点，一条支线从这里接上西伯利亚大铁路，但客运只开到边境的楚伦霍洛特。城郊有纪念格奥尔基·朱可夫的博物馆，因为 1939 年的哈拉哈河战役就发生在这个省。机场有飞往乌兰巴托与中国城市的航班。极端气温从零下 41 度到近 42 度。初来的人最容易犯的错，是以为可以坐火车从这里出境，而客运列车只到边境为止。",
    layout:
      "城市沿克鲁伦河两岸展开，是蒙古东部草原地带最大的城市与区域行政中心。",
    gettingAround:
      "本地设有乔巴山机场（COQ），有乌兰巴托往返定期航班；前往蒙古达乌尔严格保护区等东部草原景点需公路自驾或包车。",
    culture:
      "官方语言为蒙古语。乔巴山以蒙古人民革命领导人乔巴山命名，是蒙古东部草原游牧文化与二十世纪蒙古现代化历史交汇的城市。",
    seeAndDo:
      "克鲁伦河沿岸风光；蒙古达乌尔严格保护区（候鸟观测、蒙古原羚迁徙）；周边东部草原游牧生活体验。",
    whenAndTips:
      "6-8月气候最宜人，也是观赏蒙古原羚（黄羊）大规模迁徙与候鸟活动的较佳季节；东部草原景点分散，建议提前规划路线与向导。",
  },
  tsetserleg: {
    // 人口 sources（2026-09-13 核改，关闭 issue #217）：蒙古国家统计局数据库 data.1212.mn 表 DT_NSO_0300_004V5「RESIDENT POPULATION IN MONGOLIA, by location, bag, khoroo, and by year」，PX-Web API 直接取数（1 级；1212.mn 证书问题已恢复）：阿尔汗盖省额尔登布尔干苏木（车车尔勒格市）2025 年 21,399 / 2017 年 21,620。
    // identity sources: 车车尔勒格 2017 年 21,620（蒙古国家统计局，经维基 infobox 转引，3 级，2026-09-08 核）。
    //   原 identity 的「1.7 万」对不上任何已知年份。九年前的数，1212.mn 无法直连确认更新一期。
    identity:
      "车车尔勒格是蒙古中部阿尔汗盖省首府，2025年常住人口约2.14万（蒙古国家统计局），坐落于杭爱山东麓，是探索科尔戈—特日和音查干湖国家公园的核心门户城市。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Tsetserleg (Mongolia; capital of Arkhangai Province, 21,620 residents in 2017 over 536 km² at 1,691 m; 600 km south-west of Ulaanbaatar on the north-eastern slopes of the Khangai mountains; founded around 1631, the Zayiin Gegeen Monastery established in the early 1680s, its main temple now the provincial museum; a dry-winter subarctic climate milder than the surrounding region, January nights about −15 °C to −25 °C; airport with connections to Ulaanbaatar; theatre, hospital and agricultural college; food processing the main industry) ⚑ 2026-09-15：「约 600 km」与本条公路里程约 480 km 矛盾，按注册表坐标算直线约 410 km，正文已改。
    // howItWorks sources（2026-09-13 回扫改）：原「约建于 1631 年，1680 年代初建起扎音格根寺」把寺院始建（多说 1631）与主殿建成年代混为一谈，建城年又有 1616 / 1631 两说，均为 3 级且互相矛盾，删去年份，只写城镇围绕寺院发展。核实 2026-09-13
    howItWorks:
      "车车尔勒格是蒙古国阿尔汗盖省的省会，2025 年常住人口约 2.14 万，市域约 536 平方公里，海拔约 1,691 米；蒙古的地方行政分省与苏木两级，省长由中央任命、地方议会选举产生，省会集中全省的医院、剧院与中等教育。城市在杭爱山脉的东北坡上，背靠布尔干山，乌兰巴托在东面直线约 410 公里。城镇围绕扎音格根寺发展起来，20 世纪寺庙停用，主殿如今是阿尔汗盖省博物馆，山坡上的白色佛像与寺墙是全城的背景。地形给了它一个特别之处：虽在高原上，它的冬天比周边缓和，一月夜间约在零下 15 至 25 度，在蒙古已算温和。食品加工是本地的主要工业，另有农牧学院。城外的岑赫尔温泉与更西的白湖是省内的去处，都需数小时车程。初来的人最容易犯的错，是把它与同省另一个叫车车尔勒格的苏木混淆，那是省北部的另一个行政单位。",
    layout:
      "城市依托山谷地形而建，藏传佛教寺院建筑与苏联时期规划的城镇格局并存。",
    gettingAround:
      "本地设有车车尔勒格机场（TSZ）但客运航班暂不稳定，通常经公路（多经哈拉和林）往返乌兰巴托，车程约7至8小时（公路里程约480公里）。",
    culture:
      "官方语言为蒙古语。车车尔勒格是杭爱山地区传统游牧生活与藏传佛教文化交汇的城镇，周边保留有多处传统寺院遗迹。",
    seeAndDo:
      "科尔戈—特日和音查干湖国家公园（科尔戈死火山、熔岩堰塞湖）；周边杭爱山草原骑马路线；当地藏传佛教寺院。",
    whenAndTips:
      "6-8月气候最宜人；建议将车车尔勒格作为鄂尔浑河谷与库苏古尔湖之间的中部行程中转站，安排一至两日停留。",
  },
};
