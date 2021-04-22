package sample;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Links_Urls {

	public static void main(String[] args) {
	
		WebDriver driver=new FirefoxDriver();
		
		//driver.get("http://demo.guru99.com/test/newtours//");
		
		
		driver.get("http://google.com/");
		
		driver.manage().window().maximize();
		
		List<WebElement> lks=driver.findElements(By.tagName("x"));
		System.out.println(lks.size());
		
		for (int i = 0; i < lks.size(); i++)
		{
			// if link text is not empty ( Visible)
			if (  ! lks.get(i).getText().isEmpty())
			{
				lks.get(i).click();
				
				System.out.println(driver.getCurrentUrl());
				
				driver.navigate().back();
				lks=driver.findElements(By.tagName("x"));
			}
			else
			{
				System.out.println(i+"------- not visible");
			}
			
			
			
		}
		

	}

}






