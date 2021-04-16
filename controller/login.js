module.exports = {
    succes: function (req, res) {
    res.redirect("Ini Login")
    },
    login: function (req, res, next) {
        let isAdmin = true;
        if (isAdmin == true) {
            res.render("../views/login/login")
            next()
        } else {
            res.send("Gagal Login");
        }
    } 
}