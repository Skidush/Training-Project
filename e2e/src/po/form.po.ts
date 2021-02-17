import { element, by, browser } from 'protractor';
export class FormPage {
    static get form() {
        return element(by.tagName('form'));
    }
    static getFormControlElement(formContolName: string){
        return element(by.css(`[formcontrolname=${formContolName}]`));
    }
    static get addButton() {
        return element(by.buttonText('Add'))
    }
    static async fillForm() {
        await this.getFormControlElement('firstName').sendKeys('Jerrica');
        await this.getFormControlElement('lastName').sendKeys('Azupardo');
        await this.getFormControlElement('country').sendKeys('France');
        await this.getFormControlElement('nationality').sendKeys('Filipino');
        await this.getFormControlElement('company').sendKeys('Titus Global');
        await this.getFormControlElement('designation').sendKeys('idk');
        await this.getFormControlElement('workExp').sendKeys('2 years');
        await this.getFormControlElement('dataSource').click();
        await browser.sleep(1000);
        await element.all(by.tagName('p-dropdownitem')).get(2).click();
    }


}