import { element, by, browser } from 'protractor';


export class UpdateFormPage {

static get form() {
    return element(by.tagName('form'));
}
static getFormControlElement(formContolName: string) {
    return element(by.css(`[formcontrolname=${formContolName}]`));
 }
 static get updateButton() {
   return element(by.buttonText('Update'));
}
static async fillForm() {
    await this.getFormControlElement('firstName').sendKeys('asddasd');
    await this.getFormControlElement('lastName').sendKeys('Azusdads');
    await this.getFormControlElement('country').sendKeys('Paridsadss');
    await this.getFormControlElement('nationality').sendKeys('Fildasdipino');
    await this.getFormControlElement('company').sendKeys('Titus Global');
    await this.getFormControlElement('designation').sendKeys('iddsdk');
    await this.getFormControlElement('workExp').sendKeys('2 yeadsadrs');

    await this.getFormControlElement('dataSource').click();
        // may need to wait for the list
    await browser.sleep(1000);
    await element.all(by.tagName('p-dropdownitem')).get(2).click();
}

}
