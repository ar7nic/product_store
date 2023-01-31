import {SiteElement} from "../../utils/elements/SiteElement";
const pageName = 'Pagination page';
export class PaginationPage {

    itemCardTitle = new SiteElement("Item's titles",pageName,"//h4[@class='card-title']/a");
    nextButton = new SiteElement("Next button",pageName,"//ul[@class='pagination']//button[@id='next2']");
    previousButton = new SiteElement("Previous button",pageName,"//ul[@class='pagination']//button[@id='prev2']");


}