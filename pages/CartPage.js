import { BasePage } from './BasePage.js';

// Cart rows are plain table cells with no distinguishing ARIA roles, so the
// row and its columns are scoped with the site's own cart_* classes.
export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartRows = page.locator('#cart_info_table tbody tr');
  }

  async open() {
    await this.goto('/view_cart');
  }

  getRowByProductName(productName) {
    return this.cartRows.filter({ has: this.page.getByRole('link', { name: productName, exact: true }) });
  }

  rowProductName(row) {
    return row.locator('.cart_description a');
  }

  rowPrice(row) {
    return row.locator('.cart_price p');
  }

  rowQuantity(row) {
    return row.locator('.cart_quantity button');
  }

  rowTotal(row) {
    return row.locator('.cart_total_price');
  }
}
