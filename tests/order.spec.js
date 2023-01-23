import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";
import {ASSISTANTS} from "../assistants/assistants";
import {USERS} from "../models/users";
import {v4 as uuidv4} from 'uuid';
const { test, expect } = require('@playwright/test');
const productId = uuidv4();
const token = "YXI3bmljMTY3NDkyMA==";
//const userCookies = {id:`"${productId}"`,cookie:`"${userId}"`,prod_id:1,"flag":false}
let page;
let requestPayload = {id: productId, cookie: token, prod_id: 4, flag: true};

test.beforeAll(async({browser})=>{

    const context = await browser.newContext();
    await context.addCookies([{name:"tokenp_",value:token,url:URLS.siteUrl}]);
    page = await context.newPage();
    // await page.goto(URLS.siteUrl);
})
test.beforeEach(async ({ request}) => {

    const loginResponse = await request.post(URLS.addItemAPIUrl,{
        data:requestPayload
    })
    await page.goto(URLS.siteUrl);
});

test.describe('place order tests', ()=>{
    test('placing order',async ()=>{
        // await ASSISTANTS.cartAssistant.addToCartFirstItem(page);
        await page.waitForTimeout(2000);
        await page.locator(PAGES.mainMenu.cartMenu).click();
        await page.waitForTimeout(2000);
        await page.locator(PAGES.cartPage.totalPrice).waitFor();
        await page.waitForTimeout(2000);
        await ASSISTANTS.orderAssistant.placeTheOrder(page,USERS.testUser);
        await page.locator(PAGES.orderPopup.confirmBtn).waitFor();
        const msg = await page.locator(PAGES.orderPopup.thanksMsg).textContent();
        await expect(msg).toEqual('Thank you for your purchase!');
        await page.locator(PAGES.orderPopup.confirmBtn).click();
        await page.waitForTimeout(2000);
        await page.waitForLoadState('networkidle');
        await page.locator(PAGES.mainMenu.cartMenu).click();
        await page.waitForLoadState('networkidle');
        await expect(await page.locator(PAGES.cartPage.totalPrice)).toBeEmpty();
    })

    test('placing the order without credentials', async ()=>{
        await ASSISTANTS.cartAssistant.addToCartFirstItem(page);
        await page.locator(PAGES.mainMenu.cartMenu).click();
        await page.locator(PAGES.cartPage.totalPrice).waitFor();
        await ASSISTANTS.orderAssistant.placeTheOrderWithMissingData(page,USERS.testUser);
        await expect(await page.locator(PAGES.orderPopup.name)).toBeVisible();

    })
})