import { BasePage } from './BasePage.js';
import { CartConfirmationModal } from './components/CartConfirmationModal.js';

// The quantity <input> has a <label> with no "for" attribute, so it cannot
// be targeted with getByLabel(). Its id is stable and unique on this page.
export class ProductDetailsPage extends BasePage {
  constructor(page) {
    super(page);
    this.productName = page.locator('.product-information h2');
    this.quantityInput = page.locator('#quantity');
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    this.cartModal = new CartConfirmationModal(page);
  }

  async setQuantity(quantity) {
    await this.quantityInput.fill(String(quantity));
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.cartModal.goToCart();
  }
}
