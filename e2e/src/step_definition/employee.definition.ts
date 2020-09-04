import { Given, Then, When } from 'cucumber';
import { browser, by, element } from 'protractor';
import { DashboardPage } from '../po/dashboard.po';
import { Employee } from '../po/employee.po';
import { MessagePage } from '../po/message.po';
import { Alert } from 'selenium-webdriver';
import { Form2Page } from '../po/form2.po';
import { FormPage } from '../po/form.po';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
​
///////////////////////////////// Create ////////////////////////////////////////////////

// tslint:disable-next-line: only-arrow-functions
Given('I am on the dashboard page', async function() {
  const currentUrl = await browser.getCurrentUrl();
  const dashboardUrl = 'http://localhost:4200/dashboard';
​
  if (currentUrl !== dashboardUrl) {
    await browser.get(dashboardUrl);
  }
​
  const dashboardElement = element(by.tagName('app-dashboard'));
  if (!(await dashboardElement.isPresent())) {
    throw Error('The user is not on the dashboard page');
  }
});
​
// tslint:disable-next-line: only-arrow-functions
When('I create an employee record', async function() {
  await DashboardPage.createEmployee();
  await browser.sleep(1000);
});
​
// tslint:disable-next-line: only-arrow-functions
Then('I should see the success message {string}', async function(expectedMessage: string) {
  const messageObject = MessagePage.successMessage;
  expect(true, 'The success message was not displayed').to.equal(await messageObject.isPresent());
  expect(await messageObject.getText(), 'The success message did not match the expected message').to.equal(expectedMessage);
});
​
// tslint:disable-next-line: only-arrow-functions
Then('I should see the employee record in the list', async function() {
  let rowData;
​
  if (!(await DashboardPage.checkTableRowForData('LinKin'))) {
    await DashboardPage.tableNextPageButton.click();
    await browser.sleep(1000);
  }
​
  rowData = (await DashboardPage.checkTableRowForData('LinKin') as string);
  rowData = (rowData.replace('Delete', ' ')).trim();
  expect('8 LinKin Park Korea Kinorian Ching Ko KPOPanget 100 years Monster Gulf').to.equal(rowData);
  await browser.sleep(2000);

  await element(by.css('i[class="pi pi-times"]')).click();
});

////////////////////////////////// Update ////////////////////////////////////////////

// tslint:disable-next-line: only-arrow-functions
Given('I am on the Recent dashboard page', async function() {
  const currentUrl = await browser.getCurrentUrl();
  const dashboardUrl = 'http://localhost:4200/dashboard';
​
});

// tslint:disable-next-line: only-arrow-functions
When('I Click the Table on the employee record', async function() {
  element(by.css('td')).click();
  await browser.sleep(1000);
 // await Form2Page.clearbutton.click();
  await browser.sleep(1000);
  await Form2Page.fillForm2();
  await Form2Page.updateButton.click();
  await browser.sleep(1000);
  await element(by.css('i[class="pi pi-times"]')).click();
  await browser.sleep(2000);
});

// tslint:disable-next-line: only-arrow-functions
Then('It should be see the success msg', async function() {
  expect (await browser.getCurrentUrl()).to.equal('http://localhost:4200/dashboard');
  await browser.sleep(1000);
  await element(by.linkText('Logout')).click();
  await browser.sleep(1000);
});

////////////////////////////////// Delete ////////////////////////////////////////////

// tslint:disable-next-line: only-arrow-functions
Given('I am on the Present dashboard page', async function() {
  const currentUrl = await browser.getCurrentUrl();
  const dashboardUrl = 'http://localhost:4200/dashboard';

});

// tslint:disable-next-line: only-arrow-functions
When('I delete the employee record', async function() {
  let dataRow;
​
  if (!(await DashboardPage.checkTableRowForData('LinKin'))) {
    await DashboardPage.tableNextPageButton.click();
    await browser.sleep(1000);
  }
​
  dataRow = (await DashboardPage.checkTableRowForData('LinKin') as string);
  dataRow = (dataRow.replace('Delete', '')).trim();
  expect('8 LinKin Park Korea Kinorian Ching Ko KPOPanget 100 years Monster Gulf').to.equal(dataRow);
  await browser.sleep(1000);
  await Employee.del();
  await browser.sleep(1000);
  const ale: Alert = browser.switchTo().alert();
  ale.accept();
  await browser.sleep(1000);

});

// tslint:disable-next-line: only-arrow-functions
Then('It should remove in the Table', async function() {
​ const currentUrl = await browser.getCurrentUrl();
  const dashboardUrl = 'http://localhost:4200/dashboard';
});

//////////////////////////////////  Read   ////////////////////////////////////////////

// tslint:disable-next-line: only-arrow-functions
Given('I am on the actual dashboard page', async function() {
  const currentUrl = await browser.getCurrentUrl();
  const dashboardUrl = 'http://localhost:4200/dashboard';
});

// tslint:disable-next-line: only-arrow-functions
When('I Select an employee', async function() {
});

// tslint:disable-next-line: only-arrow-functions
Then('I should Read the Employee Status', async function() {
  const currentUrl = await browser.getCurrentUrl();
  const dashboardUrl = 'http://localhost:4200/dashboard';

});

