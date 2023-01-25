import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('pagination tests', ()=>{
    test('elements on the second page are different',async ({page})=>{

        await  page.waitForLoadState('networkidle');
        const elementsOnFirst = await PAGES.paginationPage.itemCardTitle.getAllText(page);
        await PAGES.paginationPage.nextButton.clickElem(page);
        await page.waitForTimeout(1000);
        const elementsOnSecond = await PAGES.paginationPage.itemCardTitle.getAllText(page);
        await expect(elementsOnSecond).not.toEqual(elementsOnFirst);

    })
    test('elements on the first page are the same after paging',async ({page})=>{
        await  page.waitForLoadState('networkidle');
        const elementsOnFirst = await PAGES.paginationPage.itemCardTitle.getAllText(page);
        await PAGES.paginationPage.nextButton.clickElem(page);
        await page.waitForTimeout(1000);
        const elementsOnSecond = await PAGES.paginationPage.itemCardTitle.getAllText(page);
        await PAGES.paginationPage.previousButton.clickElem(page);
        await page.waitForTimeout(1000);
        const elementsOnPrev = await PAGES.paginationPage.itemCardTitle.getAllText(page);
        await expect(elementsOnSecond).not.toEqual(elementsOnFirst);
        await expect(elementsOnPrev).toEqual(elementsOnFirst);
    })
})