export class CartPage {
    cartMenu = "//a[@id='cartur']";
    itemTitle = "(//tbody[@id='tbodyid']//td)[2]";
    deleteItemBtn = "//tbody[@id='tbodyid']//a[contains(@onclick,'deleteItem')]";
    itemsTable = "//tbody[@id='tbodyid']";
    tableWithItems = "//tr[@class='success']";
}