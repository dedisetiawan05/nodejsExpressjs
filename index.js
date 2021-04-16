const express = require('express')
const appRouter = require('./rout/app')
const heroRouter = require('./rout/hero')
const teamRouter = require('./rout/team')
const kategoriRouter = require('./rout/kategori')
const meetRouter = require('./rout/meet')
const draftRouter = require('./rout/draft')
const loginRouter = require('./rout/login')
const app = express();
//untuk membuka asset
app.use(express.static('public'))
app.set('view engine', 'ejs')
//login
app.use(loginRouter)
//app
app.use(appRouter)
//hero
app.use(heroRouter)
//team
app.use(teamRouter)
//kategori
app.use(kategoriRouter)
//meet
app.use(meetRouter)
//draft
app.use(draftRouter)

app.listen(3000, function () {
    console.log('server is Ok');
})