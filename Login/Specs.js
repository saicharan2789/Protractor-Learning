describe('Protractor sign into test ',function(){
var user=browser.findElement(by.id('mat-input-3'));
var password=browser.findElement(by.id('mat-input-4'));
it('Login Verification with valid credentials',function(){
browser.get('http://localhost:4200/login');
browser.driver.sleep(2000);
user.sendKeys('admin');
password.sendKeys('admin123');browser.driver.findElement(by.xpath('/html/body/app-root/div/app-login/mat-grid-list/div/mat-grid-tile[2]/figure/form/mat-card/mat-card-content/mat-form-field[1]/div/div[1]/div')).Click();
expect(browser.getCurrentUrl()).not.toEqual('http://localhost:4200/login');
});

it('Login Verification with invalid password',function(){
browser.get('http://localhost:4200/login');
user.sendKeys('admin');
password.sendKeys('admin1234');
browser.driver.findElement(by.xpath('/html/body/app-root/div/app-login/mat-grid-list/div/mat-grid-tile[2]/figure/form/mat-card/mat-card-content/mat-form-field[1]/div/div[1]/div')).Click();
expect(error.getText()).toMatch('Invalid Password');
});

it('Login Verification with invalid username',function(){
browser.get('http://localhost:4200/login');
user.sendKeys('admin1');
password.sendKeys('admin123');
browser.driver.findElement(by.xpath('/html/body/app-root/div/app-login/mat-grid-list/div/mat-grid-tile[2]/figure/form/mat-card/mat-card-content/mat-form-field[1]/div/div[1]/div')).Click();
expect(error.getText()).toMatch('Invalid Username');
});
});