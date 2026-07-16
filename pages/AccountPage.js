import { BasePage } from './BasePage.js';

export class AccountPage extends BasePage {
  constructor(page) {
    super(page);
    this.accountCreatedHeading = page.getByRole('heading', { name: 'Account Created!' });
    this.accountDeletedHeading = page.getByRole('heading', { name: 'Account Deleted!' });
    this.continueButton = page.getByRole('link', { name: 'Continue' });
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}
