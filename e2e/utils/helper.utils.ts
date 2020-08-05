import { browser, protractor, element, by, $$, $ } from 'protractor';

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

export class utils { 
    static async verifyAndCloseAlert(textToVerify: String){ //function for dismisssing or confirming an alert
         //browser.wait(protractor.ExpectedConditions.alertIsPresent(), 4000, "Alert not found!"); //wait for the expected condition, wait period, if the condition id not expected
 
         let alert = await browser.switchTo().alert(); // a var for to switch to alert
         let alertText = await alert.getText(); // a var to get all the alert text

         expect(alertText).to.equal(textToVerify); //verify or assert alert
         alert.accept(); //confirm alert
     }
     
     static type_(locator: any, textToType: string){
        let ec = protractor.ExpectedConditions;
        browser.wait(ec.visibilityOf(locator));

        locator.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        locator.sendKeys(textToType);
     }

     static async verifyTableElements(action: string, dataToVerify: any){
        //code for listing all TD
        const rows = await element.all(by.tagName("tr"));
        for (let i = 0; i < rows.length; i++) {
            //console.log("DEBUG: ", await rows[i].getText());
            const rowText = await rows[i].getText();
            if(rowText.includes(dataToVerify)){
                switch(action){
                    case 'click':
                        await rows[i].click();
                        //console.log('Element was clicked!');
                        break;
                    case 'verify':
                        //console.log('DEBUG:', rowText);
                        expect(rowText).to.contain(dataToVerify); //verify or assert alert
                        //console.log('Element was verified!');
                        break;
                    case 'delete':
                        await rows[i].$$('button').click();
                        //console.log('Element was deleted!');
                        break;
                    default:
                        throw Error('ERROR!!!');
                }
            }
        }
     }
 }