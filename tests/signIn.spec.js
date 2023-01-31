import {URLS} from "../core/const/baseConst";
import {ASSISTANTS} from "../core/assistants/assistants";
import {USERS} from "../core/models/users";
import {ASSERTS} from "../core/asserts/asserts";
import {REPORTER} from "../utils/reporter/reporterAdapter";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

test.describe('sign in tests', ()=>{

    REPORTER.it('sign in with existing user', async({page})=>{

        await ASSISTANTS.signInAssistant.signInToSite(page,USERS.testUser);
        await ASSERTS.popUpAsserts.expectAlertWithText(page,'This user already exist.');
        await ASSERTS.authAsserts.expectSignInPopupIsVisible(page);
    })
});



