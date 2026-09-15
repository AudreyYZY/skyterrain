import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ── 智利 ──
  santiago: [
    { nameZh: "武器广场", nameEn: "Plaza de Armas", lon: -70.6506, lat: -33.4372, kind: "landmark" },
    { nameZh: "拉莫内达宫", nameEn: "La Moneda Palace", lon: -70.6540, lat: -33.4428, kind: "landmark" },
    { nameZh: "圣克里斯托瓦尔山", nameEn: "Cerro San Cristóbal", lon: -70.6335, lat: -33.4237, kind: "nature" },
    { nameZh: "智利前哥伦布艺术博物馆", nameEn: "Chilean Museum of Pre-Columbian Art", lon: -70.6520, lat: -33.4380, kind: "landmark" },
    { nameZh: "中央市场", nameEn: "Mercado Central", lon: -70.6497, lat: -33.4340, kind: "district" },
  ],
  valparaiso: [
    { nameZh: "塞巴斯蒂安娜之家（聂鲁达故居）", nameEn: "La Sebastiana (Neruda House)", lon: -71.5960, lat: -33.0392, kind: "landmark" },
    { nameZh: "康塞普西翁缆车", nameEn: "Ascensor Concepción", lon: -71.6280, lat: -33.0405, kind: "transport" },
    { nameZh: "阿莱格雷山", nameEn: "Cerro Alegre", lon: -71.6270, lat: -33.0420, kind: "district" },
    { nameZh: "索托马约尔广场", nameEn: "Plaza Sotomayor", lon: -71.6270, lat: -33.0362, kind: "landmark" },
    { nameZh: "比尼亚德尔马", nameEn: "Viña del Mar", lon: -71.5510, lat: -33.0245, kind: "district" },
  ],
  antofagasta: [
    { nameZh: "拉波塔达海蚀拱", nameEn: "La Portada Natural Monument", lon: -70.4283, lat: -23.4694, kind: "nature" },
    { nameZh: "钟楼广场", nameEn: "Clock Tower Plaza", lon: -70.4000, lat: -23.6497, kind: "landmark" },
    { nameZh: "地区博物馆", nameEn: "Regional Museum of Antofagasta", lon: -70.4010, lat: -23.6503, kind: "landmark" },
    { nameZh: "海滨大道", nameEn: "Balmaceda Avenue Waterfront", lon: -70.4050, lat: -23.6470, kind: "district" },
  ],
  calama: [
    { nameZh: "洛阿河绿洲步道", nameEn: "Loa River Oasis Walk", lon: -68.9280, lat: -22.4620, kind: "nature" },
    { nameZh: "地区博物馆", nameEn: "El Loa Regional Museum", lon: -68.9330, lat: -22.4660, kind: "landmark" },
  ],
  "san-pedro-de-atacama": [
    { nameZh: "圣佩德罗教堂", nameEn: "San Pedro Church", lon: -68.1996, lat: -22.9095, kind: "landmark" },
    { nameZh: "月亮谷", nameEn: "Valle de la Luna", lon: -68.3120, lat: -22.9170, kind: "nature" },
    { nameZh: "阿塔卡马考古博物馆", nameEn: "R.P. Gustavo Le Paige Archaeological Museum", lon: -68.1990, lat: -22.9110, kind: "landmark" },
    { nameZh: "米斯坎蒂湖", nameEn: "Laguna Miscanti", lon: -67.7800, lat: -23.7220, kind: "nature" },
  ],
  "la-serena": [
    { nameZh: "主教座堂", nameEn: "La Serena Cathedral", lon: -71.2497, lat: -29.9047, kind: "landmark" },
    { nameZh: "日本庭园", nameEn: "Japanese Garden", lon: -71.2440, lat: -29.9130, kind: "nature" },
    { nameZh: "拉塞雷纳海滩", nameEn: "La Serena Beach (Avenida del Mar)", lon: -71.2650, lat: -29.9200, kind: "nature" },
    { nameZh: "托洛洛山美洲天文台", nameEn: "Cerro Tololo Inter-American Observatory", lon: -70.8050, lat: -30.1690, kind: "landmark" },
  ],
  concepcion: [
    { nameZh: "比奥比奥大学校园", nameEn: "University of Concepción Campus", lon: -73.0350, lat: -36.8285, kind: "district" },
    { nameZh: "加拉加尔文化中心", nameEn: "Galería de la Historia", lon: -73.0500, lat: -36.8280, kind: "landmark" },
    { nameZh: "独立广场", nameEn: "Plaza de la Independencia", lon: -73.0503, lat: -36.8270, kind: "landmark" },
    { nameZh: "塔尔卡瓦诺港", nameEn: "Port of Talcahuano", lon: -73.1170, lat: -36.7220, kind: "district" },
  ],
  temuco: [
    { nameZh: "尼耶尔山公园", nameEn: "Ñielol Hill Park", lon: -72.6010, lat: -38.7260, kind: "nature" },
    { nameZh: "埃斯特角农贸集市", nameEn: "Feria Pinto Market", lon: -72.5930, lat: -38.7400, kind: "district" },
    { nameZh: "阿劳卡尼亚地区博物馆", nameEn: "Regional Museum of La Araucanía", lon: -72.5940, lat: -38.7380, kind: "landmark" },
  ],
  pucon: [
    { nameZh: "维亚里卡火山口步道起点", nameEn: "Villarrica Crater Trailhead", lon: -71.9550, lat: -39.4200, kind: "nature" },
    { nameZh: "黑沙滩", nameEn: "Pucón Black-Sand Beach", lon: -71.9700, lat: -39.2780, kind: "nature" },
    { nameZh: "韦韦温泉", nameEn: "Huife Hot Springs", lon: -71.7550, lat: -39.2450, kind: "landmark" },
    { nameZh: "维亚里卡国家公园", nameEn: "Villarrica National Park", lon: -71.8500, lat: -39.4700, kind: "nature" },
  ],
  "puerto-varas": [
    { nameZh: "圣弗朗西斯科哈维尔教堂", nameEn: "Sacred Heart Church (Iglesia de los Sagrados Corazones)", lon: -72.9840, lat: -41.3190, kind: "landmark" },
    { nameZh: "延基韦湖滨大道", nameEn: "Lake Llanquihue Waterfront", lon: -72.9800, lat: -41.3150, kind: "nature" },
    { nameZh: "托多斯洛斯桑托斯湖", nameEn: "Lake Todos los Santos", lon: -72.1650, lat: -41.1500, kind: "nature" },
  ],
  "puerto-montt": [
    { nameZh: "安赫尔莫渔人码头", nameEn: "Angelmó Fishermen's Wharf", lon: -72.9650, lat: -41.4760, kind: "district" },
    { nameZh: "武器广场", nameEn: "Plaza de Armas", lon: -72.9420, lat: -41.4700, kind: "landmark" },
    { nameZh: "大教堂", nameEn: "Puerto Montt Cathedral", lon: -72.9415, lat: -41.4703, kind: "landmark" },
  ],
  coyhaique: [
    { nameZh: "西门斯基山公园", nameEn: "Cerro Mackay Park", lon: -72.0600, lat: -45.5680, kind: "nature" },
    { nameZh: "五边形城市广场", nameEn: "Pentagonal Plaza de Armas", lon: -72.0680, lat: -45.5720, kind: "landmark" },
    { nameZh: "大理石教堂", nameEn: "Marble Caves", lon: -73.246, lat: -46.585, kind: "nature" },
  ],
  "punta-arenas": [
    { nameZh: "麦哲伦历史区豪宅群", nameEn: "Historic Mansion District", lon: -70.9130, lat: -53.1620, kind: "district" },
    { nameZh: "萨拉·亚德门泰博物馆", nameEn: "Salesian Regional Museum Maggiorino Borgatello", lon: -70.9080, lat: -53.1580, kind: "landmark" },
    { nameZh: "麦哲伦企鹅保护区（奥特维亚岛）", nameEn: "Magdalena Island Penguin Reserve", lon: -70.5900, lat: -52.9330, kind: "nature" },
  ],
  "hanga-roa": [
    { nameZh: "塔哈伊仪式中心", nameEn: "Tahai Ceremonial Complex", lon: -109.4460, lat: -27.1470, kind: "landmark" },
    { nameZh: "拉诺拉拉库火山口", nameEn: "Rano Raraku", lon: -109.2917, lat: -27.1219, kind: "nature" },
    { nameZh: "通加里基祭坛", nameEn: "Ahu Tongariki", lon: -109.2767, lat: -27.1258, kind: "landmark" },
    { nameZh: "阿纳克纳海滩", nameEn: "Anakena Beach", lon: -109.3250, lat: -27.0730, kind: "nature" },
    { nameZh: "奥龙戈仪式村", nameEn: "Orongo Ceremonial Village", lon: -109.4430, lat: -27.1830, kind: "landmark" },
  ],
};
