import {URLS} from "../const/baseConst";
import {PAGES} from "../pages/pages";
import {Assistants} from "../assistants/assistants";

const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto(URLS.siteUrl);
});

