const Logger = require('../../src/framework/utils/logger');
const setup = require('../../src/framework/browserActions');

beforeEach(async() => {
    await setup();
    await browser.url(`https://the-internet.herokuapp.com/login`);

    
});

afterEach(async() => {    
    await browser.reloadSession();
});
