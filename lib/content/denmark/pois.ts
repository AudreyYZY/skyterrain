import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ── 丹麦 ──
  copenhagen: [
    { nameZh: "小美人鱼像", nameEn: "The Little Mermaid", lon: 12.5993, lat: 55.6929, kind: "landmark" },
    { nameZh: "新港", nameEn: "Nyhavn", lon: 12.5911, lat: 55.6799, kind: "district" },
    { nameZh: "蒂沃利花园", nameEn: "Tivoli Gardens", lon: 12.5681, lat: 55.6736, kind: "landmark" },
    { nameZh: "克里斯钦堡宫", nameEn: "Christiansborg Palace", lon: 12.5808, lat: 55.6761, kind: "landmark" },
    { nameZh: "克里斯钦港自由城", nameEn: "Freetown Christiania", lon: 12.5966, lat: 55.6738, kind: "district" },
  ],
  helsingoer: [
    { nameZh: "克伦堡城堡", nameEn: "Kronborg Castle", lon: 12.6197, lat: 56.0388, kind: "landmark" },
    { nameZh: "圣玛丽教堂", nameEn: "St Mary's Church", lon: 12.6103, lat: 56.0360, kind: "landmark" },
    { nameZh: "文化造船厂博物馆", nameEn: "M/S Maritime Museum of Denmark", lon: 12.6184, lat: 56.0394, kind: "landmark" },
  ],
  roskilde: [
    { nameZh: "罗斯基勒大教堂", nameEn: "Roskilde Cathedral", lon: 12.0800, lat: 55.6423, kind: "landmark" },
    { nameZh: "维京船博物馆", nameEn: "Viking Ship Museum", lon: 12.0847, lat: 55.6444, kind: "landmark" },
  ],
  odense: [
    { nameZh: "安徒生博物馆", nameEn: "H.C. Andersen Museum", lon: 10.3878, lat: 55.3961, kind: "landmark" },
    { nameZh: "欧登塞大教堂", nameEn: "Odense Cathedral", lon: 10.3856, lat: 55.3958, kind: "landmark" },
    { nameZh: "蒙特格自然历史博物馆", nameEn: "Møntergården Museum", lon: 10.3894, lat: 55.3969, kind: "landmark" },
  ],
  esbjerg: [
    { nameZh: "人与海雕塑", nameEn: "Men at Sea", lon: 8.4114, lat: 55.4939, kind: "landmark" },
    { nameZh: "埃斯比约海事博物馆", nameEn: "Fisheries and Maritime Museum", lon: 8.4394, lat: 55.4658, kind: "landmark" },
    { nameZh: "瓦登海中心", nameEn: "Wadden Sea Centre", lon: 8.7500, lat: 55.3167, kind: "nature" },
  ],
  ribe: [
    { nameZh: "里伯大教堂", nameEn: "Ribe Cathedral", lon: 8.7644, lat: 55.3283, kind: "landmark" },
    { nameZh: "里伯维京中心", nameEn: "Ribe VikingeCenter", lon: 8.7514, lat: 55.3067, kind: "landmark" },
  ],
  aarhus: [
    { nameZh: "ARoS奥胡斯艺术博物馆", nameEn: "ARoS Aarhus Art Museum", lon: 10.2108, lat: 56.1519, kind: "landmark" },
    { nameZh: "老城露天博物馆", nameEn: "Den Gamle By", lon: 10.2039, lat: 56.1558, kind: "landmark" },
    { nameZh: "奥胡斯大教堂", nameEn: "Aarhus Cathedral", lon: 10.2108, lat: 56.1567, kind: "landmark" },
  ],
  silkeborg: [
    { nameZh: "尤尔湖蒸汽船码头", nameEn: "Julsø / Hjejlen Steamboat", lon: 9.5583, lat: 56.1697, kind: "nature" },
    { nameZh: "默勒霍伊", nameEn: "Møllehøj", lon: 9.8264, lat: 56.0064, kind: "nature" },
    { nameZh: "锡尔克堡博物馆", nameEn: "Silkeborg Museum", lon: 9.5386, lat: 56.1697, kind: "landmark" },
  ],
  aalborg: [
    { nameZh: "利姆海峡滨水区", nameEn: "Aalborg Waterfront", lon: 9.9256, lat: 57.0477, kind: "district" },
    { nameZh: "奥尔堡历史博物馆", nameEn: "Aalborg Historical Museum", lon: 9.9178, lat: 57.0486, kind: "landmark" },
  ],
  skagen: [
    { nameZh: "格伦角", nameEn: "Grenen", lon: 10.6333, lat: 57.7500, kind: "nature" },
    { nameZh: "斯卡恩美术馆", nameEn: "Skagens Museum", lon: 10.5836, lat: 57.7211, kind: "landmark" },
    { nameZh: "被沙丘掩埋的老教堂", nameEn: "Tilsandede Kirke (Buried Church)", lon: 10.5644, lat: 57.7169, kind: "landmark" },
  ],
  roenne: [
    { nameZh: "哈默斯胡斯城堡遗址", nameEn: "Hammershus Castle Ruins", lon: 14.7714, lat: 55.2725, kind: "landmark" },
    { nameZh: "阿尔明丁根森林高地", nameEn: "Almindingen", lon: 14.8500, lat: 55.1167, kind: "nature" },
    { nameZh: "哈默伦花岗岩海岸", nameEn: "Hammeren", lon: 14.7833, lat: 55.2667, kind: "nature" },
    { nameZh: "圣地崖", nameEn: "Helligdomsklipperne", lon: 14.9111, lat: 55.2444, kind: "nature" },
  ],
  billund: [
    { nameZh: "乐高乐园", nameEn: "Legoland Billund", lon: 9.1258, lat: 55.7325, kind: "landmark" },
    { nameZh: "乐高之家", nameEn: "LEGO House", lon: 9.1207, lat: 55.7311, kind: "landmark" },
  ],
  vejle: [
    { nameZh: "耶灵古迹（世界遗产）", nameEn: "Jelling Mounds, Runic Stones and Church", lon: 9.42, lat: 55.7564, kind: "landmark" },
    { nameZh: "王者耶灵体验中心", nameEn: "Kongernes Jelling", lon: 9.41816, lat: 55.75687, kind: "landmark" },
    { nameZh: "格赖斯河谷", nameEn: "Grejsdalen", lon: 9.53263, lat: 55.73133, kind: "nature" },
    { nameZh: "波浪大厦", nameEn: "Bølgen (The Wave)", lon: 9.55644, lat: 55.70951, kind: "landmark" },
    { nameZh: "瓦埃勒峡湾大桥", nameEn: "Vejle Fjord Bridge", lon: 9.57277, lat: 55.69942, kind: "landmark" },
    { nameZh: "蒙克山", nameEn: "Munkebjerg", lon: 9.61482, lat: 55.68687, kind: "nature" },
  ],
  stege: [
    { nameZh: "磨坊门（中世纪城门）", nameEn: "Mølleporten", lon: 12.2893, lat: 54.9872, kind: "landmark" },
    { nameZh: "斯泰厄教堂", nameEn: "Stege Church", lon: 12.28424, lat: 54.98415, kind: "landmark" },
    { nameZh: "默恩岛白垩崖（世界遗产）", nameEn: "Møns Klint", lon: 12.54274, lat: 54.98104, kind: "nature" },
    { nameZh: "默恩崖地质中心", nameEn: "GeoCenter Møns Klint", lon: 12.54834, lat: 54.96606, kind: "landmark" },
    { nameZh: "利塞伦德庄园与园林", nameEn: "Liselund", lon: 12.51898, lat: 54.99986, kind: "landmark" },
    { nameZh: "埃尔梅伦德教堂", nameEn: "Elmelunde Church", lon: 12.40077, lat: 54.99507, kind: "landmark" },
    { nameZh: "克林霍尔姆港", nameEn: "Klintholm Havn", lon: 12.46909, lat: 54.95402, kind: "district" },
    { nameZh: "尼奥兹岛", nameEn: "Nyord", lon: 12.19549, lat: 55.04125, kind: "nature" },
  ],
};
