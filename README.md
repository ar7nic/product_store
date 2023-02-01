## e2e documentation

# Tools used

- Node (JavaScript runner): https://nodejs.org/en/about/
- Yarn (Package Manager equivalent to NPM): https://classic.yarnpkg.com/en/
- Playwright JS (Playwright is a framework for Web Testing and Automation): https://playwright.dev/
- Chai (Assertion Library): https://www.chaijs.com/
- Allure-Playwright (Test reporter): https://docs.qameta.io/allure/

# Getting started

Make sure the NodeJS is installed on your computer
```
node --version
```
Make sure the Yarn is installed on your computer
```
yarn --version
```
Make sure the JDK version 8 or higher is installed on your computer
```
java --version
```
Install the dependencies
```
yarn install
```
To run tests use: 
```
yarn test:reporter
```
All tests results with screenshots and trace of failures save to `product_store\allure-results`

To open report in browser use:
```
yarn allure-report
```


# Architecture

- product_store/core
    - `/api` : Includes API requests to login the site and add items to cart
    - `/asserts` : Includes matchers methods which was used in tests (like _expect(ActualValue).to.be.toEqual(ExpValue)_ )
    - `/assistants` : Includes helper methods which was used in tests (collect few steps from pages to single abstract step)
    - `/const` : Includes constants which was used in tests
    - `/models` : Includes objects which was used in tests (like User)
    - `/pages` : Includes _locators/selectors_ to find elements on HTML pages
- product_store
    - `/tests/*` : E2E tests
- product_store/utils
    - `/element` : Wrapper class for HTML element (includes all methods to work with HTML element)
    - `/engine` : Wrapper class for browser object (includes all methods to work with browser like `waitForTimeout, waitForLoadState`)
    - `/misc` : Includes methods to get random values
    - `/reporter` : Wrapper class for HTML reporter
