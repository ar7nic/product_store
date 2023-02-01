import {REPORTER} from "../../utils/reporter/reporterAdapter";

const { test } = require('@playwright/test');
const {expect} = require('chai')
export class ProductAsserts {
    async prodTitleIsSameOnMainAndProdPages(page,titleMain,titlePage){
        await REPORTER.testStep(`Product title of element on main page is the same as on the product page`, async ()=>{
            await expect(titlePage).equal(titleMain);
        })
    }

    async prodPriceIsSameOnMainAndProdPages(page,pricePage,priceMain){
        await REPORTER.testStep(`Product title of element on main page is the same as on the product page`, async ()=>{
            await expect(pricePage).equal(priceMain);
        })
    }

}

