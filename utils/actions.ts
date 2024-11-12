import { Locator } from '@playwright/test';

export class Actions {
  static async clickElement(element: Locator) {
    await element.waitFor({ state: 'visible', timeout: 180000 });
    await element.click();
  }

  static async waitForElement(element: Locator) {
    await element.waitFor({ state: 'visible', timeout: 180000 });
  }

  static async validateText(element: Locator, expectedText: string) {
    const text = await element.textContent();
    if (text?.trim() !== expectedText) {
      throw new Error(`Expected text: "${expectedText}", but found: "${text?.trim()}"`);
    }
  }
}