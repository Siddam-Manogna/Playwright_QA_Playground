# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Amazonprices.spec.js >> Amazon test
- Location: tests\Amazonprices.spec.js:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.amazon.in/gp/new-releases/?ref_=nav_cs_newreleases", waiting until "load"

```

# Test source

```ts
  1  | export class prices{
  2  |     constructor(page){
  3  |         this.page=page
  4  |         this.itemprices=page.locator(".a-size-base ._cDEzb_p13n-sc-price_3mJ9Z")
  5  |     }
  6  | 
  7  |     async navigate(){
> 8  |     await this.page.goto("https://www.amazon.in/gp/new-releases/?ref_=nav_cs_newreleases")
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  9  |     }
  10 | 
  11 |     async getallprices(){
  12 |         const priceslist= await this.itemprices.allTextContents()
  13 |         console.log(priceslist)
  14 |         const results=[]
  15 |         for(let i=0;i<priceslist.length;i++){
  16 |             results.push(Number(priceslist[i].replace("₹","").replace(",", "").trim()))
  17 |         }
  18 |         console.log(results)
  19 |         console.log(results.sort((a,b)=>a-b))
  20 |          
  21 |         let highest = results[0];
  22 |         let lowest = results[0];
  23 | 
  24 |         
  25 |      for (let i = 1; i < results.length; i++) {
  26 |         if (results[i] > highest) {
  27 |             highest = results[i];
  28 |         }
  29 | 
  30 |         if (results[i] < lowest) {
  31 |             lowest = results[i];
  32 |         }
  33 |     }
  34 |         console.log("highest: ",highest)
  35 |         
  36 |         console.log("lowest: ",lowest)
  37 |         
  38 |     }
  39 | }
```