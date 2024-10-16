import { Builder, By, until } from 'selenium-webdriver'; // Using ES6 imports
import { expect } from 'chai';
import path from 'path';

const chromeDriverPath = path.join(process.cwd(), 'C:\Users\Tawishi\Downloads\chromedriver-win64\chromedriver-win64\chromedriver.exe');

describe('Register Page Test', function () {
    let driver;

    // Increase timeout as WebDriver might take time
    this.timeout(30000);

    // Set up before the test
    before(async function () {
        driver = await new Builder()
            .forBrowser('chrome')
            .build(); // Use 'chrome' or any other browser
    });

    // Test registration functionality
    it('should register successfully with valid credentials', async function () {
        // Open the registration page
        await driver.get('http://localhost:3000/register'); // Replace with your actual register URL

        // Maximize window
        await driver.manage().window().maximize();

        // Wait until username input field is visible and enter username
        const usernameInput = await driver.wait(until.elementLocated(By.id('name')), 10000);
        await usernameInput.sendKeys('TestUser'); // Replace with valid test username

        // Wait until email input field is visible and enter email
        const emailInput = await driver.wait(until.elementLocated(By.id('email')), 10000);
        await emailInput.sendKeys('testuser@gmail.com'); // Replace with valid test email

        // Wait until password input field is visible and enter password
        const passwordInput = await driver.wait(until.elementLocated(By.id('password')), 10000);
        await passwordInput.sendKeys('123456'); // Replace with valid test password

        // Wait until confirm password input field is visible and enter password
        const confirmPasswordInput = await driver.wait(until.elementLocated(By.id('confirmpassword')), 10000);
        await confirmPasswordInput.sendKeys('123456'); // Replace with the same valid test password

        // Wait until the register button is clickable and click it
        const registerButton = await driver.wait(until.elementLocated(By.css("button[type='submit']")), 10000);
        await registerButton.click();

        // Wait for redirection and check if registration was successful by verifying the URL
        await driver.wait(until.urlIs('http://localhost:3000/'), 10000); // Update with the URL post-registration

        // Assert URL to confirm successful registration
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).to.equal('http://localhost:3000/'); // Adjust this to the expected post-registration URL
    });

    // Test registration with mismatched passwords
    it('should show an error message for mismatched passwords', async function () {
        // Open the registration page
        await driver.get('http://localhost:3000/register'); // Replace with your actual register URL

        // Maximize window
        await driver.manage().window().maximize();

        // Enter username
        const usernameInput = await driver.wait(until.elementLocated(By.id('name')), 10000);
        await usernameInput.sendKeys('TestUser2'); // Replace with valid test username

        // Enter email
        const emailInput = await driver.wait(until.elementLocated(By.id('email')), 10000);
        await emailInput.sendKeys('testuser2@gmail.com'); // Replace with valid test email

        // Enter password
        const passwordInput = await driver.wait(until.elementLocated(By.id('password')), 10000);
        await passwordInput.sendKeys('123456'); // Replace with valid test password

        // Enter a different confirm password
        const confirmPasswordInput = await driver.wait(until.elementLocated(By.id('confirmpassword')), 10000);
        await confirmPasswordInput.sendKeys('abcdef'); // Mismatched password

        // Click the register button
        const registerButton = await driver.wait(until.elementLocated(By.css("button[type='submit']")), 10000);
        await registerButton.click();

        // Wait for error message and check it
        const errorMessage = await driver.wait(until.elementLocated(By.css('.error_message')), 10000);
        const errorText = await errorMessage.getText();
        expect(errorText).to.equal('Passwords do not match'); // Adjust to your actual error message
    });

    // Clean up after the test
    after(async function () {
        await driver.quit();
    });
});
