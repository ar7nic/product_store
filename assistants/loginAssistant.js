import { PAGES } from "../pages/pages";
import {test} from "@playwright/test";

export class LoginAssistant {
  async loginToSite(page, name, password) {
    await test.step('Open login pop-up', async ()=>{
      await page.locator(PAGES.mainMenu.loginMenu).click();
    })
    await test.step('Fill the login form', async ()=>{
      await page.locator(PAGES.loginPage.loginUserNameInput).fill(name);
      await page.locator(PAGES.loginPage.loginPasswordInput).fill(password);
    })
    await test.step('Click Login button', async ()=>{
      await page.locator(PAGES.loginPage.loginButton).click();
    })

  }
}
