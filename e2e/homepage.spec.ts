import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Fanny D&T - Portfolio/);
  await expect(page.locator('h1')).toHaveText(/portfolio/);
});


