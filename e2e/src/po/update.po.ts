import { element, by} from 'protractor';
import { UpdateFormPage } from './formupdate.po';



export class UpdatePage{

static get updateinfo() {
    return element(by.tagName('tbody'));
}

static get table() {
    return element(by.tagName('p-table'));
}
static get tableRows() {
    return this.table.all(by.tagName('tr'));
}
static async updateEmployee() {
    await this.updateinfo.click();
    await UpdateFormPage.fillForm();
    await UpdateFormPage.updateButton.click();
    await this.removexbut.click();

}
static get removexbut(){
    return element(by.css('i'));
}

}