const express = require("express");
const bodyParse = require("body-parser")
const mongoose = require("mongoose")
const Usuario = require("./src/models/usuarioModel")

const app = express()

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/ApiHelpeMongo", {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

app.use(bodyParse.urlencoded({extended : true}))
app.use(bodyParse.json())

const routes = require("./src/routes/usuarioRoutes.js")
routes(app)

const port = process.env.PORT || 3000

app.listen(port)

console.log("aplicação iniciada na porta: " + port)
