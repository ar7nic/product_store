import {test} from "@playwright/test";

export class PopupAssistant {
  async popUpAccept(page) {
   return  await test.step('Pop-up window accepting',async ()=>{
       let text;
          const _ = await new Promise(async (resolve) => {
            await page.on("dialog", async (dialog) => {
              await dialog.accept();
              text = dialog.message();
              resolve();
            });
          });
            return text;
        })
  }
}
