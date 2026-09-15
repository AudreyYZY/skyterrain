/**
 * 冒烟测试：学习模式讲解、旅游模式攻略、中英切换、航线飞行 × 解说同步。
 *
 * 语音一律 mock（/api/tts 返回一段 90 秒静音 mp3（与真实解说长度同量级，太短会让镜头时钟按比例加速））：测试不依赖 Edge TTS 这个非官方接口能不能连上，
 * 也能人为制造「合成要等几秒」来验证镜头会等解说开口（lib/cesium/narration-clock.ts）。
 */
import { readFileSync } from "node:fs";
import { expect, test, type Page } from "@playwright/test";

const SILENCE_B64 = readFileSync("e2e/fixtures/silence-90s.mp3").toString("base64");

async function mockTts(page: Page, delayMs = 0): Promise<void> {
  await page.route("**/api/tts", async (route) => {
    if (delayMs) await new Promise((r) => setTimeout(r, delayMs));
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ audio: SILENCE_B64, wordBoundaries: [] }),
    });
  });
}

function collectErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
  page.on("console", (m) => {
    if (m.type() === "error" && !/Failed to load resource|WebGL|GPU stall|ion\.cesium/i.test(m.text())) {
      errors.push(`console.error: ${m.text()}`);
    }
  });
  return errors;
}

async function enter(page: Page, region: string): Promise<void> {
  await page.goto("/");
  await page.getByTestId("intro-enter").click();
  await page.getByTestId("region-toggle").click();
  await page.getByTestId(`region-${region}`).click();
}

async function searchRail(page: Page, query: string): Promise<void> {
  await page.getByTestId("rail-toggle").click();
  await page.getByTestId("rail-search").fill(query);
  await page.getByTestId("rail-result").first().click();
}

test("学习模式：打开爱沙尼亚地形只下载该国的讲解，中英切换正常", async ({ page }) => {
  const errors = collectErrors(page);
  await mockTts(page);
  const contentBodies: string[] = [];
  page.on("response", async (res) => {
    if (res.request().resourceType() === "script" && res.ok()) {
      const body = await res.text().catch(() => "");
      if (body.includes("萨列马岛") || body.includes("TERRAIN_ZH")) contentBodies.push(body);
    }
  });

  await enter(page, "europe");
  await searchRail(page, "萨列马");
  // 点地形会自动开始讲解，面板直接是文章态
  await expect(page.getByTestId("reading-title")).toHaveText("萨列马岛");
  await expect(page.getByTestId("reading-article")).toContainText("面积约2673平方公里");

  // 按国家懒加载：下载到的讲解里有萨列马岛，但不应该带上别国（秦岭 = 中国、富士山 = 日本）
  await expect.poll(() => contentBodies.some((b) => b.includes("萨列马岛是爱沙尼亚最大的岛屿"))).toBe(true);
  const withSaaremaa = contentBodies.filter((b) => b.includes("萨列马岛是爱沙尼亚最大的岛屿"));
  for (const b of withSaaremaa) {
    expect(b.includes("秦岭"), "爱沙尼亚讲解的 chunk 里不该有中国的条目").toBe(false);
  }

  await page.getByTestId("language-toggle").click();
  await expect(page.getByTestId("reading-title")).toHaveText("Saaremaa");
  await expect(page.getByTestId("reading-article")).toContainText("2,673");

  expect(errors).toEqual([]);
});

test("旅游模式：库雷萨雷攻略加载、七段内容里有 howItWorks", async ({ page }) => {
  const errors = collectErrors(page);
  await mockTts(page);
  await enter(page, "europe");
  await page.getByTestId("mode-travel").click();
  await searchRail(page, "库雷萨雷");
  // 点城市会自动开始播报 → 面板展开成文章态
  const article = page.getByTestId("reading-article");
  await expect(article).toBeVisible();
  await expect(article).toContainText("萨列马乡");
  await expect(article).toContainText("这座城怎么运转");
  // 播报中切英文：正文要跟着换（原来只有标题换、正文与播报停在中文）
  await page.getByTestId("language-toggle").click();
  await expect(article).toContainText("Saaremaa Parish");
  expect(errors).toEqual([]);
});

test("航线：合成慢的时候镜头在起飞位等解说开口，然后才飞到第一个地形", async ({ page }) => {
  const errors = collectErrors(page);
  // 合成延迟 8 秒：修复前镜头会先飞走，解说开口时画面已经过了第一个航点
  await mockTts(page, 8000);
  await enter(page, "europe");
  await page.getByTestId("journey-toggle").click();
  await page.getByTestId("journey-search").fill("库雷萨雷");
  await page.getByTestId("route-card-tll-ure").click();
  await page.getByTestId("journey-start").click();

  const flyover = page.getByTestId("flyover-name");
  // 无头模式软件渲染，航线准备（采样地表高程、摆镜头）可能要一两分钟
  await expect(flyover).toContainText("塔林", { timeout: 180_000 });
  // 「从塔林起飞」出现后，起飞前停顿 2.2 秒 + 解说 mock 合成 8 秒才开口；排镜表里第一个地形航点
  // 在解说第 2 句（开口后约 12 秒）。修复前镜头时钟从停顿结束就走，约 14 秒后就跳到下一个航点；
  // 修复后要等开口，约 22 秒后才到。在 16 秒处断言还没到 —— 这一步能区分修复前后。
  await page.waitForTimeout(16_000);
  await expect(flyover).toContainText("塔林");
  // 开口之后才飞到第一个地形航点
  await expect(flyover).toContainText("西爱沙尼亚低地", { timeout: 120_000 });
  await expect(page.getByTestId("route-panel")).toContainText("塔林飞库雷萨雷");

  await page.getByTestId("journey-start").click(); // 停止
  expect(errors).toEqual([]);
});
