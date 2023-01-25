import { PAGES } from "../pages/pages";

export class SignInAssistant {
  async signInToSite(page, user) {
    await PAGES.mainMenu.signInMenu.clickElem(page);
    // await page.locator(PAGES.mainMenu.signInMenu).click();
    await PAGES.signInPopUp.signInUserNameInput.fillField(page,user.name)
    // await page.locator(PAGES.signInPopUp.signInUserNameInput).fill(name);
    await PAGES.signInPopUp.signInPasswordInput.fillField(page,user.password);
    // await page.locator(PAGES.signInPopUp.signInPasswordInput).fill(user.password);
    await PAGES.signInPopUp.signUpButton.clickElem(page);
    // await page.locator(PAGES.signInPopUp.signUpButton).click();
  }
}
