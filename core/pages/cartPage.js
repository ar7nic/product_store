import {SiteElement} from "../../utils/elements/SiteElement";
const pageName = "Cart page"
export class CartPage {

    // itemTitle = "(//tbody[@id='tbodyid']//td)[2]";
    // deleteItemBtn = "//tbody[@id='tbodyid']//a[contains(@onclick,'deleteItem')]";
    // itemsTable = "//tbody[@id='tbodyid']";

    cartItems = new SiteElement('Items in the cart',pageName,"//tr[@class='success']");
    cartItem = (prodName)=> new SiteElement(`Product "${prodName}" in the cart`,pageName,`(//tr[@class='success']/td[2][contains(text(),'${prodName}')])[1]`);
    itemTitlePath = new SiteElement('Product name',pageName,"//td[2]");
    itemPricePath= new SiteElement('Product price',pageName,"//td[3]");
    itemPrice = (prodName)=> new SiteElement('Product price',pageName,`(//tr[@class='success']/td[2][contains(text(),'${prodName}')])[1]/following-sibling::td[1]`);
    itemDelBtnPath= new SiteElement('Item delete button',pageName,"//td/a");
    itemDelBtn = (prodName) => new SiteElement(`Product ${prodName} delete button`,pageName,`(//tr[@class='success']/td[2][contains(text(),'${prodName}')])[1]/following-sibling::td/a`);
    totalPrice= new SiteElement('Total price',pageName,"//h3[@id='totalp']");
    placeOrderBtn= new SiteElement('Place Order Button',pageName,"//button[@data-target='#orderModal']");

    // cartItems = "//tr[@class='success']";
    // itemTitlePath = "//td[2]";
    // itemPricePath = "//td[3]";
    // itemDelBtnPath = "//td/a";
    // totalPrice = "//h3[@id='totalp']";
    // placeOrderBtn = "//button[@data-target='#orderModal']";


}