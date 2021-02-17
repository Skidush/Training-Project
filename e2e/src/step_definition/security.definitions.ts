import { Given, When , Then } from 'cucumber';
import { element , browser } from 'protractor';
import { SecurityPage } from '../po/security.po';



const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

Given ('I am on the login page', async function() {

  await browser.get('http://localhost:4200/login');

});

  When('I log in', async function () {

    await SecurityPage.login();

  });

  Then('I should be redirected to the dashboard', async function () {

    await browser.sleep(1000);
    expect(await browser.getCurrentUrl()).to.equal('http://localhost:4200/dashboard');

  });





