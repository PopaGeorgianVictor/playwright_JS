import {test, expect} from '@playwright/test'


test('page screenshot', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html') 

    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('zaheu') 
    await page.locator('#loginpassword').fill('test123@')
    await page.getByRole('button', { name: 'Log in' }).click()
    await expect(page.locator('#logout2')).toBeVisible()

})