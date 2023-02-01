import {URLS} from "../core/const/baseConst";
import {PAGES} from "../core/pages/pages";
import {ASSISTANTS} from "../core/assistants/assistants";
import {USERS} from "../core/models/users";
import {APIUTILS} from "../core/api/buyerApi";
import {ASSERTS} from "../core/asserts/asserts";
import {REPORTER} from "../utils/reporter/reporterAdapter";
import {ENGINEASSISTANT} from "../utils/engine/EngineAssistant";
import {RUNNER} from "../utils/test-runner/testRunner";
const { test, expect } = require('@playwright/test');
let page;
let loginPayload = {username: "ar7nic", password: "c3RvcmVQYXNzd29yZA=="};

test.beforeAll(async({browser,request})=>{

    const context = await browser.newContext();
    await APIUTILS.getToken(request,loginPayload); // new
    await APIUTILS.setTokenToCookies(context); //new
    page = await context.newPage();

})
test.beforeEach(async ({request}) => {

    await APIUTILS.addItemToCart(request,4); //new
    await page.goto(URLS.siteUrl);
});

RUNNER.describe('place order tests', ()=>{
    RUNNER.it('placing order',async ()=>{

        await REPORTER.testStep('Open the cart', async () => {
            await PAGES.mainMenu.cartMenu.clickElem(page);
            await ENGINEASSISTANT.waitForNetworkIdle(page);
            await ENGINEASSISTANT.waitTimeout(page,2000);
            await PAGES.cartPage.totalPrice.waitForElem(page);

        })
        await REPORTER.testStep('Place the order',async ()=>{
            await ASSISTANTS.orderAssistant.placeTheOrder(page,USERS.testUser);
        })
        await REPORTER.testStep('Check if confirm pop-up is opened, accepting it',async ()=>{
            await PAGES.orderPopup.confirmBtn.waitForElem(page);
            const msg = await PAGES.orderPopup.thanksMsg.getText(page);
            await ASSERTS.orderAsserts.thankYouPopupIsShown(page,msg);
            await PAGES.orderPopup.confirmBtn.clickElem(page);
            await ENGINEASSISTANT.waitTimeout(page,2000);
        })
        await REPORTER.testStep('Check if the cart is empty after the order placed',async ()=>{
            await ENGINEASSISTANT.waitForNetworkIdle(page);
            await PAGES.mainMenu.cartMenu.clickElem(page);
            await ENGINEASSISTANT.waitForNetworkIdle(page);
            await ASSERTS.orderAsserts.cartIsEmptyAfterOrder(page);

        })

    })

    RUNNER.it('placing the order without credentials', async ()=>{
        await REPORTER.testStep('Open the cart', async ()=> {
            await PAGES.mainMenu.cartMenu.clickElem(page);
            await PAGES.cartPage.totalPrice.waitForElem(page);
        })

        await REPORTER.testStep('Placing the order', async ()=>{
            await ASSISTANTS.orderAssistant.placeTheOrderWithMissingData(page,USERS.testUser);
        })


        await REPORTER.testStep('Check if the pop-up still active', async ()=>{
            await ASSERTS.orderAsserts.orderPopupIsVisible(page);

        })

    })
})