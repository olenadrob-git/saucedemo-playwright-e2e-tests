import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../utils/testData';

for (const user of users) {

  setup(`login as ${user.username}`, async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(user.username, user.password);

    // Separate file for each user
    await page.context().storageState({
      path: `storage-${user.username}.json`,
    });
  });

}