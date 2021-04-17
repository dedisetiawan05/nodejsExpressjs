const bcrypt = require('bcryptjs')
const mysqlConnection = require('../lib/connection')
module.exports = {
    index: function (req, res) {
      res.redirect("/hero")  
    },
    validasi: function (req, res) {
        
            let { email, password } = req.body
            mysqlConnection.query(`SELECT * FROM admin WHERE email = '${email}'`, (error, result) => {
                if (error) {
                    console.log(error)
                }
                console.log(`password sebelum di hash ${password}`);
                if (result.length == 0) {
                    console.log("email tidak terdaftar");
                    res.redirect('/login')
                } else if (!(bcrypt.compareSync(password,result[0].password)) ) {
                        console.log("password salah");
                        res.redirect('/login')
                    } else {
                    console.log("Berhasil");
                    res.redirect('/hero')
                }
            })
    },
    login: function (req, res, next) {
        let isAdmin = true;
        if (isAdmin == true) {
            res.render("../views/login/login")
            next()
        } else {
            res.send("Gagal Login");
        }
    },
    register: function (req, res) {
        res.render("../views/login/register")
    },
    prosesRegister: function (req, res) {
        let { name, email, password, passwordConfirm } = req.body
        mysqlConnection.query(`SELECT * FROM admin WHERE email = '${email}'`, (err, result) => {
            console.log(result.length);
            if (err) {
                console.log(err);
            }
            console.log(result.length);
            if (result.length > 0) {
                console.log("Email Sudah digunakan");
                res.redirect('/register')
            } else if (password !== passwordConfirm) {
                console.log("Password Tidak Sama");
                res.redirect('/register')
            } else {
                password = bcrypt.hashSync(password, 8)
                mysqlConnection.query(`INSERT INTO admin SET ?`, { nameAdmin: name, email: email, password: password }, (err, result) => {
                    if (!err) {
                        res.redirect('/login')
                        //console.log(result);
                    } else {
                        res.send(err)
                    }
                })
            }
        })
    }
}