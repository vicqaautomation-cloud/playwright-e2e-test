import { test, expect } from "@playwright/test";

test.describe(
  "Make appointment functionality",
  {
    annotation: {
      type: "Story",
      description: "JIRA-1384 Make an Appointment Feature",
    },
  },
  () => {
    test.beforeEach(async ({ page }, testInfo) => {
      await page.goto("https://katalon-demo-cura.herokuapp.com/");
      await page.getByRole("link", { name: "Make Appointment" }).click();
      await page.getByLabel("Username").fill("John Doe");
      await page.getByLabel("Password").fill("ThisIsNotAPassword");
      await page.getByRole("button", { name: "Login" }).click();

      // Assert a text
      await expect(page.locator("h2")).toContainText("Make Appointment");

      /**
       * Add custom screenshot at test scope level
       * @TODO as helper function so we can avoid repeating code.
       */
      let fullPageSC = await page.screenshot({ fullPage: true });
      await testInfo.attach("Login page", {
        body: fullPageSC,
        contentType: "image/png",
      });
    });

    test("Make an appointment", async ({ page }) => {
      await expect(page.locator("h2")).toContainText("Make Appointment");
      await page
        .getByLabel("Facility")
        .selectOption("Seoul CURA Healthcare Center");
      await page
        .getByRole("checkbox", { name: "Apply for hospital readmission" })
        .check();
      await page.getByRole("radio", { name: "Medicare" }).check();
      await page.locator("span").click();
      await page.getByRole("columnheader", { name: "»" }).click();
      await page.getByRole("columnheader", { name: "»" }).dblclick();
      await page.getByRole("cell", { name: "18" }).click();
      await page.getByRole("textbox", { name: "Comment" }).click();
      await page
        .getByRole("textbox", { name: "Comment" })
        .fill("This is just a demo content");
      await expect(page.locator("#btn-book-appointment")).toContainText(
        "Book Appointment",
      );
    });
  },
);
