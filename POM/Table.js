import {expect} from '@playwright/test'

export class Table{
    constructor(page){
        this.page=page
        this.table=page.locator('#books-table')

    }
    async navigate(){
        await this.page.goto("https://qaplayground.com/practice/data-table")
    }

    async tablecolumnsheaderverification(){
        await expect(this.table).toBeVisible();
        const headers=await this.table.locator('th').allInnerTexts()
        console.log(headers)
        const expectedHeaders = [
        'Sr No.',
        'Book Name',
        'Book Genre',
        'Book Author',
        'Book ISBN',
        'Book Published'
        ];

        for (const header of expectedHeaders) {
        expect(headers).toContain(header);
        }

        const rows=await this.page.locator('#books-table tbody tr')
        const count=await rows.count()
        console.log(count)
        await expect (rows).toHaveCount(10)
        const data=await rows.nth(3).locator('td').nth(3).textContent()
        console.log(data)
        await expect (data).not.toBe('')
       // const bookrow=await rows.filter({hasText:"Suresh Babu"}).textContent()
        //console.log(bookrow)
        const ISBN=await this.page.locator('tbody tr td:nth-child(5)').allTextContents()
        console.log(ISBN)
    }
}