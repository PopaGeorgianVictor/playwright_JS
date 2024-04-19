const { test, expect } = require('@playwright/test')


test.only('Browser Context-Validating Error Login', async ({page})=>{

    const productName = 'Zara Coat 3'
    const products = page.locator(".card-body")
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator("#userEmail").fill("anshika@gmail.com")
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
    const bool = await page.locator("h3:has-text('Zara Coat 3')").isVisible()
    expect(bool).toBeTruthy()
    await page.locator("text=Checkout").click()
    await page.locator("[placeholder*='Country']").fill("ind", {delay: 100}) // delay typing to show up suggestions (slow down typing)
    const options= page.locator(".ta-results") //select Country
 
   // await page.pause()

   // await page.waitForTimeout(3000)


})