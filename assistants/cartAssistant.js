import { PAGES } from "../pages/pages";
import { ASSISTANTS, Assistants } from "./assistants";
import {SiteElement} from "../utils/SiteElement";

export class CartAssistant {

  async addToCartFirstItem(page) {
    await page.waitForLoadState("networkidle");
    await PAGES.categoriesPage.itemsTitles.clickOnFirstElem(page);
    await page.waitForLoadState("networkidle");
    const prodName = await PAGES.productPage.prodTitle.getText(page);
    const prodPrice =(await PAGES.productPage.prodPrice.getText(page)).match("\d");
    await PAGES.productPage.addToCartBtn.clickElem(page);
    await ASSISTANTS.popupAssistant.popUpAccept(page);
    await page.waitForTimeout(1000);
    return { prodName, prodPrice };
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
  async findItemsInCart(page, prodName){

  }


  async deleteItemFromCart(page, prodName) {

    await PAGES.cartPage.itemDelBtn(prodName).clickElem(page);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // const element = await this.findItemsInCart(page, prodName);
    // await element.locator(PAGES.cartPage.itemDelBtnPath.elemLocator).click(); //TODO figure out

  }
}
