import {URLS} from "../core/const/baseConst";
import {PAGES} from "../core/pages/pages";
import {ASSERTS} from "../core/asserts/asserts";
import {REPORTER} from "../utils/reporter/reporterAdapter";
import {RUNNER} from "../utils/test-runner/testRunner";

const { test} = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

RUNNER.describe('product items tests', ()=>{
    RUNNER.it('product title is the same in main and product pages',async ({page})=>{
        const prodTitleMain = await PAGES.categoriesPage.itemsTitles.getTextOfFirstElem(page)
        await PAGES.categoriesPage.itemsTitles.clickOnFirstElem(page);
        const prodTitleOnPage = await PAGES.productPage.prodTitle.getText(page);
        await ASSERTS.productAsserts.prodTitleIsSameOnMainAndProdPages(page,prodTitleMain,prodTitleOnPage);

    })

    RUNNER.it('product price is the same in main and product pages',async ({page})=>{
        const prodPriceMain = (await PAGES.categoriesPage.itemsPrices.getTextOfFirstElem(page)).match("\d");
        await PAGES.categoriesPage.itemsTitles.clickOnFirstElem(page);
        const prodPriceOnPage = (await PAGES.productPage.prodPrice.getText(page)).match("\d");
        await ASSERTS.productAsserts.prodPriceIsSameOnMainAndProdPages(page,prodPriceOnPage,prodPriceMain);

    })
})