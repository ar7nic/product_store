import {URLS} from "../core/const/baseConst";
import {PAGES} from "../core/pages/pages";
import {ASSERTS} from "../core/asserts/asserts";
import {ENGINEASSISTANT} from "../utils/engine/EngineAssistant";
import {REPORTER} from "../utils/reporter/reporterAdapter";

const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('about-us tests', ()=>{
    REPORTER.it('about-video is presents',async ({page})=>{
        await PAGES.mainMenu.aboutUsMenu.clickElem(page);
        await ASSERTS.aboutAsserts.videoIsPresent(page,'src');

    })
    REPORTER.it('about-us pop-up is closable',async ({page})=>{
        await PAGES.mainMenu.aboutUsMenu.clickElem(page);
        await PAGES.aboutPage.modalCloseButton.clickElem(page);
        await ENGINEASSISTANT.waitTimeout(page,2000);
        await ASSERTS.aboutAsserts.videoPopupWindowIsClosable(page);

    })
})