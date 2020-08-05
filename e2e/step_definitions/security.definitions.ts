import { Given, When, Then } from 'cucumber';
import { securityPage } from '../po/security.po';
import { browser } from 'protractor';
import { dashBoardPage } from '../po/dashboard.po';

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

Given('I am on the {string} page', async function (page: string) {
    if (page === 'login'){
        this.currentPage = new securityPage(); //Using World
    } else {
        this.currentPage = new dashBoardPage(); //Using World
    }

    if (await browser.getCurrentUrl() !== this.currentPage.getURL()) {
        await this.currentPage.navigate();
    }
});

When('I {string} as {string}', async function (action: string, role: string) {
    // Write code here that turns the phrase above into concrete actions
    if (action === 'login'){
        await this.currentPage.login(role);
    } else {
        await this.currentPage.logout();
    }
});

When('I {string}', async function (action: string) {
    await this.currentPage.logout();
});

Then('I should see the {string} page', async function (page: string) {
    if (page === 'dashboard'){
        const dashboard = new dashBoardPage();
        expect("Welcome, Asd").to.equal(await dashboard.getwelcomeMessage());
    } else {
        const secPage = new securityPage();
        expect(await secPage.loginHeader.getText()).to.be.equal("Please Login");
    }
});