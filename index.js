const express = require('express')
const bcrypt = require('bcryptjs')
//external router
const appRouter = require('./rout/app')
const heroRouter = require('./rout/hero')
const teamRouter = require('./rout/team')
const roleRouter = require('./rout/role')
const meetRouter = require('./rout/meet')
const draftRouter = require('./rout/draft')
const loginRouter = require('./rout/login')

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

    //untuk membuka asset
app.use(express.static('public'))
app.set('view engine', 'ejs')
//Routing
//login
app.use(loginRouter)
//app
app.use(appRouter)
//hero
app.use(heroRouter)
//team
app.use(teamRouter)
//kategori
app.use(roleRouter)
//meet
app.use(meetRouter)
//draft
app.use(draftRouter)

app.listen(3000, function () {
    console.log('server is Ok');
})