import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.js';
import { ProductsPage } from '../../pages/ProductsPage.js';
import { CartPage } from '../../pages/CartPage.js';

test.describe('Cart', () => {
  /** @type {HomePage} */
  let homePage;
  /** @type {ProductsPage} */
  let productsPage;
  /** @type {CartPage} */
  let cartPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);

    await test.step('Launch browser and navigate to home page', async () => {
      await homePage.open();
      await expect(homePage.logo).toBeVisible();
      await expect(homePage.featuresHeading).toBeVisible();
    });
  });

  test('should add multiple products to the cart', async () => {
    await test.step('Navigate to Products page', async () => {
      await homePage.goToProducts();
      await expect(productsPage.heading).toBeVisible();
    });

    const firstProduct = await test.step('Add first product to cart and continue shopping', async () => {
      await productsPage.hoverProductAt(0);
      const product = await productsPage.getProductDetailsAt(0);
      await productsPage.addProductToCartAt(0);
      await productsPage.continueShopping();
      return product;
    });

    const secondProduct = await test.step('Add second product to cart and view cart', async () => {
      await productsPage.hoverProductAt(1);
      const product = await productsPage.getProductDetailsAt(1);
      await productsPage.addProductToCartAt(1);
      await productsPage.goToCart();
      return product;
    });

    await test.step('Verify both products were added to the cart', async () => {
      for (const product of [firstProduct, secondProduct]) {
        const row = cartPage.getRowByProductName(product.name);

        await expect(row).toBeVisible();
        await expect(cartPage.getProductName(row)).toHaveText(product.name);
        await expect(cartPage.getPrice(row)).toHaveText(product.price);
        await expect(cartPage.getQuantity(row)).toHaveText('1');
        await expect(cartPage.getTotal(row)).toHaveText(product.price);
      }
    });
  });
});
