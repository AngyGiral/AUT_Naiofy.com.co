package Naiofy.com.co.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
	features = {"src/test/resources/feactures"},
	glue = {"Naiofy.com.co.stepdefinition"},
	tags= { "@login"},
	snippets =SnippetType.CAMELCASE,
	
plugin= {"pretty","html:results/InformeResultadoslogin.html"},
monochrome=true)
public class LoguinRuner {

}

