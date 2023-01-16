import {URLS, USERS} from "../const/baseConst";
import {MyUtils} from "../utils/myUtils";
import {PAGES} from "../pages/pages";
import {Assistants} from "../assistants/assistants";

const {test, expect} = require("@playwright/test");


test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('login tests', ()=>{

    test.only('login with wrong user name', async ({page})=>{

        await Assistants.loginAssistant.loginToSite(page,MyUtils.randomString(),USERS.testUser.userPassword);
        // await page.locator(PAGES.loginPage.loginMenu).click();
        // await page.locator(PAGES.loginPage.loginUserNameInput).fill(MyUtils.randomString());
        // await page.locator(PAGES.loginPage.loginPasswordInput).fill(USERS.testUser.userPassword);
        // await page.locator(PAGES.loginPage.loginButton).click();
        page.on('dialog',async (dialog)=>{
            expect(dialog.message().includes('User does not exist.'));
            await dialog.accept();
        })
    })
    test('login with wrong password', async ({page})=>{

        await Assistants.loginAssistant.loginToSite(page,USERS.testUser.userName,MyUtils.randomString());
        // await page.locator(PAGES.loginPage.loginMenu).click();
        // await page.locator(PAGES.loginPage.loginUserNameInput).fill(USERS.testUser.userName);
        // await page.locator(PAGES.loginPage.loginPasswordInput).fill(MyUtils.randomString());
        // await page.locator(PAGES.loginPage.loginButton).click();
        page.on('dialog',async (dialog)=>{
            expect(dialog.message() === 'Wrong password.');
                //.includes('Wrong password.'));
            await dialog.accept();
        })
    })

    test('can successfully login into account', async ({page})=>{
        await Assistants.loginAssistant.loginToSite(page,USERS.testUser.userName,USERS.testUser.userPassword)
        // await page.locator(PAGES.loginPage.loginMenu).click();
        // await page.locator(PAGES.loginPage.loginUserNameInput).fill(USERS.testUser.userName);
        // await page.locator(PAGES.loginPage.loginPasswordInput).fill(USERS.testUser.userPassword);
        // await page.locator(PAGES.loginPage.loginButton).click();
        await page.waitForLoadState('networkidle');
        const welcomeText = await page.locator(PAGES.loginPage.welcomeMenu).textContent();
        await expect(welcomeText.includes('Welcome')).toBeTruthy;
        await expect(welcomeText.includes(USERS.testUser.userName)).toBeTruthy;
    })

});