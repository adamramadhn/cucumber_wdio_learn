
const BasePage = require('./base.page.js')

class DashboardPage extends BasePage {
    get DashboardElement() {
        return $('#root > div > div > div.css-tnxwfz > div > h3');
    }
}

module.export = new DashboardPage();
