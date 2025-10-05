//Function for adding product to cart
const { expect } = require('@playwright/test');

async function addProductToCart(page, PRODUCTNAME) {
  const products = page.locator('.card-body');
  const count = await products.count();

  for (let i = 0; i < count; i++) {
    const title = await products.nth(i).locator('b').textContent();
    if (title?.trim() === PRODUCTNAME) {
      await products.nth(i).locator('text= Add To Cart').click();
      return;
    }
  }
  throw new Error(`Product "${PRODUCTNAME}" not found`);
}

module.exports = { addProductToCart };