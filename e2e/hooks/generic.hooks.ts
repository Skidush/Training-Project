import { BeforeAll, setDefaultTimeout } from 'cucumber';
import { browser } from "protractor";

BeforeAll(async () => {
    browser.waitForAngularEnabled(false);
    setDefaultTimeout(60 * 10000);
}); 