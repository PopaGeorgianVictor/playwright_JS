# 🎭 [Playwright](https://playwright.dev) for JS
## Documentation

[https://playwright.dev/docs/intro](https://playwright.dev/docs/intro)



## How to Create and Run Playwrite Tests


### Runs all tests on all browsers in headless mode 

```py
npx playwright test
```

### Runs a specific test file

```py
npx playwright test MyTest.spec.js 
```

### Runs on specific browser

```py
npx playwright test MyTest.spec.js --project=chromium
```

```py
npx playwright test MyTest.spec.js --project=chromium --headed
```

```py
npx playwright test MyTest.spec.js --project=chromium --headed --debug
```

### Locating Elements in Playwright

<img src="https://i.postimg.cc/wTFt0sS2/Screenshot-1.png">

#### Locate single element


##### link/button

```py
await page. locator('locator').click() await page.click('locator')
```
##### inputbox

```py
await page. locator('locator').fill('value') await page. locator('locator').type('value')
await page.fill('locator', 'value') await page.type('locator', 'value')
```

#### Locate multiple web elements

```py
const elements=await page.$$(locator)
```


## Built-in in locators

```py

page.getByRole() to locate by explicit and implicit accessibility attributes.

```
```py
page.getByText() to locate by text content.
```
```py
page.getByLabel() to locate a form control by associated label's text.
```
```py
page.getByPlaceholder() to locate an input by placeholder.
```
```py
page.getByAltText() to locate an element, usually image, by its text alternative.
```
```py
page.getByTitle() to locate an element by its title attribute.
```
```py
page.getByTestId() to locate an element based on its data-testid attribute

```


## Create test using code generator

```py

npx playwright codegen

```

```py

npx playwright codegen --help
```


<img src="https://i.postimg.cc/nrrqGxbr/asda.png">



## Assertions


```py
 expect(page).toHaveURL()  Page has URL
```

```py
 expect(page).toHaveTitle()  Page has title
```

```py
 expect(locator).toBeVisible() Element is visible
```

```py
 expect(locator).toBeEnabled()  Control is enabled 
```


```py
 expect (locator).toBeDisabled()  Element is disabled
```


```py
 expect(locator).toBeChecked()  Radio/Checkbox is checked
```


```py
 expect(locator).toHaveAttribute() Element has attribute
```

```py
 expect(locator).toHaveText() Element matches text
```

```py
 expect(locator).toContainText() Element contains text
```

```py
 expect(locator).toHaveValue(value) Input has a value
```

```py
 expect(locator).toHaveCount() List of elements has given length
```


## Hooks

```py
 beforeEach: This hook is executed before each individual test
 afterEach: This hook is executed after each individual test
```
```py
 beforeAll: This hook is executed once before any of the tests start running
 afterAll: This hook is executed once after all the tests have been run
```

<img src="https://i.postimg.cc/RFSHZdkq/Untitled.png">


## POM

<img src="https://i.postimg.cc/zBGxTgr2/as.png">


## Allure Reports

```py
1) Installation of "allure-playwright" module
npm i -D @playwright/test allure-playwright
```
```py
2) Installing Allure command line
Ref:
https://www.npmjs.com/package/allure-commandline
npm install -g allure-commandline --save-dev
(or)
sudo npm install -g allure-commandline --save-dev
```
```py
3) playwright.config.js
reporter= ['allure-playwright', {outputFolder: 'my-allure-results'}] (or)
npx playwright test --reporter-allure-playwright
```
```py
4) Run the tests
npx playwright test tests/Reporters.spec.js
```
```py
5) Generate Allure Report:
allure generate my-allure-results-o allure-report --clean
```
```py
6) Open Allure Report:
allure open allure-report
```

