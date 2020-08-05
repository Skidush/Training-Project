import { element, by } from 'protractor';

export class dashboard_messageAlert {

    async getSuccessMessage(){
        return element(by.id("success-message")).getText();
    }
}