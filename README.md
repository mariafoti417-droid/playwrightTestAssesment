# Project Structure

## SauceDemo

**Pages Folder:**  
Encapsulates locators and actions following Page Object Model principles

**Helper:**  
Provides reusable functions to interact with multiple pages and flows

**Tests:**  
Contains data-driven test scenarios for different pages  
Assertions are made using Playwright, covering both negative and positive scenarios

## PetApi

**endpoints:**  
Encapsulates API calls related to Pet Actions  
Use Playwright APIContext to send requests

**utils:**  
Payload created the JSON object to be sent in the requests  
apiHelper contains high-level methods that the code calls directly

**tests:**  
Data-driven tests that focus on verifying API behaviour for different endpoints and statuses
