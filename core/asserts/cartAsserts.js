import {PAGES} from "../pages/pages";
import {REPORTER} from "../../utils/reporter/reporterAdapter";
const { test } = require('@playwright/test');
const {expect} = require('chai')
export class CartAsserts {


    async productAddedToCartPresentsInTheCart(page,prodName){
        await REPORTER.testStep(`ASSERT Product "${prodName}" added to cart is present in the cart`, async () => {
            await expect(await PAGES.cartPage.cartItem(prodName).getText(page)).to.equal(prodName);
        })
    }
    async productPriceAddedToCartMatchesPriceInCart(page,prodName,prodPrice){
        await REPORTER.testStep(`ASSERT Price of product "${prodName}" is the same in the cart`, async () => {
            await expect(await PAGES.cartPage.itemPrice(prodName).getText(page)).to.equal(prodPrice);
        })
    }
    async totalPriceIsLessAfterDeletingItem(page, totalPrice){
        const success = (await PAGES.cartPage.totalPrice.getText(page)) < totalPrice;
        await REPORTER.testStep(`ASSERT Total Price is less after deleting the product from the cart`, async ()=>{
            await expect(success).to.be.true;
        })
    }

}