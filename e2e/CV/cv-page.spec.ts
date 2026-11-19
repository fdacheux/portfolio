import { test, expect } from "@playwright/test";

test.describe("CV", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/CV");
  });
  test("heading", async ({ page }) => {
    const pageMainTitle = page.getByRole("heading").first();
    await expect(pageMainTitle).toHaveText("Fanny Dacheux");
    const pageSubtitle = page.getByRole("heading").nth(1);
    await expect(pageSubtitle).toHaveText(
      "Testeuse QA / Automaticienne de tests",
    );
    const additionnalTitle = page.getByRole("heading").nth(2);
    await expect(additionnalTitle).toHaveText(
      "Également ouverte aux postes de Développeuse Web & Ingénieure Pédagogique Digital",
    );
  });
  test("Availibility and type of job badge", async ({ page }) => {
    const heroSection = page.locator(".hero");
    await expect(heroSection.locator(".badge")).toHaveText(
      "Disponible — Temps partiel (50% à 80%) · Hybride / Full Remote",
    );
  });
  test("Key indicators pills", async ({ page }) => {
    const istqbPill = page.locator(".pill").first();
    const locationPill = page.locator(".pill").nth(1);
    const licensePill = page.locator(".pill").nth(2);
    await expect(istqbPill).toHaveText("Certifiée ISTQB CTFL v4.0");
    await expect(locationPill).toHaveText("Lattes / Montpellier & Remote");
    await expect(licensePill).toHaveText("Permis B · Véhicule personnel");
  });
  test("CTA buttons", async ({ page }) => {
    const heroSection = page.locator(".hero");
    const downloadCvBtn = heroSection.getByRole("button").first();
    const contactBtn = heroSection.getByRole("button").last();
    await expect(downloadCvBtn).toBeVisible();
    await expect(downloadCvBtn).toHaveText("Télécharger mon CV (PDF)");
    await expect(contactBtn).toBeVisible();
    await expect(contactBtn).toHaveText("Me contacter")
  });
});
