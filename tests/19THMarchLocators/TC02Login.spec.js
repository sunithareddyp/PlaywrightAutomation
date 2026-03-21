import { test, expect } from '@playwright/test';

test('User login', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('button', { name: /My account/i }).click();
  await page.getByRole('link', { name: /Login/i }).click();
  await page.locator('#input-email').fill('macreyogapa-8747@yopmail.com');
  await page.locator('#input-password').fill('Test@123');
  await page.locator('input[value="Login"]').click();
});