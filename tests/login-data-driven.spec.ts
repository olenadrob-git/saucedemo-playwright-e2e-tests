import { test, expect } from '@playwright/test';
import { users } from '../utils/testData';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login with different users', () => {

  for (const user of users) {

    test(`login as ${user.username}`, async ({ page }) => {
      const login = new LoginPage(page);
      await page.goto('https://www.saucedemo.com/inventory.html');

      await login.goto();
      await login.login(user.username, user.password);

      if (user.valid) {
        await expect(page).toHaveURL(/inventory/);
      } else {
        const error = await login.getErrorText();
        expect(error).toBeTruthy();
      }
    });

  }

});