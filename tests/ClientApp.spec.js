const { test, expect } = require('@playwright/test')


test('Browser Context-Validating Error Login', async ({page})=>{

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
        products.nth(i)
    }

    await page.waitForTimeout(3000)


})