import { Given, When, Then } from 'cucumber';
import { browser, element, by} from 'protractor';
import { UpdatePage } from '../po/update.po';
import { MessagePage } from '../po/message.po'
import { DashboardPage } from '../po/dashboard.po';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;


Given('Im at the dashboard to update info', async function () {
  await browser.sleep(2000);

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



When('I update the selected employee', async function () {

  await UpdatePage.updateEmployee();
  await browser.sleep(1000);


});

Then('I should view the success message {string}', async function(expectedMessage: string){

  const messageObject = MessagePage.successUpdateMessage;

  expect( true, 'The success message was not displayed').to.equal(await messageObject.isPresent());
  expect( await messageObject.getText(), 'The success message did not match the expected message').to.equal(expectedMessage);
  
})

Then('I should see the new info saved', async function () {

  let rowData: string;

  if (!(await DashboardPage.checkTableRowForData('Jerrica Azupardo'))) {
    await DashboardPage.tableNextPageButton.click();
    await browser.sleep(1000);
  }
  
  rowData = (await DashboardPage.checkTableRowForData('Jerrica') as string);
  rowData = (rowData.replace('Delete', '')).trim();
  expect('8 Jerrica Azupardo France Filipino Titus Global idk 2 years Monster Gulf').to.equal(rowData);

  await browser.sleep(5000)
});