import { element, by, ElementFinder, logging, browser } from 'protractor';



export class FormPage {

    static get updateButton() {
        return element(by.buttonText('Update'));
      }

    static get newEmployeeButton(): ElementFinder{
        return element(by.id('new-employee'));
    }

    static getFormControlElement(formControlName: string) {
        return element(by.css(`[formcontrolname=${formControlName}]`));
      }

    static get addbuttonEmployee(): ElementFinder{
        return element(by.css('[ng-reflect-label="Add"]'));
    }

    static async fillForm(){

       await this.getFormControlElement('firstName').sendKeys('Arden');
       await this.getFormControlElement('lastName').sendKeys('Gatdula');
       await this.getFormControlElement('country').sendKeys('Japan');
       await this.getFormControlElement('nationality').sendKeys('Nihonjin');
       await this.getFormControlElement('company').sendKeys('TitusUniversal');
       await this.getFormControlElement('designation').sendKeys('CEO');
       await this.getFormControlElement('workExp').sendKeys('69years');
       await this.getFormControlElement('dataSource').click();
    //    browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
       await element.all(by.tagName('p-dropdownitem')).get(1).click();
    }

    static async updateFill(){
      await this.getFormControlElement('nationality').clear();
      await this.getFormControlElement('nationality').sendKeys('Japanese');
      await this.getFormControlElement('company').clear();
      await this.getFormControlElement('company').sendKeys('Titus');
      await this.getFormControlElement('country').clear();
      await this.getFormControlElement('country').sendKeys('Japan');
      browser.sleep(2000);
    }
}
