export class ContactPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#userEmail');
    // Using data-testid as it's a best practice mentioned in Playwright docs
    this.messageTextArea = page.locator('#userMessage');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async navigate() {
    // Replace with your actual local or hosted URL
    await this.page.goto('http://localhost:3000/contact.html');
  }

  async fillForm(email, message) {
    await this.emailInput.fill(email);
    await this.messageTextArea.fill(message);
  }

  async submit() {
    await this.submitButton.click();
  }
}