import { PAGES } from "../pages/pages";
import { ASSISTANTS, Assistants } from "./assistants";
import {SiteElement} from "../utils/SiteElement";

export class CartAssistant {

  async addToCartFirstItem(page) {
    await page.waitForLoadState("networkidle");
    await PAGES.categoriesPage.itemsTitles.clickOnFirstElem(page);
    await page.waitForLoadState("networkidle");
    const prodName = await PAGES.productPage.prodTitle.getText(page);
    const prodPrice = await (await PAGES.productPage.prodPrice.getText(page)).match(/\d+/)[0];
    let msg;
     const  popupMsg = Promise.all([
     await  PAGES.productPage.addToCartBtn.clickElem(page),
     msg = await ASSISTANTS.popupAssistant.popUpAccept(page)
    ])
    await page.waitForTimeout(2000);
    return { prodName, prodPrice ,msg};
  }

  // async findItemsInCart(page, prodName) {
  //   const itemsInCart = await PAGES.cartPage.cartItems.getItems(page);
  //   const prodCount = await itemsInCart.count();
  //   for (let i = 0; i < prodCount + 1; ++i) {
  //     if (
  //       (await itemsInCart
  //         .nth(i)
  //         .locator(PAGES.cartPage.itemTitlePath.elemLocator) // TODO figure out
  //         .textContent()) === prodName
  //     ) {
  //       return itemsInCart.nth(i);
  //     }
  //   }
  // }



  async deleteItemFromCart(page, prodName) {

    await PAGES.cartPage.itemDelBtn(prodName).clickElem(page);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

  }
}
