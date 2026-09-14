import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // 泰国
  bangkok: [
    { nameZh: "大皇宫", nameEn: "Grand Palace", lon: 100.4913, lat: 13.7500, kind: "landmark" },
    { nameZh: "郑王庙", nameEn: "Wat Arun", lon: 100.4888, lat: 13.7437, kind: "landmark" },
    { nameZh: "乍都乍市场", nameEn: "Chatuchak Market", lon: 100.5500, lat: 13.7999, kind: "district" },
    { nameZh: "考山路", nameEn: "Khao San Road", lon: 100.4977, lat: 13.7590, kind: "district" },
    { nameZh: "暹罗商圈", nameEn: "Siam", lon: 100.5347, lat: 13.7466, kind: "district" },
  ],
  "chiang-mai": [
    { nameZh: "帕辛寺", nameEn: "Wat Phra Singh", lon: 98.9825, lat: 18.7873, kind: "landmark" },
    { nameZh: "清曼寺", nameEn: "Wat Chiang Man", lon: 98.9878, lat: 18.7929, kind: "landmark" },
    { nameZh: "素贴寺", nameEn: "Wat Phra That Doi Suthep", lon: 98.9219, lat: 18.8047, kind: "landmark" },
    { nameZh: "周日步行街", nameEn: "Sunday Walking Street", lon: 98.9836, lat: 18.7887, kind: "district" },
    { nameZh: "尼曼路", nameEn: "Nimman Road", lon: 98.9666, lat: 18.7994, kind: "district" },
  ],
  phuket: [
    { nameZh: "巴东海滩", nameEn: "Patong Beach", lon: 98.2966, lat: 7.8965, kind: "nature" },
    { nameZh: "普吉镇老城", nameEn: "Phuket Old Town", lon: 98.3900, lat: 7.8833, kind: "district" },
    { nameZh: "大佛山", nameEn: "Big Buddha", lon: 98.3117, lat: 7.8278, kind: "landmark" },
    { nameZh: "卡伦观景点", nameEn: "Karon Viewpoint", lon: 98.2967, lat: 7.8080, kind: "nature" },
  ],
  krabi: [
    { nameZh: "莱利岬角", nameEn: "Railay Peninsula", lon: 98.8372, lat: 8.0107, kind: "nature" },
    { nameZh: "奥南海滩", nameEn: "Ao Nang Beach", lon: 98.8228, lat: 8.0333, kind: "nature" },
    { nameZh: "老虎洞寺", nameEn: "Tiger Cave Temple", lon: 98.9522, lat: 8.1150, kind: "landmark" },
  ],
  pattaya: [
    { nameZh: "芭提雅步行街", nameEn: "Pattaya Walking Street", lon: 100.8737, lat: 12.9280, kind: "district" },
    { nameZh: "真理寺", nameEn: "Sanctuary of Truth", lon: 100.8814, lat: 12.9781, kind: "landmark" },
    { nameZh: "格兰岛", nameEn: "Koh Larn", lon: 100.7847, lat: 12.9186, kind: "nature" },
    { nameZh: "东芭乐园", nameEn: "Nong Nooch Tropical Garden", lon: 100.9333, lat: 12.7333, kind: "landmark" },
  ],
  "chiang-rai": [
    { nameZh: "白龙寺", nameEn: "Wat Rong Khun (White Temple)", lon: 99.7736, lat: 19.8067, kind: "landmark" },
    { nameZh: "蓝庙", nameEn: "Wat Rong Suea Ten (Blue Temple)", lon: 99.8189, lat: 19.9350, kind: "landmark" },
    { nameZh: "黑屋博物馆", nameEn: "Baan Dam Museum", lon: 99.8378, lat: 19.9622, kind: "landmark" },
    { nameZh: "金三角景观区", nameEn: "Golden Triangle", lon: 100.0856, lat: 20.3556, kind: "nature" },
  ],
  "koh-samui": [
    { nameZh: "查汶海滩", nameEn: "Chaweng Beach", lon: 100.0611, lat: 9.5386, kind: "nature" },
    { nameZh: "大佛寺", nameEn: "Big Buddha Temple", lon: 100.0603, lat: 9.5764, kind: "landmark" },
    { nameZh: "安通国家海洋公园", nameEn: "Ang Thong National Marine Park", lon: 99.6667, lat: 9.6667, kind: "nature" },
    { nameZh: "渔民村", nameEn: "Fisherman's Village", lon: 100.0472, lat: 9.5686, kind: "district" },
  ],
  ayutthaya: [
    { nameZh: "玛哈泰寺", nameEn: "Wat Mahathat", lon: 100.5686, lat: 14.3567, kind: "landmark" },
    { nameZh: "帕席桑碧寺", nameEn: "Wat Phra Si Sanphet", lon: 100.5561, lat: 14.3564, kind: "landmark" },
    { nameZh: "洛卡雅苏塔寺", nameEn: "Wat Lokayasutharam", lon: 100.5442, lat: 14.3486, kind: "landmark" },
  ],
  sukhothai: [
    { nameZh: "玛哈泰寺遗址", nameEn: "Wat Mahathat Ruins", lon: 99.7011, lat: 17.0186, kind: "landmark" },
    { nameZh: "诗春寺", nameEn: "Wat Si Chum", lon: 99.6944, lat: 17.0247, kind: "landmark" },
    { nameZh: "沙西寺", nameEn: "Wat Sa Si", lon: 99.7017, lat: 17.0206, kind: "landmark" },
  ],
  "hua-hin": [
    { nameZh: "华欣海滩", nameEn: "Hua Hin Beach", lon: 99.9636, lat: 12.5628, kind: "nature" },
    { nameZh: "华欣火车站", nameEn: "Hua Hin Railway Station", lon: 99.9583, lat: 12.5711, kind: "landmark" },
    { nameZh: "华欣丘陵葡萄园", nameEn: "Hua Hin Hills Vineyard", lon: 99.7833, lat: 12.6667, kind: "landmark" },
  ],
  "udon-thani": [
    { nameZh: "农贵湖公园", nameEn: "Nong Prajak Park", lon: 102.7883, lat: 17.4111, kind: "nature" },
    { nameZh: "班清国家博物馆", nameEn: "Ban Chiang National Museum", lon: 103.2378, lat: 17.4058, kind: "landmark" },
    { nameZh: "那雍寺", nameEn: "Wat Pa Phu Kon", lon: 102.0833, lat: 17.6667, kind: "landmark" },
  ],
  "nakhon-ratchasima": [
    { nameZh: "陶苏拉纳丽纪念碑", nameEn: "Thao Suranari Memorial", lon: 102.0972, lat: 14.9722, kind: "landmark" },
    { nameZh: "帕侬蓝历史公园", nameEn: "Phanom Rung Historical Park", lon: 102.9375, lat: 14.5308, kind: "landmark" },
    { nameZh: "考艾山国家公园", nameEn: "Khao Yai National Park", lon: 101.3725, lat: 14.4386, kind: "nature" },
  ],
  // ── 泰国 批2（2026-09-05）──
  kanchanaburi: [
    { nameZh: "桂河大桥", nameEn: "Bridge over the River Kwai", lon: 99.5040, lat: 14.0410, kind: "landmark" },
    { nameZh: "北碧战争公墓", nameEn: "Kanchanaburi War Cemetery", lon: 99.5250, lat: 14.0270, kind: "landmark" },
    { nameZh: "泰缅铁路中心", nameEn: "Thailand–Burma Railway Centre", lon: 99.5250, lat: 14.0280, kind: "landmark" },
    { nameZh: "地狱火通道", nameEn: "Hellfire Pass", lon: 98.9560, lat: 14.3580, kind: "landmark" },
    { nameZh: "爱侣湾瀑布", nameEn: "Erawan Falls", lon: 99.1440, lat: 14.3690, kind: "nature" },
    { nameZh: "北碧火车站", nameEn: "Kanchanaburi Station", lon: 99.5200, lat: 14.0230, kind: "transport" },
  ],
  lampang: [
    { nameZh: "南邦銮寺", nameEn: "Wat Phra That Lampang Luang", lon: 99.3880, lat: 18.2160, kind: "landmark" },
    { nameZh: "空达老街（周末夜市）", nameEn: "Kad Kong Ta Walking Street", lon: 99.5000, lat: 18.2930, kind: "district" },
    { nameZh: "拉差纳达拉桥", nameEn: "Ratsadaphisek Bridge", lon: 99.4980, lat: 18.2900, kind: "landmark" },
    { nameZh: "泰国大象保护中心", nameEn: "Thai Elephant Conservation Center", lon: 99.3050, lat: 18.3950, kind: "nature" },
    { nameZh: "南邦火车站", nameEn: "Nakhon Lampang Station", lon: 99.4830, lat: 18.2820, kind: "transport" },
  ],
  "hat-yai": [
    { nameZh: "金荣市场", nameEn: "Kim Yong Market", lon: 100.4700, lat: 7.0080, kind: "district" },
    { nameZh: "合艾市立公园（大佛与缆车）", nameEn: "Hat Yai Municipal Park", lon: 100.4900, lat: 6.9950, kind: "nature" },
    { nameZh: "合艾火车站", nameEn: "Hat Yai Junction", lon: 100.4700, lat: 7.0060, kind: "transport" },
    { nameZh: "宋卡老城", nameEn: "Songkhla Old Town", lon: 100.5900, lat: 7.1990, kind: "district" },
    { nameZh: "沙米拉海滩（美人鱼像）", nameEn: "Samila Beach", lon: 100.5950, lat: 7.2100, kind: "nature" },
  ],
  "ko-chang": [
    { nameZh: "白沙滩", nameEn: "White Sand Beach", lon: 102.2900, lat: 12.1200, kind: "nature" },
    { nameZh: "孤独海滩", nameEn: "Lonely Beach", lon: 102.2900, lat: 12.0300, kind: "nature" },
    { nameZh: "邦宝渔村", nameEn: "Bang Bao Fishing Village", lon: 102.3100, lat: 11.9900, kind: "district" },
    { nameZh: "空普瀑布", nameEn: "Khlong Phlu Waterfall", lon: 102.3300, lat: 12.0800, kind: "nature" },
    { nameZh: "菠萝湾渡口", nameEn: "Ao Sapparot Ferry Pier", lon: 102.3400, lat: 12.1600, kind: "transport" },
  ],
  "khao-lak": [
    { nameZh: "南通海滩", nameEn: "Nang Thong Beach", lon: 98.2520, lat: 8.6550, kind: "nature" },
    { nameZh: "邦娘海滩与海啸纪念（813号巡逻艇）", nameEn: "Bang Niang Beach & Boat 813 Memorial", lon: 98.2600, lat: 8.6850, kind: "landmark" },
    { nameZh: "考拉—蓝鲁国家公园", nameEn: "Khao Lak–Lam Ru National Park", lon: 98.2400, lat: 8.6200, kind: "nature" },
    { nameZh: "塔迈昂码头（斯米兰出海）", nameEn: "Thap Lamu Pier (Similan boats)", lon: 98.2200, lat: 8.5600, kind: "transport" },
    { nameZh: "达瓜巴老城", nameEn: "Takua Pa Old Town", lon: 98.3500, lat: 8.8700, kind: "district" },
  ],
  "ko-lanta": [
    { nameZh: "沙拉丹码头", nameEn: "Saladan Pier", lon: 99.0400, lat: 7.6350, kind: "transport" },
    { nameZh: "长滩", nameEn: "Long Beach (Phra Ae)", lon: 99.0350, lat: 7.6000, kind: "nature" },
    { nameZh: "兰塔老镇", nameEn: "Lanta Old Town", lon: 99.0850, lat: 7.5300, kind: "district" },
    { nameZh: "兰塔群岛国家公园灯塔", nameEn: "Mu Ko Lanta National Park Lighthouse", lon: 99.0980, lat: 7.4750, kind: "nature" },
    { nameZh: "干藤海滩", nameEn: "Kantiang Bay", lon: 99.0700, lat: 7.4900, kind: "nature" },
  ],
};
