import {ASSISTANTS} from "../assistants/assistants";
import {REPORTER} from "../../utils/reporter/reporterAdapter";

const { test } = require('@playwright/test');
const {expect} = require('chai')

export class PopUpAsserts {

    async expectAlertWithText(page, msg){
        await REPORTER.testStep(`ASSERT Pop-up window with text "${msg}" expected`, async () => {
            await expect(await ASSISTANTS.popupAssistant.popUpAccept(page)).to.equal(msg);
        })
    }
    async expectTextEqualTo( msgPopup, msgExpect){
        await REPORTER.testStep(`ASSERT Text "${msgExpect}" from pop-up expected`, async () => {
            await expect(msgPopup).to.equal(msgExpect);
        })
    }
}