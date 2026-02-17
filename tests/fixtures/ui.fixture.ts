import { test as base, Page } from "@playwright/test"
import { MainPage } from "../ui/pages/MainPage";

type MyFixtures = {
    mainPage: MainPage;
    openApp: <T extends { waitForLoaded?: () => Promise<void> }>(
        PageClass: new (page: Page) => T, linkName: string) => Promise<T>;
}

export const test = base.extend<MyFixtures>({
    mainPage: async ({page}, use) => {
        const mainPage = new MainPage(page);
        await mainPage.open();
        await use(mainPage);
    },
    openApp: async ({ mainPage, page }, use) => {
        const factory = async <T extends { waitForLoaded?: () => Promise<void> }>(
            PageClass: new (p: Page) => T,
            linkName: string
        ): Promise<T> => {
            await mainPage.selectMenuItem(linkName);
            
            const pageObj = new PageClass(page);

            if (pageObj.waitForLoaded) {
                await pageObj.waitForLoaded();
            }

            return pageObj;
        };

        await use(factory);
    }
});

export {expect} from "@playwright/test"