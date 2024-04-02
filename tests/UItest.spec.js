const { test, expect } = require('@playwright/test')


test.only('Browser Context Playwright test', async ({browser})=>{

    
    const context = await browser.newContext()
    const page = await context.newPage()
    const userName = page.locator('#username')
    const signIn = page.locator('#signInBtn')
    const cardTitles = page.locator(".card-body a")


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title())

//verify incorect userName
await userName.fill('wrongUsername')  
await page.locator('#password').fill('learning')
await signIn.click()
console.log(await page.locator("[style*='block']").textContent())
await expect(await page.locator("[style*='block']")).toContainText('Incorrect')

//corect userName
await userName.fill('') //empty wrong username
await userName.fill('rahulshettyacademy')
await signIn.click()

console.log(await cardTitles.first().textContent()) //return first elem on the page / similary: .nth(0)
console.log(await cardTitles.nth(1).textContent()) //return second elem 
const allTitle = await cardTitles.allTextContents()
console.log(allTitle)

// await page.waitForTimeout(3000)



})