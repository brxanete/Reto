import { test, expect } from '@playwright/test';
import { HomePage } from '../userinterfaces/HomePage';
import { ProductPage } from '../userinterfaces/ProductPage';
import { Actions } from '../utils/actions';

test('Buscar un nintendo switch, validando su precio en carro de compras', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

  await page.goto('https://www.aliexpress.com', { waitUntil: 'domcontentloaded', timeout: 120000 });

  await homePage.searchInput.fill('Nintendo Switch');
  await homePage.searchInput.press('Enter');

  await Actions.waitForElement(homePage.firstProduct);
  await Actions.clickElement(homePage.firstProduct);

  await page.waitForLoadState('domcontentloaded');

  await Actions.validateText(productPage.priceElement, 'COP2.129.341,35');

  await Actions.waitForElement(productPage.addToCartButton);
  await Actions.clickElement(productPage.addToCartButton);

  await Actions.waitForElement(productPage.cartSummary);
  await Actions.validateText(productPage.cartSummary, 'COP2.303.047,03');
});