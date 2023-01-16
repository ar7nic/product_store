import {expect} from "@playwright/test";

export class CartAssistant {

    async popUpAccept(page,msg){
        page.on('dialog',async (dialog)=>{
            expect(dialog.message() === msg);
            await dialog.accept();
        })
    }


}