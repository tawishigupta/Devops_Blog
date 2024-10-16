import { Builder, By, until } from 'selenium-webdriver';  // Using ES module import
import { expect } from 'chai';  // Using ES module import
import path from 'path';  // Using ES module import

// Correctly specify the ChromeDriver path
const chromeDriverPath = path.join("C:\Users\Tawishi\Downloads\chromedriver-win64\chromedriver-win64\chromedriver.exe");  // Ensure the path is correct

describe('Login Page Test', function () {
    let driver;

    // Increase timeout as WebDriver might take time
    this.timeout(30000);

    // Set up before the test
    before(async function () {
        // Set the path for ChromeDriver
        process.env.CHROME_BIN = chromeDriverPath;
        
        driver = await new Builder()
            .forBrowser('chrome')
            .build(); // Use 'chrome' or any other browser
    });

    // Test login functionality
    it('should login successfully with valid credentials', async function () {
        // Open the login page
        await driver.get('http://localhost:3000/login');  // Replace with your actual login URL

        // Maximize window
        await driver.manage().window().maximize();

        // Wait until email input field is visible and enter email
        const emailInput = await driver.wait(until.elementLocated(By.id('email')), 10000);
        await emailInput.sendKeys('tester@gmail.com');  // Replace with valid test email

        // Wait until password input field is visible and enter password
        const passwordInput = await driver.wait(until.elementLocated(By.id('password')), 10000);
        await passwordInput.sendKeys('123456');  // Replace with valid test password

        // Wait until the login button is clickable and click it
        const loginButton = await driver.wait(until.elementLocated(By.css("button[type='submit']")), 10000);
        await loginButton.click();

        // Wait for redirection and check if login was successful by verifying the URL
        await driver.wait(until.urlIs('http://localhost:3000/'), 10000);  // Update with the URL post-login

        // Assert URL to confirm successful login
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).to.equal('http://localhost:3000/');  // Adjust this to the expected post-login URL
    });

    // Clean up after the test
    after(async function () {
        await driver.quit();
    });
});
