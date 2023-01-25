import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('product items tests', ()=>{
    test('product title is the same in main and product pages',async ({page})=>{
        const prodTitleMain = await PAGES.categoriesPage.itemsTitles.getTextOfFirstElem(page)
       // const prodTitleMain = await page.locator(PAGES.categoriesPage.itemsTitles).first().textContent();
        await PAGES.categoriesPage.itemsTitles.clickOnFirstElem(page);
       // await page.locator(PAGES.categoriesPage.itemsTitles).first().click();
        const prodTitleOnPage = await PAGES.productPage.prodTitle.getText(page);
       // const prodTitleOnPage = await page.locator(PAGES.productPage.prodTitle).textContent();
       await expect(prodTitleMain.includes(prodTitleOnPage)).toBeTruthy;
    })

    test('product price is the same in main and product pages',async ({page})=>{
        const prodPriceMain = await PAGES.categoriesPage.itemsPrices.getTextOfFirstElem(page)
        // const prodPriceMain = await page.locator(PAGES.categoriesPage.itemsPrices).first().textContent();
        await PAGES.categoriesPage.itemsTitles.clickOnFirstElem(page);
        // await page.locator(PAGES.categoriesPage.itemsTitles).first().click();
        const prodPriceOnPage = (
            await PAGES.productPage.prodPrice.getText(page)
            // await page.locator(PAGES.productPage.prodPrice).textContent()
            ).split("*")[1];
        await expect(prodPriceMain.includes(prodPriceOnPage)).toBeTruthy;
    })
})