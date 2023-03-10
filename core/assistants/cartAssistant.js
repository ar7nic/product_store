import { PAGES } from "../pages/pages";
import { ASSISTANTS, Assistants } from "./assistants";
import {SiteElement} from "../../utils/elements/SiteElement";
import {REPORTER} from "../../utils/reporter/reporterAdapter";
import {ENGINEASSISTANT} from "../../utils/engine/EngineAssistant";

export class CartAssistant {

  async addToCartFirstItem(page) {
    let prodName;
    let prodPrice;
    let msg;
    await ENGINEASSISTANT.waitForNetworkIdle(page);
    await REPORTER.testStep ('Click on the first product on page', async ()=> {
      await PAGES.categoriesPage.itemsTitles.clickOnFirstElem(page);
    })

    await ENGINEASSISTANT.waitForNetworkIdle(page);
    await REPORTER.testStep ('Open login pop-up', async ()=> {
      prodName = await PAGES.productPage.prodTitle.getText(page);
      prodPrice = await (await PAGES.productPage.prodPrice.getText(page)).match(/\d+/)[0];
    })

    await Promise.all([
    await  PAGES.productPage.addToCartBtn.clickElem(page),
    msg = await ASSISTANTS.popupAssistant.popUpAccept(page)
    ])
    await ENGINEASSISTANT.waitTimeout(page,2000);
    return { prodName, prodPrice ,msg};
  }


  async deleteItemFromCart(page, prodName) {

    await PAGES.cartPage.itemDelBtn(prodName).clickElem(page);
    await ENGINEASSISTANT.waitForNetworkIdle(page);
    await ENGINEASSISTANT.waitTimeout(page,2000);

  }
}
