import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Fanny D&T - Portfolio/);
});

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("Hero section", async ({ page }) => {
    const heroSectionTitle = page.locator("h1");
    await expect(heroSectionTitle).toHaveText(
      "Testeuse QA /Automaticienne de tests",
    );
  });
});
