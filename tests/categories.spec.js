import {URLS} from "../core/const/baseConst";
import {PAGES} from "../core/pages/pages";
import {ASSERTS} from "../core/asserts/asserts";
import {REPORTER} from "../utils/reporter/reporterAdapter";
import {RUNNER} from "../utils/test-runner/testRunner";
const {test, expect} = require("@playwright/test");


test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

RUNNER.describe('category menu tests', ()=>{
    RUNNER.it('items filtered by category Laptops', async ({page})=>{
        await PAGES.categoriesPage.laptopMenu.clickElem(page);
        await ASSERTS.categoryAsserts.categoryNameInProdOnPage(page, 'laptop');

    })
})