import {expect} from '@playwright/test'
export class Homepage{
    constructor(page){
        this.page=page
        this.getstarted=page.getByRole("button",{name:"Get Started"})
        
    }
    async Navigate(){
        await this.page.goto("https://qaplayground.com/")
        await expect(this.page.getByText("Master Automation Testing With")).toBeVisible()
        await this.getstarted.click()
        await expect(this.page.getByText("Ready to be a Pro AI Automation Engineer?")).toBeVisible()

    }
}