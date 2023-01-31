import { PAGES } from "../pages/pages";
import {test} from "@playwright/test";
import {REPORTER} from "../../utils/reporter/reporterAdapter";

export class LoginAssistant {
  async loginToSite(page, name, password) {
    await REPORTER.testStep ('Open login pop-up', async ()=>{
       await PAGES.mainMenu.loginMenu.clickElem(page);

    })
    await REPORTER.testStep('Fill the login form', async ()=>{
      await PAGES.loginPage.loginUserNameInput.fillField(page,name)
      await PAGES.loginPage.loginPasswordInput.fillField(page,password);

    })
    await REPORTER.testStep('Click Login button', async ()=>{
      await PAGES.loginPage.loginButton.clickElem(page);

    })

  }
}
