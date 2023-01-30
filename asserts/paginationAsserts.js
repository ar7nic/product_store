import {PAGES} from "../pages/pages";
const { test } = require('@playwright/test');
const {expect} = require('chai')
export class PaginationAsserts {

    async elementsOnSecondPageAreDiff(page,firstPage,secPage){
        await test.step('The list of elements on the second page is different from first page', async()=>{
            await expect(secPage).not.equal(firstPage);
        })
    }

    async elementsOnFirstPageAreSame(page,firstPageBefore,firstPageAfter){
        await test.step('The list of elements on the first page is the same after pagination', async()=>{
            await expect(firstPageAfter).not.equal(firstPageBefore);
        })
    }
}