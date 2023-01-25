import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('product items tests', ()=>{
    test('product title is the same in main and product pages',async ({page})=>{
        const prodTitleMain = await PAGES.categoriesPage.itemsTitles.getTextOfFirstElem(page)
        await PAGES.categoriesPage.itemsTitles.clickOnFirstElem(page);
        const prodTitleOnPage = await PAGES.productPage.prodTitle.getText(page);
       await expect(prodTitleMain.includes(prodTitleOnPage)).toBeTruthy;
    })

    test('product price is the same in main and product pages',async ({page})=>{
        const prodPriceMain = await PAGES.categoriesPage.itemsPrices.getTextOfFirstElem(page)
        await PAGES.categoriesPage.itemsTitles.clickOnFirstElem(page);
        const prodPriceOnPage = (
            await PAGES.productPage.prodPrice.getText(page)
            ).split("*")[1];
        await expect(prodPriceMain.includes(prodPriceOnPage)).toBeTruthy;
    })
})