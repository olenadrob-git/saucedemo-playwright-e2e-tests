#  Playwright E2E Tests – SauceDemo

Automated end-to-end testing project for the SauceDemo application using Playwright and TypeScript.

---

##  Project Overview

This project demonstrates:

* End-to-end UI test automation
* Page Object Model (POM) architecture
* Multi-user testing
* Authentication via storageState
* Sorting validation logic
* CI-ready structure

Tested application: https://www.saucedemo.com/

---

##  Tech Stack

* Playwright
* TypeScript
* Node.js
* GitHub Actions (optional)

---

##  Project Structure

```
project/
│
├── tests/
│   ├── auth.setup.ts
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   └── sorting.spec.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── utils/
│   └── testData.ts
│
├── storage-standard_user.json
├── storage-problem_user.json
│
├── playwright.config.ts
└── package.json
```

---

##  Authentication Strategy

This project uses **storageState** for authentication:

* Users are logged in once in `auth.setup.ts`
* Session state is saved to JSON files
* Tests reuse authenticated sessions

### Benefits:

* Faster test execution
* No repeated login steps
* Cleaner test code

---

## 👥 Test Users

Defined in `utils/testData.ts`:

* standard_user
* problem_user

Each user runs the full test suite independently via Playwright projects.

---

##  Test Coverage

###  Login

* Valid login
* Invalid login

###  Cart

* Add item to cart
* Remove item

###  Checkout

* Full purchase flow validation

###  Sorting

* Price: low → high
* Price: high → low
* Name: A → Z
* Name: Z → A

Sorting is validated by comparing UI data with a sorted copy of the same dataset.

---

##  How to Run Tests

### 1. Install dependencies

```
npm install
```

### 2. Generate authentication state

```
npx playwright test --project=setup

```

### 3. Run all tests

```
npx playwright test
```
or (fot visual runner)
```
npx playwright test --ui
```
---

##  Parallel Execution

Tests run in parallel across multiple users using Playwright projects.

---

##  Test Artifacts

Configured in Playwright:

* Screenshots on failure
* Video recording on failure

---

##  Key Features

* Reusable Page Object Model
* Data-driven testing
* Multi-user execution
* Clean and maintainable structure
* Real-world automation patterns

---

##  Notes

* Do not mix `storageState` with fixtures for authentication
* Remove storage files if session becomes invalid

```
del storage-*.json
```

---

##  Future Improvements

* API testing with Playwright request
* Allure reporting
* Docker setup
* Environment configuration (dev/stage)

---

##  Author

Olena Drobysheva

---

