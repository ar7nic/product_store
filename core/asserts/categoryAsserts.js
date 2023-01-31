import {PAGES} from "../pages/pages";
import {ENGINEASSISTANT} from "../../utils/engine/EngineAssistant";
import {REPORTER} from "../../utils/reporter/reporterAdapter";
const { test } = require('@playwright/test');
const {expect} = require('chai')

export class CategoryAsserts {

    async categoryNameInProdOnPage(page,catName){
        await REPORTER.testStep(`Products on th page have filtered category in description`,async ()=>{
            await ENGINEASSISTANT.waitTimeout(page,1000);
            await expect(await PAGES.categoriesPage.itemsDescriptions.getTextOfFirstElem(page)).include(catName);
        })
    }

}

