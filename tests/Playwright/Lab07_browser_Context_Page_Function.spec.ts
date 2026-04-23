import { Browser, BrowserContext, chromium, Page } from 'playwright';
import {test, expect} from '@playwright/test';

async function test1(): Promise<void> {
    const browser: Browser = await chromium.launch({headless: false});
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto('https://www.vwo.com/#login');
    console.log("executed successfully");
}


test1();