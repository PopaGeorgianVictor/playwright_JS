import {test, expect} from '@playwright/test'


test('LocatingMultipleElements' , async ({page}) => {
    
    await page.goto('https://www.demoblaze.com/index.html')
    
    //return all links
    const links = await page.$$('a') 
   
    for(const link of links)
    {
        const linktext = await link.textContent()
        console.log(linktext)
    }
    
    // Locate all the products displayed on home page

    // wait all the products are displayed 
    await page.waitForSelector("//div[@id='tbodyid']//h4/a") 

    const products =  await page.$$("//div[@id='tbodyid']//h4/a")

    for(const product of products)
    {
       const productName = await product.textContent()
       console.log(productName)
    }



})