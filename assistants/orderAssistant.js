import { PAGES } from "../pages/pages";
import { USERS } from "../models/users";
import {test} from "@playwright/test";

export class OrderAssistant {
  async placeTheOrder(page,user) {
    await test.step('Click Place Order button',async ()=>{
      await page.locator(PAGES.cartPage.placeOrderBtn).click();
        }
    )
    await test.step('Fill order form',async ()=>{
      await page.locator(PAGES.orderPopup.name).fill(user.userName);
      await page.locator(PAGES.orderPopup.country).fill(user.userCountry);
      await page.locator(PAGES.orderPopup.city).fill(user.userCity);
      await page.locator(PAGES.orderPopup.card).fill(user.userCrCard);
      await page.locator(PAGES.orderPopup.month).fill("January");
      await page.locator(PAGES.orderPopup.year).fill("2023");
    })
    await test.step('Click Purchase button',async ()=>{
      await page.locator(PAGES.orderPopup.purchaseBtn).click();
    })
    await page.waitForTimeout(1000);
  }

  async placeTheOrderWithMissingData(page, user) {
    await page.locator(PAGES.cartPage.placeOrderBtn).click();
    await page.locator(PAGES.orderPopup.name).fill("");
    await page.locator(PAGES.orderPopup.country).fill(user.userCountry);
    await page.locator(PAGES.orderPopup.city).fill(user.userCity);
    await page.locator(PAGES.orderPopup.card).fill(user.userCrCard);
    await page.locator(PAGES.orderPopup.month).fill("");
    await page.locator(PAGES.orderPopup.year).fill("2023");
    await page.locator(PAGES.orderPopup.purchaseBtn).click();

  }
}
