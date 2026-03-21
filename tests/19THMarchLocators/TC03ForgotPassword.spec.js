import {test} from '@playwright/test'
test('forgotpassword', async ({page}) =>{
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.getByRole('button', { name: /My account/i }).click();
    await page.getByRole('link', { name: /Login/i }).click();
    await page.getByRole('link',{name:'Forgotten Password'}).first().click();
    await page.locator('#input-email').fill('macreyogapa-8747@yopmail.com');
    await page.getByRole('button' , {name:'Continue'}).click();

});

