
// The same product-card grid markup (.product-image-wrapper) is rendered on
// both the Home page ("Features Items") and the Products page ("All
// Products"). Each card exposes two identical "Add to cart" links (static +
// hover overlay) with no unique accessible name, so cards are scoped by
// index. This component is composed by any Page Object that renders the grid.
export class ProductGrid {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page instance.
   */
  constructor(page) {
    this.page = page;
    this.cards = page.locator('.product-image-wrapper');
  }

  /**
   * @param {number} index - Zero-based index of the product card.
   * @returns {import('@playwright/test').Locator}
   */
  cardAt(index) {
    return this.cards.nth(index);
  }

  /**
   * @async
   * @param {number} index - Zero-based index of the product card.
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async hoverAt(index) {
    await this.cardAt(index).hover();
  }

  /**
   * @async
   * @param {number} index - Zero-based index of the product card.
   * @returns {Promise<{name: string, price: string}>}
   */
  async getDetailsAt(index) {
    const info = this.cardAt(index).locator('.productinfo');
    return {
      name: (await info.locator('p').innerText()).trim(),
      price: (await info.locator('h2').innerText()).trim(),
    };
  }

  /**
   * @async
   * @param {number} index - Zero-based index of the product card.
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async addToCartAt(index) {
    await this.hoverAt(index);
    await this.cardAt(index).locator('.product-overlay .add-to-cart').click();
  }

  /**
   * @async
   * @param {number} index - Zero-based index of the product card.
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async viewProductAt(index) {
    await this.cardAt(index).getByRole('link', { name: 'View Product' }).click();
  }
}
