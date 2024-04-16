const { test, expect } = require('@playwright/test')


test.only('Browser Context-Validating Error Login', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const userName = page.locator('#username')
    const signIn = page.locator('#signInBtn')
    const dropdown = page.locator("select.form-control")
    await dropdown.selectOption("consult")
    await page.locator(".radiotextsty").last().click()
    await page.locator("#okayBtn").click()
    



    //await page.pause() - pause test and open inspector









})