# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Forms.spec.js >> Form Fill
- Location: tests\Forms.spec.js:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://qaplayground.com/practice/forms", waiting until "load"

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
          - generic [ref=e39]: Forms
        - generic [ref=e40]:
          - heading "Form Automation Practice" [level=1] [ref=e41]
          - paragraph [ref=e42]: Practice end-to-end form automation — filling inputs, selecting dropdowns, toggling checkboxes, triggering validation errors, and asserting success states.
          - generic [ref=e43]:
            - generic [ref=e44]:
              - generic [ref=e45]: "02"
              - text: Intermediate
            - generic [ref=e46]: 20 min
            - generic [ref=e47]: 5 scenarios
            - generic [ref=e48]: 15 test cases
      - generic [ref=e49]:
        - tablist "Practice page tabs" [ref=e50]:
          - generic [ref=e51]:
            - tab "Practice 5" [selected] [ref=e52]:
              - img [ref=e53]
              - generic [ref=e55]: Practice
              - generic [ref=e56]: "5"
            - tab "Test Cases 15" [ref=e57]:
              - img [ref=e58]
              - generic [ref=e61]: Test Cases
              - generic [ref=e62]: "15"
            - tab "Learn" [ref=e63]:
              - img [ref=e64]
              - generic [ref=e66]: Learn
        - tabpanel "Practice 5" [ref=e67]:
          - generic [ref=e69]:
            - region "Form Practice Scenarios" [ref=e70]:
              - paragraph [ref=e71]: Interactive Forms
              - generic [ref=e72]:
                - generic [ref=e73]:
                  - generic [ref=e74]:
                    - generic [ref=e75]: F01
                    - generic [ref=e76]: Login Form
                    - generic [ref=e77]: Beginner
                  - generic [ref=e79]:
                    - generic [ref=e80]:
                      - generic [ref=e81]:
                        - text: Email
                        - generic [ref=e82]: "*"
                      - textbox "Email" [ref=e83]:
                        - /placeholder: you@example.com
                    - generic [ref=e84]:
                      - generic [ref=e85]:
                        - text: Password
                        - generic [ref=e86]: "*"
                      - textbox "Password" [ref=e87]:
                        - /placeholder: Enter password
                    - generic [ref=e88]:
                      - button "Login" [ref=e89] [cursor=pointer]
                      - button "Reset" [ref=e90] [cursor=pointer]
                  - button "💡 Show Hint" [ref=e92] [cursor=pointer]
                - generic [ref=e93]:
                  - generic [ref=e94]:
                    - generic [ref=e95]: F02
                    - generic [ref=e96]: Personal Details Form
                    - generic [ref=e97]: Beginner
                  - generic [ref=e99]:
                    - generic [ref=e100]:
                      - generic [ref=e101]:
                        - generic [ref=e102]:
                          - text: First Name
                          - generic [ref=e103]: "*"
                        - textbox "First Name *" [ref=e104]:
                          - /placeholder: First name
                      - generic [ref=e105]:
                        - generic [ref=e106]:
                          - text: Last Name
                          - generic [ref=e107]: "*"
                        - textbox "Last Name *" [ref=e108]:
                          - /placeholder: Last name
                      - generic [ref=e109]:
                        - generic [ref=e110]:
                          - text: Phone
                          - generic [ref=e111]: "*"
                        - textbox "Phone *" [ref=e112]:
                          - /placeholder: 10-digit number
                      - generic [ref=e113]:
                        - generic [ref=e114]:
                          - text: Date of Birth
                          - generic [ref=e115]: "*"
                        - textbox "Date of Birth *" [ref=e116]
                    - generic [ref=e117]:
                      - generic [ref=e118]:
                        - text: Gender
                        - generic [ref=e119]: "*"
                      - radiogroup "Gender *" [ref=e120]:
                        - generic [ref=e121] [cursor=pointer]:
                          - radio "Male" [ref=e122]
                          - text: Male
                        - generic [ref=e123] [cursor=pointer]:
                          - radio "Female" [ref=e124]
                          - text: Female
                        - generic [ref=e125] [cursor=pointer]:
                          - radio "Other" [ref=e126]
                          - text: Other
                    - generic [ref=e127]:
                      - button "Save Details" [ref=e128] [cursor=pointer]
                      - button "Reset" [ref=e129] [cursor=pointer]
                  - button "💡 Show Hint" [ref=e131] [cursor=pointer]
                - generic [ref=e132]:
                  - generic [ref=e133]:
                    - generic [ref=e134]: F03
                    - generic [ref=e135]: Address Form
                    - generic [ref=e136]: Hard
                  - generic [ref=e138]:
                    - generic [ref=e139]:
                      - generic [ref=e140]:
                        - text: Country
                        - generic [ref=e141]: "*"
                      - combobox "Country *" [ref=e142] [cursor=pointer]:
                        - option "Select country" [selected]
                        - option "India"
                        - option "United States"
                        - option "United Kingdom"
                        - option "Australia"
                        - option "Canada"
                        - option "Germany"
                        - option "Japan"
                        - option "Singapore"
                    - generic [ref=e143]:
                      - generic [ref=e144]:
                        - text: City
                        - generic [ref=e145]: "*"
                      - textbox "City *" [ref=e146]:
                        - /placeholder: Enter city
                    - generic [ref=e147]:
                      - generic [ref=e148]:
                        - text: About You
                        - generic [ref=e149]: optional · no testid
                      - textbox "About You optional · no testid" [ref=e150]:
                        - /placeholder: Tell us a little about yourself…
                    - generic [ref=e151]:
                      - button "Save Address" [ref=e152] [cursor=pointer]
                      - button "Reset" [ref=e153] [cursor=pointer]
                  - button "💡 Show Hint" [ref=e155] [cursor=pointer]
                - generic [ref=e156]:
                  - generic [ref=e157]:
                    - generic [ref=e158]: F04
                    - generic [ref=e159]: Interests Form
                    - generic [ref=e160]: Medium
                  - generic [ref=e162]:
                    - generic [ref=e163]:
                      - generic [ref=e164]:
                        - text: Select Interests
                        - generic [ref=e165]: "*"
                      - generic [ref=e166]:
                        - generic [ref=e167] [cursor=pointer]:
                          - checkbox "Selenium" [ref=e168]
                          - text: Selenium
                        - generic [ref=e169] [cursor=pointer]:
                          - checkbox "Playwright" [ref=e170]
                          - text: Playwright
                        - generic [ref=e171] [cursor=pointer]:
                          - checkbox "Cypress" [ref=e172]
                          - text: Cypress
                        - generic [ref=e173] [cursor=pointer]:
                          - checkbox "Appium" [ref=e174]
                          - text: Appium
                        - generic [ref=e175] [cursor=pointer]:
                          - checkbox "Jest" [ref=e176]
                          - text: Jest
                    - generic [ref=e177]:
                      - button "Save Interests" [ref=e178] [cursor=pointer]
                      - button "Reset" [ref=e179] [cursor=pointer]
                  - button "💡 Show Hint" [ref=e181] [cursor=pointer]
                - generic [ref=e182]:
                  - generic [ref=e183]:
                    - generic [ref=e184]: F05
                    - generic [ref=e185]: Account Setup Form
                    - generic [ref=e186]: Challenge
                  - generic [ref=e188]:
                    - generic [ref=e189]:
                      - generic [ref=e190]:
                        - text: Password
                        - generic [ref=e191]: "*"
                      - textbox "Password *" [ref=e192]:
                        - /placeholder: Min. 6 characters
                    - generic [ref=e193]:
                      - generic [ref=e194]:
                        - text: Confirm Password
                        - generic [ref=e195]: "*"
                      - textbox "Confirm Password *" [ref=e196]:
                        - /placeholder: Re-enter password
                    - generic [ref=e198] [cursor=pointer]:
                      - checkbox "I agree to the Terms & Conditions" [ref=e199]
                      - text: I agree to the Terms & Conditions
                    - generic [ref=e200]:
                      - button "Submit" [ref=e201] [cursor=pointer]
                      - button "Reset" [ref=e202] [cursor=pointer]
                  - button "💡 Show Hint" [ref=e204] [cursor=pointer]
            - complementary [ref=e205]:
              - generic [ref=e206]:
                - generic [ref=e207]:
                  - generic [ref=e208]: What You'll Learn
                  - img [ref=e209]
                - generic [ref=e212]:
                  - generic [ref=e213]:
                    - button "Selenium" [ref=e214]
                    - button "Playwright" [ref=e215]
                    - button "Cypress" [ref=e216]
                  - generic [ref=e217]:
                    - generic [ref=e218]: Selenium (Java)
                    - list [ref=e219]:
                      - listitem [ref=e220]:
                        - code [ref=e222]: sendKeys()
                      - listitem [ref=e223]:
                        - code [ref=e225]: click()
                      - listitem [ref=e226]:
                        - code [ref=e228]: selectByVisibleText()
                      - listitem [ref=e229]:
                        - code [ref=e231]: submit()
                      - listitem [ref=e232]:
                        - code [ref=e234]: isDisplayed()
                  - generic [ref=e235]:
                    - img [ref=e236]
                    - text: Tutorial video coming soon
              - link "⬇️ Dropdowns Handle single and multi-option dropdown selections ›" [ref=e242] [cursor=pointer]:
                - /url: /practice/dropdowns
                - generic [ref=e243]: ⬇️
                - generic [ref=e244]:
                  - generic [ref=e245]: Dropdowns
                  - generic [ref=e246]: Handle single and multi-option dropdown selections
                - generic [ref=e247]: ›
  - contentinfo [ref=e248]:
    - generic [ref=e249]:
      - generic [ref=e250]:
        - generic [ref=e251]:
          - link "QA Playground home" [ref=e252] [cursor=pointer]:
            - /url: /
            - img [ref=e253]
            - generic [ref=e254]: QA Playground
          - paragraph [ref=e255]: A purpose-built platform for QA engineers. Learn Selenium, Playwright and Cypress through practice on real UI elements, demo apps. Rehearse interviews with AI agents, and track every job application through to the offer.
          - list "Social links" [ref=e256]:
            - listitem [ref=e257]:
              - link "YouTube" [ref=e258] [cursor=pointer]:
                - /url: https://youtube.com
                - img [ref=e259]
            - listitem [ref=e261]:
              - link "GitHub" [ref=e262] [cursor=pointer]:
                - /url: https://github.com/kundalik-dev
                - img [ref=e263]
            - listitem [ref=e265]:
              - link "X / Twitter" [ref=e266] [cursor=pointer]:
                - /url: https://x.com
                - img [ref=e267]
            - listitem [ref=e269]:
              - link "Telegram" [ref=e270] [cursor=pointer]:
                - /url: https://t.me
                - img [ref=e271]
        - generic [ref=e273]:
          - generic [ref=e274]: Platform
          - list [ref=e275]:
            - listitem [ref=e276]:
              - link "Practice Elements" [ref=e277] [cursor=pointer]:
                - /url: /practice
            - listitem [ref=e278]:
              - link "AI Mock Interviews" [ref=e279] [cursor=pointer]:
                - /url: /interview-practice
            - listitem [ref=e280]:
              - link "Job Hub & CRM" [ref=e281] [cursor=pointer]:
                - /url: /job-crm
            - listitem [ref=e282]:
              - link "Bank Demo" [ref=e283] [cursor=pointer]:
                - /url: /demo/bank
            - listitem [ref=e284]:
              - link "Dashboard" [ref=e285] [cursor=pointer]:
                - /url: /dashboard
            - listitem [ref=e286]:
              - link "QA Tools" [ref=e287] [cursor=pointer]:
                - /url: /qa-tools
        - generic [ref=e288]:
          - generic [ref=e289]: Learn
          - list [ref=e290]:
            - listitem [ref=e291]:
              - link "Blog & Tutorials" [ref=e292] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e293]:
              - link "Resources" [ref=e294] [cursor=pointer]:
                - /url: /resources
            - listitem [ref=e295]:
              - link "Interview Questions" [ref=e296] [cursor=pointer]:
                - /url: /interview-questions
            - listitem [ref=e297]:
              - link "Automation Framework" [ref=e298] [cursor=pointer]:
                - /url: https://github.com/kundalik5545/QA_PlayGround_Automation_Framework
        - generic [ref=e299]:
          - generic [ref=e300]: Company
          - list [ref=e301]:
            - listitem [ref=e302]:
              - link "About Us" [ref=e303] [cursor=pointer]:
                - /url: /about-us
            - listitem [ref=e304]:
              - link "Contact" [ref=e305] [cursor=pointer]:
                - /url: /contact-us
            - listitem [ref=e306]:
              - link "Report an Issue" [ref=e307] [cursor=pointer]:
                - /url: https://github.com/kundalik-dev/qaplayground-support/issues
            - listitem [ref=e308]:
              - link "Privacy Policy" [ref=e309] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e310]:
              - link "Login" [ref=e311] [cursor=pointer]:
                - /url: /auth/sign-in
      - generic [ref=e312]:
        - generic [ref=e313]:
          - text: © 2026 QA Playground. Built by
          - link "Kundalik Jadhav" [ref=e314] [cursor=pointer]:
            - /url: https://github.com/kundalik-dev
          - text: "- Pune, India 🇮🇳"
        - generic [ref=e315]: All rights reserved.
  - alert [ref=e316]
  - button "Send feedback or report an issue" [ref=e317] [cursor=pointer]:
    - img [ref=e318]
