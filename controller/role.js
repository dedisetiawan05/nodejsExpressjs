module.exports = {
    index: function (req, res) {
    res.send("Daftar Role")
    },
    addRole:function (req, res) {
    res.send("Form Tambah Role")
    },
    store:function (req, res) {
    res.send("Tambah Role")
    },
    updateRole:function (req, res) {
    res.send("Form Update Role")
    },
    update:function (req, res) {
    res.send("Update Role")
    },
    delRole:function (req, res) {
    res.send("Hapus")
    }

}