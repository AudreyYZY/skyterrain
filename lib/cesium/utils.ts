/**
 * CesiumMap 通用工具函数 —— 与 React/组件状态无关的纯函数。
 * 从 components/CesiumMap.tsx 抽出（2026-09 技术债清理，行为不变，仅搬家）。
 */

export function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

/** 四次缓出 — 更平滑的减速曲线，模拟重力感 */
export function quarticEaseOut(t: number): number {
  return 1 - (1 - t) ** 4;
}

/** 地表高度缓存的 key */
export function heightCacheKey(lon: number, lat: number): string {
  return `${lat.toFixed(3)},${lon.toFixed(3)}`;
}

/**
 * 等待地形/影像瓦片收敛
 * 每帧检查 viewer.scene.globe.tilesLoaded 状态
 * tilesLoaded=true 持续 stableMs 毫秒才算完成
 * 超时 timeoutMs 毫秒强制继续
 */
export function waitForTilesSettled(
  viewer: import("cesium").Viewer,
  stableMs: number = 1000,
  timeoutMs: number = 8000
): Promise<void> {
  return new Promise((resolve) => {
    if (viewer.isDestroyed()) { resolve(); return; }

    const start = Date.now();
    let loadedSince = 0;

    const tick = () => {
      if (viewer.isDestroyed()) { resolve(); return; }

      const tilesLoaded = viewer.scene.globe.tilesLoaded;

      if (tilesLoaded) {
        if (loadedSince === 0) loadedSince = Date.now();
        if (Date.now() - loadedSince >= stableMs) {
          resolve();
          return;
        }
      } else {
        loadedSince = 0;
      }

      if (Date.now() - start > timeoutMs) {
        resolve();
        return;
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
}
