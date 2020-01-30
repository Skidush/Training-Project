import { element, by, browser } from 'protractor';
import { FormPage } from './form.po';
import { Employee, EmployeeDetails } from '../model/employee.class';

export class DashboardPage {
  static get table() {
    return element(by.tagName('p-table'));
  }
​
  static get tableRows() {
    return this.table.all(by.tagName('tr'));
  }

  static get tableBody() {
    return this.table.all(by.tagName('tbody')).get(0);
  }

  static get tableBodyRows() {
    return this.tableBody.all(by.tagName('tr'));
  }
​
  static get tableNextPageButton() {
    return element(by.css('span[class="ui-paginator-icon pi pi-caret-right"]'));
  }

  static async checkTableRowForData(data: string) {
    let foundData = null;
    for (const trData of (await this.tableRows.getText() as any)) {
      if (trData.includes(data)) {
        foundData = trData;
        break;
      }
    }
​
    return foundData;
  }

  static get newEmployeeButton() {
    return element(by.buttonText('New Employee'));
  }

  static deleteEmployeeButton(index: number) {
    return element.all(by.buttonText('Delete')).get(index);
  }

  static async createEmployee(createData: EmployeeDetails) {
    await this.newEmployeeButton.click();
    await FormPage.fillForm(createData);
    await browser.sleep(800);
    await FormPage.formButton('Add').click();
  }

  static async updateEmployee(updateData: EmployeeDetails): Promise<EmployeeDetails> {
    const employeeRecordElement = this.tableBodyRows.get(4);
    const employeeRecordID = JSON.parse(await employeeRecordElement.all(by.tagName('td')).get(0).getText());

    await employeeRecordElement.click();
    await FormPage.fillForm(updateData);
    await browser.sleep(800);
    await FormPage.formButton('Update').click();

    updateData.id = employeeRecordID;
    return updateData;
  }

  static async deleteEmployee(): Promise<EmployeeDetails> {
    await this.deleteEmployeeButton(3).click();
    await (await browser.switchTo().alert()).accept();

    return new Employee({id: 3, firstName: 'Doris', lastName: 'Wilder'});
  }
}
