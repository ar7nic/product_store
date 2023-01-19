import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";
import {ASSISTANT, Assistants} from "../assistants/assistants";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('place order tests', ()=>{
    test('placing order',async ({page})=>{
        await ASSISTANT.cartAssistant.addToCartFirstItem(page);
        await page.locator(PAGES.mainMenu.cartMenu).click();
        await page.locator(PAGES.cartPage.totalPrice).waitFor();
        await page.waitForTimeout(2000);
        await ASSISTANT.orderAssistant.placeTheOrder(page);
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

    test('placing the order without credentials', async ({page})=>{
        await ASSISTANT.cartAssistant.addToCartFirstItem(page);
        await page.locator(PAGES.mainMenu.cartMenu).click();
        await page.locator(PAGES.cartPage.totalPrice).waitFor();
        await ASSISTANT.orderAssistant.placeTheOrderWithMissingData(page);
        await ASSISTANT.popupAssistant.popUpAccept(page);
        await expect(await page.locator(PAGES.orderPopup.name)).toBeVisible();
    })
})