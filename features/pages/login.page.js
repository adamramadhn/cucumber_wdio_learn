const BasePage = require('./base.page')

class LoginPage extends BasePage {

    get userNameTextBox() { return $('input[id="username"]') }
    get passwordTextBox() { return $('input[id="password"]') }
    get loginButton() { return $('button[type="submit"]') }

    get loginPageElement() { return $('div[class="example"] h2') }
    get messageElement() { return $('#flash') }

    open() {
        super.open('https://the-internet.herokuapp.com/login')
    }
}

module.exports = new LoginPage();