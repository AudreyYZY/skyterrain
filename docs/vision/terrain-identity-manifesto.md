# Terrain Identity Manifesto

## What This Product Is

Flight Geography Explorer is a **documentary-style terrain exploration tool**.

It is NOT:
- A tourist map
- A GIS tool
- A Google Maps clone
- A flight simulator

It IS:
- A way to understand China's terrain from the air
- A documentary experience with narration
- A geographic knowledge system

## Core Belief

**Users are not exploring POIs. They are understanding landform structures.**

When a user opens the map, they should immediately perceive:
- "This is the Tianshan mountain range"
- "This is the Tarim Basin"
- "This is the Taklamakan Desert"

Not:
- "Here is a label"
- "Here is a button"
- "Here is a panel"

## Design Principles

### Region is the Hero

Every landform is a **Geographic Feature**, not a point on the map.

```
Feature = Region + Label + Boundary + Story
```

The user's brain understands:
- "This whole area is Tianshan"
- "This whole area is the Tarim Basin"

Not:
- "This point says Tianshan"
- "This line marks the basin"

### Label is a Property

Labels are **attributes of Features**, not independent UI elements.

```
Feature
├── Geometry (what it looks like)
├── Label (what it's called)
├── Interaction (how it responds)
└── Story (what it tells you)
```

Labels follow the terrain, not the screen.

### Geometry Must Be Real

Every boundary, every ridge line, every polygon must come from **authoritative GIS data**.

Hand-drawn geometry is for prototyping only.

Production requires:
- Natural Earth
- HydroLAKES
- OpenStreetMap
- Or verified QGIS extraction

### Hover is Recognition, Not Selection

When the user hovers over a region:
- The region is **recognized**, not selected
- The terrain **comes alive**, not a UI element lights up
- The user feels "the map knows this is Tianshan"

Not:
- "I clicked a button"
- "A line appeared"
- "A label got brighter"

### 3-Second Cognition

The user must understand Xinjiang's spatial structure within 3 seconds:

```
Three mountain ranges (Tianshan, Kunlun, Altai)
Two basins (Junggar, Tarim)
One plateau (Pamir)
```

Without clicking, hovering, or opening any panel.

## The Terrain Identity System

```
Level 1: Skeleton (Xinjiang Scale)
  Tianshan, Kunlun, Altai, Pamir, Junggar Basin, Tarim Basin

Level 2: Regional Features (Regional Scale)
  Taklamakan Desert, Turpan Basin, Sayram Lake

Level 3: Specific Locations (Explore Scale)
  Bosten Lake, Tianchi, Kanas Lake, Bogda Peak, Muztagh Ata, Flaming Mountains
```

## What We Learned

1. **Labels alone don't create spatial cognition** — users need to see regions, not just names
2. **Hand-drawn geometry breaks trust** — users notice when boundaries don't match satellite imagery
3. **Hover target must be Region, not Label** — the whole area should respond, not just a point
4. **Visual effects on wrong geometry are wasted** — Glow/Shader/Fade don't fix incorrect boundaries
5. **GIS data is the foundation** — everything else (Hover, Story, Camera) depends on real geometry

## The Path Forward

```
Phase 1C: Real GIS Geometry (current)
  → Verify Natural Earth data for Tianshan + Junggar Basin
  → Replace hand-drawn geometry
  → Validate with Debug Geometry

Phase 2: Terrain Identity Layer
  → Region outlines visible without hover
  → Labels follow terrain
  → LOD switching

Phase 3: Region Interaction
  → Hover → Region recognized
  → Focus → Region highlighted
  → Select → Flight + Narration

Phase 4: Story Layer
  → Camera paths
  → Narration sync
  → Knowledge cards
```

## For Future Developers

If you're joining this project, remember:

1. **Read the ADRs first** — they contain critical architectural decisions
2. **Never use hand-drawn geometry in Production** — always verify against satellite imagery
3. **Region is the hero** — Labels, Boundaries, and Stories serve the Region
4. **Test with Debug Geometry** — `debugCesium.debugGeometry("feature-id")` before any visual work
5. **The map must speak for itself** — users should understand the terrain without clicking anything
