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
    "zh-CN": "新疆空中地貌探索",
    "en-US": "Xinjiang Aerial Terrain Explorer",
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

/** 获取翻译文本 */
export function t(key: string, lang: Language): string {
  return UI_TEXTS[key]?.[lang] ?? key;
}

/** TTS 语音 ID */
export const TTS_VOICE_IDS: Record<Language, string> = {
  "zh-CN": "zh-CN-XiaoyiNeural",
  "en-US": "en-US-JennyNeural",
};

/** 获取 TTS 语音 ID */
export function getTTSVoice(lang: Language): string {
  return TTS_VOICE_IDS[lang];
}
