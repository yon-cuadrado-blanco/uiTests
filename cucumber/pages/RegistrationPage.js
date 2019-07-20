var User = require('../dtos/User');
var selectWrapper = require('../helpers/SelectWrapper');

class RegistrationPage {
    constructor() {
        browser.waitForAngularEnabled(false);
        this.firstName = element(by.name('firstName'));
        this.lastName = element(by.name('lastName'));
        this.phone = element(by.name('phone'));
        this.userName = element(by.name('userName'));
        this.password = element(by.name('password'));
        this.email = element(by.name('email'));
        this.address1 = element(by.name('address1'));
        this.address2 = element(by.name('address2'));
        this.city = element(by.name('city'));
        this.state = element(by.name('state'));
        this.postalCode = element(by.name('postalCode'));
        this.country = element(by.name('country'));
        this.userName = element(by.name('email'));
        this.userName = element(by.name('email'));
        this.register = element(by.name('register'));
        this.confirmPassword = element(by.name('confirmPassword'));
        this.registerUser = element(by.name('REGISTER'));
        this.userRegisteredCorrectly = element(by.xpath("//*[contains(text(), 'Note: Your user name is')]"));

        this.UsersRegistered = false;
    }

    async registerUsers(client) {
        await this.fillUserDataInApp(client);
        await this.register.click();
        return await this.userRegisteredCorrectly.waitUntilIsEnabled(20);
    }

    async fillUserDataInApp(userData) {
        await this.firstName.sendKeys(userData.FirstName);
        await this.lastName.sendKeys(userData.LastName);
        await this.phone.sendKeys(userData.Phone);
        await this.email.sendKeys(userData.Email);
        await this.address1.sendKeys(userData.Address1);
        await this.address2.sendKeys(userData.Address2);
        await this.city.sendKeys(userData.City);
        await this.state.sendKeys(userData.StateProvince);
        await this.postalCode.sendKeys(userData.PostalCode);
        await new selectWrapper(this.country).selectByText(userData.Country.toUpperCase());
        await this.userName.sendKeys(userData.UserName);
        await this.password.sendKeys(userData.Password);
        await this.confirmPassword.sendKeys(userData.ConfirmPassword);
    }
}

module.exports = RegistrationPage;
