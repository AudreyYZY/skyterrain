# Flight Geography Explorer

Aerial terrain exploration system for China — explore China's magnificent landscapes from an airplane window perspective, combining 3D globe, flight camera, and voice narration.

## Features

- **3D Globe**: CesiumJS global terrain + Bing Maps satellite imagery
- **Terrain Exploration**: 32 Xinjiang terrains + 15 national core landforms
- **Flight Camera**: Auto-fly to target terrain, simulating airplane window view
- **Voice Narration**: Edge TTS Chinese/English narration with sentence-by-sentence highlighting
- **Terrain Labels**: Google Earth style, following mountain ridges, LOD-based
- **Terrain Boundaries**: Natural Earth GIS data, real geographic boundaries
- **Route Flight**: Automatic route narration with terrain waypoints
- **Bilingual**: One-click Chinese/English switch, voice syncs automatically

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- CesiumJS 1.141 (3D Globe)
- Tailwind CSS v4
- Edge TTS (edge-tts-universal)

## Quick Start

```bash
npm install
cp .env.example .env.local
# Edit .env.local, add Cesium Ion Token

npm run dev
```

Open http://localhost:3000 in browser.

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_CESIUM_ION_TOKEN` | Yes | Cesium Ion Token |

## Project Structure

```
app/
  api/tts/route.ts          — Edge TTS API
  globals.css               — Styles
  page.tsx                  — Entry point

components/
  CesiumMap.tsx             — 3D globe + flight system
  CesiumOverlayLabels.tsx   — Terrain labels
  ExplorerApp.tsx           — Main orchestrator
  FlightControls.tsx        — Sidebar
  NarrationPanel.tsx        — Info panel
  StructuredLesson.tsx      — Lesson content

features/
  china-core-features.ts    — 15 national core terrains
  xinjiang-core-features.ts — 8 Xinjiang core terrains
  types.ts                  — GeographicFeature types

terrain-dataset/
  schema/                   — Data model schemas

lib/
  i18n.ts                   — Internationalization (zh-CN / en-US)
  i18n-stories.ts           — Terrain story translations
  speech.ts                 — TTS system
  terrain.ts                — Terrain registry
  cinematic-labels.ts       — Label manager

data/
  *.json                    — Xinjiang terrain data (32 locations)
  gis/exports/              — GIS boundary data
```

## Data Model

```
TerrainEntity      — Geographic object (facts layer)
GeometryRecord     — GIS geometry layer
FeatureOfInterest  — What users actually explore
Story              — Documentary content
KnowledgeLink      — Knowledge graph
ProvenanceRecord   — Data source tracking
```

## Architecture Decisions

See `docs/architecture-decisions/`

- ADR-001: Region First, Label Second
- ADR-002: Geographic Feature Model
- ADR-003: Real GIS Geometry Only
- ADR-004: Terrain Identity Layer
- ADR-005: GIS Source of Truth
- ADR-006: Separate Geometry Sources
- ADR-007: Trust Before Beauty

## Data Sources

| Data | Source |
|------|--------|
| Terrain boundaries | Natural Earth 10m Physical Vectors |
| Lake boundaries | HydroLAKES |
| Place names | GeoNames |
| Satellite imagery | Bing Maps (Cesium Ion) |
| Terrain elevation | Cesium World Terrain |

## License

MIT License
