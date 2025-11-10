package base;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import org.testng.annotations.*;

public class baseTests {

    protected Playwright playwright;
    protected Page page;
    protected Browser browser;

    @BeforeMethod
    public void setup() {
        playwright = Playwright.create();
        browser = playwright.chromium().launch();
        page = browser.newPage();

    }

    @AfterMethod
    public void teardown() {
        if(browser != null) browser.close();
        if(playwright != null) playwright.close();
    }
}
