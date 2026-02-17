import { APIRequestContext, expect } from '@playwright/test';

export class AuthApi {
  constructor(private api: APIRequestContext) {}

  async getToken(): Promise<string> {
    const response = await this.api.post('/auth', {
      data: {
        username: 'admin',
        password: 'password123'
      }
    });

    expect(response.status()).toBe(200);
    return (await response.json()).token;
  }
}
