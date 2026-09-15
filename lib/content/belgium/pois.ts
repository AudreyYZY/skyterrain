import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ── 比利时 ──
  brussels: [
    { nameZh: "大广场", nameEn: "Grand Place", lon: 4.3525, lat: 50.8467, kind: "landmark" },
    { nameZh: "小于连撒尿小孩铜像", nameEn: "Manneken Pis", lon: 4.3499, lat: 50.8450, kind: "landmark" },
    { nameZh: "欧盟区", nameEn: "European Quarter", lon: 4.3811, lat: 50.8437, kind: "district" },
    { nameZh: "比利时漫画艺术中心", nameEn: "Belgian Comic Strip Center", lon: 4.3547, lat: 50.8508, kind: "landmark" },
  ],
  antwerp: [
    { nameZh: "圣母大教堂", nameEn: "Our Lady's Cathedral", lon: 4.4014, lat: 51.2211, kind: "landmark" },
    { nameZh: "大广场", nameEn: "Grote Markt", lon: 4.3997, lat: 51.2206, kind: "landmark" },
    { nameZh: "钻石区", nameEn: "Diamond District", lon: 4.4198, lat: 51.2144, kind: "district" },
    { nameZh: "中央车站", nameEn: "Antwerp Central Station", lon: 4.4211, lat: 51.2172, kind: "landmark" },
  ],
  bruges: [
    { nameZh: "市集广场与钟楼", nameEn: "Markt & Belfry", lon: 3.2247, lat: 51.2083, kind: "landmark" },
    { nameZh: "爱之湖公园", nameEn: "Lake of Love", lon: 3.2178, lat: 51.2011, kind: "nature" },
    { nameZh: "贝居安会院", nameEn: "Beguinage", lon: 3.2214, lat: 51.2036, kind: "landmark" },
    { nameZh: "圣血教堂", nameEn: "Basilica of the Holy Blood", lon: 3.2258, lat: 51.2081, kind: "landmark" },
  ],
  ghent: [
    { nameZh: "圣巴夫主教座堂", nameEn: "St. Bavo's Cathedral", lon: 3.7256, lat: 51.0536, kind: "landmark" },
    { nameZh: "根特伯爵城堡", nameEn: "Gravensteen Castle", lon: 3.7189, lat: 51.0578, kind: "landmark" },
    { nameZh: "钟楼", nameEn: "Belfry of Ghent", lon: 3.7239, lat: 51.0533, kind: "landmark" },
  ],
  liege: [
    { nameZh: "圣朗贝尔广场", nameEn: "Place Saint-Lambert", lon: 5.5761, lat: 50.6431, kind: "landmark" },
    { nameZh: "列日圭勒明车站", nameEn: "Liège-Guillemins Station", lon: 5.5678, lat: 50.6247, kind: "landmark" },
    { nameZh: "蒙塔涌台阶", nameEn: "Montagne de Bueren", lon: 5.5808, lat: 50.6453, kind: "landmark" },
  ],
  namur: [
    { nameZh: "那慕尔城堡", nameEn: "Citadel of Namur", lon: 4.8608, lat: 50.4586, kind: "landmark" },
    { nameZh: "默兹河与桑布尔河交汇处", nameEn: "Meuse-Sambre Confluence", lon: 4.8639, lat: 50.4658, kind: "nature" },
  ],
  leuven: [
    { nameZh: "市政厅", nameEn: "Town Hall", lon: 4.7003, lat: 50.8794, kind: "landmark" },
    { nameZh: "大贝居安会院", nameEn: "Groot Begijnhof", lon: 4.6944, lat: 50.8722, kind: "landmark" },
    { nameZh: "老市场广场", nameEn: "Oude Markt", lon: 4.7011, lat: 50.8783, kind: "district" },
  ],
  mons: [
    { nameZh: "大广场与贝尔弗里钟楼", nameEn: "Grand Place & Belfry", lon: 3.9522, lat: 50.4544, kind: "landmark" },
    { nameZh: "圣沃德鲁教堂", nameEn: "Collegiate Church of St. Waltrude", lon: 3.9539, lat: 50.4547, kind: "landmark" },
  ],
  dinant: [
    { nameZh: "迪南城堡", nameEn: "Citadel of Dinant", lon: 4.9128, lat: 50.2606, kind: "landmark" },
    { nameZh: "圣母教堂", nameEn: "Collegiate Church of Dinant", lon: 4.9114, lat: 50.2603, kind: "landmark" },
  ],
  ostend: [
    { nameZh: "海滨长堤", nameEn: "Seafront Promenade", lon: 2.9186, lat: 51.2306, kind: "landmark" },
    { nameZh: "老渔港区", nameEn: "Old Fishing Harbour", lon: 2.9139, lat: 51.2308, kind: "district" },
    { nameZh: "玛丽亚·亨德里卡公园", nameEn: "Maria Hendrika Park", lon: 2.9203, lat: 51.2181, kind: "nature" },
  ],
  spa: [
    { nameZh: "温泉浴场", nameEn: "Thermal Baths", lon: 5.8631, lat: 50.4933, kind: "landmark" },
    { nameZh: "斯帕—弗朗科尔尚赛道", nameEn: "Circuit de Spa-Francorchamps", lon: 5.9714, lat: 50.4372, kind: "landmark" },
  ],
  mechelen: [
    { nameZh: "圣龙博塔楼与主教座堂", nameEn: "St Rumbold's Tower and Cathedral", lon: 4.47895, lat: 51.02887, kind: "landmark" },
    { nameZh: "大广场与市政厅", nameEn: "Grote Markt and Town Hall", lon: 4.48194, lat: 51.02794, kind: "landmark" },
    { nameZh: "大贝居安会院", nameEn: "Great Beguinage", lon: 4.47403, lat: 51.03208, kind: "landmark" },
    { nameZh: "布斯莱登宫博物馆", nameEn: "Museum Hof van Busleyden", lon: 4.48226, lat: 51.03112, kind: "landmark" },
    { nameZh: "玛格丽特宫（萨伏依宫）", nameEn: "Hof van Savoye (Palace of Margaret of Austria)", lon: 4.48607, lat: 51.02857, kind: "landmark" },
  ],
  tournai: [
    { nameZh: "图尔奈圣母大教堂", nameEn: "Notre-Dame Cathedral of Tournai", lon: 3.38885, lat: 50.60647, kind: "landmark" },
    { nameZh: "钟楼", nameEn: "Belfry of Tournai", lon: 3.38802, lat: 50.60574, kind: "landmark" },
    { nameZh: "洞桥", nameEn: "Pont des Trous", lon: 3.38373, lat: 50.61292, kind: "landmark" },
    { nameZh: "美术馆", nameEn: "Museum of Fine Arts", lon: 3.38543, lat: 50.60257, kind: "landmark" },
    { nameZh: "挂毯与纺织艺术博物馆", nameEn: "TAMAT (Tapestry and Textile Arts Museum)", lon: 3.38839, lat: 50.60417, kind: "landmark" },
  ],
};
