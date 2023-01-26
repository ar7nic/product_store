import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";

const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('about-us tests', ()=>{
    test('about-video is presents',async ({page})=>{
        await PAGES.mainMenu.aboutUsMenu.clickElem(page);
        await expect(page.locator(PAGES.aboutPage.modalVideo.elemLocator)).toBeVisible();
    })
    test('about-us pop-up is closable',async ({page})=>{
        await PAGES.mainMenu.aboutUsMenu.clickElem(page);
        await PAGES.aboutPage.modalCloseButton.clickElem(page);
        await page.waitForTimeout(2000);
        await expect(page.locator(PAGES.aboutPage.modalWindow.elemLocator)).toHaveAttribute("style", "display: none;");
    })
})