module.exports = function(app){
	const usuarios = require("../controllers/usuarioController")
	 app.route("/usuarios")
	 .get(usuarios.listAll)
	 .post(usuarios.createOne)

	 app.route("/usuario/:email")
	 .get(usuarios.showOne)
}