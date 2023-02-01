import {URLS} from "../core/const/baseConst";
import {PAGES} from "../core/pages/pages";
import {ASSERTS} from "../core/asserts/asserts";
import {ENGINEASSISTANT} from "../utils/engine/EngineAssistant";
import {REPORTER} from "../utils/reporter/reporterAdapter";
import {RUNNER} from "../utils/test-runner/testRunner";

const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

RUNNER.describe('about-us tests', ()=>{
    RUNNER.it('about-video is presents',async ({page})=>{
        await PAGES.mainMenu.aboutUsMenu.clickElem(page);
        await ASSERTS.aboutAsserts.videoIsPresent(page,'src');

    })
    RUNNER.it('about-us pop-up is closable',async ({page})=>{
        await PAGES.mainMenu.aboutUsMenu.clickElem(page);
        await PAGES.aboutPage.modalCloseButton.clickElem(page);
        await ENGINEASSISTANT.waitTimeout(page,2000);
        await ASSERTS.aboutAsserts.videoPopupWindowIsClosable(page);

    })
})