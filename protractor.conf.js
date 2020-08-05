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
      ],
      'excludeSwitches': ['enable-logging']
    }
  },
  directConnect: true,
  baseUrl: 'localhost:4200',
  specs: [
    './e2e/features/sampleCRUD.feature'
  ],
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
      './e2e/features/support/parameterTypes.ts',
      './e2e/hooks/generic.hooks.ts',
      './e2e/step_definitions/security.definitions.ts',
      './e2e/step_definitions/samplecrud.definitions.ts'
    ],
    tags: [],
    strict: true,
    format: [
      `json:reports/report.json`,
    ],
    dryRun: false,
    compiler: []
  },
  params: {
    users: {
      Admin: {
        username: 'asd',
        password: 'asd'
      },
      Employee: {
        username: 'asd',
        password: 'asd'
      }
    }
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  // ignoreUncaughtExceptions: true,
};