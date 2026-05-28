# Terrain Visual Assets

此目录用于存放地貌视觉资源元数据。

## 架构说明

每个 JSON 文件对应一个地貌的视觉资源列表。

文件格式：
```json
{
  "terrainId": "tianshan",
  "images": [
    {
      "title": "天山卫星影像",
      "source": "NASA Earth Observatory",
      "url": "https://...",
      "credit": "NASA/GSFC/METI/ERSDAC/JAROS",
      "type": "satellite"
    }
  ]
}
```

## 支持的图片来源类型

- `satellite` — 卫星影像（NASA, Sentinel 等）
- `aerial` — 航拍摄影
- `airplane` — 舷窗视角摄影
- `documentary` — 纪录片素材

## 未来接入

当前为占位架构，未来可接入：
- NASA Earth Observatory
- Copernicus Sentinel
- 中国科学院遥感数据
- OpenStreetMap
- 官方地理数据源

注意：不得硬编码受版权保护的内容。
