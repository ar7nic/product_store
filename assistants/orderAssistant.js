import { PAGES } from "../pages/pages";
import {test} from "@playwright/test";

export class OrderAssistant {
  async placeTheOrder(page,user) {
    await test.step('Click Place Order button',async ()=>{
      await PAGES.cartPage.placeOrderBtn.clickElem(page);

        }
    )
    await test.step('Fill order form',async ()=>{
      await PAGES.orderPopup.name.fillField(page,user.userName)
      await PAGES.orderPopup.country.fillField(page,user.userCountry);
      await PAGES.orderPopup.city.fillField(page,user.userCity);
      await PAGES.orderPopup.card.fillField(page,user.userCrCard);
      await PAGES.orderPopup.month.fillField(page,"January");
      await PAGES.orderPopup.year.fillField(page,"2023");

    })
    await test.step('Click Purchase button',async ()=>{
      await PAGES.orderPopup.purchaseBtn.clickElem(page);

    })
    await page.waitForTimeout(1000);
  }

  async placeTheOrderWithMissingData(page, user) {
    await PAGES.cartPage.placeOrderBtn.clickElem(page);
    await PAGES.orderPopup.name.fillField(page,"")
    await PAGES.orderPopup.country.fillField(page,user.userCountry);
    await PAGES.orderPopup.city.fillField(page,user.userCity);
    await PAGES.orderPopup.card.fillField(page,user.userCrCard);
    await PAGES.orderPopup.month.fillField(page,"");
    await PAGES.orderPopup.year.fillField(page,"2023");
    await PAGES.orderPopup.purchaseBtn.clickElem(page);


  }
}
