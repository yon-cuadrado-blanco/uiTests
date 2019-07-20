var homePage = require('../pages/HomePage');
var basePage = require('../pages/BasePage');
var registrationPage = require('../pages/RegistrationPage');
var RegisterUsersHelper = require('../helpers/RegisterUsersHelper');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var RegisterUsersHelper = require('../helpers/RegisterUsersHelper');
var registeredUsers = [];
var { Given, Then, When } = require('cucumber');

Given('I navigate to the page {string}', function (url) {
    new basePage().navigateToUrl(url);
});

When('I register users with the data of the excel file', async function () {
    var usersList = await new RegisterUsersHelper().getUserData(browser.params.files.excelFileData);
    
    for(let user of usersList){
        await new homePage().clickOnRegisterButton();
        var result = await new registrationPage().registerUsers(user);
        registeredUsers.push(result);
    }
});

Then('The users are created correctly', function () {
    registeredUsers.every(i => expect(i).to.be.true);
});
  