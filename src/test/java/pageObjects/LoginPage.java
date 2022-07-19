package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage 
{
	public WebDriver driver;
	
	public LoginPage(WebDriver rdriver)
	{
		driver=rdriver;
		PageFactory.initElements(rdriver, this);
	}

	@FindBy(id="login-form-email")
	@CacheLookup
	WebElement txtEmail;
	
	@FindBy(id="login-form-password")
	@CacheLookup
	WebElement txtPassword;
	
	@FindBy(xpath="//span[text()='Sign In / Bill Pay']")
	@CacheLookup
	WebElement signInBillPayDropDown;
	
	@FindBy(xpath="//a[@class='login-link' and contains(@aria-label, 'Sign In')]")
	@CacheLookup
	WebElement lnkSignIn;
	
	
	@FindBy(xpath="//button[text()='Sign In']")
	@CacheLookup
	WebElement btnSignIn;
	
	
	@FindBy(xpath="//h1[contains(text(), 'Dashboard')]")
	@CacheLookup
	WebElement lblDashboard;
	
	
	@FindBy(linkText = "Sign Out")
	@CacheLookup
	WebElement lnkSignOut;
	
	@FindBy(xpath="//span[@class='user-message' and contains(text(), 'My Account')]")
	@CacheLookup
	WebElement myAccountDropDown;
	
	@FindBy(xpath="//*[@id='login-form-password-error']")
	@CacheLookup
	WebElement passRequiredFieldMsg;
	
	@FindBy(xpath="//*[@id='login-form-email-error']")  
	@CacheLookup
	public WebElement emailFieldErrorMsg;
	
	public void setUserName(String uname)
	{
		txtEmail.clear();
		txtEmail.sendKeys(uname);
	}
	
	public void setPassword(String password)
	{
		txtPassword.clear();
		txtPassword.sendKeys(password);
	}
	
	public void clickSignInBillPay()
	{
		signInBillPayDropDown.click();
	}
	
	public void clickSignInLink()
	{
		lnkSignIn.click();
	}
	
	public void clickSignInButton()
	{
		btnSignIn.click();
	}
	
	public void clickMyAccountDropDown()
	{
		myAccountDropDown.click();
	}
	
	public void clickSignOutLink()
	{
		lnkSignOut.click();
	}
	
	public String getEmailErrorMsg()
	{
		return emailFieldErrorMsg.getText();
	}
	
	public String getPasswordErrorMsg()
	{
		return passRequiredFieldMsg.getText();
	}
}
