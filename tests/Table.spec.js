import {test, expect} from '@playwright/test'


test('handling table' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable')

    // total number of rows & columns
    const columns = await table.locator('thead tr th')
    console.log('Number of columns:', await columns.count())
    const rows = await table.locator('tbody tr')
    console.log('Number of rows:', await rows.count())
    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)
    

    //select checkbox for one product

//     const machedRow= rows.filter({
//         has: page.locator('td'),
//         hasText: 'Product 4' 
//     })


//     await machedRow.locator('input').check()

    //3) select multiple products by re-usable function
    await selectProduct(rows, page, 'Product 1')
    await selectProduct(rows, page, 'Product 3')
    await selectProduct(rows, page, 'Product 5')

    await page.waitForTimeout(5000)

})

    async function selectProduct(rows, page, name)
    {

        const machedRow= rows.filter({
        has: page.locator('td'),
        hasText: name
        })
        await machedRow.locator('input').check()

    }




