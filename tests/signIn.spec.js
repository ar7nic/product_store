import {URLS, USERS} from "../const/baseConst";
import {PAGES} from "../pages/pages";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('sign in tests', ()=>{

    test('sign in with existing user', async({page})=>{
        await page.locator(PAGES.signInPage.signInMenu).click();
        await page.locator(PAGES.signInPage.signInUserNameInput).fill(USERS.testUser.userName);
        await page.locator(PAGES.signInPage.signInPasswordInput).fill(USERS.testUser.userPassword);
        await page.locator(PAGES.signInPage.signUpButton).click();
        page.on('dialog',async (dialog)=>{
            expect(dialog.message().includes('This user already exist.'));
            await dialog.accept();
        })
    })
});



