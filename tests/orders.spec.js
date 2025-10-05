const { test, expect } = require('@playwright/test');
const { addProductToCart } = require('./helpers');
const { PRODUCTNAME, EMAIL, PASSWORD } = require('./constants');

test.use({ storageState: 'Tests/fixtures/storageState.json' });

test('Order appears in My Orders and details match', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');

  // Add product to cart and checkout
  await addProductToCart(page, PRODUCTNAME);
  await page.locator("[routerlink*='cart']").click();
  await page.locator('text=Checkout').click();
  await page.getByPlaceholder('Select Country').type('uni', { delay: 100 });
  await page.locator('.ta-results button:has-text("United Kingdom")').click();
  await page.locator('.action__submit').click();

  // Capture order ID
  const orderId = (await page.locator('.em-spacer-1 .ng-star-inserted').textContent())?.trim() ?? '';

  // Go to My Orders
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator('tbody').waitFor();

  // Find order in table
  const rows = page.locator('tbody tr');
  let found = false;
  for (let i = 0; i < await rows.count(); i++) {
    const rowOrderId = (await rows.nth(i).locator('th').textContent())?.trim() ?? '';
    if (orderId.includes(rowOrderId)) {
      await rows.nth(i).locator('button').first().click();
      found = true;
      break;
    }
  }

  // Verify order details
  const orderIdDetails = (await page.locator('.col-text').textContent())?.trim() ?? '';
  expect(found).toBeTruthy();
  expect(orderId.includes(orderIdDetails)).toBeTruthy();
});
