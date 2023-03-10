const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.promofarma.com.br/",
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 20000,
    responseTimeout: 300000,
    pageLoadTimeout: 300000,
    setupNodeEvents(on, config) {
      
    },
  },
});
