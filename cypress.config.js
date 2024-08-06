const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  defaultCommandTimeout: 10000,
  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }

  }

});
