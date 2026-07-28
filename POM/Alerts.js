import {expect} from '@playwright/test'

export class Alerts{
    constructor(page){
        this.page=page
        this.simplebutton=page.locator("#btn-simple-alert")
        this.confirmAlert=page.locator("#btn-confirm-alert")
        this.acceptmsg=page.getByText("Result: Accepted")
        this.dismissmsg=page.getByText("Result: Dismissed")
        this.prompt=page.locator("#btn-prompt-alert")
        this.promptmsg=page.getByText("Your name is — ")
        this.toast=page.locator("#btn-toast-alert")
        this.sweetalert=page.locator("#btn-modal-alert")
        this.modernalert=page.locator('#btn-modal-cancel')
        this.share=page.locator("#btn-dialog-share")
        this.sharelink=page.locator('[role="dialog"]')
        this.shareurl=page.locator("#share-link")
        this.shareclose=page.locator("#btn-dialog-close")
    }

    async Navigatealerts(){
        await this.page.goto("https://qaplayground.com/practice/alerts-dialogs")
    }

    async simpleBrowserAlert(){
        this.page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
        })
        await this.simplebutton.click();
        await expect(this.simplebutton).toBeVisible();
        await expect(this.simplebutton).toBeEnabled();
        await this.confirmAlert.click()
        await expect (this.acceptmsg).toBeVisible()
       
    }

    async dismissbtn(){
        this.page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
        })
        await this.confirmAlert.click()
        await expect (this.dismissmsg).toBeVisible()
    }

    async promptdialog(name){
        this.page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept(name);
        })
        await this.prompt.click()
        await expect(this.page.getByText(`Your name is — ${name}`)).toBeVisible()

    }

    async toastalert(){
        await this.toast.click()
        await expect (this.page.getByText("This is simple toast.")).toBeVisible()
    }
    async sweetalertdialog(){
        await this.sweetalert.click()
        await expect (this.modernalert).toBeVisible()
        await this.modernalert.click()
        await expect (this.modernalert).not.toBeVisible()

    }

    async sharebtn(){
        await this.share.click()
        await expect (this.sharelink).toBeVisible()
        await expect(this.shareurl).toHaveValue("https://www.qaplayground.com/practice/alerts-dialogs");
        await this.shareclose.click()
        await expect (this.sharelink).not.toBeVisible()
    }



}