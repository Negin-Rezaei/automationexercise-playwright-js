import { BasePage } from './BasePage.js';
import { ProductGrid } from './components/ProductGrid.js';

/**
 * Represents the Home page.
 * Contains UI interactions and reusable actions for the specific page.
 */
export class HomePage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page instance.
   */
  constructor(page) {
    super(page);
    this.logo = page.getByRole('img', { name: 'Website for automation practice' });
    this.featuresHeading = page.getByRole('heading', { name: 'Features Items' });
    this.signupLoginLink = page.getByRole('link', { name: 'Signup / Login' });
    this.productsLink = page.getByRole('link', { name: 'Products' });
    this.deleteAccountLink = page.getByRole('link', { name: 'Delete Account' });
    // Reusable component for the "Features Items" product card grid rendered on this page.
    this.productGrid = new ProductGrid(page);
  }

  /**
   * Navigates to the home page.
   * @async
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async open() {
    await this.goto('/');
  }

  /**
   * Navigates to the Signup / Login page.
   * @async
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async goToSignupLogin() {
    await this.signupLoginLink.click();
  }

  /**
   * Navigates to the Products page.
   * @async
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async goToProducts() {
    await this.productsLink.click();
  }

  /**
   * Navigates to the Delete Account page.
   * @async
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async goToDeleteAccount() {
    await this.deleteAccountLink.click();
  }

  /**
   * Opens the product details page for the product card at the given index.
   * @async
   * @param {number} index - Zero-based index of the product card.
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async viewProductAt(index) {
    await this.productGrid.viewProductAt(index);
  }

  /**
   * Gets the "Logged in as {username}" indicator for the given user.
   * 
   * @param {string} username - Username expected to be shown as logged in.
   * @returns {import('@playwright/test').Locator}
   */
  loggedInAsUser(username) {
    return this.page.getByText(`Logged in as ${username}`);
  }
}
