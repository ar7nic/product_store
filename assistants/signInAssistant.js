import { PAGES } from "../pages/pages";

export class SignInAssistant {
  async signInToSite(page, name, password) {
    await page.locator(PAGES.mainMenu.signInMenu).click();
    await page.locator(PAGES.signInPopUp.signInUserNameInput).fill(name);
    await page.locator(PAGES.signInPopUp.signInPasswordInput).fill(password);
    await page.locator(PAGES.signInPopUp.signUpButton).click();
  }
}
