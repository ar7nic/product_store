import {ASSISTANTS} from "../assistants/assistants";
import {PAGES} from "../pages/pages";
const { test } = require('@playwright/test');
const {expect} = require('chai')


export class AuthAsserts {


    async expectLoginPopupIsVisible(page){
        await test.step(`ASSERT Login Pop-up window is visible`, async () => {
            const attr = await PAGES.loginPage.loginModal.getAttribute(page, "style");
            await expect(attr).to.equal('display: block;');

        })
    }

    async expectUserMenuIsVisible(page, menuText){
        await test.step(`ASSERT User menu added to main menu as"${menuText}"`, async () => {
            await expect(await PAGES.mainMenu.welcomeMenu.getText(page)).to.equal(menuText);

        })
    }

    async expectSignInPopupIsVisible(page){
        await test.step(`ASSERT Login Pop-up window is visible`, async () => {
            const attr = await PAGES.signInPopUp.signInModal.getAttribute(page, "style");
            await expect(attr).to.equal('display: block;');

        })
    }
}