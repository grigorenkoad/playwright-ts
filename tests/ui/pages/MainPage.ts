import {Page, Locator} from "@playwright/test"
import { DynamicControlsPage } from "./DynamicControlsPage";
import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
    readonly list: Locator;

    url = "/";

    constructor(public readonly page: Page) {
        super(page);
        this.page = page;
        this.list = page.locator("xpath=//ul");
    }

    async open() {
        await this.page.goto("/");
    }

    async selectMenuItem(title: string) {
        await this.list.getByRole('link', {name: title}).click();
    }
}