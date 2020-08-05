import { by, element, browser } from 'protractor'

export class securityPage {
    // elements within the page
    // action that you could do to/within the page
    // get properties of the page

    private url = "http://localhost:4200/login"
    private componentName = "app-login";

    getURL(){
        return this.url;
    }

    get loginHeader(){
        return element(by.css(`${this.componentName} span[class='ui-panel-title ng-tns-c2-6 ng-star-inserted']`));
    }

    get userNameField(){
        //Template Literals ``
        return element(by.css(`${this.componentName} input[id='username-field']`)); //String interpolation
    }

    get passwordField(){
        return element(by.css(`${this.componentName} input[id='password-field']`));
    }

    get logInButton(){
        return element(by.css(`${this.componentName} button[label='Login']`));
    }

    async navigate(){
        await browser.get(this.url);
    }

    async login(role: string = "Employee"){
        const userCredentials = browser.params.users[role];

        // input username and password then click button
        await this.userNameField.sendKeys(userCredentials.username);
        await this.passwordField.sendKeys(userCredentials.password);
        await this.logInButton.click();
    }
}