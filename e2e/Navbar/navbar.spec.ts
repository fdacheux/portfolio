import { test, expect } from "@playwright/test";

test.describe("Navigation bar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("navigation bar", async ({ page }) => {
    const navbar = page.locator("nav");
    await expect(navbar).toHaveText("Navbar");
  });
});
