import {test, expect} from '@playwright/test'
import { waitForDebugger } from 'inspector'

test('AssertionTest' , async ({page}) => {
    
    await page.goto('https://demo.nopcommerce.com/register')
    
    // expect(page).toHaveURL()  Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // expect(page).toHaveTitle()  Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register') 

    // expect(locator).toBeVisible() Element is visible
    const logoElem = await page.locator('.header-logo')
    await expect(logoElem).toBeVisible()

   // expect(locator).toBeEnabled()  Control is enabled 
   const search = await page.getByPlaceholder('Search store')
   await expect(search).toBeEnabled()

   // expect(locator).toBeChecked()  Radio/Checkbox is checked

   // radio button
   const RadioButton = await page.locator('#gender-male')
   await RadioButton.click() // select radio button
   await expect(RadioButton).toBeChecked()

   // checkbox
   const checkbox = await page.locator('#Newsletter')
   await expect(checkbox).toBeChecked()

   // expect(locator).toHaveAttribute() Element has attribute
  


})