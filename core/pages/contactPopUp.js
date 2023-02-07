import {SiteElement} from "../../utils/elements/SiteElement";

const pageName = "Contact pop-up";

export class ContactPopUp {

    contactEmailInput = new SiteElement('Contact Email input', pageName,"//input[@id='recipient-email']");
    contactNameInput = new SiteElement('Contact Name input', pageName,"//input[@id='recipient-name']");
    messageInput = new SiteElement('Message input', pageName,"//textarea[@id='message-text']");
    sendMsgButton = new SiteElement('Send message button',pageName, "//button[contains(text(),'Send message')]");
    modalWindowMsg = new SiteElement('Message modal window',pageName, "//div[@id='exampleModal']");
}