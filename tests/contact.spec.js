const {test} = require("@playwright/test");
const {URLS} = require("../core/const/baseConst");
const {RUNNER} = require("../utils/test-runner/testRunner");
const {ASSISTANTS} = require("../core/assistants/assistants");
const {USERS} = require("../core/models/users");
const {ASSERTS} = require("../core/asserts/asserts");
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

RUNNER.describe('Send message', ()=>{

    RUNNER.it('Send message with filled user info', async({page})=>{
        const msg = await ASSISTANTS.contactAssistant.sendMessage(page,USERS.testUser,'Hello');
        //await ASSERTS.popUpAsserts.expectTextEqualTo(msg,'Thanks for the message!!');
        await ASSERTS.contactAsserts.expectContactPopupNotVisible(page);

    })
});
