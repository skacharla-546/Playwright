import {test, expect, BrowserContext, Page} from '@playwright/test'

test('Single Context Multiple Page', async ({browser}) => { 
    const context:BrowserContext = await browser.newContext();
    const page1:Page = await context.newPage();
    await page1.goto("https://app.vwo.com/#login");
    await expect(page1).toHaveTitle("Login - VWO"); 
    const page2:Page = await context.newPage();
    await page2.goto("https://www.vwo.com/");
    await expect(page2).toHaveTitle("VWO | Digital Experience Optimization");
    await page1.close();
    await page2.close();
});