describe('Protractor sign into test ',function(){
    it('Login Verification with valid credentials',function(){
    browser.get('http://demo.automationtesting.in/Register.html');
    
    browser.sleep(20000).then(function()
    {
        console.log('Hai!!I am doing well');
        let input = element(by.model('FirstName'));
input.sendKeys('123');
let lastname = element(by.model('LastName'));
input.sendKeys('123');
let address = element(by.model('Adress'));
input.sendKeys('Brighton grove');
let Email = element(by.model('EmailAdress'));
input.sendKeys('chakisai11@gmail.com');



});
        
        
    });
    
    });
    