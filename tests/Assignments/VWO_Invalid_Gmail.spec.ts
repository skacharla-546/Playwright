import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage');
  await page.getByRole('textbox', { name: 'Business Email' }).click();
  await page.getByRole('textbox', { name: 'Business Email' }).fill('sample@gmail.com');
  await page.getByRole('checkbox', { name: 'I agree to VWO\'s Privacy' }).check();
  await page.getByRole('button', { name: 'Create a Free Trial Account' }).click();
  await expect(page.locator('#page-free-trial-signup-form-step1 > div > div')).toContainText('gmail.com doesn\'t look like a business domain. Please use your business email.');
});