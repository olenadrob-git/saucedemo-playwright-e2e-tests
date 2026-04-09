import { test, expect } from '@playwright/test';

test('sort products by price low to high', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');

  await page.selectOption('.product_sort_container', 'lohi');

  const prices = await page.locator('.inventory_item_price').allTextContents();
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));

  const sorted = [...numericPrices].sort((a, b) => a - b);

  expect(numericPrices).toEqual(sorted);
});

test('sort products by price high to low', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');

  await page.selectOption('.product_sort_container', 'hilo');

  const prices = await page.locator('.inventory_item_price').allTextContents();
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));

  const sorted = [...numericPrices].sort((a, b) => b - a);

  expect(numericPrices).toEqual(sorted);
});

test('sort products by name from A to Z', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');

  await page.selectOption('.product_sort_container', 'az');

  const names = await page.locator('.inventory_item_name').allTextContents();

  const sorted = [...names].sort((a, b) => a.localeCompare(b));

  expect(names).toEqual(sorted);
});

test('sort products by name from Z to A', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');

  await page.selectOption('.product_sort_container', 'za');

  const names = await page.locator('.inventory_item_name').allTextContents();

  const sorted = [...names].sort((a, b) => b.localeCompare(a));

  expect(names).toEqual(sorted);
});