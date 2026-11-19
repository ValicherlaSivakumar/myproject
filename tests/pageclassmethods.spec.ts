import {test, expect} from '@playwright/test';

const expectedURL = "GitHub · Change is constant. GitHub keeps you ahead. · GitHub · GitHub"

test("https//www.github.com", async ({ page }) => {
    await page.goto("https://www.github.com");

    await expect(page).toHaveTitle(expectedURL);

    const currentURL =await page.url();
    expect(currentURL).toBe("https://github.com/");

    await page.setViewportSize({ width: 1100, height: 1000 });

    await page.goto("https://www.google.co.in");
    await expect(page).toHaveTitle("Google");

    await page.goBack();
    await expect(page).toHaveTitle(expectedURL);
    await page.goForward();
    await expect(page).toHaveTitle("Google");

});