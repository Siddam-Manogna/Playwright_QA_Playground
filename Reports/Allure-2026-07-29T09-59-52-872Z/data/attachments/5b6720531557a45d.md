# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: table.spec.js >> Table practise
- Location: tests\table.spec.js:5:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#books-table')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#books-table')

```

# Test source

```ts
  1  | import {expect} from '@playwright/test'
  2  | 
  3  | export class Table{
  4  |     constructor(page){
  5  |         this.page=page
  6  |         this.table=page.locator('#books-table')
  7  | 
  8  |     }
  9  |     async navigate(){
  10 |         await this.page.goto("https://qaplayground.com/practice/data-table")
  11 |     }
  12 | 
  13 |     async tablecolumnsheaderverification(){
> 14 |         await expect(this.table).toBeVisible();
     |                                  ^ Error: expect(locator).toBeVisible() failed
  15 |         const headers=await this.table.locator('th').allInnerTexts()
  16 |         console.log(headers)
  17 |         const expectedHeaders = [
  18 |         'Sr No.',
  19 |         'Book Name',
  20 |         'Book Genre',
  21 |         'Book Author',
  22 |         'Book ISBN',
  23 |         'Book Published'
  24 |         ];
  25 | 
  26 |         for (const header of expectedHeaders) {
  27 |         expect(headers).toContain(header);
  28 |         }
  29 | 
  30 |         const rows=await this.page.locator('#books-table tbody tr')
  31 |         const count=await rows.count()
  32 |         console.log(count)
  33 |         await expect (rows).toHaveCount(10)
  34 |         const data=await rows.nth(3).locator('td').nth(3).textContent()
  35 |         console.log(data)
  36 |         await expect (data).not.toBe('')
  37 |        // const bookrow=await rows.filter({hasText:"Suresh Babu"}).textContent()
  38 |         //console.log(bookrow)
  39 |         const ISBN=await this.page.locator('tbody tr td:nth-child(5)').allTextContents()
  40 |         console.log(ISBN)
  41 |     }
  42 | }
```