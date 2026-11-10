import { test, expect } from "@playwright/test";

test.describe("Navigation bar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("navigation bar brand name", async ({ page }) => {
    const brandName = page.locator(".brand");
    await expect(brandName).toHaveText("FannyD&T");
  });
  test("navigation logo is clickable", async ({ page }) => {
    const logo = page.locator("a[href='/']");
    await expect(logo).toBeVisible();
    await logo.click();
    await expect(page).toHaveURL("/");
  });
  test("navbar has a CV link", async ({ page }) => {
    const cvLink = page.locator("a[href='/CV']");
    await expect(cvLink).toBeVisible();
    await cvLink.click();
    await expect(page).toHaveURL("/CV");
  });
});
