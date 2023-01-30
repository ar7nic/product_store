

const { test } = require('@playwright/test');

async function step(title,func){
    return await test.step(title,func);
}



export { step };