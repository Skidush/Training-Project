import { by, element, ElementFinder, } from 'protractor';
import { DashboardPage } from './dashboard.po';

export class Employee {

    static get delbutton(): ElementFinder {
      return element.all(by.buttonText('Delete')).first();
    }

    static get clkbutton(): ElementFinder {
        return element (by.css('class["ui-selectable-row ng-star-inserted"]'));
    }
    static async del() {
        await Employee.delbutton.click();
    }
    static async clk() {
        await Employee.clkbutton.click();
    }
}
