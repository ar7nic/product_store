
export class PopupAssistant {

       async popUpAccept(page){
           let text
           await page.on('dialog', async (dialog)=>{
                await dialog.accept();
                 text = await dialog.message();
                console.log(text)

        })
           console.log(text, " -  after page on")
           return text;
    }
}