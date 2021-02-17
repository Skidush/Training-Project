import { element, by, browser } from 'protractor';
export class DeletePage {
    static get delEmployeeButton() {

        return element.all(by.buttonText('Delete')).first();
    }

    static async delEmployee() {
        await this.delEmployeeButton.click();   
    }
      
}
