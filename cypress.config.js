const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a1s478',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
