import {expect} from '@playwright/test'

export class fileupload{
    constructor(page){
        this.page=page
        this.fileInput=page.locator("#file-upload")
    }

    async navigate(){
       await this.page.goto("https://qaplayground.com/practice/file-upload") 
    }
    async fileuploadfield(){
        await this.fileInput.setInputFiles("TestData/sample.txt")
         await expect(this.fileInput).toHaveValue(/sample.txt/);
    }
}