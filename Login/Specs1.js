describe('Protractor sign into test ',function(){
it('Login Verification with valid credentials',function(){
browser.get('http://localhost:4200/');

browser.sleep(20000).then(function()
{
    console.log('Hai!!I am doing well');
    browser.sleep(2000).then(function()
    {
        browser.findElement(by.id('mat-input-0')).sendKeys('admin');
        browser.findElement(by.id('mat-input-1')).sendKeys('admin123');
        browser.sleep(2000);

        browser.findElement(by.buttonText('Login')).click().then(function()
        {
expect(browser.getCurrentUrl()).not.toEqual('http://localhost:4200/login');
        });
        });
    
}
);

});
it('Login Verification with invalid password',function(){
    browser.get('http://localhost:4200/');
    
    browser.sleep(20000).then(function()
    {
        console.log('Hai!!I am doing well');
        browser.sleep(2000).then(function()
        {
            browser.findElement(by.id('mat-input-0')).sendKeys('admins');
            browser.findElement(by.id('mat-input-1')).sendKeys('admin123');
            browser.sleep(2000);
    
            browser.findElement(by.buttonText('Login')).click().then(function()
            {
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/login');
            });
            });
        
    }
    );
    
    });

    it('Login Verification with invalid password',function(){
        browser.get('http://localhost:4200/');
        
        browser.sleep(20000).then(function()
        {
            console.log('Hai!!I am doing well');
            browser.sleep(2000).then(function()
            {
                browser.findElement(by.id('mat-input-0')).sendKeys('admin');
                browser.findElement(by.id('mat-input-1')).sendKeys('admin1234');
                browser.sleep(2000);
        
                browser.findElement(by.buttonText('Login')).click().then(function()
                {
        expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/login');
                });
                });
            
        }
        );
        
        });

});

