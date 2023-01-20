export class PopupAssistant {
  async popUpAccept(page) {
    let text;
    const _ = await new Promise(async (resolve) => {
      await page.on("dialog", async (dialog) => {
        await dialog.accept();
        text = dialog.message();
        resolve();
      });
    });
    return text;
  }
}
