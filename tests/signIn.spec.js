import {URLS, USERS} from "../const/baseConst";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('sign in tests', ()=>{

    test('sign in with existing user', async({page})=>{
        await page.locator("//a[@id='signin2']").click();
        await page.locator("//input[@id='sign-username']").fill(USERS.testUser.userName);
        await page.locator("//input[@id='sign-password']").fill(USERS.testUser.userPassword);
        await page.locator("//button[contains(text(),'Sign up')]").click();
        page.on('dialog',async (dialog)=>{
            expect(dialog.message().includes('This user already exist.'));
            await dialog.accept();
        })
    })
});



