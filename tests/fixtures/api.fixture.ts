import { APIRequest, APIRequestContext, test as base, request as playwrightRequest } from '@playwright/test';

export const test = base.extend<{
  api: APIRequestContext;
}>({
  api: async ({}, use) => {
    const apiContext = await playwrightRequest.newContext({
      baseURL: process.env.API_BASE_URL
    });

    await use(apiContext);
    await apiContext.dispose();
  }
});

export { expect } from '@playwright/test';
