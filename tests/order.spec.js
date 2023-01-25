import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";
import {ASSISTANTS} from "../assistants/assistants";
import {USERS} from "../models/users";
import {v4 as uuidv4} from 'uuid';
import {request} from "@playwright/test";
import {APIUTILS} from "../utils/ApiUtils";
const { test, expect } = require('@playwright/test');
const productId = uuidv4();
// let token = "YXI3bmljMTY3NDkyMA==";
let token;
let page;


let requestPayload;
let loginPayload = {username: "ar7nic", password: "c3RvcmVQYXNzd29yZA=="};

test.beforeAll(async({browser,request})=>{

    const context = await browser.newContext();
    await APIUTILS.getToken(request,loginPayload); // new
    // const loginResponse = await request.post(URLS.loginAPIUrl,{
    //     data:loginPayload
    // });
    // const loginResponseJson = await loginResponse.json();
    // token = loginResponseJson.split(":")[1].trim();
    await APIUTILS.setTokenToCookies(context); //new
    // await context.addCookies([{name:"tokenp_",value:token,url:URLS.siteUrl}]);
    page = await context.newPage();

})
test.beforeEach(async ({request}) => {

    await APIUTILS.addItemToCart(request,4); //new
    // requestPayload = {id: productId, cookie: token, prod_id: 4, flag: true};
    // const apiResponse = await request.post(URLS.addItemAPIUrl,{
    //     data:requestPayload
    // })
    // expect(apiResponse.ok()).toBeTruthy();
    await page.goto(URLS.siteUrl);
});

test.describe('place order tests', ()=>{
    test('placing order',async ()=>{
        // await ASSISTANTS.cartAssistant.addToCartFirstItem(page);
        await test.step('Open the cart', async () => {
            await page.waitForTimeout(2000);
            await PAGES.mainMenu.cartMenu.clickElem(page);
            // await page.locator(PAGES.mainMenu.cartMenu).click();
            await page.waitForTimeout(2000);
            await PAGES.cartPage.totalPrice.waitForElem(page);
            // await page.locator(PAGES.cartPage.totalPrice).waitFor();
            await page.waitForTimeout(2000);
        })
        await test.step('Place the order',async ()=>{
            await ASSISTANTS.orderAssistant.placeTheOrder(page,USERS.testUser);
        })
        await test.step('Check if confirm pop-up is opened, accepting it',async ()=>{
            await PAGES.orderPopup.confirmBtn.waitForElem(page);
            // await page.locator(PAGES.orderPopup.confirmBtn).waitFor();
            const msg = await PAGES.orderPopup.thanksMsg.getText(page);
            // const msg = await page.locator(PAGES.orderPopup.thanksMsg).textContent();
            await expect(msg).toEqual('Thank you for your purchase!');
            await PAGES.orderPopup.confirmBtn.clickElem(page);
            // await page.locator(PAGES.orderPopup.confirmBtn).click();
            await page.waitForTimeout(2000);
        })
        await test.step('Check if the cart is empty after the order placed',async ()=>{
            await page.waitForLoadState('networkidle');
            await PAGES.mainMenu.cartMenu.clickElem(page);
            // await page.locator(PAGES.mainMenu.cartMenu).click();
            await page.waitForLoadState('networkidle');
            await expect(await page.locator(PAGES.cartPage.totalPrice.elemLocator)).toBeEmpty();
        })

    })

    test('placing the order without credentials', async ()=>{
        // await ASSISTANTS.cartAssistant.addToCartFirstItem(page);
        await test.step('Open the cart', async ()=> {
            await PAGES.mainMenu.cartMenu.clickElem(page);
            // await page.locator(PAGES.mainMenu.cartMenu).click();
            await PAGES.cartPage.totalPrice.waitForElem(page);
            // await page.locator(PAGES.cartPage.totalPrice).waitFor();
        })

        await test.step('Placing the order', async ()=>{
            await ASSISTANTS.orderAssistant.placeTheOrderWithMissingData(page,USERS.testUser);
        })

        await test.step('Check if the pop-up still active', async ()=>{
            await expect(await page.locator(PAGES.orderPopup.name.elemLocator)).toBeVisible();
        })

    })
})