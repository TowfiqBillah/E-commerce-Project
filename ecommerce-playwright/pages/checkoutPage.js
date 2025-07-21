exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.zipCode = page.locator('#postal-code');
    this.continueButton = page.locator('[data-test="continue"]');
  }

  async fillDetailsAndContinue(first, last, zip) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.zipCode.fill(zip);
    await this.continueButton.click();
  }
};
