import { defineConfig, devices } from "@playwright/test";

/**
 * 浏览器端冒烟测试（npm run test:e2e）。
 *
 * - 默认先起一个生产构建的服务（需要先 `npm run build`），端口 3100；
 *   已经有服务在跑时设 `E2E_BASE_URL=http://localhost:3000` 直接连过去。
 * - 本机默认用已安装的 Google Chrome（`E2E_CHANNEL=chrome`），不必下载 Playwright 自带的浏览器；
 *   CI 里用 `npx playwright install chromium` 装的 Chromium（E2E_CHANNEL 留空）。
 * - 地球是 WebGL，无头模式下走软件渲染，慢但能跑；超时放宽到 3 分钟。
 */
const baseURL = process.env.E2E_BASE_URL ?? "http://localhost:3100";
const channel = process.env.E2E_CHANNEL ?? (process.env.CI ? undefined : "chrome");

export default defineConfig({
  testDir: "e2e",
  timeout: 420_000,
  expect: { timeout: 30_000 },
  fullyParallel: false,
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["list"]] : [["list"]],
  use: {
    ...devices["Desktop Chrome"],
    baseURL,
    viewport: { width: 1440, height: 900 },
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    ...(channel ? { channel } : {}),
    launchOptions: { args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--autoplay-policy=no-user-gesture-required"] },
  },
  webServer: process.env.E2E_BASE_URL
    ? undefined
    : {
        command: "npm run start -- -p 3100",
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
});
