// @js-check
import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';
import { getEnvVariable } from './utils/helpers.js';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  //retries: process.env.CI ? 2 : 1,
  //workers: process.env.CI ? 1 : undefined,
  workers: 1,
  reporter: [
    ['html', { open: 'always' }],
    ['list'],
  ],
  use: {
    headless: false,
    baseURL: getEnvVariable('BASE_URL', 'http://automationexercise.com'),
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
  },
  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        headless: false,
      },
    },
  ],
});
