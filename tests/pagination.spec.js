import {URLS} from "../const/baseConst";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('pagination tests', ()=>{
    test('elements on the second page are different',async ({page})=>{

       await  page.waitForLoadState('networkidle');
       const elementsOnFirst = await page.locator("//h4[@class='card-title']/a").allTextContents();
       await page.locator("//ul[@class='pagination']//button[@id='next2']").click();
       await page.waitForTimeout(1000);
       const elementsOnSecond = await page.locator("//h4[@class='card-title']/a").allTextContents();
       console.log("first-page: " +elementsOnFirst);
        console.log("second page " + elementsOnSecond);
       await expect(elementsOnSecond).not.toEqual(elementsOnFirst);

    })
    test('elements on the first page are the same after paging',async ({page})=>{
        await  page.waitForLoadState('networkidle');
        const elementsOnFirst = await page.locator("//h4[@class='card-title']/a").allTextContents();
        await page.locator("//ul[@class='pagination']//button[@id='next2']").click();
        await page.waitForTimeout(1000);
        const elementsOnSecond = await page.locator("//h4[@class='card-title']/a").allTextContents();
        await page.locator("//ul[@class='pagination']//button[@id='prev2']").click();
        await page.waitForTimeout(1000);
        const elementsOnPrev = await page.locator("//h4[@class='card-title']/a").allTextContents();
        await expect(elementsOnSecond).not.toEqual(elementsOnFirst);
        await expect(elementsOnPrev).toEqual(elementsOnFirst);
    })
})