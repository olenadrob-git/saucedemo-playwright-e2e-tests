import { defineConfig } from '@playwright/test';
import { users } from './utils/testData';

export default defineConfig({
  testDir: './tests',

  projects: users.map(user => ({
    name: user.username,
    use: {
      user: user as any,
    },
  })),

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});


