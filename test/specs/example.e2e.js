require('./hooks')
const Logger = require('../../src/framework/utils/logger');
const loginPage = require('../../src/pages/loginPage.po');

describe('My Login application', () => {  
    it('should login with valid credentials', async () => {        

        expect(await loginPage.isFormOpened()).toBeTrue();
        await loginPage.typeLogin('tomsmith');
        await loginPage.typePassword('SuperSecretPassword!');
        await loginPage.clickLoginBtn();


        // await $('#username').setValue('tomsmith');
        // await $('#password').setValue('SuperSecretPassword!');
        // await $('button[type="submit"]').click();

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });
});

