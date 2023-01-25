import {SiteElement} from "../utils/SiteElement";
const pageName = "Cart page"
export class CartPage {

    itemTitle = "(//tbody[@id='tbodyid']//td)[2]";
    deleteItemBtn = "//tbody[@id='tbodyid']//a[contains(@onclick,'deleteItem')]";
    itemsTable = "//tbody[@id='tbodyid']";

    cartItems = new SiteElement('Items in the cart',pageName,"//tr[@class='success']");
    // itemTitlePath = new SiteElement('Product name',pageName,"//td[2]");
    itemPricePath= new SiteElement('Product price',pageName,"//td[3]");
    itemDelBtnPath= new SiteElement('Item delete button',pageName,"//td/a");
    totalPrice= new SiteElement('Total price',pageName,"//h3[@id='totalp']");
    placeOrderBtn= new SiteElement('Place Order Button',pageName,"//button[@data-target='#orderModal']");

    // cartItems = "//tr[@class='success']";
    itemTitlePath = "//td[2]";
    // itemPricePath = "//td[3]";
    // itemDelBtnPath = "//td/a";
    // totalPrice = "//h3[@id='totalp']";
    // placeOrderBtn = "//button[@data-target='#orderModal']";


}