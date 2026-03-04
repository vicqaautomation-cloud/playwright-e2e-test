import { test, expect } from "@playwright/test";

test.describe("Login functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByText("Please login to make")).toBeVisible();
  });

  test("should login successfully with valid credentials", async ({ page }) => {

    // Login with valid credentials
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    // Assert a text
    await expect(page.locator("h2")).toContainText("Make Appointment");

  });

  test("should fail login with invalid credentials", async ({ page }) => {
    // Login with invalid credentials
    await page.getByLabel("Username").fill("John ");
    await page.getByLabel("Password").fill("ThisIsNotAPasswordd");
    await page.getByRole("button", { name: "Login" }).click();

    // Assert a text
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid.",
    );
  });
});
