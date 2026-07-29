# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Newtab.spec.js >> Newtab practise
- Location: tests\Newtab.spec.js:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#btn-open-home-tab')

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
          - generic [ref=e39]: Tabs & Windows
        - generic [ref=e40]:
          - heading "How to Handle Tabs and Windows in Selenium and Playwright" [level=1] [ref=e41]
          - paragraph [ref=e42]: Practice browser tab and window automation — open new tabs, switch between windows, close tabs, handle popups, and assert URL and title in Playwright, Selenium & Cypress.
          - generic [ref=e43]:
            - generic [ref=e44]:
              - generic [ref=e45]: "02"
              - text: Intermediate
            - generic [ref=e46]: 14 min
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
                    - generic [ref=e76]: "Scenario 1: Open Link in New Tab"
                  - generic [ref=e78]:
                    - generic [ref=e79]:
                      - link "🔗 Open in New Tab" [ref=e80] [cursor=pointer]:
                        - /url: /practice/tabs-windows
                      - generic [ref=e81]:
                        - text: target=
                        - code [ref=e82]: "\"_blank\""
                    - generic [ref=e83]: No tab opened
                    - button "💡 Show Hint" [ref=e84]
                - generic [ref=e85]:
                  - generic [ref=e86]:
                    - generic [ref=e87]: S02
                    - generic [ref=e88]: "Scenario 2: Open Multiple Tabs"
                  - generic [ref=e90]:
                    - generic [ref=e91]:
                      - button "↗ Open Tab A" [ref=e92]
                      - button "↗ Open Tab B" [ref=e93]
                      - button "↗ Open Tab C" [ref=e94]
                    - generic [ref=e95]: No tabs opened
                    - button "💡 Show Hint" [ref=e96]
                - generic [ref=e97]:
                  - generic [ref=e98]:
                    - generic [ref=e99]: S03
                    - generic [ref=e100]: "Scenario 3: Switch Back to Original Tab"
                  - generic [ref=e102]:
                    - generic [ref=e103]:
                      - link "↗ Open New Tab" [ref=e104] [cursor=pointer]:
                        - /url: /practice/tabs-windows
                      - button "← Mark as Returned" [ref=e105] [cursor=pointer]
                    - generic [ref=e106]: Not switched
                    - button "💡 Show Hint" [ref=e107]
                - generic [ref=e108]:
                  - generic [ref=e109]:
                    - generic [ref=e110]: S04
                    - generic [ref=e111]: "Scenario 4: Assert New Tab URL and Title"
                  - generic [ref=e113]:
                    - generic [ref=e114]:
                      - link "↗ Open & Assert URL + Title" [ref=e115] [cursor=pointer]:
                        - /url: /
                      - paragraph [ref=e116]:
                        - text: "Hint attributes:"
                        - code [ref=e117]: data-expected-url-contains
                        - text: ","
                        - code [ref=e118]: data-expected-title-contains
                    - generic [ref=e119]: URL not asserted
                    - button "💡 Show Hint" [ref=e120]
                - generic [ref=e121]:
                  - generic [ref=e122]:
                    - generic [ref=e123]: S05
                    - generic [ref=e124]: "Scenario 5: Close a Tab"
                  - generic [ref=e126]:
                    - generic [ref=e127]:
                      - link "↗ Open Tab" [ref=e128] [cursor=pointer]:
                        - /url: /practice/tabs-windows
                      - button "✕ Mark as Closed" [ref=e129] [cursor=pointer]
                    - generic [ref=e130]: Tab not closed
                    - button "💡 Show Hint" [ref=e131]
                - generic [ref=e132]:
                  - generic [ref=e133]:
                    - generic [ref=e134]: S06
                    - generic [ref=e135]: "Scenario 6: Window Popup (window.open)"
                  - generic [ref=e137]:
                    - generic [ref=e138]:
                      - button "🪟 Open Popup Window" [ref=e139]
                      - paragraph [ref=e140]:
                        - text: Uses
                        - code [ref=e141]: window.open()
                        - text: with explicit size — Playwright captures via
                        - code [ref=e142]: page.waitForEvent('popup')
                    - generic [ref=e143]: Popup not handled
                    - button "💡 Show Hint" [ref=e144]
                - generic [ref=e145]:
                  - generic [ref=e146]:
                    - generic [ref=e147]: S07
                    - generic [ref=e148]: "Scenario 7: Sibling Tab Buttons (Medium)"
                  - generic [ref=e150]:
                    - generic [ref=e151]:
                      - paragraph [ref=e152]: Tab Launcher Panel
                      - button "Open Tab A" [ref=e153]: ↗ Open Tab A
                      - button "Open Tab B" [ref=e154]: ↗ Open Tab B
                      - button "Open Tab C" [ref=e155]: ↗ Open Tab C
                    - generic [ref=e156]: Sibling not located
                    - button "💡 Show Hint" [ref=e157]
                - generic [ref=e158]:
                  - generic [ref=e159]:
                    - generic [ref=e160]: S08
                    - generic [ref=e161]: "Scenario 8: Dynamic Tab Registry (Challenge)"
                    - generic [ref=e162]: CHALLENGE
                  - generic [ref=e164]:
                    - generic [ref=e165]:
                      - paragraph [ref=e166]:
                        - text: "No"
                        - code [ref=e167]: data-testid
                        - text: on rows or buttons. Use XPath by cell text or
                        - code [ref=e168]: data-tab-id
                        - text: .
                      - table "Open tab registry" [ref=e169]:
                        - rowgroup [ref=e170]:
                          - row "Tab Name URL Status Action" [ref=e171]:
                            - columnheader "Tab Name" [ref=e172]
                            - columnheader "URL" [ref=e173]
                            - columnheader "Status" [ref=e174]
                            - columnheader "Action" [ref=e175]
                        - rowgroup [ref=e176]:
                          - row "Tab A / Open Focus Tab A" [ref=e177]:
                            - cell "Tab A" [ref=e178]
                            - cell / [ref=e179]:
                              - code [ref=e180]: /
                            - cell "Open" [ref=e181]:
                              - generic [ref=e182]: Open
                            - cell "Focus Tab A" [ref=e183]:
                              - button "Focus Tab A" [ref=e184]: Focus
                          - row "Tab B /practice Open Focus Tab B" [ref=e185]:
                            - cell "Tab B" [ref=e186]
                            - cell "/practice" [ref=e187]:
                              - code [ref=e188]: /practice
                            - cell "Open" [ref=e189]:
                              - generic [ref=e190]: Open
                            - cell "Focus Tab B" [ref=e191]:
                              - button "Focus Tab B" [ref=e192]: Focus
                          - row "Tab C /practice/links Open Focus Tab C" [ref=e193]:
                            - cell "Tab C" [ref=e194]
                            - cell "/practice/links" [ref=e195]:
                              - code [ref=e196]: /practice/links
                            - cell "Open" [ref=e197]:
                              - generic [ref=e198]: Open
                            - cell "Focus Tab C" [ref=e199]:
                              - button "Focus Tab C" [ref=e200]: Focus
                    - generic [ref=e201]: Registry not asserted
                    - button "💡 Show Hint" [ref=e202]
            - complementary [ref=e203]:
              - generic [ref=e204]:
                - generic [ref=e205]:
                  - generic [ref=e206]: Your Progress
                  - generic [ref=e207]: 0 / 8
                - generic [ref=e208]:
                  - progressbar "Practice progress"
                - generic [ref=e209]:
                  - generic [ref=e210]:
                    - generic [ref=e211]: ✓
                    - generic [ref=e212]: "Scenario 1: Open Link in New Tab"
                  - generic [ref=e213]:
                    - generic [ref=e214]: ✓
                    - generic [ref=e215]: "Scenario 2: Open Multiple Tabs"
                  - generic [ref=e216]:
                    - generic [ref=e217]: ✓
                    - generic [ref=e218]: "Scenario 3: Switch Back to Original Tab"
                  - generic [ref=e219]:
                    - generic [ref=e220]: ✓
                    - generic [ref=e221]: "Scenario 4: Assert New Tab URL and Title"
                  - generic [ref=e222]:
                    - generic [ref=e223]: ✓
                    - generic [ref=e224]: "Scenario 5: Close a Tab"
                  - generic [ref=e225]:
                    - generic [ref=e226]: ✓
                    - generic [ref=e227]: "Scenario 6: Window Popup (window.open)"
                  - generic [ref=e228]:
                    - generic [ref=e229]: ✓
                    - generic [ref=e230]: "Scenario 7: Sibling Tab Buttons (Medium)"
                  - generic [ref=e231]:
                    - generic [ref=e232]: ✓
                    - generic [ref=e233]: "Scenario 8: Dynamic Tab Registry (Challenge)"
              - generic [ref=e234]:
                - generic [ref=e235]:
                  - generic [ref=e236]: What You'll Learn
                  - img [ref=e237]
                - generic [ref=e240]:
                  - generic [ref=e241]:
                    - button "Selenium" [ref=e242]
                    - button "Playwright" [ref=e243]
                    - button "Cypress" [ref=e244]
                  - generic [ref=e245]:
                    - generic [ref=e246]: Selenium (Java)
                    - list [ref=e247]:
                      - listitem [ref=e248]:
                        - code [ref=e250]: getWindowHandles()
                      - listitem [ref=e251]:
                        - code [ref=e253]: switchTo().window()
                      - listitem [ref=e254]:
                        - code [ref=e256]: getTitle()
                      - listitem [ref=e257]:
                        - code [ref=e259]: getCurrentUrl()
                      - listitem [ref=e260]:
                        - code [ref=e262]: close()
                  - generic [ref=e263]:
                    - img [ref=e264]
                    - text: Tutorial video coming soon
              - link "📋 Alerts & Dialogs Handle browser alerts, confirms, and prompts ›" [ref=e270] [cursor=pointer]:
                - /url: /practice/alerts-dialogs
                - generic [ref=e271]: 📋
                - generic [ref=e272]:
                  - generic [ref=e273]: Alerts & Dialogs
                  - generic [ref=e274]: Handle browser alerts, confirms, and prompts
                - generic [ref=e275]: ›
  - contentinfo [ref=e276]:
    - generic [ref=e277]:
      - generic [ref=e278]:
        - generic [ref=e279]:
          - link "QA Playground home" [ref=e280] [cursor=pointer]:
            - /url: /
            - img [ref=e281]
            - generic [ref=e282]: QA Playground
          - paragraph [ref=e283]: A purpose-built platform for QA engineers. Learn Selenium, Playwright and Cypress through practice on real UI elements, demo apps. Rehearse interviews with AI agents, and track every job application through to the offer.
          - list "Social links" [ref=e284]:
            - listitem [ref=e285]:
              - link "YouTube" [ref=e286] [cursor=pointer]:
                - /url: https://youtube.com
                - img [ref=e287]
            - listitem [ref=e289]:
              - link "GitHub" [ref=e290] [cursor=pointer]:
                - /url: https://github.com/kundalik-dev
                - img [ref=e291]
            - listitem [ref=e293]:
              - link "X / Twitter" [ref=e294] [cursor=pointer]:
                - /url: https://x.com
                - img [ref=e295]
            - listitem [ref=e297]:
              - link "Telegram" [ref=e298] [cursor=pointer]:
                - /url: https://t.me
                - img [ref=e299]
        - generic [ref=e301]:
          - generic [ref=e302]: Platform
          - list [ref=e303]:
            - listitem [ref=e304]:
              - link "Practice Elements" [ref=e305] [cursor=pointer]:
                - /url: /practice
            - listitem [ref=e306]:
              - link "AI Mock Interviews" [ref=e307] [cursor=pointer]:
                - /url: /interview-practice
            - listitem [ref=e308]:
              - link "Job Hub & CRM" [ref=e309] [cursor=pointer]:
                - /url: /job-crm
            - listitem [ref=e310]:
              - link "Bank Demo" [ref=e311] [cursor=pointer]:
                - /url: /demo/bank
            - listitem [ref=e312]:
              - link "Dashboard" [ref=e313] [cursor=pointer]:
                - /url: /dashboard
            - listitem [ref=e314]:
              - link "QA Tools" [ref=e315] [cursor=pointer]:
                - /url: /qa-tools
        - generic [ref=e316]:
          - generic [ref=e317]: Learn
          - list [ref=e318]:
            - listitem [ref=e319]:
              - link "Blog & Tutorials" [ref=e320] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e321]:
              - link "Resources" [ref=e322] [cursor=pointer]:
                - /url: /resources
            - listitem [ref=e323]:
              - link "Interview Questions" [ref=e324] [cursor=pointer]:
                - /url: /interview-questions
            - listitem [ref=e325]:
              - link "Automation Framework" [ref=e326] [cursor=pointer]:
                - /url: https://github.com/kundalik5545/QA_PlayGround_Automation_Framework
        - generic [ref=e327]:
          - generic [ref=e328]: Company
          - list [ref=e329]:
            - listitem [ref=e330]:
              - link "About Us" [ref=e331] [cursor=pointer]:
                - /url: /about-us
            - listitem [ref=e332]:
              - link "Contact" [ref=e333] [cursor=pointer]:
                - /url: /contact-us
            - listitem [ref=e334]:
              - link "Report an Issue" [ref=e335] [cursor=pointer]:
                - /url: https://github.com/kundalik-dev/qaplayground-support/issues
            - listitem [ref=e336]:
              - link "Privacy Policy" [ref=e337] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e338]:
              - link "Login" [ref=e339] [cursor=pointer]:
                - /url: /auth/sign-in
      - generic [ref=e340]:
        - generic [ref=e341]:
          - text: © 2026 QA Playground. Built by
          - link "Kundalik Jadhav" [ref=e342] [cursor=pointer]:
            - /url: https://github.com/kundalik-dev
          - text: "- Pune, India 🇮🇳"
        - generic [ref=e343]: All rights reserved.
  - alert [ref=e344]
  - button "Send feedback or report an issue" [ref=e345] [cursor=pointer]:
    - img [ref=e346]
```

# Test source

```ts
  1  | import {expect} from '@playwright/test'
  2  | 
  3  | export class Newtab{
  4  |     constructor(page){
  5  |         this.page=page
  6  |         this.context = page.context()
  7  |         this.openhomepage=page.locator('#btn-open-home-tab')
  8  |     }
  9  | 
  10 |     async navigate(){
  11 |        await this.page.goto("https://qaplayground.com/practice/tabs-windows") 
  12 |     }
  13 | 
  14 |     async opennewhometab(){
  15 |         const [newtab]=await Promise.all([
  16 |             this.context.waitForEvent('page'),
> 17 |             this.openhomepage.click()
     |                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  18 |         ])
  19 |         await newtab.waitForLoadState()
  20 |         await expect(newtab.getByText("Master Automation Testing With")).toBeVisible()
  21 | 
  22 |     }
  23 | }
```