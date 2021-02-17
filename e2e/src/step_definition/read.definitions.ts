   import { Given, When, Then } from 'cucumber'
   import { browser, element, by} from 'protractor';
   import { DashboardPage } from '../po/dashboard.po'
    
    const chai = require('chai').use(require('chai-as-promised'));
    const expect = chai.expect;
   
    Given('Im at the dashboard page', async function () {

        const currentUrl = await browser.getCurrentUrl();
        const dashboardUrl = 'http://localhost:4200/dashboard';
    
        if (currentUrl !== dashboardUrl) {
          await browser.get(dashboardUrl);
        }
    
        const dashboardElemenet = element(by.tagName('app-dashboard'));
        if (!(await dashboardElemenet.isPresent())) {
          throw Error ('The user is not on the dashboard page');
        }
        
    });
 
    When('I check the table', async function () {


        await DashboardPage.tablePrevPageButton.click();
        browser.sleep(1000)

        const tbl =  element(by.tagName('table'));
          if(!(await tbl.isPresent())){
            throw Error ('The user cant see the table');
         }

    });
 
    Then('I should see the existing records', async function () {

        let rowData: string;

        if (!(await DashboardPage.checkTableRowForData('Rome Joseph'))) {
            await DashboardPage.tableNextPageButton.click();
            
            return true;
        }

        rowData = (await DashboardPage.checkTableRowForData('Rome') as string);
        rowData = (rowData.replace('Delete', '')).trim();
        expect('7 Rome Joseph United States, Denver, Colorado American Titus Global Tech-Inc Sergeant-at-arms 2 Steam').to.equal(rowData);
        await browser.sleep(2000)
    });