import { test, expect } from '@playwright/test';

test('Verify VWO app Login', async ({ page }) => {

    let textBox_EmailId = page.getByRole("textbox", { name: "Email address", exact: true });
    let textBox_Password = page.getByRole("textbox", { name: "Password", exact: true });
    let button_SignIn = page.getByRole("button", { name: "Sign in", exact: true });
    let error_Message = page.locator('[data-qa="rixawilomi"]');
    await page.goto("https://app.vwo.com/#/login");
    await textBox_EmailId.fill("satish");
    await expect(textBox_EmailId).toHaveValue("satish");
    await textBox_Password.fill("password");
    await expect(textBox_Password).toHaveValue("password");
    await button_SignIn.click();
    await expect(error_Message).toBeVisible();
    await expect(error_Message).
        toHaveText("Your email, password, IP address or location did not match");

});

test("Verify Cura app Login with valid credentials", async ({ page }) => {
    let textBox_Username = page.getByLabel('Username')
    let textBox_Password = page.getByLabel('Password')
    let button_SignIn = page.getByRole('button', { name: 'Login' })
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await textBox_Username.fill("John Doe");
    await expect(textBox_Username).toHaveValue("John Doe");
    await textBox_Password.fill("ThisIsNotAPassword");
    await expect(textBox_Password).toHaveValue("ThisIsNotAPassword");
    await button_SignIn.click();
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    await expect(page.locator(".text-center").first()).toHaveText("Make Appointment");
});

test("Verify Book Appointment", async ({ page }) => {
    let textBox_Username = page.getByLabel('Username')
    let textBox_Password = page.getByLabel('Password')
    let button_SignIn = page.getByRole('button', { name: 'Login' })
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await textBox_Username.fill("John Doe");
    await expect(textBox_Username).toHaveValue("John Doe");
    await textBox_Password.fill("ThisIsNotAPassword");
    await expect(textBox_Password).toHaveValue("ThisIsNotAPassword");
    await button_SignIn.click();
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    await expect(page.locator(".text-center").first()).toHaveText("Make Appointment");
    await page.getByRole("combobox", { name: "Facility" }).selectOption("Hongkong CURA Healthcare Center");
    await page.getByRole("checkbox", { name: "Apply for hospital readmission" }).check();
    await page.getByRole("radio", { name: "Medicare" }).check();
    await page.getByRole('textbox', { name: 'Visit Date (Required)' }).click();
    await page.getByRole('cell', { name: '15' }).click();
    await page.getByRole('textbox', { name: 'Comment' }).fill("This is a comment");
    await page.getByRole("button", { name: "Book Appointment" }).click();
    await expect(await page.getByRole('heading', { name: 'Appointment Confirmation' })).toBeVisible();
});