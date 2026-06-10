import {test,expect} from '@playwright/test'
import  {Dropdowns} from '../POM/Dropdowns'
import UserData from '../TestData/UserData.json'

test("dropdown practise",async ({page})=>{
    const dropdown=new Dropdowns(page)
    await dropdown.navigate()
    await dropdown.selectfruit(UserData.fruit)
    await dropdown.selectcountry(UserData.countrydd)
    await dropdown.languagecheck()
    await dropdown.selectmultipleddvalues()
    await dropdown.deselectHero()
})