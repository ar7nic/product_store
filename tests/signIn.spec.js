import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";
import {ASSISTANTS} from "../assistants/assistants";
import {USERS} from "../models/users";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('sign in tests', ()=>{

    test('sign in with existing user', async({page})=>{

        await ASSISTANTS.signInAssistant.signInToSite(page,USERS.testUser);
        await expect(await ASSISTANTS.popupAssistant.popUpAccept(page)).toEqual('This user already exist.');

    })
});



