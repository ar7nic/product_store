import { PAGES } from "../pages/pages";
import { USERS } from "../models/users";

export class OrderAssistant {
  async placeTheOrder(page) {
    await page.locator(PAGES.cartPage.placeOrderBtn).click();
    await page.locator(PAGES.orderPopup.name).fill(USERS.testUser.userName);
    await page
      .locator(PAGES.orderPopup.country)
      .fill(USERS.testUser.userCountry);
    await page.locator(PAGES.orderPopup.city).fill(USERS.testUser.userCity);
    await page.locator(PAGES.orderPopup.card).fill(USERS.testUser.userCrCard);
    await page.locator(PAGES.orderPopup.month).fill("January");
    await page.locator(PAGES.orderPopup.year).fill("2023");
    await page.locator(PAGES.orderPopup.purchaseBtn).click();
    await page.waitForTimeout(1000);
  }

  async placeTheOrderWithMissingData(page) {
    await page.locator(PAGES.cartPage.placeOrderBtn).click();
    await page.locator(PAGES.orderPopup.name).fill("");
    await page
      .locator(PAGES.orderPopup.country)
      .fill(USERS.testUser.userCountry);
    await page.locator(PAGES.orderPopup.city).fill(USERS.testUser.userCity);
    await page.locator(PAGES.orderPopup.card).fill(USERS.testUser.userCrCard);
    await page.locator(PAGES.orderPopup.month).fill("");
    await page.locator(PAGES.orderPopup.year).fill("2023");
    await page.locator(PAGES.orderPopup.purchaseBtn).click();
    await page.waitForTimeout(1000);
  }
}
