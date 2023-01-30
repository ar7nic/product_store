import {PAGES} from "../pages/pages";
const { test } = require('@playwright/test');
const {expect} = require('chai')
export class OrderAsserts {

    async thankYouPopupIsShown(page,msg){
        await test.step(`ASSERT The pop-up with message "Thank you for your purchase!" is shown`,async ()=>{
            await expect(msg).equal('Thank you for your purchase!');
        })
    }

    async cartIsEmptyAfterOrder(page){
        await test.step(`ASSERT The cart is empty after placing the order`,async ()=>{
            await expect(PAGES.cartPage.totalPrice.getText(page)).is.empty;
        })
    }

    async orderPopupIsVisible(page){
        await test.step(`ASSERT The order Pop-up still visible`, async ()=>{
            await expect(await PAGES.orderPopup.modalWindow.getAttribute(page,'style')).equal('display: block;');
        })
    }

    // await expect(await page.locator(PAGES.orderPopup.name.elemLocator)).toBeVisible();

}


