import {test, expect, Locator} from '@playwright/test';

test('locators', async ({page}) => {

    await page.goto("https://www.google.com/");

    const searchbar : Locator = await  page.locator("xpath =//div[@class='SDkEP']").fill("Testesrs")


    const searchbutton: Locator = await page.getByRole("button", {name: "button"}).click();
    const searchbutton: Locator = await page.getBy

       const searchbutton: Locator = await page.getByRole("button", {name: "button"}).click();

    const searchbutton: Locator = await page.getByRole("button", {name: "button"}).click();
    const searchbutton: Locator = await page.getByRole("button", {name: "button"}).click();


});