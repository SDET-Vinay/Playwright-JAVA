import base.baseTests;
import org.testng.annotations.Test;


public class firstTest extends baseTests {
    @Test
    public void verifyTitle() {
        page.navigate("https://google.com");
        System.out.println("page title   " + page.title());
    }
}



