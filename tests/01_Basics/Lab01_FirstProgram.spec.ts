import {test, expect} from '@playwright/test';

test('app should have a title', async ({page}) =>{
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - VWO");
    await page.close();
});