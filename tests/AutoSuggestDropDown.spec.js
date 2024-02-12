import {test, expect} from '@playwright/test'


test('autosugest dropdowns' , async ({page}) => {

    await page.goto('https://www.cfrcalatori.ro/')
    await page.locator('#input-station-departure-name').fill('bucu')
    await page.waitForSelector("//li[contains(@class,'ui-menu-item')]/div")

    const cityOption = await page.$$("//li[contains(@class,'ui-menu-item')]/div")
    for(let option of cityOption)
    {
        const value = await option.textContent()
        // console.log(value)
        if(value.includes('București Nord'))
        {
           await option.click()
           break
        }
    }

    await page.waitForTimeout(5000)
})