import {Given, When, Then} from 'cucumber';
import { SecurityPage } from '../po/security.po';
import { browser } from 'protractor';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

Given('I am on the login page', async function () {
 await browser.get('http://localhost:4200/login')
});

When('I log in', async function () {
 await SecurityPage.login();
});

Then('I should be redirected to the dashboard', async function () {
  expect (await browser.getCurrentUrl(), `the current url is `).to.equal("http://localhost:4200/dashboard");
});
