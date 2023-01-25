import { PAGES } from "../pages/pages";
import { USERS } from "../models/users";
import {test} from "@playwright/test";

export class OrderAssistant {
  async placeTheOrder(page,user) {
    await test.step('Click Place Order button',async ()=>{
      await PAGES.cartPage.placeOrderBtn.clickElem(page);
      // await page.locator(PAGES.cartPage.placeOrderBtn).click();
        }
    )
    await test.step('Fill order form',async ()=>{
      await PAGES.orderPopup.name.fillField(page,user.userName)
      // await page.locator(PAGES.orderPopup.name).fill(user.userName);
      await PAGES.orderPopup.country.fillField(page,user.userCountry);
      // await page.locator(PAGES.orderPopup.country).fill(user.userCountry);
      await PAGES.orderPopup.city.fillField(page,user.userCity);
      // await page.locator(PAGES.orderPopup.city).fill(user.userCity);
      await PAGES.orderPopup.card.fillField(page,user.userCrCard);
      // await page.locator(PAGES.orderPopup.card).fill(user.userCrCard);
      await PAGES.orderPopup.month.fillField(page,"January");
      // await page.locator(PAGES.orderPopup.month).fill("January");
      await PAGES.orderPopup.year.fillField(page,"2023");
      // await page.locator(PAGES.orderPopup.year).fill("2023");
    })
    await test.step('Click Purchase button',async ()=>{
      await PAGES.orderPopup.purchaseBtn.clickElem(page);
      // await page.locator(PAGES.orderPopup.purchaseBtn).click();
    })
    await page.waitForTimeout(1000);
  }

  async placeTheOrderWithMissingData(page, user) {
    await PAGES.cartPage.placeOrderBtn.clickElem(page);
    // await page.locator(PAGES.cartPage.placeOrderBtn).click();
    await PAGES.orderPopup.name.fillField(page,"")
    // await page.locator(PAGES.orderPopup.name).fill("");
    await PAGES.orderPopup.country.fillField(page,user.userCountry);
    // await page.locator(PAGES.orderPopup.country).fill(user.userCountry);
    await PAGES.orderPopup.city.fillField(page,user.userCity);
    // await page.locator(PAGES.orderPopup.city).fill(user.userCity);
    await PAGES.orderPopup.card.fillField(page,user.userCrCard);
    // await page.locator(PAGES.orderPopup.card).fill(user.userCrCard);
    await PAGES.orderPopup.month.fillField(page,"");
    // await page.locator(PAGES.orderPopup.month).fill("");
    await PAGES.orderPopup.year.fillField(page,"2023");
    // await page.locator(PAGES.orderPopup.year).fill("2023");
    await PAGES.orderPopup.purchaseBtn.clickElem(page);
    // await page.locator(PAGES.orderPopup.purchaseBtn).click();

  }
}
