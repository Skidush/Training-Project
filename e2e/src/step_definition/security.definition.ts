import {Given, When, Then } from 'cucumber';
import { browser, element, by } from 'protractor';
import { SecurityPageObject } from '../po/security.po';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

Given('I am on the  Login Page', async function() {
  await browser.get('http://localhost:4200/login');
});
When('I log in', async function() {
  await SecurityPageObject.login();
  await browser.sleep(1000);
});
Then('I should be redirected to dashboard', async function() {
  expect (await browser.getCurrentUrl()).to.equal('http://localhost:4200/dashboard');
  await browser.sleep(1000);
});
