# Yarn
I have used Yarn as the package manager. It is recommended to install Yarn through the npm package manager. 

```bash
npm install --global yarn
```

# Playwright

Playwright enables reliable end-to-end testing for modern web apps.

## Installation

Playwright has its own test runner for end-to-end tests, they call it Playwright Test.

```bash
yarn install
```


## Install Playwright and Browser Binaries

```bash
yarn add playwright
yarn add @playwright/test
```

## Running API Tests

Run your tests with the assumption that all test files are in the `tests` directory. Below command will run api tests. 

```bash
yarn run test:api 
```

## Running Browser Tests

Run your tests with the assumption that all test files are in the `tests` directory. Below command will run tests in headless mode in browsers specified on the `playwright.config.ts` file. Currently I have specified to run the tests on `chromium` and `firefox` browsers. 

```bash
yarn run test:browser 
```

To run test in headed browser:

```bash
yarn run playwright test:browser --headed
```

## Environment Variables

.env file holds the data required to run the tests locally if used In this case I have not made use of any env variables to the fact that this is just an assessment task and would also involve extra setup for users running these tests. 


## Reports
Currently repository have the html reporter type configured for the tests. Once the tests are complete, reports are stored on `playwright-report` folder. Reports can be viewed with the command below: 
```bash
yarn run playwright show-report
```

## Test Code Structure

### Pages 
Page includs the locators and actions around the particular page. 

### Helpers
Helpers include the common codes that could be used at multiple places in the tests. 

### Data
Test Data includes the data that can be used as the data properties that can be used within the tests and if needed to modify for different tests. 

### Test Specs
Each test specs are named with their appropriate naming postfixed by .playwright.spec.ts. 

## GITHUB AND ACTIONS
Assessment code has been committed to following public repository. 
https://github.com/rkunwar/ubank-assessment

GITHUB Actions Pipeline has been setup with two different steps one for API Tests and 1 for browser tests to keep the tests separation. 
https://github.com/rkunwar/ubank-assessment/actions

Artifacts including the test results and verification screenshots have been stored after the successful pipeline runs. 





