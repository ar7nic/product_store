import {URLS} from "../core/const/baseConst";
import {PAGES} from "../core/pages/pages";
import {ASSERTS} from "../core/asserts/asserts";
import {ENGINEASSISTANT} from "../utils/engine/EngineAssistant";
import {REPORTER} from "../utils/reporter/reporterAdapter";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('pagination tests', ()=>{
    REPORTER.it('elements on the second page are different',async ({page})=>{

        await  page.waitForLoadState('networkidle');
        const elementsOnFirst = await PAGES.paginationPage.itemCardTitle.getAllText(page);
        await PAGES.paginationPage.nextButton.clickElem(page);
        await ENGINEASSISTANT.waitTimeout(page,1000);
        // await page.waitForTimeout(1000);
        const elementsOnSecond = await PAGES.paginationPage.itemCardTitle.getAllText(page);
        await ASSERTS.paginationAsserts.elementsOnSecondPageAreDiff(page,elementsOnFirst,elementsOnSecond);

    })
    REPORTER.it('elements on the first page are the same after paging',async ({page})=>{
        await ENGINEASSISTANT.waitForNetworkIdle(page);
        // await  page.waitForLoadState('networkidle');
        const elementsOnFirst = await PAGES.paginationPage.itemCardTitle.getAllText(page);
        await PAGES.paginationPage.nextButton.clickElem(page);
        await ENGINEASSISTANT.waitTimeout(page,1000);
        // await page.waitForTimeout(1000);
        const elementsOnSecond = await PAGES.paginationPage.itemCardTitle.getAllText(page);
        await PAGES.paginationPage.previousButton.clickElem(page);
        await ENGINEASSISTANT.waitTimeout(page,1000);
        const elementsOnPrev = await PAGES.paginationPage.itemCardTitle.getAllText(page);
        await ASSERTS.paginationAsserts.elementsOnSecondPageAreDiff(page,elementsOnFirst,elementsOnSecond);
        await ASSERTS.paginationAsserts.elementsOnFirstPageAreSame(page,elementsOnFirst,elementsOnPrev);

    })
})