import {test, expect} from '@playwright/test'
import exp from 'constants'


test('handle dropdowns' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
     

    // Multiple ways to select option from the dropdowns
    //await page.locator('#country').selectOption({label: 'Japan'}) // label / visible text
    //await page.locator('#country').selectOption('Japan') // visible text
    //await page.locator('#country').selectOption({value:'japan'}) // by using value
    //await page.locator('#country').selectOption({index:6})  // by using index
    //await page.selectOption('#country','Japan') // by text

    //Assertions

    //check number of optons in dropdown - approach 1
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10)
    
    //check number of option in dropdown - approach 2
    const option = await page.$$('#country option')
    console.log('Number of options:' , option.length)
  


    await page.waitForTimeout(5000) //pausing code

})