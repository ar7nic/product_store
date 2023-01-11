import {URLS} from "../const/baseConst";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('about-us tests', ()=>{
    test('about-video is presents',async ({page})=>{
        await page.locator("//a[contains(text(),'About us')]").click();
        await expect(page.locator("//div[@id='videoModal'][@style='display: block;']//video")).toBeVisible();
    })
    test('about-us pop-up is closable',async ({page})=>{
        await page.locator("//a[contains(text(),'About us')]").click();
        await page.locator("//div[@id='videoModal']//div[@class='modal-footer']/button").click();
        await expect(page.locator("//div[@id='videoModal']")).toHaveAttribute("style", "display: none;", {timeout: 3000});
    })
})