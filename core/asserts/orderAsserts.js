import {PAGES} from "../pages/pages";
import {REPORTER} from "../../utils/reporter/reporterAdapter";
import {ENGINEASSISTANT} from "../../utils/engine/EngineAssistant";
const { test } = require('@playwright/test');
const {expect} = require('chai')
export class OrderAsserts {

    async thankYouPopupIsShown(page,msg){
        await REPORTER.testStep(`ASSERT The pop-up with message "Thank you for your purchase!" is shown`,async ()=>{
            await expect(msg).equal('Thank you for your purchase!');
        })
    }

    async cartIsEmptyAfterOrder(page){
        await REPORTER.testStep(`ASSERT The cart is empty after placing the order`,async ()=>{
            await ENGINEASSISTANT.waitTimeout(page,2000);
            await expect(PAGES.cartPage.totalPrice.getText(page)).is.empty;
        })
    }

    async orderPopupIsVisible(page){
        await REPORTER.testStep(`ASSERT The order Pop-up still visible`, async ()=>{
            await expect(await PAGES.orderPopup.modalWindow.getAttribute(page,'style')).equal('display: block;');
        })
    }


}


