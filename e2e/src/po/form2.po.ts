import { element, by, browser } from 'protractor';

export class Form2Page {
  static get form() {
    return element(by.tagName('form'));
  }

  static getFormControlElement(formControlName: string) {
    return element(by.css(`[formcontrolname=${formControlName}]`));
  }
  static get updateButton() {
    return element(by.buttonText('Update'));
  }
  static get clearbutton() {
    return element(by.buttonText('Clear'));
  }
  static async fillForm2() {
    await this.getFormControlElement('firstName').clear();
    await this.getFormControlElement('firstName').sendKeys('Ma');
    await this.getFormControlElement('lastName').clear();
    await this.getFormControlElement('lastName').sendKeys('FangHee');
    await this.getFormControlElement('country').clear();
    await this.getFormControlElement('country').sendKeys('China');
    await this.getFormControlElement('nationality').clear();
    await this.getFormControlElement('nationality').sendKeys('Chinese');
    await this.getFormControlElement('company').clear();
    await this.getFormControlElement('company').sendKeys('Ching Chong');
    await this.getFormControlElement('designation').clear();
    await this.getFormControlElement('designation').sendKeys('Corona');
    await this.getFormControlElement('workExp').clear();
    await this.getFormControlElement('workExp').sendKeys('1000000 years');
    await this.getFormControlElement('dataSource').click();
    await browser.sleep(1000);
    // may need to wait for list to load
    await element.all(by.tagName('p-dropdownitem')).get(4).click();
    await browser.sleep(1000);
  }
}
