import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";
import {ASSISTANTS} from "../assistants/assistants";
import {USERS} from "../models/users";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('place order tests', ()=>{
    test('placing order',async ({page})=>{
        await ASSISTANTS.cartAssistant.addToCartFirstItem(page);
        await page.locator(PAGES.mainMenu.cartMenu).click();
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

    test('placing the order without credentials', async ({page})=>{
        await ASSISTANTS.cartAssistant.addToCartFirstItem(page);
        await page.locator(PAGES.mainMenu.cartMenu).click();
        await page.locator(PAGES.cartPage.totalPrice).waitFor();
        await ASSISTANTS.orderAssistant.placeTheOrderWithMissingData(page,USERS.testUser);
        await expect(await page.locator(PAGES.orderPopup.name)).toBeVisible();

    })
})