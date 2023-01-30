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
        await PAGES.mainMenu.cartMenu.clickElem(page);
        await PAGES.cartPage.cartItems.waitForElem(page);
        await ASSERTS.popUpAsserts.expectTextEqualTo(prodForCart.msg,'Product added')
        await ASSERTS.cartAsserts.productAddedToCartPresentsInTheCart(page,prodForCart.prodName);
        await ASSERTS.cartAsserts.productPriceAddedToCartMatchesPriceInCart(page,prodForCart.prodName,prodForCart.prodPrice);

    })

     test('deleting item from cart',async ({page})=>{

        const prodForCart = await ASSISTANTS.cartAssistant.addToCartFirstItem(page);
        await PAGES.mainMenu.cartMenu.clickElem(page);
        await PAGES.cartPage.cartItems.waitForElem(page);
        const totalPrice = await PAGES.cartPage.totalPrice.getText(page);
        await ASSISTANTS.cartAssistant.deleteItemFromCart(page, prodForCart.prodName);
        const delSuccess = (
            await PAGES.cartPage.totalPrice.getText(page) //TODO calculations transfer to Asserts or there
        ) < totalPrice;
        await ASSERTS.cartAsserts.totalPriceIsLessAfterDeletingItem(page,delSuccess);

    })
})