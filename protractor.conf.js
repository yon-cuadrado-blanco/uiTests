exports.config = {
    capabilities: {

        // ignoreSynchronization: true,

        browserName: 'chrome',
        chromeOptions: { args: [
            'start-maximized'
            // 'verbose',
            // 'Dwebdriver.chrome.logfile=/home/demian/Documents/chromedriver.log' 
        ]
        },
        loggingPrefs: {
            driver: 'ALL',
            server: 'ALL',
            browser: 'ALL'
        },
        /**
       * If this is set to be true, specs will be sharded by file (i.e. all
       * files to be run by this set of capabilities will run in parallel).
       * Default is false.
       */
        shardTestFiles: true
    },
    /**
     * The timeout in milliseconds for each script run on the browser. This
     * should be longer than the maximum time your application needs to
     * stabilize between tasks.
     */
    allScriptsTimeout: 10000,
    getPageTimeout: 10000,
    baseUrl: 'https://angularjs.org',
    framework: 'custom', // set to "custom" instead of cucumber.
    frameworkPath: require.resolve('protractor-cucumber-framework'), // path relative to the current config file

    // setting protractor to ignore uncaught exceptions to take care by protractor-cucumber-framework
    ignoreUncaughtExceptions: true,

    specs: [
        './cucumber/features/*.feature' // Specs here are the cucumber feature files
    ],
    restartBrowserBetweenTests: true,
    // cucumber command line options
    cucumberOpts: {
        require: [
            './cucumber/step_definitions/*.js',
            './cucumber/hooks/Hooks.js'
        ], // require step definition files before executing features
        tags: [], // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        strict: true, // <boolean> fail if there are any undefined or pending steps
        'dry-run': false, // <boolean> invoke formatters without executing steps
        format: 'json:results.json',
        compiler: [] // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    },
    /**
     * A callback function called once protractor is ready and available, and
     * before the specs are executed. If multiple capabilities are being run,
     * this will run once per capability.
     *
     * You can specify a file containing code to run by setting onPrepare to
     * the filename string. onPrepare can optionally return a promise, which
     * Protractor will wait for before continuing execution. This can be used if
     * the preparation involves any asynchronous calls, e.g. interacting with
     * the browser. Otherwise Protractor cannot guarantee order of execution
     * and may start the tests before preparation finishes.
     *
     * At this point, global variable 'protractor' object will be set up, and
     * globals from the test framework will be available. For example, if you
     * are using Jasmine, you can add a reporter with:
     *
     *    jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
     *      'outputdir/', true, true));
     *
     * If you need access back to the current configuration object,
     * use a pattern like the following:
     *
     *    return browser.getProcessedConfig().then(function(config) {
     *      // config.capabilities is the CURRENT capability being run, if
     *      // you are using multiCapabilities.
     *      console.log('Executing capability', config.capabilities);
     *    });
     */
    onPrepare: function () {
        const { Given, Then, When, Before } = require('cucumber');
        global.Given = Given;
        global.When = When;
        global.Then = Then;
        global.Before = Before;
        Object.defineProperty(protractor.ElementFinder.prototype, "Hover", {
            value: async function Hover() {
                // await browser.actions().press().release().perform();
                this.click();
            },
            writable: true,
            configurable: true
        });
    },
    params: {
        urls:{
            loginUrl: 'https://www.idealista.com/en/',
            registerUsers: 'http://newtours.demoaut.com/index.php'
        },
        excel:{
                excelColumns:{
                    UsersDataSheetUserNameColumn: 'A',
                    UserDataSheetUserPasswordColumn: 'B',
                    UserDataSheetFirstNameColumn: 'C',
                    UserDataSheetLastNameColumn: 'D',
                    UserDataSheetPhoneColumn: 'E',
                    UserDataSheetEmailColumn: 'F',
                    UserDataSheetAddress1Column: 'G',
                    UserDataSheetAddress2Column:'H',
                    UserDataSheetCityColumn:'I',
                    UserDataSheetStateProvince:'J',
                    UserDataSheetPostalCode:'K',
                    UserDataSheetCountry:'L',
                    UserDataSheetName:'UsersData'
                },
                excelSheet: 'UsersData'
            },
        files:{
            excelFileData: 'cucumber/testData/TestData.xlsx'
        },
    },
    resultJsonOutputFile: "executionResults.json",
    logLevel: 'DEBUG'
};
