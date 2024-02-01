const {test, expect} = require('@playwright/test');

test('Home Page', async ({page}) => {

    await page.goto('https://www.demoblaze.com/index.html');

    const pageTitle = page.title();
    console.log('Page title is :', pageTitle);
    // asdasda

    expect (page).toHaveTitle('STORE');

})