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
  test("Hero section title", {tag: "@cta"}, async ({ page }) => {
    const heroSection = page.locator("#hero");
    const heroSectionTitle = page.locator("h1");
    await expect(heroSectionTitle).toHaveText(
      "Testeuse QA /Automaticienne de tests",
    );
    await expect(heroSection.locator("h2")).toHaveText(
      "Développeuse | Ingénieure Pédagogique Digital",
    );
    await expect(heroSection.locator(".tag")).toHaveText(
      "Temps partiel & Hybride",
    );
  });
  test("CTA : cv download btn", async ({page}) => {
    const cta = page.locator("#cta")
    await expect(cta.getByRole("link").first()).toBeVisible();
    const downloadCvLink = cta.getByRole("link").first();
    await expect(downloadCvLink).toHaveText("Découvrir mon CV");
  })
  test("CTA : link to projects button", {tag: "@cta"}, async ({ page }) => {
    const cta = page.locator("#cta")
    await expect(cta.getByRole("link").last()).toBeVisible();
    const discoverProjectsLink = cta.getByRole("link").last();
    await expect(discoverProjectsLink).toHaveText("Découvrir mes projets");
    discoverProjectsLink.click();
    await expect(page).toHaveURL("/projects");
  })
  test("Carrousel section title", {tag: "@carrousel"}, async({page}) => {
    const carrouselSection = page.locator("#carrousel");
    await expect(carrouselSection.locator("h2")).toHaveText("Derniers projets & parcours");
  })
});
