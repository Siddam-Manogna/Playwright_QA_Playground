import {expect} from '@playwright/test'

export class Forms{
    constructor(page){
        this.page=page
        this.firstname=page.locator('#firstName')
        this.lastname=page.locator('[name="lastName"]')
        this.email=page.locator('[type="email"]')
        this.phone=page.locator('#phone')
        this.dob=page.getByTestId("input-dob")
        this.gender = page.locator('input[name="gender"]')
        this.country=page.locator('#country')
        this.city=page.locator('#city')
        this.interests=page.getByTestId("interests-group")
        this.password=page.locator("#password")
        this.cnfrmpassword=page.locator("#confirmPassword")
        this.confirmcheckbox=page.getByTestId("checkbox-terms")
        this.submit=page.locator("#submitFormBtn")
        this.submittedName=page.locator("#submittedName")
        this.resetbtn=page.locator("#resetFormBtn")
        this.fillagain=page.getByTestId("reset-form-btn")
        


    }
    async Navigation(){
        await this.page.goto("https://qaplayground.com/practice/forms")
    }

    async validFormfill(data){
        await this.firstname.fill(data.firstname)
        await this.lastname.fill(data.lastname)
        await this.email.fill(data.email)
        await this.phone.fill(data.phone)
        await this.dob.fill(data.dob)
        await this.page.getByTestId(`radio-gender-${data.gender}`).check();
        await this.country.click()
        await this.page.waitForSelector('[role="option"]', { state: 'visible' })
        await this.page.getByRole('option', { name: data.country }).click() 
        await this.city.fill(data.city)
        await this.interests.getByTestId(`checkbox-interest-${data.interests}`).click();
        await this.password.fill(data.password)
        await this.cnfrmpassword.fill(data.cnfrmpassword)
        await this.confirmcheckbox.check()
        await this.submit.click()
        await expect(this.page.getByText("Form Submitted Successfully!")).toBeVisible()
        await expect(this.submittedName).toHaveText(data.firstname+" "+data.lastname)


    }

    async requiredFieldErrorValidation(){
        await this.submit.click()
        await expect(this.page.locator('#firstNameError')).toBeVisible()
        await expect(this.page.locator('#lastNameError')).toBeVisible()
        await expect(this.page.locator('#emailError')).toBeVisible()
        await expect(this.page.locator('#phoneError')).toBeVisible()
        await expect(this.page.locator('#dobError')).toBeVisible()
        await expect(this.page.locator('#genderError')).toBeVisible()
        await expect(this.page.locator('#countryError')).toBeVisible()
        await expect(this.page.locator('#cityError')).toBeVisible()
        await expect(this.page.locator('#passwordError')).toBeVisible()
        await expect(this.page.locator('#confirmPasswordError')).toBeVisible()
        await expect(this.page.locator('#termsError')).toBeVisible()

    }
    async invalidEmail(data){
        await this.email.fill(data.invalidEmail)
        await this.submit.click()
        await expect(this.page.locator('#emailError')).toBeVisible()
        await expect(this.page.getByText("Enter a valid email address.")).toHaveText("Enter a valid email address.")

    }

    async reset(data){
        await this.firstname.fill(data.firstname)
        await this.lastname.fill(data.lastname)
        await this.email.fill(data.email)
        await this.resetbtn.click()
        await expect(this.firstname).toHaveValue('');
        await expect(this.email).toHaveValue('');
        await expect(this.page.locator('#firstNameError')).not.toBeVisible()
        await expect(this.page.locator('#lastNameError')).not.toBeVisible()
        await expect(this.page.locator('#emailError')).not.toBeVisible()
        await expect(this.page.locator('#phoneError')).not.toBeVisible()
        await expect(this.page.locator('#dobError')).not.toBeVisible()
        await expect(this.page.locator('#genderError')).not.toBeVisible()
        await expect(this.page.locator('#countryError')).not.toBeVisible()
        await expect(this.page.locator('#cityError')).not.toBeVisible()
        await expect(this.page.locator('#passwordError')).not.toBeVisible()
        await expect(this.page.locator('#confirmPasswordError')).not.toBeVisible()
        await expect(this.page.locator('#termsError')).not.toBeVisible()
    }

    async gendercheck(data){
       const genders=["male","female","other"]
        await this.page.getByTestId(`radio-gender-${data.selectgender}`).check();
        for(const gender of genders){
            const radio=this.page.getByTestId(`radio-gender-${gender}`)
         if(gender===data.selectgender){
            await expect (radio).toBeChecked()
            console.log(gender+ " is checked")
           }
          else{
            await expect (radio).not.toBeChecked()
            console.log(gender+ " is not checked")
          }
        }

    }
    async fieldsretainvalues(data){
        await this.firstname.fill(data.firstname)
        await this.email.fill(data.email)
        await this.submit.click()
        await expect (this.firstname).toHaveValue(data.firstname)
        await expect (this.email).toHaveValue(data.email)

    }

    async fillAgain(data){
        await this.firstname.fill(data.firstname)
        await this.lastname.fill(data.lastname)
        await this.email.fill(data.email)
        await this.phone.fill(data.phone)
        await this.dob.fill(data.dob)
        await this.page.getByTestId(`radio-gender-${data.gender}`).check();
        await this.country.click()
        await this.page.waitForSelector('[role="option"]', { state: 'visible' })
        await this.page.getByRole('option', { name: data.country }).click() 
        await this.city.fill(data.city)
        await this.interests.getByTestId(`checkbox-interest-${data.interests}`).click();
        await this.password.fill(data.password)
        await this.cnfrmpassword.fill(data.cnfrmpassword)
        await this.confirmcheckbox.check()
        await this.submit.click()
        await expect(this.page.getByText("Form Submitted Successfully!")).toBeVisible()
        await expect(this.submittedName).toHaveText(data.firstname+" "+data.lastname)
        await this.resetbtn.click()
        await expect (this.page.getByText("Form Automation Practice")).toBeVisible()
        await expect(this.firstname).toHaveValue('');
        await expect(this.lastname).toHaveValue('');
        await expect(this.email).toHaveValue('');
        await expect(this.phone).toHaveValue('');
        await expect(this.dob).toHaveValue('');
        await expect(this.page.getByTestId('radio-gender-male')).not.toBeChecked();
        await expect(this.page.getByTestId('radio-gender-female')).not.toBeChecked();
        await expect(this.page.getByTestId('radio-gender-other')).not.toBeChecked();
        await expect(this.country).toContainText("Select country")  
        await expect(this.city).toHaveValue('');
        await expect(this.password).toHaveValue('');
        await expect(this.cnfrmpassword).toHaveValue('');

    }

}