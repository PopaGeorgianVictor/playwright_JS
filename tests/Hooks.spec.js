import {test, expect} from '@playwright/test'

test('Home Page Test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html') 

    //Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('zaheu') 
    await page.locator('#loginpassword').fill('test123@')
    await page.getByRole('button', { name: 'Log in' }).click()

    //Home Page
    const products=await page.$$('.hrefch') 
    expect(products).toHaveLength(9)

    //Logout
    await page.locator('#logout2').click() 
})


test('Add product to thr cart', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html') 

    //Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('zaheu') 
    await page.locator('#loginpassword').fill('test123@')
    await page.getByRole('button', { name: 'Log in' }).click()

    //add product tot cart
    await page.getByRole('link', { name: 'Nokia lumia' }).click()
    await page.getByRole('link', { name: 'Add to cart' }).click()

    page.on('dialog' , async dialog =>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept() 

    })

    //Logout
    await page.locator('#logout2').click() 

})