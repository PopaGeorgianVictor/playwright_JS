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
npx playwright test MyTest.psec.js --project=chromium --headed
```

```py
npx playwright test MyTest.spec.js --project=chromium --headed --debug
```

### Locating Elements in Playwright

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








