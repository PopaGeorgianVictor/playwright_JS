const { test, expect } = require('@playwright/test')


test('Browser Context Playwright test', async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title())

//css
await page.locator('#username').fill('zaheu')  // .type('zaheu')
await page.locator('#password').fill('zaheu123')
await page.locator('#signInBtn').click()
console.log(await page.locator("[style*='block']").textContent())
await expect(await page.locator("[style*='block']")).toContainText('Incorrect')


})