// conf.js
exports.config = {
    framework: 'cucumber',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    params: {
        loginUrl: 'https://www.idealista.com/en/'
    }
};
