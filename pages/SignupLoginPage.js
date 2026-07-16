import { BasePage } from './BasePage.js';

/**
 * Represents the Signup / Login page.
 * Contains UI interactions and reusable actions for the specific page.
 */
export class SignupLoginPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page instance.
   */
  constructor(page) {
    super(page);
    this.signupForm = page.locator('.signup-form');
    this.newUserSignupHeading = this.signupForm.getByRole('heading', { name: 'New User Signup!' });
    this.nameInput = this.signupForm.getByPlaceholder('Name');
    this.emailInput = this.signupForm.getByPlaceholder('Email Address');
    this.signupButton = this.signupForm.getByRole('button', { name: 'Signup' });
  }

  /**
   * Navigates to the Signup / Login page.
   * @async
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async open() {
    await this.goto('/login');
  }

  /**
   * Fills in the new-user signup form and submits it.
   * @async
   * @param {string} name - Name to enter in the signup form.
   * @param {string} email - Email address to enter in the signup form.
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async signup(name, email) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();
  }
}
