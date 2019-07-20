
class LoginPage{
    constructor(){
        this.loginButton = element(by.className('icon-user-no-logged'));
        this. mailField = element(by.className('js-email-field'));
        this.passwordField = element(by.className('js-password-field'));
    }

    clickOnLoginButton (){
        this.loginButton.click();
    }

    setMail(mail){
        this.mailField.sendKeys(mail);
    }

    setPassword(password){
        passwordField.sendKeys(password);
    }
}

module.exports = LoginPage ;