import { Given, When, Then } from 'cucumber';
import { browser, element, by, ExpectedConditions} from 'protractor';
import { DeletePage } from '../po/delete.po';
import { Alert } from 'selenium-webdriver';
import { DashboardPage} from '../po/dashboard.po';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

 Given('I am on the dashboard page', async function () {
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

  When('I delete an existing employee', async function () {
    let rowData;

    if (!(await DashboardPage.checkTableRowForData('Jerrica Azupardo'))) {
      await DashboardPage.tableNextPageButton.click();
      await browser.sleep(1000);
    }
    
      rowData = (await DashboardPage.checkTableRowForData('Jerrica') as string);
      rowData = (rowData.replace('Delete', '')).trim();
      expect('8 Jerrica Azupardo France Filipino Titus Global idk 2 years Monster Gulf').to.equal(rowData);

      await browser.sleep(1000)
      await DeletePage.delEmployee();
      await browser.sleep(1000)

      const ale:Alert = browser.switchTo().alert();
      ale.accept()
      await browser.sleep(1000)
  });

  Then ('I should see the employee is deleted from the table', async function () {
    let rowData;

      if (!(await DashboardPage.checkTableRowForData('Jerrica Azupardo'))) {
        await DashboardPage.tableNextPageButton.click();
        await browser.sleep(1000);
      }
      
      rowData = (await DashboardPage.checkTableRowForData('Jerrica') as string);
      rowData = (rowData.replace('Delete', '')).trim();
      expect('8 Jerrica Azupardo France Filipino Titus Global idk 2 years Monster Gulf').to.equal(rowData);
  });