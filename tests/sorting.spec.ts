import { test, expect } from '../fixtures/auth.fixture';
import { LoginPage } from '../pages/LoginPage';

test('sort products by price low to high', async ({ page }) => {
  const login = new LoginPage(page);


  // Select sorting
  await page.selectOption('.product_sort_container', 'lohi');

  // Get all prices
  const prices = await page.locator('.inventory_item_price').allTextContents();

  // Change "$29.99" → 29.99
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));

  // Copy massive and sort
  const sorted = [...numericPrices].sort((a, b) => a - b);

  //Check
  expect(numericPrices).toEqual(sorted);
});

test('sort products by price high to low', async ({ page }) => {
  const login = new LoginPage(page);


  // Select sorting
  await page.selectOption('.product_sort_container', 'hilo');

  // Get all prices
  const prices = await page.locator('.inventory_item_price').allTextContents();

  // Change "$29.99" → 29.99
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));

  // copy array and sort
  const sorted = [...numericPrices].sort((a, b) => b - a);

  //Check
  expect(numericPrices).toEqual(sorted);
});


test('sort products by name from A to Z', async ({ page }) => {
  const login = new LoginPage(page);

  
  await page.selectOption('.product_sort_container', 'az');

  
  const names = await page.locator('.inventory_item_name').allTextContents();

    const sorted = [...names].sort((a, b) => a - b);

  // Check
  expect(names).toEqual(sorted);
});

test('sort products by name from Z to A', async ({ page }) => {
  const login = new LoginPage(page);

   await page.selectOption('.product_sort_container', 'za');

   const names = await page.locator('.inventory_item_name').allTextContents();
   
    const sorted = [...names].sort((a, b) => b - a);

  // Check
  expect(names).toEqual(sorted);
});

test('debug user', async ({ page, user }) => {
  console.log('USER:', user.username);
});