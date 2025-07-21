exports.ProductsPage = class ProductsPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
};
