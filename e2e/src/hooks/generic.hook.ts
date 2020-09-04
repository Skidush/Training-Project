import {Before, setDefaultTimeout} from 'cucumber';
import { browser } from 'protractor';

Before((Scenario) => {
    console.log('hook executed');
    browser.waitForAngularEnabled(false);
    setDefaultTimeout (60 * 10000);
});
