import {SiteElement} from "../../utils/elements/SiteElement";
const pageName = "About-us pop-up"
export class AboutPopUp {

   modalVideo = new SiteElement('Video',pageName,"//div[@id='videoModal'][@style='display: block;']//video");
   modalCloseButton = new SiteElement('Close button',pageName,"//div[@id='videoModal']//div[@class='modal-footer']/button");
   modalWindow = new SiteElement('Video window',pageName,"//div[@id='videoModal']");


}