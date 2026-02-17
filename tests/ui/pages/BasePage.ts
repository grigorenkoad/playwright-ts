import { Page, expect } from "@playwright/test";

export abstract class BasePage {
  constructor(protected page: Page) {}

  abstract url: string;

  async expectOpened() {
    await expect(this.page).toHaveURL(this.url);
  }
}