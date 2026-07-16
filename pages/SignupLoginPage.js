import { BasePage } from './BasePage.js';

export class SignupLoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.signupForm = page.locator('.signup-form');
    this.newUserSignupHeading = this.signupForm.getByRole('heading', { name: 'New User Signup!' });
    this.nameInput = this.signupForm.getByPlaceholder('Name');
    this.emailInput = this.signupForm.getByPlaceholder('Email Address');
    this.signupButton = this.signupForm.getByRole('button', { name: 'Signup' });
  }

  async open() {
    await this.goto('/login');
  }

  async signup(name, email) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();
  }
}
