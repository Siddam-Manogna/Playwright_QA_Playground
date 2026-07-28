import {test,expect} from '@playwright/test'
import  {prices} from '../POM/Amazonprices'

test("Amazon test",async ({page})=>{

    const amazonprice=new prices(page)
    await amazonprice.navigate()
    await amazonprice.getallprices()
})