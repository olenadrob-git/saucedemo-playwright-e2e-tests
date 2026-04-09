//import { test, expect } from '../fixtures/auth.fixture';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const userName = 'standard_user'



test('unsuccessful login - empty Username', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  
    
});