const express = require("express")
const route = express.Router()
const appController = require('../controller/app')
route.get('/', appController.index)
route.get('/about', appController.about)
module.exports = route