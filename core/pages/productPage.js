import {SiteElement} from "../../utils/elements/SiteElement";

const pageName = 'Product page'
export class ProductPage {

    prodTitle = new SiteElement('Product title',pageName,"//h2[@class='name']");
    prodPrice = new SiteElement('Product price',pageName,"//h3[@class='price-container']");
    addToCartBtn = new SiteElement('Add to cart button',pageName,"//div[contains(@class,'product-content')]//a[contains(@class,'btn-success')]");

}