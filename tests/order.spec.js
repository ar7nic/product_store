import {URLS} from "../core/const/baseConst";
import {PAGES} from "../core/pages/pages";
import {ASSISTANTS} from "../core/assistants/assistants";
import {USERS} from "../core/models/users";
import {APIUTILS} from "../core/api/buyerApi";
import {ASSERTS} from "../core/asserts/asserts";
import {REPORTER} from "../utils/reporter/reporterAdapter";
const { test, expect } = require('@playwright/test');
let page;
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
    REPORTER.it('placing order',async ()=>{

        await test.step('Open the cart', async () => {
            // await
            await page.waitForTimeout(2000);
            await PAGES.mainMenu.cartMenu.clickElem(page);
            await page.waitForTimeout(2000);
            await PAGES.cartPage.totalPrice.waitForElem(page);
            await page.waitForTimeout(2000);
        })
        await test.step('Place the order',async ()=>{
            await ASSISTANTS.orderAssistant.placeTheOrder(page,USERS.testUser);
        })
        await test.step('Check if confirm pop-up is opened, accepting it',async ()=>{
            await PAGES.orderPopup.confirmBtn.waitForElem(page);
            const msg = await PAGES.orderPopup.thanksMsg.getText(page);
            await ASSERTS.orderAsserts.thankYouPopupIsShown(page,msg);
            await PAGES.orderPopup.confirmBtn.clickElem(page);
            await page.waitForTimeout(2000);
        })
        await test.step('Check if the cart is empty after the order placed',async ()=>{
            await page.waitForLoadState('networkidle');
            await PAGES.mainMenu.cartMenu.clickElem(page);
            await page.waitForLoadState('networkidle');
            await ASSERTS.orderAsserts.cartIsEmptyAfterOrder(page);

        })

    })

    REPORTER.it('placing the order without credentials', async ()=>{
        await test.step('Open the cart', async ()=> {
            await PAGES.mainMenu.cartMenu.clickElem(page);
            await PAGES.cartPage.totalPrice.waitForElem(page);
        })

        await test.step('Placing the order', async ()=>{
            await ASSISTANTS.orderAssistant.placeTheOrderWithMissingData(page,USERS.testUser);
        })


        await test.step('Check if the pop-up still active', async ()=>{
            await ASSERTS.orderAsserts.orderPopupIsVisible(page);

        })

    })
})