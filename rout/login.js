const express = require("express")
const route = express.Router()
const loginController = require('../controller/login')

route.get('/', loginController.login)

module.exports = route