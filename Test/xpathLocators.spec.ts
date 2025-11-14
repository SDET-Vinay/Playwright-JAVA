import (test, expect, Locator) from '@playwright/test';

test('xpathLocators', async ({page}) => {

    await page.goto("https://practicetestautomation.com/practice-test-login/");

    console.log("Webpage launched");

    const usernameField: locator = page.locator("//input[@name , 'username']");
    await usernameField.fill("student");
    console.log("username entered");

    const passwordField: locator = page.locator("//input[@name, 'password']");
    await passwordField.fill("Password123");
    console.log("Password Entered");

    const submitButton: locator = page.locator("//button{[@id, 'submit']");
        submitButton.click();
        console.log("Submit button pressed ");

    page.getByText("Logged in successfully");
        await expect(page.getByText("Logged in successfully")).toBeVisible();
        }