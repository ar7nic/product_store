
const { test } = require('@playwright/test');
const {expect} = require('chai')
export class ProductAsserts {
    async prodTitleIsSameOnMainAndProdPages(page,titleMain,titlePage){
        await test.step(`Product title of element on main page is the same as on the product page`, async ()=>{
            await expect(titlePage).equal(titleMain);
        })
    }

    async prodPriceIsSameOnMainAndProdPages(page,pricePage,priceMain){
        await test.step(`Product title of element on main page is the same as on the product page`, async ()=>{
            await expect(pricePage).equal(priceMain);
        })
    }

}

