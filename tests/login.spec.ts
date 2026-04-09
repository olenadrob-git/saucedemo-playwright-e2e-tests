//import { test, expect } from '../fixtures/auth.fixture';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const userName = 'standard_user'

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);


  await expect(page).toHaveURL(/inventory/);
});

test('unsuccessful login - empty Username', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/');
  const error = page.locator('[data-test="error"]');
  await expect(error).toHaveText('Epic sadface: Username is required');
    
});

await page.locator('body').click();test('unsuccessful login - empty Password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  //await page.fill(loginPage.usernameInput, userName);
  await loginPage.fillUserName(userName);
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/');
  const error = page.locator('[data-test="error"]');
  await expect(error).toHaveText('Epic sadface: Password is required');
    
});

