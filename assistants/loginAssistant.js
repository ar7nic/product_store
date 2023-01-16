import {URLS, USERS} from "../const/baseConst";
import {MyUtils} from "../utils/myUtils";
import {PAGES} from "../pages/pages";

export class LoginAssistant {
    async loginToSite(page, name, password)  {

    await page.locator(PAGES.loginPage.loginMenu).click();
    await page.locator(PAGES.loginPage.loginUserNameInput).fill(name);
    await page.locator(PAGES.loginPage.loginPasswordInput).fill(password);
    await page.locator(PAGES.loginPage.loginButton).click();
}

}