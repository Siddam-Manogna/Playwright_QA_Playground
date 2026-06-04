import {test,expect} from '@playwright/test'
import { Forms } from '../POM/Forms'
import UserData from '../TestData/UserData.json'

test("Form Fill",async ({page})=>{

    const forms=new Forms(page)
    await forms.Navigation()
    //await forms.validFormfill(UserData)
    //await forms.requiredFieldErrorValidation()
    //await forms.invalidEmail(UserData)
   // await forms.reset(UserData)
    //await forms.gendercheck(UserData)
    //await forms.fieldsretainvalues(UserData)
    await forms.fillAgain(UserData)
})