import {ASSISTANTS} from "../assistants/assistants";
import {PAGES} from "../pages/pages";
import {SiteElement} from "../../utils/elements/SiteElement";
import {ENGINEASSISTANT} from "../../utils/engine/EngineAssistant";
import {REPORTER} from "../../utils/reporter/reporterAdapter";
const { test } = require('@playwright/test');
const {expect} = require('chai')

export class AboutAsserts {

    async videoIsPresent(page, attrName){
        await REPORTER.testStep(`ASSERT Video src in not empty`, async ()=>{
            await PAGES.aboutPage.modalVideo.waitForElem(page);
            await ENGINEASSISTANT.waitTimeout(page,2000);
            const attr = await PAGES.aboutPage.modalVideo.getAttribute(page, attrName);
            await expect(attr).to.be.exist;
        })
    }

    async videoPopupWindowIsClosable(page){
        await REPORTER.testStep(`ASSERT Video pop-up can be closed`, async ()=>{
            const attr = await PAGES.aboutPage.modalWindow.getAttribute(page, 'style');
            await  expect(attr).be.equal('display: none;');
        })
    }

}