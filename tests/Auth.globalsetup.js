// This test the login and stores it using .storageState
const { chromium } = require('@playwright/test');
const { EMAIL, PASSWORD } = require('./constants');

module.exports = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://rahulshettyacademy.com/client');
  await page.locator('#userEmail').fill(EMAIL);
  await page.locator('#userPassword').fill(PASSWORD);
  await page.locator('#login').click();
  await page.waitForLoadState('networkidle');
  await page.locator('.card-body b').first().waitFor();

  await page.context().storageState({ path: 'Tests/fixtures/storageState.json' });
  console.log('Storage state successfully saved');

  await browser.close();
};
