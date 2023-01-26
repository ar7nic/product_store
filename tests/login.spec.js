import {URLS} from "../const/baseConst";
import {MyUtils} from "../utils/myUtils";
import {PAGES} from "../pages/pages";
import {ASSISTANTS} from "../assistants/assistants";
import {USERS} from "../models/users";
import {ASSERTS} from "../asserts/asserts";

const {test, expect} = require("@playwright/test");


test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('login tests', ()=>{

    test.only('login with wrong user name', async ({page})=>{

        await ASSISTANTS.loginAssistant.loginToSite(page,MyUtils.randomString(),USERS.testUser.userPassword);
        await ASSERTS.authAsserts.expectAlertWithText(page,'User does not exist.');
        await ASSERTS.authAsserts.expectLoginPopupIsVisible(page);
        // await expect(page.locator(PAGES.loginPage.loginModal.elemLocator)).toBeVisible;
        // await expect(await ASSISTANTS.popupAssistant.popUpAccept(page)).toEqual('User does not exist.');

    })

    test('login with wrong password', async ({page})=>{

        await ASSISTANTS.loginAssistant.loginToSite(page,USERS.testUser.userName,MyUtils.randomString());
        await expect(await ASSISTANTS.popupAssistant.popUpAccept(page)).toEqual('Wrong password.');

    })

    test('can successfully login into account', async ({page})=>{
        await ASSISTANTS.loginAssistant.loginToSite(page,USERS.testUser.userName,USERS.testUser.userPassword);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000);
        const welcomeText = await PAGES.mainMenu.welcomeMenu.getText(page);
        // console.log(welcomeText)
        // const welcomeText = await page.locator(PAGES.mainMenu.welcomeMenu).textContent();
        await expect(welcomeText).toEqual('Welcome '+ USERS.testUser.userName);

    })

});