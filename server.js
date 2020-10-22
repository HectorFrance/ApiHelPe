const express = require("express");
const bodyParse = require("body-parser")
const app = express();

app.use(bodyParse.urlencoded({extended : true}))
app.use(bodyParse.json())

const routes = require("./src/routes/usuarioRoutes.js")

app.route("/").get((res, res) => {
	res.send("acessou pelo get");
})



const port = process.env.PORT || 3000

app.listen(port);

console.log("aplicação iniciada na porta: " + 3000);
