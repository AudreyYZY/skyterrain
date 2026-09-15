import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ── 瑞典 ──
  stockholm: [
    { nameZh: "加姆拉斯坦老城与王宫", nameEn: "Gamla Stan & Royal Palace", lon: 18.0714, lat: 59.3269, kind: "landmark" },
    { nameZh: "瓦萨沉船博物馆", nameEn: "Vasa Museum", lon: 18.0914, lat: 59.3280, kind: "landmark" },
    { nameZh: "市政厅", nameEn: "Stockholm City Hall", lon: 18.0546, lat: 59.3273, kind: "landmark" },
    { nameZh: "斯坎森露天博物馆", nameEn: "Skansen", lon: 18.1039, lat: 59.3247, kind: "landmark" },
  ],
  uppsala: [
    { nameZh: "乌普萨拉大教堂", nameEn: "Uppsala Cathedral", lon: 17.6339, lat: 59.8579, kind: "landmark" },
    { nameZh: "乌普萨拉城堡", nameEn: "Uppsala Castle", lon: 17.6392, lat: 59.8558, kind: "landmark" },
    { nameZh: "林奈花园", nameEn: "Linnaeus Garden", lon: 17.6386, lat: 59.8564, kind: "landmark" },
    { nameZh: "老乌普萨拉古坟冢群", nameEn: "Old Uppsala Burial Mounds", lon: 17.6347, lat: 59.8994, kind: "landmark" },
  ],
  gothenburg: [
    { nameZh: "利瑟贝里游乐园", nameEn: "Liseberg", lon: 11.9930, lat: 57.6947, kind: "landmark" },
    { nameZh: "哥德堡大教堂", nameEn: "Gothenburg Cathedral", lon: 11.9678, lat: 57.7075, kind: "landmark" },
    { nameZh: "鱼教堂鱼市场", nameEn: "Feskekôrka", lon: 11.9639, lat: 57.7031, kind: "landmark" },
  ],
  malmoe: [
    { nameZh: "马尔默城堡", nameEn: "Malmö Castle", lon: 12.9944, lat: 55.6103, kind: "landmark" },
    { nameZh: "旋转大厦", nameEn: "Turning Torso", lon: 12.9764, lat: 55.6136, kind: "landmark" },
    { nameZh: "老城广场", nameEn: "Stortorget", lon: 13.0007, lat: 55.6058, kind: "district" },
  ],
  visby: [
    { nameZh: "中世纪城墙环城步道", nameEn: "Visby City Wall", lon: 18.2939, lat: 57.6367, kind: "landmark" },
    { nameZh: "圣玛丽大教堂", nameEn: "St Mary's Cathedral", lon: 18.2947, lat: 57.6386, kind: "landmark" },
    { nameZh: "圣卡塔琳娜教堂遗址", nameEn: "St Catherine's Church Ruins", lon: 18.2939, lat: 57.6358, kind: "landmark" },
  ],
  karlskrona: [
    { nameZh: "海军博物馆", nameEn: "Naval Museum", lon: 15.5892, lat: 56.1592, kind: "landmark" },
    { nameZh: "圣玛丽亚教堂与三一教堂", nameEn: "Church of Saint Mary & Trinity Church", lon: 15.5867, lat: 56.1614, kind: "landmark" },
  ],
  kalmar: [
    { nameZh: "卡尔马城堡", nameEn: "Kalmar Castle", lon: 16.3583, lat: 56.6597, kind: "landmark" },
    { nameZh: "卡尔马大教堂", nameEn: "Kalmar Cathedral", lon: 16.3625, lat: 56.6636, kind: "landmark" },
  ],
  kiruna: [
    { nameZh: "基律纳教堂", nameEn: "Kiruna Church", lon: 20.2261, lat: 67.8531, kind: "landmark" },
    { nameZh: "萨米文化中心", nameEn: "Aitte Sámi Cultural Centre", lon: 20.2242, lat: 67.8494, kind: "landmark" },
    { nameZh: "冰酒店（尤卡斯耶尔维）", nameEn: "Icehotel (Jukkasjärvi)", lon: 20.5942, lat: 67.8544, kind: "landmark" },
  ],
  lulea: [
    { nameZh: "格默尔斯塔德教堂村", nameEn: "Gammelstad Church Town", lon: 22.0333, lat: 65.6167, kind: "landmark" },
    { nameZh: "吕勒奥群岛", nameEn: "Luleå Archipelago", lon: 22.1400, lat: 65.5700, kind: "nature" },
  ],
  harnosand: [
    { nameZh: "老城木结构建筑街区", nameEn: "Härnösand Old Town", lon: 17.9400, lat: 62.6350, kind: "district" },
    { nameZh: "高海岸大桥", nameEn: "High Coast Bridge", lon: 18.1975, lat: 62.7958, kind: "landmark" },
  ],
  are: [
    { nameZh: "奥勒斯基山滑雪区", nameEn: "Åreskutan Ski Area", lon: 13.0836, lat: 63.4394, kind: "nature" },
    { nameZh: "奥勒湖", nameEn: "Lake Åre", lon: 13.0783, lat: 63.3958, kind: "nature" },
  ],
};
