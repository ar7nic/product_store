import {MyUtils} from "../utils/myUtils";
import {URLS} from "../const/baseConst";
const {test, expect} = require("@playwright/test");


test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('category menu tests', ()=>{
    test.only('items filtered by categorie Laptops', async ({page})=>{
        await page.locator("//div[@class='list-group']/a[contains(text(),'Laptops')]").click();
        await expect(page.locator("(//div[@class='card-block']//p[@id='article'])[1]")).toContainText("laptop");
    })
})