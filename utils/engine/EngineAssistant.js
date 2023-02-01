import {REPORTER} from "../reporter/reporterAdapter";

class EngineAssistant {

    async waitForNetworkIdle(page){
        await REPORTER.testStep ('Network idle wait', async ()=> {
            await page.waitForLoadState('networkidle');
        })
    }

    async waitTimeout(page,ms){
        await REPORTER.testStep (`Wait for ${ms} ms`, async ()=> {
            await page.waitForTimeout(ms);
        })
    }

}



export const ENGINEASSISTANT = new EngineAssistant();


