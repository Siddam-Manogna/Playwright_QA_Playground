import {test,expect} from '@playwright/test'
import  {Dates} from '../POM/Dates'
import UserData from '../TestData/UserData.json'


test.skip("Dates practise",async ({page})=>{
    const dates=new Dates(page)
    await dates.filltodaysdate(UserData.date)
})