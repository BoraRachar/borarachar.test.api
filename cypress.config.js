const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": null,
    "screenshotOnRunFailure": false,
    "watchForFileChanges": false,
    "viewportHeight": 720,
    "viewportWidth": 1280,
    "screenshotsFolder": "cypress/screenshots",
    "video": false,
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/mochawesome-report",
      "overwrite": false,
      "html": false,
      "json": true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
