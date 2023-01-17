import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";

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
        page.on('dialog',async (dialog)=>{
            expect(dialog.message().includes('Product added'));
            await dialog.accept();
        })
        await page.locator(PAGES.cartPage.cartMenu).click();
        await page.locator(PAGES.cartPage.tableWithItems).waitFor();
        await page.waitForTimeout(1000);

        const itemTitle = await page.locator(PAGES.cartPage.itemTitle).textContent();
        await expect(prodName.includes(itemTitle)).toBeTruthy();

    })

    test('deleting item from cart',async ({page})=>{
        await page.locator(PAGES.categoriesPage.itemsTitles).first().click();
        await page.locator(PAGES.productPage.addToCartBtn).click();
        page.on('dialog',async (dialog)=>{
            expect(dialog.message().includes('Product added'));
            await dialog.accept();
        })
        await page.locator(PAGES.cartPage.cartMenu).click();
        await page.locator(PAGES.cartPage.tableWithItems).waitFor();
        await page.waitForTimeout(1000);

        await page.locator(PAGES.cartPage.deleteItemBtn).click();
        await page.waitForLoadState('networkidle');
        await expect(page.locator(PAGES.cartPage.itemsTable)).toBeEmpty();

        })
})