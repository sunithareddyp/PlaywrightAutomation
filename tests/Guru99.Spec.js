import { test } from '@playwright/test';

import { test, expect } from '@playwright/test';

test('Guru99 Registration Test', async ({ page }) => {

  // Step 1: Open website
  await page.goto('http://demo.guru99.com/insurance/v1/index.php');

  // Step 2: Click Register button
  await page.click('text=Register');

  // Step 3: Fill registration form

  // Title (Mr)
  await page.check('input[value="Mr"]');

  // First Name & Last Name
  await page.fill('#user_firstname', 'John');
  await page.fill('#user_surname', 'Doe');

  // Phone
  await page.fill('#user_phone', '1234567890');

  // Date of Birth
  await page.selectOption('#user_dateofbirth_1i', '1990'); // Year
  await page.selectOption('#user_dateofbirth_2i', '1');    // Month
  await page.selectOption('#user_dateofbirth_3i', '1');    // Day

  // License type
  await page.check('input[value="Full"]');

  // License period
  await page.selectOption('#user_licenceperiod', '5');

  // Occupation
  await page.selectOption('#user_occupation_id', 'Engineer');

  // Address
  await page.fill('#user_address_attributes_street', 'Main Street');
  await page.fill('#user_address_attributes_city', 'Berlin');
  await page.fill('#user_address_attributes_county', 'Berlin');
  await page.fill('#user_address_attributes_postcode', '10115');

  // Email (⚠️ MUST be unique every run)
  const email = `test${Date.now()}@mail.com`;
  await page.fill('#user_user_detail_attributes_email', email);

  // Password
  await page.fill('#user_user_detail_attributes_password', 'test123');
  await page.fill('#user_user_detail_attributes_password_confirmation', 'test123');

  // Step 4: Submit
  await page.click('input[value="Create"]');

  // Step 5: Validation
  await expect(page.locator('text=Login')).toBeVisible();

test('My First Playwright Test Case', async ({page}) => {

   await page.goto("npx playwright test tests/Guru99.spec.js")
   // Step 1: Open URL
  await page.goto('http://demo.guru99.com/insurance/v1/index.php');

  // Step 2: Verify page loaded
  await expect(page).toHaveTitle(/Insurance/);

  // Step 3: Fill login form
  await page.fill('input[name="email"]', 'test@test.com');
  await page.fill('input[name="password"]', 'test123');

  // Step 4: Click Login button
  await page.click('input[type="submit"]');

  // Step 5: Validation (example - check URL change or error)
  await expect(page).toHaveURL(/index.php/);

});

