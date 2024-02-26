import {test, expect} from '@playwright/test'


let page

test.beforeEach( async ({ browser }) => {

    page = await browser.newPage()
    await page.goto('https://www.demoblaze.com/index.html') 

    //Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('zaheu') 
    await page.locator('#loginpassword').fill('test123@')
    await page.getByRole('button', { name: 'Log in' }).click()
})

test.afterEach(async()=>{

    await page.locator('#logout2').click() 
})
    
    test('Home Page', async () => {
        const products=await page.$$('.hrefch') 
        expect(products).toHaveLength(9)

    })
    

test('Add product to the cart', async () => {

    //add product tot cart
    await page.getByRole('link', { name: 'Nokia lumia' }).click()
    await page.getByRole('link', { name: 'Add to cart' }).click()

    page.on('dialog' , async dialog =>{
        expect(dialog.message()).toContain('Product added')
        await dialog.accept() 

    })

 
})