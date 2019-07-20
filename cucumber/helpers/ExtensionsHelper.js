// import { element, browser } from "protractor";

class ExtensionsHelper{
    constructor(){
   
    }

    initializeExtensions(){
        Object.defineProperty(protractor.ElementFinder.prototype, "HoverAndClick", {
            value: async function HoverAndClick() {
                await browser.actions().mouseMove(this).click().perform();
            },
            writable: true,
            configurable: true
        });

        Object.defineProperty(protractor.ElementFinder.prototype, "waitUntilIsEnabled", {
            value: async function waitUntilIsEnabled(timeout = 6000) {
                var EC = protractor.ExpectedConditions;
                return browser.wait(EC.visibilityOf(this), timeout);
            },
            writable: true,
            configurable: true
        });
    }
}

module.exports = ExtensionsHelper;
