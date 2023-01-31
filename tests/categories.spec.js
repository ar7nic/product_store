import {URLS} from "../core/const/baseConst";
import {PAGES} from "../core/pages/pages";
import {ASSERTS} from "../core/asserts/asserts";
import {REPORTER} from "../utils/reporter/reporterAdapter";
const {test, expect} = require("@playwright/test");


test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('category menu tests', ()=>{
    REPORTER.it('items filtered by category Laptops', async ({page})=>{
        await PAGES.categoriesPage.laptopMenu.clickElem(page);
        await ASSERTS.categoryAsserts.categoryNameInProdOnPage(page, 'laptop');

    })
})