import { element, by } from 'protractor';

export class MessagePage{
    static get successMessage() {
        return element(by.id('success-message'));
    }

    static get successUpdateMessage(){
        return element(by.id('success-message'));
    }
}