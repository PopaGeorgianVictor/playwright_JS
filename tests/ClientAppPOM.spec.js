const { test, expect } = require('@playwright/test')
const {POManager} =  require('../pageobjects/POManager')


test('ClientApp', async ({page})=>{

  //js file - Login js, DashboardPage
    const poManager = new POManager(page)
    const userName = "anshika@gmail.com"
    const password = "Iamking@000"
    const productName = 'ADIDAS ORIGINAL'
    const products = page.locator(".card-body")
    const loginPage = poManager.getLoginPage()
    await loginPage.goTo()
    await loginPage.validLogin(userName,password)
    const dashboardPage = poManager.getDashboardPage()
    await dashboardPage.searchProductAddCart(productName)
    await dashboardPage.navigateToCart()
  
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
    // await expect(page.locator(".user__name [type='text']")).toHaveText(userName)
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