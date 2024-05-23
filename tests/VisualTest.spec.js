const { test, expect } = require('@playwright/test')


test.only('visual',async({page})=>
    {
        await page.goto("https://www.rediff.com/")
        expect(await page.screenshot()).toMatchSnapshot('tests/screenshots/landing.png')
    })