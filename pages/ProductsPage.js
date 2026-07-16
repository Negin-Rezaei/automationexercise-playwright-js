import { BasePage } from './BasePage.js';
import { ProductGrid } from './components/ProductGrid.js';
import { CartConfirmationModal } from './components/CartConfirmationModal.js';

/**
 * Represents the Products page.
 * Contains UI interactions and reusable actions for the specific page.
 */
export class ProductsPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page instance.
   */
  constructor(page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'All Products' });
    // Reusable component for the "All Products" product card grid rendered on this page.
    this.productGrid = new ProductGrid(page);
    // Reusable component for the "Added!" confirmation modal shown after adding to cart.
    this.cartModal = new CartConfirmationModal(page);
  }

  /**
   * Navigates to the products page.
   * @async
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async open() {
    await this.goto('/products');
  }

  /**
   * Hovers over the product card at the given index to reveal its overlay actions.
   * @async
   * @param {number} index - Zero-based index of the product card.
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async hoverProductAt(index) {
    await this.productGrid.hoverAt(index);
  }

  /**
   * Gets the name and price of the product card at the given index.
   * @async
   * @param {number} index - Zero-based index of the product card.
   * @returns {Promise<{name: string, price: string}>}
   */
  async getProductDetailsAt(index) {
    return this.productGrid.getDetailsAt(index);
  }

  /**
   * Adds the product card at the given index to the cart.
   * @async
   * @param {number} index - Zero-based index of the product card.
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async addProductToCartAt(index) {
    await this.productGrid.addToCartAt(index);
  }

  /**
   * Dismisses the "Added!" confirmation modal and continues shopping.
   * @async
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async continueShopping() {
    await this.cartModal.continueShopping();
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
