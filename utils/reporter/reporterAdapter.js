
const { test } = require('@playwright/test');

// async function step(title,func){
//     return await test.step(title,func);
// }
//
// function it(desc,func){
//     return test(desc, func);
// }

export const REPORTER = {
    it: (description, func)=> test(description, func),
    testStep: (title,func) => test.step(title,func),
}

// export { step,it };
// get reporter