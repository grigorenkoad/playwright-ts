import { Page, Locator, expect} from "@playwright/test"
import { BasePage } from "./BasePage";

export class DynamicControlsPage extends BasePage {
    readonly title: Locator;
    readonly checkbox: Locator;
    readonly addButton: Locator;
    readonly removeButton: Locator;
    readonly addedCheckBoxLabel: Locator;
    readonly messageLabel: Locator;

    url = "/dynamic_controls";

    constructor(public readonly page: Page) {
        super(page);
        this.title = page.getByRole("heading", {name: "Dynamic Controls"});
        this.checkbox = page.getByRole("checkbox");
        this.addButton = page.locator('button', {hasText: "Add"});
        this.removeButton = page.locator('button', {hasText: "Remove"});
        this.addedCheckBoxLabel = page.locator('div', { hasText: 'A checkbox' });
        this.messageLabel = page.locator("css=#message");
    }

    async open() {
        await this.page.goto(this.url);
    }

    async checkCheckbox() {
        await this.checkbox.click();
    }

    async addCheckbox() {
        await expect(this.addButton).toBeEnabled();
        await this.addButton.click();
    }
    
    async removeCheckbox() {
        await expect(this.removeButton).toBeEnabled();
        await this.removeButton.click();
    }
    
    async expectCheckboxChecked() {
        await expect(this.checkbox).toBeChecked();
    }

    async expectCheckboxNotChecked() {
        await expect(this.checkbox).not.toBeChecked();
    }

    async expectCheckboxVisible() {
        await expect(this.checkbox).toBeVisible();
    }

    async expectCheckboxAbsent() {
        await expect(this.checkbox).toBeHidden();
    }

    async expectAddedChckBoxLabelVisible() {
        await expect(this.addedCheckBoxLabel).toBeVisible();
    }

    async expectMessageLabelVisible() {
        await expect(this.messageLabel).toBeVisible();
    }

    async getMessageLabelText() : Promise<string | null> {
        return await this.messageLabel.textContent();
    }

    async waitForLoaded() {
        await expect(this.title).toBeVisible();
    }
}
