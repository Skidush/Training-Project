import { Given, When, Then } from 'cucumber';
import { securityPage } from '../po/security.po';
import { browser } from 'protractor';
import { dashBoardPage } from '../po/dashboard.po';
import { dashboard_messageAlert } from '../po/dashboard_msgAlert.po';
import { currentId } from 'async_hooks';

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

When('I {string} an employee entry', async function (action: string) {
    // Write code here that turns the phrase above into concrete actions
    this.currentPage = new dashBoardPage();
    switch(action){
        case 'create':
            await this.currentPage.createNewEmployee();
            break;
        case 'view':
            //screenshot library if possible
            break;
        case 'update':
            await this.currentPage.updateEmployee();
            break;
        case 'delete':
            await this.currentPage.deleteEmployee();
            break;
        default:
            throw Error("Invalid action");
    }
});

Then('I should see the {string} success message', async function (notif: string) {
    const dboard_mesg = new dashboard_messageAlert();
    switch(notif){
        case 'add':
            expect("Success: Data has been added!").to.equal(await dboard_mesg.getSuccessMessage());
            break;
        case 'update':
            expect("Success: Data has been updated!").to.equal(await dboard_mesg.getSuccessMessage());
            break;
    }
})

Then('I should see the employee entry details on the list', async function () {
    this.currentPage = new dashBoardPage();
    await this.currentPage.verifyEmployee("view");
})

Then('I should see it {string} on the employee list table', async function (pastAction: string) {
    this.currentPage = new dashBoardPage();
    await this.currentPage.nextPage();

    switch(pastAction){
        case 'added':
            await this.currentPage.verifyEmployee("add");
            break;
        case 'updated':
            await this.currentPage.verifyEmployee("verify");
            break;
        case 'deleted':
            break;
    }
})