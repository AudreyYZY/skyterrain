import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // public/cesium is a vendored copy of the CesiumJS package (populated at
    // postinstall by scripts/copy-cesium.mjs), not our source. Without this,
    // `eslint` (no path args) tries to lint its multi-MB minified bundles and
    // reliably OOMs the default V8 heap — this is why `npm run lint` used to
    // crash instead of finishing.
    "public/cesium/**",
  ]),
]);

export default eslintConfig;
