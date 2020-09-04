import { ElementFinder, element, by, Button} from 'protractor';

export class SecurityPageObject {
    static get usernamefield(): ElementFinder {
        return element (by.id('username-field'));
    }

    static get passwordfield(): ElementFinder {
        return element (by.id('password-field'));

    }
    static get loginbutton(): ElementFinder {
        return element (by.css('button[label="Login"]'));
    }
    static async login() {
        await SecurityPageObject.usernamefield.sendKeys('asd');
        await SecurityPageObject.passwordfield.sendKeys('asd');
        await SecurityPageObject.loginbutton.click();
    }
}
