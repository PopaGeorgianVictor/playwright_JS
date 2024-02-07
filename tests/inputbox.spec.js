import {test, expect} from '@playwright/test'


test('handle inputbox' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // inputbox Name
    await expect(await  page.locator('#name')).toBeVisible()
    await expect(await  page.locator('#name')).toBeEmpty()
    await expect(await  page.locator('#name')).toBeEditable()
    await expect(await  page.locator('#name')).toBeEnabled()

    await page.locator('#name').fill('test')  // = page.fill('#name','test')
    
})