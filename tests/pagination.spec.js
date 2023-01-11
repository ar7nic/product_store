import {URLS} from "../const/baseConst";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

//  //ul[@class='pagination']//button[@id='next2']

// //ul[@class='pagination']//button[@id='prev2']

// //h4[@class='card-title']/a

test.describe('pagination tests', ()=>{
    test('elements on the second page are different',async ({page})=>{

       const elementOnFirst = await page.locator("(//h4[@class='card-title']/a)[1]").textContent();
       await page.locator("//ul[@class='pagination']//button[@id='next2']").click();
       await page.waitForTimeout(2000);
       const elementOnSecond = await page.locator("(//h4[@class='card-title']/a)[1]").textContent();
       await expect(elementOnSecond).not.toEqual(elementOnFirst);

    })
    test('elements on the first page are the same after paging',async ({page})=>{
        const elementOnFirst = await page.locator("(//h4[@class='card-title']/a)[1]").textContent();
        await page.locator("//ul[@class='pagination']//button[@id='next2']").click();
        await page.waitForTimeout(1000);
        const elementOnSecond = await page.locator("(//h4[@class='card-title']/a)[1]").textContent();
        await page.locator("//ul[@class='pagination']//button[@id='prev2']").click();
        await page.waitForTimeout(1000);
        const elementOnPrev = await page.locator("(//h4[@class='card-title']/a)[1]").textContent();
        await expect(elementOnSecond).not.toEqual(elementOnFirst);
        await expect(elementOnPrev).toEqual(elementOnFirst);
    })
})