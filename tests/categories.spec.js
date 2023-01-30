import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";
import {ASSERTS} from "../asserts/asserts";
const {test, expect} = require("@playwright/test");


test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('category menu tests', ()=>{
    test('items filtered by category Laptops', async ({page})=>{
        await PAGES.categoriesPage.laptopMenu.clickElem(page);
        await ASSERTS.categoryAsserts.categoryNameInProdOnPage(page, 'laptop');

    })
})