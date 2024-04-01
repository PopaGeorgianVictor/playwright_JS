import {test, expect} from '@playwright/test'


test('Browser Context Playwright test', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title())

//css
await page.locator('#username').fill('zaheu')  // .type('zaheu')
await page.locator('#password').fill('zaheu123')
await page.locator('#signinBtn').click()


})