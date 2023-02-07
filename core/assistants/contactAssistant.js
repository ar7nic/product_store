import {REPORTER} from "../../utils/reporter/reporterAdapter";
import {PAGES} from "../pages/pages";
import {ASSISTANTS} from "./assistants";

export class ContactAssistant {
    async sendMessage(page, user, msg) {
        let popUpMsg;
        await REPORTER.testStep('Open message pop-up', async () => {
            await PAGES.mainMenu.contactMenu.clickElem(page);

        })
        await REPORTER.testStep('Fill form with user information', async () => {
            await PAGES.contactPage.contactEmailInput.fillField(page,user.userEmail);
            await PAGES.contactPage.contactNameInput.fillField(page,user.userName);
            await PAGES.contactPage.messageInput.fillField(page,msg);
        })
        await REPORTER.testStep('Click send message button', async () => {
                await PAGES.contactPage.sendMsgButton.clickElem(page);

        })

    }


}