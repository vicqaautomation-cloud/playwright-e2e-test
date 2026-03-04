import { test, expect } from "@playwright/test";


test("Should load homepage with correct title", async ({ page }) => {
  // 1. Go to the Homepage
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // 2. Assert if the title is correct
  await expect(page).toHaveTitle("CURA Healthcare Service");

  // 3. Assert header text
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});
test(" test should do something ", async ({ page }) => { 
  // steps...

})
test(" API login ", async ({ request }) => { 
  // steps...
  await request.post('signin/', {
    data: {
      username: 'admin',
      password: 'pass'
    }
  })
})