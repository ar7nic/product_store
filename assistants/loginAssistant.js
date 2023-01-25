import { PAGES } from "../pages/pages";
import {test} from "@playwright/test";
import {SiteElement} from "../utils/SiteElement";

export class LoginAssistant {
  async loginToSite(page, name, password) {
    await test.step('Open login pop-up', async ()=>{
       await PAGES.mainMenu.loginMenu.clickElem(page);
      // await page.locator(PAGES.mainMenu.loginMenu).click();
    })
    await test.step('Fill the login form', async ()=>{
      await PAGES.loginPage.loginUserNameInput.fillField(page,name)
      // await page.locator(PAGES.loginPage.loginUserNameInput).fill(name);
      await PAGES.loginPage.loginPasswordInput.fillField(page,password);
      // await page.locator(PAGES.loginPage.loginPasswordInput).fill(password);
    })
    await test.step('Click Login button', async ()=>{
      await PAGES.loginPage.loginButton.clickElem(page);
      // await page.locator(PAGES.loginPage.loginButton).click();
    })

  }
}
