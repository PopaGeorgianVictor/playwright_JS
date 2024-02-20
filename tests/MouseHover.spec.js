import {test, expect} from '@playwright/test'



test ('Mouse hover', async ({page})=>{

await page.goto('https://demo.nopcommerce.com/register')


const desktops=await page.getByRole('link', { name: 'Computers'})
const macbook= await page.getByRole('link', { name: 'Desktops' })

//mouse hover
await desktops.hover()
await macbook.hover()
await page.waitForTimeout(5000)

})

