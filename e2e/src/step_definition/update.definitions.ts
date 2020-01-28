import { Given, When, Then} from 'cucumber';
import { element, by, browser} from 'protractor';
import { MessagePage } from '../po/message.po';
import { UpdatePage } from '../po/update.po';
import { DashboardPage } from '../po/dashboard.po';


const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

Given('I am on the dashboard for update', async function () {
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


When('I update an existing employee', async function () {

    await UpdatePage.updateEmployee();
    await browser.sleep(5000);

  });


Then('I should see the success message in update {string}', async function (expectedMessage: string) {
    // const messageObject = MessagePage.successMessage;

    // expect( true, 'The success message was not displayed').to.equal(await messageObject.isPresent());
    // expect( await messageObject.getText(), 'The success message did not match the expected message').to.equal(expectedMessage);
  });

Then('I should see the updated employee record in the list', async function () {
    let rowData;

    if (!(await DashboardPage.checkTableRowForData('Jerrica Azupardo'))) {
      await DashboardPage.tableNextPageButton.click();
      await browser.sleep(1000);
    }


    rowData = (await DashboardPage.checkTableRowForData('Ivan Mercado') as string);
    rowData = (rowData.replace('Delete', '')).trim();
    expect('8 Jerrica Azupardo France Filipino Titus Global idk 5 years JobsDB').to.equal(rowData);
    });