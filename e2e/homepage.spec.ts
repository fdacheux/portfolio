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
  test("Hero section title", { tag: "@cta" }, async ({ page }) => {
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
  test("CTA : cv download btn", async ({ page }) => {
    const cta = page.locator("#cta");
    await expect(cta.getByRole("link").first()).toBeVisible();
    const downloadCvLink = cta.getByRole("link").first();
    await expect(downloadCvLink).toHaveText("Découvrir mon CV");
  });
  test("CTA : link to projects button", { tag: "@cta" }, async ({ page }) => {
    const cta = page.locator("#cta");
    await expect(cta.getByRole("link").last()).toBeVisible();
    const discoverProjectsLink = cta.getByRole("link").last();
    await expect(discoverProjectsLink).toHaveText("Découvrir mes projets");
    discoverProjectsLink.click();
    await expect(page).toHaveURL("/projects");
  });
  test("Carrousel section title", { tag: "@carrousel" }, async ({ page }) => {
    const carrouselSection = page.locator("#carrousel");
    await expect(carrouselSection.locator("h2")).toHaveText(
      "Derniers projets & parcours",
    );
  });
  test("Carrousel has link button", { tag: "@carrousel" }, async ({ page }) => {
    const carousel = page.locator("#carrousel");
    const link = carousel
      .locator('[aria-hidden="false"]')
      .getByRole("link", { name: "View More" });

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", "/CV");

    await link.click();

    await expect(page).toHaveURL(/\/CV$/);
    await expect(
      page.getByRole("heading", { name: "Curriculum Vitae" }),
    ).toBeVisible();
  });
  test(
    "Carrousel displays every project image",
    { tag: "@carrousel" },
    async ({ page }) => {
      const carousel = page.locator("#carrousel");
      const slideButtons = carousel.getByRole("button", {
        name: /^Go to slide \d+$/,
      });
      const slideCount = await slideButtons.count();

      expect(slideCount).toBeGreaterThan(0);

      for (let index = 0; index < slideCount; index += 1) {
        await slideButtons.nth(index).click();

        const image = carousel.locator('[aria-hidden="false"]').locator("img");
        await expect(image).toBeVisible();
        await expect
          .poll(() =>
            image.evaluate(
              (element: HTMLImageElement) =>
                element.complete && element.naturalWidth > 0,
            ),
          )
          .toBe(true);
      }
    },
  );
  test(
    "Carrousel controls change slides",
    { tag: "@carrousel" },
    async ({ page }) => {
      const carousel = page.locator("#carrousel");
      const activeSlide = carousel.locator('[aria-hidden="false"]');

      await carousel.hover();
      await expect(activeSlide.locator("h3")).toBeVisible();
      const carouselActiveSlideTitle = await activeSlide.locator("h3").textContent();

      await carousel.getByRole("button", { name: "Next slide" }).click();
      await expect(activeSlide.locator("h3")).not.toHaveText(
        carouselActiveSlideTitle!
      );

    },
  );
});
