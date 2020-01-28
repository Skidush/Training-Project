import { BeforeAll , setDefaultTimeout  } from 'cucumber';
import { browser } from 'protractor';

BeforeAll( async () => {
    console.log('HOOK EXECUTED');
    browser.waitForAngularEnabled(false);
    setDefaultTimeout( 60 * 10000);

});
