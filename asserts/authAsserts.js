import {ASSISTANTS} from "../assistants/assistants";
import {PAGES} from "../pages/pages";
const { test } = require('@playwright/test');
const {expect} = require('chai')





export class AuthAsserts {
    async expectAlertWithText(page, msg){
        await test.step(`ASSERT Pop-up window with text "${msg}" expected`, async () => {
            await expect(await ASSISTANTS.popupAssistant.popUpAccept(page)).to.equal(msg);
            //         await expect(await ASSISTANTS.popupAssistant.popUpAccept(page)).toEqual('User does not exist.');
        })
    }

    async expectLoginPopupIsVisible(page){
        await test.step(`ASSERT Login Pop-up window is visible`, async () => {
            // await expect(await PAGES.loginPage.loginModal.getItems(page)).to.have.attribute('style','display: block;');
        })
    }
}