const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { ProductsPage } = require('../pages/productsPage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');

test('E-commerce end-to-end test', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  // Login
  await login.login('standard_user', 'secret_sauce');

  // Add to cart
  await products.addToCart();
  await products.goToCart();

  // Take screenshot of cart
  await page.screenshot({ path: 'screenshots/cart.png' });

  // Proceed to checkout
  await cart.proceedToCheckout();
  await checkout.fillDetailsAndContinue('John', 'Doe', '12345');

  // Assert we are on overview page
  await expect(page.locator('.summary_info')).toBeVisible();

  // Logout
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
  await expect(page).toHaveURL('https://www.saucedemo.com');
});
