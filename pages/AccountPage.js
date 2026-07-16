import { BasePage } from './BasePage.js';

/**
 * Represents the Account confirmation page (shown after account creation or deletion).
 * Contains UI interactions and reusable actions for the specific page.
 */
export class AccountPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page instance.
   */
  constructor(page) {
    super(page);
    // Confirmation heading shown after a successful account creation.
    this.accountCreatedHeading = page.getByRole('heading', { name: 'Account Created!' });
    // Confirmation heading shown after a successful account deletion.
    this.accountDeletedHeading = page.getByRole('heading', { name: 'Account Deleted!' });
    this.continueButton = page.getByRole('link', { name: 'Continue' });
  }

  /**
   * Clicks the "Continue" button to proceed after account creation or deletion.
   * @async
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async clickContinue() {
    await this.continueButton.click();
  }
}
