const { test, expect } = require('@playwright/test');
const { addProductToCart } = require('./helpers');
const { PRODUCTNAME } = require('./constants');

test.use({ storageState: 'Tests/fixtures/storageState.json' });

test('Add product to cart and verify', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');

  // Add product to cart
  await addProductToCart(page, PRODUCTNAME);

  // Go to cart page
  await page.locator("[routerlink*='cart']").click();

  // Verify product is in cart
  await expect(page.locator(`h3:has-text('${PRODUCTNAME}')`)).toBeVisible();
});
