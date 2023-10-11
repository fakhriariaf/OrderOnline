/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";
import * as env from "dotenv";

env.config();

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true,
    },
  e2e: {
    specPattern: "cypress/tests/**/*.{spec,page,locator}.{js,jsx,ts,tsx}",
    pageLoadTimeout: 120000,
    baseUrl: "https://sandbox-app.oexpress.co.id",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
  env: {
    apiUrl: "https://sandbox.api.oexpress.co.id",
    registered_email: process.env.REGISTERED_EMAIL,
    registered_password: process.env.REGISTERED_PASSWORD,
    onboarding_general_email: process.env.ONBOARDING_EMAIL,
    onboarding_general_password: process.env.ONBOARDING_PASSWORD,
    x_api_key: process.env.XAPIKEY,
  },
});
