import {URLS} from "../core/const/baseConst";
import {MyUtils} from "../utils/misc/myUtils";
import {PAGES} from "../core/pages/pages";
import {ASSISTANTS} from "../core/assistants/assistants";
import {USERS} from "../core/models/users";
import {ASSERTS} from "../core/asserts/asserts";
import {REPORTER} from "../utils/reporter/reporterAdapter"
import {ENGINEASSISTANT} from "../utils/engine/EngineAssistant";
import {RUNNER} from "../utils/test-runner/testRunner";

const {test, expect} = require("@playwright/test");


test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

RUNNER.describe('login tests', ()=>{

    RUNNER.it('login with wrong user name', async ({page})=>{

        await ASSISTANTS.loginAssistant.loginToSite(page,MyUtils.randomString(),USERS.testUser.userPassword);
        await ASSERTS.popUpAsserts.expectAlertWithText(page,'User does not exist.');
        await ASSERTS.authAsserts.expectLoginPopupIsVisible(page);

    })

    RUNNER.it('login with wrong password', async ({page})=>{
        await ASSISTANTS.loginAssistant.loginToSite(page,USERS.testUser.userName,MyUtils.randomString());
        await ASSERTS.popUpAsserts.expectAlertWithText(page,'Wrong password.');
        await ASSERTS.authAsserts.expectLoginPopupIsVisible(page);
    })

    RUNNER.it('can successfully login into account', async ({page})=>{
        await ASSISTANTS.loginAssistant.loginToSite(page,USERS.testUser.userName,USERS.testUser.userPassword);
        await ENGINEASSISTANT.waitForNetworkIdle(page);
        await ENGINEASSISTANT.waitTimeout(page,2000);
        const welcomeText = await PAGES.mainMenu.welcomeMenu.getText(page);
        await ASSERTS.authAsserts.expectUserMenuIsVisible(page,'Welcome '+ USERS.testUser.userName);


    })

});