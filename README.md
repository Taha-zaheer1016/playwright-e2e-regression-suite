# playwright-e2e-regression-suite
Practice Playwright E2E automation project covering full user flows

This project is an end-to-end automation test suite built with Playwright to validate core user journeys on a dummy eCommerce web application.
It was developed as part of ongoing test automation practice to strengthen proficiency in Playwright, JavaScript, and CI/CD-oriented QA design.

## Purpose
A Playwright regression suite designed to demonstrate:
- End-to-end automation coverage of real world flows
- Modular and maintainable test structure
- Global authentication setup for session reuse

## Automated Scenarios
- User authentication (via global setup and storage state)
- Product addition to cart
- Checkout and order placement
- Order verification in "My Orders"

## Reusable Components
- **helpers.js** — shared test functions (e.g., add to cart)  
- **constants.js** — centralized test data and credentials  
- **Global setup** — handles session generation for all tests

## Tech Stack
- Framework: Playwright  
- Language: JavaScript (Node.js)  
- Reporter: Playwright HTML Reporter  

## Role & Skills Demonstrated
Individually developed to practice and showcase:
- End-to-end test design using Playwright  
- Reusable architecture through helpers, constants, and fixtures  
- Global authentication setup for session-based testing  
- Best practices in test modularity, maintainability, and structure
