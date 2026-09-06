/**
 * Node ESM 解析钩子 —— 让 scripts/*.ts 能直接 import 应用代码里的 lib 模块。
 *
 * 解决两件 `node --experimental-strip-types` 单独做不到的事：
 *   1. `@/` 路径别名：tsconfig 里 `@/*` → 项目根，webpack/Next 认，但 node 不读
 *      tsconfig paths。没有它，自检脚本只能 import「本身不带 @/ 导入」的模块，
 *      像 resolveLesson / travelGuideToSections 这种真正决定「播报文本长什么样」
 *      的入口反而碰不到，脚本只好复制一份逻辑，复制的那份迟早和线上漂移。
 *   2. JSON 导入属性：应用代码写的是 `import x from "@/data/x.json"`（打包器语法），
 *      node 要求显式 `with { type: "json" }`。这里在解析阶段补上，免得为了跑脚本
 *      去改一百多行业务导入。
 *
 * 用法：node --experimental-strip-types --import ./scripts/ts-alias-loader.mjs scripts/xxx.ts
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";

const ROOT = pathToFileURL(process.cwd() + "/").href;

register(
  "data:text/javascript," +
    encodeURIComponent(`
      const ROOT = ${JSON.stringify(ROOT)};

      const asJson = (result) =>
        result.url.endsWith(".json")
          ? { ...result, format: "json", importAttributes: { type: "json" } }
          : result;

      export async function resolve(specifier, context, nextResolve) {
        const ctx = specifier.endsWith(".json")
          ? { ...context, importAttributes: { type: "json" } }
          : context;

        if (specifier.startsWith("@/")) {
          const rest = specifier.slice(2);
          // 显式后缀直接用；否则按 .ts → .tsx → .js → 目录 index.ts 顺序试
          const candidates = /\\.(ts|tsx|js|mjs|json)$/.test(rest)
            ? [rest]
            : [rest + ".ts", rest + ".tsx", rest + ".js", rest + "/index.ts"];
          let lastErr;
          for (const c of candidates) {
            try {
              return asJson(await nextResolve(new URL(c, ROOT).href, ctx));
            } catch (err) {
              lastErr = err;
            }
          }
          throw lastErr;
        }
        return asJson(await nextResolve(specifier, ctx));
      }
    `),
  import.meta.url,
);
