import {test, expect} from '@playwright/test'


test('handle dropdowns' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
     

    //Multiple ways to select option from the dropdowns
    // await page.locator('#country').selectOption({label: 'Japan'}) // label / visible text
    // await page.locator('#country').selectOption('Japan') // visible text
    // await page.locator('#country').selectOption({value:'japan'}) // by using value
    // await page.locator('#country').selectOption({index:6})  // by using index
    // await page.selectOption('#country','Japan') // by text

    //Assertions
    //check number of optons in dropdown - approach 1
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10)
    
    //check number of option in dropdown - approach 2
    // const option = await page.$$('#country option')
    // console.log('Number of options:' , option.length)
    // await expect(option.length).toBe(10)

    //check presence of value in the dropdown - approch 1
    // const content = await page.locator('#country').textContent()
    // await expect(content.includes('Japan')).toBeTruthy()


    //check presence of value in the dropdown - approch 2 -using loooping
   /* const option = await page.$$('#country option')
    let status=false

    for(const op of option)
    {
        console.log(await op.textContent())
        let value=await op.textContent()
        if(value.includes('France'))
        {
            status=true
            break
        }

         expect(status).toBeTruthy()
    } */

    //
 
    

     const option = await page.$$('#country option')
    
    for(const op of option)
    {

        let value=await op.textContent()
        if(value.includes('France'))
        {
            await page.selectOption('#country',value)
            break
        }
    }
 
    


    // await page.waitForTimeout(5000) //pausing code

})