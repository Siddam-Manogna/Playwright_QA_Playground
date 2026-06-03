import {expect} from '@playwright/test'

export class Buttons{
    constructor(page){
        this.page=page
        this.gotoHomebtn=page.locator("#btn-goto-home")
        this.getstarted=page.getByRole("button",{name:"Get Started"})
        this.doubelclickbtn=page.getByTestId("btn-double-click")
        this.btnstatechange=page.locator("#btn-action-result")
        this.rightclick=page.getByTestId("btn-right-click")
        this.disable=page.getByTestId('btn-disabled')
    }
    async gotoHome(){
       await this.gotoHomebtn.click()
       await expect(this.page.getByText("Master Automation Testing With")).toBeVisible()
       
    }
    async BackHome(){
       await this.getstarted.click()
       await expect(this.page.getByText("Ready to be a Pro AI Automation Engineer?")).toBeVisible()
    }

    async gettextfrombutton(){
        await expect(this.gotoHomebtn).toHaveText("Go To Home");
    }

    async doubleClickbutton(){
        await expect (this.btnstatechange).toHaveText("No action performed yet.")
        await this.doubelclickbtn.dblclick()
        await expect (this.btnstatechange).toHaveText("You Double-clicked on button!")
    }

    async rightClickbtn(){
        await this.rightclick.click({button:'right'})
        await expect (this.btnstatechange).toHaveText("You Right-clicked on button!")
    }

    async disabledbutton(){
        await this.page.reload()
        await expect (this.btnstatechange).toHaveText("No action performed yet.")
        await expect (this.disable).toBeDisabled()
        await this.disable.click({ force: true })
        await expect (this.btnstatechange).toHaveText("No action performed yet.")
    }

    async Enabled(){
        await expect(this.gotoHomebtn).toBeEnabled
        await expect(this.gotoHomebtn).not.toHaveAttribute('disabled', '');
    }

    async SetViewportsizecase(){
        await this.page.setViewportSize({width: 375,height: 812})
        await expect(this.doubelclickbtn).toBeVisible()
        await expect (this.doubelclickbtn).toBeInViewport()
        await expect(this.doubelclickbtn).toBeEnabled()
        await this.doubelclickbtn.dblclick()
        await expect (this.btnstatechange).toHaveText("You Double-clicked on button!")

    }

    async focus(){
        await this.page.keyboard.press('Tab');
        await this.gotoHomebtn.focus();
        await expect(this.gotoHomebtn).toBeFocused();
        await this.page.keyboard.press('Enter');
        await expect(this.page.getByText('Master Automation Testing With')).toBeVisible()
    }
}