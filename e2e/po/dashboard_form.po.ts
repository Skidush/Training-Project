import { element, by, browser, protractor } from 'protractor';
import { utils } from '../utils/helper.utils';

export class dashboard_fillForm {

    private formName = "form";
    private testData = require("../data/test.data");

    //GET ALL THE FIELDS
    get firstNameField(){ return element(by.tagName(`${this.formName} input[ng-reflect-name="firstName"]`)); }

    get lastNameField(){ return element(by.tagName(`${this.formName} input[ng-reflect-name="lastName"]`)); }

    get countryField(){ return element(by.tagName(`${this.formName} input[ng-reflect-name="country"]`)); }

    get nationalityField(){ return element(by.tagName(`${this.formName} input[ng-reflect-name="nationality"]`)); }

    get companyField(){ return element(by.tagName(`${this.formName} input[ng-reflect-name="company"]`)); }

    get designationField(){ return element(by.tagName(`${this.formName} input[ng-reflect-name="designation"]`)); }

    get workExpField(){ return element(by.tagName(`${this.formName} input[ng-reflect-name="workExp"]`)); }

    get dataSrc(){return element(by.tagName(`${this.formName} label`)); }

    get addButton(){ return element(by.tagName(`${this.formName} button[ng-reflect-label="Add"]`)); }

    get updateButton(){ return element(by.tagName(`${this.formName} button[ng-reflect-label="Update"]`)); }

    get dataSrcList(){
        return element.all(by.xpath("//li[@role='option']"));
    }

    //METHODS OR ACTION
    async fillEmployeeDetails(action: string){
        let jsonAction;

        if(action == 'add'){
            jsonAction = this.testData.customerInfo;
        } else {
            jsonAction = this.testData.updateCustomerInfo;
        }

        utils.type_(this.firstNameField, jsonAction.firstName);
        utils.type_(this.lastNameField, jsonAction.lastName);
        utils.type_(this.countryField, jsonAction.country);
        utils.type_(this.nationalityField, jsonAction.nationality);
        utils.type_(this.companyField, jsonAction.company);
        utils.type_(this.designationField, jsonAction.designation);
        utils.type_(this.workExpField, jsonAction.workExperience);
        await this.dataSrc.click();
        
        const dpdElement = element.all(by.xpath("//li[@role='option']"));
        const dpdItems = await dpdElement.getText();
        //console.log('DEBUG: ', dpdItems);

        dpdElement.get(dpdItems.indexOf(jsonAction.dataSource)).click();
        
        if(action == 'add'){
            await this.addButton.click();
        } else {
            await this.updateButton.click();
        }
    }
}