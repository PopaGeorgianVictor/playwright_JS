import {test, expect} from '@playwright/test'

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





})