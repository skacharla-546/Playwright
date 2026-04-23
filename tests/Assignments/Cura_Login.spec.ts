import {test, expect} from '@playwright/test';
import { LoginPage } from './loginPage.ts';

test('Verify Cura app Login', async ({page}) => {

    let makeAppointmentBtn = page.locator("#btn-make-appointment");
    let userName = page.locator("#txt-username");
    let password = page.locator("#txt-password");
    let loginButton = page.locator("#btn-login");

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(makeAppointmentBtn).toBeVisible();
    await makeAppointmentBtn.click();
    await userName.fill("John Doe");
    await password.fill("ThisIsNotAPassword");
    await loginButton.click();
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    await expect(page.locator(".text-center").first()).toHaveText("Make Appointment");
});

test('Verify Cura app Login via POM', async ({page}) => {
    const loginPage = new LoginPage(page);
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page.locator("#btn-make-appointment")).toBeVisible();
    await page.locator("#btn-make-appointment").click();
    await loginPage.login("John Doe", "ThisIsNotAPassword");
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    await expect(page.locator(".text-center").first()).toHaveText("Make Appointment");
});