import { Given, When, Then } from 'cucumber';
import { browser, element, by} from 'protractor';
import { DashboardPage } from '../po/dashboard.po';
import { MessagePage } from '../po/message.po';



const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

Given('I am on the dashboard', async function () {
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

When('I create new employee', async function () {

await DashboardPage.createEmployee();
await browser.sleep(1000);

  });

Then('I should see the success message {string}', async function (expectedMessage: string) {
    // Write code here that turns the phrase above into concrete actions
const messageObject = MessagePage.successMessage;

expect( true, 'The success message was not displayed').to.equal(await messageObject.isPresent());
expect( await messageObject.getText(), 'The success message did not match the expected message').to.equal(expectedMessage);
  });

Then('I should see the employee record in the list', async function () {
    // Write code here that turns the phrase above into concrete actions
let rowData;

if (!(await DashboardPage.checkTableRowForData('Jerrica Azupardo'))) {
  await DashboardPage.tableNextPageButton.click();
  await browser.sleep(1000);
}


rowData = (await DashboardPage.checkTableRowForData('Ivan Mercado') as string);
rowData = (rowData.replace('Delete', '')).trim();
expect('8 Jerrica Azupardo France Filipino Titus Global idk 5 years JobsDB').to.equal(rowData);
});