/**
 * 国际化系统
 *
 * 支持中文/英文切换
 * UI 文本通过 locale 翻译
 * Story 内容通过 terrain 数据提供
 * TTS 语言跟随当前语言设置
 */

export type Language = "zh-CN" | "en-US";

/** UI 文本翻译 */
const UI_TEXTS: Record<string, Record<Language, string>> = {
  "app.title": {
    "zh-CN": "Flight Geography Explorer",
    "en-US": "Flight Geography Explorer",
  },
  "header.exploration": {
    "zh-CN": "探索",
    "en-US": "Explore",
  },
  "header.photo": {
    "zh-CN": "照片",
    "en-US": "Photo",
  },
  "sidebar.terrain_exploration": {
    "zh-CN": "地貌探索",
    "en-US": "Terrain Exploration",
  },
  "sidebar.flight_routes": {
    "zh-CN": "飞行路线",
    "en-US": "Flight Routes",
  },
  "sidebar.mountains": {
    "zh-CN": "山脉",
    "en-US": "Mountains",
  },
  "sidebar.lakes": {
    "zh-CN": "湖泊",
    "en-US": "Lakes",
  },
  "sidebar.deserts": {
    "zh-CN": "沙漠",
    "en-US": "Deserts",
  },
  "sidebar.basins": {
    "zh-CN": "盆地",
    "en-US": "Basins",
  },
  "sidebar.plateaus": {
    "zh-CN": "高原",
    "en-US": "Plateaus",
  },
  "sidebar.rivers": {
    "zh-CN": "河谷",
    "en-US": "Rivers",
  },
  "sidebar.landscape": {
    "zh-CN": "景观",
    "en-US": "Landscape",
  },
  "sidebar.plains": {
    "zh-CN": "平原",
    "en-US": "Plains",
  },
  "sidebar.hills": {
    "zh-CN": "丘陵",
    "en-US": "Hills",
  },
  "sidebar.gorges": {
    "zh-CN": "峡谷",
    "en-US": "Gorges",
  },
  "sidebar.islands": {
    "zh-CN": "岛屿",
    "en-US": "Islands",
  },
  "sidebar.back": {
    "zh-CN": "返回",
    "en-US": "Back",
  },
  "card.elevation": {
    "zh-CN": "海拔",
    "en-US": "Elevation",
  },
  "card.meters": {
    "zh-CN": "米",
    "en-US": "m",
  },
  "card.start_narration": {
    "zh-CN": "开始讲解",
    "en-US": "Start Narration",
  },
  "card.stop_narration": {
    "zh-CN": "停止讲解",
    "en-US": "Stop Narration",
  },
  "card.view_details": {
    "zh-CN": "查看详情",
    "en-US": "View Details",
  },
  "card.close": {
    "zh-CN": "关闭",
    "en-US": "Close",
  },
  "card.back": {
    "zh-CN": "收起",
    "en-US": "Back",
  },
  "card.seeing": {
    "zh-CN": "飞机窗外",
    "en-US": "From the Airplane",
  },
  "card.formation": {
    "zh-CN": "地貌形成",
    "en-US": "Formation",
  },
  "card.history": {
    "zh-CN": "历史与人文",
    "en-US": "History & Culture",
  },
  "card.observation": {
    "zh-CN": "飞机上如何区分",
    "en-US": "How to Identify",
  },
  "welcome.title": {
    "zh-CN": "飞行地貌探索",
    "en-US": "Flight Terrain Explorer",
  },
  "welcome.subtitle": {
    "zh-CN": "从飞机窗外看中国地形",
    "en-US": "Explore China's terrain from the airplane window",
  },
  "welcome.click_to_explore": {
    "zh-CN": "点击地图上的地貌或左侧分类开始探索",
    "en-US": "Click a terrain on the map or a category on the left to start exploring",
  },
  "welcome.start_tour": {
    "zh-CN": "开始导览",
    "en-US": "Start Tour",
  },
  "narration.select_terrain": {
    "zh-CN": "选择一个地貌开始探索",
    "en-US": "Select a terrain to start exploring",
  },
  "narration.in_progress": {
    "zh-CN": "正在讲解",
    "en-US": "Narrating",
  },
  "narration.stop": {
    "zh-CN": "停止讲解",
    "en-US": "Stop Narration",
  },
};

