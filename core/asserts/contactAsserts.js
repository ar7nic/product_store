import {REPORTER} from "../../utils/reporter/reporterAdapter";
import {PAGES} from "../pages/pages";
import {expect} from "chai";

export class ContactAsserts {

    async expectContactPopupNotVisible(page){
        await REPORTER.testStep(`ASSERT Contact Pop-up window is not visible`, async () => {
            const attr = await PAGES.contactPage.modalWindowMsg.getAttribute(page, "aria-hidden");
            await expect(attr).to.equal('true');

        })
    }
}