import {User} from "../models/users";
import {MyUtils} from "../utils/myUtils";

const {test, expect} = require("@playwright/test");
export const testUser = new User("ar7nic","storePassword");

test.beforeEach(async ({ page }) => {
    await page.goto(MyUtils.siteUrl);
});

test.describe('login tests', ()=>{

    test('login with wrong user name', async ({page})=>{
        await page.locator("//a[@id='login2']").click();
        await page.locator("//input[@id='loginusername']").fill(MyUtils.randomString());
        await page.locator("//input[@id='loginpassword']").fill(testUser.userPassword);
        await page.locator("//button[contains(text(),'Log in')]").click();
        page.on('dialog',async (dialog)=>{
            expect(dialog.message().includes('User does not exist.'));
            await dialog.accept();
        })
    })
    test('login with wrong password', async ({page})=>{
        await page.locator("//a[@id='login2']").click();
        await page.locator("//input[@id='loginusername']").fill(testUser.userName);
        await page.locator("//input[@id='loginpassword']").fill(MyUtils.randomString());
        await page.locator("//button[contains(text(),'Log in')]").click();
        page.on('dialog',async (dialog)=>{
            expect(dialog.message().includes('Wrong password.'));
            await dialog.accept();
        })
    })

    test('login into account', async ({page})=>{
        await page.locator("//a[@id='login2']").click();
        await page.locator("//input[@id='loginusername']").fill(testUser.userName);
        await page.locator("//input[@id='loginpassword']").fill(testUser.userPassword);
        await page.locator("//button[contains(text(),'Log in')]").click();
        await expect(page.locator("//a[@id='nameofuser']")).toContainText('Welcome');
        await expect(page.locator("//a[@id='nameofuser']")).toContainText(testUser.userName);
    })

});