```

# Test source

```ts
  1   | import {expect} from '@playwright/test'
  2   | 
  3   | export class Forms{
  4   |     constructor(page){
  5   |         this.page=page
  6   |         this.firstname=page.locator('#firstName')
  7   |         this.lastname=page.locator('[name="lastName"]')
  8   |         this.email=page.locator('[type="email"]')
  9   |         this.phone=page.locator('#phone')
  10  |         this.dob=page.getByTestId("input-dob")
  11  |         this.gender = page.locator('input[name="gender"]')
  12  |         this.country=page.locator('#country')
  13  |         this.city=page.locator('#city')
  14  |         this.interests=page.getByTestId("interests-group")
  15  |         this.password=page.locator("#password")
  16  |         this.cnfrmpassword=page.locator("#confirmPassword")
  17  |         this.confirmcheckbox=page.getByTestId("checkbox-terms")
  18  |         this.submit=page.locator("#submitFormBtn")
  19  |         this.submittedName=page.locator("#submittedName")
  20  |         this.resetbtn=page.locator("#resetFormBtn")
  21  |         this.fillagain=page.getByTestId("reset-form-btn")
  22  |         
  23  | 
  24  | 
  25  |     }
  26  |     async Navigation(){
> 27  |         await this.page.goto("https://qaplayground.com/practice/forms")
      |                         ^ Error: page.goto: Test timeout of 30000ms exceeded.
  28  |     }
  29  | 
  30  |     async validFormfill(data){
  31  |         await this.firstname.fill(data.firstname)
  32  |         await this.lastname.fill(data.lastname)
  33  |         await this.email.fill(data.email)
  34  |         await this.phone.fill(data.phone)
  35  |         await this.dob.fill(data.dob)
  36  |         await this.page.getByTestId(`radio-gender-${data.gender}`).check();
  37  |         await this.country.click()
  38  |         await this.page.waitForSelector('[role="option"]', { state: 'visible' })
  39  |         await this.page.getByRole('option', { name: data.country }).click() 
  40  |         await this.city.fill(data.city)
  41  |         await this.interests.getByTestId(`checkbox-interest-${data.interests}`).click();
  42  |         await this.password.fill(data.password)
  43  |         await this.cnfrmpassword.fill(data.cnfrmpassword)
  44  |         await this.confirmcheckbox.check()
  45  |         await this.submit.click()
  46  |         await expect(this.page.getByText("Form Submitted Successfully!")).toBeVisible()
  47  |         await expect(this.submittedName).toHaveText(data.firstname+" "+data.lastname)
  48  | 
  49  | 
  50  |     }
  51  | 
  52  |     async requiredFieldErrorValidation(){
  53  |         await this.submit.click()
  54  |         await expect(this.page.locator('#firstNameError')).toBeVisible()
  55  |         await expect(this.page.locator('#lastNameError')).toBeVisible()
  56  |         await expect(this.page.locator('#emailError')).toBeVisible()
  57  |         await expect(this.page.locator('#phoneError')).toBeVisible()
  58  |         await expect(this.page.locator('#dobError')).toBeVisible()
  59  |         await expect(this.page.locator('#genderError')).toBeVisible()
  60  |         await expect(this.page.locator('#countryError')).toBeVisible()
  61  |         await expect(this.page.locator('#cityError')).toBeVisible()
  62  |         await expect(this.page.locator('#passwordError')).toBeVisible()
  63  |         await expect(this.page.locator('#confirmPasswordError')).toBeVisible()
  64  |         await expect(this.page.locator('#termsError')).toBeVisible()
  65  | 
  66  |     }
  67  |     async invalidEmail(data){
  68  |         await this.email.fill(data.invalidEmail)
  69  |         await this.submit.click()
  70  |         await expect(this.page.locator('#emailError')).toBeVisible()
  71  |         await expect(this.page.getByText("Enter a valid email address.")).toHaveText("Enter a valid email address.")
  72  | 
  73  |     }
  74  | 
  75  |     async reset(data){
  76  |         await this.firstname.fill(data.firstname)
  77  |         await this.lastname.fill(data.lastname)
  78  |         await this.email.fill(data.email)
  79  |         await this.resetbtn.click()
  80  |         await expect(this.firstname).toHaveValue('');
  81  |         await expect(this.email).toHaveValue('');
  82  |         await expect(this.page.locator('#firstNameError')).not.toBeVisible()
  83  |         await expect(this.page.locator('#lastNameError')).not.toBeVisible()
  84  |         await expect(this.page.locator('#emailError')).not.toBeVisible()
  85  |         await expect(this.page.locator('#phoneError')).not.toBeVisible()
  86  |         await expect(this.page.locator('#dobError')).not.toBeVisible()
  87  |         await expect(this.page.locator('#genderError')).not.toBeVisible()
  88  |         await expect(this.page.locator('#countryError')).not.toBeVisible()
  89  |         await expect(this.page.locator('#cityError')).not.toBeVisible()
  90  |         await expect(this.page.locator('#passwordError')).not.toBeVisible()
  91  |         await expect(this.page.locator('#confirmPasswordError')).not.toBeVisible()
  92  |         await expect(this.page.locator('#termsError')).not.toBeVisible()
  93  |     }
  94  | 
  95  |     async gendercheck(data){
  96  |        const genders=["male","female","other"]
  97  |         await this.page.getByTestId(`radio-gender-${data.selectgender}`).check();
  98  |         for(const gender of genders){
  99  |             const radio=this.page.getByTestId(`radio-gender-${gender}`)
  100 |          if(gender===data.selectgender){
  101 |             await expect (radio).toBeChecked()
  102 |             console.log(gender+ " is checked")
  103 |            }
  104 |           else{
  105 |             await expect (radio).not.toBeChecked()
  106 |             console.log(gender+ " is not checked")
  107 |           }
  108 |         }
  109 | 
  110 |     }
  111 |     async fieldsretainvalues(data){
  112 |         await this.firstname.fill(data.firstname)
  113 |         await this.email.fill(data.email)
  114 |         await this.submit.click()
  115 |         await expect (this.firstname).toHaveValue(data.firstname)
  116 |         await expect (this.email).toHaveValue(data.email)
  117 | 
  118 |     }
  119 | 
  120 |     async fillAgain(data){
  121 |         await this.firstname.fill(data.firstname)
  122 |         await this.lastname.fill(data.lastname)
  123 |         await this.email.fill(data.email)
  124 |         await this.phone.fill(data.phone)
  125 |         await this.dob.fill(data.dob)
  126 |         await this.page.getByTestId(`radio-gender-${data.gender}`).check();
  127 |         await this.country.click()
```