import { element, by, browser } from 'protractor';
import { FormPage } from './form.po';

export class DashboardPage {
    static get newEmployeeButton() {
        return element(by.buttonText('New Employee'));
    }
    
    static async createEmployee() {
        await this.newEmployeeButton.click();
        await FormPage.fillForm();
        await FormPage.addButton.click();
        // await this.closeSuccessMessage.click();
    }

    static get table() {
        return element(by.tagName('p-table'));
    }

    static get tableRows() {
        return this.table.all(by.tagName('tr'));
    }

    static get tableNextPageButton() {
        return element(by.css('span[class= "ui-paginator-icon pi pi-caret-right"'));
    }

    static get tablePrevPageButton() {
      return element(by.css('span[class= "ui-paginator-icon pi pi-caret-left"'));
  }
    static async checkTableRowForData(data: string) {
        let foundData = null;
        (await this.tableRows.getText() as any).forEach(trData => {
          if (trData.includes('Jerrica Azupardo')) {
            foundData = trData;
          }
        });​
        return foundData;
      }

      static get closeSuccessMessage(){
       return element(by.css('i[class="pi pi-times"]'));
      }


      static async successMessage(){
        await browser.sleep(1000);
        await this.closeSuccessMessage.click();
      }
};