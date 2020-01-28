import  {BeforeAll, setDefaultTimeout } from 'cucumber';
import { browser } from 'protractor';

BeforeAll(async() => {
    console.log('hook executed');
    browser.waitForAngularEnabled(false);
    setDefaultTimeout(60 *10000);
});