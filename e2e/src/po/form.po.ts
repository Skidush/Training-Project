import { element, by, ElementFinder } from 'protractor';
import { EmployeeDetails, Employee } from '../model/employee.class';



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

    static formButton(buttonText: string) {
      return element(by.buttonText(buttonText));
    }

    static async fillForm(employeeData: EmployeeDetails) {
      // tslint:disable-next-line: forin
      for (const key in employeeData) {
        if (key === 'id') {
          continue;
        }

        const formElement = this.getFormControlElement(key);

        if (key !== 'dataSource') {
          await formElement.clear();
          await formElement.sendKeys(employeeData[key]);
        } else {
          await formElement.click();
          const dropdownItemsElements = element.all(by.tagName('p-dropdownitem'));
          const dropdownItems = await dropdownItemsElements.getText();

          await dropdownItemsElements.get(dropdownItems.indexOf(employeeData[key])).click();
        }
      }
    }
}
