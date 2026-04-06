import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInfo(firstName: string, lastName: string, zip: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', zip);
    await this.page.click('#continue');
  }

  async finishOrder() {
    await this.page.click('#finish');
  }
}