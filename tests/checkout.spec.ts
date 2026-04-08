import { test, expect } from '../fixtures/auth.fixture';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from  '../pages/CheckoutPage';

test('successful checkout flow', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await inventory.addFirstItemToCart();
  await inventory.goToCart();

  await cart.checkout();

  await checkout.fillInfo('Olena', 'Test', '12345');
  await checkout.finishOrder();

  const successMessage = page.locator('.complete-header');
  await expect(successMessage).toHaveText('Thank you for your order!');
});