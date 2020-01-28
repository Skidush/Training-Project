import { element, by, browser } from 'protractor';
// import { FormPage } from './form.po';
// import { Alert } from 'selenium-webdriver';
// import { DashboardPage} from '../po/dashboard.po'

export class DeletePage {



    static get delEmployeeButton() {

        return element.all(by.buttonText('Delete')).first();
               
       
    }
    

    // static get buttonOK(){
    //     let ale:Alert = browser.switchTo().alert();
    //     return ale.accept();

    // }

    static async delEmployee() {
        await this.delEmployeeButton.click();
        
    }

 

    
       
}
