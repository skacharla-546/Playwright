import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly makeAppointmentBtn: Locator;
  readonly userName: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.makeAppointmentBtn = page.locator("#btn-make-appointment");
    this.userName = page.locator("#txt-username");
    this.password = page.locator("#txt-password");
    this.loginButton = page.locator("#btn-login");
  }

  async login(username: string, password: string): Promise<void> {
    await this.makeAppointmentBtn.click();
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}