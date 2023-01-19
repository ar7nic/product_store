import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";
import {ASSISTANT} from "../assistants/assistants";
import {USERS} from "../models/users";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('sign in tests', ()=>{

    test('sign in with existing user', async({page})=>{

        await ASSISTANT.signInAssistant.signInToSite(page,USERS.testUser.userName,USERS.testUser.userPassword);
        await expect(await ASSISTANT.popupAssistant.popUpAccept(page)).toEqual('This user already exist.');


    })
});



