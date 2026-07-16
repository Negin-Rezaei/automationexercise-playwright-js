import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.js';
import { ProductDetailsPage } from '../../pages/ProductDetailsPage.js';
import { CartPage } from '../../pages/CartPage.js';

test.describe('Cart', () => {
  /** @type {HomePage} */
  let homePage;
  /** @type {ProductDetailsPage} */
  let productDetailsPage;
  /** @type {CartPage} */
  let cartPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productDetailsPage = new ProductDetailsPage(page);
    cartPage = new CartPage(page);

    await test.step('Launch browser and navigate to home page', async () => {
      await homePage.open();
      await expect(homePage.logo).toBeVisible();
      await expect(homePage.featuresHeading).toBeVisible();
    });
  });

  test('should reflect the selected quantity when a product is added to the cart', async ({ page }) => {
    const desiredQuantity = 4;

    await test.step('Open product details for the first product', async () => {
      await homePage.viewProductAt(0);
      await expect(page).toHaveURL(/\/product_details\//);
      await expect(productDetailsPage.productName).toBeVisible();
    });

    const productName = await test.step('Increase quantity and add product to cart', async () => {
      const name = (await productDetailsPage.productName.innerText()).trim();
      await productDetailsPage.setQuantity(desiredQuantity);
      await productDetailsPage.addToCart();
      return name;
    });

    await test.step('View cart', async () => {
      await productDetailsPage.goToCart();
    });

    await test.step('Verify the product appears in the cart with the correct quantity', async () => {
      const row = cartPage.getRowByProductName(productName);

      await expect(row).toBeVisible();
      await expect(cartPage.getProductName(row)).toHaveText(productName);
      await expect(cartPage.getQuantity(row)).toHaveText(String(desiredQuantity));
    });
  });
});
