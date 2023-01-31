import {SiteElement} from "../../utils/elements/SiteElement";
const pageName = "Cart page"
export class CartPage {

    cartItems = new SiteElement('Items in the cart',pageName,"//tr[@class='success']");
    cartItem = (prodName)=> new SiteElement(`Product "${prodName}" in the cart`,pageName,`(//tr[@class='success']/td[2][contains(text(),'${prodName}')])[1]`);
    itemPrice = (prodName)=> new SiteElement('Product price',pageName,`(//tr[@class='success']/td[2][contains(text(),'${prodName}')])[1]/following-sibling::td[1]`);
    itemDelBtn = (prodName) => new SiteElement(`Product ${prodName} delete button`,pageName,`(//tr[@class='success']/td[2][contains(text(),'${prodName}')])[1]/following-sibling::td/a`);
    totalPrice= new SiteElement('Total price',pageName,"//h3[@id='totalp']");
    placeOrderBtn= new SiteElement('Place Order Button',pageName,"//button[@data-target='#orderModal']");


}