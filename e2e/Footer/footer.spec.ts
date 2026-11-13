import { expect, test } from "@playwright/test";

test.describe("Footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("displays the logo and brand name", async ({ page }) => {
    const footer = page.getByRole("contentinfo");
    const logo = footer.locator("img").first();

    await expect(footer).toBeVisible();
    await expect(logo).toBeVisible();
    await expect
      .poll(() =>
        logo.evaluate(
          (image: HTMLImageElement) =>
            image.complete && image.naturalWidth > 0,
        ),
      )
      .toBe(true);
    await expect(footer.getByText("Fanny D&T", { exact: true })).toBeVisible();
  });

  test("links to the LinkedIn profile", async ({ page }) => {
    const linkedInLink = page
      .getByRole("contentinfo")
      .getByRole("link", { name: /Linkedin/i });

    await expect(linkedInLink).toBeVisible();
    await expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/fanny-dacheux-18692184/",
    );
  });

  test("navigates to the contact page", async ({ page }) => {
    const contactLink = page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Me contacter par mail" });

    await expect(contactLink).toBeVisible();
    await expect(contactLink).toHaveAttribute("href", "/contact");
    await contactLink.click();

    await expect(page).toHaveURL(/\/contact$/);
  });

  test("displays the copyright notice", async ({ page }) => {
    await expect(
      page
        .getByRole("contentinfo")
        .getByText("© 2026 Fanny D&T. Tous droits réservés.", {
          exact: true,
        }),
    ).toBeVisible();
  });
});
