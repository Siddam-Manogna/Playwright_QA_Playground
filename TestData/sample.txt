import {test,expect} from '@playwright/test'
import  {Alerts} from '../POM/Alerts'
import UserData from '../TestData/UserData.json'


test("Alerts practise",async ({page})=>{
    const alerts=new Alerts(page)
    await alerts.Navigatealerts()
    //await alerts.simpleBrowserAlert()
    //await alerts.dismissbtn()
    //await alerts.promptdialog(UserData.name)
    //await alerts.toastalert()
    //await alerts.sweetalertdialog()
    await alerts.sharebtn()

})