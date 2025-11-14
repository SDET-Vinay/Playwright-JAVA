import {test, expect, Locator} from '@playwright/test';

test('locators in playwright', async ({page}) => {

    console.log("Launch URL");
    await page.goto("https://demo.applitools.com/");

    console.log("Verifying Heading using getByRole");
    const heading : locator = page.getByRole('heading', { name: 'Login Form' });
    await expect(heading).toBeVisible();

    console.log("Entering Username using getByPlaceholder");
    const usernameField: Locator = page.getByPlaceholder('Enter your username');
    await usernameField.fill("test");

    console.log("Entering password using Placeholder");
    const passwordField: Locator = page.getByPlaceholder('Enter your password');
    await passwordField.fill("1234");

    console.log("Click Remember me using getByLabel");
    await page.getByLabel("Remember Me").click();

    console.log("Click on Sign in Button using get by Click")
    page.getByText("Sign in").click();


    console.log("Verify Login using XPath");
    await expect ( page.locator("//div[@class = 'logged-user-name']")).toBeVisible();

});