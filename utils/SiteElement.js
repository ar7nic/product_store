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

    async getAllText(page){
        return await test.step(`Get ALL text from ${this.elementName} at ${this.pageName}`, async ()=>{
            // const page = await context.newPage();
            return await page.locator(this.elemLocator).allTextContents();
        })
    }

    async getTextOfFirstElem(page){
        return await test.step(`Get text of first element from ${this.elementName} at ${this.pageName}`,async ()=>{
            return await page.locator(this.elemLocator).first().textContent();
        })
    }

    async clickOnFirstElem(page){
        return await test.step(`Click on first element from ${this.elementName} at ${this.pageName}`,async ()=>{
            return await page.locator(this.elemLocator).first().click();
        })
    }


    async getItems(page){
        return await test.step(`Get elements from ${this.elementName} at ${this.pageName}`,async ()=>{
            return await page.locator(this.elemLocator);
        })
    }

    async waitForElem(page){
        await   test.step(`Wait for element ${this.elementName} at ${this.pageName}`, async ()=>{
            // const page = await context.newPage();
            await page.locator(this.elemLocator).first().waitFor();
        })
    }
}