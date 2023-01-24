import {test} from "@playwright/test";
import {PAGES} from "../pages/pages";

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
        await test.step(`Click on ${this.elementName} at ${this.pageName}`, async ()=>{
            // const page = await context.newPage();
            await page.locator(this.elemLocator).click();
        })
    }

    async fillField(page, value){
        await test.step(`Fill field ${this.elementName} at ${this.pageName}`, async ()=>{
            // const page = await context.newPage();
            await page.locator(this.elemLocator).fill(value);
        })
    }

    // await page.locator(PAGES.mainMenu.welcomeMenu).textContent();
    async getText(page){
       return await test.step(`Get text from ${this.elementName} at ${this.pageName}`, async ()=>{
            // const page = await context.newPage();
            return await page.locator(this.elemLocator).textContent();
        })
    }

    async waitForElem(page){
        await   test.step(`Wait for element ${this.elementName} at ${this.pageName}`, async ()=>{
            // const page = await context.newPage();
            await page.locator(this.elemLocator).waitFor();
        })
    }
}