import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:3333',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npx serve out -l 3333 -s',
    port: 3333,
    reuseExistingServer: !process.env.CI,
  },
})
