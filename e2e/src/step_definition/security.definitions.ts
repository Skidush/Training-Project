import { Given, When , Then } from 'cucumber';
import { element , browser, Browser } from 'protractor';
import { SecurityPage } from '../po/security.po';



const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

Given ('I am on the login page', async function() {
await browser.get('http://localhost:4200/login');
 // Write code here that turns the phrase above into concrete actions
  });
When('I log in', async function () {
await SecurityPage.login();

// // type uaername
// const usernameField = element(by.id('username-field'));
// await usernameField.sendKeys('asd');
// // type password
// const passwordField = element(by.id('username-field'));
// await passwordField.sendKeys('asd');
// // click the log in button
// const loginButton = element(by.css('button[label="Login"]'));
// await loginButton.click();
    // Write code here that turns the phrase above into concrete actions
  });
Then('I should be redirected to the dashboard', async function () {
await browser.sleep(3000);
expect(await browser.getCurrentUrl()).to.equal('http://localhost:4200/dashboard');
    // Write code here that turns the phrase above into concrete actions
  });





