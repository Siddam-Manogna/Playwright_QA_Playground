import{test,expect} from '@playwright/test'
import { Homepage } from '../POM/Homepage'
import { PractiseElements } from '../POM/PractiseElements'
import { Buttons } from '../POM/buttons'

test("QA Playground",async ({page})=>{

    const homepage=new Homepage(page)
    await homepage.Navigate()
    const practiseElements=new PractiseElements(page)
    await practiseElements.Inputfieldpractise("Input Fields")
    await practiseElements.movieName("Sanam Teri Kasam")
    await practiseElements.appendtext()
    await practiseElements.verifytextpresence()
    await practiseElements.cleartextField()
    await practiseElements.disabledField()
    await practiseElements.readonlyfield()
    await practiseElements.navigatwback()
    await practiseElements.Inputfieldpractise("Buttons")

    const buttons=new Buttons(page)
    await buttons.gotoHome()
    await buttons.BackHome()
    await practiseElements.Inputfieldpractise("Buttons")
    await buttons.gettextfrombutton()
    await buttons.doubleClickbutton()
    await buttons.rightClickbtn()
    await buttons.disabledbutton()
    await buttons.Enabled()
    await buttons.SetViewportsizecase()
    await buttons.focus()



})