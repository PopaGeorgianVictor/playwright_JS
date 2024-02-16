import {test, expect} from '@playwright/test'


test('inner frames' , async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3 = await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.fill("[name='mytext3']", 'Hello')


   //nested frames
   const childFrames = await frame3.childFrames()
   await childFrames[0].getByLabel('I am a human').check()


   await page.waitForTimeout(3000)

})


