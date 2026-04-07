import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async productSortButton() {
    await this.page.click('[data-test="product-sort-container"]');
  }
  
  
  async addFirstItemToCart() {
    await this.page.click('.inventory_item button');
  }

  async addSecondItemToCart() {
    await this.page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
  
  async removeFirstItem() {
    await this.page.click('.inventory_item button');
  }  

}