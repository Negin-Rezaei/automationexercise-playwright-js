import { expect } from '@playwright/test';

// The "Added!" confirmation modal (View Cart / Continue Shopping) is the
// same shared markup on the Home page, Products page, and Product Details
// page. Composed by any Page Object that can trigger an add-to-cart action.
export class CartConfirmationModal {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page instance.
   */
  constructor(page) {
    this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
    this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
  }

  /**
   * @async
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async continueShopping() {
    // Asserted explicitly (rather than relying on click()'s own actionability
    // wait) so a failed/slow add-to-cart call surfaces as a clear "modal
    // never appeared" failure instead of a generic click timeout.
    await expect(this.continueShoppingButton).toBeVisible();
    await this.continueShoppingButton.click();
  }

  /**
   * @async
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async goToCart() {
    await expect(this.viewCartLink).toBeVisible();
    await this.viewCartLink.click();
  }
}
