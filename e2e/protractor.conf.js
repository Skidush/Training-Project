// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
exports.config = {
  allScriptsTimeout: 11000,
  getPageTimeout: 60000,
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': [
        '--start-maximized', // Uncomment to launch tests using the browser and comment the argument `properties` below
        //  '--headless',
        //  '--disable-gpu',
        //  '--window-size=1920,1080',
        //  '--no-sandbox',
        //  '--disable-dev-shm-usage'
      ]
    }
  },
  directConnect: true,
  baseUrl: 'localhost:4200',
  specs: [
    'src/feature/employee/employee.feature',
  ],
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
      'src/step_definition/*.definitions.ts',
      'src/hooks/generic.hooks.ts'
    ],
    tags: '@Employee',
    strict: true,
    format: [
      `json:reports/mryumul.json`,
    ],
    dryRun: false,
    compiler: []
  },
  params: {},
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  // ignoreUncaughtExceptions: true,
};
