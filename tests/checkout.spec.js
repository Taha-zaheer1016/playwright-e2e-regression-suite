const { test, expect } = require('@playwright/test');
const { addProductToCart } = require('./helpers');
const { PRODUCTNAME } = require('./constants');

test.use({ storageState: 'Tests/fixtures/storageState.json' });

test('Checkout flow works and confirms order', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');

  // Add product to cart
  await addProductToCart(page, PRODUCTNAME);

  // Go to cart and checkout
  await page.locator("[routerlink*='cart']").click();
  await page.locator('text=Checkout').click();

  // Select country
  await page.getByPlaceholder('Select Country').type('uni', { delay: 100 });
  await page.locator('.ta-results button:has-text("United Kingdom")').click();

  // Place order
  await page.locator('.action__submit').click();

  // Verify order confirmation
  await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
});
