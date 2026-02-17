import {test, expect} from "../../fixtures/ui.fixture"
import { DynamicControlsPage } from "../pages/DynamicControlsPage";

test.describe('Verify dynamic controls', () => {
    test(
        'Open dynamic cintrols page',
        {
            tag: ['@smoke', '@ui'],
            annotation: [
            { type: 'owner', description: 'qa-team' },
            { type: 'severity', description: 'critical' }
            ]
        },
        async ({ openApp}) => {
            const dynamicControlsPage = await openApp(DynamicControlsPage, "Dynamic Controls");

            await dynamicControlsPage.expectOpened();
        }
    );

    test(
        "Check/uncheck ckeckbox",
        {
            tag: ['@smoke', '@ui'],
            annotation: [
            { type: 'owner', description: 'qa-team' },
            { type: 'severity', description: 'critical' }
            ]
        },
        async ({openApp}) => {
            const dynamicControlsPage = await openApp(DynamicControlsPage, "Dynamic Controls");

            await dynamicControlsPage.checkCheckbox();
            await dynamicControlsPage.expectCheckboxChecked();
            await dynamicControlsPage.checkCheckbox();
            await dynamicControlsPage.expectCheckboxNotChecked;
        }
    )

    test(
        "Add checkbox",
        {
            tag: ['@smoke', '@ui'],
            annotation: [
            { type: 'owner', description: 'qa-team' },
            { type: 'severity', description: 'critical' }
            ]
        },
        async ({openApp}) => {
            const dynamicControlsPage = await openApp(DynamicControlsPage, "Dynamic Controls");
            await dynamicControlsPage.removeCheckbox();
            await dynamicControlsPage.addCheckbox();
            await dynamicControlsPage.expectCheckboxVisible();
            expect(await dynamicControlsPage.getMessageLabelText()).toBe("It's back!");
        }
    )

    test(
        "Remove checkbox",
        {
            tag: ['@smoke', '@ui'],
            annotation: [
            { type: 'owner', description: 'qa-team' },
            { type: 'severity', description: 'critical' }
            ]
        },
        async ({openApp}) => {
            const dynamicControlsPage = await openApp(DynamicControlsPage, "Dynamic Controls");
            await dynamicControlsPage.removeCheckbox();

            await dynamicControlsPage.expectCheckboxAbsent();
            expect(await dynamicControlsPage.getMessageLabelText()).toBe("It's gone!");
        }
    )
});