import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('sort products by price low to high', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  // 🔽 вибрати сортування
  await page.selectOption('.product_sort_container', 'lohi');

  // 📦 отримати всі ціни
  const prices = await page.locator('.inventory_item_price').allTextContents();

  // 💰 перетворити "$29.99" → 29.99
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));

  // 📊 копія масиву і сортування
  const sorted = [...numericPrices].sort((a, b) => a - b);

  // ✅ перевірка
  expect(numericPrices).toEqual(sorted);
});

test('sort products by price high to low', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  // 🔽 вибрати сортування
  await page.selectOption('.product_sort_container', 'hilo');

  // 📦 отримати всі ціни
  const prices = await page.locator('.inventory_item_price').allTextContents();

  // 💰 перетворити "$29.99" → 29.99
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));

  // 📊 копія масиву і сортування
  const sorted = [...numericPrices].sort((a, b) => b - a);

  // ✅ перевірка
  expect(numericPrices).toEqual(sorted);
});


test('sort products by name from A to Z', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  // 🔽 вибрати сортування
  await page.selectOption('.product_sort_container', 'az');

  // 📦 отримати всі назви
  const names = await page.locator('.inventory_item_name').allTextContents();

    // 📊 копія масиву і сортування
  const sorted = [...names].sort((a, b) => a - b);

  // ✅ перевірка
  expect(names).toEqual(sorted);
});

test('sort products by name from Z to A', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  // 🔽 вибрати сортування
  await page.selectOption('.product_sort_container', 'za');

  // 📦 отримати всі назви
  const names = await page.locator('.inventory_item_name').allTextContents();

    // 📊 копія масиву і сортування
  const sorted = [...names].sort((a, b) => b - a);

  // ✅ перевірка
  expect(names).toEqual(sorted);
});