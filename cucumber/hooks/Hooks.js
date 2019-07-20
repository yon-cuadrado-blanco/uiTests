const {BeforeAll} = require('cucumber');
var {setDefaultTimeout} = require('cucumber');
var extensionsHelper = require('../helpers/ExtensionsHelper');

BeforeAll(async function (scenario, callback) {
    new extensionsHelper().initializeExtensions();
    browser.waitForAngularEnabled(false);
    setDefaultTimeout(30000);
});
