import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 越南 ──────────────────────────────────────────────
  {
    id: "hanoi", nameZh: "河内", nameEn: "Hanoi", country: "vietnam", tier: "capital", zone: "vn-north", admin1Zh: "河内市", admin1En: "Hanoi",
    lon: 105.8342, lat: 21.0278,
    airport: { iata: "HAN", nameZh: "内排国际机场", nameEn: "Noi Bai International", lon: 105.8073, lat: 21.2212 },
    source: "河内市中心 21.0278,105.8342；HAN 机场：公开资料",
  },
  {
    id: "ho-chi-minh-city", nameZh: "胡志明市", nameEn: "Ho Chi Minh City", country: "vietnam", tier: "major", zone: "vn-south", admin1Zh: "胡志明市", admin1En: "Ho Chi Minh City",
    lon: 106.7009, lat: 10.7769,
    airport: { iata: "SGN", nameZh: "新山一国际机场", nameEn: "Tan Son Nhat International", lon: 106.6520, lat: 10.8188 },
    source: "胡志明市中心 10.7769,106.7009；SGN 机场：公开资料",
  },
  {
    id: "da-nang", nameZh: "岘港", nameEn: "Da Nang", country: "vietnam", tier: "major", zone: "vn-central", admin1Zh: "岘港市", admin1En: "Da Nang",
    lon: 108.2022, lat: 16.0544,
    airport: { iata: "DAD", nameZh: "岘港国际机场", nameEn: "Da Nang International", lon: 108.1994, lat: 16.0439 },
    source: "岘港市中心 16.0544,108.2022；DAD 机场：公开资料",
  },
  {
    id: "hoi-an", nameZh: "会安", nameEn: "Hoi An", country: "vietnam", tier: "notable", zone: "vn-central", admin1Zh: "岘港市", admin1En: "Da Nang",
    lon: 108.3380, lat: 15.8801,
    airport: { iata: "DAD", nameZh: "岘港国际机场", nameEn: "Da Nang International", lon: 108.1994, lat: 16.0439 },
    source: "会安古城一带 15.8801,108.3380；本地无商业机场，最近机场为岘港国际机场（距古城约30km）：公开资料",
  },
  {
    id: "hue", nameZh: "顺化", nameEn: "Hue", country: "vietnam", tier: "notable", zone: "vn-central", admin1Zh: "顺化市", admin1En: "Hue",
    lon: 107.5909, lat: 16.4637,
    airport: { iata: "HUI", nameZh: "富牌国际机场", nameEn: "Phu Bai International", lon: 107.7033, lat: 16.4015 },
    source: "顺化市中心 16.4637,107.5909；HUI 机场：公开资料",
  },
  {
    id: "sapa", nameZh: "沙巴", nameEn: "Sapa", country: "vietnam", tier: "notable", zone: "vn-north", admin1Zh: "老街省", admin1En: "Lao Cai",
    lon: 103.8438, lat: 22.3364,
    airport: { iata: "HAN", nameZh: "内排国际机场", nameEn: "Noi Bai International", lon: 105.8073, lat: 21.2212 },
    source: "沙巴镇中心 22.3364,103.8438；本地及老街省均无机场，最近机场为河内内排国际机场（距沙巴约320km）：公开资料",
  },
  {
    id: "ha-long-city", nameZh: "下龙市", nameEn: "Ha Long City", country: "vietnam", tier: "notable", zone: "vn-north", admin1Zh: "广宁省", admin1En: "Quang Ninh",
    lon: 107.0839, lat: 20.9101,
    airport: { iata: "VDO", nameZh: "云屯国际机场", nameEn: "Van Don International", lon: 107.4144, lat: 21.1183 },
    source: "下龙市中心 20.9101,107.0839；VDO 机场（距市区约50km）：公开资料",
  },
  {
    id: "nha-trang-city", nameZh: "芽庄", nameEn: "Nha Trang", country: "vietnam", tier: "notable", zone: "vn-central", admin1Zh: "庆和省", admin1En: "Khanh Hoa",
    lon: 109.1967, lat: 12.2388,
    airport: { iata: "CXR", nameZh: "金兰国际机场", nameEn: "Cam Ranh International", lon: 109.2196, lat: 11.9982 },
    source: "芽庄市中心 12.2388,109.1967；CXR 机场（距市区约35km）：公开资料",
  },
  {
    id: "da-lat", nameZh: "大叻", nameEn: "Da Lat", country: "vietnam", tier: "notable", zone: "vn-central-highlands", admin1Zh: "林同省", admin1En: "Lam Dong",
    lon: 108.4419, lat: 11.9404,
    airport: { iata: "DLI", nameZh: "莲香机场", nameEn: "Lien Khuong Airport", lon: 108.3667, lat: 11.7500 },
    source: "大叻市中心 11.9404,108.4419；DLI 机场（距市区约30km）：公开资料",
  },
  {
    id: "can-tho", nameZh: "芹苴", nameEn: "Can Tho", country: "vietnam", tier: "notable", zone: "vn-south", admin1Zh: "芹苴市", admin1En: "Can Tho",
    lon: 105.7469, lat: 10.0452,
    airport: { iata: "VCA", nameZh: "芹苴国际机场", nameEn: "Can Tho International", lon: 105.7122, lat: 10.0851 },
    source: "芹苴市中心 10.0452,105.7469；VCA 机场：公开资料",
  },
  {
    id: "phu-quoc-city", nameZh: "阳东", nameEn: "Duong Dong", country: "vietnam", tier: "notable", zone: "vn-south", admin1Zh: "安江省", admin1En: "An Giang",
    lon: 103.9670, lat: 10.2170,
    airport: { iata: "PQC", nameZh: "富国国际机场", nameEn: "Phu Quoc International", lon: 103.9950, lat: 10.1700 },
    source: "阳东镇一带 10.2170,103.9670；PQC 机场（距镇区约15km）：公开资料",
  },
  {
    id: "ninh-binh", nameZh: "宁平", nameEn: "Ninh Binh", country: "vietnam", tier: "notable", zone: "vn-north", admin1Zh: "宁平省", admin1En: "Ninh Binh",
    lon: 105.9744, lat: 20.2506,
    airport: { iata: "HAN", nameZh: "内排国际机场", nameEn: "Noi Bai International", lon: 105.8073, lat: 21.2212 },
    source: "宁平市中心 20.2506,105.9744；本地无商业机场，最近机场为河内内排国际机场（距市区直线约 109 km，按本条目坐标算）：公开资料",
  },

  // ── 越南 批2（2026-09-05）──
  {
    id: "haiphong", nameZh: "海防", nameEn: "Haiphong", country: "vietnam", tier: "major", zone: "vn-north", admin1Zh: "海防市", admin1En: "Hai Phong",
    lon: 106.6838, lat: 20.8651,
    airport: { iata: "HPH", nameZh: "吉碑国际机场", nameEn: "Cat Bi International", lon: 106.7247, lat: 20.8192 },
    source: "Haiphong 20.8651,106.6838（en.wikipedia）；HPH 机场：en.wikipedia（市区东南约 6 公里）；人口 4,664,124（2025，含 2025-07 并入的海阳省）",
  },
  {
    id: "dong-hoi", nameZh: "洞海", nameEn: "Dong Hoi", country: "vietnam", tier: "notable", zone: "vn-central", admin1Zh: "广治省", admin1En: "Quang Tri",
    lon: 106.6119, lat: 17.4556,
    airport: { iata: "VDH", nameZh: "洞海机场", nameEn: "Dong Hoi Airport", lon: 106.5906, lat: 17.5150 },
    source: "Dong Hoi 17.4556,106.6119（en.wikipedia）；VDH 机场：en.wikipedia（市区北约 6 公里，河内/胡志明市/芽庄航线）；2025-07 起原广平省并入广治省；风牙—己榜国家公园 2003 世界遗产、2025 与老挝欣南诺跨境扩展",
  },
  {
    id: "quy-nhon", nameZh: "归仁", nameEn: "Quy Nhon", country: "vietnam", tier: "notable", zone: "vn-central", admin1Zh: "嘉莱省", admin1En: "Gia Lai",
    lon: 109.2333, lat: 13.7667,
    airport: { iata: "UIH", nameZh: "符吉机场", nameEn: "Phu Cat Airport", lon: 109.0422, lat: 13.9550 },
    source: "Quy Nhon 13.7667,109.2333（en.wikipedia）；UIH 机场：en.wikipedia（市区西北约 30 公里，仅国内航线）；人口约 481,110（2022，改制前的原归仁市口径，平定省政府官网；此前写的 578,600／2024 查无可靠出处，2026-09-12 核）；2025-07 起原平定省并入嘉莱省",
  },
  {
    id: "phan-thiet", nameZh: "潘切（美奈）", nameEn: "Phan Thiet (Mui Ne)", country: "vietnam", tier: "notable", zone: "vn-south", admin1Zh: "林同省", admin1En: "Lam Dong",
    lon: 108.1036, lat: 10.9283,
    source: "Phan Thiet 10.9283,108.1036（en.wikipedia）；无运营中机场，最近为金兰 CXR（约 200 公里）、胡志明市 SGN（约 200 公里），条目不写机场字段；2025-07 起原平顺省并入林同省",
  },
  {
    id: "vung-tau", nameZh: "头顿", nameEn: "Vung Tau", country: "vietnam", tier: "notable", zone: "vn-south", admin1Zh: "胡志明市", admin1En: "Ho Chi Minh City",
    lon: 107.0700, lat: 10.3508,
    source: "Vung Tau 10.3508,107.0700（en.wikipedia）；无商业机场，最近为胡志明市 SGN（约 95 公里），条目不写机场字段；人口 117,413（2024-12，头顿坊口径）；2025-07 起原巴地头顿省并入胡志明市",
  },
  {
    id: "ha-giang", nameZh: "河江", nameEn: "Ha Giang", country: "vietnam", tier: "notable", zone: "vn-north", admin1Zh: "宣光省", admin1En: "Tuyen Quang",
    lon: 104.9836, lat: 22.8233,
    source: "Ha Giang city 22.8233,104.9836（en.wikipedia）；无机场，最近为河内内排（约 320 公里），条目不写机场字段，夜班大巴约 6 小时；2025-06 起原河江省并入宣光省；同文岩溶高原 UNESCO 世界地质公园",
  },
];
