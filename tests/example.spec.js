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
  // const btn = page.locator('/html/body/div/div/div/form/button');


  await email.fill('jaswanth@gmail.com');
  await msg.fill('asdfghjklk');

  await btn.click(); 
  await msg.screenshot({type: 'png', path: './msg.png'});
  await btn.screenshot({type: 'png', path: './button.png'});
  await page.screenshot({fullPage: true, type: 'png', path: './meow.png'});
});

[
  {email: "jaswanth@gmail.com", msg: "hello jessei"},
  {email: "sony@gmail.com", msg: "hello sony"}
].forEach(obj => {
  test(`localhost 3000 contact test for ${obj.email}`, async ({ page }) => {
  await page.goto('http://localhost:3000/contact.html');
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill(obj.email);
  await page.locator('#userMessage').click();
  await page.locator('#userMessage').fill(obj.msg);
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Submit' }).click();
});

})





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
