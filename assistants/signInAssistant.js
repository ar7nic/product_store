import { PAGES } from "../pages/pages";

export class SignInAssistant {
  async signInToSite(page, user) {
    await PAGES.mainMenu.signInMenu.clickElem(page);
    await PAGES.signInPopUp.signInUserNameInput.fillField(page, user.userName)
    await PAGES.signInPopUp.signInPasswordInput.fillField(page,user.userPassword);
    await PAGES.signInPopUp.signUpButton.clickElem(page);

  }
}
