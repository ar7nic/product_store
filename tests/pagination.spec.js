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

       const elementsOnFirst = await page.locator("//h4[@class='card-title']/a");
       await page.locator("//ul[@class='pagination']//button[@id='next2']").click({timeout:2000});
       const elementsOnSecond = await page.locator("//h4[@class='card-title']/a");
       await expect(elementsOnFirst)
    })
})