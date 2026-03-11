import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  
  await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).fill('grefbnfb');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Invalid email address').click();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).fill('jaswanthjessi@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
});

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('http://localhost:3000/contact.html');
//   await page.getByRole('textbox', { name: 'Enter your email' });
//   await page.getByRole('textbox', { name: 'Enter your email' }).fill('jaswanth@gmail.com');
//   await page.getByRole('textbox', { name: 'Write your message' });
//   await page.getByRole('textbox', { name: 'Write your message' }).fill('jaswanth hi');
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('button', { name: 'Submit' }).click();
// });



