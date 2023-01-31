import { PAGES } from "../pages/pages";
import {REPORTER} from "../../utils/reporter/reporterAdapter";

export class SignInAssistant {
  async signInToSite(page, user) {

    await REPORTER.testStep ('Open sign-in pop-up', async ()=> {
      await PAGES.mainMenu.signInMenu.clickElem(page);
    })

    await REPORTER.testStep('Fill the sign-in form', async ()=> {
      await PAGES.signInPopUp.signInUserNameInput.fillField(page, user.userName)
      await PAGES.signInPopUp.signInPasswordInput.fillField(page, user.userPassword);
    })

    await REPORTER.testStep('Click Sign-Up button', async ()=> {
      await PAGES.signInPopUp.signUpButton.clickElem(page);
    })
  }
}
