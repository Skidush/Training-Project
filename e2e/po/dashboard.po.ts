import { browser, element, by, protractor } from 'protractor';
import { dashboard_fillForm } from './dashboard_form.po';
import { utils } from '../utils/helper.utils';

const form = new dashboard_fillForm();

export class dashBoardPage {

    private url = "http://localhost:4200/dashboard";
    private componentName = "app-dashboard";
    private testData = require("../data/test.data");

    //get objects
    getURL(){ return this.url; }

    get logoutButton(){ return element(by.css(`${this.componentName} a[href='/login']`)); }

    get newEmployeeBtn(){ return element(by.xpath('//span[contains(text(),"New Employee")]')); }

    get nextPageBtn(){ return element(by.css(`${this.componentName} span[class="ui-paginator-icon pi pi-caret-right"]`)); }


    //Methods
    navigate(){ browser.get(this.url); }

    async getwelcomeMessage(){ return await element(by.css(`${this.componentName} h2`)).getText(); }

    async logout(){ await this.logoutButton.click(); }

    async createNewEmployee(){
        await this.newEmployeeBtn.click();
        await form.fillEmployeeDetails("add");
    }

    async nextPage(){        
        await this.nextPageBtn.click();
    }

    async verifyEmployee(action: string){
        if(action === 'add' || action === 'view'){
            await utils.verifyTableElements("verify", this.testData.customerInfo.firstName + " "+this.testData.customerInfo.lastName);
        } else if(action === 'verify') {
            await utils.verifyTableElements("verify", this.testData.updateCustomerInfo.firstName + " "+this.testData.updateCustomerInfo.lastName);
        }
    }

    async updateEmployee(){
        //code for listing all TD
        // const rows = await element.all(by.tagName("tr"));
        // for (let i = 0; i < rows.length; i++) {
        //     //console.log("DEBUG: ", await rows[i].getText());
        //     const rowText = await rows[i].getText();
        //     if(rowText.includes(this.testData.customerInfo.firstName + " "+this.testData.customerInfo.lastName)){
        //         await rows[i].click();
        //     }
        // }
        
        await utils.verifyTableElements("click", this.testData.customerInfo.firstName + " "+this.testData.customerInfo.lastName);
        
        await browser.sleep(2000);
        await form.fillEmployeeDetails("update");
    }

    async deleteEmployee(){
        //code for listing all TD
        // const rows = await element.all(by.tagName("tr"));

        // for (let i = 0; i < rows.length; i++) {
        //     //console.log("DEBUG: ", await rows[i].getText());
        //     const rowText = await rows[i].getText();
        //     if(rowText.includes(this.testData.updateCustomerInfo.firstName + " "+this.testData.updateCustomerInfo.lastName)){
        //         await rows[i].$$('button').click();
        //     }
        // }
        
        await utils.verifyTableElements("delete", this.testData.updateCustomerInfo.firstName + " "+this.testData.updateCustomerInfo.lastName);

        utils.verifyAndCloseAlert("Are you sure you want to remove "+this.testData.updateCustomerInfo.firstName + " "+this.testData.updateCustomerInfo.lastName+" from the list of employees?");
        await browser.sleep(2000);
    }
}