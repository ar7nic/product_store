export class OrderPopup {
    name = "//input[@id='name']";
    country = "//input[@id='country']";
    city = "//input[@id='city']";
    card = "//input[@id='card']"
    month = "//input[@id='country']";
    year = "//input[@id='country']";
    purchaseBtn = "//div[@class='modal-footer']/button[@onclick='purchaseOrder()']";
    thanksMsg = "//div[contains(@class,'showSweetAlert')]//h2";
    confirmBtn = "//button[contains(@class,'confirm')]";
}