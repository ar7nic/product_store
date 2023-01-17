import {PAGES} from "../pages/pages";
import {Assistants} from "./assistants";
import {expect} from "@playwright/test";


export class OrderAssistant {

    async placeTheOrder(page){
        await page.locator(PAGES.cartPage.placeOrderBtn).click();
        await page.locator(PAGES.orderPopup.name).fill('Alex');
        await page.locator(PAGES.orderPopup.country).fill('Ukraine');
        await page.locator(PAGES.orderPopup.city).fill('Cherkasy');
        await page.locator(PAGES.orderPopup.card).fill('1111222233334444');
        await page.locator(PAGES.orderPopup.month).fill('January');
        await page.locator(PAGES.orderPopup.year).fill('2023');
        await page.locator(PAGES.orderPopup.purchaseBtn).click();
    }




}