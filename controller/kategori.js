module.exports = {
    index: function (req, res) {
    res.send("Daftar Kategori")
    },
    addKategori:function (req, res) {
    res.send("Form Tambah Kategori")
    },
    store:function (req, res) {
    res.send("Tambah Kategori")
    },
    updateKategori:function (req, res) {
    res.send("Form Update Kategori")
    },
    update:function (req, res) {
    res.send("Update Kategori")
    },
    delKategori:function (req, res) {
    res.send("Hapus")
    }

}