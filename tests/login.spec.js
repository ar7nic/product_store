import {URLS, USERS} from "../const/baseConst";
import {MyUtils} from "../utils/myUtils";
import {PAGES} from "../pages/pages";

const {test, expect} = require("@playwright/test");


test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('login tests', ()=>{

    test('login with wrong user name', async ({page})=>{
        await page.locator(PAGES.loginPage.loginMenu).click();
        await page.locator(PAGES.loginPage.loginUserNameInput).fill(MyUtils.randomString());
        await page.locator(PAGES.loginPage.loginPasswordInput).fill(USERS.testUser.userPassword);
        await page.locator(PAGES.loginPage.loginButton).click();
        page.on('dialog',async (dialog)=>{
            expect(dialog.message().includes('User does not exist.'));
            await dialog.accept();
        })
    })
    test('login with wrong password', async ({page})=>{
        await page.locator(PAGES.loginPage.loginMenu).click();
        await page.locator(PAGES.loginPage.loginUserNameInput).fill(USERS.testUser.userName);
        await page.locator(PAGES.loginPage.loginPasswordInput).fill(MyUtils.randomString());
        await page.locator(PAGES.loginPage.loginButton).click();
        page.on('dialog',async (dialog)=>{
            expect(dialog.message().includes('Wrong password.'));
            await dialog.accept();
        })
    })

    test('can successfully login into account', async ({page})=>{
        await page.locator(PAGES.loginPage.loginMenu).click();
        await page.locator(PAGES.loginPage.loginUserNameInput).fill(USERS.testUser.userName);
        await page.locator(PAGES.loginPage.loginPasswordInput).fill(USERS.testUser.userPassword);
        await page.locator(PAGES.loginPage.loginButton).click();
        await page.waitForLoadState('networkidle');
        await expect(page.locator(PAGES.loginPage.welcomeMenu)).toContainText('Welcome');
        await expect(page.locator(PAGES.loginPage.welcomeMenu)).toContainText(USERS.testUser.userName);
    })

});