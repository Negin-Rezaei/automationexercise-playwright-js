// The "Added!" confirmation modal (View Cart / Continue Shopping) is the
// same shared markup on the Home page, Products page, and Product Details
// page. Composed by any Page Object that can trigger an add-to-cart action.
export class CartConfirmationModal {
  constructor(page) {
    this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
    this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async goToCart() {
    await this.viewCartLink.click();
  }
}
