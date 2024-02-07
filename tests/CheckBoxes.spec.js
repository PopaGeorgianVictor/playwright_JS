import {test, expect} from '@playwright/test'


test('handle checkboxes' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //single checkbox
    await page.locator('#sunday').check() // = await page.check('#sunday')
    await expect(await page.locator('#sunday')).toBeChecked
    await expect(await page.locator('#sunday').isChecked()).toBeTruthy

    await expect(await page.locator('#monday').isChecked()).toBeFalsy


    //select multiple checkboxes
    const checkboxLocators=['#monday', '#sunday' , '#saturday']
    for(const locator of checkboxLocators)
    {
        await page.locator(locator).check()
    }
   
    await page.waitForTimeout(5000) //pausing code


    //unselect multiple checbokes wich are already selected
    for(const locator of checkboxLocators)
    {   
        if(await page.locator(locator).isChecked())
        await page.locator(locator).uncheck()
    }



    await page.waitForTimeout(5000) //pausing code


})