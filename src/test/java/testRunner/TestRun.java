package testRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.*;

@RunWith(Cucumber.class)
@CucumberOptions
				(
				 features = ".//Features/Login.feature",
				 glue="stepDefinitions",
				 dryRun = false,
				 monochrome = true,
				 plugin={"pretty", "html:test-output"},
				 tags = {"@Smoke"}
				)

public class TestRun {

}
