import { test, expect } from '@playwright/test';

test('User Registration', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');

  await page.getByRole('button', { name: /My account/i }).click();
  await page.getByRole('link', { name: 'Register' }).click();

  await page.getByLabel('First Name').fill('Sunitha');
  await page.getByLabel('Last Name').fill('P');
  //await page.getByLabel('E-Mail').fill(`test${Date.now()}@yopmail.com`);//dyanamic email
  await page.getByLabel('E-Mail').fill('macreyogapa-8747@yopmail.com');
  await page.getByLabel('Telephone').fill('7338002382');
  await page.locator('#input-password').fill('Test@123');
  await page.locator('#input-confirm').fill('Test@123');
  await page.getByText('I have read and agree').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page).toHaveURL(/success/);
});