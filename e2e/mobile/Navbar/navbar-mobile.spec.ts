
import { test, expect} from "@playwright/test";

test.describe("Navigation bar mobile", {tag: "@mobile"}, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("menu hamburger is visible", async ({ page }) => {
    const hamburgerButton =  page.locator('button[aria-label="Menu"]');
    await expect(hamburgerButton).toBeVisible();
    hamburgerButton.click();
    console.log("Hamburger menu button clicked");
  });
});