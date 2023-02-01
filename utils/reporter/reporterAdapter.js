
const { test } = require('@playwright/test');


export const REPORTER = {

    testStep: (title,func) => test.step(title,func),
}
