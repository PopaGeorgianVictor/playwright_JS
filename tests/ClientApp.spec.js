const { test, expect } = require('@playwright/test')


test.only('ClientApp', async ({page})=>{

    const email = "anshika@gmail.com"
    const productName = 'ADIDAS ORIGINAL'
    const products = page.locator(".card-body")
    await page.goto("https://rahulshettyacademy.com/client/")
    await page.locator("#userEmail").fill(email)
    await page.locator("#userPassword").fill("Iamking@000")
    await page.locator("[value='Login']").click()
    await page.waitForLoadState('networkidle')

    const titles = await page.locator(".card-body b").allTextContents()
    console.log(titles)
    const count = await products.count()
    for(let i=0; i < count ; ++i)
    {
        if(await products.nth(i).locator("b").textContent() === productName)
        {
            //add to cart
          await  products.nth(i).locator("text= Add to Cart").click()
          break
        }
    }
   

    await page.locator("[routerlink*='cart']").click()
    await page.locator("div li").first().waitFor()
    const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible()
    expect(bool).toBeTruthy()
    await page.locator("text=Checkout").click()
    await page.locator("[placeholder*='Country']").type('rom',{delay: 200}) // delay typing to show up suggestions (slow down typing)
    const dropdown = page.locator(".ta-results") //open dropdown 
    await dropdown.waitFor()
    const optionsCount = await dropdown.locator("button").count()
    for (let i = 0; i< optionsCount; ++i)
    {
      const text = await dropdown.locator("button").nth(i).textContent()
      if(text=== " Romania") // trim to eliminate space or write ' India'  with space like in the js or use java methods text.includes("India")
      {
        await dropdown.locator("button").nth(i).click()
        break
      }
    }
    // await page.pause()
    // await expect(page.locator(".ng-touched']")).toHaveText(email)
    await page.locator(".action__submit").click()
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    console.log(orderId)
    await page.locator("button[routerlink*='myorders']").click()
    await page.locator("tbody").waitFor() //wait until the table order showing up
    const rows = await page.locator("tbody tr")

    for(let i = 0; i < await rows.count(); ++i)
    {
      const roworderId =await  rows.nth(i).locator("th").textContent() //grab orderid for product added to cart
      if (orderId.includes(roworderId))
      {
        await rows.nth(i).locator("button").first().click() //click on view order, open the view details
        break
      }
    }

    const orderIdDetails = await page.locator(".col-text").textContent()
    expect(orderId.includes(orderIdDetails)).toBeTruthy()

  
  //  await page.pause()

   await page.waitForTimeout(3000)


})