import {PAGES} from "../pages/pages";
import {expect} from "@playwright/test";
import {USERS} from "../models/users";


export class OrderAssistant {

    async placeTheOrder(page){
        await page.locator(PAGES.cartPage.placeOrderBtn).click();
        await page.locator(PAGES.orderPopup.name).fill(USERS.testUser.userName);
        await page.locator(PAGES.orderPopup.country).type(USERS.testUser.userCountry);
        await page.locator(PAGES.orderPopup.city).type(USERS.testUser.userCity);
        await page.locator(PAGES.orderPopup.card).type(USERS.testUser.userCrCard);
        await page.locator(PAGES.orderPopup.month).type('January');
        await page.locator(PAGES.orderPopup.year).type('2023');
        await page.locator(PAGES.orderPopup.purchaseBtn).click();
    }




}