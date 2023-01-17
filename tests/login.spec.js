import {URLS, USERS} from "../const/baseConst";
import {MyUtils} from "../utils/myUtils";
import {PAGES} from "../pages/pages";
import {Assistants} from "../assistants/assistants";

const {test, expect} = require("@playwright/test");


test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('login tests', ()=>{

    test('login with wrong user name', async ({page})=>{

        await Assistants.loginAssistant.loginToSite(page,MyUtils.randomString(),USERS.testUser.userPassword);
        page.on('dialog',async (dialog)=>{
            expect(dialog.message().includes('User does not exist.'));
            await dialog.accept();
        })
    })

    test('login with wrong password', async ({page})=>{

        await Assistants.loginAssistant.loginToSite(page,USERS.testUser.userName,MyUtils.randomString());

        page.on('dialog',async (dialog)=>{
            expect(dialog.message() === 'Wrong password.');
                //.includes('Wrong password.'));
            await dialog.accept();
        })
    })

    test.only('can successfully login into account', async ({page})=>{
        await Assistants.loginAssistant.loginToSite(page,USERS.testUser.userName,USERS.testUser.userPassword);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);
        const welcomeText = await page.locator(PAGES.loginPage.welcomeMenu).textContent();
        await expect(welcomeText).toEqual('Welcome '+ USERS.testUser.userName);
        // await expect(welcomeText.includes('Welcome')).toBeTruthy;
        // await expect(welcomeText.includes(USERS.testUser.userName)).toBeTruthy;
    })

});