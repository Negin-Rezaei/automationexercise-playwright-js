import { BasePage } from './BasePage.js';
import { ProductGrid } from './components/ProductGrid.js';

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.logo = page.getByRole('img', { name: 'Website for automation practice' });
    this.featuresHeading = page.getByRole('heading', { name: 'Features Items' });
    this.signupLoginLink = page.getByRole('link', { name: 'Signup / Login' });
    this.productsLink = page.getByRole('link', { name: 'Products' });
    this.deleteAccountLink = page.getByRole('link', { name: 'Delete Account' });
    this.productGrid = new ProductGrid(page);
  }

  async open() {
    await this.goto('/');
  }

  async goToSignupLogin() {
    await this.signupLoginLink.click();
  }

  async goToProducts() {
    await this.productsLink.click();
  }

  async goToDeleteAccount() {
    await this.deleteAccountLink.click();
  }

  async viewProductAt(index) {
    await this.productGrid.viewProductAt(index);
  }

  loggedInAsUser(username) {
    return this.page.getByText(`Logged in as ${username}`);
  }
}
