import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';


const baseURL = process.env.UI_BASE_URL;

if (!baseURL) {
  throw new Error("UI_BASE_URL is missing in CI");
}

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  fullyParallel: true,
  expect: {
    timeout: 10_000
  },

  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 10 : 7,

  reporter: [
    ['html', {open: "never"}],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  

  use: {
    baseURL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
});
