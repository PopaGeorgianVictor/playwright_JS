import {test, expect} from '@playwright/test'


test('SoftAssertions' , async ({page}) => {

    await page.goto('https://www.demoblaze.com/index.html')

    //hard assertions - failed assertion will terminate test execution
    await expect(page).toHaveTitle('STORE1243') 
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    await expect(page.locator('#nava')).toBeVisible()
    
})