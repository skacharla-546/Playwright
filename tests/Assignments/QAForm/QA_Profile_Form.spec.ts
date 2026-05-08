import { Page, test, expect } from "@playwright/test";
import { QAProfile } from "./QAProfile";

test("Verify QA Profile Form", async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');

    const personalInfo: QAProfile = {
        firstName: "Satish",
        lastName: "Kacharla",
        gender: "Male",
        profession: "Automation Tester",
        tools: ["UFT", "Protractor"],
        continents: ["Asia", "Europe", "Australia"]
    };

    await fillQAPersonalInfo(page, personalInfo);
    await validateSubmission(page, personalInfo);
    await page.waitForTimeout(5000);

});

async function fillQAPersonalInfo(page: Page, personalInfo: QAProfile): Promise<void> {
    await page.getByRole('textbox', { name: 'First Name' }).fill(personalInfo.firstName);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(personalInfo.lastName);
    await page.getByRole('radio', { name: personalInfo.gender, exact: true }).click();
    await page.getByLabel(personalInfo.profession).click();
    if (personalInfo.tools) {
        for (const tool of personalInfo.tools) {
            await page.getByRole('checkbox', { name: tool }).click();
        }
    }
    if (personalInfo.continents) {
        for (const continent of personalInfo.continents) {
            await page.getByLabel(continent, { exact: true }).click();
        }
    }
    await page.getByRole('button', { name: 'Save profile' }).click();
}

async function validateSubmission(page:Page , expectedData: QAProfile): Promise<void> {
  const output = await page.locator('#submission-output').innerText();
  const actualData = JSON.parse(output.trim());
  expect(actualData).toMatchObject({
    firstName: expectedData.firstName,
    lastName: expectedData.lastName,
    gender: expectedData.gender,
    profession: expectedData.profession,
    tools: expectedData.tools || [],
    continents: expectedData.continents || []
  });
}

