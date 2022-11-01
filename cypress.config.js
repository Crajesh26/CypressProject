const { defineConfig } = require("cypress");

module.exports = defineConfig({
//For mocha reporting
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
    charts:true,
    reportPageTitle: 'Automation Report',
    embeddedScreenshots:true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen:true,
    overwrite:false,
    code:false
  },
  e2e: {
    
    setupNodeEvents(on, config) {
    //For mocha reporting
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    //if any script failing it will retry based on the count that we give
    watchForFileChanges:false,
    retries:{
      runMode:0, // it will maixum execute four time ex runMode:3
      openMode:0 // it will maxium execute two time  ex runMode:1
    }
  },
});
