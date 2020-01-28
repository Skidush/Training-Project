import { element, by, ElementFinder, logging, browser } from 'protractor';

export class SecurityPage {

    static get usernameField(): ElementFinder{
        return element(by.id('username-field'));
    }
    
    static get passwordField(): ElementFinder{
        return element(by.id('password-field'));
    }

    static get loginButton(): ElementFinder{
        return element(by.css('button[label="Login"]'));
    }


    static async login(){
       await this.usernameField.sendKeys('asd');
       await this.passwordField.sendKeys('asd');
       await this.loginButton.click();
    }
}
