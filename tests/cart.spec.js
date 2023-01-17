import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";
import {Assistants} from "../assistants/assistants";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('cart-tests', ()=>{
    test('adding items to cart',async ({page})=>{
        await page.locator(PAGES.categoriesPage.itemsTitles).first().click();
        await page.waitForLoadState('networkidle');
        const prodName = await page.locator(PAGES.productPage.prodTitle).textContent();
        const prodPrice = (await page.locator(PAGES.productPage.prodPrice).textContent()).split("*")[0];
        await page.locator(PAGES.productPage.addToCartBtn).click();
        await Assistants.cartAssistant.popUpAccept(page,'Product added');

        await page.locator(PAGES.cartPage.cartMenu).click();
        await page.locator(PAGES.cartPage.cartItems).waitFor();
        await page.waitForTimeout(1000);

        const itemTitle = await page.locator(PAGES.cartPage.itemTitle).textContent();
        await expect(prodName).toEqual(itemTitle);

    })

    test('deleting item from cart',async ({page})=>{
        await page.locator(PAGES.categoriesPage.itemsTitles).first().click();
        const prodName = await page.locator(PAGES.productPage.prodTitle).textContent();
        await page.locator(PAGES.productPage.addToCartBtn).click();
        page.on('dialog',async (dialog)=>{
            expect(dialog.message()).toEqual('Product added');
            await dialog.accept();
        })
        await page.locator(PAGES.cartPage.cartMenu).click();
        await page.waitForTimeout(2000);
        await page.locator(PAGES.cartPage.cartItems).first().waitFor();
        const totalPrice = parseInt(await page.locator(PAGES.cartPage.totalPrice).textContent());
        const itemsInCart = await page.locator(PAGES.cartPage.cartItems);
        const prodCount = await itemsInCart.count();
        for (let i = 0; i < prodCount+1; ++i) {
            if(await itemsInCart.nth(i).locator(PAGES.cartPage.itemTitlePath).textContent() === prodName) {
                await itemsInCart.nth(i).locator(PAGES.cartPage.itemDelBtnPath).click();
                break;
            }
        }


        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000);
        const itemsInCartAfterDel = await page.locator(PAGES.cartPage.cartItems);
        const delSuccess = parseInt(await page.locator(PAGES.cartPage.totalPrice).textContent()) < totalPrice;
        await expect(delSuccess).toBeTruthy;


    })
})