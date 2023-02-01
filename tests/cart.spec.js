import {URLS} from "../core/const/baseConst";
import {PAGES} from "../core/pages/pages";
import {ASSISTANTS} from "../core/assistants/assistants";
import {ASSERTS} from "../core/asserts/asserts";
import {REPORTER} from "../utils/reporter/reporterAdapter";
import {RUNNER} from "../utils/test-runner/testRunner";
const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

RUNNER.describe('cart-tests', ()=>{
    RUNNER.it('adding items to cart',async ({page})=>{

        const prodForCart = await ASSISTANTS.cartAssistant.addToCartFirstItem(page);
        await PAGES.mainMenu.cartMenu.clickElem(page);
        await PAGES.cartPage.cartItems.waitForElem(page);
        await ASSERTS.popUpAsserts.expectTextEqualTo(prodForCart.msg,'Product added')
        await ASSERTS.cartAsserts.productAddedToCartPresentsInTheCart(page,prodForCart.prodName);
        await ASSERTS.cartAsserts.productPriceAddedToCartMatchesPriceInCart(page,prodForCart.prodName,prodForCart.prodPrice);

    })

    RUNNER.it('deleting item from cart',async ({page})=>{

        const prodForCart = await ASSISTANTS.cartAssistant.addToCartFirstItem(page);
        await PAGES.mainMenu.cartMenu.clickElem(page);
        await PAGES.cartPage.cartItems.waitForElem(page);
        const totalPrice = await PAGES.cartPage.totalPrice.getText(page);
        await ASSISTANTS.cartAssistant.deleteItemFromCart(page, prodForCart.prodName);
        await ASSERTS.cartAsserts.totalPriceIsLessAfterDeletingItem(page,totalPrice);

    })
})