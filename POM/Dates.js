import {expect} from '@playwright/test'

export class Dates{
    constructor(page){
        this.page=page
        this.today=page.locator("#input-today-date")
    }
    async navigate(){
        await this.page.goto("https://qaplayground.com/practice/date-picker")
    }
    async filltodaysdate(date){
        await this.today.fill(date)
        await expect(this.today).toHaveAttribute(date)

    }
}