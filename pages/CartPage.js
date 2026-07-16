import { BasePage } from './BasePage.js';

// Cart rows are plain table cells with no distinguishing ARIA roles, so the
// row and its columns are scoped with the site's own cart_* classes.
/**
 * Represents the Cart page.
 * Contains UI interactions and reusable actions for the specific page.
 */
export class CartPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page instance.
   */
  constructor(page) {
    super(page);
    this.cartRows = page.locator('#cart_info_table tbody tr');
  }

  /**
   * Navigates to the cart page.
   * @async
   * @returns {Promise<void>} A promise that will be resolved when the method has completed.
   */
  async open() {
    await this.goto('/view_cart');
  }

  /**
   * Gets the cart row that contains the given product name.
   *
   * @param {string} productName - Exact product name to locate.
   * @returns {import('@playwright/test').Locator} Locator scoped to the matching cart row.
   */
  getRowByProductName(productName) {
    return this.cartRows.filter({ has: this.page.getByRole('link', { name: productName, exact: true }) });
  }

  /**
   * Gets the product name element within a cart row.
   *
   * @param {import('@playwright/test').Locator} row - Cart row locator.
   * @returns {import('@playwright/test').Locator}
   */
  rowProductName(row) {
    return row.locator('.cart_description a');
  }

  /**
   * Gets the price element within a cart row.
   *
   * @param {import('@playwright/test').Locator} row - Cart row locator.
   * @returns {import('@playwright/test').Locator}
   */
  rowPrice(row) {
    return row.locator('.cart_price p');
  }

  /**
   * Gets the quantity element within a cart row.
   *
   * @param {import('@playwright/test').Locator} row - Cart row locator.
   * @returns {import('@playwright/test').Locator}
   */
  rowQuantity(row) {
    return row.locator('.cart_quantity button');
  }

  /**
   * Gets the total price element within a cart row.
   *
   * @param {import('@playwright/test').Locator} row - Cart row locator.
   * @returns {import('@playwright/test').Locator}
   */
  rowTotal(row) {
    return row.locator('.cart_total_price');
  }
}
