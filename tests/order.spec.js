import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";
import {Assistants} from "../assistants/assistants";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('place order tests', ()=>{
    test.only('placing order',async ({page})=>{
        await Assistants.cartAssistant.addToCartFirstItem();
        await page.locator(PAGES.cartPage.cartMenu).click();
        await page.locator(PAGES.cartPage.totalPrice).waitFor();
    //    await page.waitForTimeout(1000);
        await Assistants.orderAssistant.placeTheOrder(page);
        await page.locator(PAGES.orderPopup.confirmBtn).waitFor();
        expect(page.locator(PAGES.orderPopup.thanksMsg)).toEqual('Thank you for your purchase!');
    })
})