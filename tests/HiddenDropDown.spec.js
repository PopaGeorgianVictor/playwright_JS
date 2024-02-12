import {test, expect} from '@playwright/test'


test('hidden option dropdowns' , async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')



    await page.waitForTimeout(5000)

})