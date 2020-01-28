import {Given, When, Then} from 'cucumber';
import { SecurityPage } from '../po/security.po';
import { browser, element, by, ElementFinder} from 'protractor';
import { FormPage } from '../po/creation.po';
import { DashboardPage } from '../po/dashboard.po';
import { MessagePage } from '../po/message.po';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

Given('I am on the dashboard2', async function () {
    console.log('1st hurdle');

    if(await browser.getCurrentUrl()==="http://localhost:4200/dashboard"){
        return true;
      }
      else{
          throw Error('The user is not on the dashboard page');
  
      }

  });

When('I updated an Employee', async function () {
  await DashboardPage.updateEmployee();

    
  });

Then('I should see the updated success message {string}', async function(expectedMessage: string) {
    const messageObject = MessagePage.updatedMessage;
    expect(true, 'The success message was not displayed').to.equal(await messageObject.isPresent());
    expect(await messageObject.getText(), 'The success message did not match the expected message').to.equal(expectedMessage);
    console.log('1st then working(success)')
  });

Then('I should see the updated data on the table', async function () {
  let rowData;
  // ​console.log(await DashboardPage.tableRows.getText())
    if (!(await DashboardPage.checkTableRowForData('Japan Japanese Titus'))) {
      await DashboardPage.tableNextPageButton.click();
      
     
    }
  ​   
    rowData = (await DashboardPage.checkTableRowForData('Japan Japanese Titus') as string);
    rowData = (rowData.replace('Delete', '')).trim();
    expect('1 Cara Steves Japan Japanese Titus Sales Assistant 5 Google').to.equal(rowData);
  
    console.log('final checking success');
  });
  // let rowData;
  // ​
  //   rowData = (await DashboardPage.checkTableRowForData('Japan Nihonjin Titus') as string);
  //   rowData = (rowData.replace('Delete', '')).trim();
  //   expect('1 Cara Steves Japan Nihonjin Titus Sales Assistant 5 Google').to.equal(rowData);
  
  //   console.log('final checking success');
  // });
  



