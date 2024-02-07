
import {test, expect} from '@playwright/test'


test('handle radio button' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // radio button
    await page.locator('#male').check() // = await page.check('#name')
    await expect(await page.locator('#male')).toBeChecked()
    await expect(await page.locator('#male').isChecked()).toBeTruthy()

    await expect(await page.locator('#female').isChecked()).toBeFalsy()
   

    await page.waitForTimeout(5000) //pausing code
    
})