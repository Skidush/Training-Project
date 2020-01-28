import { Given, When, Then } from 'cucumber';
import { browser, element, by } from 'protractor';
import { DashboardPage } from '../po/dashboard.po';
import { MessagePage } from '../po/message.po';


const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

Given('I redirected on the dashboard', async function () {
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

When('I browse the table', async function () {
    const tableObject =  element(by.tagName('table'));
    if(await tableObject.isPresent()){
        console.log('success table view')
        return true;
    }
    else
    {
        throw Error('error');
    }

 
    
  });

Then('I should see the details of different employees', async function () {
    
    let rowData;
    let rowData2;
    let rowData3;
    let rowData4;
    let counter: number = 0;

  
  console.log(await DashboardPage.tableRows.getText());
    rowData = (await DashboardPage.checkTableRowForData('1 Cara Steves United States of America, New York American Walmart Sales Assistant 5 Google') as string);
    rowData = (rowData.replace('Delete', '')).trim();

    rowData2 = (await DashboardPage.checkTableRowForData('4 Jenny Chang Singapore, Singapore Chinese Singapore Airlines Regional Director 15 Twitter') as string);
    rowData2= (rowData2.replace('Delete', '')).trim();

    rowData4 = (await DashboardPage.checkTableRowForData('0 Brenden Wagner United States of America, California American Facebook Software Engineer 8 Facebook') as string);
    rowData4= (rowData4.replace('Delete', '')).trim();
    await DashboardPage.tableNextPageButton.click();
  

    rowData3 = (await DashboardPage.checkTableRowForData('Jireh Kael') as string);
    rowData3 = (rowData3.replace('Delete', '')).trim();

    

   
    if('1 Cara Steves United States of America, New York American Walmart Sales Assistant 5 Google'=== rowData){
    await  counter++;
    await console.log('pumasok!!'+ counter);
    }
    else{
      console.log('error!!');
    }

    if('4 Jenny Chang Singapore, Singapore Chinese Singapore Airlines Regional Director 15 Twitter'===rowData2){
      await counter++;
      await console.log('pumasok2!!'+ counter);
    }
    else{
      await console.log('error2!!');
    }
    
    if('0 Brenden Wagner United States of America, California American Facebook Software Engineer 8 Facebook'===rowData4){
      await counter++;
      await console.log('pumasok2!!'+ counter);
    }
    else{
      await console.log('error4!!');
    }

    if('6	Jireh	Kael Kenya, Nairobi	Kenyan Titus Global Tech-Inc Quality Assurance Engineer	1	TikTok' === rowData3){
      await counter++;
      await console.log('pumasok3!!'+ counter);
    }
    else{
      await console.log('error3!!');
    }


    await DashboardPage.tableBackPageButton.click();
   

    expect(counter).to.equal(3);
  });