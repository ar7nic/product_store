// @ts-check
const { test, expect } = require('@playwright/test');
const userName = "ar7nic";
const userPassword = "storePassword";
const randomString = (Math.random() + 1).toString(36).slice(-6);

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
});

test.describe('sign in tests', ()=>{

    test('sign in with existing user', async({page})=>{
        await page.locator("//a[@id='signin2']").click();
        await page.locator("//input[@id='sign-username']").fill(userName);
        await page.locator("//input[@id='sign-password']").fill(userPassword);
        await page.locator("//button[contains(text(),'Sign up')]").click();
        page.on('dialog',async (dialog)=>{
            expect(dialog.message().includes('This user already exist.'));
            await dialog.accept();
        })
    })
});

test.describe('login tests', ()=>{

    test('login with wrong user name', async ({page})=>{
        await page.locator("//a[@id='login2']").click();
        await page.locator("//input[@id='loginusername']").fill(randomString);
        await page.locator("//input[@id='loginpassword']").fill(userPassword);
        await page.locator("//button[contains(text(),'Log in')]").click();
        page.on('dialog',async (dialog)=>{
            expect(dialog.message().includes('User does not exist.'));
            await dialog.accept();
            })
        })
    test('login with wrong password', async ({page})=>{
        await page.locator("//a[@id='login2']").click();
        await page.locator("//input[@id='loginusername']").fill(userName);
        await page.locator("//input[@id='loginpassword']").fill(randomString);
        await page.locator("//button[contains(text(),'Log in')]").click();
        page.on('dialog',async (dialog)=>{
            expect(dialog.message().includes('Wrong password.'));
            await dialog.accept();
            })
        })

    test('login into account', async ({page})=>{
        await page.locator("//a[@id='login2']").click();
        await page.locator("//input[@id='loginusername']").fill(userName);
        await page.locator("//input[@id='loginpassword']").fill(userPassword);
        await page.locator("//button[contains(text(),'Log in')]").click();
        await expect(page.locator("//a[@id='nameofuser']")).toContainText('Welcome')
    })

});

