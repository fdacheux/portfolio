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
    test("navbar has a Projets link", async ({ page }) => {
    const projetsLink = page.locator("a[href='/projects']");
    await expect(projetsLink).toBeVisible();
    await projetsLink.click();
    await expect(page).toHaveURL("/projects");
  });
    test("navbar has a À propos du sitelink", async ({ page }) => {
    const aboutLink = page.locator("a[href='/about']");
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();
    await expect(page).toHaveURL("/about");
  });
      test("navbar has a Contact link", async ({ page }) => {
    const contactLink = page.locator("a[href='/contact']");
    await expect(contactLink).toBeVisible();
    await contactLink.click();
    await expect(page).toHaveURL("/contact");
  });
});
