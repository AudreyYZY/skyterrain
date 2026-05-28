import { cpSync, existsSync, mkdirSync, rmSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const cesiumPkg = require.resolve("cesium/package.json");
const cesiumRoot = dirname(cesiumPkg);
const source = join(cesiumRoot, "Build", "Cesium");
const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const target = join(projectRoot, "public", "cesium");

if (!existsSync(source)) {
  console.error("Cesium Build 目录不存在:", source);
  process.exit(1);
}

if (existsSync(target)) {
  rmSync(target, { recursive: true, force: true });
}

mkdirSync(join(projectRoot, "public"), { recursive: true });
cpSync(source, target, { recursive: true });
console.log("已复制 Cesium 资源到 public/cesium");
