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

## Smoke Test

I recommend the Smoke test to be run on every commit to release or main branch since it provides the first gateway as the quality assurance since we want to know the breakage of critical functionality of the application as early as possible in development lifecycle. 

## Reports
Currently repository have the html reporter type configured for the tests. Once the tests are complete, reports are stored on `playwright-report` folder. Reports can be viewed with the command below: 
```bash
yarn run playwright show-report
```

## Test Code Structure

### Helpers
Helpers include the common codes that could be used at multiple places in the tests. 

### Data
Test Data includes the data that can be used as the data properties that can be used within the tests and if needed to modify for different tests. 

### Test Specs
Each test specs are named with their appropriate naming postfixed by .playwright.spec.ts. 

## GITHUB AND ACTIONS
Assessment code has been committed to following public repository. 
https://github.com/rkunwar/annalise-assessment





