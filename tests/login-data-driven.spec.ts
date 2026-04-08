import { test, expect } from '../fixtures/auth.fixture';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../utils/testData';

test.describe('Login with different users', () => {

  for (const user of users) {

    test(`login as ${user.username}`, async ({ page }) => {
      const login = new LoginPage(page);

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