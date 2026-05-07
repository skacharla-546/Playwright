import { test, expect } from '@playwright/test';

test("Verify Bank Transfer", async ({ page }) => { 
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    await page.getByRole("button", { name: "Sign Up" }).click();
    await page.getByPlaceholder('John Doe', { exact: true }).fill("John Doe");
    await page.getByPlaceholder('you@example.com', { exact: true }).fill("john.doe@example.com");
    await page.locator('input[type="password"]').fill("Password123");
    await page.getByRole("button", { name: "Create Account" }).click();
    await expect(page.getByRole('heading', { name: '$50,000.00' })).toBeVisible();

    await page.getByRole('button', { name: 'Transfer Funds' }).click();
    await page.getByPlaceholder('0.00', { exact: true }).fill("5000");
    await page.getByPlaceholder('e.g. Rent for October', { exact: true }).fill("Fund Transfer to Friend");
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.locator("//span[text()='Amount']/following-sibling::span")).toHaveText("$5000.00");
    await page.getByRole('button', { name: 'Confirm Transfer' }).click();
    await page.locator("button:has-text('Dashboard')").click();
    await expect(page.locator("//p[text()='Total Balance']/following-sibling::h3")).toContainText("45,000.00");

    await page.waitForTimeout(5000);
    await page.close();
 });