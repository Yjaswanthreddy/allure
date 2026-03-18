import { test, expect } from "@playwright/test";
import { ContactPage } from "../POM/contactPage";

test.describe('Contact Support Form Tests', () => {
  let contactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.navigate();
  });

  test('1. Successful Submission', async ({ page }) => {
    // We expect a success alert
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Message received successfully');
      await dialog.accept();
    });

    await contactPage.fillForm('test@example.com', 'I would like to adopt a kitten please!');
    await contactPage.submit();
    
    // Verify fields are cleared after success
    await expect(contactPage.emailInput).toHaveValue('');
  });

  test.skip('2. Error: Invalid Email Format', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('Enter a valid email address');
      await dialog.accept();
    });

    await contactPage.fillForm('invalid-email', 'Valid message length here');
    await contactPage.submit();
  });

  test.skip('3. Error: Message Too Short', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('Message should be at least 10 characters long');
      await dialog.accept();
    });

    await contactPage.fillForm('valid@email.com', 'Short');
    await contactPage.submit();
  });
});