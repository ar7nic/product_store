import {test} from "@playwright/test";
import {PAGES} from "../../core/pages/pages";
import {REPORTER} from "../reporter/reporterAdapter";

export class SiteElement {

    elementName;
    pageName;
    elemLocator;
    frameName;

    constructor(elementName,pageName,elemLocator,frameName) {
        this.elementName = elementName;
        this.pageName = pageName;
        this.elemLocator = elemLocator;
        this.frameName = frameName;
    }

    async clickElem(page){
        await REPORTER.testStep(`Click on "${this.elementName}" at "${this.pageName}"`, async ()=>{
            await page.locator(this.elemLocator).click();
        })
    }

    async fillField(page, value){
        await REPORTER.testStep(`Fill "${value}" into field "${this.elementName}" at "${this.pageName}"`, async ()=>{
            await page.locator(this.elemLocator).fill(value);
        })
    }

    async getText(page){
       return await REPORTER.testStep(`Get text from "${this.elementName}" at "${this.pageName}"`, async ()=>{
            return await page.locator(this.elemLocator).textContent();
        })
    }

    async getAllText(page){
        return await REPORTER.testStep(`Get ALL text from "${this.elementName}" at "${this.pageName}"`, async ()=>{
            return await page.locator(this.elemLocator).allTextContents();
        })
    }

    async getTextOfFirstElem(page){
        return await REPORTER.testStep(`Get text of first element from "${this.elementName}" at "${this.pageName}"`,async ()=>{
            return await page.locator(this.elemLocator).first().textContent();
        })
    }

    async clickOnFirstElem(page){
        return await REPORTER.testStep(`Click on first element from "${this.elementName}" at "${this.pageName}"`,async ()=>{
            return await page.locator(this.elemLocator).first().click();
        })
    }


    async getItems(page){
        return await REPORTER.testStep(`Get element(s) "${this.elementName}" at "${this.pageName}"`,async ()=>{
            return await page.locator(this.elemLocator);
        })
    }
    async getAttribute(page,attrName){
        return await REPORTER.testStep(`Get attribute "${attrName}" of "${this.elementName}" at "${this.pageName}"`,async ()=>{
            return await page.locator(this.elemLocator).getAttribute(attrName);
        })
    }


    async waitForElem(page){
        await  REPORTER.testStep(`Wait for element "${this.elementName}" at "${this.pageName}"`, async ()=>{
            await page.locator(this.elemLocator).first().waitFor();
        })
    }
}