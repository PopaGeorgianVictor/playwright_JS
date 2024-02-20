import {test, expect} from '@playwright/test'


test ('Mouse Right Click', async ({page})=>{
await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html')
const button= await page.locator('.btn-neutral')

//right click action
await button.click({button: 'right'})
await page.waitForTimeout(3000)
})