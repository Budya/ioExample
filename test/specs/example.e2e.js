require('./hooks')
const allureReporter = require('@wdio/allure-reporter').default
const loginPage = require('../../src/pages/loginPage.po');

describe('My Login application', () => {  
    it('should login with valid credentials', async () => {        
        allureReporter.addDescription('User login in to application')
        expect(await loginPage.isFormOpened()).toBeTrue();
        await loginPage.typeLogin('tomsmith');
        await loginPage.typePassword('SuperSecretPassword!');
        await loginPage.clickLoginBtn();
        

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });
});

