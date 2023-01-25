import { PAGES } from "../pages/pages";
import { ASSISTANTS, Assistants } from "./assistants";
import {SiteElement} from "../utils/SiteElement";

export class CartAssistant {
  async popUpAccept(page) {
    page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
  }

  async addToCartFirstItem(page) {
    await page.waitForLoadState("networkidle");
    await PAGES.categoriesPage.itemsTitles.getFirstElem(page).click(); // TODO figure out how to implement
    // await page.locator(PAGES.categoriesPage.itemsTitles).first().click();
    await page.waitForLoadState("networkidle");
    const prodName = await PAGES.productPage.prodTitle.getText(page);
    // const prodName = await page
    //   .locator(PAGES.productPage.prodTitle)
    //   .textContent();

    const prodPrice =(await PAGES.productPage.prodPrice.getText(page)).split("*")[0];
    // const prodPrice = (
    //   await page.locator(PAGES.productPage.prodPrice).textContent()
    // ).split("*")[0];

    await PAGES.productPage.addToCartBtn.clickElem(page);
    // await page.locator(PAGES.productPage.addToCartBtn).click();
    await this.popUpAccept(page);
    await page.waitForTimeout(1000);
    return { prodName, prodPrice };
  }

  async findItemsInCart(page, prodName) {
    const itemsInCart = await PAGES.cartPage.cartItems.getItems(page);
    // const itemsInCart = await page.locator(PAGES.cartPage.cartItems);
    const prodCount = await itemsInCart.count();
    for (let i = 0; i < prodCount + 1; ++i) {
      if (
        (await itemsInCart
          .nth(i)
          .locator(PAGES.cartPage.itemTitlePath) // TODO figure out
          .textContent()) === prodName
      ) {
        return itemsInCart.nth(i);
      }
    }
  }

  async deleteItemFromCart(page, prodName) {
    const element = await this.findItemsInCart(page, prodName);

    await element.locator(PAGES.cartPage.itemDelBtnPath).click(); //TODO figure out

  }
}
