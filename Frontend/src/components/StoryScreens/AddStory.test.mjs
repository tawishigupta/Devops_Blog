// import { Builder, By, until } from 'selenium-webdriver';
// import { expect } from 'chai';
// import path from 'path';



// const chromeDriverPath = path.join(process.cwd(), '"C:\Users\Tawishi\Downloads\chromedriver-win64\chromedriver-win64\chromedriver.exe"');

// describe('Add Story Page Test', function () {
//     let driver;

//     this.timeout(30000); // Increase timeout for all tests

//     before(async function () {
//         driver = await new Builder()
//             .forBrowser('chrome')
//             .setChromeOptions(/* options if any */)
//             .build();
//     });


//     it('should login successfully with valid credentials', async function () {
//         // Open the login page
//         await driver.get('http://localhost:3000/login');  // Replace with your actual login URL

//         // Maximize window
//         await driver.manage().window().maximize();

//         // Wait until email input field is visible and enter email
//         const emailInput = await driver.wait(until.elementLocated(By.id('email')), 10000);
//         await emailInput.sendKeys('testuser@gmail.com');  // Replace with valid test email

//         // Wait until password input field is visible and enter password
//         const passwordInput = await driver.wait(until.elementLocated(By.id('password')), 10000);
//         await passwordInput.sendKeys('123456');  // Replace with valid test password

//         // Wait until the login button is clickable and click it
//         const loginButton = await driver.wait(until.elementLocated(By.css("button[type='submit']")), 10000);
//         await loginButton.click();

//         // Wait for redirection and check if login was successful by verifying the URL
//         await driver.wait(until.urlIs('http://localhost:3000/'), 10000);  // Update with the URL post-login

//         // Assert URL to confirm successful login
//         const currentUrl = await driver.getCurrentUrl();
//         expect(currentUrl).to.equal('http://localhost:3000/');  // Adjust this to the expected post-login URL
//     });
    
//     it('should add a story successfully with valid inputs', async function () {
//         await driver.get('http://localhost:3000/addstory');
//         await driver.manage().window().maximize();
    
//         console.log("Navigated to Add Story page.");
    
//         const titleInput = await driver.wait(until.elementLocated(By.id('title')), 15000);
//         await titleInput.sendKeys('Test Story Title');
    
//         const editorInput = await driver.wait(until.elementLocated(By.className('ck-content')), 15000);
//         await editorInput.sendKeys('This is a test content for the story.');
    
//         // Wait for the image input to be visible
//         await driver.sleep(5000); // Add a sleep statement to ensure the element has enough time to load
//         const imageInput = await driver.wait(until.elementLocated(By.css('input[type="file"]')), 30000);
    
//         // Log to confirm we located the image input
//         console.log("Image input located.");
    
//         const imagePath = "C:\\Users\\Tawishi\\Documents\\Devops3\\mern-blog-v2\\Frontend\\src\\components\\StoryScreens\\logo192.png";
//         await imageInput.sendKeys(imagePath);
//         console.log("Image uploaded: ", imagePath);
    
//         // Ensure the publish button is enabled
//         const publishButton = await driver.wait(until.elementLocated(By.css("button[type='submit']")), 15000);
//         const isEnabled = await publishButton.isEnabled();
//         console.log("Publish button enabled: ", isEnabled);
    
//         // Click the publish button
//         if (isEnabled) {
//             await publishButton.click();
//         } else {
//             console.log("Publish button is disabled.");
//         }
    
//         // Wait for the success message to appear
//         const successMessage = await driver.wait(until.elementLocated(By.className('success_msg')), 50000);
//         const messageText = await successMessage.getText();
//         expect(messageText).to.include('Add story successfully');
//     });
    
    
    
//     // it('should show an error message when title is missing', async function () {
//     //     await driver.get('http://localhost:3000/addstory');
//     //     await driver.manage().window().maximize();

//     //     const contentInput = await driver.wait(until.elementLocated(By.className('ck-content')), 15000);
//     //     await contentInput.sendKeys('This is a test content for the story.');

//     //     const imageInput = await driver.wait(until.elementLocated(By.css('input[type="file"]')), 15000);
//     //     await imageInput.sendKeys("C:\\Users\\Tawishi\\Documents\\Devops3\\mern-blog-v2\\Frontend\\public\\logo192.png");

//     //     const publishButton = await driver.wait(until.elementLocated(By.css("button[type='submit']")), 15000);
//     //     await publishButton.click();

//     //     const errorMessage = await driver.wait(until.elementLocated(By.className('error_msg')), 15000);
//     //     const messageText = await errorMessage.getText();
//     //     expect(messageText).to.include('Please provide a title');
//     // });

//     // it('should show an error message when content is missing', async function () {
//     //     await driver.get('http://localhost:3000/addstory');
//     //     await driver.manage().window().maximize();

//     //     const titleInput = await driver.wait(until.elementLocated(By.id('title')), 15000);
//     //     await titleInput.sendKeys('Test Story Title');

//     //     const imageInput = await driver.wait(until.elementLocated(By.css('input[type="file"]')), 15000);
//     //     await imageInput.sendKeys("C:\\Users\\Tawishi\\Documents\\Devops3\\mern-blog-v2\\Frontend\\public\\logo192.png");

//     //     const publishButton = await driver.wait(until.elementLocated(By.css("button[type='submit']")), 15000);
//     //     await publishButton.click();

//     //     const errorMessage = await driver.wait(until.elementLocated(By.className('error_msg')), 15000);
//     //     const messageText = await errorMessage.getText();
//     //     expect(messageText).to.include('Please provide a content');
//     // });
// });
