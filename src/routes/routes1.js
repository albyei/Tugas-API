const express = require('express')
const bodyParser = require("body-parser") // memanggil library body-parser
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const controller1= require('../controllers/controller1')

app.post("/bangunRuangKubus", controller1.bangunRuangKubus)
app.post("/bangunRuangLimas", controller1.bangunRuangLimas)
app.post("/bangunRuangTabung", controller1.bangunRuangTabung)
app.post("/bangunRuangBola", controller1.bangunRuangBola)

module.exports = app