import {URLS} from "../const/baseConst";
import {MyUtils} from "../utils/myUtils";
import {PAGES} from "../pages/pages";
import {ASSISTANT} from "../assistants/assistants";
import {USERS} from "../models/users";

const {test, expect} = require("@playwright/test");


test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('login tests', ()=>{

    test('login with wrong user name', async ({page})=>{

        await ASSISTANT.loginAssistant.loginToSite(page,MyUtils.randomString(),USERS.testUser.userPassword);
        await ASSISTANT.popupAssistant.popUpAccept(page);
        //TODO: assert message text from pop-up

        // page.on('dialog',async (dialog)=>{
        //     expect(dialog.message().includes('User does not exist.'));
        //     await dialog.accept();
        // })
    })

    test.only('login with wrong password', async ({page})=>{

        await ASSISTANT.loginAssistant.loginToSite(page,USERS.testUser.userName,MyUtils.randomString());

        await expect(await ASSISTANT.popupAssistant.popUpAccept(page)).toEqual('Wrong password.');
        // await ASSISTANT.popupAssistant.popUpAccept(page);
        //TODO: assert message text from pop-up

        // page.on('dialog',async (dialog)=>{
        //     expect(dialog.message() === 'Wrong password.');
        //     await dialog.accept();
        // })
    })

    test('can successfully login into account', async ({page})=>{
        await ASSISTANT.loginAssistant.loginToSite(page,USERS.testUser.userName,USERS.testUser.userPassword);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);
        const welcomeText = await page.locator(PAGES.loginPage.welcomeMenu).textContent();
        await expect(welcomeText).toEqual('Welcome '+ USERS.testUser.userName);

    })

});