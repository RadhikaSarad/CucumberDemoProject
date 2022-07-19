Feature: Login

@Smoke
Scenario: Successful Login with Valid Credentials
    Given User Launch Chrome browser
    When User opens URL "https://dev.nfm.com/"
    And User Clicks on SignInBillPay DropDown
    And User Clicks on Sign In Link
    And User enters Emails as "radhika.profile@nfm.com" and Password as "Pass#7479"
    And Click on SignIn button
    Then Page Title should be "Manage Your Account"
    When User clicks on My Account dropdown
    Then User clicks on Sign Out
    Then Page Title should be "Nebraska Furniture Mart"
    And Close browser

@Smoke    
Scenario Outline: Login Data Driven
 		Given User Launch Chrome browser
    When User opens URL "https://bdfm-015.sandbox.us01.dx.commercecloud.salesforce.com/s/NFM/home?lang=en_US"
    And User Clicks on SignInBillPay DropDown
 		And User Clicks on Sign In Link
    And User enters Emails as "<email>" and Password as "<password>"
    And Click on SignIn button
    Then Page Title should be "Manage Your Account"
    When User clicks on My Account dropdown
    Then User clicks on Sign Out
    Then Page Title should be "Nebraska Furniture Mart"
    And Close browser
    
    Examples:
			|	email	|	password	|
			|	radhika.profile@nfm.com	|	Pass#7479	|
			|	radhika.sarad@nfm.com	|	Pass#7479	|
			
@Smoke		
Scenario: Unsuccessful Login when email not passed
    Given User Launch Chrome browser
    When User opens URL "https://bdfm-015.sandbox.us01.dx.commercecloud.salesforce.com/s/NFM/home?lang=en_US"
    And User Clicks on SignInBillPay DropDown
    And User Clicks on Sign In Link
    And User enters Email as "radhika.profile@nfm.com" 
    And Click on SignIn button
    Then Password required error message should be "This field is required."
    And Close browser   
    
@Smoke
Scenario: Unsuccessful Login when password not passed
    Given User Launch Chrome browser
    When User opens URL "https://bdfm-015.sandbox.us01.dx.commercecloud.salesforce.com/s/NFM/home?lang=en_US"
    And User Clicks on SignInBillPay DropDown
    And User Clicks on Sign In Link
    And User enters Password as "Pass#7479" 
		And Click on SignIn button
    Then Email required error message should be "Email is Required."
    And Close browser