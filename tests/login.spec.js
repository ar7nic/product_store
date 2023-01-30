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

    test('login with wrong user name', async ({page})=>{

        await ASSISTANTS.loginAssistant.loginToSite(page,MyUtils.randomString(),USERS.testUser.userPassword);
        await ASSERTS.popUpAsserts.expectAlertWithText(page,'User does not exist.');
        await ASSERTS.authAsserts.expectLoginPopupIsVisible(page);

    })

    test('login with wrong password', async ({page})=>{
        await ASSISTANTS.loginAssistant.loginToSite(page,USERS.testUser.userName,MyUtils.randomString());
        await ASSERTS.popUpAsserts.expectAlertWithText(page,'Wrong password.');
        await ASSERTS.authAsserts.expectLoginPopupIsVisible(page);
    })

    test('can successfully login into account', async ({page})=>{
        await ASSISTANTS.loginAssistant.loginToSite(page,USERS.testUser.userName,USERS.testUser.userPassword);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000);
        const welcomeText = await PAGES.mainMenu.welcomeMenu.getText(page);
        await ASSERTS.authAsserts.expectUserMenuIsVisible(page,'Welcome '+ USERS.testUser.userName);


    })

});