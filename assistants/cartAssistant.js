import { expect } from "@playwright/test";
import { PAGES } from "../pages/pages";
import { ASSISTANT, Assistants } from "./assistants";

export class CartAssistant {
  async popUpAccept(page) {
    page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
  }
  async addToCartFirstItem(page) {
    await page.waitForLoadState("networkidle");
    await page.locator(PAGES.categoriesPage.itemsTitles).first().click();
    await page.waitForLoadState("networkidle");
    const prodName = await page
      .locator(PAGES.productPage.prodTitle)
      .textContent();
    const prodPrice = (
      await page.locator(PAGES.productPage.prodPrice).textContent()
    ).split("*")[0];

    await page.locator(PAGES.productPage.addToCartBtn).click();
    await ASSISTANT.cartAssistant.popUpAccept(page);
    await page.waitForTimeout(1000);
    return { prodName, prodPrice };
  }
  // const prodName = await page.locator(PAGES.productPage.prodTitle).textContent();
  // const prodPrice = (await page.locator(PAGES.productPage.prodPrice).textContent()).split("*")[0];

  async findItemsInCart(page, prodName) {
    const itemsInCart = await page.locator(PAGES.cartPage.cartItems);
    const prodCount = await itemsInCart.count();
    for (let i = 0; i < prodCount + 1; ++i) {
      if (
        (await itemsInCart
          .nth(i)
          .locator(PAGES.cartPage.itemTitlePath)
          .textContent()) === prodName
      ) {
        return itemsInCart.nth(i);
      }
    }
  }

  async deleteItemFromCart(page, prodName) {
    const element = await this.findItemsInCart(page, prodName);
    await element.locator(PAGES.cartPage.itemDelBtnPath).click();

    // const itemsInCart = await page.locator(PAGES.cartPage.cartItems);
    // const prodCount = await itemsInCart.count();
    // for (let i = 0; i < prodCount+1; ++i) {
    //     if(await itemsInCart.nth(i).locator(PAGES.cartPage.itemTitlePath).textContent() === prodName) {
    //         await itemsInCart.nth(i).locator(PAGES.cartPage.itemDelBtnPath).click();
    //         break;
    //     }
    // }
  }
}
