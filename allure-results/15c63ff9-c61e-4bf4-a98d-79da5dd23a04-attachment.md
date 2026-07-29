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
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#books-table')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - navigation "Main navigation" [ref=e3]:
    - generic [ref=e4]:
      - link "QA Playground home" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e6]
        - generic [ref=e7]: QA Playground
      - list [ref=e8]:
        - listitem [ref=e9]:
          - link "Home" [ref=e10] [cursor=pointer]:
            - /url: /
        - listitem [ref=e11]:
          - link "Practice" [ref=e12] [cursor=pointer]:
            - /url: /practice
        - listitem [ref=e13]:
          - link "Demo Apps" [ref=e14] [cursor=pointer]:
            - /url: /demo
        - listitem [ref=e15]:
          - link "Challenges" [ref=e16] [cursor=pointer]:
            - /url: /challenges
        - listitem [ref=e17]:
          - link "Blogs" [ref=e18] [cursor=pointer]:
            - /url: /blog
      - generic [ref=e19]:
        - button "Switch to dark mode" [ref=e20] [cursor=pointer]:
          - img [ref=e22]
        - link "Log in / Sign up" [ref=e24] [cursor=pointer]:
          - /url: /auth/sign-in
  - main [ref=e25]:
    - generic [ref=e28]:
      - generic [ref=e30]:
        - navigation "Breadcrumb" [ref=e31]:
          - generic [ref=e32]:
            - link "Home" [ref=e33] [cursor=pointer]:
              - /url: /
            - generic [ref=e34]: /
          - generic [ref=e35]:
            - link "Practice" [ref=e36] [cursor=pointer]:
              - /url: /practice
            - generic [ref=e37]: /
          - generic [ref=e39]: Data Table
        - generic [ref=e40]:
          - heading "Data Table Automation Practice" [level=1] [ref=e41]
          - paragraph [ref=e42]: Practice reading, counting, sorting, and locating rows and cells in a realistic HTML table — essential skills for Selenium & Playwright table automation.
          - generic [ref=e43]:
            - generic [ref=e44]:
              - generic [ref=e45]: "02"
              - text: Intermediate
            - generic [ref=e46]: 20 min
            - generic [ref=e47]: 6 scenarios
            - generic [ref=e48]: 12 test cases
      - generic [ref=e49]:
        - tablist "Practice page tabs" [ref=e50]:
          - generic [ref=e51]:
            - tab "Practice 6" [selected] [ref=e52]:
              - img [ref=e53]
              - generic [ref=e55]: Practice
              - generic [ref=e56]: "6"
            - tab "Test Cases 12" [ref=e57]:
              - img [ref=e58]
              - generic [ref=e61]: Test Cases
              - generic [ref=e62]: "12"
            - tab "Learn" [ref=e63]:
              - img [ref=e64]
              - generic [ref=e66]: Learn
        - tabpanel "Practice 6" [ref=e67]:
          - generic [ref=e69]:
            - region "Data Table Practice Scenarios" [ref=e70]:
              - paragraph [ref=e71]: Interactive Table
              - generic [ref=e72]:
                - generic [ref=e73]:
                  - generic [ref=e74]: Search books
                  - searchbox "Search books" [ref=e75]
                  - generic [ref=e76]: Filter by genre
                  - combobox "Filter by genre" [ref=e77] [cursor=pointer]:
                    - option "All Genres" [selected]
                    - option "Technology"
                    - option "Fantasy"
                    - option "Science Fiction"
                    - option "Dystopian"
                    - option "Fiction"
                    - option "Non-Fiction"
                  - button "Add new book" [ref=e78] [cursor=pointer]: + Add Book
                - table "Books data table" [ref=e80]:
                  - rowgroup [ref=e81]:
                    - row "Sr No. Book Name Book Genre Book Author Book ISBN Book Published Actions" [ref=e82]:
                      - columnheader "Sr No." [ref=e83]
                      - columnheader "Book Name" [ref=e84] [cursor=pointer]:
                        - generic [ref=e85]:
                          - text: Book Name
                          - generic [ref=e86]: ⇅
                      - columnheader "Book Genre" [ref=e87] [cursor=pointer]:
                        - generic [ref=e88]:
                          - text: Book Genre
                          - generic [ref=e89]: ⇅
                      - columnheader "Book Author" [ref=e90] [cursor=pointer]:
                        - generic [ref=e91]:
                          - text: Book Author
                          - generic [ref=e92]: ⇅
                      - columnheader "Book ISBN" [ref=e93] [cursor=pointer]:
                        - generic [ref=e94]:
                          - text: Book ISBN
                          - generic [ref=e95]: ⇅
                      - columnheader "Book Published" [ref=e96] [cursor=pointer]:
                        - generic [ref=e97]:
                          - text: Book Published
                          - generic [ref=e98]: ⇅
                      - columnheader "Actions" [ref=e99]
                  - rowgroup [ref=e100]:
                    - row "1 The Pragmatic Programmer Technology Andrew Hunt ISBN-9780135957059 1999-10-20 Edit The Pragmatic Programmer Delete The Pragmatic Programmer" [ref=e101]:
                      - cell "1" [ref=e102]
                      - cell "The Pragmatic Programmer" [ref=e103]
                      - cell "Technology" [ref=e104]:
                        - generic [ref=e105]: Technology
                      - cell "Andrew Hunt" [ref=e106]
                      - cell "ISBN-9780135957059" [ref=e107]
                      - cell "1999-10-20" [ref=e108]
                      - cell "Edit The Pragmatic Programmer Delete The Pragmatic Programmer" [ref=e109]:
                        - button "Edit The Pragmatic Programmer" [ref=e110] [cursor=pointer]: Edit
                        - button "Delete The Pragmatic Programmer" [ref=e111] [cursor=pointer]: Delete
                    - row "2 Clean Code Technology Robert C. Martin ISBN-9780132350884 2008-08-01 Edit Clean Code Delete Clean Code" [ref=e112]:
                      - cell "2" [ref=e113]
                      - cell "Clean Code" [ref=e114]
                      - cell "Technology" [ref=e115]:
                        - generic [ref=e116]: Technology
                      - cell "Robert C. Martin" [ref=e117]
                      - cell "ISBN-9780132350884" [ref=e118]
                      - cell "2008-08-01" [ref=e119]
                      - cell "Edit Clean Code Delete Clean Code" [ref=e120]:
                        - button "Edit Clean Code" [ref=e121] [cursor=pointer]: Edit
                        - button "Delete Clean Code" [ref=e122] [cursor=pointer]: Delete
                    - row "3 Design Patterns Technology Erich Gamma ISBN-9780201633610 1994-10-31 Edit Design Patterns Delete Design Patterns" [ref=e123]:
                      - cell "3" [ref=e124]
                      - cell "Design Patterns" [ref=e125]
                      - cell "Technology" [ref=e126]:
                        - generic [ref=e127]: Technology
                      - cell "Erich Gamma" [ref=e128]
                      - cell "ISBN-9780201633610" [ref=e129]
                      - cell "1994-10-31" [ref=e130]
                      - cell "Edit Design Patterns Delete Design Patterns" [ref=e131]:
                        - button "Edit Design Patterns" [ref=e132] [cursor=pointer]: Edit
                        - button "Delete Design Patterns" [ref=e133] [cursor=pointer]: Delete
                    - row "4 The Hobbit Fantasy J.R.R. Tolkien ISBN-9780547928227 1937-09-21 Edit The Hobbit Delete The Hobbit" [ref=e134]:
                      - cell "4" [ref=e135]
                      - cell "The Hobbit" [ref=e136]
                      - cell "Fantasy" [ref=e137]:
                        - generic [ref=e138]: Fantasy
                      - cell "J.R.R. Tolkien" [ref=e139]
                      - cell "ISBN-9780547928227" [ref=e140]
                      - cell "1937-09-21" [ref=e141]
                      - cell "Edit The Hobbit Delete The Hobbit" [ref=e142]:
                        - button "Edit The Hobbit" [ref=e143] [cursor=pointer]: Edit
                        - button "Delete The Hobbit" [ref=e144] [cursor=pointer]: Delete
                    - row "5 Dune Science Fiction Frank Herbert ISBN-9780441013593 1965-08-01 Edit Dune Delete Dune" [ref=e145]:
                      - cell "5" [ref=e146]
                      - cell "Dune" [ref=e147]
                      - cell "Science Fiction" [ref=e148]:
                        - generic [ref=e149]: Science Fiction
                      - cell "Frank Herbert" [ref=e150]
                      - cell "ISBN-9780441013593" [ref=e151]
                      - cell "1965-08-01" [ref=e152]
                      - cell "Edit Dune Delete Dune" [ref=e153]:
                        - button "Edit Dune" [ref=e154] [cursor=pointer]: Edit
                        - button "Delete Dune" [ref=e155] [cursor=pointer]: Delete
                - generic "Table pagination" [ref=e156]:
                  - button "Previous page" [disabled] [ref=e157]: ‹
                  - button "Page 1" [ref=e158] [cursor=pointer]: "1"
                  - button "Page 2" [ref=e159] [cursor=pointer]: "2"
                  - button "Page 3" [ref=e160] [cursor=pointer]: "3"
                  - button "Page 4" [ref=e161] [cursor=pointer]: "4"
                  - button "Page 5" [ref=e162] [cursor=pointer]: "5"
                  - button "Next page" [ref=e163] [cursor=pointer]: ›
                  - generic [ref=e164]: 25 books — page 1 of 5
                - button "💡 Show Hint" [ref=e166] [cursor=pointer]:
                  - generic [ref=e167]: 💡
                  - text: Show Hint
            - complementary [ref=e168]:
              - generic [ref=e169]:
                - generic [ref=e170]:
                  - generic [ref=e171]: What You'll Learn
                  - img [ref=e172]
                - generic [ref=e175]:
                  - generic [ref=e176]:
                    - button "Selenium" [ref=e177]
                    - button "Playwright" [ref=e178]
                    - button "Cypress" [ref=e179]
                  - generic [ref=e180]:
                    - generic [ref=e181]: Selenium (Java)
                    - list [ref=e182]:
                      - listitem [ref=e183]:
                        - code [ref=e185]: findElements(By.tagName("tr"))
                      - listitem [ref=e186]:
                        - code [ref=e188]: findElement(By.xpath(...))
                      - listitem [ref=e189]:
                        - code [ref=e191]: getText()
                      - listitem [ref=e192]:
                        - code [ref=e194]: getAttribute()
                      - listitem [ref=e195]:
                        - code [ref=e197]: getCssValue()
                  - generic [ref=e198]:
                    - img [ref=e199]
                    - text: Tutorial video coming soon
              - link "🔔 Alerts & Dialogs Handle confirm, alert, and prompt dialogs ›" [ref=e205] [cursor=pointer]:
                - /url: /practice/alerts-dialogs
                - generic [ref=e206]: 🔔
                - generic [ref=e207]:
                  - generic [ref=e208]: Alerts & Dialogs
                  - generic [ref=e209]: Handle confirm, alert, and prompt dialogs
                - generic [ref=e210]: ›
  - contentinfo [ref=e211]:
    - generic [ref=e212]:
      - generic [ref=e213]:
        - generic [ref=e214]:
          - link "QA Playground home" [ref=e215] [cursor=pointer]:
            - /url: /
            - img [ref=e216]
            - generic [ref=e217]: QA Playground
          - paragraph [ref=e218]: A purpose-built platform for QA engineers. Learn Selenium, Playwright and Cypress through practice on real UI elements, demo apps. Rehearse interviews with AI agents, and track every job application through to the offer.
          - list "Social links" [ref=e219]:
            - listitem [ref=e220]:
              - link "YouTube" [ref=e221] [cursor=pointer]:
                - /url: https://youtube.com
                - img [ref=e222]
            - listitem [ref=e224]:
              - link "GitHub" [ref=e225] [cursor=pointer]:
                - /url: https://github.com/kundalik-dev
                - img [ref=e226]
            - listitem [ref=e228]:
              - link "X / Twitter" [ref=e229] [cursor=pointer]:
                - /url: https://x.com
                - img [ref=e230]
            - listitem [ref=e232]:
              - link "Telegram" [ref=e233] [cursor=pointer]:
                - /url: https://t.me
                - img [ref=e234]
        - generic [ref=e236]:
          - generic [ref=e237]: Platform
          - list [ref=e238]:
            - listitem [ref=e239]:
              - link "Practice Elements" [ref=e240] [cursor=pointer]:
                - /url: /practice
            - listitem [ref=e241]:
              - link "AI Mock Interviews" [ref=e242] [cursor=pointer]:
                - /url: /interview-practice
            - listitem [ref=e243]:
              - link "Job Hub & CRM" [ref=e244] [cursor=pointer]:
                - /url: /job-crm
            - listitem [ref=e245]:
              - link "Bank Demo" [ref=e246] [cursor=pointer]:
                - /url: /demo/bank
            - listitem [ref=e247]:
              - link "Dashboard" [ref=e248] [cursor=pointer]:
                - /url: /dashboard
            - listitem [ref=e249]:
              - link "QA Tools" [ref=e250] [cursor=pointer]:
                - /url: /qa-tools
        - generic [ref=e251]:
          - generic [ref=e252]: Learn
          - list [ref=e253]:
            - listitem [ref=e254]:
              - link "Blog & Tutorials" [ref=e255] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e256]:
              - link "Resources" [ref=e257] [cursor=pointer]:
                - /url: /resources
            - listitem [ref=e258]:
              - link "Interview Questions" [ref=e259] [cursor=pointer]:
                - /url: /interview-questions
            - listitem [ref=e260]:
              - link "Automation Framework" [ref=e261] [cursor=pointer]:
                - /url: https://github.com/kundalik5545/QA_PlayGround_Automation_Framework
        - generic [ref=e262]:
          - generic [ref=e263]: Company
          - list [ref=e264]:
            - listitem [ref=e265]:
              - link "About Us" [ref=e266] [cursor=pointer]:
                - /url: /about-us
            - listitem [ref=e267]:
              - link "Contact" [ref=e268] [cursor=pointer]:
                - /url: /contact-us
            - listitem [ref=e269]:
              - link "Report an Issue" [ref=e270] [cursor=pointer]:
                - /url: https://github.com/kundalik-dev/qaplayground-support/issues
            - listitem [ref=e271]:
              - link "Privacy Policy" [ref=e272] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e273]:
              - link "Login" [ref=e274] [cursor=pointer]:
                - /url: /auth/sign-in
      - generic [ref=e275]:
        - generic [ref=e276]:
          - text: © 2026 QA Playground. Built by
          - link "Kundalik Jadhav" [ref=e277] [cursor=pointer]:
            - /url: https://github.com/kundalik-dev
          - text: "- Pune, India 🇮🇳"
        - generic [ref=e278]: All rights reserved.
  - alert [ref=e279]
  - button "Send feedback or report an issue" [ref=e280] [cursor=pointer]:
    - img [ref=e281]
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