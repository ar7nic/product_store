import { PAGES } from "../pages/pages";
import {test} from "@playwright/test";


export class LoginAssistant {
  async loginToSite(page, name, password) {
    await test.step('Open login pop-up', async ()=>{
       await PAGES.mainMenu.loginMenu.clickElem(page);

    })
    await test.step('Fill the login form', async ()=>{
      await PAGES.loginPage.loginUserNameInput.fillField(page,name)
      await PAGES.loginPage.loginPasswordInput.fillField(page,password);

    })
    await test.step('Click Login button', async ()=>{
      await PAGES.loginPage.loginButton.clickElem(page);

    })

  }
}