/** 地形名称翻译 */
export const TERRAIN_NAMES: Record<string, Record<Language, string>> = {
  // Xinjiang
  "天山": { "zh-CN": "天山", "en-US": "Tianshan Mountains" },
  "昆仑山": { "zh-CN": "昆仑山", "en-US": "Kunlun Mountains" },
  "阿尔泰山": { "zh-CN": "阿尔泰山", "en-US": "Altai Mountains" },
  "帕米尔高原": { "zh-CN": "帕米尔高原", "en-US": "Pamir Plateau" },
  "准噶尔盆地": { "zh-CN": "准噶尔盆地", "en-US": "Junggar Basin" },
  "塔里木盆地": { "zh-CN": "塔里木盆地", "en-US": "Tarim Basin" },
  "塔克拉玛干沙漠": { "zh-CN": "塔克拉玛干沙漠", "en-US": "Taklamakan Desert" },
  "赛里木湖": { "zh-CN": "赛里木湖", "en-US": "Sayram Lake" },
  "博斯腾湖": { "zh-CN": "博斯腾湖", "en-US": "Bosten Lake" },
  "喀纳斯湖": { "zh-CN": "喀纳斯湖", "en-US": "Kanas Lake" },
  "天池": { "zh-CN": "天池", "en-US": "Tianchi Lake" },
  "博格达峰": { "zh-CN": "博格达峰", "en-US": "Bogda Peak" },
  "慕士塔格峰": { "zh-CN": "慕士塔格峰", "en-US": "Muztagh Ata" },
  "火焰山": { "zh-CN": "火焰山", "en-US": "Flaming Mountains" },
  "吐鲁番盆地": { "zh-CN": "吐鲁番盆地", "en-US": "Turpan Basin" },
  "古尔班通古特": { "zh-CN": "古尔班通古特", "en-US": "Gurbantunggut Desert" },
  "伊犁河谷": { "zh-CN": "伊犁河谷", "en-US": "Ili River Valley" },
  "喀什": { "zh-CN": "喀什", "en-US": "Kashgar" },
  "和田": { "zh-CN": "和田", "en-US": "Hotan" },
  "吐鲁番": { "zh-CN": "吐鲁番", "en-US": "Turpan" },
  "库车大峡谷": { "zh-CN": "库车大峡谷", "en-US": "Kuqa Grand Canyon" },
  "那拉提草原": { "zh-CN": "那拉提草原", "en-US": "Nalati Grassland" },
  "巴音布鲁克草原": { "zh-CN": "巴音布鲁克草原", "en-US": "Bayanbulak Grassland" },
  "巴楚": { "zh-CN": "巴楚", "en-US": "Bachu" },
  "麦盖提": { "zh-CN": "麦盖提", "en-US": "Makit" },
  "罗布泊": { "zh-CN": "罗布泊", "en-US": "Lop Nur" },
  "艾比湖": { "zh-CN": "艾比湖", "en-US": "Ebi Lake" },
  "库姆塔格沙漠": { "zh-CN": "库姆塔格沙漠", "en-US": "Kumtag Desert" },
  "喀喇昆仑山脉": { "zh-CN": "喀喇昆仑山脉", "en-US": "Karakoram Range" },
  "额尔齐斯河": { "zh-CN": "额尔齐斯河", "en-US": "Irtysh River" },
  "叶尔羌河": { "zh-CN": "叶尔羌河", "en-US": "Yarkant River" },
  "塔里木河": { "zh-CN": "塔里木河", "en-US": "Tarim River" },

  // China
  "秦岭": { "zh-CN": "秦岭", "en-US": "Qinling Mountains" },
  "祁连山": { "zh-CN": "祁连山", "en-US": "Qilian Mountains" },
  "太行山": { "zh-CN": "太行山", "en-US": "Taihang Mountains" },
  "大兴安岭": { "zh-CN": "大兴安岭", "en-US": "Greater Khingan Range" },
  "横断山脉": { "zh-CN": "横断山脉", "en-US": "Hengduan Mountains" },
  "喜马拉雅山": { "zh-CN": "喜马拉雅山", "en-US": "Himalayas" },
  "青藏高原": { "zh-CN": "青藏高原", "en-US": "Qinghai-Tibet Plateau" },
  "黄土高原": { "zh-CN": "黄土高原", "en-US": "Loess Plateau" },
  "内蒙古高原": { "zh-CN": "内蒙古高原", "en-US": "Inner Mongolian Plateau" },
  "云贵高原": { "zh-CN": "云贵高原", "en-US": "Yunnan-Guizhou Plateau" },
  "四川盆地": { "zh-CN": "四川盆地", "en-US": "Sichuan Basin" },
  "柴达木盆地": { "zh-CN": "柴达木盆地", "en-US": "Qaidam Basin" },
  "东北平原": { "zh-CN": "东北平原", "en-US": "Northeast Plain" },
  "华北平原": { "zh-CN": "华北平原", "en-US": "North China Plain" },
  "长江中下游平原": { "zh-CN": "长江中下游平原", "en-US": "Middle-Lower Yangtze Plain" },
};

/** 获取地形名称翻译 */
export function getTerrainName(name: string, lang: Language): string {
  return TERRAIN_NAMES[name]?.[lang] ?? name;
}

/** 获取翻译文本 */
export function t(key: string, lang: Language): string {
  return UI_TEXTS[key]?.[lang] ?? key;
}

/** TTS 语音 ID */
export const TTS_VOICE_IDS: Record<Language, string> = {
  "zh-CN": "zh-CN-XiaoxiaoNeural",
  "en-US": "en-US-JennyNeural",
};

/** 获取 TTS 语音 ID */
export function getTTSVoice(lang: Language): string {
  return TTS_VOICE_IDS[lang];
}
