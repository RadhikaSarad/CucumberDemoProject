package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.*;

import java.time.Duration;

import org.apache.tools.ant.filters.TokenFilter.ContainsString;
import org.junit.*;
import pageObjects.LoginPage;

public class Steps {

	public WebDriver driver;
	public LoginPage lp;
	
	@Given("User Launch Chrome browser")
	public void user_launch_chrome_browser() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//Drivers/chromedriver.exe");
	    driver = new ChromeDriver();
		lp = new LoginPage(driver);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	}

	@When("User opens URL {string}")
	public void user_opens_url(String url) {
		 driver.get(url);
	}

	@When("User Clicks on SignInBillPay DropDown")
	public void user_clicks_on_sign_in_bill_pay_drop_down() throws InterruptedException {
	    lp.clickSignInBillPay();
	    Thread.sleep(5000);
	}

	@When("User Clicks on Sign In Link")
	public void user_clicks_on_sign_in_link() {
		lp.clickSignInLink();
	}
	@When("User enters Emails as {string} and Password as {string}")
	public void user_enters_emails_as_and_password_as(String email, String password){
	   lp.setUserName(email);
	   lp.setPassword(password);
	}

	@When("Click on SignIn button")
	public void click_on_sign_in() throws InterruptedException {
	    lp.clickSignInButton();	
	    Thread.sleep(10000);
	}

	@Then("Page Title should be {string}")
	public void page_title_should_be(String title) {
	   String tit = driver.getTitle();
	   System.out.println("Title is"+tit);
	   Assert.assertTrue(tit.contains(title));
	}

	@When("User clicks on My Account dropdown")
	public void user_clicks_on_myaccount_dropdown() {
	    lp.clickMyAccountDropDown();
	}
	
	@Then("User clicks on Sign Out")
	public void user_clicks_on_sign_out() throws InterruptedException {
	    lp.clickSignOutLink();
	    Thread.sleep(10000);
	}
	
	@When("User enters Email as {string}")
	public void user_enters_Emails_as(String email) {
	    lp.setUserName(email);
	}

	@Then("Password required error message should be {string}")
	public void password_required_error_message_should_be(String passErrorMsg) throws InterruptedException {
		Assert.assertTrue(lp.getPasswordErrorMsg().contains(passErrorMsg));
		//System.out.println("==========" +lp.getEmailErrorMsg());
	}

	@When("User enters Password as {string}")
	public void user_enters_password_as(String password) {
	    lp.setPassword(password);
	}
	
	@Then("Email required error message should be {string}")
	public void email_required_error_message_should_be(String emailErrorMsg) {
		System.out.println("==========" +lp.getEmailErrorMsg());
		Assert.assertTrue(lp.getEmailErrorMsg().contains(emailErrorMsg));
	}

	
	
	@Then("Close browser")
	public void close_browser() {
	    driver.quit();
	}
}
