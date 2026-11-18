import {test, expect} from '@playwright/test';

test("https//www.github.com", async ({ page }) => {
    await page.goto("https://www.github.com");

});