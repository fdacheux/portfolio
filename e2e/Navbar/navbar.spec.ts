import { test, expect } from "@playwright/test";

test.describe("Navigation bar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("navigation bar content", async ({ page }) => {
    const brandName = page.locator(".brand");
    await expect(brandName).toHaveText("FannyD&T");
  });
  test("navigation logo is clickable", async ({ page }) => {
    const logo = page.locator("a[href='/']");
    await expect(logo).toBeVisible();
    await logo.click();
    await expect(page).toHaveURL("/");
  });   
});
