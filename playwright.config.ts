import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  fullyParallel: true,
  expect: {
    timeout: 10_000
  },

  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 6 : 3,

  reporter: [
    ['html', {open: "never"}],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    baseURL: process.env.UI_BASE_URL
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
});
