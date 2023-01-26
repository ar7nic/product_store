import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";
import {ASSISTANTS} from "../assistants/assistants";
import {ASSERTS} from "../asserts/asserts";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('cart-tests', ()=>{
    test('adding items to cart',async ({page})=>{

        const prodForCart = await ASSISTANTS.cartAssistant.addToCartFirstItem(page);
        await ASSISTANTS.popupAssistant.popUpAccept(page);
        await PAGES.mainMenu.cartMenu.clickElem(page);
        await PAGES.cartPage.cartItems.waitForElem(page);
        await page.waitForTimeout(1000);
        // const element = await ASSISTANTS.cartAssistant.findItemsInCart(page,prodForCart.prodName);
        // await expect(prodForCart.prodName).toEqual(
        //     await element.locator(PAGES.cartPage.itemTitlePath.elemLocator).textContent()   //TODO
        // );
        await ASSERTS.cartAsserts.productAddedToCartPresentsInTheCart(page,prodForCart.prodName);
        await ASSERTS.cartAsserts.productPriceAddedToCartMatchesPriceInCart(page,prodForCart.prodName,prodForCart.prodPrice);
        // await expect(prodForCart.prodPrice.split("$")[1].trim()).toEqual(await element.locator(PAGES.cartPage.itemPricePath.elemLocator).textContent());

    })

    test('deleting item from cart',async ({page})=>{

        const prodForCart = await ASSISTANTS.cartAssistant.addToCartFirstItem(page);
        await PAGES.mainMenu.cartMenu.clickElem(page);
        await page.waitForTimeout(2000);
        await PAGES.cartPage.cartItems.waitForElem(page);
        const totalPrice = parseInt(
            await PAGES.cartPage.totalPrice.getText(page)
        );
        await ASSISTANTS.cartAssistant.deleteItemFromCart(page, prodForCart.prodName);
        // await page.waitForLoadState('networkidle');
        // await page.waitForTimeout(2000);
        const delSuccess = parseInt(
            await PAGES.cartPage.totalPrice.getText(page) //TODO calculations transfer to Asserts or there
        ) < totalPrice;
        await ASSERTS.cartAsserts.totalPriceIsLessAfterDeletingItem(page,delSuccess);
        // await expect(delSuccess).toBeTruthy;

    })
})