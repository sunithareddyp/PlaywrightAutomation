import { test, expect } from '@playwright/test';

test('Guru99 Registration Test', async ({ page }) => {

  await page.goto('http://demo.guru99.com/insurance/v1/index.php');

  await page.click('text=Register');

  await page.check('input[value="Mr"]');

  await page.fill('#user_firstname', 'John');
  await page.fill('#user_surname', 'Doe');

  await page.fill('#user_phone', '1234567890');

  await page.selectOption('#user_dateofbirth_1i', '1990');
  await page.selectOption('#user_dateofbirth_2i', '1');
  await page.selectOption('#user_dateofbirth_3i', '1');

  await page.check('input[value="Full"]');
  await page.selectOption('#user_licenceperiod', '5');

  await page.selectOption('#user_occupation_id', 'Engineer');

  await page.fill('#user_address_attributes_street', 'Main Street');
  await page.fill('#user_address_attributes_city', 'Berlin');
  await page.fill('#user_address_attributes_county', 'Berlin');
  await page.fill('#user_address_attributes_postcode', '10115');

  const email = `test${Date.now()}@mail.com`;
  await page.fill('#user_user_detail_attributes_email', email);

  await page.fill('#user_user_detail_attributes_password', 'test123');
  await page.fill('#user_user_detail_attributes_password_confirmation', 'test123');

  await page.click('input[value="Create"]');

  await expect(page.locator('text=Login')).toBeVisible();
});


test('Guru99 Login Test', async ({ page }) => {

  await page.goto('http://demo.guru99.com/insurance/v1/index.php');

  await expect(page).toHaveTitle(/Insurance/);

  await page.fill('input[name="email"]', 'test@test.com');
  await page.fill('input[name="password"]', 'test123');

  await page.click('input[type="submit"]');

  await expect(page).toHaveURL(/index.php/);
});