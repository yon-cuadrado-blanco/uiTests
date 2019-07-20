class BasePage {
    constructor() {}

    async navigateToUrl(url, isAngular) {
        if(!isAngular){
            browser.waitForAngularEnabled(false);
        }
        await browser.driver.get(this.getUrl(url));

        browser.waitForAngularEnabled(true);
    }

    getUrl(url) {
        switch (url) {
            case 'RegistrationUsersUrl':
                return browser.params.urls.registerUsers;
            default:
                return null;
        }
    }
}

module.exports = BasePage;
