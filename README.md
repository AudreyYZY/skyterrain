# Flight Geography Explorer

飞机视角地理探索平台 MVP — 通过 CesiumJS 三维地球、飞行镜头与 MiMo AI 解说，以乘客舷窗视角了解中国西北地貌。

## 功能

- 三维地球浏览（新疆区域初始视角）
- **五类折叠导航**：山脉 / 湖泊 / 沙漠 / 盆地 / 河谷（13 处新疆地貌）
- **沿航线飞行**：乌鲁木齐 → 天山 → 赛里木湖 → 伊犁河谷，经过即自动解说
- **舷窗照片模式**：上传窗外照片，AI 推测地貌与特征
- `viewer.camera.flyTo` 平滑镜头动画
- 基于 `data/*.json` 知识库的 AI 解说（`/api/narration`）
- 浏览器 TTS 语音播报
- Apple Maps × National Geographic 风格 UI

## 技术栈

- Next.js 16 (App Router) + TypeScript
- CesiumJS
- Tailwind CSS v4
- OpenAI SDK（兼容 MiMo API）

## 快速开始

```bash
cd flight-geography-explorer
cp .env.example .env.local
# 编辑 .env.local，填入 MIMO_API_KEY 与 MIMO_BASE_URL

npm install
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。

### 环境变量

| 变量 | 必填 | 说明 |
|------|------|------|
| `MIMO_API_KEY` | 是 | MiMo / OpenAI 兼容 API Key |
| `MIMO_BASE_URL` | 是 | API Base URL |
| `MIMO_MODEL` | 否 | 模型名称，默认 `gpt-4o-mini` |
| `NEXT_PUBLIC_CESIUM_ION_TOKEN` | 强烈建议 | [Cesium Ion](https://ion.cesium.com/tokens) 免费 Token；未配置时地图为**平坦椭球体**，天山等山地无法呈现起伏 |

## 项目结构

```text
flight-geography-explorer/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── api/narration/route.ts
├── components/
│   ├── CesiumMap.tsx
│   ├── ExplorerApp.tsx
│   ├── FlightControls.tsx
│   └── NarrationPanel.tsx
├── data/                   # 15 个新疆地貌 JSON（每点一文件）
│   ├── tianshan.json
│   ├── altai.json
│   └── …
├── lib/
│   ├── mimo.ts
│   └── terrain.ts
├── types/
│   └── terrain.ts
├── scripts/
│   └── copy-cesium.mjs
└── public/cesium/          # postinstall 自动生成
```

## 部署（Vercel）

1. 推送至 GitHub
2. 在 Vercel 导入项目
3. 配置环境变量 `MIMO_API_KEY`、`MIMO_BASE_URL`
4. 可选：`NEXT_PUBLIC_CESIUM_ION_TOKEN`

## 许可证

MIT
