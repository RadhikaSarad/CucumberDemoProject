Feature: Guest Create Order

@Smoke
Scenario: Simple order creation with guest user
    Given User Launch Chrome browser
    When User opens URL "https://bdfm-015.sandbox.us01.dx.commercecloud.salesforce.com/s/NFM/home?lang=en_US"
    And User Clicks on SignInBillPay DropDown
    And User Clicks on Sign In Link
    And User enters Emails as "radhika.profile@nfm.com" and Password as "Pass#7479"
    And Click on SignIn button
    Then Page Title should be "Manage Your Account"
    When User clicks on My Account dropdown
    Then User clicks on Sign Out
    Then Page Title should be "Nebraska Furniture Mart"
    And Close browser

