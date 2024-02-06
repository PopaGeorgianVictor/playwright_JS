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
   const regButton = await page.locator('#register-button')
   await expect(regButton).toHaveAttribute('type','submit')
  
   // expect(locator).toHaveText() Element matches text
   await expect(await page.locator('.page-title h1')).toHaveText('Register')

   // expect(locator).toContainText() Element contains text
   await expect(await page.locator('.page-title h1')).toContainText('Reg')

   // expect(locator).toHaveValue(value) Input has a value
   const email = await  page.locator('#Email')
   await email.fill('test@demo.com')
   await expect(email).toHaveValue('test@demo.com')

   // expect(locator).toHaveCount() List of elements has given length
   const option = await page.locator('select[name="DateOfBirthMonth"] option')
   await expect(option).toHaveCount(13)




})