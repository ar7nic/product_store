import {URLS} from "../const/baseConst";
import {ASSISTANTS} from "../assistants/assistants";
import {USERS} from "../models/users";
import {ASSERTS} from "../asserts/asserts";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('sign in tests', ()=>{

    test('sign in with existing user', async({page})=>{

        await ASSISTANTS.signInAssistant.signInToSite(page,USERS.testUser);
        await ASSERTS.popUpAsserts.expectAlertWithText(page,'This user already exist.');
        await ASSERTS.authAsserts.expectSignInPopupIsVisible(page);
    })
});



