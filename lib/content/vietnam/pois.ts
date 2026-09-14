import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // 越南
  hanoi: [
    { nameZh: "还剑湖", nameEn: "Hoan Kiem Lake", lon: 105.8523, lat: 21.0287, kind: "nature" },
    { nameZh: "三十六古街", nameEn: "Old Quarter", lon: 105.8497, lat: 21.0335, kind: "district" },
    { nameZh: "胡志明主席陵", nameEn: "Ho Chi Minh Mausoleum", lon: 105.8342, lat: 21.0369, kind: "landmark" },
    { nameZh: "文庙国子监", nameEn: "Temple of Literature", lon: 105.8355, lat: 21.0274, kind: "landmark" },
    { nameZh: "西湖", nameEn: "West Lake", lon: 105.8194, lat: 21.0583, kind: "nature" },
  ],
  "ho-chi-minh-city": [
    { nameZh: "红教堂", nameEn: "Notre-Dame Cathedral", lon: 106.6994, lat: 10.7798, kind: "landmark" },
    { nameZh: "战争遗迹博物馆", nameEn: "War Remnants Museum", lon: 106.6919, lat: 10.7796, kind: "landmark" },
    { nameZh: "范五老街", nameEn: "Pham Ngu Lao Street", lon: 106.6928, lat: 10.7681, kind: "district" },
    { nameZh: "第五郡唐人街", nameEn: "Cholon (Chinatown)", lon: 106.6667, lat: 10.7500, kind: "district" },
  ],
  "da-nang": [
    { nameZh: "美溪海滩", nameEn: "My Khe Beach", lon: 108.2472, lat: 16.0544, kind: "nature" },
    { nameZh: "龙桥", nameEn: "Dragon Bridge", lon: 108.2233, lat: 16.0611, kind: "landmark" },
    { nameZh: "五行山", nameEn: "Marble Mountains (Ngu Hanh Son)", lon: 108.2606, lat: 16.0044, kind: "nature" },
    { nameZh: "韩江", nameEn: "Han River", lon: 108.2208, lat: 16.0700, kind: "nature" },
  ],
  "hoi-an": [
    { nameZh: "日本廊桥", nameEn: "Japanese Covered Bridge", lon: 108.3260, lat: 15.8794, kind: "landmark" },
    { nameZh: "会安中央市场", nameEn: "Hoi An Central Market", lon: 108.3300, lat: 15.8783, kind: "district" },
    { nameZh: "秋盆河", nameEn: "Thu Bon River", lon: 108.3280, lat: 15.8790, kind: "nature" },
  ],
  hue: [
    { nameZh: "顺化皇城", nameEn: "Hue Imperial City", lon: 107.5789, lat: 16.4698, kind: "landmark" },
    { nameZh: "启定帝陵", nameEn: "Tomb of Khai Dinh", lon: 107.5750, lat: 16.4172, kind: "landmark" },
    { nameZh: "明命帝陵", nameEn: "Tomb of Minh Mang", lon: 107.5619, lat: 16.4453, kind: "landmark" },
    { nameZh: "天姥寺", nameEn: "Thien Mu Pagoda", lon: 107.5544, lat: 16.4536, kind: "landmark" },
  ],
  sapa: [
    { nameZh: "孟兴谷", nameEn: "Muong Hoa Valley", lon: 103.8500, lat: 22.3167, kind: "nature" },
    { nameZh: "叶湖村", nameEn: "Cat Cat Village", lon: 103.8306, lat: 22.3306, kind: "district" },
    { nameZh: "爱情瀑布", nameEn: "Love Waterfall", lon: 103.7833, lat: 22.3667, kind: "nature" },
  ],
  "ha-long-city": [
    { nameZh: "斗鸡石", nameEn: "Hon Trong Mai (Fighting Cocks Islet)", lon: 107.0667, lat: 20.9101, kind: "nature" },
    { nameZh: "天宫洞", nameEn: "Thien Cung Cave", lon: 107.0500, lat: 20.9083, kind: "nature" },
    { nameZh: "巴维山缆车", nameEn: "Queen Cable Car", lon: 107.0644, lat: 20.9539, kind: "landmark" },
  ],
  "nha-trang-city": [
    { nameZh: "婆那加占婆塔", nameEn: "Po Nagar Cham Towers", lon: 109.1953, lat: 12.2664, kind: "landmark" },
    { nameZh: "珍珠岛", nameEn: "Vinpearl", lon: 109.2264, lat: 12.2119, kind: "landmark" },
    { nameZh: "琴石岬", nameEn: "Hon Chong Promontory", lon: 109.1922, lat: 12.2444, kind: "nature" },
  ],
  "da-lat": [
    { nameZh: "春香湖", nameEn: "Xuan Huong Lake", lon: 108.4419, lat: 11.9428, kind: "nature" },
    { nameZh: "疯狂屋", nameEn: "Crazy House", lon: 108.4386, lat: 11.9414, kind: "landmark" },
    { nameZh: "大叻火车站", nameEn: "Da Lat Railway Station", lon: 108.4489, lat: 11.9433, kind: "landmark" },
  ],
  "can-tho": [
    { nameZh: "凤凰水上市场", nameEn: "Cai Rang Floating Market", lon: 105.7292, lat: 10.0217, kind: "nature" },
    { nameZh: "宁桥", nameEn: "Ninh Kieu Bridge", lon: 105.7822, lat: 10.0347, kind: "landmark" },
    { nameZh: "芹苴博物馆", nameEn: "Can Tho Museum", lon: 105.7794, lat: 10.0333, kind: "landmark" },
  ],
  "phu-quoc-city": [
    { nameZh: "阳东夜市", nameEn: "Duong Dong Night Market", lon: 103.9633, lat: 10.2183, kind: "district" },
    { nameZh: "安特跨海缆车", nameEn: "An Thoi Cable Car", lon: 103.9758, lat: 10.0122, kind: "landmark" },
    { nameZh: "富国国家公园", nameEn: "Phu Quoc National Park", lon: 103.9000, lat: 10.3500, kind: "nature" },
  ],
  "ninh-binh": [
    { nameZh: "陆龙湾（三谷）", nameEn: "Tam Coc", lon: 105.9333, lat: 20.2167, kind: "nature" },
    { nameZh: "华闾古都遗址", nameEn: "Hoa Lu Ancient Capital", lon: 105.9139, lat: 20.2903, kind: "landmark" },
    { nameZh: "白亭寺", nameEn: "Bai Dinh Pagoda", lon: 105.8642, lat: 20.2611, kind: "landmark" },
    { nameZh: "木庵溶洞与观景台", nameEn: "Mua Cave", lon: 105.9294, lat: 20.2469, kind: "nature" },
  ],
  // ── 越南 批2（2026-09-05）──
  haiphong: [
    { nameZh: "海防大剧院", nameEn: "Haiphong Opera House", lon: 106.6830, lat: 20.8580, kind: "landmark" },
    { nameZh: "海防主教座堂", nameEn: "Haiphong Cathedral", lon: 106.6790, lat: 20.8570, kind: "landmark" },
    { nameZh: "海防港", nameEn: "Port of Haiphong", lon: 106.6950, lat: 20.8650, kind: "transport" },
    { nameZh: "涂山海滩", nameEn: "Do Son Beach", lon: 106.7800, lat: 20.7100, kind: "nature" },
    { nameZh: "吉婆岛", nameEn: "Cat Ba Island", lon: 107.0480, lat: 20.7280, kind: "nature" },
    { nameZh: "兰哈湾", nameEn: "Lan Ha Bay", lon: 107.1000, lat: 20.7500, kind: "nature" },
  ],
  "dong-hoi": [
    { nameZh: "日丽海滩", nameEn: "Nhat Le Beach", lon: 106.6350, lat: 17.4750, kind: "nature" },
    { nameZh: "广平门", nameEn: "Quang Binh Gate", lon: 106.6180, lat: 17.4680, kind: "landmark" },
    { nameZh: "洞海站", nameEn: "Dong Hoi Station", lon: 106.5950, lat: 17.4700, kind: "transport" },
    { nameZh: "风牙洞", nameEn: "Phong Nha Cave", lon: 106.2830, lat: 17.5860, kind: "nature" },
    { nameZh: "天堂洞", nameEn: "Paradise Cave", lon: 106.2260, lat: 17.5210, kind: "nature" },
  ],
  "quy-nhon": [
    { nameZh: "归仁海滩", nameEn: "Quy Nhon Beach", lon: 109.2200, lat: 13.7650, kind: "nature" },
    { nameZh: "双塔（占婆塔）", nameEn: "Thap Doi Cham Towers", lon: 109.2090, lat: 13.7830, kind: "landmark" },
    { nameZh: "奇姑海滩与风口", nameEn: "Ky Co Beach & Eo Gio", lon: 109.2900, lat: 13.8550, kind: "nature" },
    { nameZh: "归和与韩墨子墓", nameEn: "Quy Hoa & Han Mac Tu's Grave", lon: 109.2200, lat: 13.7300, kind: "landmark" },
    { nameZh: "光中博物馆（西山）", nameEn: "Quang Trung Museum (Tay Son)", lon: 108.9000, lat: 13.9200, kind: "landmark" },
  ],
  "phan-thiet": [
    { nameZh: "美奈渔村", nameEn: "Mui Ne Fishing Village", lon: 108.2900, lat: 10.9500, kind: "district" },
    { nameZh: "红沙丘", nameEn: "Red Sand Dunes", lon: 108.3000, lat: 10.9550, kind: "nature" },
    { nameZh: "白沙丘", nameEn: "White Sand Dunes", lon: 108.4300, lat: 11.0800, kind: "nature" },
    { nameZh: "仙女溪", nameEn: "Fairy Stream", lon: 108.2800, lat: 10.9450, kind: "nature" },
    { nameZh: "波沙努占婆塔", nameEn: "Po Shanu Cham Towers", lon: 108.1500, lat: 10.9400, kind: "landmark" },
    { nameZh: "潘切站", nameEn: "Phan Thiet Station", lon: 108.0800, lat: 10.9550, kind: "transport" },
  ],
  "vung-tau": [
    { nameZh: "头顿耶稣像", nameEn: "Christ of Vung Tau", lon: 107.0780, lat: 10.3270, kind: "landmark" },
    { nameZh: "头顿灯塔", nameEn: "Vung Tau Lighthouse", lon: 107.0730, lat: 10.3380, kind: "landmark" },
    { nameZh: "后滩", nameEn: "Back Beach (Bai Sau)", lon: 107.0900, lat: 10.3400, kind: "nature" },
    { nameZh: "白宫", nameEn: "Bach Dinh (White Palace)", lon: 107.0740, lat: 10.3520, kind: "landmark" },
    { nameZh: "客运码头", nameEn: "Vung Tau Ferry Terminal", lon: 107.0700, lat: 10.3480, kind: "transport" },
  ],
  "ha-giang": [
    { nameZh: "河江市区·零公里碑", nameEn: "Ha Giang City (Km 0 marker)", lon: 104.9840, lat: 22.8230, kind: "district" },
    { nameZh: "天门（关坝）", nameEn: "Heaven's Gate (Quan Ba)", lon: 104.9800, lat: 23.0400, kind: "nature" },
    { nameZh: "同文老街", nameEn: "Dong Van Old Quarter", lon: 105.3620, lat: 23.2780, kind: "district" },
    { nameZh: "马皮冷山口", nameEn: "Ma Pi Leng Pass", lon: 105.4100, lat: 23.2400, kind: "nature" },
    { nameZh: "龙鼓旗台", nameEn: "Lung Cu Flag Tower", lon: 105.3170, lat: 23.3630, kind: "landmark" },
  ],
};
