
const { test } = require('@playwright/test');


export const REPORTER = {
    it: (description, func)=> test(description, func),
    testStep: (title,func) => test.step(title,func),
}
