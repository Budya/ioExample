const Logger = require('../../src/framework/utils/logger');
const setup = require('../../src/framework/browserActions');
const { ENVIRONMENT } = require('../../src/environment/envConfig');
const env = require('../../src/environment/testEnvironment')

beforeEach(async() => {
    await setup();
    await browser.url(env.startUrl);

    
});

afterEach(async() => {    
    await browser.reloadSession();
});
