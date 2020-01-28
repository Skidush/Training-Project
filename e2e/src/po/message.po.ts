import { element, by } from 'protractor';

export class MessagePage {
    static get successMessage() {
        return element(by.id('success-message'));
    }
    // static get successMessageUpdate() {
    //     return element(by.css('span [class="ui-messages-detail ng-tns-c3-2 ng-star-inserted"]'));
    // }
}