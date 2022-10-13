// playwright.config.ts
import { PlaywrightTestConfig } from "@playwright/test";

require('dotenv').config()

const config: PlaywrightTestConfig = {
 
  workers: process.env.CI ? 1: undefined, // Set it to 1 unless we want to start parllelising tests.
  reporter: 'html',
  retries: 0,
  use: {
    trace: 'on',
  },
  projects: [
    {
      name: 'api',
      timeout: 30 * 1000 // 30 seconds timeout option,
    },
  ],

};
export default config;
