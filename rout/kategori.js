const express = require("express")
const route = express.Router()
const kategoriController = require('../controller/kategori')

route.get('/kategori', kategoriController.index)
route.get('/formAddKategori', kategoriController.addKategori)
route.post('/addKategori', kategoriController.store)
route.get('/formUpdateKategori', kategoriController.updateKategori)
route.put('/updateKategori/:idKategori', kategoriController.update)
route.delete('/kategori/:idkategori', kategoriController.delKategori)

module.exports = route