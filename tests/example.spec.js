// @ts-check
import { test, expect } from '@playwright/test';


test('contact page title', async ({page}) => {
  await page.goto('http://localhost:3000/contact.html');
  await expect(page).toHaveTitle(/Contact Support/);
});

test("contact page submit", async ({page}) =>{
  await page.goto('http://localhost:3000/contact.html');
  const email = page.getByPlaceholder(/Enter/);
  const msg = page.locator('#userMessage');
  const btn = page.getByText('Submit');


  email.fill('jaswanth@gmail.com');
  msg.fill('asdfghjklk');

  await btn.click(); 
  await msg.screenshot({type: 'png', path: './msg.png'});
  await btn.screenshot({type: 'png', path: './button.png'});
  await page.screenshot({fullPage: true, type: 'png', path: './meow.png'});
});

// test('test', async ({ page }) => {
//   await page.goto('http://');
//   await page.getByRole('textbox', { name: 'Email address' }).click();
//   await page.getByRole('textbox', { name: 'Email address' }).fill('asdfgbnmnbvx');
//   await page.getByTestId('mytext').click();
//   await page.getByTestId('mytext').fill('sfgnhgfdsdfgh');
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('button', { name: 'Submit' }).click();
// });




test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation. 
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
