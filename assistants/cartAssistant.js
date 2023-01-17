import {expect} from "@playwright/test";
import {PAGES} from "../pages/pages";
import {Assistants} from "./assistants";

export class CartAssistant {

    async popUpAccept(page,msg){
        page.on('dialog',async (dialog)=>{
            expect(dialog.message() === msg);
            await dialog.accept();
        })
    }
    async addToCartFirstItem(page){
        await page.waitForLoadState('networkidle');
        await page.locator(PAGES.categoriesPage.itemsTitles).first().click();
        await page.waitForLoadState('networkidle');
        await page.locator(PAGES.productPage.addToCartBtn).click();
        await Assistants.cartAssistant.popUpAccept(page,'Product added');
    }


}