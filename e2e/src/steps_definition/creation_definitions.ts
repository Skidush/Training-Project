import {Given, When, Then} from 'cucumber';
import { SecurityPage } from '../po/security.po';
import { browser, element, by, ElementFinder} from 'protractor';
import { FormPage } from '../po/creation.po';
import { DashboardPage } from '../po/dashboard.po';
import { MessagePage } from '../po/message.po';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

Given('I am on the dashboard', async function () {
  if (await browser.getCurrentUrl() === "http://localhost:4200/dashboard"){
    return true;
  }
  else{
    throw Error('The user is not on the dashboard page');
  }
});

When('I create an Employee', async function(){
    await DashboardPage.createEmployee();
  });

Then('I should see the success message {string}', async function(expectedMessage: string) {
  const messageObject = MessagePage.successMessage;
  expect(true, 'The success message was not displayed').to.equal(await messageObject.isPresent());
  expect(await messageObject.getText(), 'The success message did not match the expected message').to.equal(expectedMessage);
});

Then('I should see an employee should be added on the list', async function () {
  let rowData;
​
  if (!(await DashboardPage.checkTableRowForData('Arden Gatdula'))) {
    await DashboardPage.tableNextPageButton.click();
  }
  rowData = (await DashboardPage.checkTableRowForData('Arden Gatdula') as string);
  rowData = (rowData.replace('Delete', '')).trim();
  expect('8 Arden Gatdula Japan Nihonjin TitusUniversal CEO 69years Google').to.equal(rowData);
});

