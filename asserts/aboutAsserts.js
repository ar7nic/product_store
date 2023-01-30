import {ASSISTANTS} from "../assistants/assistants";
import {PAGES} from "../pages/pages";
import {SiteElement} from "../utils/SiteElement";
const { test } = require('@playwright/test');
const {expect} = require('chai')

export class AboutAsserts {

    async videoIsPresent(page, attrName){
        await test.step(`ASSERT Video src in not empty`, async ()=>{
            await PAGES.aboutPage.modalVideo.waitForElem(page);
            await page.waitForTimeout(2000)
            const attr = await PAGES.aboutPage.modalVideo.getAttribute(page, attrName);
            console.log(attr)
            await expect(attr).to.be.exist;
        })
    }

    async videoPopupWindowIsClosable(page){
        await test.step(`ASSERT Video pop-up can be closed`, async ()=>{
            const attr = await PAGES.aboutPage.modalWindow.getAttribute(page, 'style');
            await  expect(attr).be.equal('display: none;');
        })
    }


//     test('about-video is presents',async ({page})=>{
//     await PAGES.mainMenu.aboutUsMenu.clickElem(page);
//     await expect(page.locator(PAGES.aboutPage.modalVideo.elemLocator)).toBeVisible();
// })
// test('about-us pop-up is closable',async ({page})=>{
//     await PAGES.mainMenu.aboutUsMenu.clickElem(page);
//     await PAGES.aboutPage.modalCloseButton.clickElem(page);
//     await page.waitForTimeout(2000);
//     await expect(page.locator(PAGES.aboutPage.modalWindow.elemLocator)).toHaveAttribute("style", "display: none;");
// })

}