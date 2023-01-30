import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";
import {ASSERTS} from "../asserts/asserts";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('product items tests', ()=>{
    test('product title is the same in main and product pages',async ({page})=>{
        const prodTitleMain = await PAGES.categoriesPage.itemsTitles.getTextOfFirstElem(page)
        await PAGES.categoriesPage.itemsTitles.clickOnFirstElem(page);
        const prodTitleOnPage = await PAGES.productPage.prodTitle.getText(page);
        await ASSERTS.productAsserts.prodTitleIsSameOnMainAndProdPages(page,prodTitleMain,prodTitleOnPage);

    })

    test('product price is the same in main and product pages',async ({page})=>{
        const prodPriceMain = (await PAGES.categoriesPage.itemsPrices.getTextOfFirstElem(page)).match("\d");
        await PAGES.categoriesPage.itemsTitles.clickOnFirstElem(page);
        const prodPriceOnPage = (await PAGES.productPage.prodPrice.getText(page)).match("\d");
        await ASSERTS.productAsserts.prodPriceIsSameOnMainAndProdPages(page,prodPriceOnPage,prodPriceMain);

    })
})