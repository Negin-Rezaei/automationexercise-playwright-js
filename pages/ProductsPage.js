import { BasePage } from './BasePage.js';
import { ProductGrid } from './components/ProductGrid.js';
import { CartConfirmationModal } from './components/CartConfirmationModal.js';

export class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'All Products' });
    this.productGrid = new ProductGrid(page);
    this.cartModal = new CartConfirmationModal(page);
  }

  async open() {
    await this.goto('/products');
  }

  async hoverProductAt(index) {
    await this.productGrid.hoverAt(index);
  }

  async getProductDetailsAt(index) {
    return this.productGrid.getDetailsAt(index);
  }

  async addProductToCartAt(index) {
    await this.productGrid.addToCartAt(index);
  }

  async continueShopping() {
    await this.cartModal.continueShopping();
  }

  async goToCart() {
    await this.cartModal.goToCart();
  }
}
