import { element, by, browser } from 'protractor';

export class FormPage {
  static get form() {
    return element(by.tagName('form'));
  }

  static getFormControlElement(formControlName: string) {
    return element(by.css(`[formcontrolname=${formControlName}]`));
  }

  static get addButton() {
    return element(by.buttonText('Add'));
  }

  static async fillForm() {
    await this.getFormControlElement('firstName').sendKeys('LinKin');
    await this.getFormControlElement('lastName').sendKeys('Park');
    await this.getFormControlElement('country').sendKeys('Korea');
    await this.getFormControlElement('nationality').sendKeys('Kinorian');
    await this.getFormControlElement('company').sendKeys('Ching Ko');
    await this.getFormControlElement('designation').sendKeys('KPOPanget');
    await this.getFormControlElement('workExp').sendKeys('100 years');
    await this.getFormControlElement('dataSource').click();
    // may need to wait for list to load
    await browser.sleep(1000);
    await element.all(by.tagName('p-dropdownitem')).get(2).click();
  }
}
