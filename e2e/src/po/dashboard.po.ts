import { element, by, browser } from 'protractor';
import { FormPage } from './creation.po';
​import { Alert } from 'selenium-webdriver';

export class DashboardPage {

  // static get tableFiles(){
  //   return expect(element(by.tagName('table')));
  // }

  static get newEmployeeButton() {
    return element(by.buttonText('New Employee'));
  }
​
  static get deleteEmployeeButton(){
    return element(by.buttonText('Delete'));
  }

  static get alertButtonOk(){
    let ale:Alert = browser.switchTo().alert();
    return ale;
  }

  // static get clickTable(){
  //   return this.table.all(by.tagName('tr'));
  // }


  static async createEmployee() {
    await this.newEmployeeButton.click();
    await FormPage.fillForm();
    await FormPage.addbuttonEmployee.click();

  }

  static async deleteEmployee(){
    await this.deleteEmployeeButton.click();
    await this.alertButtonOk.accept();
  }

  static async updateEmployee(){
    // await this.clickTable.click();
    await this.table.click();
    await element(by.css('input[formcontrolname="nationality"]')).clear();
    await element(by.css('input[formcontrolname="nationality"]')).sendKeys("Japanese");
    await element(by.css('input[formcontrolname="company"]')).clear();
    await element(by.css('input[formcontrolname="company"]')).sendKeys("Titus");
    await element(by.css('input[formcontrolname="country"]')).clear();
    await element(by.css('input[formcontrolname="country"]')).sendKeys("Japan");
    // await FormPage.updateForm();
    await FormPage.updateButton.click();
  }
​
  static get table() {
    return element(by.tagName('p-table'));
  }
​
  static get tableRows() {
    return this.table.all(by.tagName('tr'));
  }
​
  static get tableNextPageButton() {
    return element(by.css('span[class="ui-paginator-icon pi pi-caret-right"]'));
  }

  static get tableBackPageButton() {
    return element(by.css('span[class="ui-paginator-icon pi pi-caret-left"]'));
  }
​
  static async checkTableRowForData(data: string) {
    let foundData = null;
    (await this.tableRows.getText() as any).forEach(trData => {
      if (trData.includes(data)) {
        foundData = trData;
      }
    });
​
    return foundData;
  }
}