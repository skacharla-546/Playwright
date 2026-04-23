import {test, expect, BrowserContext, Page} from '@playwright/test'

test('Single Context Single Page', async ({browser}) => {
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();
    await page.goto("https://app.vwo.com/#login");
    await expect(page).toHaveTitle("Login - VWO");
    await page.close(); 
});