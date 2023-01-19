import { PAGES } from "../pages/pages";

export class LoginAssistant {
  async loginToSite(page, name, password) {
    await page.locator(PAGES.mainMenu.loginMenu).click();
    await page.locator(PAGES.loginPage.loginUserNameInput).fill(name);
    await page.locator(PAGES.loginPage.loginPasswordInput).fill(password);
    await page.locator(PAGES.loginPage.loginButton).click();
  }
}
