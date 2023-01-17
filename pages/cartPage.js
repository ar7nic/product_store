export class CartPage {
    cartMenu = "//a[@id='cartur']";
    itemTitle = "(//tbody[@id='tbodyid']//td)[2]";
    deleteItemBtn = "//tbody[@id='tbodyid']//a[contains(@onclick,'deleteItem')]";
    itemsTable = "//tbody[@id='tbodyid']";

    cartItems = "//tr[@class='success']";
    itemTitlePath = "//td[2]";
    itemDelBtnPath = "//td/a";
    totalPrice = "//h3[@id='totalp']";
    placeOrderBtn = "//button[@data-target='#orderModal']";


}