const Element = require('../../framework/element');

module.exports = {
    loginInput: new Element('#username', 'Login input'),
    passwordInput: new Element('#password', 'Passwor input'),
    loginButton: new Element('button[type="submit"]', 'Login button')
}