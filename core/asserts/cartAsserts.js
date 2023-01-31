import {PAGES} from "../pages/pages";
const { test } = require('@playwright/test');
const {expect} = require('chai')
export class CartAsserts {


    async productAddedToCartPresentsInTheCart(page,prodName){
        await test.step(`ASSERT Product "${prodName}" added to cart is present in the cart`, async () => {
            await expect(await PAGES.cartPage.cartItem(prodName).getText(page)).to.equal(prodName);
        })
    }
    async productPriceAddedToCartMatchesPriceInCart(page,prodName,prodPrice){
        await test.step(`ASSERT Price of product "${prodName}" is the same in the cart`, async () => {
            await expect(await PAGES.cartPage.itemPrice(prodName).getText(page)).to.equal(prodPrice);
        })
    }
    async totalPriceIsLessAfterDeletingItem(page, totalPrice){
        const success = (await PAGES.cartPage.totalPrice.getText(page)) < totalPrice;
        await test.step(`ASSERT Total Price is less after deleting the product from the cart`, async ()=>{
            await expect(success).to.be.true;
        })
    }


//     await expect(prodForCart.prodName).toEqual(
//         await element.locator(PAGES.cartPage.itemTitlePath.elemLocator).textContent()   //TODO
// );
//     await expect(prodForCart.prodPrice.split("$")[1].trim()).toEqual(
//         await element.locator(PAGES.cartPage.itemPricePath.elemLocator).textContent());

}