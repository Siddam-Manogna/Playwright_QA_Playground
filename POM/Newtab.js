import {expect} from '@playwright/test'

export class Newtab{
    constructor(page){
        this.page=page
        this.context = page.context()
        this.openhomepage=page.locator('#btn-open-home-tab')
    }

    async navigate(){
       await this.page.goto("https://qaplayground.com/practice/tabs-windows") 
    }

    async opennewhometab(){
        const [newtab]=await Promise.all([
            this.context.waitForEvent('page'),
            this.openhomepage.click()
        ])
        await newtab.waitForLoadState()
        await expect(newtab.getByText("Master Automation Testing With")).toBeVisible()

    }
}