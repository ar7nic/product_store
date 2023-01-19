import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";

const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('about-us tests', ()=>{
    test('about-video is presents',async ({page})=>{
        await page.locator(PAGES.mainMenu.aboutUsMenu).click();
        await expect(page.locator(PAGES.aboutPage.modalVideo)).toBeVisible();
    })
    test('about-us pop-up is closable',async ({page})=>{
        await page.locator(PAGES.mainMenu.aboutUsMenu).click();
        await page.locator(PAGES.aboutPage.modalCloseButton).click();
        await page.waitForTimeout(2000);
        await expect(page.locator(PAGES.aboutPage.modalWindow)).toHaveAttribute("style", "display: none;");
    })
})