import { BasePage } from './BasePage.js';
import { CartConfirmationModal } from './components/CartConfirmationModal.js';

// The quantity <input> has a <label> with no "for" attribute, so it cannot
// be targeted with getByLabel(). Its id is stable and unique on this page.
/**
 * Represents the Product Details page.
 * Contains UI interactions and reusable actions for the specific page.
 */
export class ProductDetailsPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page instance.
   */
  constructor(page) {
    super(page);
    this.productName = page.locator('.product-information h2');
    this.quantityInput = page.locator('#quantity');
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    // Reusable component for the "Added!" confirmation modal shown after adding to cart.
    this.cartModal = new CartConfirmationModal(page);
  }

  /**
   * Sets the desired quantity in the quantity input.
   * @async
   * @param {number} quantity - Quantity to set.
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async setQuantity(quantity) {
    await this.quantityInput.fill(String(quantity));
  }

  /**
   * Adds the current product to the cart.
   * @async
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async addToCart() {
    await this.addToCartButton.click();
  }

  /**
   * Navigates to the cart from the "Added!" confirmation modal.
   * @async
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async goToCart() {
    await this.cartModal.goToCart();
  }
}
