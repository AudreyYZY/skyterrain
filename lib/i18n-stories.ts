/**
 * 地形故事英文翻译
 *
 * 基于权威地理资料，非 AI 生成
 * 参考: 中国国家地理、中国科学院、国家测绘局
 */

import type { Language } from "./i18n";

export interface TerrainStoryText {
  seeing: string;
  formation: string;
  history: string;
  observation: string;
}

/** 5 个核心地形的英文故事 */
export const TERRAIN_STORIES: Record<string, Record<Language, TerrainStoryText>> = {
  "秦岭": {
    "zh-CN": {
      seeing: "秦岭横贯中国中部，是中国南北地理分界线。从飞机上看，山脊呈东西走向，将中国分为南方和北方。山北是黄河流域的黄土高原，山南是长江流域的四川盆地，分界非常明显。",
      formation: "秦岭是扬子板块与华北板块碰撞形成的褶皱山系，新生代以来持续抬升。山体主要由变质岩和花岗岩组成，太白山海拔3771米，是秦岭最高峰。",
      history: "秦岭自古以来就是中国南北的天然屏障。蜀道难，难于上青天，指的就是秦岭山区的交通困难。秦岭也是大熊猫的重要栖息地，佛坪自然保护区就位于此处。",
      observation: "秦岭呈东西走向，山脊线连续。从飞机上看，山北是黄土高原的黄色调，山南是四川盆地的绿色调，分界非常明显。山体北坡陡峭，南坡平缓。",
    },
    "en-US": {
      seeing: "The Qinling Mountains stretch across central China, forming the geographic dividing line between the nation's north and south. From the air, the east-west ridge clearly separates the yellow-brown Loess Plateau to the north from the green Sichuan Basin to the south.",
      formation: "The Qinling range was formed by the collision of the Yangtze and North China plates, with continuous uplift throughout the Cenozoic era. The mountains are composed mainly of metamorphic and granitic rock, with Mount Taibai reaching 3,771 meters as its highest peak.",
      history: "For millennia, the Qinling Mountains have served as a natural barrier between northern and southern China. The ancient saying 'The road to Shu is harder than climbing to the sky' referred to the difficulty of crossing these mountains. The range is also home to the giant panda, with the Foping Nature Reserve located here.",
      observation: "The Qinling ridge runs east-west without interruption. From the air, the yellow tones of the Loess Plateau on the north side contrast sharply with the green Sichuan Basin on the south. The northern slopes are steep while the southern slopes are more gradual.",
    },
  },

  "祁连山": {
    "zh-CN": {
      seeing: "祁连山位于甘肃与青海交界处，是河西走廊的天然屏障。山顶终年积雪，冰川广布，山下是广阔的草原和戈壁。从飞机上看，雪线以上是白色冰川，雪线以下是深色山体，山前是绿色草原。",
      formation: "祁连山是青藏高原东北缘的褶皱山系，受印度板块挤压持续抬升。山体由古生代变质岩和中生代花岗岩组成，冰川作用形成了典型的U形谷和角峰。",
      history: "祁连山是古代丝绸之路的重要地标。匈奴语称天为祁连，祁连山即天山之意。霍去病曾在此大败匈奴，留下「失我祁连山，使我六畜不蕃息」的诗句。",
      observation: "祁连山呈西北-东南走向，山顶雪线明显。从飞机上看，北侧是干旱的河西走廊，南侧是湿润的青海草原，分界非常清晰。山前有明显的冲积扇。",
    },
    "en-US": {
      seeing: "The Qilian Mountains run along the Gansu-Qinghai border, forming a natural barrier for the Hexi Corridor. The peaks are covered with permanent snow and glaciers, while vast grasslands and gobi deserts stretch below. From the air, white glaciers gleam above the snowline, with dark mountain rock and green grasslands beneath.",
      formation: "The Qilian range forms the northeastern edge of the Qinghai-Tibet Plateau, continuously rising due to the Indian plate's northward push. The mountains consist of Paleozoic metamorphic and Mesozoic granitic rocks, with glacial erosion creating classic U-shaped valleys and horn peaks.",
      history: "The Qilian Mountains were a landmark on the ancient Silk Road. In the Xiongnu language, 'Qilian' means 'heaven' — the Mountains of Heaven. The Han dynasty general Huo Qubing defeated the Xiongnu here, inspiring the famous verse: 'Without the Qilian Mountains, our livestock cannot thrive.'",
      observation: "The Qilian range runs northwest to southeast with a clearly visible snowline. From the air, the dry Hexi Corridor to the north contrasts sharply with the lush Qinghai grasslands to the south. Distinct alluvial fans spread from the mountain front.",
    },
  },

  "四川盆地": {
    "zh-CN": {
      seeing: "四川盆地是中国四大盆地之一，被群山环绕，气候湿润，物产丰富，被称为天府之国。从飞机上看，四周是高大的山脉，中间是绿色平原，泾渭分明。",
      formation: "四川盆地是古老的沉积盆地，周围山脉的碎屑物质堆积形成厚厚的沉积层。盆地内有丰富的天然气资源，是中国重要的能源基地。",
      history: "四川盆地是巴蜀文化的发源地，都江堰水利工程已有2000多年历史。三国时期刘备在此建立蜀汉政权，成都武侯祠至今仍是重要文化地标。",
      observation: "四川盆地被群山环绕，内部平坦。从飞机上看，四周是高大的山脉，中间是绿色的平原，分界非常明显。盆地内多雾，能见度有时较低。",
    },
    "en-US": {
      seeing: "The Sichuan Basin is one of China's four great basins, encircled by mountains with a humid climate and fertile land — known as the 'Land of Abundance.' From the air, the contrast between the surrounding mountain walls and the green interior plain is striking.",
      formation: "The Sichuan Basin is an ancient sedimentary basin where debris from surrounding mountains has accumulated into thick sedimentary layers. The basin holds abundant natural gas reserves, making it one of China's important energy bases.",
      history: "The Sichuan Basin is the birthplace of Ba-Shu culture. The Dujiangyan irrigation system, built over 2,000 years ago, still functions today. During the Three Kingdoms period, Liu Bei established the Shu Han kingdom here, and the Wuhou Shrine remains an important cultural landmark.",
      observation: "The basin is completely encircled by mountains with a flat interior. From the air, the boundary between the surrounding high mountains and the central green plain is unmistakable. The basin is often foggy, sometimes reducing visibility.",
    },
  },

  "柴达木盆地": {
    "zh-CN": {
      seeing: "柴达木盆地是中国三大内陆盆地之一，地势高亢，盐湖广布。从飞机上看，白色盐田和绿色草地交错分布，周围是荒凉的戈壁和雪山。",
      formation: "柴达木盆地是青藏高原上的构造盆地，沉积了厚厚的盐类矿产。盆地内有丰富的钾盐、锂矿资源，是中国重要的盐化工基地。",
      history: "柴达木盆地是蒙古语盐泽之意，盐湖资源丰富。茶卡盐湖是中国著名的天空之镜，察尔汗盐湖是中国最大的盐湖。",
      observation: "柴达木盆地地势高亢，盐湖广布。从飞机上看，白色盐田和绿色草地交错，与周围雪山形成鲜明对比。盆地内风力强劲，有大面积风蚀地貌。",
    },
    "en-US": {
      seeing: "The Qaidam Basin sits high on the Qinghai-Tibet Plateau, dotted with salt lakes. From the air, white salt pans alternate with green grasslands, surrounded by barren gobi and snow-capped mountains.",
      formation: "The Qaidam Basin is a tectonic basin on the Qinghai-Tibet Plateau, filled with thick layers of salt minerals. It holds rich deposits of potassium and lithium, making it one of China's key salt-chemical industry bases.",
      history: "In Mongolian, 'Qaidam' means 'salt marsh' — a testament to its abundant salt lakes. The Chaka Salt Lake is famous as China's 'Mirror of the Sky,' while the Qarhan Salt Lake is the country's largest.",
      observation: "The basin sits at high elevation with salt lakes scattered across its surface. From the air, white salt pans and green grasslands create a striking contrast against the surrounding snow-capped peaks. Strong winds have carved extensive wind-erosion landforms.",
    },
  },

  "云贵高原": {
    "zh-CN": {
      seeing: "云贵高原是中国第四大高原，喀斯特地貌发育典型。从飞机上看，峰林、溶洞、暗河遍布，地形崎岖。贵州部分多雨雾，云南部分阳光充足。",
      formation: "云贵高原是古老的石灰岩高原，受流水侵蚀形成喀斯特地貌。溶洞、石林、暗河是典型特征。黄果树瀑布、路南石林都是喀斯特地貌的代表。",
      history: "云贵高原是多民族聚居区，苗族、彝族、布依族等民族在此繁衍生息。也是中国重要的有色金属产地，个旧锡矿、铜仁汞矿都很著名。",
      observation: "云贵高原地形崎岖，喀斯特地貌明显。从飞机上看，峰林耸立，溶洞遍布，与周围平原形成鲜明对比。贵州多雨雾，云南多晴天。",
    },
    "en-US": {
      seeing: "The Yunnan-Guizhou Plateau is China's fourth-largest plateau, renowned for its karst landforms. From the air, tower karst, sinkholes, and underground rivers create a dramatic landscape. Guizhou is often shrouded in rain and fog, while Yunnan enjoys abundant sunshine.",
      formation: "This ancient limestone plateau has been sculpted by water erosion into classic karst formations — caves, stone forests, and underground rivers. The Huangguoshu Waterfall and the Stone Forest of Lunan are iconic examples of karst geology.",
      history: "The plateau is home to diverse ethnic groups including the Miao, Yi, and Buyi peoples. It is also one of China's important non-ferrous metal mining regions, with famous tin mines in Gejiu and mercury mines in Tongren.",
      observation: "The plateau's rugged karst terrain is unmistakable from the air — tower karst formations rise like stone pillars, with caves and sinkholes dotting the landscape. The contrast with surrounding flatlands is dramatic. Guizhou is often cloudy while Yunnan is sunny.",
    },
  },
};

/** 获取地形故事 */
export function getTerrainStory(terrainName: string, lang: Language): TerrainStoryText | null {
  return TERRAIN_STORIES[terrainName]?.[lang] ?? null;
}
