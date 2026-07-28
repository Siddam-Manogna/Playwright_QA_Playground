import {test,expect} from '@playwright/test'
import  {Newtab} from '../POM/Newtab'



test("Newtab practise",async ({page})=>{
    const newtab=new Newtab(page)
    await newtab.navigate()
    await newtab.opennewhometab()

})