import { Given, When, Then } from 'cucumber';
import { browser, element, by } from 'protractor';
import { DashboardPage } from '../po/dashboard.po';
import { MessagePage } from '../po/message.po';
import { Employee, EmployeeDetails } from '../model/employee.class';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

let data: EmployeeDetails;

Given('I am on the dashboard page', async function() {
  const currentUrl = await browser.getCurrentUrl();
  const dashboardUrl = 'http://localhost:4300/dashboard';

  if (currentUrl !== dashboardUrl) {
    await browser.get(dashboardUrl);
  }

  const dashboardElement = element(by.tagName('app-dashboard'));
  if (!(await dashboardElement.isPresent())) {
    throw Error('The user is not on the dashboard page');
  }
});

Given('There are existing employee records', async function() {
  if (!(await DashboardPage.tableBodyRows.get(0).isPresent())) {
    throw Error('There are no existing employee records');
  }
})

When('I {string} an employee record', async function(action: string) {
  switch (action) {
    case 'create':
      data = new Employee({
        firstName: 'Arden',
        lastName: 'Mercado',
        country: 'Japan',
        nationality: 'Nihonjin',
        company: 'TitusUniversal',
        designation: 'CEO',
        workExp: '69 years',
        dataSource: 'Monster Gulf'
      }).details;
      await DashboardPage.createEmployee(data);
      break;
    case 'read':
      // user should read with his/her eyes
      break;
    case 'update':
      data = await DashboardPage.updateEmployee(new Employee(
        {
          firstName: 'Ivan',
          lastName: 'Mercado',
          country: 'Japan',
          nationality: 'Nihonjin',
          company: 'TitusUniversal',
          designation: 'CEO',
          workExp: '69 years',
          dataSource: 'Monster Gulf'
        }
      ).details);
      break;
    case 'delete':
      data = await DashboardPage.deleteEmployee();
      break;
    default:
      throw Error(`Action "${action}" for the employee record is not yet implemented!`)
  }

  await browser.sleep(1000);
});

Then('I should see the success message {string}', async function(expectedMessage: string) {
  const messageObject = MessagePage.successMessage;
  expect(true, 'The success message was not displayed').to.equal(await messageObject.isPresent());
  expect(await messageObject.getText(), 'The success message did not match the expected message').to.equal(expectedMessage);
});

Then('I should {string} the {string} employee record in the list', async function(view: string, action: string) {
  const { firstName, lastName } = data;
  const fullName = `${firstName} ${lastName}`;

  if (view === 'see') {
    switch(action) {
      case 'created':
      case 'updated':

        let rowData;

        if (!(await DashboardPage.checkTableRowForData(fullName))) {
          await DashboardPage.tableNextPageButton.click();
          await browser.sleep(1000);
        }

        rowData = (await DashboardPage.checkTableRowForData(fullName) as string);
        rowData = rowData ? (rowData.replace('Delete', '')).trim() : null;

        let stringifiedData = '';

        Object.keys(data).forEach(key => {
            stringifiedData = `${stringifiedData} ${data[key]}`;
        });

        expect(stringifiedData.trim()).to.equal(rowData);
        break;
      default:
        throw Error(`Action "${action}" for the employee record is not yet implemented!`)
    }
  } else {
    const rowData = (await DashboardPage.checkTableRowForData(fullName) as string);
    expect(null, 'The data is still in the table').to.equal(rowData);
  }
});

Then('I should see the employee record(s) in the list', async function() {
  let dataWasNotFound = false;
  const expectedEmployeeList = [
    '0 Brenden Wagner United States of America, California American Facebook Software Engineer 8 Facebook',
    '1 Cara Steves United States of America, New York American Walmart Sales Assistant 5 Google',
    '4 Jenny Chang Singapore, Singapore Chinese Singapore Airlines Regional Director 15 Twitter',
  ];

  for (const employeeData of expectedEmployeeList) {
    if (!await DashboardPage.checkTableRowForData(employeeData)) {
      dataWasNotFound = true;
      break;
    }
  }

  expect(false, 'The expected data was not found in the table').to.equal(dataWasNotFound)
});
