import { element, by, browser } from 'protractor';
import { Updateform } from '../po/formUpdate.po'

export class UpdatePage {

    static get updateDetail() {
    return element(by.tagName('td'))
    }

    static async updateEmployee(){
        await this.updateDetail.click();
        // await Updateform.clearFieldButton.click();
        await Updateform.fillForm2();
        await Updateform.updateButton.click();
    }

    static get table() {
        return element(by.tagName('p-table'));
    }

    static get tableRows() {
        return this.table.all(by.tagName('tr'));
    }

};