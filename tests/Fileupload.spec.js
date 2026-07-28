import {test,expect} from '@playwright/test'
import  {fileupload} from '../POM/fileupload'



test("Fileupload practise",async ({page})=>{
    const file=new fileupload(page)
    await file.navigate()
    await file.fileuploadfield()

})