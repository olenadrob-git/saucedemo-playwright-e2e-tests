import { defineConfig } from '@playwright/test';
import { users } from './utils/testData';

export default defineConfig({
  testDir: './tests',

  projects: [
    // project setup
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
    },

    // Dinamic project for each user
    ...users.map(user => ({
      name: user.username,

      use: {
        storageState: `storage-${user.username}.json`,
      },

      dependencies: ['setup'],
    })),
  ],

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});