import {Given, When, Then} from 'cucumber';
import { Alert } from 'selenium-webdriver';
import { browser } from 'protractor';
import { DashboardPage } from '../po/dashboard.po';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

Given('I am still on the dashboard', async function () {
    if(await browser.getCurrentUrl()==="http://localhost:4200/dashboard"){
       
    console.log('deletePage entered')
      
      return true;
    }
    else{
        throw Error('The user is not on the dashboard page');
       
    }
   
  });
  
  
When('I deleted an Employee', async function () {
    console.log('entered when command');

  
 await  DashboardPage.deleteEmployee();
          
   console.log('after delete click');

  });

Then('The deleted data will not be shown in the table', async function () {

  let rowData;
​
  rowData = (await DashboardPage.checkTableRowForData('Brenden Wagner') as string);

  expect(rowData).to.equal(null);

  // rowData = (rowData.replace('Delete', '')).trim();
  // expect('1 Brenden Wagner United States of America, California American Facebook Software Engineer 8 Facebook').to.equal(rowData);

  console.log('final checking success');

  });
