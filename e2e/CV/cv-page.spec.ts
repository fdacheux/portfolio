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
    const downloadCvLink = heroSection.getByRole("link").first();
    const contactBtn = heroSection.getByRole("button").last();

    await expect(downloadCvLink).toBeVisible();
    await expect(downloadCvLink).toHaveText("Télécharger mon CV (PDF)");
    await expect(downloadCvLink).toHaveAttribute("target", "_blank");

    // 2. Écouter l'ouverture du nouvel onglet AVANT le clic
    const popupPromise = page.waitForEvent("popup");
    await downloadCvLink.click();
    const newTab = await popupPromise;

    // 3. Vérifier que l'URL du nouvel onglet pointe bien vers le PDF
    await expect(newTab).toHaveURL(/\/(assets\/CV-Fanny-Dacheux\.pdf|api\/pdf)/);

    await expect(contactBtn).toBeVisible();
    await expect(contactBtn).toHaveText("Me contacter");

    await contactBtn.click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await dialog.locator("> div").click({ position: { x: 0, y: 0 } });
    await expect(dialog).not.toBeVisible();
  });
  test("Job filters", async ({page}) => {
    const filtersBox = page.locator(".filters-box");
    await expect(filtersBox.locator(".filters-box_label")).toHaveText("Adapter l'affichage selon le poste recherché :");
    await expect(filtersBox.getByRole("button")).toHaveCount(4);
    await expect(filtersBox.getByRole("button").first()).toHaveText("Tous les profils")
    await expect(filtersBox.getByRole("button").nth(1)).toHaveText("QA & Tests")
    await expect(filtersBox.getByRole("button").nth(2)).toHaveText("Développement Web")
    await expect(filtersBox.getByRole("button").last()).toHaveText("Pédagogie & Digital")

    const allProfilesButton = filtersBox.getByRole("button", { name: "Tous les profils" });
    const qaButton = filtersBox.getByRole("button", { name: "QA & Tests" });
    await expect(allProfilesButton).toHaveClass(/filter-btn_active/);
    await expect(qaButton).not.toHaveClass(/filter-btn_active/);

    await qaButton.click();
    await expect(qaButton).toHaveClass(/filter-btn_active/);
    await expect(allProfilesButton).not.toHaveClass(/filter-btn_active/);
  })
  test("bento grid", async({page}) => {
    const bentoGrid = page.getByRole("grid");
    await expect(bentoGrid.getByRole("region")).toHaveCount(5);
  })
});
