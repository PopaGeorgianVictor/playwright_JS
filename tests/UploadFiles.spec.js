import {test, expect} from '@playwright/test'


test('Single File', async ({page})=>{

await page.goto('https://www.foundit.in/')
await page.waitForSelector('.mqfihd-upload')
await page.locator('.mqfihd-upload').click()
await page.locator('#file-upload').setInputFiles('tests/upload/test1.txt')


})

test.only('Multiple Files', async ({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles(['tests/upload/test1.txt' , 'tests/upload/test2.txt'])
    await page.waitForTimeout(3000)
                    
    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('test1.txt')
    expect (await page.locator('#fileList li:nth-child(2)')).toHaveText('test2.txt')
    await page.waitForTimeout(3000)
    
    // removing files
    await page.locator('#filesToUpload').setInputFiles([])
    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')
    

await page.waitForTimeout(3000)
})