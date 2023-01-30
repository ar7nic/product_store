import {SiteElement} from "../utils/SiteElement";

const pageName = 'Order Pop-up'
export class OrderPopup {

    modalWindow = new SiteElement('Pop-up window', pageName, "//div[@id='orderModal']");
    name = new SiteElement('Name input',pageName,"//input[@id='name']");
    country = new SiteElement('Country input',pageName,"//input[@id='country']");
    city = new SiteElement('City input',pageName,"//input[@id='city']");
    card = new SiteElement('Card input',pageName,"//input[@id='card']");
    month = new SiteElement('Month input',pageName,"//input[@id='month']");
    year = new SiteElement('Year input',pageName,"//input[@id='year']");
    purchaseBtn = new SiteElement('Purchase Button',pageName,"//div[@class='modal-footer']/button[@onclick='purchaseOrder()']");
    thanksMsg = new SiteElement('Thanks message',pageName,"//div[contains(@class,'showSweetAlert')]//h2");
    confirmBtn = new SiteElement('Ok Button',pageName,"//button[contains(@class,'confirm')]");


    // name = "//input[@id='name']";
    // country = "//input[@id='country']";
    // city = "//input[@id='city']";
    // card = "//input[@id='card']"
    // month = "//input[@id='month']";
    // year = "//input[@id='year']";
    // purchaseBtn = "//div[@class='modal-footer']/button[@onclick='purchaseOrder()']";
    // thanksMsg = "//div[contains(@class,'showSweetAlert')]//h2";
    // confirmBtn = "//button[contains(@class,'confirm')]";
}