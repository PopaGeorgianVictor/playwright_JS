import {test, expect} from '@playwright/test'


test('Locators' , async ({page}) => {
    
    await page.goto('https://www.demoblaze.com/index.html')


    //click on login button - property
   //await page.locator('id=login2').click()
   await page.click('id=login2')
    
   //provide username - CSS
   //await page.locator('#loginusername').fill('test')
   await page.fill('#loginusername','zaheu')
   
   //provide password - CSS
   await page.fill("input[id='loginpassword']",'test123@')

   //Click on login btn
   await page.click("button[onclick='logIn()']")

   //verify logout link presence
   const logoutlink = await page.locator("id=logout2")
   await expect(logoutlink).toBeVisible()
   
})