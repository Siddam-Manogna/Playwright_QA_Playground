# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Fileupload.spec.js >> Fileupload practise
- Location: tests\Fileupload.spec.js:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.setInputFiles: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#file-upload')

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
          - generic [ref=e39]: File Upload
        - generic [ref=e40]:
          - heading "How to Handle File Upload in Selenium and Playwright" [level=1] [ref=e41]
          - paragraph [ref=e42]: Practice file upload automation — single file, multiple files, drag and drop, type restrictions, size validation, hidden inputs, and upload progress in Playwright, Selenium & Cypress.
          - generic [ref=e43]:
            - generic [ref=e44]:
              - generic [ref=e45]: "02"
              - text: Intermediate
            - generic [ref=e46]: 15 min
            - generic [ref=e47]: 8 scenarios
            - generic [ref=e48]: 14 test cases
      - generic [ref=e49]:
        - tablist "Practice page tabs" [ref=e50]:
          - generic [ref=e51]:
            - tab "Practice 8" [selected] [ref=e52]:
              - img [ref=e53]
              - generic [ref=e55]: Practice
              - generic [ref=e56]: "8"
            - tab "Test Cases 14" [ref=e57]:
              - img [ref=e58]
              - generic [ref=e61]: Test Cases
              - generic [ref=e62]: "14"
            - tab "Learn" [ref=e63]:
              - img [ref=e64]
              - generic [ref=e66]: Learn
        - tabpanel "Practice 8" [ref=e67]:
          - generic [ref=e69]:
            - region "Interactive Scenarios" [ref=e70]:
              - paragraph [ref=e71]: Interactive Scenarios
              - generic [ref=e72]:
                - generic [ref=e73]:
                  - generic [ref=e74]:
                    - generic [ref=e75]: S01
                    - generic [ref=e76]: "Scenario 1: Upload a Single File"
                  - generic [ref=e78]:
                    - button "Choose File" [ref=e80]
                    - generic [ref=e81]: No file selected
                    - button "💡 Show Hint" [ref=e82]
                - generic [ref=e83]:
                  - generic [ref=e84]:
                    - generic [ref=e85]: S02
                    - generic [ref=e86]: "Scenario 2: Upload Multiple Files"
                  - generic [ref=e88]:
                    - button "Choose File" [ref=e90]
                    - generic [ref=e91]: No files selected
                    - button "💡 Show Hint" [ref=e92]
                - generic [ref=e93]:
                  - generic [ref=e94]:
                    - generic [ref=e95]: S03
                    - generic [ref=e96]: "Scenario 3: Assert File Name After Selection (Medium)"
                  - generic [ref=e98]:
                    - generic [ref=e99]:
                      - button "Choose File" [ref=e100]
                      - generic [ref=e101]:
                        - generic [ref=e102]: 🗂️
                        - generic [ref=e103]: No file chosen
                      - paragraph [ref=e104]:
                        - text: Inner
                        - code [ref=e105]: <span>
                        - text: has no
                        - code [ref=e106]: data-testid
                        - text: . Target via
                        - code [ref=e107]: "[data-testid=\"fu-filename-display\"] span[role=\"status\"]"
                        - text: .
                    - generic [ref=e108]: Filename not asserted
                    - button "💡 Show Hint" [ref=e109]
                - generic [ref=e110]:
                  - generic [ref=e111]:
                    - generic [ref=e112]: S04
                    - generic [ref=e113]: "Scenario 4: Drag & Drop Upload Zone (Hard)"
                  - generic [ref=e115]:
                    - generic [ref=e116]:
                      - generic [ref=e117] [cursor=pointer]:
                        - button "Choose File" [ref=e118]
                        - generic [ref=e119]: 📂
                        - generic [ref=e120]: Drag & drop a file here
                        - generic [ref=e121]: or click to browse · hidden input inside zone
                      - paragraph [ref=e122]:
                        - text: "Automation tip: target"
                        - code [ref=e123]: "[data-testid=\"fu-drop-input\"]"
                        - text: inside the zone and use
                        - code [ref=e124]: setInputFiles()
                        - text: .
                    - generic [ref=e125]: No file dropped
                    - button "💡 Show Hint" [ref=e126]
                - generic [ref=e127]:
                  - generic [ref=e128]:
                    - generic [ref=e129]: S05
                    - generic [ref=e130]: "Scenario 5: File Type Restriction (Medium)"
                  - generic [ref=e132]:
                    - generic [ref=e133]:
                      - paragraph [ref=e134]:
                        - text: Input has
                        - code [ref=e135]: accept="image/*"
                        - text: . Upload a non-image file to trigger the error.
                      - button "Choose File" [ref=e136]
                    - generic [ref=e137]: Type not validated
                    - button "💡 Show Hint" [ref=e138]
                - generic [ref=e139]:
                  - generic [ref=e140]:
                    - generic [ref=e141]: S06
                    - generic [ref=e142]: "Scenario 6: File Size Validation (Hard)"
                  - generic [ref=e144]:
                    - generic [ref=e145]:
                      - paragraph [ref=e146]:
                        - text: "Max size:"
                        - strong [ref=e147]: 2 MB
                        - text: . Error paragraph has
                        - strong [ref=e148]: "no"
                        - code [ref=e149]: data-testid
                        - text: — locate via
                        - code [ref=e150]: .error-msg
                        - text: class inside the panel.
                      - button "Choose File" [ref=e151]
                    - generic [ref=e152]: Size not validated
                    - button "💡 Show Hint" [ref=e153]
                - generic [ref=e154]:
                  - generic [ref=e155]:
                    - generic [ref=e156]: S07
                    - generic [ref=e157]: "Scenario 7: Custom Button Triggers Hidden Input (Challenge)"
                    - generic [ref=e158]: CHALLENGE
                  - generic [ref=e160]:
                    - generic [ref=e161]:
                      - paragraph [ref=e162]:
                        - text: The styled button triggers a visually hidden
                        - code [ref=e163]: input[type="file"]
                        - text: . The input has
                        - strong [ref=e164]: "no"
                        - code [ref=e165]: data-testid
                        - text: ". Target via:"
                        - code [ref=e166]: "[data-testid=\"fu-hidden-zone\"] input[type=\"file\"]"
                        - text: .
                      - button "📎 Choose File" [ref=e167] [cursor=pointer]
                    - generic [ref=e168]: Hidden input not targeted
                    - button "💡 Show Hint" [ref=e169]
                - generic [ref=e170]:
                  - generic [ref=e171]:
                    - generic [ref=e172]: S08
                    - generic [ref=e173]: "Scenario 8: Upload Progress Bar (Challenge)"
                    - generic [ref=e174]: CHALLENGE
                  - generic [ref=e176]:
                    - generic [ref=e177]:
                      - button "Choose File" [ref=e178]
                      - button "▶ Upload" [disabled] [ref=e179]
                      - paragraph [ref=e180]:
                        - text: Progress bar has
                        - strong [ref=e181]: "no"
                        - code [ref=e182]: data-testid
                        - text: . Use
                        - code [ref=e183]: getByRole('progressbar')
                        - text: to locate it.
                    - generic [ref=e184]: Progress not tracked
                    - button "💡 Show Hint" [ref=e185]
            - complementary [ref=e186]:
              - generic [ref=e187]:
                - generic [ref=e188]:
                  - generic [ref=e189]: Your Progress
                  - generic [ref=e190]: 0 / 8
                - generic [ref=e191]:
                  - progressbar "Practice progress"
                - generic [ref=e192]:
                  - generic [ref=e193]:
                    - generic [ref=e194]: ✓
                    - generic [ref=e195]: "Scenario 1: Upload a Single File"
                  - generic [ref=e196]:
                    - generic [ref=e197]: ✓
                    - generic [ref=e198]: "Scenario 2: Upload Multiple Files"
                  - generic [ref=e199]:
                    - generic [ref=e200]: ✓
                    - generic [ref=e201]: "Scenario 3: Assert File Name After Selection (Medium)"
                  - generic [ref=e202]:
                    - generic [ref=e203]: ✓
                    - generic [ref=e204]: "Scenario 4: Drag & Drop Upload Zone (Hard)"
                  - generic [ref=e205]:
                    - generic [ref=e206]: ✓
                    - generic [ref=e207]: "Scenario 5: File Type Restriction (Medium)"
                  - generic [ref=e208]:
                    - generic [ref=e209]: ✓
                    - generic [ref=e210]: "Scenario 6: File Size Validation (Hard)"
                  - generic [ref=e211]:
                    - generic [ref=e212]: ✓
                    - generic [ref=e213]: "Scenario 7: Custom Button Triggers Hidden Input (Challenge)"
                  - generic [ref=e214]:
                    - generic [ref=e215]: ✓
                    - generic [ref=e216]: "Scenario 8: Upload Progress Bar (Challenge)"
              - generic [ref=e217]:
                - generic [ref=e218]:
                  - generic [ref=e219]: What You'll Learn
                  - img [ref=e220]
                - generic [ref=e223]:
                  - generic [ref=e224]:
                    - button "Selenium" [ref=e225]
                    - button "Playwright" [ref=e226]
                    - button "Cypress" [ref=e227]
                  - generic [ref=e228]:
                    - generic [ref=e229]: Selenium (Java)
                    - list [ref=e230]:
                      - listitem [ref=e231]:
                        - code [ref=e233]: element.sendKeys('/path/file')
                      - listitem [ref=e234]:
                        - code [ref=e236]: Robot class (drag & drop)
                      - listitem [ref=e237]:
                        - code [ref=e239]: JavascriptExecutor (hidden)
                      - listitem [ref=e240]:
                        - code [ref=e242]: getAttribute('value')
                      - listitem [ref=e243]:
                        - code [ref=e245]: visibilityOf(errorEl)
                  - generic [ref=e246]:
                    - img [ref=e247]
                    - text: Tutorial video coming soon
              - link "🔢 Multi-Select Select multiple options from native and custom dropdowns ›" [ref=e253] [cursor=pointer]:
                - /url: /practice/multi-select
                - generic [ref=e254]: 🔢
                - generic [ref=e255]:
                  - generic [ref=e256]: Multi-Select
                  - generic [ref=e257]: Select multiple options from native and custom dropdowns
                - generic [ref=e258]: ›
  - contentinfo [ref=e259]:
    - generic [ref=e260]:
      - generic [ref=e261]:
        - generic [ref=e262]:
          - link "QA Playground home" [ref=e263] [cursor=pointer]:
            - /url: /
            - img [ref=e264]
            - generic [ref=e265]: QA Playground
          - paragraph [ref=e266]: A purpose-built platform for QA engineers. Learn Selenium, Playwright and Cypress through practice on real UI elements, demo apps. Rehearse interviews with AI agents, and track every job application through to the offer.
          - list "Social links" [ref=e267]:
            - listitem [ref=e268]:
              - link "YouTube" [ref=e269] [cursor=pointer]:
                - /url: https://youtube.com
                - img [ref=e270]
            - listitem [ref=e272]:
              - link "GitHub" [ref=e273] [cursor=pointer]:
                - /url: https://github.com/kundalik-dev
                - img [ref=e274]
            - listitem [ref=e276]:
              - link "X / Twitter" [ref=e277] [cursor=pointer]:
                - /url: https://x.com
                - img [ref=e278]
            - listitem [ref=e280]:
              - link "Telegram" [ref=e281] [cursor=pointer]:
                - /url: https://t.me
                - img [ref=e282]
        - generic [ref=e284]:
          - generic [ref=e285]: Platform
          - list [ref=e286]:
            - listitem [ref=e287]:
              - link "Practice Elements" [ref=e288] [cursor=pointer]:
                - /url: /practice
            - listitem [ref=e289]:
              - link "AI Mock Interviews" [ref=e290] [cursor=pointer]:
                - /url: /interview-practice
            - listitem [ref=e291]:
              - link "Job Hub & CRM" [ref=e292] [cursor=pointer]:
                - /url: /job-crm
            - listitem [ref=e293]:
              - link "Bank Demo" [ref=e294] [cursor=pointer]:
                - /url: /demo/bank
            - listitem [ref=e295]:
              - link "Dashboard" [ref=e296] [cursor=pointer]:
                - /url: /dashboard
            - listitem [ref=e297]:
              - link "QA Tools" [ref=e298] [cursor=pointer]:
                - /url: /qa-tools
        - generic [ref=e299]:
          - generic [ref=e300]: Learn
          - list [ref=e301]:
            - listitem [ref=e302]:
              - link "Blog & Tutorials" [ref=e303] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e304]:
              - link "Resources" [ref=e305] [cursor=pointer]:
                - /url: /resources
            - listitem [ref=e306]:
              - link "Interview Questions" [ref=e307] [cursor=pointer]:
                - /url: /interview-questions
            - listitem [ref=e308]:
              - link "Automation Framework" [ref=e309] [cursor=pointer]:
                - /url: https://github.com/kundalik5545/QA_PlayGround_Automation_Framework
        - generic [ref=e310]:
          - generic [ref=e311]: Company
          - list [ref=e312]:
            - listitem [ref=e313]:
              - link "About Us" [ref=e314] [cursor=pointer]:
                - /url: /about-us
            - listitem [ref=e315]:
              - link "Contact" [ref=e316] [cursor=pointer]:
                - /url: /contact-us
            - listitem [ref=e317]:
              - link "Report an Issue" [ref=e318] [cursor=pointer]:
                - /url: https://github.com/kundalik-dev/qaplayground-support/issues
            - listitem [ref=e319]:
              - link "Privacy Policy" [ref=e320] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e321]:
              - link "Login" [ref=e322] [cursor=pointer]:
                - /url: /auth/sign-in
      - generic [ref=e323]:
        - generic [ref=e324]:
          - text: © 2026 QA Playground. Built by
          - link "Kundalik Jadhav" [ref=e325] [cursor=pointer]:
            - /url: https://github.com/kundalik-dev
          - text: "- Pune, India 🇮🇳"
        - generic [ref=e326]: All rights reserved.
  - alert [ref=e327]
  - button "Send feedback or report an issue" [ref=e328] [cursor=pointer]:
    - img [ref=e329]
```

# Test source

```ts
  1  | import {expect} from '@playwright/test'
  2  | 
  3  | export class fileupload{
  4  |     constructor(page){
  5  |         this.page=page
  6  |         this.fileInput=page.locator("#file-upload")
  7  |     }
  8  | 
  9  |     async navigate(){
  10 |        await this.page.goto("https://qaplayground.com/practice/file-upload") 
  11 |     }
  12 |     async fileuploadfield(){
> 13 |         await this.fileInput.setInputFiles("TestData/sample.txt")
     |         ^ Error: locator.setInputFiles: Test timeout of 30000ms exceeded.
  14 |          await expect(this.fileInput).toHaveValue(/sample.txt/);
  15 |     }
  16 | }
```