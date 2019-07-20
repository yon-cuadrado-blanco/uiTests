class HomePage {
    constructor() {
        this.password = element(by.xpath("//form[@id='load_form'][@class='ajaxlogin']//input[@name='password']"));
        this.userName = element(by.xpath("//form[@id='load_form'][@class='ajaxlogin']//input[@name='username']"));
        this.singnOn = element(by.linkText('SIGN-ON'));
        this.register = element(by.linkText('REGISTER'));
        this.textField = element(by.xpath(".//*[contains(text(),'Registered')]/.."));
    }

    enterUserName(userNameValue) {
        this.userName.SendKeys(userNameValue);
    }

    enterPassword(passwordValue) {
        this.password.SendKeys(passwordValue);
    }
    
    async clickOnRegisterButton() {
        browser.waitForAngularEnabled(false);
        await this.register.HoverAndClick();
        browser.waitForAngularEnabled(true);
    }

    checkUserCorrectlyLogged() {
        this.userName.WaitUntilCheckIsEnabled(false, 10);
    }

    getElementLineNumbers() {
        return this.textField.GetWebElementLineNumbers();
    }
}

module.exports = HomePage;
