import {test, expect} from '@playwright/test';

test('Launch website and verify title', async ({ page }) => {

    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle('Google');   

});