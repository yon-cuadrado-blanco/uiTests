'use strict';

class SelectWrapper{
    constructor(element){
        this.webElement = element;
    }

    getOptions(){
        return this.webElement.all(by.tagName('option'));
    }

    getSelectedOptions(){
        return this.webElement.all(by.css('option[selected="selected"]'));
    }

    selectByValue(value){
        return this.webElement.all(by.css('option[value="' + value + '"]')).click();
    }

    selectByPartialText(text){
        return this.webElement.all(by.cssContainingText('option', text)).click();   
    }

    selectByText(text){
        return this.webElement.all(by.xpath('option[.="' + text + '"]')).click(); 
    }
}

module.exports = SelectWrapper;