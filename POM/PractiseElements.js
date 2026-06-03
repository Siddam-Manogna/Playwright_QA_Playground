import {expect} from '@playwright/test'

const TAB_HEADING_MAP = {
    "Input Fields":          "Input Field Automation Practice",
    "Buttons":                "Button Automation Practice",
    "Forms":            "Form Automation Practice",
    "Dropdowns":             "Dropdown Automation Practice",
    
}

export class PractiseElements{
    constructor(page){
        this.page=page
        this.get_all_Field_names=page.locator("div#practice-cards-grid a p.px-2")
        this.moviename=page.getByTestId("input-movie-name")
        this.append=page.getByTestId("input-append-text")
        this.nexttext=page.getByTestId("input-verify-text")
        this.cleartext=page.getByTestId("input-clear-text")
        this.disabled=page.getByTestId("input-disabled")
        this.readonly=page.getByTestId("input-readonly")
        
    }

    async Inputfieldpractise(tabname){
        const targetCard = this.get_all_Field_names.filter({ hasText: tabname })
        await expect(targetCard).toBeVisible()
        await targetCard.click()
        const expectedHeading = TAB_HEADING_MAP[tabname]

        // If tabname not in map, throw a clear error instead of a confusing timeout
        if (!expectedHeading) {
            throw new Error(`No heading mapping found for tab: "${tabname}". Add it to TAB_HEADING_MAP.`)
        }

        await expect(this.page.locator("div h1.text-3xl")).toContainText(expectedHeading)
    
    }

    async movieName(movie){
        await expect(this.moviename).toHaveAttribute('placeholder','Enter hollywood movie name')
        await this.moviename.fill(movie)
        //await expect(this.page.getByPlaceholder('Enter hollywood movie name')).not.toBeVisible()
        const movienameentered=await this.moviename.inputValue()
        await expect (movienameentered).toBe(movie)

    }

    async appendtext(){
        const beforevalue=await this.append.inputValue()
        console.log(beforevalue)
        await this.append.click()
        const enteringvalue=" I am Playwright tester"
        await this.append.pressSequentially(enteringvalue)
        await expect(this.append).toHaveValue(beforevalue+enteringvalue)
        await this.append.press('Tab')
        await expect(this.nexttext).toBeFocused()

    }
    async verifytextpresence(){
        const valuepresent=await this.nexttext.inputValue()
        console.log(valuepresent)
        await expect(valuepresent).toBe("QA PlayGround")
        const valueextract=await this.nexttext.getAttribute('value')
        console.log(valueextract)
        await expect(valuepresent).toBe("QA PlayGround")
    }

    async cleartextField(){
        await expect (this.cleartext).toHaveValue("QA PlayGround Clear Me")
        await this.cleartext.fill("")
        const aftervalue=await this.cleartext.getAttribute('value')
        console.log(aftervalue)
        await expect(this.cleartext).toHaveValue("")

    }

    async disabledField(){
        await expect (this.disabled).toBeDisabled()
    }

    async readonlyfield(){
        await this.readonly.pressSequentially("XYZ")
        await expect(this.readonly).toHaveValue("This text is readonly")
        await expect (this.readonly).toHaveAttribute("readonly","")
    }

    async navigatwback(){
        this.page.goBack()
        await expect (this.page.getByText("Ready to be a Pro AI Automation Engineer?")).toBeVisible()
    }

}