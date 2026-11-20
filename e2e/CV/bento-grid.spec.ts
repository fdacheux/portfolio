import { test, expect } from "@playwright/test";

test.describe("Bento grid", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/CV");
  });
  test("Job experiences bento", async ({ page }) => {
    const bentoGrid = page.locator(".grid");
    await expect(
      bentoGrid.locator(".bento").first().getByRole("heading"),
    ).toHaveText("Expériences Professionnelles");
  });
});
