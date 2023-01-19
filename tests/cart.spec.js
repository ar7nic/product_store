import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";
import {ASSISTANT, Assistants} from "../assistants/assistants";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('cart-tests', ()=>{
    test('adding items to cart',async ({page})=>{
        //TODO: adding items via API

        const prodForCart = await ASSISTANT.cartAssistant.addToCartFirstItem(page);
        await ASSISTANT.cartAssistant.popUpAccept(page);
        await page.locator(PAGES.cartPage.cartMenu).click();
        await page.locator(PAGES.cartPage.cartItems).waitFor();
        await page.waitForTimeout(1000);
        const element = await ASSISTANT.cartAssistant.findItemsInCart(page,prodForCart.prodName);
        await expect(prodForCart.prodName).toEqual(await element.locator(PAGES.cartPage.itemTitlePath).textContent());
        await expect(prodForCart.prodPrice.split("$")[1].trim()).toEqual(await element.locator(PAGES.cartPage.itemPricePath).textContent());

    })

    test('deleting item from cart',async ({page})=>{

        const prodForCart = await ASSISTANT.cartAssistant.addToCartFirstItem(page);
        await ASSISTANT.popupAssistant.popUpAccept(page);
        await page.locator(PAGES.cartPage.cartMenu).click();
        await page.waitForTimeout(2000);
        await page.locator(PAGES.cartPage.cartItems).first().waitFor();
        const totalPrice = parseInt(await page.locator(PAGES.cartPage.totalPrice).textContent());
        await ASSISTANT.cartAssistant.deleteItemFromCart(page, prodForCart.prodName);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000);
        const delSuccess = parseInt(await page.locator(PAGES.cartPage.totalPrice).textContent()) < totalPrice;
        await expect(delSuccess).toBeTruthy;

    })
})