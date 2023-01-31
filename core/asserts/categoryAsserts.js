import {PAGES} from "../pages/pages";
const { test } = require('@playwright/test');
const {expect} = require('chai')

export class CategoryAsserts {

    async categoryNameInProdOnPage(page,catName){
        await test.step(`Products on th page have filtered category in description`,async ()=>{
            await page.waitForTimeout(1000);
            await expect(await PAGES.categoriesPage.itemsDescriptions.getTextOfFirstElem(page)).include(catName);
        })
    }

}

// await expect(page.locator(PAGES.categoriesPage.itemsDescriptions.elemLocator).first()).toContainText("laptop");