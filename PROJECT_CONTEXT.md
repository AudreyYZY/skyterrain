# ⚠️ DEPRECATED

**This file is deprecated and no longer maintained.**

For current project documentation, see:
- [CLAUDE.md](./CLAUDE.md) — Project instructions
- [PROJECT_MEMORY.md](./PROJECT_MEMORY.md) — Architecture and current state
- [CHANGELOG.md](./CHANGELOG.md) — Change history

---

# PROJECT_CONTEXT.md (Historical)

# Project Overview

This project is an AI-assisted flight geography education web application focused on Xinjiang terrain exploration from an airplane passenger perspective.

Users can:

* Select terrain regions and flight sightseeing routes
* Watch terrain transitions on a Cesium 3D globe
* Experience realistic airplane-style camera movement
* Listen to Chinese AI-generated geography explanations
* Learn terrain formation, regional history, aviation geography, and culture interactively

The goal is NOT to create a GIS dashboard or flight simulator.

The goal is to create:

* a calm airplane sightseeing experience
* a cinematic geography documentary
* an educational terrain exploration tool

The experience should feel similar to:

* looking out of a real airplane window
* watching a slow-paced geography documentary
* learning terrain visually during flight

---

# Core Product Identity

This app is:

* Educational
* Geographic
* Cinematic
* Calm
* Slow-paced
* Documentary-inspired

This app is NOT:

* A flight simulator
* A military flight system
* A game
* A GIS engineering dashboard
* A chaotic animated experience

The primary value is:

* understanding terrain from airplane views
* learning geography visually
* terrain storytelling
* aviation sightseeing education

---

# Educational Direction

Narration and UI should prioritize:

1. Geographic understanding
2. Terrain recognition
3. Historical context
4. Aviation sightseeing relevance
5. Easy comprehension for normal users

Users should immediately understand:

* what they are seeing
* where they are
* why the terrain looks this way
* why the region matters historically

Avoid:

* overly poetic writing
* excessive cinematic metaphors
* vague descriptions
* abstract literary narration

The narration should feel like:

* a geography teacher
* an intelligent flight guide
* a documentary educator

NOT like:

* a fantasy narrator
* a novelist
* a poetic monologue

---

# Language Requirements

IMPORTANT:

All visible narration shown in the web app MUST be written in Simplified Chinese.

All generated explanations should be:

* clear
* educational
* easy to understand
* concise but informative

The website UI itself should also remain Chinese-first.

English may exist internally in code/comments only.

---

# Narration Structure

Every generated terrain explanation should follow this structure:

1. Current visible geography
2. Terrain formation explanation
3. Historical / cultural significance
4. Aviation sightseeing note

Example structure:

Current visible geography:
"你正在飞越天山北麓。窗外可以看到平行山脊、山前冲积扇以及绿洲农业带。"

Terrain formation:
"这些山脉由板块碰撞形成，长期冰川侵蚀与河流切割形成今天看到的峡谷与纹理。"

Historical significance:
"古代丝绸之路曾沿山前绿洲分布，乌鲁木齐等城市依赖冰雪融水发展。"

Aviation sightseeing note:
"飞机左侧通常能更清楚看到主山脉与积雪区域。"

Avoid vague cinematic prose.

Narration should prioritize education first.

---

# Flight Camera Design

Camera behavior should simulate:

* commercial airline cruising altitude
* passenger side-window perspective
* stable cinematic motion
* gradual movement
* calm transitions

Preferred camera behavior:

* altitude: 10km–12km equivalent viewing feel
* slight downward pitch
* long terrain visibility
* slow flyover transitions
* stable movement

Avoid:

* fast zooming
* spinning camera
* aggressive rotations
* dramatic game-like motion
* rapid flyTo jumps

The user should feel:

"I am quietly looking outside an airplane window."

---

# Current Features

Implemented:

* Terrain cards
* Terrain lessons
* Terrain flyover animation
* Cesium terrain rendering
* AI-assisted geography explanation
* Voice playback
* Voice selector UI
* Terrain glance cards
* Photo mode
* Chinese terrain explanations

---

# Current Problems

## 1. Terrain Rendering Is Too Slow

### Problem

* Cesium terrain loads slowly
* Terrain detail appears too late
* Users wait too long before terrain becomes visible

### Desired Fix

* Preload nearby terrain tiles
* Reduce unnecessary rerenders
* Improve flyTo performance
* Optimize terrain LOD
* Add loading states if needed
* Improve Cesium rendering performance overall

### Performance Philosophy

Prefer:

* smooth rendering
* stable experience
* cinematic pacing

Over:

* maximum terrain detail
* excessive terrain precision

Progressive terrain loading is acceptable.

---

## 2. Narration Timing Feels Unrealistic

### Problem

* Narration changes too quickly
* Next terrain begins before narration finishes
* Flight pacing feels unnatural

### Desired Behavior

* Wait for narration completion before moving
* Synchronize narration with flight movement
* Add realistic delays between flyovers
* Use async narration queue
* Slow down pacing significantly

Preferred flow:

```ts
await speakText(...)
await wait(...)
await flyToNext(...)
```

Avoid simultaneous triggering of:

* narration
* camera movement
* next waypoint

The experience should feel calm and realistic.

---

## 3. Map Synchronization Is Broken

### Problem

* Selecting terrain no longer updates camera correctly
* Camera and narration become unsynchronized

### Expected Behavior

* Camera smoothly flies to selected terrain
* Narration starts after camera settles
* Terrain highlight remains synchronized
* Camera motion stays stable and cinematic

---

## 4. Voice Quality Feels Robotic

### Current Issue

Browser TTS sounds robotic and unnatural.

### Desired Improvement

Support higher quality Chinese narration voices.

Possible future integrations:

* ElevenLabs
* OpenAI TTS
* Azure Neural Voice
* Edge Neural Voices

Preferred voice style:

* calm
* documentary-like
* warm Mandarin narration
* natural pacing

---

## 5. Narration Must Not Use Emojis

### Requirement

* Remove all emojis
* Maintain professional documentary tone
* Keep narration clean and educational

---

# Existing Important Components

Current components/files include:

* TerrainGlanceCards
* VoiceSelector
* PhotoModePanel
* Terrain lesson system
* speak()
* speakText()
* mapRef.current?.flyToTerrain()

---

# Current Known Code Issues

## Duplicate Imports

Current duplicated imports exist:

```ts
import { useCallback, useRef, useState } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
```

These need cleanup.

---

## Voice System Migration

Current migration status:

Old system:

* speak()

New system:

* speakText()

Some components still use old references.

Need:

* unified speech API
* consistent speech handling
* async-compatible narration flow

---

# Important Development Constraints

CRITICAL:

Do NOT rewrite the entire Cesium architecture.

Do NOT replace the current terrain system.

Do NOT redesign the entire UI unnecessarily.

Prefer:

* incremental improvements
* focused fixes
* stable architecture evolution

Preserve:

* existing Cesium integration
* current terrain systems
* TypeScript type safety
* current UI style

---

# Priority Order

Highest priority:

1. Fix narration pacing
2. Fix map synchronization
3. Improve educational narration quality
4. Improve Cesium performance
5. Upgrade voice quality
6. Cleanup code structure

---

# Desired Final Experience

The final app should feel like:

* an intelligent airplane sightseeing window
* a calm geography documentary
* a visual terrain learning experience
* a realistic in-flight exploration system

Users should feel:

"I understand what I am seeing outside the airplane window."

instead of:

"I am watching a generic map demo."
