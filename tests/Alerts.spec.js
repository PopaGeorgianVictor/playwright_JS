import {test, expect} from '@playwright/test'


test('alert with ok' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

     
    //Enabling dialog window handler
    page.on('dialog' , async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()

    })
    
    await page.getByRole('button', { name: 'Alert' }).click()
    
    await page.waitForTimeout(3000)
})


test('confirmation dialog - ok and cancel' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

     
    //Enabling dialog window handler
    page.on('dialog' , async dialog =>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept() // close by using ok 
        // await dialog.dismiss() // close by using cancel

    })
    
    await page.getByRole('button', { name: 'Confirm Box' }).click()
    await expect(page.locator('#demo')).toHaveText('You pressed OK!')
    
    await page.waitForTimeout(3000)
})

test('prompt ' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

     
    //Enabling dialog window handler
    page.on('dialog' , async dialog =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('John') 

    })
    
    await page.getByRole('button', { name: 'Prompt' }).click()
    await expect(page.locator('#demo')).toHaveText('Hello John! How are you today?')
    
    await page.waitForTimeout(3000)
})