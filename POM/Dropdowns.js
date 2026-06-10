import {expect} from '@playwright/test'

export class Dropdowns{
    constructor(page){
        this.page=page
        this.fruitsdd=page.locator("#dropdown-fruit")
        this.countrydd=page.locator("#dropdown-country")
        this.langdd=page.locator('#dropdown-language')
        this.multidd=page.getByTestId("dropdown-heroes")
    }

    async navigate(){
        await this.page.goto("https://qaplayground.com/practice/dropdowns")
    }

    async selectfruit(fruit){
        console.log(fruit);
        await this.fruitsdd.click()
        await this.page.getByRole('option', { name: fruit }).click();
        await expect(this.fruitsdd).toContainText(fruit);

    }

    async selectcountry(country){
        await this.countrydd.click()
        await this.page.getByText(country, { exact: true }).click()
        await expect(this.countrydd).toContainText(country);
    }

    async languagecheck(){
        await this.langdd.click()
        const options = this.page.getByRole('option');
        const languages = await options.allTextContents();
        expect(languages).toHaveLength(3)
        console.log(languages)
        const expectedlang=[ 'Python', 'Java', 'JavaScript' ]
        for (const lang of expectedlang){
            await expect (languages).toContain(lang)
        }
        const lastoption = languages[languages.length - 1];
        console.log(lastoption)
        await options.last().click()
        await expect (this.langdd).toHaveText(lastoption)
    }
    async selectmultipleddvalues(){
        const selectoptions=await this.multidd.selectOption( ['Ant-Man', 'Batman'])
        expect(selectoptions).toHaveLength(2);
        expect(selectoptions).toContain('ant-man');
        expect(selectoptions).toContain('batman');
    }

    async deselectHero() {
    await this.multidd.selectOption(['ant-man','aquaman']);
    await this.multidd.selectOption(['aquaman']);
    await expect(this.multidd).toHaveValues(['aquaman']);
}
}