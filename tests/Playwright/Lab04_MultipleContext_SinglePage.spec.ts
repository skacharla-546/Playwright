import {test, expect, BrowserContext, Page} from '@playwright/test'

test('Multiple Context Single Page', async ({browser}) => { 
    const context1:BrowserContext = await browser.newContext();
    const page1:Page = await context1.newPage();
    await page1.goto("https://app.vwo.com/#login");
    await expect(page1).toHaveTitle("Login - VWO"); 
    await page1.close();

    const context2: BrowserContext = await browser.newContext();
    const page2:Page = await context2.newPage();
    await page2.goto("https://www.vwo.com/");
    await expect(page2).toHaveTitle("VWO | Digital Experience Optimization");
    await page2.close();
});