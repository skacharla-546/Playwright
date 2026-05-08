import { test, expect } from "@playwright/test";

test("Verify Web Tables", async ({ page }) => {
    let employeeName = "Kabir";
    await page.goto('https://app.thetestingacademy.com/playwright/webtable');
    await page.locator('#employee-search').fill(employeeName);
    await page.getByRole('button', { name: 'Clear' }).click();
    await page.getByRole('button', { name: 'Select Cloud QA' }).click();
    await page.locator(`//td[contains(text(),"${employeeName}")]/preceding-sibling::td`).click();

    let selectedEmployee: string = await page.locator('.selected-output').innerText();
    await expect(selectedEmployee).toContain(employeeName);

    await page.waitForTimeout(10000);

});