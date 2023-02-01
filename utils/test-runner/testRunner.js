
const { test } = require('@playwright/test');


export const RUNNER = {
    it: (description, func)=> test(description, func),
    describe: (description, func)=> test.describe(description, func),

}
