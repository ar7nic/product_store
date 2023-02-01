import {ASSISTANTS} from "../assistants/assistants";
import {PAGES} from "../pages/pages";
import {REPORTER} from "../../utils/reporter/reporterAdapter";
const { test } = require('@playwright/test');
const {expect} = require('chai')


export class AuthAsserts {


    async expectLoginPopupIsVisible(page){
        await REPORTER.testStep(`ASSERT Login Pop-up window is visible`, async () => {
            const attr = await PAGES.loginPage.loginModal.getAttribute(page, "style");
            await expect(attr).to.equal('display: block;');

        })
    }

    async expectUserMenuIsVisible(page, menuText){
        await REPORTER.testStep(`ASSERT User menu added to main menu as"${menuText}"`, async () => {
            await expect(await PAGES.mainMenu.welcomeMenu.getText(page)).to.equal(menuText);

        })
    }

    async expectSignInPopupIsVisible(page){
        await REPORTER.testStep(`ASSERT Login Pop-up window is visible`, async () => {
            const attr = await PAGES.signInPopUp.signInModal.getAttribute(page, "style");
            await expect(attr).to.equal('display: block;');

        })
    }
}