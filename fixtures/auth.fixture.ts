import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type User = {
  username: string;
  password: string;
};

export const test = base.extend<{
  user: User;
}>({
  user: async ({}, use, testInfo) => {
    const user = testInfo.project.use.user as User;
    await use(user);
  },

  page: async ({ page, user }, use) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(user.username, user.password);

    await use(page);
  },
});

export { expect } from '@playwright/test';