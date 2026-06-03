/**
 * Postinstall script to fix octal escape sequences in Cesium's precompiled bundles.
 *
 * Cesium's Build/Cesium/ precompiled bundles contain \0 (octal null)
 * inside template literals from @spz-loader/core's WASM binary loader.
 * This is invalid in strict mode JavaScript (template literals don't allow octal escapes).
 *
 * This script replaces \0 with \x00 in the precompiled bundles.
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");

const filesToPatch = [
  "node_modules/cesium/Build/Cesium/index.cjs",
  "node_modules/cesium/Build/Cesium/index.js",
  "node_modules/cesium/Build/Cesium/Cesium.js",
];

let totalFixed = 0;

for (const relPath of filesToPatch) {
  const filePath = join(projectRoot, relPath);

  if (!existsSync(filePath)) {
    continue;
  }

  const content = readFileSync(filePath, "utf8");
  const parts = content.split("\\0");

  if (parts.length > 1) {
    const fixed = parts.join("\\x00");
    writeFileSync(filePath, fixed, "utf8");
    console.log(`[patch-cesium-octal] Fixed ${parts.length - 1} octal escapes in: ${relPath}`);
    totalFixed += parts.length - 1;
  }
}

if (totalFixed > 0) {
  console.log(`[patch-cesium-octal] Total: ${totalFixed} octal escapes fixed`);
} else {
  console.log("[patch-cesium-octal] No octal escapes found — files already patched");
}
