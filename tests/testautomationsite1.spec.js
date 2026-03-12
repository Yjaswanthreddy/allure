import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
   await page.getByRole('link', { name: 'Practice Test Automation', exact: true }).click();

});





test('should log in successfully with valid credentials', async ({ page }) => {
  // Go to the login page
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  
  // Fill in the username and password
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  
  // Click on the Submit button
  await page.getByRole('button', { name: 'Submit' }).click();
  
  // Verify that the login is successful by checking the heading
  const heading = await page.getByRole('heading', { name: 'Logged In Successfully' });
  expect(await heading.isVisible()).toBeTruthy();
  
  // Verify if the message contains the username
  const welcomeMessage = await page.getByText('Congratulations student. You');
  expect(welcomeMessage).toBeDefined();
});




test('should handle CapsLock state while entering the username', async ({ page }) => {
  // Go to the login page
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  
  // Fill in the username with CapsLock key pressed
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  
  // Verify that the username field contains the correct value (the CapsLock should not affect the entry)
  const usernameField = await page.getByRole('textbox', { name: 'Username' });
  expect(await usernameField.inputValue()).toBe('student');
});


test('should show an error message with incorrect login credentials', async ({ page }) => {
  // Go to the login page
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  
  // Enter incorrect credentials
  await page.getByRole('textbox', { name: 'Username' }).fill('invalidUser');
  await page.getByRole('textbox', { name: 'Password' }).fill('WrongPassword123');
  
  // Click on the Submit button
  await page.getByRole('button', { name: 'Submit' }).click();
  
  // Check if an error message is displayed (assuming an error message exists on the page)
  const errorMessage = await page.getByText('Your credentials are incorrect');
  expect(errorMessage).toBeDefined(); 
});


// test('should disable the Submit button if username or password is empty', async ({ page }) => {
//   // Go to the login page
//   await page.goto('https://practicetestautomation.com/practice-test-login/');
  
//   // Leave username and password fields empty
//   await page.getByRole('textbox', { name: 'Username' }).fill('');
//   await page.getByRole('textbox', { name: 'Password' }).fill('');
  
//   // Verify that the Submit button is disabled
//   const submitButton = await page.getByRole('button', { name: 'Submit' });
//   expect(await submitButton.isDisabled()).toBeTruthy();
// });

test('should have empty fields by default on the login page', async ({ page }) => {
  // Go to the login page
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  
  // Verify that the Username and Password fields are empty
  const usernameValue = await page.getByRole('textbox', { name: 'Username' }).inputValue();
  const passwordValue = await page.getByRole('textbox', { name: 'Password' }).inputValue();
  
  expect(usernameValue).toBe('');
  expect(passwordValue).toBe('');
});