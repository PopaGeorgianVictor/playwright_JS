const { test, expect } = require('@playwright/test')


test('Browser Context-Validating Error Login', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const userName = page.locator('#username')
    const signIn = page.locator('#signInBtn')
    const documentLink = page.locator("[href*='documents-request']")
    const dropdown = page.locator("select.form-control")
    await dropdown.selectOption("consult")
    await page.locator(".radiotextsty").last().click()
    await page.locator("#okayBtn").click()
    await expect(page.locator(".radiotextsty").last()).toBeChecked()
    await page.locator("#terms").click()
    await expect(page.locator("#terms")).toBeChecked()
    await page.locator("#terms").uncheck()
    expect(await page.locator("#terms").isChecked()).toBeFalsy()
    await expect(documentLink).toHaveAttribute("class","blinkingText")

})

test.only('Child windows handl', async ({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const documentLink = page.locator("[href*='documents-request']")

    // open a new page when link from current page is clicked
    const [newPage] = await Promise.all([

        context.waitForEvent('page'), 
        documentLink.click(),
        ])
            const text = await newPage.locator(".red").textContent()
            console.log(text)










    
    //await page.pause() - pause test and open inspector


})