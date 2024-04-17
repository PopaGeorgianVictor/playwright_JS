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
    const userName = page.locator('#username')
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const documentLink = page.locator("[href*='documents-request']")

    // open a new page when link from current page is clicked
    const [newPage] = await Promise.all([

        context.waitForEvent('page'), 
        documentLink.click(),
        ])
            const text = await newPage.locator(".red").textContent()
            console.log(text)

            // Please email us at mentor@rahulshettyacademy.com with below template to receive response - extract just rahulshettyacademy.com
            const arrayText = text.split("@")  
            const domain = arrayText[1].split(" ")[0] // [0] - rahulshettyacademy.com [1] - with [2] - below etc.
            console.log(domain)

            // navigate to parent page and fill with 'domain'
            await userName.fill(domain)
           

           










    
    //await page.pause() - pause test and open inspector


})