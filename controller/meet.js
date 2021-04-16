module.exports = {
    index: function (req, res) {
    res.send("Daftar Pertandingan")
    },
    addMeet: function (req, res) {
    res.send("Form Add Pertandingan")
    },
    store:function (req, res) {
    res.send("Add Pertandingan")
    },
    updateMeet:function (req, res) {
    res.send("Form Update Pertandingan")
    },
    update: function (req, res) {
    res.send("Update Pertandingan")
    },
    delMeet:function (req, res) {
    res.send("Delete Pertandingan")
    }
    
}