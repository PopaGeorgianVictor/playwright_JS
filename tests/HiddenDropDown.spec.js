import {test, expect} from '@playwright/test'


test('hidden option dropdowns' , async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.locator("[type='submit']").click()

    await page.locator("//span[normalize-space()='PIM']").click()

    // click on dropdown
    await page.locator('form.i').nth(2).click()

//     //waiting for option
//     await page.waitForTimeout(3000)

//     const options = await page.$$("//div[@role='listbox']//span")

//     for(let option of options)
//     {
//       const jobTitle = await option.textContent()
//       console.log(jobTitle)

    
//     }
await page.waitForTimeout(3000)
})