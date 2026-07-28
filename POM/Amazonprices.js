export class prices{
    constructor(page){
        this.page=page
        this.itemprices=page.locator(".a-size-base ._cDEzb_p13n-sc-price_3mJ9Z")
    }

    async navigate(){
    await this.page.goto("https://www.amazon.in/gp/new-releases/?ref_=nav_cs_newreleases")
    }

    async getallprices(){
        const priceslist= await this.itemprices.allTextContents()
        console.log(priceslist)
        const results=[]
        for(let i=0;i<priceslist.length;i++){
            results.push(Number(priceslist[i].replace("₹","").replace(",", "").trim()))
        }
        console.log(results)
        console.log(results.sort((a,b)=>a-b))
         
        let highest = results[0];
        let lowest = results[0];

        
     for (let i = 1; i < results.length; i++) {
        if (results[i] > highest) {
            highest = results[i];
        }

        if (results[i] < lowest) {
            lowest = results[i];
        }
    }
        console.log("highest: ",highest)
        
        console.log("lowest: ",lowest)
        
    }
}