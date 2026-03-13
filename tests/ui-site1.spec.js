const { test, expect } = require('@playwright/test');

test.describe('Intermediate UI Components & Alerts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice-automation.com/?utm_source=copilot.com');
  });
      
})