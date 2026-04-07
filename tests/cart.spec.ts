import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Cart functionality', () => {

  test('add item to cart', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');

    await inventory.addFirstItemToCart();
    await inventory.addSecondItemToCart();

    const badge = page.locator('.shopping_cart_badge');
    await expect(badge).toHaveText('2');
  });

  test('remove item from cart', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');

    await inventory.addFirstItemToCart();
    await inventory.removeFirstItem();

    const badge = page.locator('.shopping_cart_badge');
    await expect(badge).toHaveCount(0);
  });

});