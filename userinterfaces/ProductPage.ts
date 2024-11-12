import { Locator, Page } from '@playwright/test';

export class ProductPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get priceElement(): Locator {
    return this.page.locator("//div[@class='price--current--I3Zeidd']");
  }

  get addToCartButton(): Locator {
    return this.page.locator("//button/span[text()='Agregar al carrito']");
  }

  get cartSummary(): Locator {
    return this.page.locator("//div[@class='cart-summary-top']");
  }
}