import { test, expect } from "@playwright/test";

test.describe("Inventory page functionality", () => {
  test.beforeEach("login",  async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole('button', { name: 'Login'}).click();

    //assert url
    await expect(page).toHaveURL(/.*\/inventory/);
  });

  test("Run a Smoke test", {tag: "@smoke"}, async ({ page }) => {
    await page.getByRole('button', {name: "Add to cart"}).click()
  });
});



   