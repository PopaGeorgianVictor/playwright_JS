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

    // const machedRow= rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Product 4' 
    // })


    // await machedRow.locator('input').check()

    //select multiple products by re-usable function
    // await selectProduct(rows, page, 'Product 1')
    // await selectProduct(rows, page, 'Product 3')
    // await selectProduct(rows, page, 'Product 5')

    //print all product detalis using loop

    // for(let i=0;i<await rows.count(); i++)
    // {
    //     const row = rows.nth(i)
    //     const tds = row.locator('td')

    //     for(let j=0;j< await tds.count()-1;j++)
    //     {
    //         console.log(await tds.nth(j).textContent())
    //     }
    // }
    

    //read data from all the pages in the pages
    const pages = await page.locator('.pagination li a')
    console.log('Number of pages in the table:', await pages.count())

    for(let p=0 ; p<await pages.count(); p++)
    {
       if(p>0)
        {
        await pages.nth(p).click()
        }
        for(let i=0;i<await rows.count(); i++)
        {
            const row = rows.nth(i)
            const tds = row.locator('td')

            for(let j=0;j<await tds.count()-1;j++)
            {
                console.log(await tds.nth(j).textContent())

            }
            
       }
        
    }
        
})
    


//     async function selectProduct(rows, page, name)
//     {

//         const machedRow= rows.filter({
//         has: page.locator('td'),
//         hasText: name
//         })
//         await machedRow.locator('input').check()

//     }




