module.exports = {
    index:function (req, res) {
        res.render('../views/hero/showHero')
    },
    addHero : function (req, res) {
        res.send("Form Tambah Hero")
    },
    store: function (req, res) {
        res.send("Tambah Hero")
    },
    updateHero:function (req, res) {
        res.send("Form Update Hero")
    },
    update:function (req, res) {
        res.send("Update Hero")
    },
    delHero:function (req, res) {
        res.send("Hapus Hero")
    } 

}