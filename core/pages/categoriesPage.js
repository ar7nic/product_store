import {SiteElement} from "../../utils/elements/SiteElement";
const pageName = "Categories menu"
export class CategoriesPage {

    laptopMenu = new SiteElement('Laptop menu',pageName, "//div[@class='list-group']/a[contains(text(),'Laptops')]");
    itemsTitles = new SiteElement('Items Title List', pageName,"//div[@class='card-block']/h4[@class='card-title']");
    itemsPrices = new SiteElement('Items Prices List',pageName,"//div[@class='card-block']/h5");
    itemsDescriptions = new SiteElement('Items Description List',pageName,"//div[@class='card-block']//p[@id='article']");

}