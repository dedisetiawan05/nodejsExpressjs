module.exports = {
     index: function (req, res) {
    res.send("Daftar Team")
    },
    addTeam: function (req, res) {
    res.send("Form Tambah Team")
    },
    store:function (req, res) {
    res.send("Tambah Team")
    },
    updateTeam:function (req, res) {
    res.send("Form Update Team")
    },
    update:function (req, res) {
    res.send("Update Team")
    },
    delTeam: function (req, res) {
    res.send("Hapus Team")
}

}