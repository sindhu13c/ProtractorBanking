// An example configuration file.
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
 directConnect: true,
//seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
 /* capabilities: {
    'browserName': 'chrome'
  },*/

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs:['./src/allscripts/BankSpec.js'],
  //specs: ['./src/example_spec.js','./src/spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare:function(){
	  browser.ignoreSynchronization=false;
  },
  
  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots',
          takeScreenshots: true,
          takeScreenshotsOnlyOnFailures: false
        })
      );
   },
};
