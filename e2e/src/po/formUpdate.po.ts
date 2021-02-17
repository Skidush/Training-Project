import { element, by, browser } from 'protractor';
export class Updateform {
    static get form() {
        return element(by.tagName('form'));
    }
    static getFormControlElement(formContolName: string){
        return element(by.css(`[formcontrolname=${formContolName}]`));
    }
    static get updateButton() {
        return element(by.buttonText('Update'))
    }

    static async fillForm2() {
        await this.getFormControlElement('firstName').sendKeys('Ching');
        await this.getFormControlElement('lastName').sendKeys('Chong');
        await this.getFormControlElement('country').sendKeys('Wuhan, China');
        await this.getFormControlElement('nationality').sendKeys('Chinese');
        await this.getFormControlElement('company').sendKeys('Pongkwayla');
        await this.getFormControlElement('designation').sendKeys('Earth');
        await this.getFormControlElement('workExp').sendKeys('2');
        await this.getFormControlElement('dataSource').click();
        await browser.sleep(1000);
        await element.all(by.tagName('p-dropdownitem')).get(2).click();
    }
}
