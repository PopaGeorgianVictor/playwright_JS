import {test, expect} from '@playwright/test'


test('handle dropdowns' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //select multiple options from multi select dropdown
    // await page.selectOption('#colors', ['Red' , 'Yellow' , 'Blue'])

    //Assertions
    //check number of optons in dropdown - approach 1
    // const options = await page.locator('#colors option')
    // await expect(options).toHaveCount(5)

    //check number of options in dropdown using JS array
    const options = await page.$$('#colors option')
    console.log('Number of options:' , options.length)
    await expect(options).toHaveLength(5) // = await expect(options.length).toBe(5)

    
    //check presence of value in the dropdown
    const content =  await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy()
    await expect(content.includes('Black')).toBeFalsy()



    // await page.waitForTimeout(5000) //pausing code

})