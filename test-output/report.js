$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://dev.nfm.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_opens_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks on SignInBillPay DropDown",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_clicks_on_sign_in_bill_pay_drop_down()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Sign In / Bill Pay\u0027]\"}\n  (Session info: chrome\u003d103.0.5060.114)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.1\u0027, revision: \u0027e8fcc2cecf\u0027\nSystem info: host: \u0027edt-qa-vm-rs\u0027, ip: \u002710.21.51.36\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bf627b714720024b2e234f397fa9a026, findElement {using\u003dxpath, value\u003d//span[text()\u003d\u0027Sign In / Bill Pay\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\RADHIK~1.SAR\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:1644}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:1644/devtool..., se:cdpVersion: 103.0.5060.114, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bf627b714720024b2e234f397fa9a026\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:367)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy21.click(Unknown Source)\r\n\tat pageObjects.LoginPage.clickSignInBillPay(LoginPage.java:76)\r\n\tat stepDefinitions.Steps.user_clicks_on_sign_in_bill_pay_drop_down(Steps.java:36)\r\n\tat ✽.User Clicks on SignInBillPay DropDown(file:///C:/Users/radhika.sarad/eclipse-workspace/CucumberDemoProject/./Features/Login.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Clicks on Sign In Link",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_clicks_on_sign_in_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters Emails as \"radhika.profile@nfm.com\" and Password as \"Pass#7479\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_enters_emails_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.click_on_sign_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Manage Your Account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.page_title_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on My Account dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_clicks_on_myaccount_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Sign Out",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_clicks_on_sign_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Nebraska Furniture Mart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.page_title_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User opens URL \"https://bdfm-015.sandbox.us01.dx.commercecloud.salesforce.com/s/NFM/home?lang\u003den_US\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Clicks on SignInBillPay DropDown",
  "keyword": "And "
});
formatter.step({
  "name": "User Clicks on Sign In Link",
  "keyword": "And "
});
formatter.step({
  "name": "User enters Emails as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on SignIn button",
  "keyword": "And "
});
formatter.step({
  "name": "Page Title should be \"Manage Your Account\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on My Account dropdown",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Sign Out",
  "keyword": "Then "
});
formatter.step({
  "name": "Page Title should be \"Nebraska Furniture Mart\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "radhika.profile@nfm.com",
        "Pass#7479"
      ]
    },
    {
      "cells": [
        "radhika.sarad@nfm.com",
        "Pass#7479"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://bdfm-015.sandbox.us01.dx.commercecloud.salesforce.com/s/NFM/home?lang\u003den_US\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_opens_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks on SignInBillPay DropDown",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_clicks_on_sign_in_bill_pay_drop_down()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00274.1.1\u0027, revision: \u0027e8fcc2cecf\u0027\nSystem info: host: \u0027edt-qa-vm-rs\u0027, ip: \u002710.21.51.36\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [fba635edeaa69f57c486baebac8f606d, findElement {using\u003dxpath, value\u003d//span[text()\u003d\u0027Sign In / Bill Pay\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\RADHIK~1.SAR\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:1670}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:1670/devtool..., se:cdpVersion: 103.0.5060.114, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fba635edeaa69f57c486baebac8f606d\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:367)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy21.click(Unknown Source)\r\n\tat pageObjects.LoginPage.clickSignInBillPay(LoginPage.java:76)\r\n\tat stepDefinitions.Steps.user_clicks_on_sign_in_bill_pay_drop_down(Steps.java:36)\r\n\tat ✽.User Clicks on SignInBillPay DropDown(file:///C:/Users/radhika.sarad/eclipse-workspace/CucumberDemoProject/./Features/Login.feature:21)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Clicks on Sign In Link",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_clicks_on_sign_in_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters Emails as \"radhika.profile@nfm.com\" and Password as \"Pass#7479\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_enters_emails_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.click_on_sign_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Manage Your Account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.page_title_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on My Account dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_clicks_on_myaccount_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Sign Out",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_clicks_on_sign_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Nebraska Furniture Mart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.page_title_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://bdfm-015.sandbox.us01.dx.commercecloud.salesforce.com/s/NFM/home?lang\u003den_US\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_opens_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks on SignInBillPay DropDown",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_clicks_on_sign_in_bill_pay_drop_down()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00274.1.1\u0027, revision: \u0027e8fcc2cecf\u0027\nSystem info: host: \u0027edt-qa-vm-rs\u0027, ip: \u002710.21.51.36\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [95cac7324e3a9dae20699c590c4cd347, findElement {using\u003dxpath, value\u003d//span[text()\u003d\u0027Sign In / Bill Pay\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\RADHIK~1.SAR\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:1718}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:1718/devtool..., se:cdpVersion: 103.0.5060.114, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 95cac7324e3a9dae20699c590c4cd347\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:367)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy21.click(Unknown Source)\r\n\tat pageObjects.LoginPage.clickSignInBillPay(LoginPage.java:76)\r\n\tat stepDefinitions.Steps.user_clicks_on_sign_in_bill_pay_drop_down(Steps.java:36)\r\n\tat ✽.User Clicks on SignInBillPay DropDown(file:///C:/Users/radhika.sarad/eclipse-workspace/CucumberDemoProject/./Features/Login.feature:21)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Clicks on Sign In Link",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_clicks_on_sign_in_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters Emails as \"radhika.sarad@nfm.com\" and Password as \"Pass#7479\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_enters_emails_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.click_on_sign_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Manage Your Account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.page_title_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on My Account dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_clicks_on_myaccount_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Sign Out",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_clicks_on_sign_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Nebraska Furniture Mart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.page_title_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Unsuccessful Login when email not passed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://bdfm-015.sandbox.us01.dx.commercecloud.salesforce.com/s/NFM/home?lang\u003den_US\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_opens_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks on SignInBillPay DropDown",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_clicks_on_sign_in_bill_pay_drop_down()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00274.1.1\u0027, revision: \u0027e8fcc2cecf\u0027\nSystem info: host: \u0027edt-qa-vm-rs\u0027, ip: \u002710.21.51.36\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c76bcceadbdf3c6269af6d8bd56147a8, findElement {using\u003dxpath, value\u003d//span[text()\u003d\u0027Sign In / Bill Pay\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\RADHIK~1.SAR\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:1750}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:1750/devtool..., se:cdpVersion: 103.0.5060.114, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c76bcceadbdf3c6269af6d8bd56147a8\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:367)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy21.click(Unknown Source)\r\n\tat pageObjects.LoginPage.clickSignInBillPay(LoginPage.java:76)\r\n\tat stepDefinitions.Steps.user_clicks_on_sign_in_bill_pay_drop_down(Steps.java:36)\r\n\tat ✽.User Clicks on SignInBillPay DropDown(file:///C:/Users/radhika.sarad/eclipse-workspace/CucumberDemoProject/./Features/Login.feature:40)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Clicks on Sign In Link",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_clicks_on_sign_in_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters Email as \"radhika.profile@nfm.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_enters_Emails_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.click_on_sign_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Password required error message should be \"This field is required.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.password_required_error_message_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Unsuccessful Login when password not passed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://bdfm-015.sandbox.us01.dx.commercecloud.salesforce.com/s/NFM/home?lang\u003den_US\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_opens_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks on SignInBillPay DropDown",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_clicks_on_sign_in_bill_pay_drop_down()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00274.1.1\u0027, revision: \u0027e8fcc2cecf\u0027\nSystem info: host: \u0027edt-qa-vm-rs\u0027, ip: \u002710.21.51.36\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5575f375a231ade3cf888d41bc2c15d4, findElement {using\u003dxpath, value\u003d//span[text()\u003d\u0027Sign In / Bill Pay\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\RADHIK~1.SAR\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:1777}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:1777/devtool..., se:cdpVersion: 103.0.5060.114, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5575f375a231ade3cf888d41bc2c15d4\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:367)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy21.click(Unknown Source)\r\n\tat pageObjects.LoginPage.clickSignInBillPay(LoginPage.java:76)\r\n\tat stepDefinitions.Steps.user_clicks_on_sign_in_bill_pay_drop_down(Steps.java:36)\r\n\tat ✽.User Clicks on SignInBillPay DropDown(file:///C:/Users/radhika.sarad/eclipse-workspace/CucumberDemoProject/./Features/Login.feature:51)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Clicks on Sign In Link",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_clicks_on_sign_in_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters Password as \"Pass#7479\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.click_on_sign_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Email required error message should be \"Email is Required.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.email_required_error_message_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});