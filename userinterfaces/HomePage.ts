import { Locator, Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get searchInput(): Locator {
    return this.page.locator('#search-words');
  }

  get firstProduct(): Locator {
    return this.page.locator("(//span[@class='image--icon--HQGC-D_'])[1]");
  }
}