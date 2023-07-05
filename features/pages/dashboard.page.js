
const BasePage = require('./base.page.js')

class DashboardPage extends BasePage {

    get ButtonKategori() {
        return $('a[href="/categories"]');
    }

    get buttonTambahKategori() {
        return $('a[href="/categories/create"]');
    }

    get inputNamaKategori() {
        return $('#nama');
    }
    get inputDeskripsiKategori() {
        return $('#deskripsi');
    }
    get buttonSubmitKategori() {
        return $('button[type="button"]')
    }
    get message() {
        return $('div[role="alert"]')
    }
}

module.export = new DashboardPage();
