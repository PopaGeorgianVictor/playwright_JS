const { test, expect } = require('@playwright/test')


test.only('Browser Context-Validating Error Login', async ({page})=>{

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
    await page.pause()

    await page.locator("[routerlink*='cart']").click()
    await page.locator("div li").first().waitFor()
    const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible()
    expect(bool).toBeTruthy()
    await page.locator("text=Checkout").click()
    await page.locator("[placeholder*='Country']").fill("ind", {delay: 100}) // delay typing to show up suggestions (slow down typing)
    const dropdown = page.locator(".ta-results") //select Country
    await dropdown.waitFor()
    optionCount = dropdown.locator("button").locator("buttton").count()
    for (let i = 0; i< optionsCount; ++i)
    {
      text = await dropdown.locator("button").nth(i).textContent()
      if(text.trim() === "India") // trim to eliminate space or write ' India'  with space like in the js or use java methods text.includes("India")
      {
        await dropdown.locator("button").nth(i).click()
        break
      }
    }

    await expect(page.locator(".user__name [type='text']")).toHaveText(email)
    await page.locator(".action__submit").click()
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    console.log(orderId)

  
   // await page.pause()

   // await page.waitForTimeout(3000)


})