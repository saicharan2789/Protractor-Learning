package sample;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class SpiceJet_DropDown {

	public static void main(String[] args) throws Exception {
		
		WebDriver driver=new FirefoxDriver();
                 // Launch Firefox Driver
		driver.get("http://www.spicejet.com/");
                   //Launch spicejet website in firefox browser
		driver.manage().window().maximize();
 
		     //Maximize the window
		
		driver.findElement(By.id("ctl00_mainContent_rbtnl_Trip_0")).click();
                      //select one way journey
		
	driver.findElement(By.id("ctl00_mainContent_ddl_originStation1_CTXTaction")).click();
		
		//select hyd as a orgin
		driver.findElement(By.linkText("Hyderabad (HYD)")).click();
		
		//Making sleep to 2000 ms
		Thread.sleep(2000);
		
		
		//Selecting Bang as a destination
		driver.findElement(By.linkText("Bengaluru (BLR)")).click();
		Thread.sleep(2000);
		
               // searching with date '30' and click on it
		driver.findElement(By.linkText("30")).click();
		Thread.sleep(2000);
		
                 
		
		driver.findElement(By.id("ctl00_mainContent_ddl_Adult")).sendKeys("5");
		Thread.sleep(2000);
		
		
		
		new Select(driver.findElement(By.id("ctl00_mainContent_ddl_Child"))).selectByVisibleText("3");;
		Thread.sleep(2000);
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

	}

}
